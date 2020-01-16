<template>
  <div class="position-box">
    <div>
      <div class="city-list" v-for="city in cityList" :key="city.tag">
        <div class="tag">{{ city.tag | toUpper}}</div>
        <div class="cities" v-for="item in city.items" :key="item.id">
          {{ item.nm }}
        </div>
      </div>
    </div>
    <div class="quick-nav">
      <div class="quick-nav-item" v-for="tag in quickNav" :key="tag">{{tag}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BScroll from 'better-scroll'
@Component({
  filters: {
    toUpper:(letter: string) => { return letter.toUpperCase() }
  }
})
export default class Position extends Vue {
  private cityList: CityList[] = []
  private scroller: BScroll

  private async created() {
    this.cityList = await this.initCityList()
    console.log(this.cityList)
    console.log(this.quickNav)
  }
  private mounted() {
    this.scroller = new BScroll('.position-box', {
      probeType: 3,
      click: true
    })
    // this.scroller.on('scroll', (pos) => {
    //   this.scrollY = pos.y
    // })
  }

  private get quickNav() {
    return this.cityList.map(
      a => {
        return a.tag
      }
    )
  }


  private async getCities() {
    let cityList: any = null
    await this.$api.getCities().then(
      res => {
        cityList = this.$util.arraySort(res.cts)
        localStorage.setItem('cityList', JSON.stringify(cityList))
      }
    )
    return cityList
  }
  private async initCityList() {
    const cityList = localStorage.getItem('cityList')
    if (cityList) 
      return this.$util.cityListFormat(JSON.parse(cityList))
    return this.$util.cityListFormat(await this.getCities())
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
.position-box {
  color: #333;
  @include setFixed();
  background: #f5f5f5;
  z-index: 11;
}
.city-list {
  .tag {
    height: 30px;
    line-height: 30px;
    padding: 0 0 0 25px;
    background: #ebebeb;
  }
  .cities {
    height: 44px;
    line-height: 44px;
    margin-left: 15px;
    border-bottom: 1px solid #c8c7cc;
  }
}
.quick-nav {
  width: 20px;
  text-align: center;
  position: fixed;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: #c8c7cc;
  border-radius: 10px;
  z-index: 13;
}
</style>
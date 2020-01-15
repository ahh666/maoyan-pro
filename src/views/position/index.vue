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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BScroll from 'better-scroll'
@Component({
  filters: {
    toUpper:(letter: string) => {return letter.toUpperCase()}
  }
})
export default class Position extends Vue {
  private cityList: CityList[] = []
  private scroller: BScroll

  private async created() {
    this.cityList = await this.initCityList()
    console.log(this.cityList)
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
.position-box {
  color: #333;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
</style>
<template>
  <div class="position-box">
    <div>
      <div
        class="city-list"
        ref="cityList"
        v-for="city in cityList"
        :key="city.tag"
      >
        <div class="tag">{{ city.tag | toUpper }}</div>
        <div
          class="cities"
          v-for="item in city.items"
          :key="item.id"
          @click="chooseCity(item.nm)"
        >
          {{ item.nm }}
        </div>
      </div>
    </div>
    <div class="quick-nav">
      <div
        :class="['quick-nav-item', index === activeTagIndex && 'active']"
        v-for="(tag, index) in quickNavTag"
        :key="tag"
        :data-tag="index"
        @touchstart="handleTagTouch"
        @touchmove.stop="handleMoveNav"
      >
        {{ tag | toUpper }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref, Watch } from 'vue-property-decorator'
import BScroll from 'better-scroll'
import { namespace } from 'vuex-class'
const homeModule = namespace('homeModule')
@Component({
  filters: {
    toUpper: (letter: string) => {
      return letter.toUpperCase()
    }
  }
})
export default class Position extends Vue {
  @homeModule.Mutation('setPos') setPos: (pos: string) => void
  
  @Ref('cityList') refCityList!: any[]
  private scroller: BScroll
  private cityList: CityList[] = []
  private contHeightList: number[] = []
  private activeTagIndex: number = 0
  private navStartScrollY: number = 0
  private startTagIndex: number = 0
  private contScrollY: number = 0
  private needWatchScroll: boolean = true

  @Watch('contScrollY')
  private contScrollYChange() {
    // 避免与点击索引导航冲突
    if (!this.needWatchScroll) return (this.needWatchScroll = true)

    let totalHeight = this.contHeightList[0],
      maxLen = this.contHeightList.length
    for (let i = 0; i < maxLen; i++) {
      if (this.contScrollY * -1 - totalHeight < 0) {
        return (this.activeTagIndex = i)
      } else totalHeight += this.contHeightList[i + 1]
    }
  }

  private async created() {
    this.cityList = await this.initCityList()
    setTimeout(() => {
      // 最后执行
      this.calcContentHeight()
    }, 0)
  }
  private mounted() {
    this.scroller = new BScroll('.position-box', {
      probeType: 3,
      click: true
    })
    this.scroller.on('scroll', pos => {
      this.contScrollY = pos.y
    })
  }

  private get quickNavTag() {
    return this.cityList.map(a => {
      return a.tag
    })
  }

  private async getCities() {
    let cityList: any = null
    await this.$api.getCities().then(res => {
      cityList = this.$util.arraySort(res.cts)
      localStorage.setItem('cityList', JSON.stringify(cityList))
    })
    return cityList
  }
  private async initCityList() {
    const cityList = localStorage.getItem('cityList')
    if (cityList) return this.$util.cityListFormat(JSON.parse(cityList))
    return this.$util.cityListFormat(await this.getCities())
  }
  private jumpTo(index: number) {
    const maxLen = this.cityList.length - 1
    let tag: number
    if (index < 0) tag = 0
    else if (index > maxLen) tag = maxLen
    else tag = index
    this.scroller.scrollToElement(this.refCityList[tag])
    this.activeTagIndex = tag // 索引高亮
  }
  // 点击导航
  private handleTagTouch(e: any) {
    this.needWatchScroll = false
    // 处理点击跳转
    const index = Number(e.target.dataset.tag)
    this.jumpTo(index)
    // 标记点击时的 y坐标和index
    this.navStartScrollY = e.touches[0].pageY
    this.startTagIndex = index
  }
  // 索引移动导航
  private handleMoveNav(e: any) {
    const index = Math.round(
      (e.touches[0].pageY - this.navStartScrollY) / 16 + this.startTagIndex
    )
    this.jumpTo(index)
  }
  // 计算每一块索引内容高度（兼容索引高亮）
  private calcContentHeight() {
    this.contHeightList = this.refCityList.map(item => {
      return item.clientHeight
    })
  }

  private chooseCity(pos: string) {
    this.setPos(pos)
    this.$router.back()
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
  box-sizing: border-box;
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
  color: #666;
  width: 20px;
  padding: 5px 0;
  text-align: center;
  position: fixed;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: rgba($color: #dbdbdb, $alpha: 0.7);
  border-radius: 10px;
  z-index: 13;
  > .quick-nav-item {
    height: 16px;
    line-height: 16px;
    font-size: 13px;
  }
  .active {
    color: $theme;
  }
}
</style>

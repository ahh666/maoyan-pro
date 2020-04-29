<template>
  <div style="width: 100%">
    <div class="cinema-nav flex-row-between-center">
      <div @click="setMask(0)" :class="[showCityNav && 'active-tab']">
        <p>{{ cityTab }}</p>
        <ai-icon name="webicon215" class="active-icon" />
      </div>
      <div @click="setMask(1)" :class="[showBrandNav && 'active-tab']">
        <p>{{ brandTab }}</p>
        <ai-icon name="webicon215" class="active-icon" />
      </div>
      <div @click="setMask(2)" :class="[showSpecialNav && 'active-tab']">
        <p>{{ specialTab }}</p>
        <ai-icon name="webicon215" class="active-icon" />
      </div>
    </div>
    <CinemaMask @closeMask="closeMask" v-if="showMask" />
    <CinemaNavCity v-if="showCityNav" />
    <CinemaNavBrand v-if="showBrandNav" :brandList="brandList" @checkedBrand="checkedMenu" />
    <CinemaNavSpecial
      v-if="showSpecialNav"
      :specialHallType="specialHallType"
      :specialService="specialService"
      @checkedSpecial="checkedMenu"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import CinemaNavCity from './CinemaNavCity.vue'
import CinemaMask from './CinemaMask.vue'
import CinemaNavBrand from './CinemaNavBrand.vue'
import CinemaNavSpecial from './CinemaNavSpecial.vue'
import { namespace } from 'vuex-class'
const cinemaModule = namespace('cinemaModule')
const homeModule = namespace('homeModule')

@Component({
  components: { CinemaNavCity, CinemaMask, CinemaNavBrand, CinemaNavSpecial },
})
export default class CinemaNav extends Vue {
  @cinemaModule.Getter('getCity') private cityTab: string
  @cinemaModule.Getter('getBrand') private brandTab: string
  @cinemaModule.Getter('getSpecial') private specialTab: string
  @homeModule.Getter('getPosId') private posId: number | undefined

  private showCityNav: boolean = false
  private showBrandNav: boolean = false
  private showSpecialNav: boolean = false
  private brandList: object[] = []
  private specialHallType: object[] = []
  private specialService: object[] = []

  private get showMask() {
    return this.showCityNav || this.showBrandNav || this.showSpecialNav
  }

  protected created() {
    this.filterCinemas()
  }

  private setMask(type: number) {
    const maskList = [this.showCityNav, this.showBrandNav, this.showSpecialNav]
    const maskNameList = ['showCityNav', 'showBrandNav', 'showSpecialNav']
    if (!maskList[type]) {
      this.closeMask()
      this[maskNameList[type]] = true
    } else {
      this[maskNameList[type]] = false
    }
  }
  private closeMask() {
    this.showCityNav = false
    this.showBrandNav = false
    this.showSpecialNav = false
  }

  private filterCinemas() {
    if (this.posId === void 0) return
    this.$api
      .filterCinemas({
        ci: this.posId,
      })
      .then((res) => {
        const { brand, hallType, service } = res
        this.brandList = brand.subItems
        this.specialHallType = hallType
        this.specialService = service
      })
  }
  private checkedMenu() {
    this.closeMask()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
.cinema-nav {
  position: relative;
  z-index: 102;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #ccc;
  padding: 0 15px;
  > div {
    height: 100%;
    width: 33%;
    color: #ccc;
    font-size: 12px;
    padding: 0 5px;
    @include setFlexDisplay();
    > p {
      color: #777;
      font-size: 13px;
      margin-right: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &:nth-child(2) {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 52%;
        border-left: 1px solid rgb(232, 232, 232);
        border-right: 1px solid rgb(232, 232, 232);
      }
    }
  }
  > .active-tab {
    color: $theme;
    > p {
      color: $theme;
    }
    .active-icon {
      transform: rotateZ(180deg);
    }
  }
}
</style>

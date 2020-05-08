<template>
  <div>
    <ai-navbar title="影院" :showBack="false" />
    <div class="top">
      <div class="top-search">
        <div @click="$router.push('/position')">
          <p>{{ position | posFormat }}</p>
          <ai-icon name="webicon215" />
        </div>
        <div class="search-bar" @click="$router.push('/search')">
          <ai-icon name="sousuo" /> 搜影院
        </div>
      </div>
      <div class="top-nav">
        <CinemaNav ref="cinemaNav" />
      </div>
    </div>
    <CinemaList :cinemaList="cinemaList" />
  </div>
</template>

<script lang="ts">
import CinemaList from './CinemaList.vue'
import CinemaNav from './CinemaNav.vue'
import { Component, Vue, Watch, Ref } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const homeModule = namespace('homeModule')
const cinemaModule = namespace('cinemaModule')

@Component({
  components: { CinemaList, CinemaNav },
  filters: {
    posFormat(pos: string) {
      return pos.length > 4 ? `${pos.substr(0, 3)}...` : pos
    },
  },
})
export default class Cinema extends Vue {
  @homeModule.Getter('getPos') private position: string
  @homeModule.Getter('getPosId') private posId: number | undefined
  @homeModule.Getter('posIdChanged') private posIdChanged: number | undefined
  @homeModule.Mutation('setPosIdChanged') setPosIdChanged: (changed: boolean) => void
  @cinemaModule.Getter('getCityId') private cityId: number
  @cinemaModule.Getter('getBrandId') private brandId: number
  @cinemaModule.Getter('getServiceId') private serviceId: number
  @cinemaModule.Getter('getHallType') private hallType: number
  @cinemaModule.Getter('getDistrictId') private districtId: number
  @cinemaModule.Getter('getAreaId') private areaId: number
  @cinemaModule.Mutation('setCityId') private setCityId: (id: number) => void
  @cinemaModule.Mutation('setBrandId') private setBrandId: (id: number) => void
  @cinemaModule.Mutation('setSpecialId') private setSpecialId: (id: number) => void
  @cinemaModule.Mutation('setHallType') private setHallType: (id: number) => void
  @cinemaModule.Mutation('setDistrictId') private setDistrictId: (id: number) => void
  @cinemaModule.Mutation('setAreaId') private setAreaId: (id: number) => void
  @Ref('cinemaNav') private cinemaNav: CinemaNav

  private cinemaList: object[] = []

  @Watch('cityId')
  @Watch('brandId')
  @Watch('hallType')
  @Watch('districtId')
  @Watch('areaId')
  private reloadCinemaList() {
    this.getCinemaList()
    this.cinemaNav.closeMask()
  }

  private created() {
    alert(this.posIdChanged)
    this.posIdChanged && this.initCinemas()
    this.getCinemaList()
  }

  private initCinemas() {
    this.setCityId(-1)
    this.setBrandId(-1)
    this.setSpecialId(-1)
    this.setHallType(-1)
    this.setDistrictId(-1)
    this.setAreaId(-1)
    this.setPosIdChanged(false)
  }
  private getCinemaList() {
    if (this.posId === void 0) {
      this.$toast('请先选择定位')
      return this.$router.push('/position')
    }
    const params = {
      day: new Date().toLocaleDateString().replace(/\//g, '-'),
      cityId: this.posId,
      brandId: this.brandId,
      serviceId: this.serviceId,
      hallType: this.hallType,
      areaId: this.areaId,
      districtId: this.districtId,
    }
    this.$api.getCinemaList(params).then((res) => {
      const { cinemas } = res
      this.cinemaList = cinemas
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
.top {
  top: 50px;
  width: 100%;
  position: fixed;
  z-index: 100;
  > .top-search,
  .top-nav {
    height: 50px;
    line-height: 50px;
    @include setFlexDisplay(row, space-around);
    background-color: #efefef;
    > div {
      height: 100%;
      cursor: pointer;
    }
  }
  > .top-nav {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
  }
  > .top-search {
    > div {
      &:first-child {
        color: #bbb;
        width: 60px;
        white-space: nowrap;
        font-size: 12px;
        @include setFlexDisplay();
        > p {
          color: #333;
          font-size: 16px;
          margin-right: 2px;
        }
      }
    }
    > .search-bar {
      color: #aaa;
      width: calc(100% - 120px);
      height: 34px;
      border: none;
      border-radius: 4px;
      background: #fff;
      @include setFlexDisplay();
    }
  }
}
</style>

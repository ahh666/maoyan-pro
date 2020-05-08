<template>
  <div>
    <div class="cinema-nav">
      <div :class="[!activeNav && 'active-nav']" @click="activeNav = 0">商区</div>
      <div :class="[activeNav && 'active-nav']" @click="activeNav = 1">地铁站</div>
    </div>
    <SideNav class="content" :sideNavs="sideNavs"></SideNav>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import SideNav from '../../components/SideNav'

@Component({
  components: {
    SideNav,
  },
})
export default class CinemaNavCity extends Vue {
  @Prop(Array) private cityDistrict: CinemaNavMenuItem
  @Prop(Array) private citySubway: CinemaNavMenuItem

  private activeNav: number = 0

  private get sideNavs() {
    return this.activeNav ? this.citySubway : this.cityDistrict
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 50vh;
  background: #fff;
  position: relative;
  z-index: 109;
}
.cinema-nav {
  position: relative;
  z-index: 109;
  display: flex;
  background: #fff;
  border-bottom: 1px solid rgb(232, 232, 232);
  > div {
    width: 50%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  > .active-nav {
    color: #e54847;
    border-bottom: 2px solid #e54847;
  }
}
</style>

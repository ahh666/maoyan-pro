<template>
  <div>
    <ai-navbar title="猫眼电影" :showBack="false" />
    <div class="top">
      <div class="topNav">
        <div @click="$router.push('/position')">
          <p>定位</p>
          <ai-icon name="webicon215" />
        </div>
        <div :class="[showHot === 1 ? 'active' : '']" @click="showHot = 1">
          正在热映
        </div>
        <div :class="[showHot === 0 ? 'active' : '']" @click="showHot = 0">
          即将上映
        </div>
        <div>
          <ai-icon name="sousuo" />
        </div>
      </div>
    </div>
    <div class="main">
      <Hot v-if="showHot === 1" />
      <Coming v-else />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Hot from '@/views/home/Hot.vue'
import Coming from '@/views/home/Coming.vue'
@Component({
  components: {
    Hot,
    Coming
  }
})
export default class Movie extends Vue {
  private showHot: number = 1
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
.top {
  top: 50px;
  width: 100%;
  position: fixed;
  z-index: 9;
  > .topNav {
    height: 44px;
    line-height: 44px;
    @include setFlexDisplay(row, space-around);
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    > div {
      height: 100%;
      cursor: pointer;
      &:first-child{
        color: #333;
        width: 50px;
        font-size: 12px;
        @include setFlexDisplay(row, space-around);
        > p {
          font-size: 16px;
        }
      }
      &:last-child {
        color: $theme;
        font-size: 18px;
        justify-content: flex-end;
      }
    }
    > .active {
      color: $theme;
      border-bottom: 2px solid $theme;
    }
  }
}
.main {
  padding-top: 50px;
}
</style>

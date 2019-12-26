<template>
  <div>
    <ai-navbar title="猫眼电影" :showLeft="false" :showRight="false" />
    <div class="top">
      <ul class="topNav">
        <li :class="[showHot === 1 ? 'active' : '']" @click="showHot = 1">
          正在热映
        </li>
        <li :class="[showHot === 0 ? 'active' : '']" @click="showHot = 0">
          即将上映
        </li>
      </ul>
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
}
.topNav {
  height: 44px;
  line-height: 44px;
  @include setFlexDisplay(row, space-around);
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
.topNav li {
  height: 100%;
  cursor: pointer;
}
.active {
  color: $theme;
  border-bottom: 2px solid $theme;
}
.main {
  padding-top: 50px;
}
</style>

<template>
  <header>
    <div class="nav">
      <div class="nav-left" @click="back">
        <ai-icon v-if="showLeft" name="fanhui" />
      </div>
      <div class="nav-title">{{title}}</div>
      <div class="nav-right">
        <slot name="right">
          <p v-if="showRight">完成</p>
        </slot>
      </div>
    </div>
    <div class="nav-bg"></div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class NavBar extends Vue {
  @Prop(String) private title!: string
  @Prop({type: Boolean, default: true}) private showLeft?: boolean
  @Prop({type: Boolean, default: false}) private showRight?: boolean

  private back() {
    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
$default-height: 50px;
.nav {
  width: 100%;
  height: $default-height;
  padding: 10px;
  @include setFixed(top, 0, $default-height);
  @include setFlexDisplay(row, space-between);
  background: $theme;
  color: #fff;
  > div {
    width: 30%;
  }
  > .nav-title {
    text-align: center;
  }
  > .nav-right {
    text-align: right;
  }
}
.nav-bg {
  width: 100%;
  height: $default-height;
}
</style>
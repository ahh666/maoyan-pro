<template>
  <div class="title-bar">
    <div class="left-title">
      {{ title }}
    </div>
    <div class="right-bar" v-show="rightInfo || showRightBar">
      <slot name="rightBar">
        {{ rightInfo }}
        <ai-icon class="more" name="gengduo" />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({})
export default class TitleBar extends Vue {
  @Prop(String) private title: string
  @Prop({type: Boolean, default: false}) private showRightBar: boolean
  @Prop([String, Number]) private rightInfo?: string | number
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
.title-bar {
  @include setFlexDisplay(row, space-between);
  > .left-title {
    font-size: 15px;
  }
  > .right-bar {
    font-size: 13px;
    color: #aaa;
    > .more {
      display: inline-block;
    }
  }
}
</style>
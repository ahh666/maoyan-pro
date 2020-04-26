<template>
  <div class="load-list">
    <div v-if="!rowList">
      <slot></slot>
      <div class="tip-finished" v-show="finished">
        <p>-- 已经到底了 --</p>
      </div>
    </div>
    <slot name="rowList"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import BScroll from 'better-scroll'
@Component({})
export default class List extends Vue {
  @Prop({type: Object, default: () => {}}) private options?: object
  @Prop({type: Boolean, default: false}) private rowList?: boolean
  @Prop(Boolean) private finished?: boolean
  @Prop({type: String, default: 'load-list'}) private listName?: string

  @Watch('finished')
  private finishPullUp() {
    this.finished && this.scroller.finishPullUp()
  }

  private scroller: BScroll

  private mounted() {
    this.scroller = new BScroll(`.${this.listName}`, {
      click: true,
      pullUpLoad: true,
      bounce: false,
      scrollX: this.rowList,
      scrollY: !this.rowList,
      ...this.options
    })
    this.scroller.on('pullingUp', () => {
      if (!this.finished) {
        this.$emit('loadMore')
        this.scroller.finishPullUp()
      }
    });
  }
  private beforeDestroy() {
    this.scroller.destroy()
  }


}
</script>

<style lang="scss" scoped>
.tip-finished {
  text-align: center;
  font-size: 14px;
  color: #999;
}
</style>
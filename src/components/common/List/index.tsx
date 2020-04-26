import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import BScroll from 'better-scroll'
import './index.scss'

@Component
export default class List extends Vue {
  @Prop({ type: Object, default: () => {} }) private options?: object
  @Prop({ type: Boolean, default: false }) private rowList?: boolean
  @Prop(Boolean) private finished?: boolean
  @Prop({ type: String, default: 'load-list' }) private listName?: string

  @Watch('finished')
  protected finishPullUp() {
    this.finished && this.scroller.finishPullUp()
  }

  private scroller: BScroll

  protected mounted() {
    this.scroller = new BScroll(`.${this.listName}`, {
      click: true,
      pullUpLoad: true,
      bounce: false,
      scrollX: this.rowList,
      scrollY: !this.rowList,
      ...this.options,
    })
    this.scroller.on('pullingUp', () => {
      if (!this.finished) {
        this.$emit('loadMore')
        this.scroller.finishPullUp()
      }
    })
  }
  protected beforeDestroy() {
    this.scroller.destroy()
  }

  protected render() {
    return (
      <div class="load-list">
        {!this.rowList ? (
          <div>
            {/* <slot></slot> */}
            {this.$slots.default}
            <div class="tip-finished" v-show={this.finished}>
              <p>-- 已经到底了 --</p>
            </div>
          </div>
        ) : (
          this.$slots.rowList
        )}

        {/* <slot name="rowList"></slot> */}
      </div>
    )
  }
}

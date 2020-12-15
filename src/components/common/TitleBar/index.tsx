import { Component, Vue, Prop } from 'vue-property-decorator'
import './index.scss'

@Component
export default class AiTitleBar extends Vue {
  @Prop(String) private title: string
  @Prop({ type: Boolean, default: false }) private showRightBar: boolean
  @Prop([String, Number]) private rightInfo?: string | number

  protected render() {
    return (
      <div class="title-bar">
        <div class="left-title">{this.title}</div>
        <div class="right-bar" v-show={this.rightInfo || this.showRightBar}>
          <slot name="rightBar">
            {this.rightInfo}
            <ai-icon class="more" name="gengduo" />
          </slot>
        </div>
      </div>
    )
  }
}

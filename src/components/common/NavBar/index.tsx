import { Component, Vue, Prop } from 'vue-property-decorator'
import './index.scss'
import Icon from '../Icon'

@Component
export default class NavBar extends Vue {
  @Prop(String) private title!: string
  @Prop({ type: Boolean, default: true }) private showBack?: boolean
  @Prop({ type: Boolean, default: false }) private showRight?: boolean

  private back() {
    this.$router.back()
  }

  protected render() {
    return (
      <header>
        <div class="nav">
          <div class="nav-left" onClick={this.back}>
            <Icon v-show={this.showBack} name="fanhui" />
          </div>
          <div class="nav-title">{this.title}</div>
          <div class="nav-right">
            <slot name="right">
              <p v-show={this.showRight}>完成</p>
            </slot>
          </div>
        </div>
        <div class="nav-bg"></div>
      </header>
    )
  }
}

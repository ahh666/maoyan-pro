import { Component, Vue, Prop } from 'vue-property-decorator'
import Icon from '../Icon'
import './index.scss'

@Component
export default class TabBar extends Vue {
  @Prop({ type: Array, required: true }) private tabBarList!: Array<TabBarList>
  @Prop({ type: String, default: '#e54847' }) private activeBarColor?: string

  private get activeBar() {
    return this.$route.path
  }

  private pickerBar(bar: string) {
    if (bar === this.activeBar) {
      return this.activeBarColor
    }
    return ''
  }

  private handleJump(url: string) {
    if (url === this.activeBar) return
    if (url.includes('http')) {
      location.href = url
    } else {
      this.$router.replace(url)
    }
  }

  protected render() {
    return (
      <div class="tab-bar">
        {this.tabBarList.map((item) => {
          return (
            <div
              class="tab-bar-item"
              style={{ color: this.pickerBar(item.to) }}
              key={item.to}
              onClick={this.handleJump.bind(this, item.to)}
            >
              <div class="icon">
                <Icon name={item.name} />
              </div>
              <div class="text">{item.text}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

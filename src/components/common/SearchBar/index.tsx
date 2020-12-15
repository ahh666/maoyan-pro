import { Component, Vue, Prop } from 'vue-property-decorator'
import './index.scss'
import Icon from '../Icon'

@Component
export default class AiSearchBar extends Vue {
  @Prop({ type: String, default: '搜索' }) private placeholder?: string
  @Prop({ type: String, default: '取消' }) private btnText?: string
  private timer: any = null

  private keywords: string = ''

  private handleBtnClick() {
    this.$emit('btnClick')
  }
  private handleInputChange() {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.$emit('inputChange', this.keywords)
    }, 300)
  }

  protected render() {
    const iconAttr = {
      class: 'searach-icon pos-left-center',
    }
    return (
      <div>
        <div class="search-bar">
          <div class="input">
            <Icon name="sousuo" {...iconAttr} />
            <input
              type="text"
              v-model={this.keywords}
              placeholder={this.placeholder}
              onInput={this.handleInputChange}
            />
          </div>
          <div class="btn nowrap" onClick={this.handleBtnClick}>
            {this.btnText}
          </div>
        </div>
      </div>
    )
  }
}

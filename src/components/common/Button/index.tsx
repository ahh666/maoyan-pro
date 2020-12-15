import { Component, Vue, Prop } from 'vue-property-decorator'
import './index.scss'

@Component
export default class AiButton extends Vue {
  @Prop({ type: String, default: '' }) private type?: string
  @Prop({ type: String, default: '确认' }) private text?: string

  private handleClick() {
    this.$emit('click')
  }

  protected render() {
    return (
      <div>
        <button class={['default', this.type]} onClick={this.handleClick}>
          {this.text}
        </button>
      </div>
    )
  }
}

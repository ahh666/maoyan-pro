import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Icon extends Vue {
  @Prop(String) private name!: string

  private get iconTag(): string {
    return `icon-${this.name}`
  }

  protected render() {
    return (
      <div>
        <span class={['iconfont', this.iconTag]}></span>
      </div>
    )
  }
}

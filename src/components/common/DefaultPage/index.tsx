// https://p0.meituan.net/movie/8b521599145a30fe521be9f2d60392d845310.png
import { Component, Vue, Prop } from 'vue-property-decorator'
import './index.scss'

@Component
export default class DefaultPage extends Vue {
  @Prop({ type: String, default: '暂无数据' }) private text: string
  @Prop({
    type: String,
    default: 'https://p0.meituan.net/movie/8b521599145a30fe521be9f2d60392d845310.png',
  })
  private imgUrl: string

  protected render() {
    return (
      <div class="default-page">
        <div class="content pos-left-center">
          <img src={this.imgUrl} />
          <p>{this.text}</p>
        </div>
      </div>
    )
  }
}

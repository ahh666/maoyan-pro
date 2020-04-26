import { Component, Vue } from 'vue-property-decorator'
import './index.scss'
@Component
export default class Loading extends Vue {
  protected render() {
    return (
      <div class="loading">
        <div class="loading-bg">
          <img
            class="loading-img"
            src="http://img02.sogoucdn.com/app/a/200678/15053088147918.gif"
          />
          <p>你的网络有点慢呢</p>
        </div>
      </div>
    )
  }
}

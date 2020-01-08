<template>
  <div class="loading">
    <div class="loading-bg">
      <img
        class="loading-img"
        src="http://img02.sogoucdn.com/app/a/200678/15053088147918.gif"
      />
      <p>你的网络有点慢呢</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class Loading extends Vue {}
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background: #fff;
}
.loading-bg {
  width: 160px;
  text-align: center;
  position: absolute;
  padding: 20px;
  background: rgba(32, 32, 32, 0.493);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  > .loading-img {
    width: 60px;
    height: 60px;
  }
  > p {
    color: #fff;
    font-size: 14px;
  }
}
</style>

<template>
  <div v-if="showToast">
    <div class="toast pos-center">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Toast extends Vue {
  private text: string = 'toast'
  private duration: number = 2000
  private autoClose: boolean = true
  private showToast: boolean = true

  private created() {
    this.closeToast()
  }
  private closer() {
    this.showToast = false
  }
  private closeToast() {
    this.autoClose &&
      setTimeout(() => {
        this.closer()
      }, this.duration)
  }
}
</script>

<style lang="scss" scoped>
.popup-box {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.pos-center {
  position: absolute;
  z-index: 11;
  border-radius: 5px;
}
.toast {
  color: #fff;
  max-width: 80%;
  padding: 10px 22px;
  background: rgba($color: #000000, $alpha: .8);
}
</style>

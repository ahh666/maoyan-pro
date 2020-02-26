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
  private text: string = ''
  private duration: number = 2000
  private showToast: boolean = true

  private created() {
    this.closeToast()
  }
  private closeToast() {
    setTimeout(() => {
      this.showToast = false
    }, this.duration);
  }
}
</script>

<style lang="scss" scoped>
.toast {
  color: #fff;
  max-width: 80%;
  padding: 10px 22px;
  border-radius: 5px;
  background: #666;
  position: fixed;
  z-index: 11;
}
</style>

<template>
  <div
    v-if="showPopup"
    :class="['popup-box', showBtn && 'bg']"
    @click="clickBG"
  >
    <div class="toast pos-center" v-if="!showBtn">
      <p>{{ text }}</p>
    </div>
    <div
      class="alert pos-center flex-col-between-center"
      v-else
      @click.stop.prevent
    >
      <p>{{ text }}</p>
      <div class="botton flex-row-between-center">
        <Button
          class="confirm"
          type="primary"
          :text="confirmText"
          @btnClick="confirmClick"
        />
        <Button :text="cancelText" @btnClick="cancelClick" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Button from '../Button.vue'
@Component({
  components: { Button }
})
export default class Popup extends Vue {
  private text: string = ''
  private duration: number = 2000
  private autoClose: boolean = true
  private showPopup: boolean = true
  private showBtn: boolean = true
  private showCancelBtn: boolean = true
  private confirmText: string = '确定'
  private cancelText: string = '取消'

  private created() {
    this.closeToast()
  }
  private closeToast() {
    this.autoClose && setTimeout(() => {
        this.showPopup = false
      }, this.duration)
  }
  private clickBG() {
    this.showPopup = false
  }
  private cancelClick() {
    this.showPopup = false
    this.$emit('handleCancel')
  }
  private confirmClick() {
    this.showPopup = false
    this.$emit('handleConfirm')
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
  background: #444;
}
.alert {
  color: #444;
  min-width: 240px;
  min-height: 120px;
  padding: 10px 22px;
  width: 70%;
  background: #fff;
  border: 1px solid #eee;
  text-align: center;
  .confirm {
    margin-right: 20px;
  }
}
.bg {
  background: rgba($color: #000000, $alpha: 0.8);
}
</style>

<template>
  <div class="mask-box fixed-box" @click="handleMaskClick">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class CinemaMask extends Vue {
  private handleMaskClick() {
    this.$emit('closeMask')
  }
}
</script>

<style lang="scss" scoped>
.mask-box {
  background: rgba($color: #000000, $alpha: .4);
  z-index: 101;
}
</style>
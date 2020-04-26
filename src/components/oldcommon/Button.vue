<template>
  <div>
    <button :class="['default', type]" @click="handleClick">{{ text }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({})
export default class Button extends Vue {
  @Prop({ type: String, default: '' }) private type?: string
  @Prop({ type: String, default: '确认' }) private text?: string

  private handleClick() {
    this.$emit('btnClick')
  }
}
</script>

<style lang="scss" scoped>
.default {
  color: #555;
  padding: 6px 20px;
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 3px;
}
.primary {
  color: #fff;
  border: none;
  background: #009688;
}
.normal {
  color: #fff;
  border: none;
  background: #1e9fff;
}
.danger {
  color: #fff;
  border: none;
  background: #f14e44;
}
</style>

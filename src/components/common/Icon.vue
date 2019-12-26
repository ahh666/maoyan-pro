<template>
  <div>
    <span class="iconfont" :class="iconTag"></span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class Icon extends Vue {
  @Prop(String) private name!: string
  
  private get iconTag() : string {
    return `icon-${this.name}`
  }
  
}
</script>

<style lang="scss" scoped>

</style>
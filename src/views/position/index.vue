<template>
  <div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Position extends Vue {
  private created() {
    this.getCities()
  }
  private getCities() {
    this.$api.getCities().then(
      res => {
        console.log(res);
        
      }
    )
  }
}
</script>

<style lang="scss" scoped>

</style>
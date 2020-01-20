<template>
  <div>
    <ai-navbar title="影院" :showBack="false" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const homeModule = namespace('homeModule')
@Component({
  components: {}
})
export default class Cinema extends Vue {
  @homeModule.Getter('getPosId') private posId: number | undefined
  private created() {
    this.getCinemaList()
  }
  private getCinemaList() {
    const params = {
      day: new Date().toLocaleDateString().replace(/\//g, '-'),
      cityId: this.posId || 1
    }
    this.$api.getCinemaList(params).then(
      res => {
        console.log(res);
        
      }
    )
  }
}
</script>

<style lang="scss" scoped>

</style>
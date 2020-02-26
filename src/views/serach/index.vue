<template>
  <div>
    <ai-navbar title="猫眼电影" />
    <ai-search-bar placeholder="搜影院" @btnClick="handleClick" @inputChange="handleChange" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from "vuex-class";
const homeModule = namespace('homeModule')
@Component({})
export default class Search extends Vue {
  @homeModule.Getter('getPosId') posId: number
  private count: number = 1
  private handleClick() {
    this.$router.back()
  }
  private handleChange(kw: string) {
    if (this.posId === undefined) return this.$toast({text: '请先获取定位' + this.count++});
    let params = {
      kw,
      cityId: this.posId,
      stype: 2,
    }
    this.$api.search(params).then(
      res => {
        
      }
    )
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Position extends Vue {
  private cityList: CityItems[]
  private cityList1: any

  private async created() {
    this.cityList = await this.initCityList()
    console.log(this.cityList[0].py[0]);
    const len = this.cityList.length
    // this.cityList.filter(a => {
    //   a.py[0] === 'a' && this.cityList1
    // })
  }
  private async getCities() {
    let cityList: any = null
    await this.$api.getCities().then(
      res => {
        cityList = this.$util.arraySort(res.cts)
        localStorage.setItem('cityList', JSON.stringify(cityList))
      }
    )
    return cityList
  }
  private async initCityList() {
    const cityList = localStorage.getItem('cityList')
    if (cityList) 
      return JSON.parse(cityList)
    return await this.getCities()
  }
}
</script>

<style lang="scss" scoped>

</style>
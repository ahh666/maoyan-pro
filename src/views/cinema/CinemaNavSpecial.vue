<template>
  <div>
    <ai-list class="cinema-nav-special">
      <div class="special-menu">
        <div class="title">{{ specialService.name }}</div>
        <div class="item">
          <div
            :class="['ellipsis-line-1', isActiveService(item.id) && 'active-item']"
            v-for="item in serviceList"
            :key="item.id"
            @click="clickServiceItem(item.id)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="special-hall">
        <div class="title">{{ specialHallType.name }}</div>
        <div class="item">
          <div
            :class="['ellipsis-line-1', isActiveHallType(item.id) && 'active-item']"
            v-for="item in hallTypeList"
            :key="item.id"
            @click="clickHallTypeItem(item.id, item.name)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </ai-list>
    <div class="footer flex-row-between-center">
      <ai-button text="重置" @click="reset" />
      <ai-button type="normal" text="确定" @click="confirm" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const cinemaModule = namespace('cinemaModule')

@Component({})
export default class CinemaNavSpecial extends Vue {
  @cinemaModule.Getter('getServiceId') private serviceId: number
  @cinemaModule.Getter('getHallType') private storeHallType: number
  @cinemaModule.Mutation('setServiceId') private setServiceId: (id: number) => void
  @cinemaModule.Mutation('setHallType') private setHallType: (id: number) => void
  @cinemaModule.Mutation('setSpecial') private setSpecial: (name: string) => void
  @Prop(Object) private specialHallType: CinemaNavMenuItem
  @Prop(Object) private specialService: CinemaNavMenuItem

  private hallTypeList: object[] = []
  private serviceList: object[] = []
  private hallType: number = -1
  private hallTypeName: string = ''

  protected created() {
    this.hallType = this.storeHallType
    this.hallTypeList = this.specialHallType.subItems
    this.serviceList = this.specialService.subItems
  }

  private isActiveService(id: number) {
    return id === this.serviceId
  }
  private isActiveHallType(id: number) {
    return id === this.hallType
  }

  private clickServiceItem(id: number) {
    this.setServiceId(id)
  }
  private clickHallTypeItem(id: number, name: string) {
    this.hallType = id
    this.hallTypeName = name
  }

  private reset() {
    this.setServiceId(-1)
    this.setHallType(-1)
  }
  private confirm() {
    if (this.storeHallType !== this.hallType) {
      this.setHallType(this.hallType)
      this.setSpecial(this.hallTypeName)
    }
    this.$emit('checkedSpecial')
  }
}
</script>

<style lang="scss" scoped>
.cinema-nav-special {
  width: 100%;
  height: 50vh;
  background: #fff;
  position: relative;
  z-index: 109;
  overflow-y: hidden;
  padding: 10px 20px 0 20px;
  .title {
    font-size: 14px;
  }
  .item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #999;
    > div {
      width: 28%;
      height: 36px;
      line-height: 36px;
      border: 1px solid rgb(204, 204, 204);
      border-radius: 5px;
      padding: 0 8px;
      font-size: 12px;
      text-align: center;
      margin-bottom: 8px;
      &:nth-child(3n-1) {
        margin: 0 8px 8px 8px;
      }
    }
    > .active-item {
      color: #e54847;
      border-color: #e54847;
      background: rgb(252, 240, 240);
    }
  }
}
.footer {
  position: relative;
  height: 50px;
  width: 100%;
  padding: 0 20px;
  border-top: 1px solid rgb(204, 204, 204);
  background: #fff;
  z-index: 109;
}
</style>

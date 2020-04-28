<template>
  <ai-list class="cinema-nav-brand">
    <div
      v-for="item in brandList"
      :key="item.id"
      :class="['brand-item', 'flex-row-between-center', activeItem(item.id) && 'theme-color']"
      @click="checkBrand(item.name, item.id)"
    >
      <div class="name">
        <div class="checked">
          <ai-icon name="xuanzhong" v-if="activeItem(item.id)" />
        </div>
        <div>{{ item.name }}</div>
      </div>
      <div>{{ item.count }}</div>
    </div>
  </ai-list>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const cinemaModule = namespace('cinemaModule')

@Component({})
export default class CinemaNavBrand extends Vue {
  @cinemaModule.Getter('getBrandId') private brandId: number
  @cinemaModule.Mutation('setBrand') private setBrand: (name: string) => void
  @cinemaModule.Mutation('setBrandId') private setBrandId: (id: number) => void
  @Prop(Array) private brandList: object[]

  private activeItem(id: number) {
    return id === this.brandId
  }
  private checkBrand(name: string, id: number) {
    this.setBrand(name)
    this.setBrandId(id)
    this.$emit('checkedBrand', id)
  }
}
</script>

<style lang="scss" scoped>
.cinema-nav-brand {
  width: 100%;
  height: 50vh;
  background: #fff;
  position: relative;
  z-index: 19;
  overflow: hidden;
  .brand-item {
    height: 50px;
    border-bottom: 1px solid #ebebeb;
    padding: 0 20px 0 13px;
    .name {
      display: flex;
      .checked {
        width: 20px;
        height: 20px;
        font-size: 10px;
        font-weight: bold;
      }
    }
  }
}
</style>

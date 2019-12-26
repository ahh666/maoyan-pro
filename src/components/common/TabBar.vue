<template>
  <div class="tab-bar">
    <div :class="['tab-bar-item', pickerBar(item.to) && 'active']" v-for="item in tabBarList" :key="item.to"
      @click="handleJump(item.to)"
    >
      <div class="icon">
        <Icon :name="item.name" />
      </div>
      <div class="text">{{ item.text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Icon from './Icon.vue'
@Component({
  components: {
    Icon
  }
})
export default class TabBar extends Vue {
  @Prop({type: Array, required: true}) private tabBarList!: Array<tabBarList>

  private activeBar = this.tabBarList[0].to

  private mounted() {
    console.log(this.$route.name);
    console.log(this.$route.path);
    console.log(this.$route.fullPath);
    
  }

  private pickerBar(bar: string) {
    return bar === this.activeBar
  }

  private handleJump(url: string) {
    if(url.includes('http')) {
      location.href = url
    } else {
      this.$router.replace(url)
      this.activeBar = url
    }
  }
  

}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';

.tab-bar {
  background: #fff;
  border-top: 1px solid #ededed;
  @include setFixed(bottom, 0, 50px);
  @include setFlexDisplay(row, space-around);
  > .tab-bar-item {
    font-size: 10px;
    @include setFlexDisplay(column, space-around);
    .icon {
      font-size: 22px;
    }
  }
  .active {
    color: $theme;
  }
}
</style>
<template>
  <div class="tab-bar">
    <div
      class="tab-bar-item"
      v-for="item in tabBarList"
      :key="item.to"
      :style="{ color: pickerBar(item.to) }"
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
    Icon,
  },
})
export default class TabBar extends Vue {
  @Prop({ type: Array, required: true }) private tabBarList!: Array<TabBarList>
  @Prop({ type: String, default: '#e54847' }) private activeBarColor?: string

  private get activeBar() {
    return this.$route.path
  }

  private pickerBar(bar: string) {
    if (bar === this.activeBar) {
      return this.activeBarColor
    }
    return ''
  }

  private handleJump(url: string) {
    if (url === this.activeBar) return
    if (url.includes('http')) {
      location.href = url
    } else {
      this.$router.replace(url)
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

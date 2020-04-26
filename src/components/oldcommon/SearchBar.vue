<template>
  <div>
    <div class="search-bar">
      <div class="input">
        <ai-icon name="sousuo" class="searach-icon pos-left-center"/>
        <input type="text" v-model="keywords" :placeholder="placeholder" @input="handleInputChange"/>
      </div>
      <div class="btn nowrap" @click="handleBtnClick">{{btnText}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({})
export default class SearchBar extends Vue {
  @Prop({type: String, default: '搜索'}) private placeholder?: string
  @Prop({type: String, default: '取消'}) private btnText?: string
  private timer: any = null

  private keywords: string = ''

  private handleBtnClick() {
    this.$emit('btnClick')
  }
  private handleInputChange() {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.$emit('inputChange', this.keywords)
    }, 300);
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
.search-bar {
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #efefef;
  @include setFlexDisplay(row, space-between);
  > .input {
    position: relative;
    flex: 1;
    > input {
      width: 100%;
      height: 36px;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      padding-left: 28px;
    }
    > .searach-icon {
      color: #bbb;
      font-size: 18px;
      padding-left: 5px;
      position: absolute;
      @include setFlexDisplay();
    }
  }
  > .btn {
    color: $theme;
    margin-left: 15px;
  }
}
</style>
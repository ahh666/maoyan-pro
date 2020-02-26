<template>
  <div>
    <ai-navbar title="影院" :showBack="false" />
     <div class="top">
       <div class="top-search">
          <div @click="$router.push('/position')">
            <p>{{ position | posFormat }}</p>
            <ai-icon name="webicon215" />
          </div>
          <div class="search-bar" @click="$router.push('/search')">
            <ai-icon name="sousuo" /> 搜影院
          </div>
       </div>
      <div class="top-nav">
        1
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const homeModule = namespace('homeModule')
@Component({
  components: {},
  filters: {
    posFormat(pos: string) {
      return pos.length > 4 ? `${pos.substr(0, 3)}...` : pos
    }
  }
})
export default class Cinema extends Vue {
  @homeModule.Getter('getPos') private position: string
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
@import '@/assets/style/index.scss';
.top {
  top: 50px;
  width: 100%;
  position: fixed;
  z-index: 9;
  > .top-search, .top-nav {
    height: 50px;
    line-height: 50px;
    @include setFlexDisplay(row, space-around);
    background-color: #efefef;
    > div {
      height: 100%;
      cursor: pointer;
    }
  }
  > .top-nav {
    border-bottom: 1px solid #ccc;
    background-color: #fff;
  }
  > .top-search {
    > div {
      &:first-child {
        color: #bbb;
        width: 60px;
        white-space: nowrap;
        font-size: 12px;
        @include setFlexDisplay(row, space-around);
        > p {
          color: #333;
          font-size: 16px;
          margin-right: 2px;
        }
      }
    }
    > .search-bar {
      color: #aaa;
      width: calc(100% - 120px);
      height: 34px;
      border: none;
      border-radius: 4px;
      background: #fff;
      @include setFlexDisplay();
    }
  }
}
</style>
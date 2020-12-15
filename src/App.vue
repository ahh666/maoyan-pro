<template>
  <div id="app">
    <router-view />
    <ai-tab-bar :tabBarList="tabBarList" v-show="showTabBar"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const homeModule = namespace('homeModule')

@Component({
  components: {}
})
export default class App extends Vue {
  @homeModule.Getter('showTabBar') showTabBar: boolean
  private tabBarList: Array<TabBarList> = [
    {
      name: 'dianying',
      text: '首页',
      to: '/home'
    },
    {
      name: 'yingyuana',
      text: '影院',
      to: '/cinema'
    },
    {
      name: 'wode',
      text: '我的',
      to: '/mine'
    }
  ]
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
</style>

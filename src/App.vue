<template>
  <div id="app">
    <router-view />
    <ai-tabbar :tabBarList="tabBarList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class App extends Vue {
  private tabBarList: Array<tabBarList> = [
    {
      name: 'dianying',
      text: '首页',
      to: '/'
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
}
</style>

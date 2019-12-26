import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import API from './api'
import './ai-ui'

Vue.prototype.$api = API

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

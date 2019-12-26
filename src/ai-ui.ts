import Vue from 'vue'
import './assets/font/index.css'

import Icon from './components/common/Icon.vue'
import NavBar from './components/common/NavBar.vue'
import Loading from './components/common/Loading.vue'
import TabBar from './components/common/TabBar.vue'

Vue.component('ai-icon', Icon)
Vue.component('ai-navbar', NavBar)
Vue.component('ai-loading', Loading)
Vue.component('ai-tabbar', TabBar)
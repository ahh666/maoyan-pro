import Vue from 'vue'
import './assets/font/index.css'

import Icon from './components/common/Icon.vue'
import NavBar from './components/common/NavBar.vue'
import Loading from './components/common/Loading.vue'
import TabBar from './components/common/TabBar.vue'
import List from './components/common/List.vue'
import TitleBar from './components/common/TitleBar.vue'
import SearchBar from './components/common/SearchBar.vue'

Vue.component('ai-icon', Icon)
Vue.component('ai-navbar', NavBar)
Vue.component('ai-loading', Loading)
Vue.component('ai-tabbar', TabBar)
Vue.component('ai-list', List)
Vue.component('ai-title-bar', TitleBar)
Vue.component('ai-search-bar', SearchBar)


import Popup from './components/common/Popup/index'

Vue.use(Popup)
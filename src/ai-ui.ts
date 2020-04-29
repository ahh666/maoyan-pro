import Vue from 'vue'
import './assets/font/index.css'

import Icon from './components/common/Icon'
import NavBar from './components/common/NavBar'
import Loading from './components/common/Loading'
import TabBar from './components/common/TabBar'
import List from './components/common/List'
import TitleBar from './components/common/TitleBar'
import SearchBar from './components/common/SearchBar'
import Button from './components/common/Button'

Vue.component('ai-icon', Icon)
Vue.component('ai-navbar', NavBar)
Vue.component('ai-loading', Loading)
Vue.component('ai-tabbar', TabBar)
Vue.component('ai-list', List)
Vue.component('ai-title-bar', TitleBar)
Vue.component('ai-search-bar', SearchBar)
Vue.component('ai-button', Button)


import Toast from './components/common/Toast/index'

Vue.use(Toast)
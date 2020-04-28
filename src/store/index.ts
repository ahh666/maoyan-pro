import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import userModule from './user'
import homeModule from './home'
import cinemaModule from './cinema'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    userModule,
    homeModule,
    cinemaModule,
  },
  plugins: [createPersistedState()],
})

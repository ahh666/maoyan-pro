const homeModule = {
  namespaced: true,
  state: {
    position: '定位'
  },
  getters: {
    getPos: (state: HomeState) => state.position
  },
  mutations: {
    setPos: (state: HomeState, payload: string) => {
      state.position = payload
    }
  }
}

export default homeModule

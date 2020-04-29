const homeModule = {
  namespaced: true,
  state: {
    position: '定位',
    posId: undefined,
    showTabBar: true,
    posIdChanged: false,
  },
  getters: {
    getPos: (state: HomeState) => state.position,
    getPosId: (state: HomeState) => state.posId,
    showTabBar: (state: HomeState) => state.showTabBar,
    posIdChanged: (state: HomeState) => state.posIdChanged,
  },
  mutations: {
    setPos: (state: HomeState, payload: string) => (state.position = payload),
    setShowTabBar: (state: HomeState, payload: boolean) => (state.showTabBar = payload),
    setPosId: (state: HomeState, payload: number) => (state.posId = payload),
    setPosIdChanged: (state: HomeState, payload: boolean) => (state.posIdChanged = payload),
  },
}

export default homeModule

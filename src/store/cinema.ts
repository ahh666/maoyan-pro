const cinemaModule = {
  namespaced: true,
  state: {
    city: '全城',
    cityId: -1,
    brand: '品牌',
    brandId: -1,
    special: '特色',
    specialId: -1,
    hallType: -1,
    serviceId: -1,
    areaId: -1,
    stationId: -1,
  },
  getters: {
    getCity: (state: CinemaState) => state.city,
    getCityId: (state: CinemaState) => state.cityId,
    getBrand: (state: CinemaState) => state.brand,
    getBrandId: (state: CinemaState) => state.brandId,
    getSpecial: (state: CinemaState) => state.special,
    getSpecialId: (state: CinemaState) => state.specialId,
    getServiceId: (state: CinemaState) => state.serviceId,
    getHallType: (state: CinemaState) => state.hallType,
  },
  mutations: {
    setCity: (state: CinemaState, payload: string) => (state.city = payload),
    setCityId: (state: CinemaState, payload: number) => {
      if (payload === -1) {
        state.city = '全城'
      }
      state.cityId = payload
    },
    setBrand: (state: CinemaState, payload: string) => (state.brand = payload),
    setBrandId: (state: CinemaState, payload: number) => {
      if (payload === -1) {
        state.brand = '品牌'
      }
      state.brandId = payload
    },
    setSpecial: (state: CinemaState, payload: string) => (state.special = payload),
    setSpecialId: (state: CinemaState, payload: number) => {
      if (payload === -1) {
        state.special = '特色'
      }
      state.specialId = payload
    },
    setServiceId: (state: CinemaState, payload: number) => (state.serviceId = payload),
    setHallType: (state: CinemaState, payload: number) => (state.hallType = payload),
  },
}

export default cinemaModule

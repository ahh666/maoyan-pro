const cinemaModule = {
  namespaced: true,
  state: {
    city: '全城',
    cityId: -1,
    brand: '品牌',
    brandId: -1,
    special: '特色',
    specialId: -1,
  },
  getters: {
    getCity: (state: CinemaState) => state.city,
    getCityId: (state: CinemaState) => state.cityId,
    getBrand: (state: CinemaState) => state.brand,
    getBrandId: (state: CinemaState) => state.brandId,
    getSpecial: (state: CinemaState) => state.special,
    getSpecialId: (state: CinemaState) => state.specialId,
  },
  mutations: {
    setCity: (state: CinemaState, payload: string) => (state.city = payload),
    setCityId: (state: CinemaState, payload: number) => (state.cityId = payload),
    setBrand: (state: CinemaState, payload: string) => (state.brand = payload),
    setBrandId: (state: CinemaState, payload: number) => (state.brandId = payload),
    setSpecial: (state: CinemaState, payload: string) => (state.special = payload),
    setSpecialId: (state: CinemaState, payload: number) => (state.specialId = payload),
  },
}

export default cinemaModule

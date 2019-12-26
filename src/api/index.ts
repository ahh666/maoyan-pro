import { BaseAPI } from "./base"

class API extends BaseAPI {
  getMovieOnInfoList() {
    return this.get('/movieOnInfoList')
  }
  getMostExpected() {
    return this.get('/mostExpected')
  }
  getComingList() {
    return this.get('/comingList')
  }
}

export default new API()
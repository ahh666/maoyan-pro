import { BaseAPI } from './base'

class API extends BaseAPI {
  public getMovieOnInfoList() {
    return this.get('/movieOnInfoList')
  }
  public getMostExpected() {
    return this.get('/mostExpected')
  }
  public getComingList() {
    return this.get('/comingList')
  }
  public getDetailMovie(params: { movieId: string }) {
    return this.get('/detailmovie', { params })
  }
  public getMoreList(params: { movieIds: string }) {
    return this.get('/moreComingList', { params })
  }
}

export default new API()

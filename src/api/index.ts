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
  public getCities() {
    return this.get('/cities.json', { baseURL: '/dianying' })
  }
  public getCinemaList(params: CinemaList) {
    return this.get('/cinemaList', { params })
  }
  public search(params: SearchParams) {
    return this.get('/search', { params })
  }
  public filterCinemas(params: { ci: string | number }) {
    return this.get('/filterCinemas', { params })
  }
}

export default new API()

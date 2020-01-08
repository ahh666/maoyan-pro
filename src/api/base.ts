import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import config, { PATH } from './config'

export class BaseAPI {
  public hanlder: AxiosInstance
  constructor() {
    this.hanlder = axios.create()
    // this.hanlder.defaults.baseURL = config.base
    this.hanlder.defaults.baseURL = PATH.maoyanPath
  }

  // 不用interceptors，便于实现接口返回结构定义
  private _transfromResponse(res: AxiosResponse) {
    const { status, data } = res
    if (status === 200) {
      return data
    }
  }

  public get(url: string, config?: AxiosRequestConfig) {
    const params = config && config.params || {}
    config = {
      ...config,
      params: {
        token: '',
        optimus_uuid: '9A30E180254411EA8437C766E39956A865F4E8808B544F13AE18A05FAEF5B90E',
        optimus_risk_level: 71,
        optimus_code: 10,
        ...params
      }
    }
    return this.hanlder.get(url, config).then(this._transfromResponse)
  }
  public post(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.hanlder.post(url, data, config).then(this._transfromResponse)
  }
}

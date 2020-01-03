'http://m.maoyan.com/ajax/moreComingList?token=&movieIds=1216185%2C1203046%2C341823%2C1182619%2C1203825%2C1201270%2C1217125%2C1217041%2C1258163%2C346409&optimus_uuid=9A30E180254411EA8437C766E39956A865F4E8808B544F13AE18A05FAEF5B90E&optimus_risk_level=71&optimus_code=10'

/**
 * http://www.softeem.xin
 * http://www.softeem.xin/maoyanApi/ajax/comingList?ci=57&token=&limit=10
 * http://www.softeem.xin/maoyanApi/ajax/mostExpected?ci=57&limit=10&offset=0&token=
 * http://www.softeem.xin/maoyanApi/ajax/movieOnInfoList
 * http://www.softeem.xin/maoyanApi/ajax/detailmovie?movieId=" + id
 */

const URL = {
  baseUrl: 'http://www.softeem.xin',
  maoyanUrl: 'http://m.maoyan.com'
}

export const PATH = {
  basePath: '/maoyanApi/ajax',
  maoyanPath: '/ajax'
}

export default {
  base: URL.baseUrl + PATH.basePath,
  maoyan: URL.maoyanUrl + PATH.maoyanPath
}

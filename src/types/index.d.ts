interface TabBarList {
  /** nav图标 */
  name: string,
  text: string,
  /** 要跳转的url */
  to: string
}
interface CityItems {
  id: number,
  nm: string,
  py: string
}
interface CityList {
  tag: string,
  items: CityItems[]
}
interface CinemaList {
  day: string,
  cityId: number
}
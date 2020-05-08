interface CityItems {
  id: number
  nm: string
  py: string
}
interface CityList {
  tag: string
  items: CityItems[]
}
interface CinemaList {
  day: string
  cityId: number
}
interface SearchParams {
  kw: number | string
  cityId: number
  stype: number
}
interface Subitem {
  name: string
  id: number
  count: number
  subItems: Subitem[]
}
interface CinemaNavMenuItem {
  name: string
  subItems: Subitem[]
}

interface UserAccountInfo {
  account: string
  password: string
  userNick?: string
  userHeadImg?: string
  likeList?: string[]
}

interface UserLoginInfo {
  isLogged: boolean
  userNick: string
  defaultHeadImg: string
  userHeadImg?: string | undefined
  userAccountInfo: UserAccountInfo[]
}

interface HomeState {
  position: string
  posId: number | undefined
  showTabBar: boolean
  posIdChanged: boolean
}
interface CinemaState {
  city: string
  cityId: number
  brand: string
  brandId: number
  special: string
  specialId: number
  serviceId: number
  hallType: number
  districtId: number
  areaId: number
  cityNavItemIndex: number
}

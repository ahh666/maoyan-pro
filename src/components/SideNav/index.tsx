import { Component, Vue, Prop } from 'vue-property-decorator'
import './index.scss'
import List from '../common/List'
import Icon from '../common/Icon'
import { namespace } from 'vuex-class'
const cinemaModule = namespace('cinemaModule')

@Component
export default class SideNav extends Vue {
  @cinemaModule.Getter('getDistrictId') private districtId: number
  @cinemaModule.Getter('getAreaId') private areaId: number
  @cinemaModule.Getter('getCityNavItemIndex') private cityNavItemIndex: number
  @cinemaModule.Mutation('setDistrictId') private setDistrictId: (id: number) => void
  @cinemaModule.Mutation('setAreaId') private setAreaId: (id: number) => void
  @cinemaModule.Mutation('setCity') private setCity: (name: string) => void
  @cinemaModule.Mutation('setCityNavItemIndex') private setCityNavItemIndex: (id: number) => void
  @Prop(Array) private sideNavs: CinemaNavMenuItem
  private listItemId = -1
  private oldAreaId = -1
  private navItemId = -1
  private navItemName = ''

  protected created() {
    this.listItemId = this.areaId
    this.navItemId = this.districtId
    this.oldAreaId = this.areaId
  }

  private handleClickNav(index: number, id: number, name: string) {
    this.setCityNavItemIndex(index)
    this.navItemId = id
    this.navItemName = name
    if (id === -1 && this.districtId !== -1) {
      this.setDistrictId(-1)
    }
  }
  private clickListItem(id: number) {
    this.listItemId = id
    this.setAreaId(id)
    this.setDistrictId(this.navItemId)
    if (id === -1) {
      this.setCity(this.navItemName)
    }
  }

  protected render() {
    const _sideNavs: Subitem[] = this.sideNavs.subItems

    return (
      <div class="side-nav-box">
        <div class="side-nav">
          {_sideNavs.map((item, index) => {
            return (
              <div
                class={['side-nav-item', item.id === this.navItemId && 'active-nav-item']}
                key={item.id}
                onClick={this.handleClickNav.bind(this, index, item.id, item.name)}
              >
                {item.name}({item.count})
              </div>
            )
          })}
        </div>
        <List class="content-list">
          {_sideNavs[this.cityNavItemIndex].subItems.map((item) => {
            const _id = item.id
            return (
              <div
                class={['content-list-item', _id === this.listItemId && 'active-content-item']}
                key={item.id}
                onClick={this.clickListItem.bind(this, item.id)}
              >
                <div class="icon">
                  <Icon v-show={_id === this.listItemId} name="xuanzhong" />
                </div>
                <div class="item-content">
                  <div class="flex">{item.name}</div>
                  <div class={['color-777', _id === this.listItemId && 'active-content-item']}>
                    {item.count}
                  </div>
                </div>
              </div>
            )
          })}
        </List>
      </div>
    )
  }
}

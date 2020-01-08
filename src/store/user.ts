const userModule = {
  state: {
    isLogged: false,
    userNick: '',
    defaultHeadImg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2363028509,190015165&fm=26&gp=0.jpg',
    userHeadImg: undefined,
    // 模拟数据库用户信息
    userAccountInfo: [
      {
        account: 'bjpengyuyan',
        password: '111111',
        userNick: '滨江彭于晏',
        userHeadImg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3279316276,2228302562&fm=26&gp=0.jpg',
        likeList: ['健身', '台球']
      }
    ]
  },
  getters: {
    isLogged: (state: UserLoginInfo) => state.isLogged,
    userNick: (state: UserLoginInfo) => state.userNick,
    userHeadImg: (state: UserLoginInfo) => {
      return state.userHeadImg || state.defaultHeadImg
    },
    userAccountInfo: (state: UserLoginInfo) => state.userAccountInfo,
    testUserInfo: (state: UserLoginInfo) => (account: string) => {
      let userinfoIndex = state.userAccountInfo.findIndex(
        info => info.account === account
      )
      return userinfoIndex === -1 ? undefined : state.userAccountInfo[userinfoIndex]
    },
  },
  mutations: {
    loginOut(state: UserLoginInfo) {
      state.isLogged = false
      state.userNick = ''
      state.userHeadImg = state.defaultHeadImg
    },
    loginIn(state: UserLoginInfo, payload: UserLoginInfo) {
      state.isLogged = true
      state.userNick = payload.userNick
      state.userHeadImg = payload.userHeadImg || state.defaultHeadImg
    },
    register: (state: UserLoginInfo, payload: any) => state.userAccountInfo.push(payload)
  }
}

export default userModule

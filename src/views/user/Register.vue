<template>
  <div>
    <ai-nav-bar title="注 册"/>
    <div class="content">
      <input type="text" placeholder="昵称" v-model="nick"><br>
      <input type="text" placeholder="用户名" v-model="account"><br>
      <input type="password" placeholder="密码" v-model="password"><br>
      <button @click="handleRegister">注 册</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Mutation} from 'vuex-class'
@Component({})
export default class ClassName extends Vue {
  @Getter testUserInfo: (user: string) => UserAccountInfo
  @Mutation register: (userAccountInfo: UserAccountInfo) => void
  private nick: string = ''
  private account: string = ''
  private password: string = ''

  private handleRegister() {
    if(!this.nick.trim()) return alert('昵称不能为空！');
    if(!this.account.trim()) return alert('用户名不能为空！');
    if(!this.password) return alert('请输入密码！');
    let userAccountInfo = this.testUserInfo(this.account)
    if (userAccountInfo && userAccountInfo.account) {
      alert('用户名已存在！')
      this.account = ''
      this.password = ''
    } else {
      const params = {
        userNick: this.nick,
        account: this.account,
        password: this.password,
      }
      this.register(params)
      alert('注册成功')
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  padding: 0 5%;
  input, button {
    width: 100%;
    border: none;
    outline: none;
    margin-top: 12px;
  }
  > input {
    padding: 12px 10px;
    border-bottom: 1px solid #bfbfbf;
  }
  > button {
    color: #fff;
    padding: 10px 0;
    margin-top: 22px;
    border-radius: 5px;
    background-color: #f03d37;
  }
}
</style>
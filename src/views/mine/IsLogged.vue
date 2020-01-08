<template>
  <div class="islogged">
    <div class="head">
      <img :src="userHeadImg">
      <p>{{userNick}}</p>
      <p>当前状态：{{isLogged ? '已登录' : '未登录'}}</p>
    </div>
    <button @click="loginOut">退 出</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
@Component({})
export default class IsLogged extends Vue {
  @Getter('isLogged') isLogged: number
  @Getter('userNick') userNick: string
  @Getter('userHeadImg') userHeadImg: string
  @Mutation('loginOut') loginOut: () => void
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
.islogged {
  padding: 0 6%;
  .head {
    @include setFlexDisplay(column);
    > img {
      width: 110px;
      border-radius: 50%;
    }
    > p {
      font-weight: 600;
      font-size: 1.1em;
      margin-top: 16px;
    }
  }
  button {
    color: #fff;
    width: 88%;
    border: none;
    outline: none;
    margin-top: 12px;
    padding: 10px 0;
    margin-top: 22px;
    border-radius: 5px;
    background-color: #f03d37;
    position: fixed;
    bottom: 100px;
  }
}
</style>
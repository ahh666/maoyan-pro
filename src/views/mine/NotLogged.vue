<template>
  <div class="notlogged">
    <p>请先登录！！</p>
    <button class="login" @click="$router.push('/login')">去登录</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class NotLogged extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
.notlogged {
  @include setFlexDisplay(column, space-around);
}
.login {
  margin-top: 16px;
  padding: 5px 30px;
  border: 1px solid #4fa6f7;
  border-radius: 3px;
  background: #fff;
}
</style>
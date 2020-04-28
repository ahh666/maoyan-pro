<template>
  <div>
    <div class="content">CinemaNavSpecial</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class CinemaNavSpecial extends Vue {}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 50vh;
  background: #fff;
  position: relative;
  z-index: 19;
}
</style>

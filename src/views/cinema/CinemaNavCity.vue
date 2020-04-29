<template>
  <div>
    <div class="content">citylist</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class CinemaNavCity extends Vue {}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 50vh;
  background: #fff;
  position: relative;
  z-index: 109;
}
</style>

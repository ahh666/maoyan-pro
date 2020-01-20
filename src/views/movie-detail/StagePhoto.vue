<template>
  <div style="padding: 3px 16px;">
    <div>
      <ai-title-bar title="视频和剧照" :right-info="photoTotal" />
    </div>
    <div class="stage-photo">
      <img
        v-for="(photo, index) in photos"
        :key="index"
        :src="$util.imgUrlReplace(photo)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({})
export default class StagePhoto extends Vue {
  @Prop({ type: Array, required: true }) private photos!: string[]
  @Prop({ type: Number, required: true }) private photoTotal!: number
}
</script>

<style lang="scss" scoped>
.stage-photo {
  margin-top: 6px;
  display: -webkit-box;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  > img {
    display: block;
    width: 126px;
    height: 84px;
    margin-right: 5px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

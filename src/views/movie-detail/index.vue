<template>
  <ai-loading v-if="!isReady" />
  <div v-else>
    <ai-nav-bar :title="movieDetail.nm" />
    <TopIntro :movieDetail="movieDetail" />
    <StagePhoto :photos="movieDetail.photos" :photoTotal="movieDetail.pn" />
    <button class="buy-btn">特惠购票</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopIntro from './TopIntro.vue'
import StagePhoto from './StagePhoto.vue'
@Component({
  components: {
    TopIntro, StagePhoto
  }
})
export default class MovieDetail extends Vue {
  private isReady: boolean = false
  private movieDetail: [] = []
  private created() {
    this.getMovieDetail(this.$route.query.movieId as string)
  }
  private getMovieDetail(movieId: string) {
    this.$api.getDetailMovie({ movieId }).then(res => {
      this.movieDetail = res.detailMovie
      this.isReady = true
    })
  }
}
</script>

<style lang="scss" scoped>
.buy-btn {
  width: calc(100% - 30px);
  margin: 10px 15px;
  padding: 9px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  border: none;
  background-color: #e54847;
  position: fixed;
  bottom: 0;
}
</style>

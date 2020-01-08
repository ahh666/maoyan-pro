<template>
  <ai-list class="hoting-box" @loadMore="loadMore" :finished="disabledLoad">
    <div class="hoting">
      <MovieList v-for="movie in hotList" :key="movie.id" :movieInfo="movie" />
    </div>
  </ai-list>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MovieList from '@/components/MovieList.vue'

@Component({
  components: {
    MovieList
  }
})
export default class Hot extends Vue {
  private hotList: [] | never[] = []
  private moreHotIds: [] = []
  private currentPage: number = 1
  private disabledLoad: boolean = false

  private created() {
    this.getMovieOnInfoList()
  }

  private loadMore() {
    const movieIds = this.moreHotIds.slice(this.currentPage * 10, this.currentPage * 10 + 10).join(',')
    this.$api.getMoreList({ movieIds }).then(res => {
      if (res.coming.length === 0) {
        return this.disabledLoad = true
      }
      this.hotList = this.hotList.concat(res.coming)
      this.currentPage ++
    })
  }

  private getMovieOnInfoList() {
    this.$api.getMovieOnInfoList().then(res => {
      this.hotList = res.movieList.splice(0, 10)
      this.moreHotIds = res.movieIds
    })
  }
}
</script>

<style lang="scss" scoped>
.hoting-box {
  position: absolute;
  top: 100px;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>

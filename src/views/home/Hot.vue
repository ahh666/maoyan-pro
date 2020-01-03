<template>
  <div class="box">
    <div class="hoting">
      <MovieList v-for="movie in hotList" :key="movie.id" :movieInfo="movie" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MovieList from '@/components/MovieList.vue'
import BScroller from 'better-scroll'

@Component({
  components: {
    MovieList
  }
})
export default class Hot extends Vue {
  private hotList: [] = []
  private moreHotIds: [] = []
  private currentPage: number = 1
  private scroller: any

  private created() {
    this.getMovieOnInfoList()
  }

  private mounted() {
    this.scroller = new BScroller('.hoting', {
      click: true,
      pullUpLoad: true
    })
    this.scroller.on('pullingUp', () => {
      this.loadMore()
    });
  }

  private loadMore() {
    const movieIds = this.moreHotIds.slice(this.currentPage, 10).join(',')
    this.$api.getMoreList({ movieIds }).then(res => {
      this.currentPage ++
      this.scroller.finishPullUp()
    })
  }

  private getMovieOnInfoList() {
    this.$api.getMovieOnInfoList().then(res => {
      this.hotList = res.movieList
      this.moreHotIds = res.movieIds
    })
  }
}
</script>

<style></style>

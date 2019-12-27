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

@Component({
  components: {
    MovieList
  }
})
export default class Hot extends Vue {
  private hotList: [] = []
  private moreHotIds: [] = []

  private created() {
    this.getMovieOnInfoList()
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

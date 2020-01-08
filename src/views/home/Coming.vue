<template>
  <ai-list class="coming-box" :finished="disabledLoad" @loadMore="loadMore">
    <div>
      <ai-loading v-if="!(comingDataReady && expectedDataReady)" />
      <div class="wish">
        <p>近期最受期待</p>
        <ai-list class="wish-list-box" listName="wish-list-box" :rowList="true">
          <div class="img-list">
            <div
              class="wish-list"
              v-for="movie in expectedList"
              :key="movie.id"
              @click="$router.push({ name: 'movieDetail', query: { movieId: movie.id }})"
            >
              <div class="hope-img">
                <img :src="movie.img.replace('w.h', '128.180')" />
                <p class="wish">{{ movie.wish }}想看</p>
              </div>
              <div class="wish-info">
                <p class="name">{{ movie.nm }}</p>
                <p class="show-time">{{ movie.comingTitle }}</p>
              </div>
            </div>
          </div>
        </ai-list>
      </div>
      <div class="coming">
        <MovieList
          v-for="movie in comingList"
          :key="movie.id"
          :movieInfo="movie"
        />
      </div>
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
export default class Coming extends Vue {
  private comingDataReady: boolean = false
  private expectedDataReady: boolean = false
  private comingList: [] | never[] = []
  private expectedList: [] = []
  private MoreComingIds: [] = []
  private currentPage: number = 1
  private disabledLoad: boolean = false

  private created() {
    this.getComingList()
    this.getMostExpected()
  }

  private getMostExpected() {
    this.$api.getMostExpected().then(res => {
      this.expectedList = res.coming
      this.expectedDataReady = true
    })
  }
  private getComingList() {
    this.$api.getComingList().then(res => {
      this.comingList = res.coming.splice(0, 10)
      this.MoreComingIds = res.movieIds
      this.comingDataReady = true
    })
  }
  private loadMore() {
    const movieIds = this.MoreComingIds.slice(
      this.currentPage * 10,
      this.currentPage * 10 + 10
    ).join(',')
    this.$api.getMoreList({ movieIds }).then(res => {
      if (res.coming.length === 0) {
        return (this.disabledLoad = true)
      }
      this.comingList = this.comingList.concat(res.coming)
      this.currentPage++
    })
  }
}
</script>

<style lang="scss" scoped>
.wish {
  padding: 10px 0 0 15px;
  margin: 0 20px 10px 0;
  border-bottom: 8px solid #eee;
  > p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  .img-list {
    height: 166px;
    display: flex;
    flex-direction: row;
    float: left;
    > .wish-list {
      width: 86px;
      height: 166px;
      margin-right: 12px;
      > .hope-img {
        position: relative;
        &::before {
          content: '♡';
          color: #ccc;
          font-size: 14px;
          text-align: center;
          line-height: 28px;
          width: 28px;
          height: 28px;
          background-color: rgba(61, 63, 71, 0.6);
          border-bottom-right-radius: 10px;
          position: absolute;
          top: 0;
          left: 0;
        }
        > img {
          width: 85px;
          height: 115px;
        }
        > .wish {
          position: relative;
          font-weight: bold;
          font-size: 12px;
          color: #faaf00;
          margin: -40px 0px 6px 0px;
          padding: 20px 0px 0px 3px;
          background: linear-gradient(rgba(77, 77, 77, 0), #000);
        }
      }
      > .wish-info {
        > .name {
          font-size: 13px;
          font-weight: bold;
          margin-bottom: -3px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        > .show-time {
          font-size: 11px;
          color: #888;
        }
      }
    }
  }
}
.coming-box {
  position: absolute;
  top: 100px;
  bottom: 50px;
  left: 0;
  right: 0;
}
.wish-list-box {
  width: 100%;
  height: 166px;
  overflow: hidden;
}
</style>

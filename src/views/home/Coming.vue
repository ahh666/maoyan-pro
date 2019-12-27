<template>
  <div>
    <ai-loading v-if="!(comingDataReady && expectedDataReady)" />
    <div class="wish">
      <p>近期最受期待</p>
      <div class="img-list">
        <div class="wish-list" v-for="movie in expectedList" :key="movie.id">
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
    </div>
    <div class="coming">
      <MovieList
        v-for="movie in comingList"
        :key="movie.id"
        :movieInfo="movie"
      />
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
export default class Coming extends Vue {
  private comingDataReady: boolean = false
  private expectedDataReady: boolean = false
  private comingList: [] = []
  private expectedList: [] = []
  private MoreComingIds: [] = []

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
      this.comingList = res.coming
      this.MoreComingIds = res.movieIds
      this.comingDataReady = true
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
  > .img-list {
    height: 166px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    /* 手指左右滑动 */
    display: -webkit-box;
    overflow-x: auto;
    /*适应苹果*/
    -webkit-overflow-scrolling: touch;
    /*隐藏掉滚动条*/
    &::-webkit-scrollbar {
      display: none;
    }
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
          margin-bottom: 3px;
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
</style>

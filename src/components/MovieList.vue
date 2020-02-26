<template>
  <div>
    <div
      class="movie-list"
      @click="$router.push({ name: 'movieDetail', query: { movieId: movieInfo.id + '' } })"
    >
      <div class="movie-img">
        <img :src="$util.imgUrlReplace(movieInfo.img)" />
      </div>
      <div class="right-info">
        <ul class="movie-info">
          <li class="name">{{ movieInfo.nm }}</li>
          <li
            class="score"
            v-if="movieInfo.globalReleased && movieInfo.sc !== 0"
          >
            观众评
            <span>{{ movieInfo.sc }}</span>
          </li>
          <li
            style="font-size: 14px;color: #888"
            v-if="movieInfo.globalReleased && movieInfo.sc == 0"
          >
            暂无评分
          </li>
          <li v-if="!movieInfo.globalReleased" class="score">
            <span>{{ movieInfo.wish }}</span> 想看
          </li>
          <li class="actor">{{ movieInfo.star }}</li>
          <li class="showinfo">{{ movieInfo.showInfo }}</li>
        </ul>
        <div class="btn">
          <button v-if="movieInfo.globalReleased" class="buy-btn">购票</button>
          <button v-else class="pre-btn">预售</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class MovieList extends Vue {
  @Prop(Object) private movieInfo!: object
}
</script>

<style lang="scss" scoped>
.movie-list {
  width: 100%;
  height: 108px;
  padding: 5px 12px;
}
.movie-img > img {
  height: 90px;
  width: 64px;
  float: left;
  margin-right: 8px;
}
.right-info {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ededed;
  padding: 0px 10px 5px 3px;
}
.right-info > ul {
  width: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding: 5px 0px;
  font-size: 13px;
  color: #666;
}
.right-info > ul > li {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 3px;
}
.movie-info .name {
  font-size: 16px;
  font-weight: bold;
  color: #000;
}
.movie-info .score > span {
  font-weight: bold;
  font-size: 14px;
  color: #ffb400;
}
.btn > button {
  width: 48px;
  padding: 5px 12px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
}
.btn > .buy-btn {
  background-color: #f03d37;
  color: #fff;
}
.btn > .pre-btn {
  background-color: #3c9fe6;
  color: #fff;
}
</style>

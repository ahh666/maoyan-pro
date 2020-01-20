<template>
  <div>
    <div class="movie-header">
      <!-- 设置背景模糊 -->
      <div class="bg-last">
        <img :src="$util.imgUrlReplace(movieDetail.img)" />
      </div>
      <div class="bg-fliter"></div>
      <!-- 左侧海报 -->
      <div class="movie-img">
        <img
          @click="showPlayVD = true"
          :src="$util.imgUrlReplace(movieDetail.img)"
        />
        <ai-icon name="bofang1" class="play-btn" />
      </div>
      <ul class="movie-info">
        <li class="name">{{ movieDetail.nm }}</li>
        <li class="enm">{{ movieDetail.enm }}</li>
        <li
          class="score"
          v-if="movieDetail.globalReleased && movieDetail.sc !== 0"
        >
          观众评 <span>{{ movieDetail.sc }}</span>
        </li>
        <li
          style="font-size: 14px;color: #888"
          v-if="movieDetail.globalReleased && movieDetail.sc == 0"
        >
          暂无评分
        </li>
        <li v-if="!movieDetail.globalReleased" class="score">
          <span>{{ movieDetail.wish }}</span> 想看
        </li>
        <li>
          {{ movieDetail.cat }}
          <img :src="imaxImg" class="imax-icon" />
        </li>
        <li>{{ movieDetail.src }}/{{ movieDetail.dur }}分钟</li>
        <li>{{ movieDetail.pubDesc }}</li>
      </ul>
    </div>

    <!-- 查看全部介绍开关 -->
    <div class="movie-intro" @click="isUpBtn = !isUpBtn">
      <p :class="isUpBtn && 'overflow'">{{ movieDetail.dra }}</p>
      <ai-icon name="zhankai" :class="['btn', !isUpBtn && 'rot-x-180']" />
    </div>

    <!-- 播放电影宣传片 -->
    <div class="play-vd" v-if="showPlayVD" @click="showPlayVD = false">
      <video controls autoplay :src="movieDetail.vd" width="100%"></video>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class TopIntro extends Vue {
  @Prop({ type: Object, required: true }) private movieDetail: object
  
  private showPlayVD: boolean = false
  private isUpBtn: boolean = true
  private imaxImg: string =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAeCAYAAABwmH1PAAACn0lEQVRYhe2ZUW7TQBCGv0RBrUSl+KW8po/lqTkAknOBCN+gewPCDdwbmBuYGwRxAILEAZoneHRf6QNBAgmJSsvDjOu18TqWnBLV5JdW68zMemd2Z2bH2YG1FuAp8Bw4BUb0C3fALfAZ+Dmw1p4AL4Ane1Xr4fEb+DQCzhFjvwJr4Nc+tXoAHAMXwDPgfIi4MfTTWBCb1vp8OqSI2T4amyO3bTTcqxp7wMHgvqONwVNgBRiHliht0WJ8pLKJhx8ofwXMGuZfqmwdlg3jy7DWzrXhaTMriB3aSmmbhnF5y1R25eEbW2DpkUka+E08t82ttfOuLj2mvPNVRMBkyztyL/kIvATOPDJr5bvzzYBXwM0WPe7R1eDvQNzA3+byU6QoeEvh8sYja3S+BFmUAHFlkIXdbJkL6G5wguxgVMObASFijA/5gqSI8k07da3yY5Vd6vNr5bVCV4NT7et20mgfe8YGyELdIAknf98Ev9EpsoAXyGK+w58Ma9HV4EwVCClnyDPgEonLzDM2QnbIVTjV3jTMufQ8t8IuzuFYe+PQFhVe07jUoWXIIoXUJ6/AkXfjuTV2YXCGKHlJkUwMklVXnjEziuz9DbBOC5VeFyZ53F5RjufW2NXHfgx8UCU2/O2qVRjt31CfXRcqs6jQQmRxY6VFyFGV0K4I6lx4VAuMjfZZhecWHoH+rsrUFRNGf0+dQufMkQucwib6F4WHixjZ2QnluKzCaN/kAe6Z7J63hnIS3FAciSn+0vMeuzQ4RY6YPJn4kLteU+xlSA4IVW6CnAZ1Y66RmB7TvNAADKy1c31+v034kWMOh8/D/uNgcN8xRP6ZB/n/tq840v5uiFxDgHyBHNXLP2ocI9/dALf/3VXLwMpl2gly5dLny7QvwI8/pysRaQplMrsAAAAASUVORK5CYII='
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
.movie-header {
  @include setFlexDisplay(row, flex-start);
  height: 165px;
  width: 100%;
  > .bg-last {
    position: absolute;
    width: 100%;
    height: 165px;
    z-index: -2;
    overflow: hidden;
    > img {
      width: 100%;
      height: 100%;
      filter: blur(27px);
    }
  }
  > .bg-fliter {
    height: 165px;
    width: 100%;
    background-color: #40454d;
    opacity: 0.55;
    position: absolute;
    z-index: -1;
  }
  > .movie-info {
    height: 135px;
    font-size: 12.5px;
    color: #e6e0e0;
    > li {
      + li {
        margin-top: 5px;
      }
      &:nth-child(2) {
        margin-top: 0;
      }
    }
    > .name {
      font-size: 16px;
      color: #fff;
      font-weight: normal;
    }
    > .enm {
      font-size: 12px;
      color: #fff;
      margin-bottom: 6px;
    }
    > .score {
      > span {
        color: $yellow;
        font-size: 14px;
        font-weight: 600;
      }
    }
    .imax-icon {
      width: 26px;
      vertical-align: middle;
    }
  }
  > .movie-img {
    margin: 0 15px;
    position: relative;
    > img {
      width: 96.5px;
      height: 135px;
    }
    > .play-btn {
      color: #fff;
      font-size: 28px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      &::after {
        content: '';
        width: 27px;
        height: 27px;
        border-radius: 50%;
        background: rgba($color: #000000, $alpha: .3);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% + 1, -50% + 1);
        z-index: -1;
      }
    }
  }
}
.movie-intro {
  width: 100%;
  padding: 3px 16px;
  > p {
    font-size: 15px;
    color: #555;
    line-height: 1.5em;
    overflow: hidden;
  }
  > .btn {
    color: #aaa;
    width: 16px;
    margin: 0 auto;
  }
  > .rot-x-180 {
    transform: rotateX(180deg);
  }
}
.overflow {
  max-height: 64px;
}
.play-vd {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  > video {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>

<template>
  <ai-list class="cinema-list-box" @loadMore="loadMore" :finished="disabledLoad">
    <div>
      <div class="cinema-item" v-for="item in cinemaList" :key="item.id">
        <div class="name ellipsis-line-1">
          {{ item.nm }}
        </div>
        <div class="pos-info">
          <div class="addr ellipsis-line-1 flex">
            {{ item.addr }}
          </div>
          <div class="distance">
            {{ item.distance }}
          </div>
        </div>
        <div class="tag-list">
          <div class="allow-refund" v-if="item.tag.allowRefund">退</div>
          <div class="endorse" v-if="item.tag.endorse">改签</div>
          <div class="snack" v-if="item.tag.snack">小吃</div>
          <div class="vip-tag" v-if="item.tag.vipTag">{{ item.tag.vipTag }}</div>
          <div class="hall-type" v-for="hall in item.tag.hallType" :key="hall">{{ hall }}</div>
        </div>
        <div class="card-tag" v-if="item.promotion.cardPromotionTag">
          <img :src="cardImg" width="15" height="14" />
          {{ item.promotion.cardPromotionTag }}
        </div>
      </div>
    </div>
  </ai-list>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({})
export default class CinemaNav extends Vue {
  @Prop(Array) private cinemaList: object[]
  @Prop(Boolean) private disabledLoad: boolean
  private cardImg =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=='

    private loadMore() {
      this.$emit('loadMore')
    }
}
</script>

<style lang="scss" scoped>
.cinema-list-box {
  position: absolute;
  top: 140px;
  bottom: 50px;
  left: 0;
  right: 0;
}
.cinema-item {
  margin: 0 15px;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
  > div ~ div {
    margin-top: 6px;
  }
  .pos-info {
    font-size: 13px;
    color: #666;
    display: flex;
    align-items: center;
    .distance {
      width: 70px;
    }
  }
  .tag-list {
    display: flex;
    font-size: 10px;
    > div {
      border: 1px solid #589daf;
      border-radius: 4px;
      padding: 0 4px;
      ~ div {
        margin-left: 3px;
      }
    }
    > .snack,
    .vip-tag {
      color: #ff9900;
      border-color: #ff9900;
    }
  }
  > .card-tag {
    display: flex;
    align-items: center;
    color: #999;
    font-size: 12px;
    > img {
      margin-right: 5px;
    }
  }
}
</style>

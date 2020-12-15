<template>
  <div>
    <ai-nav-bar title="猫眼电影" :showBack="false" />
    <IsLogged v-if="isLogged"/>
    <NotLogged v-else/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Getter } from 'vuex-class';
import IsLogged from './IsLogged.vue'
import NotLogged from './NotLogged.vue'
@Component({
  components: {
    IsLogged, NotLogged
  }
})
export default class Mine extends Vue {
  @Getter isLogged: boolean

  private created() {
    console.log(this.isLogged);
  }
}
</script>

<style lang="scss" scoped>

</style>
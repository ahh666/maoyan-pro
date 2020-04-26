import Vue from 'vue'
import API from '@/api'
import Util from './util'

declare module 'vue/types/vue' {
  interface Vue {
    $api: typeof API;
    $util: typeof Util;
    $toast: typeof Vue.prototype.$toast;
    // $dialog: typeof Vue.prototype.$dialog;
  }
}

// declare module 'better-scroll'
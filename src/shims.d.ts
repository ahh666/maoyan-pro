import Vue from 'vue'
import API from '@/api'
import Util from './util'

declare module 'vue/types/vue' {
  interface Vue {
    $api: typeof API;
    $util: typeof Util;
  }
}

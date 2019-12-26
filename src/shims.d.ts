import Vue from 'vue';
import API from '@/api';

declare module 'vue/types/vue' {
  interface Vue {
    $api: typeof API;
  }
}

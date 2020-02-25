import Vue from 'vue';
import store from './store/index';
import createRouter from './router';
import App from './App.vue';
import('../src/assets/scss/app.scss');

import http from '../src/config/http'

Vue.prototype.$http = http

export function createApp() {
  const router = createRouter();

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, store, router };
}
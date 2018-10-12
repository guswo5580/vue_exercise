import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store.js'

new Vue({
  el: '#app',
  store,
  //store : store로 선언하는 방식으로 선언
  render: h => h(App)
})

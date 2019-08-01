import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import store from './store/index'

Vue.config.productionTip = false
Vue.prototype.$store = store

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

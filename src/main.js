import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import store from './store/index'
import { create, all } from 'mathjs'

Vue.config.productionTip = false
Vue.prototype.$store = store

const config = { }
const math = create(all, config)
Vue.prototype.$math = math

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

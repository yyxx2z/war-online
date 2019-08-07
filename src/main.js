import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import store from './store/index'
import { create, all } from 'mathjs'
import { config } from './config/config'
import utils from './utils/utils'

Vue.config.productionTip = false
Vue.prototype.$store = store

Vue.prototype.$gameConfig = config
Vue.prototype.$utils = utils

const mathConfig = { }
const math = create(all, mathConfig)
Vue.prototype.$math = math

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// import 'font-awesome/css/font-awesome.min.css'
import '@/styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

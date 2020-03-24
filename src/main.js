import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/app.scss'

import GlobalComponents from './plugins/globalComponents'
Vue.use(GlobalComponents)

// Third-party libraries
import VueMoment from 'vue-moment'
Vue.use(VueMoment)

import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-161403793-1',
  checkDuplicatedScript: true
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

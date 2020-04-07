import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/app.scss'
import './registerServiceWorker'

import GlobalComponents from './plugins/globalComponents'
Vue.use(GlobalComponents)

// Third-party libraries
import VueMoment from 'vue-moment'
Vue.use(VueMoment)
// Map Component
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'
Vue.use(VueLayers)

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

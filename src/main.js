import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'

import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap'

Vue.config.productionTip = false

// Plugins
import VueParticles from 'vue-particles'

Vue.use(VueParticles, bootstrap)

new Vue({
  router,
  vuetify,
  VueParticles,
  render: h => h(App)
}).$mount('#app')

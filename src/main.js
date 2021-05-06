import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import './plugins/base'
// import './plugins/vue-page-transition'
// import './plugins/vue-moment'
// import './plugins/vue-currency-filter'
// import './plugins/vue-the-mask'
// import './plugins/chartist'
// import './plugins/vee-validate'
// import './plugins/vue-fullscreen'
// import './plugins/vue-trumbowyg'
// import './plugins/vue-resize-text'
// import './plugins/vue-input-facade'
// import './plugins/vue-awesome-countdown'
// import './plugins/vue-firebase'
import './plugins/vue-head'
import vuetify from './plugins/vuetify'

import i18n from './i18n'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: 'AW-765565322' },
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')

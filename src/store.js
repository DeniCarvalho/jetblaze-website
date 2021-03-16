import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
  },
  state: {
    isMobile: false,
    appName: 'Website',
  },

  getters: {
    isMobile (state) {
      return state.isMobile
    },
  },

  mutations: {},
  actions: {

  },
})

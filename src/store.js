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

  mutations: {
    CHECK_MOBILE (state, payload) {
      const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone|webOS/i.test(navigator.userAgent)
      state.isMobile = isMobile
    },
  },
  actions: {

  },
})

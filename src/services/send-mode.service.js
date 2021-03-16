import interceptor from './interceptor'
const resource = 'send-mode'
export default {
  async getAll () {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.get(`${resource}/list/all`, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async deleteSistema (sistemaId) {
    try {
      const retorno = await interceptor.delete(`${resource}/sistemas/${sistemaId}?api-key=${process.env.VUE_APP_API_KEY}`)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async getTemplates (templateId) {
    try {
      templateId = templateId || ''
      const retorno = await interceptor.get(`${resource}/templates-group/${templateId}?api-key=${process.env.VUE_APP_API_KEY}`)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async deleteTemplate (templateId) {
    try {
      const retorno = await interceptor.delete(`${resource}/templates/${templateId}?api-key=${process.env.VUE_APP_API_KEY}`)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },

  async addSistema (body) {
    try {
      const retorno = await interceptor.post(`${resource}/sistemas?api-key=${process.env.VUE_APP_API_KEY}`, body)
      return retorno
    } catch (error) {
      throw error.response
    }
  },
  async addTemplate (body) {
    try {
      const retorno = await interceptor.post(`${resource}/templates?api-key=${process.env.VUE_APP_API_KEY}`, body)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },

  async getVariaveis () {
    try {
      const retorno = await interceptor.get(`${resource}/variaveis?api-key=${process.env.VUE_APP_API_KEY}`)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
}

// interceptor.interceptors.response.use(function (response) {
//   return response
// }, function (error) {
//   if (error.response.status === 401) {
//     if (store.state.username && !store.state.tokenExpired) {
//       store.commit('SET_ERROR', error.response)
//     }
//   }
// })

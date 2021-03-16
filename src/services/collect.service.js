import interceptor from './interceptor'
import moment from 'moment'
import shared from './shared.service'

const resource = 'collect'
export default {
  async getCollectAll () {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.get(`${resource}/list/sender`, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async getCollectToday () {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.get(`${resource}/list/sender/today`, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async getCollectTodayResume (dateData) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.post(`${resource}/list/sender/today/amount`, {
        date: dateData.value,
        modeToday: dateData.modeToday,
      }, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async getCollectNextDays () {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.get(`${resource}/list/sender/next`, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async getCollectYesterday () {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.get(`${resource}/list/sender/yesterday`, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async addCollect (body) {
    try {
      body.adressSender.id = undefined
      if (body.sendMode === 'Avulso') {
        body.meliId = undefined
      }
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.post(`${resource}`, body, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },

  async cancel (collectId, reason) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      await interceptor.post(`${resource}/cancel/${collectId}`, { reason: reason }, headers)
    } catch (error) {
      throw error.response
    }
  },

  async getLimit () {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.get(`${resource}/limit`, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },

  async getAmountByKm (adressSender, adressRecipient, qtd) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.post(`${resource}/amount/km`, { adressSender, adressRecipient, qtd }, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },

  async getTablePrice () {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const { data } = await interceptor.get(`${resource}/table/price`, headers)
      return data
    } catch (error) {
      throw error.response
    }
  },

  async accessScannerGenerate () {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const { data } = await interceptor.get(`${resource}/scanner/generate`, headers)
      return data
    } catch (error) {
      throw error.response
    }
  },

  async ticketGenerate (id, jetId) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.post(`${resource}/ticket/generate`, { id: id }, headers)
      const blob = shared.b64toBlob(retorno.data, 'data:image/png;base64')
      var fileURL = window.URL.createObjectURL(blob)
      var fileLink = document.createElement('a')

      fileLink.href = fileURL
      fileLink.setAttribute('download', `etiqueta_${jetId}.pdf`)
      document.body.appendChild(fileLink)

      fileLink.click()
      return true
    } catch (error) {
      throw error.response
    }
  },
  async ticketGenerateLote () {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.post(`${resource}/ticket/generate/lote`, {}, headers)
      const blob = shared.b64toBlob(retorno.data, 'data:image/png;base64')
      var fileURL = window.URL.createObjectURL(blob)
      var fileLink = document.createElement('a')

      fileLink.href = fileURL
      const date = moment().format('DD_MM_YYYY')
      fileLink.setAttribute('download', `etiquetas_${date}.zip`)
      document.body.appendChild(fileLink)

      fileLink.click()
      return true
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

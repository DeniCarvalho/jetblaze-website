import interceptor from './interceptor'
const resource = 'meli'
export default {
  async connectUrl () {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.get(`${resource}/auth/url`, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async authorize (code) {
    try {
      let credential = ''
      if (code) {
        credential = btoa(JSON.stringify({ code: code }))
      } else {
        const _credential = localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH_MELI}`)
        credential = _credential || ''
      }
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      let { data } = await interceptor.get(`${resource}/auth/authorize/${credential}`, headers)
      if (!data) return false
      localStorage.setItem(process.env.VUE_APP_NAME_AUTH_MELI, `Bearer ${data}`)
      data = JSON.parse(atob(data))
      return data
    } catch (error) {
      localStorage.removeItem(`${process.env.VUE_APP_NAME_AUTH_MELI}`)
      throw error.response
    }
  },
  async getDataShipment (shipmentId) {
    try {
      const headers = {
        headers: {
          auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`),
          auth_meli: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH_MELI}`),
        },
      }
      const retorno = await interceptor.get(`${resource}/shipment/${shipmentId}`, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async getRecentsItems () {
    try {
      const authMeli = localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH_MELI}`)
      const headers = {
        headers: {
          auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`),
        },
      }
      const retorno = await interceptor.get(`${resource}/order/recent/${authMeli}`, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
}

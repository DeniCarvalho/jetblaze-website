import interceptor from './interceptor'
const resource = 'user'
export default {
  async validateRegister (body) {
    try {
      await interceptor.post(`${resource}/register/sender/validate`, body)
    } catch (error) {
      throw error.response
    }
  },
  async register (body) {
    try {
      const retorno = await interceptor.post(`${resource}/register/sender`, body)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async updateProfile (body) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.post(`${resource}/sender`, body, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async updatePassword (password) {
    try {
      const bodyJson = JSON.stringify({
        password: password,
      })
      const request = {
        payload: btoa(bodyJson),
      }
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.post(`${resource}/password/update`, request, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async resetPassword (password, userId) {
    try {
      const bodyJson = JSON.stringify({
        userId: userId,
        password: password,
      })
      const request = {
        payload: btoa(bodyJson),
      }
      const retorno = await interceptor.post(`${resource}/password/reset`, request)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async setPassword (userId, senha) {
    try {
      const bodyJson = JSON.stringify({
        userId: userId,
        password: senha,
      })
      const request = {
        payload: btoa(bodyJson),
      }
      const { data } = await interceptor.post(`${resource}/password/include`, request)
      localStorage.setItem(process.env.VUE_APP_NAME_AUTH, `Bearer ${data.token}`)
      return data.user
    } catch (error) {
      throw error.response
    }
  },
  async updateEmail (email) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.post(`${resource}/email/update`, { email: email }, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },

  async getImgProfile (userId) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.get(`${resource}/img-profile?userId=${userId}`, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async listSenderAllWithPending () {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.get(`${resource}/listSenderAllWithPending`, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async removeAccount () {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.delete(`${resource}/remove/account`, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async searchCNPJ (cnpj) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.post(`${resource}/search/cnpj`, {
        cnpj: cnpj,
      }, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
}

import interceptor from './interceptor'
const resource = 'codeVerification'
export default {
  async sendVerifyEmail (email) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.post(`${resource}/verify/email`, { email: email }, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async sendVerifyAccount (email, name) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.post(`${resource}/verify/account`, { email: email, name: name }, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async validate (code) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.get(`${resource}/${code}`, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async validateByEmail (code, email) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.get(`${resource}/${code}/by-email/${email}`, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
}

import interceptor from './interceptor'
const resource = 'address'
export default {
  async addOrEdit (data) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.post(`${resource}/user`, data, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async delete (id, userId) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.delete(`${resource}/${id}/${userId}`, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async coverageArea () {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.get(`${resource}/coverage/area`, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
}

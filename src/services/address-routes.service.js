import interceptor from './interceptor'
const resource = 'routes'
export default {
  async searchCep (cep) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.get(`${resource}/by/cep/${cep}`, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
}

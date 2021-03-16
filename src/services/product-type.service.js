import interceptor from './interceptor'
const resource = 'product-type'
export default {
  async list () {
    try {
      const retorno = await interceptor.get(`${resource}/list/all`)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
}

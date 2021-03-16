import interceptor from './interceptor'
const resource = 'availability'
export default {
  async availabilityDeliveryman (dateReference, user) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.post(`${resource}/find-one`, { dateReference, user }, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
}

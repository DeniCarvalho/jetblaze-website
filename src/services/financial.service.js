import interceptor from './interceptor'
import shared from './shared.service'
const resource = 'financial'
export default {
  async report (reference) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.post(`${resource}/report`, { reference: reference }, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async reportOldMoth () {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const retorno = await interceptor.post(`${resource}/report/old`, {}, headers)
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },
  async billetDownloadJuno (invoiceId) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const { data } = await interceptor.get(`${resource}/invoice/billet/${invoiceId}`, headers)
      window.open(data.link, '_blank')
      return true
    } catch (error) {
      throw error.response
    }
  },
  async billetDownload (invoiceId) {
    try {
      const headers = { headers: { auth: localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`) } }
      const { data } = await interceptor.get(`${resource}/invoice/billet/${invoiceId}`, headers)
      const blob = shared.b64toBlob(data.base64, 'data:application/pdf;base64')
      var fileURL = window.URL.createObjectURL(blob)
      var fileLink = document.createElement('a')
      fileLink.href = fileURL
      fileLink.setAttribute('download', `${data.filename}.pdf`)
      document.body.appendChild(fileLink)

      fileLink.click()
      return true
    } catch (error) {
      throw error.response
    }
  },
}

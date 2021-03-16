import axios from 'axios'

const baseDomain = process.env.VUE_APP_API_BASE
const baseURL = `${baseDomain}`
const _axios = axios.create({ baseURL })
_axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
        localStorage.removeItem(`${process.env.VUE_APP_NAME_AUTH}`)
        window.location.href = `${process.env.VUE_APP_FRONT}/acesso`
    }
    return Promise.reject(error)
  },
)
export default _axios

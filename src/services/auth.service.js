import interceptor from './interceptor'
const resource = 'auth'

export default {
  async login (body) {
    try {
      const bodyJson = JSON.stringify({
        email: body.email,
        password: body.senha,
      })
      const request = {
        payload: btoa(bodyJson),
      }
      const { data } = await interceptor.post(`${resource}/login`, request)
      localStorage.setItem(process.env.VUE_APP_NAME_AUTH, `Bearer ${data.token}`)
      return data.user
    } catch (error) {
      throw error.response
    }
  },
  async validAuthPass (token) {
    token = `Bearer ${token}`
    const { data } = await interceptor.get(`${resource}/pass`, { headers: { auth: token, 'Content-Type': 'application/json' } })
    return data
  },
}

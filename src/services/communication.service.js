import interceptor from './interceptor'
const resource = 'communication'
export default {
  async sendResetPass (email) {
    try {
      const retorno = await interceptor.post(`${resource}/email/resetPass`, {
        email: email,
        gancho: 'alterar_senha',
      })
      return retorno.data
    } catch (error) {
      throw error.response
    }
  },

  async sendPreCadastro (email) {
    try {
      await interceptor.post(`${resource}/email`, {
        email: email,
        gancho: 'sucesso_pre_cadastro_cliente',
        assunto: 'Pré-cadastro realizado!',
      })
    } catch (error) {
      throw error.response
    }
  },
}

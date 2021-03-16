import Vue from 'vue'
import VueI18n from 'vue-i18n'

import ptBr from 'vuetify/lib/locale/pt'

Vue.use(VueI18n)

const messages = {
  ptBr: {
    ...require('@/locales/pt-BR.json'),
    $vuetify: ptBr,
  },
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'pt-BR',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'pt-BR',
  messages,
  silentTranslationWarn: true,
})

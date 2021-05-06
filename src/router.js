import Vue from 'vue'
import Router from 'vue-router'
import VueGtm from 'vue-gtm'
import store from './store'
// import auth from '@/middlewares/auth'
import middlewarePipeline from './middlewarePipeline'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/modules/website/Index.vue'),
      redirect: { path: '' },
      children: [
        {
          name: 'Home',
          path: '',
          component: () => import('@/modules/website/pages/home.vue'),
          transition: 'fade-enter',
          meta: {
            middleware: [
            ],
            title: 'Jetblaze Express - Entregas rápidas | Mercado Envios Flex',
            metaTags: [
              {
                property: 'og:title',
                content: 'Jetblaze Express - Entregas rápidas | Mercado Envios Flex',
              },
              {
                name: 'description',
                content: 'Plataforma para entregas de encomendas no mesmo dia. Integrada com o Mercado Envios Flex, em poucos cliques seus pedidos de envio são registrados',
              },
              {
                property: 'og:description',
                content: 'Plataforma para entregas de encomendas no mesmo dia. Integrada com o Mercado Envios Flex, em poucos cliques seus pedidos de envio são registrados',
              },
            ],
          },
        },
        {
          name: 'Como Funciona',
          path: 'como-funciona',
          component: () => import('@/modules/website/pages/about.vue'),
          transition: 'fade-enter',
          meta: {
            middleware: [
            ],
            title: 'Como Funciona - Jetblaze Express',
            metaTags: [
              {
                property: 'og:title',
                content: 'Como Funciona - Jetblaze Express',
              },
              {
                name: 'description',
                content: 'Saiba como funciona a plataforma e como será nossa rotina!',
              },
              {
                property: 'og:description',
                content: 'Saiba como funciona a plataforma e como será nossa rotina!',
              },
            ],
          },
        },
        {
          name: 'Valores',
          path: 'valores',
          component: () => import('@/modules/website/pages/price.vue'),
          meta: {
            transition: 'fade-in-right',
            middleware: [
            ],
            title: 'Preços - Jetblaze Express',
            metaTags: [
              {
                property: 'og:title',
                content: 'Preços - Jetblaze Express',
              },
              {
                name: 'description',
                content: 'Preços a partir de R$9,00 incluso integração com Mercado Livre e rastreio em tempo real',
              },
              {
                property: 'og:description',
                content: 'Preços a partir de R$9,00 incluso integração com Mercado Livre e rastreio em tempo real',
              },
            ],
          },
        },
        {
          name: 'FAQ',
          path: 'faq',
          component: () => import('@/modules/website/pages/faq.vue'),
          meta: {
            transition: 'fade-in-right',
            middleware: [
            ],
            title: 'FAQ - Jetblaze Express',
            metaTags: [
              {
                property: 'og:title',
                content: 'FAQ - Jetblaze Express',
              },
              {
                name: 'description',
                content: 'O que é a Jetblaze? R: Somos uma plataforma que proporciona um serviço de entregas completo...',
              },
              {
                property: 'og:description',
                content: 'O que é a Jetblaze? R: Somos uma plataforma que proporciona um serviço de entregas completo...',
              },
            ],
          },
        },
        {
          name: 'Contato',
          path: 'contato',
          component: () => import('@/modules/website/pages/contact.vue'),
          meta: {
            transition: 'fade-in-right',
            middleware: [
            ],
            title: 'Contato - Jetblaze Express',
            metaTags: [
              {
                property: 'og:title',
                content: 'Contato - Jetblaze Express',
              },
              {
                name: 'description',
                content: 'Entre em contato a qualquer momento através de nossos canais de atendimento',
              },
              {
                property: 'og:description',
                content: 'Entre em contato a qualquer momento através de nossos canais de atendimento',
              },
            ],
          },
        },
        {
          name: 'Quero Entregar',
          path: 'entregador',
          component: () => import('@/modules/website/pages/deliveryman.vue'),
          meta: {
            transition: 'fade-in-right',
            middleware: [
            ],
            title: 'Quero entregar - Jetblaze Express',
            metaTags: [
              {
                property: 'og:title',
                content: 'Quero entregar - Jetblaze Express',
              },
              {
                name: 'description',
                content: 'Aumente sua renda realizando entregas para clientes próximos a onde você mora',
              },
              {
                property: 'og:description',
                content: 'Aumente sua renda realizando entregas para clientes próximos a onde você mora',
              },
            ],
          },
        },
      ],
    },

  ],
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware || !to.meta.middleware[0]) {
    return next()
  }
  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next,
    store,
  }

  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag))

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  })
})

Vue.use(VueGtm, {
  id: 'GTM-WRFM9HZ', // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryPararms: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}]
  defer: false, // defaults to false. Script can be set to `defer` to increase page-load-time at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible)
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: false, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  ignoredViews: [], // Don't trigger events for specified router names (case insensitive) (optional)
  trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
})

export default router

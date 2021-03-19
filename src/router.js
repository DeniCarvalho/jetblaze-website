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
          },
        },
      ],
    },
    // {
    //   path: '/',
    //   component: () => import('@/modules/website/Index.vue'),
    //   meta: {
    //     transition: 'fade-in-right',
    //     middleware: [
    //     ],
    //   },
    // },
    // {
    //   path: '/como-funciona',
    //   component: () => import('@/modules/website/pages/about.vue'),
    //   meta: {
    //     transition: 'fade-in-right',
    //     middleware: [
    //       // auth,
    //     ],
    //   },
    // },
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

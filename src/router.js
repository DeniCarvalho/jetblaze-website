import Vue from 'vue'
import Router from 'vue-router'
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

export default router

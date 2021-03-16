import interceptor from '@/services/interceptor'
const resource = 'auth'

export default async function auth ({ next, store }) {
    const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone|webOS/i.test(navigator.userAgent)
    if (isMobile) {
        return next({
            name: 'IsMobile',
        })
    }

    const token = localStorage.getItem(`${process.env.VUE_APP_NAME_AUTH}`)
    if (!token) {
        localStorage.removeItem(`${process.env.VUE_APP_NAME_AUTH}`)
        localStorage.removeItem(`${process.env.VUE_APP_NAME_AUTH_MELI}`)
        return next({
            name: 'Login',
        })
    }

    try {
        const { data } = await interceptor.get(`${resource}`, { headers: { auth: token, 'Content-Type': 'application/json' } })
        if (data) {
            store.commit('SET_USER', data)
        } else {
            localStorage.removeItem(`${process.env.VUE_APP_NAME_AUTH}`)
            localStorage.removeItem(`${process.env.VUE_APP_NAME_AUTH_MELI}`)
            return next({
                name: 'Login',
            })
        }
    } catch (error) {
        localStorage.removeItem(`${process.env.VUE_APP_NAME_AUTH}`)
        localStorage.removeItem(`${process.env.VUE_APP_NAME_AUTH_MELI}`)
        return next({
            name: 'Login',
        })
    }
    return next()
}

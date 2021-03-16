export default async function detectDevice ({ next, store }) {
    const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone|webOS/i.test(navigator.userAgent)
    if (isMobile) {
        return next({
            name: 'IsMobile',
        })
    }
    return next()
}

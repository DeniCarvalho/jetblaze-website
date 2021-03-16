<template>
  <router-view />
</template>
<script>
  export default {
    name: 'App',
    mounted () {
      window.$crisp = []
      window.CRISP_WEBSITE_ID = '0ed186dc-11a1-4a62-a3d4-faf7e2d8249f';
      (function () {
        const d = document
        const s = d.createElement('script')
        s.src = 'https://client.crisp.chat/l.js'
        s.async = 1
        d.getElementsByTagName('head')[0].appendChild(s)
      })()
    },
    created () {
      this.$store.commit('CHECK_MOBILE')
    },
  }
</script>

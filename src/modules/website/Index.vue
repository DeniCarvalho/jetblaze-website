<template>
  <div>
    <!-- Preloader-->
    <div class="preloader">
      <div class="preloader-block">
        <div class="preloader-icon">
          <span class="loading-dot loading-dot-1" /><span
            class="loading-dot loading-dot-2"
          /><span class="loading-dot loading-dot-3" />
        </div>
      </div>
    </div>
    <div id="overlay-effect" />
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view :transition="$route.transition" />
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'WebsiteIndex',
    components: {},
    data: () => ({}),

    computed: {},
    created () {},
  }
</script>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .15s;
}

.fade-enter-active {
  transition-delay: .15s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>

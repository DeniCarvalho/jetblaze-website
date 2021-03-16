<template>
  <section class="mb-12 text-center">
    <h1
      class="font-weight-light mb-2 headline"
      v-text="`${heading}`"
    />

    <span
      v-if="!subHeadingPrice"
      class="font-weight-light subtitle-1"
    >
      Consulte a
      <a
        :href="`https://vuetifyjs.com/${link}`"
        rel="noopener"
        target="_blank"
        class="secondary--text"
        style="text-decoration:none;"
      >
        documentação
      </a>
    </span>
    <span
      v-else-if="subHeading"
      class="font-weight-light subtitle-1"
    >{{ subHeading }}</span>
    <span
      v-else
      class="font-weight-light subtitle-1"
    >
      Os valores são cobrados conforme
      <a
        rel="noopener"
        target="_blank"
        class="secondary--text"
        style="text-decoration:none;"
        @click="showTablePrice()"
      >
        tabela de preços
      </a>
    </span>
  </section>
</template>

<script>
  export default {
    name: 'VComponent',

    props: {
      heading: {
        type: String,
        default: '',
      },
      subHeadingPrice: {
        type: Boolean,
        default: false,
      },
      subHeading: {
        type: String,
        default: '',
      },
      link: {
        type: String,
        default: '',
      },
    },
    methods: {
      showTablePrice () {
        this.$emit('showPrices')
      },
    },
  }
</script>

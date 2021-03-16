<template>
  <v-card
    v-bind="$attrs"
    :class="classes"
    class="v-card--material pa-3"
  >
    <div class="d-flex grow flex-wrap">
      <v-avatar
        v-if="avatar"
        size="128"
        class="mx-auto v-card--material__avatar"
        :class="avatarElevation"
        :color="avatarColor"
      >
        <v-img :src="avatar" />
      </v-avatar>

      <v-sheet
        v-else
        :class="{
          'pa-7': !$slots.image,
          'cursor-pointer': typeSystem
        }"
        :color="color"
        :max-height="icon ? 90 : undefined"
        :width="icon ? 'auto' : '100%'"
        :elevation="iconElevation"
        class="text-start v-card--material__heading mb-n6"
        dark
        @click="selectEvent"
      >
        <slot
          v-if="$slots.heading"
          name="heading"
        />

        <slot
          v-else-if="$slots.image"
          name="image"
        />

        <div
          v-else-if="title && !icon"
          class="display-1 font-weight-light fill-height fluid"
        >
          <v-row
            align="center"
            class="justify-lg-space-between"
          >
            <div v-text="title" />
            <v-btn
              v-if="btnInfo"
              icon
              color="white"
              title="Clique para mais informações"
              @click="infoEvent()"
            >
              <v-icon size="25">
                mdi-information
              </v-icon>
            </v-btn>
            <v-btn
              v-if="btnPlus"
              icon
              color="white"
              title="Clique para adicionar"
              @click="plusEvent()"
            >
              <v-icon size="25">
                mdi-plus
              </v-icon>
            </v-btn>
            <v-menu
              v-if="btnMenu"
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn

                  icon
                  color="white"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon size="25">
                    mdi-dots-vertical
                  </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in actions"
                  :key="index"
                  @click="menuEvent(item)"
                >
                  <v-list-item-title :class="item.type === 'cancel' ? 'red--text' : ''">
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>
        </div>

        <v-icon
          v-else-if="icon"
          size="32"

          v-text="icon"
        />

        <div
          v-if="text"
          class="headline font-weight-thin"
          v-text="text"
        />
      </v-sheet>

      <div
        v-if="$slots['after-heading']"
        class="ml-6"
      >
        <slot name="after-heading" />
      </div>

      <div
        v-else-if="icon && title"
        class="ml-4"
      >
        <div
          class="card-title font-weight-light"
          v-text="title"
        />
        <div
          v-if="subtitle"
          class="card-title font-mono"
          v-text="subtitle"
        />
        <div
          v-else-if="subtitleCurrency"
          class="card-title font-mono"
        >
          {{ subtitleCurrency | currency }}
        </div>
      </div>
      <v-spacer />
      <v-menu
        v-if="btnBoleto"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="ma-2"
            outlined
            :color="colorText"
            v-bind="attrs"
            v-on="on"
          >
            Pagar
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in actionsBillet"
            :key="index"
            @click="menuBilletEvent(item)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu
        v-else-if="btnRecibo"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            class="ma-2"
            :color="colorText"
            outlined
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left>
              mdi-check-circle
            </v-icon>
            Fatura paga
            <v-icon
              right
              dark
            >
              mdi-menu-down
            </v-icon>
          </v-chip>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in actionsInvoicePayment"
            :key="index"
            @click="openUrl(item)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <div
        v-else-if="statusText"
        class="mt-0"
      >
        <v-chip
          class="ma-2"
          :color="colorText"
          outlined
        >
          {{ statusText }}
        </v-chip>
      </div>
    </div>

    <slot />

    <template v-if="$slots.actions">
      <v-divider class="mt-2" />

      <v-card-actions class="pb-0">
        <slot name="actions" />
      </v-card-actions>
    </template>
  </v-card>
</template>

<script>
  export default {
    name: 'MaterialCard',

    props: {
      avatar: {
        type: String,
        default: '',
      },
      avatarColor: {
        type: String,
        default: 'grey',
      },
      avatarElevation: {
        type: String,
        default: 'elevation-6',
      },
      iconElevation: {
        type: Number,
        default: 6,
      },
      color: {
        type: String,
        default: 'success',
      },
      icon: {
        type: String,
        default: undefined,
      },
      image: {
        type: Boolean,
        default: false,
      },
      text: {
        type: String,
        default: '',
      },
      title: {
        type: String,
        default: '',
      },
      subtitle: {
        type: String,
        default: '',
      },
      subtitleCurrency: {
        type: String,
        default: '',
      },
      btnInfo: {
        type: Boolean,
        default: false,
      },
      typeSystem: {
        type: Boolean,
        default: false,
      },
      btnMenu: {
        type: Boolean,
        default: false,
      },
      btnPlus: {
        type: Boolean,
        default: false,
      },
      statusText: {
        type: String,
        default: '',
      },
      colorText: {
        type: String,
        default: '',
      },
      btnBoleto: {
        type: Boolean,
        default: false,
      },
      btnRecibo: {
        type: Boolean,
        default: false,
      },
      urlNfs: {
        type: String,
        default: '',
      },
      urlRecibo: {
        type: String,
        default: '',
      },
      btnBoletoColor: {
        type: String,
        default: 'success',
      },
    },
    data () {
      return {
        actions: [
          { title: 'Alterar email', type: 'email' },
          { title: 'Alterar senha', type: 'senha' },
          { title: 'Excluir conta', type: 'cancel' },
        ],
        actionsBillet: [
          { title: 'Copiar código de barras', type: 'codigoBarras' },
          { title: 'Download', type: 'donwload' },
        ],
        actionsInvoicePayment: [
          { title: 'NFs-e', type: 'nfse' },
          // { title: 'Recibo eletrônico', type: 'recibo' },
        ],
      }
    },

    computed: {
      classes () {
        return {
          'v-card--material--has-heading': this.hasHeading,
        }
      },
      hasHeading () {
        return Boolean(this.$slots.heading || this.title || this.icon)
      },
      hasAltHeading () {
        return Boolean(this.$slots.heading || (this.title && this.icon))
      },
    },
    methods: {
      infoEvent () {
        this.$emit('openInfo')
      },
      plusEvent () {
        this.$emit('openPlus')
      },
      menuEvent (item) {
        this.$emit('openMenuAction', item)
      },
      menuBilletEvent (item) {
        this.$emit('openMenuBilletAction', item)
      },
      openUrl (item) {
        if (item.type === 'nfse') {
          if (this.urlNfs) {
            window.open(this.urlNfs, '_blank')
          }
        } else if (item.type === 'recibo') {
          if (this.urlRecibo) {
            window.open(this.urlRecibo, '_blank')
          }
        }
      },
      selectEvent () {
        if (this.typeSystem) { this.$emit('selectEvent') }
      },
    },
  }
</script>

<style lang="sass">
  .v-card--material
    &__avatar
      position: relative
      top: -64px
      margin-bottom: -32px

    &__heading
      position: relative
      top: -40px
      transition: .3s ease
      z-index: 1
</style>
<style lang="scss">
.font-mono{
  font-family: monospace !important;
}
</style>

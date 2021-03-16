<template>
  <base-material-card
    :icon="icon"
    class="v-card--material-stats"
    v-bind="$attrs"
    :type-system="typeSystem"
    @selectEvent="selectEvent"
    v-on="$listeners"
  >
    <template v-slot:after-heading>
      <div class="ml-auto text-right">
        <div
          class="body-3 grey--text font-weight-light"
          v-text="title"
        />

        <h3 class="display-2 font-weight-light text--primary">
          {{ value }}
          <small>{{ smallValue }}</small>
        </h3>
      </div>
    </template>

    <v-col
      cols="12"
      class="px-0"
    >
      <v-divider />
    </v-col>

    <v-icon
      :color="subIconColor"
      size="16"
      class="ml-2 mr-1"
    >
      {{ subIcon }}
    </v-icon>

    <v-row
      align="center"
      class="justify-lg-space-between"
    >
      <span
        :class="{ subTextColor: subTextColor, 'cursor-pointer': typeSystem }"
        class="caption grey--text font-weight-light"
        @click="selectEvent()"
        v-text="subText"
      />
      <v-spacer />
      <v-btn
        v-if="typeSystem"
        icon
        color="red"
        @click="deleteEvent()"
      >
        <v-icon size="22">
          mdi-delete
        </v-icon>
      </v-btn>
    </v-row>
  </base-material-card>
</template>

<script>
  import Card from './Card'

  export default {
    name: 'MaterialStatsCard',

    inheritAttrs: false,

    props: {
      ...Card.props,
      icon: {
        type: String,
        required: true,
      },
      subIcon: {
        type: String,
        default: undefined,
      },
      subIconColor: {
        type: String,
        default: undefined,
      },
      subTextColor: {
        type: String,
        default: undefined,
      },
      subText: {
        type: String,
        default: undefined,
      },
      title: {
        type: String,
        default: undefined,
      },
      value: {
        type: String,
        default: undefined,
      },
      smallValue: {
        type: Number,
        default: undefined,
      },
      data: {
        type: Object,
        default: undefined,
      },
      typeSystem: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      selectEvent () {
        if (this.data && this.typeSystem) {
          this.$emit('select', this.data)
        }
      },
      deleteEvent () {
        if (this.data) {
          this.$emit('openDelete', this.data)
        }
      },
    },
  }
</script>

<style lang="sass">
.v-card--material-stats
  display: flex
  flex-wrap: wrap
  position: relative

  > div:first-child
    justify-content: space-between

  .v-card
    border-radius: 4px
    flex: 0 1 auto

  .v-card__text
    display: inline-block
    flex: 1 0 calc(100% - 120px)
    position: absolute
    top: 0
    right: 0
    width: 100%

  .v-card__actions
    flex: 1 0 100%

  .v-btn--icon.v-size--default
    height: 20px !important
</style>

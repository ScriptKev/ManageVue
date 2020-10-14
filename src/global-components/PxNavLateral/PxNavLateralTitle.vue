<template>
  <v-list-item-content>
    <v-list-item-title class="title">
      {{ appTitle }}
    </v-list-item-title>
  </v-list-item-content>
</template>

<script>
export default {
  name: 'PxNavLateralTitle',
  props: {
    appTitle: {
      type: String,
      required: true,
      default: 'Piscinas Aqualux'
    }
  }
}
</script>

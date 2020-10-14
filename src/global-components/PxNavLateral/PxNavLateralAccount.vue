<template>
  <v-list-item-content>
    <v-list-item-title>{{ accountName }}</v-list-item-title>
    <v-list-item-subtitle>{{ levelAuth }}</v-list-item-subtitle>
  </v-list-item-content>
</template>

<script>
export default {
  name: 'PxNavLateralAccount',
  props: {
    accountName: {
      type: String,
      required: true,
      default: "User Name"
    },

    levelAuth: {
      type: String,
      required: true,
      default: 'User'
    }
  }
}
</script>

<template>
  <v-container style="height: 600px;" class="rounded-lg grey lighten-5">
    <v-row >
      <slot></slot>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PxGridService'
}
</script>

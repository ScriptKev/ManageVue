<template>
  <v-list-item :to="route.to">
    <v-list-item-icon>
      <v-icon>{{ route.icon }}</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>
        {{ route.title }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'PxNavLateralRoutes',
  props: {
    route: {
      type: Object,
    }
  }
}
</script>


<template>
  <v-list-item-avatar :class="{ purple: !avatarSrc }" size="52">
    <img v-if="avatarSrc" :src="avatarSrc">
    <v-icon v-else dark>mdi-account-circle</v-icon>
  </v-list-item-avatar>
</template>

<script>
export default {
  name: 'PxNavLateralAvatar',
  props: {
    avatarSrc: {
      type: String,
    }
  }
}
</script>
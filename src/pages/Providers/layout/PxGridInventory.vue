<template>
  <v-virtual-scroll
    :items="items"
    :item-height="65"
    max-width="100%"
    max-height="520"
  >
    <template v-slot="{ item }" subheader>
      <v-list-item @click="">
        <v-list-item-avatar size="60">
          <v-avatar>
            <v-img alt="avatar" :src="item.src" />
          </v-avatar>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-btn @click="" icon>
            <v-icon color="deep-purple accent-4">
              mdi-pencil-outline
            </v-icon>
          </v-btn>
        </v-list-item-icon>
      </v-list-item>
    </template>
  </v-virtual-scroll>
</template>

<script>
export default {
  name: 'PxGridInventory',
  props: {
    items: {
      type: Array
    }
  }
}
</script>

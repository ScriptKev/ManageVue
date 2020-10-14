<template>
  <v-virtual-scroll
    :items="items"
    :item-height="75"
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

<style lang="scss" scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 25px;
  background: rgb(77, 136, 247); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>


<script>
export default {
  name: 'PxListItems',
  props: {
    items: {
      type: Array
    }
  }
}
</script>

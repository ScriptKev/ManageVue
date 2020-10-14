<template>
  <v-col cols="12" sm="4">
    <v-card width="250" >
      <v-img
        :src="card.src"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title v-text="card.title"></v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn dark icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn dark icon>
            <v-icon>mdi-bookmark</v-icon>
          </v-btn>
        </v-card-actions>
      </v-img>
    </v-card>
  </v-col>
</template>

<style lang="scss" scoped>
  .service {
    width: 200px;
    height: 130px;
    background-color: red;
    border-radius: 10%;
  }
</style>

<script>

export default {
  name: 'PxService',
  props: {
    card: {
      type: Object
    }
  }
}
</script>

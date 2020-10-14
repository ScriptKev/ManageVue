<template>
  <div class="inventory px-10 py-10">
    <h3>Clientes</h3>
    <PxSearchClients />
    <PxListItems :items="clients" />
  </div>
</template>

<style lang="scss" scoped>
  .inventory {
    height: 100%;
    width: 100%;
    margin: auto;
    background-color: transparent;
    border-radius: 30px;
  }
</style>

<script>
import PxSearchClients from '@/pages/Clients/components/PxSearchClients';
import PxListItems from '@/common-components/PxListItems';

export default {
  name: 'Inventory',
  components: { PxSearchClients, PxListItems },
  data: () => ({
    colors: ['#2196F3', '#90CAF9', '#64B5F6', '#42A5F5', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', '#82B1FF', '#448AFF', '#2979FF', '#2962FF'],
    names: ['Oliver', 'Jake', 'Noah', 'James', 'Jack', 'Connor', 'Liam', 'John', 'Harry', 'Callum', 'Mason', 'Robert', 'Jacob', 'Jacob', 'Jacob', 'Michael', 'Charlie', 'Kyle', 'William', 'William', 'Thomas', 'Joe', 'Ethan', 'David', 'George', 'Reece', 'Michael', 'Richard', 'Oscar', 'Rhys', 'Alexander', 'Joseph', 'James', 'Charlie', 'James', 'Charles', 'William', 'Damian', 'Daniel', 'Thomas', 'Amelia', 'Margaret', 'Emma', 'Mary', 'Olivia', 'Samantha', 'Olivia', 'Patricia', 'Isla', 'Bethany'],
    surnames: ['Smith', 'Anderson', 'Clark', 'Wright', 'Mitchell', 'Johnson', 'Thomas', 'Rodriguez', 'Lopez', 'Perez', 'Williams', 'Jackson', 'Lewis', 'Hill', 'Roberts', 'Jones', 'White', 'Lee', 'Scott', 'Turner', 'Brown', 'Harris', 'Walker', 'Green', 'Phillips', 'Davis', 'Martin', 'Hall', 'Adams', 'Campbell', 'Miller', 'Thompson', 'Allen', 'Baker', 'Parker', 'Wilson', 'Garcia', 'Young', 'Gonzalez', 'Evans', 'Moore', 'Martinez', 'Hernandez', 'Nelson', 'Edwards', 'Taylor', 'Robinson', 'King', 'Carter', 'Collins'],
    search: '',
  }),

  computed: {
    clients () {
      const namesLength = this.names.length
      const surnamesLength = this.surnames.length
      const colorsLength = this.colors.length

      return Array.from({ length: 30 }, (k, v) => {
        const name = this.names[this.genRandomIndex(namesLength)]
        const surname = this.surnames[this.genRandomIndex(surnamesLength)]

        return {
          color: this.colors[this.genRandomIndex(colorsLength)],
          title: `${name} ${surname}`,
          initials: `${name[0]} ${surname[0]}`,
          src: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
        }
      })
    },
  },

  methods: {
    genRandomIndex (length) {
      return Math.ceil(Math.random() * (length - 1))
    },
  },
}
</script>

<template>
  <div class="services px-10 py-10">
    <h3>Servicios</h3>
    <PxGridService>
      <PxService v-for="(c,i) in cards" :key="i" :card="c" />
    </PxGridService>
  </div>
</template>

<style lang="scss" scoped>
  .services {
    height: 100%;
    width: 100%;
    margin: auto;
    background-color: transparent;
    border-radius: 30px;
  }
</style>

<script>
import PxGridService from '@/pages/Services/layout/PxGridService';
import PxService from '@/pages/Services/components/PxService';

export default {
  name: 'Services',
  components: { PxService, PxGridService },
  data: () => ({
    cards: [
      { title: 'Mantenimiento', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
      { title: 'Construcción', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
      { title: 'Remodelaciones', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
      { title: 'Servicio Tecnico', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
    ],
  }),
}
</script>

<template>
  <div class="inventory px-10 py-10">
    <h3>Inventario</h3>
    <PxSearchProduct />
    <PxListItems :items="products" />
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
import PxSearchProduct from '@/pages/Inventory/components/PxSearchProduct';
import PxListItems from '@/common-components/PxListItems';

export default {
  name: 'Inventory',
  components: { PxSearchProduct, PxListItems },
  data: () => ({
    products: [
      {
        title: 'Cloro',
        src: 'http://www.piscinasaqualux.com/Downloads/Catalogo/Productos_de_Quimicos/Cloro/011017-Cloro-HTH-45kg.jpg',
        category: 'quimico',
        keyword: 'cloro'
      },
      {
        title: 'Tricloro',
        src: 'http://www.piscinasaqualux.com/Downloads/Catalogo/Productos_de_Quimicos/Tabletas/011066-011068-011069-011042-Tricloro-tabletas.jpg',
        category: 'quimico',
        keyword: 'tricloro'
      },
      {
        title: 'Alguicidas',
        src: 'http://www.piscinasaqualux.com/Downloads/Catalogo/Productos_de_Quimicos/Alguicida_Copper_7/011070-Alguicida-Copper7.jpg',
        category: 'quimico',
        keyword: 'alguicidas'
      },
      {
        title: 'Clarificadores',
        src: 'http://www.piscinasaqualux.com/Downloads/Catalogo/Productos_de_Quimicos/Clarificador_HTH/011010-Clarificador-HTH-gl.jpg',
        category: 'quimico',
        keyword: 'clarificadores'
      },
      {
        title: 'Sal',
        src: 'http://www.piscinasaqualux.com/Downloads/Catalogo/Productos_de_Quimicos/Sal/Sal.jpg',
        category: 'quimico',
        keyword: 'sal'
      },
      {
        title: 'Arena',
        src: 'http://www.piscinasaqualux.com/Downloads/Catalogo/Productos_de_Quimicos/Arena/014003-Arena.jpg',
        category: 'quimico',
        keyword: 'arena'
      },
    ],
  }),
}
</script>

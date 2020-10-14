<template>
  <div class="home px-10 py-10">
    <div class="home__title">
      <h1>Bienvenidos a ManageVue</h1>
      <h4>Una App de gestion de servicios y personas, navega por nuestras rutas!</h4>
    </div>

    <br>

    <div class="home__subtitle">
      <span>Esta App esta en desarrollo por ahora solo es demostrativa, <br> sin ninguna funcionalidad.</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: auto;
    background-color: transparent;
    border-radius: 30px;
    text-align: center;

    &__subtitle {

      & span {
        color: rgb(91, 129, 255);
      }
    }
  }
</style>

<script>

export default {
  name: 'Home',
}
</script>

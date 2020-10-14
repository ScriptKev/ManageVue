<template>
  <v-app>
    <PxNavLateral />
    <v-main class="bg-main">
      <v-container fluid class="py-0 py-2">
        <div class="bg-route">
          <transition name="slide-fade" mode="out-in">
            <router-view />
          </transition>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
  .bg-main {
    background-color: rgb(244 67 54);
  }

  .bg-route {
    height: 97vh;
    width: 100%;
    margin: auto;
    background-color:white;
    border-radius: 30px;
  }

.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script>
import PxNavLateral from '@/global-components/PxNavLateral/index'

export default {
  name: 'App',
  components: { PxNavLateral }
}
</script>

<template>
  <v-navigation-drawer app color="red" dark permanent>
    <template v-slot:prepend>
      <v-list-item>
        <PxNavLateralTitle appTitle="ManageVue" />
      </v-list-item>

      <v-list-item two-line>
        <PxNavLateralAvatar avatarSrc="https://avatars1.githubusercontent.com/u/67594059?s=460&u=387cc72563cb9e82618a26243bf2c8ccaf142959&v=4" />
        <PxNavLateralAccount :accountName="user.name" :levelAuth="user.levelAuth" />
      </v-list-item>
    </template>

    <v-divider />

    <v-list dense nav>
      <PxNavLateralRoutes v-for="(r,i) in routes" :key="i" :route="r" />
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>

</style>

<script>
import PxNavLateralTitle from './PxNavLateralTitle';
import PxNavLateralAvatar from './PxNavLateralAvatar';
import PxNavLateralAccount from './PxNavLateralAccount';
import PxNavLateralRoutes from './PxNavLateralRoutes';

export default {
  name: 'PxNavLateral',
  components: { PxNavLateralTitle, PxNavLateralAvatar, PxNavLateralAccount, PxNavLateralRoutes },
  data: () => ({
    user: {
      name: 'ScriptKev',
      levelAuth: 'Admin'
    },
    routes: [
      { title: 'Inicio', icon: 'mdi-home', to:'/' },
      { title: 'Inventario', icon: 'mdi-store', to:'/inventory' },
      { title: 'Clientes', icon: 'mdi-account-group', to:'/clients' },
      { title: 'Proveedores', icon: 'mdi-account-supervisor', to:'/providers' },
      { title: 'Servicios', icon: 'mdi-toolbox-outline', to:'/services' },
    ],
    right: null,
  })
}
</script>

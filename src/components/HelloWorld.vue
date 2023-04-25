<template>
  <v-toolbar dark color="primary">
    <v-toolbar-title class="white--text">InmoPortal</v-toolbar-title>
    <v-toolbar-items color="white">
      <router-link to="/login">
        <v-btn flat>Login</v-btn>
      </router-link>
      <router-link to="/registro">
        <v-btn flat>Registrate</v-btn>
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
  <v-toolbar>
      <router-link to="/">
        <v-btn flat>Inicio</v-btn>
      </router-link>
      <router-link to="/mispropiedades">
          <v-btn flat>Mis propiedades</v-btn>
      </router-link>
      <router-link to="/miperfil">
          <v-btn flat>Mi perfil</v-btn>
      </router-link>
    
  </v-toolbar>

  </template>

<script>
export default {
  name: 'HelloWord'
}
</script>
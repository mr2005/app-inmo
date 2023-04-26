<template>
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
  name: 'Menu'
}
</script>
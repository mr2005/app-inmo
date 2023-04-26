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

  </template>

<script>
export default {
  name: 'HelloWord'
}
</script>
<template>
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent>
        <v-text-field
          v-model="nombre"
          :rules="rules"
          label="Nombre"
        ></v-text-field>
        <v-text-field
          v-model="apellidos"
          label="Apellidos"
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="Correo electrónico"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
        ></v-text-field>
        <v-btn type="submit" block class="mt-2" color="primary">Registro</v-btn>
      </v-form>
    </v-sheet>
  </template>
  
  <script>
    export default {
      data: () => ({
        email: '',
        rules: [
          value => {
            if (value) return true
  
            return 'Debes introducir un correo electrónico'
          },
        ],
      }),
    }
  </script>
  
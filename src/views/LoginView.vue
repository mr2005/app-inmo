<template>
  <v-sheet width="300" class="mx-auto">
    <h2 class="mt-12 mb-4 text-center">Inicie sesión</h2>
    <v-form @submit.prevent>
      <v-text-field
        v-model="email"
        :rules="rules"
        label="Correo electrónico"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2" color="primary">Acceder</v-btn>
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
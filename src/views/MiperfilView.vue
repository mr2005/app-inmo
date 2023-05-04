<template>
    <HelloWorld />
    <Menu />
    <v-row class="text-center">
          <v-col class="mb-4">
              <h1>Perfil de usuario</h1>
          </v-col>
        </v-row>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import HelloWorld from '../components/HelloWorld.vue';
  import Menu from '../components/Menu.vue';
  
  export default defineComponent({
    name: 'MiperfilView',
  
    components: {
      HelloWorld,
      Menu,
    
    },
  });
  </script>
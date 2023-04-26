<template>
    <HelloWorld />
    <Menu />
    <div><h1>Mi Perfil</h1></div>
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
<template>
    <HelloWorld />
    <Menu />
    <div><h1>Mis Propiedades</h1></div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import HelloWorld from '../components/HelloWorld.vue';
  import Menu from '../components/Menu.vue';
  
  export default defineComponent({
    name: 'MispropiedadesView',
  
    components: {
      HelloWorld,
      Menu,
    
    },
  });
  </script>
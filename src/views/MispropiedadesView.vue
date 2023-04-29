<template>
    <HelloWorld />
    <Menu />
    <ListarPropiedades />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import HelloWorld from '../components/HelloWorld.vue';
  import Menu from '../components/Menu.vue';
  import ListarPropiedades from '../components/ListarPropiedades.vue';
  import CrearPropiedad from '../components/CrearPropiedad.vue';

  export default defineComponent({
    name: 'MispropiedadesView',
  
    components: {
      HelloWorld,
      Menu,
      ListarPropiedades,
      CrearPropiedad,
    },

  });
  </script>
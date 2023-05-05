<template>
    <HelloWorld />
    <Menu />
    

  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import HelloWorld from '../components/HelloWorld.vue';
  import Menu from '../components/Menu.vue';
  import EditarPropiedad from '../components/EditarPropiedad.vue';
  
  export default defineComponent({
    name: 'EditarPropiedadView',
  
    components: {
      HelloWorld,
      Menu,
      EditarPropiedad,
  
    },
  });
  </script>
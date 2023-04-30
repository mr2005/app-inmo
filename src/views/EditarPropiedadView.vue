<template>
    <HelloWorld />
    <Menu />
    <h1>Edición de propiedad</h1>

  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import HelloWorld from '../components/HelloWorld.vue';
  import Menu from '../components/Menu.vue';
  import EditarPropiedadView from '@/views/EditarPropiedadView.vue';
  
  export default defineComponent({
    name: 'EditarPropiedadView',
  
    components: {
      HelloWorld,
      Menu,
      EditarPropiedadView,
  
    },
  });
  </script>
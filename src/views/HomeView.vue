<template>
  <HelloWorld />
  <Menu />
  <Inicio />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import Menu from '../components/Menu.vue';
import Inicio from '@/components/Inicio.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    Menu,
    Inicio,

  },
});
</script>

<template>
   <div>
    <HelloWorld />
    <h1>Est es la propiedad {{ $route.params.id }}</h1>    
  </div>
    
 


  </template>
  
  
<script>
import { defineComponent } from 'vue';
  
// Components
import HelloWorld from '../components/HelloWorld.vue';
import Menu from '../components/Menu.vue';

export default {
  name:'Propiedad.view',

}
</script>
<template>
<v-container>
  <v-row class="text-center">
          <v-col class="mb-4">
              <h1>Encuentra la propiedad que buscas</h1>
          </v-col>
        </v-row>
        <v-row justify="space-around">
    <v-col cols="auto">
        <v-chip-group multiple selected-class="text-primary">
          <v-chip v-for="tag in tags" :key="tag">
            {{ tag }}
          </v-chip>
        </v-chip-group>
      
    </v-col>
  </v-row>
  <v-row align="center">
    <v-col v-for="propiedad in propiedadesall" :key="propiedad.id" cols="12" sm="6" md="4" lg="4">
      <v-card elevation="2" outlined>
          <v-img src="https://picsum.photos/seed/house/350/300" height="200"></v-img>
          <v-card-title>{{ propiedad.titulo }}</v-card-title>
            <v-card-text>
              <p class="subheading mb-2">Precio: {{ propiedad.precio }}</p>
              <p>Año de construcción: {{ propiedad.ano }}</p>
              <p>Dirección: {{ propiedad.direccion }}</p>
              <p align="center"><v-chip class="ma-2" align="center" color="secundary">{{propiedad.categoria}}</v-chip></p>
            </v-card-text>
            <v-card-actions>
            <v-btn color="primary" text @click="verDetalles(propiedad.id)">
              Ver detalles
            </v-btn>
            <DetallePropiedad />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>

import axios from 'axios';
import DetallePropiedad from '../components/DetallePropiedad.vue';


export default{
  components: { DetallePropiedad },
  name: 'Inicio',
  data(){
    return{            
      propiedadesall: [],
      id:'null',
      tags: [
        'Casa',
        'Piso',
        'Garaje',
        'Terreno',
      ],
    }
  },
  mounted(){
        this.getPropiedades();
    },


  methods: {
    getPropiedades(){
      axios.get('https://myapirestful-production.up.railway.app/api/propiedades')
      .then(r => {
      this.propiedadesall = r.data;
      console.log(this.propiedades);
      })
      .catch(function(error){
        console.log(error);
      })
    },
    verDetalles(id) {
            this.$router.push({ path: `/propiedad/${id}` });
    }
  
  },
  
}
</script>

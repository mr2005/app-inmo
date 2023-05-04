<template>
<v-container>
 <v-row align="center">
    <v-col v-for="propiedad in propiedadesall" :key="propiedad.id" cols="12" sm="6" md="4" lg="4">
      <v-card elevation="2" outlined>
          <v-card-title>{{ propiedad.titulo }}</v-card-title>
            <v-card-text>
              <p>{{ propiedad.precio }}</p>
              <p>{{ propiedad.ano }}</p>
              <p>{{ propiedad.direccion }}</p>
              <p>{{ propiedad.descripcion }}</p>
            </v-card-text>
            <v-card-actions>
            <v-btn color="primary" text @click="verDetalles(propiedad.id)">
              Ver detalles
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>

import axios from 'axios';


export default{
  name: 'Inicio',
  data(){
    return{            
      propiedadesall: [],
      id:'null',
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

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
            <v-card-actions >
            <v-btn color="primary" text @click="verDetalles(propiedad.id)">
              Ver detalles
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- ventana de diálogo para EDITAR propiedades -->
    <v-dialog v-model="dialogdetalles" max-width="1024">
        <v-card>
        <v-card-title>
          <span class="text-h5">Detalles de la propiedad</span>
        </v-card-title>
        <v-list lines="two" subheader>
          <v-list-subheader>Aqui se mostrará todo el contenido detallado de la propiedad</v-list-subheader>
          <v-list-item title="Caracteristicas" subtitle="Detalle de la propiedad seleccionada"></v-list-item>
          <v-list-item title="Precio" subtitle="Coste de la propiedad"></v-list-item>
          <v-spacer></v-spacer>
          <v-list-item title="Contacto" subtitle="Contacto con el propietario"></v-list-item>
        </v-list>
        <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn @click="dialogdetalles = false">Cerrar</v-btn>
            </v-card-actions>
                </v-card>
    </v-dialog>
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
      dialogdetalles:false,
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
            //this.$router.push({ path: `/propiedad/${id}` });
      this.dialogdetalles = true;
    }
  
  },
  
}
</script>

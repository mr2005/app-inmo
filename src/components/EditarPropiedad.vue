<template>
    <v-container>
      <v-row class="text-center">    
        <v-dialog v-model="dialog" persistent  width="1024"
                >
                <template v-slot:activator="{ props }">
                    <v-btn  class="mx-2" fab dark color="primary" v-bind="props">
                    <v-icon dark size="large">mdi-home-plus</v-icon>
                </v-btn>
                </template>
                <v-card>
        <v-card-title>
          <span class="text-h5">Agregar propiedad</span>
        </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="form.titulo" label="Titulo descriptivo*" hint="Titulo de la propiedad" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="form.precio" label="Precio de venta*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="form.ano" label="Año de construción"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-autocomplete
                  v-model="form.categoria"
                  clearable
                  label="Categoría*"
                  :items="['Casa', 'Piso', 'Garaje', 'Terreno']">
                  required
                </v-autocomplete>

                </v-col>
                
                <v-col sm="12" md="8">
                  <v-text-field v-model="form.descripcion" label="Descripción de la propiedad" hint="Información descriptiva de la propiedad" persistent-hint></v-text-field>
                </v-col>
            
              
              </v-row>
            </v-container>
            <small>*Campos requeridos</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="text" @click="dialog = false">Cerrar</v-btn>
            <v-btn color="primary" variant="text" @click="agregarPropiedad()">Añadir</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'EditarPropiedad',
      mounted(){
        this.id = this.$route.params.id;
        console.log(this.$route);
        axios.get('http://localhost:3000/api/propiedades/${id}')
        .then(r =>{
          this.articulo = r.data;
        })
        .catch(function(error){
          console.log(error);
        });
      },
      data(){
        return{
          id:null,
          articulo:{
            descripcion:'',
            precio:'',
            stock:''
          }
        }
      },
      methods:{
        updatePropiedad(){
           var router =  this.$router;
          axios.put(`http://localhost:3000/api/propiedades/${id}`)
          .then(function(){
             router.push('/articulos'); 
          })
          .catch(function(error){
          console.log(error);
          });
        }
      }
  }
  </script>
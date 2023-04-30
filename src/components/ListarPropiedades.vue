<template>
    <v-container>
        <v-row class="text-center">
          <v-col class="mb-4">
              <h1>Listado de propiedades</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="mb-1">
            <CrearPropiedad />
          </v-col>
        </v-row>  
        <v-row class="text-center">
          <v-col cols="12">
            <v-table fixed-header class="elevation-3">
            <thead>
            <tr>
                <th class="text-center">Título</th>
                <th class="text-center">Categoria</th>
                <th class="text-center">Año</th>
                <th class="text-center">Descripción</th>
                <th class="text-center">Acciones</th>
            </tr>
            </thead>
        <tbody>
            <tr v-for="propiedad in propiedades" :key="propiedad.id">
                <td>{{propiedad.titulo}}</td>
                <td>{{propiedad.categoria}}</td>
                <td>{{propiedad.ano}}</td>
                <td>{{propiedad.descripcion}}</td>
                <td>
                    <!-- <v-icon small class="mr-2" @click="editarPropiedad(propiedad.id)">mdi-pencil</v-icon> -->
                    <!-- <v-btn :to="{name:'editarArticulo', params:{id:articulo.id}}" fab small color="primary"><v-icon>mdi-pencil</v-icon></v-btn> -->
                    <v-btn @click.stop="dialog=true" @click="id=propiedad.id" fab small color="error"><v-icon small>mdi-delete</v-icon></v-btn>
                    <!-- <v-icon small @click.stop="dialog=true" @click="id=propiedades.id">mdi-delete</v-icon>  -->
                    <!-- <BorrarPropiedad /> -->
                </td>
            </tr>
         </tbody>   
        </v-table>
    </v-col>
    </v-row>

       <!-- ventana de diálogo para eliminar registros -->
       <v-dialog v-model="dialog" max-width="350">
        <v-card>
            <v-card-title class="headline">¿Desea eliminar el registro?</v-card-title>
            <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn @click="dialog = false">Cancelar</v-btn>
                <v-btn @click="confirmarBorrado(id)" color="error">Aceptar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
     <!-- componente snackbar para mostrar mensaje de eliminación -->
     <v-snackbar v-model="snackbar" color="success"> {{textsnack}}
        <template v-slot:action="{attrs}">
            <v-btn text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
        </template>
    </v-snackbar> 
    </v-container>
</template>

<script>
import CrearPropiedad from '../components/CrearPropiedad.vue';
import BorrarPropiedad from '../components/BorrarPropiedad.vue';
import axios from 'axios';

export default {
   
    name:'ListarPropiedades',
    components: { 
      CrearPropiedad,
      BorrarPropiedad,
    }, 
    mounted(){
        this.obtenerPropiedades();
    },
    data(){
        return{            
            propiedades: [],
            dialog: false,
            snackbar:false,
            textsnack:'¡Propiedad Eliminada!'
            }
              
        }
    ,
    methods:{
        obtenerPropiedades(){
            axios.get('http://localhost:3000/api/propiedades')
            .then(r => {
                this.propiedades = r.data;
                console.log(this.propiedades);
            })
            .catch(function(error){
                console.log(error);
            })

        },
        confirmarBorrado(id){
          axios.delete('http://localhost:3000/api/propiedades/${id}')
            .then(r => {
              this.obtenerPropiedades();
              this.dialog = false;
              this.snackbar = true
            })
            .catch(function(error){
                console.log(error);
            })
        },

    }
}
</script>
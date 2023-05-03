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
                <th class="text-center">Precio</th>
                <th class="text-center">Año</th>
                <th class="text-center">Dirección</th>
                <th class="text-center">Acciones</th>
            </tr>
            </thead>
        <tbody>
            <tr v-for="propiedad in propiedades" :key="propiedad.id">
                <td>{{propiedad.titulo}}</td>
                <td>{{propiedad.precio}}</td>
                <td>{{propiedad.ano}}</td>
                <td>{{propiedad.direccion}}</td>
                <td>
                    <!-- <v-icon small class="mr-2" @click="editarPropiedad(propiedad.id)">mdi-pencil</v-icon> -->
                    
                    <!-- <v-btn to="{name='EditarPropiedad', params:{id:propiedad.id} }" small color="primary"><v-icon>mdi-pencil</v-icon></v-btn> -->
                    <v-btn small color="primary" @click.stop="dialogedit=true" @click="id=propiedad.id,titulo=propiedad.titulo,precio=propiedad.precio,ano=propiedad.ano,categoria=propiedad.categoria,descripcion=propiedad.descripcion"><v-icon small>mdi-pencil</v-icon></v-btn>
                    <!-- <v-btn small color="primary" @click.stop="editarPropiedad(propiedad.id)"><v-icon small>mdi-pencil</v-icon></v-btn> -->

                    <v-btn @click.stop="dialog=true" @click="id=propiedad.id" small color="error"><v-icon small>mdi-delete</v-icon></v-btn>
                    <!-- <v-icon small @click.stop="dialog=true" @click="id=propiedades.id">mdi-delete</v-icon>  -->
                    <!-- <BorrarPropiedad /> -->
                </td>
            </tr>
         </tbody>   
        </v-table>
    </v-col>
    </v-row>


    <!-- ventana de diálogo para EDITAR propiedades -->
    <v-dialog v-model="dialogedit" max-width="1024">
        <v-card>
        <v-card-title>
          <span class="text-h5">Editar propiedad con ID:{{ id }}</span>
        </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="titulo" label="Titulo descriptivo*" hint="Titulo de la propiedad"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="precio" label="Precio de venta*"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="ano" label="Año de construción"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-autocomplete v-model="categoria" label="Categoría*" :items="['Casa', 'Piso', 'Garaje', 'Terreno']"></v-autocomplete>
                </v-col>
                <v-col sm="12" md="8">
                  <v-text-field v-model="descripcion" label="Descripción de la propiedad" hint="Información descriptiva de la propiedad" persistent-hint></v-text-field>
                </v-col>           
              </v-row>
            </v-container>
            <small>*Campos requeridos</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="text" @click="dialogedit = false">Cerrar</v-btn>
            <v-btn color="primary" variant="text" @click="editarPropiedad(id)">Actualizar</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>

       <!-- ventana de diálogo para CONFIRMAR la ELIMINACIÓN de propiedades -->
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
     <v-snackbar v-model="snackbarDELETE" color="success"> {{textsnackDELETE}}
        <template v-slot:action="{attrs}">
            <v-btn text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
        </template>
    </v-snackbar> 
    </v-container>
</template>

<script>
import { triggerRef } from 'vue';
import CrearPropiedad from '../components/CrearPropiedad.vue';
import BorrarPropiedad from './BorrarPropiedad.vue';
import EditarPropiedad from '@/components/EditarPropiedad.vue';
import axios from 'axios';

export default {
   
    name:'ListarPropiedades',
    components: { 
      CrearPropiedad,
      BorrarPropiedad,
      EditarPropiedad,
      
    }, 
    mounted(){
        this.obtenerPropiedades();
    },
    data(){
        return{            
            propiedades: [],
            dialog: false,
            formedit: [],
            dialogedit:false,
            id:'null',
            snackbarDELETE:false,
            textsnackDELETE:'¡Propiedad Eliminada!'
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
          axios.delete( `http://localhost:3000/api/propiedades/${id}`)
            .then(r => {
              this.obtenerPropiedades();
              this.dialog = false;
              this.snackbarDELETE = true
            })
            .catch(function(error){
                console.log(error);
            })
        },

        editarPropiedad(id){
            axios.put( `http://localhost:3000/api/propiedades/${id}`,this.titulo)
            .then(r => {
              this.dialogedit = false;
              this.obtenerPropiedades();
              
            })
            .catch(function(error){
                console.log(error);
            })

        }
    //     editarPropiedad(id) {
    //         {
    //         this.$router.push({ path: `/editar/${id}` });
    // }
    //     }

    }
}
</script>
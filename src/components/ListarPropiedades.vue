<template>
    <v-container>
        <v-row class="text-center">
            <v-col class="mb-4">
                <h1>Listado de propiedades</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="mb-1">
                <v-dialog
                v-model="dialog"
                persistent
                width="1024"
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
                  <v-text-field v-model="propiedad.titulo" label="Titulo descriptivo*" hint="Titulo de la propiedad" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="propiedad.precio" label="Precio de venta*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="propiedad.ano" label="Año de construción"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-autocomplete
                  v-model="propiedad.categoria"
                  clearable
                  label="Categoría*"
                  :items="['Casa', 'Piso', 'Garaje', 'Terreno']">
                  required
                </v-autocomplete>

                </v-col>
                
                <v-col sm="12" md="8">
                  <v-text-field v-model="propiedad.descripcion" label="Descripción de la propiedad" hint="Información descriptiva de la propiedad" persistent-hint></v-text-field>
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
    </v-col>
</v-row>  
        <v-row class="text-center">
    <v-col cols="12">
        <v-table fixed-header class="elevation-3">
            <thead>
            <tr>
                <th class="text-center">Título</th>
                <th class="text-center">Descripción</th>
                <th class="text-center">Acciones</th>
            </tr>
            </thead>
        <tbody>
            <tr v-for="propiedad in propiedades" :key="propiedad.id">
                <td>{{propiedad.titulo}}</td>
                <td>{{propiedad.descripcion}}</td>
                <td>
                    <v-icon small class="mr-2" @click="editarPropiedad(propiedad.id)">mdi-pencil</v-icon>
                    <v-icon small @click="borrarPropiedad(propiedad.id)">mdi-delete</v-icon>
                </td>
            </tr>
         </tbody>   
        </v-table>
    </v-col>
    </v-row>       
    </v-container>
</template>

<script>
import axios from 'axios';
export default {    
    name:'ListarPropiedades',
    mounted(){
        this.obtenerPropiedades();
    },
    data(){
        return{            
            propiedades: [],
            dialog: false,

            propiedad: {
              titulo: '',
              precio: '',
              ano: '',
              categoria: '',
              descripcion: '',
            }
              
        }
    },
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
        /*
        agregarPropiedad() {
          var router = this.$router;
           const formData = new FormData();
           formData.append('titulo',this.propiedad.titulo);
           formData.append('precio',this.propiedad.precio);
           formData.append('ano',this.propiedad.ano);
           formData.append('categoria',this.propiedad.categoria);
           formData.append('descripcion',this.propiedad.descripcion);
           axios.post('http://localhost:3000/api/propiedades',formData)
           .then(()=>{
               router.push('/propiedades');
           })
           .catch(function(error){
        console.log(error);
            });

      },*/
    }
}
</script>
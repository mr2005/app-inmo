<template>
  <v-row class="ml-10">
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
                  <v-text-field v-model="form.direccion" label="Dirección de la propiedad" hint="Ubicación de la propiedad" persistent-hint></v-text-field>
                </v-col>
                
                <v-col cols="12">
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

           <!-- componente snackbar para mostrar mensaje de eliminación -->
     <v-snackbar v-model="snackbarOK" color="success"> {{textsnackOK}}
        <template v-slot:action="{attrs}">
            <v-btn text v-bind="attrs" @click="snackbarOK = false">Cerrar</v-btn>
        </template>
    </v-snackbar> 
  </v-row>
</template>

<script>
import axios from 'axios';

  export default {
    data: () => ({
      
      dialog: false,
      snackbarOK:false,
      textsnackOK:'¡Propiedad agregada correctamente!',


      form: {
        titulo: '',
        precio: '',
        ano: '',
        categoria: '',
        direccion: '',
        descripcion: '',
      }
}),
 

methods:{
    
    agregarPropiedad() {      
            axios.post("http://myapirestful-production.up.railway.app/api/propiedades",this.form)
            .then(data =>{
                console.log(data);
                this.snackbarOK = true
                this.dialog = false
            })
            .catch( error =>{
                console.log(e);
                alert('Ha ocurrido un error al crear el registro.')
                this.dialog = false
            })

      },
    }
  };
  </script>
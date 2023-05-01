<template>
  <v-form v-model="formedic">
    <v-container>
      <v-row class="text-center">
          <v-col class="mb-4">
              <h1>Edición de propiedad</h1>
          </v-col>
        </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field label="Titulo descriptivo*" hint="Titulo de la propiedad" required></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-text-field  label="Precio de venta*" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field  label="Año de construción"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-autocomplete
                  clearable
                  label="Categoría*"
                  :items="['Casa', 'Piso', 'Garaje', 'Terreno']">
                  required
                </v-autocomplete>
        </v-col>
        <v-col sm="12" md="8">
          <v-text-field label="Descripción de la propiedad" hint="Información descriptiva de la propiedad" persistent-hint></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="text-center m">
          <v-btn class="me-4">Actualizar</v-btn>
        </v-col>
      </v-row>
      

    </v-container>
  </v-form>
</template>
  
  <script>
  export default {
    name: 'EditarPropiedad',
    
    data: () => ({
      dialog: false,
    }),

    methods: {
      guardarPropiedad(){

      }
    },
     
  }
  </script>
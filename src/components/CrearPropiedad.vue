<template>
    <v-container justify-center>
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
    </v-container>
  </template>

<script>
export default {
  name: 'CrearPropiedad',
  data: () => ({
    dialog: true
  })
}
</script>
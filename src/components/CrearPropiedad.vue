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
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,

      propiedad: {
              titulo: '',
              precio: '',
              ano: '',
              categoria: '',
              descripcion: '',
  }
}),
    
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

      },

  }
</script>
<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        width="auto"
      >
        <template v-slot:activator="{ props }">
          <v-icon small color="primary" v-bind="props">mdi-delete</v-icon>
        </template>
        <v-card>
          <v-card-title class="text-h5">
            ¿Desea borrar esta propiedad?
          </v-card-title>
          <v-card-text>Esta acción eliminara la propiedad de nuestra base de datos. Si desea volver a incluirla en nuestra app deberá crearla nuevamente..</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Cancelar
            </v-btn>
            <v-btn
              color="green-darken-1"
              variant="text"
              @click="borrarPropiedad()"
            >
              Eliminar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

<script>
export default {
  name: 'BorrarPropiedad',
  data () {
      return {
        dialog: false,
      }
    },
}
</script>
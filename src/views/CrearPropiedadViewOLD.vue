<template>
    <v-container>
        <v-row class="text-center">
            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">Añadir Propiedad</h1>
            </v-col>
        </v-row>  
        <v-row>
    <v-col>
        <form v-on:submit.prevent="guardarArticulo()">
        <v-text-field v-model="propiedad.titulo"
                label="Titulo"
                outlined
                required   
        >
        </v-text-field>
         <v-text-field
                v-model="propiedad.ano"        
                label="Año de construcción"
                type="number"                
                prefix="$"
                outlined
                required        
            ></v-text-field>
            <v-text-field
                v-model="propiedad.descripcion"        
                label="Descripcion"
                outlined
                required        
            ></v-text-field>
            <v-card-actions>
                <v-btn color="warning" class="mr-4" type="submit">Guardar</v-btn>      
            </v-card-actions>
        </form>
    </v-col>
    </v-row>     
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
  name: 'CrearPropiedad',
  data(){
        return{
            propiedad:{
                titulo:'',
                ano:'',
                descripcion:''
            }
        };
    },
    methods:{
        guardarPropiedad(){
           var router = this.$router;
           const formData = new FormData();
           formData.append('titulo',this.propiedad.descripcion);
           formData.append('ano',this.propiedad.precio);
           formData.append('descripcion',this.propiedad.stock);
           axios.post('http://localhost:3000/apirest/propiedades',formData)
           .then(()=>{
               router.push('/propiedades');
           })
           .catch(function(error){
        console.log(error);
            });
        }
    }
}
</script>
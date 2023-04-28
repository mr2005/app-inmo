<template>
    <v-container>
        <v-row class="text-center">
            <v-col class="mb-4">
                <h1>Listado de propiedades</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="mb-1">
                <v-btn to="CrearPropiedad" class="mx-2" fab dark color="primary">
                    <v-icon dark size="large">mdi-home-plus</v-icon>
                </v-btn>
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
    }
}
</script>
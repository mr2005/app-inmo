<template>
    <v-container>
        <v-row class="text-center">
            <v-col class="mb-4">
                <h1>Listado de propiedades</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="mb-1">
                <v-btn class="mx-2" fab dark color="primary">
                    <v-icon dark size="large">mdi-home-plus</v-icon>
                </v-btn>
            </v-col>
        </v-row>  
        <v-row class="text-center">
    <v-col cols="12">
        <v-table fixed-header class="elevation-3">
            <thead>
            <tr>
                <th class="text-center">ID</th>
                <th class="text-center">Titulo</th>
            </tr>
            </thead>
        <tbody>
            <tr v-for="propiedad in propiedades" :key="propiedad.id">
                <td>{{propiedad.id}}</td>
                <td>{{propiedad.titulo}}</td>
                <td>
                    <v-btn :to="{name:'EditarPropiedad', params:{id:propiedad.id}}" fab small color="primary"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn @click.stop="dialog=true" @click="id=propiedad.id" fab small color="error"><v-icon>mdi-delete</v-icon></v-btn>
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
            dialog:false,
            propiedades:null,
            id:null,
            snackbar:false,
            textsnack:'¡Registro Eliminado!'
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
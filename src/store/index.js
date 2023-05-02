import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    propiedadesall: [],
    propiedadesfiltradas: [],
  },
  getters: {
  },
  mutations: {
    setPropiedades(state, payload){
      state.propiedadesall = payload
    },
    setPropiedadesFiltradas(state, payload){
      state.propiedadesfiltradas = payload
    },
  },
  actions: {
    async getPropiedades(){
      axios.get('http://localhost:3000/api/propiedades')
      .then(r => {
        this.propiedadesall = r.data;
        console.log(this.propiedadesall);
        commit('setPropiedades, propiedadesall');
    })
    .catch(function(error){
      console.log(error);
    })

    }
  },
  modules: {
  }
})

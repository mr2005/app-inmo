import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Mispropiedades from '../views/MispropiedadesView.vue'
import Login from '../views/LoginView.vue'
import Registro from '../views/RegistroView.vue'
import Miperfil from '../views/MiperfilView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/mispropiedades',
    name: 'mispropiedades',
    component: () => import('../views/MispropiedadesView.vue')
  },
  {
    path: '/propiedad/:id',
    name: 'propiedad',
    component: () => import('../views/PropiedadView.vue')
  },
  // {
  //   path: '/editar/:id',
  //   name: 'EditarPropiedad',
  //   component: () => import('../views/EditarPropiedadView.vue')
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/miperfil',
    name: 'miperfil',
    component: () => import('../views/MiperfilView.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import(/* webpackChunkName: "registro" */ '../views/RegistroView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

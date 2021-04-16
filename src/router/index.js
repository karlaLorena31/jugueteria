import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listado',
    name: 'Listado',
    component: () => import(/* webpackChunkName: "about" */ '../views/Listado.vue')
  },
    {
    path: '/login',
    name: 'Login', 
    component:  () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
     
  },
    {
    path: '/registro',
    name: 'Registro', 
    component:  () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
     
  },
     {
    path: '/add',
    name: 'Add',
    component: () => import( '../components/Agregar.vue') // crear usuarios
  },
    
    
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

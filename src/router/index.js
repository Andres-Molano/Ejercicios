import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ejercicio1 from '../views/Ejercicio1.vue'
import Ejercicio2 from '../views/Ejercicio2.vue'
import Ejercicio4 from '../views/Ejercicio4.vue'
import Ejercicio6 from '../views/Ejercicio6.vue'
import Ejercicio7 from '../views/Ejercicio7.vue'
import Error from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Ejercicio1',
    name: 'TextEffect',
    component: Ejercicio1,
  },
  {
    path: '/Ejercicio2',
    name: 'TodoList',
    component: Ejercicio2,
  },
  {
    path: '/Ejercicio4',
    name: 'TabBarNavigation',
    component: Ejercicio4,
  },
  {
    path: '/Ejercicio6',
    name: 'Progress',
    component: Ejercicio6,
  },
  {
    path: '/Ejercicio7',
    name: 'Netflix',
    component: Ejercicio7,
  },
  {
    path: '*',
    name: '404',
    component: Error,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

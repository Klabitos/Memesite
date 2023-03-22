import VueRouter from 'vue-router'

import Home from "../pages/InitPage.vue"

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,   
    },
]

const router = new VueRouter({
    mode: 'history',
    base: '/memesite/',
    routes
  })
  
  export default router
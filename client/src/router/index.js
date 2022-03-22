import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import Tutorials from '../pages/Tutorials.vue'

const routes = [
    { name: 'Home', path: '/', component: Home },
    { name: 'Marketing', path: '/marketing', component: Home },
    { name: 'Tutorial', path: '/tutorials', component: Tutorials },
    { name: 'Products', path: '/products', component: Products },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;
  
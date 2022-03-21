import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'

const routes = [
    { name: 'Home', path: '/', component: Home },
    { name: 'Marketing', path: '/marketing', component: Home },
    { name: 'Tutorial', path: '/tutorials', component: Home },
    { name: 'Shop', path: '/shop', component: Shop },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;
  
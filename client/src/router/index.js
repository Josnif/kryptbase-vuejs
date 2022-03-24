import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import store from '../store'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import Tutorials from '../pages/Tutorials.vue'
import NotFound from '../pages/404.vue'

const routes = [
    { name: 'Home', path: '/', component: Home },
    { name: 'Marketing', path: '/marketing', component: Home },
    { name: 'Tutorial', path: '/tutorials', component: Tutorials },
    { name: 'Contact', path: '/contact', component: Tutorials },
    { name: 'Products', path: '/products', component: Products, meta: { requiresLogin: true } },
    { name: 'not-found', path:'/:pathMatch(.*)*', component: NotFound},
    { name: 'bad-not-found', path: '/:pathMatch(.*)', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach(async (to, from, next) => {
    const token = localStorage.getItem('AUTH_TOKEN');
    if (to.matched.some(record => record.meta.requiresLogin) && (token === null || token === "undefined")) {
        store.dispatch('setLogin');
        next(false);
    } else {
        next();
    }
});

// bad example if using named routes:
router.resolve({
    name: 'bad-not-found',
    params: { pathMatch: 'not/found' },
  }).href // '/not%2Ffound'
  // good example:
  router.resolve({
    name: 'not-found',
    params: { pathMatch: ['not', 'found'] },
  }).href // '/not/found'

export default router;
  
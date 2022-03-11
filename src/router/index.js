import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import { createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'jhy-button',
        component: () => import('../UI/button/button.vue')
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})
export default router;
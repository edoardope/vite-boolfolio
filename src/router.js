import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Portfolio from './pages/Portfolio.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
    ]
});

export { router };
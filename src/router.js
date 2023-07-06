import { createRouter, createWebHistory } from 'vue-router';

import Portfolio from './pages/Portfolio.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
    ]
});

export { router };
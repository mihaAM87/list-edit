import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Main from '../views/main.vue';
import Edit from '../views/Edit/Edit.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/edit/:content',
    name: 'Edit',
    // component: () => import('../views/Edit/Edit.vue'),
    component: Edit,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  linkActiveClass: 'active',
});

export default router;

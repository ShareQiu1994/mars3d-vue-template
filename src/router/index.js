/*
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-15 13:56:00
 * @LastEditTime: 2021-06-17 14:32:41
 */
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [{ path: '/', name: 'Index', component: () => import('../views/Index.vue') }]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

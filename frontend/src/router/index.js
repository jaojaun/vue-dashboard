import { createWebHistory , createRouter} from 'vue-router'

import LoginComponent from './../screens/login/LoginComponent.vue'
import HomeComponent from './../screens/home/HomeComponent.vue'

const routes = [
  { path: '/',name: 'login', component: LoginComponent },
  { path: '/home',name: 'home', component: HomeComponent },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router;
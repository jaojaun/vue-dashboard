import { createWebHistory , createRouter} from 'vue-router'
import LoginComponent from './../screens/login/LoginComponent.vue'
import HomeComponent from './../screens/home/HomeComponent.vue'
import ProdutosComponent from './../screens/produtos/ProdutosComponent.vue'
import ClientesComponent from './../screens/clientes/ClientesComponent.vue'

const routes = [
  { path: '/',name: 'login', component: LoginComponent },
  { path: '/home',name: 'home', component: HomeComponent },
  { path: '/clientes',name: 'clientes', component: ClientesComponent },
  { path: '/produtos',name: 'produtos', component: ProdutosComponent },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router;
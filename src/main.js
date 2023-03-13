import Home from './view/Home.vue'
import Compalin from './view/Compalin.vue'
import * as VueRouter from 'vue-router';
import { createApp } from 'vue'
import App from './App.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/compalin', component: Compalin },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

let vueApp = createApp(App)

vueApp.use(router)
vueApp.mount('#app')

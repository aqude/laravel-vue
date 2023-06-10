import {createRouter, createWebHistory} from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Settings from "../views/Settings.vue";
import Profile from "../views/Profile.vue";
import Loginout from "../views/Loginout.vue";
import Main from "../views/Main.vue";
const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: '',
        component: Main
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings
    },
    {
        path: '/login-out',
        name: 'login-out',
        component: Loginout
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

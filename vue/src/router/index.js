import {createRouter, createWebHistory} from "vue-router";
import Login from "../views/Login.vue";
import DataList from "../views/DataList.vue";
import Register from "../views/Register.vue";
import Settings from "../views/Settings.vue";
const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/datalist',
        name: 'dataList',
        component: DataList
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
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: Login
    // },
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

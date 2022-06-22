import { createRouter, createWebHistory } from "vue-router";
import Index from "./page/index";
import Home from "./page/home";
import TODO from "./page/todo";

const routes = [
    { path: "/", component: Index },
    { path: "/todo", component: TODO },
    { path: "/home", component: Home },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
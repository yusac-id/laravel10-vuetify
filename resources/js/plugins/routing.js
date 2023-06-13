import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {        
        path: "/home",
        name: "home",
        component: () =>
            import(/* webpackChunkName: "home" */ "../pages/Home.vue"),
    },
];

const router = createRouter({    
    base: "/app/",
    history: createWebHistory('/app/'),
    routes,
});

export default router;

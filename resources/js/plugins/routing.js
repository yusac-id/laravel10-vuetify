import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/auth.store";

const routes = [
    {
        path: "/",
        component: () => import("../layout/MainLayout.vue"),
        children: [
            {
                path: "",
                redirect: "home",
            },
            {
                path: "/home",
                name: "home",
                component: () =>
                    import(/* webpackChunkName: "home" */ "../pages/Home.vue"),

            },
        ],
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import(/* webpackChunkName: "login" */ "../pages/Login.vue"),
    },
];

const router = createRouter({
    base: "/app/",
    history: createWebHistory("/app/"),
    routes,
});

router.beforeEach(async (to) => {    
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ["/login"];
    const authRequired = !publicPages.includes(to.path);
    const authStore = useAuthStore();    

    if (authRequired && !authStore.status) {
        authStore.returnUrl = to.fullPath;                
        return "/login";
    }

    if (to.path === "/login" && authStore.status) {
        return "/";
    }
});

export default router;

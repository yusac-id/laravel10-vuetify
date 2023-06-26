import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/auth.store";

const routes = [
    {
        path: "/",
        component: () => import("../layout/MainLayout.vue"),
        children: [
            {
                path: "",
                redirect: "dashboard",
            },
            {
                path: "/home",
                name: "home",
                component: () => import("../pages/Home.vue"),
            },
            {
                path: "/dashboard",
                name: "dashboard",
                component: () => import("../pages/Dashboard.vue"),
            },
            {
                path: "/profile",
                name: "profile",
                component: () => import("../pages/Profile.vue"),
            },
        ],
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../pages/Login.vue"),
    },
    {
        path: "/:catchAll(.*)*",
        component: () => import("../pages/ErrorNotFound.vue"),
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

import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { UserInterface, UserModel } from "../models/user.model";
import { useStorage } from "../composables/storage";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("authStore", () => {
    const { saveData, getData, clearData } = useStorage();

    const router = useRouter()

    const token = getData("token")
        ? ref<string>(getData("token"))
        : ref<string>();
    const user = token.value
        ? ref<UserModel>(getData("user"))
        : ref<UserModel>({} as UserModel);
    const loggedIn = ref<boolean>(token.value ? true : false);
    const returnUrl = ref<string>('')

    const status = computed((): boolean => loggedIn.value);    

    function login(tokenData: string, userData: UserInterface) {
        loggedIn.value = true;
        token.value = tokenData;
        user.value = new UserModel(userData);
        saveData("user", user.value);
        saveData("token", token.value);
    }

    function logout() {
        loggedIn.value = false;
        token.value = "";
        user.value = <UserModel>{};
        clearData();
        router.replace('/login');
    }

    const getUser = computed((): UserModel => user.value!);
    const getToken = computed((): string => token.value!);

    return {
        status,
        getUser,
        getToken,
        returnUrl,        
        login,
        logout,
    };
});

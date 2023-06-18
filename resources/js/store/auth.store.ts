import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { UserInterface, UserModel } from "../models/user.model";
import { useStorage } from "../composables/storage";

export const useAuthStore = defineStore("auth", () => {
    const { saveData, getData, clearData } = useStorage();

    const token = getData("token")
        ? ref<string>(getData("token"))
        : ref<string>();
    const user = token.value
        ? ref<UserModel>(getData("user"))
        : ref<UserModel>({} as UserModel);
    const loggedIn = ref<boolean>(token.value ? true : false);

    const status = computed((): boolean => loggedIn.value);

    function init() {
        const tokenData = getData("token");
        const userData = getData("user");
        if (!tokenData && !userData) {
            login(tokenData, userData);
        }
    }

    // init();

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
    }

    const getUser = computed((): UserModel => user.value!);
    const getToken = computed((): string => token.value!);

    return {
        status,
        getUser,
        getToken,
        login,
        logout,
    };
});

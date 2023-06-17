import { defineStore } from "pinia";
import { ref, computed } from 'vue';

export const useAuthStore = defineStore("auth", () => {
    const loggedIn = ref(false)    

    const status = computed(() => loggedIn.value)
    function login(){
        loggedIn.value = true;
    }

    const user = ref({})


    return{
        loggedIn,        
        status,
        login,
        user,
    }
});

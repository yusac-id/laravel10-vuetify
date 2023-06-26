import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoadingStore = defineStore("loadingStore", () => {
    const loading = ref<boolean>(false);

    function start() {
        loading.value = true;
    }

    function stop() {
        loading.value = false;
    }

    return {
        loading,
        start,
        stop,
    };
});

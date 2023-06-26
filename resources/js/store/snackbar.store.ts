import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useSnackbarStore = defineStore("snackbarStore", () => {
    const text = ref<string>("");
    const status = ref<boolean>(false);
    const timeout = ref<number>(2000);
    const color = ref<string>("primary");

    function show(val: string, snackbarColor: string) {        
        text.value = val;
        status.value = true;
        color.value = snackbarColor;
    }

    function update(val) {
        status.value = val;
        text.value = "";
    }

    const message = computed((): string => text.value);
    const duration = computed((): number => timeout.value);
    const type = computed((): string => color.value);

    return {
        message,
        status,
        duration,
        type,
        show,
        update,
    };
});

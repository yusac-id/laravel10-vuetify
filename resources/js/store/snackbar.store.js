import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useSnackbarStore = defineStore("snackbar", () => {
    const text = ref("");
    const status = ref(false);
    const timeout = ref(2000);

    const duration = computed(() => timeout.value);

    function show(val) {
        console.log(val)
        text.value = val;
        status.value = true;
    }

    function update(val) {
        console.log(val)
        text.value = "";
        status.value = val;
    }

    return {
        text,
        status,
        duration,
        show,
        update,
    };
});

import { defineStore } from "pinia";
import { ref } from "vue";

export const usePageStore = defineStore("pageStore", () => {
    const title = ref<string>('');

    function setPageTitle(page:string) {
        title.value = page;
    }
    

    return {
        title,
        setPageTitle
    };
});

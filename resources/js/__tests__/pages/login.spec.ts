import { beforeEach, describe, expect, test, vi } from "vitest";
import { VueWrapper, mount, shallowMount } from "@vue/test-utils";
import LoginPage from "../../pages/Login.vue";
import { createVuetify } from "vuetify";
import useVuelidate from "@vuelidate/core";
import { createPinia } from "pinia";
import { VCard } from "vuetify/components";

describe("LoginPage", () => {
    let wrapper: VueWrapper<any>;
    const vuetify = createVuetify();
    const pinia = createPinia();

    beforeEach(() => {
        wrapper = mount(LoginPage, {
            global: {
                plugins: [vuetify, pinia],
            },
        });
    });

    test("Render correct component", async () => {
        expect(wrapper).toBeTruthy();
    });

    test("Test login form", async () => {                        
        const username = wrapper.find(`input[test-id="login-username"]`);        
        expect(username.exists()).toBe(true); 
        await username.setValue("username");
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.v$.username.$dirty).toBe(true);
        expect(wrapper.vm.v$.username.$invalid).toBe(false);

        const password = wrapper.find(`input[test-id="login-password"]`);        
        expect(password.exists()).toBe(true); 
        await password.setValue("username");
        expect(wrapper.vm.v$.username.$dirty).toBe(true);
        expect(wrapper.vm.v$.password.$invalid).toBe(false);
    });
});

import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import HomePage from "../../pages/Home.vue";
import { createVuetify } from "vuetify";

describe("HomePage", () => {
    const vuetify = createVuetify();

    test("Render correct component", () => {
        const wrapper = mount(HomePage, {
            props: {},
            global: {
                plugins: [vuetify],
            },
        });
        expect(wrapper).toBeTruthy();
        const titleElement = wrapper.find("div.title");
        expect(titleElement.text()).toBe("Home Page");
    });

    test("Properties", async () => {
        const wrapper = mount(HomePage, {
            props: {},
            global: {
                plugins: [vuetify],
            },
        });
        const btn = await wrapper.get("button");
        const spy = vi.spyOn(btn, "trigger");
        await btn.trigger("click");
        expect(spy).toHaveBeenCalledOnce();
    });
});

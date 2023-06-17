import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import colors from "vuetify/lib/util/colors";

const primaryLightTheme = {
    dark: false,
    colors: {
        primary: colors.blue.darken4,
        secondary: colors.grey.darken2,
        accent: colors.purple.lighten4,
        error: colors.red.darken1,
        success: colors.green.darken1,
        warning: colors.orange.darken1,
    },
};

const primaryDarkTheme = {
    dark: true,
    colors: {
        primary: colors.blue.darken4,
        secondary: colors.grey.darken2,
        accent: colors.purple.lighten4,
        error: colors.red.darken1,
        success: colors.green.darken1,
        warning: colors.orange.darken1,
    },
};

export default createVuetify({
    icons: {
        defaultSet: "mdi",
    },
    
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: primaryLightTheme,
            dark: primaryDarkTheme,
        },
    },
    
});

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue';
import { useAuthStore } from '../store/auth.store'
import { email, required, helpers } from '@vuelidate/validators'
import { useHttp } from '../composables/http';
import { useLoadingStore } from '../store/loading.store';
import { useSnackbarStore } from '../store/snackbar.store';
import { useRouter } from 'vue-router';
import useVuelidate from '@vuelidate/core';

defineOptions({
    name: "LoginPage",
    inheritAttrs: false,    
})

const authStore = useAuthStore()

const inititalStateLogin = {
    username: "",
    password: ""
}

const loginForm = reactive({ ...inititalStateLogin })

const loginRules = {
    username: { required: helpers.withMessage('Username is required', required) },
    password: { required: helpers.withMessage('Password is required', required) }
}

const v$ = useVuelidate(loginRules, loginForm)

const loadingStore = useLoadingStore()
const snackStore = useSnackbarStore()
const router = useRouter()
const { httpPost, httpError } = useHttp()

onMounted(() => {

})

const login = async () => {
    try {
        loadingStore.start()
        const res: any = await httpPost('auth/login', { username: loginForm.username, password: loginForm.password })        
        if (res.token) {
            authStore.login(res.token, res.user);
            if (authStore.returnUrl && authStore.returnUrl !== '') {
                router.replace(authStore.returnUrl)
            } else {
                router.replace('/home');
            }
        }        
        loadingStore.stop()
    } catch (e) {
        const error: any = httpError(e)
        loadingStore.stop()
        snackStore.show(error.message, 'warning')
    }

}

</script>

<template>
    <div class="login-page bg-primary">
        <div class="login-container">
            <v-card class="pa-6 login-card rounded-lg elevation-5">
                <form @submit.prevent="login">
                    <v-card-title class="text-center text-grey-darken-3">
                        <div class="text-h5 font-weight-medium">Web App Login</div>
                    </v-card-title>
                    <v-card-subtitle class="text-center">
                        <div class="text-caption">ver 1.0.1</div>
                    </v-card-subtitle>
                    <v-card-text class="login-form">
                        <v-text-field color="primary" type="text" v-model="loginForm.username" variant="outlined"
                            :error-messages="v$.username.$errors.map(e => e.$message.toString())" label="Username" required
                            @input="v$.username.$touch" @blur="v$.username.$touch" test-id="login-username" id="username">
                        </v-text-field>
                        <v-text-field color="primary" v-model="loginForm.password" variant="outlined"
                            :error-messages="v$.password.$errors.map(e => e.$message.toString())" label="Password" required
                            @input="v$.password.$touch" @blur="v$.password.$touch" type="password" test-id="login-password" id="password">
                        </v-text-field>

                    </v-card-text>
                    <v-card-actions class="float-right">
                        <v-btn color="primary" class="px-8" variant="flat" type="submit">Login</v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    // background: rgb(62,128,226);
    // background: linear-gradient(145deg, rgba(62,128,226,1) 0%, rgba(54,125,222,1) 41%, rgba(34,149,172,1) 100%);

    .login-container {
        width: 60%;
        min-width: 320px;
        max-width: 480px;

        .login-card {
            // background-color: rgba(255,255,255,0.75);
            // backdrop-filter: blur(5px);
            border: 1px solid white;
            // background-color: transparent;
        }

        .login-form {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
    }
}
</style>
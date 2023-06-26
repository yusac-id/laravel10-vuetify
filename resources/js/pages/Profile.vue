<template>
    <v-container fluid>

        <v-row>
            <v-col>
                <v-card class="">
                    <form>
                        <v-card-item>
                            <v-card-title class="mb-6">Personal Information</v-card-title>                            
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" :sm="6" :md="4">
                                        <v-text-field v-model="profileForm.name" color="primary" label="Name"
                                            variant="outlined"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" :sm="6" :md="4">
                                        <v-text-field v-model="profileForm.email" color="primary" label="Email" type="email"
                                            variant="outlined"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card-item>
                    </form>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { usePageStore } from '../store/page.store';
import { useAuthStore } from '../store/auth.store';
import { helpers, required } from '@vuelidate/validators';

const usePage = usePageStore()
const useAuth = useAuthStore()

const inititalStateProfile = {
    username: "",
    name: "",
    email: "",
    password: ""
}

const profileForm = reactive({ ...inititalStateProfile })

const profileRules = {
    name: { required: helpers.withMessage('Name is required', required) },
    username: {},
    email: {},
    // password: { required: helpers.withMessage('Password is required', required) }
}


onMounted(() => {
    usePage.setPageTitle('Profile')
    Object.assign(profileForm, useAuth.getUser)
    console.log(profileForm.name)
})
</script>
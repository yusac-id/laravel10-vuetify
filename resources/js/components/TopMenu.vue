<template>
    <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
            <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
        </template>
        <v-list>
            <v-list-item @click="go(item.value)" :value="item.value" v-for="(item, i) in items" :key="i">
                <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                </template>
                <v-list-item-title>
                    {{ item.text }}
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>
<script lang="ts" setup>
import { useAuthStore } from '../store/auth.store';


const authStore = useAuthStore()

const items: any[] = [
    { value: 'logout', text: 'Logout', icon: 'mdi-logout' }
]

const go = (val) => {
    if (val === 'logout') {
        authStore.logout();
    }
}
</script>
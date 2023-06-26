<script lang="ts" setup>
import { useDisplay } from 'vuetify/lib/framework.mjs';
import TopMenu from './TopMenu.vue';
import { usePageStore } from '../store/page.store';

const usePage = usePageStore();

const { smAndDown } = useDisplay()

const emit = defineEmits(['openDrawer'])

function drawerToggle() {
    emit('openDrawer')
}

</script>
<template>
    <v-app-bar color="primary" :title="usePage.title" :elevation="0" height="64">
        <template v-slot:prepend>
            <v-app-bar-nav-icon v-if="smAndDown" @click="drawerToggle()"></v-app-bar-nav-icon>
        </template>
        <template v-slot:append>
            <!-- <v-btn icon="mdi-heart"></v-btn>
            <v-btn icon="mdi-magnify"></v-btn> -->

            <top-menu></top-menu>
        </template>
    </v-app-bar>
</template>
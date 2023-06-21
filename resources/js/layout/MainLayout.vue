<script lang="ts" setup>
import NavigationDrawer from '../components/NavigationDrawer.vue';
import AppBar from '../components/AppBar.vue';
import { ref } from 'vue';

const drawer = ref<boolean>(false)

const toogleDrawer = () =>{
    console.log(drawer.value)
    drawer.value = !drawer.value
}

</script>
<template>
    <v-card>
        <v-layout>
            <NavigationDrawer v-model="drawer"></NavigationDrawer>
            <AppBar @open-drawer="toogleDrawer()"></AppBar>
            <v-main class="main-container">
                <v-container fluid>
                    <RouterView></RouterView>
                </v-container>
            </v-main>
        </v-layout>
    </v-card>
</template>
<style lang="scss" scoped>
.main-container {
    min-height: 100vh;
}
</style>
<script lang="ts" setup>
import { getCurrentInstance, inject, onMounted, ref } from 'vue';
import LoadingIndicator from '../components/LoadingIndicator.vue';
import { useLoadingStore } from '../store/loading.store';
import Snackbar from '../components/Snackbar.vue';
import { useSnackbarStore } from '../store/snackbar.store';

const loadingStore = useLoadingStore()
const snackbarStore = useSnackbarStore()

onMounted(() => {

})

</script>

<template>
    <router-view />
    <LoadingIndicator :loading="loadingStore.loading"></LoadingIndicator>
    <Snackbar :show="snackbarStore.status" :text="snackbarStore.text"
        :timeout="snackbarStore.duration" v-on:close="snackbarStore.update($event)"></Snackbar>
</template>


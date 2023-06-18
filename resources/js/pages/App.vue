<script lang="ts" setup>
import { computed, getCurrentInstance, inject, onMounted, ref } from 'vue';
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
    <Snackbar v-model="snackbarStore.status" :type="snackbarStore.type" :text="snackbarStore.message" :timeout="snackbarStore.duration"
        @update:model-value="snackbarStore.update($event)"></Snackbar>
</template>


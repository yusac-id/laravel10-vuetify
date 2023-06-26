<template>


</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { usePageStore } from '../store/page.store';

const usePage = usePageStore()

onMounted(() => {
    usePage.setPageTitle('Dashboard')
})
</script>
<style lang="scss"></style>
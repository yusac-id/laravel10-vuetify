<script lang="ts" setup>

defineProps<{
    loading?: boolean
}>()

</script>

<template>
    <v-overlay :model-value="loading" class="align-center justify-center">
        <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
    </v-overlay>
</template>
<template>
    <div>
        <div class="title">{{ title }}</div>
        <v-btn prepend-icon="mdi-home" color="primary" @click="showAlert">
            Button
        </v-btn>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const title = ref('Home Page')

const showAlert = () => {
    title.value = "Home Page Clicked";
}

</script>
<style lang="scss"></style>
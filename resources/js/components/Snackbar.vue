

<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps({
    modelValue: Boolean,
    timeout: Number,
    text: String,
    type: {
        type: String,
        default: 'primary'
    }
})

const emit = defineEmits(['update:modelValue'])
const val = ref(false)

const icons = {
    'success': 'mdi-check',
    'warning': 'mdi-alert-circle-outline',
    'info': 'mdi-information-outline',
    'danger': 'mdi-alert'
}

const update = (val) => {
    emit('update:modelValue', val)
}

watch(() => props.modelValue, nVal => val.value = nVal, {
    immediate: true
})

</script>

<template>
    <v-snackbar v-model="val" :timeout="props.timeout" :color="type" onchange="close" position="fixed" location="top"
        @update:modelValue="update($event)">
        <div class="d-flex align-center flex-row">
            <v-icon size="large" class="mr-2" :icon="icons[type]"></v-icon>
            <div>{{ text }}</div>
        </div>
        <template v-slot:actions>
            <v-btn color="white" variant="text" @click="update(false)" icon="mdi-close">
            </v-btn>
        </template>
    </v-snackbar>
</template>
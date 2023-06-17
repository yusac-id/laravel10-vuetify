

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
    show: boolean,
    timeout?: number,
    text: string
}>()

const emit = defineEmits(['close'])

const isShow = ref(props.show)
const message = ref(props.text)

const update = (val) => {
    emit('close', val)
}

</script>

<template>
    <v-snackbar v-model="isShow" :timeout="props.timeout" onchange="close" position="fixed" @update:modelValue="update(isShow)">
        {{ message }}
        <template v-slot:actions>
            <v-btn color="blue" variant="text" @click="update(false)">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>
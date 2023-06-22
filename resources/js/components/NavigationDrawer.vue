<template>
    <v-navigation-drawer :model-value="modelValue" @update:model-value="update" :temporary="smAndDown" :permanent="mdAndUp"
        :width="220" :expand-on-hover="md && mdAndDown" :rail="md && mdAndDown">
        <v-list>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Sandra Adams"
                subtitle="sandra_a88@gmailcom"></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const emit = defineEmits(['update:modelValue'])
const { mdAndDown, sm, mdAndUp, smAndDown, md } = useDisplay()

defineProps<{
    modelValue: boolean
}>()

onMounted(() => {
    if (smAndDown.value) {
        update(false)
    } else {
        update(true)
    }
})


const update = (val) => {
    emit('update:modelValue', val)
}

</script>
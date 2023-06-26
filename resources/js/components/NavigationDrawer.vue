
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { useAuthStore } from '../store/auth.store';
import { UserModel } from '../models/user.model';

const emit = defineEmits(['update:modelValue'])
const { mdAndDown, sm, mdAndUp, smAndDown, md } = useDisplay()
const useAuth = useAuthStore()
const user = ref<UserModel>();

defineProps<{
    modelValue: boolean
}>()

onMounted(() => {
    if (smAndDown.value) {
        update(false)
    } else {
        update(true)
    }
    user.value = useAuth.getUser
})


const update = (val) => {
    emit('update:modelValue', val)
}

</script>

<template>
    <v-navigation-drawer :model-value="modelValue" @update:model-value="update" :temporary="smAndDown" :permanent="mdAndUp"
        :width="220" :expand-on-hover="md && mdAndDown" :rail="md && mdAndDown">
        <v-list>
            <v-list-item :title="user?.name" :subtitle="user?.email" to="/profile">
                <template v-slot:prepend>
                    <v-avatar color="primary">
                        <span>{{ user?.name.substring(0,1) }}</span>
                    </v-avatar>
                </template>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
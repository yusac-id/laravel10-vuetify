<template>
    <div class="h-screen bg-primary text-white text-center flex flex-center">
        <div class="pt-10">
            <div style="font-size: 20vh">
                404
            </div>

            <div class="text-h2" style="opacity:.4">
                Oops. Nothing here...
            </div>

            <v-btn class="mt-10" flat to="/" no-caps >Back to Home</v-btn>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ErrorNotFound'
});
</script>
  
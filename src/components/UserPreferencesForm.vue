<template>
    <div class="inputsPannel">
        <!-- ANCHOR INPUT DE LINGUAGEM -->
        <FormSelect label="Language" :options="languages" />

        <!-- ANCHOR INPUT DE TEMA -->
        <FormSelect label="Theme" :options="theme" />

        <FormSelect label="Two-Factor Authentication"/>
        <FormInput label="Email Notifications">
            <template #icon>
                <UserCircleIcon style="width: 30px; color:#a2b5cd"/>
            </template>
        </FormInput>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import FormSelect from './widgets/FormSelect.vue';
import FormInput from './widgets/FormInput.vue';
import { UserCircleIcon } from '@heroicons/vue/20/solid';

const theme = ref(['Light', 'Dark'])
const languages = ref(['English', 'Português'])
</script>
<style scoped>
.inputsPannel{
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
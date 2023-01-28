<template>
    <form class="inputsPannel">
        <!-- ANCHOR  INPUT DE PRIMEIRO NOME -->
        <FormInput label="First Name" :table_field="userData.firstName" @change="checkFilled(userData)">
            <template #icon>
                <UserCircleIcon style="width:30px; color:#a2b5cd" />
            </template>
        </FormInput>

        <!-- ANCHOR  INPUT DE SEGUNDO NOME -->
        <FormInput label="Last Name" :table_field="userData.lastName" @change="checkFilled(userData)">
            <template #icon>
                <UserCircleIcon style="width:30px; color:#a2b5cd" />
            </template>
        </FormInput>

        <!-- ANCHOR  INPUT DE EMAIL -->
        <FormInput label="Email" :table_field="userData.email" @change="checkFilled(userData)">
            <template #icon>
                <EnvelopeIcon style="width:30px; color:#a2b5cd" />
            </template>
        </FormInput>

        <!-- ANCHOR  INPUT DE PASSWORD -->
        <FormInput label="Password" type="password" :table_field="userData.password" @change="checkFilled(userData)">
            <template #icon>
                <LockClosedIcon style="width:30px; color:#a2b5cd" />
            </template>
        </FormInput>

        <!-- ANCHOR  INPUT DE AVATAR -->
        <FileInput label="Avatar" v-model="userData.avatar">
            <template #icon> </template>
        </FileInput>

        <!-- ANCHOR  INPUT DE lOCALIDADE -->
        <FormInput label="Location" v-model="userData.location" :table_field="userData.location">
            <template #icon>
                <MapPinIcon style="width:30px; color:#a2b5cd" />
            </template>
        </FormInput>

        <!-- ANCHOR  INPUT DE TITLE -->
        <FormInput label="Title" v-model="userData.title" :table_field="userData.title">
            <template #icon>
                <PencilIcon style="width:30px; color:#a2b5cd" />
            </template>
        </FormInput>

        <!-- ANCHOR  INPUT DE DESCRIÇÃO -->
        <DescriptionArea />
        
        <!-- ANCHOR  INPUT DE TAGS -->
        <TagInput label="Tags" v-model="userData.tags" :table_field="userData.tags" />
    </form>
</template>
<script setup>
import { toRefs } from 'vue'
import FormInput from './widgets/FormInput.vue';
import DescriptionArea from './widgets/DescriptionArea.vue';
import FileInput from './widgets/FileInput.vue';
import TagInput from './widgets/TagInput.vue';
import { UserCircleIcon, EnvelopeIcon, LockClosedIcon, MapPinIcon, PencilIcon } from '@heroicons/vue/24/outline';
import { checkFilled } from '@/services/FormServices'
import { userDetails } from '@/services/UserServices';

const userData = toRefs(userDetails)

</script>
<style>
.inputsPannel {
    display: flex;

}
</style>
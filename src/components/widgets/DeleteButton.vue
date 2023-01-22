<template>
    <button type="button" class="button clickable delete" @click="deleteUser(userDetails.id)"><TrashIcon style="font-size:5px" /></button>
</template>
<script setup>
import {TrashIcon} from "@heroicons/vue/24/outline"
import { deleteUser } from "@/services/UserServices";
import { userDetails } from "@/services/UserServices";
</script>
<style lang="scss">

    .delete:hover{
        background-color: #e35169 !important;
        color: white;
    }
</style>
<template>
    <div class="avatar-circle" v-if="!userDetails.avatar">
        <UserCircleIcon style="width: 50px; color: #a2b5cd" />
    </div>

    <div class="avatar-circle" :style="userImage" v-else>

    </div>
</template>
<script setup>
import { userDetails } from '@/services/UserServices';
import { UserCircleIcon } from '@heroicons/vue/24/outline';
import { computed } from 'vue';
const userImage = computed(() => {
    return {
        backgroundImage: `url(${userDetails.previewImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

})
</script>
<style>
.avatar-circle {
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 144px;
    height: 144px;
    border-radius: 100%;
    border: solid 6px white;
    box-shadow: rgba(23, 41, 64, 0.2) 0px 0px 6px 0px
}
</style>
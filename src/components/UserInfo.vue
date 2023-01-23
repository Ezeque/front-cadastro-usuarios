<template>
    <div id="pannel">
        <AvatarArea class="avatar-area" />
        <div style="display:flex; flex-direction: column; flex-wrap: wrap;">
            <h3 class="user-name">{{ `${userDetails.firstName} ${userDetails.lastName}` }}</h3>
            <h4 class="user-email">{{ `${userDetails.email}` }}</h4>
            <div style="text-align:left" v-if="userDetails.title">
                <span class="user-title">{{ userDetails.title }}</span>
            </div>
            
        </div>
    </div>
</template>
<script setup>
import { userDetails } from '@/services/UserServices'
import AvatarArea from '@/components/widgets/AvatarArea.vue'
</script>

<style>

.user-title{
    padding: 5px 10px;
    color: white;
    font-weight: bold;
    font-style: italic;
    background-color: #172940;
    border-radius: 10px;
    text-align: left;
    width:auto !important;
}

#pannel {
    display: flex;
    align-items: center;
    padding: 22px 20px;
    background-color: #f0f4f9;
    border-radius: 10px;
}

.user-name {
    color: #172940;
    margin: 0;
    margin-bottom: 10px;
    text-align: left;
}

.user-email{
    margin: 0;
    color: #a2b5cd;
    margin-bottom: 15px;
    text-align: left;
}
</style>
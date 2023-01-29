<template>
    <div class="clickable avatar-block">
        <div class="avatar-circle" :style="avatarBlockStyle">
        </div>
        <div class="user-block-id">
            <h4 class="user-name">{{`${props.user.firstName} ${props.user.lastName}`}}</h4>
            <span class="user-title">{{ props.user.title }}</span>
        </div>
        {{ user }}
    </div>
</template>
<script setup>
import { defineProps, reactive } from 'vue';
const props = defineProps({
    user: Object
})

const avatarBlockStyle = reactive({
    backgroundImage: `url(${props.user.avatar})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    width: 160,
})
</script>
<style scoped>
.user-block-id{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.user-name{
    margin: 0;
    margin-bottom: 10px;
}

.avatar-circle{
    margin: 0;
    margin-bottom: 10px;
}
.avatar-block {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

<template>
    <div class="container">
        <slot name="icon"></slot>
        <h4 class="label-text">{{ props.label }}</h4>
        <label style="width:100%" :for="label">
            <div class="input-field file-input"> {{ userDetails.avatar.name }} </div>
        </label>
        <input visibility="hidden" class="input-file" type="file" :id="props.label" @change="updateAvatar"
            accept="image/*" />
    </div>
</template>
<script setup>
import { userDetails } from '@/services/UserServices';
import { defineProps, ref } from 'vue';
/* import { userDetails } from '@/services/UserServices.js' */
const imagePreview = ref(null)
const updateAvatar = (e) => {
    userDetails.avatar = e.target.files[0]
    imagePreview.value = URL.createObjectURL(e.target.files[0])
    userDetails.previewImage = imagePreview.value
}
const props = defineProps({
    label: String,
})
</script>
<style scoped>

.file-input{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    transition: 0.250s ease all;
    cursor: pointer;
}

.file-input:hover{
    background-color: #f0f4f9;
}

.label-text {
    color: #172940;
    margin: 0;
    margin-bottom: 10px;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
}

.input-field {
    width: 100%;
    height: 60px;
}

.input-field :focus {
    outline: none;
}

.input-text {
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 15px;
    color: #4f5464;
    border-radius: 6px;
}

.input-file {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}
</style>
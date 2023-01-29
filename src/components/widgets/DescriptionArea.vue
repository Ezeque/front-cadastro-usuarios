<template>
    <div class="container">
        <h4 class="label-text"> Description </h4>
        <textarea :id="input_id" class="descriptionArea" resize="false"></textarea>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    input_id: String
})
</script>
<style scoped>
.label-text {
    color: #172940;
    margin: 0;
}

.container{
    width: 100%;
}

.descriptionArea {
    
    border: 2px solid #d3dae4;
    border-radius: 6px;
    resize: none;
    width: 100%;
    height: 164px;
    outline: none;
    padding: 16px;
}
</style>
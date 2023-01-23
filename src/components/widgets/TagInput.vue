<template>
    <div class="container">
        <slot name="icon"></slot>
        <h4 class="label-text"> {{ label }} </h4>
        <div class="input-field">
            <div name="icon" class="tag-list" v-if="userDetails.tags.length > 0"> 
                <span v-for="tag in (userDetails.tags)" :key="tag" class="tag clickable" @click="handleClick"> {{ tag }} </span>    
            </div>
            <input class="input-field" :type="type" :id="label" v-model="tag" @keydown.enter="handleEnter" />
        </div>
        
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import { userDetails } from '@/services/UserServices';
const tag = ref('')

const handleEnter = async () => {
    userDetails.tags.push(tag.value)
    console.log(userDetails.tags)
    tag.value = ''
}

const handleClick = (e)=>{
    if(userDetails.tags.includes(e.target.innerText)){
        console.log('entrou')
        userDetails.tags.splice(userDetails.tags.indexOf(e.target.innerText), 1)
    }
}
defineProps({
    type: String,
    label: String,
})
</script>
<style scoped>

.tag-list{
    display: flex;
    flex-wrap: nowrap;
    width:auto;
    height:100%
}
.label-text {
    color: #172940;
    margin: 0;
    margin-bottom: 10px;
}

.tag{
    background-color: #f0f4f9;
    padding: 10px;
    margin: 10px;
    border-radius: 6px;
    color: #172940;
    font-weight: bold;
    transition: 0.250s ease all;
    width: auto;
    height: auto;
}

.tag:hover{
    background-color: #e35169;
    color: white;
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
    display: flex;
    justify-content: center;
    align-items: center;
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
</style>
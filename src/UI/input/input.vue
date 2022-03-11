<template>
    <div class="jhy-input-default">
        <slot name="prepend"></slot>
        <input 
            :value="modelValue" 
            @change="handleChange($event)" 
            @input="hanleInput($event)" 
            @blur="handleBlur($event)"
            @focus="handleFoucs($event)"
        >
        <slot name="append"></slot>
    </div>
</template>
<script>
import { nextTick } from '@vue/runtime-core';
export default {
    name: 'jhy-input',
    props: {
        modelValue: '',
    },
    emits: ['update:modelValue','change','input','bulr','foucs'],
    setup(props,{emit}) {
        const handleChange = (e) => {
            console.log(e);
            emit('update:modelValue', e.target.value);
            emit('change', {event: e})
        }
        const  hanleInput = async (e) => {
            await nextTick()
            emit('update:modelValue', e.target.value);
            emit('input', {event: e});
        }
        const handleBlur = (e) => {
            console.log(e);
            // emit('update:value', e.target.value);
            emit('blur', {event: e})
        }
        const handleFoucs = (e) => {
            console.log(e);
            // emit('update:value', e.target.value);
            emit('foucs', {event: e})
        }
        
        return {
            handleChange,
            hanleInput,
            handleBlur,
            handleFoucs
        }
    },
}
</script>
<style scoped>
.jhy-input-default{
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
}
</style>
<template>
    <div class="collapse-container">
        <slot></slot>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { onMounted, provide, watch } from '@vue/runtime-core';
export default {
    props: {
        activeName: ''
    },
    emits:{
        'update:activeName':() => {
            return true
        }
    },
    setup(props, {emit,slots}) {
        let AllName  = ref(props.activeName);
        // AllName.value = slots.default().map(item => {
        //     console.log(item);
        //     return item.props.name
        // })
        // console.log(AllName)
        
        provide('activeName',AllName);
        let changeName = (e) => {
            console.log('fu',e);
            AllName.value = e;
            emit('update:activeName',e);
        }
        provide("changeName", changeName)
        return {
            changeName
            // AllName
        }
    },
}
</script>
<style scoped>
.collapse-container{
    padding: 20 20;
    border: 1px solid green;
    border-radius: 4px;
    box-sizing: border-box;
}
</style>
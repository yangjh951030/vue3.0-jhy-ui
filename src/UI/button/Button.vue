<template>
    <button 
        :class="buttonClasses"
        @click="handleClick($event)"
    >
        <slot>按钮</slot>
    </button>
</template>
<script>
import { computed } from 'vue'
export default {
    name: 'jhy-button',
    emits: ['click'],
    props: {
        myClasses: {
            type: Array,
            default: () => {
                return []
            }
        },
        type: {
            type: String,
            default: 'primary'
        }
    },
    
    setup(props,{ emit }) {
        const buttonClasses = computed(() => {
            return ['jhy-button-default', props.type, ...props.myClasses]    
        })
        const handleClick = (e) => {
            console.log("点击了按钮")
            emit('click',{event: e});
        }
        return {
            buttonClasses,
            handleClick
        }
    }
}
</script>
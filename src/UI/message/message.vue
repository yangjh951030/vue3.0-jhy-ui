<template>
    <transition name="message" >
        <div class="message-content" v-if="show" :style="Styles">
            <JhyContent :content="content" />
        </div>
    </transition>
</template>
<script>
import JhyContent from '../modal/content'
import { onMounted, onUnmounted, reactive, ref } from 'vue'
export default {
    components: {
        JhyContent
    },
    props: {
        content:{
            type: [Array, String, Object],
            default: () => {}
        },
        durtion: {
            type: Number,
            default: 5000
        },
        left: {
            type: [Number, String],
            default: '50px'
        },
        top: {
            type: [Number, String],
            default: '50px'
        }
    },
    setup(props,context) {
        const show = ref(false);
        const Styles = reactive({
            // left: props.left,
            // top: props.top
        })
        const close = () => {
            show.value = false;
        }
        let timer  = null;
        
        
        onMounted(() => {
            show.value = true;
            //timer();
            timer =  setTimeout(() => {
               show.value = false;
            }, props.durtion);
        })
        onUnmounted(() => {
            clearTimeout(timer);
        })
        return {
            show,
            Styles,
            close,
            timer
        }
    },
}
</script>
<style scoped>
.message-content{
    width: 200px;
    line-height: 60px;
    left: 0;
    top: 0;
    border: 1px solid gray;
    border-radius: 4px;
    background: white;
}
.message-enter-active{
    transition: all 0.6s ease-out;
}
.message-leave-active{
    transition: all 0.6s ease;
}
.message-enter-from,
.message-leave-to{
    transform: translateY(-20px);
    opacity: 0;
}

</style>
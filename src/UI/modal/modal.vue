<template>
    <transition name="modal">
        <template v-if="modelValue">
           <div class="modal-container">
               <div class="body" :style="bodyStyles">
                   <div class="modal-title">
                        <template v-if="showClose">
                            <div class="title-close" @click="hanldeClose">X</div>
                        </template>
                        <div class="text-title">
                            <slot name="title">
                                {{title}}
                            </slot>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div>
                            <slot name="body">
                                <JhyContent :content="content" />
                            </slot>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                            <div class="footer-button">
                                <button @click="handleCancel" class="button">{{'取消'}}</button>
                                <button @click="handleComfirm" class="button">{{'确定'}}</button>
                            </div>
                        </slot>
                    </div>
               </div>
           </div>
        </template>
    </transition>
</template>
<script>
import { computed, getCurrentInstance, nextTick, toRef, toRefs, watch , ref} from '@vue/runtime-core';
import { h } from 'vue';
import JhyContent from './content';
export default {
    name: 'jhy-modal',
    components: {
        JhyContent
    },
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '弹窗'
        },
         showClose: {
            type: Boolean,
            default: true
        },
        onCancel : {
            type: Function,
            default: () => {}
        },
        onOk : {
            type: Function,
            default: () => {}
        },
        width: {
            type: String,
            default: '500px'
        },
        background: {
            type: Object,
            default: () => {}
        },
        content: {
            type: [String,Array,Object],
            default: () => {
                return h('div', null, '无内容')
            }
        }
    },
    emits:{
        'update:modelValue': (val) => {
            return true
        }
    },
    setup(props,{emit}) {
        const instance = getCurrentInstance();
        console.log(instance);
       
        const { background } = toRef(props);
        const bodyStyles = computed(() => {
            return {
                width: props.width,
                ...background
            }
        })

        const { modelValue } = toRefs(props);
        watch(modelValue, async () => {
            if(modelValue.value === true) {
                await nextTick();
                console.log(instance.ctx.$el);
                instance.appContext.config.globalProperties.$modalArr.push(instance.ctx.$el);
                console.log(instance.appContext.config.globalProperties.$modalArr);
            }else {
                console.log(modelValue.value);
                let length = instance.appContext.config.globalProperties.$modalArr.length;
                instance.appContext.config.globalProperties.$modalArr.splice(0,length - 2);
            }
        })
        const close = () => {
            emit('update:modelValue', false);
        }
         const hanldeClose = () => {
            showValue.value = false;
            emit('update:modelValue', false);
            close();
        }
        const handleCancel = () => {
            emit('update:modelValue', false);
            close()
            props.onCancel()
        }
        const handleComfirm = () => {
            props.onOk();
        }
        return {
            hanldeClose,
            handleCancel,
            handleComfirm,
            bodyStyles,
            close,
            modelValue,
        }
    },
    // mounted() {
    //     document.body.appendChild(this.$el);
    // }
}
</script>
<style scoped>
.modal-container{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: gray;
}
.body {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: white;
}
.modal-title{
    padding: 0 20px;
    line-height: 40px;
    border-bottom: 1px solid gray;
    box-sizing: border-box;
}
.text-title{
    line-height: 40px;
}
.title-close{
    float: right;
}


.modal-body{
    padding: 20 20;
    box-sizing: border-box;
}


.modal-footer{
    padding: 0 20px;
    border-top: 1px solid gray;
    line-height: 40px;
}
.footer-button{
    float: right;
}
.button {
    margin-left: 16px
}
</style>
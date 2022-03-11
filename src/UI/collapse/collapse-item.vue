<template>
    <div>
        <div class="title" @click="showItSelf"><slot name="title">{{title}}</slot></div>
        <transition name="height-change" >
            <div class="collapse-item-container" v-show="show"><slot name="default"></slot></div>
        </transition>
    </div>
</template>
<script>
import { computed, inject } from '@vue/runtime-core'
export default {
    props: {
        title: '',
        name: '',
    },
    setup(props,context) {
        let names = inject('activeName','first');
        let changeItself = inject('changeName')
        console.log(names.value)
        let show = computed(() => {
            return names.value === props.name;
        })
        const showItSelf = () => {
            console.log(props.name);
            changeItself(props.name)
        }
        return {
            names,
            show,
            showItSelf
        }
    },
}
</script>
<style scoped>

.height-change-enter-active,
.height-change-leave-active
{
  transition: height 1s linear;
}


.height-change-leave-to {
  transition: height 0s linear;
}
.collapse-item-container{
    height: 80px;
}
</style>
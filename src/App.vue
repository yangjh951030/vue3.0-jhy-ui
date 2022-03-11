<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import JhyButton from './UI/button/Button.vue'
import JhyInput from './UI/input/input.vue'
import Cell from './UI/cell/cell'
import Next from './UI/next/next'
import JhyCollapse from './UI/collapse/collapse.vue'
import JhyCollapseItem from './UI/collapse/collapse-item.vue'
import JHyModal from './UI/modal/modal.vue'
import JhyMessage from './UI/message/message.vue'
import modal from './UI/modal/modal'

import { getCurrentInstance, h, watch }   from 'vue'
import { reactive , ref} from 'vue'
let type = ref('primary')
let myclass = ref([]);
let otype = reactive({type: 'primary'})
let template = reactive({
  h: h('div',{
    class:{default: 'true'},
    onClick: () => {
      console.log('xxxxx');
    }
  },'你是父亲')
})
let activeName = ref('first')
// watch(activeName,(value) => {
//   console.log(value)
// })

let show = ref(false);
const instance = getCurrentInstance();

function selfClick(e) {
  console.log(e);
  myclass.value = ['111','2222']
  type.value = 'default';
  otype.type = 'my-default';
  instance.proxy.$message({content: '55555'})
  // show.value = true;
}

let value = ref('10');
function funs() {
  console.log('xxxx');
  // modal({title: '你是傻逼', content: '6666'});
}
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <JhyButton @click="selfClick" :type="otype.type" :my-classes="myclass" />
  <JhyInput v-model="value" >
    <template #prepend="{}">
      <div>5555</div>
    </template>
    <template #append="{}">
      <div>6666</div>
    </template>
  </JhyInput>
  {{value}}
  <Cell title="我是函数组件" @click="funs">
    <template #prepend>首部</template>
    <template #append>尾部</template>
  </Cell>
  <Next :template="template"></Next>
  <JhyCollapse v-model:activeName="activeName">
    <JhyCollapseItem name="first" title="first">11111</JhyCollapseItem>
    <JhyCollapseItem name="second" title="second">2222</JhyCollapseItem>
    <JhyCollapseItem name="third" title="third">3333</JhyCollapseItem>
    <JhyCollapseItem name="fourth" title="fourth">4444</JhyCollapseItem>
  </JhyCollapse>
  {{activeName}}
  <JHyModal v-model="show"></JHyModal>
  <JhyMessage content="5555" />
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>

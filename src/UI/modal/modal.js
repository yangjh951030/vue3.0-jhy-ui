import { createVNode,render } from "vue";
import JhyModal from './modal.vue';

const content = document.createElement('div');
content.setAttribute('class','jhy-modal');
document.body.appendChild(content);

export default (props)=> {
    const modalNode = createVNode(JhyModal,{...props,modelValue: true});
    render(modalNode,content);
    //这种js的打开无法实现状态的修改,去掉吧,可参考message的写法
}
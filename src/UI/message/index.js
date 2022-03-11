import { createVNode, nextTick, render } from 'vue';
import JhyMessage from './message.vue'

let messageArr = [];
let key = 1;
let zIndex = 2000;

const message = (props) => {
    let keys = 'jhy_message_' + key++;
    let styleZIndex = zIndex ++;
    let messageContent = document.createElement('div');
    messageContent.setAttribute('class','jhy-message');
    document.body.appendChild(messageContent);
    const messageNode = createVNode(JhyMessage,{...props});
    messageArr.push(messageContent);
    messageContent.style.zIndex = styleZIndex ;
    messageContent.style.top = (messageArr.length - 1) * 80 + 30 + 'px';
    render(messageNode, messageContent);
    setTimeout(() => {
        messageArr.shift();
        document.body.removeChild(messageContent);
        resetHeight();
    },props.durtion + 100 || 5000 + 100); //需要延迟100s进行
}
const resetHeight = () => {
    messageArr.forEach((item,index) => {
        item.style.top = index * 80 + 30 + 'px';
    })
}

export default {
    install(app) {
        app.config.globalProperties.$message = message;
    }
}
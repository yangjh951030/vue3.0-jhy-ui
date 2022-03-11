import { h } from "vue";

const Content = (props,context) => {
    if(typeof props.content === 'string')  return h('div',props,props.content);
    if(props.content instanceof Array) return h('div', null, [...props.content]);
    if(props.context !== null) return  props.content;
}

export default Content;
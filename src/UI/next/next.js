import { h } from "vue"

const Next = (props,context) => {
    // return h(
    //     'template',
    //     null,
    //     [
    //         props.h
    //     ]
    // )
    return props.template.h
}

export default Next;

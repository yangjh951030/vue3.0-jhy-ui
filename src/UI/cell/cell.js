import { h } from "vue"

const Cell = function (props,context) {
    console.log(props)
    console.log(context)
    return h(
        'div',
        {...props},
        [
            context.slots.prepend(),
            h('p',null,props.title),
            context.slots.append()
        ]
    )
}

export default Cell;
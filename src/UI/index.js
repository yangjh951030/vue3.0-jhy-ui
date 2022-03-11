import JhyButton from './button/button.vue';
import JhyCollapse from './collapse/collapse.vue';
import JhyModal from './modal/modal.vue';
import JhyMessage from './message/index.js';
import JhyInput from './input/input.vue';

let components = [
    JhyButton,
    JhyCollapse,
    JhyInput,
    JhyModal
]
export default {
    install(app) {
        components.forEach(item => {
            app.component(item.name,item);
        })
        app.config.globalProperties.$message = JhyMessage;
    },
}
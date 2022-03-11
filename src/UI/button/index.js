import JhyButton from './Button.vue'
// JhyButton.install = function(Vue) {
//     Vue.component(JhyButton.name, JhyButton);
// };2.0+版本的写法

// export default JhyButton;

export default {
    install(app){
        app.component(JhyButton.name,JhyButton);
    }
}

import modal from './modal';
import JhyModal from './modal.vue'

export default {
    install(app) {
        app.config.globalProperties.$modal = modal;
        app.component(JhyModal.name,JhyModal);
    }
}
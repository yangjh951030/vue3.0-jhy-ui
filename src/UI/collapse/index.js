import JhyCollapse from './collapse.vue'
import JhyCollapseItem from './collapse-item.vue'

export default {
    install(app) {
        app.component(JhyCollapse.name,JhyCollapse);
        app.component(JhyCollapseItem.name, JhyCollapseItem);
    }
}
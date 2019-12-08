import pageComponents from "@internal/page-components";
import Vuex from "vuex";
import store from "./store";

export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    Vue.use(Vuex);
    Vue.mixin({store:store});
    for (const [name, component] of Object.entries(pageComponents)) {
        Vue.component(name, component);
    }
};
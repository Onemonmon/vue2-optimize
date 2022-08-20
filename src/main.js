import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { cloneDeep } from "lodash";
import moment from "moment";

Vue.config.productionTip = false;
console.log(ElementUI);
Vue.use(ElementUI);

console.log(cloneDeep({}));
console.log(moment().format("YYYY-MM-DD"));

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

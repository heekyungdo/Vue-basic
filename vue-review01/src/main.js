import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

new Vue({
  // app을 mount할 때 router를 쓸 수 있는 구조가 세팅되었다
  router,
  render: (h) => h(App),
}).$mount("#app");

createApp(App).mount("#app");

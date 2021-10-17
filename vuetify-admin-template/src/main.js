import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  // app을 mount할 때 router를 쓸 수 있는 구조가 세팅되었다
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

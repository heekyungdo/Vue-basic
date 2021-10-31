import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  // .breakpoint.mobile이라는 기준을 변경하고 싶을 때, 이런식으로 작성하면돼
  breakpoint: {
    mobileBreakpoint: "xs",
  },
});

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

// vue내에서 vue router를 사용하겠다
Vue.use(VueRouter);

// router 정의
const router = new VueRouter({
  mode: "history",

  // 실제 사용자가 URL path로 들어왔을 때 어디로 넘길지 routes라는 배열안에 넣어줘.
  //  components마다 어디로 로딩을 할지 routes에서 정의한다
  routes: [
    // localhost:8080 다음에 기본 path일 때는 component Home을 로딩하겠다
    {
      path: "/",
      component: Home,
    },
    //   path에 about이 들어오면 About coponent로 로딩시키겠다
    {
      path: "/about",
      component: About,
    },
  ],
});

export default {
  router,
};

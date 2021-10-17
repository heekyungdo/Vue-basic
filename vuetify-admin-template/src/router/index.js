import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard";
import GridSystem from "@/views/GridSystem";

// router 설정
Vue.use(VueRouter);

// routes 변수 생성 후 url에 의해 rendering될 페이지를 mapping
const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/grid-system",
    name: "GridSystem",
    component: GridSystem,
  },
];

// router instance 생성
const router = new VueRouter({
  mode: "history",
  routes,
});

// 생성한 instance를 export
export default router;

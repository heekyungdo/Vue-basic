import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard";
import GridSystem from "@/views/GridSystem";
import GridListPage from "@/views/GridListPage";
import BreakPoints from "@/views/BreakPoints";
import Typography from "@/views/Typography";

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
  {
    path: "/grid-list-page",
    name: "GridListPage",
    component: GridListPage,
  },
  {
    path: "/breakpoints",
    name: "BreakPoints",
    component: BreakPoints,
  },
  {
    path: "/typography",
    name: "Typography",
    component: Typography,
  },
];

// router instance 생성
const router = new VueRouter({
  mode: "history",
  routes,
});

// 생성한 instance를 export
export default router;

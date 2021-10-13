import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GetList from '../views/GetList.vue'
import Person from '../views/Person.vue'
import ImageUpload from '../views/ImageUpload.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/getlist',
    name: 'GetList',
    component: GetList
  },
  {
    path: '/person',
    name: 'Person',
    component: Person
  },
  {
    path: '/imageupload',
    name: 'ImageUpload',
    component: ImageUpload
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

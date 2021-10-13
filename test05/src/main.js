import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//store이후 아무것도 지정하지 않으면 store밑에 있는 index.js실행해줌. store뿐 아니라 다른 것들도 다른것 지정하지 않으면 index 실행해줌

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

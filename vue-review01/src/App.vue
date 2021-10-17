<template>
  <div id="app">
    <!-- 하단 export default-components-Header를 참조해서 import Header를 찾아서 실제 ./components//layout/Header.vue를 찾아서 Header.vue 내에 template내 div전체 코드를 가져온 것 -->
    <!-- Header는 바뀌지 않아. <router-view></router-view> 여기만 재로딩 -->
    <Header />
    <!-- 라우팅 할 수 있게끔 라우터가 들어가야해 -->
    <!-- 자주 바뀌는 컨텐츠 영역 -->
    <!-- 라우터를 이용해서 path가 바뀔 때마다 <router-view></router-view> 이 부분만 재로딩-->
    <div id="content" class="content">
      <!-- 전체 페이지는 가만히 있는 상태에서 이 부분들만 components에서 가져와서 바뀌게 되는 것 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";

export default {
  name: "App",
  components: {
    // script 내 import한 Header를 components 안에 넣어줘야해. 그러고 나면 이 안에서 이 컴포넌트를 사용할 수 있어.
    Header,
  },
};
</script>

<style></style>

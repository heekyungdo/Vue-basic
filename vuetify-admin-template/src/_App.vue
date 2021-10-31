<template>
  <!-- v-app component는 vue 프레임워크인 진입점인 id가 app인 div로 치환된다 -->
  <!-- 치환되기 때문에 v-app은 반드시 최상단에 선언해야해-->
  <v-app>
    <!-- 기본 레이아웃 구성 요소의 높이가 프레임워크 코어에 등록되어 있기 때문에 코어의 값을 가지고 있는 main이 자동으로 영역조절 -->
    <!-- 그렇기 때문에 기본 레이아웃의 특수 속성인 app이 반드시 필요하다 -->
    <!-- 이런 기본 레이아웃인 컴포넌트는 반드시 v-main 컴포넌트 외부에 있어야한다-->
    <!-- 해당 컴포넌트는 xs사이즈일 때만 보이게 하겠다 -->
    <v-app-bar v-if="$vuetify.breakpoint.xsOnly" app />
    <v-navigation-drawer app />
    <!-- 레이아웃을 제외한 애플리케이션에 컨텐츠 영역을 나타냄 -->
    <!-- main tag로 치환이 된다 -->
    <v-main>
      <v-container fluid>
        컨텐츠 영역
      </v-container>
    </v-main>
    <v-footer app />
  </v-app>
</template>

<script>
export default {};
</script>

<style></style>

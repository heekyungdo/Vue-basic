<template>
  <v-app>
 
   
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    // 사이드 메뉴바 등록
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
      { title: "GridSystem", icon: "mdi-view-dashboard", to: "/grid-system" },
      {
        title: "GridListPage",
        icon: "mdi-view-dashboard",
        to: "/grid-list-page",
      },
      {
        title: "BreakPoints",
        icon: "mdi-view-dashboard",
        to: "/breakpoints",
      },
      {
        title: "Typography",
        icon: "mdi-view-dashboard",
        to: "/typography",
      },
    ],
    right: null,
  }),
};
</script>

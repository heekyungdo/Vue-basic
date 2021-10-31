<template>
  <v-app>
    <default-bar @drawer="drawer = !drawer" />
    <default-drawer v-model="drawer" />
    <v-main>
      <v-container fluid> </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DefaultBar from "./AppBar";
import DefaultDrawer from "./Drawer";
export default {
  name: "DefaultLayout",
  components: {
    DefaultBar,
    DefaultDrawer,
  },
};
</script>

<style></style>

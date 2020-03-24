<template>
  <div class="main-wrapper">
    <Navbar :links="nav.links" />
    <div class="container mx-auto antialiased mt-12">
      <div class="main-content font-lato">
        <div class="w-full">
          <router-view></router-view>
        </div>
        <content-footer></content-footer>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import ContentFooter from "@/layouts/ContentFooter";

export default {
  name: "MainLayout",
  components: {
    Navbar,
    ContentFooter
  },
  data() {
    return {
      nav: {
        links: [{ label: "About", to: "/" }]
      }
    };
  }
};
</script>

<style>
</style>
<template>
  <div class="main-wrapper">
    <Navbar :links="nav.links" />
    <div class="main-content font-aileron">
      <div class="w-full">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <router-view />
        </fade-transition>
      </div>
      <content-footer></content-footer>
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
        links: [
          { label: "About", to: "/about" },
          { label: "Countries", to: "/countries" },
          { label: "Live Map (WIP)", to: "/livemap" }
        ]
      }
    };
  }
};
</script>

<style>
</style>
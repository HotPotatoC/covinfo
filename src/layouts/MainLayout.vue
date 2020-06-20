<template>
  <div class="main-wrapper">
    <Navbar :links="nav.links" />
    <div class="container mx-auto antialiased px-6">
      <div class="main-content font-aileron">
        <div class="w-full">
          <slide-y-up-transition :duration="200" origin="center top" mode="out-in">
            <router-view />
          </slide-y-up-transition>
        </div>
        <content-footer></content-footer>
      </div>
    </div>
  </div>
</template>

<script>
import { SlideYUpTransition } from "vue2-transitions";

import Navbar from "@/components/Navbar/Navbar";
import ContentFooter from "@/layouts/ContentFooter";

export default {
  name: "MainLayout",
  components: {
    Navbar,
    ContentFooter,
    SlideYUpTransition
  },
  data() {
    return {
      nav: {
        links: [
          { label: "Home", to: "/" },
          { label: "New Normal", to: "/newnormal" },
          { label: "About", to: "/about" },
          { label: "Countries", to: "/countries" }
        ]
      }
    };
  }
};
</script>

<style>
</style>
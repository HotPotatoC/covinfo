<template>
  <header class="lg:px-16 px-6 bg-white lg:py-0 py-2 shadow-xl">
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="flex-1 flex justify-between items-center">
          <router-link to="/" class="font-gilroy text-2xl">
            cov<span class="text-primary">info</span>
          </router-link>
        </div>

        <label
          for="menu-toggle"
          class="cursor-pointer lg:hidden block"
          @click="isOpened = !isOpened"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </label>

        <div
          :class="{hidden: !isOpened}"
          class="lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul
              class="lg:flex items-center justify-between text-base font-medium text-gray-600 pt-4 lg:pt-0"
            >
              <li v-for="(link, index) in links" :key="index">
                <router-link class="lg:p-4 py-3 px-0 block" :to="link.to">{{
                  link.label
                }}</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    links: Array
  },
  data() {
    return {
      isOpened: false
    };
  }
};
</script>

<style></style>

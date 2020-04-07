<template>
  <header
    :class="{'rounded-bottom shadow-xl bg-white': isOpened}"
    class="lg:px-16 px-6 lg:py-2 py-0"
  >
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-between items-center">
        <div class="flex-1 flex">
          <router-link to="/" class="font-gilroy text-2xl">
            <div class="flex">
              cov
              <span class="text-primary">info</span>
            </div>
          </router-link>
        </div>
        <div class="lg:hidden block">
          <button
            :class="{'is-active': isOpened}"
            class="hamburger hamburger--squeeze"
            type="button"
            @click="isOpened = !isOpened"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <div
          :class="{hidden: !isOpened}"
          class="lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul class="lg:flex items-center justify-between font-medium pt-4 lg:pt-0">
              <li v-for="(link, index) in links" :key="index">
                <router-link
                  class="font-aileron lg:text-base tracking-tight text-xl lg:text-gray-800 py-4 px-6 block hover:text-green-500 rounded-lg"
                  :to="link.to"
                >
                  {{
                  link.label
                  }}
                </router-link>
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

<style lang="scss" scoped>
.hamburger {
  transform: scale(0.6);
  outline: none !important;
  -webkit-tap-highlight-color: transparent;
}
.rounded-bottom {
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}
</style>

<style src="hamburgers/dist/hamburgers.css"></style>
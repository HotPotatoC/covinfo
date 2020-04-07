<template>
  <button :class="setupClasses()" class="font-gilroy text-white rounded-lg">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "base-button",
  props: {
    size: {
      type: String,
      default: "base"
    },
    type: {
      type: String,
      default: "primary"
    }
  },
  methods: {
    setupClasses() {
      let classes = [
        {
          "px-12 py-3": this.size == "base",
          "px-16 py-4": this.size == "md"
        },
        `bg-${this.type}`
      ];

      return classes;
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  &:hover {
    background: #1fbb60;
  }
  transition: 0.25s;
}
</style>
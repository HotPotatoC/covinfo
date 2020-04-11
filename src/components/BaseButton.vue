<template>
  <button
    :class="btnClasses"
    :style="hoverStyle"
    @mouseenter="setHover(true)"
    @mouseleave="setHover(false)"
    class="font-gilroy rounded-lg"
  >
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
  data() {
    return {
      hoverState: false
    };
  },
  methods: {
    setHover(state) {
      this.hoverState = state;
    }
  },
  computed: {
    btnClasses() {
      let classes = [
        {
          "px-12 py-3": this.size == "base",
          "px-16 py-4": this.size == "md"
        },
        `bg-${this.type}`
      ];

      return classes;
    },
    hoverStyle: function() {
      let hovered = "";

      switch (this.type) {
        case "primary":
          hovered = "#1fbb60";
          break;
        case "primary-light":
          hovered = "#a2ddb3";
          break;

        default:
          break;
      }

      if (this.hoverState) {
        return {
          backgroundColor: hovered
        };
      }

      return "";
    }
  }
};
</script>

<style scoped>
button {
  transition: 0.25s;
}
</style>
<template>
  <div
    :class="[type ? `bg-${type}` : 'bg-white',
    outlineType ? `border-${outlineType} border` : 'border-0']"
    class="rounded-lg overflow-hidden shadow-lg m-5"
  >
    <div v-if="img">
      <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
    </div>
    <div class="px-6 py-4">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-card",
  props: {
    type: {
      type: String,
      description: "Type of the card ['primary', 'warning', 'danger']"
    },
    outlineType: {
      type: String,
      description:
        "Type of the card outline / border ['primary', 'warning', 'danger']"
    },
    img: {
      type: String,
      description: "Image path"
    }
  }
};
</script>
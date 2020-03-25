<template>
  <div class="container mx-auto">
    <div class="text-center">
      <h1 class="text-6xl font-gilroy text-primary">404 Not Found :(</h1>
      <div class="flex justify-center items-center">
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
          class="feather feather-arrow-left"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <router-link to="/home" class="text-2xl font-lato ml-4">Go Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
<template>
  <div class="flex flex-wrap mt-12 lg:mt-24 mx-6 lg:mx-0">
    <div class="w-full">
      <h1
        class="font-gilroy tracking-tight text-center text-4xl md:text-6xl"
      >View the latest Covid-19 Cases</h1>
      <div class="flex justify-center text-center">
        <h2
          class="font-gilroy sub-title tracking-tight text-xl text-gray-600 md:text-3xl"
        >Covinfo is a place where you can view the Novel Coronavirus 2019 worldwide cases and demographics.</h2>
      </div>
      <div class="text-center mt-12">
        <router-link to="/">
          <base-button size="md" class="text-white">CHECK IT OUT</base-button>
        </router-link>
      </div>
    </div>
    <div class="w-full">
      <img src="@/assets/illustrations/undraw_statistic_chart_38b6.svg" alt="Guy lol" />
    </div>
    <div class="w-full md:w-1/2 text-left mt-12">
      <h1 class="font-gilroy tracking-tight text-3xl md:text-6xl">Where does Covinfo get it's data?</h1>
      <h2 class="font-aileron sub-title tracking-tight text-lg text-gray-600 md:text-3xl">
        Covinfo gets it's data from the
        <a
          class="text-primary"
          href="https://www.worldometers.info/coronavirus/"
          target="_blank"
        >worldometers</a> website through a public REST API server which covinfo uses.
      </h2>
      <a href="https://github.com/novelcovid/api" target="_blank">
        <base-button size="md" type="primary" class="mt-5 lg:mt-12 text-white">CHECK THE API</base-button>
      </a>
    </div>
    <div class="w-full md:w-1/2 mt-5 md:mt-12 text-left">
      <img src="@/assets/illustrations/undraw_server_q2pb.svg" alt="Server i guess hehe" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sub-title {
  max-width: 40ch;
}
</style>
<template>
  <div class="flex flex-wrap mt-12">
    <div v-if="ready" class="w-full">
      <router-link
        :to="'/country/' + country.country.toLowerCase()"
        v-for="(country, index) in countries"
        :key="index"
      >
        <base-card class="country-card hover:bg-gray-100 hover:shadow-2xl">
          <div class="block md:flex md:justify-between">
            <h1 class="font-gilroy text-2xl text-primary">{{ country.country }}</h1>
            <img v-lazy="country.countryInfo.flag" class="shadow-xl" alt />
          </div>
        </base-card>
      </router-link>
    </div>
    <div class="mx-auto text-center mb-64" v-else>
      <base-loading></base-loading>
      <p>Fetching countries...</p>
    </div>
  </div>
</template>

<script>
import { allCountries } from "../services/covid";
export default {
  data() {
    return {
      countries: [],
      ready: false
    };
  },
  async created() {
    await this.getAllCountries();
    this.ready = true;
  },
  methods: {
    async getAllCountries() {
      try {
        const { data } = await allCountries();

        this.countries = data;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style lang="scss">
.country-card {
  transition: 0.25s;
}
</style>
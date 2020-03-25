<template>
  <div class="flex flex-wrap">
    <div v-if="ready" class="w-full">
      <router-link
        :to="country.country.toLowerCase()"
        v-for="(country, index) in countries"
        :key="index"
      >
        <base-card class="country-card hover:bg-gray-100 hover:shadow-2xl">
          <div class="block md:flex md:justify-between">
            <h1 class="font-gilroy text-2xl text-primary">{{ country.country }}</h1>
            <img :src="country.countryInfo.flag" class="shadow-xl" alt />
          </div>
        </base-card>
      </router-link>
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
<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <h1 class="text-xl md:text-4xl text-center">Worldwide COVID-19 Cases (WIP)</h1>
    </div>
    <div class="w-full mb-12">
      <p
        class="text-center text-gray-600"
      >Last updated: {{covidCases.updated | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</p>
    </div>
    <div class="w-full xl:w-1/3">
      <base-card type="danger-light" outline-type="danger">
        <div class="font-bold font-gilroy text-gray-600 uppercase text-xl mb-2">Total Cases</div>
        <div class="font-bold font-lato text-gray-800 mb-2">
          <span class="text-2xl md:text-6xl">{{covidCases.cases.toLocaleString()}}</span>
        </div>
      </base-card>
    </div>
    <div class="w-full xl:w-1/3">
      <base-card type="primary-light" outline-type="primary">
        <div class="font-bold font-gilroy text-gray-600 uppercase text-xl mb-2">Total Recovery</div>
        <div class="font-bold font-lato text-gray-800 mb-2">
          <span class="text-2xl md:text-6xl">{{covidCases.recovered.toLocaleString()}}</span>
        </div>
      </base-card>
    </div>
    <div class="w-full xl:w-1/3">
      <base-card type="warning-light" outline-type="warning">
        <div class="font-bold font-gilroy text-gray-600 uppercase text-xl mb-2">Total Deaths</div>
        <div class="font-bold font-lato text-gray-800 mb-2">
          <span class="text-2xl md:text-6xl">{{covidCases.deaths.toLocaleString()}}</span>
        </div>
      </base-card>
    </div>
  </div>
</template>

<script>
import { allCases } from "../services/covid";

export default {
  name: "Home",
  data() {
    return {
      covidCases: {
        cases: 0,
        deaths: 0,
        recovered: 0,
        updated: 0
      }
    };
  },
  async created() {
    await this.getAllCases();
  },
  methods: {
    async getAllCases() {
      try {
        const { data } = await allCases();

        Object.assign(this.covidCases, data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

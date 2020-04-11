<template>
  <div class="flex flex-wrap mt-12">
    <div class="w-full">
      <h1 class="font-gilroy text-xl md:text-4xl text-center">Worldwide COVID-19 Cases (WIP)</h1>
    </div>
    <div class="w-full mb-12" v-if="covidCases.ready">
      <p
        class="text-center text-gray-600"
      >Last updated: {{covidCases.updated | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</p>
    </div>
    <div class="w-full xl:w-1/3">
      <base-card type="warning-light" outline-type="warning">
        <div class="font-bold font-gilroy text-gray-700 uppercase text-xl mb-2">Total Cases</div>
        <div class="font-bold font-aileron text-gray-800 mb-2" v-if="covidCases.ready">
          <span class="text-2xl md:text-6xl">{{covidCases.cases.toLocaleString()}}</span>
        </div>
        <div class="font-bold font-aileron text-gray-800 mb-2" v-else>
          <base-loading></base-loading>
        </div>
      </base-card>
    </div>
    <div class="w-full xl:w-1/3">
      <base-card type="primary-light" outline-type="primary">
        <div class="font-bold font-gilroy text-gray-700 uppercase text-xl mb-2">Recovered</div>
        <div class="font-bold font-aileron text-gray-800 mb-2" v-if="covidCases.ready">
          <span class="text-2xl md:text-6xl">{{covidCases.recovered.toLocaleString()}}</span>
        </div>
        <div class="font-bold font-aileron text-gray-800 mb-2" v-else>
          <base-loading></base-loading>
        </div>
      </base-card>
    </div>
    <div class="w-full xl:w-1/3">
      <base-card type="gray-400" outline-type="gray-600">
        <div class="font-bold font-gilroy text-gray-700 uppercase text-xl mb-2">Deaths</div>
        <div class="font-bold font-aileron text-gray-800 mb-2" v-if="covidCases.ready">
          <span class="text-2xl md:text-6xl">{{covidCases.deaths.toLocaleString()}}</span>
        </div>
        <div class="font-bold font-aileron text-gray-800 mb-2" v-else>
          <base-loading></base-loading>
        </div>
      </base-card>
    </div>
    <div class="w-full text-center">#stayhome</div>
    <div class="w-full flex justify-center">
      <base-card class="w-full overflow-x-auto h-screen">
        <table class="min-w-full leading-normal" v-if="covidCases.ready">
          <thead>
            <tr>
              <th class="sticky top-0 px-4 py-3 bg-white">Country</th>
              <th class="sticky top-0 px-4 py-3 bg-white">Total Cases</th>
              <th class="sticky top-0 px-4 py-3 bg-white">Active Cases</th>
              <th class="sticky top-0 px-4 py-3 bg-white">New Cases Today</th>
              <th class="sticky top-0 px-4 py-3 bg-white">Total Deaths</th>
              <th class="sticky top-0 px-4 py-3 bg-white">New Deaths</th>
              <th class="sticky top-0 px-4 py-3 bg-white">Total Recovered</th>
              <th class="sticky top-0 px-4 py-3 bg-white">Total Critical</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in countriesData" :key="index" class="hover:bg-gray-200">
              <td class="border-b px-4 py-2 border-r">
                <router-link
                  exact
                  :to="'/country/' + row.country.toLowerCase()"
                  class="text-blue-700 underline"
                >{{ row.country }}</router-link>
              </td>
              <td class="border-b px-4 py-2">{{ row.cases.toLocaleString() }}</td>
              <td class="border-b px-4 py-2">{{ row.active.toLocaleString() }}</td>

              <td
                class="border-b px-4 py-2"
                :class="{' bg-warning-light': row.todayCases > 0}"
              >{{ row.todayCases.toLocaleString() }}</td>

              <td class="border-b px-4 py-2">{{ row.deaths.toLocaleString() }}</td>

              <td
                class="border-b px-4 py-2"
                :class="{'bg-danger-light': row.todayDeaths > 0}"
              >{{ row.todayDeaths.toLocaleString() }}</td>

              <td class="border-b px-4 py-2 text-primary">{{ row.recovered.toLocaleString() }}</td>
              <td class="border-b px-4 py-2 text-danger">{{ row.critical.toLocaleString() }}</td>
            </tr>
          </tbody>
        </table>
        <div class="min-w-full flex justify-center" v-else>
          <base-loading></base-loading>
        </div>
      </base-card>
    </div>
  </div>
</template>

<script>
import { allCases, allCountries } from "../services/covid";

export default {
  name: "Home",
  data() {
    return {
      covidCases: {
        ready: false,
        cases: 0,
        deaths: 0,
        recovered: 0,
        updated: 0
      },
      countriesData: []
    };
  },
  async created() {
    await this.getAllCases();
    await this.getAllCountries();
  },
  methods: {
    async getAllCases() {
      try {
        const { data } = await allCases();

        this.covidCases = data;
      } catch (error) {
        console.error(error);
      } finally {
        this.covidCases.ready = true;
      }
    },
    async getAllCountries() {
      try {
        const { data } = await allCountries({ sort: "cases" });

        this.countriesData = data;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
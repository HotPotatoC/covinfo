<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <h1 class="text-4xl font-gilroy">{{upperFirst(country)}} COVID-19 Demographics</h1>
    </div>
    <div class="w-full md:w-1/2">
      <base-card v-if="ready">
        <pie-chart :chart-data="pieDemographic.chartData" :options="pieDemographic.options"></pie-chart>
      </base-card>
    </div>
    <div class="w-full md:w-1/2">
      <base-card v-if="ready">
        <line-chart :chart-data="lineDemographic.chartData" :options="lineDemographic.options"></line-chart>
      </base-card>
    </div>
    <div class="w-full">
      <base-card class="p-5 overflow-hidden" v-if="ready">
        <div class="md:flex md:justify-between md:items-center mb-12">
          <h1 class="text-4xl font-gilroy mb-4">{{upperFirst(country)}}</h1>
          <img :src="countryData.countryInfo.flag" class="shadow-lg" alt />
        </div>
        <div class="flex justify-between border-b mb-12">
          <span>Total Cases</span>
          <span>{{ countryData.cases }}</span>
        </div>
        <div class="flex justify-between border-b mb-12">
          <span>Active Cases</span>
          <span>{{ countryData.active }}</span>
        </div>
        <div class="flex justify-between border-b mb-12">
          <span>Today Cases</span>
          <span :class="{'text-warning': countryData.todayCases > 0}">{{ countryData.todayCases }}</span>
        </div>
        <div class="flex justify-between border-b mb-12">
          <span>Total Deaths</span>
          <span>{{ countryData.deaths }}</span>
        </div>
        <div class="flex justify-between border-b mb-12">
          <span>Today Deaths</span>
          <span :class="{'text-danger': countryData.todayDeaths > 0}">{{ countryData.todayDeaths }}</span>
        </div>
        <div class="flex justify-between border-b mb-12">
          <span>Total Recovered</span>
          <span>{{ countryData.recovered }}</span>
        </div>
        <div class="flex justify-between border-b mb-12">
          <span>Critical Condition</span>
          <span>{{ countryData.critical }}</span>
        </div>
        <div class="flex justify-between border-b">
          <span>Cases Per 1 million</span>
          <span>{{ countryData.casesPerOneMillion }}</span>
        </div>
      </base-card>
    </div>
  </div>
</template>

<script>
import { getCountry, getHistoricalCountry } from "../services/covid";
import String from "../utils/string";

import PieChart from "../components/Charts/PieChart";
import LineChart from "../components/Charts/LineChart";

export default {
  props: ["country"],
  components: {
    PieChart,
    LineChart
  },
  data() {
    return {
      countryData: {},
      countryHistoricalData: {},
      ready: false,
      pieDemographic: {
        chartData: {
          labels: ["Active Cases", "Deaths", "Recovered"],
          datasets: [
            {
              backgroundColor: ["#ECC94B", "#2D3748", "#00C853"],
              data: []
            }
          ]
        },
        options: {
          legend: {
            display: true
          }
        }
      },
      lineDemographic: {
        chartData: {
          labels: [],
          datasets: [
            {
              label: "Total Cases",
              borderColor: "#ECC94B",
              data: []
            },
            {
              label: "Total Deaths",
              borderColor: "#2D3748",
              data: []
            }
          ]
        },
        options: {
          legend: {
            display: true
          }
        }
      }
    };
  },
  watch: {
    countryData: function(val) {
      this.pieDemographic.chartData.datasets[0].data = [
        val.active,
        val.deaths,
        val.recovered
      ];
    },
    countryHistoricalData: function(val) {
      for (let timeline in val.timeline.cases) {
        this.lineDemographic.chartData.labels.push(timeline);
        this.lineDemographic.chartData.datasets[0].data.push(
          val.timeline.cases[timeline]
        );
      }

      for (let timeline in val.timeline.deaths) {
        this.lineDemographic.chartData.datasets[1].data.push(
          val.timeline.deaths[timeline]
        );
      }
    }
  },
  async created() {
    await this.getCountryData();
    await this.getHistoricalCountryData();
    this.ready = true;
  },
  methods: {
    async getCountryData() {
      try {
        const { data } = await getCountry(this.country);

        this.countryData = data;
      } catch (error) {
        console.error(error);
      }
    },
    async getHistoricalCountryData() {
      try {
        const { data } = await getHistoricalCountry(this.country);

        this.countryHistoricalData = data;
      } catch (error) {
        console.error(error);
      }
    },
    upperFirst(string) {
      return String.upperFirst(string);
    }
  }
};
</script>

<style>
</style>
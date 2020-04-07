<template>
  <div class="w-full mt-0 md:mt-12" v-if="ready">
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" class="map">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-overlay id="overlay" :position="[35, 105]">
        <template>
          <div class="overlay-content">WORK IN PROGRESS WILL IMPLEMENT LIVE MAP SOON</div>
        </template>
      </vl-overlay>
    </vl-map>
  </div>
</template>

<script>
import { allCountries } from "../services/covid";
export default {
  data() {
    return {
      zoom: 2,
      center: [0, 0],
      rotation: 0,
      coordinates: [],
      ready: false
    };
  },
  async created() {
    await this.getCountriesData();
    console.log(this.coordinates);
  },
  methods: {
    async getCountriesData() {
      const countries = await allCountries();

      for (const country of countries.data) {
        this.coordinates.push([
          country.countryInfo.lat,
          country.countryInfo.long
        ]);
      }
      this.ready = true;
    }
  }
};
</script>

<style lang="scss">
.map {
  @media (min-width: 768px) {
    height: 32rem;
  }
  height: 64rem;
}
</style>
import {Pie, mixins} from "vue-chartjs";
import globalOptionsMixin from "@/components/Charts/globalOptionsMixin";

export default {
  name: "pie-chart",
  extends: Pie,
  mixins: [mixins.reactiveProp, globalOptionsMixin],
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      ctx: null
    };
  },
  mounted() {
    this.$watch(
      "chartData",
      (newVal, oldVal) => {
        if (!oldVal) {
          this.renderChart(this.chartData, this.options);
        }
      },
      {immediate: true}
    );
  }
};

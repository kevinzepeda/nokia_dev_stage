import Vue from 'vue'
import { Doughnut, mixins } from "vue-chartjs";

Vue.component("pieChart", {
  extends: Doughnut,
  props: [ "options", "data"],
  mounted() {
    this.renderChart(this.data, this.options);
  }
});
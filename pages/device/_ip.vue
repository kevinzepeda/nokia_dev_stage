<template lang="pug">
  .container
    .columns
      .column.is-9
        h1.title {{ dataByIP(groupByIP)[0].sysname }}
        h2.subtitle R{{dataByIP(groupByIP)[0].region}} | {{ ip }} | {{ dataByIP(groupByIP)[0].type }}
      .column.is-3
        .buttons.mt-2(align="is-left")
          b-button.is-danger(v-if="checked.length" @click="checked = []") Clear all
          b-button.is-info.is-light(v-else @click="checked = dataByIP(groupByIP).filter(row =>{return row.is_compliant === 0})") Select all
          b-button.is-info(@click="getFile()" :disabled="checked.length === 0") Generate MOP
    .columns
      .column.is-9
        h3.subtitle Units: 
          b {{ dataByIP(groupByIP).length }}
        b-table(:data="dataByIP(groupByIP)"
                detailed
                :paginated="isPaginated"
                :per-page="perPage"
                :current-page.sync="currentPage"
                :pagination-simple="isPaginationSimple"
                :pagination-position="paginationPosition"
                :default-sort-direction="defaultSortDirection"
                :pagination-rounded="isPaginationRounded"
                :sort-icon="sortIcon"
                :sort-icon-size="sortIconSize"
                detail-key="entry"
                default-sort="user.first_name"
                aria-next-label="Next page"
                aria-previous-label="Previous page"
                aria-page-label="Page"
                aria-current-label="Current page"
                :page-input="hasInput"
                :pagination-order="paginationOrder"
                :page-input-position="inputPosition"
                :debounce-page-input="inputDebounce"
                :checked-rows.sync="checked"
                checkable
                :is-row-checkable="(row) => row.is_compliant === 0"
                :checkbox-position="checkboxPosition"
          )
            b-table-column(field="entry" label="Entidad" sortable v-slot="props" searchable)
              p {{ props.row.entry }}
            b-table-column(field="scenario" label="Scenario" width="40" sortable v-slot="props" searchable)
              p {{ props.row.scenario }}
            b-table-column(field="is_compliant" label="Compliance" width="40" sortable v-slot="props" searchable)
              span.tag.is-success(v-if="props.row.is_compliant") Yes
              span.tag.is-danger(v-else) No
            b-table-column(field="mobile" label="Mobile" width="40" sortable v-slot="props" searchable)
              p {{ props.row.mobile === "NA" ? "Undefined" : props.row.mobile ? "Mobile" : "No mobile" }}
            template(#bottom-left)
              b  Not QoS units: {{ dataByIP(groupByIP).filter(i => {return i.is_compliant === 0}).length }}
            template(#detail="props")
              div
                pre.diff {{ props.row.rollback }}
                pre.diff {{ props.row.script }}
      .column.is-3
        .container(v-if="ip !== null")
          h3.subtitle Device Compliance
          VueApexCharts(:options="options" :series="pieData(groupByIP)")
</template>

<script>
export default {
  data(){
    return {
      ip: null,
      compliant: 0,
      notCompliant: 0,
      columns:[],
      isPaginated: true,
      isPaginationSimple: false,
      isPaginationRounded: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 10,
      hasInput: false,
      paginationOrder: '',
      inputPosition: '',
      inputDebounce: '',
      checkboxPosition: 'left',
      checked: [],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        colors: ["#1bd7a6","#fe5858"],
        labels: ["Compliance","No QoS"],
        responsive: [{
          breakpoint: 600,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    }
  },
  async asyncData({ $axios }) {
    const entrys = await $axios.$get('https://kevinzepeda.github.io/etl-test/nokia.json')
    const groupByIP = entrys.reduce((group, entry) => {
      const { source_ip } = entry;
      group[source_ip] = group[source_ip] ?? [];
      group[source_ip].push(entry);
      return group;
    }, {});
    return { entrys , groupByIP }
  },
  methods:{
    dataByIP(groupByIP){
      return groupByIP[this.ip]
    },
    getFile(){
      this.$axios.post("https://a99d-2806-105e-c-56e2-f0d6-719-a64d-468a.ngrok.io", {
        items: this.checked
      },{ responseType: 'blob'})
      .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/zip' }))
          window.open(url)
      })
    },
    pieData(groupByIP){
      const data = groupByIP[this.ip]
      const compliant = this.roundOff(data.filter((i) =>{ return i.is_compliant}).length / data.length * 100,2)
      const notCompliant = this.roundOff(100 - compliant,2)
      return [compliant,notCompliant]
    },
    roundOff(num, places) {
      const x = Math.pow(10,places);
      return Math.round(num * x) / x;
    },
  },
  fetch(){
      this.ip = this.$route.params.ip
  },
}
</script>

<style>
pre.diff {
    width: 50%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
}
.diff span, pre.diff {
    display: inline-block;
    font-size: 12px;
    font-family: monospace;
}
</style>
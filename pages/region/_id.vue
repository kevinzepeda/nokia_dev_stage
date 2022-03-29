<template lang="pug">
  .container
    .columns
      .column.is-9
        h1.title Region {{ region }}
      .column.is-3
        .buttons.mt-2(align="is-left")
          b-button.is-danger(v-if="checked.length" @click="checked = []") Clear
          b-button.is-info.is-light(v-else @click="checked = allDevices.filter(row =>{return row.is_compliant === 0})") Select all
          b-button.is-info(@click="getFile()") Generate MOP
    .columns
      .column
        h2.subtitle All Devices: 
          b {{ allDevices.length }}
        b-table(:data="allDevices"
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
            b-table-column(field="sysname" width="40" label="Sysname" sortable v-slot="props" searchable)
              nuxt-link(:to="'/device/' + props.row.source_ip") {{ props.row.sysname }}
            b-table-column(field="source_ip" label="IP" width="40" sortable v-slot="props" searchable)
              nuxt-link(:to="'/device/' + props.row.source_ip") {{ props.row.source_ip }}
            b-table-column(field="type" label="Type" width="40" numeric sortable v-slot="props" searchable)
              p {{ props.row.type }}
            b-table-column(field="is_compliant" label="Compliance" width="40" sortable v-slot="props" searchable)
              span.tag.is-success(v-if="props.row.is_compliant") 100 %
              span.tag.is-danger(v-else) {{ (groupByIP[props.row.source_ip].filter(i =>{return i.is_compliant}).length / groupByIP[props.row.source_ip].length * 100).toFixed(1) }} %
            template(#bottom-left)
              b  Checked rows: {{ checked.length }}
            template(#empty)
              .has-text-centered No Devices info
      .column.is-3
        .h2.subtitle Device compliance
        pie-chart(:data="pieData(dataByRegion)" :options="options")
</template>

<script>
export default {
  data(){
    return {
      test: "",
      regiones: [
        {id: "0", name: "Desconocido"},
        {id: "1", name: "Region 1"},
        {id: "2", name: "Region 2"},
        {id: "3", name: "Region 3"},
        {id: "4", name: "Region 4"},
        {id: "5", name: "Region 5"},
        {id: "6", name: "Region 6"},
        {id: "7", name: "Region 7"},
        {id: "8", name: "Region 8"},
        {id: "9", name: "Region 9"},
      ],
      region: null,
      compliant: 0,
      notCompliant: 0,
      checked: [],
      columns: [],
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
      checkboxPosition: 'right'
    }
  },
  async asyncData({ $axios , params}) {
    const entrys = await $axios.$get('https://kevinzepeda.github.io/etl-test/nokia.json')
    const allDevices = await $axios.$get('https://kevinzepeda.github.io/etl-test/devices.json')
    .then((devices) => devices.filter((device) => {
      return device.region == params.id
    }))
    const groupByRegion = entrys.reduce((group, entry) => {
      const { region } = entry;
      group[region] = group[region] ?? [];
      group[region].push(entry);
      return group;
    }, {});
    const dataByRegion = groupByRegion[params.id] ? groupByRegion[params.id] : []
    const groupByIP = dataByRegion.reduce((group, entry) => {
      const { source_ip } = entry;
      group[source_ip] = group[source_ip] ?? [];
      group[source_ip].push(entry);
      return group;
    }, {});
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      devicePixelRatio: 2,
      tooltips: {
        enabled: true,
      },
      title: {
        display: true,
        text: '% Compliance by device',
        position: 'bottom',
        fontSize: 20,
      },
    }
    return { dataByRegion, options, allDevices, groupByIP}
  },
  methods:{
    pieData(dataByRegion){
      if (this.region !== null){
        this.compliant = (dataByRegion.filter((i) => { return i.is_compliant}).length / dataByRegion.length * 100).toFixed(1)
        this.notCompliant = (100 - this.compliant).toFixed(1)
      }
      return {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 5,
        labels: ["Compliance", "Not QoS"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651"],
            data: [this.compliant, this.notCompliant]
          }
        ]
      }
    },
    getFile(){
      this.$axios.post("https://5c92-2806-105e-c-7a1b-3b3b-4664-9df7-4ca9.ngrok.io/", {
        items: this.toCreateMOP
      })
      .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/zip' }))
          window.open(url)
      })
    },
  },
  computed:{
    toCreateMOP(){
      let devices = []
      this.checked.forEach(i => {
        devices.push(i.source_ip)
      });
      return this.dataByRegion.filter(i => {return !i.is_compliant && i.mobile && devices.includes(i.source_ip)})
    },
  },
  fetch(){
    this.region = this.$route.params.id
  },
}
</script>

<style>

</style>
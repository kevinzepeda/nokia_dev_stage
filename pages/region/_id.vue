<template lang="pug">
  .container
    .columns
      .column
        h1.title Region {{ region }}
    .columns
      .column
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
                :is-row-checkable="(row) => groupByIP[row.source_ip].filter((item) =>{return item.is_compliant === 0}).length"
                :checkbox-position="checkboxPosition"
          )
            b-table-column(field="sysname" label="Sysname" sortable v-slot="props" searchable)
              nuxt-link(:to="'/device/' + props.row.source_ip") {{ props.row.sysname }}
            b-table-column(field="source_ip" label="IP" width="40" sortable v-slot="props" searchable)
              nuxt-link(:to="'/device/' + props.row.source_ip") {{ props.row.source_ip }}
            b-table-column(field="type" label="Type" width="40" sortable v-slot="props" searchable)
              p {{ props.row.type }}
            b-table-column(label="Compliance" width="40" sortable v-slot="props")
              span.tag.is-danger(v-if="groupByIP[props.row.source_ip].filter((item) =>{return item.is_compliant === 0}).length") No
              span.tag.is-success(v-else) Yes
            template(#empty)
              .has-text-centered No Data
      .column.is-3
        pie-chart(:data="pieData(dataByRegion)" :options="options")
    pre {{ checked }}
</template>

<script>
export default {
  data(){
    return {
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
    const dataByRegion = groupByRegion[params.id]
    const groupByIP = dataByRegion.reduce((group, entry) => {
      const { source_ip } = entry;
      group[source_ip] = group[source_ip] ?? [];
      group[source_ip].push(entry);
      return group;
    }, {});
    const options = {
      borderWidth: "10px",
      hoverBackgroundColor: "red",
      hoverBorderWidth: "10px"
    }

    return { dataByRegion, options, allDevices, groupByIP}
  },
  methods:{
    pieData(dataByRegion){
      if (this.region !== null){
        this.compliant = dataByRegion.filter((i) => { return i.is_compliant === 1 }).length;
        this.notCompliant = dataByRegion.filter((i) => { return i.is_compliant === 0 }).length;
      }
      return {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 5,
        labels: ["Compliance", "Not compliance"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651"],
            data: [this.compliant, this.notCompliant]
          }
        ]
      }
    },
  },
  fetch(){
    this.region = this.$route.params.id
  },
}
</script>

<style>

</style>
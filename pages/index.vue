<template lang="pug">
  .container
    .columns
      .column.is-4
        .container(v-if="groupByRegion !== null")
          pie-chart(:data="pieData" :options="options")
      .column.is-8
        b-table(:data="regiones"
                :per-page="perPage"
                :current-page.sync="currentPage"
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
                :debounce-page-input="inputDebounce"
                :checkbox-position="checkboxPosition"
          )
            b-table-column(field="id" label="ID" width="40" sortable v-slot="props")
              p {{ props.row.id }}
            b-table-column(field="name" label="Nombre" width="40" sortable v-slot="props")
              nuxt-link(:to="'region/' + props.row.id") {{ props.row.name }}
            b-table-column(field="entidades" label="Total Devices" width="40" sortable v-slot="props")
              p {{ getTotalDevices(groupByRegion[props.row.id]) }}
            b-table-column(field="entidades" label="Total Entidades" width="40" sortable v-slot="props")
              p {{ groupByRegion[props.row.id].length }}
            b-table-column(field="mobile" label="Mobile" width="40" sortable v-slot="props")
              p {{ getTotalMobile(groupByRegion[props.row.id]) }}
            b-table-column(field="noMobile" label="No Mobile" width="40" sortable v-slot="props")
              p {{ getTotalNoMobile(groupByRegion[props.row.id]) }}
            b-table-column(field="compliance" label="Compliance" width="40" sortable v-slot="props")
              p {{ getTotalCompliance(groupByRegion[props.row.id]) }}
            b-table-column(field="noQos" label="Not QoS" width="40" sortable v-slot="props")
              p {{ getTotalNoCompliance(groupByRegion[props.row.id]) }}

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
      columns:[],
      isPaginated: true,
      isPaginationSimple: false,
      isPaginationRounded: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 15,
      hasInput: false,
      paginationOrder: '',
      inputPosition: '',
      inputDebounce: '',
      checkboxPosition: 'right'
    }
  },
  async asyncData({ $axios }) {
    const entrys = await $axios.$get('https://kevinzepeda.github.io/etl-test/nokia.json')
    const groupByRegion = entrys.reduce((group, entry) => {
      const { region } = entry;
      group[region] = group[region] ?? [];
      group[region].push(entry);
      return group;
    }, {});
    const options = {
      borderWidth: "10px",
      hoverBackgroundColor: "red",
      hoverBorderWidth: "10px"
    }
    return { entrys , groupByRegion, options }
  },
  methods:{
    dataByRegion(groupByRegion){
      return groupByRegion[this.region]
    },
    getTotalDevices(dataByRegion){
      const groupByIP = dataByRegion.reduce((group, entry) => {
        const { source_ip } = entry;
        group[source_ip] = group[source_ip] ?? [];
        group[source_ip].push(entry);
        return group;
      }, {});
      return Object.keys(groupByIP).length
    },
    getTotalMobile(dataByRegion){
      let mobile = []
      dataByRegion.map((item)=>{
        if(item.mobile){
          mobile.push(1)
        }
      });
      return mobile.length
    },
    getTotalNoMobile(dataByRegion){
      let noMobile = []
      dataByRegion.map((item)=>{
        if(item.mobile === 0){
          noMobile.push(1)
        }
      });
      return noMobile.length
    },
    getTotalNoCompliance(dataByRegion){
      let notCompliant = []
      dataByRegion.map((item)=>{
        if(item.is_compliant === 0){
          notCompliant.push(1)
        }
      });
      return notCompliant.length
    },
    getTotalCompliance(dataByRegion){
      let compliance = []
      dataByRegion.map((item)=>{
        if(item.is_compliant){
          compliance.push(1)
        }
      });
      return compliance.length
    },
    pieData(groupByRegion){
      const data = groupByRegion[this.region]
      if (this.region !== null){
        this.compliant = data.filter(function(value) { return value.is_compliant === 1 }).length;
        this.notCompliant = data.filter(function(value) { return value.is_compliant === 0 }).length;
      }
      return {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Green", "Red"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651"],
            data: [this.compliant, this.notCompliant]
          }
        ]
      }
    }
  },
  computed:{
    pieData(){
      return {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 5,
        labels: ["R0","R1","R2","R3","R4","R5","R6","R7","R8","R9"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651","#BF00FF","#F2F5A9","#5858FA","#F2E0F7","#A9F5A9","#E6E0F8","#D8D8D8","#F5A9A9"],
            data: [155, 46, 44, 50, 68, 67, 48, 76, 62, 99]
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
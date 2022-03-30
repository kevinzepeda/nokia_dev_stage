<template lang="pug">
  .container
    .columns
      .column
        h1.title Nokia Dashboard
    .columns
      .column.is-4
        .container(v-if="groupByRegion !== null")
            h2.subtitle Devices by Region
            pie-chart(:data="pieRegion(groupByRegion)" :options="options")
      .column.is-4
        .container(v-if="groupByRegion !== null")
          h2.subtitle Mobile Compliance
          pie-chart(:data="pieMobileCompliance(groupByRegion)" :options="optionsMobile" )
      .column.is-4
        .container(v-if="groupByRegion !== null")
          h2.subtitle No Mobile Compliance
          pie-chart(:data="pieNoMobileCompliance(groupByRegion)" :options="optionsNoMobile" )
    .columns
      .column
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
            b-table-column(field="id" label="ID" subheading="Total" width="40" sortable v-slot="props")
              p {{ props.row.id }}
            b-table-column(field="name" label="Name" width="40" sortable v-slot="props")
              nuxt-link(:to="'region/' + props.row.id") {{ props.row.name }}
            b-table-column(field="entidades" label="Total Devices" :subheading="getTotalDevices(groupByRegion)" width="40" sortable v-slot="props")
              p {{ getDevices(groupByRegion[props.row.id]) }}
            b-table-column(field="entidades" label="% Devices" width="40" sortable v-slot="props")
              p {{ (getDevices(groupByRegion[props.row.id]) / getTotalDevices(groupByRegion) * 100).toFixed(2) }}%
            b-table-column(field="entidades" label="Total Units" width="40" sortable v-slot="props")
              p {{ groupByRegion[props.row.id] ? groupByRegion[props.row.id].length : 0 }}
            b-table-column(field="compliance" label="Qos Compliance" width="40" sortable v-slot="props")
              p {{ getCompliance(groupByRegion[props.row.id]) }}
            b-table-column(field="noQos" label="Not QoS" width="40" sortable v-slot="props")
              p {{ getNoCompliance(groupByRegion[props.row.id]) }}
            b-table-column(field="compliance" label="Compliance" :subheading="getTotalCompliance(groupByRegion) + '%'" width="40" sortable v-slot="props")
              p {{ getPercentCompliance(groupByRegion[props.row.id]) }} %
            b-table-column(field="mobile" label="Mobile" width="40" sortable v-slot="props")
              p {{ getMobile(groupByRegion[props.row.id]) }}
            b-table-column(field="mobile" label="Mobile Compliance" width="40" :subheading="(Array.from({length: 10}, (_,index) => this.getMobileCompliance(groupByRegion[index])).reduce((a,c) => Number(a) + Number(c)) / activeRegions).toFixed(2) + ' %'" sortable v-slot="props")
              p {{ getMobileCompliance(groupByRegion[props.row.id]) }} %
            b-table-column(field="noMobile" label="No Mobile" width="40" sortable v-slot="props")
              p {{ getNoMobile(groupByRegion[props.row.id]) }}
            b-table-column(field="noMobile" label="No Mobile Compliance" width="40" :subheading="(Array.from({length: 10}, (_,index) => this.getNoMobileCompliance(groupByRegion[index])).reduce((a,c) => Number(a) + Number(c)) / activeRegions).toFixed(2) + ' %'" sortable v-slot="props")
              p {{ getNoMobileCompliance(groupByRegion[props.row.id]) }} %
        
</template>

<script>
export default {
  data(){
    return {
      regiones: [
        {id: "0", name: "Unknown"},
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
      checkboxPosition: 'right',
      optionsMobile: {
        responsive: true,
        maintainAspectRatio: false,
        devicePixelRatio: 2,
        tooltips: {
          enabled: true,
        },
        title: {
          display: true,
          text: '% Compliance in Mobile',
          position: 'bottom',
          fontSize: 20,
        },
      },
      optionsNoMobile: {
        responsive: true,
        maintainAspectRatio: false,
        devicePixelRatio: 2,
        tooltips: {
          enabled: true,
        },
        title: {
          display: true,
          text: '% Compliance in No Mobile',
          position: 'bottom',
          fontSize: 20,
        },
      }
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
      responsive: true,
      maintainAspectRatio: false,
      devicePixelRatio: 2,
      tooltips: {
        enabled: true,
      },
      title: {
        display: true,
        text: '% Device by Region',
        position: 'bottom',
        fontSize: 20,
      },
    };
    const activeRegions = Object.getOwnPropertyNames(groupByRegion).length
    return { entrys , groupByRegion, options, activeRegions }
  },
  methods:{
    getDevices(dataByRegion){
      let uniqueDevices = []
      if (dataByRegion){
        dataByRegion.forEach(device => {
          if(!uniqueDevices.includes(device.source_ip)){
            uniqueDevices.push(device.source_ip);
          }
        });
      }
      return uniqueDevices.length
    },
    getTotalDevices(groupByRegion){
      const devices = Array.from({length: 10}, (_,index) => this.getDevices(groupByRegion[index]))
      return devices.reduce((acumulator,current) => acumulator + current)
    },
    getTotalCompliance(groupByRegion){
      const compliance = Array.from({length: 10}, (_,index) => this.getPercentCompliance(groupByRegion[index]))
      return (compliance.reduce((a,c) => Number(a) + Number(c)) / this.activeRegions).toFixed(2)
    },
    pieRegion(groupByRegion){
      const devices = Array.from({length: 10}, (_,index) => this.getDevices(groupByRegion[index]))
      const total = devices.reduce((acumulator,current) => acumulator + current)
      const percent = Array.from({length: 10}, (_, index) => (devices[index] / total * 100).toFixed(2))
      return {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 5,
        labels: ["R0","R1","R2","R3","R4","R5","R6","R7","R8","R9"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651","#BF00FF","#F2F5A9","#5858FA","#F2E0F7","#A9F5A9","#E6E0F8","#D8D8D8","#F5A9A9"],
            data: percent
          }
        ]
      }
    },
    pieMobileCompliance(groupByRegion){
      const mobile = Array.from({length: 10}, (_,index) => this.getMobileCompliance(groupByRegion[index]))
      const percent = mobile.reduce((a,c) => Number(a) + Number(c)) / 10
      return {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 5,
        labels: ["Compliance","No QoS"],
        datasets: [
          {
            label: "Mobile compliance",
            backgroundColor: ["#1bd7a6","#fe5858"],
            data: [percent.toFixed(2), (100 - percent).toFixed(2)]
          }
        ]
      }
    },
    pieNoMobileCompliance(groupByRegion){
      const mobile = Array.from({length: 10}, (_,index) => this.getNoMobileCompliance(groupByRegion[index]))
      const percent = mobile.reduce((a,c) => Number(a) + Number(c)) / 10
      return {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 5,
        labels: ["Compliance","No QoS"],
        datasets: [
          {
            label: "Mobile compliance",
            backgroundColor: ["#1bd7a6","#fe5858"],
            data: [percent.toFixed(2), (100 - percent).toFixed(2)]
          }
        ]
      }
    },
    getMobile(dataByRegion){
      if(dataByRegion){
        return dataByRegion.filter(i => i.mobile).length
      }
    },
    getMobileCompliance(dataByRegion){
      let d = []
      let percent = 0
      if(dataByRegion){
        d = dataByRegion.filter(i => i.mobile)
        percent = (d.filter(i => i.is_compliant).length / d.length * 100).toFixed(2)
      }
      return percent
    },
    getNoMobile(dataByRegion){
      if(dataByRegion){
        return dataByRegion.filter(i => !i.mobile).length
      }
    },
    getNoMobileCompliance(dataByRegion){
      let d = []
      let percent = 0
      if(dataByRegion){
        d = dataByRegion.filter(i => !i.mobile)
        percent = (d.filter(i => i.is_compliant).length / d.length * 100).toFixed(2)
      }
      return percent
    },
    getCompliance(dataByRegion){
      if(dataByRegion){
        return dataByRegion.filter(i => i.is_compliant).length
      }
    },
    getNoCompliance(dataByRegion){
      if(dataByRegion){
        return dataByRegion.filter(i => !i.is_compliant).length
      }
    },
    getPercentCompliance(dataByRegion){
      if(dataByRegion){
        return (dataByRegion.filter(i => i.is_compliant).length / dataByRegion.length * 100).toFixed(2)
      }
      return 0
    },
  },
}
</script>

<style>

</style>
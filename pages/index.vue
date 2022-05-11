<template lang="pug">
  .container
    .columns
      .column
        h1.title Nokia Dashboard
    .columns
      .column.is-4
        .container(v-if="groupByRegion !== null")
          h2.subtitle Devices by Region
          VueApexCharts(:options="options" :series="pieRegion(groupByRegion)")
      .column.is-4
        .container(v-if="groupByRegion !== null")
          h2.subtitle Mobile Compliance
          VueApexCharts(:options="optionsMobile" :series="pieMobileCompliance(groupByRegion)")
      .column.is-4
        .container(v-if="groupByRegion !== null")
          h2.subtitle No Mobile Compliance
          VueApexCharts(:options="optionsMobile" :series="pieNoMobileCompliance(groupByRegion)")
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
      chart: {
        width: 380,
        type: 'pie',
      },
      colors: ["#FF69B4", "#FF6347","#FFD700","#7B68EE","#00FF7F","#1E90FF","#D2691E","#2F4F4F","#FFE4C4","#00008B"],
      labels: ['Unknow', 'Region 1', 'Region 2', 'Region 3', 'Region 4', 'Region 5','Region 6','Region 7', 'Region 8', 'Region 9'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
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
      const percent = Array.from({length: 10}, (_, index) => this.roundOff((devices[index] / total * 100),2) )
      return percent 
    },
    pieMobileCompliance(groupByRegion){
      const mobile = Array.from({length: 10}, (_,index) => this.getMobileCompliance(groupByRegion[index]))
      const percent = this.roundOff(mobile.reduce((a,c) => Number(a) + Number(c)) / this.activeRegions,2)
      return [percent, this.roundOff(100 - percent,2)]
    },
    pieNoMobileCompliance(groupByRegion){
      const mobile = Array.from({length: 10}, (_,index) => this.getNoMobileCompliance(groupByRegion[index]))
      const percent = mobile.reduce((a,c) => Number(a) + Number(c)) / this.activeRegions
      return [percent, (100 - percent)]
    },
    roundOff(num, places) {
      const x = Math.pow(10,places);
      return Math.round(num * x) / x;
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
        if(d.length == 0){
          return 0
        }
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
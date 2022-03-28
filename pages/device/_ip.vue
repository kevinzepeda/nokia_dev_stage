<template lang="pug">
  .container
    .columns
      .column
        h1.title {{ dataByIP(groupByIP)[0].sysname }}
        h2.subtitle R{{dataByIP(groupByIP)[0].region}} | {{ ip }} | {{ dataByIP(groupByIP)[0].type }}
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
          )
            b-table-column(field="entry" label="Entidad" width="40" sortable v-slot="props" searchable)
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
          pie-chart(:data="pieData(groupByIP)" :options="options")

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
      checkboxPosition: 'right'
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
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      devicePixelRatio: 2,
      tooltips: {
        enabled: true,
      },
      title: {
        display: true,
        text: '% Compliance by unit',
        position: 'bottom',
        fontSize: 20,
      },
    }

    return { entrys , groupByIP, options }
  },
  methods:{
    dataByIP(groupByIP){
      return groupByIP[this.ip]
    },
    pieData(groupByIP){
      const data = groupByIP[this.ip]
      if (this.ip !== null){
        this.compliant = (data.filter((i) =>{ return i.is_compliant}).length / data.length * 100).toFixed(1)
        this.notCompliant = (100 - this.compliant).toFixed(1)
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
    }
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
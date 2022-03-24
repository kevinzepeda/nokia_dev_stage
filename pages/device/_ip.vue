<template lang="pug">
  .container
    .columns
      .column
        h1.title Device {{ ip }}
    .columns
      .column
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
                checkable
                :checkbox-position="checkboxPosition"
          )
            b-table-column(field="source_ip" label="IP" width="40" sortable v-slot="props" searchable)
              p {{ props.row.source_ip }}
            b-table-column(field="type" label="Type" width="40" sortable v-slot="props" searchable)
              p {{ props.row.type }}
            b-table-column(field="entry" label="Entidad" width="40" sortable v-slot="props" searchable)
              p {{ props.row.entry }}
            b-table-column(field="is_compliant" label="Compliance" width="40" sortable v-slot="props" searchable)
              span.tag.is-success(v-if="props.row.is_compliant") Yes
              span.tag.is-danger(v-else) No
            b-table-column(field="region" label="Region" width="40" sortable v-slot="props" searchable)
              p {{ props.row.region }}
            b-table-column(field="mobile" label="Mobile" width="40" sortable v-slot="props" searchable)
              p {{ props.row.mobile === "NA" ? "Undefined" : props.row.mobile ? "Mobile" : "No mobile" }}
            template(#detail="props")
              .columns
                .column
                  pre {{ props.row.rollback }}
                .column
                  pre {{ props.row.script }}
      .column
        .container(v-if="ip !== null")
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
    const groupByIP = entrys.reduce((group, entry) => {
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

    return { entrys , groupByIP, options }
  },
  methods:{
    dataByIP(groupByIP){
      return groupByIP[this.ip]
    },
    pieData(groupByIP){
      const data = groupByIP[this.ip]
      if (this.ip !== null){
        this.compliant = data.filter(function(value) { return value.is_compliant === 1 }).length;
        this.notCompliant = data.filter(function(value) { return value.is_compliant === 0 }).length;
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

</style>
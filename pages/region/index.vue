<template lang="pug">
  .container
    .columns
      .column
        h1.title Todas las regiones
        b-field(label="Selecciona una region")
          b-select(placeholder="Region" v-model="region")
            option(
              v-for="r in regiones"
              :value="r.id"
              :key="r.id"
            ) {{ r.name }}
    .columns
      .column
        b-table(:data="dataByRegion(groupByRegion)"
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
            template(#empty)
              .container.text-center
                h3.title Selecciona una region

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

    return { groupByRegion, options, allDevices }
  },
  methods:{
    dataByRegion(groupByRegion){
      return groupByRegion[this.region]
    },
  }
}
</script>

<style>

</style>
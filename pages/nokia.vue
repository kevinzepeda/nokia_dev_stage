<template lang="pug">
  .container
    .columns
      .column
        h1.title Inventory
    b-table(:data="entrys"
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

    
    

</template>

<script>
export default {
  data(){
    return {
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
    const data = {
      hoverBackgroundColor: "red",
      hoverBorderWidth: 10,
      labels: ["Green", "Red", "Blue"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
          data: [1, 10, 5]
        }
      ]
    } 
    const options = {
      borderWidth: "10px",
      hoverBackgroundColor: "red",
      hoverBorderWidth: "10px"
    }
    return { entrys }
  }
}
</script>

<style>

</style>
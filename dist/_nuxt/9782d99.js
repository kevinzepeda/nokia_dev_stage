(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{409:function(e,t,n){"use strict";n.r(t);var o=n(10),r=(n(40),n(41),n(13),{data:function(){return{regiones:[{id:"0",name:"Desconocido"},{id:"1",name:"Region 1"},{id:"2",name:"Region 2"},{id:"3",name:"Region 3"},{id:"4",name:"Region 4"},{id:"5",name:"Region 5"},{id:"6",name:"Region 6"},{id:"7",name:"Region 7"},{id:"8",name:"Region 8"},{id:"9",name:"Region 9"}],region:null,compliant:0,notCompliant:0,checked:[],columns:[],isPaginated:!0,isPaginationSimple:!1,isPaginationRounded:!1,paginationPosition:"bottom",defaultSortDirection:"asc",sortIcon:"arrow-up",sortIconSize:"is-small",currentPage:1,perPage:10,hasInput:!1,paginationOrder:"",inputPosition:"",inputDebounce:"",checkboxPosition:"right"}},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,c,l,d,h,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,o=e.params,t.next=3,n.$get("https://kevinzepeda.github.io/etl-test/nokia.json");case 3:return r=t.sent,t.next=6,n.$get("https://kevinzepeda.github.io/etl-test/devices.json").then((function(e){return e.filter((function(e){return e.region==o.id}))}));case 6:return c=t.sent,l=r.reduce((function(e,t){var n,o=t.region;return e[o]=null!==(n=e[o])&&void 0!==n?n:[],e[o].push(t),e}),{}),d=l[o.id],h=d.reduce((function(e,t){var n,o=t.source_ip;return e[o]=null!==(n=e[o])&&void 0!==n?n:[],e[o].push(t),e}),{}),f={borderWidth:"10px",hoverBackgroundColor:"red",hoverBorderWidth:"10px"},t.abrupt("return",{dataByRegion:d,options:f,allDevices:c,groupByIP:h});case 12:case"end":return t.stop()}}),t)})))()},methods:{pieData:function(e){return null!==this.region&&(this.compliant=e.filter((function(i){return 1===i.is_compliant})).length,this.notCompliant=e.filter((function(i){return 0===i.is_compliant})).length),{hoverBackgroundColor:"red",hoverBorderWidth:5,labels:["Compliance","Not compliance"],datasets:[{label:"Data One",backgroundColor:["#41B883","#E46651"],data:[this.compliant,this.notCompliant]}]}}},fetch:function(){this.region=this.$route.params.id}}),c=n(51),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("h1",{staticClass:"title"},[e._v("Region "+e._s(e.region))])])]),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("b-table",{attrs:{data:e.allDevices,paginated:e.isPaginated,"per-page":e.perPage,"current-page":e.currentPage,"pagination-simple":e.isPaginationSimple,"pagination-position":e.paginationPosition,"default-sort-direction":e.defaultSortDirection,"pagination-rounded":e.isPaginationRounded,"sort-icon":e.sortIcon,"sort-icon-size":e.sortIconSize,"detail-key":"entry","default-sort":"user.first_name","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page","page-input":e.hasInput,"pagination-order":e.paginationOrder,"page-input-position":e.inputPosition,"debounce-page-input":e.inputDebounce,"checked-rows":e.checked,checkable:"","is-row-checkable":function(t){return e.groupByIP[t.source_ip].filter((function(e){return 0===e.is_compliant})).length},"checkbox-position":e.checkboxPosition},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:checkedRows":function(t){e.checked=t},"update:checked-rows":function(t){e.checked=t}},scopedSlots:e._u([{key:"empty",fn:function(){return[n("div",{staticClass:"has-text-centered"},[e._v("No Data")])]},proxy:!0}])},[n("b-table-column",{attrs:{field:"sysname",label:"Sysname",sortable:"",searchable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("nuxt-link",{attrs:{to:"/device/"+t.row.source_ip}},[e._v(e._s(t.row.sysname))])]}}])}),n("b-table-column",{attrs:{field:"source_ip",label:"IP",width:"40",sortable:"",searchable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("nuxt-link",{attrs:{to:"/device/"+t.row.source_ip}},[e._v(e._s(t.row.source_ip))])]}}])}),n("b-table-column",{attrs:{field:"type",label:"Type",width:"40",sortable:"",searchable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(t.row.type))])]}}])}),n("b-table-column",{attrs:{label:"Compliance",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e.groupByIP[t.row.source_ip].filter((function(e){return 0===e.is_compliant})).length?n("span",{staticClass:"tag is-danger"},[e._v("No")]):n("span",{staticClass:"tag is-success"},[e._v("Yes")])]}}])})],1)],1),n("div",{staticClass:"column is-3"},[n("pie-chart",{attrs:{data:e.pieData(e.dataByRegion),options:e.options}})],1)]),n("pre",[e._v(e._s(e.checked))])])}),[],!1,null,null,null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{406:function(e,t,n){"use strict";n.r(t);var o=n(10),r=(n(40),{data:function(){return{columns:[],isPaginated:!0,isPaginationSimple:!1,isPaginationRounded:!1,paginationPosition:"bottom",defaultSortDirection:"asc",sortIcon:"arrow-up",sortIconSize:"is-small",currentPage:1,perPage:15,hasInput:!1,paginationOrder:"",inputPosition:"",inputDebounce:"",checkboxPosition:"right"}},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,n.$get("https://kevinzepeda.github.io/etl-test/nokia.json");case 3:return o=t.sent,{hoverBackgroundColor:"red",hoverBorderWidth:10,labels:["Green","Red","Blue"],datasets:[{label:"Data One",backgroundColor:["#41B883","#E46651","#00D8FF"],data:[1,10,5]}]},{borderWidth:"10px",hoverBackgroundColor:"red",hoverBorderWidth:"10px"},t.abrupt("return",{entrys:o});case 7:case"end":return t.stop()}}),t)})))()}}),l=n(51),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),n("b-table",{attrs:{data:e.entrys,detailed:"",paginated:e.isPaginated,"per-page":e.perPage,"current-page":e.currentPage,"pagination-simple":e.isPaginationSimple,"pagination-position":e.paginationPosition,"default-sort-direction":e.defaultSortDirection,"pagination-rounded":e.isPaginationRounded,"sort-icon":e.sortIcon,"sort-icon-size":e.sortIconSize,"detail-key":"entry","default-sort":"user.first_name","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page","page-input":e.hasInput,"pagination-order":e.paginationOrder,"page-input-position":e.inputPosition,"debounce-page-input":e.inputDebounce,checkable:"","checkbox-position":e.checkboxPosition},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}},scopedSlots:e._u([{key:"detail",fn:function(t){return[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("pre",[e._v(e._s(t.row.rollback))])]),n("div",{staticClass:"column"},[n("pre",[e._v(e._s(t.row.script))])])])]}}])},[n("b-table-column",{attrs:{field:"source_ip",label:"IP",width:"40",sortable:"",searchable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(t.row.source_ip))])]}}])}),n("b-table-column",{attrs:{field:"type",label:"Type",width:"40",sortable:"",searchable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(t.row.type))])]}}])}),n("b-table-column",{attrs:{field:"entry",label:"Entidad",width:"40",sortable:"",searchable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(t.row.entry))])]}}])}),n("b-table-column",{attrs:{field:"is_compliant",label:"Compliance",width:"40",sortable:"",searchable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.is_compliant?n("span",{staticClass:"tag is-success"},[e._v("Yes")]):n("span",{staticClass:"tag is-danger"},[e._v("No")])]}}])}),n("b-table-column",{attrs:{field:"region",label:"Region",width:"40",sortable:"",searchable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(t.row.region))])]}}])}),n("b-table-column",{attrs:{field:"mobile",label:"Mobile",width:"40",sortable:"",searchable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s("NA"===t.row.mobile?"Undefined":t.row.mobile?"Mobile":"No mobile"))])]}}])})],1)],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("h1",{staticClass:"title"},[e._v("Inventory")])])])}],!1,null,null,null);t.default=component.exports}}]);
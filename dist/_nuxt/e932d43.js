(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{444:function(e,t,n){"use strict";n.r(t);var o=n(9),r=(n(36),n(11),n(39),n(47),n(37),{data:function(){return{regiones:[{id:"0",name:"Desconocido"},{id:"1",name:"Region 1"},{id:"2",name:"Region 2"},{id:"3",name:"Region 3"},{id:"4",name:"Region 4"},{id:"5",name:"Region 5"},{id:"6",name:"Region 6"},{id:"7",name:"Region 7"},{id:"8",name:"Region 8"},{id:"9",name:"Region 9"}],region:null,compliant:0,notCompliant:0,columns:[],isPaginated:!0,isPaginationSimple:!1,isPaginationRounded:!1,paginationPosition:"bottom",defaultSortDirection:"asc",sortIcon:"arrow-up",sortIconSize:"is-small",currentPage:1,perPage:15,hasInput:!1,paginationOrder:"",inputPosition:"",inputDebounce:"",checkboxPosition:"right"}},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,n.$get("https://kevinzepeda.github.io/etl-test/nokia.json");case 3:return o=t.sent,r=o.reduce((function(e,t){var n,o=t.region;return e[o]=null!==(n=e[o])&&void 0!==n?n:[],e[o].push(t),e}),{}),l={borderWidth:"10px",hoverBackgroundColor:"red",hoverBorderWidth:"10px"},t.abrupt("return",{entrys:o,groupByRegion:r,options:l});case 7:case"end":return t.stop()}}),t)})))()},methods:{dataByRegion:function(e){return e[this.region]},getTotalDevices:function(e){var t=e.reduce((function(e,t){var n,o=t.source_ip;return e[o]=null!==(n=e[o])&&void 0!==n?n:[],e[o].push(t),e}),{});return Object.keys(t).length},getTotalMobile:function(e){var t=[];return e.map((function(e){e.mobile&&t.push(1)})),t.length},getTotalNoMobile:function(e){var t=[];return e.map((function(e){0===e.mobile&&t.push(1)})),t.length},getTotalNoCompliance:function(e){var t=[];return e.map((function(e){0===e.is_compliant&&t.push(1)})),t.length},getTotalCompliance:function(e){var t=[];return e.map((function(e){e.is_compliant&&t.push(1)})),t.length},pieData:function(e){var data=e[this.region];return null!==this.region&&(this.compliant=data.filter((function(e){return 1===e.is_compliant})).length,this.notCompliant=data.filter((function(e){return 0===e.is_compliant})).length),{hoverBackgroundColor:"red",hoverBorderWidth:10,labels:["Green","Red"],datasets:[{label:"Data One",backgroundColor:["#41B883","#E46651"],data:[this.compliant,this.notCompliant]}]}}},computed:{pieData:function(){return{hoverBackgroundColor:"red",hoverBorderWidth:5,labels:["R0","R1","R2","R3","R4","R5","R6","R7","R8","R9"],datasets:[{label:"Data One",backgroundColor:["#41B883","#E46651","#BF00FF","#F2F5A9","#5858FA","#F2E0F7","#A9F5A9","#E6E0F8","#D8D8D8","#F5A9A9"],data:[155,46,44,50,68,67,48,76,62,99]}]}}}}),l=n(52),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-4"},[null!==e.groupByRegion?n("div",{staticClass:"container"},[n("pie-chart",{attrs:{data:e.pieData,options:e.options}})],1):e._e()]),n("div",{staticClass:"column is-8"},[n("b-table",{attrs:{data:e.regiones,"per-page":e.perPage,"current-page":e.currentPage,"default-sort-direction":e.defaultSortDirection,"pagination-rounded":e.isPaginationRounded,"sort-icon":e.sortIcon,"sort-icon-size":e.sortIconSize,"detail-key":"entry","default-sort":"user.first_name","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page","debounce-page-input":e.inputDebounce,"checkbox-position":e.checkboxPosition},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}},[n("b-table-column",{attrs:{field:"id",label:"ID",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(t.row.id))])]}}])}),n("b-table-column",{attrs:{field:"name",label:"Nombre",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(t.row.name))])]}}])}),n("b-table-column",{attrs:{field:"entidades",label:"Total Devices",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.getTotalDevices(e.groupByRegion[t.row.id])))])]}}])}),n("b-table-column",{attrs:{field:"entidades",label:"Total Entidades",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.groupByRegion[t.row.id].length))])]}}])}),n("b-table-column",{attrs:{field:"mobile",label:"Mobile",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.getTotalMobile(e.groupByRegion[t.row.id])))])]}}])}),n("b-table-column",{attrs:{field:"noMobile",label:"No Mobile",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.getTotalNoMobile(e.groupByRegion[t.row.id])))])]}}])}),n("b-table-column",{attrs:{field:"compliance",label:"Compliance",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.getTotalCompliance(e.groupByRegion[t.row.id])))])]}}])}),n("b-table-column",{attrs:{field:"noQos",label:"Not QoS",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.getTotalNoCompliance(e.groupByRegion[t.row.id])))])]}}])})],1)],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);
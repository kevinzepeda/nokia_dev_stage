(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{402:function(t,e,n){var content=n(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(104).default)("2f09446a",content,!0,{sourceMap:!1})},406:function(t,e,n){"use strict";n(402)},407:function(t,e,n){var o=n(103)(!1);o.push([t.i,"pre.diff{width:50%;vertical-align:top;box-sizing:border-box;padding:0 20px;border:none;border-right:1px solid #ccc;resize:none;outline:none;background-color:#f6f6f6}.diff span,pre.diff{display:inline-block;font-size:12px;font-family:monospace}",""]),t.exports=o},417:function(t,e,n){"use strict";n.r(e);var o=n(10),r=(n(40),n(13),n(24),n(25),n(401),n(326),n(41),{data:function(){return{ip:null,compliant:0,notCompliant:0,columns:[],isPaginated:!0,isPaginationSimple:!1,isPaginationRounded:!1,paginationPosition:"bottom",defaultSortDirection:"asc",sortIcon:"arrow-up",sortIconSize:"is-small",currentPage:1,perPage:10,hasInput:!1,paginationOrder:"",inputPosition:"",inputDebounce:"",checkboxPosition:"left",checked:[],options:{chart:{width:380,type:"pie"},colors:["#1bd7a6","#fe5858"],labels:["Compliance","No QoS"],responsive:[{breakpoint:600,options:{chart:{width:200},legend:{position:"bottom"}}}]}}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("https://kevinzepeda.github.io/etl-test/nokia.json");case 3:return o=e.sent,r=o.reduce((function(t,e){var n,o=e.source_ip;return t[o]=null!==(n=t[o])&&void 0!==n?n:[],t[o].push(e),t}),{}),e.abrupt("return",{entrys:o,groupByIP:r});case 6:case"end":return e.stop()}}),e)})))()},methods:{dataByIP:function(t){return t[this.ip]},getFile:function(){this.$axios.post("https://f7ae-2806-105e-c-5ac6-a550-b0c-8885-baab.ngrok.io",{items:this.checked},{responseType:"blob"}).then((function(t){var e=window.URL.createObjectURL(new Blob([t.data],{type:"application/zip"}));window.open(e)}))},pieData:function(t){var data=t[this.ip],e=this.roundOff(data.filter((function(i){return i.is_compliant})).length/data.length*100,2);return[e,this.roundOff(100-e,2)]},roundOff:function(t,e){var n=Math.pow(10,e);return Math.round(t*n)/n}},fetch:function(){this.ip=this.$route.params.ip}}),c=(n(406),n(51)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-9"},[n("h1",{staticClass:"title"},[t._v(t._s(t.dataByIP(t.groupByIP)[0].sysname))]),n("h2",{staticClass:"subtitle"},[t._v("R"+t._s(t.dataByIP(t.groupByIP)[0].region)+" | "+t._s(t.ip)+" | "+t._s(t.dataByIP(t.groupByIP)[0].type))])]),n("div",{staticClass:"column is-3"},[n("div",{staticClass:"buttons mt-2",attrs:{align:"is-left"}},[t.checked.length?n("b-button",{staticClass:"is-danger",on:{click:function(e){t.checked=[]}}},[t._v("Clear all")]):n("b-button",{staticClass:"is-info is-light",on:{click:function(e){t.checked=t.dataByIP(t.groupByIP).filter((function(t){return 0===t.is_compliant}))}}},[t._v("Select all")]),n("b-button",{staticClass:"is-info",attrs:{disabled:0===t.checked.length},on:{click:function(e){return t.getFile()}}},[t._v("Generate MOP")])],1)])]),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-9"},[n("h3",{staticClass:"subtitle"},[t._v("Units: "),n("b",[t._v(t._s(t.dataByIP(t.groupByIP).length))])]),n("b-table",{attrs:{data:t.dataByIP(t.groupByIP),detailed:"",paginated:t.isPaginated,"per-page":t.perPage,"current-page":t.currentPage,"pagination-simple":t.isPaginationSimple,"pagination-position":t.paginationPosition,"default-sort-direction":t.defaultSortDirection,"pagination-rounded":t.isPaginationRounded,"sort-icon":t.sortIcon,"sort-icon-size":t.sortIconSize,"detail-key":"entry","default-sort":"user.first_name","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page","page-input":t.hasInput,"pagination-order":t.paginationOrder,"page-input-position":t.inputPosition,"debounce-page-input":t.inputDebounce,"checked-rows":t.checked,checkable:"","is-row-checkable":function(t){return 0===t.is_compliant},"checkbox-position":t.checkboxPosition},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:checkedRows":function(e){t.checked=e},"update:checked-rows":function(e){t.checked=e}},scopedSlots:t._u([{key:"bottom-left",fn:function(){return[n("b",[t._v(" Not QoS units: "+t._s(t.dataByIP(t.groupByIP).filter((function(i){return 0===i.is_compliant})).length))])]},proxy:!0},{key:"detail",fn:function(e){return[n("div",[n("pre",{staticClass:"diff"},[t._v(t._s(e.row.rollback))]),n("pre",{staticClass:"diff"},[t._v(t._s(e.row.script))])])]}}])},[n("b-table-column",{attrs:{field:"entry",label:"Entidad",sortable:"",searchable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("p",[t._v(t._s(e.row.entry))])]}}])}),n("b-table-column",{attrs:{field:"scenario",label:"Scenario",width:"40",sortable:"",searchable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("p",[t._v(t._s(e.row.scenario))])]}}])}),n("b-table-column",{attrs:{field:"is_compliant",label:"Compliance",width:"40",sortable:"",searchable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.is_compliant?n("span",{staticClass:"tag is-success"},[t._v("Yes")]):n("span",{staticClass:"tag is-danger"},[t._v("No")])]}}])}),n("b-table-column",{attrs:{field:"mobile",label:"Mobile",width:"40",sortable:"",searchable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("p",[t._v(t._s("NA"===e.row.mobile?"Undefined":e.row.mobile?"Mobile":"No mobile"))])]}}])})],1)],1),n("div",{staticClass:"column is-3"},[null!==t.ip?n("div",{staticClass:"container"},[n("h3",{staticClass:"subtitle"},[t._v("Device Compliance")]),n("VueApexCharts",{attrs:{options:t.options,series:t.pieData(t.groupByIP)}})],1):t._e()])])])}),[],!1,null,null,null);e.default=component.exports}}]);
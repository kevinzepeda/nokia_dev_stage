(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{398:function(e,t,n){var o=n(4);e.exports=o(1..valueOf)},400:function(e,t,n){"use strict";var o=n(7),r=n(1),l=n(4),c=n(52),f=n(398),d=n(326),m=n(5),h=r.RangeError,v=r.String,_=Math.floor,C=l(d),R=l("".slice),y=l(1..toFixed),N=function(e,t,n){return 0===t?n:t%2==1?N(e,t-1,n*e):N(e*e,t/2,n)},w=function(data,e,t){for(var n=-1,o=t;++n<6;)o+=e*data[n],data[n]=o%1e7,o=_(o/1e7)},k=function(data,e){for(var t=6,n=0;--t>=0;)n+=data[t],data[t]=_(n/e),n=n%e*1e7},M=function(data){for(var e=6,s="";--e>=0;)if(""!==s||0===e||0!==data[e]){var t=v(data[e]);s=""===s?t:s+C("0",7-t.length)+t}return s};o({target:"Number",proto:!0,forced:m((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!m((function(){y({})}))},{toFixed:function(e){var t,n,o,r,l=f(this),d=c(e),data=[0,0,0,0,0,0],m="",_="0";if(d<0||d>20)throw h("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return v(l);if(l<0&&(m="-",l=-l),l>1e-21)if(n=(t=function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t}(l*N(2,69,1))-69)<0?l*N(2,-t,1):l/N(2,t,1),n*=4503599627370496,(t=52-t)>0){for(w(data,0,n),o=d;o>=7;)w(data,1e7,0),o-=7;for(w(data,N(10,o,1),0),o=t-1;o>=23;)k(data,1<<23),o-=23;k(data,1<<o),w(data,1,1),k(data,2),_=M(data)}else w(data,0,n),w(data,1<<-t,0),_=M(data)+C("0",d);return _=d>0?m+((r=_.length)<=d?"0."+C("0",d-r)+_:R(_,0,r-d)+"."+R(_,r-d)):m+_}})},401:function(e,t,n){"use strict";var o=n(12),r=n(1),l=n(4),c=n(104),f=n(19),d=n(15),m=n(325),h=n(42),v=n(103),_=n(324),C=n(5),R=n(72).f,y=n(34).f,N=n(17).f,w=n(398),k=n(402).trim,M="Number",x=r.Number,S=x.prototype,B=r.TypeError,F=l("".slice),I=l("".charCodeAt),E=function(e){var t=_(e,"number");return"bigint"==typeof t?t:P(t)},P=function(e){var t,n,o,r,l,c,f,code,d=_(e,"number");if(v(d))throw B("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=k(d),43===(t=I(d,0))||45===t){if(88===(n=I(d,2))||120===n)return NaN}else if(48===t){switch(I(d,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+d}for(c=(l=F(d,2)).length,f=0;f<c;f++)if((code=I(l,f))<48||code>r)return NaN;return parseInt(l,o)}return+d};if(c(M,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var A,D=function(e){var t=arguments.length<1?0:x(E(e)),n=this;return h(S,n)&&C((function(){w(n)}))?m(Object(t),n,D):t},T=o?R(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),O=0;T.length>O;O++)d(x,A=T[O])&&!d(D,A)&&N(D,A,y(x,A));D.prototype=S,S.constructor=D,f(r,M,D)}},402:function(e,t,n){var o=n(4),r=n(23),l=n(14),c=n(403),f=o("".replace),d="["+c+"]",m=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),v=function(e){return function(t){var n=l(r(t));return 1&e&&(n=f(n,m,"")),2&e&&(n=f(n,h,"")),n}};e.exports={start:v(1),end:v(2),trim:v(3)}},403:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},410:function(e,t,n){"use strict";n.r(t);var o=n(10),r=(n(40),n(13),n(35),n(73),n(43),n(24),n(400),n(401),n(41),{data:function(){return{regiones:[{id:"0",name:"Unknown"},{id:"1",name:"Region 1"},{id:"2",name:"Region 2"},{id:"3",name:"Region 3"},{id:"4",name:"Region 4"},{id:"5",name:"Region 5"},{id:"6",name:"Region 6"},{id:"7",name:"Region 7"},{id:"8",name:"Region 8"},{id:"9",name:"Region 9"}],region:null,compliant:0,notCompliant:0,columns:[],isPaginated:!0,isPaginationSimple:!1,isPaginationRounded:!1,paginationPosition:"bottom",defaultSortDirection:"asc",sortIcon:"arrow-up",sortIconSize:"is-small",currentPage:1,perPage:15,hasInput:!1,paginationOrder:"",inputPosition:"",inputDebounce:"",checkboxPosition:"right"}},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,n.$get("https://kevinzepeda.github.io/etl-test/nokia.json");case 3:return o=t.sent,r=o.reduce((function(e,t){var n,o=t.region;return e[o]=null!==(n=e[o])&&void 0!==n?n:[],e[o].push(t),e}),{}),l={responsive:!0,maintainAspectRatio:!1,devicePixelRatio:2,tooltips:{enabled:!0},title:{display:!0,text:"% Device by Region",position:"bottom",fontSize:20}},t.abrupt("return",{entrys:o,groupByRegion:r,options:l});case 7:case"end":return t.stop()}}),t)})))()},methods:{getDevices:function(e){var t=[];return e.forEach((function(e){t.includes(e.source_ip)||t.push(e.source_ip)})),t.length},getTotalDevices:function(e){var t=this;return Array.from({length:10},(function(n,o){return t.getDevices(e[o])})).reduce((function(e,t){return e+t}))},getTotalCompliance:function(e){var t=this;return(Array.from({length:10},(function(n,o){return t.getPercentCompliance(e[o])})).reduce((function(a,e){return Number(a)+Number(e)}))/10).toFixed(2)},pieRegion:function(e){var t=this,n=Array.from({length:10},(function(n,o){return t.getDevices(e[o])})),o=n.reduce((function(e,t){return e+t}));return{hoverBackgroundColor:"red",hoverBorderWidth:5,labels:["R0","R1","R2","R3","R4","R5","R6","R7","R8","R9"],datasets:[{label:"Data One",backgroundColor:["#41B883","#E46651","#BF00FF","#F2F5A9","#5858FA","#F2E0F7","#A9F5A9","#E6E0F8","#D8D8D8","#F5A9A9"],data:Array.from({length:10},(function(e,t){return(n[t]/o*100).toFixed(2)}))}]}},pieMobileCompliance:function(e){var t=this,n=Array.from({length:10},(function(n,o){return t.getMobileCompliance(e[o])})).reduce((function(a,e){return Number(a)+Number(e)}))/10;return{hoverBackgroundColor:"red",hoverBorderWidth:5,labels:["Compliance","No QoS"],datasets:[{label:"Mobile compliance",backgroundColor:["#1bd7a6","#fe5858"],data:[n,(100-n).toFixed(2)]}]}},pieNoMobileCompliance:function(e){var t=this,n=Array.from({length:10},(function(n,o){return t.getNoMobileCompliance(e[o])})).reduce((function(a,e){return Number(a)+Number(e)}))/10;return{hoverBackgroundColor:"red",hoverBorderWidth:5,labels:["Compliance","No QoS"],datasets:[{label:"Mobile compliance",backgroundColor:["#1bd7a6","#fe5858"],data:[n,(100-n).toFixed(2)]}]}},getMobile:function(e){return e.filter((function(i){return i.mobile})).length},getMobileCompliance:function(e){var t=e.filter((function(i){return i.mobile}));return(t.filter((function(i){return i.is_compliant})).length/t.length*100).toFixed(2)},getNoMobile:function(e){return e.filter((function(i){return!i.mobile})).length},getNoMobileCompliance:function(e){var t=e.filter((function(i){return!i.mobile}));return t.length?(t.filter((function(i){return i.is_compliant})).length/t.length*100).toFixed(2):0},getCompliance:function(e){return e.filter((function(i){return i.is_compliant})).length},getNoCompliance:function(e){return e.filter((function(i){return!i.is_compliant})).length},getPercentCompliance:function(e){return(e.filter((function(i){return i.is_compliant})).length/e.length*100).toFixed(2)}}}),l=n(51),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-4"},[null!==e.groupByRegion?n("div",{staticClass:"container"},[n("h2",{staticClass:"subtitle"},[e._v("Devices by Region")]),n("pie-chart",{attrs:{data:e.pieRegion(e.groupByRegion),options:e.options}})],1):e._e()]),n("div",{staticClass:"column is-4"},[null!==e.groupByRegion?n("div",{staticClass:"container"},[n("h2",{staticClass:"subtitle"},[e._v("Mobile Compliance")]),n("pie-chart",{attrs:{data:e.pieMobileCompliance(e.groupByRegion),option:e.options}})],1):e._e()]),n("div",{staticClass:"column is-4"},[null!==e.groupByRegion?n("div",{staticClass:"container"},[n("h2",{staticClass:"subtitle"},[e._v("No Mobile Compliance")]),n("pie-chart",{attrs:{data:e.pieNoMobileCompliance(e.groupByRegion),option:e.options}})],1):e._e()])]),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("b-table",{attrs:{data:e.regiones,"per-page":e.perPage,"current-page":e.currentPage,"default-sort-direction":e.defaultSortDirection,"pagination-rounded":e.isPaginationRounded,"sort-icon":e.sortIcon,"sort-icon-size":e.sortIconSize,"detail-key":"entry","default-sort":"user.first_name","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page","debounce-page-input":e.inputDebounce,"checkbox-position":e.checkboxPosition},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}},[n("b-table-column",{attrs:{field:"id",label:"ID",subheading:"Total",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(t.row.id))])]}}])}),n("b-table-column",{attrs:{field:"name",label:"Name",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("nuxt-link",{attrs:{to:"region/"+t.row.id}},[e._v(e._s(t.row.name))])]}}])}),n("b-table-column",{attrs:{field:"entidades",label:"Total Devices",subheading:e.getTotalDevices(e.groupByRegion),width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.getDevices(e.groupByRegion[t.row.id])))])]}}])}),n("b-table-column",{attrs:{field:"entidades",label:"Total Units",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.groupByRegion[t.row.id].length))])]}}])}),n("b-table-column",{attrs:{field:"compliance",label:"Qos Compliance",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.getCompliance(e.groupByRegion[t.row.id])))])]}}])}),n("b-table-column",{attrs:{field:"noQos",label:"Not QoS",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.getNoCompliance(e.groupByRegion[t.row.id])))])]}}])}),n("b-table-column",{attrs:{field:"compliance",label:"Compliance",subheading:e.getTotalCompliance(e.groupByRegion)+"%",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.getPercentCompliance(e.groupByRegion[t.row.id]))+" %")])]}}])}),n("b-table-column",{attrs:{field:"mobile",label:"Mobile",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.getMobile(e.groupByRegion[t.row.id])))])]}}])}),n("b-table-column",{attrs:{field:"mobile",label:"Mobile Compliance",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.getMobileCompliance(e.groupByRegion[t.row.id]))+" %")])]}}])}),n("b-table-column",{attrs:{field:"noMobile",label:"No Mobile",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.getNoMobile(e.groupByRegion[t.row.id])))])]}}])}),n("b-table-column",{attrs:{field:"noMobile",label:"No Mobile Compliance",width:"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.getNoMobileCompliance(e.groupByRegion[t.row.id]))+" %")])]}}])})],1)],1)])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("h1",{staticClass:"title"},[e._v("Nokia Dashboard")])])])}],!1,null,null,null);t.default=component.exports}}]);
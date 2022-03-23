(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(j,t,n){"use strict";var e=n(2),o=n(344);e.a.component("pieChart",{extends:o.a,props:["options","data"],mounted:function(){this.renderChart(this.data,this.options)}})},343:function(j,t,n){"use strict";var e={data:function(){return{items:[{title:"Dashboard",to:{name:"index"}},{title:"Region",to:{name:"regiones"}},{title:"Nokia",to:{name:"nokia"}}]}}},o=n(52),component=Object(o.a)(e,(function(){var j=this,t=j.$createElement,n=j._self._c||t;return n("div",[n("section",{staticClass:"main-content columns"},[n("aside",{staticClass:"column is-2 section"},[n("p",{staticClass:"menu-label is-hidden-touch"},[j._v("\n        Nokia\n      ")]),j._v(" "),n("ul",{staticClass:"menu-list"},j._l(j.items,(function(t,e){return n("li",{key:e},[n("NuxtLink",{attrs:{to:t.to,"exact-active-class":"is-active"}},[n("b-icon",{attrs:{icon:t.icon}}),j._v(" "+j._s(t.title)+"\n          ")],1)],1)})),0)]),j._v(" "),n("div",{staticClass:"container column is-10 mt-6"},[n("Nuxt")],1)])])}),[],!1,null,null,null);t.a=component.exports},347:function(j,t,n){n(348),j.exports=n(349)},426:function(j,t,n){var map={"./af":201,"./af.js":201,"./ar":202,"./ar-dz":203,"./ar-dz.js":203,"./ar-kw":204,"./ar-kw.js":204,"./ar-ly":205,"./ar-ly.js":205,"./ar-ma":206,"./ar-ma.js":206,"./ar-sa":207,"./ar-sa.js":207,"./ar-tn":208,"./ar-tn.js":208,"./ar.js":202,"./az":209,"./az.js":209,"./be":210,"./be.js":210,"./bg":211,"./bg.js":211,"./bm":212,"./bm.js":212,"./bn":213,"./bn-bd":214,"./bn-bd.js":214,"./bn.js":213,"./bo":215,"./bo.js":215,"./br":216,"./br.js":216,"./bs":217,"./bs.js":217,"./ca":218,"./ca.js":218,"./cs":219,"./cs.js":219,"./cv":220,"./cv.js":220,"./cy":221,"./cy.js":221,"./da":222,"./da.js":222,"./de":223,"./de-at":224,"./de-at.js":224,"./de-ch":225,"./de-ch.js":225,"./de.js":223,"./dv":226,"./dv.js":226,"./el":227,"./el.js":227,"./en-au":228,"./en-au.js":228,"./en-ca":229,"./en-ca.js":229,"./en-gb":230,"./en-gb.js":230,"./en-ie":231,"./en-ie.js":231,"./en-il":232,"./en-il.js":232,"./en-in":233,"./en-in.js":233,"./en-nz":234,"./en-nz.js":234,"./en-sg":235,"./en-sg.js":235,"./eo":236,"./eo.js":236,"./es":237,"./es-do":238,"./es-do.js":238,"./es-mx":239,"./es-mx.js":239,"./es-us":240,"./es-us.js":240,"./es.js":237,"./et":241,"./et.js":241,"./eu":242,"./eu.js":242,"./fa":243,"./fa.js":243,"./fi":244,"./fi.js":244,"./fil":245,"./fil.js":245,"./fo":246,"./fo.js":246,"./fr":247,"./fr-ca":248,"./fr-ca.js":248,"./fr-ch":249,"./fr-ch.js":249,"./fr.js":247,"./fy":250,"./fy.js":250,"./ga":251,"./ga.js":251,"./gd":252,"./gd.js":252,"./gl":253,"./gl.js":253,"./gom-deva":254,"./gom-deva.js":254,"./gom-latn":255,"./gom-latn.js":255,"./gu":256,"./gu.js":256,"./he":257,"./he.js":257,"./hi":258,"./hi.js":258,"./hr":259,"./hr.js":259,"./hu":260,"./hu.js":260,"./hy-am":261,"./hy-am.js":261,"./id":262,"./id.js":262,"./is":263,"./is.js":263,"./it":264,"./it-ch":265,"./it-ch.js":265,"./it.js":264,"./ja":266,"./ja.js":266,"./jv":267,"./jv.js":267,"./ka":268,"./ka.js":268,"./kk":269,"./kk.js":269,"./km":270,"./km.js":270,"./kn":271,"./kn.js":271,"./ko":272,"./ko.js":272,"./ku":273,"./ku.js":273,"./ky":274,"./ky.js":274,"./lb":275,"./lb.js":275,"./lo":276,"./lo.js":276,"./lt":277,"./lt.js":277,"./lv":278,"./lv.js":278,"./me":279,"./me.js":279,"./mi":280,"./mi.js":280,"./mk":281,"./mk.js":281,"./ml":282,"./ml.js":282,"./mn":283,"./mn.js":283,"./mr":284,"./mr.js":284,"./ms":285,"./ms-my":286,"./ms-my.js":286,"./ms.js":285,"./mt":287,"./mt.js":287,"./my":288,"./my.js":288,"./nb":289,"./nb.js":289,"./ne":290,"./ne.js":290,"./nl":291,"./nl-be":292,"./nl-be.js":292,"./nl.js":291,"./nn":293,"./nn.js":293,"./oc-lnc":294,"./oc-lnc.js":294,"./pa-in":295,"./pa-in.js":295,"./pl":296,"./pl.js":296,"./pt":297,"./pt-br":298,"./pt-br.js":298,"./pt.js":297,"./ro":299,"./ro.js":299,"./ru":300,"./ru.js":300,"./sd":301,"./sd.js":301,"./se":302,"./se.js":302,"./si":303,"./si.js":303,"./sk":304,"./sk.js":304,"./sl":305,"./sl.js":305,"./sq":306,"./sq.js":306,"./sr":307,"./sr-cyrl":308,"./sr-cyrl.js":308,"./sr.js":307,"./ss":309,"./ss.js":309,"./sv":310,"./sv.js":310,"./sw":311,"./sw.js":311,"./ta":312,"./ta.js":312,"./te":313,"./te.js":313,"./tet":314,"./tet.js":314,"./tg":315,"./tg.js":315,"./th":316,"./th.js":316,"./tk":317,"./tk.js":317,"./tl-ph":318,"./tl-ph.js":318,"./tlh":319,"./tlh.js":319,"./tr":320,"./tr.js":320,"./tzl":321,"./tzl.js":321,"./tzm":322,"./tzm-latn":323,"./tzm-latn.js":323,"./tzm.js":322,"./ug-cn":324,"./ug-cn.js":324,"./uk":325,"./uk.js":325,"./ur":326,"./ur.js":326,"./uz":327,"./uz-latn":328,"./uz-latn.js":328,"./uz.js":327,"./vi":329,"./vi.js":329,"./x-pseudo":330,"./x-pseudo.js":330,"./yo":331,"./yo.js":331,"./zh-cn":332,"./zh-cn.js":332,"./zh-hk":333,"./zh-hk.js":333,"./zh-mo":334,"./zh-mo.js":334,"./zh-tw":335,"./zh-tw.js":335};function e(j){var t=o(j);return n(t)}function o(j){if(!n.o(map,j)){var t=new Error("Cannot find module '"+j+"'");throw t.code="MODULE_NOT_FOUND",t}return map[j]}e.keys=function(){return Object.keys(map)},e.resolve=o,j.exports=e,e.id=426}},[[347,8,1,9]]]);
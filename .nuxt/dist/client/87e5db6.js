(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{331:function(t,e,n){var content=n(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("7a823d43",content,!0,{sourceMap:!1})},354:function(t,e,n){"use strict";n(331)},355:function(t,e,n){var l=n(35)((function(i){return i[1]}));l.push([t.i,"@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css);"]),l.push([t.i,".v-enter-active,.v-leave-active{transition:opacity .5s ease}.v-enter-from,.v-leave-to{opacity:0}",""]),l.locals={},t.exports=l},366:function(t,e,n){"use strict";n.r(e);var l=n(333);var o={name:"HomeSlider",data:function(){return{posts:[]}},methods:{onBeforeEnter:function(t){l.a.set(t,{scaleX:.25,scaleY:.25,opacity:0})},onEnter:function(t,e){l.a.to(t,{duration:1,scaleX:1,scaleY:1,opacity:.6,ease:"back.out(2.5, 1)",onComplete:e}),l.a.to(t,{duration:1,translateY:100,opacity:1,delay:1.5,ease:"back.out(10,1)",onComplete:e}),l.a.to(t,{duration:1,translateY:0,opacity:1,delay:2.5,ease:"back.out(10,1)",onComplete:e})},onLeave:function(t,e){l.a.to(t,{duration:.7,scaleX:1,scaleY:1,x:300,ease:"elastic.inOut(2.5, 1)"}),l.a.to(t,{duration:.2,delay:.5,opacity:0,onComplete:e})}}},r=(n(354),n(15)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-5 mt-10 md:px-32"},[n("section",{staticClass:"px-0 py-12 bg-white md:px-0"},[n("div",{staticClass:"container items-center max-w-6xl px-8 mx-auto xl:px-2"},[n("div",{staticClass:"flex flex-wrap items-center sm:-mx-3"},[n("div",{staticClass:"w-full md:w-1/2"},[n("Transition",{attrs:{appear:"",name:"custom-classes","enter-active-class":"animate__animated animate__lightSpeedInLeft","leave-active-class":"animate__animated animate__bounceOutRight"}},[n("div",{staticClass:"w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"},[n("h1",{staticClass:"text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"},[n("span",{staticClass:"block xl:inline"},[t._v("Pháp Luân Công")]),t._v(" "),n("span",{staticClass:"block text-plc-primary mt-5 xl:inline"},[t._v("Chân Thiện Nhẫn")])]),t._v(" "),n("p",{staticClass:"mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"},[t._v("Còn gọi là Pháp Luân Đại Pháp, môn tu luyện cổ xưa bồi dưỡng và nâng cao tâm tính, sức khỏe.")]),t._v(" "),n("div",{staticClass:"relative flex flex-col sm:flex-row sm:space-x-4"},[n("NuxtLink",{staticClass:"flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-plc-primary rounded-md sm:mb-0 hover:bg-teal-700 sm:w-auto",attrs:{to:"/about"}},[t._v("\n              Tìm hiểu thêm\n              "),n("svg",{staticClass:"w-5 h-5 ml-1",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}}),n("polyline",{attrs:{points:"12 5 19 12 12 19"}})])]),t._v(" "),n("a",{staticClass:"flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600",attrs:{href:"#_"}},[t._v("\n              Tài Liệu Gốc\n              ")])],1)])])],1),t._v(" "),n("div",{staticClass:"w-full md:w-1/2"},[n("Transition",{attrs:{name:"mvs-tada",css:!1,appear:""},on:{"before-enter":t.onBeforeEnter,enter:t.onEnter,leave:t.onLeave}},[n("div",{staticClass:"w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl"},[n("img",{attrs:{src:"https://suthatphapluancong.org/wp-content/uploads/2018/09/mat-trai-cua-phap-luan-cong.jpg"}})])])],1)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);
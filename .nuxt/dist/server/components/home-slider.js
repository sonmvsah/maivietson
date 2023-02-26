exports.ids = [7];
exports.modules = {

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7a823d43", content, true, context)
};

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSlider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSlider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSlider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSlider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSlider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-enter-active,.v-leave-active{transition:opacity .5s ease}.v-enter-from,.v-leave-to{opacity:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/HomeSlider.vue?vue&type=template&id=12bde6bd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"px-5 mt-10 md:px-32"},[_vm._ssrNode("<section class=\"px-0 py-12 bg-white md:px-0\">","</section>",[_vm._ssrNode("<div class=\"container items-center max-w-6xl px-8 mx-auto xl:px-2\">","</div>",[_vm._ssrNode("<div class=\"flex flex-wrap items-center sm:-mx-3\">","</div>",[_vm._ssrNode("<div class=\"w-full md:w-1/2\">","</div>",[_c('Transition',{attrs:{"appear":"","name":"custom-classes","enter-active-class":"animate__animated animate__lightSpeedInLeft","leave-active-class":"animate__animated animate__bounceOutRight"}},[_c('div',{staticClass:"w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"},[_c('h1',{staticClass:"text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"},[_c('span',{staticClass:"block xl:inline"},[_vm._v("Pháp Luân Công")]),_vm._v(" "),_c('span',{staticClass:"block text-plc-primary mt-5 xl:inline"},[_vm._v("Chân Thiện Nhẫn")])]),_vm._v(" "),_c('p',{staticClass:"mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"},[_vm._v("Còn gọi là Pháp Luân Đại Pháp, môn tu luyện cổ xưa bồi dưỡng và nâng cao tâm tính, sức khỏe.")]),_vm._v(" "),_c('div',{staticClass:"relative flex flex-col sm:flex-row sm:space-x-4"},[_c('NuxtLink',{staticClass:"flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-plc-primary rounded-md sm:mb-0 hover:bg-teal-700 sm:w-auto",attrs:{"to":"/about"}},[_vm._v("\n              Tìm hiểu thêm\n              "),_c('svg',{staticClass:"w-5 h-5 ml-1",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[_c('line',{attrs:{"x1":"5","y1":"12","x2":"19","y2":"12"}}),_c('polyline',{attrs:{"points":"12 5 19 12 12 19"}})])]),_vm._v(" "),_c('a',{staticClass:"flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600",attrs:{"href":"#_"}},[_vm._v("\n              Tài Liệu Gốc\n              ")])],1)])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-full md:w-1/2\">","</div>",[_c('Transition',{attrs:{"name":"mvs-tada","css":false,"appear":""},on:{"before-enter":_vm.onBeforeEnter,"enter":_vm.onEnter,"leave":_vm.onLeave}},[_c('div',{staticClass:"w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl"},[_c('img',{attrs:{"src":"https://suthatphapluancong.org/wp-content/uploads/2018/09/mat-trai-cua-phap-luan-cong.jpg"}})])])],1)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/HomeSlider.vue?vue&type=template&id=12bde6bd&

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/HomeSlider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var HomeSlidervue_type_script_lang_js_ = ({
  name: 'HomeSlider',

  data() {
    return {
      posts: []
    };
  },

  methods: {
    onBeforeEnter,
    onEnter,
    onLeave
  }
});

function onBeforeEnter(el) {
  external_gsap_["gsap"].set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 0
  });
}

function onEnter(el, done) {
  external_gsap_["gsap"].to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 0.6,
    ease: 'back.out(2.5, 1)',
    onComplete: done
  });
  external_gsap_["gsap"].to(el, {
    duration: 1,
    translateY: 100,
    opacity: 1,
    delay: 1.5,
    ease: 'back.out(10,1)',
    onComplete: done
  });
  external_gsap_["gsap"].to(el, {
    duration: 1,
    translateY: 0,
    opacity: 1,
    delay: 2.5,
    ease: 'back.out(10,1)',
    onComplete: done
  });
}

function onLeave(el, done) {
  external_gsap_["gsap"].to(el, {
    duration: 0.7,
    scaleX: 1,
    scaleY: 1,
    x: 300,
    ease: 'elastic.inOut(2.5, 1)'
  });
  external_gsap_["gsap"].to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done
  });
}
// CONCATENATED MODULE: ./components/home/HomeSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_HomeSlidervue_type_script_lang_js_ = (HomeSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/HomeSlider.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(86)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_HomeSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "75954a36"
  
)

/* harmony default export */ var HomeSlider = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-slider.js.map
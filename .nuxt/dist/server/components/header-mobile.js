exports.ids = [5];
exports.modules = {

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5b59e6fc", content, true, context)
};

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".mvs-mobile{position:absolute;top:0;width:100}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderMobile.vue?vue&type=template&id=5b3ccff4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"flex lg:hidden absolute w-full top-0 items-center justify-between flex-wrap bg-teal-5001 p-3 bg-[#124f9a] z-50"},[_vm._ssrNode("<div class=\"block lg:hidden\"></div> <div class=\"flex items-center flex-shrink-0 text-white mr-6\"><svg width=\"54\" height=\"54\" viewBox=\"0 0 54 54\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fill-current h-8 w-8 mr-2\"><path d=\"M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z\"></path></svg> <span class=\"font-semibold text-xl tracking-tight\">Pháp Luân Blog</span></div> <div class=\"block lg:hidden\"><button class=\"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white\"><svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fill-current h-3 w-3\"><title>Menu</title><path d=\"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z\"></path></svg></button></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("w-full block flex-grow lg:items-center lg:w-auto",{hidden: _vm.isClose }))+">","</div>",[_vm._ssrNode("<div class=\"text-sm lg:flex-grow\">","</div>",[_c('NuxtLink',{staticClass:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",attrs:{"to":"/"},nativeOn:{"click":function($event){return _vm.hideOnClick()}}},[_vm._v("\n        Trang Chủ\n      ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",attrs:{"to":"/about"},nativeOn:{"click":function($event){return _vm.hideOnClick()}}},[_vm._v("\n            Giới thiệu\n      ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",attrs:{"to":"/phap-luan-cong"},nativeOn:{"click":function($event){return _vm.hideOnClick()}}},[_vm._v("\n        Pháp Luân Công là gì\n      ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",attrs:{"to":"/loi-ich"},nativeOn:{"click":function($event){return _vm.hideOnClick()}}},[_vm._v("\n            Lợi ích\n      ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",attrs:{"to":"/cau-chuyen-tu-luyen"},nativeOn:{"click":function($event){return _vm.hideOnClick()}}},[_vm._v("\n            Câu chuyện Tu Luyện\n      ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",attrs:{"to":"/faqs"},nativeOn:{"click":function($event){return _vm.hideOnClick()}}},[_vm._v("\n            Câu hỏi thường gặp\n      ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",attrs:{"to":"/tai-lieu"},nativeOn:{"click":function($event){return _vm.hideOnClick()}}},[_vm._v("\n            Tài liệu chính thống\n      ")])],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('NuxtLink',{staticClass:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0",attrs:{"to":"/"},nativeOn:{"click":function($event){return _vm.hideOnClick()}}},[_vm._v("Download")])],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeaderMobile.vue?vue&type=template&id=5b3ccff4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderMobile.vue?vue&type=script&lang=js&
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
/* harmony default export */ var HeaderMobilevue_type_script_lang_js_ = ({
  name: 'HeaderMobile',

  data() {
    return {
      isClose: true
    };
  },

  methods: {
    mvsLog() {
      this.isClose = !this.isClose;
    },

    hideOnClick() {
      this.isClose = true;
    }

  }
});
// CONCATENATED MODULE: ./components/HeaderMobile.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderMobilevue_type_script_lang_js_ = (HeaderMobilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeaderMobile.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(78)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderMobilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "748055d9"
  
)

/* harmony default export */ var HeaderMobile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=header-mobile.js.map
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["data-grid"] = factory();
	else
		root["data-grid"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1139":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataGrid_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2420");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataGrid_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataGrid_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataGrid_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "139f":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each");

/***/ }),

/***/ "1d72":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.fixed");

/***/ }),

/***/ "2420":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "51f7":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec");

/***/ }),

/***/ "60bb":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "6faa":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.constructor");

/***/ }),

/***/ "7396":
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/theme-chalk/table.css");

/***/ }),

/***/ "7fe6":
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/table-column");

/***/ }),

/***/ "a9f8":
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/theme-chalk/input.css");

/***/ }),

/***/ "b20a":
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/table");

/***/ }),

/***/ "bcd8":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),

/***/ "bcda":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ }),

/***/ "be6e":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.search");

/***/ }),

/***/ "dc65":
/***/ (function(module, exports) {

module.exports = require("current-script-polyfill");

/***/ }),

/***/ "e67a":
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/input");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("dc65")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "core-js/modules/es.function.name"
var es_function_name_ = __webpack_require__("bcd8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a3d513b4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DataGrid/DataGrid.vue?vue&type=template&id=41a95d92&
var DataGridvue_type_template_id_41a95d92_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"data-grid"},[_c('el-table',{ref:"table",attrs:{"data":_vm.data,"span-method":_vm.spanMethod,"row-key":function (row) { return row.Id; },"row-class-name":_vm.addRowClass,"cell-class-name":function (ref) {
	var column = ref.column;

	return 'data-grid__cell-' + (column.property || column.type);
},"height":"100%"},on:{"sort-change":_vm.onSort,"selection-change":_vm.onSelect,"expand-change":_vm.onExpand}},[_vm._t("default",[(_vm.data && _vm.data.length)?_vm._l((_vm.columns),function(col){return _c('data-grid-column',{key:col.prop,attrs:{"options":col,"generator":_vm.bindProps},scopedSlots:_vm._u([{key:"header",fn:function(ref){
var column = ref.column;
return [_vm._t(col.prop + '-header',[_vm._v(" "+_vm._s(column.label)+" "+_vm._s(col.serach)+" "),(col.search)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.search),expression:"search"}],on:{"click":function($event){$event.stopPropagation();}}},[_c('el-input',{attrs:{"size":"mini","placeholder":"Type to search"},on:{"input":function($event){return _vm.onSearch($event, col.prop)}},model:{value:(_vm.searchModel[col.prop]),callback:function ($$v) {_vm.$set(_vm.searchModel, col.prop, $$v)},expression:"searchModel[col.prop]"}})],1):_vm._e()],{"col":column})]}},{key:"default",fn:function(ref){
var col = ref.col;
var row = ref.row;
return [_vm._t(col.prop,[_vm._v(" "+_vm._s(row[col.prop])+" ")],{"row":row,"col":col})]}}],null,true)})}):_vm._e()])],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DataGrid/DataGrid.vue?vue&type=template&id=41a95d92&

// EXTERNAL MODULE: external "core-js/modules/es.array.for-each"
var es_array_for_each_ = __webpack_require__("139f");

// EXTERNAL MODULE: external "core-js/modules/es.number.constructor"
var es_number_constructor_ = __webpack_require__("6faa");

// EXTERNAL MODULE: external "core-js/modules/es.regexp.exec"
var es_regexp_exec_ = __webpack_require__("51f7");

// EXTERNAL MODULE: external "core-js/modules/es.string.search"
var es_string_search_ = __webpack_require__("be6e");

// EXTERNAL MODULE: external "core-js/modules/es.string.fixed"
var es_string_fixed_ = __webpack_require__("1d72");

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each"
var web_dom_collections_for_each_ = __webpack_require__("bcda");

// EXTERNAL MODULE: external "element-ui/lib/theme-chalk/table.css"
var table_css_ = __webpack_require__("7396");

// EXTERNAL MODULE: external "element-ui/lib/theme-chalk/input.css"
var input_css_ = __webpack_require__("a9f8");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("60bb");

// EXTERNAL MODULE: external "element-ui/lib/table"
var table_ = __webpack_require__("b20a");
var table_default = /*#__PURE__*/__webpack_require__.n(table_);

// EXTERNAL MODULE: external "element-ui/lib/input"
var input_ = __webpack_require__("e67a");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "element-ui/lib/table-column"
var table_column_ = __webpack_require__("7fe6");
var table_column_default = /*#__PURE__*/__webpack_require__.n(table_column_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DataGrid/DataGridColumn.vue?vue&type=script&lang=js&



var DataGridColumn = {
  functional: true,
  render: function render(h, _ref) {
    var scopedSlots = _ref.scopedSlots,
        _ref$props = _ref.props,
        generator = _ref$props.generator,
        options = _ref$props.options;
    var children = [];
    var params = {
      props: generator(options)
    };

    if (options.children && options.children.length) {
      options.children.forEach(function (e) {
        return children.push(h(DataGridColumn, {
          props: {
            generator: generator,
            options: e
          },
          scopedSlots: scopedSlots
        }));
      });
    } else if (options.prop) {
      params.scopedSlots = {
        default: function _default(_ref2) {
          var row = _ref2.row;
          return h('slot', scopedSlots.default ? scopedSlots.default({
            row: row,
            col: options
          }) : []);
        },
        header: function header(ctx) {
          return h('slot', {
            props: {
              name: 'header'
            }
          }, scopedSlots.header ? scopedSlots.header(ctx) : []);
        }
      };
    }

    return h(table_column_default.a, params, children);
  }
};
/* harmony default export */ var DataGridColumnvue_type_script_lang_js_ = (DataGridColumn);
// CONCATENATED MODULE: ./src/components/DataGrid/DataGridColumn.vue?vue&type=script&lang=js&
 /* harmony default export */ var DataGrid_DataGridColumnvue_type_script_lang_js_ = (DataGridColumnvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/DataGrid/DataGridColumn.vue
var DataGridColumn_render, DataGridColumn_staticRenderFns




/* normalize component */

var component = normalizeComponent(
  DataGrid_DataGridColumnvue_type_script_lang_js_,
  DataGridColumn_render,
  DataGridColumn_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DataGrid_DataGridColumn = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DataGrid/DataGrid.vue?vue&type=script&lang=js&






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






/* harmony default export */ var DataGridvue_type_script_lang_js_ = ({
  name: 'data-grid',

  /**
   * @property {Object} sort - объект сортировки
   * @property {String} sort.prop - наименование столбца
   * @property {String} sort.order - порядок сортировки
   * @property {Object} searchModel - модели для полей поиска в колонках
   * @property {Array<Number>} expandModel - коллекция id развернутых строк
   */
  data: function data() {
    return {
      sort: null,
      searchModel: {},
      expandModel: []
    };
  },

  /**
   * @type {Array<Object>} columns - коллекция столбцов
   * @type {Array<Object>} data - коллекция данных
   * @type {Boolean} search - скрыть/показать поля поиска
   * @type {Number} colWidth - минимальная ширина колонки
   * @type {String} colAlign - выравнивание всех колонок по умолчанию
   * @type {Boolean} sortable - сортировка для всех колонок по умолчанию
   */
  props: {
    columns: Array,
    data: Array,
    search: Boolean,
    spanMethod: Function,
    rowClassName: [Function, String],
    colWidth: {
      type: Number,
      default: 150
    },
    colAlign: {
      type: String,
      default: 'left'
    },
    sortable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /**
     * формирует объект свойств для v-bind в компонент el-table-column
     * @param {Object} col - объект столбца
     * @returns {Object}
     */
    bindProps: function bindProps(col) {
      return {
        sortable: (col.sortable || this.sortable) && 'custom',
        sortOrders: ['ascending', 'descending'],
        label: col.label,
        prop: col.prop,
        type: col.type,
        width: col.width || this.colWidth,
        fixed: col.fixed,
        headerAlign: col.align || this.colAlign,
        align: col.align || this.colAlign
      };
    },

    /** @callback для события сортировки */
    onSort: function onSort(_ref) {
      var prop = _ref.prop,
          order = _ref.order;
      this.sort = {
        prop: prop,
        order: order
      };
      this.$emit('grid:sort', this.sort);
    },

    /** @callback для события селект строк */
    onSelect: function onSelect(rows) {
      this.$emit('grid:select', rows);
    },

    /** @callback для события поиска */
    onSearch: function onSearch(val, prop) {
      this.$emit('grid:search', {
        val: val,
        prop: prop
      });
    },

    /** @callback для события развернуть строку */
    onExpand: function onExpand(row, expanded) {
      this.expandModel = Object(external_lodash_["xorBy"])(this.expandModel, [row], function (r) {
        return r.Id;
      });
      this.$emit('grid:expand', {
        row: row,
        expanded: !!expanded.length
      });
    },

    /**
     * добавляет реактивные свойства в data для поиска
     * @param {Number} col - объект столбца
     */
    addSearchModel: function addSearchModel(col) {
      var _this = this;

      if (col.search) this.$set(this.searchModel, [col.prop], '');
      if (col.children) col.children.forEach(function (e) {
        return _this.addSearchModel(e);
      });
    },
    addRowClass: function addRowClass(ctx) {
      var classes = "v-grid__row-".concat(ctx.row.Id, " ");

      if (this.rowClassName) {
        if (typeof this.rowClassName === 'function') {
          classes += this.rowClassName(ctx) || '';
        } else {
          classes += this.rowClassName;
        }
      }

      return classes;
    }
  },
  created: function created() {
    var _this2 = this;

    this.onSearch = Object(external_lodash_["debounce"])(this.onSearch, 200);
    this.columns.forEach(function (col) {
      return _this2.addSearchModel(col);
    });
  },
  components: {
    ElTable: table_default.a,
    ElInput: input_default.a,
    DataGridColumn: DataGrid_DataGridColumn
  }
});
// CONCATENATED MODULE: ./src/components/DataGrid/DataGrid.vue?vue&type=script&lang=js&
 /* harmony default export */ var DataGrid_DataGridvue_type_script_lang_js_ = (DataGridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/DataGrid/DataGrid.vue?vue&type=style&index=0&lang=postcss&
var DataGridvue_type_style_index_0_lang_postcss_ = __webpack_require__("1139");

// CONCATENATED MODULE: ./src/components/DataGrid/DataGrid.vue






/* normalize component */

var DataGrid_component = normalizeComponent(
  DataGrid_DataGridvue_type_script_lang_js_,
  DataGridvue_type_template_id_41a95d92_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DataGrid = (DataGrid_component.exports);
// CONCATENATED MODULE: ./src/components/DataGrid/index.js




DataGrid.install = function (Vue) {
  Vue.component(DataGrid.name, DataGrid);
};


/* harmony default export */ var components_DataGrid = (DataGrid);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport DataGrid */__webpack_require__.d(__webpack_exports__, "DataGrid", function() { return DataGrid; });
/* concated harmony reexport DataGridColumn */__webpack_require__.d(__webpack_exports__, "DataGridColumn", function() { return DataGrid_DataGridColumn; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components_DataGrid);



/***/ })

/******/ });
});
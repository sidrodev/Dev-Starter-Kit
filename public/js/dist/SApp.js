"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcodingphase_dev_kit"] = self["webpackChunkcodingphase_dev_kit"] || []).push([["SApp"],{

/***/ 220:
/*!**************************************************!*\
  !*** ./assets/js/components/svelte/SvelteApp.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.svelte */ 624);\n\nconst app = new _App_svelte__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  target: document.getElementById('app'),\n  props: {\n    name: 'blue'\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://codingphase-dev-kit/./assets/js/components/svelte/SvelteApp.js?");

/***/ }),

/***/ 624:
/*!************************************************!*\
  !*** ./assets/js/components/svelte/App.svelte ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ 234);\n/* harmony import */ var _Header_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.svelte */ 509);\n/* assets/js/components/svelte/App.svelte generated by Svelte v3.55.1 */\n\n\n\n\nfunction add_css(target) {\n\t(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, \"svelte-1mwh9qx\", \"h1.svelte-1mwh9qx{color:red}\");\n}\n\nfunction create_fragment(ctx) {\n\tlet header;\n\tlet t0;\n\tlet div4;\n\tlet current;\n\theader = new _Header_svelte__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({});\n\n\treturn {\n\t\tc() {\n\t\t\t(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(header.$$.fragment);\n\t\t\tt0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();\n\t\t\tdiv4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)(\"div\");\n\n\t\t\tdiv4.innerHTML = `<div class=\"Aligner\"><div class=\"Aligner-item\"><img alt=\"CodingPhase Logo\" src=\"/img/logo.png\"/> \n            <h1 class=\"svelte-1mwh9qx\">Dev-Starter-Kit</h1> \n            <div class=\"menu\"><ul><li><a href=\"http://starterkit.codingphase.com\" target=\"new\">Documentation</a></li> \n                    <li><a href=\"http://www.codingphase.com\" target=\"new\">CodingPhase.Com</a></li></ul></div> \n            <div class=\"version-num\">version 4.0.2</div> \n            <br/> \n            <a class=\"github-button\" href=\"https://github.com/codingphasedotcom/Dev-Starter-Kit\" data-icon=\"octicon-star\" data-style=\"mega\" data-count-href=\"/codingphasedotcom/rocky/stargazers\" data-count-api=\"/repos/codingphasedotcom/rocky#stargazers_count\" data-count-aria-label=\"# stargazers on GitHub\" aria-label=\"Star codingphasedotcom/rocky on GitHub\">Star</a></div></div>`;\n\n\t\t\t(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, \"class\", \"home\");\n\t\t},\n\t\tm(target, anchor) {\n\t\t\t(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(header, target, anchor);\n\t\t\t(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);\n\t\t\t(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div4, anchor);\n\t\t\tcurrent = true;\n\t\t},\n\t\tp: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,\n\t\ti(local) {\n\t\t\tif (current) return;\n\t\t\t(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(header.$$.fragment, local);\n\t\t\tcurrent = true;\n\t\t},\n\t\to(local) {\n\t\t\t(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(header.$$.fragment, local);\n\t\t\tcurrent = false;\n\t\t},\n\t\td(detaching) {\n\t\t\t(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(header, detaching);\n\t\t\tif (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);\n\t\t\tif (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div4);\n\t\t}\n\t};\n}\n\nfunction instance($$self) {\n\tconsole.log('swag');\n\treturn [];\n}\n\nclass App extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {\n\tconstructor(options) {\n\t\tsuper();\n\t\t(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {}, add_css);\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://codingphase-dev-kit/./assets/js/components/svelte/App.svelte?");

/***/ }),

/***/ 509:
/*!***************************************************!*\
  !*** ./assets/js/components/svelte/Header.svelte ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ 234);\n/* assets/js/components/svelte/Header.svelte generated by Svelte v3.55.1 */\n\n\nfunction add_css(target) {\n\t(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, \"svelte-sjsaig\", \"header.svelte-sjsaig{background:#676778;color:red;text-align:center;padding:20px;font-size:1.1rem;font-weight:700;color:white}\");\n}\n\nfunction create_fragment(ctx) {\n\tlet header;\n\n\treturn {\n\t\tc() {\n\t\t\theader = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)(\"header\");\n\t\t\theader.textContent = \"Svelte Setup\";\n\t\t\t(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(header, \"id\", \"header\");\n\t\t\t(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(header, \"class\", \"svelte-sjsaig\");\n\t\t},\n\t\tm(target, anchor) {\n\t\t\t(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, header, anchor);\n\t\t},\n\t\tp: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,\n\t\ti: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,\n\t\to: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,\n\t\td(detaching) {\n\t\t\tif (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(header);\n\t\t}\n\t};\n}\n\nclass Header extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {\n\tconstructor(options) {\n\t\tsuper();\n\t\t(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {}, add_css);\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://codingphase-dev-kit/./assets/js/components/svelte/Header.svelte?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["npm.svelte"], () => (__webpack_exec__(220)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
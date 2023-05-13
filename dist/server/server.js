/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/shared/header.sass":
/*!********************************!*\
  !*** ./src/shared/header.sass ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: sans-serif;\\n  color: #fff;\\n}\\n\\nbody, .header__header--NRHpu {\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n.header__header--NRHpu {\\n  background: coral;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  gap: 18px;\\n}\\n\\n.header__title--pS8X3 {\\n  font-size: 60px;\\n}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header\": \"header__header--NRHpu\",\n\t\"title\": \"header__title--pS8X3\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://m2/./src/shared/header.sass?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n    var list = [];\n    // return the list of modules as css string\n    list.toString = function toString() {\n        return this.map(function (item) {\n            var content = \"\";\n            var needLayer = typeof item[5] !== \"undefined\";\n            if (item[4]) {\n                content += \"@supports (\".concat(item[4], \") {\");\n            }\n            if (item[2]) {\n                content += \"@media \".concat(item[2], \" {\");\n            }\n            if (needLayer) {\n                content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n            }\n            content += cssWithMappingToString(item);\n            if (needLayer) {\n                content += \"}\";\n            }\n            if (item[2]) {\n                content += \"}\";\n            }\n            if (item[4]) {\n                content += \"}\";\n            }\n            return content;\n        }).join(\"\");\n    };\n    // import a list of modules into the list\n    list.i = function i(modules, media, dedupe, supports, layer) {\n        if (typeof modules === \"string\") {\n            modules = [[null, modules, undefined]];\n        }\n        var alreadyImportedModules = {};\n        if (dedupe) {\n            for (var k = 0; k < this.length; k++) {\n                var id = this[k][0];\n                if (id != null) {\n                    alreadyImportedModules[id] = true;\n                }\n            }\n        }\n        for (var _k = 0; _k < modules.length; _k++) {\n            var item = [].concat(modules[_k]);\n            if (dedupe && alreadyImportedModules[item[0]]) {\n                continue;\n            }\n            if (typeof layer !== \"undefined\") {\n                if (typeof item[5] === \"undefined\") {\n                    item[5] = layer;\n                }\n                else {\n                    item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n                    item[5] = layer;\n                }\n            }\n            if (media) {\n                if (!item[2]) {\n                    item[2] = media;\n                }\n                else {\n                    item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n                    item[2] = media;\n                }\n            }\n            if (supports) {\n                if (!item[4]) {\n                    item[4] = \"\".concat(supports);\n                }\n                else {\n                    item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n                    item[4] = supports;\n                }\n            }\n            list.push(item);\n        }\n    };\n    return list;\n};\n\n\n//# sourceURL=webpack://m2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = function (i) {\n    return i[1];\n};\n\n\n//# sourceURL=webpack://m2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.indexTemplate = void 0;\nconst indexTemplate = content => `\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n    <title>Reddit</title>\n</head>\n<body>\n    <div id=\"root\">${content}</div>\n</body>\n</html>\n`;\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack://m2/./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nconst indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nconst Header_1 = __webpack_require__(/*! ../shared/Header */ \"./src/shared/Header.jsx\");\n// Инициализируем приложение\nconst app = (0, express_1.default)();\n// Укарачиваем путь до наших статических файлов\napp.use('/static', express_1.default.static('./dist/client'));\n// Устанавливаем геттер на / и генерируем наше приложение\napp.get('/', (req, res) => {\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, Header_1.Header)())));\n});\n// Устанавливаем слушатель на 3000 порт\napp.listen(3000, () => {\n    console.log(`Server started on http://localhost:3000`);\n});\n\n\n//# sourceURL=webpack://m2/./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Header.jsx":
/*!*******************************!*\
  !*** ./src/shared/Header.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Header = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nconst header_sass_1 = __importDefault(__webpack_require__(/*! ./header.sass */ \"./src/shared/header.sass\"));\nfunction HeaderComponent() {\n    return (react_1.default.createElement(\"header\", { className: header_sass_1.default.header },\n        react_1.default.createElement(\"h1\", { className: header_sass_1.default.title }, \"Hello React\"),\n        react_1.default.createElement(\"h2\", null, \"Getting over it!\"),\n        react_1.default.createElement(\"p\", null, \"I just love it\")));\n}\nexports.Header = (0, root_1.hot)(HeaderComponent);\n\n\n//# sourceURL=webpack://m2/./src/shared/Header.jsx?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react-hot-loader/root");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;
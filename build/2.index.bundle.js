(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Pages/lobby/style.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Pages/lobby/style.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".lobby {\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column; }\\n  .lobby__title {\\n    margin-bottom: 20px;\\n    font-size: 36px;\\n    text-align: center; }\\n  .lobby__content {\\n    display: grid;\\n    grid-template-columns: repeat(2, 200px);\\n    grid-column-gap: 40px;\\n    align-items: center;\\n    justify-content: center; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/Pages/lobby/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/image-link/style.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/image-link/style.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".image-link {\\n  cursor: pointer; }\\n  .image-link:hover {\\n    box-shadow: 3px 3px 12px gray; }\\n  .image-link img {\\n    width: 100%; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/image-link/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/Pages/lobby/index.js":
/*!**********************************!*\
  !*** ./src/Pages/lobby/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _route_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../route/config */ \"./src/route/config.js\");\n/* harmony import */ var _components_image_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/image-link */ \"./src/components/image-link/index.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ \"./src/Pages/lobby/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar TIC_TAC_TOC = _route_config__WEBPACK_IMPORTED_MODULE_2__[\"PathEnums\"].TIC_TAC_TOC,\n    GOMOKU = _route_config__WEBPACK_IMPORTED_MODULE_2__[\"PathEnums\"].GOMOKU;\nvar propTypes = {\n  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n\nfunction Lobby(_ref) {\n  var history = _ref.history;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"lobby\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"lobby__title\"\n  }, \" \\u8ACB\\u9078\\u64C7\\u904A\\u6232 \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"lobby__content\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_image_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    imageSrc: 'https://lh3.googleusercontent.com/AswZr3s2goU6BxNLCcPkV9AANJEIGh7we_8tv5LS7d6vCiyTGeS67nVfVSbZJEzC4mw',\n    onClick: function onClick() {\n      history.push(TIC_TAC_TOC);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_image_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    imageSrc: 'http://587.renju.org.tw/p/4.jpg',\n    onClick: function onClick() {\n      history.push(GOMOKU);\n    }\n  })));\n}\n\nLobby.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lobby);\n\n//# sourceURL=webpack:///./src/Pages/lobby/index.js?");

/***/ }),

/***/ "./src/Pages/lobby/style.scss":
/*!************************************!*\
  !*** ./src/Pages/lobby/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Pages/lobby/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/Pages/lobby/style.scss?");

/***/ }),

/***/ "./src/components/image-link/index.js":
/*!********************************************!*\
  !*** ./src/components/image-link/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/components/image-link/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar propTypes = {};\n\nfunction ImageLink(_ref) {\n  var imageSrc = _ref.imageSrc,\n      onClick = _ref.onClick;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"image-link\",\n    onClick: onClick\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: imageSrc\n  }));\n}\n\nImageLink.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageLink);\n\n//# sourceURL=webpack:///./src/components/image-link/index.js?");

/***/ }),

/***/ "./src/components/image-link/style.scss":
/*!**********************************************!*\
  !*** ./src/components/image-link/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/image-link/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/image-link/style.scss?");

/***/ })

}]);
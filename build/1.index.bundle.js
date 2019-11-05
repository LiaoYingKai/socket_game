(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/button/style.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/button/style.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".button {\\n  font-size: 20px;\\n  padding: 5px 12px;\\n  border: none;\\n  border-radius: 6px;\\n  background-color: #018478;\\n  color: #fff;\\n  cursor: pointer; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/button/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/checkerboard/style.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/checkerboard/style.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".checkerboard__tic-tac-toc {\\n  display: grid;\\n  grid-template-columns: repeat(3, 100px); }\\n  .checkerboard__tic-tac-toc .lattice-tic-tac-toc {\\n    border-top: none;\\n    border-left: none; }\\n    .checkerboard__tic-tac-toc .lattice-tic-tac-toc:nth-child(3n) {\\n      border-right: none; }\\n    .checkerboard__tic-tac-toc .lattice-tic-tac-toc:nth-child(7), .checkerboard__tic-tac-toc .lattice-tic-tac-toc:nth-child(8), .checkerboard__tic-tac-toc .lattice-tic-tac-toc:nth-child(9) {\\n      border-bottom: none; }\\n\\n.checkerboard__gomoku {\\n  display: grid;\\n  grid-template-columns: repeat(20, 30px); }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/checkerboard/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/lattice/gomoku/style.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/lattice/gomoku/style.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".lattice-gomoku {\\n  background-color: #cd9b4d;\\n  width: 30px;\\n  height: 30px;\\n  position: relative;\\n  cursor: pointer; }\\n  .lattice-gomoku::after, .lattice-gomoku::before {\\n    content: '';\\n    display: inline-block;\\n    background-color: #4b2f25;\\n    width: 30px;\\n    height: 3px;\\n    position: absolute;\\n    margin: auto;\\n    top: 0;\\n    bottom: 0;\\n    left: 0;\\n    right: 0; }\\n  .lattice-gomoku::after {\\n    transform: rotate(90deg);\\n    width: 31px; }\\n  .lattice-gomoku__block, .lattice-gomoku__white {\\n    width: 24px;\\n    height: 24px;\\n    position: absolute;\\n    margin: auto;\\n    top: 0;\\n    bottom: 0;\\n    left: 0;\\n    right: 0;\\n    border-radius: 50%;\\n    z-index: 2; }\\n  .lattice-gomoku__block {\\n    background-color: #000; }\\n  .lattice-gomoku__white {\\n    background-color: #fff; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/lattice/gomoku/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/lattice/tic-tac-toc/style.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/lattice/tic-tac-toc/style.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".lattice-tic-tac-toc {\\n  width: 100px;\\n  height: 100px;\\n  border: 5px solid #000;\\n  box-sizing: border-box;\\n  position: relative;\\n  cursor: pointer; }\\n  .lattice-tic-tac-toc__circle:before {\\n    content: '';\\n    display: inline-block;\\n    border: 10px blue solid;\\n    box-sizing: border-box;\\n    border-radius: 50%;\\n    width: 80px;\\n    height: 80px;\\n    position: absolute;\\n    margin: auto;\\n    top: 0;\\n    bottom: 0;\\n    left: 0;\\n    right: 0; }\\n  .lattice-tic-tac-toc__fork:before, .lattice-tic-tac-toc__fork:after {\\n    content: '';\\n    display: inline-block;\\n    width: 90px;\\n    height: 10px;\\n    background-color: red;\\n    position: absolute;\\n    border-radius: 3px; }\\n  .lattice-tic-tac-toc__fork:before {\\n    transform: rotate(135deg) translate(50%, 50%);\\n    left: 40px;\\n    top: 18px; }\\n  .lattice-tic-tac-toc__fork:after {\\n    transform: rotate(45deg) translate(50%, 50%);\\n    right: 27px;\\n    top: 11px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/lattice/tic-tac-toc/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/loading/style.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/loading/style.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".lds-ellipsis {\\n  display: inline-flex;\\n  position: relative;\\n  width: 64px;\\n  height: 32px; }\\n  .lds-ellipsis div {\\n    position: absolute;\\n    bottom: 0;\\n    width: 11px;\\n    height: 11px;\\n    border-radius: 50%;\\n    background: #018478;\\n    animation-timing-function: cubic-bezier(0, 1, 1, 0); }\\n\\n.lds-ellipsis div:nth-child(1) {\\n  left: 6px;\\n  animation: lds-ellipsis1 0.6s infinite; }\\n\\n.lds-ellipsis div:nth-child(2) {\\n  left: 6px;\\n  animation: lds-ellipsis2 0.6s infinite; }\\n\\n.lds-ellipsis div:nth-child(3) {\\n  left: 26px;\\n  animation: lds-ellipsis2 0.6s infinite; }\\n\\n.lds-ellipsis div:nth-child(4) {\\n  left: 45px;\\n  animation: lds-ellipsis3 0.6s infinite; }\\n\\n@keyframes lds-ellipsis1 {\\n  0% {\\n    transform: scale(0); }\\n  100% {\\n    transform: scale(1); } }\\n\\n@keyframes lds-ellipsis3 {\\n  0% {\\n    transform: scale(1); }\\n  100% {\\n    transform: scale(0); } }\\n\\n@keyframes lds-ellipsis2 {\\n  0% {\\n    transform: translate(0, 0); }\\n  100% {\\n    transform: translate(19px, 0); } }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/loading/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/message/style.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/message/style.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".message {\\n  display: none;\\n  position: fixed;\\n  z-index: 3;\\n  width: 100vw;\\n  height: 100vh;\\n  background-color: rgba(0, 0, 0, 0.4);\\n  justify-content: center;\\n  align-items: center; }\\n  .message__open {\\n    display: flex; }\\n  .message__content {\\n    width: 300px;\\n    background-color: #fff;\\n    padding: 16px 24px;\\n    box-sizing: border-box;\\n    text-align: center;\\n    border-radius: 5px; }\\n    .message__content > p {\\n      margin-top: 0;\\n      margin-bottom: 0px;\\n      font-size: 24px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/message/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/style.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/style.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".modal {\\n  display: none;\\n  position: fixed;\\n  z-index: 3;\\n  width: 100vw;\\n  height: 100vh;\\n  background-color: rgba(0, 0, 0, 0.4);\\n  justify-content: center;\\n  align-items: center; }\\n  .modal__open {\\n    display: flex; }\\n  .modal__content {\\n    width: 300px;\\n    background-color: #fff;\\n    padding: 16px 24px;\\n    box-sizing: border-box;\\n    text-align: center;\\n    border-radius: 5px; }\\n    .modal__content > p {\\n      margin-top: 0;\\n      margin-bottom: 16px;\\n      font-size: 32px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/modal/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/play-title/style.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/play-title/style.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".play-title {\\n  margin-bottom: 10px;\\n  font-size: 28px;\\n  text-align: center; }\\n  .play-title--loading {\\n    display: flex;\\n    align-items: center; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/play-title/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/components/button/index.js":
/*!****************************************!*\
  !*** ./src/components/button/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./src/components/button/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar propTypes = {\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n\nfunction Button(_ref) {\n  var onClick = _ref.onClick,\n      children = _ref.children,\n      className = _ref.className;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: onClick,\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'button')\n  }, children);\n}\n\nButton.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack:///./src/components/button/index.js?");

/***/ }),

/***/ "./src/components/button/style.scss":
/*!******************************************!*\
  !*** ./src/components/button/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/button/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/button/style.scss?");

/***/ }),

/***/ "./src/components/checkerboard/index.js":
/*!**********************************************!*\
  !*** ./src/components/checkerboard/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums */ \"./src/enums/index.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./src/components/checkerboard/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar PLAY_1 = _enums__WEBPACK_IMPORTED_MODULE_2__[\"PlayEnums\"].PLAY_1,\n    PLAY_2 = _enums__WEBPACK_IMPORTED_MODULE_2__[\"PlayEnums\"].PLAY_2;\nvar TypeEnums = {\n  TIC_TAC_TOC: 'tic-tac-toc',\n  GOMOKU: 'gomoku'\n};\nvar TIC_TAC_TOC = TypeEnums.TIC_TAC_TOC,\n    GOMOKU = TypeEnums.GOMOKU;\nvar propTypes = {\n  checkerboard: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  Lattice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,\n  play1: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  play2: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([TIC_TAC_TOC, GOMOKU])\n};\n\nfunction checkerboard(_ref) {\n  var Lattice = _ref.Lattice,\n      checkerboard = _ref.checkerboard,\n      _onClick = _ref.onClick,\n      play1 = _ref.play1,\n      play2 = _ref.play2,\n      type = _ref.type;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"checkerboard__\".concat(type)\n  }, checkerboard.map(function (row, rowIndex) {\n    return row.map(function (item, columnIndex) {\n      var status;\n\n      if (item === PLAY_1) {\n        status = play1;\n      }\n\n      if (item === PLAY_2) {\n        status = play2;\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lattice, {\n        key: \"\".concat(rowIndex, \"__\").concat(columnIndex),\n        onClick: function onClick() {\n          return _onClick(rowIndex, columnIndex);\n        },\n        status: status\n      });\n    });\n  }));\n}\n\ncheckerboard.propTypes = propTypes;\ncheckerboard.TypeEnums = TypeEnums;\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkerboard);\n\n//# sourceURL=webpack:///./src/components/checkerboard/index.js?");

/***/ }),

/***/ "./src/components/checkerboard/style.scss":
/*!************************************************!*\
  !*** ./src/components/checkerboard/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/checkerboard/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/checkerboard/style.scss?");

/***/ }),

/***/ "./src/components/lattice/gomoku/index.js":
/*!************************************************!*\
  !*** ./src/components/lattice/gomoku/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/components/lattice/gomoku/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar PREFIX_CLASS = \"lattice-gomoku\";\nvar GomokuStatusEnums = {\n  NONE: 'none',\n  BLOCK: 'block',\n  WHITE: 'white'\n};\nvar NONE = GomokuStatusEnums.NONE,\n    BLOCK = GomokuStatusEnums.BLOCK,\n    WHITE = GomokuStatusEnums.WHITE;\nvar propTypes = {\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([NONE, BLOCK, WHITE])\n};\n\nfunction Gomoku(_ref) {\n  var onClick = _ref.onClick,\n      status = _ref.status;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: PREFIX_CLASS,\n    onClick: onClick\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"\".concat(PREFIX_CLASS, \"__\").concat(status)\n  }));\n}\n\nGomoku.propTypes = propTypes;\nGomoku.GomokuStatusEnums = GomokuStatusEnums;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gomoku);\n\n//# sourceURL=webpack:///./src/components/lattice/gomoku/index.js?");

/***/ }),

/***/ "./src/components/lattice/gomoku/style.scss":
/*!**************************************************!*\
  !*** ./src/components/lattice/gomoku/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/lattice/gomoku/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/lattice/gomoku/style.scss?");

/***/ }),

/***/ "./src/components/lattice/index.js":
/*!*****************************************!*\
  !*** ./src/components/lattice/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tic_tac_toc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tic-tac-toc */ \"./src/components/lattice/tic-tac-toc/index.js\");\n/* harmony import */ var _gomoku__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gomoku */ \"./src/components/lattice/gomoku/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  TicTacToc: _tic_tac_toc__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  Gomoku: _gomoku__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/components/lattice/index.js?");

/***/ }),

/***/ "./src/components/lattice/tic-tac-toc/index.js":
/*!*****************************************************!*\
  !*** ./src/components/lattice/tic-tac-toc/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./src/components/lattice/tic-tac-toc/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar PREFIX_CLASS = \"lattice-tic-tac-toc\";\nvar LatticeStatusEnums = {\n  NONE: 'none',\n  CIRCLE: 'circle',\n  FORK: 'fork'\n};\nvar propTypes = {\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(Object.values(LatticeStatusEnums))\n};\nvar defaultProps = {\n  onClick: function onClick() {},\n  status: LatticeStatusEnums.NONE\n};\n\nfunction Lattice(_ref) {\n  var onClick = _ref.onClick,\n      status = _ref.status;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(PREFIX_CLASS, \"\".concat(PREFIX_CLASS, \"__\").concat(status)),\n    onClick: onClick\n  });\n}\n\nLattice.propTypes = propTypes;\nLattice.LatticeStatusEnums = LatticeStatusEnums;\nLattice.defaultProps = defaultProps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lattice);\n\n//# sourceURL=webpack:///./src/components/lattice/tic-tac-toc/index.js?");

/***/ }),

/***/ "./src/components/lattice/tic-tac-toc/style.scss":
/*!*******************************************************!*\
  !*** ./src/components/lattice/tic-tac-toc/style.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/lattice/tic-tac-toc/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/lattice/tic-tac-toc/style.scss?");

/***/ }),

/***/ "./src/components/loading/index.js":
/*!*****************************************!*\
  !*** ./src/components/loading/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/components/loading/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar propTypes = {};\n\nfunction Loading() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"lds-ellipsis\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null));\n}\n\nLoading.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);\n\n//# sourceURL=webpack:///./src/components/loading/index.js?");

/***/ }),

/***/ "./src/components/loading/style.scss":
/*!*******************************************!*\
  !*** ./src/components/loading/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/loading/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/loading/style.scss?");

/***/ }),

/***/ "./src/components/message/index.js":
/*!*****************************************!*\
  !*** ./src/components/message/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./src/components/message/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar PREFIX_CLASS = 'message';\nvar propTypes = {\n  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  isVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n};\n\nfunction Message(_ref) {\n  var isVisible = _ref.isVisible,\n      message = _ref.message;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(PREFIX_CLASS, _defineProperty({}, \"\".concat(PREFIX_CLASS, \"__open\"), isVisible))\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"\".concat(PREFIX_CLASS, \"__content\")\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, message)));\n}\n\nMessage.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\n\n//# sourceURL=webpack:///./src/components/message/index.js?");

/***/ }),

/***/ "./src/components/message/style.scss":
/*!*******************************************!*\
  !*** ./src/components/message/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/message/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/message/style.scss?");

/***/ }),

/***/ "./src/components/modal/index.js":
/*!***************************************!*\
  !*** ./src/components/modal/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ \"./src/components/button/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ \"./src/components/modal/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar PREFIX_CLASS = 'modal';\nvar propTypes = {\n  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  isVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n};\nvar defaultProps = {\n  onClick: function onClick() {}\n};\n\nfunction Modal(_ref) {\n  var isVisible = _ref.isVisible,\n      message = _ref.message,\n      onClick = _ref.onClick;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(PREFIX_CLASS, _defineProperty({}, \"\".concat(PREFIX_CLASS, \"__open\"), isVisible))\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"\".concat(PREFIX_CLASS, \"__content\")\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, message), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onClick: onClick\n  }, \" \\u78BA \\u5B9A \")));\n}\n\nModal.propTypes = propTypes;\nModal.defaultProps = defaultProps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\n//# sourceURL=webpack:///./src/components/modal/index.js?");

/***/ }),

/***/ "./src/components/modal/style.scss":
/*!*****************************************!*\
  !*** ./src/components/modal/style.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/modal/style.scss?");

/***/ }),

/***/ "./src/components/play-title/index.js":
/*!********************************************!*\
  !*** ./src/components/play-title/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums */ \"./src/enums/index.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading */ \"./src/components/loading/index.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ \"./src/components/play-title/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar NONE = _enums__WEBPACK_IMPORTED_MODULE_2__[\"PlayStatus\"].NONE,\n    LOADING = _enums__WEBPACK_IMPORTED_MODULE_2__[\"PlayStatus\"].LOADING,\n    PLAYING = _enums__WEBPACK_IMPORTED_MODULE_2__[\"PlayStatus\"].PLAYING;\nvar propTypes = {\n  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([NONE, LOADING, PLAYING]),\n  play: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  nowPlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])\n};\n\nfunction PlayTitle(_ref) {\n  var status = _ref.status,\n      play = _ref.play,\n      nowPlay = _ref.nowPlay;\n\n  function _renderTitle() {\n    switch (status) {\n      case NONE:\n        {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \" \\u8ACB\\u6309\\u958B\\u59CB\\u904A\\u6232 \");\n        }\n\n      case LOADING:\n        {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n            className: \"play-title--loading\"\n          }, \" \\u7B49\\u5F85\\u53E6\\u4E00\\u4F4D\\u73A9\\u5BB6 \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), \" \");\n        }\n\n      case PLAYING:\n        {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"\\u4F60\\u662F \", play, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"\\u73FE\\u5728\\u662F \", nowPlay, \" \\u4E0B\");\n        }\n\n      default:\n        {\n          return null;\n        }\n    }\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"play-title\"\n  }, _renderTitle());\n}\n\nPlayTitle.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayTitle);\n\n//# sourceURL=webpack:///./src/components/play-title/index.js?");

/***/ }),

/***/ "./src/components/play-title/style.scss":
/*!**********************************************!*\
  !*** ./src/components/play-title/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/play-title/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/play-title/style.scss?");

/***/ }),

/***/ "./src/enums/index.js":
/*!****************************!*\
  !*** ./src/enums/index.js ***!
  \****************************/
/*! exports provided: PlayEnums, PlayStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayEnums\", function() { return PlayEnums; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayStatus\", function() { return PlayStatus; });\nvar PlayEnums = {\n  PLAY_1: 'o',\n  PLAY_2: 'x'\n};\nvar PlayStatus = {\n  NONE: 'none',\n  LOADING: 'loading',\n  PLAYING: 'playing'\n};\n\n//# sourceURL=webpack:///./src/enums/index.js?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///ws_(ignored)?");

/***/ })

}]);
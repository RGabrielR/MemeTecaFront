(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/apollo.js":
/*!**************************!*\
  !*** ./config/apollo.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);


const clinet = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache(),
  link: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({
    uri: 'https://mysterious-woodland-26162.herokuapp.com/',
    fetch: (node_fetch__WEBPACK_IMPORTED_MODULE_1___default())
  })
});
/* harmony default export */ __webpack_exports__["default"] = (clinet);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/apollo */ "./config/apollo.js");
/* harmony import */ var _componentes_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componentes/style.css */ "./componentes/style.css");
/* harmony import */ var _componentes_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_componentes_style_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\codigos\\MemeTeca\\meme-front\\pages\\_app.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function MyApp({
  Component,
  pageProps
}) {
  return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {
    client: _config_apollo__WEBPACK_IMPORTED_MODULE_3__.default,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./componentes/style.css":
/*!*******************************!*\
  !*** ./componentes/style.css ***!
  \*******************************/
/***/ (function() {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("node-fetch");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZW1lLWZyb250Ly4vY29uZmlnL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly9tZW1lLWZyb250Ly4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9tZW1lLWZyb250L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9tZW1lLWZyb250L2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovL21lbWUtZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImNsaW5ldCIsIkFwb2xsb0NsaWVudCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImZldGNoIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsd0RBQUosQ0FBaUI7QUFDNUJDLE9BQUssRUFBRSxJQUFJQyx5REFBSixFQURxQjtBQUU1QkMsTUFBSSxFQUFFLElBQUlDLG9EQUFKLENBQWE7QUFDZkMsT0FBRyxFQUFFLGtEQURVO0FBRWZDLFNBQUtBO0FBRlUsR0FBYjtBQUZzQixDQUFqQixDQUFmO0FBUUEsK0RBQWVQLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU1EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBRXZDLFNBQ0EsTUFBQywwREFBRDtBQUFnQixVQUFNLEVBQUVWLG1EQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxTQUFELGVBQWVVLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURBLENBREE7QUFNRDs7QUFFRCwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBvbGxvQ2xpZW50LCBIdHRwTGluaywgSW5NZW1vcnlDYWNoZX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XHJcblxyXG5jb25zdCBjbGluZXQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG4gICAgbGluazogbmV3IEh0dHBMaW5rKHtcclxuICAgICAgICB1cmk6ICdodHRwczovL215c3RlcmlvdXMtd29vZGxhbmQtMjYxNjIuaGVyb2t1YXBwLmNvbS8nLFxyXG4gICAgICAgIGZldGNoXHJcbiAgICB9KVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaW5ldDsiLCJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IGNsaW5ldCBmcm9tICcuLi9jb25maWcvYXBvbGxvJ1xuaW1wb3J0ICcuLi9jb21wb25lbnRlcy9zdHlsZS5jc3MnXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgXG4gIHJldHVybiggXG4gIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaW5ldH0+IFxuICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+IFxuICA8L0Fwb2xsb1Byb3ZpZGVyPlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
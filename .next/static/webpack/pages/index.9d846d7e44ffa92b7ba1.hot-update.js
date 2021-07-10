self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _componentes_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componentes/layout */ "./componentes/layout.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\codigos\\MemeTeca\\meme-front\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_3___default().createElement);

function _templateObject() {
  var data = (0,D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  query memesMasComentados {\n    memesMasComentados {\n      total\n      meme {\n        _id\n        imagen\n        nombre\n        descripcion\n        creado\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var MEMES_MAS_COMENTADOS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.gql)(_templateObject());
function Home() {
  _s();

  var _this = this;

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(MEMES_MAS_COMENTADOS),
      data = _useQuery.data,
      loading = _useQuery.loading;

  if (loading || !data) return __jsx("div", {
    className: "lds-hourglass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 32
    }
  });

  var imagenMeme = function imagenMeme(imagen) {
    if (!imagen) {
      return "null";
    } else return imagen;
  };

  var verMeme = /*#__PURE__*/function () {
    var _ref = (0,D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {
      return D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return next_router__WEBPACK_IMPORTED_MODULE_5___default().push({
                pathname: "/meme/[id]",
                query: {
                  id: id
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function verMeme(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(_componentes_layout__WEBPACK_IMPORTED_MODULE_4__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex flex-col  items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "Titulo-Principal mt-10 bg-yellow-800 text-white px-5 shadow-2xl rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "MemeTeca"), __jsx("h1", {
    className: "Titulo-Principal waves",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "el registro de memes de la internet"), __jsx("h1", {
    className: "text-2xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Memes mas comentados"), __jsx("div", {
    className: "flex flex-wrap grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, data.memesMasComentados.map(function (mtop) {
    var _mtop$meme$ = mtop.meme[0],
        nombre = _mtop$meme$.nombre,
        imagen = _mtop$meme$.imagen,
        descripcion = _mtop$meme$.descripcion,
        _id = _mtop$meme$._id;
    return __jsx("div", {
      className: "flex justify-between m-6  ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "flex flex-col h-full max-w-lg mx-auto bg-red-800 rounded-lg pb-4 carta-animada",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, __jsx("img", {
      className: "rounded-lg rounded-b-none misma-altura ",
      src: imagenMeme(imagen),
      onError: function onError(e) {
        e.target.onerror = null;
        e.target.src = "/default.jpg";
      },
      alt: "thumbnail",
      loading: "lazy",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: "flex justify-between -mt-4 px-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, __jsx("svg", {
      className: "w-6 h-6",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 23
      }
    }, __jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }
    })), __jsx("p", {
      className: "text-blue-500 font-semibold text-xs",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 23
      }
    }, mtop.total, " comentarios"))), __jsx("div", {
      className: "py-2 px-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 19
      }
    }, __jsx("h1", {
      onClick: function onClick() {
        return verMeme(_id);
      },
      className: "text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }
    }, nombre)), __jsx("div", {
      className: "px-4 space-y-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 19
      }
    }, __jsx("p", {
      className: "text-gray-400 font-normal leading-5 tracking-wide",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }, descripcion))));
  }))));
}

_s(Home, "uHu6+Av6iz/Cemw652GCrFuaHvo=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTUVNRVNfTUFTX0NPTUVOVEFET1MiLCJncWwiLCJIb21lIiwidXNlUXVlcnkiLCJkYXRhIiwibG9hZGluZyIsImltYWdlbk1lbWUiLCJpbWFnZW4iLCJ2ZXJNZW1lIiwiaWQiLCJSb3V0ZXIiLCJwYXRobmFtZSIsInF1ZXJ5IiwibWVtZXNNYXNDb21lbnRhZG9zIiwibWFwIiwibXRvcCIsIm1lbWUiLCJub21icmUiLCJkZXNjcmlwY2lvbiIsIl9pZCIsImUiLCJ0YXJnZXQiLCJvbmVycm9yIiwic3JjIiwidG90YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHQyxtREFBSCxtQkFBMUI7QUFlZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0hDLHdEQUFRLENBQUNILG9CQUFELENBREw7QUFBQSxNQUNyQkksSUFEcUIsYUFDckJBLElBRHFCO0FBQUEsTUFDZkMsT0FEZSxhQUNmQSxPQURlOztBQUU3QixNQUFJQSxPQUFPLElBQUksQ0FBQ0QsSUFBaEIsRUFBc0IsT0FBTztBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDs7QUFDdEIsTUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsTUFBRCxFQUFZO0FBQzdCLFFBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1gsYUFBTyxNQUFQO0FBQ0QsS0FGRCxNQUVPLE9BQU9BLE1BQVA7QUFDUixHQUpEOztBQU1BLE1BQU1DLE9BQU87QUFBQSw2UUFBRyxpQkFBT0MsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDUkMsdURBQUEsQ0FBWTtBQUNoQkMsd0JBQVEsRUFBRSxZQURNO0FBRWhCQyxxQkFB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LE9BSUdGLE1BSkgsQ0FERixDQWhDRixFQXdDRTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsbURBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQyxXQURILENBREYsQ0F4Q0YsQ0FERixDQURGO0FBa0RELEdBcERBLENBREgsQ0FSRixDQURGLENBREY7QUFvRUQ7O0dBbkZ1QmhCLEk7VUFDSUMsb0Q7OztLQURKRCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlkODQ2ZDdlNDRmZmE5MmI3YmExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRlcy9sYXlvdXRcIjtcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IE1FTUVTX01BU19DT01FTlRBRE9TID0gZ3FsYFxuICBxdWVyeSBtZW1lc01hc0NvbWVudGFkb3Mge1xuICAgIG1lbWVzTWFzQ29tZW50YWRvcyB7XG4gICAgICB0b3RhbFxuICAgICAgbWVtZSB7XG4gICAgICAgIF9pZFxuICAgICAgICBpbWFnZW5cbiAgICAgICAgbm9tYnJlXG4gICAgICAgIGRlc2NyaXBjaW9uXG4gICAgICAgIGNyZWFkb1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShNRU1FU19NQVNfQ09NRU5UQURPUyk7XG4gIGlmIChsb2FkaW5nIHx8ICFkYXRhKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsZHMtaG91cmdsYXNzXCI+PC9kaXY+O1xuICBjb25zdCBpbWFnZW5NZW1lID0gKGltYWdlbikgPT4ge1xuICAgIGlmICghaW1hZ2VuKSB7XG4gICAgICByZXR1cm4gXCJudWxsXCI7XG4gICAgfSBlbHNlIHJldHVybiBpbWFnZW47XG4gIH07XG5cbiAgY29uc3QgdmVyTWVtZSA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGF3YWl0IFJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiBcIi9tZW1lL1tpZF1cIixcbiAgICAgIHF1ZXJ5OiB7IGlkIH0sXG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCAgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJUaXR1bG8tUHJpbmNpcGFsIG10LTEwIGJnLXllbGxvdy04MDAgdGV4dC13aGl0ZSBweC01IHNoYWRvdy0yeGwgcm91bmRlZFwiPlxuICAgICAgICAgIE1lbWVUZWNhXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJUaXR1bG8tUHJpbmNpcGFsIHdhdmVzXCI+XG4gICAgICAgICAgZWwgcmVnaXN0cm8gZGUgbWVtZXMgZGUgbGEgaW50ZXJuZXRcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+TWVtZXMgbWFzIGNvbWVudGFkb3M8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdyaWQgc206Z3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICB7ZGF0YS5tZW1lc01hc0NvbWVudGFkb3MubWFwKChtdG9wKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IG5vbWJyZSwgaW1hZ2VuLCBkZXNjcmlwY2lvbiwgX2lkIH0gPSBtdG9wLm1lbWVbMF07XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG0tNiAgXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtZnVsbCBtYXgtdy1sZyBteC1hdXRvIGJnLXJlZC04MDAgcm91bmRlZC1sZyBwYi00IGNhcnRhLWFuaW1hZGFcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyByb3VuZGVkLWItbm9uZSBtaXNtYS1hbHR1cmEgXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZW5NZW1lKGltYWdlbil9XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQub25lcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3JjID0gXCIvZGVmYXVsdC5qcGdcIjtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwidGh1bWJuYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gLW10LTQgcHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGgtbWluIHNwYWNlLXgtMSBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIHRleHQtZ3JheS00MDAgYmctZ3JheS04MDAgcHktMSBweC0yIHRleHQteHMgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTggMTJoLjAxTTEyIDEyaC4wMU0xNiAxMmguMDFNMjEgMTJjMCA0LjQxOC00LjAzIDgtOSA4YTkuODYzIDkuODYzIDAgMDEtNC4yNTUtLjk0OUwzIDIwbDEuMzk1LTMuNzJDMy41MTIgMTUuMDQyIDMgMTMuNTc0IDMgMTJjMC00LjQxOCA0LjAzLTggOS04czkgMy41ODIgOSA4elwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgZm9udC1zZW1pYm9sZCB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bXRvcC50b3RhbH0gY29tZW50YXJpb3NcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdmVyTWVtZShfaWQpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gbGVhZGluZy02IHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LWJsdWUtNTAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtub21icmV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBmb250LW5vcm1hbCBsZWFkaW5nLTUgdHJhY2tpbmctd2lkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwY2lvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
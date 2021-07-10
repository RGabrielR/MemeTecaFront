self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./componentes/Sidebar.js":
/*!********************************!*\
  !*** ./componentes/Sidebar.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\codigos\\MemeTeca\\meme-front\\componentes\\Sidebar.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_4___default().createElement);

function _templateObject2() {
  var data = (0,D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  mutation eliminarCategoria($id: ID!) {\n    eliminarCategoria(id: $id)\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  query obtenerCategorias {\n    obtenerCategorias {\n      id\n      nombre\n      descripcion\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var OBTENER_CATEGORIAS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.gql)(_templateObject());
var ELIMINAR_CATEGORIA = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.gql)(_templateObject2());

var Sidebar = function Sidebar() {
  _s();

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(OBTENER_CATEGORIAS),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error,
      refetch = _useQuery.refetch;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(ELIMINAR_CATEGORIA),
      _useMutation2 = (0,D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useMutation, 1),
      eliminarCategoria = _useMutation2[0];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),
      barra = _useState[0],
      setBarra = _useState[1];

  var barraClase = "bg-yellow-900  xl:w-1/5  ";
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (barra == true) {
      barraClase.replace("bg-yellow-900  xl:w-1/5  barra-lateral", "bg-yellow-900  xl:w-1/5  barra-activa");
    }

    if (barra == false) {
      barraClase = "bg-yellow-900  xl:w-1/5  barra-lateral";
    }
  });
  if (loading || !data) return __jsx("div", {
    className: "lds-hourglass",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 32
    }
  });
  var tokenAutorizado = localStorage.getItem("token");

  if (!tokenAutorizado) {
    next_router__WEBPACK_IMPORTED_MODULE_6___default().push("/autenticarse");
  }

  var verCategoria = /*#__PURE__*/function () {
    var _ref = (0,D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {
      return D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
                pathname: "/categoria/[id]",
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

    return function verCategoria(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var editarCategoria = /*#__PURE__*/function () {
    var _ref2 = (0,D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
      return D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
                pathname: "/editarcategoria/[id]",
                query: {
                  id: id
                }
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function editarCategoria(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var confirmarEliminarCategoria = function confirmarEliminarCategoria(idCategoria) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
      title: "Seguro quieres eliminar esta categoria?",
      text: "no lo podras revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, mandale ura!"
    }).then( /*#__PURE__*/function () {
      var _ref3 = (0,D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(result) {
        var _yield$eliminarCatego, _data;

        return D_codigos_MemeTeca_meme_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!result.value) {
                  _context3.next = 13;
                  break;
                }

                _context3.prev = 1;
                _context3.next = 4;
                return eliminarCategoria({
                  variables: {
                    id: idCategoria
                  }
                });

              case 4:
                _yield$eliminarCatego = _context3.sent;
                _data = _yield$eliminarCatego.data;
                refetch();
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire("Eliminado!", _data.eliminarCategoria, "success");
                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](1);
                console.log(_context3.t0);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 10]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, __jsx("div", {
    onClick: function onClick() {
      return setBarra(!barra);
    },
    className: "hamburguesa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: barra ? "linea1" : "linea1b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: barra ? "linea2" : "linea2b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: barra ? "linea3" : "linea3b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  })), __jsx("aside", {
    className: barra ? "bg-yellow-900 md:w-1/4 lg:w-1/5  barra-lateral" : "bg-yellow-900  xl:w-1/5  barra-activa",
    id: "barra",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "barraLateral",
    className: "flex flex-row bg-yellow-700 hover:bg-gray-800 cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
    src: "/MemeTeca.png",
    className: "logo",
    width: 127,
    height: 137,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }), __jsx("h1", {
    className: "text-white font-bold text-xl  mt-2 p-5  titulo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "MemeTeca"))), __jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
    href: "/nuevaCategoria",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "bg-gray-500 hover:bg-gray-400 text-white text-3xl font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded ml-2 mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, "Crear Categoria")), __jsx("h1", {
    className: "text-white font-bold text-xl pl-7 mt-2 hover:text-gray-900 cursor-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, "Categorias de Memes"), __jsx("nav", {
    className: " mt-5 list-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, data.obtenerCategorias.map(function (categoria) {
    return __jsx("div", {
      className: "flex flex-row justify-between items-center",
      key: categoria.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }, __jsx("li", {
      className: "text-white text-justify font-bold ml-4 pb-3 hover:text-black cursor-pointer py-2",
      onClick: function onClick() {
        return verCategoria(categoria.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 15
      }
    }, categoria.nombre), __jsx("div", {
      className: "-mb-2 pr-4 flex flex-nowrap  self-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 15
      }
    }, __jsx("button", {
      onClick: function onClick() {
        return confirmarEliminarCategoria(categoria.id);
      },
      className: "rounded-full w-6 h-6 bg-red-700 hover:bg-red-900",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }
    }, __jsx("svg", {
      className: "w-6 h-6 hover:",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 19
      }
    }, __jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M6 18L18 6M6 6l12 12",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 21
      }
    }))), __jsx("button", {
      onClick: function onClick() {
        return editarCategoria(categoria.id);
      },
      className: "rounded-full w-6 h-6 bg-yellow-700 hover:bg-yellow-900",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
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
        lineNumber: 163,
        columnNumber: 19
      }
    }, __jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 21
      }
    })))));
  }))));
};

_s(Sidebar, "hwz0RNTRlq8Gq/4V9BU/H2i2MRM=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation];
});

_c = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

var _c;

$RefreshReg$(_c, "Sidebar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50ZXMvU2lkZWJhci5qcyJdLCJuYW1lcyI6WyJPQlRFTkVSX0NBVEVHT1JJQVMiLCJncWwiLCJFTElNSU5BUl9DQVRFR09SSUEiLCJTaWRlYmFyIiwidXNlUXVlcnkiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwicmVmZXRjaCIsInVzZU11dGF0aW9uIiwiZWxpbWluYXJDYXRlZ29yaWEiLCJ1c2VTdGF0ZSIsImJhcnJhIiwic2V0QmFycmEiLCJiYXJyYUNsYXNlIiwidXNlRWZmZWN0IiwicmVwbGFjZSIsInRva2VuQXV0b3JpemFkbyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyb3V0ZXIiLCJ2ZXJDYXRlZ29yaWEiLCJpZCIsIlJvdXRlciIsInBhdGhuYW1lIiwicXVlcnkiLCJlZGl0YXJDYXRlZ29yaWEiLCJjb25maXJtYXJFbGltaW5hckNhdGVnb3JpYSIsImlkQ2F0ZWdvcmlhIiwiU3dhbCIsInRpdGxlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsInZhcmlhYmxlcyIsImNvbnNvbGUiLCJsb2ciLCJvYnRlbmVyQ2F0ZWdvcmlhcyIsIm1hcCIsImNhdGVnb3JpYSIsIm5vbWJyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLG1EQUFILG1CQUF4QjtBQVNBLElBQU1DLGtCQUFrQixHQUFHRCxtREFBSCxvQkFBeEI7O0FBS0EsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUNzQkMsd0RBQVEsQ0FBQ0osa0JB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NEJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU9FO0FBQ0UsbUJBQWEsRUFBQyxPQURoQjtBQUVFLG9CQUFjLEVBQUMsT0FGakI7QUFHRSxpQkFBVyxFQUFDLEdBSGQ7QUFJRSxPQUFDLEVBQUMsc0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVBGLENBSkYsQ0FERixFQW9CRTtBQUNFLGFBQU8sRUFBRTtBQUFBLGVBQU1JLGVBQWUsQ0FBQ21CLFNBQVMsQ0FBQ3ZCLEVBQVgsQ0FBckI7QUFBQSxPQURYO0FBRUUsZUFBUyxFQUFDLHdEQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRTtBQUNFLGVBQVMsRUFBQyxTQURaO0FBRUUsVUFBSSxFQUFDLE1BRlA7QUFHRSxZQUFNLEVBQUMsY0FIVDtBQUlFLGFBQU8sRUFBQyxXQUpWO0FBS0UsV0FBSyxFQUFDLDRCQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPRTtBQUNFLG1CQUFhLEVBQUMsT0FEaEI7QUFFRSxvQkFBYyxFQUFDLE9BRmpCO0FBR0UsaUJBQVcsRUFBQyxHQUhkO0FBSUUsT0FBQyxFQUFDLHdIQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFQRixDQUpGLENBcEJGLENBWkYsQ0FEMEI7QUFBQSxHQUEzQixDQURILENBcENGLENBTkYsQ0FERjtBQXVHRCxDQWxLRDs7R0FBTW5CLE87VUFDc0NDLG9ELEVBQ2RLLHVEOzs7S0FGeEJOLE87QUFvS04sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjkwOTI1ZDA3Nzc2MWUyMDJlZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnksIHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgT0JURU5FUl9DQVRFR09SSUFTID0gZ3FsYFxyXG4gIHF1ZXJ5IG9idGVuZXJDYXRlZ29yaWFzIHtcclxuICAgIG9idGVuZXJDYXRlZ29yaWFzIHtcclxuICAgICAgaWRcclxuICAgICAgbm9tYnJlXHJcbiAgICAgIGRlc2NyaXBjaW9uXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBFTElNSU5BUl9DQVRFR09SSUEgPSBncWxgXHJcbiAgbXV0YXRpb24gZWxpbWluYXJDYXRlZ29yaWEoJGlkOiBJRCEpIHtcclxuICAgIGVsaW1pbmFyQ2F0ZWdvcmlhKGlkOiAkaWQpXHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KE9CVEVORVJfQ0FURUdPUklBUyk7XHJcbiAgY29uc3QgW2VsaW1pbmFyQ2F0ZWdvcmlhXSA9IHVzZU11dGF0aW9uKEVMSU1JTkFSX0NBVEVHT1JJQSk7XHJcbiAgY29uc3QgW2JhcnJhLCBzZXRCYXJyYV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBsZXQgYmFycmFDbGFzZSA9IFwiYmcteWVsbG93LTkwMCAgeGw6dy0xLzUgIFwiO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYmFycmEgPT0gdHJ1ZSkge1xyXG4gICAgICBiYXJyYUNsYXNlLnJlcGxhY2UoXHJcbiAgICAgICAgXCJiZy15ZWxsb3ctOTAwICB4bDp3LTEvNSAgYmFycmEtbGF0ZXJhbFwiLFxyXG4gICAgICAgIFwiYmcteWVsbG93LTkwMCAgeGw6dy0xLzUgIGJhcnJhLWFjdGl2YVwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoYmFycmEgPT0gZmFsc2UpIHtcclxuICAgICAgYmFycmFDbGFzZSA9IFwiYmcteWVsbG93LTkwMCAgeGw6dy0xLzUgIGJhcnJhLWxhdGVyYWxcIjtcclxuICAgIH1cclxuICB9KTtcclxuICBpZiAobG9hZGluZyB8fCAhZGF0YSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibGRzLWhvdXJnbGFzc1wiPjwvZGl2PjtcclxuICBjb25zdCB0b2tlbkF1dG9yaXphZG8gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gIGlmICghdG9rZW5BdXRvcml6YWRvKSB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9hdXRlbnRpY2Fyc2VcIik7XHJcbiAgfVxyXG4gIGNvbnN0IHZlckNhdGVnb3JpYSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgYXdhaXQgUm91dGVyLnB1c2goe1xyXG4gICAgICBwYXRobmFtZTogXCIvY2F0ZWdvcmlhL1tpZF1cIixcclxuICAgICAgcXVlcnk6IHsgaWQgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgZWRpdGFyQ2F0ZWdvcmlhID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBhd2FpdCBSb3V0ZXIucHVzaCh7XHJcbiAgICAgIHBhdGhuYW1lOiBcIi9lZGl0YXJjYXRlZ29yaWEvW2lkXVwiLFxyXG4gICAgICBxdWVyeTogeyBpZCB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBjb25maXJtYXJFbGltaW5hckNhdGVnb3JpYSA9IChpZENhdGVnb3JpYSkgPT4ge1xyXG4gICAgU3dhbC5maXJlKHtcclxuICAgICAgdGl0bGU6IFwiU2VndXJvIHF1aWVyZXMgZWxpbWluYXIgZXN0YSBjYXRlZ29yaWE/XCIsXHJcbiAgICAgIHRleHQ6IFwibm8gbG8gcG9kcmFzIHJldmVydGlyIVwiLFxyXG4gICAgICBpY29uOiBcIndhcm5pbmdcIixcclxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxyXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJTSSwgbWFuZGFsZSB1cmEhXCIsXHJcbiAgICB9KS50aGVuKGFzeW5jIChyZXN1bHQpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGVsaW1pbmFyQ2F0ZWdvcmlhKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgaWQ6IGlkQ2F0ZWdvcmlhLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZWZldGNoKCk7XHJcbiAgICAgICAgICBTd2FsLmZpcmUoXCJFbGltaW5hZG8hXCIsIGRhdGEuZWxpbWluYXJDYXRlZ29yaWEsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0QmFycmEoIWJhcnJhKX0gY2xhc3NOYW1lPVwiaGFtYnVyZ3Vlc2FcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YmFycmEgPyBcImxpbmVhMVwiIDogXCJsaW5lYTFiXCJ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtiYXJyYSA/IFwibGluZWEyXCIgOiBcImxpbmVhMmJcIn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2JhcnJhID8gXCJsaW5lYTNcIiA6IFwibGluZWEzYlwifT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxhc2lkZVxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICBiYXJyYVxyXG4gICAgICAgICAgICA/IFwiYmcteWVsbG93LTkwMCBtZDp3LTEvNCBsZzp3LTEvNSAgYmFycmEtbGF0ZXJhbFwiXHJcbiAgICAgICAgICAgIDogXCJiZy15ZWxsb3ctOTAwICB4bDp3LTEvNSAgYmFycmEtYWN0aXZhXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWQ9XCJiYXJyYVwiXHJcbiAgICAgID5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD1cImJhcnJhTGF0ZXJhbFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgYmcteWVsbG93LTcwMCBob3ZlcjpiZy1ncmF5LTgwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz1cIi9NZW1lVGVjYS5wbmdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXsxMjd9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsxMzd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LXhsICBtdC0yIHAtNSAgdGl0dWxvXCI+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgTWVtZVRlY2FcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL251ZXZhQ2F0ZWdvcmlhXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktNTAwIGhvdmVyOmJnLWdyYXktNDAwIHRleHQtd2hpdGUgdGV4dC0zeGwgZm9udC1ib2xkIHB5LTIgcHgtNCBib3JkZXItYi00IGJvcmRlci1ncmF5LTcwMCBob3Zlcjpib3JkZXItZ3JheS01MDAgcm91bmRlZCBtbC0yIG10LTRcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIENyZWFyIENhdGVnb3JpYVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC14bCBwbC03IG10LTIgaG92ZXI6dGV4dC1ncmF5LTkwMCBjdXJzb3ItZGVmYXVsdFwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBDYXRlZ29yaWFzIGRlIE1lbWVzXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIiBtdC01IGxpc3Qtbm9uZVwiPlxyXG4gICAgICAgICAge2RhdGEub2J0ZW5lckNhdGVnb3JpYXMubWFwKChjYXRlZ29yaWEpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAga2V5PXtjYXRlZ29yaWEuaWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1qdXN0aWZ5IGZvbnQtYm9sZCBtbC00IHBiLTMgaG92ZXI6dGV4dC1ibGFjayBjdXJzb3ItcG9pbnRlciBweS0yXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZlckNhdGVnb3JpYShjYXRlZ29yaWEuaWQpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3JpYS5ub21icmV9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbWItMiBwci00IGZsZXggZmxleC1ub3dyYXAgIHNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbmZpcm1hckVsaW1pbmFyQ2F0ZWdvcmlhKGNhdGVnb3JpYS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCB3LTYgaC02IGJnLXJlZC03MDAgaG92ZXI6YmctcmVkLTkwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IGhvdmVyOlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdGFyQ2F0ZWdvcmlhKGNhdGVnb3JpYS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCB3LTYgaC02IGJnLXllbGxvdy03MDAgaG92ZXI6YmcteWVsbG93LTkwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMSA1SDZhMiAyIDAgMDAtMiAydjExYTIgMiAwIDAwMiAyaDExYTIgMiAwIDAwMi0ydi01bS0xLjQxNC05LjQxNGEyIDIgMCAxMTIuODI4IDIuODI4TDExLjgyOCAxNUg5di0yLjgyOGw4LjU4Ni04LjU4NnpcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvYXNpZGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
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
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: barra ? "linea1" : "linea1b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: barra ? "linea2" : "linea2b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: barra ? "linea3" : "linea3b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  })), __jsx("aside", {
    className: barra ? "bg-yellow-900 md:w-1/4 lg:w-1/5  barra-lateral" : "bg-yellow-900  xl:w-1/5  barra-activa",
    id: "barra",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "barraLateral",
    className: "flex flex-row bg-yellow-700 hover:bg-gray-800 cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 99,
      columnNumber: 13
    }
  }), __jsx("h1", {
    className: "text-white font-bold text-xl  mt-2 p-5  titulo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "MemeTeca"))), tokenAutorizado ? __jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
    href: "/nuevaCategoria",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 1
    }
  }, __jsx("button", {
    className: "bg-gray-500 hover:bg-gray-400 text-white text-3xl font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded ml-2 mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, "Crear Categoria")) : __jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
    href: "/autenticarse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "bg-gray-500 hover:bg-gray-400 text-white text-3xl font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded ml-2 mt-4 self-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, "Administrador")), __jsx("h1", {
    className: "text-white font-bold text-xl pl-7 mt-2 hover:text-gray-900 cursor-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, "Categorias de Memes"), __jsx("nav", {
    className: " mt-5 list-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, data.obtenerCategorias.map(function (categoria) {
    return __jsx("div", {
      className: "flex flex-row justify-between items-center",
      key: categoria.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
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
        lineNumber: 134,
        columnNumber: 15
      }
    }, categoria.nombre), __jsx("div", {
      className: "-mb-2 pr-4 flex flex-nowrap  self-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 15
      }
    }, tokenAutorizado ? __jsx("button", {
      onClick: function onClick() {
        return confirmarEliminarCategoria(categoria.id);
      },
      className: "rounded-full w-6 h-6 bg-red-700 hover:bg-red-900",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 36
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
        lineNumber: 145,
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
        lineNumber: 152,
        columnNumber: 21
      }
    }))) : '', tokenAutorizado ? __jsx("button", {
      onClick: function onClick() {
        return editarCategoria(categoria.id);
      },
      className: "rounded-full w-6 h-6 bg-yellow-700 hover:bg-yellow-900",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 2
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
        lineNumber: 167,
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
        lineNumber: 174,
        columnNumber: 21
      }
    }))) : ''));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50ZXMvU2lkZWJhci5qcyJdLCJuYW1lcyI6WyJPQlRFTkVSX0NBVEVHT1JJQVMiLCJncWwiLCJFTElNSU5BUl9DQVRFR09SSUEiLCJTaWRlYmFyIiwidXNlUXVlcnkiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwicmVmZXRjaCIsInVzZU11dGF0aW9uIiwiZWxpbWluYXJDYXRlZ29yaWEiLCJ1c2VTdGF0ZSIsImJhcnJhIiwic2V0QmFycmEiLCJiYXJyYUNsYXNlIiwidXNlRWZmZWN0IiwicmVwbGFjZSIsInRva2VuQXV0b3JpemFkbyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ2ZXJDYXRlZ29yaWEiLCJpZCIsIlJvdXRlciIsInBhdGhuYW1lIiwicXVlcnkiLCJlZGl0YXJDYXRlZ29yaWEiLCJjb25maXJtYXJFbGltaW5hckNhdGVnb3JpYSIsImlkQ2F0ZWdvcmlhIiwiU3dhbCIsInRpdGxlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsInZhcmlhYmxlcyIsImNvbnNvbGUiLCJsb2ciLCJvYnRlbmVyQ2F0ZWdvcmlhcyIsIm1hcCIsImNhdGVnb3JpYSIsIm5vbWJyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLG1EQUFILG1CQUF4QjtBQVNBLElBQU1DLGtCQUFrQixHQUFHRCxtREFBSCxvQkFBeEI7O0FBS0EsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUNzQkMsd0RBQVEsQ0FBQ0osa0JBQUQsQ0FEOUI7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YTA3MjMwOWZkMjc3NGE2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBPQlRFTkVSX0NBVEVHT1JJQVMgPSBncWxgXHJcbiAgcXVlcnkgb2J0ZW5lckNhdGVnb3JpYXMge1xyXG4gICAgb2J0ZW5lckNhdGVnb3JpYXMge1xyXG4gICAgICBpZFxyXG4gICAgICBub21icmVcclxuICAgICAgZGVzY3JpcGNpb25cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IEVMSU1JTkFSX0NBVEVHT1JJQSA9IGdxbGBcclxuICBtdXRhdGlvbiBlbGltaW5hckNhdGVnb3JpYSgkaWQ6IElEISkge1xyXG4gICAgZWxpbWluYXJDYXRlZ29yaWEoaWQ6ICRpZClcclxuICB9XHJcbmA7XHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciwgcmVmZXRjaCB9ID0gdXNlUXVlcnkoT0JURU5FUl9DQVRFR09SSUFTKTtcclxuICBjb25zdCBbZWxpbWluYXJDYXRlZ29yaWFdID0gdXNlTXV0YXRpb24oRUxJTUlOQVJfQ0FURUdPUklBKTtcclxuICBjb25zdCBbYmFycmEsIHNldEJhcnJhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGxldCBiYXJyYUNsYXNlID0gXCJiZy15ZWxsb3ctOTAwICB4bDp3LTEvNSAgXCI7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChiYXJyYSA9PSB0cnVlKSB7XHJcbiAgICAgIGJhcnJhQ2xhc2UucmVwbGFjZShcclxuICAgICAgICBcImJnLXllbGxvdy05MDAgIHhsOnctMS81ICBiYXJyYS1sYXRlcmFsXCIsXHJcbiAgICAgICAgXCJiZy15ZWxsb3ctOTAwICB4bDp3LTEvNSAgYmFycmEtYWN0aXZhXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChiYXJyYSA9PSBmYWxzZSkge1xyXG4gICAgICBiYXJyYUNsYXNlID0gXCJiZy15ZWxsb3ctOTAwICB4bDp3LTEvNSAgYmFycmEtbGF0ZXJhbFwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmIChsb2FkaW5nIHx8ICFkYXRhKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsZHMtaG91cmdsYXNzXCI+PC9kaXY+O1xyXG4gIGNvbnN0IHRva2VuQXV0b3JpemFkbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgY29uc3QgdmVyQ2F0ZWdvcmlhID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBhd2FpdCBSb3V0ZXIucHVzaCh7XHJcbiAgICAgIHBhdGhuYW1lOiBcIi9jYXRlZ29yaWEvW2lkXVwiLFxyXG4gICAgICBxdWVyeTogeyBpZCB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBlZGl0YXJDYXRlZ29yaWEgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGF3YWl0IFJvdXRlci5wdXNoKHtcclxuICAgICAgcGF0aG5hbWU6IFwiL2VkaXRhcmNhdGVnb3JpYS9baWRdXCIsXHJcbiAgICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGNvbmZpcm1hckVsaW1pbmFyQ2F0ZWdvcmlhID0gKGlkQ2F0ZWdvcmlhKSA9PiB7XHJcbiAgICBTd2FsLmZpcmUoe1xyXG4gICAgICB0aXRsZTogXCJTZWd1cm8gcXVpZXJlcyBlbGltaW5hciBlc3RhIGNhdGVnb3JpYT9cIixcclxuICAgICAgdGV4dDogXCJubyBsbyBwb2RyYXMgcmV2ZXJ0aXIhXCIsXHJcbiAgICAgIGljb246IFwid2FybmluZ1wiLFxyXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlNJLCBtYW5kYWxlIHVyYSFcIixcclxuICAgIH0pLnRoZW4oYXN5bmMgKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgZWxpbWluYXJDYXRlZ29yaWEoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICBpZDogaWRDYXRlZ29yaWEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJlZmV0Y2goKTtcclxuICAgICAgICAgIFN3YWwuZmlyZShcIkVsaW1pbmFkbyFcIiwgZGF0YS5lbGltaW5hckNhdGVnb3JpYSwgXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRCYXJyYSghYmFycmEpfSBjbGFzc05hbWU9XCJoYW1idXJndWVzYVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtiYXJyYSA/IFwibGluZWExXCIgOiBcImxpbmVhMWJcIn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2JhcnJhID8gXCJsaW5lYTJcIiA6IFwibGluZWEyYlwifT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YmFycmEgPyBcImxpbmVhM1wiIDogXCJsaW5lYTNiXCJ9PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGFzaWRlXHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIGJhcnJhXHJcbiAgICAgICAgICAgID8gXCJiZy15ZWxsb3ctOTAwIG1kOnctMS80IGxnOnctMS81ICBiYXJyYS1sYXRlcmFsXCJcclxuICAgICAgICAgICAgOiBcImJnLXllbGxvdy05MDAgIHhsOnctMS81ICBiYXJyYS1hY3RpdmFcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZD1cImJhcnJhXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGlkPVwiYmFycmFMYXRlcmFsXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBiZy15ZWxsb3ctNzAwIGhvdmVyOmJnLWdyYXktODAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL01lbWVUZWNhLnBuZ1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezEyN31cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezEzN31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQteGwgIG10LTIgcC01ICB0aXR1bG9cIj5cclxuICAgICAgICAgICAgICBNZW1lVGVjYVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHt0b2tlbkF1dG9yaXphZG8gPyAoXHJcbjxMaW5rIGhyZWY9XCIvbnVldmFDYXRlZ29yaWFcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS01MDAgaG92ZXI6YmctZ3JheS00MDAgdGV4dC13aGl0ZSB0ZXh0LTN4bCBmb250LWJvbGQgcHktMiBweC00IGJvcmRlci1iLTQgYm9yZGVyLWdyYXktNzAwIGhvdmVyOmJvcmRlci1ncmF5LTUwMCByb3VuZGVkIG1sLTIgbXQtNFwiPlxyXG5cclxuICAgICAgICAgICAgQ3JlYXIgQ2F0ZWdvcmlhXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0ZW50aWNhcnNlXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktNTAwIGhvdmVyOmJnLWdyYXktNDAwIHRleHQtd2hpdGUgdGV4dC0zeGwgZm9udC1ib2xkIHB5LTIgcHgtNCBib3JkZXItYi00IGJvcmRlci1ncmF5LTcwMCBob3Zlcjpib3JkZXItZ3JheS01MDAgcm91bmRlZCBtbC0yIG10LTQgc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgQWRtaW5pc3RyYWRvclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC14bCBwbC03IG10LTIgaG92ZXI6dGV4dC1ncmF5LTkwMCBjdXJzb3ItZGVmYXVsdFwiPlxyXG4gICAgICAgICAgQ2F0ZWdvcmlhcyBkZSBNZW1lc1xyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCIgbXQtNSBsaXN0LW5vbmVcIj5cclxuICAgICAgICAgIHtkYXRhLm9idGVuZXJDYXRlZ29yaWFzLm1hcCgoY2F0ZWdvcmlhKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgIGtleT17Y2F0ZWdvcmlhLmlkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtanVzdGlmeSBmb250LWJvbGQgbWwtNCBwYi0zIGhvdmVyOnRleHQtYmxhY2sgY3Vyc29yLXBvaW50ZXIgcHktMlwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2ZXJDYXRlZ29yaWEoY2F0ZWdvcmlhLmlkKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcmlhLm5vbWJyZX1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW1iLTIgcHItNCBmbGV4IGZsZXgtbm93cmFwICBzZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICB7dG9rZW5BdXRvcml6YWRvID8gKDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uZmlybWFyRWxpbWluYXJDYXRlZ29yaWEoY2F0ZWdvcmlhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHctNiBoLTYgYmctcmVkLTcwMCBob3ZlcjpiZy1yZWQtOTAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgaG92ZXI6XCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICApIDogJycgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIHt0b2tlbkF1dG9yaXphZG8gPyAoXHJcbiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRhckNhdGVnb3JpYShjYXRlZ29yaWEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgdy02IGgtNiBiZy15ZWxsb3ctNzAwIGhvdmVyOmJnLXllbGxvdy05MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTEgNUg2YTIgMiAwIDAwLTIgMnYxMWEyIDIgMCAwMDIgMmgxMWEyIDIgMCAwMDItMnYtNW0tMS40MTQtOS40MTRhMiAyIDAgMTEyLjgyOCAyLjgyOEwxMS44MjggMTVIOXYtMi44MjhsOC41ODYtOC41ODZ6XCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICApIDogJyd9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
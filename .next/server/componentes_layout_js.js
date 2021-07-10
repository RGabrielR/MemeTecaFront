exports.id = "componentes_layout_js";
exports.ids = ["componentes_layout_js"];
exports.modules = {

/***/ "./componentes/Sidebar.js":
/*!********************************!*\
  !*** ./componentes/Sidebar.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\codigos\\MemeTeca\\meme-front\\componentes\\Sidebar.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







const OBTENER_CATEGORIAS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query obtenerCategorias {
    obtenerCategorias {
      id
      nombre
      descripcion
    }
  }
`;
const ELIMINAR_CATEGORIA = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation eliminarCategoria($id: ID!) {
    eliminarCategoria(id: $id)
  }
`;

const Sidebar = () => {
  const {
    data,
    loading,
    error,
    refetch
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(OBTENER_CATEGORIAS);
  const [eliminarCategoria] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(ELIMINAR_CATEGORIA);
  const {
    0: barra,
    1: setBarra
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  let barraClase = "bg-yellow-900  xl:w-1/5  ";
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (barra == true) {
      barraClase.replace("bg-yellow-900  xl:w-1/5  barra-lateral", "bg-yellow-900  xl:w-1/5  barra-activa");
    }

    if (barra == false) {
      barraClase = "bg-yellow-900  xl:w-1/5  barra-lateral";
    }
  });
  if (loading || !data) return __jsx("div", {
    className: "lds-hourglass",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 32
    }
  });
  const tokenAutorizado = localStorage.getItem("token");

  if (!tokenAutorizado) {
    next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/autenticarse");
  }

  const verCategoria = async id => {
    await next_router__WEBPACK_IMPORTED_MODULE_3___default().push({
      pathname: "/categoria/[id]",
      query: {
        id
      }
    });
  };

  const editarCategoria = async id => {
    await next_router__WEBPACK_IMPORTED_MODULE_3___default().push({
      pathname: "/editarcategoria/[id]",
      query: {
        id
      }
    });
  };

  const confirmarEliminarCategoria = idCategoria => {
    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
      title: "Seguro quieres eliminar esta categoria?",
      text: "no lo podras revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, mandale ura!"
    }).then(async result => {
      if (result.value) {
        try {
          const {
            data
          } = await eliminarCategoria({
            variables: {
              id: idCategoria
            }
          });
          refetch();
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire("Eliminado!", data.eliminarCategoria, "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    onClick: () => setBarra(!barra),
    className: "hamburguesa",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: barra ? "linea1" : "linea1b",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: barra ? "linea2" : "linea2b",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: barra ? "linea3" : "linea3b",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  })), __jsx("aside", {
    className: barra ? "bg-yellow-900 md:w-1/4 lg:w-1/5  barra-lateral" : "bg-yellow-900  xl:w-1/5  barra-activa",
    id: "barra",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "barraLateral",
    className: "flex flex-row bg-yellow-700 hover:bg-gray-800 cursor-pointer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
    src: "/MemeTeca.png",
    className: "logo",
    width: 127,
    height: 137,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }), __jsx("h1", {
    className: "text-white font-bold text-xl  mt-2 p-5  titulo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "MemeTeca"))), __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/nuevaCategoria",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "bg-gray-500 hover:bg-gray-400 text-white text-3xl font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded ml-2 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, "Crear Categoria")), __jsx("h1", {
    className: "text-white font-bold text-xl pl-7 mt-2 hover:text-gray-900 cursor-default",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, "Categorias de Memes"), __jsx("nav", {
    className: " mt-5 list-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, data.obtenerCategorias.map(categoria => __jsx("div", {
    className: "flex flex-row justify-between items-center",
    key: categoria.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "text-white text-justify font-bold ml-4 pb-3 hover:text-black cursor-pointer py-2",
    onClick: () => verCategoria(categoria.id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, categoria.nombre), __jsx("div", {
    className: "-mb-2 pr-4 flex flex-nowrap  self-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: () => confirmarEliminarCategoria(categoria.id),
    className: "rounded-full w-6 h-6 bg-red-700 hover:bg-red-900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, __jsx("svg", {
    className: "w-6 h-6 hover:",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 19
    }
  }, __jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 18L18 6M6 6l12 12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }))), __jsx("button", {
    onClick: () => editarCategoria(categoria.id),
    className: "rounded-full w-6 h-6 bg-yellow-700 hover:bg-yellow-900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, __jsx("svg", {
    className: "w-6 h-6",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  }, __jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./componentes/layout.js":
/*!*******************************!*\
  !*** ./componentes/layout.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _componentes_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componentes/Sidebar */ "./componentes/Sidebar.js");
var _jsxFileName = "D:\\codigos\\MemeTeca\\meme-front\\componentes\\layout.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





const Layout = ({
  children
}) => {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Memeteca"), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css",
    integrity: "sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==",
    crossOrigin: "anonymous",
    referrerpolicy: "no-referrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Viaoda+Libre&display=swap",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "flex min-h-screen",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_componentes_Sidebar__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx("main", {
    className: " sm:w-full md-3/4 lg:w-4/5  bg-gray-200 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZW1lLWZyb250Ly4vY29tcG9uZW50ZXMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly9tZW1lLWZyb250Ly4vY29tcG9uZW50ZXMvbGF5b3V0LmpzIiwid2VicGFjazovL21lbWUtZnJvbnQvaWdub3JlZHxEOlxcY29kaWdvc1xcTWVtZVRlY2FcXG1lbWUtZnJvbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJPQlRFTkVSX0NBVEVHT1JJQVMiLCJncWwiLCJFTElNSU5BUl9DQVRFR09SSUEiLCJTaWRlYmFyIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInJlZmV0Y2giLCJ1c2VRdWVyeSIsImVsaW1pbmFyQ2F0ZWdvcmlhIiwidXNlTXV0YXRpb24iLCJiYXJyYSIsInNldEJhcnJhIiwidXNlU3RhdGUiLCJiYXJyYUNsYXNlIiwidXNlRWZmZWN0IiwicmVwbGFjZSIsInRva2VuQXV0b3JpemFkbyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyb3V0ZXIiLCJ2ZXJDYXRlZ29yaWEiLCJpZCIsIlJvdXRlciIsInBhdGhuYW1lIiwicXVlcnkiLCJlZGl0YXJDYXRlZ29yaWEiLCJjb25maXJtYXJFbGltaW5hckNhdGVnb3JpYSIsImlkQ2F0ZWdvcmlhIiwiU3dhbCIsInRpdGxlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsInZhcmlhYmxlcyIsImNvbnNvbGUiLCJsb2ciLCJvYnRlbmVyQ2F0ZWdvcmlhcyIsIm1hcCIsImNhdGVnb3JpYSIsIm5vbWJyZSIsIkxheW91dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QixRQUFJLEVBQUMsMkJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixFQWNFO0FBQ0UsUUFBSSxFQUFDLG9FQURQO0FBRUUsT0FBRyxFQUFDLFlBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLENBREYsRUFvQkU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTSxhQUFTLEVBQUMsMENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsUUFESCxDQUZGLENBcEJGLENBREY7QUE2QkQsQ0E5QkQ7O0FBZ0NBLCtEQUFlRCxNQUFmLEU7Ozs7Ozs7Ozs7QUNyQ0EsZSIsImZpbGUiOiJjb21wb25lbnRlc19sYXlvdXRfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE9CVEVORVJfQ0FURUdPUklBUyA9IGdxbGBcclxuICBxdWVyeSBvYnRlbmVyQ2F0ZWdvcmlhcyB7XHJcbiAgICBvYnRlbmVyQ2F0ZWdvcmlhcyB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5vbWJyZVxyXG4gICAgICBkZXNjcmlwY2lvblxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgRUxJTUlOQVJfQ0FURUdPUklBID0gZ3FsYFxyXG4gIG11dGF0aW9uIGVsaW1pbmFyQ2F0ZWdvcmlhKCRpZDogSUQhKSB7XHJcbiAgICBlbGltaW5hckNhdGVnb3JpYShpZDogJGlkKVxyXG4gIH1cclxuYDtcclxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yLCByZWZldGNoIH0gPSB1c2VRdWVyeShPQlRFTkVSX0NBVEVHT1JJQVMpO1xyXG4gIGNvbnN0IFtlbGltaW5hckNhdGVnb3JpYV0gPSB1c2VNdXRhdGlvbihFTElNSU5BUl9DQVRFR09SSUEpO1xyXG4gIGNvbnN0IFtiYXJyYSwgc2V0QmFycmFdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgbGV0IGJhcnJhQ2xhc2UgPSBcImJnLXllbGxvdy05MDAgIHhsOnctMS81ICBcIjtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGJhcnJhID09IHRydWUpIHtcclxuICAgICAgYmFycmFDbGFzZS5yZXBsYWNlKFxyXG4gICAgICAgIFwiYmcteWVsbG93LTkwMCAgeGw6dy0xLzUgIGJhcnJhLWxhdGVyYWxcIixcclxuICAgICAgICBcImJnLXllbGxvdy05MDAgIHhsOnctMS81ICBiYXJyYS1hY3RpdmFcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKGJhcnJhID09IGZhbHNlKSB7XHJcbiAgICAgIGJhcnJhQ2xhc2UgPSBcImJnLXllbGxvdy05MDAgIHhsOnctMS81ICBiYXJyYS1sYXRlcmFsXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaWYgKGxvYWRpbmcgfHwgIWRhdGEpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImxkcy1ob3VyZ2xhc3NcIj48L2Rpdj47XHJcbiAgY29uc3QgdG9rZW5BdXRvcml6YWRvID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICBpZiAoIXRva2VuQXV0b3JpemFkbykge1xyXG4gICAgcm91dGVyLnB1c2goXCIvYXV0ZW50aWNhcnNlXCIpO1xyXG4gIH1cclxuICBjb25zdCB2ZXJDYXRlZ29yaWEgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGF3YWl0IFJvdXRlci5wdXNoKHtcclxuICAgICAgcGF0aG5hbWU6IFwiL2NhdGVnb3JpYS9baWRdXCIsXHJcbiAgICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGVkaXRhckNhdGVnb3JpYSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgYXdhaXQgUm91dGVyLnB1c2goe1xyXG4gICAgICBwYXRobmFtZTogXCIvZWRpdGFyY2F0ZWdvcmlhL1tpZF1cIixcclxuICAgICAgcXVlcnk6IHsgaWQgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgY29uZmlybWFyRWxpbWluYXJDYXRlZ29yaWEgPSAoaWRDYXRlZ29yaWEpID0+IHtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiBcIlNlZ3VybyBxdWllcmVzIGVsaW1pbmFyIGVzdGEgY2F0ZWdvcmlhP1wiLFxyXG4gICAgICB0ZXh0OiBcIm5vIGxvIHBvZHJhcyByZXZlcnRpciFcIixcclxuICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXHJcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXHJcbiAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiU0ksIG1hbmRhbGUgdXJhIVwiLFxyXG4gICAgfSkudGhlbihhc3luYyAocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBlbGltaW5hckNhdGVnb3JpYSh7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgIGlkOiBpZENhdGVnb3JpYSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmVmZXRjaCgpO1xyXG4gICAgICAgICAgU3dhbC5maXJlKFwiRWxpbWluYWRvIVwiLCBkYXRhLmVsaW1pbmFyQ2F0ZWdvcmlhLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldEJhcnJhKCFiYXJyYSl9IGNsYXNzTmFtZT1cImhhbWJ1cmd1ZXNhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2JhcnJhID8gXCJsaW5lYTFcIiA6IFwibGluZWExYlwifT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YmFycmEgPyBcImxpbmVhMlwiIDogXCJsaW5lYTJiXCJ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtiYXJyYSA/IFwibGluZWEzXCIgOiBcImxpbmVhM2JcIn0+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YXNpZGVcclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgYmFycmFcclxuICAgICAgICAgICAgPyBcImJnLXllbGxvdy05MDAgbWQ6dy0xLzQgbGc6dy0xLzUgIGJhcnJhLWxhdGVyYWxcIlxyXG4gICAgICAgICAgICA6IFwiYmcteWVsbG93LTkwMCAgeGw6dy0xLzUgIGJhcnJhLWFjdGl2YVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlkPVwiYmFycmFcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9XCJiYXJyYUxhdGVyYWxcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGJnLXllbGxvdy03MDAgaG92ZXI6YmctZ3JheS04MDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9XCIvTWVtZVRlY2EucG5nXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvXCJcclxuICAgICAgICAgICAgICB3aWR0aD17MTI3fVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MTM3fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC14bCAgbXQtMiBwLTUgIHRpdHVsb1wiPlxyXG4gICAgICAgICAgICAgIE1lbWVUZWNhXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9udWV2YUNhdGVnb3JpYVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTQwMCB0ZXh0LXdoaXRlIHRleHQtM3hsIGZvbnQtYm9sZCBweS0yIHB4LTQgYm9yZGVyLWItNCBib3JkZXItZ3JheS03MDAgaG92ZXI6Ym9yZGVyLWdyYXktNTAwIHJvdW5kZWQgbWwtMiBtdC00XCI+XHJcblxyXG4gICAgICAgICAgICBDcmVhciBDYXRlZ29yaWFcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC14bCBwbC03IG10LTIgaG92ZXI6dGV4dC1ncmF5LTkwMCBjdXJzb3ItZGVmYXVsdFwiPlxyXG4gICAgICAgICAgQ2F0ZWdvcmlhcyBkZSBNZW1lc1xyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCIgbXQtNSBsaXN0LW5vbmVcIj5cclxuICAgICAgICAgIHtkYXRhLm9idGVuZXJDYXRlZ29yaWFzLm1hcCgoY2F0ZWdvcmlhKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgIGtleT17Y2F0ZWdvcmlhLmlkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtanVzdGlmeSBmb250LWJvbGQgbWwtNCBwYi0zIGhvdmVyOnRleHQtYmxhY2sgY3Vyc29yLXBvaW50ZXIgcHktMlwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2ZXJDYXRlZ29yaWEoY2F0ZWdvcmlhLmlkKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcmlhLm5vbWJyZX1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW1iLTIgcHItNCBmbGV4IGZsZXgtbm93cmFwICBzZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25maXJtYXJFbGltaW5hckNhdGVnb3JpYShjYXRlZ29yaWEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgdy02IGgtNiBiZy1yZWQtNzAwIGhvdmVyOmJnLXJlZC05MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiBob3ZlcjpcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRhckNhdGVnb3JpYShjYXRlZ29yaWEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgdy02IGgtNiBiZy15ZWxsb3ctNzAwIGhvdmVyOmJnLXllbGxvdy05MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTEgNUg2YTIgMiAwIDAwLTIgMnYxMWEyIDIgMCAwMDIgMmgxMWEyIDIgMCAwMDItMnYtNW0tMS40MTQtOS40MTRhMiAyIDAgMTEyLjgyOCAyLjgyOEwxMS44MjggMTVIOXYtMi44MjhsOC41ODYtOC41ODZ6XCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiIsImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50ZXMvU2lkZWJhclwiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TWVtZXRlY2E8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9ub3JtYWxpemUvOC4wLjEvbm9ybWFsaXplLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGE1MTItb0hERWM4WGVkNGhpVzZDeEQ3cWpibkkrQjA3dkRkWDdoRVBUdm45cFNaTzFiY1JxSHA4bWo5cHlyKzhSVkMyR210RWZJMkJpOUtlOUFzczBhcyt6cGc9PVwiXHJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgICByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vdGFpbHdpbmRjc3NAXjIvZGlzdC90YWlsd2luZC5taW4uY3NzXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCI+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1WaWFvZGErTGlicmUmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlblwiPlxyXG4gICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiIHNtOnctZnVsbCBtZC0zLzQgbGc6dy00LzUgIGJnLWdyYXktMjAwIFwiPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9
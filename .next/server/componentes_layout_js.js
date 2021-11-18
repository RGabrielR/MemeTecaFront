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
  const tokenAutorizado = localStorage.getItem("token"); // if (!tokenAutorizado) {
  //   router.push("/autenticarse");
  // }

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
  }, "MemeTeca"))), tokenAutorizado ? __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/nuevaCategoria",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 1
    }
  }, __jsx("button", {
    className: "bg-gray-500 hover:bg-gray-400 text-white text-3xl font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded ml-2 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, "Crear Categoria")) : __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/autenticarse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "bg-gray-500 hover:bg-gray-400 text-white text-3xl font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded ml-2 mt-4 self-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, "Administrador")), __jsx("h1", {
    className: "text-white font-bold text-xl pl-7 mt-2 hover:text-gray-900 cursor-default",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, "Categorias de Memes"), __jsx("nav", {
    className: " mt-5 list-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, data.obtenerCategorias.map(categoria => __jsx("div", {
    className: "flex flex-row justify-between items-center",
    key: categoria.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "text-white text-justify font-bold ml-4 pb-3 hover:text-black cursor-pointer py-2",
    onClick: () => verCategoria(categoria.id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, categoria.nombre), __jsx("div", {
    className: "-mb-2 pr-4 flex flex-nowrap  self-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }, tokenAutorizado ? __jsx("button", {
    onClick: () => confirmarEliminarCategoria(categoria.id),
    className: "rounded-full w-6 h-6 bg-red-700 hover:bg-red-900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 36
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
      lineNumber: 148,
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
      lineNumber: 155,
      columnNumber: 21
    }
  }))) : '', tokenAutorizado ? __jsx("button", {
    onClick: () => editarCategoria(categoria.id),
    className: "rounded-full w-6 h-6 bg-yellow-700 hover:bg-yellow-900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 2
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
      lineNumber: 170,
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
      lineNumber: 177,
      columnNumber: 21
    }
  }))) : ''))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZW1lLWZyb250Ly4vY29tcG9uZW50ZXMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly9tZW1lLWZyb250Ly4vY29tcG9uZW50ZXMvbGF5b3V0LmpzIiwid2VicGFjazovL21lbWUtZnJvbnQvaWdub3JlZHxEOlxcY29kaWdvc1xcTWVtZVRlY2FcXG1lbWUtZnJvbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJPQlRFTkVSX0NBVEVHT1JJQVMiLCJncWwiLCJFTElNSU5BUl9DQVRFR09SSUEiLCJTaWRlYmFyIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInJlZmV0Y2giLCJ1c2VRdWVyeSIsImVsaW1pbmFyQ2F0ZWdvcmlhIiwidXNlTXV0YXRpb24iLCJiYXJyYSIsInNldEJhcnJhIiwidXNlU3RhdGUiLCJiYXJyYUNsYXNlIiwidXNlRWZmZWN0IiwicmVwbGFjZSIsInRva2VuQXV0b3JpemFkbyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ2ZXJDYXRlZ29yaWEiLCJpZCIsIlJvdXRlciIsInBhdGhuYW1lIiwicXVlcnkiLCJlZGl0YXJDYXRlZ29yaWEiLCJjb25maXJtYXJFbGltaW5hckNhdGVnb3JpYSIsImlkQ2F0ZWdvcmlhIiwiU3dhbCIsInRpdGxlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsInZhcmlhYmxlcyIsImNvbnNvbGUiLCJsb2ciLCJvYnRlbmVyQ2F0ZWdvcmlhcyIsIm1hcCIsImNhdGVnb3JpYSIsIm5vbWJyZSIsIkxheW91dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsa0JBQWtCLEdBQUdDLCtDQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSQTtBQVNBLE1BQU1DLGtCQUFrQixHQUFHRCwrQ0FBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxDQUpBOztBQUtBLE1BQU1FLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxXQUFSO0FBQWlCQyxTQUFqQjtBQUF3QkM7QUFBeEIsTUFBb0NDLHdEQUFRLENBQUNSLGtCQUFELENBQWxEO0FBQ0EsUUFBTSxDQUFDUyxpQkFBRCxJQUFzQkMsMkRBQVcsQ0FBQ1Isa0JBQUQsQ0FBdkM7QUFDQSxRQUFNO0FBQUEsT0FBQ1MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLCtDQUFRLENBQUMsSUFBRCxDQUFsQztBQUNBLE1BQUlDLFVBQVUsR0FBRywyQkFBakI7QUFDQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUosS0FBSyxJQUFJLElBQWIsRUFBbUI7QUFDakJHLGdCQUFVLENBQUNFLE9BQVgsQ0FDRSx3Q0FERixFQUVFLHVDQUZGO0FBSUQ7O0FBQ0QsUUFBSUwsS0FBSyxJQUFJLEtBQWIsRUFBb0I7QUFDbEJHLGdCQUFVLEdBQUcsd0NBQWI7QUFDRDtBQUNGLEdBVlEsQ0FBVDtBQVdBLE1BQUlULE9BQU8sSUFBSSxDQUFDRCxJQUFoQixFQUFzQixPQUFPO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ3RCLFFBQU1hLGVBQWUsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQXhCLENBakJvQixDQWtCcEI7QUFDQTtBQUNBOztBQUNBLFFBQU1DLFlBQVksR0FBRyxNQUFPQyxFQUFQLElBQWM7QUFDakMsVUFBTUMsdURBQUEsQ0FBWTtBQUNoQkMsY0FBUSxFQUFFLGlCQURNO0FBRWhCQyxXQUFLLEVBQUU7QUFBRUg7QUFBRjtBQUZTLEtBQVosQ0FBTjtBQUlELEdBTEQ7O0FBTUEsUUFBTUksZUFBZSxHQUFHLE1BQU9KLEVBQVAsSUFBYztBQUNwQyxVQUFNQyx1REFBQSxDQUFZO0FBQ2hCQyxjQUFRLEVBQUUsdUJBRE07QUFFaEJDLFdBQUssRUFBRTtBQUFFSDtBQUFGO0FBRlMsS0FBWixDQUFOO0FBSUQsR0FMRDs7QUFNQSxRQUFNSywwQkFBMEIsR0FBSUMsV0FBRCxJQUFpQjtBQUNsREMsMkRBQUEsQ0FBVTtBQUNSQyxXQUFLLEVBQUUseUNBREM7QUFFUkMsVUFBSSxFQUFFLHdCQUZFO0FBR1JDLFVBQUksRUFBRSxTQUhFO0FBSVJDLHNCQUFnQixFQUFFLElBSlY7QUFLUkMsd0JBQWtCLEVBQUUsU0FMWjtBQU1SQyx1QkFBaUIsRUFBRSxNQU5YO0FBT1JDLHVCQUFpQixFQUFFO0FBUFgsS0FBVixFQVFHQyxJQVJILENBUVEsTUFBT0MsTUFBUCxJQUFrQjtBQUN4QixVQUFJQSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDaEIsWUFBSTtBQUNGLGdCQUFNO0FBQUVsQztBQUFGLGNBQVcsTUFBTUssaUJBQWlCLENBQUM7QUFDdkM4QixxQkFBUyxFQUFFO0FBQ1RsQixnQkFBRSxFQUFFTTtBQURLO0FBRDRCLFdBQUQsQ0FBeEM7QUFLQXBCLGlCQUFPO0FBQ1BxQixpRUFBQSxDQUFVLFlBQVYsRUFBd0J4QixJQUFJLENBQUNLLGlCQUE3QixFQUFnRCxTQUFoRDtBQUNELFNBUkQsQ0FRRSxPQUFPSCxLQUFQLEVBQWM7QUFDZGtDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWW5DLEtBQVo7QUFDRDtBQUNGO0FBQ0YsS0F0QkQ7QUF1QkQsR0F4QkQ7O0FBMEJBLFNBQ0UscUVBQ0U7QUFBSyxXQUFPLEVBQUUsTUFBTU0sUUFBUSxDQUFDLENBQUNELEtBQUYsQ0FBNUI7QUFBc0MsYUFBUyxFQUFDLGFBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUEsS0FBSyxHQUFHLFFBQUgsR0FBYyxTQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUEsS0FBSyxHQUFHLFFBQUgsR0FBYyxTQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFLLGFBQVMsRUFBRUEsS0FBSyxHQUFHLFFBQUgsR0FBYyxTQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQU1FO0FBQ0UsYUFBUyxFQUNQQSxLQUFLLEdBQ0QsZ0RBREMsR0FFRCx1Q0FKUjtBQU1FLE1BQUUsRUFBQyxPQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRSxNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsTUFBRSxFQUFDLGNBREw7QUFFRSxhQUFTLEVBQUMsOERBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsbURBQUQ7QUFDRSxPQUFHLEVBQUMsZUFETjtBQUVFLGFBQVMsRUFBQyxNQUZaO0FBR0UsU0FBSyxFQUFFLEdBSFQ7QUFJRSxVQUFNLEVBQUUsR0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFVRTtBQUFJLGFBQVMsRUFBQyxnREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGLENBREYsQ0FSRixFQXdCR00sZUFBZSxHQUN4QixNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLGlCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDVTtBQUFRLGFBQVMsRUFBQywwSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEVixDQUR3QixHQVFkLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsZUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBUSxhQUFTLEVBQUMsc0pBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREEsQ0FoQ0osRUF1Q0U7QUFBSSxhQUFTLEVBQUMsMkVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkF2Q0YsRUEwQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHYixJQUFJLENBQUNzQyxpQkFBTCxDQUF1QkMsR0FBdkIsQ0FBNEJDLFNBQUQsSUFDMUI7QUFDRSxhQUFTLEVBQUMsNENBRFo7QUFFRSxPQUFHLEVBQUVBLFNBQVMsQ0FBQ3ZCLEVBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUNFLGFBQVMsRUFBQyxrRkFEWjtBQUVFLFdBQU8sRUFBRSxNQUFNRCxZQUFZLENBQUN3QixTQUFTLENBQUN2QixFQUFYLENBRjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJR3VCLFNBQVMsQ0FBQ0MsTUFKYixDQUpGLEVBVUU7QUFBSyxhQUFTLEVBQUMsMENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFNUIsZUFBZSxHQUFJO0FBQ2pCLFdBQU8sRUFBRSxNQUFNUywwQkFBMEIsQ0FBQ2tCLFNBQVMsQ0FBQ3ZCLEVBQVgsQ0FEeEI7QUFFakIsYUFBUyxFQUFDLGtEQUZPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJakI7QUFDRSxhQUFTLEVBQUMsZ0JBRFo7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFVBQU0sRUFBQyxjQUhUO0FBSUUsV0FBTyxFQUFDLFdBSlY7QUFLRSxTQUFLLEVBQUMsNEJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQ0UsaUJBQWEsRUFBQyxPQURoQjtBQUVFLGtCQUFjLEVBQUMsT0FGakI7QUFHRSxlQUFXLEVBQUMsR0FIZDtBQUlFLEtBQUMsRUFBQyxzQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FKaUIsQ0FBSixHQW1CWixFQXBCTCxFQXNCRUosZUFBZSxHQUM5QjtBQUNpQixXQUFPLEVBQUUsTUFBTVEsZUFBZSxDQUFDbUIsU0FBUyxDQUFDdkIsRUFBWCxDQUQvQztBQUVpQixhQUFTLEVBQUMsd0RBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJaUI7QUFDRSxhQUFTLEVBQUMsU0FEWjtBQUVFLFFBQUksRUFBQyxNQUZQO0FBR0UsVUFBTSxFQUFDLGNBSFQ7QUFJRSxXQUFPLEVBQUMsV0FKVjtBQUtFLFNBQUssRUFBQyw0QkFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFDRSxpQkFBYSxFQUFDLE9BRGhCO0FBRUUsa0JBQWMsRUFBQyxPQUZqQjtBQUdFLGVBQVcsRUFBQyxHQUhkO0FBSUUsS0FBQyxFQUFDLHdIQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQUpqQixDQUQ4QixHQW9CWixFQTFDTCxDQVZGLENBREQsQ0FESCxDQTFDRixDQU5GLENBREY7QUFnSEQsQ0EzS0Q7O0FBNktBLCtEQUFlbEIsT0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0yQyxNQUFNLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDL0IsU0FDRSxxRUFDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFDRSxPQUFHLEVBQUMsWUFETjtBQUVFLFFBQUksRUFBQyxzRUFGUDtBQUdFLGFBQVMsRUFBQyxpR0FIWjtBQUlFLGVBQVcsRUFBQyxXQUpkO0FBS0Usa0JBQWMsRUFBQyxhQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFTRTtBQUNFLFFBQUksRUFBQyx3REFEUDtBQUVFLE9BQUcsRUFBQyxZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQWFFO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLDJCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsRUFjRTtBQUNFLFFBQUksRUFBQyxvRUFEUDtBQUVFLE9BQUcsRUFBQyxZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixDQURGLEVBb0JFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sYUFBUyxFQUFDLDBDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLFFBREgsQ0FGRixDQXBCRixDQURGO0FBNkJELENBOUJEOztBQWdDQSwrREFBZUQsTUFBZixFOzs7Ozs7Ozs7O0FDckNBLGUiLCJmaWxlIjoiY29tcG9uZW50ZXNfbGF5b3V0X2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBPQlRFTkVSX0NBVEVHT1JJQVMgPSBncWxgXHJcbiAgcXVlcnkgb2J0ZW5lckNhdGVnb3JpYXMge1xyXG4gICAgb2J0ZW5lckNhdGVnb3JpYXMge1xyXG4gICAgICBpZFxyXG4gICAgICBub21icmVcclxuICAgICAgZGVzY3JpcGNpb25cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IEVMSU1JTkFSX0NBVEVHT1JJQSA9IGdxbGBcclxuICBtdXRhdGlvbiBlbGltaW5hckNhdGVnb3JpYSgkaWQ6IElEISkge1xyXG4gICAgZWxpbWluYXJDYXRlZ29yaWEoaWQ6ICRpZClcclxuICB9XHJcbmA7XHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciwgcmVmZXRjaCB9ID0gdXNlUXVlcnkoT0JURU5FUl9DQVRFR09SSUFTKTtcclxuICBjb25zdCBbZWxpbWluYXJDYXRlZ29yaWFdID0gdXNlTXV0YXRpb24oRUxJTUlOQVJfQ0FURUdPUklBKTtcclxuICBjb25zdCBbYmFycmEsIHNldEJhcnJhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGxldCBiYXJyYUNsYXNlID0gXCJiZy15ZWxsb3ctOTAwICB4bDp3LTEvNSAgXCI7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChiYXJyYSA9PSB0cnVlKSB7XHJcbiAgICAgIGJhcnJhQ2xhc2UucmVwbGFjZShcclxuICAgICAgICBcImJnLXllbGxvdy05MDAgIHhsOnctMS81ICBiYXJyYS1sYXRlcmFsXCIsXHJcbiAgICAgICAgXCJiZy15ZWxsb3ctOTAwICB4bDp3LTEvNSAgYmFycmEtYWN0aXZhXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChiYXJyYSA9PSBmYWxzZSkge1xyXG4gICAgICBiYXJyYUNsYXNlID0gXCJiZy15ZWxsb3ctOTAwICB4bDp3LTEvNSAgYmFycmEtbGF0ZXJhbFwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmIChsb2FkaW5nIHx8ICFkYXRhKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsZHMtaG91cmdsYXNzXCI+PC9kaXY+O1xyXG4gIGNvbnN0IHRva2VuQXV0b3JpemFkbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgLy8gaWYgKCF0b2tlbkF1dG9yaXphZG8pIHtcclxuICAvLyAgIHJvdXRlci5wdXNoKFwiL2F1dGVudGljYXJzZVwiKTtcclxuICAvLyB9XHJcbiAgY29uc3QgdmVyQ2F0ZWdvcmlhID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBhd2FpdCBSb3V0ZXIucHVzaCh7XHJcbiAgICAgIHBhdGhuYW1lOiBcIi9jYXRlZ29yaWEvW2lkXVwiLFxyXG4gICAgICBxdWVyeTogeyBpZCB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBlZGl0YXJDYXRlZ29yaWEgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGF3YWl0IFJvdXRlci5wdXNoKHtcclxuICAgICAgcGF0aG5hbWU6IFwiL2VkaXRhcmNhdGVnb3JpYS9baWRdXCIsXHJcbiAgICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGNvbmZpcm1hckVsaW1pbmFyQ2F0ZWdvcmlhID0gKGlkQ2F0ZWdvcmlhKSA9PiB7XHJcbiAgICBTd2FsLmZpcmUoe1xyXG4gICAgICB0aXRsZTogXCJTZWd1cm8gcXVpZXJlcyBlbGltaW5hciBlc3RhIGNhdGVnb3JpYT9cIixcclxuICAgICAgdGV4dDogXCJubyBsbyBwb2RyYXMgcmV2ZXJ0aXIhXCIsXHJcbiAgICAgIGljb246IFwid2FybmluZ1wiLFxyXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlNJLCBtYW5kYWxlIHVyYSFcIixcclxuICAgIH0pLnRoZW4oYXN5bmMgKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgZWxpbWluYXJDYXRlZ29yaWEoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICBpZDogaWRDYXRlZ29yaWEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJlZmV0Y2goKTtcclxuICAgICAgICAgIFN3YWwuZmlyZShcIkVsaW1pbmFkbyFcIiwgZGF0YS5lbGltaW5hckNhdGVnb3JpYSwgXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRCYXJyYSghYmFycmEpfSBjbGFzc05hbWU9XCJoYW1idXJndWVzYVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtiYXJyYSA/IFwibGluZWExXCIgOiBcImxpbmVhMWJcIn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2JhcnJhID8gXCJsaW5lYTJcIiA6IFwibGluZWEyYlwifT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YmFycmEgPyBcImxpbmVhM1wiIDogXCJsaW5lYTNiXCJ9PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGFzaWRlXHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIGJhcnJhXHJcbiAgICAgICAgICAgID8gXCJiZy15ZWxsb3ctOTAwIG1kOnctMS80IGxnOnctMS81ICBiYXJyYS1sYXRlcmFsXCJcclxuICAgICAgICAgICAgOiBcImJnLXllbGxvdy05MDAgIHhsOnctMS81ICBiYXJyYS1hY3RpdmFcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZD1cImJhcnJhXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGlkPVwiYmFycmFMYXRlcmFsXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBiZy15ZWxsb3ctNzAwIGhvdmVyOmJnLWdyYXktODAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL01lbWVUZWNhLnBuZ1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezEyN31cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezEzN31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQteGwgIG10LTIgcC01ICB0aXR1bG9cIj5cclxuICAgICAgICAgICAgICBNZW1lVGVjYVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHt0b2tlbkF1dG9yaXphZG8gPyAoXHJcbjxMaW5rIGhyZWY9XCIvbnVldmFDYXRlZ29yaWFcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS01MDAgaG92ZXI6YmctZ3JheS00MDAgdGV4dC13aGl0ZSB0ZXh0LTN4bCBmb250LWJvbGQgcHktMiBweC00IGJvcmRlci1iLTQgYm9yZGVyLWdyYXktNzAwIGhvdmVyOmJvcmRlci1ncmF5LTUwMCByb3VuZGVkIG1sLTIgbXQtNFwiPlxyXG5cclxuICAgICAgICAgICAgQ3JlYXIgQ2F0ZWdvcmlhXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0ZW50aWNhcnNlXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktNTAwIGhvdmVyOmJnLWdyYXktNDAwIHRleHQtd2hpdGUgdGV4dC0zeGwgZm9udC1ib2xkIHB5LTIgcHgtNCBib3JkZXItYi00IGJvcmRlci1ncmF5LTcwMCBob3Zlcjpib3JkZXItZ3JheS01MDAgcm91bmRlZCBtbC0yIG10LTQgc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgQWRtaW5pc3RyYWRvclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC14bCBwbC03IG10LTIgaG92ZXI6dGV4dC1ncmF5LTkwMCBjdXJzb3ItZGVmYXVsdFwiPlxyXG4gICAgICAgICAgQ2F0ZWdvcmlhcyBkZSBNZW1lc1xyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCIgbXQtNSBsaXN0LW5vbmVcIj5cclxuICAgICAgICAgIHtkYXRhLm9idGVuZXJDYXRlZ29yaWFzLm1hcCgoY2F0ZWdvcmlhKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgIGtleT17Y2F0ZWdvcmlhLmlkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtanVzdGlmeSBmb250LWJvbGQgbWwtNCBwYi0zIGhvdmVyOnRleHQtYmxhY2sgY3Vyc29yLXBvaW50ZXIgcHktMlwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2ZXJDYXRlZ29yaWEoY2F0ZWdvcmlhLmlkKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcmlhLm5vbWJyZX1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW1iLTIgcHItNCBmbGV4IGZsZXgtbm93cmFwICBzZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICB7dG9rZW5BdXRvcml6YWRvID8gKDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uZmlybWFyRWxpbWluYXJDYXRlZ29yaWEoY2F0ZWdvcmlhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHctNiBoLTYgYmctcmVkLTcwMCBob3ZlcjpiZy1yZWQtOTAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgaG92ZXI6XCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICApIDogJycgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIHt0b2tlbkF1dG9yaXphZG8gPyAoXHJcbiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRhckNhdGVnb3JpYShjYXRlZ29yaWEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgdy02IGgtNiBiZy15ZWxsb3ctNzAwIGhvdmVyOmJnLXllbGxvdy05MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTEgNUg2YTIgMiAwIDAwLTIgMnYxMWEyIDIgMCAwMDIgMmgxMWEyIDIgMCAwMDItMnYtNW0tMS40MTQtOS40MTRhMiAyIDAgMTEyLjgyOCAyLjgyOEwxMS44MjggMTVIOXYtMi44MjhsOC41ODYtOC41ODZ6XCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICApIDogJyd9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiIsImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50ZXMvU2lkZWJhclwiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TWVtZXRlY2E8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9ub3JtYWxpemUvOC4wLjEvbm9ybWFsaXplLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGE1MTItb0hERWM4WGVkNGhpVzZDeEQ3cWpibkkrQjA3dkRkWDdoRVBUdm45cFNaTzFiY1JxSHA4bWo5cHlyKzhSVkMyR210RWZJMkJpOUtlOUFzczBhcyt6cGc9PVwiXHJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgICByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vdGFpbHdpbmRjc3NAXjIvZGlzdC90YWlsd2luZC5taW4uY3NzXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCI+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1WaWFvZGErTGlicmUmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlblwiPlxyXG4gICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiIHNtOnctZnVsbCBtZC0zLzQgbGc6dy00LzUgIGJnLWdyYXktMjAwIFwiPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9
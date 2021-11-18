(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
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
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: barra ? "linea1" : "linea1b",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: barra ? "linea2" : "linea2b",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: barra ? "linea3" : "linea3b",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  })), __jsx("aside", {
    className: barra ? "bg-yellow-900 md:w-1/4 lg:w-1/5  barra-lateral" : "bg-yellow-900  xl:w-1/5  barra-activa",
    id: "barra",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "barraLateral",
    className: "flex flex-row bg-yellow-700 hover:bg-gray-800 cursor-pointer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 99,
      columnNumber: 13
    }
  }), __jsx("h1", {
    className: "text-white font-bold text-xl  mt-2 p-5  titulo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "MemeTeca"))), tokenAutorizado ? __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/nuevaCategoria",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 1
    }
  }, __jsx("button", {
    className: "bg-gray-500 hover:bg-gray-400 text-white text-3xl font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded ml-2 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, "Crear Categoria")) : __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/autenticarse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "bg-gray-500 hover:bg-gray-400 text-white text-3xl font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded ml-2 mt-4 self-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, "Administrador")), __jsx("h1", {
    className: "text-white font-bold text-xl pl-7 mt-2 hover:text-gray-900 cursor-default",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, "Categorias de Memes"), __jsx("nav", {
    className: " mt-5 list-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, data.obtenerCategorias.map(categoria => __jsx("div", {
    className: "flex flex-row justify-between items-center",
    key: categoria.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "text-white text-justify font-bold ml-4 pb-3 hover:text-black cursor-pointer py-2",
    onClick: () => verCategoria(categoria.id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, categoria.nombre), __jsx("div", {
    className: "-mb-2 pr-4 flex flex-nowrap  self-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, tokenAutorizado ? __jsx("button", {
    onClick: () => confirmarEliminarCategoria(categoria.id),
    className: "rounded-full w-6 h-6 bg-red-700 hover:bg-red-900",
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  }))) : '', tokenAutorizado ? __jsx("button", {
    onClick: () => editarCategoria(categoria.id),
    className: "rounded-full w-6 h-6 bg-yellow-700 hover:bg-yellow-900",
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _componentes_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../componentes/layout */ "./componentes/layout.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\codigos\\MemeTeca\\meme-front\\pages\\index.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const MEMES_MAS_COMENTADOS = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  query memesMasComentados {
    memesMasComentados {
      total
      meme {
        _id
        imagen
        nombre
        descripcion
        creado
      }
    }
  }
`;
function Home() {
  const {
    data,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(MEMES_MAS_COMENTADOS);
  if (loading || !data) return __jsx("div", {
    className: "lds-hourglass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 32
    }
  });

  const imagenMeme = imagen => {
    if (!imagen) {
      return "null";
    } else return imagen;
  };

  const verMeme = async id => {
    await next_router__WEBPACK_IMPORTED_MODULE_3___default().push({
      pathname: "/meme/[id]",
      query: {
        id
      }
    });
  };

  return __jsx(_componentes_layout__WEBPACK_IMPORTED_MODULE_1__.default, {
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
  }, data.memesMasComentados.map(mtop => {
    const {
      nombre,
      imagen,
      descripcion,
      _id
    } = mtop.meme[0];
    return __jsx("div", {
      className: "flex justify-between m-6  ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "flex flex-col h-full max-w-lg mx-auto bg-red-800 rounded-lg pb-4 carta-animada",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, __jsx("img", {
      className: "rounded-lg rounded-b-none misma-altura ",
      src: imagenMeme(imagen),
      onError: e => {
        e.target.onerror = null;
        e.target.src = "/default.jpg";
      },
      alt: "thumbnail",
      loading: "lazy",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: "flex justify-between -mt-4 px-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium",
      __self: this,
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
      __self: this,
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
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }
    })), __jsx("p", {
      className: "text-blue-500 font-semibold text-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 23
      }
    }, mtop.total, " comentarios"))), __jsx("div", {
      className: "py-2 px-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 19
      }
    }, __jsx("h1", {
      onClick: () => verMeme(_id),
      className: "text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }
    }, nombre)), __jsx("div", {
      className: "px-4 space-y-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 19
      }
    }, __jsx("p", {
      className: "text-gray-400 font-normal leading-5 tracking-wide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }, descripcion))));
  }))));
}

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("sweetalert2");;

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

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZW1lLWZyb250Ly4vY29tcG9uZW50ZXMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly9tZW1lLWZyb250Ly4vY29tcG9uZW50ZXMvbGF5b3V0LmpzIiwid2VicGFjazovL21lbWUtZnJvbnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZW1lLWZyb250L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9tZW1lLWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9tZW1lLWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL21lbWUtZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9tZW1lLWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9tZW1lLWZyb250L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcInN3ZWV0YWxlcnQyXCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9pZ25vcmVkfEQ6XFxjb2RpZ29zXFxNZW1lVGVjYVxcbWVtZS1mcm9udFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIk9CVEVORVJfQ0FURUdPUklBUyIsImdxbCIsIkVMSU1JTkFSX0NBVEVHT1JJQSIsIlNpZGViYXIiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwicmVmZXRjaCIsInVzZVF1ZXJ5IiwiZWxpbWluYXJDYXRlZ29yaWEiLCJ1c2VNdXRhdGlvbiIsImJhcnJhIiwic2V0QmFycmEiLCJ1c2VTdGF0ZSIsImJhcnJhQ2xhc2UiLCJ1c2VFZmZlY3QiLCJyZXBsYWNlIiwidG9rZW5BdXRvcml6YWRvIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInZlckNhdGVnb3JpYSIsImlkIiwiUm91dGVyIiwicGF0aG5hbWUiLCJxdWVyeSIsImVkaXRhckNhdGVnb3JpYSIsImNvbmZpcm1hckVsaW1pbmFyQ2F0ZWdvcmlhIiwiaWRDYXRlZ29yaWEiLCJTd2FsIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwidmFyaWFibGVzIiwiY29uc29sZSIsImxvZyIsIm9idGVuZXJDYXRlZ29yaWFzIiwibWFwIiwiY2F0ZWdvcmlhIiwibm9tYnJlIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJNRU1FU19NQVNfQ09NRU5UQURPUyIsIkhvbWUiLCJpbWFnZW5NZW1lIiwiaW1hZ2VuIiwidmVyTWVtZSIsIm1lbWVzTWFzQ29tZW50YWRvcyIsIm10b3AiLCJkZXNjcmlwY2lvbiIsIl9pZCIsIm1lbWUiLCJlIiwidGFyZ2V0Iiwib25lcnJvciIsInNyYyIsInRvdGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7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QTtBQUFBLE9BSUdYLE1BSkgsQ0FERixDQWhDRixFQXdDRTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsbURBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHVSxXQURILENBREYsQ0F4Q0YsQ0FERixDQURGO0FBa0RELEdBcERBLENBREgsQ0FSRixDQURGLENBREY7QUFvRUQsQzs7Ozs7Ozs7Ozs7QUN2R0QsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBPQlRFTkVSX0NBVEVHT1JJQVMgPSBncWxgXHJcbiAgcXVlcnkgb2J0ZW5lckNhdGVnb3JpYXMge1xyXG4gICAgb2J0ZW5lckNhdGVnb3JpYXMge1xyXG4gICAgICBpZFxyXG4gICAgICBub21icmVcclxuICAgICAgZGVzY3JpcGNpb25cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IEVMSU1JTkFSX0NBVEVHT1JJQSA9IGdxbGBcclxuICBtdXRhdGlvbiBlbGltaW5hckNhdGVnb3JpYSgkaWQ6IElEISkge1xyXG4gICAgZWxpbWluYXJDYXRlZ29yaWEoaWQ6ICRpZClcclxuICB9XHJcbmA7XHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciwgcmVmZXRjaCB9ID0gdXNlUXVlcnkoT0JURU5FUl9DQVRFR09SSUFTKTtcclxuICBjb25zdCBbZWxpbWluYXJDYXRlZ29yaWFdID0gdXNlTXV0YXRpb24oRUxJTUlOQVJfQ0FURUdPUklBKTtcclxuICBjb25zdCBbYmFycmEsIHNldEJhcnJhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGxldCBiYXJyYUNsYXNlID0gXCJiZy15ZWxsb3ctOTAwICB4bDp3LTEvNSAgXCI7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChiYXJyYSA9PSB0cnVlKSB7XHJcbiAgICAgIGJhcnJhQ2xhc2UucmVwbGFjZShcclxuICAgICAgICBcImJnLXllbGxvdy05MDAgIHhsOnctMS81ICBiYXJyYS1sYXRlcmFsXCIsXHJcbiAgICAgICAgXCJiZy15ZWxsb3ctOTAwICB4bDp3LTEvNSAgYmFycmEtYWN0aXZhXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChiYXJyYSA9PSBmYWxzZSkge1xyXG4gICAgICBiYXJyYUNsYXNlID0gXCJiZy15ZWxsb3ctOTAwICB4bDp3LTEvNSAgYmFycmEtbGF0ZXJhbFwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmIChsb2FkaW5nIHx8ICFkYXRhKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsZHMtaG91cmdsYXNzXCI+PC9kaXY+O1xyXG4gIGNvbnN0IHRva2VuQXV0b3JpemFkbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgY29uc3QgdmVyQ2F0ZWdvcmlhID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBhd2FpdCBSb3V0ZXIucHVzaCh7XHJcbiAgICAgIHBhdGhuYW1lOiBcIi9jYXRlZ29yaWEvW2lkXVwiLFxyXG4gICAgICBxdWVyeTogeyBpZCB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBlZGl0YXJDYXRlZ29yaWEgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGF3YWl0IFJvdXRlci5wdXNoKHtcclxuICAgICAgcGF0aG5hbWU6IFwiL2VkaXRhcmNhdGVnb3JpYS9baWRdXCIsXHJcbiAgICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGNvbmZpcm1hckVsaW1pbmFyQ2F0ZWdvcmlhID0gKGlkQ2F0ZWdvcmlhKSA9PiB7XHJcbiAgICBTd2FsLmZpcmUoe1xyXG4gICAgICB0aXRsZTogXCJTZWd1cm8gcXVpZXJlcyBlbGltaW5hciBlc3RhIGNhdGVnb3JpYT9cIixcclxuICAgICAgdGV4dDogXCJubyBsbyBwb2RyYXMgcmV2ZXJ0aXIhXCIsXHJcbiAgICAgIGljb246IFwid2FybmluZ1wiLFxyXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlNJLCBtYW5kYWxlIHVyYSFcIixcclxuICAgIH0pLnRoZW4oYXN5bmMgKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgZWxpbWluYXJDYXRlZ29yaWEoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICBpZDogaWRDYXRlZ29yaWEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJlZmV0Y2goKTtcclxuICAgICAgICAgIFN3YWwuZmlyZShcIkVsaW1pbmFkbyFcIiwgZGF0YS5lbGltaW5hckNhdGVnb3JpYSwgXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRCYXJyYSghYmFycmEpfSBjbGFzc05hbWU9XCJoYW1idXJndWVzYVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtiYXJyYSA/IFwibGluZWExXCIgOiBcImxpbmVhMWJcIn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2JhcnJhID8gXCJsaW5lYTJcIiA6IFwibGluZWEyYlwifT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YmFycmEgPyBcImxpbmVhM1wiIDogXCJsaW5lYTNiXCJ9PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGFzaWRlXHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIGJhcnJhXHJcbiAgICAgICAgICAgID8gXCJiZy15ZWxsb3ctOTAwIG1kOnctMS80IGxnOnctMS81ICBiYXJyYS1sYXRlcmFsXCJcclxuICAgICAgICAgICAgOiBcImJnLXllbGxvdy05MDAgIHhsOnctMS81ICBiYXJyYS1hY3RpdmFcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZD1cImJhcnJhXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGlkPVwiYmFycmFMYXRlcmFsXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBiZy15ZWxsb3ctNzAwIGhvdmVyOmJnLWdyYXktODAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL01lbWVUZWNhLnBuZ1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezEyN31cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezEzN31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQteGwgIG10LTIgcC01ICB0aXR1bG9cIj5cclxuICAgICAgICAgICAgICBNZW1lVGVjYVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHt0b2tlbkF1dG9yaXphZG8gPyAoXHJcbjxMaW5rIGhyZWY9XCIvbnVldmFDYXRlZ29yaWFcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS01MDAgaG92ZXI6YmctZ3JheS00MDAgdGV4dC13aGl0ZSB0ZXh0LTN4bCBmb250LWJvbGQgcHktMiBweC00IGJvcmRlci1iLTQgYm9yZGVyLWdyYXktNzAwIGhvdmVyOmJvcmRlci1ncmF5LTUwMCByb3VuZGVkIG1sLTIgbXQtNFwiPlxyXG5cclxuICAgICAgICAgICAgQ3JlYXIgQ2F0ZWdvcmlhXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0ZW50aWNhcnNlXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktNTAwIGhvdmVyOmJnLWdyYXktNDAwIHRleHQtd2hpdGUgdGV4dC0zeGwgZm9udC1ib2xkIHB5LTIgcHgtNCBib3JkZXItYi00IGJvcmRlci1ncmF5LTcwMCBob3Zlcjpib3JkZXItZ3JheS01MDAgcm91bmRlZCBtbC0yIG10LTQgc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgQWRtaW5pc3RyYWRvclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC14bCBwbC03IG10LTIgaG92ZXI6dGV4dC1ncmF5LTkwMCBjdXJzb3ItZGVmYXVsdFwiPlxyXG4gICAgICAgICAgQ2F0ZWdvcmlhcyBkZSBNZW1lc1xyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCIgbXQtNSBsaXN0LW5vbmVcIj5cclxuICAgICAgICAgIHtkYXRhLm9idGVuZXJDYXRlZ29yaWFzLm1hcCgoY2F0ZWdvcmlhKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgIGtleT17Y2F0ZWdvcmlhLmlkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtanVzdGlmeSBmb250LWJvbGQgbWwtNCBwYi0zIGhvdmVyOnRleHQtYmxhY2sgY3Vyc29yLXBvaW50ZXIgcHktMlwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2ZXJDYXRlZ29yaWEoY2F0ZWdvcmlhLmlkKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcmlhLm5vbWJyZX1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW1iLTIgcHItNCBmbGV4IGZsZXgtbm93cmFwICBzZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICB7dG9rZW5BdXRvcml6YWRvID8gKDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uZmlybWFyRWxpbWluYXJDYXRlZ29yaWEoY2F0ZWdvcmlhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHctNiBoLTYgYmctcmVkLTcwMCBob3ZlcjpiZy1yZWQtOTAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgaG92ZXI6XCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICApIDogJycgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIHt0b2tlbkF1dG9yaXphZG8gPyAoXHJcbiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRhckNhdGVnb3JpYShjYXRlZ29yaWEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgdy02IGgtNiBiZy15ZWxsb3ctNzAwIGhvdmVyOmJnLXllbGxvdy05MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTEgNUg2YTIgMiAwIDAwLTIgMnYxMWEyIDIgMCAwMDIgMmgxMWEyIDIgMCAwMDItMnYtNW0tMS40MTQtOS40MTRhMiAyIDAgMTEyLjgyOCAyLjgyOEwxMS44MjggMTVIOXYtMi44MjhsOC41ODYtOC41ODZ6XCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICApIDogJyd9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiIsImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50ZXMvU2lkZWJhclwiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TWVtZXRlY2E8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9ub3JtYWxpemUvOC4wLjEvbm9ybWFsaXplLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGE1MTItb0hERWM4WGVkNGhpVzZDeEQ3cWpibkkrQjA3dkRkWDdoRVBUdm45cFNaTzFiY1JxSHA4bWo5cHlyKzhSVkMyR210RWZJMkJpOUtlOUFzczBhcyt6cGc9PVwiXHJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgICByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vdGFpbHdpbmRjc3NAXjIvZGlzdC90YWlsd2luZC5taW4uY3NzXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCI+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1WaWFvZGErTGlicmUmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlblwiPlxyXG4gICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiIHNtOnctZnVsbCBtZC0zLzQgbGc6dy00LzUgIGJnLWdyYXktMjAwIFwiPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRlcy9sYXlvdXRcIjtcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IE1FTUVTX01BU19DT01FTlRBRE9TID0gZ3FsYFxuICBxdWVyeSBtZW1lc01hc0NvbWVudGFkb3Mge1xuICAgIG1lbWVzTWFzQ29tZW50YWRvcyB7XG4gICAgICB0b3RhbFxuICAgICAgbWVtZSB7XG4gICAgICAgIF9pZFxuICAgICAgICBpbWFnZW5cbiAgICAgICAgbm9tYnJlXG4gICAgICAgIGRlc2NyaXBjaW9uXG4gICAgICAgIGNyZWFkb1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShNRU1FU19NQVNfQ09NRU5UQURPUyk7XG4gIGlmIChsb2FkaW5nIHx8ICFkYXRhKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsZHMtaG91cmdsYXNzXCI+PC9kaXY+O1xuICBjb25zdCBpbWFnZW5NZW1lID0gKGltYWdlbikgPT4ge1xuICAgIGlmICghaW1hZ2VuKSB7XG4gICAgICByZXR1cm4gXCJudWxsXCI7XG4gICAgfSBlbHNlIHJldHVybiBpbWFnZW47XG4gIH07XG5cbiAgY29uc3QgdmVyTWVtZSA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGF3YWl0IFJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiBcIi9tZW1lL1tpZF1cIixcbiAgICAgIHF1ZXJ5OiB7IGlkIH0sXG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCAgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJUaXR1bG8tUHJpbmNpcGFsIG10LTEwIGJnLXllbGxvdy04MDAgdGV4dC13aGl0ZSBweC01IHNoYWRvdy0yeGwgcm91bmRlZFwiPlxuICAgICAgICAgIE1lbWVUZWNhXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJUaXR1bG8tUHJpbmNpcGFsIHdhdmVzXCI+XG4gICAgICAgICAgZWwgcmVnaXN0cm8gZGUgbWVtZXMgZGUgbGEgaW50ZXJuZXRcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+TWVtZXMgbWFzIGNvbWVudGFkb3M8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdyaWQgc206Z3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICB7ZGF0YS5tZW1lc01hc0NvbWVudGFkb3MubWFwKChtdG9wKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IG5vbWJyZSwgaW1hZ2VuLCBkZXNjcmlwY2lvbiwgX2lkIH0gPSBtdG9wLm1lbWVbMF07XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG0tNiAgXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtZnVsbCBtYXgtdy1sZyBteC1hdXRvIGJnLXJlZC04MDAgcm91bmRlZC1sZyBwYi00IGNhcnRhLWFuaW1hZGFcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyByb3VuZGVkLWItbm9uZSBtaXNtYS1hbHR1cmEgXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZW5NZW1lKGltYWdlbil9XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQub25lcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3JjID0gXCIvZGVmYXVsdC5qcGdcIjtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwidGh1bWJuYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gLW10LTQgcHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGgtbWluIHNwYWNlLXgtMSBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIHRleHQtZ3JheS00MDAgYmctZ3JheS04MDAgcHktMSBweC0yIHRleHQteHMgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTggMTJoLjAxTTEyIDEyaC4wMU0xNiAxMmguMDFNMjEgMTJjMCA0LjQxOC00LjAzIDgtOSA4YTkuODYzIDkuODYzIDAgMDEtNC4yNTUtLjk0OUwzIDIwbDEuMzk1LTMuNzJDMy41MTIgMTUuMDQyIDMgMTMuNTc0IDMgMTJjMC00LjQxOCA0LjAzLTggOS04czkgMy41ODIgOSA4elwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgZm9udC1zZW1pYm9sZCB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bXRvcC50b3RhbH0gY29tZW50YXJpb3NcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdmVyTWVtZShfaWQpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gbGVhZGluZy02IHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LWJsdWUtNTAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtub21icmV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBmb250LW5vcm1hbCBsZWFkaW5nLTUgdHJhY2tpbmctd2lkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwY2lvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dlZXRhbGVydDJcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=
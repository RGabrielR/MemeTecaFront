(function() {
var exports = {};
exports.id = "pages/meme/[pid]";
exports.ids = ["pages/meme/[pid]"];
exports.modules = {

/***/ "./pages/meme/[pid].js":
/*!*****************************!*\
  !*** ./pages/meme/[pid].js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _componentes_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../componentes/layout */ "./componentes/layout.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_editext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-editext */ "react-editext");
/* harmony import */ var react_editext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_editext__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\codigos\\MemeTeca\\meme-front\\pages\\meme\\[pid].js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








const COMENTARIOS_POR_MEME = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  query obtenerComentariosPorMeme($input: MemeIdInput) {
    obtenerComentariosPorMeme(input: $input) {
      id
      texto
      creado
    }
  }
`;
const OBTENER_MEME = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  query obtenerMeme($id: ID!) {
    obtenerMeme(id: $id) {
      id
      imagen
      nombre
      descripcion
      categoria
      creado
    }
  }
`;
const NUEVO_COMENTARIO = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  mutation nuevoComentario($input: ComentarioInput) {
    nuevoComentario(input: $input) {
      id
      texto
      meme
      creado
    }
  }
`;
const ELIMINAR_COMENTARIO = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  mutation eliminarComentario($id: ID!) {
    eliminarComentario(id: $id)
  }
`;
const ACTUALIZAR_COMENTARIO = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  mutation actualizarComentario($id: ID!, $input: ComentarioInput) {
    actualizarComentario(id: $id, input: $input) {
      texto
      meme
    }
  }
`;

const MemeYComentarios = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    query: {
      pid
    }
  } = router;
  const {
    loading,
    error,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(OBTENER_MEME, {
    variables: {
      id: pid
    }
  });
  const {
    loading: loadingC,
    error: errorC,
    data: dataC,
    refetch
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(COMENTARIOS_POR_MEME, {
    variables: {
      input: {
        meme: pid
      }
    }
  });
  const [nuevoComentario] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(NUEVO_COMENTARIO);
  const [eliminarComentario] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(ELIMINAR_COMENTARIO);
  const [actualizarComentario] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(ACTUALIZAR_COMENTARIO);
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({
    initialValues: {
      texto: ""
    },
    onSubmit: async valores => {
      const {
        texto
      } = valores;

      try {
        const {
          data
        } = await nuevoComentario({
          variables: {
            input: {
              texto,
              meme: pid
            }
          }
        });
        refetch().then(formik.resetForm());
        router.push(`/meme/${pid}`);
      } catch (error) {
        console.log(error);
      }
    }
  });
  if (loading || loadingC) return __jsx("div", {
    className: "lds-hourglass",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 35
    }
  });
  if (error) return error.message;
  if (errorC) return errorC.message;
  const tokenAutorizado = localStorage.getItem("token");

  const imagenMeme = imagen => {
    if (!imagen) {
      return "null";
    } else return imagen;
  };

  const confirmarEliminarComentario = idComentario => {
    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
      title: "Seguro quieres eliminar este Comentario?",
      text: "no lo podras revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI"
    }).then(async result => {
      if (result.value) {
        try {
          const {
            data
          } = await eliminarComentario({
            variables: {
              id: idComentario
            }
          });
          refetch();
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire("Eliminado!", data.eliminarMeme, "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return __jsx(_componentes_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: " flex flex-col items-center justify-center w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "text-4xl text-yellow-900 font-bold mt-10 Titulo-Principal mb-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, data.obtenerMeme.nombre), __jsx("img", {
    src: imagenMeme(data.obtenerMeme.imagen),
    onError: e => {
      e.target.onerror = null;
      e.target.src = "https://i.redd.it/s3y10estw5051.png";
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }), __jsx("h1", {
    className: " text-2xl px-6 py-3 text-white font-bold mt-5 bg-yellow-700 font-mono hover:text-black cursor-default ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, data.obtenerMeme.descripcion), __jsx("h1", {
    className: "text-xl font-mono text-yellow-700 my-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  }, "Comentarios:", " "), __jsx("div", {
    className: "mb-12 self-center items-center w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, dataC.obtenerComentariosPorMeme.map(comentario => {
    const onSave = async val => {
      await actualizarComentario({
        variables: {
          id: comentario.id,
          input: {
            texto: val,
            meme: pid
          }
        }
      });
    };

    return __jsx("div", {
      key: comentario.id,
      className: "flex flex-row justify-around sm:justify-center comentarios ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 15
      }
    }, tokenAutorizado ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
      className: "comentarioss",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 17
      }
    }, __jsx((react_editext__WEBPACK_IMPORTED_MODULE_6___default()), {
      type: "text",
      value: comentario.texto,
      onSave: onSave,
      id: comentario.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 19
      }
    })), __jsx("button", {
      className: "como-el-edit",
      onClick: () => confirmarEliminarComentario(comentario.id),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
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
        lineNumber: 196,
        columnNumber: 19
      }
    }, __jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3",
      d: "M6 18L18 6M6 6l12 12",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 21
      }
    })))) : __jsx("div", {
      className: "comentarioss font-bold py-4",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 17
      }
    }, comentario.texto));
  })), __jsx("div", {
    className: "flex mx-auto items-center justify-center shadow-lg mt-12 mx-8 mb-4 max-w-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: formik.handleSubmit,
    className: "w-full max-w-xl bg-white rounded-lg px-4 pt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "flex flex-wrap -mx-3 mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "px-4 pt-3 pb-2 text-gray-800 text-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 15
    }
  }, "Agregar nuevo Comentario"), __jsx("div", {
    className: "w-full md:w-full px-3 mb-2 mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 15
    }
  }, __jsx("textarea", {
    className: "bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white",
    name: "texto",
    onChange: formik.handleChange,
    value: formik.values.texto,
    type: "texto",
    id: "texto",
    htmlFor: "texto",
    placeholder: "Tu comentario",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "w-full md:w-full flex items-start md:w-full px-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex items-start w-2/3 text-gray-700 px-2 py-2 mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }, __jsx("svg", {
    fill: "none",
    className: "w-5 h-5 text-gray-600 mr-1",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 19
    }
  }, __jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 21
    }
  })), __jsx("p", {
    className: "text-xs md:text-sm pt-px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 19
    }
  }, "Respeta las Reglas de la Comunidad")), __jsx("div", {
    className: "mr-1 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "submit",
    className: "bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-300",
    value: "Postear",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 19
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MemeYComentarios);

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

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

/***/ "react-editext":
/*!********************************!*\
  !*** external "react-editext" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-editext");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("sweetalert2");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js-node_modules_next_link_js","componentes_layout_js"], function() { return __webpack_exec__("./pages/meme/[pid].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZW1lLWZyb250Ly4vcGFnZXMvbWVtZS9bcGlkXS5qcyIsIndlYnBhY2s6Ly9tZW1lLWZyb250L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9tZW1lLWZyb250L2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL21lbWUtZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9tZW1lLWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL21lbWUtZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL21lbWUtZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL21lbWUtZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1lZGl0ZXh0XCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcInN3ZWV0YWxlcnQyXCIiXSwibmFtZXMiOlsiQ09NRU5UQVJJT1NfUE9SX01FTUUiLCJncWwiLCJPQlRFTkVSX01FTUUiLCJOVUVWT19DT01FTlRBUklPIiwiRUxJTUlOQVJfQ09NRU5UQVJJTyIsIkFDVFVBTElaQVJfQ09NRU5UQVJJTyIsIk1lbWVZQ29tZW50YXJpb3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInBpZCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImlkIiwibG9hZGluZ0MiLCJlcnJvckMiLCJkYXRhQyIsInJlZmV0Y2giLCJpbnB1dCIsIm1lbWUiLCJudWV2b0NvbWVudGFyaW8iLCJ1c2VNdXRhdGlvbiIsImVsaW1pbmFyQ29tZW50YXJpbyIsImFjdHVhbGl6YXJDb21lbnRhcmlvIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInRleHRvIiwib25TdWJtaXQiLCJ2YWxvcmVzIiwidGhlbiIsInJlc2V0Rm9ybSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInRva2VuQXV0b3JpemFkbyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbWFnZW5NZW1lIiwiaW1hZ2VuIiwiY29uZmlybWFyRWxpbWluYXJDb21lbnRhcmlvIiwiaWRDb21lbnRhcmlvIiwiU3dhbCIsInRpdGxlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInJlc3VsdCIsInZhbHVlIiwiZWxpbWluYXJNZW1lIiwib2J0ZW5lck1lbWUiLCJub21icmUiLCJlIiwidGFyZ2V0Iiwib25lcnJvciIsInNyYyIsImRlc2NyaXBjaW9uIiwib2J0ZW5lckNvbWVudGFyaW9zUG9yTWVtZSIsIm1hcCIsImNvbWVudGFyaW8iLCJvblNhdmUiLCJ2YWwiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZXMiXSwi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RUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFDLHFIQUZaO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBbkJGLENBakJGLENBSkYsQ0FERixDQXpFRixDQURGLENBREY7QUFrSUQsQ0EzTkQ7O0FBNk5BLCtEQUFleEIsZ0JBQWYsRTs7Ozs7Ozs7Ozs7QUNwUkEsNEM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvbWVtZS9bcGlkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudGVzL2xheW91dFwiO1xyXG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgRWRpVGV4dCBmcm9tIFwicmVhY3QtZWRpdGV4dFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ09NRU5UQVJJT1NfUE9SX01FTUUgPSBncWxgXHJcbiAgcXVlcnkgb2J0ZW5lckNvbWVudGFyaW9zUG9yTWVtZSgkaW5wdXQ6IE1lbWVJZElucHV0KSB7XHJcbiAgICBvYnRlbmVyQ29tZW50YXJpb3NQb3JNZW1lKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgaWRcclxuICAgICAgdGV4dG9cclxuICAgICAgY3JlYWRvXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgT0JURU5FUl9NRU1FID0gZ3FsYFxyXG4gIHF1ZXJ5IG9idGVuZXJNZW1lKCRpZDogSUQhKSB7XHJcbiAgICBvYnRlbmVyTWVtZShpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGltYWdlblxyXG4gICAgICBub21icmVcclxuICAgICAgZGVzY3JpcGNpb25cclxuICAgICAgY2F0ZWdvcmlhXHJcbiAgICAgIGNyZWFkb1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE5VRVZPX0NPTUVOVEFSSU8gPSBncWxgXHJcbiAgbXV0YXRpb24gbnVldm9Db21lbnRhcmlvKCRpbnB1dDogQ29tZW50YXJpb0lucHV0KSB7XHJcbiAgICBudWV2b0NvbWVudGFyaW8oaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBpZFxyXG4gICAgICB0ZXh0b1xyXG4gICAgICBtZW1lXHJcbiAgICAgIGNyZWFkb1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgRUxJTUlOQVJfQ09NRU5UQVJJTyA9IGdxbGBcclxuICBtdXRhdGlvbiBlbGltaW5hckNvbWVudGFyaW8oJGlkOiBJRCEpIHtcclxuICAgIGVsaW1pbmFyQ29tZW50YXJpbyhpZDogJGlkKVxyXG4gIH1cclxuYDtcclxuY29uc3QgQUNUVUFMSVpBUl9DT01FTlRBUklPID0gZ3FsYFxyXG4gIG11dGF0aW9uIGFjdHVhbGl6YXJDb21lbnRhcmlvKCRpZDogSUQhLCAkaW5wdXQ6IENvbWVudGFyaW9JbnB1dCkge1xyXG4gICAgYWN0dWFsaXphckNvbWVudGFyaW8oaWQ6ICRpZCwgaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICB0ZXh0b1xyXG4gICAgICBtZW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBNZW1lWUNvbWVudGFyaW9zID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IHBpZCB9LFxyXG4gIH0gPSByb3V0ZXI7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoT0JURU5FUl9NRU1FLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgaWQ6IHBpZCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3Qge1xyXG4gICAgbG9hZGluZzogbG9hZGluZ0MsXHJcbiAgICBlcnJvcjogZXJyb3JDLFxyXG4gICAgZGF0YTogZGF0YUMsXHJcbiAgICByZWZldGNoLFxyXG4gIH0gPSB1c2VRdWVyeShDT01FTlRBUklPU19QT1JfTUVNRSwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgbWVtZTogcGlkLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW251ZXZvQ29tZW50YXJpb10gPSB1c2VNdXRhdGlvbihOVUVWT19DT01FTlRBUklPKTtcclxuXHJcbiAgY29uc3QgW2VsaW1pbmFyQ29tZW50YXJpb10gPSB1c2VNdXRhdGlvbihFTElNSU5BUl9DT01FTlRBUklPKTtcclxuXHJcbiAgY29uc3QgW2FjdHVhbGl6YXJDb21lbnRhcmlvXSA9IHVzZU11dGF0aW9uKEFDVFVBTElaQVJfQ09NRU5UQVJJTyk7XHJcblxyXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIHRleHRvOiBcIlwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBvblN1Ym1pdDogYXN5bmMgKHZhbG9yZXMpID0+IHtcclxuICAgICAgY29uc3QgeyB0ZXh0byB9ID0gdmFsb3JlcztcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBudWV2b0NvbWVudGFyaW8oe1xyXG4gICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgdGV4dG8sXHJcbiAgICAgICAgICAgICAgbWVtZTogcGlkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZWZldGNoKCkudGhlbihmb3JtaWsucmVzZXRGb3JtKCkpO1xyXG5cclxuICAgICAgICByb3V0ZXIucHVzaChgL21lbWUvJHtwaWR9YCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGlmIChsb2FkaW5nIHx8IGxvYWRpbmdDKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsZHMtaG91cmdsYXNzXCI+PC9kaXY+O1xyXG5cclxuICBpZiAoZXJyb3IpIHJldHVybiBlcnJvci5tZXNzYWdlO1xyXG4gIGlmIChlcnJvckMpIHJldHVybiBlcnJvckMubWVzc2FnZTtcclxuICBjb25zdCB0b2tlbkF1dG9yaXphZG8gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gIGNvbnN0IGltYWdlbk1lbWUgPSAoaW1hZ2VuKSA9PiB7XHJcbiAgICBpZiAoIWltYWdlbikge1xyXG4gICAgICByZXR1cm4gXCJudWxsXCI7XHJcbiAgICB9IGVsc2UgcmV0dXJuIGltYWdlbjtcclxuICB9O1xyXG4gIGNvbnN0IGNvbmZpcm1hckVsaW1pbmFyQ29tZW50YXJpbyA9IChpZENvbWVudGFyaW8pID0+IHtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiBcIlNlZ3VybyBxdWllcmVzIGVsaW1pbmFyIGVzdGUgQ29tZW50YXJpbz9cIixcclxuICAgICAgdGV4dDogXCJubyBsbyBwb2RyYXMgcmV2ZXJ0aXIhXCIsXHJcbiAgICAgIGljb246IFwid2FybmluZ1wiLFxyXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlNJXCIsXHJcbiAgICB9KS50aGVuKGFzeW5jIChyZXN1bHQpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGVsaW1pbmFyQ29tZW50YXJpbyh7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgIGlkOiBpZENvbWVudGFyaW8sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJlZmV0Y2goKTtcclxuICAgICAgICAgIFN3YWwuZmlyZShcIkVsaW1pbmFkbyFcIiwgZGF0YS5lbGltaW5hck1lbWUsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQteWVsbG93LTkwMCBmb250LWJvbGQgbXQtMTAgVGl0dWxvLVByaW5jaXBhbCBtYi0xMFwiPlxyXG4gICAgICAgICAge2RhdGEub2J0ZW5lck1lbWUubm9tYnJlfVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtpbWFnZW5NZW1lKGRhdGEub2J0ZW5lck1lbWUuaW1hZ2VuKX1cclxuICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0Lm9uZXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5zcmMgPSBcImh0dHBzOi8vaS5yZWRkLml0L3MzeTEwZXN0dzUwNTEucG5nXCI7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiB0ZXh0LTJ4bCBweC02IHB5LTMgdGV4dC13aGl0ZSBmb250LWJvbGQgbXQtNSBiZy15ZWxsb3ctNzAwIGZvbnQtbW9ubyBob3Zlcjp0ZXh0LWJsYWNrIGN1cnNvci1kZWZhdWx0IFwiPlxyXG4gICAgICAgICAge2RhdGEub2J0ZW5lck1lbWUuZGVzY3JpcGNpb259XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1vbm8gdGV4dC15ZWxsb3ctNzAwIG15LTVcIj5cclxuICAgICAgICAgIENvbWVudGFyaW9zOntcIiBcIn1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTIgc2VsZi1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgICAge2RhdGFDLm9idGVuZXJDb21lbnRhcmlvc1Bvck1lbWUubWFwKChjb21lbnRhcmlvKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9uU2F2ZSA9IGFzeW5jICh2YWwpID0+IHtcclxuICAgICAgICAgICAgICBhd2FpdCBhY3R1YWxpemFyQ29tZW50YXJpbyh7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IGNvbWVudGFyaW8uaWQsXHJcbiAgICAgICAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dG86IHZhbCxcclxuICAgICAgICAgICAgICAgICAgICBtZW1lOiBwaWQsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17Y29tZW50YXJpby5pZH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1hcm91bmQgc206anVzdGlmeS1jZW50ZXIgY29tZW50YXJpb3MgXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3Rva2VuQXV0b3JpemFkbyA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbWVudGFyaW9zc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8RWRpVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tZW50YXJpby50ZXh0b31cclxuICAgICAgICAgICAgICAgICAgICBvblNhdmU9e29uU2F2ZX1cclxuICAgICAgICAgICAgICAgICAgICBpZD17Y29tZW50YXJpby5pZH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb21vLWVsLWVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25maXJtYXJFbGltaW5hckNvbWVudGFyaW8oY29tZW50YXJpby5pZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tZW50YXJpb3NzIGZvbnQtYm9sZCBweS00XCI+e2NvbWVudGFyaW8udGV4dG99PC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG14LWF1dG8gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy1sZyBtdC0xMiBteC04IG1iLTQgbWF4LXctbGdcIj5cclxuICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXcteGwgYmctd2hpdGUgcm91bmRlZC1sZyBweC00IHB0LTJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIC1teC0zIG1iLTZcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHgtNCBwdC0zIHBiLTIgdGV4dC1ncmF5LTgwMCB0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgICAgICBBZ3JlZ2FyIG51ZXZvIENvbWVudGFyaW9cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctZnVsbCBweC0zIG1iLTIgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBsZWFkaW5nLW5vcm1hbCByZXNpemUtbm9uZSB3LWZ1bGwgaC0yMCBweS0yIHB4LTMgZm9udC1tZWRpdW0gcGxhY2Vob2xkZXItZ3JheS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInRleHRvXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnRleHRvfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dG9cIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInRleHRvXCJcclxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInRleHRvXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUdSBjb21lbnRhcmlvXCJcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy1mdWxsIGZsZXggaXRlbXMtc3RhcnQgbWQ6dy1mdWxsIHB4LTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCB3LTIvMyB0ZXh0LWdyYXktNzAwIHB4LTIgcHktMiBtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyYXktNjAwIG1yLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTMgMTZoLTF2LTRoLTFtMS00aC4wMU0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG1kOnRleHQtc20gcHQtcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICBSZXNwZXRhIGxhcyBSZWdsYXMgZGUgbGEgQ29tdW5pZGFkXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0xIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LWdyYXktNzAwIGZvbnQtbWVkaXVtIHB5LTEgcHgtNCBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbGcgdHJhY2tpbmctd2lkZSBtci0xIGhvdmVyOmJnLWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlBvc3RlYXJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW1lWUNvbWVudGFyaW9zO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1lZGl0ZXh0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3ZWV0YWxlcnQyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
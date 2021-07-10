(function() {
var exports = {};
exports.id = "pages/editarcategoria/[pid]";
exports.ids = ["pages/editarcategoria/[pid]"];
exports.modules = {

/***/ "./pages/editarcategoria/[pid].js":
/*!****************************************!*\
  !*** ./pages/editarcategoria/[pid].js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _componentes_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../componentes/layout */ "./componentes/layout.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\codigos\\MemeTeca\\meme-front\\pages\\editarcategoria\\[pid].js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







const ACTUALIZAR_CATEGORIA = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  mutation actualizarCategoria($id: ID!, $input: CategoriaInput) {
    actualizarCategoria(id: $id, input: $input) {
      nombre
      descripcion
    }
  }
`;
const OBTENER_CATEGORIA = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  query obtenerCategoria($id: ID!) {
    obtenerCategoria(id: $id) {
      nombre
      descripcion
    }
  }
`;

const editarCategoria = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    query: {
      pid
    }
  } = router;
  const {
    loading,
    data,
    refetch
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(OBTENER_CATEGORIA, {
    variables: {
      id: pid
    }
  });
  const [actualizarCategoria] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(ACTUALIZAR_CATEGORIA);
  if (loading || !data) return __jsx("div", {
    className: "lds-hourglass",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 32
    }
  });
  const {
    obtenerCategoria
  } = data;
  const schemaValidacion = yup__WEBPACK_IMPORTED_MODULE_3__.object({
    nombre: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("El nombre de la Categoria es obligatoria")
  });

  const actualizarInfoCategoria = async valores => {
    const {
      nombre,
      descripcion
    } = valores;

    try {
      const {
        data
      } = await actualizarCategoria({
        variables: {
          id: pid,
          input: {
            nombre,
            descripcion
          }
        }
      });
      sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire("Actualizado!", "La categoria se actualizo correctamente", "success");
      refetch();
      router.push(`/categoria/${pid}`);
    } catch (error) {}
  };

  return __jsx(_componentes_layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: " flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: " text-2xl text-red-800 text-light mt-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, "Nueva categoria")), __jsx("div", {
    className: "flex  justify-center mt-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: " max-w-lg ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    validationSchema: schemaValidacion,
    enableReinitialize: true,
    initialValues: obtenerCategoria,
    onSubmit: valores => {
      actualizarInfoCategoria(valores);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, props => {
    console.log(props);
    return __jsx("form", {
      className: "bg white shadow-md flex flex-col",
      onSubmit: props.handleSubmit,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }
    }, props.touched.nombre && props.errors.nombre ? __jsx("div", {
      className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 19
      }
    }, __jsx("p", {
      className: "font-bold",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }
    }, "Error"), __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }
    }, props.errors.nombre)) : null, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "nombre",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    }, "Nombre"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 text-center text-gray-800",
      id: "nombre",
      type: "nombre",
      placeholder: "Nombre de Categoria",
      onChange: props.handleChange,
      value: props.values.nombre,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }), __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-5 mt-5",
      htmlFor: "descripcion",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    }, "Descripcion"), __jsx("textarea", {
      rows: "5",
      cols: "80",
      className: "shadow appearance-none border rounded w-full py-2 px-5 text-gray-800",
      id: "descripcion",
      type: "descripcion",
      placeholder: "Describi esta Categoria de Meme",
      onChange: props.handleChange,
      value: props.values.descripcion,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }), __jsx("input", {
      type: "submit",
      className: "  mt-8  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
      value: "Modificar Categoria",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (editarCategoria);

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

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("yup");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js-node_modules_next_link_js","componentes_layout_js"], function() { return __webpack_exec__("./pages/editarcategoria/[pid].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZW1lLWZyb250Ly4vcGFnZXMvZWRpdGFyY2F0ZWdvcmlhL1twaWRdLmpzIiwid2VicGFjazovL21lbWUtZnJvbnQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL21lbWUtZnJvbnQvZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly9tZW1lLWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9tZW1lLWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL21lbWUtZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9tZW1lLWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9tZW1lLWZyb250L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcInN3ZWV0YWxlcnQyXCIiLCJ3ZWJwYWNrOi8vbWVtZS1mcm9udC9leHRlcm5hbCBcInl1cFwiIl0sIm5hbWVzIjpbIkFDVFVBTElaQVJfQ0FURUdPUklBIiwiZ3FsIiwiT0JURU5FUl9DQVRFR09SSUEiLCJlZGl0YXJDYXRlZ29yaWEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInBpZCIsImxvYWRpbmciLCJkYXRhIiwicmVmZXRjaCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaWQiLCJhY3R1YWxpemFyQ2F0ZWdvcmlhIiwidXNlTXV0YXRpb24iLCJvYnRlbmVyQ2F0ZWdvcmlhIiwic2NoZW1hVmFsaWRhY2lvbiIsIll1cCIsIm5vbWJyZSIsInJlcXVpcmVkIiwiYWN0dWFsaXphckluZm9DYXRlZ29yaWEiLCJ2YWxvcmVzIiwiZGVzY3JpcGNpb24iLCJpbnB1dCIsIlN3YWwiLCJwdXNoIiwiZXJyb3IiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJ0b3VjaGVkIiwiZXJyb3JzIiwiaGFuZGxlQ2hhbmdlIiwidmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsb0JBQW9CLEdBQUdDLCtDQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUEE7QUFRQSxNQUFNQyxpQkFBaUIsR0FBR0QsK0NBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQQTs7QUFRQSxNQUFNRSxlQUFlLEdBQUcsTUFBTTtBQUM1QixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUNKQyxTQUFLLEVBQUU7QUFBRUM7QUFBRjtBQURILE1BRUZILE1BRko7QUFHQSxRQUFNO0FBQUVJLFdBQUY7QUFBV0MsUUFBWDtBQUFpQkM7QUFBakIsTUFBNkJDLHdEQUFRLENBQUNULGlCQUFELEVBQW9CO0FBQzdEVSxhQUFTLEVBQUU7QUFDVEMsUUFBRSxFQUFFTjtBQURLO0FBRGtELEdBQXBCLENBQTNDO0FBS0EsUUFBTSxDQUFDTyxtQkFBRCxJQUF3QkMsMkRBQVcsQ0FBQ2Ysb0JBQUQsQ0FBekM7QUFDQSxNQUFJUSxPQUFPLElBQUksQ0FBQ0MsSUFBaEIsRUFBc0IsT0FBTztBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUN0QixRQUFNO0FBQUVPO0FBQUYsTUFBdUJQLElBQTdCO0FBRUEsUUFBTVEsZ0JBQWdCLEdBQUdDLHVDQUFBLENBQVc7QUFDbENDLFVBQU0sRUFBRUQsdUNBQUEsR0FBYUUsUUFBYixDQUFzQiwwQ0FBdEI7QUFEMEIsR0FBWCxDQUF6Qjs7QUFHQSxRQUFNQyx1QkFBdUIsR0FBRyxNQUFPQyxPQUFQLElBQW1CO0FBQ2pELFVBQU07QUFBRUgsWUFBRjtBQUFVSTtBQUFWLFFBQTBCRCxPQUFoQzs7QUFDQSxRQUFJO0FBQ0YsWUFBTTtBQUFFYjtBQUFGLFVBQVcsTUFBTUssbUJBQW1CLENBQUM7QUFDekNGLGlCQUFTLEVBQUU7QUFDVEMsWUFBRSxFQUFFTixHQURLO0FBRVRpQixlQUFLLEVBQUU7QUFDTEwsa0JBREs7QUFFTEk7QUFGSztBQUZFO0FBRDhCLE9BQUQsQ0FBMUM7QUFTQUUsNkRBQUEsQ0FDRSxjQURGLEVBRUUseUNBRkYsRUFHRSxTQUhGO0FBS0FmLGFBQU87QUFDUE4sWUFBTSxDQUFDc0IsSUFBUCxDQUFhLGNBQWFuQixHQUFJLEVBQTlCO0FBQ0QsS0FqQkQsQ0FpQkUsT0FBT29CLEtBQVAsRUFBYyxDQUFFO0FBQ25CLEdBcEJEOztBQXFCQSxTQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyx5Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLENBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDBDQUFEO0FBQ0Usb0JBQWdCLEVBQUVWLGdCQURwQjtBQUVFLHNCQUFrQixNQUZwQjtBQUdFLGlCQUFhLEVBQUVELGdCQUhqQjtBQUlFLFlBQVEsRUFBR00sT0FBRCxJQUFhO0FBQ3JCRCw2QkFBdUIsQ0FBQ0MsT0FBRCxDQUF2QjtBQUNELEtBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFJTSxLQUFELElBQVc7QUFDVkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFFQSxXQUNFO0FBQ0UsZUFBUyxFQUFDLGtDQURaO0FBRUUsY0FBUSxFQUFFQSxLQUFLLENBQUNHLFlBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJR0gsS0FBSyxDQUFDSSxPQUFOLENBQWNiLE1BQWQsSUFBd0JTLEtBQUssQ0FBQ0ssTUFBTixDQUFhZCxNQUFyQyxHQUNDO0FBQUssZUFBUyxFQUFDLDREQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSVMsS0FBSyxDQUFDSyxNQUFOLENBQWFkLE1BQWpCLENBRkYsQ0FERCxHQUtHLElBVE4sRUFXRTtBQUNFLGVBQVMsRUFBQyw0Q0FEWjtBQUVFLGFBQU8sRUFBQyxRQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEYsRUFpQkU7QUFDRSxlQUFTLEVBQUMsNkVBRFo7QUFFRSxRQUFFLEVBQUMsUUFGTDtBQUdFLFVBQUksRUFBQyxRQUhQO0FBSUUsaUJBQVcsRUFBQyxxQkFKZDtBQUtFLGNBQVEsRUFBRVMsS0FBSyxDQUFDTSxZQUxsQjtBQU1FLFdBQUssRUFBRU4sS0FBSyxDQUFDTyxNQUFOLENBQWFoQixNQU50QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BakJGLEVBMEJFO0FBQ0UsZUFBUyxFQUFDLGlEQURaO0FBRUUsYUFBTyxFQUFDLGFBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkExQkYsRUFnQ0U7QUFDRSxVQUFJLEVBQUMsR0FEUDtBQUVFLFVBQUksRUFBQyxJQUZQO0FBR0UsZUFBUyxFQUFDLHNFQUhaO0FBSUUsUUFBRSxFQUFDLGFBSkw7QUFLRSxVQUFJLEVBQUMsYUFMUDtBQU1FLGlCQUFXLEVBQUMsaUNBTmQ7QUFPRSxjQUFRLEVBQUVTLEtBQUssQ0FBQ00sWUFQbEI7QUFRRSxXQUFLLEVBQUVOLEtBQUssQ0FBQ08sTUFBTixDQUFhWixXQVJ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BaENGLEVBMENFO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxlQUFTLEVBQUMseUpBRlo7QUFHRSxXQUFLLEVBQUMscUJBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQTFDRixDQURGO0FBa0RELEdBN0RILENBRkYsQ0FORixDQURGO0FBMkVELENBakhEOztBQW1IQSwrREFBZXBCLGVBQWYsRTs7Ozs7Ozs7Ozs7QUMzSUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvZWRpdGFyY2F0ZWdvcmlhL1twaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRlcy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xyXG5pbXBvcnQgeyBncWwsIHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcblxyXG5jb25zdCBBQ1RVQUxJWkFSX0NBVEVHT1JJQSA9IGdxbGBcclxuICBtdXRhdGlvbiBhY3R1YWxpemFyQ2F0ZWdvcmlhKCRpZDogSUQhLCAkaW5wdXQ6IENhdGVnb3JpYUlucHV0KSB7XHJcbiAgICBhY3R1YWxpemFyQ2F0ZWdvcmlhKGlkOiAkaWQsIGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgbm9tYnJlXHJcbiAgICAgIGRlc2NyaXBjaW9uXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBPQlRFTkVSX0NBVEVHT1JJQSA9IGdxbGBcclxuICBxdWVyeSBvYnRlbmVyQ2F0ZWdvcmlhKCRpZDogSUQhKSB7XHJcbiAgICBvYnRlbmVyQ2F0ZWdvcmlhKGlkOiAkaWQpIHtcclxuICAgICAgbm9tYnJlXHJcbiAgICAgIGRlc2NyaXBjaW9uXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBlZGl0YXJDYXRlZ29yaWEgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qge1xyXG4gICAgcXVlcnk6IHsgcGlkIH0sXHJcbiAgfSA9IHJvdXRlcjtcclxuICBjb25zdCB7IGxvYWRpbmcsIGRhdGEsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KE9CVEVORVJfQ0FURUdPUklBLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgaWQ6IHBpZCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgW2FjdHVhbGl6YXJDYXRlZ29yaWFdID0gdXNlTXV0YXRpb24oQUNUVUFMSVpBUl9DQVRFR09SSUEpO1xyXG4gIGlmIChsb2FkaW5nIHx8ICFkYXRhKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsZHMtaG91cmdsYXNzXCI+PC9kaXY+O1xyXG4gIGNvbnN0IHsgb2J0ZW5lckNhdGVnb3JpYSB9ID0gZGF0YTtcclxuXHJcbiAgY29uc3Qgc2NoZW1hVmFsaWRhY2lvbiA9IFl1cC5vYmplY3Qoe1xyXG4gICAgbm9tYnJlOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFbCBub21icmUgZGUgbGEgQ2F0ZWdvcmlhIGVzIG9ibGlnYXRvcmlhXCIpLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGFjdHVhbGl6YXJJbmZvQ2F0ZWdvcmlhID0gYXN5bmMgKHZhbG9yZXMpID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlLCBkZXNjcmlwY2lvbiB9ID0gdmFsb3JlcztcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYWN0dWFsaXphckNhdGVnb3JpYSh7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBpZDogcGlkLFxyXG4gICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgbm9tYnJlLFxyXG4gICAgICAgICAgICBkZXNjcmlwY2lvbixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIFN3YWwuZmlyZShcclxuICAgICAgICBcIkFjdHVhbGl6YWRvIVwiLFxyXG4gICAgICAgIFwiTGEgY2F0ZWdvcmlhIHNlIGFjdHVhbGl6byBjb3JyZWN0YW1lbnRlXCIsXHJcbiAgICAgICAgXCJzdWNjZXNzXCJcclxuICAgICAgKTtcclxuICAgICAgcmVmZXRjaCgpO1xyXG4gICAgICByb3V0ZXIucHVzaChgL2NhdGVnb3JpYS8ke3BpZH1gKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHRleHQtMnhsIHRleHQtcmVkLTgwMCB0ZXh0LWxpZ2h0IG10LTEwXCI+XHJcbiAgICAgICAgICBOdWV2YSBjYXRlZ29yaWFcclxuICAgICAgICA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBqdXN0aWZ5LWNlbnRlciBtdC0xMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1heC13LWxnIFwiPjwvZGl2PlxyXG4gICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3NjaGVtYVZhbGlkYWNpb259XHJcbiAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemVcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e29idGVuZXJDYXRlZ29yaWF9XHJcbiAgICAgICAgICBvblN1Ym1pdD17KHZhbG9yZXMpID0+IHtcclxuICAgICAgICAgICAgYWN0dWFsaXphckluZm9DYXRlZ29yaWEodmFsb3Jlcyk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsocHJvcHMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvcHMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmcgd2hpdGUgc2hhZG93LW1kIGZsZXggZmxleC1jb2xcIlxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e3Byb3BzLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMudG91Y2hlZC5ub21icmUgJiYgcHJvcHMuZXJyb3JzLm5vbWJyZSA/IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLXJlZC0xMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3Byb3BzLmVycm9ycy5ub21icmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTm9tYnJlXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tYnJlIGRlIENhdGVnb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZXMubm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi01IG10LTVcIlxyXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZGVzY3JpcGNpb25cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBEZXNjcmlwY2lvblxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbHM9XCI4MFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtNSB0ZXh0LWdyYXktODAwXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwY2lvblwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJkZXNjcmlwY2lvblwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpYmkgZXN0YSBDYXRlZ29yaWEgZGUgTWVtZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZXMuZGVzY3JpcGNpb259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgIG10LTggIGJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLWJsdWUtNTAwIHRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJNb2RpZmljYXIgQ2F0ZWdvcmlhXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZWRpdGFyQ2F0ZWdvcmlhO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dlZXRhbGVydDJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
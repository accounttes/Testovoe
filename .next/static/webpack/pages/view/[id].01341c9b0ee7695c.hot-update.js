"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/view/[id]",{

/***/ "./pages/view/[id].js":
/*!****************************!*\
  !*** ./pages/view/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction View() {\n    var _this = this;\n    _s();\n    var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(param) {\n        var users = param.users;\n        return users.items;\n    });\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card, {\n        children: items && items.map(function(item, index) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Body, {\n                style: {\n                    paddingLeft: '45%'\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view\\\\[id].js\",\n                lineNumber: 10,\n                columnNumber: 48\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view\\\\[id].js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n}; // export async function getServerSideProps({ params }) {\n //   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);\n //   const users = await response.json();\n //   return {\n //     props: { users }, // will be passed to the page component as props\n //   };\n // }\n_s(View, \"iF7FcsA/1dIzSR4xNgU82Gc1VSg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = View;\nvar _c;\n$RefreshReg$(_c, \"View\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWV3L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDRDtBQUNHOztBQUUxQixRQUFRLENBQUNHLElBQUksR0FBRyxDQUFDOzs7SUFDOUIsR0FBSyxDQUFDQyxLQUFLLEdBQUdGLHdEQUFXLENBQUMsUUFBUTtZQUFMRyxLQUFLLFNBQUxBLEtBQUs7UUFBT0EsTUFBTUQsQ0FBTkMsS0FBSyxDQUFDRCxLQUFLOztJQUNwRCxHQUFLLENBQUdFLEtBQUssR0FBS04sc0RBQVMsR0FBbkJNLEtBQUs7SUFFYixNQUFNLDZFQUNITCxpREFBSTtrQkFBRUcsS0FBSyxJQUFJQSxLQUFLLENBQUNHLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsS0FBSzswQkFBSyxNQUFNQyxDQUFBQSw2REFBQUEsQ0FBTFQsc0RBQVM7Z0JBQUNVLEtBQUssRUFBRSxDQUFDO29CQUFDQyxXQUFXLEVBQUUsQ0FBSztnQkFBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUFFdkYsQ0FBQyxDQUVELENBQXlEO0FBQ3pELENBQTZGO0FBQzdGLENBQXlDO0FBQ3pDLENBQWE7QUFDYixDQUF5RTtBQUN6RSxDQUFPO0FBQ1AsQ0FBSTtHQWZvQlQsSUFBSTs7UUFDWkQsb0RBQVc7UUFDUEYsa0RBQVM7OztLQUZMRyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZpZXcvW2lkXS5qcz8wZjdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlldygpIHtcclxuICBjb25zdCBpdGVtcyA9IHVzZVNlbGVjdG9yKCh7IHVzZXJzIH0pID0+IHVzZXJzLml0ZW1zKTtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkPntpdGVtcyAmJiBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiA8Q2FyZC5Cb2R5IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnNDUlJyB9fT48L0NhcmQuQm9keT4pfTwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zIH0pIHtcclxuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtwYXJhbXMuaWR9YCk7XHJcbi8vICAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7IHVzZXJzIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4vLyAgIH07XHJcbi8vIH1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkNhcmQiLCJ1c2VTZWxlY3RvciIsIlZpZXciLCJpdGVtcyIsInVzZXJzIiwicXVlcnkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJCb2R5Iiwic3R5bGUiLCJwYWRkaW5nTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/view/[id].js\n");

/***/ })

});
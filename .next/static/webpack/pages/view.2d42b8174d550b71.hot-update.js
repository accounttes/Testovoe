"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/view",{

/***/ "./pages/view.js":
/*!***********************!*\
  !*** ./pages/view.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_A__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/A */ \"./components/A.js\");\n\n\n\n\nvar __N_SSG = true;\nfunction View(param) {\n    var todos = param.todos;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: 'flex',\n            flexDirection: 'column'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_A__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/\",\n                text: \"Назад\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ListGroup, {\n                children: todos.map(function(todo, id) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ListGroup.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_A__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/view/\".concat(todo.id),\n                            text: \"Задание \".concat(todo.id)\n                        }, id, false, {\n                            fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view.js\",\n                            lineNumber: 14,\n                            columnNumber: 13\n                        }, _this)\n                    }, id, false, {\n                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view.js\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n};\n_c = View;\nvar _c;\n$RefreshReg$(_c, \"View\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNQO0FBQ1o7O0FBRWhCLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLEtBQVMsRUFBRSxDQUFDO1FBQVZDLEtBQUssR0FBUCxLQUFTLENBQVBBLEtBQUs7O0lBR2xDLE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsS0FBSyxFQUFFLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQU07WUFBRUMsYUFBYSxFQUFFLENBQVE7UUFBQyxDQUFDOzt3RkFDckROLHFEQUFDO2dCQUFDTyxJQUFJLEVBQUMsQ0FBRztnQkFBQ0MsSUFBSSxFQUFDLENBQU87Ozs7Ozt3RkFDbEJULHNEQUFJOzBCQUNQRyxLQUFLLENBQUNPLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsRUFBRTtrQ0FDbEIsTUFBTSwrREFBTFosMkRBQWM7OEdBQ1pDLHFEQUFDOzRCQUFDTyxJQUFJLEVBQUcsQ0FBTSxRQUFVLE9BQVJHLElBQUksQ0FBQ0MsRUFBRTs0QkFBSUgsSUFBSSxFQUFHLENBQVEsaUJBQVUsT0FBUkU7MkJBQWdCQyxFQUFFOzs7Ozt1QkFEN0NBLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pDLENBQUM7S0FmdUJWLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlldy5qcz9mYzAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaXN0R3JvdXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgQSBmcm9tICcuLi9jb21wb25lbnRzL0EnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlldyh7IHRvZG9zIH0pIHtcclxuXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fT5cclxuICAgICAgPEEgaHJlZj1cIi9cIiB0ZXh0PVwi0J3QsNC30LDQtFwiIC8+XHJcbiAgICAgIDxMaXN0R3JvdXA+XHJcbiAgICAgICAge3RvZG9zLm1hcCgodG9kbywgaWQpID0+IChcclxuICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBrZXk9e2lkfT5cclxuICAgICAgICAgICAgPEEgaHJlZj17YC92aWV3LyR7dG9kby5pZH1gfSB0ZXh0PXtg0JfQsNC00LDQvdC40LUgJHt0b2RvLmlkfWB9IGtleT17aWR9IC8+XHJcbiAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0xpc3RHcm91cD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zYCk7XHJcbiAgY29uc3QgdG9kb3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyB0b2RvcyB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGlzdEdyb3VwIiwiQSIsIlZpZXciLCJ0b2RvcyIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJocmVmIiwidGV4dCIsIm1hcCIsInRvZG8iLCJpZCIsIkl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/view.js\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction View() {\n    _s();\n    var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(param) {\n        var users = param.users;\n        return users.items;\n    });\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    var currUser = items.filter(function(item, index) {\n        return index === Number(query.id);\n    });\n    console.log(currUser[0]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Table, {\n        striped: true,\n        bordered: true,\n        hover: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Имя\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view\\\\[id].js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Имя пользователя\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view\\\\[id].js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"E-mail\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view\\\\[id].js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Website\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view\\\\[id].js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view\\\\[id].js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view\\\\[id].js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: currUser[0].name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view\\\\[id].js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: currUser[0].username\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view\\\\[id].js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: \"Otto\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view\\\\[id].js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: \"@mdo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view\\\\[id].js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view\\\\[id].js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view\\\\[id].js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\view\\\\[id].js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this));\n};\n_s(View, \"iF7FcsA/1dIzSR4xNgU82Gc1VSg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = View;\nvar _c;\n$RefreshReg$(_c, \"View\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWV3L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDQTtBQUNFOztBQUUxQixRQUFRLENBQUNHLElBQUksR0FBRyxDQUFDOztJQUM5QixHQUFLLENBQUNDLEtBQUssR0FBR0Ysd0RBQVcsQ0FBQyxRQUFRO1lBQUxHLEtBQUssU0FBTEEsS0FBSztRQUFPQSxNQUFNRCxDQUFOQyxLQUFLLENBQUNELEtBQUs7O0lBQ3BELEdBQUssQ0FBR0UsS0FBSyxHQUFLTixzREFBUyxHQUFuQk0sS0FBSztJQUViLEdBQUssQ0FBQ0MsUUFBUSxHQUFHSCxLQUFLLENBQUNJLE1BQU0sQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsS0FBSyxFQUFLLENBQUM7UUFDOUMsTUFBTSxDQUFDQSxLQUFLLEtBQUtDLE1BQU0sQ0FBQ0wsS0FBSyxDQUFDTSxFQUFFO0lBQ2xDLENBQUM7SUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUNQLFFBQVEsQ0FBQyxDQUFDO0lBRXRCLE1BQU0sNkVBQ0hOLGtEQUFLO1FBQUNjLE9BQU87UUFBQ0MsUUFBUTtRQUFDQyxLQUFLOzt3RkFDMUJDLENBQUs7c0dBQ0hDLENBQUU7O29HQUNBQyxDQUFFO3NDQUFDLENBQUc7Ozs7OztvR0FDSEEsQ0FBRDtzQ0FBQyxDQUFnQjs7Ozs7O29HQUNuQkEsQ0FBRTtzQ0FBQyxDQUFNOzs7Ozs7b0dBQ1RBLENBQUU7c0NBQUMsQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBR2RDLENBQUs7c0dBQ0hGLENBQUU7O29HQUNBRyxDQUFFO3NDQUFFZixRQUFRLENBQUMsQ0FBQyxFQUFFZ0IsSUFBSTs7Ozs7O29HQUNwQkQsQ0FBRTtzQ0FBRWYsUUFBUSxDQUFDLENBQUMsRUFBRWlCLFFBQVE7Ozs7OztvR0FDeEJGLENBQUU7c0NBQUMsQ0FBSTs7Ozs7O29HQUNQQSxDQUFFO3NDQUFDLENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCLENBQUM7R0E3QnVCbkIsSUFBSTs7UUFDWkQsb0RBQVc7UUFDUEYsa0RBQVM7OztLQUZMRyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZpZXcvW2lkXS5qcz8wZjdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXcoKSB7XHJcbiAgY29uc3QgaXRlbXMgPSB1c2VTZWxlY3RvcigoeyB1c2VycyB9KSA9PiB1c2Vycy5pdGVtcyk7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGN1cnJVc2VyID0gaXRlbXMuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIGluZGV4ID09PSBOdW1iZXIocXVlcnkuaWQpO1xyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKGN1cnJVc2VyWzBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyPlxyXG4gICAgICA8dGhlYWQ+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPtCY0LzRjzwvdGg+XHJcbiAgICAgICAgICA8dGg+0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjzwvdGg+XHJcbiAgICAgICAgICA8dGg+RS1tYWlsPC90aD5cclxuICAgICAgICAgIDx0aD5XZWJzaXRlPC90aD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RoZWFkPlxyXG4gICAgICA8dGJvZHk+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPntjdXJyVXNlclswXS5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e2N1cnJVc2VyWzBdLnVzZXJuYW1lfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+T3R0bzwvdGQ+XHJcbiAgICAgICAgICA8dGQ+QG1kbzwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90Ym9keT5cclxuICAgIDwvVGFibGU+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiVGFibGUiLCJ1c2VTZWxlY3RvciIsIlZpZXciLCJpdGVtcyIsInVzZXJzIiwicXVlcnkiLCJjdXJyVXNlciIsImZpbHRlciIsIml0ZW0iLCJpbmRleCIsIk51bWJlciIsImlkIiwiY29uc29sZSIsImxvZyIsInN0cmlwZWQiLCJib3JkZXJlZCIsImhvdmVyIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJ0ZCIsIm5hbWUiLCJ1c2VybmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/view/[id].js\n");

/***/ })

});
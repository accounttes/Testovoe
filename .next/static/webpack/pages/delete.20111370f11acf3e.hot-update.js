"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/delete",{

/***/ "./pages/delete.js":
/*!*************************!*\
  !*** ./pages/delete.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Delete; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_A_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/A.js */ \"./components/A.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Delete() {\n    var _this = this;\n    _s();\n    var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(param) {\n        var users = param.users;\n        return users.items;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_A_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                href: \"/\",\n                text: \"Назад\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                striped: true,\n                bordered: true,\n                hover: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Имя\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Имя пользователя\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: items && items.map(function(item) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            item.username,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                children: \"Удалить\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                                                lineNumber: 25,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                                lineNumber: 21,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Delete, \"tY2Gvv5VcC5OmHFNMSHq17tjIN8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Delete;\nvar _c;\n$RefreshReg$(_c, \"Delete\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZWxldGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUNMO0FBQ087O0FBRTFCLFFBQVEsQ0FBQ0csTUFBTSxHQUFHLENBQUM7OztJQUNoQyxHQUFLLENBQUNDLEtBQUssR0FBR0Ysd0RBQVcsQ0FBQyxRQUFRO1lBQUxHLEtBQUssU0FBTEEsS0FBSztRQUFPQSxNQUFNRCxDQUFOQyxLQUFLLENBQUNELEtBQUs7O0lBRXBELE1BQU07O3dGQUVESCx3REFBQztnQkFBQ0ssSUFBSSxFQUFDLENBQUc7Z0JBQUNDLElBQUksRUFBQyxDQUFPOzs7Ozs7d0ZBQ2xCUCxrREFBQTtnQkFBQ1EsT0FBTztnQkFBQ0MsUUFBUTtnQkFBQ0MsS0FBSzs7Z0dBQzFCQyxDQUFLOzhHQUNIQyxDQUFFOzs0R0FDQUMsQ0FBRTs4Q0FBQyxDQUFHOzs7Ozs7NEdBQ0hBLENBQUQ7OENBQUMsQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQUdSQyxDQUFWO2tDQUNIVixLQUFLLElBQ0pBLEtBQUssQ0FBQ1csR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSTswQ0FDYixNQUNkLENBQUMsOERBRGNKLENBQUU7O2dIQUNBSyxDQUFFO2tEQUFFRCxJQUFJLENBQUNFLElBQUk7Ozs7OztnSEFDYkQsQ0FBRTs7NENBQ0FELElBQUksQ0FBQ0csUUFBUTt3SEFDYkMsQ0FBTTswREFBQyxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqQyxDQUFDO0dBNUJ1QmpCLE1BQU07O1FBQ2RELG9EQUFXOzs7S0FESEMsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kZWxldGUuanM/YmM1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBBIGZyb20gJy4uL2NvbXBvbmVudHMvQS5qcyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlKCkge1xyXG4gIGNvbnN0IGl0ZW1zID0gdXNlU2VsZWN0b3IoKHsgdXNlcnMgfSkgPT4gdXNlcnMuaXRlbXMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEEgaHJlZj1cIi9cIiB0ZXh0PVwi0J3QsNC30LDQtFwiIC8+XHJcbiAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPtCY0LzRjzwvdGg+XHJcbiAgICAgICAgICAgIDx0aD7QmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7aXRlbXMgJiZcclxuICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPntpdGVtLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlRhYmxlIiwiQSIsInVzZVNlbGVjdG9yIiwiRGVsZXRlIiwiaXRlbXMiLCJ1c2VycyIsImhyZWYiLCJ0ZXh0Iiwic3RyaXBlZCIsImJvcmRlcmVkIiwiaG92ZXIiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsIml0ZW0iLCJ0ZCIsIm5hbWUiLCJ1c2VybmFtZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/delete.js\n");

/***/ })

});
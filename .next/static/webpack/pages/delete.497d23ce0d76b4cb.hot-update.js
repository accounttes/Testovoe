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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Delete; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_A_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/A.js */ \"./components/A.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction Delete() {\n    var _this = this;\n    var handleItems = function handleItems(e) {\n        console.log(e);\n    };\n    _s();\n    var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(param) {\n        var users = param.users;\n        return users.items;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: 'flex'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_A_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                href: \"/\",\n                text: \"Назад\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            items && items.map(function(item, index) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        padding: padding\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: item.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleItems,\n                            children: \"Удалить\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this));\n};\n_s(Delete, \"tY2Gvv5VcC5OmHFNMSHq17tjIN8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Delete;\nvar _c;\n$RefreshReg$(_c, \"Delete\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZWxldGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ087O0FBRTFCLFFBQVEsQ0FBQ0UsTUFBTSxHQUFHLENBQUM7O1FBR3ZCQyxXQUFXLEdBQXBCLFFBQVEsQ0FBQ0EsV0FBVyxDQUFDQyxDQUFDLEVBQUUsQ0FBQztRQUN2QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUM7SUFDZixDQUFDOztJQUpELEdBQUssQ0FBQ0csS0FBSyxHQUFHTix3REFBVyxDQUFDLFFBQVE7WUFBTE8sS0FBSyxTQUFMQSxLQUFLO1FBQU9BLE1BQU1ELENBQU5DLEtBQUssQ0FBQ0QsS0FBSzs7SUFNcEQsTUFBTSw2RUFDSEUsQ0FBRztRQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBTTtRQUFDLENBQUM7O3dGQUM1Qlgsd0RBQUM7Z0JBQUNZLElBQUksRUFBQyxDQUFHO2dCQUFDQyxJQUFJLEVBQUMsQ0FBTzs7Ozs7O1lBQ2xCTixLQUFBLElBQ0pBLEtBQUssQ0FBQ08sR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFFQyxLQUFLOzhCQUNwQixNQUFNLCtEQUFMUCxDQUFHO29CQUFDQyxLQUFLLEVBQUUsQ0FBQ087d0JBQUFBLE9BQU8sRUFBUEEsT0FBTztvQkFBQSxDQUFDOztvR0FDbEJSLENBQUc7c0NBQUVNLElBQUksQ0FBQ0csSUFBSTs7Ozs7O29HQUNkQyxDQUFNOzRCQUFDQyxPQUFPLEVBQUVqQixXQUFXO3NDQUFFLENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakQsQ0FBQztHQW5CdUJELE1BQU07O1FBQ2RELG9EQUFXOzs7S0FESEMsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kZWxldGUuanM/YmM1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQSBmcm9tICcuLi9jb21wb25lbnRzL0EuanMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZSgpIHtcclxuICBjb25zdCBpdGVtcyA9IHVzZVNlbGVjdG9yKCh7IHVzZXJzIH0pID0+IHVzZXJzLml0ZW1zKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlSXRlbXMoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgIDxBIGhyZWY9XCIvXCIgdGV4dD1cItCd0LDQt9Cw0LRcIiAvPlxyXG4gICAgICB7aXRlbXMgJiZcclxuICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ319PlxyXG4gICAgICAgICAgICA8ZGl2PntpdGVtLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlSXRlbXN9PtCj0LTQsNC70LjRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkEiLCJ1c2VTZWxlY3RvciIsIkRlbGV0ZSIsImhhbmRsZUl0ZW1zIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJpdGVtcyIsInVzZXJzIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiaHJlZiIsInRleHQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwYWRkaW5nIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/delete.js\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Update; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_A__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/A */ \"./components/A.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Update() {\n    var _this = this;\n    _s();\n    var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(param) {\n        var users = param.users;\n        return users.items;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: 'flex',\n            flexDirection: 'column'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_A__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                href: \"/\",\n                text: \"Назад\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.ListGroup, {\n                children: items && items.map(function(item, id) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.ListGroup.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_A__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            href: \"/search/\".concat(item.id),\n                            text: \"Пользователь \".concat(item.id)\n                        }, id, false, {\n                            fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                            lineNumber: 16,\n                            columnNumber: 15\n                        }, _this)\n                    }, id, false, {\n                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n};\n_s(Update, \"tY2Gvv5VcC5OmHFNMSHq17tjIN8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Update;\nvar _c;\n$RefreshReg$(_c, \"Update\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ0k7QUFDWDtBQUNaOztBQUVoQixRQUFRLENBQUNPLE1BQU0sR0FBRyxDQUFDOzs7SUFDaEMsR0FBSyxDQUFDQyxLQUFLLEdBQUdKLHdEQUFXLENBQUMsUUFBUTtZQUFMSyxLQUFLLFNBQUxBLEtBQUs7UUFBT0EsTUFBTUQsQ0FBTkMsS0FBSyxDQUFDRCxLQUFLOztJQUVwRCxNQUFNLDZFQUNIRSxDQUFHO1FBQUNDLEtBQUssRUFBRSxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUFNO1lBQUVDLGFBQWEsRUFBRSxDQUFRO1FBQUMsQ0FBQzs7d0ZBQ3JEUCxxREFBQztnQkFBQ1EsSUFBSSxFQUFDLENBQUc7Z0JBQUNDLElBQUksRUFBQyxDQUFPOzs7Ozs7d0ZBQ2xCVixzREFBSTswQkFDUEcsS0FBSyxJQUNKQSxLQUFLLENBQUNRLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsRUFBRTtrQ0FDakIsTUFBTSwrREFBTGIsMkRBQWM7OEdBQ1pDLHFEQUFDOzRCQUFDUSxJQUFJLEVBQUcsQ0FBUSxVQUFVLE9BQVJHLElBQUksQ0FBQ0MsRUFBRTs0QkFBSUgsSUFBSSxFQUFHLENBQWEsMkJBQVU7MkJBQVFHLEVBQUU7Ozs7O3VCQURwREEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkMsQ0FBQztHQWhCdUJYLE1BQU07O1FBQ2RILG9EQUFXOzs7S0FESEcsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWFyY2guanM/OTIwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMaXN0R3JvdXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgQSBmcm9tICcuLi9jb21wb25lbnRzL0EnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBkYXRlKCkge1xyXG4gIGNvbnN0IGl0ZW1zID0gdXNlU2VsZWN0b3IoKHsgdXNlcnMgfSkgPT4gdXNlcnMuaXRlbXMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxyXG4gICAgICA8QSBocmVmPVwiL1wiIHRleHQ9XCLQndCw0LfQsNC0XCIgLz5cclxuICAgICAgPExpc3RHcm91cD5cclxuICAgICAgICB7aXRlbXMgJiZcclxuICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaWQpID0+IChcclxuICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgIDxBIGhyZWY9e2Avc2VhcmNoLyR7aXRlbS5pZH1gfSB0ZXh0PXtg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMICR7aXRlbS5pZH1gfSBrZXk9e2lkfSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvTGlzdEdyb3VwPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJMaXN0R3JvdXAiLCJBIiwiVXBkYXRlIiwiaXRlbXMiLCJ1c2VycyIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJocmVmIiwidGV4dCIsIm1hcCIsIml0ZW0iLCJpZCIsIkl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ })

});
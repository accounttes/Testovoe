"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/list",{

/***/ "./pages/list.js":
/*!***********************!*\
  !*** ./pages/list.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction List() {\n    _s();\n    var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(param) {\n        var users = param.users;\n        return users.items;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListGroup, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListGroup.Item, {\n                children: \"Cras justo odio\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\list.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListGroup.Item, {\n                children: \"Dapibus ac facilisis in\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\list.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListGroup.Item, {\n                children: \"Morbi leo risus\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\list.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListGroup.Item, {\n                children: \"Porta ac consectetur ac\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\list.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListGroup.Item, {\n                children: \"Vestibulum at eros\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\list.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\list.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n};\n_s(List, \"tY2Gvv5VcC5OmHFNMSHq17tjIN8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBQ0U7O0FBRTFCLFFBQVEsQ0FBQ0UsSUFBSSxHQUFHLENBQUM7O0lBQzlCLEdBQUssQ0FBQ0MsS0FBSyxHQUFHRix3REFBVyxDQUFDLFFBQVE7WUFBTEcsS0FBSyxTQUFMQSxLQUFLO1FBQU9BLE1BQU1ELENBQU5DLEtBQUssQ0FBQ0QsS0FBSzs7SUFFcEQsTUFBTSw2RUFDSEUsU0FBUzs7d0ZBQ1BBLFNBQVMsQ0FBQ0MsSUFBSTswQkFBQyxDQUFlOzs7Ozs7d0ZBQzlCRCxTQUFTLENBQUNDLElBQUk7MEJBQUMsQ0FBdUI7Ozs7Ozt3RkFDdENELFNBQVMsQ0FBQ0MsSUFBSTswQkFBQyxDQUFlOzs7Ozs7d0ZBQzlCRCxTQUFTLENBQUNDLElBQUk7MEJBQUMsQ0FBdUI7Ozs7Ozt3RkFDdENELFNBQVMsQ0FBQ0MsSUFBSTswQkFBQyxDQUFrQjs7Ozs7Ozs7Ozs7O0FBR3hDLENBQUM7R0FadUJKLElBQUk7O1FBQ1pELG9EQUFXOzs7S0FESEMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9saXN0LmpzP2Q2ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdEcgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoKSB7XHJcbiAgY29uc3QgaXRlbXMgPSB1c2VTZWxlY3RvcigoeyB1c2VycyB9KSA9PiB1c2Vycy5pdGVtcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdEdyb3VwPlxyXG4gICAgICA8TGlzdEdyb3VwLkl0ZW0+Q3JhcyBqdXN0byBvZGlvPC9MaXN0R3JvdXAuSXRlbT5cclxuICAgICAgPExpc3RHcm91cC5JdGVtPkRhcGlidXMgYWMgZmFjaWxpc2lzIGluPC9MaXN0R3JvdXAuSXRlbT5cclxuICAgICAgPExpc3RHcm91cC5JdGVtPk1vcmJpIGxlbyByaXN1czwvTGlzdEdyb3VwLkl0ZW0+XHJcbiAgICAgIDxMaXN0R3JvdXAuSXRlbT5Qb3J0YSBhYyBjb25zZWN0ZXR1ciBhYzwvTGlzdEdyb3VwLkl0ZW0+XHJcbiAgICAgIDxMaXN0R3JvdXAuSXRlbT5WZXN0aWJ1bHVtIGF0IGVyb3M8L0xpc3RHcm91cC5JdGVtPlxyXG4gICAgPC9MaXN0R3JvdXA+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGlzdEciLCJ1c2VTZWxlY3RvciIsIkxpc3QiLCJpdGVtcyIsInVzZXJzIiwiTGlzdEdyb3VwIiwiSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/list.js\n");

/***/ })

});
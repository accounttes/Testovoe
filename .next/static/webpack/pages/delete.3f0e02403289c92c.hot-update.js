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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Delete; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! React */ \"./node_modules/React/index.js\");\n/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(React__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_A_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/A.js */ \"./components/A.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/items */ \"./store/actions/items.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Delete() {\n    var _this = this;\n    var handleItems = function handleItems(e) {\n        dispatch((0,_store_actions_items__WEBPACK_IMPORTED_MODULE_4__.removeItem)(Number(e.target.dataset.id)));\n    };\n    _s();\n    var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(param) {\n        var users = param.users;\n        return users.items;\n    });\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        keywords: \"test next.js addUser\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Удаление пользователя\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_A_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/\",\n                text: \"Назад\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.ListGroup, {\n                children: items && items.map(function(item, index) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.ListGroup.Item, {\n                        children: [\n                            item.username,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleItems,\n                                \"data-id\": item.id,\n                                style: {\n                                    marginLeft: '20px'\n                                },\n                                children: \"Удалить\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Delete, \"pGb0aODkcAvlEs1+CzoewPPUhyo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = Delete;\nvar _c;\n$RefreshReg$(_c, \"Delete\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZWxldGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1c7QUFDVDtBQUNvQjtBQUNIO0FBQ3ZCOztBQUViLFFBQVEsQ0FBQ08sTUFBTSxHQUFHLENBQUM7O1FBSXZCQyxXQUFXLEdBQXBCLFFBQVEsQ0FBQ0EsV0FBVyxDQUFDQyxDQUFDLEVBQUUsQ0FBQztRQUN2QkMsUUFBUSxDQUFDTCxnRUFBVSxDQUFDTSxNQUFNLENBQUNGLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxPQUFPLENBQUNDLEVBQUU7SUFDaEQsQ0FBQzs7SUFMRCxHQUFLLENBQUNDLEtBQUssR0FBR1osd0RBQVcsQ0FBQyxRQUFRO1lBQUxhLEtBQUssU0FBTEEsS0FBSztRQUFPQSxNQUFNRCxDQUFOQyxLQUFLLENBQUNELEtBQUs7O0lBQ3BELEdBQUssQ0FBQ0wsUUFBUSxHQUFHTix3REFBVztJQU01QixNQUFNOzt3RkFFREUsa0RBQUk7O2dHQUNGVyxDQUFJO3dCQUFDQyxRQUFRLEVBQUMsQ0FBc0I7Ozs7OztnR0FDcENDLENBQUs7a0NBQUMsQ0FBcUI7Ozs7Ozs7Ozs7Ozt3RkFHVGpCLHdEQUFuQjtnQkFBQ2tCLElBQUksRUFBQyxDQUFHO2dCQUFDQyxJQUFJLEVBQUMsQ0FBTzs7Ozs7O3dGQUNsQnBCLHNEQUFJOzBCQUNQYyxLQUFLLElBQ0pBLEtBQUssQ0FBQ08sR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFFQyxLQUFLO2tDQUNwQixNQUFNLCtEQUFMdkIsMkRBQWM7OzRCQUNac0IsSUFBSSxDQUFDRyxRQUFRO3dHQUNiQyxDQUFNO2dDQUFDQyxPQUFPLEVBQUVwQixXQUFXO2dDQUFFcUIsQ0FBTyxVQUFFTixJQUFJLENBQUNULEVBQUU7Z0NBQUVnQixLQUFLLEVBQUUsQ0FBQztvQ0FBQ0MsVUFBVSxFQUFFLENBQU07Z0NBQUMsQ0FBQzswQ0FBRSxDQUUvRTs7Ozs7Ozt1QkFKbUJQLEtBQUs7Ozs7Ozs7Ozs7Ozs7QUFVdEMsQ0FBQztHQTdCdUJqQixNQUFNOztRQUNkSixvREFBVztRQUNSQyxvREFBVzs7O0tBRk5HLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGVsZXRlLmpzP2JjNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdSZWFjdCc7XHJcbmltcG9ydCB7IExpc3RHcm91cCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBBIGZyb20gJy4uL2NvbXBvbmVudHMvQS5qcyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVtb3ZlSXRlbSB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaXRlbXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlKCkge1xyXG4gIGNvbnN0IGl0ZW1zID0gdXNlU2VsZWN0b3IoKHsgdXNlcnMgfSkgPT4gdXNlcnMuaXRlbXMpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlSXRlbXMoZSkge1xyXG4gICAgZGlzcGF0Y2gocmVtb3ZlSXRlbShOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5pZCkpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBrZXl3b3Jkcz1cInRlc3QgbmV4dC5qcyBhZGRVc2VyXCI+PC9tZXRhPlxyXG4gICAgICAgIDx0aXRsZT7Qo9C00LDQu9C10L3QuNC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxBIGhyZWY9XCIvXCIgdGV4dD1cItCd0LDQt9Cw0LRcIiAvPlxyXG4gICAgICA8TGlzdEdyb3VwPlxyXG4gICAgICAgIHtpdGVtcyAmJlxyXG4gICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAge2l0ZW0udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVJdGVtc30gZGF0YS1pZD17aXRlbS5pZH0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L0xpc3RHcm91cD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGlzdEdyb3VwIiwiQSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJyZW1vdmVJdGVtIiwiSGVhZCIsIkRlbGV0ZSIsImhhbmRsZUl0ZW1zIiwiZSIsImRpc3BhdGNoIiwiTnVtYmVyIiwidGFyZ2V0IiwiZGF0YXNldCIsImlkIiwiaXRlbXMiLCJ1c2VycyIsIm1ldGEiLCJrZXl3b3JkcyIsInRpdGxlIiwiaHJlZiIsInRleHQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJJdGVtIiwidXNlcm5hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiZGF0YS1pZCIsInN0eWxlIiwibWFyZ2luTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/delete.js\n");

/***/ })

});
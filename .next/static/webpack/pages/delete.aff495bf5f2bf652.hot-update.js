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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Delete; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! React */ \"./node_modules/React/index.js\");\n/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(React__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_A_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/A.js */ \"./components/A.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/items */ \"./store/actions/items.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Delete() {\n    var _this = this;\n    var handleItems = function handleItems(e) {\n        dispatch((0,_store_actions_items__WEBPACK_IMPORTED_MODULE_4__.removeItem)(Number(e.target.dataset.id)));\n    };\n    _s();\n    var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(param) {\n        var users = param.users;\n        return users.items;\n    });\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_A_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/\",\n                text: \"Назад\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.ListGroup, {\n                children: items && items.map(function(item, index) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.ListGroup.Item, {\n                        children: [\n                            item.username,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleItems,\n                                \"data-id\": item.id,\n                                style: {\n                                    marginLeft: '20px'\n                                },\n                                children: \"Удалить\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                                lineNumber: 23,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Delete, \"pGb0aODkcAvlEs1+CzoewPPUhyo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = Delete;\nvar _c;\n$RefreshReg$(_c, \"Delete\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZWxldGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNXO0FBQ1Q7QUFDb0I7QUFDSDs7QUFFcEMsUUFBUSxDQUFDTSxNQUFNLEdBQUcsQ0FBQzs7UUFJdkJDLFdBQVcsR0FBcEIsUUFBUSxDQUFDQSxXQUFXLENBQUNDLENBQUMsRUFBRSxDQUFDO1FBQ3ZCQyxRQUFRLENBQUNKLGdFQUFVLENBQUNLLE1BQU0sQ0FBQ0YsQ0FBQyxDQUFDRyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsRUFBRTtJQUNoRCxDQUFDOztJQUxELEdBQUssQ0FBQ0MsS0FBSyxHQUFHWCx3REFBVyxDQUFDLFFBQVE7WUFBTFksS0FBSyxTQUFMQSxLQUFLO1FBQU9BLE1BQU1ELENBQU5DLEtBQUssQ0FBQ0QsS0FBSzs7SUFDcEQsR0FBSyxDQUFDTCxRQUFRLEdBQUdMLHdEQUFXO0lBTTVCLE1BQU07O3dGQUVERix3REFBQztnQkFBQ2MsSUFBSSxFQUFDLENBQUc7Z0JBQUNDLElBQUksRUFBQyxDQUFPOzs7Ozs7d0ZBQ2xCaEIsc0RBQUk7MEJBQ1BhLEtBQUssSUFDSkEsS0FBSyxDQUFDSSxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUVDLEtBQUs7a0NBQ3BCLE1BQU0sK0RBQUxuQiwyREFBYzs7NEJBQ1prQixJQUFJLENBQUNHLFFBQVE7d0dBQ2JDLENBQU07Z0NBQUNDLE9BQU8sRUFBRWpCLFdBQVc7Z0NBQUVrQixDQUFPLFVBQUVOLElBQUksQ0FBQ04sRUFBRTtnQ0FBRWEsS0FBSyxFQUFFLENBQUM7b0NBQUNDLFVBQVUsRUFBRSxDQUFNO2dDQUFDLENBQUM7MENBQUUsQ0FFL0U7Ozs7Ozs7dUJBSm1CUCxLQUFLOzs7Ozs7Ozs7Ozs7O0FBVXRDLENBQUM7R0F4QnVCZCxNQUFNOztRQUNkSCxvREFBVztRQUNSQyxvREFBVzs7O0tBRk5FLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGVsZXRlLmpzP2JjNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdSZWFjdCc7XHJcbmltcG9ydCB7IExpc3RHcm91cCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBBIGZyb20gJy4uL2NvbXBvbmVudHMvQS5qcyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVtb3ZlSXRlbSB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaXRlbXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlKCkge1xyXG4gIGNvbnN0IGl0ZW1zID0gdXNlU2VsZWN0b3IoKHsgdXNlcnMgfSkgPT4gdXNlcnMuaXRlbXMpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlSXRlbXMoZSkge1xyXG4gICAgZGlzcGF0Y2gocmVtb3ZlSXRlbShOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5pZCkpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QSBocmVmPVwiL1wiIHRleHQ9XCLQndCw0LfQsNC0XCIgLz5cclxuICAgICAgPExpc3RHcm91cD5cclxuICAgICAgICB7aXRlbXMgJiZcclxuICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIHtpdGVtLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlSXRlbXN9IGRhdGEtaWQ9e2l0ZW0uaWR9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9MaXN0R3JvdXA+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpc3RHcm91cCIsIkEiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwicmVtb3ZlSXRlbSIsIkRlbGV0ZSIsImhhbmRsZUl0ZW1zIiwiZSIsImRpc3BhdGNoIiwiTnVtYmVyIiwidGFyZ2V0IiwiZGF0YXNldCIsImlkIiwiaXRlbXMiLCJ1c2VycyIsImhyZWYiLCJ0ZXh0IiwibWFwIiwiaXRlbSIsImluZGV4IiwiSXRlbSIsInVzZXJuYW1lIiwiYnV0dG9uIiwib25DbGljayIsImRhdGEtaWQiLCJzdHlsZSIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/delete.js\n");

/***/ }),

/***/ "./store/actions/items.js":
/*!********************************!*\
  !*** ./store/actions/items.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setItems\": function() { return /* binding */ setItems; },\n/* harmony export */   \"addItem\": function() { return /* binding */ addItem; },\n/* harmony export */   \"removeItem\": function() { return /* binding */ removeItem; }\n/* harmony export */ });\nvar setItems = function(todos) {\n    return {\n        type: 'SET_ITEMS',\n        payload: todos\n    };\n};\nvar addItem = function(data) {\n    return {\n        type: 'ADD_ITEM',\n        payload: data\n    };\n};\nvar removeItem = function(id) {\n    return {\n        type: 'REMOVE_ITEM',\n        payload: id\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9hY3Rpb25zL2l0ZW1zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLEdBQUssQ0FBQ0EsUUFBUSxHQUFHLFFBQVEsQ0FBUEMsS0FBSztJQUFLLE1BQ2pDQyxDQURrQyxDQUFDO1FBQ25DQSxJQUFJLEVBQUUsQ0FBVztRQUNqQkMsT0FBTyxFQUFFRixLQUFLO0lBQ2hCLENBQUM7O0FBRU0sR0FBSyxDQUFDRyxPQUFPLEdBQUcsUUFBUSxDQUFQQyxJQUFJO0lBQUssTUFDL0JILENBRGdDLENBQUM7UUFDakNBLElBQUksRUFBRSxDQUFVO1FBQ2hCQyxPQUFPLEVBQUVFLElBQUk7SUFDZixDQUFDOztBQUVNLEdBQUssQ0FBQ0MsVUFBVSxHQUFHLFFBQVEsQ0FBUEMsRUFBRTtJQUFLLE1BQ2hDTCxDQURpQyxDQUFDO1FBQ2xDQSxJQUFJLEVBQUUsQ0FBYTtRQUNuQkMsT0FBTyxFQUFFSSxFQUFFO0lBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9hY3Rpb25zL2l0ZW1zLmpzPzg2NjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldEl0ZW1zID0gKHRvZG9zKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfSVRFTVMnLFxyXG4gIHBheWxvYWQ6IHRvZG9zLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRJdGVtID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogJ0FERF9JVEVNJyxcclxuICBwYXlsb2FkOiBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVJdGVtID0gKGlkKSA9PiAoe1xyXG4gIHR5cGU6ICdSRU1PVkVfSVRFTScsXHJcbiAgcGF5bG9hZDogaWQsXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsic2V0SXRlbXMiLCJ0b2RvcyIsInR5cGUiLCJwYXlsb2FkIiwiYWRkSXRlbSIsImRhdGEiLCJyZW1vdmVJdGVtIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/actions/items.js\n");

/***/ })

});
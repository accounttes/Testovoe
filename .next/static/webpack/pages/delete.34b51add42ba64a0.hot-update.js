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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Delete; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! React */ \"./node_modules/React/index.js\");\n/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(React__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_A_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/A.js */ \"./components/A.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Delete() {\n    var _this = this;\n    var handleItems = function handleItems(e, index) {\n        console.log(e.target);\n    };\n    _s();\n    var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(param) {\n        var users = param.users;\n        return users.items;\n    });\n    var ref = _slicedToArray((0,React__WEBPACK_IMPORTED_MODULE_1__.useState)(second), 2), id = ref[0], setId = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_A_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/\",\n                text: \"Назад\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.ListGroup, {\n                children: items && items.map(function(item, index) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.ListGroup.Item, {\n                        children: [\n                            item.username,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleItems,\n                                style: {\n                                    marginLeft: '20px'\n                                },\n                                children: \"Удалить\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                                lineNumber: 23,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                        lineNumber: 21,\n                        columnNumber: 15\n                    }, _this));\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Delete, \"FpLXZ3FnvJUIIKZX3qyVZqsuoSk=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Delete;\nvar _c;\n$RefreshReg$(_c, \"Delete\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZWxldGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1c7QUFDVDtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsUUFBUSxDQUFDSSxNQUFNLEdBQUcsQ0FBQzs7UUFJdkJDLFdBQVcsR0FBcEIsUUFBUSxDQUFDQSxXQUFXLENBQUNDLENBQUMsRUFBRUMsS0FBSyxFQUFFLENBQUM7UUFDOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxDQUFDLENBQUNJLE1BQU07SUFDdEIsQ0FBQzs7SUFMRCxHQUFLLENBQUNDLEtBQUssR0FBR1Isd0RBQVcsQ0FBQyxRQUFRO1lBQUxTLEtBQUssU0FBTEEsS0FBSztRQUFPQSxNQUFNRCxDQUFOQyxLQUFLLENBQUNELEtBQUs7O0lBQ3BELEdBQUssQ0FBZVgsR0FBZ0Isa0JBQWhCQSwrQ0FBUSxDQUFDYSxNQUFNLE9BQTVCQyxFQUFFLEdBQVdkLEdBQWdCLEtBQXpCZSxLQUFLLEdBQUlmLEdBQWdCO0lBTXBDLE1BQU07O3dGQUVERSx3REFBQztnQkFBQ2MsSUFBSSxFQUFDLENBQUc7Z0JBQUNDLElBQUksRUFBQyxDQUFPOzs7Ozs7d0ZBQ2xCaEIsc0RBQUk7MEJBQ1BVLEtBQUssSUFDSkEsS0FBSyxDQUFDTyxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUVaLEtBQUssRUFBSyxDQUFDO29CQUMxQixNQUFNLDZFQUNITiwyREFBYzs7NEJBQ1prQixJQUFJLENBQUNFLFFBQVE7d0dBQ2JDLENBQU07Z0NBQUNDLE9BQU8sRUFBRWxCLFdBQVc7Z0NBQUVtQixLQUFLLEVBQUUsQ0FBQztvQ0FBQ0MsVUFBVSxFQUFFLENBQU07Z0NBQUMsQ0FBQzswQ0FBRSxDQUU3RDs7Ozs7Ozt1QkFKbUJsQixLQUFLOzs7OztnQkFPOUIsQ0FBQzs7Ozs7Ozs7QUFJWCxDQUFDO0dBMUJ1QkgsTUFBTTs7UUFDZEQsb0RBQVc7OztLQURIQyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RlbGV0ZS5qcz9iYzU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnUmVhY3QnO1xyXG5pbXBvcnQgeyBMaXN0R3JvdXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgQSBmcm9tICcuLi9jb21wb25lbnRzL0EuanMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZSgpIHtcclxuICBjb25zdCBpdGVtcyA9IHVzZVNlbGVjdG9yKCh7IHVzZXJzIH0pID0+IHVzZXJzLml0ZW1zKTtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKHNlY29uZCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUl0ZW1zKGUsIGluZGV4KSB7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEEgaHJlZj1cIi9cIiB0ZXh0PVwi0J3QsNC30LDQtFwiIC8+XHJcbiAgICAgIDxMaXN0R3JvdXA+XHJcbiAgICAgICAge2l0ZW1zICYmXHJcbiAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUl0ZW1zfSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvTGlzdEdyb3VwPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaXN0R3JvdXAiLCJBIiwidXNlU2VsZWN0b3IiLCJEZWxldGUiLCJoYW5kbGVJdGVtcyIsImUiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpdGVtcyIsInVzZXJzIiwic2Vjb25kIiwiaWQiLCJzZXRJZCIsImhyZWYiLCJ0ZXh0IiwibWFwIiwiaXRlbSIsIkl0ZW0iLCJ1c2VybmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdHlsZSIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/delete.js\n");

/***/ })

});
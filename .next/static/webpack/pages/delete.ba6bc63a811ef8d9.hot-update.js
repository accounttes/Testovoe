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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Delete; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! React */ \"./node_modules/React/index.js\");\n/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(React__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_A_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/A.js */ \"./components/A.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Delete() {\n    var _this = this;\n    var handleItems = function handleItems(e, index) {\n        console.log(e.target);\n    };\n    _s();\n    var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(param) {\n        var users = param.users;\n        return users.items;\n    });\n    var ref = _slicedToArray((0,React__WEBPACK_IMPORTED_MODULE_1__.useState)(second), 2), id = ref[0], setfirst = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_A_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/\",\n                text: \"Назад\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.ListGroup, {\n                children: items && items.map(function(item, index) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.ListGroup.Item, {\n                        children: [\n                            item.username,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleItems,\n                                style: {\n                                    marginLeft: '20px'\n                                },\n                                children: \"Удалить\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                                lineNumber: 23,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                        lineNumber: 21,\n                        columnNumber: 15\n                    }, _this));\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\delete.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Delete, \"xEHZtoqPJJzhxqm0AaCIOGHUyN4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Delete;\nvar _c;\n$RefreshReg$(_c, \"Delete\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZWxldGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1c7QUFDVDtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsUUFBUSxDQUFDSSxNQUFNLEdBQUcsQ0FBQzs7UUFJdkJDLFdBQVcsR0FBcEIsUUFBUSxDQUFDQSxXQUFXLENBQUNDLENBQUMsRUFBRUMsS0FBSyxFQUFFLENBQUM7UUFDOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxDQUFDLENBQUNJLE1BQU07SUFDdEIsQ0FBQzs7SUFMRCxHQUFLLENBQUNDLEtBQUssR0FBR1Isd0RBQVcsQ0FBQyxRQUFRO1lBQUxTLEtBQUssU0FBTEEsS0FBSztRQUFPQSxNQUFNRCxDQUFOQyxLQUFLLENBQUNELEtBQUs7O0lBQ3BELEdBQUssQ0FBa0JYLEdBQWdCLGtCQUFoQkEsK0NBQVEsQ0FBQ2EsTUFBTSxPQUEvQkMsRUFBRSxHQUFjZCxHQUFnQixLQUE1QmUsUUFBUSxHQUFJZixHQUFnQjtJQU12QyxNQUFNOzt3RkFFREUsd0RBQUM7Z0JBQUNjLElBQUksRUFBQyxDQUFHO2dCQUFDQyxJQUFJLEVBQUMsQ0FBTzs7Ozs7O3dGQUNsQmhCLHNEQUFJOzBCQUNQVSxLQUFLLElBQ0pBLEtBQUssQ0FBQ08sR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFFWixLQUFLLEVBQUssQ0FBQztvQkFDMUIsTUFBTSw2RUFDSE4sMkRBQWM7OzRCQUNaa0IsSUFBSSxDQUFDRSxRQUFRO3dHQUNiQyxDQUFNO2dDQUFDQyxPQUFPLEVBQUVsQixXQUFXO2dDQUFFbUIsS0FBSyxFQUFFLENBQUM7b0NBQUNDLFVBQVUsRUFBRSxDQUFNO2dDQUFDLENBQUM7MENBQUUsQ0FFN0Q7Ozs7Ozs7dUJBSm1CbEIsS0FBSzs7Ozs7Z0JBTzlCLENBQUM7Ozs7Ozs7O0FBSVgsQ0FBQztHQTFCdUJILE1BQU07O1FBQ2RELG9EQUFXOzs7S0FESEMsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kZWxldGUuanM/YmM1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ1JlYWN0JztcclxuaW1wb3J0IHsgTGlzdEdyb3VwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEEgZnJvbSAnLi4vY29tcG9uZW50cy9BLmpzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWxldGUoKSB7XHJcbiAgY29uc3QgaXRlbXMgPSB1c2VTZWxlY3RvcigoeyB1c2VycyB9KSA9PiB1c2Vycy5pdGVtcyk7XHJcbiAgY29uc3QgW2lkLCBzZXRmaXJzdF0gPSB1c2VTdGF0ZShzZWNvbmQpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVJdGVtcyhlLCBpbmRleCkge1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxBIGhyZWY9XCIvXCIgdGV4dD1cItCd0LDQt9Cw0LRcIiAvPlxyXG4gICAgICA8TGlzdEdyb3VwPlxyXG4gICAgICAgIHtpdGVtcyAmJlxyXG4gICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVJdGVtc30gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICA8L0xpc3RHcm91cD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGlzdEdyb3VwIiwiQSIsInVzZVNlbGVjdG9yIiwiRGVsZXRlIiwiaGFuZGxlSXRlbXMiLCJlIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiaXRlbXMiLCJ1c2VycyIsInNlY29uZCIsImlkIiwic2V0Zmlyc3QiLCJocmVmIiwidGV4dCIsIm1hcCIsIml0ZW0iLCJJdGVtIiwidXNlcm5hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/delete.js\n");

/***/ })

});
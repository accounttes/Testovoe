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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_A_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/A.js */ \"./components/A.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Search() {\n    var _this = this;\n    var handleValue = function handleValue(e) {\n        setValue(e.target.value);\n    };\n    _s();\n    var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(param) {\n        var users = param.users;\n        return users.items;\n    });\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), value = ref[0], setValue = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_A_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                href: \"/\",\n                text: \"Назад\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                placeholder: \"Поиск контактов\",\n                value: value,\n                onChange: handleValue\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Table, {\n                striped: true,\n                bordered: true,\n                hover: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Имя\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Имя пользователя\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: items && items.map(function(item, index) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.username\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Search, \"Unb9l3A8rFgO2WMqpSPfrABYndE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ3NCO0FBQ2Y7QUFDTDs7QUFFbkIsUUFBUSxDQUFDSyxNQUFNLEdBQUcsQ0FBQzs7UUFNdkJDLFdBQVcsR0FBcEIsUUFBUSxDQUFDQSxXQUFXLENBQUNDLENBQUMsRUFBRSxDQUFDO1FBQ3ZCQyxRQUFRLENBQUNELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO0lBQ3pCLENBQUM7O0lBUEQsR0FBSyxDQUFDQyxLQUFLLEdBQUdWLHdEQUFXLENBQUMsUUFBUTtZQUFMVyxLQUFLLFNBQUxBLEtBQUs7UUFBT0EsTUFBTUQsQ0FBTkMsS0FBSyxDQUFDRCxLQUFLOztJQUNwRCxHQUFLLENBQUNFLFFBQVEsR0FBR1gsd0RBQVc7SUFFNUIsR0FBSyxDQUFxQkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBOUJVLEtBQUssR0FBY1YsR0FBWSxLQUF4QlEsUUFBUSxHQUFJUixHQUFZO0lBTXRDLE1BQU07O3dGQUVESSx3REFBQztnQkFBQ1UsSUFBSSxFQUFDLENBQUc7Z0JBQUNDLElBQUksRUFBQyxDQUFPOzs7Ozs7d0ZBQ2xCQyxDQUFBO2dCQUFDQyxXQUFXLEVBQUMsQ0FBaUI7Z0JBQWVQLEtBQUssRUFBRUEsS0FBSztnQkFBRVEsUUFBUSxFQUFFWixXQUFXOzs7Ozs7d0ZBQ3ZFSCxrREFBVDtnQkFBQ2dCLE9BQU87Z0JBQUNDLFFBQVE7Z0JBQUNDLEtBQUs7O2dHQUMxQkMsQ0FBSzs4R0FDSEMsQ0FBRTs7NEdBQ0FDLENBQUU7OENBQUMsQ0FBRzs7Ozs7OzRHQUNIQSxDQUFEOzhDQUFDLENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OztnR0FHdkJDLENBQUs7a0NBQ0hkLEtBQUssSUFDSkEsS0FBSyxDQUFDZSxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUVDLEtBQUs7MENBQ3BCLE1BQU0sK0RBQUxMLENBQUU7O2dIQUNBTSxDQUFFO2tEQUFFRixJQUFJLENBQUNHLElBQUk7Ozs7OztnSEFDYkQsQ0FBRTtrREFBRUYsSUFBSSxDQUFDSSxRQUFROzs7Ozs7OytCQUZYSCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzVCLENBQUM7R0FqQ3VCdkIsTUFBTTs7UUFDZEosb0RBQVc7UUFDUkMsb0RBQVc7OztLQUZORyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlYXJjaC5qcz85MjBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEEgZnJvbSAnLi4vY29tcG9uZW50cy9BLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICBjb25zdCBpdGVtcyA9IHVzZVNlbGVjdG9yKCh7IHVzZXJzIH0pID0+IHVzZXJzLml0ZW1zKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVWYWx1ZShlKSB7XHJcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEEgaHJlZj1cIi9cIiB0ZXh0PVwi0J3QsNC30LDQtFwiIC8+XHJcbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cItCf0L7QuNGB0Log0LrQvtC90YLQsNC60YLQvtCyXCIgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlVmFsdWV9PjwvaW5wdXQ+XHJcbiAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPtCY0LzRjzwvdGg+XHJcbiAgICAgICAgICAgIDx0aD7QmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7aXRlbXMgJiZcclxuICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0udXNlcm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiVGFibGUiLCJBIiwiU2VhcmNoIiwiaGFuZGxlVmFsdWUiLCJlIiwic2V0VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIml0ZW1zIiwidXNlcnMiLCJkaXNwYXRjaCIsImhyZWYiLCJ0ZXh0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwic3RyaXBlZCIsImJvcmRlcmVkIiwiaG92ZXIiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRkIiwibmFtZSIsInVzZXJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/items */ \"./store/actions/items.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_A_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/A.js */ \"./components/A.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Search() {\n    var _this = this;\n    var handleValue = function handleValue(e) {\n        setValue(e.target.value);\n        dispatch((0,_store_actions_items__WEBPACK_IMPORTED_MODULE_3__.searchItem)(e.target.value));\n    };\n    _s();\n    var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(param) {\n        var users = param.users;\n        return users.items;\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), defItems = ref[0], setDefItems = ref[1];\n    console.log(defItems);\n    if (items.length > 0) {\n        setDefItems(items);\n    }\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), value = ref1[0], setValue = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_A_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                href: \"/\",\n                text: \"Назад\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                placeholder: \"Имя или имя пользователя\",\n                value: value,\n                onChange: handleValue,\n                style: {\n                    width: '400px'\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Table, {\n                striped: true,\n                bordered: true,\n                hover: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Имя\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Имя пользователя\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: items && items.map(function(item, index) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.username\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\search.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Search, \"i0izbPbNeax9npBsTsvOHKxVmFc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNzQjtBQUNIO0FBQ1o7QUFDTDs7QUFFbkIsUUFBUSxDQUFDTSxNQUFNLEdBQUcsQ0FBQzs7UUFhdkJDLFdBQVcsR0FBcEIsUUFBUSxDQUFDQSxXQUFXLENBQUNDLENBQUMsRUFBRSxDQUFDO1FBQ3ZCQyxRQUFRLENBQUNELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1FBQ3ZCQyxRQUFRLENBQUNULGdFQUFVLENBQUNLLENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO0lBQ3BDLENBQUM7O0lBZkQsR0FBSyxDQUFDRSxLQUFLLEdBQUdaLHdEQUFXLENBQUMsUUFBUTtZQUFMYSxLQUFLLFNBQUxBLEtBQUs7UUFBT0EsTUFBTUQsQ0FBTkMsS0FBSyxDQUFDRCxLQUFLOztJQUNwRCxHQUFLLENBQTJCYixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQXBDZSxRQUFRLEdBQWlCZixHQUFZLEtBQTNCZ0IsV0FBVyxHQUFJaEIsR0FBWTtJQUM1Q2lCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRO0lBRXBCLEVBQUUsRUFBRUYsS0FBSyxDQUFDTSxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDckJILFdBQVcsQ0FBQ0gsS0FBSztJQUNuQixDQUFDO0lBRUQsR0FBSyxDQUFDRCxRQUFRLEdBQUdWLHdEQUFXO0lBRTVCLEdBQUssQ0FBcUJGLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTlCVyxLQUFLLEdBQWNYLElBQVksS0FBeEJTLFFBQVEsR0FBSVQsSUFBWTtJQU90QyxNQUFNOzt3RkFFREssd0RBQUM7Z0JBQUNlLElBQUksRUFBQyxDQUFHO2dCQUFDQyxJQUFJLEVBQUMsQ0FBTzs7Ozs7O3dGQUNsQkMsQ0FBQTtnQkFDSkMsV0FBVyxFQUFDLENBQTBCO2dCQUNqQlosS0FBaEIsRUFBRUEsS0FBSztnQkFDWmEsUUFBUSxFQUFFakIsV0FBVztnQkFDckJrQixLQUFLLEVBQUUsQ0FBQztvQkFBQ0MsS0FBSyxFQUFFLENBQU87Z0JBQUMsQ0FBQzs7Ozs7O3dGQUMxQnRCLGtEQUFLO2dCQUFDdUIsT0FBTztnQkFBQ0MsUUFBUTtnQkFBQ0MsS0FBSzs7Z0dBQzFCQyxDQUFLOzhHQUNIQyxDQUFFOzs0R0FDQUMsQ0FBRTs4Q0FBQyxDQUFHOzs7Ozs7NEdBQ0hBLENBQUQ7OENBQUMsQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQUd2QkMsQ0FBSztrQ0FDSHBCLEtBQUssSUFDSkEsS0FBSyxDQUFDcUIsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFFQyxLQUFLOzBDQUNwQixNQUFNLCtEQUFMTCxDQUFFOztnSEFDQU0sQ0FBRTtrREFBRUYsSUFBSSxDQUFDRyxJQUFJOzs7Ozs7Z0hBQ2JELENBQUU7a0RBQUVGLElBQUksQ0FBQ0ksUUFBUTs7Ozs7OzsrQkFGWEgsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM1QixDQUFDO0dBN0N1QjlCLE1BQU07O1FBQ2RMLG9EQUFXO1FBUVJDLG9EQUFXOzs7S0FUTkksTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWFyY2guanM/OTIwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzZWFyY2hJdGVtIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pdGVtcyc7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEEgZnJvbSAnLi4vY29tcG9uZW50cy9BLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICBjb25zdCBpdGVtcyA9IHVzZVNlbGVjdG9yKCh7IHVzZXJzIH0pID0+IHVzZXJzLml0ZW1zKTtcclxuICBjb25zdCBbZGVmSXRlbXMsIHNldERlZkl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zb2xlLmxvZyhkZWZJdGVtcyk7XHJcblxyXG4gIGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICBzZXREZWZJdGVtcyhpdGVtcyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVWYWx1ZShlKSB7XHJcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBkaXNwYXRjaChzZWFyY2hJdGVtKGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEEgaHJlZj1cIi9cIiB0ZXh0PVwi0J3QsNC30LDQtFwiIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi0JjQvNGPINC40LvQuCDQuNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCJcclxuICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVZhbHVlfVxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNDAwcHgnIH19PjwvaW5wdXQ+XHJcbiAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPtCY0LzRjzwvdGg+XHJcbiAgICAgICAgICAgIDx0aD7QmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7aXRlbXMgJiZcclxuICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0udXNlcm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwic2VhcmNoSXRlbSIsIlRhYmxlIiwiQSIsIlNlYXJjaCIsImhhbmRsZVZhbHVlIiwiZSIsInNldFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXNwYXRjaCIsIml0ZW1zIiwidXNlcnMiLCJkZWZJdGVtcyIsInNldERlZkl0ZW1zIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImhyZWYiLCJ0ZXh0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwic3R5bGUiLCJ3aWR0aCIsInN0cmlwZWQiLCJib3JkZXJlZCIsImhvdmVyIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0ZCIsIm5hbWUiLCJ1c2VybmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ })

});
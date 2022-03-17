"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create",{

/***/ "./pages/create.js":
/*!*************************!*\
  !*** ./pages/create.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Create; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction Create() {\n    var ref, ref1, ref2, ref3;\n    _s();\n    var ref4 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)(), register = ref4.register, handleSubmit = ref4.handleSubmit, watch = ref4.watch, errors = ref4.formState.errors;\n    var onSubmit = function(data) {\n        alert(JSON.stringify(data));\n    }; // your form submit function which will invoke after successful validation\n    console.log(watch('example')); //\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(onSubmit),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"First Name\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register('firstName', {\n                    required: true,\n                    maxLength: 20,\n                    pattern: /^[A-Za-z]+$/i\n                }), {\n                    style: {\n                        marginLeft: '10px'\n                    }\n                }), void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                (errors === null || errors === void 0 ? void 0 : (ref = errors.firstName) === null || ref === void 0 ? void 0 : ref.type) === 'required' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"This field is required\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 31,\n                    columnNumber: 52\n                }, this),\n                (errors === null || errors === void 0 ? void 0 : (ref1 = errors.firstName) === null || ref1 === void 0 ? void 0 : ref1.type) === 'maxLength' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"First name cannot exceed 20 characters\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 32,\n                    columnNumber: 53\n                }, this),\n                (errors === null || errors === void 0 ? void 0 : (ref2 = errors.firstName) === null || ref2 === void 0 ? void 0 : ref2.type) === 'pattern' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Alphabetical characters only\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 33,\n                    columnNumber: 51\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    style: {\n                        marginLeft: '10px'\n                    },\n                    children: \"Laste Name\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register('lastName', {\n                    pattern: /^[A-Za-z]+$/i\n                }), {\n                    style: {\n                        marginLeft: '10px'\n                    }\n                }), void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                (errors === null || errors === void 0 ? void 0 : (ref3 = errors.lastName) === null || ref3 === void 0 ? void 0 : ref3.type) === 'pattern' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Alphabetical characters only\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 39,\n                    columnNumber: 50\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    style: {\n                        marginLeft: '10px'\n                    },\n                    children: \"Age\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                \"a\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register('age', {\n                    min: 18,\n                    max: 99\n                }), {\n                    style: {\n                        marginLeft: '10px'\n                    }\n                }), void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                errors.age && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"You Must be older then 18 and younger then 99 years old\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 42,\n                    columnNumber: 24\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\",\n                    style: {\n                        marginLeft: '10px'\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n_s(Create, \"qF9J4eMAmxvPhPVVl3Nry7fjOzg=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c = Create;\nvar _c;\n$RefreshReg$(_c, \"Create\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFoQkEsSUFBZ0IsR0FBaEJBLE1BQU0sQ0FBRXVCLFFBQVEsY0FBaEJ2QixJQUFnQixLQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBZ0IsQ0FBRXFCLElBQUksTUFBSyxDQUFTLHdGQUFLQyxDQUFDOzhCQUFDLENBQTRCOzs7Ozs7NEZBQ3ZFVCxDQUFLO29CQUFDSyxLQUFLLEVBQUUsQ0FBQzt3QkFBQ0MsVUFBVSxFQUFFLENBQU07b0JBQUMsQ0FBQzs4QkFBRSxDQUFHOzs7Ozs7Z0JBQVEsQ0FDakQ7NEZBQUNMLENBQUssMEJBQUtiLFFBQVEsQ0FBQyxDQUFLLE1BQUUsQ0FBQztvQkFBQ3VCLEdBQUcsRUFBRSxFQUFFO29CQUFFQyxHQUFHLEVBQUUsRUFBRTtnQkFBQyxDQUFDO29CQUFHUCxLQUFLLEVBQUUsQ0FBQzt3QkFBQ0MsVUFBVSxFQUFFLENBQU07b0JBQUMsQ0FBQzs7Ozs7O2dCQUM5RW5CLE1BQU0sQ0FBQzBCLEdBQUcsZ0ZBQUtKLENBQUM7OEJBQUMsQ0FBdUQ7Ozs7Ozs0RkFDeEVSLENBQUs7b0JBQUNPLElBQUksRUFBQyxDQUFRO29CQUFDSCxLQUFLLEVBQUUsQ0FBQzt3QkFBQ0MsVUFBVSxFQUFFLENBQU07b0JBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQUkxRCxDQUFDO0dBMUN1QnBCLE1BQU07O1FBTXhCRCxvREFBTzs7O0tBTldDLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlLmpzPzIyZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZSgpIHtcclxuICBjb25zdCB7XHJcbiAgICByZWdpc3RlcixcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIHdhdGNoLFxyXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxyXG4gIH0gPSB1c2VGb3JtKCk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICB9OyAvLyB5b3VyIGZvcm0gc3VibWl0IGZ1bmN0aW9uIHdoaWNoIHdpbGwgaW52b2tlIGFmdGVyIHN1Y2Nlc3NmdWwgdmFsaWRhdGlvblxyXG5cclxuICBjb25zb2xlLmxvZyh3YXRjaCgnZXhhbXBsZScpKTsgLy9cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICA8bGFiZWw+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2ZpcnN0TmFtZScsIHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogMjAsXHJcbiAgICAgICAgICAgIHBhdHRlcm46IC9eW0EtWmEtel0rJC9pLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtlcnJvcnM/LmZpcnN0TmFtZT8udHlwZSA9PT0gJ3JlcXVpcmVkJyAmJiA8cD5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9wPn1cclxuICAgICAgICB7ZXJyb3JzPy5maXJzdE5hbWU/LnR5cGUgPT09ICdtYXhMZW5ndGgnICYmIDxwPkZpcnN0IG5hbWUgY2Fubm90IGV4Y2VlZCAyMCBjaGFyYWN0ZXJzPC9wPn1cclxuICAgICAgICB7ZXJyb3JzPy5maXJzdE5hbWU/LnR5cGUgPT09ICdwYXR0ZXJuJyAmJiA8cD5BbHBoYWJldGljYWwgY2hhcmFjdGVycyBvbmx5PC9wPn1cclxuICAgICAgICA8bGFiZWwgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnIH19Pkxhc3RlIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdsYXN0TmFtZScsIHsgcGF0dGVybjogL15bQS1aYS16XSskL2kgfSl9XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtlcnJvcnM/Lmxhc3ROYW1lPy50eXBlID09PSAncGF0dGVybicgJiYgPHA+QWxwaGFiZXRpY2FsIGNoYXJhY3RlcnMgb25seTwvcD59XHJcbiAgICAgICAgPGxhYmVsIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JyB9fT5BZ2U8L2xhYmVsPmFcclxuICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCdhZ2UnLCB7IG1pbjogMTgsIG1heDogOTkgfSl9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JyB9fSAvPlxyXG4gICAgICAgIHtlcnJvcnMuYWdlICYmIDxwPllvdSBNdXN0IGJlIG9sZGVyIHRoZW4gMTggYW5kIHlvdW5nZXIgdGhlbiA5OSB5ZWFycyBvbGQ8L3A+fVxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnIH19IC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VGb3JtIiwiQ3JlYXRlIiwiZXJyb3JzIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImZvcm1TdGF0ZSIsIm9uU3VibWl0IiwiZGF0YSIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwibGFiZWwiLCJpbnB1dCIsInJlcXVpcmVkIiwibWF4TGVuZ3RoIiwicGF0dGVybiIsInN0eWxlIiwibWFyZ2luTGVmdCIsImZpcnN0TmFtZSIsInR5cGUiLCJwIiwibGFzdE5hbWUiLCJtaW4iLCJtYXgiLCJhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/create.js\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Create; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction Create() {\n    var ref, ref1, ref2, ref3;\n    _s();\n    var ref4 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)(), register = ref4.register, handleSubmit = ref4.handleSubmit, watch = ref4.watch, errors = ref4.formState.errors;\n    var onSubmit = function(data) {\n        alert(JSON.stringify(data));\n    }; // your form submit function which will invoke after successful validation\n    console.log(watch('example')); //\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(onSubmit),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"First Name\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register('firstName', {\n                    required: true,\n                    maxLength: 20,\n                    pattern: /^[A-Za-z]+$/i\n                }), {\n                    style: {\n                        paddingLeft: '10px'\n                    }\n                }), void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                (errors === null || errors === void 0 ? void 0 : (ref = errors.firstName) === null || ref === void 0 ? void 0 : ref.type) === 'required' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"This field is required\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 31,\n                    columnNumber: 52\n                }, this),\n                (errors === null || errors === void 0 ? void 0 : (ref1 = errors.firstName) === null || ref1 === void 0 ? void 0 : ref1.type) === 'maxLength' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"First name cannot exceed 20 characters\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 32,\n                    columnNumber: 53\n                }, this),\n                (errors === null || errors === void 0 ? void 0 : (ref2 = errors.firstName) === null || ref2 === void 0 ? void 0 : ref2.type) === 'pattern' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Alphabetical characters only\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 33,\n                    columnNumber: 51\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Laste Name\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register('lastName', {\n                    pattern: /^[A-Za-z]+$/i\n                })), void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                (errors === null || errors === void 0 ? void 0 : (ref3 = errors.lastName) === null || ref3 === void 0 ? void 0 : ref3.type) === 'pattern' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Alphabetical characters only\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 36,\n                    columnNumber: 50\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Age\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                \"a\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register('age', {\n                    min: 18,\n                    max: 99\n                })), void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                errors.age && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"You Must be older then 18 and younger then 99 years old\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 39,\n                    columnNumber: 24\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Винер\\\\Desktop\\\\ekatern\\\\pages\\\\create.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n_s(Create, \"qF9J4eMAmxvPhPVVl3Nry7fjOzg=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c = Create;\nvar _c;\n$RefreshReg$(_c, \"Create\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFcUIsSUFBSSxNQUFLLENBQVMsd0ZBQUtDLENBQUM7OEJBQUMsQ0FBNEI7Ozs7Ozs0RkFDdkVULENBQUs7OEJBQUMsQ0FBRzs7Ozs7O2dCQUFRLENBQ2xCOzRGQUFDQyxDQUFLLDBCQUFLYixRQUFRLENBQUMsQ0FBSyxNQUFFLENBQUM7b0JBQUN1QixHQUFHLEVBQUUsRUFBRTtvQkFBRUMsR0FBRyxFQUFFLEVBQUU7Z0JBQUMsQ0FBQzs7Ozs7Z0JBQzlDekIsTUFBTSxDQUFDMEIsR0FBRyxnRkFBS0osQ0FBQzs4QkFBQyxDQUF1RDs7Ozs7OzRGQUN4RVIsQ0FBSztvQkFBQ08sSUFBSSxFQUFDLENBQVE7Ozs7Ozs7Ozs7Ozs7QUFJNUIsQ0FBQztHQXZDdUJ0QixNQUFNOztRQU14QkQsb0RBQU87OztLQU5XQyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NyZWF0ZS5qcz8yMmY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGUoKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICB3YXRjaCxcclxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuICB9ID0gdXNlRm9ybSgpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcbiAgICBhbGVydChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgfTsgLy8geW91ciBmb3JtIHN1Ym1pdCBmdW5jdGlvbiB3aGljaCB3aWxsIGludm9rZSBhZnRlciBzdWNjZXNzZnVsIHZhbGlkYXRpb25cclxuXHJcbiAgY29uc29sZS5sb2cod2F0Y2goJ2V4YW1wbGUnKSk7IC8vXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgICAgPGxhYmVsPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdmaXJzdE5hbWUnLCB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IDIwLFxyXG4gICAgICAgICAgICBwYXR0ZXJuOiAvXltBLVphLXpdKyQvaSxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcxMHB4JyB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Vycm9ycz8uZmlyc3ROYW1lPy50eXBlID09PSAncmVxdWlyZWQnICYmIDxwPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L3A+fVxyXG4gICAgICAgIHtlcnJvcnM/LmZpcnN0TmFtZT8udHlwZSA9PT0gJ21heExlbmd0aCcgJiYgPHA+Rmlyc3QgbmFtZSBjYW5ub3QgZXhjZWVkIDIwIGNoYXJhY3RlcnM8L3A+fVxyXG4gICAgICAgIHtlcnJvcnM/LmZpcnN0TmFtZT8udHlwZSA9PT0gJ3BhdHRlcm4nICYmIDxwPkFscGhhYmV0aWNhbCBjaGFyYWN0ZXJzIG9ubHk8L3A+fVxyXG4gICAgICAgIDxsYWJlbD5MYXN0ZSBOYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCdsYXN0TmFtZScsIHsgcGF0dGVybjogL15bQS1aYS16XSskL2kgfSl9IC8+XHJcbiAgICAgICAge2Vycm9ycz8ubGFzdE5hbWU/LnR5cGUgPT09ICdwYXR0ZXJuJyAmJiA8cD5BbHBoYWJldGljYWwgY2hhcmFjdGVycyBvbmx5PC9wPn1cclxuICAgICAgICA8bGFiZWw+QWdlPC9sYWJlbD5hXHJcbiAgICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcignYWdlJywgeyBtaW46IDE4LCBtYXg6IDk5IH0pfSAvPlxyXG4gICAgICAgIHtlcnJvcnMuYWdlICYmIDxwPllvdSBNdXN0IGJlIG9sZGVyIHRoZW4gMTggYW5kIHlvdW5nZXIgdGhlbiA5OSB5ZWFycyBvbGQ8L3A+fVxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUZvcm0iLCJDcmVhdGUiLCJlcnJvcnMiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZm9ybVN0YXRlIiwib25TdWJtaXQiLCJkYXRhIiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJsYWJlbCIsImlucHV0IiwicmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJwYXR0ZXJuIiwic3R5bGUiLCJwYWRkaW5nTGVmdCIsImZpcnN0TmFtZSIsInR5cGUiLCJwIiwibGFzdE5hbWUiLCJtaW4iLCJtYXgiLCJhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/create.js\n");

/***/ })

});
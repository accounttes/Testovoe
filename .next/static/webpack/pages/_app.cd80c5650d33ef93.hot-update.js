"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/reducers/items.js":
/*!*********************************!*\
  !*** ./store/reducers/items.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"items\": function() { return /* binding */ items; }\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar initialState = {\n    items: []\n};\nvar items = function() {\n    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case 'SET_ITEMS':\n            return _objectSpread({}, state, {\n                items: action.payload\n            });\n        case 'ADD_ITEM':\n            var newItems = [];\n            state.items.map(function(item) {\n                return newItems.push(item);\n            });\n            var newUser = action.payload;\n            newUser.id = newItems.length;\n            console.log();\n            return state;\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9pdGVtcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEdBQUssQ0FBQ0EsWUFBWSxHQUFHLENBQUM7SUFDcEJDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDWCxDQUFDO0FBRU0sR0FBSyxDQUFDQSxLQUFLLEdBQUcsUUFBUSxHQUEwQixDQUFDO1FBQWxDQyxLQUFLLG9FQUFHRixZQUFZLEVBQUVHLE1BQU07SUFDaEQsTUFBTSxDQUFFQSxNQUFNLENBQUNDLElBQUk7UUFDakIsSUFBSSxDQUFDLENBQVc7WUFDZCxNQUFNLG1CQUFNRixLQUFLO2dCQUFFRCxLQUFLLEVBQUVFLE1BQU0sQ0FBQ0UsT0FBTzs7UUFFMUMsSUFBSSxDQUFDLENBQVU7WUFDYixHQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbkJKLEtBQUssQ0FBQ0QsS0FBSyxDQUFDTSxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJO2dCQUFLRixNQUFNLENBQU5BLFFBQVEsQ0FBQ0csSUFBSSxDQUFDRCxJQUFJOztZQUU1QyxHQUFLLENBQUNFLE9BQU8sR0FBR1AsTUFBTSxDQUFDRSxPQUFPO1lBQzlCSyxPQUFPLENBQUNDLEVBQUUsR0FBR0wsUUFBUSxDQUFDTSxNQUFNO1lBRzVCQyxPQUFPLENBQUNDLEdBQUc7WUFFWCxNQUFNLENBQUNaLEtBQUs7O1lBR1osTUFBTSxDQUFDQSxLQUFLOztBQUVsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3JlZHVjZXJzL2l0ZW1zLmpzPzc5MTYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGl0ZW1zOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtcyA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnU0VUX0lURU1TJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGl0ZW1zOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG5cclxuICAgIGNhc2UgJ0FERF9JVEVNJzpcclxuICAgICAgY29uc3QgbmV3SXRlbXMgPSBbXTtcclxuICAgICAgc3RhdGUuaXRlbXMubWFwKChpdGVtKSA9PiBuZXdJdGVtcy5wdXNoKGl0ZW0pKTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld1VzZXIgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgbmV3VXNlci5pZCA9IG5ld0l0ZW1zLmxlbmd0aDtcclxuXHJcblxyXG4gICAgICBjb25zb2xlLmxvZygpXHJcblxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIml0ZW1zIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIm5ld0l0ZW1zIiwibWFwIiwiaXRlbSIsInB1c2giLCJuZXdVc2VyIiwiaWQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/items.js\n");

/***/ })

});
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

/***/ "./store/reducers/one.js":
/*!*******************************!*\
  !*** ./store/reducers/one.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"one\": function() { return /* binding */ one; }\n/* harmony export */ });\nvar initialState = {\n    currentTime: 0,\n    duration: 0,\n    active: null,\n    volume: 50,\n    pause: true\n};\nvar one = function() {\n    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case 'SET_ITEMS':\n            //   console.log('СЕТ АЙТЕМС ВЫПОЛНИЛСЯ!');\n            return state;\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9vbmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEdBQUssQ0FBQ0EsWUFBWSxHQUFHLENBQUM7SUFDcEJDLFdBQVcsRUFBRSxDQUFDO0lBQ2RDLFFBQVEsRUFBRSxDQUFDO0lBQ1hDLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLE1BQU0sRUFBRSxFQUFFO0lBQ1ZDLEtBQUssRUFBRSxJQUFJO0FBQ2IsQ0FBQztBQUVNLEdBQUssQ0FBQ0MsR0FBRyxHQUFHLFFBQVEsR0FBMEIsQ0FBQztRQUFsQ0MsS0FBSyxvRUFBR1AsWUFBWSxFQUFFUSxNQUFNO0lBQzlDLE1BQU0sQ0FBRUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxDQUFXO1lBQ2QsRUFBMkM7WUFDM0MsTUFBTSxDQUFDRixLQUFLOztZQUdaLE1BQU0sQ0FBQ0EsS0FBSzs7QUFFbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9yZWR1Y2Vycy9vbmUuanM/Yzg0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgY3VycmVudFRpbWU6IDAsXHJcbiAgZHVyYXRpb246IDAsXHJcbiAgYWN0aXZlOiBudWxsLFxyXG4gIHZvbHVtZTogNTAsXHJcbiAgcGF1c2U6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb25lID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdTRVRfSVRFTVMnOlxyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCfQodCV0KIg0JDQmdCi0JXQnNChINCS0KvQn9Ce0JvQndCY0JvQodCvIScpO1xyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImN1cnJlbnRUaW1lIiwiZHVyYXRpb24iLCJhY3RpdmUiLCJ2b2x1bWUiLCJwYXVzZSIsIm9uZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/one.js\n");

/***/ })

});
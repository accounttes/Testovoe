"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/update",{

/***/ "./store/actions/items.js":
/*!********************************!*\
  !*** ./store/actions/items.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setItems\": function() { return /* binding */ setItems; },\n/* harmony export */   \"addItem\": function() { return /* binding */ addItem; },\n/* harmony export */   \"removeItem\": function() { return /* binding */ removeItem; },\n/* harmony export */   \"searchItem\": function() { return /* binding */ searchItem; },\n/* harmony export */   \"setDefaultItems\": function() { return /* binding */ setDefaultItems; }\n/* harmony export */ });\nvar setItems = function(users) {\n    return {\n        type: 'SET_ITEMS',\n        payload: todos\n    };\n};\nvar addItem = function(data) {\n    return {\n        type: 'ADD_ITEM',\n        payload: data\n    };\n};\nvar removeItem = function(id) {\n    return {\n        type: 'REMOVE_ITEM',\n        payload: id\n    };\n};\nvar searchItem = function(value) {\n    return {\n        type: 'SEARCH_ITEM',\n        payload: value\n    };\n};\nvar setDefaultItems = function(value) {\n    return {\n        type: 'SEARCH_ITEM',\n        payload: value\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9hY3Rpb25zL2l0ZW1zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sR0FBSyxDQUFDQSxRQUFRLEdBQUcsUUFBUSxDQUFQQyxLQUFLO0lBQUssTUFDakNDLENBRGtDLENBQUM7UUFDbkNBLElBQUksRUFBRSxDQUFXO1FBQ2pCQyxPQUFPLEVBQUVDLEtBQUs7SUFDaEIsQ0FBQzs7QUFFTSxHQUFLLENBQUNDLE9BQU8sR0FBRyxRQUFRLENBQVBDLElBQUk7SUFBSyxNQUMvQkosQ0FEZ0MsQ0FBQztRQUNqQ0EsSUFBSSxFQUFFLENBQVU7UUFDaEJDLE9BQU8sRUFBRUcsSUFBSTtJQUNmLENBQUM7O0FBRU0sR0FBSyxDQUFDQyxVQUFVLEdBQUcsUUFBUSxDQUFQQyxFQUFFO0lBQUssTUFDaENOLENBRGlDLENBQUM7UUFDbENBLElBQUksRUFBRSxDQUFhO1FBQ25CQyxPQUFPLEVBQUVLLEVBQUU7SUFDYixDQUFDOztBQUVNLEdBQUssQ0FBQ0MsVUFBVSxHQUFHLFFBQVEsQ0FBUEMsS0FBSztJQUFLLE1BQ25DUixDQURvQyxDQUFDO1FBQ3JDQSxJQUFJLEVBQUUsQ0FBYTtRQUNuQkMsT0FBTyxFQUFFTyxLQUFLO0lBQ2hCLENBQUM7O0FBRU0sR0FBSyxDQUFDQyxlQUFlLEdBQUcsUUFBUSxDQUFQRCxLQUFLO0lBQUssTUFDeENSLENBRHlDLENBQUM7UUFDMUNBLElBQUksRUFBRSxDQUFhO1FBQ25CQyxPQUFPLEVBQUVPLEtBQUs7SUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9hY3Rpb25zL2l0ZW1zLmpzPzg2NjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldEl0ZW1zID0gKHVzZXJzKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfSVRFTVMnLFxyXG4gIHBheWxvYWQ6IHRvZG9zLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRJdGVtID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogJ0FERF9JVEVNJyxcclxuICBwYXlsb2FkOiBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVJdGVtID0gKGlkKSA9PiAoe1xyXG4gIHR5cGU6ICdSRU1PVkVfSVRFTScsXHJcbiAgcGF5bG9hZDogaWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaEl0ZW0gPSAodmFsdWUpID0+ICh7XHJcbiAgdHlwZTogJ1NFQVJDSF9JVEVNJyxcclxuICBwYXlsb2FkOiB2YWx1ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0RGVmYXVsdEl0ZW1zID0gKHZhbHVlKSA9PiAoe1xyXG4gIHR5cGU6ICdTRUFSQ0hfSVRFTScsXHJcbiAgcGF5bG9hZDogdmFsdWUsXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsic2V0SXRlbXMiLCJ1c2VycyIsInR5cGUiLCJwYXlsb2FkIiwidG9kb3MiLCJhZGRJdGVtIiwiZGF0YSIsInJlbW92ZUl0ZW0iLCJpZCIsInNlYXJjaEl0ZW0iLCJ2YWx1ZSIsInNldERlZmF1bHRJdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/actions/items.js\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"items\": function() { return /* binding */ items; }\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar initialState = {\n    items: []\n};\nvar items = function() {\n    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case 'SET_ITEMS':\n            return _objectSpread({}, state, {\n                items: action.payload\n            });\n        case 'ADD_ITEM':\n            var newItems = [];\n            state.items.map(function(item) {\n                return newItems.push(item);\n            });\n            var newUser = action.payload;\n            newUser.id = newItems.length + 1;\n            newItems.push(newUser);\n            return _objectSpread({}, state, {\n                items: newItems\n            });\n        case 'REMOVE_ITEM':\n            var newUsers = state.items.filter(function(item) {\n                return item.id !== action.payload;\n            });\n            if (state.items.length === 1) {\n                alert('Нельзя удалить абсолютно все(');\n            } else {\n                return _objectSpread({}, state, {\n                    items: newUsers\n                });\n            }\n        case 'SEARCH_ITEM':\n            var newContacts = state.items.filter(function(item) {\n                return item.name.toLowerCase().includes(action.payload) || item.username.toLowerCase().includes(action.payload);\n            });\n            return _objectSpread({}, state, {\n                items: newContacts\n            });\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9pdGVtcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEdBQUssQ0FBQ0EsWUFBWSxHQUFHLENBQUM7SUFDcEJDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDWCxDQUFDO0FBRU0sR0FBSyxDQUFDQSxLQUFLLEdBQUcsUUFBUSxHQUEwQixDQUFDO1FBQWxDQyxLQUFLLG9FQUFHRixZQUFZLEVBQUVHLE1BQU07SUFDaEQsTUFBTSxDQUFFQSxNQUFNLENBQUNDLElBQUk7UUFDakIsSUFBSSxDQUFDLENBQVc7WUFDZCxNQUFNLG1CQUFNRixLQUFLO2dCQUFFRCxLQUFLLEVBQUVFLE1BQU0sQ0FBQ0UsT0FBTzs7UUFFMUMsSUFBSSxDQUFDLENBQVU7WUFDYixHQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbkJKLEtBQUssQ0FBQ0QsS0FBSyxDQUFDTSxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJO2dCQUFLRixNQUFNLENBQU5BLFFBQVEsQ0FBQ0csSUFBSSxDQUFDRCxJQUFJOztZQUU1QyxHQUFLLENBQUNFLE9BQU8sR0FBR1AsTUFBTSxDQUFDRSxPQUFPO1lBQzlCSyxPQUFPLENBQUNDLEVBQUUsR0FBR0wsUUFBUSxDQUFDTSxNQUFNLEdBQUcsQ0FBQztZQUNoQ04sUUFBUSxDQUFDRyxJQUFJLENBQUNDLE9BQU87WUFFckIsTUFBTSxtQkFBTVIsS0FBSztnQkFBRUQsS0FBSyxFQUFFSyxRQUFROztRQUVwQyxJQUFJLENBQUMsQ0FBYTtZQUNoQixHQUFLLENBQUNPLFFBQVEsR0FBR1gsS0FBSyxDQUFDRCxLQUFLLENBQUNhLE1BQU0sQ0FBQyxRQUFRLENBQVBOLElBQUk7Z0JBQUtBLE1BQU0sQ0FBTkEsSUFBSSxDQUFDRyxFQUFFLEtBQUtSLE1BQU0sQ0FBQ0UsT0FBTzs7WUFFeEUsRUFBRSxFQUFFSCxLQUFLLENBQUNELEtBQUssQ0FBQ1csTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUM3QkcsS0FBSyxDQUFDLENBQStCO1lBQ3ZDLENBQUMsTUFBTSxDQUFDO2dCQUNOLE1BQU0sbUJBQU1iLEtBQUs7b0JBQUVELEtBQUssRUFBRVksUUFBUTs7WUFDcEMsQ0FBQztRQUVILElBQUksQ0FBQyxDQUFhO1lBQ2hCLEdBQUssQ0FBQ0csV0FBVyxHQUFHZCxLQUFLLENBQUNELEtBQUssQ0FBQ2EsTUFBTSxDQUNwQyxRQUFRLENBQVBOLElBQUk7Z0JBQ0hBLE1BQU0sQ0FBTkEsSUFBSSxDQUFDUyxJQUFJLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDaEIsTUFBTSxDQUFDRSxPQUFPLEtBQy9DRyxJQUFJLENBQUNZLFFBQVEsQ0FBQ0YsV0FBVyxHQUFHQyxRQUFRLENBQUNoQixNQUFNLENBQUNFLE9BQU87O1lBRXZELE1BQU0sbUJBQU1ILEtBQUs7Z0JBQUVELEtBQUssRUFBRWUsV0FBVzs7O1lBR3JDLE1BQU0sQ0FBQ2QsS0FBSzs7QUFFbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9yZWR1Y2Vycy9pdGVtcy5qcz83OTE2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpdGVtczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXMgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ1NFVF9JVEVNUyc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpdGVtczogYWN0aW9uLnBheWxvYWQgfTtcclxuXHJcbiAgICBjYXNlICdBRERfSVRFTSc6XHJcbiAgICAgIGNvbnN0IG5ld0l0ZW1zID0gW107XHJcbiAgICAgIHN0YXRlLml0ZW1zLm1hcCgoaXRlbSkgPT4gbmV3SXRlbXMucHVzaChpdGVtKSk7XHJcblxyXG4gICAgICBjb25zdCBuZXdVc2VyID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIG5ld1VzZXIuaWQgPSBuZXdJdGVtcy5sZW5ndGggKyAxO1xyXG4gICAgICBuZXdJdGVtcy5wdXNoKG5ld1VzZXIpO1xyXG5cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGl0ZW1zOiBuZXdJdGVtcyB9O1xyXG5cclxuICAgIGNhc2UgJ1JFTU9WRV9JVEVNJzpcclxuICAgICAgY29uc3QgbmV3VXNlcnMgPSBzdGF0ZS5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkKTtcclxuXHJcbiAgICAgIGlmIChzdGF0ZS5pdGVtcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBhbGVydCgn0J3QtdC70YzQt9GPINGD0LTQsNC70LjRgtGMINCw0LHRgdC+0LvRjtGC0L3QviDQstGB0LUoJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGl0ZW1zOiBuZXdVc2VycyB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSAnU0VBUkNIX0lURU0nOlxyXG4gICAgICBjb25zdCBuZXdDb250YWN0cyA9IHN0YXRlLml0ZW1zLmZpbHRlcihcclxuICAgICAgICAoaXRlbSkgPT5cclxuICAgICAgICAgIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGFjdGlvbi5wYXlsb2FkKSB8fFxyXG4gICAgICAgICAgaXRlbS51c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGFjdGlvbi5wYXlsb2FkKSxcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGl0ZW1zOiBuZXdDb250YWN0cyB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpdGVtcyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJuZXdJdGVtcyIsIm1hcCIsIml0ZW0iLCJwdXNoIiwibmV3VXNlciIsImlkIiwibGVuZ3RoIiwibmV3VXNlcnMiLCJmaWx0ZXIiLCJhbGVydCIsIm5ld0NvbnRhY3RzIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ1c2VybmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/items.js\n");

/***/ })

});
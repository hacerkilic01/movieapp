"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/search/[keyword]/page",{

/***/ "(app-pages-browser)/./src/sections/search-by-name/search-view.jsx":
/*!*****************************************************!*\
  !*** ./src/sections/search-by-name/search-view.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Movies */ \"(app-pages-browser)/./src/components/Movies.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction SearchView(param) {\n    let { keyword } = param;\n    var _data, _data_results, _data1;\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getMovies(keyword);\n    }, [\n        keyword\n    ]);\n    const getMovies = async (kywd)=>{\n        const res = await fetch(\"https://api.themoviedb.org/3/search/movie?api_key=\".concat(kywd, \"&query=\").concat(v, \"&language=en-US&include_adult=false\"));\n        const data1 = await res.json();\n        setMovies(data1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            params.keyword,\n            !((_data = data) === null || _data === void 0 ? void 0 : _data.results) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Aranan şey bulunamadı!!!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\test\\\\movieapp\\\\src\\\\sections\\\\search-by-name\\\\search-view.jsx\",\n                lineNumber: 28,\n                columnNumber: 17\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center flex-wrap gap-3\",\n                children: (_data1 = data) === null || _data1 === void 0 ? void 0 : (_data_results = _data1.results) === null || _data_results === void 0 ? void 0 : _data_results.map((dt, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Movies__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        dt: dt\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\test\\\\movieapp\\\\src\\\\sections\\\\search-by-name\\\\search-view.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 25\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\test\\\\movieapp\\\\src\\\\sections\\\\search-by-name\\\\search-view.jsx\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\test\\\\movieapp\\\\src\\\\sections\\\\search-by-name\\\\search-view.jsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(SearchView, \"DsXWz4eQ6qRZ9Cx7rzTltn/5uKY=\");\n_c = SearchView;\n;\nvar _c;\n$RefreshReg$(_c, \"SearchView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZWN0aW9ucy9zZWFyY2gtYnktbmFtZS9zZWFyY2gtdmlldy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU0QztBQUNIO0FBRzFCLFNBQVNHLFdBQVcsS0FBVztRQUFYLEVBQUVDLE9BQU8sRUFBRSxHQUFYO1FBb0JyQkMsT0FJT0EsZUFBQUE7O0lBdkJqQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBO0lBRXBDRCxnREFBU0EsQ0FBQztRQUNOUSxVQUFVSjtJQUNkLEdBQUc7UUFBQ0E7S0FBUTtJQUdaLE1BQU1JLFlBQVksT0FBT0M7UUFDckIsTUFBTUMsTUFBTSxNQUFNQyxNQUNkLHFEQUFtRUMsT0FBZEgsTUFBSyxXQUFXLE9BQUZHLEdBQUU7UUFFekUsTUFBTVAsUUFBTyxNQUFNSyxJQUFJRyxJQUFJO1FBQzNCTixVQUFVRjtJQUNkO0lBRUEscUJBQ0ksOERBQUNTOztZQUVJQyxPQUFPWCxPQUFPO1lBQ2QsR0FBQ0MsUUFBQUEsa0JBQUFBLDRCQUFBQSxNQUFNVyxPQUFPLGtCQUNYLDhEQUFDRjswQkFBSTs7Ozs7cUNBRUwsOERBQUNBO2dCQUFJRyxXQUFVOzJCQUNWWixTQUFBQSxrQkFBQUEsOEJBQUFBLGdCQUFBQSxPQUFNVyxPQUFPLGNBQWJYLG9DQUFBQSxjQUFlYSxHQUFHLENBQUMsQ0FBQ0MsSUFBSUMsa0JBQ3JCLDhEQUFDbEIsMERBQU1BO3dCQUFTaUIsSUFBSUE7dUJBQVBDOzs7Ozs7Ozs7Ozs7Ozs7O0FBTXJDO0dBL0J3QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZWN0aW9ucy9zZWFyY2gtYnktbmFtZS9zZWFyY2gtdmlldy5qc3g/NDEzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW92aWVzIGZyb20gXCJAL2NvbXBvbmVudHMvTW92aWVzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoVmlldyh7IGtleXdvcmQgfSkge1xyXG4gICAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRNb3ZpZXMoa2V5d29yZCk7XHJcbiAgICB9LCBba2V5d29yZF0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBnZXRNb3ZpZXMgPSBhc3luYyAoa3l3ZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9zZWFyY2gvbW92aWU/YXBpX2tleT0ke2t5d2R9JnF1ZXJ5PSR7dn0mbGFuZ3VhZ2U9ZW4tVVMmaW5jbHVkZV9hZHVsdD1mYWxzZWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHNldE1vdmllcyhkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAge3BhcmFtcy5rZXl3b3JkfVxyXG4gICAgICAgICAgICB7IWRhdGE/LnJlc3VsdHMgP1xyXG4gICAgICAgICAgICAgICAgPGRpdj5BcmFuYW4gxZ9leSBidWx1bmFtYWTEsSEhITwvZGl2PlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXdyYXAgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YT8ucmVzdWx0cz8ubWFwKChkdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW92aWVzIGtleT17aX0gZHQ9e2R0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTW92aWVzIiwiU2VhcmNoVmlldyIsImtleXdvcmQiLCJkYXRhIiwibW92aWVzIiwic2V0TW92aWVzIiwiZ2V0TW92aWVzIiwia3l3ZCIsInJlcyIsImZldGNoIiwidiIsImpzb24iLCJkaXYiLCJwYXJhbXMiLCJyZXN1bHRzIiwiY2xhc3NOYW1lIiwibWFwIiwiZHQiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/sections/search-by-name/search-view.jsx\n"));

/***/ })

});
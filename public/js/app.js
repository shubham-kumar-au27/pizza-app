/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

var addToCart = document.querySelectorAll('.add-to-cart');
addToCart.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log(e);
  });
});

/***/ }),

/***/ "./resources/scss/app.scss":
/*!*********************************!*\
  !*** ./resources/scss/app.scss ***!
  \*********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: \"+\" and \"-\" must be surrounded by whitespace in calculations.\n   ╷\n38 │     min-height: calc(100vh-86px);\r\n   │                           ^\n   ╵\n  resources\\scss\\app.scss 38:27  root stylesheet\n    at processResult (C:\\Users\\User\\Desktop\\project-backend\\pizza-app\\node_modules\\webpack\\lib\\NormalModule.js:758:19)\n    at C:\\Users\\User\\Desktop\\project-backend\\pizza-app\\node_modules\\webpack\\lib\\NormalModule.js:860:5\n    at C:\\Users\\User\\Desktop\\project-backend\\pizza-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:400:11\n    at C:\\Users\\User\\Desktop\\project-backend\\pizza-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:252:18\n    at context.callback (C:\\Users\\User\\Desktop\\project-backend\\pizza-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at C:\\Users\\User\\Desktop\\project-backend\\pizza-app\\node_modules\\sass-loader\\dist\\index.js:54:7\n    at Function.call$2 (C:\\Users\\User\\Desktop\\project-backend\\pizza-app\\node_modules\\sass\\sass.dart.js:99827:16)\n    at render_closure1.call$2 (C:\\Users\\User\\Desktop\\project-backend\\pizza-app\\node_modules\\sass\\sass.dart.js:85350:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\User\\Desktop\\project-backend\\pizza-app\\node_modules\\sass\\sass.dart.js:29726:18)\n    at _FutureListener.handleError$1 (C:\\Users\\User\\Desktop\\project-backend\\pizza-app\\node_modules\\sass\\sass.dart.js:28240:21)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./resources/js/app.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/scss/app.scss"]();
/******/ 	
/******/ })()
;
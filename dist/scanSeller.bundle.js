/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scanSeller.js":
/*!***************************!*\
  !*** ./src/scanSeller.js ***!
  \***************************/
/***/ (() => {

eval("const p = document.getElementById('accept')\r\n\r\nfunction onScanSuccess(qrCodeMessage) {\r\n    document.getElementById('result').innerHTML = qrCodeMessage;\r\n    const amount = qrCodeMessage.split(\" \")\r\n    p.innerHTML = \"Accept \" + amount[2] + \"?\";\r\n    console.log(amount[2]);\r\n}\r\n\r\nfunction onScanError(errorMessage) {\r\n  //handle scan error\r\n}\r\n\r\nvar html5QrcodeScanner = new Html5QrcodeScanner(\r\n    \"reader\", { fps: 60, qrbox: 250 });\r\nhtml5QrcodeScanner.render(onScanSuccess, onScanError);\n\n//# sourceURL=webpack://qr-hello-world/./src/scanSeller.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scanSeller.js"]();
/******/ 	
/******/ })()
;
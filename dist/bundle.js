/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_15_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js */ \"https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_15_0_firebase_database_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js */ \"https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_www_gstatic_com_firebasejs_9_15_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_9_15_0_firebase_database_js__WEBPACK_IMPORTED_MODULE_1__]);\n([https_www_gstatic_com_firebasejs_9_15_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_9_15_0_firebase_database_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst appSettings = 'https://kcb-lms-default-rtdb.firebaseio.com/'\nconst firebaseConfig = {\n  apiKey: \"AIzaSyBbMbTOH3NHv6fp4jAT3HA3vA6-Ur23In4\",\n  authDomain: \"group-12-kcb-lms.firebaseapp.com\",\n  projectId: \"group-12-kcb-lms\",\n  storageBucket: \"group-12-kcb-lms.appspot.com\",\n  messagingSenderId: \"15476877993\",\n  appId: \"1:15476877993:web:1c45be65570b120d48d7b8\"\n};\nconst app= (0,https_www_gstatic_com_firebasejs_9_15_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig)\n\n// to be used anywhere for authentication\nconst auth= (0,https_www_gstatic_com_firebasejs_9_15_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__.getAuth)(app)\n\nconst authenticate = firebase.auth()\nconst database = firebase.Database()\n\n\nuserName=document.getElementById(\"name\")\nemail=document.getElementById(\"email\")\npassWord=document.getElementById(\"password\")\nUserId=document.getElementById(\"userIdentification\")\n\nlet signupBtn = document.getElementById(\"signupBtn\");\nlet signinBtn = document.getElementById(\"signinBtn\");\nlet nameField = document.getElementById(\"nameField\");\nlet title = document.getElementById(\"title\");\n\nsigninBtn.onclick = function () {\nnameField.style.maxHeight = \"0\";\ntitle.innerHTML = \"Sign in\";\nsignupBtn.classList.add(\"disabled\");\nsigninBtn.classList.remove(\"disabled\");\n};\n\nsignupBtn.onclick = function () {\nnameField.style.maxHeight = \"65px\";\ntitle.innerHTML = \"Sign Up\";\nsignupBtn.classList.remove(\"disabled\");\nsigninBtn.classList.add(\"disabled\");\n};\n\nWindow.signUp= function(e){\n  //get input\n  e.preventDefault;\nvar input={\n  userName: userName.value,\n  email: email.value,\n  passWord: passWord.value,\n  UserId: UserId.value\n}\n;(0,https_www_gstatic_com_firebasejs_9_15_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__.createUserWithEmailAndPassword)(auth, input.email, input.password)\n.then(function(success){\n  alert('Success')\n})\n.catch(function(err){\n  alert(\"error\" + err.message)\n})\nconsole.log(\"input\")\n}\n\n/*.then(function(){\n  var user = authenticate.currentUser();\n\n  var database_ref = database.ref();\n\n  var user_data={\n    userName : userName,\n    email : email,\n    password : password\n  }\n\n}*/\n\n\n//create user\n/*authenticate.createUserWithEmailAndPassword(email,password)\n.then(function(){\n  var user = authenticate.currentUser();\n\n  var database_ref = database.ref();\n\n  var user_data={\n    userName : userName,\n    email : email,\n    password : password\n  }*/\n  //validation\n /* ,function validate_email(email){\n   let expression=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;\n    if(expression.test(email)==true){\n      return true;\n    }\n    else{\n      return false;\n    }\n  }\n  \n  ,function validate_password(password){\n    if(password.length < 6){\n      return false;\n    }\n    else{\n      return true;\n    }\n  }\n  \n  ,function validate_name(userName){\n    if(userName.length < 3){\n      return false;\n    }\n    else{\n      return true;\n    }\n  },\n  \n  //validating fields\n  if(validate_email(email)===false && validate_password(password)===false){\n    alert(\"Please enter a valid email or password\");\n    return ;\n  }\n  if(validate_email(email)===false || validate_password(password)===false || validate_name(userName)===false){\n    alert(\"Please enter a valid email, password and name\")\n    return ;\n  }\n\n\n  database_ref.child(\"Users\").set(user_data)\n}\n.catch(function(error) {\n  // Handle Errors here.\n  var errorCode = error.code;\n  var errorMessage = error.message;\n\n  alert(errorMessage);\n  //...\n});\n*/\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://project-kcb-lms-_g12/./src/index.js?");

/***/ }),

/***/ "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js":
false,

/***/ "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js":
false

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/index.js":
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./resources/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst headerBtn = document.querySelector('.header__btn');\r\nconst headerText = document.querySelector('.header__text');\r\nconst header = document.querySelector('.header');\r\n\r\nif(document.body.classList.contains('home')) {\r\n      headerBtn.style.display = 'inline-block';\r\n} else {\r\n  headerBtn.style.display = 'none';\r\n}\r\n\r\n\r\nif(document.body.classList.contains('error404')) {\r\n      headerText.style.display = 'none';\r\n      header.style.filter = 'blur(4px)';\r\n} else {\r\n  headerText.style.display = 'block';\r\n}\r\n\r\nconst menu = document.querySelector('.header__left');\r\nconst btn = document.querySelector('.icon');\r\n\r\nconst showMenu = () => {\r\n  btn.classList.toggle('active');\r\n  menu.classList.toggle('visible');\r\n  if(window.innerWidth <= 576) {\r\n  document.body.classList.toggle(\"lock\");\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\nbtn.addEventListener('click', showMenu)\r\n\r\n\r\n\r\nif (window.innerWidth > 768) {\r\n  if (document.body.classList.contains('page-template-page-services')) {\r\n    const itemFixed = document.querySelector('.serv__items')\r\n  const listFixed = document.querySelector('.serv');\r\n\r\n  let sticky = listFixed.offsetTop;\r\n\r\n\r\n\r\n  const  myFunction = () => {\r\n    if (window.pageYOffset >= sticky) {\r\n      itemFixed.classList.add(\"fix\")\r\n    } else {\r\n      itemFixed.classList.remove(\"fix\");\r\n    }\r\n  }\r\n\r\n  window.addEventListener('scroll', myFunction)\r\n\r\n  } else if (document.body.classList.contains('page-template-page-conditions')) {\r\n  const listFixed = document.querySelector('.condition');\r\n  const itemFixed = document.querySelector('.condition__items')\r\n\r\n  let sticky = listFixed.offsetTop;\r\n\r\n\r\n\r\n  const  myFunction = () => {\r\n    if (window.pageYOffset >= sticky) {\r\n      itemFixed.classList.add(\"fix\")\r\n    } else {\r\n      itemFixed.classList.remove(\"fix\");\r\n    }\r\n  }\r\n\r\n  window.addEventListener('scroll', myFunction)\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n// ANIMATION ON SCROLL\r\n\r\nwindow.onload = function () { \r\nconst animItems = document.querySelectorAll('.anim-item')\r\n\r\nif (animItems.length > 0) {\r\n  window.addEventListener('scroll', animOnScroll);\r\n\r\n  function animOnScroll() {\r\n    for (let i = 0; i < animItems.length; i++) {\r\n      const animItem = animItems[i]\r\n      const animItemHeight = animItem.offsetHeight\r\n      const animItemOffset = offset(animItem).top\r\n      const animStart = 5\r\n\r\n      let animItemPoint = window.innerHeight - animItemHeight / animStart\r\n      if (animItemHeight > window.innerHeight) {\r\n        animItemPoint = window.innerHeight - window.innerHeight / animStart\r\n      }\r\n\r\n      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {\r\n        animItem.classList.add('anim')\r\n      } else {\r\n        if (!animItem.classList.contains('no-anim')) {\r\n          animItem.classList.remove('anim')\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  function offset(el) {\r\n    const rect = el.getBoundingClientRect(),\r\n      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,\r\n      scrollTop = window.pageYOffset || document.documentElement.scrollTop\r\n    return {\r\n      top: rect.top + scrollTop,\r\n      left: rect.left + scrollLeft\r\n    }\r\n  }\r\n\r\n  setTimeout(() => {\r\n    animOnScroll()\r\n  }, 300)\r\n}\r\n}\r\n\r\n\r\nif(document.body.classList.contains('home') || document.body.classList.contains('page-template-page-contact-php')) {\r\n\r\n// MAP\r\nvar mapCenter = [19.999976, 50.050480];\r\n\r\nif(window.innerWidth > 1200) {\r\n  mapCenter = new mapboxgl.LngLat(19.999976, 50.050480);\r\n} else if(window.innerWidth <= 1200 && window.innerWidth >= 992) {\r\n  mapCenter = new mapboxgl.LngLat(19.95991, 50.058560);\r\n}else if(window.innerWidth > 992) {\r\n  mapCenter = new mapboxgl.LngLat(19.928870,50.0650);\r\n} else {\r\nmapCenter = new mapboxgl.LngLat(19.928870,50.0650);\r\n} \r\n\r\n\r\n\r\nmapboxgl.accessToken =\r\n  \"pk.eyJ1IjoidmxhZHpoIiwiYSI6ImNrZzBxcHpoMDB1ZmsydG9iMHE0YnJ6NDYifQ._kSahmQ3wNJverVwR7NxgA\";\r\nvar map = new mapboxgl.Map({\r\n  container: \"map\",\r\n  style: \"mapbox://styles/vladzh/ckg9tw9l02mkz19nwaem18kkd\",\r\n  center: mapCenter,\r\n  zoom: 12.5,\r\n});\r\n\r\nif(window.innerWidth < 992) {\r\n  map = new mapboxgl.Map({\r\n    interactive: false,\r\n    container: \"map\",\r\n    style: \"mapbox://styles/vladzh/ckg9tw9l02mkz19nwaem18kkd\",\r\n    center: mapCenter,\r\n    zoom: 12.5\r\n  })\r\n}\r\n\r\n\r\nmap.scrollZoom.disable();\r\nmap.boxZoom.disable();\r\nmap.dragRotate.disable();\r\nmap.keyboard.disable();\r\nmap.doubleClickZoom.disable();\r\nmap.touchZoomRotate.disable();\r\n\r\nvar point = document.createElement(\"div\");\r\npoint.className = \"marker\";\r\npoint.innerHTML = '<i class=\"fas fa-map-marker-alt\"></i>';\r\npoint.style.fontSize = \"80px\";\r\npoint.style.color = \"#00c8ca\";\r\n\r\nvar marker = new mapboxgl.Marker(point)\r\n    .setLngLat([19.928870, 50.050480])\r\n    .addTo(map);\r\n\r\n}\n\n//# sourceURL=webpack:///./resources/js/index.js?");

/***/ }),

/***/ "./resources/scss/style.scss":
/*!***********************************!*\
  !*** ./resources/scss/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./resources/scss/style.scss?");

/***/ })

/******/ });
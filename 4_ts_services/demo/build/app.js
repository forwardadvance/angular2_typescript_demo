/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	System.register(['reflect-metadata', 'rxjs', 'zone.js/dist/zone', '@angular/platform-browser-dynamic', './app.component'], function(exports_1, context_1) {
	    "use strict";
	    var __moduleName = context_1 && context_1.id;
	    var platform_browser_dynamic_1, app_component_1;
	    return {
	        setters:[
	            function (_1) {},
	            function (_2) {},
	            function (_3) {},
	            function (platform_browser_dynamic_1_1) {
	                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
	            },
	            function (app_component_1_1) {
	                app_component_1 = app_component_1_1;
	            }],
	        execute: function() {
	            // import {CatsService} from './cats.service';
	            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent);
	        }
	    }
	});


/***/ }
/******/ ]);
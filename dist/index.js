(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src */ \"./src/index.js\");\n\r\n\r\nObject(_src__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/db/index.js":
/*!*************************!*\
  !*** ./src/db/index.js ***!
  \*************************/
/*! exports provided: db, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"db\", function() { return db; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst connect = () => {\r\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect('mongodb://localhost:27017/miw_yuka', {useNewUrlParser: true,autoReconnect: true})\r\n}\r\nlet db\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n    return new Promise((resolve, reject) => {\r\n\r\n        db = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection\r\n\r\n        db.on('connecting', () => {\r\n            console.log('connection a mongo')\r\n        })\r\n        db.on('error', (error) => {\r\n            mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.disconnect()\r\n            reject(error)\r\n            throw new Error('database error')\r\n        })\r\n        db.once('open', () => {\r\n            console.log('connecte a mongo')\r\n            resolve();\r\n        })\r\n        db.on('disconnected', () => {\r\n            setTimeout(() => {\r\n                try {\r\n                    connect()\r\n                } catch (error) {\r\n                    throw new Error('cannot Reconnect')\r\n                }\r\n            }, 5000)\r\n        })\r\n        connect()\r\n    })\r\n});\n\n//# sourceURL=webpack:///./src/db/index.js?");

/***/ }),

/***/ "./src/db/products.js":
/*!****************************!*\
  !*** ./src/db/products.js ***!
  \****************************/
/*! exports provided: productsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productsModel\", function() { return productsModel; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst productsSchema= new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\r\n    _id:String,\r\n    name:String,\r\n    brand:String,\r\n    bar_code:Number,\r\n    grade:Number,\r\n    pictures:[String],\r\n    ingredients:[Object]\r\n})\r\nconst productsModel =mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('product',productsSchema,'products')\n\n//# sourceURL=webpack:///./src/db/products.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"./src/db/index.js\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (async () => {\r\n    try {\r\n        const app = express__WEBPACK_IMPORTED_MODULE_0___default()()\r\n        await Object(_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n        Object(_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(app)\r\n        app.listen(3001, () => {\r\n            console.log(3001, \"development\")\r\n        })\r\n    } catch (error) {\r\n        console.log(error)\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _db_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/products */ \"./src/db/products.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((app) => {\r\n    app.get('/', async (req, res) => {\r\n        try {\r\n            const products = await _db_products__WEBPACK_IMPORTED_MODULE_0__[\"productsModel\"].find()\r\n            res.status(200).json(products)\r\n        } catch (error) {\r\n            console.log(error.message)\r\n            return res.status(500).json({\r\n                'error': true,\r\n                'message': 'Error requesting products'\r\n            })\r\n\r\n        }\r\n\r\n        //do something\r\n        console.log('trying to access Products data')\r\n    })\r\n\r\n    app.get('/products/:bar_code', async (req, res) => {\r\n        try {\r\n            const barCode = req.params.bar_code\r\n            const product = await _db_products__WEBPACK_IMPORTED_MODULE_0__[\"productsModel\"].findOne({bar_code: barCode})\r\n            if (product) {\r\n                res.status(200).json(product)\r\n            } else {\r\n                res.status(404).json({\r\n                    'error': true,\r\n                    'message': ` probleme with barCode ${barCode}`\r\n                })\r\n\r\n            }\r\n\r\n        } catch (error) {\r\n            console.log(error.message)\r\n            return res.status(500).json({\r\n                'error': true,\r\n                'message': `Error requesting product ${barCode}`\r\n            })\r\n\r\n        }\r\n\r\n        //do something\r\n        console.log('trying to access Products by bar code  ')\r\n    })\r\n});\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");\n\n//# sourceURL=webpack:///external_%22os%22?");

/***/ })

/******/ })));
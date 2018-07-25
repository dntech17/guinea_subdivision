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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\n/*import fs from 'fs'\nimport path from 'path'\nimport {sortBy, uniq} from 'lodash'\n\nconst regionsPath = path.join(process.cwd(), 'data', 'regions.json')\nconst prefecturespath = path.join(process.cwd(), 'data', 'prefectures.json')\nconst sousprefecturespath = path.join(process.cwd(), 'data', 'sousprefectures.json')\n\nlet regionsFile = fs.readFileSync(regionsPath)\nlet prefecturesFile = fs.readFileSync(prefecturespath)\nlet sousprefecturesFile = fs.readFileSync(sousprefecturespath)*/\n\nvar regions = variableRegion;\nvar prefectures = variablePrefecture;\nvar sousprectures = variablesprefecture;\n\n/*const regions = JSON.parse(regionsFile.toString())\nconst prefectures = JSON.parse(prefecturesFile.toString())\nconst sousprefectures = JSON.parse(sousprefecturesFile.toString())*/\n\n/**************************************************/\n/** **************** REGION GETTERS ****************/\n/**************************************************/\n\nvar getRegionsAndCodes = function getRegionsAndCodes() {\n  return (0, _lodash.sortBy)((0, _lodash.uniq)(regions), 'region');\n};\n\nvar getRegions = function getRegions() {\n  return (0, _lodash.sortBy)((0, _lodash.uniq)(regions.map(function (data) {\n    return data.region;\n  })));\n};\n\nvar getRegionsCodes = function getRegionsCodes() {\n  return (0, _lodash.sortBy)((0, _lodash.uniq)(regions.map(function (data) {\n    return data.code;\n  })));\n};\n\nvar getRegionNameByCode = function getRegionNameByCode(regionCode) {\n  var name = null;\n  regions.map(function (data) {\n    if (data.code === regionCode) {\n      name = data.region;\n    }\n  });\n  return name;\n};\n\nvar getRegionCodeByName = function getRegionCodeByName(regionName) {\n  var code = null;\n  regions.map(function (data) {\n    if (data.region === regionName) {\n      code = data.code;\n    }\n  });\n  return code;\n};\n\n/***********************************************************/\n/** ***************** PREFECTURE GETTERS ********************/\n/***********************************************************/\n\nvar getPrefecturesAndCodes = function getPrefecturesAndCodes() {\n  return (0, _lodash.sortBy)((0, _lodash.uniq)(prefectures), 'prefecture');\n};\n\nvar getPrefecturesCodes = function getPrefecturesCodes() {\n  return (0, _lodash.sortBy)((0, _lodash.uniq)(prefectures.map(function (data) {\n    return data.prefectureCode;\n  })));\n};\n\nvar getPrefectures = function getPrefectures() {\n  return (0, _lodash.sortBy)((0, _lodash.uniq)(prefectures.map(function (data) {\n    return data.prefecture;\n  })));\n};\n\nvar getPrefecturesAndCodesByRegionCode = function getPrefecturesAndCodesByRegionCode(regionCode) {\n  var result = [];\n  prefectures.map(function (data) {\n    if (data.regionCode === regionCode) {\n      result.push(data);\n    }\n  });\n  return (0, _lodash.sortBy)((0, _lodash.uniq)(result));\n};\n\nvar getPrefecturesByRegionCode = function getPrefecturesByRegionCode(regionCode) {\n  var result = [];\n  prefectures.map(function (data) {\n    if (data.regionCode === regionCode) {\n      result.push(data.prefecture);\n    }\n  });\n  return (0, _lodash.sortBy)((0, _lodash.uniq)(result));\n};\n\nvar getPrefecturesByRegionName = function getPrefecturesByRegionName(regionName) {\n  var regionCode = getRegionCodeByName(regionName);\n  var result = [];\n  prefectures.map(function (data) {\n    if (data.regionCode === regionCode) {\n      result.push(data.prefecture);\n    }\n  });\n  return (0, _lodash.sortBy)((0, _lodash.uniq)(result));\n};\n\nvar getPrefectureNameByCode = function getPrefectureNameByCode(prefectureCode) {\n  var name = null;\n  prefectures.map(function (data) {\n    if (data.prefectureCode === prefectureCode) {\n      name = data.prefecture;\n    }\n  });\n  return name;\n};\n\nvar getPrefectureCodeByName = function getPrefectureCodeByName(prefectureName) {\n  var code = null;\n  prefectures.map(function (data) {\n    if (data.prefecture === prefectureName) {\n      code = data.prefectureCode;\n    }\n  });\n  return code;\n};\n\n/***********************************************************/\n/** *************** SOUS PREFECTURE GETTERS *****************/\n/***********************************************************/\n\nvar getSousprefecturesAndCodes = function getSousprefecturesAndCodes() {\n  return (0, _lodash.sortBy)((0, _lodash.uniq)(sousprefectures), 'sousprefecture');\n};\n\nvar getSousprefecturesCodes = function getSousprefecturesCodes() {\n  return (0, _lodash.sortBy)((0, _lodash.uniq)(sousprefectures.map(function (data) {\n    return data.sousprefectureCode;\n  })));\n};\n\nvar getSousprefectures = function getSousprefectures() {\n  return (0, _lodash.sortBy)((0, _lodash.uniq)(sousprefectures.map(function (data) {\n    return data.sousprefecture;\n  })));\n};\n\nvar getSousprefecturesAndCodesByPrefectureCode = function getSousprefecturesAndCodesByPrefectureCode(prefectureCode) {\n  var result = [];\n  sousprefectures.map(function (data) {\n    if (data.prefectureCode === prefectureCode) {\n      result.push(data);\n    }\n  });\n  return (0, _lodash.sortBy)((0, _lodash.uniq)(result));\n};\n\nvar getSousprefecturesByPrefectureCode = function getSousprefecturesByPrefectureCode(prefectureCode) {\n  var result = [];\n  sousprefectures.map(function (data) {\n    if (data.prefectureCode === prefectureCode) {\n      result.push(data.sousprefecture);\n    }\n  });\n  return (0, _lodash.sortBy)((0, _lodash.uniq)(result));\n};\n\nvar getSousprefecturesAndCodesByPrefectureName = function getSousprefecturesAndCodesByPrefectureName(prefectureName) {\n  var prefectureCode = getPrefectureCodeByName(prefectureName);\n  var result = [];\n  sousprefectures.map(function (data) {\n    if (data.prefectureCode === prefectureCode) {\n      result.push(data);\n    }\n  });\n  return (0, _lodash.sortBy)((0, _lodash.uniq)(result));\n};\n\nvar getSousprefecturesByPrefectureName = function getSousprefecturesByPrefectureName(prefectureName) {\n  var prefectureCode = getPrefectureCodeByName(prefectureName);\n  var result = [];\n  sousprefectures.map(function (data) {\n    if (data.prefectureCode === prefectureCode) {\n      result.push(data.sousprefecture);\n    }\n  });\n  return (0, _lodash.sortBy)((0, _lodash.uniq)(result));\n};\n\nvar getSousprefectureNameByCode = function getSousprefectureNameByCode(sousprefectureCode) {\n  var name = null;\n  sousprefectures.map(function (data) {\n    if (data.sousprefectureCode === sousprefectureCode) {\n      name = data.sousprefecture;\n    }\n  });\n  return name;\n};\n\nvar getSousprefectureCodeByName = function getSousprefectureCodeByName(sousprefectureName) {\n  var code = null;\n  prefectures.map(function (data) {\n    if (data.sousprefecture === sousprefectureName) {\n      code = data.sousprefectureCode;\n    }\n  });\n  return code;\n};\n\nexports.default = {\n  // regions\n  getRegionsAndCodes: getRegionsAndCodes,\n  getRegions: getRegions,\n  getRegionsCodes: getRegionsCodes,\n  getRegionNameByCode: getRegionNameByCode,\n  getRegionCodeByName: getRegionCodeByName,\n\n  // prefectures\n  getPrefecturesAndCodes: getPrefecturesAndCodes,\n  getPrefecturesCodes: getPrefecturesCodes,\n  getPrefectures: getPrefectures,\n  getPrefecturesAndCodesByRegionCode: getPrefecturesAndCodesByRegionCode,\n  getPrefecturesByRegionCode: getPrefecturesByRegionCode,\n  getPrefecturesByRegionName: getPrefecturesByRegionName,\n  getPrefectureNameByCode: getPrefectureNameByCode,\n  getPrefectureCodeByName: getPrefectureCodeByName,\n\n  // sousprectures\n  getSousprefecturesAndCodes: getSousprefecturesAndCodes,\n  getSousprefecturesCodes: getSousprefecturesCodes,\n  getSousprefectures: getSousprefectures,\n  getSousprefecturesAndCodesByPrefectureCode: getSousprefecturesAndCodesByPrefectureCode,\n  getSousprefecturesAndCodesByPrefectureName: getSousprefecturesAndCodesByPrefectureName,\n  getSousprefecturesByPrefectureCode: getSousprefecturesByPrefectureCode,\n  getSousprefecturesByPrefectureName: getSousprefecturesByPrefectureName,\n  getSousprefectureNameByCode: getSousprefectureNameByCode,\n  getSousprefectureCodeByName: getSousprefectureCodeByName\n};\n\nconsole.log(getRegions());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ })

/******/ });
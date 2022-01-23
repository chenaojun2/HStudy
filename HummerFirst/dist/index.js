/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/CommonColor.ts":
/*!***********************************!*\
  !*** ./src/common/CommonColor.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color)
/* harmony export */ });
var Color = {
  hm_linear_gradient: 'linear-gradient(90deg #15D0B4 #E2ED00)',
  hm_yellow: '#E2ED00',
  hm_green: '#15D0B4',
  hm_blue: '#4A90E2',
  hm_orange: '#F1CA19',
  hm_purple: '#8484FF',
  transparent: '#00000000',
  black: '#000000',
  white: '#FFFFFF',
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  grey: '#808080',
  light_grey: '#CCCCCC',
  dark_grey: '#333333',
  transparent_grey: '#00000060'
};

/***/ }),

/***/ "./src/common/CommonStyle.ts":
/*!***********************************!*\
  !*** ./src/common/CommonStyle.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Style": () => (/* binding */ Style)
/* harmony export */ });
/* harmony import */ var _CommonColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonColor */ "./src/common/CommonColor.ts");

var FullParentStyle = {
  width: '100%',
  height: '100%'
};
var CenterStyle = {
  justifyContent: 'center',
  alignItems: 'center'
};
var SmallTextStyle = {
  fontSize: 12,
  color: '#333333',
  textAlign: 'center'
};
var RectItemStyle = {
  width: 80,
  height: 40,
  backgroundColor: _CommonColor__WEBPACK_IMPORTED_MODULE_0__.Color.hm_green,
  margin: 4
};
var SquareItemStyle = {
  width: 40,
  height: 40,
  backgroundColor: _CommonColor__WEBPACK_IMPORTED_MODULE_0__.Color.hm_green,
  margin: 4
};
var RoundItemStyle = {
  width: 40,
  height: 40,
  borderRadius: 10,
  backgroundColor: _CommonColor__WEBPACK_IMPORTED_MODULE_0__.Color.hm_green,
  margin: 4
};
var CircleItemStyle = {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: _CommonColor__WEBPACK_IMPORTED_MODULE_0__.Color.hm_green,
  margin: 4
};
var SelectColorItemStyle = {
  width: 36,
  height: 24,
  marginTop: 6,
  marginBottom: 6
};
var SelectSquareItemStyle = {
  width: 30,
  height: 30,
  margin: 4,
  backgroundColor: _CommonColor__WEBPACK_IMPORTED_MODULE_0__.Color.hm_green
};
var SelectTextItemStyle = {
  minWidth: 44,
  height: 24,
  margin: 6,
  fontSize: 12,
  color: _CommonColor__WEBPACK_IMPORTED_MODULE_0__.Color.black,
  textAlign: 'center'
};
var SelectColorTextItemStyle = {
  minWidth: 44,
  height: 24,
  marginTop: 6,
  marginBottom: 6,
  marginLeft: 2,
  marginRight: 2,
  backgroundColor: _CommonColor__WEBPACK_IMPORTED_MODULE_0__.Color.hm_green + '20',
  fontSize: 12,
  color: _CommonColor__WEBPACK_IMPORTED_MODULE_0__.Color.black,
  textAlign: 'center'
};
var ItemBorderStyle = {
  borderWidth: 2,
  borderColor: _CommonColor__WEBPACK_IMPORTED_MODULE_0__.Color.black
};
var ItemBorderLeftStyle = {
  borderLeftWidth: 2,
  borderLeftColor: _CommonColor__WEBPACK_IMPORTED_MODULE_0__.Color.black
};
var ItemBorderTopStyle = {
  borderTopWidth: 2,
  borderTopColor: _CommonColor__WEBPACK_IMPORTED_MODULE_0__.Color.black
};
var ItemBorderRightStyle = {
  borderRightWidth: 2,
  borderRightColor: _CommonColor__WEBPACK_IMPORTED_MODULE_0__.Color.black
};
var ItemBorderBottomStyle = {
  borderBottomWidth: 2,
  borderBottomColor: _CommonColor__WEBPACK_IMPORTED_MODULE_0__.Color.black
};
var ItemShadowStyle = {
  shadow: '2 2 5 #000000'
};
var Style = {
  FullParentStyle,
  CenterStyle,
  SmallTextStyle,
  RectItemStyle,
  SquareItemStyle,
  RoundItemStyle,
  CircleItemStyle,
  SelectColorItemStyle,
  SelectSquareItemStyle,
  SelectTextItemStyle,
  SelectColorTextItemStyle,
  ItemBorderStyle,
  ItemBorderLeftStyle,
  ItemBorderTopStyle,
  ItemBorderRightStyle,
  ItemBorderBottomStyle,
  ItemShadowStyle
};

/***/ }),

/***/ "@hummer/hummer-front":
/*!*****************************!*\
  !*** external "__GLOBAL__" ***!
  \*****************************/
/***/ ((module) => {

module.exports = __GLOBAL__;

/***/ }),

/***/ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\assertThisInitialized.js":
/*!**********************************************************************************************************************************!*\
  !*** C:\Users\Caj\AppData\Roaming\npm\node_modules\@hummer\cli\node_modules\@babel\runtime\helpers\esm\assertThisInitialized.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\classCallCheck.js":
/*!***************************************************************************************************************************!*\
  !*** C:\Users\Caj\AppData\Roaming\npm\node_modules\@hummer\cli\node_modules\@babel\runtime\helpers\esm\classCallCheck.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\createClass.js":
/*!************************************************************************************************************************!*\
  !*** C:\Users\Caj\AppData\Roaming\npm\node_modules\@hummer\cli\node_modules\@babel\runtime\helpers\esm\createClass.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\createSuper.js":
/*!************************************************************************************************************************!*\
  !*** C:\Users\Caj\AppData\Roaming\npm\node_modules\@hummer\cli\node_modules\@babel\runtime\helpers\esm\createSuper.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = (0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return function _createSuperInternal() {
    var Super = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0,_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result);
  };
}

/***/ }),

/***/ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\defineProperty.js":
/*!***************************************************************************************************************************!*\
  !*** C:\Users\Caj\AppData\Roaming\npm\node_modules\@hummer\cli\node_modules\@babel\runtime\helpers\esm\defineProperty.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\getPrototypeOf.js":
/*!***************************************************************************************************************************!*\
  !*** C:\Users\Caj\AppData\Roaming\npm\node_modules\@hummer\cli\node_modules\@babel\runtime\helpers\esm\getPrototypeOf.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\inherits.js":
/*!*********************************************************************************************************************!*\
  !*** C:\Users\Caj\AppData\Roaming\npm\node_modules\@hummer\cli\node_modules\@babel\runtime\helpers\esm\inherits.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\isNativeReflectConstruct.js":
/*!*************************************************************************************************************************************!*\
  !*** C:\Users\Caj\AppData\Roaming\npm\node_modules\@hummer\cli\node_modules\@babel\runtime\helpers\esm\isNativeReflectConstruct.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\objectSpread2.js":
/*!**************************************************************************************************************************!*\
  !*** C:\Users\Caj\AppData\Roaming\npm\node_modules\@hummer\cli\node_modules\@babel\runtime\helpers\esm\objectSpread2.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread2)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

/***/ }),

/***/ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\possibleConstructorReturn.js":
/*!**************************************************************************************************************************************!*\
  !*** C:\Users\Caj\AppData\Roaming\npm\node_modules\@hummer\cli\node_modules\@babel\runtime\helpers\esm\possibleConstructorReturn.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\setPrototypeOf.js":
/*!***************************************************************************************************************************!*\
  !*** C:\Users\Caj\AppData\Roaming\npm\node_modules\@hummer\cli\node_modules\@babel\runtime\helpers\esm\setPrototypeOf.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\typeof.js":
/*!*******************************************************************************************************************!*\
  !*** C:\Users\Caj\AppData\Roaming\npm\node_modules\@hummer\cli\node_modules\@babel\runtime\helpers\esm\typeof.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/index/index.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Caj_AppData_Roaming_npm_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! C:\Users\Caj\AppData\Roaming\npm\node_modules\@hummer\cli\node_modules\@babel\runtime\helpers\esm\objectSpread2.js */ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\objectSpread2.js");
/* harmony import */ var C_Users_Caj_AppData_Roaming_npm_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! C:\Users\Caj\AppData\Roaming\npm\node_modules\@hummer\cli\node_modules\@babel\runtime\helpers\esm\classCallCheck.js */ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\classCallCheck.js");
/* harmony import */ var C_Users_Caj_AppData_Roaming_npm_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! C:\Users\Caj\AppData\Roaming\npm\node_modules\@hummer\cli\node_modules\@babel\runtime\helpers\esm\createClass.js */ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\createClass.js");
/* harmony import */ var C_Users_Caj_AppData_Roaming_npm_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! C:\Users\Caj\AppData\Roaming\npm\node_modules\@hummer\cli\node_modules\@babel\runtime\helpers\esm\inherits.js */ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\inherits.js");
/* harmony import */ var C_Users_Caj_AppData_Roaming_npm_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! C:\Users\Caj\AppData\Roaming\npm\node_modules\@hummer\cli\node_modules\@babel\runtime\helpers\esm\createSuper.js */ "C:\\Users\\Caj\\AppData\\Roaming\\npm\\node_modules\\@hummer\\cli\\node_modules\\@babel\\runtime\\helpers\\esm\\createSuper.js");
/* harmony import */ var _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hummer/hummer-front */ "@hummer/hummer-front");
/* harmony import */ var _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_CommonStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/CommonStyle */ "./src/common/CommonStyle.ts");
/* harmony import */ var _common_CommonColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/CommonColor */ "./src/common/CommonColor.ts");









var RootView = /*#__PURE__*/function (_View) {
  (0,C_Users_Caj_AppData_Roaming_npm_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__["default"])(RootView, _View);

  var _super = (0,C_Users_Caj_AppData_Roaming_npm_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(RootView);

  function RootView() {
    var _this;

    (0,C_Users_Caj_AppData_Roaming_npm_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RootView);

    _this = _super.call(this);
    _this.style = (0,C_Users_Caj_AppData_Roaming_npm_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_Users_Caj_AppData_Roaming_npm_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _common_CommonStyle__WEBPACK_IMPORTED_MODULE_6__.Style.FullParentStyle), {}, {
      backgroundColor: _common_CommonColor__WEBPACK_IMPORTED_MODULE_7__.Color.white
    });

    _this.addContentView();

    return _this;
  }

  (0,C_Users_Caj_AppData_Roaming_npm_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(RootView, [{
    key: "addContentView",
    value: function addContentView() {
      var contentLayout = new _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.Scroller();
      contentLayout.style = {
        width: '100%',
        flexGrow: 1,
        flexShrink: 1
      };

      for (var i = 0; i < 10; i++) {
        var v = new _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.Text();
        v.text = i.toString();
        v.style = {
          width: '100%',
          height: '100',
          fontSize: 20,
          textAlign: 'center',
          color: _common_CommonColor__WEBPACK_IMPORTED_MODULE_7__.Color.black,
          backgroundColor: i % 2 == 0 ? '#00FF0010' : '#FF000010'
        };
        contentLayout.appendChild(v);
      }

      this.appendChild(contentLayout);
    }
  }]);

  return RootView;
}(_hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.View); // 根页面渲染


_hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.Hummer.render(new RootView());
})();

/******/ })()
;
//# sourceMappingURL=http://192.168.3.1:8000/index.js.map
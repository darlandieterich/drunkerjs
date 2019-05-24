/*! DrunkerJS v1.0.0 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Drunker"] = factory();
	else
		root["Drunker"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _effects = __webpack_require__(1);

var _effects2 = _interopRequireDefault(_effects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drunker = function (_Effects) {
	_inherits(Drunker, _Effects);

	function Drunker() {
		var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
		var effect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, Drunker);

		return _possibleConstructorReturn(this, (Drunker.__proto__ || Object.getPrototypeOf(Drunker)).call(this, selector, effect));
	}

	_createClass(Drunker, [{
		key: "Drunk",
		value: function Drunk() {
			var timeInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

			_get(Drunker.prototype.__proto__ || Object.getPrototypeOf(Drunker.prototype), "GetEffect", this).call(this, timeInterval);
		}
	}, {
		key: "StopDrunk",
		value: function StopDrunk() {
			_get(Drunker.prototype.__proto__ || Object.getPrototypeOf(Drunker.prototype), "StopEffect", this).call(this);
		}
	}]);

	return Drunker;
}(_effects2.default);

;

var DrunkerEffects = {
	BLUR: "Blur",
	DIZZY: "Dizzy",
	DISAPPEAR: "Disappear",
	SHAKE: "Shake",
	SPIN: "Spin",
	PULSE: "Pulse"
};

var DrunkerSpeed = {
	SLOW: "Slow",
	NORMAL: "Normal",
	FAST: "Fast"
};

Drunker.DrunkerEffects = DrunkerEffects;
module.exports = Drunker;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helper = __webpack_require__(2);

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Effects = function () {
	function Effects(selector, effect) {
		_classCallCheck(this, Effects);

		this.helper = new _helper2.default();
		this.element = this.helper.selectElement(selector);
		this.effect = effect;
	}

	_createClass(Effects, [{
		key: 'GetEffect',
		value: function GetEffect(timeInterval) {
			return this['_' + this.effect]();
		}
	}, {
		key: 'StopEffect',
		value: function StopEffect() {
			console.log('Stop Effect');
		}
		// Blurred effect

	}, {
		key: '_Blur',
		value: function _Blur() {
			console.log('Blur');
		}
		// Dizzy effect

	}, {
		key: '_Dizzy',
		value: function _Dizzy() {
			console.log('Dizzy..init');
			var frameTime = 500;
			var transition = 'all ' + frameTime / 1000 + 's linear';
			this.element.style.WebkitTransition = transition;
			this.element.style.transition = transition;
			var rand = Math.round(Math.random() * 10) * (Math.random() < 0.5 ? -1 : 1);
			var skew = 'skewX(' + rand + 'deg)';
			this.element.style.transform = skew;
			this.element.style.WebkitTransform = skew;
		}
		// Disappear the element

	}, {
		key: '_Disappear',
		value: function _Disappear() {
			console.log('Disappear');
		}
		// Shake effect

	}, {
		key: '_Shake',
		value: function _Shake() {
			console.log('Shake');
		}
		// Rotation effect

	}, {
		key: '_Spin',
		value: function _Spin() {
			console.log('Spin');
		}
	}, {
		key: '_Pulse',
		value: function _Pulse() {
			console.log('Pulse');
		}

		// Develop this after
		/* // Effect of fall element
  Fall () {
  }
  // Effect runnaway the element
  Runaway () {
  }
  // Delay effect
  Delay () {
  }
  // Effect random
  Auto () {
  } */

	}]);

	return Effects;
}();

module.exports = Effects;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = function () {
    function Helper() {
        _classCallCheck(this, Helper);
    }

    _createClass(Helper, [{
        key: "addCSSRule",
        value: function addCSSRule(rule, name) {
            if (checkExistCSSRule(name) == null) {
                document.styleSheets[0].insertRule(rule);
            }
        }
    }, {
        key: "checkExistCSSRule",
        value: function checkExistCSSRule(cssRuleName) {
            for (var pos = 0; pos < document.styleSheets[0].cssRules.length; pos++) {
                var sheet = document.styleSheets[0].cssRules[pos];
                if (sheet.name == cssRuleName) {
                    return sheet;
                }
            }
            return null;
        }
    }, {
        key: "selectElement",
        value: function selectElement(selector) {
            return selector == "" ? Object : document.querySelector(selector);
        }
    }]);

    return Helper;
}();

exports.default = Helper;

/***/ })
/******/ ]);
});
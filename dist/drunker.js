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
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			_get(Drunker.prototype.__proto__ || Object.getPrototypeOf(Drunker.prototype), "GetEffect", this).call(this, options);
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

//Type effects
var DrunkerEffects = {
	BLUR: "Blur",
	DIZZY: "Dizzy",
	DISAPPEAR: "Disappear",
	SHAKE: "Shake",
	SPIN: "Spin",
	PULSE: "Pulse"
};

//Define velocity of effect
var DrunkerSpeed = {
	SLOW: "Slow",
	NORMAL: "Normal",
	FAST: "Fast"

	//Define the type of Drunker
};var DrunkerType = {
	MODERATE: "Moderate", //One time
	UNTILDROP: "UntilDrop" //Recursive mode


	//Attach the enum to the class
};Drunker.DrunkerEffects = DrunkerEffects;
Drunker.DrunkerSpeed = DrunkerSpeed;
Drunker.DrunkerType = DrunkerType;

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
		this.interval = {};
		this.stop = {};
	}

	_createClass(Effects, [{
		key: 'GetEffect',
		value: function GetEffect(options) {
			return this['_' + this.effect](options);
		}
	}, {
		key: 'StopEffect',
		value: function StopEffect() {
			this.stop();
		}
		// Blurred effect

	}, {
		key: '_Blur',
		value: function _Blur() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			console.log('Blur..init');
			var fps = this.helper.getSpeed(options.speed);
			var blured = false;
			var rand = this.helper.random(20, false);
			var filter = 'blur(' + rand + 'px)';
			var transition = fps / 1000 + 's';
			this.element.style.WebkitTransition = transition;
			this.element.style.transition = transition;
			this.element.style.filter = filter;
			this.element.style.WebkitFilter = filter;

			if (options.type) {
				if (options.type == "UntilDrop") {
					this.interval = setInterval(function () {
						var rand = this.helper.random(20, false);
						var filter = 'blur(' + rand + 'px)';
						this.element.style.filter = filter;
						this.element.style.WebkitFilter = filter;
					}.bind(this), fps);
				}
			}

			this.stop = function stop() {
				this.element.style.filter = '';
				this.element.style.WebkitFilter = '';
				if (this.interval) {
					clearInterval(this.interval);
				}
			};
		}
		// Dizzy effect

	}, {
		key: '_Dizzy',
		value: function _Dizzy() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			console.log('Dizzy..init');
			var fps = this.helper.getSpeed(options.speed);
			var rand = this.helper.random(15);
			var transform = 'skewX(' + rand + 'deg)';
			var transition = fps / 1000 + 's';
			this.element.style.WebkitTransition = transition;
			this.element.style.transition = transition;
			this.element.style.transform = transform;
			this.element.style.WebkitTransform = transform;

			if (options.type) {
				if (options.type == "UntilDrop") {
					this.interval = setInterval(function () {
						rand = this.helper.random(15);
						transform = 'skewX(' + rand + 'deg)';
						this.element.style.transform = transform;
						this.element.style.WebkitTransform = transform;
					}.bind(this), fps);
				}
			}

			this.stop = function stop() {
				this.element.style.transform = '';
				this.element.style.WebkitTransform = '';
				if (this.interval) {
					clearInterval(this.interval);
				}
			};
		}
		// Disappear the element

	}, {
		key: '_Disappear',
		value: function _Disappear() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			console.log('Disappear.. init');
			var fps = this.helper.getSpeed(options.speed);
			var disappear = false;
			var opacity = '1.0';
			var transition = 'opacity ' + fps / 1000 + 's';
			this.element.style.opacity = opacity;
			this.element.style.WebkitTransition = transition;
			this.element.style.transition = transition;

			if (options.type) {
				if (options.type == "UntilDrop") {
					this.interval = setInterval(function () {
						opacity = disappear ? '1.0' : '0.0';
						this.element.style.opacity = opacity;
						disappear = !disappear;
					}.bind(this), fps);
				}
			}

			this.stop = function stop() {
				this.element.style.opacity = '';
				if (this.interval) {
					clearInterval(this.interval);
				}
			};
		}
		// Shake effect

	}, {
		key: '_Shake',
		value: function _Shake() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			console.log('Shake..init');
			var fps = this.helper.getSpeed(options.speed);
			var rand = this.helper.random(15);
			var translate = 'translate(' + rand + 'px,' + rand + 'px)';
			this.element.style.transform = translate;
			this.element.style.WebkitTransform = translate;
			var transition = fps / 1000 + 's ease-in-out';
			this.element.style.WebkitTransition = transition;
			this.element.style.transition = transition;

			if (options.type) {
				if (options.type == "UntilDrop") {
					this.interval = setInterval(function () {
						rand = this.helper.random(15);
						translate = 'translate(' + rand + 'px,' + rand + 'px)';
						this.element.style.transform = translate;
						this.element.style.WebkitTransform = translate;
					}.bind(this), fps);
				}
			}

			this.stop = function stop() {
				this.element.style.transform = '';
				this.element.style.WebkitTransform = '';
				if (this.interval) {
					clearInterval(this.interval);
				}
			};
		}
		// Rotation effect

	}, {
		key: '_Spin',
		value: function _Spin() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			console.log('Spin..init');
			var fps = this.helper.getSpeed(options.speed);
			var deg = 180;
			var rand = this.helper.random(deg);
			var rotate = 'rotate(' + rand + 'deg)';
			this.element.style.transform = rotate;
			this.element.style.WebkitTransform = rotate;
			var transition = fps / 1000 + 's';
			this.element.style.WebkitTransition = transition;
			this.element.style.transition = transition;

			if (options.type) {
				if (options.type == "UntilDrop") {
					this.interval = setInterval(function () {
						rand = this.helper.random(deg);
						rotate = 'rotate(' + rand + 'deg)';
						this.element.style.transform = rotate;
						this.element.style.WebkitTransform = rotate;
					}.bind(this), fps);
				}
			}

			this.stop = function stop() {
				this.element.style.transform = '';
				this.element.style.WebkitTransform = '';
				if (this.interval) {
					clearInterval(this.interval);
				}
			};
		}
		//Zoom in/out

	}, {
		key: '_Pulse',
		value: function _Pulse() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			console.log('Pulse..init');
			var fps = this.helper.getSpeed(options.speed);
			var zoom = false;
			var scale = 'scale(1)';
			this.element.style.transform = scale;
			this.element.style.WebkitTransform = scale;
			var transition = fps / 1000 + 's';
			this.element.style.WebkitTransition = transition;
			this.element.style.transition = transition;

			if (options.type) {
				if (options.type == "UntilDrop") {
					this.interval = setInterval(function () {
						scale = 'scale(' + (zoom ? '1.0' : '1.5') + ')';
						zoom = !zoom;
						this.element.style.transform = scale;
						this.element.style.WebkitTransform = scale;
					}.bind(this), fps);
				}
			}

			this.stop = function stop() {
				this.element.style.transform = '';
				this.element.style.WebkitTransform = '';
				if (this.interval) {
					clearInterval(this.interval);
				}
			};
		}
		// Effect random

	}, {
		key: 'Auto',
		value: function Auto() {
			console.log('Auto');
		}
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
    }, {
        key: "random",
        value: function random(range) {
            var negative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var res = Math.round(Math.random() * range);
            if (negative) {
                res = res * (Math.random() < 0.5 ? -1 : 1);
            }
            return res;
        }
    }, {
        key: "getSpeed",
        value: function getSpeed(speed) {
            switch (speed) {
                case "Fast":
                    return 100;
                case "Normal":
                    return 600;
                case "Slow":
                    return 1100;
                default:
                    return 600;
            }
        }
    }, {
        key: "getPropNames",
        value: function getPropNames(object) {
            return Object.getOwnPropertyNames(obj);
        }
    }]);

    return Helper;
}();

exports.default = Helper;

/***/ })
/******/ ]);
});
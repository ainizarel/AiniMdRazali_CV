"use strict";
(self["webpackChunkaini_resume_vue"] = self["webpackChunkaini_resume_vue"] || []).push([[504],{

/***/ 292:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gc: function() { return /* binding */ FontAwesomeIcon; }
/* harmony export */ });
/* unused harmony exports FontAwesomeLayers, FontAwesomeLayersText */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4114);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8992);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4520);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3949);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1454);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8872);
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8950);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6768);








function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
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
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};
var humps$1 = {
  exports: {}
};
(function (module) {
  (function (global) {
    var _processKeys = function (convert, obj, options) {
      if (!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
        return obj;
      }
      var output,
        i = 0,
        l = 0;
      if (_isArray(obj)) {
        output = [];
        for (l = obj.length; i < l; i++) {
          output.push(_processKeys(convert, obj[i], options));
        }
      } else {
        output = {};
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            output[convert(key, options)] = _processKeys(convert, obj[key], options);
          }
        }
      }
      return output;
    };

    // String conversion methods

    var separateWords = function (string, options) {
      options = options || {};
      var separator = options.separator || '_';
      var split = options.split || /(?=[A-Z])/;
      return string.split(split).join(separator);
    };
    var camelize = function (string) {
      if (_isNumerical(string)) {
        return string;
      }
      string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
      // Ensure 1st char is always lowercase
      return string.substr(0, 1).toLowerCase() + string.substr(1);
    };
    var pascalize = function (string) {
      var camelized = camelize(string);
      // Ensure 1st char is always uppercase
      return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
    };
    var decamelize = function (string, options) {
      return separateWords(string, options).toLowerCase();
    };

    // Utilities
    // Taken from Underscore.js

    var toString = Object.prototype.toString;
    var _isFunction = function (obj) {
      return typeof obj === 'function';
    };
    var _isObject = function (obj) {
      return obj === Object(obj);
    };
    var _isArray = function (obj) {
      return toString.call(obj) == '[object Array]';
    };
    var _isDate = function (obj) {
      return toString.call(obj) == '[object Date]';
    };
    var _isRegExp = function (obj) {
      return toString.call(obj) == '[object RegExp]';
    };
    var _isBoolean = function (obj) {
      return toString.call(obj) == '[object Boolean]';
    };

    // Performant way to determine if obj coerces to a number
    var _isNumerical = function (obj) {
      obj = obj - 0;
      return obj === obj;
    };

    // Sets up function which handles processing keys
    // allowing the convert function to be modified by a callback
    var _processor = function (convert, options) {
      var callback = options && 'process' in options ? options.process : options;
      if (typeof callback !== 'function') {
        return convert;
      }
      return function (string, options) {
        return callback(string, convert, options);
      };
    };
    var humps = {
      camelize: camelize,
      decamelize: decamelize,
      pascalize: pascalize,
      depascalize: decamelize,
      camelizeKeys: function (object, options) {
        return _processKeys(_processor(camelize, options), object);
      },
      decamelizeKeys: function (object, options) {
        return _processKeys(_processor(decamelize, options), object, options);
      },
      pascalizeKeys: function (object, options) {
        return _processKeys(_processor(pascalize, options), object);
      },
      depascalizeKeys: function () {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    if (module.exports) {
      module.exports = humps;
    } else {
      global.humps = humps;
    }
  })(commonjsGlobal);
})(humps$1);
var humps = humps$1.exports;
var _excluded = ["class", "style"];

/**
 * Converts a CSS style into a plain Javascript object.
 * @param {String} style The style to converts into a plain Javascript object.
 * @returns {Object}
 */
function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (output, pair) {
    var idx = pair.indexOf(':');
    var prop = humps.camelize(pair.slice(0, idx));
    var value = pair.slice(idx + 1).trim();
    output[prop] = value;
    return output;
  }, {});
}

/**
 * Converts a CSS class list into a plain Javascript object.
 * @param {Array<String>} classes The class list to convert.
 * @returns {Object}
 */
function classToObject(classes) {
  return classes.split(/\s+/).reduce(function (output, className) {
    output[className] = true;
    return output;
  }, {});
}

/**
 * Converts a FontAwesome abstract element of an icon into a Vue VNode.
 * @param {AbstractElement | String} abstractElement The element to convert.
 * @param {Object} props The user-defined props.
 * @param {Object} attrs The user-defined native HTML attributes.
 * @returns {VNode}
 */
function convert(abstractElement) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // If the abstract element is a string, we'll just return a string render function
  if (typeof abstractElement === 'string') {
    return abstractElement;
  }

  // Converting abstract element children into Vue VNodes
  var children = (abstractElement.children || []).map(function (child) {
    return convert(child);
  });

  // Converting abstract element attributes into valid Vue format
  var mixins = Object.keys(abstractElement.attributes || {}).reduce(function (mixins, key) {
    var value = abstractElement.attributes[key];
    switch (key) {
      case 'class':
        mixins.class = classToObject(value);
        break;
      case 'style':
        mixins.style = styleToObject(value);
        break;
      default:
        mixins.attrs[key] = value;
    }
    return mixins;
  }, {
    attrs: {},
    class: {},
    style: {}
  });

  // Now, we'll return the VNode
  attrs.class;
  var _attrs$style = attrs.style,
    aStyle = _attrs$style === void 0 ? {} : _attrs$style,
    otherAttrs = _objectWithoutProperties(attrs, _excluded);
  return (0,vue__WEBPACK_IMPORTED_MODULE_7__.h)(abstractElement.tag, _objectSpread2(_objectSpread2(_objectSpread2({}, props), {}, {
    class: mixins.class,
    style: _objectSpread2(_objectSpread2({}, mixins.style), aStyle)
  }, mixins.attrs), otherAttrs), children);
}
var PRODUCTION = false;
try {
  PRODUCTION = "production" === 'production';
} catch (e) {}
function log() {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;
    (_console = console).error.apply(_console, arguments);
  }
}
function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}
function classList(props) {
  var _classes;
  var classes = (_classes = {
    'fa-spin': props.spin,
    'fa-pulse': props.pulse,
    'fa-fw': props.fixedWidth,
    'fa-border': props.border,
    'fa-li': props.listItem,
    'fa-inverse': props.inverse,
    'fa-flip': props.flip === true,
    'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
    'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_classes, "fa-".concat(props.size), props.size !== null), "fa-rotate-".concat(props.rotation), props.rotation !== null), "fa-pull-".concat(props.pull), props.pull !== null), 'fa-swap-opacity', props.swapOpacity), 'fa-bounce', props.bounce), 'fa-shake', props.shake), 'fa-beat', props.beat), 'fa-fade', props.fade), 'fa-beat-fade', props.beatFade), 'fa-flash', props.flash), _defineProperty(_defineProperty(_classes, 'fa-spin-pulse', props.spinPulse), 'fa-spin-reverse', props.spinReverse));
  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}
function normalizeIconArgs(icon) {
  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
    return icon;
  }
  if (_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__/* .parse */ .qg.icon) {
    return _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__/* .parse */ .qg.icon(icon);
  }
  if (icon === null) {
    return null;
  }
  if (_typeof(icon) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  }
  if (Array.isArray(icon) && icon.length === 2) {
    return {
      prefix: icon[0],
      iconName: icon[1]
    };
  }
  if (typeof icon === 'string') {
    return {
      prefix: 'fas',
      iconName: icon
    };
  }
}
var FontAwesomeIcon = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .defineComponent */ .pM)({
  name: 'FontAwesomeIcon',
  props: {
    border: {
      type: Boolean,
      default: false
    },
    fixedWidth: {
      type: Boolean,
      default: false
    },
    flip: {
      type: [Boolean, String],
      default: false,
      validator: function validator(value) {
        return [true, false, 'horizontal', 'vertical', 'both'].indexOf(value) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: true
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: null
    },
    listItem: {
      type: Boolean,
      default: false
    },
    pull: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['right', 'left'].indexOf(value) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: false
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function validator(value) {
        return [90, 180, 270].indexOf(Number.parseInt(value, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: false
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: null
    },
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: false
    },
    bounce: {
      type: Boolean,
      default: false
    },
    shake: {
      type: Boolean,
      default: false
    },
    beat: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    },
    beatFade: {
      type: Boolean,
      default: false
    },
    flash: {
      type: Boolean,
      default: false
    },
    spinPulse: {
      type: Boolean,
      default: false
    },
    spinReverse: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var icon$1 = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .computed */ .EW)(function () {
      return normalizeIconArgs(props.icon);
    });
    var classes = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .computed */ .EW)(function () {
      return objectWithKey('classes', classList(props));
    });
    var transform = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .computed */ .EW)(function () {
      return objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__/* .parse */ .qg.transform(props.transform) : props.transform);
    });
    var mask = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .computed */ .EW)(function () {
      return objectWithKey('mask', normalizeIconArgs(props.mask));
    });
    var renderedIcon = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .computed */ .EW)(function () {
      return (0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__/* .icon */ .Kk)(icon$1.value, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes.value), transform.value), mask.value), {}, {
        symbol: props.symbol,
        title: props.title,
        titleId: props.titleId,
        maskId: props.maskId
      }));
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .watch */ .wB)(renderedIcon, function (value) {
      if (!value) {
        return log('Could not find one or more icon(s)', icon$1.value, mask.value);
      }
    }, {
      immediate: true
    });
    var vnode = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .computed */ .EW)(function () {
      return renderedIcon.value ? convert(renderedIcon.value.abstract[0], {}, attrs) : null;
    });
    return function () {
      return vnode.value;
    };
  }
});
var FontAwesomeLayers = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .defineComponent */ .pM)({
  name: 'FontAwesomeLayers',
  props: {
    fixedWidth: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var familyPrefix = _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__/* .config */ .$W.familyPrefix;
    var className = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .computed */ .EW)(function () {
      return ["".concat(familyPrefix, "-layers")].concat(_toConsumableArray(props.fixedWidth ? ["".concat(familyPrefix, "-fw")] : []));
    });
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_7__.h)('div', {
        class: className.value
      }, slots.default ? slots.default() : []);
    };
  }
});
var FontAwesomeLayersText = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .defineComponent */ .pM)({
  name: 'FontAwesomeLayersText',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['bottom-left', 'bottom-right', 'top-left', 'top-right'].indexOf(value) > -1;
      }
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var familyPrefix = _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__/* .config */ .$W.familyPrefix;
    var classes = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .computed */ .EW)(function () {
      return objectWithKey('classes', [].concat(_toConsumableArray(props.counter ? ["".concat(familyPrefix, "-layers-counter")] : []), _toConsumableArray(props.position ? ["".concat(familyPrefix, "-layers-").concat(props.position)] : [])));
    });
    var transform = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .computed */ .EW)(function () {
      return objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__/* .parse */ .qg.transform(props.transform) : props.transform);
    });
    var abstractElement = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .computed */ .EW)(function () {
      var _text = (0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__/* .text */ .Qq)(props.value.toString(), _objectSpread2(_objectSpread2({}, transform.value), classes.value)),
        abstract = _text.abstract;
      if (props.counter) {
        abstract[0].attributes.class = abstract[0].attributes.class.replace('fa-layers-text', '');
      }
      return abstract[0];
    });
    var vnode = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .computed */ .EW)(function () {
      return convert(abstractElement.value, {}, attrs);
    });
    return function () {
      return vnode.value;
    };
  }
});


/***/ }),

/***/ 144:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C4: function() { return /* binding */ pauseTracking; },
/* harmony export */   EW: function() { return /* binding */ computed; },
/* harmony export */   Gc: function() { return /* binding */ shallowReactive; },
/* harmony export */   IG: function() { return /* binding */ markRaw; },
/* harmony export */   IJ: function() { return /* binding */ shallowRef; },
/* harmony export */   KR: function() { return /* binding */ ref; },
/* harmony export */   Kh: function() { return /* binding */ reactive; },
/* harmony export */   Pr: function() { return /* binding */ proxyRefs; },
/* harmony export */   R1: function() { return /* binding */ unref; },
/* harmony export */   X2: function() { return /* binding */ ReactiveEffect; },
/* harmony export */   bl: function() { return /* binding */ resetTracking; },
/* harmony export */   fE: function() { return /* binding */ isShallow; },
/* harmony export */   g8: function() { return /* binding */ isReactive; },
/* harmony export */   hV: function() { return /* binding */ traverse; },
/* harmony export */   hZ: function() { return /* binding */ trigger; },
/* harmony export */   i9: function() { return /* binding */ isRef; },
/* harmony export */   ju: function() { return /* binding */ isProxy; },
/* harmony export */   lJ: function() { return /* binding */ toReactive; },
/* harmony export */   qA: function() { return /* binding */ shallowReadArray; },
/* harmony export */   u4: function() { return /* binding */ track; },
/* harmony export */   uY: function() { return /* binding */ effectScope; },
/* harmony export */   ux: function() { return /* binding */ toRaw; },
/* harmony export */   wB: function() { return /* binding */ watch; },
/* harmony export */   yC: function() { return /* binding */ EffectScope; }
/* harmony export */ });
/* unused harmony exports ARRAY_ITERATE_KEY, EffectFlags, ITERATE_KEY, MAP_KEY_ITERATE_KEY, ReactiveFlags, TrackOpTypes, TriggerOpTypes, WatchErrorCodes, customRef, effect, enableTracking, getCurrentScope, getCurrentWatcher, isReadonly, onEffectCleanup, onScopeDispose, onWatcherCleanup, reactiveReadArray, readonly, shallowReadonly, stop, toReadonly, toRef, toRefs, toValue, triggerRef */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4114);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9678);
/* harmony import */ var core_js_modules_es_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7145);
/* harmony import */ var core_js_modules_es_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_to_spliced_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1658);
/* harmony import */ var core_js_modules_es_array_to_spliced_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_to_spliced_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9479);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7642);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8004);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3853);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5876);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2475);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5024);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1698);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8992);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4520);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3949);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1454);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7550);
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4232);

















/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/

function warn(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    /**
     * @internal
     */
    this._active = true;
    /**
     * @internal
     */
    this.effects = [];
    /**
     * @internal
     */
    this.cleanups = [];
    this._isPaused = false;
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let i, l;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].pause();
        }
      }
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].pause();
      }
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active) {
      if (this._isPaused) {
        this._isPaused = false;
        let i, l;
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].resume();
          }
        }
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].resume();
        }
      }
    }
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else if (false) {}
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      this._active = false;
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      this.effects.length = 0;
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      this.cleanups.length = 0;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn, failSilently = false) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  } else if (false) {}
}
let activeSub;
const EffectFlags = {
  "ACTIVE": 1,
  "1": "ACTIVE",
  "RUNNING": 2,
  "2": "RUNNING",
  "TRACKING": 4,
  "4": "TRACKING",
  "NOTIFIED": 8,
  "8": "NOTIFIED",
  "DIRTY": 16,
  "16": "DIRTY",
  "ALLOW_RECURSE": 32,
  "32": "ALLOW_RECURSE",
  "PAUSED": 64,
  "64": "PAUSED"
};
const pausedQueueEffects = /* @__PURE__ */new WeakSet();
class ReactiveEffect {
  constructor(fn) {
    this.fn = fn;
    /**
     * @internal
     */
    this.deps = void 0;
    /**
     * @internal
     */
    this.depsTail = void 0;
    /**
     * @internal
     */
    this.flags = 1 | 4;
    /**
     * @internal
     */
    this.next = void 0;
    /**
     * @internal
     */
    this.cleanup = void 0;
    this.scheduler = void 0;
    if (activeEffectScope && activeEffectScope.active) {
      activeEffectScope.effects.push(this);
    }
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    if (this.flags & 64) {
      this.flags &= ~64;
      if (pausedQueueEffects.has(this)) {
        pausedQueueEffects.delete(this);
        this.trigger();
      }
    }
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags & 2 && !(this.flags & 32)) {
      return;
    }
    if (!(this.flags & 8)) {
      batch(this);
    }
  }
  run() {
    if (!(this.flags & 1)) {
      return this.fn();
    }
    this.flags |= 2;
    cleanupEffect(this);
    prepareDeps(this);
    const prevEffect = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = this;
    shouldTrack = true;
    try {
      return this.fn();
    } finally {
      if (false) {}
      cleanupDeps(this);
      activeSub = prevEffect;
      shouldTrack = prevShouldTrack;
      this.flags &= ~2;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let link = this.deps; link; link = link.nextDep) {
        removeSub(link);
      }
      this.deps = this.depsTail = void 0;
      cleanupEffect(this);
      this.onStop && this.onStop();
      this.flags &= ~1;
    }
  }
  trigger() {
    if (this.flags & 64) {
      pausedQueueEffects.add(this);
    } else if (this.scheduler) {
      this.scheduler();
    } else {
      this.runIfDirty();
    }
  }
  /**
   * @internal
   */
  runIfDirty() {
    if (isDirty(this)) {
      this.run();
    }
  }
  get dirty() {
    return isDirty(this);
  }
}
let batchDepth = 0;
let batchedSub;
let batchedComputed;
function batch(sub, isComputed = false) {
  sub.flags |= 8;
  if (isComputed) {
    sub.next = batchedComputed;
    batchedComputed = sub;
    return;
  }
  sub.next = batchedSub;
  batchedSub = sub;
}
function startBatch() {
  batchDepth++;
}
function endBatch() {
  if (--batchDepth > 0) {
    return;
  }
  if (batchedComputed) {
    let e = batchedComputed;
    batchedComputed = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= ~8;
      e = next;
    }
  }
  let error;
  while (batchedSub) {
    let e = batchedSub;
    batchedSub = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= ~8;
      if (e.flags & 1) {
        try {
          ;
          e.trigger();
        } catch (err) {
          if (!error) error = err;
        }
      }
      e = next;
    }
  }
  if (error) throw error;
}
function prepareDeps(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    link.version = -1;
    link.prevActiveLink = link.dep.activeLink;
    link.dep.activeLink = link;
  }
}
function cleanupDeps(sub) {
  let head;
  let tail = sub.depsTail;
  let link = tail;
  while (link) {
    const prev = link.prevDep;
    if (link.version === -1) {
      if (link === tail) tail = prev;
      removeSub(link);
      removeDep(link);
    } else {
      head = link;
    }
    link.dep.activeLink = link.prevActiveLink;
    link.prevActiveLink = void 0;
    link = prev;
  }
  sub.deps = head;
  sub.depsTail = tail;
}
function isDirty(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
      return true;
    }
  }
  if (sub._dirty) {
    return true;
  }
  return false;
}
function refreshComputed(computed) {
  if (computed.flags & 4 && !(computed.flags & 16)) {
    return;
  }
  computed.flags &= ~16;
  if (computed.globalVersion === globalVersion) {
    return;
  }
  computed.globalVersion = globalVersion;
  const dep = computed.dep;
  computed.flags |= 2;
  if (dep.version > 0 && !computed.isSSR && computed.deps && !isDirty(computed)) {
    computed.flags &= ~2;
    return;
  }
  const prevSub = activeSub;
  const prevShouldTrack = shouldTrack;
  activeSub = computed;
  shouldTrack = true;
  try {
    prepareDeps(computed);
    const value = computed.fn(computed._value);
    if (dep.version === 0 || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .hasChanged */ .$H)(value, computed._value)) {
      computed._value = value;
      dep.version++;
    }
  } catch (err) {
    dep.version++;
    throw err;
  } finally {
    activeSub = prevSub;
    shouldTrack = prevShouldTrack;
    cleanupDeps(computed);
    computed.flags &= ~2;
  }
}
function removeSub(link, soft = false) {
  const {
    dep,
    prevSub,
    nextSub
  } = link;
  if (prevSub) {
    prevSub.nextSub = nextSub;
    link.prevSub = void 0;
  }
  if (nextSub) {
    nextSub.prevSub = prevSub;
    link.nextSub = void 0;
  }
  if (false) {}
  if (dep.subs === link) {
    dep.subs = prevSub;
    if (!prevSub && dep.computed) {
      dep.computed.flags &= ~4;
      for (let l = dep.computed.deps; l; l = l.nextDep) {
        removeSub(l, true);
      }
    }
  }
  if (!soft && ! --dep.sc && dep.map) {
    dep.map.delete(dep.key);
  }
}
function removeDep(link) {
  const {
    prevDep,
    nextDep
  } = link;
  if (prevDep) {
    prevDep.nextDep = nextDep;
    link.prevDep = void 0;
  }
  if (nextDep) {
    nextDep.prevDep = prevDep;
    link.nextDep = void 0;
  }
}
function effect(fn, options) {
  if (fn.effect instanceof ReactiveEffect) {
    fn = fn.effect.fn;
  }
  const e = new ReactiveEffect(fn);
  if (options) {
    extend(e, options);
  }
  try {
    e.run();
  } catch (err) {
    e.stop();
    throw err;
  }
  const runner = e.run.bind(e);
  runner.effect = e;
  return runner;
}
function stop(runner) {
  runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function onEffectCleanup(fn, failSilently = false) {
  if (activeSub instanceof ReactiveEffect) {
    activeSub.cleanup = fn;
  } else if (false) {}
}
function cleanupEffect(e) {
  const {
    cleanup
  } = e;
  e.cleanup = void 0;
  if (cleanup) {
    const prevSub = activeSub;
    activeSub = void 0;
    try {
      cleanup();
    } finally {
      activeSub = prevSub;
    }
  }
}
let globalVersion = 0;
class Link {
  constructor(sub, dep) {
    this.sub = sub;
    this.dep = dep;
    this.version = dep.version;
    this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Dep {
  constructor(computed) {
    this.computed = computed;
    this.version = 0;
    /**
     * Link between this dep and the current active effect
     */
    this.activeLink = void 0;
    /**
     * Doubly linked list representing the subscribing effects (tail)
     */
    this.subs = void 0;
    /**
     * For object property deps cleanup
     */
    this.map = void 0;
    this.key = void 0;
    /**
     * Subscriber counter
     */
    this.sc = 0;
    if (false) {}
  }
  track(debugInfo) {
    if (!activeSub || !shouldTrack || activeSub === this.computed) {
      return;
    }
    let link = this.activeLink;
    if (link === void 0 || link.sub !== activeSub) {
      link = this.activeLink = new Link(activeSub, this);
      if (!activeSub.deps) {
        activeSub.deps = activeSub.depsTail = link;
      } else {
        link.prevDep = activeSub.depsTail;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
      }
      addSub(link);
    } else if (link.version === -1) {
      link.version = this.version;
      if (link.nextDep) {
        const next = link.nextDep;
        next.prevDep = link.prevDep;
        if (link.prevDep) {
          link.prevDep.nextDep = next;
        }
        link.prevDep = activeSub.depsTail;
        link.nextDep = void 0;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
        if (activeSub.deps === link) {
          activeSub.deps = next;
        }
      }
    }
    if (false) {}
    return link;
  }
  trigger(debugInfo) {
    this.version++;
    globalVersion++;
    this.notify(debugInfo);
  }
  notify(debugInfo) {
    startBatch();
    try {
      if (false) {}
      for (let link = this.subs; link; link = link.prevSub) {
        if (link.sub.notify()) {
          ;
          link.sub.dep.notify();
        }
      }
    } finally {
      endBatch();
    }
  }
}
function addSub(link) {
  link.dep.sc++;
  if (link.sub.flags & 4) {
    const computed = link.dep.computed;
    if (computed && !link.dep.subs) {
      computed.flags |= 4 | 16;
      for (let l = computed.deps; l; l = l.nextDep) {
        addSub(l);
      }
    }
    const currentTail = link.dep.subs;
    if (currentTail !== link) {
      link.prevSub = currentTail;
      if (currentTail) currentTail.nextSub = link;
    }
    if (false) {}
    link.dep.subs = link;
  }
}
const targetMap = /* @__PURE__ */new WeakMap();
const ITERATE_KEY = Symbol( false ? 0 : "");
const MAP_KEY_ITERATE_KEY = Symbol( false ? 0 : "");
const ARRAY_ITERATE_KEY = Symbol( false ? 0 : "");
function track(target, type, key) {
  if (shouldTrack && activeSub) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Dep());
      dep.map = depsMap;
      dep.key = key;
    }
    if (false) {} else {
      dep.track();
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    globalVersion++;
    return;
  }
  const run = dep => {
    if (dep) {
      if (false) {} else {
        dep.trigger();
      }
    }
  };
  startBatch();
  if (type === "clear") {
    depsMap.forEach(run);
  } else {
    const targetIsArray = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isArray */ .cy)(target);
    const isArrayIndex = targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isIntegerKey */ .yI)(key);
    if (targetIsArray && key === "length") {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isSymbol */ .Bm)(key2) && key2 >= newLength) {
          run(dep);
        }
      });
    } else {
      if (key !== void 0 || depsMap.has(void 0)) {
        run(depsMap.get(key));
      }
      if (isArrayIndex) {
        run(depsMap.get(ARRAY_ITERATE_KEY));
      }
      switch (type) {
        case "add":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isMap */ .CE)(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isArrayIndex) {
            run(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isMap */ .CE)(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isMap */ .CE)(target)) {
            run(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
  }
  endBatch();
}
function getDepFromReactive(object, key) {
  const depMap = targetMap.get(object);
  return depMap && depMap.get(key);
}
function reactiveReadArray(array) {
  const raw = toRaw(array);
  if (raw === array) return raw;
  track(raw, "iterate", ARRAY_ITERATE_KEY);
  return isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
  track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
  return arr;
}
const arrayInstrumentations = {
  __proto__: null,
  [Symbol.iterator]() {
    return iterator(this, Symbol.iterator, toReactive);
  },
  concat(...args) {
    return reactiveReadArray(this).concat(...args.map(x => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isArray */ .cy)(x) ? reactiveReadArray(x) : x));
  },
  entries() {
    return iterator(this, "entries", value => {
      value[1] = toReactive(value[1]);
      return value;
    });
  },
  every(fn, thisArg) {
    return apply(this, "every", fn, thisArg, void 0, arguments);
  },
  filter(fn, thisArg) {
    return apply(this, "filter", fn, thisArg, v => v.map(toReactive), arguments);
  },
  find(fn, thisArg) {
    return apply(this, "find", fn, thisArg, toReactive, arguments);
  },
  findIndex(fn, thisArg) {
    return apply(this, "findIndex", fn, thisArg, void 0, arguments);
  },
  findLast(fn, thisArg) {
    return apply(this, "findLast", fn, thisArg, toReactive, arguments);
  },
  findLastIndex(fn, thisArg) {
    return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(fn, thisArg) {
    return apply(this, "forEach", fn, thisArg, void 0, arguments);
  },
  includes(...args) {
    return searchProxy(this, "includes", args);
  },
  indexOf(...args) {
    return searchProxy(this, "indexOf", args);
  },
  join(separator) {
    return reactiveReadArray(this).join(separator);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...args) {
    return searchProxy(this, "lastIndexOf", args);
  },
  map(fn, thisArg) {
    return apply(this, "map", fn, thisArg, void 0, arguments);
  },
  pop() {
    return noTracking(this, "pop");
  },
  push(...args) {
    return noTracking(this, "push", args);
  },
  reduce(fn, ...args) {
    return reduce(this, "reduce", fn, args);
  },
  reduceRight(fn, ...args) {
    return reduce(this, "reduceRight", fn, args);
  },
  shift() {
    return noTracking(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(fn, thisArg) {
    return apply(this, "some", fn, thisArg, void 0, arguments);
  },
  splice(...args) {
    return noTracking(this, "splice", args);
  },
  toReversed() {
    return reactiveReadArray(this).toReversed();
  },
  toSorted(comparer) {
    return reactiveReadArray(this).toSorted(comparer);
  },
  toSpliced(...args) {
    return reactiveReadArray(this).toSpliced(...args);
  },
  unshift(...args) {
    return noTracking(this, "unshift", args);
  },
  values() {
    return iterator(this, "values", toReactive);
  }
};
function iterator(self, method, wrapValue) {
  const arr = shallowReadArray(self);
  const iter = arr[method]();
  if (arr !== self && !isShallow(self)) {
    iter._next = iter.next;
    iter.next = () => {
      const result = iter._next();
      if (result.value) {
        result.value = wrapValue(result.value);
      }
      return result;
    };
  }
  return iter;
}
const arrayProto = Array.prototype;
function apply(self, method, fn, thisArg, wrappedRetFn, args) {
  const arr = shallowReadArray(self);
  const needsWrap = arr !== self && !isShallow(self);
  const methodFn = arr[method];
  if (methodFn !== arrayProto[method]) {
    const result2 = methodFn.apply(self, args);
    return needsWrap ? toReactive(result2) : result2;
  }
  let wrappedFn = fn;
  if (arr !== self) {
    if (needsWrap) {
      wrappedFn = function (item, index) {
        return fn.call(this, toReactive(item), index, self);
      };
    } else if (fn.length > 2) {
      wrappedFn = function (item, index) {
        return fn.call(this, item, index, self);
      };
    }
  }
  const result = methodFn.call(arr, wrappedFn, thisArg);
  return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self, method, fn, args) {
  const arr = shallowReadArray(self);
  let wrappedFn = fn;
  if (arr !== self) {
    if (!isShallow(self)) {
      wrappedFn = function (acc, item, index) {
        return fn.call(this, acc, toReactive(item), index, self);
      };
    } else if (fn.length > 3) {
      wrappedFn = function (acc, item, index) {
        return fn.call(this, acc, item, index, self);
      };
    }
  }
  return arr[method](wrappedFn, ...args);
}
function searchProxy(self, method, args) {
  const arr = toRaw(self);
  track(arr, "iterate", ARRAY_ITERATE_KEY);
  const res = arr[method](...args);
  if ((res === -1 || res === false) && isProxy(args[0])) {
    args[0] = toRaw(args[0]);
    return arr[method](...args);
  }
  return res;
}
function noTracking(self, method, args = []) {
  pauseTracking();
  startBatch();
  const res = toRaw(self)[method].apply(self, args);
  endBatch();
  resetTracking();
  return res;
}
const isNonTrackableKeys = /* @__PURE__ */(0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .makeMap */ .pD)(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(/* @__PURE__ */Object.getOwnPropertyNames(Symbol).filter(key => key !== "arguments" && key !== "caller").map(key => Symbol[key]).filter(_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isSymbol */ .Bm));
function hasOwnProperty(key) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isSymbol */ .Bm)(key)) key = String(key);
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    if (key === "__v_skip") return target["__v_skip"];
    const isReadonly2 = this._isReadonly,
      isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) ||
      // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isArray */ .cy)(target);
    if (!isReadonly2) {
      let fn;
      if (targetIsArray && (fn = arrayInstrumentations[key])) {
        return fn;
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(target, key,
    // if this is a proxy wrapping a ref, return methods using the raw ref
    // as receiver so that we don't have to call `toRaw` on the ref in all
    // its class methods
    isRef(target) ? target : receiver);
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isSymbol */ .Bm)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isIntegerKey */ .yI)(key) ? res : res.value;
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isObject */ .Gv)(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isArray */ .cy)(target) && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return false;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isArray */ .cy)(target) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isIntegerKey */ .yI)(key) ? Number(key) < target.length : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .hasOwn */ .$3)(target, key);
    const result = Reflect.set(target, key, value, isRef(target) ? target : receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .hasChanged */ .$H)(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .hasOwn */ .$3)(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isSymbol */ .Bm)(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(target, "iterate", (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isArray */ .cy)(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    if (false) {}
    return true;
  }
  deleteProperty(target, key) {
    if (false) {}
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */new ReadonlyReactiveHandler(true);
const toShallow = value => value;
const getProto = v => Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function (...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isMap */ .CE)(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      // iterator protocol
      next() {
        const {
          value,
          done
        } = innerIterator.next();
        return done ? {
          value,
          done
        } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function (...args) {
    if (false) {}
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations(readonly, shallow) {
  const instrumentations = {
    get(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .hasChanged */ .$H)(key, rawKey)) {
          track(rawTarget, "get", key);
        }
        track(rawTarget, "get", rawKey);
      }
      const {
        has
      } = getProto(rawTarget);
      const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
      if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    },
    get size() {
      const target = this["__v_raw"];
      !readonly && track(toRaw(target), "iterate", ITERATE_KEY);
      return Reflect.get(target, "size", target);
    },
    has(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .hasChanged */ .$H)(key, rawKey)) {
          track(rawTarget, "has", key);
        }
        track(rawTarget, "has", rawKey);
      }
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    },
    forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
      !readonly && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    }
  };
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .extend */ .X$)(instrumentations, readonly ? {
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear")
  } : {
    add(value) {
      if (!shallow && !isShallow(value) && !isReadonly(value)) {
        value = toRaw(value);
      }
      const target = toRaw(this);
      const proto = getProto(target);
      const hadKey = proto.has.call(target, value);
      if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
      }
      return this;
    },
    set(key, value) {
      if (!shallow && !isShallow(value) && !isReadonly(value)) {
        value = toRaw(value);
      }
      const target = toRaw(this);
      const {
        has,
        get
      } = getProto(target);
      let hadKey = has.call(target, key);
      if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
      } else if (false) {}
      const oldValue = get.call(target, key);
      target.set(key, value);
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .hasChanged */ .$H)(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
      return this;
    },
    delete(key) {
      const target = toRaw(this);
      const {
        has,
        get
      } = getProto(target);
      let hadKey = has.call(target, key);
      if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
      } else if (false) {}
      const oldValue = get ? get.call(target, key) : void 0;
      const result = target.delete(key);
      if (hadKey) {
        trigger(target, "delete", key, void 0, oldValue);
      }
      return result;
    },
    clear() {
      const target = toRaw(this);
      const hadItems = target.size !== 0;
      const oldTarget =  false ? 0 : void 0;
      const result = target.clear();
      if (hadItems) {
        trigger(target, "clear", void 0, void 0, oldTarget);
      }
      return result;
    }
  });
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach(method => {
    instrumentations[method] = createIterableMethod(method, readonly, shallow);
  });
  return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = createInstrumentations(isReadonly2, shallow);
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .hasOwn */ .$3)(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has.call(target, rawKey)) {
    const type = toRawType(target);
    warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const reactiveMap = /* @__PURE__ */new WeakMap();
const shallowReactiveMap = /* @__PURE__ */new WeakMap();
const readonlyMap = /* @__PURE__ */new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1 /* COMMON */;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2 /* COLLECTION */;
    default:
      return 0 /* INVALID */;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 /* INVALID */ : targetTypeMap((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .toRawType */ .Zf)(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isObject */ .Gv)(target)) {
    if (false) {}
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0 /* INVALID */) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return value ? !!value["__v_raw"] : false;
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .hasOwn */ .$3)(value, "__v_skip") && Object.isExtensible(value)) {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .def */ .yQ)(value, "__v_skip", true);
  }
  return value;
}
const toReactive = value => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isObject */ .Gv)(value) ? reactive(value) : value;
const toReadonly = value => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isObject */ .Gv)(value) ? readonly(value) : value;
function isRef(r) {
  return r ? r["__v_isRef"] === true : false;
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, isShallow2) {
    this.dep = new Dep();
    this["__v_isRef"] = true;
    this["__v_isShallow"] = false;
    this._rawValue = isShallow2 ? value : toRaw(value);
    this._value = isShallow2 ? value : toReactive(value);
    this["__v_isShallow"] = isShallow2;
  }
  get value() {
    if (false) {} else {
      this.dep.track();
    }
    return this._value;
  }
  set value(newValue) {
    const oldValue = this._rawValue;
    const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
    newValue = useDirectValue ? newValue : toRaw(newValue);
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .hasChanged */ .$H)(newValue, oldValue)) {
      this._rawValue = newValue;
      this._value = useDirectValue ? newValue : toReactive(newValue);
      if (false) {} else {
        this.dep.trigger();
      }
    }
  }
}
function triggerRef(ref2) {
  if (ref2.dep) {
    if (false) {} else {
      ref2.dep.trigger();
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
  return isFunction(source) ? source() : unref(source);
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
  constructor(factory) {
    this["__v_isRef"] = true;
    this._value = void 0;
    const dep = this.dep = new Dep();
    const {
      get,
      set
    } = factory(dep.track.bind(dep), dep.trigger.bind(dep));
    this._get = get;
    this._set = set;
  }
  get value() {
    return this._value = this._get();
  }
  set value(newVal) {
    this._set(newVal);
  }
}
function customRef(factory) {
  return new CustomRefImpl(factory);
}
function toRefs(object) {
  if (false) {}
  const ret = isArray(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = propertyToRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this["__v_isRef"] = true;
    this._value = void 0;
  }
  get value() {
    const val = this._object[this._key];
    return this._value = val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(toRaw(this._object), this._key);
  }
}
class GetterRefImpl {
  constructor(_getter) {
    this._getter = _getter;
    this["__v_isRef"] = true;
    this["__v_isReadonly"] = true;
    this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function toRef(source, key, defaultValue) {
  if (isRef(source)) {
    return source;
  } else if (isFunction(source)) {
    return new GetterRefImpl(source);
  } else if (isObject(source) && arguments.length > 1) {
    return propertyToRef(source, key, defaultValue);
  } else {
    return ref(source);
  }
}
function propertyToRef(source, key, defaultValue) {
  const val = source[key];
  return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
}
class ComputedRefImpl {
  constructor(fn, setter, isSSR) {
    this.fn = fn;
    this.setter = setter;
    /**
     * @internal
     */
    this._value = void 0;
    /**
     * @internal
     */
    this.dep = new Dep(this);
    /**
     * @internal
     */
    this.__v_isRef = true;
    // TODO isolatedDeclarations "__v_isReadonly"
    // A computed is also a subscriber that tracks other deps
    /**
     * @internal
     */
    this.deps = void 0;
    /**
     * @internal
     */
    this.depsTail = void 0;
    /**
     * @internal
     */
    this.flags = 16;
    /**
     * @internal
     */
    this.globalVersion = globalVersion - 1;
    /**
     * @internal
     */
    this.next = void 0;
    // for backwards compat
    this.effect = this;
    this["__v_isReadonly"] = !setter;
    this.isSSR = isSSR;
  }
  /**
   * @internal
   */
  notify() {
    this.flags |= 16;
    if (!(this.flags & 8) &&
    // avoid infinite self recursion
    activeSub !== this) {
      batch(this, true);
      return true;
    } else if (false) {}
  }
  get value() {
    const link =  false ? 0 : this.dep.track();
    refreshComputed(this);
    if (link) {
      link.version = this.dep.version;
    }
    return this._value;
  }
  set value(newValue) {
    if (this.setter) {
      this.setter(newValue);
    } else if (false) {}
  }
}
function computed(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isFunction */ .Tn)(getterOrOptions)) {
    getter = getterOrOptions;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, isSSR);
  if (false) {}
  return cRef;
}
const TrackOpTypes = {
  "GET": "get",
  "HAS": "has",
  "ITERATE": "iterate"
};
const TriggerOpTypes = {
  "SET": "set",
  "ADD": "add",
  "DELETE": "delete",
  "CLEAR": "clear"
};
const ReactiveFlags = {
  "SKIP": "__v_skip",
  "IS_REACTIVE": "__v_isReactive",
  "IS_READONLY": "__v_isReadonly",
  "IS_SHALLOW": "__v_isShallow",
  "RAW": "__v_raw",
  "IS_REF": "__v_isRef"
};
const WatchErrorCodes = {
  "WATCH_GETTER": 2,
  "2": "WATCH_GETTER",
  "WATCH_CALLBACK": 3,
  "3": "WATCH_CALLBACK",
  "WATCH_CLEANUP": 4,
  "4": "WATCH_CLEANUP"
};
const INITIAL_WATCHER_VALUE = {};
const cleanupMap = /* @__PURE__ */new WeakMap();
let activeWatcher = void 0;
function getCurrentWatcher() {
  return activeWatcher;
}
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
  if (owner) {
    let cleanups = cleanupMap.get(owner);
    if (!cleanups) cleanupMap.set(owner, cleanups = []);
    cleanups.push(cleanupFn);
  } else if (false) {}
}
function watch(source, cb, options = _vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .EMPTY_OBJ */ .MZ) {
  const {
    immediate,
    deep,
    once,
    scheduler,
    augmentJob,
    call
  } = options;
  const warnInvalidSource = s => {
    (options.onWarn || warn)(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
  };
  const reactiveGetter = source2 => {
    if (deep) return source2;
    if (isShallow(source2) || deep === false || deep === 0) return traverse(source2, 1);
    return traverse(source2);
  };
  let effect;
  let getter;
  let cleanup;
  let boundCleanup;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isArray */ .cy)(source)) {
    isMultiSource = true;
    forceTrigger = source.some(s => isReactive(s) || isShallow(s));
    getter = () => source.map(s => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return reactiveGetter(s);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isFunction */ .Tn)(s)) {
        return call ? call(s, 2) : s();
      } else {
         false && 0;
      }
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isFunction */ .Tn)(source)) {
    if (cb) {
      getter = call ? () => call(source, 2) : source;
    } else {
      getter = () => {
        if (cleanup) {
          pauseTracking();
          try {
            cleanup();
          } finally {
            resetTracking();
          }
        }
        const currentEffect = activeWatcher;
        activeWatcher = effect;
        try {
          return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
        } finally {
          activeWatcher = currentEffect;
        }
      };
    }
  } else {
    getter = _vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .NOOP */ .tE;
     false && 0;
  }
  if (cb && deep) {
    const baseGetter = getter;
    const depth = deep === true ? Infinity : deep;
    getter = () => traverse(baseGetter(), depth);
  }
  const scope = getCurrentScope();
  const watchHandle = () => {
    effect.stop();
    if (scope && scope.active) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .remove */ .TF)(scope.effects, effect);
    }
  };
  if (once && cb) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      watchHandle();
    };
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = immediateFirstRun => {
    if (!(effect.flags & 1) || !effect.dirty && !immediateFirstRun) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .hasChanged */ .$H)(v, oldValue[i])) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .hasChanged */ .$H)(newValue, oldValue))) {
        if (cleanup) {
          cleanup();
        }
        const currentWatcher = activeWatcher;
        activeWatcher = effect;
        try {
          const args = [newValue,
          // pass undefined as the old value when it's changed for the first time
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue, boundCleanup];
          call ? call(cb, 3, args) :
          // @ts-expect-error
          cb(...args);
          oldValue = newValue;
        } finally {
          activeWatcher = currentWatcher;
        }
      }
    } else {
      effect.run();
    }
  };
  if (augmentJob) {
    augmentJob(job);
  }
  effect = new ReactiveEffect(getter);
  effect.scheduler = scheduler ? () => scheduler(job, false) : job;
  boundCleanup = fn => onWatcherCleanup(fn, false, effect);
  cleanup = effect.onStop = () => {
    const cleanups = cleanupMap.get(effect);
    if (cleanups) {
      if (call) {
        call(cleanups, 4);
      } else {
        for (const cleanup2 of cleanups) cleanup2();
      }
      cleanupMap.delete(effect);
    }
  };
  if (false) {}
  if (cb) {
    if (immediate) {
      job(true);
    } else {
      oldValue = effect.run();
    }
  } else if (scheduler) {
    scheduler(job.bind(null, true), true);
  } else {
    effect.run();
  }
  watchHandle.pause = effect.pause.bind(effect);
  watchHandle.resume = effect.resume.bind(effect);
  watchHandle.stop = watchHandle;
  return watchHandle;
}
function traverse(value, depth = Infinity, seen) {
  if (depth <= 0 || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isObject */ .Gv)(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  depth--;
  if (isRef(value)) {
    traverse(value.value, depth, seen);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isArray */ .cy)(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], depth, seen);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isSet */ .vM)(value) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isMap */ .CE)(value)) {
    value.forEach(v => {
      traverse(v, depth, seen);
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_17__/* .isPlainObject */ .Qd)(value)) {
    for (const key in value) {
      traverse(value[key], depth, seen);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
      if (Object.prototype.propertyIsEnumerable.call(value, key)) {
        traverse(value[key], depth, seen);
      }
    }
  }
  return value;
}


/***/ }),

/***/ 6768:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $u: function() { return /* binding */ onUpdated; },
/* harmony export */   CE: function() { return /* binding */ createElementBlock; },
/* harmony export */   Df: function() { return /* binding */ getTransitionRawChildren; },
/* harmony export */   EW: function() { return /* binding */ computed; },
/* harmony export */   EY: function() { return /* binding */ Text; },
/* harmony export */   FK: function() { return /* binding */ Fragment; },
/* harmony export */   Fv: function() { return /* binding */ createStaticVNode; },
/* harmony export */   Gy: function() { return /* binding */ useTransitionState; },
/* harmony export */   K9: function() { return /* binding */ createRenderer; },
/* harmony export */   Lk: function() { return /* binding */ createBaseVNode; },
/* harmony export */   MZ: function() { return /* binding */ setTransitionHooks; },
/* harmony export */   OW: function() { return /* binding */ resolveTransitionHooks; },
/* harmony export */   Q3: function() { return /* binding */ createCommentVNode; },
/* harmony export */   QP: function() { return /* binding */ BaseTransitionPropsValidators; },
/* harmony export */   WQ: function() { return /* binding */ inject; },
/* harmony export */   bF: function() { return /* binding */ createVNode; },
/* harmony export */   bo: function() { return /* binding */ withDirectives; },
/* harmony export */   dY: function() { return /* binding */ nextTick; },
/* harmony export */   eW: function() { return /* binding */ createTextVNode; },
/* harmony export */   g2: function() { return /* binding */ resolveComponent; },
/* harmony export */   h: function() { return /* binding */ h; },
/* harmony export */   hi: function() { return /* binding */ onUnmounted; },
/* harmony export */   nI: function() { return /* binding */ getCurrentInstance; },
/* harmony export */   pI: function() { return /* binding */ renderList; },
/* harmony export */   pM: function() { return /* binding */ defineComponent; },
/* harmony export */   qL: function() { return /* binding */ callWithAsyncErrorHandling; },
/* harmony export */   sV: function() { return /* binding */ onMounted; },
/* harmony export */   uX: function() { return /* binding */ openBlock; },
/* harmony export */   wB: function() { return /* binding */ watch; }
/* harmony export */ });
/* unused harmony exports BaseTransition, Comment, DeprecationTypes, ErrorCodes, ErrorTypeStrings, KeepAlive, Static, Suspense, Teleport, assertNumber, callWithErrorHandling, cloneVNode, compatUtils, createBlock, createHydrationRenderer, createPropsRestProxy, createSlots, defineAsyncComponent, defineEmits, defineExpose, defineModel, defineOptions, defineProps, defineSlots, devtools, guardReactiveProps, handleError, hasInjectionContext, hydrateOnIdle, hydrateOnInteraction, hydrateOnMediaQuery, hydrateOnVisible, initCustomFormatter, isMemoSame, isRuntimeOnly, isVNode, mergeDefaults, mergeModels, mergeProps, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onRenderTracked, onRenderTriggered, onServerPrefetch, popScopeId, provide, pushScopeId, queuePostFlushCb, registerRuntimeCompiler, renderSlot, resolveDirective, resolveDynamicComponent, resolveFilter, setBlockTracking, setDevtoolsHook, ssrContextKey, ssrUtils, toHandlers, transformVNodeArgs, useAttrs, useId, useModel, useSSRContext, useSlots, useTemplateRef, version, warn, watchEffect, watchPostEffect, watchSyncEffect, withAsyncContext, withCtx, withDefaults, withMemo, withScopeId */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4114);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9479);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7642);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8004);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3853);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5876);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2475);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5024);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1698);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8992);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_iterator_every_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3215);
/* harmony import */ var core_js_modules_esnext_iterator_every_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_every_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4520);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3949);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1454);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8872);
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7550);
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(144);
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4232);
















/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/




const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
let isWarning = false;
function warn$1(msg, ...args) {
  if (isWarning) return;
  isWarning = true;
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11, [
    // eslint-disable-next-line no-restricted-syntax
    msg + args.map(a => {
      var _a, _b;
      return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
    }).join(""), instance && instance.proxy, trace.map(({
      vnode
    }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"), trace]);
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length &&
    // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
  isWarning = false;
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...(i === 0 ? [] : [`
`]), ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({
  vnode,
  recurseCount
}) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach(key => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
function assertNumber(val, type) {
  if (true) return;
  if (val === void 0) {
    return;
  } else if (typeof val !== "number") {
    warn$1(`${type} is not a valid number - got ${JSON.stringify(val)}.`);
  } else if (isNaN(val)) {
    warn$1(`${type} is NaN - the duration expression might be incorrect.`);
  }
}
const ErrorCodes = {
  "SETUP_FUNCTION": 0,
  "0": "SETUP_FUNCTION",
  "RENDER_FUNCTION": 1,
  "1": "RENDER_FUNCTION",
  "NATIVE_EVENT_HANDLER": 5,
  "5": "NATIVE_EVENT_HANDLER",
  "COMPONENT_EVENT_HANDLER": 6,
  "6": "COMPONENT_EVENT_HANDLER",
  "VNODE_HOOK": 7,
  "7": "VNODE_HOOK",
  "DIRECTIVE_HOOK": 8,
  "8": "DIRECTIVE_HOOK",
  "TRANSITION_HOOK": 9,
  "9": "TRANSITION_HOOK",
  "APP_ERROR_HANDLER": 10,
  "10": "APP_ERROR_HANDLER",
  "APP_WARN_HANDLER": 11,
  "11": "APP_WARN_HANDLER",
  "FUNCTION_REF": 12,
  "12": "FUNCTION_REF",
  "ASYNC_COMPONENT_LOADER": 13,
  "13": "ASYNC_COMPONENT_LOADER",
  "SCHEDULER": 14,
  "14": "SCHEDULER",
  "COMPONENT_UPDATE": 15,
  "15": "COMPONENT_UPDATE",
  "APP_UNMOUNT_CLEANUP": 16,
  "16": "APP_UNMOUNT_CLEANUP"
};
const ErrorTypeStrings$1 = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush",
  [15]: "component update",
  [16]: "app unmount cleanup function"
};
function callWithErrorHandling(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isPromise */ .yL)(res)) {
      res.catch(err => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(fn)) {
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
  } else if (false) {}
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  const {
    errorHandler,
    throwUnhandledErrorInProduction
  } = instance && instance.appContext.config || _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo =  false ? 0 : `https://vuejs.org/error-reference/#runtime-${type}`;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    if (errorHandler) {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .pauseTracking */ .C4)();
      callWithErrorHandling(errorHandler, null, 10, [err, exposedInstance, errorInfo]);
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .resetTracking */ .bl)();
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
  if (false) {} else if (throwInProd) {
    throw err;
  } else {
    console.error(err);
  }
}
const queue = [];
let flushIndex = -1;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
  const p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.flags & 2) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!(job.flags & 1)) {
    const jobId = getId(job);
    const lastJob = queue[queue.length - 1];
    if (!lastJob ||
    // fast path when the job id is larger than the tail
    !(job.flags & 2) && jobId >= getId(lastJob)) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(jobId), 0, job);
    }
    job.flags |= 1;
    queueFlush();
  }
}
function queueFlush() {
  if (!currentFlushPromise) {
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function queuePostFlushCb(cb) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(cb)) {
    if (activePostFlushCbs && cb.id === -1) {
      activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
    } else if (!(cb.flags & 1)) {
      pendingPostFlushCbs.push(cb);
      cb.flags |= 1;
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen, i = flushIndex + 1) {
  if (false) {}
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.flags & 2) {
      if (instance && cb.id !== instance.uid) {
        continue;
      }
      if (false) {}
      queue.splice(i, 1);
      i--;
      if (cb.flags & 4) {
        cb.flags &= ~1;
      }
      cb();
      if (!(cb.flags & 4)) {
        cb.flags &= ~1;
      }
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort((a, b) => getId(a) - getId(b));
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    if (false) {}
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      const cb = activePostFlushCbs[postFlushIndex];
      if (false) {}
      if (cb.flags & 4) {
        cb.flags &= ~1;
      }
      if (!(cb.flags & 8)) cb();
      cb.flags &= ~1;
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = job => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen) {
  if (false) {}
  const check =  false ? 0 : _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .NOOP */ .tE;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && !(job.flags & 8)) {
        if (false) {}
        if (job.flags & 4) {
          job.flags &= ~1;
        }
        callWithErrorHandling(job, job.i, job.i ? 15 : 14);
        if (!(job.flags & 4)) {
          job.flags &= ~1;
        }
      }
    }
  } finally {
    for (; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job) {
        job.flags &= ~1;
      }
    }
    flushIndex = -1;
    queue.length = 0;
    flushPostFlushCbs(seen);
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  const count = seen.get(fn) || 0;
  if (count > RECURSION_LIMIT) {
    const instance = fn.i;
    const componentName = instance && getComponentName(instance.type);
    handleError(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10);
    return true;
  }
  seen.set(fn, count + 1);
  return false;
}
let isHmrUpdating = false;
const hmrDirtyComponents = /* @__PURE__ */new Map();
if (false) {}
const map = /* @__PURE__ */new Map();
function registerHMR(instance) {
  const id = instance.type.__hmrId;
  let record = map.get(id);
  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }
  record.instances.add(instance);
}
function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }
  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: /* @__PURE__ */new Set()
  });
  return true;
}
function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
  const record = map.get(id);
  if (!record) {
    return;
  }
  record.initialDef.render = newRender;
  [...record.instances].forEach(instance => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}
function reload(id, newComp) {
  const record = map.get(id);
  if (!record) return;
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  const instances = [...record.instances];
  for (let i = 0; i < instances.length; i++) {
    const instance = instances[i];
    const oldComp = normalizeClassComponent(instance.type);
    let dirtyInstances = hmrDirtyComponents.get(oldComp);
    if (!dirtyInstances) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }
      hmrDirtyComponents.set(oldComp, dirtyInstances = /* @__PURE__ */new Set());
    }
    dirtyInstances.add(instance);
    instance.appContext.propsCache.delete(instance.type);
    instance.appContext.emitsCache.delete(instance.type);
    instance.appContext.optionsCache.delete(instance.type);
    if (instance.ceReload) {
      dirtyInstances.add(instance);
      instance.ceReload(newComp.styles);
      dirtyInstances.delete(instance);
    } else if (instance.parent) {
      queueJob(() => {
        isHmrUpdating = true;
        instance.parent.update();
        isHmrUpdating = false;
        dirtyInstances.delete(instance);
      });
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
    if (instance.root.ce && instance !== instance.root) {
      instance.root.ce._removeChildStyle(oldComp);
    }
  }
  queuePostFlushCb(() => {
    hmrDirtyComponents.clear();
  });
}
function updateComponentDef(oldComp, newComp) {
  extend(oldComp, newComp);
  for (const key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}
function tryWrap(fn) {
  return (id, arg) => {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
    }
  };
}
let devtools$1;
let buffer = (/* unused pure expression or super */ null && ([]));
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
  if (devtools$1) {
    devtools$1.emit(event, ...args);
  } else if (!devtoolsNotInstalled) {
    buffer.push({
      event,
      args
    });
  }
}
function setDevtoolsHook$1(hook, target) {
  var _a, _b;
  devtools$1 = hook;
  if (devtools$1) {
    devtools$1.enabled = true;
    buffer.forEach(({
      event,
      args
    }) => devtools$1.emit(event, ...args));
    buffer = [];
  } else if (
  // handle late devtools injection - only do this if we are in an actual
  // browser environment to avoid the timer handle stalling test runner exit
  // (#4815)
  typeof window !== "undefined" &&
  // some envs mock window but not fully
  window.HTMLElement &&
  // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push(newHook => {
      setDevtoolsHook$1(newHook, target);
    });
    setTimeout(() => {
      if (!devtools$1) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3e3);
  } else {
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app, version) {
  emit$1("app:init" /* APP_INIT */, app, version, {
    Fragment,
    Text,
    Comment,
    Static
  });
}
function devtoolsUnmountApp(app) {
  emit$1("app:unmount" /* APP_UNMOUNT */, app);
}
const devtoolsComponentAdded = /* @__PURE__ */(/* unused pure expression or super */ null && (createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */)));
const devtoolsComponentUpdated = /* @__PURE__ */(/* unused pure expression or super */ null && (createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */)));
const _devtoolsComponentRemoved = /* @__PURE__ */(/* unused pure expression or super */ null && (createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */)));
const devtoolsComponentRemoved = component => {
  if (devtools$1 && typeof devtools$1.cleanupBuffer === "function" &&
  // remove the component if it wasn't buffered
  !devtools$1.cleanupBuffer(component)) {
    _devtoolsComponentRemoved(component);
  }
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function createDevtoolsComponentHook(hook) {
  return component => {
    emit$1(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
  };
}
const devtoolsPerfStart = /* @__PURE__ */(/* unused pure expression or super */ null && (createDevtoolsPerformanceHook("perf:start" /* PERFORMANCE_START */)));
const devtoolsPerfEnd = /* @__PURE__ */(/* unused pure expression or super */ null && (createDevtoolsPerformanceHook("perf:end" /* PERFORMANCE_END */)));
function createDevtoolsPerformanceHook(hook) {
  return (component, type, time) => {
    emit$1(hook, component.appContext.app, component.uid, component, type, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit$1("component:emit" /* COMPONENT_EMIT */, component.appContext.app, component, event, params);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function pushScopeId(id) {
  currentScopeId = id;
}
function popScopeId() {
  currentScopeId = null;
}
const withScopeId = _id => withCtx;
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx) return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    if (false) {}
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn$1("Do not use built-in directive ids as custom directive id: " + name);
  }
}
function withDirectives(vnode, directives) {
  if (currentRenderingInstance === null) {
     false && 0;
    return vnode;
  }
  const instance = getComponentPublicInstance(currentRenderingInstance);
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ] = directives[i];
    if (dir) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .traverse */ .hV)(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .pauseTracking */ .C4)();
      callWithAsyncErrorHandling(hook, instance, 8, [vnode.el, binding, vnode, prevVNode]);
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .resetTracking */ .bl)();
    }
  }
}
const TeleportEndKey = Symbol("_vte");
const isTeleport = type => type.__isTeleport;
const isTeleportDisabled = props => props && (props.disabled || props.disabled === "");
const isTeleportDeferred = props => props && (props.defer || props.defer === "");
const isTargetSVG = target => typeof SVGElement !== "undefined" && target instanceof SVGElement;
const isTargetMathML = target => typeof MathMLElement === "function" && target instanceof MathMLElement;
const resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isString */ .Kg)(targetSelector)) {
    if (!select) {
       false && 0;
      return null;
    } else {
      const target = select(targetSelector);
      if (false) {}
      return target;
    }
  } else {
    if (false) {}
    return targetSelector;
  }
};
const TeleportImpl = {
  name: "Teleport",
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
    const {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: {
        insert,
        querySelector,
        createText,
        createComment
      }
    } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let {
      shapeFlag,
      children,
      dynamicChildren
    } = n2;
    if (false) {}
    if (n1 == null) {
      const placeholder = n2.el =  false ? 0 : createText("");
      const mainAnchor = n2.anchor =  false ? 0 : createText("");
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          if (parentComponent && parentComponent.isCE) {
            parentComponent.ce._teleportTarget = container2;
          }
          mountChildren(children, container2, anchor2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
      };
      const mountToTarget = () => {
        const target = n2.target = resolveTarget(n2.props, querySelector);
        const targetAnchor = prepareAnchor(target, n2, createText, insert);
        if (target) {
          if (namespace !== "svg" && isTargetSVG(target)) {
            namespace = "svg";
          } else if (namespace !== "mathml" && isTargetMathML(target)) {
            namespace = "mathml";
          }
          if (!disabled) {
            mount(target, targetAnchor);
            updateCssVars(n2, false);
          }
        } else if (false) {}
      };
      if (disabled) {
        mount(container, mainAnchor);
        updateCssVars(n2, true);
      }
      if (isTeleportDeferred(n2.props)) {
        queuePostRenderEffect(() => {
          mountToTarget();
          n2.el.__isMounted = true;
        }, parentSuspense);
      } else {
        mountToTarget();
      }
    } else {
      if (isTeleportDeferred(n2.props) && !n1.el.__isMounted) {
        queuePostRenderEffect(() => {
          TeleportImpl.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
          delete n1.el.__isMounted;
        }, parentSuspense);
        return;
      }
      n2.el = n1.el;
      n2.targetStart = n1.targetStart;
      const mainAnchor = n2.anchor = n1.anchor;
      const target = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      if (namespace === "svg" || isTargetSVG(target)) {
        namespace = "svg";
      } else if (namespace === "mathml" || isTargetMathML(target)) {
        namespace = "mathml";
      }
      if (dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, namespace, slotScopeIds);
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, false);
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(n2, container, mainAnchor, internals, 1);
        } else {
          if (n2.props && n1.props && n2.props.to !== n1.props.to) {
            n2.props.to = n1.props.to;
          }
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
          if (nextTarget) {
            moveTeleport(n2, nextTarget, null, internals, 0);
          } else if (false) {}
        } else if (wasDisabled) {
          moveTeleport(n2, target, targetAnchor, internals, 1);
        }
      }
      updateCssVars(n2, disabled);
    }
  },
  remove(vnode, parentComponent, parentSuspense, {
    um: unmount,
    o: {
      remove: hostRemove
    }
  }, doRemove) {
    const {
      shapeFlag,
      children,
      anchor,
      targetStart,
      targetAnchor,
      target,
      props
    } = vnode;
    if (target) {
      hostRemove(targetStart);
      hostRemove(targetAnchor);
    }
    doRemove && hostRemove(anchor);
    if (shapeFlag & 16) {
      const shouldRemove = doRemove || !isTeleportDisabled(props);
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        unmount(child, parentComponent, parentSuspense, shouldRemove, !!child.dynamicChildren);
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, {
  o: {
    insert
  },
  m: move
}, moveType = 2) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const {
    el,
    anchor,
    shapeFlag,
    children,
    props
  } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props)) {
    if (shapeFlag & 16) {
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, parentAnchor, 2);
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
  o: {
    nextSibling,
    parentNode,
    querySelector,
    insert,
    createText
  }
}, hydrateChildren) {
  const target = vnode.target = resolveTarget(vnode.props, querySelector);
  if (target) {
    const disabled = isTeleportDisabled(vnode.props);
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (disabled) {
        vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
        vnode.targetStart = targetNode;
        vnode.targetAnchor = targetNode && nextSibling(targetNode);
      } else {
        vnode.anchor = nextSibling(node);
        let targetAnchor = targetNode;
        while (targetAnchor) {
          if (targetAnchor && targetAnchor.nodeType === 8) {
            if (targetAnchor.data === "teleport start anchor") {
              vnode.targetStart = targetAnchor;
            } else if (targetAnchor.data === "teleport anchor") {
              vnode.targetAnchor = targetAnchor;
              target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
              break;
            }
          }
          targetAnchor = nextSibling(targetAnchor);
        }
        if (!vnode.targetAnchor) {
          prepareAnchor(target, vnode, createText, insert);
        }
        hydrateChildren(targetNode && nextSibling(targetNode), vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
      }
    }
    updateCssVars(vnode, disabled);
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = (/* unused pure expression or super */ null && (TeleportImpl));
function updateCssVars(vnode, isDisabled) {
  const ctx = vnode.ctx;
  if (ctx && ctx.ut) {
    let node, anchor;
    if (isDisabled) {
      node = vnode.el;
      anchor = vnode.anchor;
    } else {
      node = vnode.targetStart;
      anchor = vnode.targetAnchor;
    }
    while (node && node !== anchor) {
      if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
      node = node.nextSibling;
    }
    ctx.ut();
  }
}
function prepareAnchor(target, vnode, createText, insert) {
  const targetStart = vnode.targetStart = createText("");
  const targetAnchor = vnode.targetAnchor = createText("");
  targetStart[TeleportEndKey] = targetAnchor;
  if (target) {
    insert(targetStart, target);
    insert(targetAnchor, target);
  }
  return targetAnchor;
}
const leaveCbKey = Symbol("_leaveCb");
const enterCbKey = Symbol("_enterCb");
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionPropsValidators = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: TransitionHookValidator,
  onEnter: TransitionHookValidator,
  onAfterEnter: TransitionHookValidator,
  onEnterCancelled: TransitionHookValidator,
  // leave
  onBeforeLeave: TransitionHookValidator,
  onLeave: TransitionHookValidator,
  onAfterLeave: TransitionHookValidator,
  onLeaveCancelled: TransitionHookValidator,
  // appear
  onBeforeAppear: TransitionHookValidator,
  onAppear: TransitionHookValidator,
  onAfterAppear: TransitionHookValidator,
  onAppearCancelled: TransitionHookValidator
};
const recursiveGetSubtree = instance => {
  const subTree = instance.subTree;
  return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: BaseTransitionPropsValidators,
  setup(props, {
    slots
  }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      const child = findNonCommentChild(children);
      const rawProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .toRaw */ .ux)(props);
      const {
        mode
      } = rawProps;
      if (false) {}
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getInnerChild$1(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      let enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance,
      // #11061, ensure enterHooks is fresh after clone
      hooks => enterHooks = hooks);
      if (innerChild.type !== Comment) {
        setTransitionHooks(innerChild, enterHooks);
      }
      let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
      if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(innerChild, oldInnerChild) && recursiveGetSubtree(instance).type !== Comment) {
        let leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in" && innerChild.type !== Comment) {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            if (!(instance.job.flags & 8)) {
              instance.update();
            }
            delete leavingHooks.afterLeave;
            oldInnerChild = void 0;
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el[leaveCbKey] = () => {
              earlyRemove();
              el[leaveCbKey] = void 0;
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
            enterHooks.delayedLeave = () => {
              delayedLeave();
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
          };
        } else {
          oldInnerChild = void 0;
        }
      } else if (oldInnerChild) {
        oldInnerChild = void 0;
      }
      return child;
    };
  }
};
function findNonCommentChild(children) {
  let child = children[0];
  if (children.length > 1) {
    let hasFound = false;
    for (const c of children) {
      if (c.type !== Comment) {
        if (false) {}
        child = c;
        hasFound = true;
        if (true) break;
      }
    }
  }
  return child;
}
const BaseTransition = (/* unused pure expression or super */ null && (BaseTransitionImpl));
function getLeavingNodesForType(state, vnode) {
  const {
    leavingVNodes
  } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance, postClone) {
  const {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook = (hook, args) => {
    hook && callWithAsyncErrorHandling(hook, instance, 9, args);
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook(hook, args);
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(hook)) {
      if (hook.every(hook2 => hook2.length <= 1)) done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el[leaveCbKey]) {
        el[leaveCbKey](true
        /* cancelled */);
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
        leavingVNode.el[leaveCbKey]();
      }
      callHook(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el[enterCbKey] = cancelled => {
        if (called) return;
        called = true;
        if (cancelled) {
          callHook(cancelHook, [el]);
        } else {
          callHook(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el[enterCbKey] = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove) {
      const key2 = String(vnode.key);
      if (el[enterCbKey]) {
        el[enterCbKey](true
        /* cancelled */);
      }
      if (state.isUnmounting) {
        return remove();
      }
      callHook(onBeforeLeave, [el]);
      let called = false;
      const done = el[leaveCbKey] = cancelled => {
        if (called) return;
        called = true;
        remove();
        if (cancelled) {
          callHook(onLeaveCancelled, [el]);
        } else {
          callHook(onAfterLeave, [el]);
        }
        el[leaveCbKey] = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      const hooks2 = resolveTransitionHooks(vnode2, props, state, instance, postClone);
      if (postClone) postClone(hooks2);
      return hooks2;
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getInnerChild$1(vnode) {
  if (!isKeepAlive(vnode)) {
    if (isTeleport(vnode.type) && vnode.children) {
      return findNonCommentChild(vnode.children);
    }
    return vnode;
  }
  if (false) {}
  const {
    shapeFlag,
    children
  } = vnode;
  if (children) {
    if (shapeFlag & 16) {
      return children[0];
    }
    if (shapeFlag & 32 && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(children.default)) {
      return children.default();
    }
  }
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    vnode.transition = hooks;
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128) keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, {
        key
      }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}

/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(options) ?
  // #8236: extend call and options.name access are considered side-effects
  // by Rollup, so we have to wrap it in a pure-annotated IIFE.
  /* @__PURE__ */
  (() => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .extend */ .X$)({
    name: options.name
  }, extraOptions, {
    setup: options
  }))() : options;
}
function useId() {
  const i = getCurrentInstance();
  if (i) {
    return (i.appContext.config.idPrefix || "v") + "-" + i.ids[0] + i.ids[1]++;
  } else if (false) {}
  return "";
}
function markAsyncBoundary(instance) {
  instance.ids = [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
}
const knownTemplateRefs = /* @__PURE__ */new WeakSet();
function useTemplateRef(key) {
  const i = getCurrentInstance();
  const r = shallowRef(null);
  if (i) {
    const refs = i.refs === EMPTY_OBJ ? i.refs = {} : i.refs;
    let desc;
    if (false) {} else {
      Object.defineProperty(refs, key, {
        enumerable: true,
        get: () => r.value,
        set: val => r.value = val
      });
    }
  } else if (false) {}
  const ret =  false ? 0 : r;
  if (false) {}
  return ret;
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(rawRef)) {
    rawRef.forEach((r, i) => setRef(r, oldRawRef && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) {
      setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
    }
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
  const value = isUnmount ? null : refValue;
  const {
    i: owner,
    r: ref
  } = rawRef;
  if (false) {}
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  const rawSetupState = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .toRaw */ .ux)(setupState);
  const canSetSetupRef = setupState === _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ ? () => false : key => {
    if (false) {}
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(rawSetupState, key);
  };
  if (oldRef != null && oldRef !== ref) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isString */ .Kg)(oldRef)) {
      refs[oldRef] = null;
      if (canSetSetupRef(oldRef)) {
        setupState[oldRef] = null;
      }
    } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .isRef */ .i9)(oldRef)) {
      oldRef.value = null;
    }
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(ref)) {
    callWithErrorHandling(ref, owner, 12, [value, refs]);
  } else {
    const _isString = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isString */ .Kg)(ref);
    const _isRef = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .isRef */ .i9)(ref);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? canSetSetupRef(ref) ? setupState[ref] : refs[ref] : ref.value;
          if (isUnmount) {
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(existing) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .remove */ .TF)(existing, refValue);
          } else {
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(existing)) {
              if (_isString) {
                refs[ref] = [refValue];
                if (canSetSetupRef(ref)) {
                  setupState[ref] = refs[ref];
                }
              } else {
                ref.value = [refValue];
                if (rawRef.k) refs[rawRef.k] = ref.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref] = value;
          if (canSetSetupRef(ref)) {
            setupState[ref] = value;
          }
        } else if (_isRef) {
          ref.value = value;
          if (rawRef.k) refs[rawRef.k] = value;
        } else if (false) {}
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else if (false) {}
  }
}
let hasLoggedMismatchError = false;
const logMismatchError = () => {
  if (hasLoggedMismatchError) {
    return;
  }
  console.error("Hydration completed but contains mismatches.");
  hasLoggedMismatchError = true;
};
const isSVGContainer = container => container.namespaceURI.includes("svg") && container.tagName !== "foreignObject";
const isMathMLContainer = container => container.namespaceURI.includes("MathML");
const getContainerType = container => {
  if (container.nodeType !== 1) return void 0;
  if (isSVGContainer(container)) return "svg";
  if (isMathMLContainer(container)) return "mathml";
  return void 0;
};
const isComment = node => node.nodeType === 8;
function createHydrationFunctions(rendererInternals) {
  const {
    mt: mountComponent,
    p: patch,
    o: {
      patchProp,
      createText,
      nextSibling,
      parentNode,
      remove,
      insert,
      createComment
    }
  } = rendererInternals;
  const hydrate = (vnode, container) => {
    if (!container.hasChildNodes()) {
      ( false || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__) && warn$1(`Attempting to hydrate existing markup but container is empty. Performing full mount instead.`);
      patch(null, vnode, container);
      flushPostFlushCbs();
      container._vnode = vnode;
      return;
    }
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const isFragmentStart = isComment(node) && node.data === "[";
    const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
    const {
      type,
      ref,
      shapeFlag,
      patchFlag
    } = vnode;
    let domType = node.nodeType;
    vnode.el = node;
    if (false) {}
    if (patchFlag === -2) {
      optimized = false;
      vnode.dynamicChildren = null;
    }
    let nextNode = null;
    switch (type) {
      case Text:
        if (domType !== 3) {
          if (vnode.children === "") {
            insert(vnode.el = createText(""), parentNode(node), node);
            nextNode = node;
          } else {
            nextNode = onMismatch();
          }
        } else {
          if (node.data !== vnode.children) {
            ( false || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__) && warn$1(`Hydration text mismatch in`, node.parentNode, `
  - rendered on server: ${JSON.stringify(node.data)}
  - expected on client: ${JSON.stringify(vnode.children)}`);
            logMismatchError();
            node.data = vnode.children;
          }
          nextNode = nextSibling(node);
        }
        break;
      case Comment:
        if (isTemplateNode(node)) {
          nextNode = nextSibling(node);
          replaceNode(vnode.el = node.content.firstChild, node, parentComponent);
        } else if (domType !== 8 || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }
        break;
      case Static:
        if (isFragmentStart) {
          node = nextSibling(node);
          domType = node.nodeType;
        }
        if (domType === 1 || domType === 3) {
          nextNode = node;
          const needToAdoptContent = !vnode.children.length;
          for (let i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent) vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }
            nextNode = nextSibling(nextNode);
          }
          return isFragmentStart ? nextSibling(nextNode) : nextNode;
        } else {
          onMismatch();
        }
        break;
      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
        }
        break;
      default:
        if (shapeFlag & 1) {
          if ((domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode(node)) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
          }
        } else if (shapeFlag & 6) {
          vnode.slotScopeIds = slotScopeIds;
          const container = parentNode(node);
          if (isFragmentStart) {
            nextNode = locateClosingAnchor(node);
          } else if (isComment(node) && node.data === "teleport start") {
            nextNode = locateClosingAnchor(node, node.data, "teleport end");
          } else {
            nextNode = nextSibling(node);
          }
          mountComponent(vnode, container, null, parentComponent, parentSuspense, getContainerType(container), optimized);
          if (isAsyncWrapper(vnode) && !vnode.type.__asyncResolved) {
            let subTree;
            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
            }
            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64) {
          if (domType !== 8) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
          }
        } else if (shapeFlag & 128) {
          nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, getContainerType(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
        } else if ( false || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__) {
          warn$1("Invalid HostVNode type:", type, `(${typeof type})`);
        }
    }
    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode);
    }
    return nextNode;
  };
  const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const {
      type,
      props,
      patchFlag,
      shapeFlag,
      dirs,
      transition
    } = vnode;
    const forcePatch = type === "input" || type === "option";
    if ( false || forcePatch || patchFlag !== -1) {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      let needCallTransitionHooks = false;
      if (isTemplateNode(el)) {
        needCallTransitionHooks = needTransition(null,
        // no need check parentSuspense in hydration
        transition) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
        const content = el.content.firstChild;
        if (needCallTransitionHooks) {
          transition.beforeEnter(content);
        }
        replaceNode(content, el, parentComponent);
        vnode.el = el = content;
      }
      if (shapeFlag & 16 &&
      // skip if element has innerHTML / textContent
      !(props && (props.innerHTML || props.textContent))) {
        let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
        let hasWarned = false;
        while (next) {
          if (!isMismatchAllowed(el, 1 /* CHILDREN */)) {
            if (( false || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__) && !hasWarned) {
              warn$1(`Hydration children mismatch on`, el, `
Server rendered element contains more child nodes than client vdom.`);
              hasWarned = true;
            }
            logMismatchError();
          }
          const cur = next;
          next = next.nextSibling;
          remove(cur);
        }
      } else if (shapeFlag & 8) {
        let clientText = vnode.children;
        if (clientText[0] === "\n" && (el.tagName === "PRE" || el.tagName === "TEXTAREA")) {
          clientText = clientText.slice(1);
        }
        if (el.textContent !== clientText) {
          if (!isMismatchAllowed(el, 0 /* TEXT */)) {
            ( false || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__) && warn$1(`Hydration text content mismatch on`, el, `
  - rendered on server: ${el.textContent}
  - expected on client: ${vnode.children}`);
            logMismatchError();
          }
          el.textContent = vnode.children;
        }
      }
      if (props) {
        if ( false || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ || forcePatch || !optimized || patchFlag & (16 | 32)) {
          const isCustomElement = el.tagName.includes("-");
          for (const key in props) {
            if (( false || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__) &&
            // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(dirs && dirs.some(d => d.dir.created)) && propHasMismatch(el, key, props[key], vnode, parentComponent)) {
              logMismatchError();
            }
            if (forcePatch && (key.endsWith("value") || key === "indeterminate") || isOn(key) && !isReservedProp(key) ||
            // force hydrate v-bind with .prop modifiers
            key[0] === "." || isCustomElement) {
              patchProp(el, key, null, props[key], void 0, parentComponent);
            }
          }
        } else if (props.onClick) {
          patchProp(el, "onClick", null, props.onClick, void 0, parentComponent);
        } else if (patchFlag & 4 && isReactive(props.style)) {
          for (const key in props.style) props.style[key];
        }
      }
      let vnodeHooks;
      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) {
        queueEffectWithSuspense(() => {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    }
    return el.nextSibling;
  };
  const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!parentVNode.dynamicChildren;
    const children = parentVNode.children;
    const l = children.length;
    let hasWarned = false;
    for (let i = 0; i < l; i++) {
      const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
      const isText = vnode.type === Text;
      if (node) {
        if (isText && !optimized) {
          if (i + 1 < l && normalizeVNode(children[i + 1]).type === Text) {
            insert(createText(node.data.slice(vnode.children.length)), container, nextSibling(node));
            node.data = vnode.children;
          }
        }
        node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
      } else if (isText && !vnode.children) {
        insert(vnode.el = createText(""), container);
      } else {
        if (!isMismatchAllowed(container, 1 /* CHILDREN */)) {
          if (( false || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__) && !hasWarned) {
            warn$1(`Hydration children mismatch on`, container, `
Server rendered element contains fewer child nodes than client vdom.`);
            hasWarned = true;
          }
          logMismatchError();
        }
        patch(null, vnode, container, null, parentComponent, parentSuspense, getContainerType(container), slotScopeIds);
      }
    }
    return node;
  };
  const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    const {
      slotScopeIds: fragmentSlotScopeIds
    } = vnode;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    const container = parentNode(node);
    const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
    if (next && isComment(next) && next.data === "]") {
      return nextSibling(vnode.anchor = next);
    } else {
      logMismatchError();
      insert(vnode.anchor = createComment(`]`), container, next);
      return next;
    }
  };
  const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
    if (!isMismatchAllowed(node.parentElement, 1 /* CHILDREN */)) {
      ( false || __VUE_PROD_HYDRATION_MISMATCH_DETAILS__) && warn$1(`Hydration node mismatch:
- rendered on server:`, node, node.nodeType === 3 ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``, `
- expected on client:`, vnode.type);
      logMismatchError();
    }
    vnode.el = null;
    if (isFragment) {
      const end = locateClosingAnchor(node);
      while (true) {
        const next2 = nextSibling(node);
        if (next2 && next2 !== end) {
          remove(next2);
        } else {
          break;
        }
      }
    }
    const next = nextSibling(node);
    const container = parentNode(node);
    remove(node);
    patch(null, vnode, container, next, parentComponent, parentSuspense, getContainerType(container), slotScopeIds);
    if (parentComponent) {
      parentComponent.vnode.el = vnode.el;
      updateHOCHostEl(parentComponent, vnode.el);
    }
    return next;
  };
  const locateClosingAnchor = (node, open = "[", close = "]") => {
    let match = 0;
    while (node) {
      node = nextSibling(node);
      if (node && isComment(node)) {
        if (node.data === open) match++;
        if (node.data === close) {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }
    return node;
  };
  const replaceNode = (newNode, oldNode, parentComponent) => {
    const parentNode2 = oldNode.parentNode;
    if (parentNode2) {
      parentNode2.replaceChild(newNode, oldNode);
    }
    let parent = parentComponent;
    while (parent) {
      if (parent.vnode.el === oldNode) {
        parent.vnode.el = parent.subTree.el = newNode;
      }
      parent = parent.parent;
    }
  };
  const isTemplateNode = node => {
    return node.nodeType === 1 && node.tagName === "TEMPLATE";
  };
  return [hydrate, hydrateNode];
}
function propHasMismatch(el, key, clientValue, vnode, instance) {
  let mismatchType;
  let mismatchKey;
  let actual;
  let expected;
  if (key === "class") {
    actual = el.getAttribute("class");
    expected = normalizeClass(clientValue);
    if (!isSetEqual(toClassSet(actual || ""), toClassSet(expected))) {
      mismatchType = 2 /* CLASS */;
      mismatchKey = `class`;
    }
  } else if (key === "style") {
    actual = el.getAttribute("style") || "";
    expected = isString(clientValue) ? clientValue : stringifyStyle(normalizeStyle(clientValue));
    const actualMap = toStyleMap(actual);
    const expectedMap = toStyleMap(expected);
    if (vnode.dirs) {
      for (const {
        dir,
        value
      } of vnode.dirs) {
        if (dir.name === "show" && !value) {
          expectedMap.set("display", "none");
        }
      }
    }
    if (instance) {
      resolveCssVars(instance, vnode, expectedMap);
    }
    if (!isMapEqual(actualMap, expectedMap)) {
      mismatchType = 3 /* STYLE */;
      mismatchKey = "style";
    }
  } else if (el instanceof SVGElement && isKnownSvgAttr(key) || el instanceof HTMLElement && (isBooleanAttr(key) || isKnownHtmlAttr(key))) {
    if (isBooleanAttr(key)) {
      actual = el.hasAttribute(key);
      expected = includeBooleanAttr(clientValue);
    } else if (clientValue == null) {
      actual = el.hasAttribute(key);
      expected = false;
    } else {
      if (el.hasAttribute(key)) {
        actual = el.getAttribute(key);
      } else if (key === "value" && el.tagName === "TEXTAREA") {
        actual = el.value;
      } else {
        actual = false;
      }
      expected = isRenderableAttrValue(clientValue) ? String(clientValue) : false;
    }
    if (actual !== expected) {
      mismatchType = 4 /* ATTRIBUTE */;
      mismatchKey = key;
    }
  }
  if (mismatchType != null && !isMismatchAllowed(el, mismatchType)) {
    const format = v => v === false ? `(not rendered)` : `${mismatchKey}="${v}"`;
    const preSegment = `Hydration ${MismatchTypeString[mismatchType]} mismatch on`;
    const postSegment = `
  - rendered on server: ${format(actual)}
  - expected on client: ${format(expected)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    {
      warn$1(preSegment, el, postSegment);
    }
    return true;
  }
  return false;
}
function toClassSet(str) {
  return new Set(str.trim().split(/\s+/));
}
function isSetEqual(a, b) {
  if (a.size !== b.size) {
    return false;
  }
  for (const s of a) {
    if (!b.has(s)) {
      return false;
    }
  }
  return true;
}
function toStyleMap(str) {
  const styleMap = /* @__PURE__ */new Map();
  for (const item of str.split(";")) {
    let [key, value] = item.split(":");
    key = key.trim();
    value = value && value.trim();
    if (key && value) {
      styleMap.set(key, value);
    }
  }
  return styleMap;
}
function isMapEqual(a, b) {
  if (a.size !== b.size) {
    return false;
  }
  for (const [key, value] of a) {
    if (value !== b.get(key)) {
      return false;
    }
  }
  return true;
}
function resolveCssVars(instance, vnode, expectedMap) {
  const root = instance.subTree;
  if (instance.getCssVars && (vnode === root || root && root.type === Fragment && root.children.includes(vnode))) {
    const cssVars = instance.getCssVars();
    for (const key in cssVars) {
      expectedMap.set(`--${getEscapedCssVarName(key, false)}`, String(cssVars[key]));
    }
  }
  if (vnode === root && instance.parent) {
    resolveCssVars(instance.parent, instance.vnode, expectedMap);
  }
}
const allowMismatchAttr = "data-allow-mismatch";
const MismatchTypeString = {
  [0 /* TEXT */]: "text",
  [1 /* CHILDREN */]: "children",
  [2 /* CLASS */]: "class",
  [3 /* STYLE */]: "style",
  [4 /* ATTRIBUTE */]: "attribute"
};
function isMismatchAllowed(el, allowedType) {
  if (allowedType === 0 /* TEXT */ || allowedType === 1 /* CHILDREN */) {
    while (el && !el.hasAttribute(allowMismatchAttr)) {
      el = el.parentElement;
    }
  }
  const allowedAttr = el && el.getAttribute(allowMismatchAttr);
  if (allowedAttr == null) {
    return false;
  } else if (allowedAttr === "") {
    return true;
  } else {
    const list = allowedAttr.split(",");
    if (allowedType === 0 /* TEXT */ && list.includes("children")) {
      return true;
    }
    return allowedAttr.split(",").includes(MismatchTypeString[allowedType]);
  }
}
const requestIdleCallback = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .getGlobalThis */ .We)().requestIdleCallback || (cb => setTimeout(cb, 1));
const cancelIdleCallback = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .getGlobalThis */ .We)().cancelIdleCallback || (id => clearTimeout(id));
const hydrateOnIdle = (timeout = 1e4) => hydrate => {
  const id = requestIdleCallback(hydrate, {
    timeout
  });
  return () => cancelIdleCallback(id);
};
function elementIsVisibleInViewport(el) {
  const {
    top,
    left,
    bottom,
    right
  } = el.getBoundingClientRect();
  const {
    innerHeight,
    innerWidth
  } = window;
  return (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth);
}
const hydrateOnVisible = opts => (hydrate, forEach) => {
  const ob = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      ob.disconnect();
      hydrate();
      break;
    }
  }, opts);
  forEach(el => {
    if (!(el instanceof Element)) return;
    if (elementIsVisibleInViewport(el)) {
      hydrate();
      ob.disconnect();
      return false;
    }
    ob.observe(el);
  });
  return () => ob.disconnect();
};
const hydrateOnMediaQuery = query => hydrate => {
  if (query) {
    const mql = matchMedia(query);
    if (mql.matches) {
      hydrate();
    } else {
      mql.addEventListener("change", hydrate, {
        once: true
      });
      return () => mql.removeEventListener("change", hydrate);
    }
  }
};
const hydrateOnInteraction = (interactions = []) => (hydrate, forEach) => {
  if (isString(interactions)) interactions = [interactions];
  let hasHydrated = false;
  const doHydrate = e => {
    if (!hasHydrated) {
      hasHydrated = true;
      teardown();
      hydrate();
      e.target.dispatchEvent(new e.constructor(e.type, e));
    }
  };
  const teardown = () => {
    forEach(el => {
      for (const i of interactions) {
        el.removeEventListener(i, doHydrate);
      }
    });
  };
  forEach(el => {
    for (const i of interactions) {
      el.addEventListener(i, doHydrate, {
        once: true
      });
    }
  });
  return teardown;
};
function forEachElement(node, cb) {
  if (isComment(node) && node.data === "[") {
    let depth = 1;
    let next = node.nextSibling;
    while (next) {
      if (next.nodeType === 1) {
        const result = cb(next);
        if (result === false) {
          break;
        }
      } else if (isComment(next)) {
        if (next.data === "]") {
          if (--depth === 0) break;
        } else if (next.data === "[") {
          depth++;
        }
      }
      next = next.nextSibling;
    }
  } else {
    cb(node);
  }
}
const isAsyncWrapper = i => !!i.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineAsyncComponent(source) {
  if (isFunction(source)) {
    source = {
      loader: source
    };
  }
  const {
    loader,
    loadingComponent,
    errorComponent,
    delay = 200,
    hydrate: hydrateStrategy,
    timeout,
    // undefined = never times out
    suspensible = true,
    onError: userOnError
  } = source;
  let pendingRequest = null;
  let resolvedComp;
  let retries = 0;
  const retry = () => {
    retries++;
    pendingRequest = null;
    return load();
  };
  const load = () => {
    let thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch(err => {
      err = err instanceof Error ? err : new Error(String(err));
      if (userOnError) {
        return new Promise((resolve, reject) => {
          const userRetry = () => resolve(retry());
          const userFail = () => reject(err);
          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then(comp => {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if (false) {}
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      if (false) {}
      resolvedComp = comp;
      return comp;
    }));
  };
  return defineComponent({
    name: "AsyncComponentWrapper",
    __asyncLoader: load,
    __asyncHydrate(el, instance, hydrate) {
      const doHydrate = hydrateStrategy ? () => {
        const teardown = hydrateStrategy(hydrate, cb => forEachElement(el, cb));
        if (teardown) {
          (instance.bum || (instance.bum = [])).push(teardown);
        }
      } : hydrate;
      if (resolvedComp) {
        doHydrate();
      } else {
        load().then(() => !instance.isUnmounted && doHydrate());
      }
    },
    get __asyncResolved() {
      return resolvedComp;
    },
    setup() {
      const instance = currentInstance;
      markAsyncBoundary(instance);
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance);
      }
      const onError = err => {
        pendingRequest = null;
        handleError(err, instance, 13, !errorComponent);
      };
      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then(comp => {
          return () => createInnerComp(comp, instance);
        }).catch(err => {
          onError(err);
          return () => errorComponent ? createVNode(errorComponent, {
            error: err
          }) : null;
        });
      }
      const loaded = ref(false);
      const error = ref();
      const delayed = ref(!!delay);
      if (delay) {
        setTimeout(() => {
          delayed.value = false;
        }, delay);
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded.value && !error.value) {
            const err = new Error(`Async component timed out after ${timeout}ms.`);
            onError(err);
            error.value = err;
          }
        }, timeout);
      }
      load().then(() => {
        loaded.value = true;
        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          instance.parent.update();
        }
      }).catch(err => {
        onError(err);
        error.value = err;
      });
      return () => {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}
function createInnerComp(comp, parent) {
  const {
    ref: ref2,
    props,
    children,
    ce
  } = parent.vnode;
  const vnode = createVNode(comp, props, children);
  vnode.ref = ref2;
  vnode.ce = ce;
  delete parent.vnode.ce;
  return vnode;
}
const isKeepAlive = vnode => vnode.type.__isKeepAlive;
const KeepAliveImpl = {
  name: `KeepAlive`,
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(props, {
    slots
  }) {
    const instance = getCurrentInstance();
    const sharedContext = instance.ctx;
    if (!sharedContext.renderer) {
      return () => {
        const children = slots.default && slots.default();
        return children && children.length === 1 ? children[0] : children;
      };
    }
    const cache = /* @__PURE__ */new Map();
    const keys = /* @__PURE__ */new Set();
    let current = null;
    if (false) {}
    const parentSuspense = instance.suspense;
    const {
      renderer: {
        p: patch,
        m: move,
        um: _unmount,
        o: {
          createElement
        }
      }
    } = sharedContext;
    const storageContainer = createElement("div");
    sharedContext.activate = (vnode, container, anchor, namespace, optimized) => {
      const instance2 = vnode.component;
      move(vnode, container, anchor, 0, parentSuspense);
      patch(instance2.vnode, vnode, container, anchor, instance2, parentSuspense, namespace, vnode.slotScopeIds, optimized);
      queuePostRenderEffect(() => {
        instance2.isDeactivated = false;
        if (instance2.a) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .invokeArrayFns */ .DY)(instance2.a);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
      }, parentSuspense);
      if (false) {}
    };
    sharedContext.deactivate = vnode => {
      const instance2 = vnode.component;
      invalidateMount(instance2.m);
      invalidateMount(instance2.a);
      move(vnode, storageContainer, null, 1, parentSuspense);
      queuePostRenderEffect(() => {
        if (instance2.da) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .invokeArrayFns */ .DY)(instance2.da);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
        instance2.isDeactivated = true;
      }, parentSuspense);
      if (false) {}
    };
    function unmount(vnode) {
      resetShapeFlag(vnode);
      _unmount(vnode, instance, parentSuspense, true);
    }
    function pruneCache(filter) {
      cache.forEach((vnode, key) => {
        const name = getComponentName(vnode.type);
        if (name && !filter(name)) {
          pruneCacheEntry(key);
        }
      });
    }
    function pruneCacheEntry(key) {
      const cached = cache.get(key);
      if (cached && (!current || !isSameVNodeType(cached, current))) {
        unmount(cached);
      } else if (current) {
        resetShapeFlag(current);
      }
      cache.delete(key);
      keys.delete(key);
    }
    watch(() => [props.include, props.exclude], ([include, exclude]) => {
      include && pruneCache(name => matches(include, name));
      exclude && pruneCache(name => !matches(exclude, name));
    },
    // prune post-render after `current` has been updated
    {
      flush: "post",
      deep: true
    });
    let pendingCacheKey = null;
    const cacheSubtree = () => {
      if (pendingCacheKey != null) {
        if (isSuspense(instance.subTree.type)) {
          queuePostRenderEffect(() => {
            cache.set(pendingCacheKey, getInnerChild(instance.subTree));
          }, instance.subTree.suspense);
        } else {
          cache.set(pendingCacheKey, getInnerChild(instance.subTree));
        }
      }
    };
    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(() => {
      cache.forEach(cached => {
        const {
          subTree,
          suspense
        } = instance;
        const vnode = getInnerChild(subTree);
        if (cached.type === vnode.type && cached.key === vnode.key) {
          resetShapeFlag(vnode);
          const da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }
        unmount(cached);
      });
    });
    return () => {
      pendingCacheKey = null;
      if (!slots.default) {
        return current = null;
      }
      const children = slots.default();
      const rawVNode = children[0];
      if (children.length > 1) {
        if (false) {}
        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
        current = null;
        return rawVNode;
      }
      let vnode = getInnerChild(rawVNode);
      if (vnode.type === Comment) {
        current = null;
        return vnode;
      }
      const comp = vnode.type;
      const name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
      const {
        include,
        exclude,
        max
      } = props;
      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        vnode.shapeFlag &= ~256;
        current = vnode;
        return rawVNode;
      }
      const key = vnode.key == null ? comp : vnode.key;
      const cachedVNode = cache.get(key);
      if (vnode.el) {
        vnode = cloneVNode(vnode);
        if (rawVNode.shapeFlag & 128) {
          rawVNode.ssContent = vnode;
        }
      }
      pendingCacheKey = key;
      if (cachedVNode) {
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;
        if (vnode.transition) {
          setTransitionHooks(vnode, vnode.transition);
        }
        vnode.shapeFlag |= 512;
        keys.delete(key);
        keys.add(key);
      } else {
        keys.add(key);
        if (max && keys.size > parseInt(max, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      }
      vnode.shapeFlag |= 256;
      current = vnode;
      return isSuspense(rawVNode.type) ? rawVNode : vnode;
    };
  }
};
const KeepAlive = (/* unused pure expression or super */ null && (KeepAliveImpl));
function matches(pattern, name) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(pattern)) {
    return pattern.some(p => matches(p, name));
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isString */ .Kg)(pattern)) {
    return pattern.split(",").includes(name);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isRegExp */ .gd)(pattern)) {
    pattern.lastIndex = 0;
    return pattern.test(name);
  }
  return false;
}
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(type, hook, keepAliveRoot, true
  /* prepend */);
  onUnmounted(() => {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .remove */ .TF)(keepAliveRoot[type], injected);
  }, target);
}
function resetShapeFlag(vnode) {
  vnode.shapeFlag &= ~256;
  vnode.shapeFlag &= ~512;
}
function getInnerChild(vnode) {
  return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .pauseTracking */ .C4)();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      reset();
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .resetTracking */ .bl)();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else if (false) {}
}
const createHook = lifecycle => (hook, target = currentInstance) => {
  if (!isInSSRComponentSetup || lifecycle === "sp") {
    injectHook(lifecycle, (...args) => hook(...args), target);
  }
};
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
const COMPONENTS = "components";
const DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
  if (isString(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(Component, false);
      if (selfName && (selfName === name || selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .camelize */ .PT)(name) || selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .capitalize */ .ZH)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .camelize */ .PT)(name)))) {
        return Component;
      }
    }
    const res =
    // local registration
    // check instance[type] first which is resolved for options API
    resolve(instance[type] || Component[type], name) ||
    // global registration
    resolve(instance.appContext[type], name);
    if (!res && maybeSelfReference) {
      return Component;
    }
    if (false) {}
    return res;
  } else if (false) {}
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .camelize */ .PT)(name)] || registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .capitalize */ .ZH)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .camelize */ .PT)(name))]);
}
function renderList(source, renderItem, cache, index) {
  let ret;
  const cached = cache && cache[index];
  const sourceIsArray = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(source);
  if (sourceIsArray || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isString */ .Kg)(source)) {
    const sourceIsReactiveArray = sourceIsArray && (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .isReactive */ .g8)(source);
    let needsWrap = false;
    if (sourceIsReactiveArray) {
      needsWrap = !(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .isShallow */ .fE)(source);
      source = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .shallowReadArray */ .qA)(source);
    }
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(needsWrap ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .toReactive */ .lJ)(source[i]) : source[i], i, void 0, cached && cached[i]);
    }
  } else if (typeof source === "number") {
    if (false) {}
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isObject */ .Gv)(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index] = ret;
  }
  return ret;
}
function createSlots(slots, dynamicSlots) {
  for (let i = 0; i < dynamicSlots.length; i++) {
    const slot = dynamicSlots[i];
    if (isArray(slot)) {
      for (let j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      slots[slot.name] = slot.key ? (...args) => {
        const res = slot.fn(...args);
        if (res) res.key = slot.key;
        return res;
      } : slot.fn;
    }
  }
  return slots;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.ce || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.ce) {
    if (name !== "default") props.name = name;
    return openBlock(), createBlock(Fragment, null, [createVNode("slot", props, fallback && fallback())], 64);
  }
  let slot = slots[name];
  if (false) {}
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const slotKey = props.key ||
  // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  validSlotContent && validSlotContent.key;
  const rendered = createBlock(Fragment, {
    key: (slotKey && !isSymbol(slotKey) ? slotKey : `_${name}`) + (
    // #7256 force differentiate fallback content from actual content
    !validSlotContent && fallback ? "_fb" : "")
  }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some(child => {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
    return true;
  }) ? vnodes : null;
}
function toHandlers(obj, preserveCaseIfNecessary) {
  const ret = {};
  if (false) {}
  for (const key in obj) {
    ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : toHandlerKey(key)] = obj[key];
  }
  return ret;
}
const getPublicInstance = i => {
  if (!i) return null;
  if (isStatefulComponent(i)) return getComponentPublicInstance(i);
  return getPublicInstance(i.parent);
};
const publicPropertiesMap =
// Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
/* @__PURE__ */
(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .extend */ .X$)(/* @__PURE__ */Object.create(null), {
  $: i => i,
  $el: i => i.vnode.el,
  $data: i => i.data,
  $props: i =>  false ? 0 : i.props,
  $attrs: i =>  false ? 0 : i.attrs,
  $slots: i =>  false ? 0 : i.slots,
  $refs: i =>  false ? 0 : i.refs,
  $parent: i => getPublicInstance(i.parent),
  $root: i => getPublicInstance(i.root),
  $host: i => i.ce,
  $emit: i => i.emit,
  $options: i =>  true ? resolveMergedOptions(i) : 0,
  $forceUpdate: i => i.f || (i.f = () => {
    queueJob(i.update);
  }),
  $nextTick: i => i.n || (i.n = nextTick.bind(i.proxy)),
  $watch: i =>  true ? instanceWatch.bind(i) : 0
});
const isReservedPrefix = key => key === "_" || key === "$";
const hasSetupBinding = (state, key) => state !== _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ && !state.__isScriptSetup && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(state, key);
const PublicInstanceProxyHandlers = {
  get({
    _: instance
  }, key) {
    if (key === "__v_skip") {
      return true;
    }
    const {
      ctx,
      setupState,
      data,
      props,
      accessCache,
      type,
      appContext
    } = instance;
    if (false) {}
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1 /* SETUP */:
            return setupState[key];
          case 2 /* DATA */:
            return data[key];
          case 4 /* CONTEXT */:
            return ctx[key];
          case 3 /* PROPS */:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1 /* SETUP */;
        return setupState[key];
      } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(data, key)) {
        accessCache[key] = 2 /* DATA */;
        return data[key];
      } else if (
      // only cache other properties when instance has declared (thus stable)
      // props
      (normalizedProps = instance.propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(normalizedProps, key)) {
        accessCache[key] = 3 /* PROPS */;
        return props[key];
      } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(ctx, key)) {
        accessCache[key] = 4 /* CONTEXT */;
        return ctx[key];
      } else if ( false || shouldCacheAccess) {
        accessCache[key] = 0 /* OTHER */;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .track */ .u4)(instance.attrs, "get", "");
         false && 0;
      } else if (false) {}
      return publicGetter(instance);
    } else if (
    // css module (injected by vue-loader)
    (cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(ctx, key)) {
      accessCache[key] = 4 /* CONTEXT */;
      return ctx[key];
    } else if (
    // global properties
    globalProperties = appContext.config.globalProperties, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else if (false) {}
  },
  set({
    _: instance
  }, key, value) {
    const {
      data,
      setupState,
      ctx
    } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (false) {} else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(data, key)) {
      data[key] = value;
      return true;
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(instance.props, key)) {
       false && 0;
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
       false && 0;
      return false;
    } else {
      if (false) {} else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: {
      data,
      setupState,
      accessCache,
      ctx,
      appContext,
      propsOptions
    }
  }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(normalizedProps, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(ctx, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(publicPropertiesMap, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
if (false) {}
const RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .extend */ .X$)({}, PublicInstanceProxyHandlers, {
  get(target, key) {
    if (key === Symbol.unscopables) {
      return;
    }
    return PublicInstanceProxyHandlers.get(target, key, target);
  },
  has(_, key) {
    const has = key[0] !== "_" && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isGloballyAllowed */ .BH)(key);
    if (false) {}
    return has;
  }
});
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach(key => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const {
    ctx,
    propsOptions: [propsOptions]
  } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach(key => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const {
    ctx,
    setupState
  } = instance;
  Object.keys(toRaw(setupState)).forEach(key => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn$1(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: NOOP
      });
    }
  });
}
const warnRuntimeUsage = method => warn$1(`${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
function defineProps() {
  if (false) {}
  return null;
}
function defineEmits() {
  if (false) {}
  return null;
}
function defineExpose(exposed) {
  if (false) {}
}
function defineOptions(options) {
  if (false) {}
}
function defineSlots() {
  if (false) {}
  return null;
}
function defineModel() {
  if (false) {}
}
function withDefaults(props, defaults) {
  if (false) {}
  return null;
}
function useSlots() {
  return getContext().slots;
}
function useAttrs() {
  return getContext().attrs;
}
function getContext() {
  const i = getCurrentInstance();
  if (false) {}
  return i.setupContext || (i.setupContext = createSetupContext(i));
}
function normalizePropsOrEmits(props) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(props) ? props.reduce((normalized, p) => (normalized[p] = null, normalized), {}) : props;
}
function mergeDefaults(raw, defaults) {
  const props = normalizePropsOrEmits(raw);
  for (const key in defaults) {
    if (key.startsWith("__skip")) continue;
    let opt = props[key];
    if (opt) {
      if (isArray(opt) || isFunction(opt)) {
        opt = props[key] = {
          type: opt,
          default: defaults[key]
        };
      } else {
        opt.default = defaults[key];
      }
    } else if (opt === null) {
      opt = props[key] = {
        default: defaults[key]
      };
    } else if (false) {}
    if (opt && defaults[`__skip_${key}`]) {
      opt.skipFactory = true;
    }
  }
  return props;
}
function mergeModels(a, b) {
  if (!a || !b) return a || b;
  if (isArray(a) && isArray(b)) return a.concat(b);
  return extend({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
}
function createPropsRestProxy(props, excludedKeys) {
  const ret = {};
  for (const key in props) {
    if (!excludedKeys.includes(key)) {
      Object.defineProperty(ret, key, {
        enumerable: true,
        get: () => props[key]
      });
    }
  }
  return ret;
}
function withAsyncContext(getAwaitable) {
  const ctx = getCurrentInstance();
  if (false) {}
  let awaitable = getAwaitable();
  unsetCurrentInstance();
  if (isPromise(awaitable)) {
    awaitable = awaitable.catch(e => {
      setCurrentInstance(ctx);
      throw e;
    });
  }
  return [awaitable, () => setCurrentInstance(ctx)];
}
function createDuplicateChecker() {
  const cache = /* @__PURE__ */Object.create(null);
  return (type, key) => {
    if (cache[key]) {
      warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
    } else {
      cache[key] = type;
    }
  };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties =  false ? 0 : null;
  if (false) {}
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(methodHandler)) {
        if (false) {} else {
          ctx[key] = methodHandler.bind(publicThis);
        }
        if (false) {}
      } else if (false) {}
    }
  }
  if (dataOptions) {
    if (false) {}
    const data = dataOptions.call(publicThis, publicThis);
    if (false) {}
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isObject */ .Gv)(data)) {
       false && 0;
    } else {
      instance.data = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .reactive */ .Kh)(data);
      if (false) {}
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(opt) ? opt.bind(publicThis, publicThis) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(opt.get) ? opt.get.bind(publicThis, publicThis) : _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .NOOP */ .tE;
      if (false) {}
      const set = !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(opt) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(opt.set) ? opt.set.bind(publicThis) :  false ? 0 : _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .NOOP */ .tE;
      const c = computed({
        get,
        set
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: v => c.value = v
      });
      if (false) {}
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach(key => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(hook)) {
      hook.forEach(_hook => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach(key => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: val => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .NOOP */ .tE) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components) instance.components = components;
  if (directives) instance.directives = directives;
  if (serverPrefetch) {
    markAsyncBoundary(instance);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .NOOP */ .tE) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isObject */ .Gv)(opt)) {
      if ("default" in opt) {
        injected = inject(opt.from || key, opt.default, true);
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .isRef */ .i9)(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: v => injected.value = v
      });
    } else {
      ctx[key] = injected;
    }
    if (false) {}
  }
}
function callHook(hook, instance, type) {
  callWithAsyncErrorHandling((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(hook) ? hook.map(h => h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isString */ .Kg)(raw)) {
    const handler = ctx[raw];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(handler)) {
      {
        watch(getter, handler);
      }
    } else if (false) {}
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(raw)) {
    {
      watch(getter, raw.bind(publicThis));
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isObject */ .Gv)(raw)) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(raw)) {
      raw.forEach(r => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(handler)) {
        watch(getter, handler, raw);
      } else if (false) {}
    }
  } else if (false) {}
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const {
    mixins,
    extends: extendsOptions
  } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: {
      optionMergeStrategies
    }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(m => mergeOptions(resolved, m, optionMergeStrategies, true));
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isObject */ .Gv)(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const {
    mixins,
    extends: extendsOptions
  } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(m => mergeOptions(to, m, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
       false && 0;
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .extend */ .X$)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(to) ? to.call(this, this) : to, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .extend */ .X$)(/* @__PURE__ */Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(to) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(from)) {
      return [... /* @__PURE__ */new Set([...to, ...from])];
    }
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .extend */ .X$)(/* @__PURE__ */Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  const merged = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .extend */ .X$)(/* @__PURE__ */Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: _vue_shared__WEBPACK_IMPORTED_MODULE_16__.NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */Object.create(null),
    optionsCache: /* @__PURE__ */new WeakMap(),
    propsCache: /* @__PURE__ */new WeakMap(),
    emitsCache: /* @__PURE__ */new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
  return function createApp(rootComponent, rootProps = null) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(rootComponent)) {
      rootComponent = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .extend */ .X$)({}, rootComponent);
    }
    if (rootProps != null && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isObject */ .Gv)(rootProps)) {
       false && 0;
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */new WeakSet();
    const pluginCleanupFns = [];
    let isMounted = false;
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
        if (false) {}
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin)) {
           false && 0;
        } else if (plugin && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else if (false) {}
        return app;
      },
      mixin(mixin) {
        if (true) {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else if (false) {}
        } else {}
        return app;
      },
      component(name, component) {
        if (false) {}
        if (!component) {
          return context.components[name];
        }
        if (false) {}
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (false) {}
        if (!directive) {
          return context.directives[name];
        }
        if (false) {}
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, namespace) {
        if (!isMounted) {
          if (false) {}
          const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace === true) {
            namespace = "svg";
          } else if (namespace === false) {
            namespace = void 0;
          }
          if (false) {}
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, namespace);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          if (false) {}
          return getComponentPublicInstance(vnode.component);
        } else if (false) {}
      },
      onUnmount(cleanupFn) {
        if (false) {}
        pluginCleanupFns.push(cleanupFn);
      },
      unmount() {
        if (isMounted) {
          callWithAsyncErrorHandling(pluginCleanupFns, app._instance, 16);
          render(null, app._container);
          if (false) {}
          delete app._container.__vue_app__;
        } else if (false) {}
      },
      provide(key, value) {
        if (false) {}
        context.provides[key] = value;
        return app;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app;
  };
}
let currentApp = null;
function provide(key, value) {
  if (!currentInstance) {
    if (false) {}
  } else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance || currentApp) {
    const provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else if (false) {}
  } else if (false) {}
}
function hasInjectionContext() {
  return !!(currentInstance || currentRenderingInstance || currentApp);
}
const internalObjectProto = {};
const createInternalObject = () => Object.create(internalObjectProto);
const isInternalObject = obj => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = createInternalObject();
  instance.propsDefaults = /* @__PURE__ */Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (false) {}
  if (isStateful) {
    instance.props = isSSR ? props : (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .shallowReactive */ .Gc)(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
  while (instance) {
    if (instance.type.__hmrId) return true;
    instance = instance.parent;
  }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: {
      patchFlag
    }
  } = instance;
  const rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .toRaw */ .ux)(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
  // always force full diff in dev
  // - #1942 if hmr is enabled with sfc component
  // - vite#872 non-sfc component used by sfc component
   true && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .camelize */ .PT)(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps ||
      // for camelCase
      !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(rawProps, key) && (
      // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      (kebabKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hyphenate */ .Tg)(key)) === key || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (
          // for camelCase
          rawPrevProps[key] !== void 0 ||
          // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .trigger */ .hZ)(instance.attrs, "set", "");
  }
  if (false) {}
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isReservedProp */ .SU)(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(options, camelKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .camelize */ .PT)(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .toRaw */ .ux)(props);
    const castValues = rawCastValues || _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(defaultValue)) {
        const {
          propsDefaults
        } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          const reset = setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          reset();
        }
      } else {
        value = defaultValue;
      }
      if (instance.ce) {
        instance.ce._setProp(key, value);
      }
    }
    if (opt[0 /* shouldCast */]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1 /* shouldCastTrue */] && (value === "" || value === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hyphenate */ .Tg)(key))) {
        value = true;
      }
    }
  }
  return value;
}
const mixinPropsCache = /* @__PURE__ */new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache =  true && asMixin ? mixinPropsCache : appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(comp)) {
    const extendProps = raw2 => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .extend */ .X$)(normalized, props);
      if (keys) needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isObject */ .Gv)(comp)) {
      cache.set(comp, _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_ARR */ .Oj);
    }
    return _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_ARR */ .Oj;
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if (false) {}
      const normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .camelize */ .PT)(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ;
      }
    }
  } else if (raw) {
    if (false) {}
    for (const key in raw) {
      const normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .camelize */ .PT)(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(opt) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(opt) ? {
          type: opt
        } : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .extend */ .X$)({}, opt);
        const propType = prop.type;
        let shouldCast = false;
        let shouldCastTrue = true;
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(propType)) {
          for (let index = 0; index < propType.length; ++index) {
            const type = propType[index];
            const typeName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(type) && type.name;
            if (typeName === "Boolean") {
              shouldCast = true;
              break;
            } else if (typeName === "String") {
              shouldCastTrue = false;
            }
          }
        } else {
          shouldCast = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(propType) && propType.name === "Boolean";
        }
        prop[0 /* shouldCast */] = shouldCast;
        prop[1 /* shouldCastTrue */] = shouldCastTrue;
        if (shouldCast || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(prop, "default")) {
          needCastKeys.push(normalizedKey);
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isObject */ .Gv)(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isReservedProp */ .SU)(key)) {
    return true;
  } else if (false) {}
  return false;
}
function getType(ctor) {
  if (ctor === null) {
    return "null";
  }
  if (typeof ctor === "function") {
    return ctor.name || "";
  } else if (typeof ctor === "object") {
    const name = ctor.constructor && ctor.constructor.name;
    return name || "";
  }
  return "";
}
function validateProps(rawProps, props, instance) {
  const resolvedValues = toRaw(props);
  const options = instance.propsOptions[0];
  const camelizePropsKey = Object.keys(rawProps).map(key => camelize(key));
  for (const key in options) {
    let opt = options[key];
    if (opt == null) continue;
    validateProp(key, resolvedValues[key], opt,  false ? 0 : resolvedValues, !camelizePropsKey.includes(key));
  }
}
function validateProp(name, value, prop, props, isAbsent) {
  const {
    type,
    required,
    validator,
    skipCheck
  } = prop;
  if (required && isAbsent) {
    warn$1('Missing required prop: "' + name + '"');
    return;
  }
  if (value == null && !required) {
    return;
  }
  if (type != null && type !== true && !skipCheck) {
    let isValid = false;
    const types = isArray(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const {
        valid,
        expectedType
      } = assertType(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn$1(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value, props)) {
    warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
const isSimpleType = /* @__PURE__ */(/* unused pure expression or super */ null && (makeMap("String,Number,Boolean,Function,Symbol,BigInt")));
function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (expectedType === "null") {
    valid = value === null;
  } else if (isSimpleType(expectedType)) {
    const t = typeof value;
    valid = t === expectedType.toLowerCase();
    if (!valid && t === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject(value);
  } else if (expectedType === "Array") {
    valid = isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  if (expectedTypes.length === 0) {
    return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
  }
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue(value, expectedType);
  const receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some(elem => type.toLowerCase() === elem);
}
function isBoolean(...args) {
  return args.some(elem => elem.toLowerCase() === "boolean");
}
const isInternalKey = key => key[0] === "_" || key === "$stable";
const normalizeSlotValue = value => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (false) {}
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key)) continue;
    const value = rawSlots[key];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      if (false) {}
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  if (false) {}
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const assignSlots = (slots, children, optimized) => {
  for (const key in children) {
    if (optimized || key !== "_") {
      slots[key] = children[key];
    }
  }
};
const initSlots = (instance, children, optimized) => {
  const slots = instance.slots = createInternalObject();
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      assignSlots(slots, children, optimized);
      if (optimized) {
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .def */ .yQ)(slots, "_", type, true);
      }
    } else {
      normalizeObjectSlots(children, slots);
    }
  } else if (children) {
    normalizeVNodeSlots(instance, children);
  }
};
const updateSlots = (instance, children, optimized) => {
  const {
    vnode,
    slots
  } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (false) {} else if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        assignSlots(slots, children, optimized);
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = {
      default: 1
    };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
        delete slots[key];
      }
    }
  }
};
let supported;
let perf;
function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark(`vue-${type}-${instance.uid}`);
  }
  if (false) {}
}
function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    const startTag = `vue-${type}-${instance.uid}`;
    const endTag = startTag + `:end`;
    perf.mark(endTag);
    perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }
  if (false) {}
}
function isSupported() {
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  return supported;
}
function initFeatureFlags() {
  const needWarn = [];
  if (false) {}
  if (false) {}
  if (typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ !== "boolean") {
     false && 0;
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .getGlobalThis */ .We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
  }
  if (false) {}
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
  {
    initFeatureFlags();
  }
  const target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .getGlobalThis */ .We)();
  target.__VUE__ = true;
  if (false) {}
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .NOOP */ .tE,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized =  false ? 0 : !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const {
      type,
      ref,
      shapeFlag
    } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace);
        } else if (false) {}
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        break;
      default:
        if (shapeFlag & 1) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (shapeFlag & 6) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (shapeFlag & 64) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
        } else if (false) {}
    }
    if (ref != null && parentComponent) {
      setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, namespace) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace, n2.el, n2.anchor);
  };
  const patchStaticNode = (n1, n2, container, namespace) => {
    if (n2.children !== n1.children) {
      const anchor = hostNextSibling(n1.anchor);
      removeStaticNode(n1);
      [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace);
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };
  const moveStaticNode = ({
    el,
    anchor
  }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({
    el,
    anchor
  }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace = "svg";
    } else if (n2.type === "math") {
      namespace = "mathml";
    }
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const {
      props,
      shapeFlag,
      transition,
      dirs
    } = vnode;
    el = vnode.el = hostCreateElement(vnode.type, namespace, props && props.is, props);
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(vnode.children, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isReservedProp */ .SU)(key)) {
          hostPatchProp(el, key, null, props[key], namespace, parentComponent);
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value, namespace);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (false) {}
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (false) {}
      if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
        const parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    if (false) {}
    let {
      patchFlag,
      dynamicChildren,
      dirs
    } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ;
    const newProps = n2.props || _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (false) {}
    if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
      hostSetElementText(el, "");
    }
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds);
      if (false) {}
    } else if (!optimized) {
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, oldProps, newProps, parentComponent, namespace);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, namespace);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, namespace, parentComponent);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, oldProps, newProps, parentComponent, namespace);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container =
      // oldVNode may be an errored async setup() component inside Suspense
      // which will not have a mounted element
      oldVNode.el && (
      // - In the case of a Fragment, we need to provide the actual parent
      // of the Fragment itself so it can move its children.
      oldVNode.type === Fragment ||
      // - In the case of different nodes, there is going to be a replacement
      // which also requires the correct parent container
      !isSameVNodeType(oldVNode, newVNode) ||
      // - In the case of a component, it could contain anything.
      oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) :
      // In other cases, the parent container is not actually used so we
      // just pass the block element here to avoid a DOM parentNode call.
      fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
    }
  };
  const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
    if (oldProps !== newProps) {
      if (oldProps !== _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ) {
        for (const key in oldProps) {
          if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isReservedProp */ .SU)(key) && !(key in newProps)) {
            hostPatchProp(el, key, oldProps[key], null, namespace, parentComponent);
          }
        }
      }
      for (const key in newProps) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isReservedProp */ .SU)(key)) continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, namespace, parentComponent);
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let {
      patchFlag,
      dynamicChildren,
      slotScopeIds: fragmentSlotScopeIds
    } = n2;
    if (false) {}
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      n2.children || [], container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren &&
      // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
        if (false) {} else if (
        // #2080 if the stable fragment has a key, it's a <template v-for> that may
        //  get moved around. Make sure all root level vnodes inherit el.
        // #2134 or if it's a component root, it may also get moved around
        // as the component is being moved.
        n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true
          /* shallow */);
        }
      } else {
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(n2, container, anchor, namespace, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, namespace, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
    const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (false) {}
    if (false) {}
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      if (false) {}
      setupComponent(instance, false, optimized);
      if (false) {}
    }
    if (instance.asyncDep) {
      if (false) {}
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
    } else {
      setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
    }
    if (false) {}
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        if (false) {}
        updateComponentPreRender(instance, n2, optimized);
        if (false) {}
        return;
      } else {
        instance.next = n2;
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const {
          el,
          props
        } = initialVNode;
        const {
          bm,
          m,
          parent,
          root,
          type
        } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .invokeArrayFns */ .DY)(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            if (false) {}
            instance.subTree = renderComponentRoot(instance);
            if (false) {}
            if (false) {}
            hydrateNode(el, instance.subTree, instance, parentSuspense, null);
            if (false) {}
          };
          if (isAsyncWrapperVNode && type.__asyncHydrate) {
            type.__asyncHydrate(el, instance, hydrateSubTree);
          } else {
            hydrateSubTree();
          }
        } else {
          if (root.ce) {
            root.ce._injectChildStyle(type);
          }
          if (false) {}
          const subTree = instance.subTree = renderComponentRoot(instance);
          if (false) {}
          if (false) {}
          patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
          if (false) {}
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        if (false) {}
        initialVNode = container = anchor = null;
      } else {
        let {
          next,
          bu,
          u,
          parent,
          vnode
        } = instance;
        {
          const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
          if (nonHydratedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            }
            nonHydratedAsyncRoot.asyncDep.then(() => {
              if (!instance.isUnmounted) {
                componentUpdateFn();
              }
            });
            return;
          }
        }
        let originNext = next;
        let vnodeHook;
        if (false) {}
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .invokeArrayFns */ .DY)(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        if (false) {}
        const nextTree = renderComponentRoot(instance);
        if (false) {}
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        if (false) {}
        patch(prevTree, nextTree,
        // parent may have changed if it's in a teleport
        hostParentNode(prevTree.el),
        // anchor may have changed if it's in a fragment
        getNextHostNode(prevTree), instance, parentSuspense, namespace);
        if (false) {}
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
        }
        if (false) {}
        if (false) {}
      }
    };
    instance.scope.on();
    const effect = instance.effect = new _vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .ReactiveEffect */ .X2(componentUpdateFn);
    instance.scope.off();
    const update = instance.update = effect.run.bind(effect);
    const job = instance.job = effect.runIfDirty.bind(effect);
    job.i = instance;
    job.id = instance.uid;
    effect.scheduler = () => queueJob(job);
    toggleRecurse(instance, true);
    if (false) {}
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .pauseTracking */ .C4)();
    flushPreFlushCbs(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .resetTracking */ .bl)();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const {
      patchFlag,
      shapeFlag
    } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    c1 = c1 || _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_ARR */ .Oj;
    c2 = c2 || _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_ARR */ .Oj;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    }
    if (oldLength > newLength) {
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, commonLength);
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          if (false) {}
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_ARR */ .Oj;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(null, nextChild, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const {
      el,
      type,
      transition,
      children,
      shapeFlag
    } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const {
          leave,
          delayLeave,
          afterLeave
        } = transition;
        const remove2 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove2();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove2, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs,
      cacheIndex
    } = vnode;
    if (patchFlag === -2) {
      optimized = false;
    }
    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode, true);
    }
    if (cacheIndex != null) {
      parentComponent.renderCache[cacheIndex] = void 0;
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, internals, doRemove);
      } else if (dynamicChildren &&
      // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !dynamicChildren.hasOnce && (
      // #1153: fast path should not be taken for non-stable (v-for) fragments
      type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove = vnode => {
    const {
      type,
      el,
      anchor,
      transition
    } = vnode;
    if (type === Fragment) {
      if (false) {} else {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const {
        leave,
        delayLeave
      } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    if (false) {}
    const {
      bum,
      scope,
      job,
      subTree,
      um,
      m,
      a
    } = instance;
    invalidateMount(m);
    invalidateMount(a);
    if (bum) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .invokeArrayFns */ .DY)(bum);
    }
    scope.stop();
    if (job) {
      job.flags |= 8;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
    if (false) {}
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = vnode => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    const el = hostNextSibling(vnode.anchor || vnode.el);
    const teleportEnd = el && el[TeleportEndKey];
    return teleportEnd ? hostNextSibling(teleportEnd) : el;
  };
  let isFlushing = false;
  const render = (vnode, container, namespace) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, namespace);
    }
    container._vnode = vnode;
    if (!isFlushing) {
      isFlushing = true;
      flushPreFlushCbs();
      flushPostFlushCbs();
      isFlushing = false;
    }
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(internals);
  }
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function resolveChildrenNamespace({
  type,
  props
}, currentNamespace) {
  return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({
  effect,
  job
}, allowed) {
  if (allowed) {
    effect.flags |= 32;
    job.flags |= 4;
  } else {
    effect.flags &= ~32;
    job.flags &= ~4;
  }
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(ch1) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow && c2.patchFlag !== -2) traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
      if (false) {}
    }
  }
}
function getSequence(arr) {
  const p = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }
  return result;
}
function locateNonHydratedAsyncRoot(instance) {
  const subComponent = instance.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateNonHydratedAsyncRoot(subComponent);
    }
  }
}
function invalidateMount(hooks) {
  if (hooks) {
    for (let i = 0; i < hooks.length; i++) hooks[i].flags |= 8;
  }
}
const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    if (!ctx) {
       false && 0;
    }
    return ctx;
  }
};
function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
  return doWatch(effect, null,  false ? 0 : {
    flush: "post"
  });
}
function watchSyncEffect(effect, options) {
  return doWatch(effect, null,  false ? 0 : {
    flush: "sync"
  });
}
function watch(source, cb, options) {
  if (false) {}
  return doWatch(source, cb, options);
}
function doWatch(source, cb, options = _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ) {
  const {
    immediate,
    deep,
    flush,
    once
  } = options;
  if (false) {}
  const baseWatchOptions = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .extend */ .X$)({}, options);
  if (false) {}
  const runsImmediately = cb && immediate || !cb && flush !== "post";
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else if (!runsImmediately) {
      const watchStopHandle = () => {};
      watchStopHandle.stop = _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .NOOP */ .tE;
      watchStopHandle.resume = _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .NOOP */ .tE;
      watchStopHandle.pause = _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .NOOP */ .tE;
      return watchStopHandle;
    }
  }
  const instance = currentInstance;
  baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
  let isPre = false;
  if (flush === "post") {
    baseWatchOptions.scheduler = job => {
      queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else if (flush !== "sync") {
    isPre = true;
    baseWatchOptions.scheduler = (job, isFirstRun) => {
      if (isFirstRun) {
        job();
      } else {
        queueJob(job);
      }
    };
  }
  baseWatchOptions.augmentJob = job => {
    if (cb) {
      job.flags |= 4;
    }
    if (isPre) {
      job.flags |= 2;
      if (instance) {
        job.id = instance.uid;
        job.i = instance;
      }
    }
  };
  const watchHandle = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .watch */ .wB)(source, cb, baseWatchOptions);
  if (isInSSRComponentSetup) {
    if (ssrCleanup) {
      ssrCleanup.push(watchHandle);
    } else if (runsImmediately) {
      watchHandle();
    }
  }
  return watchHandle;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isString */ .Kg)(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function useModel(props, name, options = EMPTY_OBJ) {
  const i = getCurrentInstance();
  if (false) {}
  const camelizedName = camelize(name);
  if (false) {}
  const hyphenatedName = hyphenate(name);
  const modifiers = getModelModifiers(props, camelizedName);
  const res = customRef((track, trigger) => {
    let localValue;
    let prevSetValue = EMPTY_OBJ;
    let prevEmittedValue;
    watchSyncEffect(() => {
      const propValue = props[camelizedName];
      if (hasChanged(localValue, propValue)) {
        localValue = propValue;
        trigger();
      }
    });
    return {
      get() {
        track();
        return options.get ? options.get(localValue) : localValue;
      },
      set(value) {
        const emittedValue = options.set ? options.set(value) : value;
        if (!hasChanged(emittedValue, localValue) && !(prevSetValue !== EMPTY_OBJ && hasChanged(value, prevSetValue))) {
          return;
        }
        const rawProps = i.vnode.props;
        if (!(rawProps && (
        // check if parent has passed v-model
        name in rawProps || camelizedName in rawProps || hyphenatedName in rawProps) && (`onUpdate:${name}` in rawProps || `onUpdate:${camelizedName}` in rawProps || `onUpdate:${hyphenatedName}` in rawProps))) {
          localValue = value;
          trigger();
        }
        i.emit(`update:${name}`, emittedValue);
        if (hasChanged(value, emittedValue) && hasChanged(value, prevSetValue) && !hasChanged(emittedValue, prevEmittedValue)) {
          trigger();
        }
        prevSetValue = value;
        prevEmittedValue = emittedValue;
      }
    };
  });
  res[Symbol.iterator] = () => {
    let i2 = 0;
    return {
      next() {
        if (i2 < 2) {
          return {
            value: i2++ ? modifiers || EMPTY_OBJ : res,
            done: false
          };
        } else {
          return {
            done: true
          };
        }
      }
    };
  };
  return res;
}
const getModelModifiers = (props, modelName) => {
  return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .camelize */ .PT)(modelName)}Modifiers`] || props[`${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hyphenate */ .Tg)(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted) return;
  const props = instance.vnode.props || _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ;
  if (false) {}
  let args = rawArgs;
  const isModelListener = event.startsWith("update:");
  const modifiers = isModelListener && getModelModifiers(props, event.slice(7));
  if (modifiers) {
    if (modifiers.trim) {
      args = rawArgs.map(a => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isString */ .Kg)(a) ? a.trim() : a);
    }
    if (modifiers.number) {
      args = rawArgs.map(_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .looseToNumber */ .bB);
    }
  }
  if (false) {}
  if (false) {}
  let handlerName;
  let handler = props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .toHandlerKey */ .rU)(event)] ||
  // also try camelCase event handler (#2249)
  props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .toHandlerKey */ .rU)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .camelize */ .PT)(event))];
  if (!handler && isModelListener) {
    handler = props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .toHandlerKey */ .rU)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hyphenate */ .Tg)(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(comp)) {
    const extendEmits = raw2 => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .extend */ .X$)(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isObject */ .Gv)(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(raw)) {
    raw.forEach(key => normalized[key] = null);
  } else {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .extend */ .X$)(normalized, raw);
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isObject */ .Gv)(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isOn */ .Mp)(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(options, key[0].toLowerCase() + key.slice(1)) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(options, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hyphenate */ .Tg)(key)) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .hasOwn */ .$3)(options, key);
}
let accessedAttrs = false;
function markAttrsAccessed() {
  accessedAttrs = true;
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit,
    render,
    renderCache,
    props,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  const prev = setCurrentRenderingInstance(instance);
  let result;
  let fallthroughAttrs;
  if (false) {}
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      const thisProxy =  false ? 0 : proxyToUse;
      result = normalizeVNode(render.call(thisProxy, proxyToUse, renderCache,  false ? 0 : props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if (false) {}
      result = normalizeVNode(render2.length > 1 ? render2( false ? 0 : props,  false ? 0 : {
        attrs,
        slots,
        emit
      }) : render2( false ? 0 : props, null));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  let setRoot = void 0;
  if (false) {}
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const {
      shapeFlag
    } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isModelListener */ .CP)) {
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }
        root = cloneVNode(root, fallthroughAttrs, false, true);
      } else if (false) {}
    }
  }
  if (vnode.dirs) {
    if (false) {}
    root = cloneVNode(root, null, false, true);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    if (false) {}
    setTransitionHooks(root, vnode.transition);
  }
  if (false) {} else {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getChildRoot = vnode => {
  const rawChildren = vnode.children;
  const dynamicChildren = vnode.dynamicChildren;
  const childRoot = filterSingleRoot(rawChildren, false);
  if (!childRoot) {
    return [vnode, void 0];
  } else if (false) {}
  const index = rawChildren.indexOf(childRoot);
  const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
  const setRoot = updatedRoot => {
    rawChildren[index] = updatedRoot;
    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
      }
    }
  };
  return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children, recurse = true) {
  let singleRoot;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isVNode(child)) {
      if (child.type !== Comment || child.children === "v-if") {
        if (singleRoot) {
          return;
        } else {
          singleRoot = child;
          if (false) {}
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
const getFunctionalFallthrough = attrs => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isOn */ .Mp)(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isModelListener */ .CP)(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
const isElementRoot = vnode => {
  return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const {
    props: prevProps,
    children: prevChildren,
    component
  } = prevVNode;
  const {
    props: nextProps,
    children: nextChildren,
    patchFlag
  } = nextVNode;
  const emits = component.emitsOptions;
  if (false) {}
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({
  vnode,
  parent
}, el) {
  while (parent) {
    const root = parent.subTree;
    if (root.suspense && root.suspense.activeBranch === vnode) {
      root.el = vnode.el;
    }
    if (root === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    } else {
      break;
    }
  }
}
const isSuspense = type => type.__isSuspense;
let suspenseId = 0;
const SuspenseImpl = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
    if (n1 == null) {
      mountSuspense(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals);
    } else {
      if (parentSuspense && parentSuspense.deps > 0 && !n1.suspense.isInFallback) {
        n2.suspense = n1.suspense;
        n2.suspense.vnode = n2;
        n2.el = n1.el;
        return;
      }
      patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, rendererInternals);
    }
  },
  hydrate: hydrateSuspense,
  normalize: normalizeSuspenseChildren
};
const Suspense = (/* unused pure expression or super */ null && (SuspenseImpl));
function triggerEvent(vnode, name) {
  const eventListener = vnode.props && vnode.props[name];
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(eventListener)) {
    eventListener();
  }
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
  const {
    p: patch,
    o: {
      createElement
    }
  } = rendererInternals;
  const hiddenContainer = createElement("div");
  const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals);
  patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds);
  if (suspense.deps > 0) {
    triggerEvent(vnode, "onPending");
    triggerEvent(vnode, "onFallback");
    patch(null, vnode.ssFallback, container, anchor, parentComponent, null,
    // fallback tree will not have suspense context
    namespace, slotScopeIds);
    setActiveBranch(suspense, vnode.ssFallback);
  } else {
    suspense.resolve(false, true);
  }
}
function patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, {
  p: patch,
  um: unmount,
  o: {
    createElement
  }
}) {
  const suspense = n2.suspense = n1.suspense;
  suspense.vnode = n2;
  n2.el = n1.el;
  const newBranch = n2.ssContent;
  const newFallback = n2.ssFallback;
  const {
    activeBranch,
    pendingBranch,
    isInFallback,
    isHydrating
  } = suspense;
  if (pendingBranch) {
    suspense.pendingBranch = newBranch;
    if (isSameVNodeType(newBranch, pendingBranch)) {
      patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else if (isInFallback) {
        if (!isHydrating) {
          patch(activeBranch, newFallback, container, anchor, parentComponent, null,
          // fallback tree will not have suspense context
          namespace, slotScopeIds, optimized);
          setActiveBranch(suspense, newFallback);
        }
      }
    } else {
      suspense.pendingId = suspenseId++;
      if (isHydrating) {
        suspense.isHydrating = false;
        suspense.activeBranch = pendingBranch;
      } else {
        unmount(pendingBranch, parentComponent, suspense);
      }
      suspense.deps = 0;
      suspense.effects.length = 0;
      suspense.hiddenContainer = createElement("div");
      if (isInFallback) {
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          patch(activeBranch, newFallback, container, anchor, parentComponent, null,
          // fallback tree will not have suspense context
          namespace, slotScopeIds, optimized);
          setActiveBranch(suspense, newFallback);
        }
      } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
        suspense.resolve(true);
      } else {
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
        if (suspense.deps <= 0) {
          suspense.resolve();
        }
      }
    }
  } else {
    if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
      patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
      setActiveBranch(suspense, newBranch);
    } else {
      triggerEvent(n2, "onPending");
      suspense.pendingBranch = newBranch;
      if (newBranch.shapeFlag & 512) {
        suspense.pendingId = newBranch.component.suspenseId;
      } else {
        suspense.pendingId = suspenseId++;
      }
      patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else {
        const {
          timeout,
          pendingId
        } = suspense;
        if (timeout > 0) {
          setTimeout(() => {
            if (suspense.pendingId === pendingId) {
              suspense.fallback(newFallback);
            }
          }, timeout);
        } else if (timeout === 0) {
          suspense.fallback(newFallback);
        }
      }
    }
  }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
  if (false) {}
  const {
    p: patch,
    m: move,
    um: unmount,
    n: next,
    o: {
      parentNode,
      remove
    }
  } = rendererInternals;
  let parentSuspenseId;
  const isSuspensible = isVNodeSuspensible(vnode);
  if (isSuspensible) {
    if (parentSuspense && parentSuspense.pendingBranch) {
      parentSuspenseId = parentSuspense.pendingId;
      parentSuspense.deps++;
    }
  }
  const timeout = vnode.props ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .toNumber */ .Ro)(vnode.props.timeout) : void 0;
  if (false) {}
  const initialAnchor = anchor;
  const suspense = {
    vnode,
    parent: parentSuspense,
    parentComponent,
    namespace,
    container,
    hiddenContainer,
    deps: 0,
    pendingId: suspenseId++,
    timeout: typeof timeout === "number" ? timeout : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !isHydrating,
    isHydrating,
    isUnmounted: false,
    effects: [],
    resolve(resume = false, sync = false) {
      if (false) {}
      const {
        vnode: vnode2,
        activeBranch,
        pendingBranch,
        pendingId,
        effects,
        parentComponent: parentComponent2,
        container: container2
      } = suspense;
      let delayEnter = false;
      if (suspense.isHydrating) {
        suspense.isHydrating = false;
      } else if (!resume) {
        delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
        if (delayEnter) {
          activeBranch.transition.afterLeave = () => {
            if (pendingId === suspense.pendingId) {
              move(pendingBranch, container2, anchor === initialAnchor ? next(activeBranch) : anchor, 0);
              queuePostFlushCb(effects);
            }
          };
        }
        if (activeBranch) {
          if (parentNode(activeBranch.el) === container2) {
            anchor = next(activeBranch);
          }
          unmount(activeBranch, parentComponent2, suspense, true);
        }
        if (!delayEnter) {
          move(pendingBranch, container2, anchor, 0);
        }
      }
      setActiveBranch(suspense, pendingBranch);
      suspense.pendingBranch = null;
      suspense.isInFallback = false;
      let parent = suspense.parent;
      let hasUnresolvedAncestor = false;
      while (parent) {
        if (parent.pendingBranch) {
          parent.effects.push(...effects);
          hasUnresolvedAncestor = true;
          break;
        }
        parent = parent.parent;
      }
      if (!hasUnresolvedAncestor && !delayEnter) {
        queuePostFlushCb(effects);
      }
      suspense.effects = [];
      if (isSuspensible) {
        if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
          parentSuspense.deps--;
          if (parentSuspense.deps === 0 && !sync) {
            parentSuspense.resolve();
          }
        }
      }
      triggerEvent(vnode2, "onResolve");
    },
    fallback(fallbackVNode) {
      if (!suspense.pendingBranch) {
        return;
      }
      const {
        vnode: vnode2,
        activeBranch,
        parentComponent: parentComponent2,
        container: container2,
        namespace: namespace2
      } = suspense;
      triggerEvent(vnode2, "onFallback");
      const anchor2 = next(activeBranch);
      const mountFallback = () => {
        if (!suspense.isInFallback) {
          return;
        }
        patch(null, fallbackVNode, container2, anchor2, parentComponent2, null,
        // fallback tree will not have suspense context
        namespace2, slotScopeIds, optimized);
        setActiveBranch(suspense, fallbackVNode);
      };
      const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
      if (delayEnter) {
        activeBranch.transition.afterLeave = mountFallback;
      }
      suspense.isInFallback = true;
      unmount(activeBranch, parentComponent2, null,
      // no suspense so unmount hooks fire now
      true
      // shouldRemove
      );
      if (!delayEnter) {
        mountFallback();
      }
    },
    move(container2, anchor2, type) {
      suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
      suspense.container = container2;
    },
    next() {
      return suspense.activeBranch && next(suspense.activeBranch);
    },
    registerDep(instance, setupRenderEffect, optimized2) {
      const isInPendingSuspense = !!suspense.pendingBranch;
      if (isInPendingSuspense) {
        suspense.deps++;
      }
      const hydratedEl = instance.vnode.el;
      instance.asyncDep.catch(err => {
        handleError(err, instance, 0);
      }).then(asyncSetupResult => {
        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
          return;
        }
        instance.asyncResolved = true;
        const {
          vnode: vnode2
        } = instance;
        if (false) {}
        handleSetupResult(instance, asyncSetupResult, false);
        if (hydratedEl) {
          vnode2.el = hydratedEl;
        }
        const placeholder = !hydratedEl && instance.subTree.el;
        setupRenderEffect(instance, vnode2,
        // component may have been moved before resolve.
        // if this is not a hydration, instance.subTree will be the comment
        // placeholder.
        parentNode(hydratedEl || instance.subTree.el),
        // anchor will not be used if this is hydration, so only need to
        // consider the comment placeholder case.
        hydratedEl ? null : next(instance.subTree), suspense, namespace, optimized2);
        if (placeholder) {
          remove(placeholder);
        }
        updateHOCHostEl(instance, vnode2.el);
        if (false) {}
        if (isInPendingSuspense && --suspense.deps === 0) {
          suspense.resolve();
        }
      });
    },
    unmount(parentSuspense2, doRemove) {
      suspense.isUnmounted = true;
      if (suspense.activeBranch) {
        unmount(suspense.activeBranch, parentComponent, parentSuspense2, doRemove);
      }
      if (suspense.pendingBranch) {
        unmount(suspense.pendingBranch, parentComponent, parentSuspense2, doRemove);
      }
    }
  };
  return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals, hydrateNode) {
  const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode,
  // eslint-disable-next-line no-restricted-globals
  document.createElement("div"), null, namespace, slotScopeIds, optimized, rendererInternals, true);
  const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
  if (suspense.deps === 0) {
    suspense.resolve(false, true);
  }
  return result;
}
function normalizeSuspenseChildren(vnode) {
  const {
    shapeFlag,
    children
  } = vnode;
  const isSlotChildren = shapeFlag & 32;
  vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
  vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
  let block;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(s)) {
    const trackBlock = isBlockTreeEnabled && s._c;
    if (trackBlock) {
      s._d = false;
      openBlock();
    }
    s = s();
    if (trackBlock) {
      s._d = true;
      block = currentBlock;
      closeBlock();
    }
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(s)) {
    const singleChild = filterSingleRoot(s);
    if (false) {}
    s = singleChild;
  }
  s = normalizeVNode(s);
  if (block && !s.dynamicChildren) {
    s.dynamicChildren = block.filter(c => c !== s);
  }
  return s;
}
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function setActiveBranch(suspense, branch) {
  suspense.activeBranch = branch;
  const {
    vnode,
    parentComponent
  } = suspense;
  let el = branch.el;
  while (!el && branch.component) {
    branch = branch.component.subTree;
    el = branch.el;
  }
  vnode.el = el;
  if (parentComponent && parentComponent.subTree === vnode) {
    parentComponent.vnode.el = el;
    updateHOCHostEl(parentComponent, el);
  }
}
function isVNodeSuspensible(vnode) {
  const suspensible = vnode.props && vnode.props.suspensible;
  return suspensible != null && suspensible !== false;
}
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
  isBlockTreeEnabled += value;
  if (value < 0 && currentBlock && inVOnce) {
    currentBlock.hasOnce = true;
  }
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_ARR */ .Oj : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  if (false) {}
  return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
function transformVNodeArgs(transformer) {
  vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args) => {
  return _createVNode(...(vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args));
};
const normalizeKey = ({
  key
}) => key != null ? key : null;
const normalizeRef = ({
  ref,
  ref_key,
  ref_for
}) => {
  if (typeof ref === "number") {
    ref = "" + ref;
  }
  return ref != null ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isString */ .Kg)(ref) || (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .isRef */ .i9)(ref) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(ref) ? {
    i: currentRenderingInstance,
    r: ref,
    k: ref_key,
    f: !!ref_for
  } : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isString */ .Kg)(children) ? 8 : 16;
  }
  if (false) {}
  if (isBlockTreeEnabled > 0 &&
  // avoid a block node from tracking itself
  !isBlockNode &&
  // has current parent block
  currentBlock && (
  // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  vnode.patchFlag > 0 || shapeFlag & 6) &&
  // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode =  false ? 0 : _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if (false) {}
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(type, props, true
    /* mergeRef: true */);
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag = -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let {
      class: klass,
      style
    } = props;
    if (klass && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isString */ .Kg)(klass)) {
      props.class = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .normalizeClass */ .C4)(klass);
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isObject */ .Gv)(style)) {
      if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .isProxy */ .ju)(style) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(style)) {
        style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .extend */ .X$)({}, style);
      }
      props.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .normalizeStyle */ .Tr)(style);
    }
  }
  const shapeFlag = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isString */ .Kg)(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isObject */ .Gv)(type) ? 4 : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(type) ? 2 : 0;
  if (false) {}
  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
  if (!props) return null;
  return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .isProxy */ .ju)(props) || isInternalObject(props) ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .extend */ .X$)({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
  const {
    props,
    ref,
    patchFlag,
    children,
    transition
  } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ?
    // #2078 in the case of <component :is="vnode" ref="extra"/>
    // if the vnode itself already has a ref, cloneVNode will need to merge
    // the refs so the single vnode can be set on multiple refs
    mergeRef && ref ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children:  false ? 0 : children,
    target: vnode.target,
    targetStart: vnode.targetStart,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  if (transition && cloneTransition) {
    setTransitionHooks(cloned, transition.clone(cloned));
  }
  return cloned;
}
function deepCloneVNode(vnode) {
  const cloned = cloneVNode(vnode);
  if (isArray(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(child)) {
    return createVNode(Fragment, null,
    // #3666, avoid reference pollution when reusing vnode
    child.slice());
  } else if (isVNode(child)) {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const {
    shapeFlag
  } = vnode;
  if (children == null) {
    children = null;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !isInternalObject(children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(children)) {
    children = {
      default: children,
      _ctx: currentRenderingInstance
    };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .normalizeClass */ .C4)([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .normalizeStyle */ .Tr)([ret.style, toMerge.style]);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isOn */ .Mp)(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [vnode, prevVNode]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new _vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .EffectScope */ .yC(true
    /* detached */),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    ids: parent ? parent.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ,
    data: _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ,
    props: _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ,
    attrs: _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ,
    slots: _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ,
    refs: _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ,
    setupState: _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .EMPTY_OBJ */ .MZ,
    setupContext: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  if (false) {} else {
    instance.ctx = {
      _: instance
    };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  const g = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .getGlobalThis */ .We)();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key])) setters = g[key] = [];
    setters.push(setter);
    return v => {
      if (setters.length > 1) setters.forEach(set => set(v));else setters[0](v);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter(`__VUE_INSTANCE_SETTERS__`, v => currentInstance = v);
  setInSSRSetupState = registerGlobalSetter(`__VUE_SSR_SETTERS__`, v => isInSSRComponentSetup = v);
}
const setCurrentInstance = instance => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
const isBuiltInTag = /* @__PURE__ */(/* unused pure expression or super */ null && (makeMap("slot,component")));
function validateComponentName(name, {
  isNativeTag
}) {
  if (isBuiltInTag(name) || isNativeTag(name)) {
    warn$1("Do not use built-in or reserved HTML elements as component id: " + name);
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
  isSSR && setInSSRSetupState(isSSR);
  const {
    props,
    children
  } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children, optimized);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  var _a;
  const Component = instance.type;
  if (false) {}
  instance.accessCache = /* @__PURE__ */Object.create(null);
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
  if (false) {}
  const {
    setup
  } = Component;
  if (setup) {
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .pauseTracking */ .C4)();
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    const reset = setCurrentInstance(instance);
    const setupResult = callWithErrorHandling(setup, instance, 0, [ false ? 0 : instance.props, setupContext]);
    const isAsyncSetup = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isPromise */ .yL)(setupResult);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .resetTracking */ .bl)();
    reset();
    if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) {
      markAsyncBoundary(instance);
    }
    if (isAsyncSetup) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then(resolvedResult => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch(e => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
        if (false) {}
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isObject */ .Gv)(setupResult)) {
    if (false) {}
    if (false) {}
    instance.setupState = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .proxyRefs */ .Pr)(setupResult);
    if (false) {}
  } else if (false) {}
  finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
function registerRuntimeCompiler(_compile) {
  compile = _compile;
  installWithProxy = i => {
    if (i.render._rc) {
      i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    }
  };
}
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template ||  true && resolveMergedOptions(instance).template;
      if (template) {
        if (false) {}
        const {
          isCustomElement,
          compilerOptions
        } = instance.appContext.config;
        const {
          delimiters,
          compilerOptions: componentCompilerOptions
        } = Component;
        const finalCompilerOptions = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .extend */ .X$)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .extend */ .X$)({
          isCustomElement,
          delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);
        if (false) {}
      }
    }
    instance.render = Component.render || _vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .NOOP */ .tE;
    if (installWithProxy) {
      installWithProxy(instance);
    }
  }
  if (true) {
    const reset = setCurrentInstance(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .pauseTracking */ .C4)();
    try {
      applyOptions(instance);
    } finally {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .resetTracking */ .bl)();
      reset();
    }
  }
  if (false) {}
}
const attrsProxyHandlers =  false ? 0 : {
  get(target, key) {
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .track */ .u4)(target, "get", "");
    return target[key];
  }
};
function getSlotsProxy(instance) {
  return new Proxy(instance.slots, {
    get(target, key) {
      track(instance, "get", "$slots");
      return target[key];
    }
  });
}
function createSetupContext(instance) {
  const expose = exposed => {
    if (false) {}
    instance.exposed = exposed || {};
  };
  if (false) {} else {
    return {
      attrs: new Proxy(instance.attrs, attrsProxyHandlers),
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getComponentPublicInstance(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .proxyRefs */ .Pr)((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .markRaw */ .IG)(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  } else {
    return instance.proxy;
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = str => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = registry => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isFunction */ .Tn)(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  const c = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_17__/* .computed */ .EW)(getterOrOptions, debugOptions, isInSSRComponentSetup);
  if (false) {}
  return c;
};
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isObject */ .Gv)(propsOrChildren) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_16__/* .isArray */ .cy)(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
function initCustomFormatter() {
  if (true) {
    return;
  }
  const vueStyle = {
    style: "color:#3ba776"
  };
  const numberStyle = {
    style: "color:#1677ff"
  };
  const stringStyle = {
    style: "color:#f5222d"
  };
  const keywordStyle = {
    style: "color:#eb2f96"
  };
  const formatter = {
    __vue_custom_formatter: true,
    header(obj) {
      if (!isObject(obj)) {
        return null;
      }
      if (obj.__isVue) {
        return ["div", vueStyle, `VueInstance`];
      } else if (isRef(obj)) {
        return ["div", {}, ["span", vueStyle, genRefFlag(obj)], "<",
        // avoid debugger accessing value affecting behavior
        formatValue("_value" in obj ? obj._value : obj), `>`];
      } else if (isReactive(obj)) {
        return ["div", {}, ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"], "<", formatValue(obj), `>${isReadonly(obj) ? ` (readonly)` : ``}`];
      } else if (isReadonly(obj)) {
        return ["div", {}, ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"], "<", formatValue(obj), ">"];
      }
      return null;
    },
    hasBody(obj) {
      return obj && obj.__isVue;
    },
    body(obj) {
      if (obj && obj.__isVue) {
        return ["div", {}, ...formatInstance(obj.$)];
      }
    }
  };
  function formatInstance(instance) {
    const blocks = [];
    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock("props", toRaw(instance.props)));
    }
    if (instance.setupState !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("setup", instance.setupState));
    }
    if (instance.data !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("data", toRaw(instance.data)));
    }
    const computed = extractKeys(instance, "computed");
    if (computed) {
      blocks.push(createInstanceBlock("computed", computed));
    }
    const injected = extractKeys(instance, "inject");
    if (injected) {
      blocks.push(createInstanceBlock("injected", injected));
    }
    blocks.push(["div", {}, ["span", {
      style: keywordStyle.style + ";opacity:0.66"
    }, "$ (internal): "], ["object", {
      object: instance
    }]]);
    return blocks;
  }
  function createInstanceBlock(type, target) {
    target = extend({}, target);
    if (!Object.keys(target).length) {
      return ["span", {}];
    }
    return ["div", {
      style: "line-height:1.25em;margin-bottom:0.6em"
    }, ["div", {
      style: "color:#476582"
    }, type], ["div", {
      style: "padding-left:1.25em"
    }, ...Object.keys(target).map(key => {
      return ["div", {}, ["span", keywordStyle, key + ": "], formatValue(target[key], false)];
    })]];
  }
  function formatValue(v, asRaw = true) {
    if (typeof v === "number") {
      return ["span", numberStyle, v];
    } else if (typeof v === "string") {
      return ["span", stringStyle, JSON.stringify(v)];
    } else if (typeof v === "boolean") {
      return ["span", keywordStyle, v];
    } else if (isObject(v)) {
      return ["object", {
        object: asRaw ? toRaw(v) : v
      }];
    } else {
      return ["span", stringStyle, String(v)];
    }
  }
  function extractKeys(instance, type) {
    const Comp = instance.type;
    if (isFunction(Comp)) {
      return;
    }
    const extracted = {};
    for (const key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }
    return extracted;
  }
  function isKeyOfType(Comp, key, type) {
    const opts = Comp[type];
    if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
      return true;
    }
    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
      return true;
    }
    if (Comp.mixins && Comp.mixins.some(m => isKeyOfType(m, key, type))) {
      return true;
    }
  }
  function genRefFlag(v) {
    if (isShallow(v)) {
      return `ShallowRef`;
    }
    if (v.effect) {
      return `ComputedRef`;
    }
    return `Ref`;
  }
  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}
function withMemo(memo, render, cache, index) {
  const cached = cache[index];
  if (cached && isMemoSame(cached, memo)) {
    return cached;
  }
  const ret = render();
  ret.memo = memo.slice();
  ret.cacheIndex = index;
  return cache[index] = ret;
}
function isMemoSame(cached, memo) {
  const prev = cached.memo;
  if (prev.length != memo.length) {
    return false;
  }
  for (let i = 0; i < prev.length; i++) {
    if (hasChanged(prev[i], memo[i])) {
      return false;
    }
  }
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(cached);
  }
  return true;
}
const version = "3.5.13";
const warn = (/* unused pure expression or super */ null && ( false ? 0 : NOOP));
const ErrorTypeStrings = (/* unused pure expression or super */ null && (ErrorTypeStrings$1));
const devtools =  true ? devtools$1 : 0;
const setDevtoolsHook = (/* unused pure expression or super */ null && ( true ? setDevtoolsHook$1 : 0));
const _ssrUtils = {
  createComponentInstance,
  setupComponent,
  renderComponentRoot,
  setCurrentRenderingInstance,
  isVNode: isVNode,
  normalizeVNode,
  getComponentPublicInstance,
  ensureValidVNode,
  pushWarningContext,
  popWarningContext
};
const ssrUtils = (/* unused pure expression or super */ null && (_ssrUtils));
const resolveFilter = null;
const compatUtils = null;
const DeprecationTypes = null;


/***/ }),

/***/ 5130:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D$: function() { return /* binding */ withModifiers; },
/* harmony export */   Ef: function() { return /* binding */ createApp; },
/* harmony export */   aG: function() { return /* binding */ vShow; },
/* harmony export */   u1: function() { return /* binding */ vModelSelect; }
/* harmony export */ });
/* unused harmony exports Transition, TransitionGroup, VueElement, createSSRApp, defineCustomElement, defineSSRCustomElement, hydrate, initDirectivesForSSR, render, useCssModule, useCssVars, useHost, useShadowRoot, vModelCheckbox, vModelDynamic, vModelRadio, vModelText, withKeys */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4114);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7642);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8004);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3853);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5876);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2475);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5024);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1698);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8992);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4520);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3949);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1454);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7550);
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6768);
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4232);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(144);













/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/



let policy = void 0;
const tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) {
  try {
    policy = /* @__PURE__ */tt.createPolicy("vue", {
      createHTML: val => val
    });
  } catch (e) {
     false && 0;
  }
}
const unsafeToTrustedHTML = policy ? val => policy.createHTML(val) : val => val;
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: child => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, namespace, is, props) => {
    const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, {
      is
    }) : doc.createElement(tag);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: text => doc.createTextNode(text),
  createComment: text => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: node => node.parentNode,
  nextSibling: node => node.nextSibling,
  querySelector: selector => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, namespace, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling)) break;
      }
    } else {
      templateContainer.innerHTML = unsafeToTrustedHTML(namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content);
      const template = templateContainer.content;
      if (namespace === "svg" || namespace === "mathml") {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
    // first
    before ? before.nextSibling : parent.firstChild,
    // last
    anchor ? anchor.previousSibling : parent.lastChild];
  }
};
const TRANSITION = "transition";
const ANIMATION = "animation";
const vtcKey = Symbol("_vtc");
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = /* @__PURE__ */(0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .extend */ .X$)({}, _vue_runtime_core__WEBPACK_IMPORTED_MODULE_14__/* .BaseTransitionPropsValidators */ .QP, DOMTransitionPropsValidators);
const decorate$1 = t => {
  t.displayName = "Transition";
  t.props = TransitionPropsValidators;
  return t;
};
const Transition = /* @__PURE__ */(/* unused pure expression or super */ null && (decorate$1((props, {
  slots
}) => h(BaseTransition, resolveTransitionProps(props), slots))));
const callHook = (hook, args = []) => {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isArray */ .cy)(hook)) {
    hook.forEach(h2 => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = hook => {
  return hook ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isArray */ .cy)(hook) ? hook.some(h2 => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const {
    name = "v",
    type,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps;
  const finishEnter = (el, isAppear, done, isCancelled) => {
    el._enterCancelled = isCancelled;
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = isAppear => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve);
        }
      });
    };
  };
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .extend */ .X$)(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      if (!el._enterCancelled) {
        forceReflow();
        addTransitionClass(el, leaveActiveClass);
      } else {
        addTransitionClass(el, leaveActiveClass);
        forceReflow();
      }
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve);
        }
      });
      callHook(onLeave, [el, resolve]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false, void 0, true);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true, void 0, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isObject */ .Gv)(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .toNumber */ .Ro)(val);
  if (false) {}
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(c => c && el.classList.add(c));
  (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(c => c && el.classList.remove(c));
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el[vtcKey] = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve();
    }
  };
  if (explicitTimeout != null) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const {
    type,
    timeout,
    propCount
  } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = e => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = key => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
  const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
  const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(getStyleProperties(`${TRANSITION}Property`).toString());
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  if (s === "auto") return 0;
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
function patchClass(el, value, isSVG) {
  const transitionClasses = el[vtcKey];
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
const vShowOriginalDisplay = Symbol("_vod");
const vShowHidden = Symbol("_vsh");
const vShow = {
  beforeMount(el, {
    value
  }, {
    transition
  }) {
    el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, {
    value
  }, {
    transition
  }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, {
    value,
    oldValue
  }, {
    transition
  }) {
    if (!value === !oldValue) return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, {
    value
  }) {
    setDisplay(el, value);
  }
};
if (false) {}
function setDisplay(el, value) {
  el.style.display = value ? el[vShowOriginalDisplay] : "none";
  el[vShowHidden] = !value;
}
function initVShowForSSR() {
  vShow.getSSRProps = ({
    value
  }) => {
    if (!value) {
      return {
        style: {
          display: "none"
        }
      };
    }
  };
}
const CSS_VAR_TEXT = Symbol( false ? 0 : "");
function useCssVars(getter) {
  const instance = getCurrentInstance();
  if (!instance) {
     false && 0;
    return;
  }
  const updateTeleports = instance.ut = (vars = getter(instance.proxy)) => {
    Array.from(document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)).forEach(node => setVarsOnNode(node, vars));
  };
  if (false) {}
  const setVars = () => {
    const vars = getter(instance.proxy);
    if (instance.ce) {
      setVarsOnNode(instance.ce, vars);
    } else {
      setVarsOnVNode(instance.subTree, vars);
    }
    updateTeleports(vars);
  };
  onBeforeUpdate(() => {
    queuePostFlushCb(setVars);
  });
  onMounted(() => {
    watch(setVars, NOOP, {
      flush: "post"
    });
    const ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, {
      childList: true
    });
    onUnmounted(() => ob.disconnect());
  });
}
function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128) {
    const suspense = vnode.suspense;
    vnode = suspense.activeBranch;
    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(() => {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  }
  while (vnode.component) {
    vnode = vnode.component.subTree;
  }
  if (vnode.shapeFlag & 1 && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === Fragment) {
    vnode.children.forEach(c => setVarsOnVNode(c, vars));
  } else if (vnode.type === Static) {
    let {
      el,
      anchor
    } = vnode;
    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor) break;
      el = el.nextSibling;
    }
  }
}
function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    const style = el.style;
    let cssText = "";
    for (const key in vars) {
      style.setProperty(`--${key}`, vars[key]);
      cssText += `--${key}: ${vars[key]};`;
    }
    style[CSS_VAR_TEXT] = cssText;
  }
}
const displayRE = /(^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isString */ .Kg)(next);
  let hasControlledDisplay = false;
  if (next && !isCssString) {
    if (prev) {
      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isString */ .Kg)(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      } else {
        for (const prevStyle of prev.split(";")) {
          const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
    }
    for (const key in next) {
      if (key === "display") {
        hasControlledDisplay = true;
      }
      setStyle(style, key, next[key]);
    }
  } else {
    if (isCssString) {
      if (prev !== next) {
        const cssVarText = style[CSS_VAR_TEXT];
        if (cssVarText) {
          next += ";" + cssVarText;
        }
        style.cssText = next;
        hasControlledDisplay = displayRE.test(next);
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
  }
  if (vShowOriginalDisplay in el) {
    el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
    if (el[vShowHidden]) {
      style.display = "none";
    }
  }
}
const semicolonRE = /[^\\];\s*$/;
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isArray */ .cy)(val)) {
    val.forEach(v => setStyle(style, name, v));
  } else {
    if (val == null) val = "";
    if (false) {}
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty((0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .hyphenate */ .Tg)(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .camelize */ .PT)(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .capitalize */ .ZH)(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isSpecialBooleanAttr */ .J$)(key)) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (value == null || isBoolean && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .includeBooleanAttr */ .Y2)(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? "" : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isSymbol */ .Bm)(value) ? String(value) : value);
    }
  }
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
  if (key === "innerHTML" || key === "textContent") {
    if (value != null) {
      el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
    }
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" &&
  // custom elements may use _value internally
  !tag.includes("-")) {
    const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
    const newValue = value == null ?
    // #11647: value should be set as empty string for null and undefined,
    // but <input type="checkbox"> should be set as 'on'.
    el.type === "checkbox" ? "on" : "" : String(value);
    if (oldValue !== newValue || !("_value" in el)) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    el._value = value;
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .includeBooleanAttr */ .Y2)(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
    if (false) {}
  }
  needRemove && el.removeAttribute(attrName || key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
const veiKey = Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el[veiKey] || (el[veiKey] = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value =  false ? 0 : nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker( false ? 0 : nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .hyphenate */ .Tg)(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p = /* @__PURE__ */Promise.resolve();
const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = e => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_14__/* .callWithAsyncErrorHandling */ .qL)(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function sanitizeEventValue(value, propName) {
  if (isFunction(value) || isArray(value)) {
    return value;
  }
  warn(`Wrong type passed as event handler to ${propName} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof value}.`);
  return NOOP;
}
function patchStopImmediatePropagation(e, value) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isArray */ .cy)(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map(fn => e2 => !e2._stopped && fn && fn(e2));
  } else {
    return value;
  }
}
const isNativeOn = key => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 &&
// lowercase letter
key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
  const isSVG = namespace === "svg";
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isOn */ .Mp)(key)) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isModelListener */ .CP)(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue);
    if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
      patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
    }
  } else if (
  // #11081 force set props for possible async custom element
  el._isVueCE && (/[A-Z]/.test(key) || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isString */ .Kg)(nextValue))) {
    patchDOMProp(el, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .camelize */ .PT)(key), nextValue, parentComponent, key);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && isNativeOn(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isFunction */ .Tn)(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (key === "width" || key === "height") {
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
      return false;
    }
  }
  if (isNativeOn(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isString */ .Kg)(value)) {
    return false;
  }
  return key in el;
}
const REMOVAL = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineCustomElement(options, extraOptions, _createApp) {
  const Comp = defineComponent(options, extraOptions);
  if (isPlainObject(Comp)) extend(Comp, extraOptions);
  class VueCustomElement extends VueElement {
    constructor(initialProps) {
      super(Comp, initialProps, _createApp);
    }
  }
  VueCustomElement.def = Comp;
  return VueCustomElement;
}
/*! #__NO_SIDE_EFFECTS__ */
const defineSSRCustomElement = /* @__NO_SIDE_EFFECTS__ */(options, extraOptions) => {
  return /* @__PURE__ */defineCustomElement(options, extraOptions, createSSRApp);
};
const BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
class VueElement extends BaseClass {
  constructor(_def, _props = {}, _createApp = createApp) {
    super();
    this._def = _def;
    this._props = _props;
    this._createApp = _createApp;
    this._isVueCE = true;
    /**
     * @internal
     */
    this._instance = null;
    /**
     * @internal
     */
    this._app = null;
    /**
     * @internal
     */
    this._nonce = this._def.nonce;
    this._connected = false;
    this._resolved = false;
    this._numberProps = null;
    this._styleChildren = /* @__PURE__ */new WeakSet();
    this._ob = null;
    if (this.shadowRoot && _createApp !== createApp) {
      this._root = this.shadowRoot;
    } else {
      if (false) {}
      if (_def.shadowRoot !== false) {
        this.attachShadow({
          mode: "open"
        });
        this._root = this.shadowRoot;
      } else {
        this._root = this;
      }
    }
    if (!this._def.__asyncLoader) {
      this._resolveProps(this._def);
    }
  }
  connectedCallback() {
    if (!this.isConnected) return;
    if (!this.shadowRoot) {
      this._parseSlots();
    }
    this._connected = true;
    let parent = this;
    while (parent = parent && (parent.parentNode || parent.host)) {
      if (parent instanceof VueElement) {
        this._parent = parent;
        break;
      }
    }
    if (!this._instance) {
      if (this._resolved) {
        this._setParent();
        this._update();
      } else {
        if (parent && parent._pendingResolve) {
          this._pendingResolve = parent._pendingResolve.then(() => {
            this._pendingResolve = void 0;
            this._resolveDef();
          });
        } else {
          this._resolveDef();
        }
      }
    }
  }
  _setParent(parent = this._parent) {
    if (parent) {
      this._instance.parent = parent._instance;
      this._instance.provides = parent._instance.provides;
    }
  }
  disconnectedCallback() {
    this._connected = false;
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_14__/* .nextTick */ .dY)(() => {
      if (!this._connected) {
        if (this._ob) {
          this._ob.disconnect();
          this._ob = null;
        }
        this._app && this._app.unmount();
        if (this._instance) this._instance.ce = void 0;
        this._app = this._instance = null;
      }
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve) {
      return;
    }
    for (let i = 0; i < this.attributes.length; i++) {
      this._setAttr(this.attributes[i].name);
    }
    this._ob = new MutationObserver(mutations => {
      for (const m of mutations) {
        this._setAttr(m.attributeName);
      }
    });
    this._ob.observe(this, {
      attributes: true
    });
    const resolve = (def, isAsync = false) => {
      this._resolved = true;
      this._pendingResolve = void 0;
      const {
        props,
        styles
      } = def;
      let numberProps;
      if (props && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isArray */ .cy)(props)) {
        for (const key in props) {
          const opt = props[key];
          if (opt === Number || opt && opt.type === Number) {
            if (key in this._props) {
              this._props[key] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .toNumber */ .Ro)(this._props[key]);
            }
            (numberProps || (numberProps = /* @__PURE__ */Object.create(null)))[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .camelize */ .PT)(key)] = true;
          }
        }
      }
      this._numberProps = numberProps;
      if (isAsync) {
        this._resolveProps(def);
      }
      if (this.shadowRoot) {
        this._applyStyles(styles);
      } else if (false) {}
      this._mount(def);
    };
    const asyncDef = this._def.__asyncLoader;
    if (asyncDef) {
      this._pendingResolve = asyncDef().then(def => resolve(this._def = def, true));
    } else {
      resolve(this._def);
    }
  }
  _mount(def) {
    if (false) {}
    this._app = this._createApp(def);
    if (def.configureApp) {
      def.configureApp(this._app);
    }
    this._app._ceVNode = this._createVNode();
    this._app.mount(this._root);
    const exposed = this._instance && this._instance.exposed;
    if (!exposed) return;
    for (const key in exposed) {
      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .hasOwn */ .$3)(this, key)) {
        Object.defineProperty(this, key, {
          // unwrap ref to be consistent with public instance behavior
          get: () => (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_15__/* .unref */ .R1)(exposed[key])
        });
      } else if (false) {}
    }
  }
  _resolveProps(def) {
    const {
      props
    } = def;
    const declaredPropKeys = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isArray */ .cy)(props) ? props : Object.keys(props || {});
    for (const key of Object.keys(this)) {
      if (key[0] !== "_" && declaredPropKeys.includes(key)) {
        this._setProp(key, this[key]);
      }
    }
    for (const key of declaredPropKeys.map(_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .camelize */ .PT)) {
      Object.defineProperty(this, key, {
        get() {
          return this._getProp(key);
        },
        set(val) {
          this._setProp(key, val, true, true);
        }
      });
    }
  }
  _setAttr(key) {
    if (key.startsWith("data-v-")) return;
    const has = this.hasAttribute(key);
    let value = has ? this.getAttribute(key) : REMOVAL;
    const camelKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .camelize */ .PT)(key);
    if (has && this._numberProps && this._numberProps[camelKey]) {
      value = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .toNumber */ .Ro)(value);
    }
    this._setProp(camelKey, value, false, true);
  }
  /**
   * @internal
   */
  _getProp(key) {
    return this._props[key];
  }
  /**
   * @internal
   */
  _setProp(key, val, shouldReflect = true, shouldUpdate = false) {
    if (val !== this._props[key]) {
      if (val === REMOVAL) {
        delete this._props[key];
      } else {
        this._props[key] = val;
        if (key === "key" && this._app) {
          this._app._ceVNode.key = val;
        }
      }
      if (shouldUpdate && this._instance) {
        this._update();
      }
      if (shouldReflect) {
        const ob = this._ob;
        ob && ob.disconnect();
        if (val === true) {
          this.setAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .hyphenate */ .Tg)(key), "");
        } else if (typeof val === "string" || typeof val === "number") {
          this.setAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .hyphenate */ .Tg)(key), val + "");
        } else if (!val) {
          this.removeAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .hyphenate */ .Tg)(key));
        }
        ob && ob.observe(this, {
          attributes: true
        });
      }
    }
  }
  _update() {
    render(this._createVNode(), this._root);
  }
  _createVNode() {
    const baseProps = {};
    if (!this.shadowRoot) {
      baseProps.onVnodeMounted = baseProps.onVnodeUpdated = this._renderSlots.bind(this);
    }
    const vnode = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_14__/* .createVNode */ .bF)(this._def, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .extend */ .X$)(baseProps, this._props));
    if (!this._instance) {
      vnode.ce = instance => {
        this._instance = instance;
        instance.ce = this;
        instance.isCE = true;
        if (false) {}
        const dispatch = (event, args) => {
          this.dispatchEvent(new CustomEvent(event, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isPlainObject */ .Qd)(args[0]) ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .extend */ .X$)({
            detail: args
          }, args[0]) : {
            detail: args
          }));
        };
        instance.emit = (event, ...args) => {
          dispatch(event, args);
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .hyphenate */ .Tg)(event) !== event) {
            dispatch((0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .hyphenate */ .Tg)(event), args);
          }
        };
        this._setParent();
      };
    }
    return vnode;
  }
  _applyStyles(styles, owner) {
    if (!styles) return;
    if (owner) {
      if (owner === this._def || this._styleChildren.has(owner)) {
        return;
      }
      this._styleChildren.add(owner);
    }
    const nonce = this._nonce;
    for (let i = styles.length - 1; i >= 0; i--) {
      const s = document.createElement("style");
      if (nonce) s.setAttribute("nonce", nonce);
      s.textContent = styles[i];
      this.shadowRoot.prepend(s);
      if (false) {}
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const slots = this._slots = {};
    let n;
    while (n = this.firstChild) {
      const slotName = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (slots[slotName] || (slots[slotName] = [])).push(n);
      this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const outlets = (this._teleportTarget || this).querySelectorAll("slot");
    const scopeId = this._instance.type.__scopeId;
    for (let i = 0; i < outlets.length; i++) {
      const o = outlets[i];
      const slotName = o.getAttribute("name") || "default";
      const content = this._slots[slotName];
      const parent = o.parentNode;
      if (content) {
        for (const n of content) {
          if (scopeId && n.nodeType === 1) {
            const id = scopeId + "-s";
            const walker = document.createTreeWalker(n, 1);
            n.setAttribute(id, "");
            let child;
            while (child = walker.nextNode()) {
              child.setAttribute(id, "");
            }
          }
          parent.insertBefore(n, o);
        }
      } else {
        while (o.firstChild) parent.insertBefore(o.firstChild, o);
      }
      parent.removeChild(o);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(comp) {
    this._applyStyles(comp.styles, comp);
  }
  /**
   * @internal
   */
  _removeChildStyle(comp) {
    if (false) {}
  }
}
function useHost(caller) {
  const instance = getCurrentInstance();
  const el = instance && instance.ce;
  if (el) {
    return el;
  } else if (false) {}
  return null;
}
function useShadowRoot() {
  const el =  false ? 0 : useHost();
  return el && el.shadowRoot;
}
function useCssModule(name = "$style") {
  {
    const instance = getCurrentInstance();
    if (!instance) {
       false && 0;
      return EMPTY_OBJ;
    }
    const modules = instance.type.__cssModules;
    if (!modules) {
       false && 0;
      return EMPTY_OBJ;
    }
    const mod = modules[name];
    if (!mod) {
       false && 0;
      return EMPTY_OBJ;
    }
    return mod;
  }
}
const positionMap = /* @__PURE__ */new WeakMap();
const newPositionMap = /* @__PURE__ */new WeakMap();
const moveCbKey = Symbol("_moveCb");
const enterCbKey = Symbol("_enterCb");
const decorate = t => {
  delete t.props.mode;
  return t;
};
const TransitionGroupImpl = /* @__PURE__ */decorate({
  name: "TransitionGroup",
  props: /* @__PURE__ */(0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .extend */ .X$)({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup(props, {
    slots
  }) {
    const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_14__/* .getCurrentInstance */ .nI)();
    const state = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_14__/* .useTransitionState */ .Gy)();
    let prevChildren;
    let children;
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_14__/* .onUpdated */ .$u)(() => {
      if (!prevChildren.length) {
        return;
      }
      const moveClass = props.moveClass || `${props.name || "v"}-move`;
      if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
        return;
      }
      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      const movedChildren = prevChildren.filter(applyTranslation);
      forceReflow();
      movedChildren.forEach(c => {
        const el = c.el;
        const style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = "";
        const cb = el[moveCbKey] = e => {
          if (e && e.target !== el) {
            return;
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener("transitionend", cb);
            el[moveCbKey] = null;
            removeTransitionClass(el, moveClass);
          }
        };
        el.addEventListener("transitionend", cb);
      });
    });
    return () => {
      const rawProps = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_15__/* .toRaw */ .ux)(props);
      const cssTransitionProps = resolveTransitionProps(rawProps);
      let tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_14__/* .Fragment */ .FK;
      prevChildren = [];
      if (children) {
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (child.el && child.el instanceof Element) {
            prevChildren.push(child);
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_14__/* .setTransitionHooks */ .MZ)(child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_14__/* .resolveTransitionHooks */ .OW)(child, cssTransitionProps, state, instance));
            positionMap.set(child, child.el.getBoundingClientRect());
          }
        }
      }
      children = slots.default ? (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_14__/* .getTransitionRawChildren */ .Df)(slots.default()) : [];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.key != null) {
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_14__/* .setTransitionHooks */ .MZ)(child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_14__/* .resolveTransitionHooks */ .OW)(child, cssTransitionProps, state, instance));
        } else if (false) {}
      }
      return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_14__/* .createVNode */ .bF)(tag, null, children);
    };
  }
});
const TransitionGroup = (/* unused pure expression or super */ null && (TransitionGroupImpl));
function callPendingCbs(c) {
  const el = c.el;
  if (el[moveCbKey]) {
    el[moveCbKey]();
  }
  if (el[enterCbKey]) {
    el[enterCbKey]();
  }
}
function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
  const oldPos = positionMap.get(c);
  const newPos = newPositionMap.get(c);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;
  if (dx || dy) {
    const s = c.el.style;
    s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
    s.transitionDuration = "0s";
    return c;
  }
}
function hasCSSTransform(el, root, moveClass) {
  const clone = el.cloneNode();
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.forEach(cls => {
      cls.split(/\s+/).forEach(c => c && clone.classList.remove(c));
    });
  }
  moveClass.split(/\s+/).forEach(c => c && clone.classList.add(c));
  clone.style.display = "none";
  const container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);
  const {
    hasTransform
  } = getTransitionInfo(clone);
  container.removeChild(clone);
  return hasTransform;
}
const getModelAssigner = vnode => {
  const fn = vnode.props["onUpdate:modelValue"] || false;
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isArray */ .cy)(fn) ? value => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .invokeArrayFns */ .DY)(fn, value) : fn;
};
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  const target = e.target;
  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}
const assignKey = Symbol("_assign");
const vModelText = {
  created(el, {
    modifiers: {
      lazy,
      trim,
      number
    }
  }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    const castToNumber = number || vnode.props && vnode.props.type === "number";
    addEventListener(el, lazy ? "change" : "input", e => {
      if (e.target.composing) return;
      let domValue = el.value;
      if (trim) {
        domValue = domValue.trim();
      }
      if (castToNumber) {
        domValue = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .looseToNumber */ .bB)(domValue);
      }
      el[assignKey](domValue);
    });
    if (trim) {
      addEventListener(el, "change", () => {
        el.value = el.value.trim();
      });
    }
    if (!lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(el, {
    value
  }) {
    el.value = value == null ? "" : value;
  },
  beforeUpdate(el, {
    value,
    oldValue,
    modifiers: {
      lazy,
      trim,
      number
    }
  }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (el.composing) return;
    const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .looseToNumber */ .bB)(el.value) : el.value;
    const newValue = value == null ? "" : value;
    if (elValue === newValue) {
      return;
    }
    if (document.activeElement === el && el.type !== "range") {
      if (lazy && value === oldValue) {
        return;
      }
      if (trim && el.value.trim() === newValue) {
        return;
      }
    }
    el.value = newValue;
  }
};
const vModelCheckbox = {
  // #4096 array checkboxes need to be deep traversed
  deep: true,
  created(el, _, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      const modelValue = el._modelValue;
      const elementValue = getValue(el);
      const checked = el.checked;
      const assign = el[assignKey];
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isArray */ .cy)(modelValue)) {
        const index = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .looseIndexOf */ .u3)(modelValue, elementValue);
        const found = index !== -1;
        if (checked && !found) {
          assign(modelValue.concat(elementValue));
        } else if (!checked && found) {
          const filtered = [...modelValue];
          filtered.splice(index, 1);
          assign(filtered);
        }
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isSet */ .vM)(modelValue)) {
        const cloned = new Set(modelValue);
        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }
        assign(cloned);
      } else {
        assign(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate(el, binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};
function setChecked(el, {
  value,
  oldValue
}, vnode) {
  el._modelValue = value;
  let checked;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isArray */ .cy)(value)) {
    checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .looseIndexOf */ .u3)(value, vnode.props.value) > -1;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isSet */ .vM)(value)) {
    checked = value.has(vnode.props.value);
  } else {
    if (value === oldValue) return;
    checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .looseEqual */ .BX)(value, getCheckboxValue(el, true));
  }
  if (el.checked !== checked) {
    el.checked = checked;
  }
}
const vModelRadio = {
  created(el, {
    value
  }, vnode) {
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .looseEqual */ .BX)(value, vnode.props.value);
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      el[assignKey](getValue(el));
    });
  },
  beforeUpdate(el, {
    value,
    oldValue
  }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (value !== oldValue) {
      el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .looseEqual */ .BX)(value, vnode.props.value);
    }
  }
};
const vModelSelect = {
  // <select multiple> value need to be deep traversed
  deep: true,
  created(el, {
    value,
    modifiers: {
      number
    }
  }, vnode) {
    const isSetModel = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isSet */ .vM)(value);
    addEventListener(el, "change", () => {
      const selectedVal = Array.prototype.filter.call(el.options, o => o.selected).map(o => number ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .looseToNumber */ .bB)(getValue(o)) : getValue(o));
      el[assignKey](el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
      el._assigning = true;
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_14__/* .nextTick */ .dY)(() => {
        el._assigning = false;
      });
    });
    el[assignKey] = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(el, {
    value
  }) {
    setSelected(el, value);
  },
  beforeUpdate(el, _binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
  },
  updated(el, {
    value
  }) {
    if (!el._assigning) {
      setSelected(el, value);
    }
  }
};
function setSelected(el, value) {
  const isMultiple = el.multiple;
  const isArrayValue = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isArray */ .cy)(value);
  if (isMultiple && !isArrayValue && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isSet */ .vM)(value)) {
     false && 0;
    return;
  }
  for (let i = 0, l = el.options.length; i < l; i++) {
    const option = el.options[i];
    const optionValue = getValue(option);
    if (isMultiple) {
      if (isArrayValue) {
        const optionType = typeof optionValue;
        if (optionType === "string" || optionType === "number") {
          option.selected = value.some(v => String(v) === String(optionValue));
        } else {
          option.selected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .looseIndexOf */ .u3)(value, optionValue) > -1;
        }
      } else {
        option.selected = value.has(optionValue);
      }
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .looseEqual */ .BX)(getValue(option), value)) {
      if (el.selectedIndex !== i) el.selectedIndex = i;
      return;
    }
  }
  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
}
function getValue(el) {
  return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
  const key = checked ? "_trueValue" : "_falseValue";
  return key in el ? el[key] : checked;
}
const vModelDynamic = {
  created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "created");
  },
  mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "mounted");
  },
  beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
  },
  updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "updated");
  }
};
function resolveDynamicModel(tagName, type) {
  switch (tagName) {
    case "SELECT":
      return vModelSelect;
    case "TEXTAREA":
      return vModelText;
    default:
      switch (type) {
        case "checkbox":
          return vModelCheckbox;
        case "radio":
          return vModelRadio;
        default:
          return vModelText;
      }
  }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
  const modelToUse = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
  const fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
}
function initVModelForSSR() {
  vModelText.getSSRProps = ({
    value
  }) => ({
    value
  });
  vModelRadio.getSSRProps = ({
    value
  }, vnode) => {
    if (vnode.props && looseEqual(vnode.props.value, value)) {
      return {
        checked: true
      };
    }
  };
  vModelCheckbox.getSSRProps = ({
    value
  }, vnode) => {
    if (isArray(value)) {
      if (vnode.props && looseIndexOf(value, vnode.props.value) > -1) {
        return {
          checked: true
        };
      }
    } else if (isSet(value)) {
      if (vnode.props && value.has(vnode.props.value)) {
        return {
          checked: true
        };
      }
    } else if (value) {
      return {
        checked: true
      };
    }
  };
  vModelDynamic.getSSRProps = (binding, vnode) => {
    if (typeof vnode.type !== "string") {
      return;
    }
    const modelToUse = resolveDynamicModel(
    // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
    vnode.type.toUpperCase(), vnode.props && vnode.props.type);
    if (modelToUse.getSSRProps) {
      return modelToUse.getSSRProps(binding, vnode);
    }
  };
}
const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: e => e.stopPropagation(),
  prevent: e => e.preventDefault(),
  self: e => e.target !== e.currentTarget,
  ctrl: e => !e.ctrlKey,
  shift: e => !e.shiftKey,
  alt: e => !e.altKey,
  meta: e => !e.metaKey,
  left: e => "button" in e && e.button !== 0,
  middle: e => "button" in e && e.button !== 1,
  right: e => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some(m => e[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers) => {
  const cache = fn._withMods || (fn._withMods = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = (event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }
    return fn(event, ...args);
  });
};
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn, modifiers) => {
  const cache = fn._withKeys || (fn._withKeys = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = event => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = hyphenate(event.key);
    if (modifiers.some(k => k === eventKey || keyNames[k] === eventKey)) {
      return fn(event);
    }
  });
};
const rendererOptions = /* @__PURE__ */(0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .extend */ .X$)({
  patchProp
}, nodeOps);
let renderer;
let enabledHydration = false;
function ensureRenderer() {
  return renderer || (renderer = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_14__/* .createRenderer */ .K9)(rendererOptions));
}
function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
  enabledHydration = true;
  return renderer;
}
const render = (...args) => {
  ensureRenderer().render(...args);
};
const hydrate = (...args) => {
  ensureHydrationRenderer().hydrate(...args);
};
const createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);
  if (false) {}
  const {
    mount
  } = app;
  app.mount = containerOrSelector => {
    const container = normalizeContainer(containerOrSelector);
    if (!container) return;
    const component = app._component;
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isFunction */ .Tn)(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    if (container.nodeType === 1) {
      container.textContent = "";
    }
    const proxy = mount(container, false, resolveRootNamespace(container));
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
const createSSRApp = (...args) => {
  const app = ensureHydrationRenderer().createApp(...args);
  if (false) {}
  const {
    mount
  } = app;
  app.mount = containerOrSelector => {
    const container = normalizeContainer(containerOrSelector);
    if (container) {
      return mount(container, true, resolveRootNamespace(container));
    }
  };
  return app;
};
function resolveRootNamespace(container) {
  if (container instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
    return "mathml";
  }
}
function injectNativeTagCheck(app) {
  Object.defineProperty(app.config, "isNativeTag", {
    value: tag => isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
    writable: false
  });
}
function injectCompilerOptionsCheck(app) {
  if (isRuntimeOnly()) {
    const isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, "isCustomElement", {
      get() {
        return isCustomElement;
      },
      set() {
        warn(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
      }
    });
    const compilerOptions = app.config.compilerOptions;
    const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
    Object.defineProperty(app.config, "compilerOptions", {
      get() {
        warn(msg);
        return compilerOptions;
      },
      set() {
        warn(msg);
      }
    });
  }
}
function normalizeContainer(container) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_13__/* .isString */ .Kg)(container)) {
    const res = document.querySelector(container);
    if (false) {}
    return res;
  }
  if (false) {}
  return container;
}
let ssrDirectiveInitialized = false;
const initDirectivesForSSR = () => {
  if (!ssrDirectiveInitialized) {
    ssrDirectiveInitialized = true;
    initVModelForSSR();
    initVShowForSSR();
  }
};


/***/ }),

/***/ 4232:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $3: function() { return /* binding */ hasOwn; },
/* harmony export */   $H: function() { return /* binding */ hasChanged; },
/* harmony export */   BH: function() { return /* binding */ isGloballyAllowed; },
/* harmony export */   BX: function() { return /* binding */ looseEqual; },
/* harmony export */   Bm: function() { return /* binding */ isSymbol; },
/* harmony export */   C4: function() { return /* binding */ normalizeClass; },
/* harmony export */   CE: function() { return /* binding */ isMap; },
/* harmony export */   CP: function() { return /* binding */ isModelListener; },
/* harmony export */   DY: function() { return /* binding */ invokeArrayFns; },
/* harmony export */   Gv: function() { return /* binding */ isObject; },
/* harmony export */   J$: function() { return /* binding */ isSpecialBooleanAttr; },
/* harmony export */   Kg: function() { return /* binding */ isString; },
/* harmony export */   MZ: function() { return /* binding */ EMPTY_OBJ; },
/* harmony export */   Mp: function() { return /* binding */ isOn; },
/* harmony export */   NO: function() { return /* binding */ NO; },
/* harmony export */   Oj: function() { return /* binding */ EMPTY_ARR; },
/* harmony export */   PT: function() { return /* binding */ camelize; },
/* harmony export */   Qd: function() { return /* binding */ isPlainObject; },
/* harmony export */   Ro: function() { return /* binding */ toNumber; },
/* harmony export */   SU: function() { return /* binding */ isReservedProp; },
/* harmony export */   TF: function() { return /* binding */ remove; },
/* harmony export */   Tg: function() { return /* binding */ hyphenate; },
/* harmony export */   Tn: function() { return /* binding */ isFunction; },
/* harmony export */   Tr: function() { return /* binding */ normalizeStyle; },
/* harmony export */   We: function() { return /* binding */ getGlobalThis; },
/* harmony export */   X$: function() { return /* binding */ extend; },
/* harmony export */   Y2: function() { return /* binding */ includeBooleanAttr; },
/* harmony export */   ZH: function() { return /* binding */ capitalize; },
/* harmony export */   Zf: function() { return /* binding */ toRawType; },
/* harmony export */   bB: function() { return /* binding */ looseToNumber; },
/* harmony export */   cy: function() { return /* binding */ isArray; },
/* harmony export */   gd: function() { return /* binding */ isRegExp; },
/* harmony export */   pD: function() { return /* binding */ makeMap; },
/* harmony export */   rU: function() { return /* binding */ toHandlerKey; },
/* harmony export */   tE: function() { return /* binding */ NOOP; },
/* harmony export */   u3: function() { return /* binding */ looseIndexOf; },
/* harmony export */   vM: function() { return /* binding */ isSet; },
/* harmony export */   v_: function() { return /* binding */ toDisplayString; },
/* harmony export */   yI: function() { return /* binding */ isIntegerKey; },
/* harmony export */   yL: function() { return /* binding */ isPromise; },
/* harmony export */   yQ: function() { return /* binding */ def; }
/* harmony export */ });
/* unused harmony exports PatchFlagNames, PatchFlags, ShapeFlags, SlotFlags, cssVarNameEscapeSymbolsRE, escapeHtml, escapeHtmlComment, genCacheKey, genPropsAccessExp, generateCodeFrame, getEscapedCssVarName, isBooleanAttr, isBuiltInDirective, isDate, isGloballyWhitelisted, isHTMLTag, isKnownHtmlAttr, isKnownMathMLAttr, isKnownSvgAttr, isMathMLTag, isRenderableAttrValue, isSSRSafeAttrName, isSVGTag, isVoidTag, normalizeProps, objectToString, parseStringStyle, propsToAttrMap, slotFlagsText, stringifyStyle, toTypeString */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4114);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8992);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4520);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3949);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1454);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8872);
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_5__);






/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function makeMap(str) {
  const map = /* @__PURE__ */Object.create(null);
  for (const key of str.split(",")) map[key] = 1;
  return val => val in map;
}
const EMPTY_OBJ =  false ? 0 : {};
const EMPTY_ARR =  false ? 0 : [];
const NOOP = () => {};
const NO = () => false;
const isOn = key => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && (
// uppercase letter
key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = key => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = val => toTypeString(val) === "[object Map]";
const isSet = val => toTypeString(val) === "[object Set]";
const isDate = val => toTypeString(val) === "[object Date]";
const isRegExp = val => toTypeString(val) === "[object RegExp]";
const isFunction = val => typeof val === "function";
const isString = val => typeof val === "string";
const isSymbol = val => typeof val === "symbol";
const isObject = val => val !== null && typeof val === "object";
const isPromise = val => {
  return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = value => objectToString.call(value);
const toRawType = value => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = val => toTypeString(val) === "[object Object]";
const isIntegerKey = key => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */makeMap(
// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /* @__PURE__ */(/* unused pure expression or super */ null && (makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo")));
const cacheStringFunction = fn => {
  const cache = /* @__PURE__ */Object.create(null);
  return str => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction(str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(str => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction(str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction(str => {
  const s = str ? `on${capitalize(str)}` : ``;
  return s;
});
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](...arg);
  }
};
const def = (obj, key, value, writable = false) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    writable,
    value
  });
};
const looseToNumber = val => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber = val => {
  const n = isString(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
  return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
function genCacheKey(source, options) {
  return source + JSON.stringify(options, (_, val) => typeof val === "function" ? val.toString() : val);
}
const PatchFlags = {
  "TEXT": 1,
  "1": "TEXT",
  "CLASS": 2,
  "2": "CLASS",
  "STYLE": 4,
  "4": "STYLE",
  "PROPS": 8,
  "8": "PROPS",
  "FULL_PROPS": 16,
  "16": "FULL_PROPS",
  "NEED_HYDRATION": 32,
  "32": "NEED_HYDRATION",
  "STABLE_FRAGMENT": 64,
  "64": "STABLE_FRAGMENT",
  "KEYED_FRAGMENT": 128,
  "128": "KEYED_FRAGMENT",
  "UNKEYED_FRAGMENT": 256,
  "256": "UNKEYED_FRAGMENT",
  "NEED_PATCH": 512,
  "512": "NEED_PATCH",
  "DYNAMIC_SLOTS": 1024,
  "1024": "DYNAMIC_SLOTS",
  "DEV_ROOT_FRAGMENT": 2048,
  "2048": "DEV_ROOT_FRAGMENT",
  "CACHED": -1,
  "-1": "CACHED",
  "BAIL": -2,
  "-2": "BAIL"
};
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `NEED_HYDRATION`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};
const ShapeFlags = {
  "ELEMENT": 1,
  "1": "ELEMENT",
  "FUNCTIONAL_COMPONENT": 2,
  "2": "FUNCTIONAL_COMPONENT",
  "STATEFUL_COMPONENT": 4,
  "4": "STATEFUL_COMPONENT",
  "TEXT_CHILDREN": 8,
  "8": "TEXT_CHILDREN",
  "ARRAY_CHILDREN": 16,
  "16": "ARRAY_CHILDREN",
  "SLOTS_CHILDREN": 32,
  "32": "SLOTS_CHILDREN",
  "TELEPORT": 64,
  "64": "TELEPORT",
  "SUSPENSE": 128,
  "128": "SUSPENSE",
  "COMPONENT_SHOULD_KEEP_ALIVE": 256,
  "256": "COMPONENT_SHOULD_KEEP_ALIVE",
  "COMPONENT_KEPT_ALIVE": 512,
  "512": "COMPONENT_KEPT_ALIVE",
  "COMPONENT": 6,
  "6": "COMPONENT"
};
const SlotFlags = {
  "STABLE": 1,
  "1": "STABLE",
  "DYNAMIC": 2,
  "2": "DYNAMIC",
  "FORWARDED": 3,
  "3": "FORWARDED"
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
const GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol";
const isGloballyAllowed = /* @__PURE__ */makeMap(GLOBALS_ALLOWED);
const isGloballyWhitelisted = (/* unused pure expression or super */ null && (isGloballyAllowed));
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  start = Math.max(0, Math.min(start, source.length));
  end = Math.max(0, Math.min(end, source.length));
  if (start > end) return "";
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value) || isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach(item => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  if (!styles) return "";
  if (isString(styles)) return styles;
  let ret = "";
  for (const key in styles) {
    const value = styles[key];
    if (isString(value) || typeof value === "number") {
      const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props) return null;
  let {
    class: klass,
    style
  } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */(/* unused pure expression or super */ null && (makeMap(HTML_TAGS)));
const isSVGTag = /* @__PURE__ */(/* unused pure expression or super */ null && (makeMap(SVG_TAGS)));
const isMathMLTag = /* @__PURE__ */(/* unused pure expression or super */ null && (makeMap(MATH_TAGS)));
const isVoidTag = /* @__PURE__ */(/* unused pure expression or super */ null && (makeMap(VOID_TAGS)));
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isKnownHtmlAttr = /* @__PURE__ */(/* unused pure expression or super */ null && (makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`)));
const isKnownSvgAttr = /* @__PURE__ */(/* unused pure expression or super */ null && (makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`)));
const isKnownMathMLAttr = /* @__PURE__ */(/* unused pure expression or super */ null && (makeMap(`accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns`)));
function isRenderableAttrValue(value) {
  if (value == null) {
    return false;
  }
  const type = typeof value;
  return type === "string" || type === "number" || type === "boolean";
}
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index;
  let lastIndex = 0;
  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    }
    lastIndex = index + 1;
    html += escaped;
  }
  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
const cssVarNameEscapeSymbolsRE = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function getEscapedCssVarName(key, doubleEscape) {
  return key.replace(cssVarNameEscapeSymbolsRE, s => doubleEscape ? s === '"' ? '\\\\\\"' : `\\\\${s}` : `\\${s}`);
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b) return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject(a);
  bValidType = isObject(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex(item => looseEqual(item, val));
}
const isRef = val => {
  return !!(val && val["__v_isRef"] === true);
};
const toDisplayString = val => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (isRef(val)) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2], i) => {
        entries[stringifySymbol(key, i) + " =>"] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map(v => stringifySymbol(v))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v, i = "") => {
  var _a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v
  );
};


/***/ }),

/***/ 1241:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 9306:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(4901);
var tryToString = __webpack_require__(6823);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 7080:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var has = (__webpack_require__(4402).has);

// Perform ? RequireInternalSlot(M, [[SetData]])
module.exports = function (it) {
  has(it);
  return it;
};


/***/ }),

/***/ 6469:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var wellKnownSymbol = __webpack_require__(8227);
var create = __webpack_require__(2360);
var defineProperty = (__webpack_require__(4913).f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 679:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isPrototypeOf = __webpack_require__(1625);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ 8551:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isObject = __webpack_require__(34);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 5370:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var lengthOfArrayLike = __webpack_require__(6198);

module.exports = function (Constructor, list, $length) {
  var index = 0;
  var length = arguments.length > 2 ? $length : lengthOfArrayLike(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};


/***/ }),

/***/ 9617:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIndexedObject = __webpack_require__(5397);
var toAbsoluteIndex = __webpack_require__(5610);
var lengthOfArrayLike = __webpack_require__(6198);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 4527:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var isArray = __webpack_require__(4376);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 7628:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var lengthOfArrayLike = __webpack_require__(6198);

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
module.exports = function (O, C) {
  var len = lengthOfArrayLike(O);
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = O[len - k - 1];
  return A;
};


/***/ }),

/***/ 6319:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var anObject = __webpack_require__(8551);
var iteratorClose = __webpack_require__(9539);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ 2195:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 6955:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var TO_STRING_TAG_SUPPORT = __webpack_require__(2140);
var isCallable = __webpack_require__(4901);
var classofRaw = __webpack_require__(2195);
var wellKnownSymbol = __webpack_require__(8227);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 7740:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(9297);
var ownKeys = __webpack_require__(5031);
var getOwnPropertyDescriptorModule = __webpack_require__(7347);
var definePropertyModule = __webpack_require__(4913);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 2211:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(9039);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 2529:
/***/ (function(module) {


// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ 6699:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var definePropertyModule = __webpack_require__(4913);
var createPropertyDescriptor = __webpack_require__(6980);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 6980:
/***/ (function(module) {


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 4659:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var definePropertyModule = __webpack_require__(4913);
var createPropertyDescriptor = __webpack_require__(6980);

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),

/***/ 2106:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var makeBuiltIn = __webpack_require__(283);
var defineProperty = __webpack_require__(4913);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ 6840:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(4901);
var definePropertyModule = __webpack_require__(4913);
var makeBuiltIn = __webpack_require__(283);
var defineGlobalProperty = __webpack_require__(9433);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 6279:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var defineBuiltIn = __webpack_require__(6840);

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ 9433:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};


/***/ }),

/***/ 3724:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(9039);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 4055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);
var isObject = __webpack_require__(34);

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 6837:
/***/ (function(module) {


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 8727:
/***/ (function(module) {


// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 2839:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ }),

/***/ 9519:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);
var userAgent = __webpack_require__(2839);

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 6518:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);
var getOwnPropertyDescriptor = (__webpack_require__(7347).f);
var createNonEnumerableProperty = __webpack_require__(6699);
var defineBuiltIn = __webpack_require__(6840);
var defineGlobalProperty = __webpack_require__(9433);
var copyConstructorProperties = __webpack_require__(7740);
var isForced = __webpack_require__(2796);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 9039:
/***/ (function(module) {


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 6080:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(7476);
var aCallable = __webpack_require__(9306);
var NATIVE_BIND = __webpack_require__(616);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 616:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(9039);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 9565:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(616);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 350:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var hasOwn = __webpack_require__(9297);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 6706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var aCallable = __webpack_require__(9306);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 7476:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classofRaw = __webpack_require__(2195);
var uncurryThis = __webpack_require__(9504);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ 9504:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(616);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 4124:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);

module.exports = function (CONSTRUCTOR, METHOD) {
  var Constructor = globalThis[CONSTRUCTOR];
  var Prototype = Constructor && Constructor.prototype;
  return Prototype && Prototype[METHOD];
};


/***/ }),

/***/ 7751:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);
var isCallable = __webpack_require__(4901);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),

/***/ 1767:
/***/ (function(module) {


// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ }),

/***/ 851:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(6955);
var getMethod = __webpack_require__(5966);
var isNullOrUndefined = __webpack_require__(4117);
var Iterators = __webpack_require__(6269);
var wellKnownSymbol = __webpack_require__(8227);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ 81:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(9565);
var aCallable = __webpack_require__(9306);
var anObject = __webpack_require__(8551);
var tryToString = __webpack_require__(6823);
var getIteratorMethod = __webpack_require__(851);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ 5966:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aCallable = __webpack_require__(9306);
var isNullOrUndefined = __webpack_require__(4117);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 3789:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aCallable = __webpack_require__(9306);
var anObject = __webpack_require__(8551);
var call = __webpack_require__(9565);
var toIntegerOrInfinity = __webpack_require__(1291);
var getIteratorDirect = __webpack_require__(1767);

var INVALID_SIZE = 'Invalid size';
var $RangeError = RangeError;
var $TypeError = TypeError;
var max = Math.max;

var SetRecord = function (set, intSize) {
  this.set = set;
  this.size = max(intSize, 0);
  this.has = aCallable(set.has);
  this.keys = aCallable(set.keys);
};

SetRecord.prototype = {
  getIterator: function () {
    return getIteratorDirect(anObject(call(this.keys, this.set)));
  },
  includes: function (it) {
    return call(this.has, this.set, it);
  }
};

// `GetSetRecord` abstract operation
// https://tc39.es/proposal-set-methods/#sec-getsetrecord
module.exports = function (obj) {
  anObject(obj);
  var numSize = +obj.size;
  // NOTE: If size is undefined, then numSize will be NaN
  // eslint-disable-next-line no-self-compare -- NaN check
  if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
  var intSize = toIntegerOrInfinity(numSize);
  if (intSize < 0) throw new $RangeError(INVALID_SIZE);
  return new SetRecord(obj, intSize);
};


/***/ }),

/***/ 4576:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 9297:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var toObject = __webpack_require__(8981);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 421:
/***/ (function(module) {


module.exports = {};


/***/ }),

/***/ 397:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(7751);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 5917:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var fails = __webpack_require__(9039);
var createElement = __webpack_require__(4055);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 7055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var classof = __webpack_require__(2195);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 3706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var isCallable = __webpack_require__(4901);
var store = __webpack_require__(7629);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 1181:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_WEAK_MAP = __webpack_require__(8622);
var globalThis = __webpack_require__(4576);
var isObject = __webpack_require__(34);
var createNonEnumerableProperty = __webpack_require__(6699);
var hasOwn = __webpack_require__(9297);
var shared = __webpack_require__(7629);
var sharedKey = __webpack_require__(6119);
var hiddenKeys = __webpack_require__(421);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 4209:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var wellKnownSymbol = __webpack_require__(8227);
var Iterators = __webpack_require__(6269);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 4376:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(2195);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ 4901:
/***/ (function(module) {


// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 2796:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 4117:
/***/ (function(module) {


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 34:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(4901);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 6395:
/***/ (function(module) {


module.exports = false;


/***/ }),

/***/ 757:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(7751);
var isCallable = __webpack_require__(4901);
var isPrototypeOf = __webpack_require__(1625);
var USE_SYMBOL_AS_UID = __webpack_require__(7040);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 507:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(9565);

module.exports = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next = record.next;
  var step, result;
  while (!(step = call(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};


/***/ }),

/***/ 2652:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var bind = __webpack_require__(6080);
var call = __webpack_require__(9565);
var anObject = __webpack_require__(8551);
var tryToString = __webpack_require__(6823);
var isArrayIteratorMethod = __webpack_require__(4209);
var lengthOfArrayLike = __webpack_require__(6198);
var isPrototypeOf = __webpack_require__(1625);
var getIterator = __webpack_require__(81);
var getIteratorMethod = __webpack_require__(851);
var iteratorClose = __webpack_require__(9539);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ 9539:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(9565);
var anObject = __webpack_require__(8551);
var getMethod = __webpack_require__(5966);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ 9462:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(9565);
var create = __webpack_require__(2360);
var createNonEnumerableProperty = __webpack_require__(6699);
var defineBuiltIns = __webpack_require__(6279);
var wellKnownSymbol = __webpack_require__(8227);
var InternalStateModule = __webpack_require__(1181);
var getMethod = __webpack_require__(5966);
var IteratorPrototype = (__webpack_require__(7657).IteratorPrototype);
var createIterResultObject = __webpack_require__(2529);
var iteratorClose = __webpack_require__(9539);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ITERATOR_HELPER = 'IteratorHelper';
var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
var setInternalState = InternalStateModule.set;

var createIteratorProxyPrototype = function (IS_ITERATOR) {
  var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

  return defineBuiltIns(create(IteratorPrototype), {
    next: function next() {
      var state = getInternalState(this);
      // for simplification:
      //   for `%WrapForValidIteratorPrototype%.next` our `nextHandler` returns `IterResultObject`
      //   for `%IteratorHelperPrototype%.next` - just a value
      if (IS_ITERATOR) return state.nextHandler();
      try {
        var result = state.done ? undefined : state.nextHandler();
        return createIterResultObject(result, state.done);
      } catch (error) {
        state.done = true;
        throw error;
      }
    },
    'return': function () {
      var state = getInternalState(this);
      var iterator = state.iterator;
      state.done = true;
      if (IS_ITERATOR) {
        var returnMethod = getMethod(iterator, 'return');
        return returnMethod ? call(returnMethod, iterator) : createIterResultObject(undefined, true);
      }
      if (state.inner) try {
        iteratorClose(state.inner.iterator, 'normal');
      } catch (error) {
        return iteratorClose(iterator, 'throw', error);
      }
      if (iterator) iteratorClose(iterator, 'normal');
      return createIterResultObject(undefined, true);
    }
  });
};

var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
var IteratorHelperPrototype = createIteratorProxyPrototype(false);

createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper');

module.exports = function (nextHandler, IS_ITERATOR) {
  var IteratorProxy = function Iterator(record, state) {
    if (state) {
      state.iterator = record.iterator;
      state.next = record.next;
    } else state = record;
    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
    state.nextHandler = nextHandler;
    state.counter = 0;
    state.done = false;
    setInternalState(this, state);
  };

  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

  return IteratorProxy;
};


/***/ }),

/***/ 713:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(9565);
var aCallable = __webpack_require__(9306);
var anObject = __webpack_require__(8551);
var getIteratorDirect = __webpack_require__(1767);
var createIteratorProxy = __webpack_require__(9462);
var callWithSafeIterationClosing = __webpack_require__(6319);

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var result = anObject(call(this.next, iterator));
  var done = this.done = !!result.done;
  if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
});

// `Iterator.prototype.map` method
// https://github.com/tc39/proposal-iterator-helpers
module.exports = function map(mapper) {
  anObject(this);
  aCallable(mapper);
  return new IteratorProxy(getIteratorDirect(this), {
    mapper: mapper
  });
};


/***/ }),

/***/ 7657:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);
var create = __webpack_require__(2360);
var getPrototypeOf = __webpack_require__(2787);
var defineBuiltIn = __webpack_require__(6840);
var wellKnownSymbol = __webpack_require__(8227);
var IS_PURE = __webpack_require__(6395);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 6269:
/***/ (function(module) {


module.exports = {};


/***/ }),

/***/ 6198:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toLength = __webpack_require__(8014);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 283:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);
var hasOwn = __webpack_require__(9297);
var DESCRIPTORS = __webpack_require__(3724);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(350).CONFIGURABLE);
var inspectSource = __webpack_require__(3706);
var InternalStateModule = __webpack_require__(1181);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 741:
/***/ (function(module) {


var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 2360:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(8551);
var definePropertiesModule = __webpack_require__(6801);
var enumBugKeys = __webpack_require__(8727);
var hiddenKeys = __webpack_require__(421);
var html = __webpack_require__(397);
var documentCreateElement = __webpack_require__(4055);
var sharedKey = __webpack_require__(6119);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 6801:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8686);
var definePropertyModule = __webpack_require__(4913);
var anObject = __webpack_require__(8551);
var toIndexedObject = __webpack_require__(5397);
var objectKeys = __webpack_require__(1072);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 4913:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var IE8_DOM_DEFINE = __webpack_require__(5917);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8686);
var anObject = __webpack_require__(8551);
var toPropertyKey = __webpack_require__(6969);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 7347:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var call = __webpack_require__(9565);
var propertyIsEnumerableModule = __webpack_require__(8773);
var createPropertyDescriptor = __webpack_require__(6980);
var toIndexedObject = __webpack_require__(5397);
var toPropertyKey = __webpack_require__(6969);
var hasOwn = __webpack_require__(9297);
var IE8_DOM_DEFINE = __webpack_require__(5917);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 8480:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(1828);
var enumBugKeys = __webpack_require__(8727);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 3717:
/***/ (function(__unused_webpack_module, exports) {


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 2787:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(9297);
var isCallable = __webpack_require__(4901);
var toObject = __webpack_require__(8981);
var sharedKey = __webpack_require__(6119);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(2211);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 1625:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 1828:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var hasOwn = __webpack_require__(9297);
var toIndexedObject = __webpack_require__(5397);
var indexOf = (__webpack_require__(9617).indexOf);
var hiddenKeys = __webpack_require__(421);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 1072:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(1828);
var enumBugKeys = __webpack_require__(8727);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 8773:
/***/ (function(__unused_webpack_module, exports) {


var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 4270:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(9565);
var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 5031:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(7751);
var uncurryThis = __webpack_require__(9504);
var getOwnPropertyNamesModule = __webpack_require__(8480);
var getOwnPropertySymbolsModule = __webpack_require__(3717);
var anObject = __webpack_require__(8551);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 7979:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var anObject = __webpack_require__(8551);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 7750:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isNullOrUndefined = __webpack_require__(4117);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 9286:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var SetHelpers = __webpack_require__(4402);
var iterate = __webpack_require__(8469);

var Set = SetHelpers.Set;
var add = SetHelpers.add;

module.exports = function (set) {
  var result = new Set();
  iterate(set, function (it) {
    add(result, it);
  });
  return result;
};


/***/ }),

/***/ 3440:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(7080);
var SetHelpers = __webpack_require__(4402);
var clone = __webpack_require__(9286);
var size = __webpack_require__(5170);
var getSetRecord = __webpack_require__(3789);
var iterateSet = __webpack_require__(8469);
var iterateSimple = __webpack_require__(507);

var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
module.exports = function difference(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = clone(O);
  if (size(O) <= otherRec.size) iterateSet(O, function (e) {
    if (otherRec.includes(e)) remove(result, e);
  });
  else iterateSimple(otherRec.getIterator(), function (e) {
    if (has(O, e)) remove(result, e);
  });
  return result;
};


/***/ }),

/***/ 4402:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);

// eslint-disable-next-line es/no-set -- safe
var SetPrototype = Set.prototype;

module.exports = {
  // eslint-disable-next-line es/no-set -- safe
  Set: Set,
  add: uncurryThis(SetPrototype.add),
  has: uncurryThis(SetPrototype.has),
  remove: uncurryThis(SetPrototype['delete']),
  proto: SetPrototype
};


/***/ }),

/***/ 8750:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(7080);
var SetHelpers = __webpack_require__(4402);
var size = __webpack_require__(5170);
var getSetRecord = __webpack_require__(3789);
var iterateSet = __webpack_require__(8469);
var iterateSimple = __webpack_require__(507);

var Set = SetHelpers.Set;
var add = SetHelpers.add;
var has = SetHelpers.has;

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
module.exports = function intersection(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = new Set();

  if (size(O) > otherRec.size) {
    iterateSimple(otherRec.getIterator(), function (e) {
      if (has(O, e)) add(result, e);
    });
  } else {
    iterateSet(O, function (e) {
      if (otherRec.includes(e)) add(result, e);
    });
  }

  return result;
};


/***/ }),

/***/ 4449:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(7080);
var has = (__webpack_require__(4402).has);
var size = __webpack_require__(5170);
var getSetRecord = __webpack_require__(3789);
var iterateSet = __webpack_require__(8469);
var iterateSimple = __webpack_require__(507);
var iteratorClose = __webpack_require__(9539);

// `Set.prototype.isDisjointFrom` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
module.exports = function isDisjointFrom(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) <= otherRec.size) return iterateSet(O, function (e) {
    if (otherRec.includes(e)) return false;
  }, true) !== false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (has(O, e)) return iteratorClose(iterator, 'normal', false);
  }) !== false;
};


/***/ }),

/***/ 3838:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(7080);
var size = __webpack_require__(5170);
var iterate = __webpack_require__(8469);
var getSetRecord = __webpack_require__(3789);

// `Set.prototype.isSubsetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
module.exports = function isSubsetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) > otherRec.size) return false;
  return iterate(O, function (e) {
    if (!otherRec.includes(e)) return false;
  }, true) !== false;
};


/***/ }),

/***/ 8527:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(7080);
var has = (__webpack_require__(4402).has);
var size = __webpack_require__(5170);
var getSetRecord = __webpack_require__(3789);
var iterateSimple = __webpack_require__(507);
var iteratorClose = __webpack_require__(9539);

// `Set.prototype.isSupersetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
module.exports = function isSupersetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) < otherRec.size) return false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (!has(O, e)) return iteratorClose(iterator, 'normal', false);
  }) !== false;
};


/***/ }),

/***/ 8469:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var iterateSimple = __webpack_require__(507);
var SetHelpers = __webpack_require__(4402);

var Set = SetHelpers.Set;
var SetPrototype = SetHelpers.proto;
var forEach = uncurryThis(SetPrototype.forEach);
var keys = uncurryThis(SetPrototype.keys);
var next = keys(new Set()).next;

module.exports = function (set, fn, interruptible) {
  return interruptible ? iterateSimple({ iterator: keys(set), next: next }, fn) : forEach(set, fn);
};


/***/ }),

/***/ 4916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(7751);

var createSetLike = function (size) {
  return {
    size: size,
    has: function () {
      return false;
    },
    keys: function () {
      return {
        next: function () {
          return { done: true };
        }
      };
    }
  };
};

module.exports = function (name) {
  var Set = getBuiltIn('Set');
  try {
    new Set()[name](createSetLike(0));
    try {
      // late spec change, early WebKit ~ Safari 17.0 beta implementation does not pass it
      // https://github.com/tc39/proposal-set-methods/pull/88
      new Set()[name](createSetLike(-1));
      return false;
    } catch (error2) {
      return true;
    }
  } catch (error) {
    return false;
  }
};


/***/ }),

/***/ 5170:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThisAccessor = __webpack_require__(6706);
var SetHelpers = __webpack_require__(4402);

module.exports = uncurryThisAccessor(SetHelpers.proto, 'size', 'get') || function (set) {
  return set.size;
};


/***/ }),

/***/ 3650:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(7080);
var SetHelpers = __webpack_require__(4402);
var clone = __webpack_require__(9286);
var getSetRecord = __webpack_require__(3789);
var iterateSimple = __webpack_require__(507);

var add = SetHelpers.add;
var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
module.exports = function symmetricDifference(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (e) {
    if (has(O, e)) remove(result, e);
    else add(result, e);
  });
  return result;
};


/***/ }),

/***/ 4204:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(7080);
var add = (__webpack_require__(4402).add);
var clone = __webpack_require__(9286);
var getSetRecord = __webpack_require__(3789);
var iterateSimple = __webpack_require__(507);

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
module.exports = function union(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (it) {
    add(result, it);
  });
  return result;
};


/***/ }),

/***/ 6119:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var shared = __webpack_require__(5745);
var uid = __webpack_require__(3392);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 7629:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var IS_PURE = __webpack_require__(6395);
var globalThis = __webpack_require__(4576);
var defineGlobalProperty = __webpack_require__(9433);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.39.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 5745:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var store = __webpack_require__(7629);

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ 4495:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(9519);
var fails = __webpack_require__(9039);
var globalThis = __webpack_require__(4576);

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 5610:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(1291);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5397:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(7055);
var requireObjectCoercible = __webpack_require__(7750);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 1291:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var trunc = __webpack_require__(741);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 8014:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(1291);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 8981:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var requireObjectCoercible = __webpack_require__(7750);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 2777:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(9565);
var isObject = __webpack_require__(34);
var isSymbol = __webpack_require__(757);
var getMethod = __webpack_require__(5966);
var ordinaryToPrimitive = __webpack_require__(4270);
var wellKnownSymbol = __webpack_require__(8227);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 6969:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toPrimitive = __webpack_require__(2777);
var isSymbol = __webpack_require__(757);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 2140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var wellKnownSymbol = __webpack_require__(8227);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 6823:
/***/ (function(module) {


var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 3392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 7040:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(4495);

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 8686:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var fails = __webpack_require__(9039);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ 8622:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);
var isCallable = __webpack_require__(4901);

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 8227:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);
var shared = __webpack_require__(5745);
var hasOwn = __webpack_require__(9297);
var uid = __webpack_require__(3392);
var NATIVE_SYMBOL = __webpack_require__(4495);
var USE_SYMBOL_AS_UID = __webpack_require__(7040);

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 4114:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var toObject = __webpack_require__(8981);
var lengthOfArrayLike = __webpack_require__(6198);
var setArrayLength = __webpack_require__(4527);
var doesNotExceedSafeInteger = __webpack_require__(6837);
var fails = __webpack_require__(9039);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ 9678:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var arrayToReversed = __webpack_require__(7628);
var toIndexedObject = __webpack_require__(5397);
var addToUnscopables = __webpack_require__(6469);

var $Array = Array;

// `Array.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-array.prototype.toreversed
$({ target: 'Array', proto: true }, {
  toReversed: function toReversed() {
    return arrayToReversed(toIndexedObject(this), $Array);
  }
});

addToUnscopables('toReversed');


/***/ }),

/***/ 7145:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var uncurryThis = __webpack_require__(9504);
var aCallable = __webpack_require__(9306);
var toIndexedObject = __webpack_require__(5397);
var arrayFromConstructorAndList = __webpack_require__(5370);
var getBuiltInPrototypeMethod = __webpack_require__(4124);
var addToUnscopables = __webpack_require__(6469);

var $Array = Array;
var sort = uncurryThis(getBuiltInPrototypeMethod('Array', 'sort'));

// `Array.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-array.prototype.tosorted
$({ target: 'Array', proto: true }, {
  toSorted: function toSorted(compareFn) {
    if (compareFn !== undefined) aCallable(compareFn);
    var O = toIndexedObject(this);
    var A = arrayFromConstructorAndList($Array, O);
    return sort(A, compareFn);
  }
});

addToUnscopables('toSorted');


/***/ }),

/***/ 1658:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var addToUnscopables = __webpack_require__(6469);
var doesNotExceedSafeInteger = __webpack_require__(6837);
var lengthOfArrayLike = __webpack_require__(6198);
var toAbsoluteIndex = __webpack_require__(5610);
var toIndexedObject = __webpack_require__(5397);
var toIntegerOrInfinity = __webpack_require__(1291);

var $Array = Array;
var max = Math.max;
var min = Math.min;

// `Array.prototype.toSpliced` method
// https://tc39.es/ecma262/#sec-array.prototype.tospliced
$({ target: 'Array', proto: true }, {
  toSpliced: function toSpliced(start, deleteCount /* , ...items */) {
    var O = toIndexedObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var k = 0;
    var insertCount, actualDeleteCount, newLen, A;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    newLen = doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
    A = $Array(newLen);

    for (; k < actualStart; k++) A[k] = O[k];
    for (; k < actualStart + insertCount; k++) A[k] = arguments[k - actualStart + 2];
    for (; k < newLen; k++) A[k] = O[k + actualDeleteCount - insertCount];

    return A;
  }
});

addToUnscopables('toSpliced');


/***/ }),

/***/ 8111:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var globalThis = __webpack_require__(4576);
var anInstance = __webpack_require__(679);
var anObject = __webpack_require__(8551);
var isCallable = __webpack_require__(4901);
var getPrototypeOf = __webpack_require__(2787);
var defineBuiltInAccessor = __webpack_require__(2106);
var createProperty = __webpack_require__(4659);
var fails = __webpack_require__(9039);
var hasOwn = __webpack_require__(9297);
var wellKnownSymbol = __webpack_require__(8227);
var IteratorPrototype = (__webpack_require__(7657).IteratorPrototype);
var DESCRIPTORS = __webpack_require__(3724);
var IS_PURE = __webpack_require__(6395);

var CONSTRUCTOR = 'constructor';
var ITERATOR = 'Iterator';
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;
var NativeIterator = globalThis[ITERATOR];

// FF56- have non-standard global helper `Iterator`
var FORCED = IS_PURE
  || !isCallable(NativeIterator)
  || NativeIterator.prototype !== IteratorPrototype
  // FF44- non-standard `Iterator` passes previous tests
  || !fails(function () { NativeIterator({}); });

var IteratorConstructor = function Iterator() {
  anInstance(this, IteratorPrototype);
  if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable');
};

var defineIteratorPrototypeAccessor = function (key, value) {
  if (DESCRIPTORS) {
    defineBuiltInAccessor(IteratorPrototype, key, {
      configurable: true,
      get: function () {
        return value;
      },
      set: function (replacement) {
        anObject(this);
        if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
        if (hasOwn(this, key)) this[key] = replacement;
        else createProperty(this, key, replacement);
      }
    });
  } else IteratorPrototype[key] = value;
};

if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);

if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
}

IteratorConstructor.prototype = IteratorPrototype;

// `Iterator` constructor
// https://tc39.es/ecma262/#sec-iterator
$({ global: true, constructor: true, forced: FORCED }, {
  Iterator: IteratorConstructor
});


/***/ }),

/***/ 1148:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var iterate = __webpack_require__(2652);
var aCallable = __webpack_require__(9306);
var anObject = __webpack_require__(8551);
var getIteratorDirect = __webpack_require__(1767);

// `Iterator.prototype.every` method
// https://tc39.es/ecma262/#sec-iterator.prototype.every
$({ target: 'Iterator', proto: true, real: true }, {
  every: function every(predicate) {
    anObject(this);
    aCallable(predicate);
    var record = getIteratorDirect(this);
    var counter = 0;
    return !iterate(record, function (value, stop) {
      if (!predicate(value, counter++)) return stop();
    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
  }
});


/***/ }),

/***/ 2489:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var call = __webpack_require__(9565);
var aCallable = __webpack_require__(9306);
var anObject = __webpack_require__(8551);
var getIteratorDirect = __webpack_require__(1767);
var createIteratorProxy = __webpack_require__(9462);
var callWithSafeIterationClosing = __webpack_require__(6319);
var IS_PURE = __webpack_require__(6395);

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var predicate = this.predicate;
  var next = this.next;
  var result, done, value;
  while (true) {
    result = anObject(call(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
    value = result.value;
    if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
  }
});

// `Iterator.prototype.filter` method
// https://tc39.es/ecma262/#sec-iterator.prototype.filter
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
  filter: function filter(predicate) {
    anObject(this);
    aCallable(predicate);
    return new IteratorProxy(getIteratorDirect(this), {
      predicate: predicate
    });
  }
});


/***/ }),

/***/ 116:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var iterate = __webpack_require__(2652);
var aCallable = __webpack_require__(9306);
var anObject = __webpack_require__(8551);
var getIteratorDirect = __webpack_require__(1767);

// `Iterator.prototype.find` method
// https://tc39.es/ecma262/#sec-iterator.prototype.find
$({ target: 'Iterator', proto: true, real: true }, {
  find: function find(predicate) {
    anObject(this);
    aCallable(predicate);
    var record = getIteratorDirect(this);
    var counter = 0;
    return iterate(record, function (value, stop) {
      if (predicate(value, counter++)) return stop(value);
    }, { IS_RECORD: true, INTERRUPTED: true }).result;
  }
});


/***/ }),

/***/ 7588:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var iterate = __webpack_require__(2652);
var aCallable = __webpack_require__(9306);
var anObject = __webpack_require__(8551);
var getIteratorDirect = __webpack_require__(1767);

// `Iterator.prototype.forEach` method
// https://tc39.es/ecma262/#sec-iterator.prototype.foreach
$({ target: 'Iterator', proto: true, real: true }, {
  forEach: function forEach(fn) {
    anObject(this);
    aCallable(fn);
    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  }
});


/***/ }),

/***/ 1701:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var map = __webpack_require__(713);
var IS_PURE = __webpack_require__(6395);

// `Iterator.prototype.map` method
// https://tc39.es/ecma262/#sec-iterator.prototype.map
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
  map: map
});


/***/ }),

/***/ 8237:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var iterate = __webpack_require__(2652);
var aCallable = __webpack_require__(9306);
var anObject = __webpack_require__(8551);
var getIteratorDirect = __webpack_require__(1767);

var $TypeError = TypeError;

// `Iterator.prototype.reduce` method
// https://tc39.es/ecma262/#sec-iterator.prototype.reduce
$({ target: 'Iterator', proto: true, real: true }, {
  reduce: function reduce(reducer /* , initialValue */) {
    anObject(this);
    aCallable(reducer);
    var record = getIteratorDirect(this);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    var counter = 0;
    iterate(record, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = reducer(accumulator, value, counter);
      }
      counter++;
    }, { IS_RECORD: true });
    if (noInitial) throw new $TypeError('Reduce of empty iterator with no initial value');
    return accumulator;
  }
});


/***/ }),

/***/ 3579:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var iterate = __webpack_require__(2652);
var aCallable = __webpack_require__(9306);
var anObject = __webpack_require__(8551);
var getIteratorDirect = __webpack_require__(1767);

// `Iterator.prototype.some` method
// https://tc39.es/ecma262/#sec-iterator.prototype.some
$({ target: 'Iterator', proto: true, real: true }, {
  some: function some(predicate) {
    anObject(this);
    aCallable(predicate);
    var record = getIteratorDirect(this);
    var counter = 0;
    return iterate(record, function (value, stop) {
      if (predicate(value, counter++)) return stop();
    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
  }
});


/***/ }),

/***/ 9479:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);
var DESCRIPTORS = __webpack_require__(3724);
var defineBuiltInAccessor = __webpack_require__(2106);
var regExpFlags = __webpack_require__(7979);
var fails = __webpack_require__(9039);

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = globalThis.RegExp;
var RegExpPrototype = RegExp.prototype;

var FORCED = DESCRIPTORS && fails(function () {
  var INDICES_SUPPORT = true;
  try {
    RegExp('.', 'd');
  } catch (error) {
    INDICES_SUPPORT = false;
  }

  var O = {};
  // modern V8 bug
  var calls = '';
  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

  var addGetter = function (key, chr) {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(O, key, { get: function () {
      calls += chr;
      return true;
    } });
  };

  var pairs = {
    dotAll: 's',
    global: 'g',
    ignoreCase: 'i',
    multiline: 'm',
    sticky: 'y'
  };

  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

  for (var key in pairs) addGetter(key, pairs[key]);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var result = Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call(O);

  return result !== expected || calls !== expected;
});

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED) defineBuiltInAccessor(RegExpPrototype, 'flags', {
  configurable: true,
  get: regExpFlags
});


/***/ }),

/***/ 7642:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var difference = __webpack_require__(3440);
var setMethodAcceptSetLike = __webpack_require__(4916);

// `Set.prototype.difference` method
// https://tc39.es/ecma262/#sec-set.prototype.difference
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('difference') }, {
  difference: difference
});


/***/ }),

/***/ 8004:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var fails = __webpack_require__(9039);
var intersection = __webpack_require__(8750);
var setMethodAcceptSetLike = __webpack_require__(4916);

var INCORRECT = !setMethodAcceptSetLike('intersection') || fails(function () {
  // eslint-disable-next-line es/no-array-from, es/no-set -- testing
  return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== '3,2';
});

// `Set.prototype.intersection` method
// https://tc39.es/ecma262/#sec-set.prototype.intersection
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  intersection: intersection
});


/***/ }),

/***/ 3853:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var isDisjointFrom = __webpack_require__(4449);
var setMethodAcceptSetLike = __webpack_require__(4916);

// `Set.prototype.isDisjointFrom` method
// https://tc39.es/ecma262/#sec-set.prototype.isdisjointfrom
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isDisjointFrom') }, {
  isDisjointFrom: isDisjointFrom
});


/***/ }),

/***/ 5876:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var isSubsetOf = __webpack_require__(3838);
var setMethodAcceptSetLike = __webpack_require__(4916);

// `Set.prototype.isSubsetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issubsetof
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isSubsetOf') }, {
  isSubsetOf: isSubsetOf
});


/***/ }),

/***/ 2475:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var isSupersetOf = __webpack_require__(8527);
var setMethodAcceptSetLike = __webpack_require__(4916);

// `Set.prototype.isSupersetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issupersetof
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isSupersetOf') }, {
  isSupersetOf: isSupersetOf
});


/***/ }),

/***/ 5024:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var symmetricDifference = __webpack_require__(3650);
var setMethodAcceptSetLike = __webpack_require__(4916);

// `Set.prototype.symmetricDifference` method
// https://tc39.es/ecma262/#sec-set.prototype.symmetricdifference
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('symmetricDifference') }, {
  symmetricDifference: symmetricDifference
});


/***/ }),

/***/ 1698:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var union = __webpack_require__(4204);
var setMethodAcceptSetLike = __webpack_require__(4916);

// `Set.prototype.union` method
// https://tc39.es/ecma262/#sec-set.prototype.union
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('union') }, {
  union: union
});


/***/ }),

/***/ 8992:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(8111);


/***/ }),

/***/ 3215:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(1148);


/***/ }),

/***/ 4520:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(2489);


/***/ }),

/***/ 2577:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(116);


/***/ }),

/***/ 3949:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(7588);


/***/ }),

/***/ 1454:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(1701);


/***/ }),

/***/ 8872:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(8237);


/***/ }),

/***/ 7550:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(3579);


/***/ }),

/***/ 8950:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $W: function() { return /* binding */ config$1; },
/* harmony export */   Kk: function() { return /* binding */ icon; },
/* harmony export */   Qq: function() { return /* binding */ text; },
/* harmony export */   Yv: function() { return /* binding */ library$1; },
/* harmony export */   qg: function() { return /* binding */ parse$1; }
/* harmony export */ });
/* unused harmony exports noAuto, dom, findIconDefinition, toHtml, layer, counter, api */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4114);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8992);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4520);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2577);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3949);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1454);
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8872);
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7550);








/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _wrapRegExp() {
  _wrapRegExp = function (e, r) {
    return new BabelRegExp(e, void 0, r);
  };
  var e = RegExp.prototype,
    r = new WeakMap();
  function BabelRegExp(e, t, p) {
    var o = RegExp(e, t);
    return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype);
  }
  function buildGroups(e, t) {
    var p = r.get(t);
    return Object.keys(p).reduce(function (r, t) {
      var o = p[t];
      if ("number" == typeof o) r[t] = e[o];else {
        for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++;
        r[t] = e[o[i]];
      }
      return r;
    }, Object.create(null));
  }
  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) {
    var t = e.exec.call(this, r);
    if (t) {
      t.groups = buildGroups(t, this);
      var p = t.indices;
      p && (p.groups = buildGroups(p, this));
    }
    return t;
  }, BabelRegExp.prototype[Symbol.replace] = function (t, p) {
    if ("string" == typeof p) {
      var o = r.get(this);
      return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)>/g, function (e, r) {
        var t = o[r];
        return "$" + (Array.isArray(t) ? t.join("$") : t);
      }));
    }
    if ("function" == typeof p) {
      var i = this;
      return e[Symbol.replace].call(this, t, function () {
        var e = arguments;
        return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
      });
    }
    return e[Symbol.replace].call(this, t, p);
  }, _wrapRegExp.apply(this, arguments);
}
const noop = () => {};
let _WINDOW = {};
let _DOCUMENT = {};
let _MUTATION_OBSERVER = null;
let _PERFORMANCE = {
  mark: noop,
  measure: noop
};
try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}
const {
  userAgent = ''
} = _WINDOW.navigator || {};
const WINDOW = _WINDOW;
const DOCUMENT = _DOCUMENT;
const MUTATION_OBSERVER = _MUTATION_OBSERVER;
const PERFORMANCE = _PERFORMANCE;
const IS_BROWSER = !!WINDOW.document;
const IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
const IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
var p = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
  g = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;
var S = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fab: "brands",
      "fa-brands": "brands"
    },
    duotone: {
      fa: "solid",
      fad: "solid",
      "fa-solid": "solid",
      "fa-duotone": "solid",
      fadr: "regular",
      "fa-regular": "regular",
      fadl: "light",
      "fa-light": "light",
      fadt: "thin",
      "fa-thin": "thin"
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin"
    },
    "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid",
      fasdr: "regular",
      "fa-regular": "regular",
      fasdl: "light",
      "fa-light": "light",
      fasdt: "thin",
      "fa-thin": "thin"
    }
  },
  A = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
  },
  P = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"];
var s = "classic",
  t = "duotone",
  r = "sharp",
  o = "sharp-duotone",
  L = [s, t, r, o];
var G = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
};
var lt = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
};
var pt = new Map([["classic", {
    defaultShortPrefixId: "fas",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin", "brands"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["sharp", {
    defaultShortPrefixId: "fass",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["duotone", {
    defaultShortPrefixId: "fad",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["sharp-duotone", {
    defaultShortPrefixId: "fasds",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }]]),
  xt = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      brands: "fab"
    },
    duotone: {
      solid: "fad",
      regular: "fadr",
      light: "fadl",
      thin: "fadt"
    },
    sharp: {
      solid: "fass",
      regular: "fasr",
      light: "fasl",
      thin: "fast"
    },
    "sharp-duotone": {
      solid: "fasds",
      regular: "fasdr",
      light: "fasdl",
      thin: "fasdt"
    }
  };
var Ft = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
  St = {
    kit: {
      fak: "kit",
      "fa-kit": "kit"
    },
    "kit-duotone": {
      fakd: "kit-duotone",
      "fa-kit-duotone": "kit-duotone"
    }
  },
  At = ["kit"];
var Ct = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
};
var Lt = ["fak", "fakd"],
  Wt = {
    kit: {
      fak: "fa-kit"
    },
    "kit-duotone": {
      fakd: "fa-kit-duotone"
    }
  };
var Et = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
var t$1 = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
  },
  r$1 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"];
var bt$1 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"];
var Yt = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
};
var ua = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat"
    },
    duotone: {
      "fa-regular": "fadr",
      "fa-light": "fadl",
      "fa-thin": "fadt"
    },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast"
    },
    "sharp-duotone": {
      "fa-solid": "fasds",
      "fa-regular": "fasdr",
      "fa-light": "fasdl",
      "fa-thin": "fasdt"
    }
  },
  I$1 = {
    classic: ["fas", "far", "fal", "fat", "fad"],
    duotone: ["fadr", "fadl", "fadt"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
  },
  ga = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin"
    },
    duotone: {
      fadr: "fa-regular",
      fadl: "fa-light",
      fadt: "fa-thin"
    },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin"
    },
    "sharp-duotone": {
      fasds: "fa-solid",
      fasdr: "fa-regular",
      fasdl: "fa-light",
      fasdt: "fa-thin"
    }
  },
  x = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"],
  Ia = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...r$1, ...x],
  m$1 = ["solid", "regular", "light", "thin", "duotone", "brands"],
  c$1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  F$1 = c$1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  ma = [...Object.keys(I$1), ...m$1, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", t$1.GROUP, t$1.SWAP_OPACITY, t$1.PRIMARY, t$1.SECONDARY].concat(c$1.map(a => "".concat(a, "x"))).concat(F$1.map(a => "w-".concat(a)));
var wa = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
const UNITS_IN_GRID = 16;
const DEFAULT_CSS_PREFIX = 'fa';
const DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
const DATA_FA_I2SVG = 'data-fa-i2svg';
const DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
const DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
const DATA_PREFIX = 'data-prefix';
const DATA_ICON = 'data-icon';
const HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
const MUTATION_APPROACH_ASYNC = 'async';
const TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
const PRODUCTION = (() => {
  try {
    return "production" === 'production';
  } catch (e$$1) {
    return false;
  }
})();
function familyProxy(obj) {
  // Defaults to the classic family if family is not available
  return new Proxy(obj, {
    get(target, prop) {
      return prop in target ? target[prop] : target[s];
    }
  });
}
const _PREFIX_TO_STYLE = _objectSpread2({}, S);

// We changed FACSSClassesToStyleId in the icons repo to be canonical and as such, "classic" family does not have any
// duotone styles.  But we do still need duotone in _PREFIX_TO_STYLE below, so we are manually adding
// {'fa-duotone': 'duotone'}
_PREFIX_TO_STYLE[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  'fa-duotone': 'duotone'
}), S[s]), St['kit']), St['kit-duotone']);
const PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
const _STYLE_TO_PREFIX = _objectSpread2({}, xt);

// We changed FAStyleIdToShortPrefixId in the icons repo to be canonical and as such, "classic" family does not have any
// duotone styles.  But we do still need duotone in _STYLE_TO_PREFIX below, so we are manually adding {duotone: 'fad'}
_STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  duotone: 'fad'
}), _STYLE_TO_PREFIX[s]), Et['kit']), Et['kit-duotone']);
const STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
const _PREFIX_TO_LONG_STYLE = _objectSpread2({}, ga);
_PREFIX_TO_LONG_STYLE[s] = _objectSpread2(_objectSpread2({}, _PREFIX_TO_LONG_STYLE[s]), Wt['kit']);
const PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
const _LONG_STYLE_TO_PREFIX = _objectSpread2({}, ua);
_LONG_STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2({}, _LONG_STYLE_TO_PREFIX[s]), Ct['kit']);
const LONG_STYLE_TO_PREFIX = familyProxy(_LONG_STYLE_TO_PREFIX);
const ICON_SELECTION_SYNTAX_PATTERN = p; // eslint-disable-line no-useless-escape

const LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
const FONT_FAMILY_PATTERN = g;
const _FONT_WEIGHT_TO_PREFIX = _objectSpread2({}, G);
const FONT_WEIGHT_TO_PREFIX = familyProxy(_FONT_WEIGHT_TO_PREFIX);
const ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
const DUOTONE_CLASSES = A;
const RESERVED_CLASSES = [...At, ...ma];
const initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');
  if (element) {
    return element.getAttribute(attr);
  }
}
function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}
if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  const attrs = [['data-family-prefix', 'familyPrefix'], ['data-css-prefix', 'cssPrefix'], ['data-family-default', 'familyDefault'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(_ref => {
    let [attr, key] = _ref;
    const val = coerce(getAttrConfig(attr));
    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}
const _default = {
  styleDefault: 'solid',
  familyDefault: s,
  cssPrefix: DEFAULT_CSS_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

// familyPrefix is deprecated but we must still support it if present
if (initial.familyPrefix) {
  initial.cssPrefix = initial.familyPrefix;
}
const _config = _objectSpread2(_objectSpread2({}, _default), initial);
if (!_config.autoReplaceSvg) _config.observeMutations = false;
const config = {};
Object.keys(_default).forEach(key => {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function (val) {
      _config[key] = val;
      _onChangeCb.forEach(cb => cb(config));
    },
    get: function () {
      return _config[key];
    }
  });
});

// familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0
Object.defineProperty(config, 'familyPrefix', {
  enumerable: true,
  set: function (val) {
    _config.cssPrefix = val;
    _onChangeCb.forEach(cb => cb(config));
  },
  get: function () {
    return _config.cssPrefix;
  }
});
WINDOW.FontAwesomeConfig = config;
const _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);
  return () => {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}
const d$2 = UNITS_IN_GRID;
const meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }
  const style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  const headChildren = DOCUMENT.head.childNodes;
  let beforeChild = null;
  for (let i = headChildren.length - 1; i > -1; i--) {
    const child = headChildren[i];
    const tagName = (child.tagName || '').toUpperCase();
    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
const idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  let size = 12;
  let id = '';
  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }
  return id;
}
function toArray(obj) {
  const array = [];
  for (let i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }
  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(i => i);
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce((acc, attributeName) => {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce((acc, styleName) => {
    return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  let {
    transform,
    containerWidth,
    iconWidth
  } = _ref;
  const outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  const inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  const path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer,
    inner,
    path
  };
}
function transformForCss(_ref2) {
  let {
    transform,
    width = UNITS_IN_GRID,
    height = UNITS_IN_GRID,
    startCentered = false
  } = _ref2;
  let val = '';
  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d$2 - width / 2, "em, ").concat(transform.y / d$2 - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d$2, "em), calc(-50% + ").concat(transform.y / d$2, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d$2, "em, ").concat(transform.y / d$2, "em) ");
  }
  val += "scale(".concat(transform.size / d$2 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d$2 * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}
var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Free\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Free\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Pro\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Pro\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-regular: normal 400 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-light: normal 300 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-thin: normal 100 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n  --fa-font-sharp-solid: normal 900 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-regular: normal 400 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-light: normal 300 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-thin: normal 100 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 \"Font Awesome 6 Sharp Duotone\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}";
function css() {
  const dcp = DEFAULT_CSS_PREFIX;
  const drc = DEFAULT_REPLACEMENT_CLASS;
  const fp = config.cssPrefix;
  const rc = config.replacementClass;
  let s = baseStyles;
  if (fp !== dcp || rc !== drc) {
    const dPatt = new RegExp("\\.".concat(dcp, "\\-"), 'g');
    const customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), 'g');
    const rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }
  return s;
}
let _cssInserted = false;
function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}
var InjectCSS = {
  mixout() {
    return {
      dom: {
        css,
        insertCss: ensureCss
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg() {
        ensureCss();
      }
    };
  }
};
const w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];
const functions = [];
const listener = function () {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(fn => fn());
};
let loaded = false;
if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}
function domready(fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}
function toHtml(abstractNodes) {
  const {
    tag,
    attributes = {},
    children = []
  } = abstractNodes;
  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix,
      iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */
var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
    length = keys.length,
    iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
    i,
    key,
    result;
  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }
  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }
  return result;
};

/**
 * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
 *
 * Copyright Mathias Bynens <https://mathiasbynens.be/>

 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

function ucs2decode(string) {
  const output = [];
  let counter = 0;
  const length = string.length;
  while (counter < length) {
    const value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      const extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) {
        // eslint-disable-line eqeqeq
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
function toHex(unicode) {
  const decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string, index) {
  const size = string.length;
  let first = string.charCodeAt(index);
  let second;
  if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
    second = string.charCodeAt(index + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
}
function normalizeIcons(icons) {
  return Object.keys(icons).reduce((acc, iconName) => {
    const icon = icons[iconName];
    const expanded = !!icon.icon;
    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }
    return acc;
  }, {});
}
function defineIcons(prefix, icons) {
  let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const {
    skipHooks = false
  } = params;
  const normalized = normalizeIcons(icons);
  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
  }

  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll ease the upgrade process for our users by automatically defining
   * this as well.
   */
  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}
const duotonePathRe = [/*#__PURE__*/_wrapRegExp(/path d="([^"]+)".*path d="([^"]+)"/, {
  d1: 1,
  d2: 2
}), /*#__PURE__*/_wrapRegExp(/path class="([^"]+)".*d="([^"]+)".*path class="([^"]+)".*d="([^"]+)"/, {
  cls1: 1,
  d1: 2,
  cls2: 3,
  d2: 4
}), /*#__PURE__*/_wrapRegExp(/path class="([^"]+)".*d="([^"]+)"/, {
  cls1: 1,
  d1: 2
})];
const {
  styles,
  shims
} = namespace;
const FAMILY_NAMES = Object.keys(PREFIX_TO_LONG_STYLE);
const PREFIXES_FOR_FAMILY = FAMILY_NAMES.reduce((acc, familyId) => {
  acc[familyId] = Object.keys(PREFIX_TO_LONG_STYLE[familyId]);
  return acc;
}, {});
let _defaultUsablePrefix = null;
let _byUnicode = {};
let _byLigature = {};
let _byOldName = {};
let _byOldUnicode = {};
let _byAlias = {};
function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function getIconName(cssPrefix, cls) {
  const parts = cls.split('-');
  const prefix = parts[0];
  const iconName = parts.slice(1).join('-');
  if (prefix === cssPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
const build = () => {
  const lookup = reducer => {
    return reduce(styles, (o$$1, style, prefix) => {
      o$$1[prefix] = reduce(style, reducer, {});
      return o$$1;
    }, {});
  };
  _byUnicode = lookup((acc, icon, iconName) => {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }
    if (icon[2]) {
      const aliases = icon[2].filter(a$$1 => {
        return typeof a$$1 === 'number';
      });
      aliases.forEach(alias => {
        acc[alias.toString(16)] = iconName;
      });
    }
    return acc;
  });
  _byLigature = lookup((acc, icon, iconName) => {
    acc[iconName] = iconName;
    if (icon[2]) {
      const aliases = icon[2].filter(a$$1 => {
        return typeof a$$1 === 'string';
      });
      aliases.forEach(alias => {
        acc[alias] = iconName;
      });
    }
    return acc;
  });
  _byAlias = lookup((acc, icon, iconName) => {
    const aliases = icon[2];
    acc[iconName] = iconName;
    aliases.forEach(alias => {
      acc[alias] = iconName;
    });
    return acc;
  });

  // If we have a Kit, we can't determine if regular is available since we
  // could be auto-fetching it. We'll have to assume that it is available.
  const hasRegular = 'far' in styles || config.autoFetchSvg;
  const shimLookups = reduce(shims, (acc, shim) => {
    const maybeNameMaybeUnicode = shim[0];
    let prefix = shim[1];
    const iconName = shim[2];
    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }
    if (typeof maybeNameMaybeUnicode === 'string') {
      acc.names[maybeNameMaybeUnicode] = {
        prefix,
        iconName
      };
    }
    if (typeof maybeNameMaybeUnicode === 'number') {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix,
        iconName
      };
    }
    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
    family: config.familyDefault
  });
};
onChange(c$$1 => {
  _defaultUsablePrefix = getCanonicalPrefix(c$$1.styleDefault, {
    family: config.familyDefault
  });
});
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  const oldUnicode = _byOldUnicode[unicode];
  const newUnicode = byUnicode('fas', unicode);
  return oldUnicode || (newUnicode ? {
    prefix: 'fas',
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
const emptyCanonicalIcon = () => {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getFamilyId(values) {
  let family = s;
  const famProps = FAMILY_NAMES.reduce((acc, familyId) => {
    acc[familyId] = "".concat(config.cssPrefix, "-").concat(familyId);
    return acc;
  }, {});
  L.forEach(familyId => {
    if (values.includes(famProps[familyId]) || values.some(v$$1 => PREFIXES_FOR_FAMILY[familyId].includes(v$$1))) {
      family = familyId;
    }
  });
  return family;
}
function getCanonicalPrefix(styleOrPrefix) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    family = s
  } = params;
  const style = PREFIX_TO_STYLE[family][styleOrPrefix];

  // handles the exception of passing in only a family of 'duotone' with no style
  if (family === t && !styleOrPrefix) {
    return 'fad';
  }
  const prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
  const defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  const result = prefix || defined || null;
  return result;
}
function moveNonFaClassesToRest(classNames) {
  let rest = [];
  let iconName = null;
  classNames.forEach(cls => {
    const result = getIconName(config.cssPrefix, cls);
    if (result) {
      iconName = result;
    } else if (cls) {
      rest.push(cls);
    }
  });
  return {
    iconName,
    rest
  };
}
function sortedUniqueValues(arr) {
  return arr.sort().filter((value, index, arr) => {
    return arr.indexOf(value) === index;
  });
}
function getCanonicalIcon(values) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    skipLookups = false
  } = params;
  let givenPrefix = null;
  const faCombinedClasses = Ia.concat(bt$1);
  const faStyleOrFamilyClasses = sortedUniqueValues(values.filter(cls => faCombinedClasses.includes(cls)));
  const nonStyleOrFamilyClasses = sortedUniqueValues(values.filter(cls => !Ia.includes(cls)));
  const faStyles = faStyleOrFamilyClasses.filter(cls => {
    givenPrefix = cls;
    return !P.includes(cls);
  });
  const [styleFromValues = null] = faStyles;
  const family = getFamilyId(faStyleOrFamilyClasses);
  const canonical = _objectSpread2(_objectSpread2({}, moveNonFaClassesToRest(nonStyleOrFamilyClasses)), {}, {
    prefix: getCanonicalPrefix(styleFromValues, {
      family
    })
  });
  return _objectSpread2(_objectSpread2(_objectSpread2({}, canonical), getDefaultCanonicalPrefix({
    values,
    family,
    styles,
    config,
    canonical,
    givenPrefix
  })), applyShimAndAlias(skipLookups, givenPrefix, canonical));
}
function applyShimAndAlias(skipLookups, givenPrefix, canonical) {
  let {
    prefix,
    iconName
  } = canonical;
  if (skipLookups || !prefix || !iconName) {
    return {
      prefix,
      iconName
    };
  }
  const shim = givenPrefix === 'fa' ? byOldName(iconName) : {};
  const aliasIconName = byAlias(prefix, iconName);
  iconName = shim.iconName || aliasIconName || iconName;
  prefix = shim.prefix || prefix;
  if (prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
    // Allow a fallback from the regular style to solid if regular is not available
    // but only if we aren't auto-fetching SVGs
    prefix = 'fas';
  }
  return {
    prefix,
    iconName
  };
}
const newCanonicalFamilies = L.filter(familyId => {
  return familyId !== s || familyId !== t;
});
const newCanonicalStyles = Object.keys(ga).filter(key => key !== s).map(key => Object.keys(ga[key])).flat();
function getDefaultCanonicalPrefix(prefixOptions) {
  const {
    values,
    family,
    canonical,
    givenPrefix = '',
    styles = {},
    config: config$$1 = {}
  } = prefixOptions;
  const isDuotoneFamily = family === t;
  const valuesHasDuotone = values.includes('fa-duotone') || values.includes('fad');
  const defaultFamilyIsDuotone = config$$1.familyDefault === 'duotone';
  const canonicalPrefixIsDuotone = canonical.prefix === 'fad' || canonical.prefix === 'fa-duotone';
  if (!isDuotoneFamily && (valuesHasDuotone || defaultFamilyIsDuotone || canonicalPrefixIsDuotone)) {
    canonical.prefix = 'fad';
  }
  if (values.includes('fa-brands') || values.includes('fab')) {
    canonical.prefix = 'fab';
  }
  if (!canonical.prefix && newCanonicalFamilies.includes(family)) {
    const validPrefix = Object.keys(styles).find(key => newCanonicalStyles.includes(key));
    if (validPrefix || config$$1.autoFetchSvg) {
      const defaultPrefix = pt.get(family).defaultShortPrefixId;
      canonical.prefix = defaultPrefix;
      canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
    }
  }
  if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
    // The fa prefix is not canonical. So if it has made it through until this point
    // we will shift it to the correct prefix.
    canonical.prefix = getDefaultUsablePrefix() || 'fas';
  }
  return canonical;
}
class Library {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
      definitions[_key] = arguments[_key];
    }
    const additions = definitions.reduce(this._pullDefinitions, {});
    Object.keys(additions).forEach(key => {
      this.definitions[key] = _objectSpread2(_objectSpread2({}, this.definitions[key] || {}), additions[key]);
      defineIcons(key, additions[key]);

      // TODO can we stop doing this? We can't get the icons by 'fa-solid' any longer so this probably needs to change
      const longPrefix = PREFIX_TO_LONG_STYLE[s][key];
      if (longPrefix) defineIcons(longPrefix, additions[key]);
      build();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(additions, definition) {
    const normalized = definition.prefix && definition.iconName && definition.icon ? {
      0: definition
    } : definition;
    Object.keys(normalized).map(key => {
      const {
        prefix,
        iconName,
        icon
      } = normalized[key];
      const aliases = icon[2];
      if (!additions[prefix]) additions[prefix] = {};
      if (aliases.length > 0) {
        aliases.forEach(alias => {
          if (typeof alias === 'string') {
            additions[prefix][alias] = icon;
          }
        });
      }
      additions[prefix][iconName] = icon;
    });
    return additions;
  }
}
let _plugins = [];
let _hooks = {};
const providers = {};
const defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref) {
  let {
    mixoutsTo: obj
  } = _ref;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(k => {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });
  _plugins.forEach(plugin => {
    const mixout = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout).forEach(tk => {
      if (typeof mixout[tk] === 'function') {
        obj[tk] = mixout[tk];
      }
      if (typeof mixout[tk] === 'object') {
        Object.keys(mixout[tk]).forEach(sk => {
          if (!obj[tk]) {
            obj[tk] = {};
          }
          obj[tk][sk] = mixout[tk][sk];
        });
      }
    });
    if (plugin.hooks) {
      const hooks = plugin.hooks();
      Object.keys(hooks).forEach(hook => {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }
        _hooks[hook].push(hooks[hook]);
      });
    }
    if (plugin.provides) {
      plugin.provides(providers);
    }
  });
  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  const hookFns = _hooks[hook] || [];
  hookFns.forEach(hookFn => {
    accumulator = hookFn.apply(null, [accumulator, ...args]); // eslint-disable-line no-useless-call
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  const hookFns = _hooks[hook] || [];
  hookFns.forEach(hookFn => {
    hookFn.apply(null, args);
  });
  return undefined;
}
function callProvided() {
  const hook = arguments[0];
  const args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : undefined;
}
function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === 'fa') {
    iconLookup.prefix = 'fas';
  }
  let {
    iconName
  } = iconLookup;
  const prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName) return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
const library = new Library();
const noAuto = () => {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks('noAuto');
};
const dom = {
  i2svg: function () {
    let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (IS_DOM) {
      callHooks('beforeI2svg', params);
      callProvided('pseudoElements2svg', params);
      return callProvided('i2svg', params);
    } else {
      return Promise.reject(new Error('Operation requires a DOM of some kind.'));
    }
  },
  watch: function () {
    let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const {
      autoReplaceSvgRoot
    } = params;
    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }
    config.observeMutations = true;
    domready(() => {
      autoReplace({
        autoReplaceSvgRoot
      });
      callHooks('watch', params);
    });
  }
};
const parse = {
  icon: icon => {
    if (icon === null) {
      return null;
    }
    if (typeof icon === 'object' && icon.prefix && icon.iconName) {
      return {
        prefix: icon.prefix,
        iconName: byAlias(icon.prefix, icon.iconName) || icon.iconName
      };
    }
    if (Array.isArray(icon) && icon.length === 2) {
      const iconName = icon[1].indexOf('fa-') === 0 ? icon[1].slice(3) : icon[1];
      const prefix = getCanonicalPrefix(icon[0]);
      return {
        prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }
    if (typeof icon === 'string' && (icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      const canonicalIcon = getCanonicalIcon(icon.split(' '), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }
    if (typeof icon === 'string') {
      const prefix = getDefaultUsablePrefix();
      return {
        prefix,
        iconName: byAlias(prefix, icon) || icon
      };
    }
  }
};
const api = {
  noAuto,
  config,
  dom,
  parse,
  library,
  findIconDefinition,
  toHtml
};
const autoReplace = function () {
  let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    autoReplaceSvgRoot = DOCUMENT
  } = params;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};
function domVariants(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function () {
      return val.abstract.map(a => toHtml(a));
    }
  });
  Object.defineProperty(val, 'node', {
    get: function () {
      if (!IS_DOM) return;
      const container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}
function asIcon(_ref) {
  let {
    children,
    main,
    mask,
    attributes,
    styles,
    transform
  } = _ref;
  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    const {
      width,
      height
    } = main;
    const offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }
  return [{
    tag: 'svg',
    attributes,
    children
  }];
}
function asSymbol(_ref) {
  let {
    prefix,
    iconName,
    children,
    attributes,
    symbol
  } = _ref;
  const id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
        id
      }),
      children
    }]
  }];
}
function makeInlineSvgAbstract(params) {
  const {
    icons: {
      main,
      mask
    },
    prefix,
    iconName,
    transform,
    symbol,
    title,
    maskId,
    titleId,
    extra,
    watchable = false
  } = params;
  const {
    width,
    height
  } = mask.found ? mask : main;
  const isUploadedIcon = Lt.includes(prefix);
  const attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ''].filter(c$$1 => extra.classes.indexOf(c$$1) === -1).filter(c$$1 => c$$1 !== '' || !!c$$1).concat(extra.classes).join(' ');
  let content = {
    children: [],
    attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  const uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};
  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }
  if (title) {
    content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }
  const args = _objectSpread2(_objectSpread2({}, content), {}, {
    prefix,
    iconName,
    main,
    mask,
    maskId,
    transform,
    symbol,
    styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
  });
  const {
    children,
    attributes
  } = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
    children: [],
    attributes: {}
  } : callProvided('generateAbstractIcon', args) || {
    children: [],
    attributes: {}
  };
  args.children = children;
  args.attributes = attributes;
  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  const {
    content,
    width,
    height,
    transform,
    title,
    extra,
    watchable = false
  } = params;
  const attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });
  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }
  const styles = _objectSpread2({}, extra.styles);
  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform,
      startCentered: true,
      width,
      height
    });
    styles['-webkit-transform'] = styles['transform'];
  }
  const styleString = joinStyles(styles);
  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }
  const val = [];
  val.push({
    tag: 'span',
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }
  return val;
}
function makeLayersCounterAbstract(params) {
  const {
    content,
    title,
    extra
  } = params;
  const attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });
  const styleString = joinStyles(extra.styles);
  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }
  const val = [];
  val.push({
    tag: 'span',
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }
  return val;
}
const {
  styles: styles$1
} = namespace;
function asFoundIcon(icon) {
  const width = icon[0];
  const height = icon[1];
  const [vectorData] = icon.slice(4);
  let element = null;
  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }
  return {
    found: true,
    width,
    height,
    icon: element
  };
}
const missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};
function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION && !config.showMissingIcons && iconName) {
    console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
  }
}
function findIcon(iconName, prefix) {
  let givenPrefix = prefix;
  if (prefix === 'fa' && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }
  return new Promise((resolve, reject) => {
    if (givenPrefix === 'fa') {
      const shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }
    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      const icon = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }
    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
    }));
  });
}
const noop$1 = () => {};
const p$2 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
const preamble = "FA \"6.7.2\"";
const begin = name => {
  p$2.mark("".concat(preamble, " ").concat(name, " begins"));
  return () => end(name);
};
const end = name => {
  p$2.mark("".concat(preamble, " ").concat(name, " ends"));
  p$2.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};
var perf = {
  begin,
  end
};
const noop$2 = () => {};
function isWatched(node) {
  const i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}
function hasPrefixAndIcon(node) {
  const prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  const icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon;
}
function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}
function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }
  const mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}
function createElementNS(tag) {
  return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
}
function createElement(tag) {
  return DOCUMENT.createElement(tag);
}
function convertSVG(abstractObj) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    ceFn = abstractObj.tag === 'svg' ? createElementNS : createElement
  } = params;
  if (typeof abstractObj === 'string') {
    return DOCUMENT.createTextNode(abstractObj);
  }
  const tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function (key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  const children = abstractObj.children || [];
  children.forEach(function (child) {
    tag.appendChild(convertSVG(child, {
      ceFn
    }));
  });
  return tag;
}
function nodeAsComment(node) {
  let comment = " ".concat(node.outerHTML, " ");
  /* BEGIN.ATTRIBUTION */
  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  /* END.ATTRIBUTION */
  return comment;
}
const mutators = {
  replace: function (mutation) {
    const node = mutation[0];
    if (node.parentNode) {
      mutation[1].forEach(abstract => {
        node.parentNode.insertBefore(convertSVG(abstract), node);
      });
      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        let comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function (mutation) {
    const node = mutation[0];
    const abstract = mutation[1];

    // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement
    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }
    const forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
    delete abstract[0].attributes.id;
    if (abstract[0].attributes.class) {
      const splitClasses = abstract[0].attributes.class.split(' ').reduce((acc, cls) => {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }
        return acc;
      }, {
        toNode: [],
        toSvg: []
      });
      abstract[0].attributes.class = splitClasses.toSvg.join(' ');
      if (splitClasses.toNode.length === 0) {
        node.removeAttribute('class');
      } else {
        node.setAttribute('class', splitClasses.toNode.join(' '));
      }
    }
    const newInnerHTML = abstract.map(a => toHtml(a)).join('\n');
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};
function performOperationSync(op) {
  op();
}
function perform(mutations, callback) {
  const callbackFunction = typeof callback === 'function' ? callback : noop$2;
  if (mutations.length === 0) {
    callbackFunction();
  } else {
    let frame = performOperationSync;
    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }
    frame(() => {
      const mutator = getMutator();
      const mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
let disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
let mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }
  if (!config.observeMutations) {
    return;
  }
  const {
    treeCallback = noop$2,
    nodeCallback = noop$2,
    pseudoElementsCallback = noop$2,
    observeMutationsRoot = DOCUMENT
  } = options;
  mo = new MUTATION_OBSERVER(objects => {
    if (disabled) return;
    const defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(mutationRecord => {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }
        treeCallback(mutationRecord.target);
      }
      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }
      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
          const {
            prefix,
            iconName
          } = getCanonicalIcon(classArray(mutationRecord.target));
          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}
function styleParser(node) {
  const style = node.getAttribute('style');
  let val = [];
  if (style) {
    val = style.split(';').reduce((acc, style) => {
      const styles = style.split(':');
      const prop = styles[0];
      const value = styles.slice(1);
      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }
      return acc;
    }, {});
  }
  return val;
}
function classParser(node) {
  const existingPrefix = node.getAttribute('data-prefix');
  const existingIconName = node.getAttribute('data-icon');
  const innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  let val = getCanonicalIcon(classArray(node));
  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }
  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }
  if (val.iconName && val.prefix) {
    return val;
  }
  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }
  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }
  return val;
}
function attributesParser(node) {
  const extraAttributes = toArray(node.attributes).reduce((acc, attr) => {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});
  const title = node.getAttribute('title');
  const titleId = node.getAttribute('data-fa-title-id');
  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }
  return extraAttributes;
}
function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  let parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    styleParser: true
  };
  const {
    iconName,
    prefix,
    rest: extraClasses
  } = classParser(node);
  const extraAttributes = attributesParser(node);
  const pluginMeta = chainHooks('parseNodeAttributes', {}, node);
  let extraStyles = parser.styleParser ? styleParser(node) : [];
  return _objectSpread2({
    iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}
const {
  styles: styles$2
} = namespace;
function generateMutation(node) {
  const nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);
  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided('generateLayersText', node, nodeMeta);
  } else {
    return callProvided('generateSvgReplacementMutation', node, nodeMeta);
  }
}
function getKnownPrefixes() {
  return [...Ft, ...Ia];
}
function onTree(root) {
  let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return Promise.resolve();
  const htmlClassList = DOCUMENT.documentElement.classList;
  const hclAdd = suffix => htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  const hclRemove = suffix => htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  const prefixes = config.autoFetchSvg ? getKnownPrefixes() : P.concat(Object.keys(styles$2));
  if (!prefixes.includes('fa')) {
    prefixes.push('fa');
  }
  const prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(p$$1 => ".".concat(p$$1, ":not([").concat(DATA_FA_I2SVG, "])"))).join(', ');
  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }
  let candidates = [];
  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e$$1) {
    // noop
  }
  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return Promise.resolve();
  }
  const mark = perf.begin('onTree');
  const mutations = candidates.reduce((acc, node) => {
    try {
      const mutation = generateMutation(node);
      if (mutation) {
        acc.push(mutation);
      }
    } catch (e$$1) {
      if (!PRODUCTION) {
        if (e$$1.name === 'MissingIcon') {
          console.error(e$$1);
        }
      }
    }
    return acc;
  }, []);
  return new Promise((resolve, reject) => {
    Promise.all(mutations).then(resolvedMutations => {
      perform(resolvedMutations, () => {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(e$$1 => {
      mark();
      reject(e$$1);
    });
  });
}
function onNode(node) {
  let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(mutation => {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}
function resolveIcons(next) {
  return function (maybeIconDefinition) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    let {
      mask
    } = params;
    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }
    return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
      mask
    }));
  };
}
const render = function (iconDefinition) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    transform = meaninglessTransform,
    symbol = false,
    mask = null,
    maskId = null,
    title = null,
    titleId = null,
    classes = [],
    attributes = {},
    styles = {}
  } = params;
  if (!iconDefinition) return;
  const {
    prefix,
    iconName,
    icon
  } = iconDefinition;
  return domVariants(_objectSpread2({
    type: 'icon'
  }, iconDefinition), () => {
    callHooks('beforeDOMElementCreation', {
      iconDefinition,
      params
    });
    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }
    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix,
      iconName,
      transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
      symbol,
      title,
      maskId,
      titleId,
      extra: {
        attributes,
        styles,
        classes
      }
    });
  });
};
var ReplaceElements = {
  mixout() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides(providers$$1) {
    providers$$1.i2svg = function (params) {
      const {
        node = DOCUMENT,
        callback = () => {}
      } = params;
      return onTree(node, callback);
    };
    providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
      const {
        iconName,
        title,
        titleId,
        prefix,
        transform,
        symbol,
        mask,
        maskId,
        extra
      } = nodeMeta;
      return new Promise((resolve, reject) => {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(_ref => {
          let [main, mask] = _ref;
          resolve([node, makeInlineSvgAbstract({
            icons: {
              main,
              mask
            },
            prefix,
            iconName,
            transform,
            symbol,
            maskId,
            title,
            titleId,
            extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };
    providers$$1.generateAbstractIcon = function (_ref2) {
      let {
        children,
        attributes,
        main,
        transform,
        styles
      } = _ref2;
      const styleString = joinStyles(styles);
      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }
      let nextChild;
      if (transformIsMeaningful(transform)) {
        nextChild = callProvided('generateAbstractTransformGrouping', {
          main,
          transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }
      children.push(nextChild || main.icon);
      return {
        children,
        attributes
      };
    };
  }
};
var Layers = {
  mixout() {
    return {
      layer(assembler) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const {
          classes = []
        } = params;
        return domVariants({
          type: 'layer'
        }, () => {
          callHooks('beforeDOMElementCreation', {
            assembler,
            params
          });
          let children = [];
          assembler(args => {
            Array.isArray(args) ? args.map(a => {
              children = children.concat(a.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
            tag: 'span',
            attributes: {
              class: ["".concat(config.cssPrefix, "-layers"), ...classes].join(' ')
            },
            children
          }];
        });
      }
    };
  }
};
var LayersCounter = {
  mixout() {
    return {
      counter(content) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const {
          title = null,
          classes = [],
          attributes = {},
          styles = {}
        } = params;
        return domVariants({
          type: 'counter',
          content
        }, () => {
          callHooks('beforeDOMElementCreation', {
            content,
            params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title,
            extra: {
              attributes,
              styles,
              classes: ["".concat(config.cssPrefix, "-layers-counter"), ...classes]
            }
          });
        });
      }
    };
  }
};
var LayersText = {
  mixout() {
    return {
      text(content) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const {
          transform = meaninglessTransform,
          title = null,
          classes = [],
          attributes = {},
          styles = {}
        } = params;
        return domVariants({
          type: 'text',
          content
        }, () => {
          callHooks('beforeDOMElementCreation', {
            content,
            params
          });
          return makeLayersTextAbstract({
            content,
            transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
            title,
            extra: {
              attributes,
              styles,
              classes: ["".concat(config.cssPrefix, "-layers-text"), ...classes]
            }
          });
        });
      }
    };
  },
  provides(providers$$1) {
    providers$$1.generateLayersText = function (node, nodeMeta) {
      const {
        title,
        transform,
        extra
      } = nodeMeta;
      let width = null;
      let height = null;
      if (IS_IE) {
        const computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        const boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }
      if (config.autoA11y && !title) {
        extra.attributes['aria-hidden'] = 'true';
      }
      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width,
        height,
        transform,
        title,
        extra,
        watchable: true
      })]);
    };
  }
};
const CLEAN_CONTENT_PATTERN = new RegExp('\u{22}', 'ug');
const SECONDARY_UNICODE_RANGE = [1105920, 1112319];
const _FONT_FAMILY_WEIGHT_TO_PREFIX = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  FontAwesome: {
    normal: 'fas',
    400: 'fas'
  }
}), lt), wa), Yt);
const FONT_FAMILY_WEIGHT_TO_PREFIX = Object.keys(_FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, key) => {
  acc[key.toLowerCase()] = _FONT_FAMILY_WEIGHT_TO_PREFIX[key];
  return acc;
}, {});
const FONT_FAMILY_WEIGHT_FALLBACK = Object.keys(FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, fontFamily) => {
  const weights = FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamily];
  acc[fontFamily] = weights[900] || [...Object.entries(weights)][0][1];
  return acc;
}, {});
function hexValueFromContent(content) {
  const cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
  const codePoint = codePointAt(cleaned, 0);
  const isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  const isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}
function getPrefix(fontFamily, fontWeight) {
  const fontFamilySanitized = fontFamily.replace(/^['"]|['"]$/g, '').toLowerCase();
  const fontWeightInteger = parseInt(fontWeight);
  const fontWeightSanitized = isNaN(fontWeightInteger) ? 'normal' : fontWeightInteger;
  return (FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamilySanitized] || {})[fontWeightSanitized] || FONT_FAMILY_WEIGHT_FALLBACK[fontFamilySanitized];
}
function replaceForPosition(node, position) {
  const pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new Promise((resolve, reject) => {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }
    const children = toArray(node.children);
    const alreadyProcessedPseudoElement = children.filter(c$$1 => c$$1.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position)[0];
    const styles = WINDOW.getComputedStyle(node, position);
    const fontFamily = styles.getPropertyValue('font-family');
    const fontFamilyMatch = fontFamily.match(FONT_FAMILY_PATTERN);
    const fontWeight = styles.getPropertyValue('font-weight');
    const content = styles.getPropertyValue('content');
    if (alreadyProcessedPseudoElement && !fontFamilyMatch) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamilyMatch && content !== 'none' && content !== '') {
      const content = styles.getPropertyValue('content');
      let prefix = getPrefix(fontFamily, fontWeight);
      const {
        value: hexValue,
        isSecondary
      } = hexValueFromContent(content);
      const isV4 = fontFamilyMatch[0].startsWith('FontAwesome');
      let iconName = byUnicode(prefix, hexValue);
      let iconIdentifier = iconName;
      if (isV4) {
        const iconName4 = byOldUnicode(hexValue);
        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      }

      // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
      // already done so with the same prefix and iconName
      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);
        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }
        const meta = blankMeta();
        const {
          extra
        } = meta;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(main => {
          const abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
            icons: {
              main,
              mask: emptyCanonicalIcon()
            },
            prefix,
            iconName: iconIdentifier,
            extra,
            watchable: true
          }));
          const element = DOCUMENT.createElementNS('http://www.w3.org/2000/svg', 'svg');
          if (position === '::before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }
          element.outerHTML = abstract.map(a$$1 => toHtml(a$$1)).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}
function replace(node) {
  return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
}
function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}
function searchPseudoElements(root) {
  if (!IS_DOM) return;
  return new Promise((resolve, reject) => {
    const operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    const end = perf.begin('searchPseudoElements');
    disableObservation();
    Promise.all(operations).then(() => {
      end();
      enableObservation();
      resolve();
    }).catch(() => {
      end();
      enableObservation();
      reject();
    });
  });
}
var PseudoElements = {
  hooks() {
    return {
      mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides(providers) {
    providers.pseudoElements2svg = function (params) {
      const {
        node = DOCUMENT
      } = params;
      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};
let _unwatched = false;
var MutationObserver$1 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        observe(chainHooks('mutationObserverCallbacks', {}));
      },
      noAuto() {
        disconnect();
      },
      watch(params) {
        const {
          observeMutationsRoot
        } = params;
        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks('mutationObserverCallbacks', {
            observeMutationsRoot
          }));
        }
      }
    };
  }
};
const parseTransformString = transformString => {
  let transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(' ').reduce((acc, n) => {
    const parts = n.toLowerCase().split('-');
    const first = parts[0];
    let rest = parts.slice(1).join('-');
    if (first && rest === 'h') {
      acc.flipX = true;
      return acc;
    }
    if (first && rest === 'v') {
      acc.flipY = true;
      return acc;
    }
    rest = parseFloat(rest);
    if (isNaN(rest)) {
      return acc;
    }
    switch (first) {
      case 'grow':
        acc.size = acc.size + rest;
        break;
      case 'shrink':
        acc.size = acc.size - rest;
        break;
      case 'left':
        acc.x = acc.x - rest;
        break;
      case 'right':
        acc.x = acc.x + rest;
        break;
      case 'up':
        acc.y = acc.y - rest;
        break;
      case 'down':
        acc.y = acc.y + rest;
        break;
      case 'rotate':
        acc.rotate = acc.rotate + rest;
        break;
    }
    return acc;
  }, transform);
};
var PowerTransforms = {
  mixout() {
    return {
      parse: {
        transform: transformString => {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const transformString = node.getAttribute('data-fa-transform');
        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }
        return accumulator;
      }
    };
  },
  provides(providers) {
    providers.generateAbstractTransformGrouping = function (_ref) {
      let {
        main,
        transform,
        containerWidth,
        iconWidth
      } = _ref;
      const outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      const inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      const path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      const operations = {
        outer,
        inner,
        path
      };
      return {
        tag: 'g',
        attributes: _objectSpread2({}, operations.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread2({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};
const ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};
function fillBlack(abstract) {
  let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }
  return abstract;
}
function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}
var Masks = {
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const maskData = node.getAttribute('data-fa-mask');
        const mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(i => i.trim()));
        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }
        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute('data-fa-mask-id');
        return accumulator;
      }
    };
  },
  provides(providers) {
    providers.generateAbstractMask = function (_ref) {
      let {
        children,
        attributes,
        main,
        mask,
        maskId: explicitMaskId,
        transform
      } = _ref;
      const {
        width: mainWidth,
        icon: mainPath
      } = main;
      const {
        width: maskWidth,
        icon: maskPath
      } = mask;
      const trans = transformForSvg({
        transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      const maskRect = {
        tag: 'rect',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          fill: 'white'
        })
      };
      const maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      const maskInnerGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.inner),
        children: [fillBlack(_objectSpread2({
          tag: mainPath.tag,
          attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      const maskOuterGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.outer),
        children: [maskInnerGroup]
      };
      const maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      const clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      const maskTag = {
        tag: 'mask',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: 'userSpaceOnUse',
          maskContentUnits: 'userSpaceOnUse'
        }),
        children: [maskRect, maskOuterGroup]
      };
      const defs = {
        tag: 'defs',
        children: [{
          tag: 'clipPath',
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: 'rect',
        attributes: _objectSpread2({
          fill: 'currentColor',
          'clip-path': "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children,
        attributes
      };
    };
  }
};
var MissingIconIndicator = {
  provides(providers) {
    let reduceMotion = false;
    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    providers.missingIconAbstract = function () {
      const gChildren = [];
      const FILL = {
        fill: 'currentColor'
      };
      const ANIMATION_BASE = {
        attributeType: 'XML',
        repeatCount: 'indefinite',
        dur: '2s'
      };

      // Ring
      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
        })
      });
      const OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
        attributeName: 'opacity'
      });
      const dot = {
        tag: 'circle',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          cx: '256',
          cy: '364',
          r: '28'
        }),
        children: []
      };
      if (!reduceMotion) {
        dot.children.push({
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
            attributeName: 'r',
            values: '28;14;28;28;14;28;'
          })
        }, {
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;1;1;0;1;'
          })
        });
      }
      gChildren.push(dot);
      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          opacity: '1',
          d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
        }),
        children: reduceMotion ? [] : [{
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;0;0;0;1;'
          })
        }]
      });
      if (!reduceMotion) {
        // Exclamation
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '0',
            d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
          }),
          children: [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '0;0;1;1;0;0;'
            })
          }]
        });
      }
      return {
        tag: 'g',
        attributes: {
          'class': 'missing'
        },
        children: gChildren
      };
    };
  }
};
var SvgSymbols = {
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const symbolData = node.getAttribute('data-fa-symbol');
        const symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
        accumulator['symbol'] = symbol;
        return accumulator;
      }
    };
  }
};
var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
registerPlugins(plugins, {
  mixoutsTo: api
});
const noAuto$1 = api.noAuto;
const config$1 = api.config;
const library$1 = api.library;
const dom$1 = api.dom;
const parse$1 = api.parse;
const findIconDefinition$1 = api.findIconDefinition;
const toHtml$1 = api.toHtml;
const icon = api.icon;
const layer = api.layer;
const text = api.text;
const counter = api.counter;


/***/ }),

/***/ 4996:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IAJ: function() { return /* binding */ faLinkedin; },
/* harmony export */   Vz1: function() { return /* binding */ faGithub; }
/* harmony export */ });
/* unused harmony exports fab, prefix, faMonero, faHooli, faYelp, faCcVisa, faLastfm, faShopware, faCreativeCommonsNc, faAws, faRedhat, faYoast, faCloudflare, faUps, faPixiv, faWpexplorer, faDyalog, faBity, faStackpath, faBuysellads, faFirstOrder, faModx, faGuilded, faVnv, faSquareJs, faJsSquare, faMicrosoft, faQq, faOrcid, faJava, faInvision, faCreativeCommonsPdAlt, faCentercode, faGlideG, faDrupal, faJxl, faDartLang, faHireAHelper, faCreativeCommonsBy, faUnity, faWhmcs, faRocketchat, faVk, faUntappd, faMailchimp, faCss3Alt, faSquareReddit, faRedditSquare, faVimeoV, faContao, faSquareFontAwesome, faDeskpro, faBrave, faSistrix, faSquareInstagram, faInstagramSquare, faBattleNet, faTheRedYeti, faSquareHackerNews, faHackerNewsSquare, faEdge, faThreads, faNapster, faSquareSnapchat, faSnapchatSquare, faGooglePlusG, faArtstation, faMarkdown, faSourcetree, faGooglePlus, faDiaspora, faFoursquare, faStackOverflow, faGithubAlt, faPhoenixSquadron, faPagelines, faAlgolia, faRedRiver, faCreativeCommonsSa, faSafari, faGoogle, faSquareFontAwesomeStroke, faFontAwesomeAlt, faAtlassian, faLinkedinIn, faDigitalOcean, faNimblr, faChromecast, faEvernote, faHackerNews, faCreativeCommonsSampling, faAdversal, faCreativeCommons, faWatchmanMonitoring, faFonticons, faWeixin, faShirtsinbulk, faCodepen, faGitAlt, faLyft, faRev, faWindows, faWizardsOfTheCoast, faSquareViadeo, faViadeoSquare, faMeetup, faCentos, faAdn, faCloudsmith, faOpensuse, faPiedPiperAlt, faSquareDribbble, faDribbbleSquare, faCodiepie, faNode, faMix, faSteam, faCcApplePay, faScribd, faDebian, faOpenid, faInstalod, faFilesPinwheel, faExpeditedssl, faSellcast, faSquareTwitter, faTwitterSquare, faRProject, faDelicious, faFreebsd, faVuejs, faAccusoft, faIoxhost, faFonticonsFi, faAppStore, faCcMastercard, faItunesNote, faGolang, faKickstarter, faSquareKickstarter, faGrav, faWeibo, faUncharted, faFirstdraft, faSquareYoutube, faYoutubeSquare, faWikipediaW, faWpressr, faRendact, faAngellist, faGalacticRepublic, faNfcDirectional, faSkype, faJoget, faFedora, faStripeS, faMeta, faLaravel, faHotjar, faBluetoothB, faSquareLetterboxd, faStickerMule, faCreativeCommonsZero, faHips, faCss, faBehance, faReddit, faDiscord, faChrome, faAppStoreIos, faCcDiscover, faWpbeginner, faConfluence, faShoelace, faMdb, faDochub, faAccessibleIcon, faEbay, faAmazon, faUnsplash, faYarn, faSquareSteam, faSteamSquare, fa500px, faSquareVimeo, faVimeoSquare, faAsymmetrik, faFontAwesome, faFontAwesomeFlag, faFontAwesomeLogoFull, faGratipay, faApple, faHive, faGitkraken, faKeybase, faApplePay, faPadlet, faAmazonPay, faSquareGithub, faGithubSquare, faStumbleupon, faFedex, faPhoenixFramework, faShopify, faNeos, faSquareThreads, faHackerrank, faResearchgate, faSwift, faAngular, faSpeakap, faAngrycreative, faYCombinator, faEmpire, faEnvira, faGoogleScholar, faSquareGitlab, faGitlabSquare, faStudiovinari, faPiedPiper, faWordpress, faProductHunt, faFirefox, faLinode, faGoodreads, faSquareOdnoklassniki, faOdnoklassnikiSquare, faJsfiddle, faSith, faThemeisle, faPage4, faHashnode, faReact, faCcPaypal, faSquarespace, faCcStripe, faCreativeCommonsShare, faBitcoin, faKeycdn, faOpera, faItchIo, faUmbraco, faGalacticSenate, faUbuntu, faDraft2digital, faStripe, faHouzz, faGg, faDhl, faSquarePinterest, faPinterestSquare, faXing, faBlackberry, faCreativeCommonsPd, faPlaystation, faQuinscape, faLess, faBloggerB, faOpencart, faVine, faSignalMessenger, faPaypal, faGitlab, faTypo3, faRedditAlien, faYahoo, faDailymotion, faAffiliatetheme, faPiedPiperPp, faBootstrap, faOdnoklassniki, faNfcSymbol, faMintbit, faEthereum, faSpeakerDeck, faCreativeCommonsNcEu, faPatreon, faAvianex, faEllo, faGofore, faBimobject, faBraveReverse, faFacebookF, faSquareGooglePlus, faGooglePlusSquare, faWebAwesome, faMandalorian, faFirstOrderAlt, faOsi, faGoogleWallet, faDAndDBeyond, faPeriscope, faFulcrum, faCloudscale, faForumbee, faMizuni, faSchlix, faSquareXing, faXingSquare, faBandcamp, faWpforms, faCloudversify, faUsps, faMegaport, faMagento, faSpotify, faOptinMonster, faFly, faSquareBluesky, faAviato, faItunes, faCuttlefish, faBlogger, faFlickr, faViber, faSoundcloud, faDigg, faTencentWeibo, faLetterboxd, faSymfony, faMaxcdn, faEtsy, faFacebookMessenger, faAudible, faThinkPeaks, faBilibili, faErlang, faXTwitter, faCottonBureau, faDashcube, fa42Group, faInnosoft, faStackExchange, faElementor, faSquarePiedPiper, faPiedPiperSquare, faCreativeCommonsNd, faPalfed, faSuperpowers, faResolving, faXbox, faSquareWebAwesomeStroke, faSearchengin, faTiktok, faSquareFacebook, faFacebookSquare, faRenren, faLinux, faGlide, faHubspot, faDeploydog, faTwitch, faFlutter, faRavelry, faMixer, faSquareLastfm, faLastfmSquare, faVimeo, faMendeley, faUniregistry, faFigma, faCreativeCommonsRemix, faCcAmazonPay, faDropbox, faInstagram, faCmplid, faUpwork, faFacebook, faGripfire, faJediOrder, faUikit, faFortAwesomeAlt, faPhabricator, faUssunnah, faEarlybirds, faTradeFederation, faAutoprefixer, faWhatsapp, faSquareUpwork, faSlideshare, faGooglePlay, faViadeo, faLine, faGoogleDrive, faServicestack, faSimplybuilt, faBitbucket, faImdb, faDeezer, faRaspberryPi, faJira, faDocker, faScreenpal, faBluetooth, faGitter, faDAndD, faMicroblog, faCcDinersClub, faGgCircle, faPiedPiperHat, faKickstarterK, faYandex, faReadme, faHtml5, faSellsy, faSquareWebAwesome, faSass, faWirsindhandwerk, faWsh, faBuromobelexperte, faSalesforce, faOctopusDeploy, faMedapps, faNs8, faPinterestP, faApper, faFortAwesome, faWaze, faBluesky, faCcJcb, faSnapchat, faSnapchatGhost, faFantasyFlightGames, faRust, faWix, faSquareBehance, faBehanceSquare, faSupple, faWebflow, faRebel, faCss3, faStaylinked, faKaggle, faSpaceAwesome, faDeviantart, faCpanel, faGoodreadsG, faSquareGit, faGitSquare, faSquareTumblr, faTumblrSquare, faTrello, faCreativeCommonsNcJp, faGetPocket, faPerbyte, faGrunt, faWeebly, faConnectdevelop, faLeanpub, faBlackTie, faThemeco, faPython, faAndroid, faBots, faFreeCodeCamp, faHornbill, faJs, faIdeal, faGit, faDev, faSketch, faYandexInternational, faCcAmex, faUber, faPhp, faAlipay, faYoutube, faSkyatlas, faFirefoxBrowser, faReplyd, faSuse, faJenkins, faTwitter, faRockrms, faPinterest, faBuffer, faNpm, faYammer, faBtc, faDribbble, faStumbleuponCircle, faInternetExplorer, faStubber, faTelegram, faTelegramPlane, faOldRepublic, faOdysee, faSquareWhatsapp, faWhatsappSquare, faNodeJs, faEdgeLegacy, faSlack, faSlackHash, faMedrt, faUsb, faTumblr, faVaadin, faQuora, faSquareXTwitter, faReacteurope, faMedium, faMediumM, faAmilia, faMixcloud, faFlipboard, faViacoin, faCriticalRole, faSitrox, faDiscourse, faJoomla, faMastodon, faAirbnb, faWolfPackBattalion, faBuyNLarge, faGulp, faCreativeCommonsSamplingPlus, faStrava, faEmber, faCanadianMapleLeaf, faTeamspeak, faPushed, faWordpressSimple, faNutritionix, faWodu, faGooglePay, faIntercom, faZhihu, faKorvue, faPix, faSteamSymbol */
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.

/***/ }),

/***/ 2353:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   URI: function() { return /* binding */ faBuilding; },
/* harmony export */   X46: function() { return /* binding */ faUser; },
/* harmony export */   a$: function() { return /* binding */ faClock; },
/* harmony export */   ckx: function() { return /* binding */ faBars; },
/* harmony export */   u4D: function() { return /* binding */ faBriefcase; },
/* harmony export */   y_8: function() { return /* binding */ faEnvelope; }
/* harmony export */ });
/* unused harmony exports fas, prefix, fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, faFillDrip, faArrowsToCircle, faCircleChevronRight, faChevronCircleRight, faAt, faTrashCan, faTrashAlt, faTextHeight, faUserXmark, faUserTimes, faStethoscope, faMessage, faCommentAlt, faInfo, faDownLeftAndUpRightToCenter, faCompressAlt, faExplosion, faFileLines, faFileAlt, faFileText, faWaveSquare, faRing, faBuildingUn, faDiceThree, faCalendarDays, faCalendarAlt, faAnchorCircleCheck, faBuildingCircleArrowRight, faVolleyball, faVolleyballBall, faArrowsUpToLine, faSortDown, faSortDesc, faCircleMinus, faMinusCircle, faDoorOpen, faRightFromBracket, faSignOutAlt, faAtom, faSoap, faIcons, faHeartMusicCameraBolt, faMicrophoneLinesSlash, faMicrophoneAltSlash, faBridgeCircleCheck, faPumpMedical, faFingerprint, faHandPointRight, faMagnifyingGlassLocation, faSearchLocation, faForwardStep, faStepForward, faFaceSmileBeam, faSmileBeam, faFlagCheckered, faFootball, faFootballBall, faSchoolCircleExclamation, faCrop, faAnglesDown, faAngleDoubleDown, faUsersRectangle, faPeopleRoof, faPeopleLine, faBeerMugEmpty, faBeer, faDiagramPredecessor, faArrowUpLong, faLongArrowUp, faFireFlameSimple, faBurn, faPerson, faMale, faLaptop, faFileCsv, faMenorah, faTruckPlane, faRecordVinyl, faFaceGrinStars, faGrinStars, faBong, faSpaghettiMonsterFlying, faPastafarianism, faArrowDownUpAcrossLine, faSpoon, faUtensilSpoon, faJarWheat, faEnvelopesBulk, faMailBulk, faFileCircleExclamation, faCircleH, faHospitalSymbol, faPager, faAddressBook, faContactBook, faStrikethrough, faK, faLandmarkFlag, faPencil, faPencilAlt, faBackward, faCaretRight, faComments, faPaste, faFileClipboard, faCodePullRequest, faClipboardList, faTruckRampBox, faTruckLoading, faUserCheck, faVialVirus, faSheetPlastic, faBlog, faUserNinja, faPersonArrowUpFromLine, faScrollTorah, faTorah, faBroomBall, faQuidditch, faQuidditchBroomBall, faToggleOff, faBoxArchive, faArchive, faPersonDrowning, faArrowDown91, faSortNumericDesc, faSortNumericDownAlt, faFaceGrinTongueSquint, faGrinTongueSquint, faSprayCan, faTruckMonster, faW, faEarthAfrica, faGlobeAfrica, faRainbow, faCircleNotch, faTabletScreenButton, faTabletAlt, faPaw, faCloud, faTrowelBricks, faFaceFlushed, faFlushed, faHospitalUser, faTentArrowLeftRight, faGavel, faLegal, faBinoculars, faMicrophoneSlash, faBoxTissue, faMotorcycle, faBellConcierge, faConciergeBell, faPenRuler, faPencilRuler, faPeopleArrows, faPeopleArrowsLeftRight, faMarsAndVenusBurst, faSquareCaretRight, faCaretSquareRight, faScissors, faCut, faSunPlantWilt, faToiletsPortable, faHockeyPuck, faTable, faMagnifyingGlassArrowRight, faTachographDigital, faDigitalTachograph, faUsersSlash, faClover, faReply, faMailReply, faStarAndCrescent, faHouseFire, faSquareMinus, faMinusSquare, faHelicopter, faCompass, faSquareCaretDown, faCaretSquareDown, faFileCircleQuestion, faLaptopCode, faSwatchbook, faPrescriptionBottle, faNavicon, faPeopleGroup, faHourglassEnd, faHourglass3, faHeartCrack, faHeartBroken, faSquareUpRight, faExternalLinkSquareAlt, faFaceKissBeam, faKissBeam, faFilm, faRulerHorizontal, faPeopleRobbery, faLightbulb, faCaretLeft, faCircleExclamation, faExclamationCircle, faSchoolCircleXmark, faArrowRightFromBracket, faSignOut, faCircleChevronDown, faChevronCircleDown, faUnlockKeyhole, faUnlockAlt, faCloudShowersHeavy, faHeadphonesSimple, faHeadphonesAlt, faSitemap, faCircleDollarToSlot, faDonate, faMemory, faRoadSpikes, faFireBurner, faFlag, faHanukiah, faFeather, faVolumeLow, faVolumeDown, faCommentSlash, faCloudSunRain, faCompress, faWheatAwn, faWheatAlt, faAnkh, faHandsHoldingChild, faAsterisk, faSquareCheck, faCheckSquare, faPesetaSign, faHeading, faHeader, faGhost, faList, faListSquares, faSquarePhoneFlip, faPhoneSquareAlt, faCartPlus, faGamepad, faCircleDot, faDotCircle, faFaceDizzy, faDizzy, faEgg, faHouseMedicalCircleXmark, faCampground, faFolderPlus, faFutbol, faFutbolBall, faSoccerBall, faPaintbrush, faPaintBrush, faLock, faGasPump, faHotTubPerson, faHotTub, faMapLocation, faMapMarked, faHouseFloodWater, faTree, faBridgeLock, faSackDollar, faPenToSquare, faEdit, faCarSide, faShareNodes, faShareAlt, faHeartCircleMinus, faHourglassHalf, faHourglass2, faMicroscope, faSink, faBagShopping, faShoppingBag, faArrowDownZA, faSortAlphaDesc, faSortAlphaDownAlt, faMitten, faPersonRays, faUsers, faEyeSlash, faFlaskVial, faHand, faHandPaper, faOm, faWorm, faHouseCircleXmark, faPlug, faChevronUp, faHandSpock, faStopwatch, faFaceKiss, faKiss, faBridgeCircleXmark, faFaceGrinTongue, faGrinTongue, faChessBishop, faFaceGrinWink, faGrinWink, faEarDeaf, faDeaf, faDeafness, faHardOfHearing, faRoadCircleCheck, faDiceFive, faSquareRss, faRssSquare, faLandMineOn, faICursor, faStamp, faStairs, faI, faHryvniaSign, faHryvnia, faPills, faFaceGrinWide, faGrinAlt, faTooth, faV, faBangladeshiTakaSign, faBicycle, faStaffSnake, faRodAsclepius, faRodSnake, faStaffAesculapius, faHeadSideCoughSlash, faTruckMedical, faAmbulance, faWheatAwnCircleExclamation, faSnowman, faMortarPestle, faRoadBarrier, faSchool, faIgloo, faJoint, faAngleRight, faHorse, faQ, faG, faNotesMedical, faTemperatureHalf, faTemperature2, faThermometer2, faThermometerHalf, faDongSign, faCapsules, faPooStorm, faPooBolt, faFaceFrownOpen, faFrownOpen, faHandPointUp, faMoneyBill, faBookmark, faAlignJustify, faUmbrellaBeach, faHelmetUn, faBullseye, faBacon, faHandPointDown, faArrowUpFromBracket, faFolder, faFolderBlank, faFileWaveform, faFileMedicalAlt, faRadiation, faChartSimple, faMarsStroke, faVial, faGauge, faDashboard, faGaugeMed, faTachometerAltAverage, faWandMagicSparkles, faMagicWandSparkles, faE, faPenClip, faPenAlt, faBridgeCircleExclamation, faSchoolCircleCheck, faDumpster, faVanShuttle, faShuttleVan, faBuildingUser, faSquareCaretLeft, faCaretSquareLeft, faHighlighter, faKey, faBullhorn, faGlobe, faSynagogue, faPersonHalfDress, faRoadBridge, faLocationArrow, faC, faTabletButton, faBuildingLock, faPizzaSlice, faMoneyBillWave, faChartArea, faAreaChart, faHouseFlag, faPersonCircleMinus, faBan, faCancel, faCameraRotate, faSprayCanSparkles, faAirFreshener, faStar, faRepeat, faCross, faBox, faVenusMars, faArrowPointer, faMousePointer, faMaximize, faExpandArrowsAlt, faChargingStation, faShapes, faTriangleCircleSquare, faShuffle, faRandom, faPersonRunning, faRunning, faMobileRetro, faGripLinesVertical, faSpider, faHandsBound, faFileInvoiceDollar, faPlaneCircleExclamation, faXRay, faSpellCheck, faSlash, faComputerMouse, faMouse, faArrowRightToBracket, faSignIn, faShopSlash, faStoreAltSlash, faServer, faVirusCovidSlash, faShopLock, faHourglassStart, faHourglass1, faBlenderPhone, faBuildingWheat, faPersonBreastfeeding, faRightToBracket, faSignInAlt, faVenus, faPassport, faThumbtackSlash, faThumbTackSlash, faHeartPulse, faHeartbeat, faPeopleCarryBox, faPeopleCarry, faTemperatureHigh, faMicrochip, faCrown, faWeightHanging, faXmarksLines, faFilePrescription, faWeightScale, faWeight, faUserGroup, faUserFriends, faArrowUpAZ, faSortAlphaUp, faChessKnight, faFaceLaughSquint, faLaughSquint, faWheelchair, faCircleArrowUp, faArrowCircleUp, faToggleOn, faPersonWalking, faWalking, faL, faFire, faBedPulse, faProcedures, faShuttleSpace, faSpaceShuttle, faFaceLaugh, faLaugh, faFolderOpen, faHeartCirclePlus, faCodeFork, faCity, faMicrophoneLines, faMicrophoneAlt, faPepperHot, faUnlock, faColonSign, faHeadset, faStoreSlash, faRoadCircleXmark, faUserMinus, faMarsStrokeUp, faMarsStrokeV, faChampagneGlasses, faGlassCheers, faClipboard, faHouseCircleExclamation, faFileArrowUp, faFileUpload, faWifi, faWifi3, faWifiStrong, faBath, faBathtub, faUnderline, faUserPen, faUserEdit, faSignature, faStroopwafel, faBold, faAnchorLock, faBuildingNgo, faManatSign, faNotEqual, faBorderTopLeft, faBorderStyle, faMapLocationDot, faMapMarkedAlt, faJedi, faSquarePollVertical, faPoll, faMugHot, faCarBattery, faBatteryCar, faGift, faDiceTwo, faChessQueen, faGlasses, faChessBoard, faBuildingCircleCheck, faPersonChalkboard, faMarsStrokeRight, faMarsStrokeH, faHandBackFist, faHandRock, faSquareCaretUp, faCaretSquareUp, faCloudShowersWater, faChartBar, faBarChart, faHandsBubbles, faHandsWash, faLessThanEqual, faTrain, faEyeLowVision, faLowVision, faCrow, faSailboat, faWindowRestore, faSquarePlus, faPlusSquare, faToriiGate, faFrog, faBucket, faImage, faMicrophone, faCow, faCaretUp, faScrewdriver, faFolderClosed, faHouseTsunami, faSquareNfi, faArrowUpFromGroundWater, faMartiniGlass, faGlassMartiniAlt, faSquareBinary, faRotateLeft, faRotateBack, faRotateBackward, faUndoAlt, faTableColumns, faColumns, faLemon, faHeadSideMask, faHandshake, faGem, faDolly, faDollyBox, faSmoking, faMinimize, faCompressArrowsAlt, faMonument, faSnowplow, faAnglesRight, faAngleDoubleRight, faCannabis, faCirclePlay, faPlayCircle, faTablets, faEthernet, faEuroSign, faEur, faEuro, faChair, faCircleCheck, faCheckCircle, faCircleStop, faStopCircle, faCompassDrafting, faDraftingCompass, faPlateWheat, faIcicles, faPersonShelter, faNeuter, faIdBadge, faMarker, faFaceLaughBeam, faLaughBeam, faHelicopterSymbol, faUniversalAccess, faCircleChevronUp, faChevronCircleUp, faLariSign, faVolcano, faPersonWalkingDashedLineArrowRight, faSterlingSign, faGbp, faPoundSign, faViruses, faSquarePersonConfined, faUserTie, faArrowDownLong, faLongArrowDown, faTentArrowDownToLine, faCertificate, faReplyAll, faMailReplyAll, faSuitcase, faPersonSkating, faSkating, faFilterCircleDollar, faFunnelDollar, faCameraRetro, faCircleArrowDown, faArrowCircleDown, faFileImport, faArrowRightToFile, faSquareArrowUpRight, faExternalLinkSquare, faBoxOpen, faScroll, faSpa, faLocationPinLock, faPause, faHillAvalanche, faTemperatureEmpty, faTemperature0, faThermometer0, faThermometerEmpty, faBomb, faRegistered, faAddressCard, faContactCard, faVcard, faScaleUnbalancedFlip, faBalanceScaleRight, faSubscript, faDiamondTurnRight, faDirections, faBurst, faHouseLaptop, faLaptopHouse, faFaceTired, faTired, faMoneyBills, faSmog, faCrutch, faFontAwesome, faFontAwesomeFlag, faFontAwesomeLogoFull, faCloudArrowUp, faCloudUpload, faCloudUploadAlt, faPalette, faArrowsTurnRight, faVest, faFerry, faArrowsDownToPeople, faSeedling, faSprout, faLeftRight, faArrowsAltH, faBoxesPacking, faCircleArrowLeft, faArrowCircleLeft, faGroupArrowsRotate, faBowlFood, faCandyCane, faArrowDownWideShort, faSortAmountAsc, faSortAmountDown, faCloudBolt, faThunderstorm, faTextSlash, faRemoveFormat, faFaceSmileWink, faSmileWink, faFileWord, faFilePowerpoint, faArrowsLeftRight, faArrowsH, faHouseLock, faCloudArrowDown, faCloudDownload, faCloudDownloadAlt, faChildren, faChalkboard, faBlackboard, faUserLargeSlash, faUserAltSlash, faEnvelopeOpen, faHandshakeSimpleSlash, faHandshakeAltSlash, faMattressPillow, faGuaraniSign, faArrowsRotate, faRefresh, faSync, faFireExtinguisher, faCruzeiroSign, faGreaterThanEqual, faShieldHalved, faShieldAlt, faBookAtlas, faAtlas, faVirus, faEnvelopeCircleCheck, faLayerGroup, faArrowsToDot, faArchway, faHeartCircleCheck, faHouseChimneyCrack, faHouseDamage, faFileZipper, faFileArchive, faSquare, faMartiniGlassEmpty, faGlassMartini, faCouch, faCediSign, faItalic, faTableCellsColumnLock, faChurch, faCommentsDollar, faDemocrat, faZ, faPersonSkiing, faSkiing, faRoadLock, faA, faTemperatureArrowDown, faTemperatureDown, faFeatherPointed, faFeatherAlt, faP, faSnowflake, faNewspaper, faRectangleAd, faAd, faCircleArrowRight, faArrowCircleRight, faFilterCircleXmark, faLocust, faSort, faUnsorted, faListOl, faList12, faListNumeric, faPersonDressBurst, faMoneyCheckDollar, faMoneyCheckAlt, faVectorSquare, faBreadSlice, faLanguage, faFaceKissWinkHeart, faKissWinkHeart, faFilter, faQuestion, faFileSignature, faUpDownLeftRight, faArrowsAlt, faHouseChimneyUser, faHandHoldingHeart, faPuzzlePiece, faMoneyCheck, faStarHalfStroke, faStarHalfAlt, faCode, faWhiskeyGlass, faGlassWhiskey, faBuildingCircleExclamation, faMagnifyingGlassChart, faArrowUpRightFromSquare, faExternalLink, faCubesStacked, faWonSign, faKrw, faWon, faVirusCovid, faAustralSign, faF, faLeaf, faRoad, faTaxi, faCab, faPersonCirclePlus, faChartPie, faPieChart, faBoltLightning, faSackXmark, faFileExcel, faFileContract, faFishFins, faBuildingFlag, faFaceGrinBeam, faGrinBeam, faObjectUngroup, faPoop, faLocationPin, faMapMarker, faKaaba, faToiletPaper, faHelmetSafety, faHardHat, faHatHard, faEject, faCircleRight, faArrowAltCircleRight, faPlaneCircleCheck, faFaceRollingEyes, faMehRollingEyes, faObjectGroup, faChartLine, faLineChart, faMaskVentilator, faArrowRight, faSignsPost, faMapSigns, faCashRegister, faPersonCircleQuestion, faH, faTarp, faScrewdriverWrench, faTools, faArrowsToEye, faPlugCircleBolt, faHeart, faMarsAndVenus, faHouseUser, faHomeUser, faDumpsterFire, faHouseCrack, faMartiniGlassCitrus, faCocktail, faFaceSurprise, faSurprise, faBottleWater, faCirclePause, faPauseCircle, faToiletPaperSlash, faAppleWhole, faAppleAlt, faKitchenSet, faR, faTemperatureQuarter, faTemperature1, faThermometer1, faThermometerQuarter, faCube, faBitcoinSign, faShieldDog, faSolarPanel, faLockOpen, faElevator, faMoneyBillTransfer, faMoneyBillTrendUp, faHouseFloodWaterCircleArrowRight, faSquarePollHorizontal, faPollH, faCircle, faBackwardFast, faFastBackward, faRecycle, faUserAstronaut, faPlaneSlash, faTrademark, faBasketball, faBasketballBall, faSatelliteDish, faCircleUp, faArrowAltCircleUp, faMobileScreenButton, faMobileAlt, faVolumeHigh, faVolumeUp, faUsersRays, faWallet, faClipboardCheck, faFileAudio, faBurger, faHamburger, faWrench, faBugs, faRupeeSign, faRupee, faFileImage, faCircleQuestion, faQuestionCircle, faPlaneDeparture, faHandshakeSlash, faBookBookmark, faCodeBranch, faHatCowboy, faBridge, faPhoneFlip, faPhoneAlt, faTruckFront, faCat, faAnchorCircleExclamation, faTruckField, faRoute, faClipboardQuestion, faPanorama, faCommentMedical, faTeethOpen, faFileCircleMinus, faTags, faWineGlass, faForwardFast, faFastForward, faFaceMehBlank, faMehBlank, faSquareParking, faParking, faHouseSignal, faBarsProgress, faTasksAlt, faFaucetDrip, faCartFlatbed, faDollyFlatbed, faBanSmoking, faSmokingBan, faTerminal, faMobileButton, faHouseMedicalFlag, faBasketShopping, faShoppingBasket, faTape, faBusSimple, faBusAlt, faEye, faFaceSadCry, faSadCry, faAudioDescription, faPersonMilitaryToPerson, faFileShield, faUserSlash, faPen, faTowerObservation, faFileCode, faSignal, faSignal5, faSignalPerfect, faBus, faHeartCircleXmark, faHouseChimney, faHomeLg, faWindowMaximize, faFaceFrown, faFrown, faPrescription, faShop, faStoreAlt, faFloppyDisk, faSave, faVihara, faScaleUnbalanced, faBalanceScaleLeft, faSortUp, faSortAsc, faCommentDots, faCommenting, faPlantWilt, faDiamond, faFaceGrinSquint, faGrinSquint, faHandHoldingDollar, faHandHoldingUsd, faChartDiagram, faBacterium, faHandPointer, faDrumSteelpan, faHandScissors, faHandsPraying, faPrayingHands, faArrowRotateRight, faArrowRightRotate, faArrowRotateForward, faRedo, faWebAwesome, faBiohazard, faLocationCrosshairs, faLocation, faMarsDouble, faChildDress, faUsersBetweenLines, faLungsVirus, faFaceGrinTears, faGrinTears, faPhone, faCalendarXmark, faCalendarTimes, faChildReaching, faHeadSideVirus, faUserGear, faUserCog, faArrowUp19, faSortNumericUp, faDoorClosed, faShieldVirus, faDiceSix, faMosquitoNet, faFileFragment, faBridgeWater, faPersonBooth, faTextWidth, faHatWizard, faPenFancy, faPersonDigging, faDigging, faTrash, faGaugeSimple, faGaugeSimpleMed, faTachometerAverage, faBookMedical, faPoo, faQuoteRight, faQuoteRightAlt, faShirt, faTShirt, faTshirt, faCubes, faDivide, faTengeSign, faTenge, faHeadphones, faHandsHolding, faHandsClapping, faRepublican, faArrowLeft, faPersonCircleXmark, faRuler, faAlignLeft, faDiceD6, faRestroom, faJ, faUsersViewfinder, faFileVideo, faUpRightFromSquare, faExternalLinkAlt, faTableCells, faTh, faFilePdf, faBookBible, faBible, faO, faSuitcaseMedical, faMedkit, faUserSecret, faOtter, faPersonDress, faFemale, faCommentDollar, faBusinessTime, faBriefcaseClock, faTableCellsLarge, faThLarge, faBookTanakh, faTanakh, faPhoneVolume, faVolumeControlPhone, faHatCowboySide, faClipboardUser, faChild, faLiraSign, faSatellite, faPlaneLock, faTag, faComment, faCakeCandles, faBirthdayCake, faCake, faAnglesUp, faAngleDoubleUp, faPaperclip, faArrowRightToCity, faRibbon, faLungs, faArrowUp91, faSortNumericUpAlt, faLitecoinSign, faBorderNone, faCircleNodes, faParachuteBox, faIndent, faTruckFieldUn, faHourglass, faHourglassEmpty, faMountain, faUserDoctor, faUserMd, faCircleInfo, faInfoCircle, faCloudMeatball, faCamera, faCameraAlt, faSquareVirus, faMeteor, faCarOn, faSleigh, faArrowDown19, faSortNumericAsc, faSortNumericDown, faHandHoldingDroplet, faHandHoldingWater, faWater, faCalendarCheck, faBraille, faPrescriptionBottleMedical, faPrescriptionBottleAlt, faLandmark, faTruck, faCrosshairs, faPersonCane, faTent, faVestPatches, faCheckDouble, faArrowDownAZ, faSortAlphaAsc, faSortAlphaDown, faMoneyBillWheat, faCookie, faArrowRotateLeft, faArrowLeftRotate, faArrowRotateBack, faArrowRotateBackward, faUndo, faHardDrive, faHdd, faFaceGrinSquintTears, faGrinSquintTears, faDumbbell, faRectangleList, faListAlt, faTarpDroplet, faHouseMedicalCircleCheck, faPersonSkiingNordic, faSkiingNordic, faCalendarPlus, faPlaneArrival, faCircleLeft, faArrowAltCircleLeft, faTrainSubway, faSubway, faChartGantt, faIndianRupeeSign, faIndianRupee, faInr, faCropSimple, faCropAlt, faMoneyBill1, faMoneyBillAlt, faLeftLong, faLongArrowAltLeft, faDna, faVirusSlash, faMinus, faSubtract, faChess, faArrowLeftLong, faLongArrowLeft, faPlugCircleCheck, faStreetView, faFrancSign, faVolumeOff, faHandsAslInterpreting, faAmericanSignLanguageInterpreting, faAslInterpreting, faHandsAmericanSignLanguageInterpreting, faGear, faCog, faDropletSlash, faTintSlash, faMosque, faMosquito, faStarOfDavid, faPersonMilitaryRifle, faCartShopping, faShoppingCart, faVials, faPlugCirclePlus, faPlaceOfWorship, faGripVertical, faHexagonNodes, faArrowTurnUp, faLevelUp, faU, faSquareRootVariable, faSquareRootAlt, faClockFour, faBackwardStep, faStepBackward, faPallet, faFaucet, faBaseballBatBall, faS, faTimeline, faKeyboard, faCaretDown, faHouseChimneyMedical, faClinicMedical, faTemperatureThreeQuarters, faTemperature3, faThermometer3, faThermometerThreeQuarters, faMobileScreen, faMobileAndroidAlt, faPlaneUp, faPiggyBank, faBatteryHalf, faBattery3, faMountainCity, faCoins, faKhanda, faSliders, faSlidersH, faFolderTree, faNetworkWired, faMapPin, faHamsa, faCentSign, faFlask, faPersonPregnant, faWandSparkles, faEllipsisVertical, faEllipsisV, faTicket, faPowerOff, faRightLong, faLongArrowAltRight, faFlagUsa, faLaptopFile, faTty, faTeletype, faDiagramNext, faPersonRifle, faHouseMedicalCircleExclamation, faClosedCaptioning, faPersonHiking, faHiking, faVenusDouble, faImages, faCalculator, faPeoplePulling, faN, faCableCar, faTram, faCloudRain, faBuildingCircleXmark, faShip, faArrowsDownToLine, faDownload, faFaceGrin, faGrin, faDeleteLeft, faBackspace, faEyeDropper, faEyeDropperEmpty, faEyedropper, faFileCircleCheck, faForward, faMobile, faMobileAndroid, faMobilePhone, faFaceMeh, faMeh, faAlignCenter, faBookSkull, faBookDead, faIdCard, faDriversLicense, faOutdent, faDedent, faHeartCircleExclamation, faHouse, faHome, faHomeAlt, faHomeLgAlt, faCalendarWeek, faLaptopMedical, faB, faFileMedical, faDiceOne, faKiwiBird, faArrowRightArrowLeft, faExchange, faRotateRight, faRedoAlt, faRotateForward, faUtensils, faCutlery, faArrowUpWideShort, faSortAmountUp, faMillSign, faBowlRice, faSkull, faTowerBroadcast, faBroadcastTower, faTruckPickup, faUpLong, faLongArrowAltUp, faStop, faCodeMerge, faUpload, faHurricane, faMound, faToiletPortable, faCompactDisc, faFileArrowDown, faFileDownload, faCaravan, faShieldCat, faBolt, faZap, faGlassWater, faOilWell, faVault, faMars, faToilet, faPlaneCircleXmark, faYenSign, faCny, faJpy, faRmb, faYen, faRubleSign, faRouble, faRub, faRuble, faSun, faGuitar, faFaceLaughWink, faLaughWink, faHorseHead, faBoreHole, faIndustry, faCircleDown, faArrowAltCircleDown, faArrowsTurnToDots, faFlorinSign, faArrowDownShortWide, faSortAmountDesc, faSortAmountDownAlt, faLessThan, faAngleDown, faCarTunnel, faHeadSideCough, faGripLines, faThumbsDown, faUserLock, faArrowRightLong, faLongArrowRight, faAnchorCircleXmark, faEllipsis, faEllipsisH, faChessPawn, faKitMedical, faFirstAid, faPersonThroughWindow, faToolbox, faHandsHoldingCircle, faBug, faCreditCard, faCreditCardAlt, faCar, faAutomobile, faHandHoldingHand, faBookOpenReader, faBookReader, faMountainSun, faArrowsLeftRightToLine, faDiceD20, faTruckDroplet, faFileCircleXmark, faTemperatureArrowUp, faTemperatureUp, faMedal, faBed, faSquareH, faHSquare, faPodcast, faTemperatureFull, faTemperature4, faThermometer4, faThermometerFull, faBell, faSuperscript, faPlugCircleXmark, faStarOfLife, faPhoneSlash, faPaintRoller, faHandshakeAngle, faHandsHelping, faLocationDot, faMapMarkerAlt, faFile, faGreaterThan, faPersonSwimming, faSwimmer, faArrowDown, faDroplet, faTint, faEraser, faEarthAmericas, faEarth, faEarthAmerica, faGlobeAmericas, faPersonBurst, faDove, faBatteryEmpty, faBattery0, faSocks, faInbox, faSection, faGaugeHigh, faTachometerAlt, faTachometerAltFast, faEnvelopeOpenText, faHospital, faHospitalAlt, faHospitalWide, faWineBottle, faChessRook, faBarsStaggered, faReorder, faStream, faDharmachakra, faHotdog, faPersonWalkingWithCane, faBlind, faDrum, faIceCream, faHeartCircleBolt, faFax, faParagraph, faCheckToSlot, faVoteYea, faStarHalf, faBoxesStacked, faBoxes, faBoxesAlt, faLink, faChain, faEarListen, faAssistiveListeningSystems, faTreeCity, faPlay, faFont, faTableCellsRowLock, faRupiahSign, faMagnifyingGlass, faSearch, faTableTennisPaddleBall, faPingPongPaddleBall, faTableTennis, faPersonDotsFromLine, faDiagnoses, faTrashCanArrowUp, faTrashRestoreAlt, faNairaSign, faCartArrowDown, faWalkieTalkie, faFilePen, faFileEdit, faReceipt, faSquarePen, faPenSquare, faPencilSquare, faSuitcaseRolling, faPersonCircleExclamation, faChevronDown, faBatteryFull, faBattery, faBattery5, faSkullCrossbones, faCodeCompare, faListUl, faListDots, faSchoolLock, faTowerCell, faDownLong, faLongArrowAltDown, faRankingStar, faChessKing, faPersonHarassing, faBrazilianRealSign, faLandmarkDome, faLandmarkAlt, faArrowUp, faTv, faTelevision, faTvAlt, faShrimp, faListCheck, faTasks, faJugDetergent, faCircleUser, faUserCircle, faUserShield, faWind, faCarBurst, faCarCrash, faY, faPersonSnowboarding, faSnowboarding, faTruckFast, faShippingFast, faFish, faUserGraduate, faCircleHalfStroke, faAdjust, faClapperboard, faCircleRadiation, faRadiationAlt, faBaseball, faBaseballBall, faJetFighterUp, faDiagramProject, faProjectDiagram, faCopy, faVolumeXmark, faVolumeMute, faVolumeTimes, faHandSparkles, faGrip, faGripHorizontal, faShareFromSquare, faShareSquare, faChildCombatant, faChildRifle, faGun, faSquarePhone, faPhoneSquare, faPlus, faAdd, faExpand, faComputer, faXmark, faClose, faMultiply, faRemove, faTimes, faArrowsUpDownLeftRight, faArrows, faChalkboardUser, faChalkboardTeacher, faPesoSign, faBuildingShield, faBaby, faUsersLine, faQuoteLeft, faQuoteLeftAlt, faTractor, faTrashArrowUp, faTrashRestore, faArrowDownUpLock, faLinesLeaning, faRulerCombined, faCopyright, faEquals, faBlender, faTeeth, faShekelSign, faIls, faShekel, faSheqel, faSheqelSign, faMap, faRocket, faPhotoFilm, faPhotoVideo, faFolderMinus, faHexagonNodesBolt, faStore, faArrowTrendUp, faPlugCircleMinus, faSignHanging, faSign, faBezierCurve, faBellSlash, faTablet, faTabletAndroid, faSchoolFlag, faFill, faAngleUp, faDrumstickBite, faHollyBerry, faChevronLeft, faBacteria, faHandLizard, faNotdef, faDisease, faBriefcaseMedical, faGenderless, faChevronRight, faRetweet, faCarRear, faCarAlt, faPumpSoap, faVideoSlash, faBatteryQuarter, faBattery2, faRadio, faBabyCarriage, faCarriageBaby, faTrafficLight, faThermometer, faVrCardboard, faHandMiddleFinger, faPercent, faPercentage, faTruckMoving, faGlassWaterDroplet, faDisplay, faFaceSmile, faSmile, faThumbtack, faThumbTack, faTrophy, faPersonPraying, faPray, faHammer, faHandPeace, faRotate, faSyncAlt, faSpinner, faRobot, faPeace, faGears, faCogs, faWarehouse, faArrowUpRightDots, faSplotch, faFaceGrinHearts, faGrinHearts, faDiceFour, faSimCard, faTransgender, faTransgenderAlt, faMercury, faArrowTurnDown, faLevelDown, faPersonFallingBurst, faAward, faTicketSimple, faTicketAlt, faAnglesLeft, faAngleDoubleLeft, faQrcode, faClockRotateLeft, faHistory, faFaceGrinBeamSweat, faGrinBeamSweat, faFileExport, faArrowRightFromFile, faShield, faShieldBlank, faArrowUpShortWide, faSortAmountUpAlt, faCommentNodes, faHouseMedical, faGolfBallTee, faGolfBall, faCircleChevronLeft, faChevronCircleLeft, faHouseChimneyWindow, faPenNib, faTentArrowTurnLeft, faTents, faWandMagic, faMagic, faDog, faCarrot, faMoon, faWineGlassEmpty, faWineGlassAlt, faCheese, faYinYang, faMusic, faCodeCommit, faTemperatureLow, faPersonBiking, faBiking, faBroom, faShieldHeart, faGopuram, faEarthOceania, faGlobeOceania, faSquareXmark, faTimesSquare, faXmarkSquare, faHashtag, faUpRightAndDownLeftFromCenter, faExpandAlt, faOilCan, faT, faHippo, faChartColumn, faInfinity, faVialCircleCheck, faPersonArrowDownToLine, faVoicemail, faFan, faPersonWalkingLuggage, faUpDown, faArrowsAltV, faCloudMoonRain, faCalendar, faTrailer, faBahai, faHaykal, faSdCard, faDragon, faShoePrints, faCirclePlus, faPlusCircle, faFaceGrinTongueWink, faGrinTongueWink, faHandHolding, faPlugCircleExclamation, faLinkSlash, faChainBroken, faChainSlash, faUnlink, faClone, faPersonWalkingArrowLoopLeft, faArrowUpZA, faSortAlphaUpAlt, faFireFlameCurved, faFireAlt, faTornado, faFileCirclePlus, faBookQuran, faQuran, faAnchor, faBorderAll, faFaceAngry, faAngry, faCookieBite, faArrowTrendDown, faRss, faFeed, faDrawPolygon, faScaleBalanced, faBalanceScale, faGaugeSimpleHigh, faTachometer, faTachometerFast, faShower, faDesktop, faDesktopAlt, faM, faTableList, faThList, faCommentSms, faSms, faBook, faUserPlus, faCheck, faBatteryThreeQuarters, faBattery4, faHouseCircleCheck, faAngleLeft, faDiagramSuccessor, faTruckArrowRight, faArrowsSplitUpAndLeft, faHandFist, faFistRaised, faCloudMoon, faPersonFalling, faImagePortrait, faPortrait, faUserTag, faRug, faEarthEurope, faGlobeEurope, faCartFlatbedSuitcase, faLuggageCart, faRectangleXmark, faRectangleTimes, faTimesRectangle, faWindowClose, faBahtSign, faBookOpen, faBookJournalWhills, faJournalWhills, faHandcuffs, faTriangleExclamation, faExclamationTriangle, faWarning, faDatabase, faShare, faMailForward, faBottleDroplet, faMaskFace, faHillRockslide, faRightLeft, faExchangeAlt, faPaperPlane, faRoadCircleExclamation, faDungeon, faAlignRight, faMoneyBill1Wave, faMoneyBillWaveAlt, faLifeRing, faHands, faSignLanguage, faSigning, faCalendarDay, faWaterLadder, faLadderWater, faSwimmingPool, faArrowsUpDown, faArrowsV, faFaceGrimace, faGrimace, faWheelchairMove, faWheelchairAlt, faTurnDown, faLevelDownAlt, faPersonWalkingArrowRight, faSquareEnvelope, faEnvelopeSquare, faDice, faBowlingBall, faBrain, faBandage, faBandAid, faCalendarMinus, faCircleXmark, faTimesCircle, faXmarkCircle, faGifts, faHotel, faEarthAsia, faGlobeAsia, faIdCardClip, faIdCardAlt, faMagnifyingGlassPlus, faSearchPlus, faThumbsUp, faUserClock, faHandDots, faAllergies, faFileInvoice, faWindowMinimize, faMugSaucer, faCoffee, faBrush, faFileHalfDashed, faMask, faMagnifyingGlassMinus, faSearchMinus, faRulerVertical, faUserLarge, faUserAlt, faTrainTram, faUserNurse, faSyringe, faCloudSun, faStopwatch20, faSquareFull, faMagnet, faJar, faNoteSticky, faStickyNote, faBugSlash, faArrowUpFromWaterPump, faBone, faTableCellsRowUnlock, faUserInjured, faFaceSadTear, faSadTear, faPlane, faTentArrowsDown, faExclamation, faArrowsSpin, faPrint, faTurkishLiraSign, faTry, faTurkishLira, faDollarSign, faDollar, faUsd, faX, faMagnifyingGlassDollar, faSearchDollar, faUsersGear, faUsersCog, faPersonMilitaryPointing, faBuildingColumns, faBank, faInstitution, faMuseum, faUniversity, faUmbrella, faTrowel, faD, faStapler, faMasksTheater, faTheaterMasks, faKipSign, faHandPointLeft, faHandshakeSimple, faHandshakeAlt, faJetFighter, faFighterJet, faSquareShareNodes, faShareAltSquare, faBarcode, faPlusMinus, faVideo, faVideoCamera, faGraduationCap, faMortarBoard, faHandHoldingMedical, faPersonCircleCheck, faTurnUp, faLevelUpAlt */
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.

/***/ }),

/***/ 5931:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  hU: function() { return /* binding */ createI18n; }
});

// UNUSED EXPORTS: DatetimeFormat, I18nD, I18nInjectionKey, I18nN, I18nT, NumberFormat, Translation, VERSION, useI18n, vTDirective

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(4114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.constructor.js
var esnext_iterator_constructor = __webpack_require__(8992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.filter.js
var esnext_iterator_filter = __webpack_require__(4520);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.find.js
var esnext_iterator_find = __webpack_require__(2577);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.for-each.js
var esnext_iterator_for_each = __webpack_require__(3949);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.map.js
var esnext_iterator_map = __webpack_require__(1454);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.reduce.js
var esnext_iterator_reduce = __webpack_require__(8872);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.difference.v2.js
var es_set_difference_v2 = __webpack_require__(7642);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.intersection.v2.js
var es_set_intersection_v2 = __webpack_require__(8004);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js
var es_set_is_disjoint_from_v2 = __webpack_require__(3853);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-subset-of.v2.js
var es_set_is_subset_of_v2 = __webpack_require__(5876);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-superset-of.v2.js
var es_set_is_superset_of_v2 = __webpack_require__(2475);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.symmetric-difference.v2.js
var es_set_symmetric_difference_v2 = __webpack_require__(5024);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.union.v2.js
var es_set_union_v2 = __webpack_require__(1698);
;// ./node_modules/@intlify/shared/dist/shared.mjs





/*!
  * shared v11.0.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
/**
 * Original Utilities
 * written by kazuya kawaguchi
 */
const inBrowser = typeof window !== 'undefined';
let mark;
let measure;
if (false) {}
const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
/* eslint-disable */
function shared_format(message, ...args) {
  if (args.length === 1 && shared_isObject(args[0])) {
    args = args[0];
  }
  if (!args || !args.hasOwnProperty) {
    args = {};
  }
  return message.replace(RE_ARGS, (match, identifier) => {
    return args.hasOwnProperty(identifier) ? args[identifier] : '';
  });
}
const shared_makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({
  l: locale,
  k: key,
  s: source
});
const friendlyJSONstringify = json => JSON.stringify(json).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029').replace(/\u0027/g, '\\u0027');
const isNumber = val => typeof val === 'number' && isFinite(val);
const isDate = val => toTypeString(val) === '[object Date]';
const isRegExp = val => toTypeString(val) === '[object RegExp]';
const isEmptyObject = val => isPlainObject(val) && Object.keys(val).length === 0;
const shared_assign = Object.assign;
const _create = Object.create;
const shared_create = (obj = null) => _create(obj);
let _globalThis;
const getGlobalThis = () => {
  // prettier-ignore
  return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : shared_create());
};
function escapeHtml(rawText) {
  return rawText.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
const shared_hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return shared_hasOwnProperty.call(obj, key);
}
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const shared_isArray = Array.isArray;
const shared_isFunction = val => typeof val === 'function';
const shared_isString = val => typeof val === 'string';
const shared_isBoolean = val => typeof val === 'boolean';
const isSymbol = val => typeof val === 'symbol';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shared_isObject = val => val !== null && typeof val === 'object';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isPromise = val => {
  return shared_isObject(val) && shared_isFunction(val.then) && shared_isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = value => objectToString.call(value);
const isPlainObject = val => toTypeString(val) === '[object Object]';
// for converting list and named values to displayed strings.
const toDisplayString = val => {
  return val == null ? '' : shared_isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
function join(items, separator = '') {
  return items.reduce((str, item, index) => index === 0 ? str + item : str + separator + item, '');
}
const RANGE = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  const lines = source.split(/\r?\n/);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (let j = i - RANGE; j <= i + RANGE || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        const line = j + 1;
        res.push(`${line}${' '.repeat(3 - String(line).length)}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        if (j === i) {
          // push underline
          const pad = start - (count - lineLength) + 1;
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + '^'.repeat(length));
          }
          count += lineLength + 1;
        }
      }
      break;
    }
  }
  return res.join('\n');
}
function shared_warn(msg, err) {
  if (typeof console !== 'undefined') {
    console.warn(`[intlify] ` + msg);
    /* istanbul ignore if */
    if (err) {
      console.warn(err.stack);
    }
  }
}
const hasWarned = {};
function warnOnce(msg) {
  if (!hasWarned[msg]) {
    hasWarned[msg] = true;
    shared_warn(msg);
  }
}

/**
 * Event emitter, forked from the below:
 * - original repository url: https://github.com/developit/mitt
 * - code url: https://github.com/developit/mitt/blob/master/src/index.ts
 * - author: Jason Miller (https://github.com/developit)
 * - license: MIT
 */
/**
 * Create a event emitter
 *
 * @returns An event emitter
 */
function createEmitter() {
  const events = new Map();
  const emitter = {
    events,
    on(event, handler) {
      const handlers = events.get(event);
      const added = handlers && handlers.push(handler);
      if (!added) {
        events.set(event, [handler]);
      }
    },
    off(event, handler) {
      const handlers = events.get(event);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      }
    },
    emit(event, payload) {
      (events.get(event) || []).slice().map(handler => handler(payload));
      (events.get('*') || []).slice().map(handler => handler(event, payload));
    }
  };
  return emitter;
}
const isNotObjectOrIsArray = val => !shared_isObject(val) || shared_isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepCopy(src, des) {
  // src and des should both be objects, and none of them can be a array
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw new Error('Invalid value');
  }
  const stack = [{
    src,
    des
  }];
  while (stack.length) {
    const {
      src,
      des
    } = stack.pop();
    // using `Object.keys` which skips prototype properties
    Object.keys(src).forEach(key => {
      if (key === '__proto__') {
        return;
      }
      // if src[key] is an object/array, set des[key]
      // to empty object/array to prevent setting by reference
      if (shared_isObject(src[key]) && !shared_isObject(des[key])) {
        des[key] = Array.isArray(src[key]) ? [] : shared_create();
      }
      if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) {
        // replace with src[key] when:
        // src[key] or des[key] is not an object, or
        // src[key] or des[key] is an array
        des[key] = src[key];
      } else {
        // src[key] and des[key] are both objects, merge them
        stack.push({
          src: src[key],
          des: des[key]
        });
      }
    });
  }
}

;// ./node_modules/@intlify/message-compiler/dist/message-compiler.mjs











/*!
  * message-compiler v11.0.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */

const LOCATION_STUB = {
  start: {
    line: 1,
    column: 1,
    offset: 0
  },
  end: {
    line: 1,
    column: 1,
    offset: 0
  }
};
function createPosition(line, column, offset) {
  return {
    line,
    column,
    offset
  };
}
function createLocation(start, end, source) {
  const loc = {
    start,
    end
  };
  if (source != null) {
    loc.source = source;
  }
  return loc;
}
const CompileErrorCodes = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16
};
// Special value for higher-order compilers to pick up the last code
// to avoid collision of error codes.
// This should always be kept as the last item.
const COMPILE_ERROR_CODES_EXTEND_POINT = 17;
/** @internal */
const errorMessages = {
  // tokenizer error messages
  [CompileErrorCodes.EXPECTED_TOKEN]: `Expected token: '{0}'`,
  [CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER]: `Invalid token in placeholder: '{0}'`,
  [CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: `Unterminated single quote in placeholder`,
  [CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE]: `Unknown escape sequence: \\{0}`,
  [CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE]: `Invalid unicode escape sequence: {0}`,
  [CompileErrorCodes.UNBALANCED_CLOSING_BRACE]: `Unbalanced closing brace`,
  [CompileErrorCodes.UNTERMINATED_CLOSING_BRACE]: `Unterminated closing brace`,
  [CompileErrorCodes.EMPTY_PLACEHOLDER]: `Empty placeholder`,
  [CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER]: `Not allowed nest placeholder`,
  [CompileErrorCodes.INVALID_LINKED_FORMAT]: `Invalid linked format`,
  // parser error messages
  [CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL]: `Plural must have messages`,
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER]: `Unexpected empty linked modifier`,
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY]: `Unexpected empty linked key`,
  [CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS]: `Unexpected lexical analysis in token: '{0}'`,
  // generator error messages
  [CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE]: `unhandled codegen node type: '{0}'`,
  // minimizer error messages
  [CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE]: `unhandled mimifier node type: '{0}'`
};
function createCompileError(code, loc, options = {}) {
  const {
    domain,
    messages,
    args
  } = options;
  const msg =  false ? 0 : code;
  const error = new SyntaxError(String(msg));
  error.code = code;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
/** @internal */
function defaultOnError(error) {
  throw error;
}

// eslint-disable-next-line no-useless-escape
const RE_HTML_TAG = /<\/?[\w\s="/.':;#-\/]+>/;
const message_compiler_detectHtmlTag = source => RE_HTML_TAG.test(source);
const CHAR_SP = ' ';
const CHAR_CR = '\r';
const CHAR_LF = '\n';
const CHAR_LS = String.fromCharCode(0x2028);
const CHAR_PS = String.fromCharCode(0x2029);
function createScanner(str) {
  const _buf = str;
  let _index = 0;
  let _line = 1;
  let _column = 1;
  let _peekOffset = 0;
  const isCRLF = index => _buf[index] === CHAR_CR && _buf[index + 1] === CHAR_LF;
  const isLF = index => _buf[index] === CHAR_LF;
  const isPS = index => _buf[index] === CHAR_PS;
  const isLS = index => _buf[index] === CHAR_LS;
  const isLineEnd = index => isCRLF(index) || isLF(index) || isPS(index) || isLS(index);
  const index = () => _index;
  const line = () => _line;
  const column = () => _column;
  const peekOffset = () => _peekOffset;
  const charAt = offset => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
  const currentChar = () => charAt(_index);
  const currentPeek = () => charAt(_index + _peekOffset);
  function next() {
    _peekOffset = 0;
    if (isLineEnd(_index)) {
      _line++;
      _column = 0;
    }
    if (isCRLF(_index)) {
      _index++;
    }
    _index++;
    _column++;
    return _buf[_index];
  }
  function peek() {
    if (isCRLF(_index + _peekOffset)) {
      _peekOffset++;
    }
    _peekOffset++;
    return _buf[_index + _peekOffset];
  }
  function reset() {
    _index = 0;
    _line = 1;
    _column = 1;
    _peekOffset = 0;
  }
  function resetPeek(offset = 0) {
    _peekOffset = offset;
  }
  function skipToPeek() {
    const target = _index + _peekOffset;
    while (target !== _index) {
      next();
    }
    _peekOffset = 0;
  }
  return {
    index,
    line,
    column,
    peekOffset,
    charAt,
    currentChar,
    currentPeek,
    next,
    peek,
    reset,
    resetPeek,
    skipToPeek
  };
}
const EOF = undefined;
const DOT = '.';
const LITERAL_DELIMITER = "'";
const ERROR_DOMAIN$3 = 'tokenizer';
function createTokenizer(source, options = {}) {
  const location = options.location !== false;
  const _scnr = createScanner(source);
  const currentOffset = () => _scnr.index();
  const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
  const _initLoc = currentPosition();
  const _initOffset = currentOffset();
  const _context = {
    currentType: 13 /* TokenTypes.EOF */,
    offset: _initOffset,
    startLoc: _initLoc,
    endLoc: _initLoc,
    lastType: 13 /* TokenTypes.EOF */,
    lastOffset: _initOffset,
    lastStartLoc: _initLoc,
    lastEndLoc: _initLoc,
    braceNest: 0,
    inLinked: false,
    text: ''
  };
  const context = () => _context;
  const {
    onError
  } = options;
  function emitError(code, pos, offset, ...args) {
    const ctx = context();
    pos.column += offset;
    pos.offset += offset;
    if (onError) {
      const loc = location ? createLocation(ctx.startLoc, pos) : null;
      const err = createCompileError(code, loc, {
        domain: ERROR_DOMAIN$3,
        args
      });
      onError(err);
    }
  }
  function getToken(context, type, value) {
    context.endLoc = currentPosition();
    context.currentType = type;
    const token = {
      type
    };
    if (location) {
      token.loc = createLocation(context.startLoc, context.endLoc);
    }
    if (value != null) {
      token.value = value;
    }
    return token;
  }
  const getEndToken = context => getToken(context, 13 /* TokenTypes.EOF */);
  function eat(scnr, ch) {
    if (scnr.currentChar() === ch) {
      scnr.next();
      return ch;
    } else {
      emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
      return '';
    }
  }
  function peekSpaces(scnr) {
    let buf = '';
    while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
      buf += scnr.currentPeek();
      scnr.peek();
    }
    return buf;
  }
  function skipSpaces(scnr) {
    const buf = peekSpaces(scnr);
    scnr.skipToPeek();
    return buf;
  }
  function isIdentifierStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 ||
    // a-z
    cc >= 65 && cc <= 90 ||
    // A-Z
    cc === 95 // _
    ;
  }
  function isNumberStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57; // 0-9
  }
  function isNamedIdentifierStart(scnr, context) {
    const {
      currentType
    } = context;
    if (currentType !== 2 /* TokenTypes.BraceLeft */) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isListIdentifierStart(scnr, context) {
    const {
      currentType
    } = context;
    if (currentType !== 2 /* TokenTypes.BraceLeft */) {
      return false;
    }
    peekSpaces(scnr);
    const ch = scnr.currentPeek() === '-' ? scnr.peek() : scnr.currentPeek();
    const ret = isNumberStart(ch);
    scnr.resetPeek();
    return ret;
  }
  function isLiteralStart(scnr, context) {
    const {
      currentType
    } = context;
    if (currentType !== 2 /* TokenTypes.BraceLeft */) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === LITERAL_DELIMITER;
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDotStart(scnr, context) {
    const {
      currentType
    } = context;
    if (currentType !== 7 /* TokenTypes.LinkedAlias */) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === "." /* TokenChars.LinkedDot */;
    scnr.resetPeek();
    return ret;
  }
  function isLinkedModifierStart(scnr, context) {
    const {
      currentType
    } = context;
    if (currentType !== 8 /* TokenTypes.LinkedDot */) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDelimiterStart(scnr, context) {
    const {
      currentType
    } = context;
    if (!(currentType === 7 /* TokenTypes.LinkedAlias */ || currentType === 11 /* TokenTypes.LinkedModifier */)) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ":" /* TokenChars.LinkedDelimiter */;
    scnr.resetPeek();
    return ret;
  }
  function isLinkedReferStart(scnr, context) {
    const {
      currentType
    } = context;
    if (currentType !== 9 /* TokenTypes.LinkedDelimiter */) {
      return false;
    }
    const fn = () => {
      const ch = scnr.currentPeek();
      if (ch === "{" /* TokenChars.BraceLeft */) {
        return isIdentifierStart(scnr.peek());
      } else if (ch === "@" /* TokenChars.LinkedAlias */ || ch === "|" /* TokenChars.Pipe */ || ch === ":" /* TokenChars.LinkedDelimiter */ || ch === "." /* TokenChars.LinkedDot */ || ch === CHAR_SP || !ch) {
        return false;
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn();
      } else {
        // other characters
        return isTextStart(scnr, false);
      }
    };
    const ret = fn();
    scnr.resetPeek();
    return ret;
  }
  function isPluralStart(scnr) {
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === "|" /* TokenChars.Pipe */;
    scnr.resetPeek();
    return ret;
  }
  function isTextStart(scnr, reset = true) {
    const fn = (hasSpace = false, prev = '') => {
      const ch = scnr.currentPeek();
      if (ch === "{" /* TokenChars.BraceLeft */) {
        return hasSpace;
      } else if (ch === "@" /* TokenChars.LinkedAlias */ || !ch) {
        return hasSpace;
      } else if (ch === "|" /* TokenChars.Pipe */) {
        return !(prev === CHAR_SP || prev === CHAR_LF);
      } else if (ch === CHAR_SP) {
        scnr.peek();
        return fn(true, CHAR_SP);
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn(true, CHAR_LF);
      } else {
        return true;
      }
    };
    const ret = fn();
    reset && scnr.resetPeek();
    return ret;
  }
  function takeChar(scnr, fn) {
    const ch = scnr.currentChar();
    if (ch === EOF) {
      return EOF;
    }
    if (fn(ch)) {
      scnr.next();
      return ch;
    }
    return null;
  }
  function isIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 ||
    // a-z
    cc >= 65 && cc <= 90 ||
    // A-Z
    cc >= 48 && cc <= 57 ||
    // 0-9
    cc === 95 ||
    // _
    cc === 36 // $
    ;
  }
  function takeIdentifierChar(scnr) {
    return takeChar(scnr, isIdentifier);
  }
  function isNamedIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 ||
    // a-z
    cc >= 65 && cc <= 90 ||
    // A-Z
    cc >= 48 && cc <= 57 ||
    // 0-9
    cc === 95 ||
    // _
    cc === 36 ||
    // $
    cc === 45 // -
    ;
  }
  function takeNamedIdentifierChar(scnr) {
    return takeChar(scnr, isNamedIdentifier);
  }
  function isDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57; // 0-9
  }
  function takeDigit(scnr) {
    return takeChar(scnr, isDigit);
  }
  function isHexDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57 ||
    // 0-9
    cc >= 65 && cc <= 70 ||
    // A-F
    cc >= 97 && cc <= 102; // a-f
  }
  function takeHexDigit(scnr) {
    return takeChar(scnr, isHexDigit);
  }
  function getDigits(scnr) {
    let ch = '';
    let num = '';
    while (ch = takeDigit(scnr)) {
      num += ch;
    }
    return num;
  }
  function readText(scnr) {
    let buf = '';
    while (true) {
      const ch = scnr.currentChar();
      if (ch === "{" /* TokenChars.BraceLeft */ || ch === "}" /* TokenChars.BraceRight */ || ch === "@" /* TokenChars.LinkedAlias */ || ch === "|" /* TokenChars.Pipe */ || !ch) {
        break;
      } else if (ch === CHAR_SP || ch === CHAR_LF) {
        if (isTextStart(scnr)) {
          buf += ch;
          scnr.next();
        } else if (isPluralStart(scnr)) {
          break;
        } else {
          buf += ch;
          scnr.next();
        }
      } else {
        buf += ch;
        scnr.next();
      }
    }
    return buf;
  }
  function readNamedIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = '';
    let name = '';
    while (ch = takeNamedIdentifierChar(scnr)) {
      name += ch;
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return name;
  }
  function readListIdentifier(scnr) {
    skipSpaces(scnr);
    let value = '';
    if (scnr.currentChar() === '-') {
      scnr.next();
      value += `-${getDigits(scnr)}`;
    } else {
      value += getDigits(scnr);
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return value;
  }
  function isLiteral(ch) {
    return ch !== LITERAL_DELIMITER && ch !== CHAR_LF;
  }
  function readLiteral(scnr) {
    skipSpaces(scnr);
    // eslint-disable-next-line no-useless-escape
    eat(scnr, `\'`);
    let ch = '';
    let literal = '';
    while (ch = takeChar(scnr, isLiteral)) {
      if (ch === '\\') {
        literal += readEscapeSequence(scnr);
      } else {
        literal += ch;
      }
    }
    const current = scnr.currentChar();
    if (current === CHAR_LF || current === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
      // TODO: Is it correct really?
      if (current === CHAR_LF) {
        scnr.next();
        // eslint-disable-next-line no-useless-escape
        eat(scnr, `\'`);
      }
      return literal;
    }
    // eslint-disable-next-line no-useless-escape
    eat(scnr, `\'`);
    return literal;
  }
  function readEscapeSequence(scnr) {
    const ch = scnr.currentChar();
    switch (ch) {
      case '\\':
      case `\'`:
        // eslint-disable-line no-useless-escape
        scnr.next();
        return `\\${ch}`;
      case 'u':
        return readUnicodeEscapeSequence(scnr, ch, 4);
      case 'U':
        return readUnicodeEscapeSequence(scnr, ch, 6);
      default:
        emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
        return '';
    }
  }
  function readUnicodeEscapeSequence(scnr, unicode, digits) {
    eat(scnr, unicode);
    let sequence = '';
    for (let i = 0; i < digits; i++) {
      const ch = takeHexDigit(scnr);
      if (!ch) {
        emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
        break;
      }
      sequence += ch;
    }
    return `\\${unicode}${sequence}`;
  }
  function isInvalidIdentifier(ch) {
    return ch !== "{" /* TokenChars.BraceLeft */ && ch !== "}" /* TokenChars.BraceRight */ && ch !== CHAR_SP && ch !== CHAR_LF;
  }
  function readInvalidIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = '';
    let identifiers = '';
    while (ch = takeChar(scnr, isInvalidIdentifier)) {
      identifiers += ch;
    }
    return identifiers;
  }
  function readLinkedModifier(scnr) {
    let ch = '';
    let name = '';
    while (ch = takeIdentifierChar(scnr)) {
      name += ch;
    }
    return name;
  }
  function readLinkedRefer(scnr) {
    const fn = buf => {
      const ch = scnr.currentChar();
      if (ch === "{" /* TokenChars.BraceLeft */ || ch === "@" /* TokenChars.LinkedAlias */ || ch === "|" /* TokenChars.Pipe */ || ch === "(" /* TokenChars.ParenLeft */ || ch === ")" /* TokenChars.ParenRight */ || !ch) {
        return buf;
      } else if (ch === CHAR_SP) {
        return buf;
      } else if (ch === CHAR_LF || ch === DOT) {
        buf += ch;
        scnr.next();
        return fn(buf);
      } else {
        buf += ch;
        scnr.next();
        return fn(buf);
      }
    };
    return fn('');
  }
  function readPlural(scnr) {
    skipSpaces(scnr);
    const plural = eat(scnr, "|" /* TokenChars.Pipe */);
    skipSpaces(scnr);
    return plural;
  }
  // TODO: We need refactoring of token parsing ...
  function readTokenInPlaceholder(scnr, context) {
    let token = null;
    const ch = scnr.currentChar();
    switch (ch) {
      case "{" /* TokenChars.BraceLeft */:
        if (context.braceNest >= 1) {
          emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(context, 2 /* TokenTypes.BraceLeft */, "{" /* TokenChars.BraceLeft */);
        skipSpaces(scnr);
        context.braceNest++;
        return token;
      case "}" /* TokenChars.BraceRight */:
        if (context.braceNest > 0 && context.currentType === 2 /* TokenTypes.BraceLeft */) {
          emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(context, 3 /* TokenTypes.BraceRight */, "}" /* TokenChars.BraceRight */);
        context.braceNest--;
        context.braceNest > 0 && skipSpaces(scnr);
        if (context.inLinked && context.braceNest === 0) {
          context.inLinked = false;
        }
        return token;
      case "@" /* TokenChars.LinkedAlias */:
        if (context.braceNest > 0) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
        }
        token = readTokenInLinked(scnr, context) || getEndToken(context);
        context.braceNest = 0;
        return token;
      default:
        {
          let validNamedIdentifier = true;
          let validListIdentifier = true;
          let validLiteral = true;
          if (isPluralStart(scnr)) {
            if (context.braceNest > 0) {
              emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
            }
            token = getToken(context, 1 /* TokenTypes.Pipe */, readPlural(scnr));
            // reset
            context.braceNest = 0;
            context.inLinked = false;
            return token;
          }
          if (context.braceNest > 0 && (context.currentType === 4 /* TokenTypes.Named */ || context.currentType === 5 /* TokenTypes.List */ || context.currentType === 6 /* TokenTypes.Literal */)) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
            context.braceNest = 0;
            return readToken(scnr, context);
          }
          if (validNamedIdentifier = isNamedIdentifierStart(scnr, context)) {
            token = getToken(context, 4 /* TokenTypes.Named */, readNamedIdentifier(scnr));
            skipSpaces(scnr);
            return token;
          }
          if (validListIdentifier = isListIdentifierStart(scnr, context)) {
            token = getToken(context, 5 /* TokenTypes.List */, readListIdentifier(scnr));
            skipSpaces(scnr);
            return token;
          }
          if (validLiteral = isLiteralStart(scnr, context)) {
            token = getToken(context, 6 /* TokenTypes.Literal */, readLiteral(scnr));
            skipSpaces(scnr);
            return token;
          }
          if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
            // TODO: we should be re-designed invalid cases, when we will extend message syntax near the future ...
            token = getToken(context, 12 /* TokenTypes.InvalidPlace */, readInvalidIdentifier(scnr));
            emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
            skipSpaces(scnr);
            return token;
          }
          break;
        }
    }
    return token;
  }
  // TODO: We need refactoring of token parsing ...
  function readTokenInLinked(scnr, context) {
    const {
      currentType
    } = context;
    let token = null;
    const ch = scnr.currentChar();
    if ((currentType === 7 /* TokenTypes.LinkedAlias */ || currentType === 8 /* TokenTypes.LinkedDot */ || currentType === 11 /* TokenTypes.LinkedModifier */ || currentType === 9 /* TokenTypes.LinkedDelimiter */) && (ch === CHAR_LF || ch === CHAR_SP)) {
      emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
    }
    switch (ch) {
      case "@" /* TokenChars.LinkedAlias */:
        scnr.next();
        token = getToken(context, 7 /* TokenTypes.LinkedAlias */, "@" /* TokenChars.LinkedAlias */);
        context.inLinked = true;
        return token;
      case "." /* TokenChars.LinkedDot */:
        skipSpaces(scnr);
        scnr.next();
        return getToken(context, 8 /* TokenTypes.LinkedDot */, "." /* TokenChars.LinkedDot */);
      case ":" /* TokenChars.LinkedDelimiter */:
        skipSpaces(scnr);
        scnr.next();
        return getToken(context, 9 /* TokenTypes.LinkedDelimiter */, ":" /* TokenChars.LinkedDelimiter */);
      default:
        if (isPluralStart(scnr)) {
          token = getToken(context, 1 /* TokenTypes.Pipe */, readPlural(scnr));
          // reset
          context.braceNest = 0;
          context.inLinked = false;
          return token;
        }
        if (isLinkedDotStart(scnr, context) || isLinkedDelimiterStart(scnr, context)) {
          skipSpaces(scnr);
          return readTokenInLinked(scnr, context);
        }
        if (isLinkedModifierStart(scnr, context)) {
          skipSpaces(scnr);
          return getToken(context, 11 /* TokenTypes.LinkedModifier */, readLinkedModifier(scnr));
        }
        if (isLinkedReferStart(scnr, context)) {
          skipSpaces(scnr);
          if (ch === "{" /* TokenChars.BraceLeft */) {
            // scan the placeholder
            return readTokenInPlaceholder(scnr, context) || token;
          } else {
            return getToken(context, 10 /* TokenTypes.LinkedKey */, readLinkedRefer(scnr));
          }
        }
        if (currentType === 7 /* TokenTypes.LinkedAlias */) {
          emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
        }
        context.braceNest = 0;
        context.inLinked = false;
        return readToken(scnr, context);
    }
  }
  // TODO: We need refactoring of token parsing ...
  function readToken(scnr, context) {
    let token = {
      type: 13 /* TokenTypes.EOF */
    };
    if (context.braceNest > 0) {
      return readTokenInPlaceholder(scnr, context) || getEndToken(context);
    }
    if (context.inLinked) {
      return readTokenInLinked(scnr, context) || getEndToken(context);
    }
    const ch = scnr.currentChar();
    switch (ch) {
      case "{" /* TokenChars.BraceLeft */:
        return readTokenInPlaceholder(scnr, context) || getEndToken(context);
      case "}" /* TokenChars.BraceRight */:
        emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
        scnr.next();
        return getToken(context, 3 /* TokenTypes.BraceRight */, "}" /* TokenChars.BraceRight */);
      case "@" /* TokenChars.LinkedAlias */:
        return readTokenInLinked(scnr, context) || getEndToken(context);
      default:
        {
          if (isPluralStart(scnr)) {
            token = getToken(context, 1 /* TokenTypes.Pipe */, readPlural(scnr));
            // reset
            context.braceNest = 0;
            context.inLinked = false;
            return token;
          }
          if (isTextStart(scnr)) {
            return getToken(context, 0 /* TokenTypes.Text */, readText(scnr));
          }
          break;
        }
    }
    return token;
  }
  function nextToken() {
    const {
      currentType,
      offset,
      startLoc,
      endLoc
    } = _context;
    _context.lastType = currentType;
    _context.lastOffset = offset;
    _context.lastStartLoc = startLoc;
    _context.lastEndLoc = endLoc;
    _context.offset = currentOffset();
    _context.startLoc = currentPosition();
    if (_scnr.currentChar() === EOF) {
      return getToken(_context, 13 /* TokenTypes.EOF */);
    }
    return readToken(_scnr, _context);
  }
  return {
    nextToken,
    currentOffset,
    currentPosition,
    context
  };
}
const ERROR_DOMAIN$2 = 'parser';
// Backslash backslash, backslash quote, uHHHH, UHHHHHH.
const KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function fromEscapeSequence(match, codePoint4, codePoint6) {
  switch (match) {
    case `\\\\`:
      return `\\`;
    // eslint-disable-next-line no-useless-escape
    case `\\\'`:
      // eslint-disable-next-line no-useless-escape
      return `\'`;
    default:
      {
        const codePoint = parseInt(codePoint4 || codePoint6, 16);
        if (codePoint <= 0xd7ff || codePoint >= 0xe000) {
          return String.fromCodePoint(codePoint);
        }
        // invalid ...
        // Replace them with U+FFFD REPLACEMENT CHARACTER.
        return '�';
      }
  }
}
function createParser(options = {}) {
  const location = options.location !== false;
  const {
    onError
  } = options;
  function emitError(tokenzer, code, start, offset, ...args) {
    const end = tokenzer.currentPosition();
    end.offset += offset;
    end.column += offset;
    if (onError) {
      const loc = location ? createLocation(start, end) : null;
      const err = createCompileError(code, loc, {
        domain: ERROR_DOMAIN$2,
        args
      });
      onError(err);
    }
  }
  function startNode(type, offset, loc) {
    const node = {
      type
    };
    if (location) {
      node.start = offset;
      node.end = offset;
      node.loc = {
        start: loc,
        end: loc
      };
    }
    return node;
  }
  function endNode(node, offset, pos, type) {
    if (location) {
      node.end = offset;
      if (node.loc) {
        node.loc.end = pos;
      }
    }
  }
  function parseText(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(3 /* NodeTypes.Text */, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseList(tokenizer, index) {
    const context = tokenizer.context();
    const {
      lastOffset: offset,
      lastStartLoc: loc
    } = context; // get brace left loc
    const node = startNode(5 /* NodeTypes.List */, offset, loc);
    node.index = parseInt(index, 10);
    tokenizer.nextToken(); // skip brach right
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseNamed(tokenizer, key) {
    const context = tokenizer.context();
    const {
      lastOffset: offset,
      lastStartLoc: loc
    } = context; // get brace left loc
    const node = startNode(4 /* NodeTypes.Named */, offset, loc);
    node.key = key;
    tokenizer.nextToken(); // skip brach right
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLiteral(tokenizer, value) {
    const context = tokenizer.context();
    const {
      lastOffset: offset,
      lastStartLoc: loc
    } = context; // get brace left loc
    const node = startNode(9 /* NodeTypes.Literal */, offset, loc);
    node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
    tokenizer.nextToken(); // skip brach right
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinkedModifier(tokenizer) {
    const token = tokenizer.nextToken();
    const context = tokenizer.context();
    const {
      lastOffset: offset,
      lastStartLoc: loc
    } = context; // get linked dot loc
    const node = startNode(8 /* NodeTypes.LinkedModifier */, offset, loc);
    if (token.type !== 11 /* TokenTypes.LinkedModifier */) {
      // empty modifier
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
      node.value = '';
      endNode(node, offset, loc);
      return {
        nextConsumeToken: token,
        node
      };
    }
    // check token
    if (token.value == null) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    node.value = token.value || '';
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node
    };
  }
  function parseLinkedKey(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(7 /* NodeTypes.LinkedKey */, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinked(tokenizer) {
    const context = tokenizer.context();
    const linkedNode = startNode(6 /* NodeTypes.Linked */, context.offset, context.startLoc);
    let token = tokenizer.nextToken();
    if (token.type === 8 /* TokenTypes.LinkedDot */) {
      const parsed = parseLinkedModifier(tokenizer);
      linkedNode.modifier = parsed.node;
      token = parsed.nextConsumeToken || tokenizer.nextToken();
    }
    // asset check token
    if (token.type !== 9 /* TokenTypes.LinkedDelimiter */) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    token = tokenizer.nextToken();
    // skip brace left
    if (token.type === 2 /* TokenTypes.BraceLeft */) {
      token = tokenizer.nextToken();
    }
    switch (token.type) {
      case 10 /* TokenTypes.LinkedKey */:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLinkedKey(tokenizer, token.value || '');
        break;
      case 4 /* TokenTypes.Named */:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseNamed(tokenizer, token.value || '');
        break;
      case 5 /* TokenTypes.List */:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseList(tokenizer, token.value || '');
        break;
      case 6 /* TokenTypes.Literal */:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLiteral(tokenizer, token.value || '');
        break;
      default:
        {
          // empty key
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
          const nextContext = tokenizer.context();
          const emptyLinkedKeyNode = startNode(7 /* NodeTypes.LinkedKey */, nextContext.offset, nextContext.startLoc);
          emptyLinkedKeyNode.value = '';
          endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
          linkedNode.key = emptyLinkedKeyNode;
          endNode(linkedNode, nextContext.offset, nextContext.startLoc);
          return {
            nextConsumeToken: token,
            node: linkedNode
          };
        }
    }
    endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node: linkedNode
    };
  }
  function parseMessage(tokenizer) {
    const context = tokenizer.context();
    const startOffset = context.currentType === 1 /* TokenTypes.Pipe */ ? tokenizer.currentOffset() : context.offset;
    const startLoc = context.currentType === 1 /* TokenTypes.Pipe */ ? context.endLoc : context.startLoc;
    const node = startNode(2 /* NodeTypes.Message */, startOffset, startLoc);
    node.items = [];
    let nextToken = null;
    do {
      const token = nextToken || tokenizer.nextToken();
      nextToken = null;
      switch (token.type) {
        case 0 /* TokenTypes.Text */:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseText(tokenizer, token.value || ''));
          break;
        case 5 /* TokenTypes.List */:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseList(tokenizer, token.value || ''));
          break;
        case 4 /* TokenTypes.Named */:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseNamed(tokenizer, token.value || ''));
          break;
        case 6 /* TokenTypes.Literal */:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseLiteral(tokenizer, token.value || ''));
          break;
        case 7 /* TokenTypes.LinkedAlias */:
          {
            const parsed = parseLinked(tokenizer);
            node.items.push(parsed.node);
            nextToken = parsed.nextConsumeToken || null;
            break;
          }
      }
    } while (context.currentType !== 13 /* TokenTypes.EOF */ && context.currentType !== 1 /* TokenTypes.Pipe */);
    // adjust message node loc
    const endOffset = context.currentType === 1 /* TokenTypes.Pipe */ ? context.lastOffset : tokenizer.currentOffset();
    const endLoc = context.currentType === 1 /* TokenTypes.Pipe */ ? context.lastEndLoc : tokenizer.currentPosition();
    endNode(node, endOffset, endLoc);
    return node;
  }
  function parsePlural(tokenizer, offset, loc, msgNode) {
    const context = tokenizer.context();
    let hasEmptyMessage = msgNode.items.length === 0;
    const node = startNode(1 /* NodeTypes.Plural */, offset, loc);
    node.cases = [];
    node.cases.push(msgNode);
    do {
      const msg = parseMessage(tokenizer);
      if (!hasEmptyMessage) {
        hasEmptyMessage = msg.items.length === 0;
      }
      node.cases.push(msg);
    } while (context.currentType !== 13 /* TokenTypes.EOF */);
    if (hasEmptyMessage) {
      emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseResource(tokenizer) {
    const context = tokenizer.context();
    const {
      offset,
      startLoc
    } = context;
    const msgNode = parseMessage(tokenizer);
    if (context.currentType === 13 /* TokenTypes.EOF */) {
      return msgNode;
    } else {
      return parsePlural(tokenizer, offset, startLoc, msgNode);
    }
  }
  function parse(source) {
    const tokenizer = createTokenizer(source, shared_assign({}, options));
    const context = tokenizer.context();
    const node = startNode(0 /* NodeTypes.Resource */, context.offset, context.startLoc);
    if (location && node.loc) {
      node.loc.source = source;
    }
    node.body = parseResource(tokenizer);
    if (options.onCacheKey) {
      node.cacheKey = options.onCacheKey(source);
    }
    // assert whether achieved to EOF
    if (context.currentType !== 13 /* TokenTypes.EOF */) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || '');
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  return {
    parse
  };
}
function getTokenCaption(token) {
  if (token.type === 13 /* TokenTypes.EOF */) {
    return 'EOF';
  }
  const name = (token.value || '').replace(/\r?\n/gu, '\\n');
  return name.length > 10 ? name.slice(0, 9) + '…' : name;
}
function createTransformer(ast, options = {} // eslint-disable-line
) {
  const _context = {
    ast,
    helpers: new Set()
  };
  const context = () => _context;
  const helper = name => {
    _context.helpers.add(name);
    return name;
  };
  return {
    context,
    helper
  };
}
function traverseNodes(nodes, transformer) {
  for (let i = 0; i < nodes.length; i++) {
    traverseNode(nodes[i], transformer);
  }
}
function traverseNode(node, transformer) {
  // TODO: if we need pre-hook of transform, should be implemented to here
  switch (node.type) {
    case 1 /* NodeTypes.Plural */:
      traverseNodes(node.cases, transformer);
      transformer.helper("plural" /* HelperNameMap.PLURAL */);
      break;
    case 2 /* NodeTypes.Message */:
      traverseNodes(node.items, transformer);
      break;
    case 6 /* NodeTypes.Linked */:
      {
        const linked = node;
        traverseNode(linked.key, transformer);
        transformer.helper("linked" /* HelperNameMap.LINKED */);
        transformer.helper("type" /* HelperNameMap.TYPE */);
        break;
      }
    case 5 /* NodeTypes.List */:
      transformer.helper("interpolate" /* HelperNameMap.INTERPOLATE */);
      transformer.helper("list" /* HelperNameMap.LIST */);
      break;
    case 4 /* NodeTypes.Named */:
      transformer.helper("interpolate" /* HelperNameMap.INTERPOLATE */);
      transformer.helper("named" /* HelperNameMap.NAMED */);
      break;
  }
  // TODO: if we need post-hook of transform, should be implemented to here
}
// transform AST
function transform(ast, options = {} // eslint-disable-line
) {
  const transformer = createTransformer(ast);
  transformer.helper("normalize" /* HelperNameMap.NORMALIZE */);
  // traverse
  ast.body && traverseNode(ast.body, transformer);
  // set meta information
  const context = transformer.context();
  ast.helpers = Array.from(context.helpers);
}
function optimize(ast) {
  const body = ast.body;
  if (body.type === 2 /* NodeTypes.Message */) {
    optimizeMessageNode(body);
  } else {
    body.cases.forEach(c => optimizeMessageNode(c));
  }
  return ast;
}
function optimizeMessageNode(message) {
  if (message.items.length === 1) {
    const item = message.items[0];
    if (item.type === 3 /* NodeTypes.Text */ || item.type === 9 /* NodeTypes.Literal */) {
      message.static = item.value;
      delete item.value; // optimization for size
    }
  } else {
    const values = [];
    for (let i = 0; i < message.items.length; i++) {
      const item = message.items[i];
      if (!(item.type === 3 /* NodeTypes.Text */ || item.type === 9 /* NodeTypes.Literal */)) {
        break;
      }
      if (item.value == null) {
        break;
      }
      values.push(item.value);
    }
    if (values.length === message.items.length) {
      message.static = join(values);
      for (let i = 0; i < message.items.length; i++) {
        const item = message.items[i];
        if (item.type === 3 /* NodeTypes.Text */ || item.type === 9 /* NodeTypes.Literal */) {
          delete item.value; // optimization for size
        }
      }
    }
  }
}
const ERROR_DOMAIN$1 = 'minifier';
/* eslint-disable @typescript-eslint/no-explicit-any */
function minify(node) {
  node.t = node.type;
  switch (node.type) {
    case 0 /* NodeTypes.Resource */:
      {
        const resource = node;
        minify(resource.body);
        resource.b = resource.body;
        delete resource.body;
        break;
      }
    case 1 /* NodeTypes.Plural */:
      {
        const plural = node;
        const cases = plural.cases;
        for (let i = 0; i < cases.length; i++) {
          minify(cases[i]);
        }
        plural.c = cases;
        delete plural.cases;
        break;
      }
    case 2 /* NodeTypes.Message */:
      {
        const message = node;
        const items = message.items;
        for (let i = 0; i < items.length; i++) {
          minify(items[i]);
        }
        message.i = items;
        delete message.items;
        if (message.static) {
          message.s = message.static;
          delete message.static;
        }
        break;
      }
    case 3 /* NodeTypes.Text */:
    case 9 /* NodeTypes.Literal */:
    case 8 /* NodeTypes.LinkedModifier */:
    case 7 /* NodeTypes.LinkedKey */:
      {
        const valueNode = node;
        if (valueNode.value) {
          valueNode.v = valueNode.value;
          delete valueNode.value;
        }
        break;
      }
    case 6 /* NodeTypes.Linked */:
      {
        const linked = node;
        minify(linked.key);
        linked.k = linked.key;
        delete linked.key;
        if (linked.modifier) {
          minify(linked.modifier);
          linked.m = linked.modifier;
          delete linked.modifier;
        }
        break;
      }
    case 5 /* NodeTypes.List */:
      {
        const list = node;
        list.i = list.index;
        delete list.index;
        break;
      }
    case 4 /* NodeTypes.Named */:
      {
        const named = node;
        named.k = named.key;
        delete named.key;
        break;
      }
    default:
      if (false) {}
  }
  delete node.type;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="source-map-js" />
const ERROR_DOMAIN = 'parser';
function createCodeGenerator(ast, options) {
  const {
    sourceMap,
    filename,
    breakLineCode,
    needIndent: _needIndent
  } = options;
  const location = options.location !== false;
  const _context = {
    filename,
    code: '',
    column: 1,
    line: 1,
    offset: 0,
    map: undefined,
    breakLineCode,
    needIndent: _needIndent,
    indentLevel: 0
  };
  if (location && ast.loc) {
    _context.source = ast.loc.source;
  }
  const context = () => _context;
  function push(code, node) {
    _context.code += code;
  }
  function _newline(n, withBreakLine = true) {
    const _breakLineCode = withBreakLine ? breakLineCode : '';
    push(_needIndent ? _breakLineCode + `  `.repeat(n) : _breakLineCode);
  }
  function indent(withNewLine = true) {
    const level = ++_context.indentLevel;
    withNewLine && _newline(level);
  }
  function deindent(withNewLine = true) {
    const level = --_context.indentLevel;
    withNewLine && _newline(level);
  }
  function newline() {
    _newline(_context.indentLevel);
  }
  const helper = key => `_${key}`;
  const needIndent = () => _context.needIndent;
  return {
    context,
    push,
    indent,
    deindent,
    newline,
    helper,
    needIndent
  };
}
function generateLinkedNode(generator, node) {
  const {
    helper
  } = generator;
  generator.push(`${helper("linked" /* HelperNameMap.LINKED */)}(`);
  generateNode(generator, node.key);
  if (node.modifier) {
    generator.push(`, `);
    generateNode(generator, node.modifier);
    generator.push(`, _type`);
  } else {
    generator.push(`, undefined, _type`);
  }
  generator.push(`)`);
}
function generateMessageNode(generator, node) {
  const {
    helper,
    needIndent
  } = generator;
  generator.push(`${helper("normalize" /* HelperNameMap.NORMALIZE */)}([`);
  generator.indent(needIndent());
  const length = node.items.length;
  for (let i = 0; i < length; i++) {
    generateNode(generator, node.items[i]);
    if (i === length - 1) {
      break;
    }
    generator.push(', ');
  }
  generator.deindent(needIndent());
  generator.push('])');
}
function generatePluralNode(generator, node) {
  const {
    helper,
    needIndent
  } = generator;
  if (node.cases.length > 1) {
    generator.push(`${helper("plural" /* HelperNameMap.PLURAL */)}([`);
    generator.indent(needIndent());
    const length = node.cases.length;
    for (let i = 0; i < length; i++) {
      generateNode(generator, node.cases[i]);
      if (i === length - 1) {
        break;
      }
      generator.push(', ');
    }
    generator.deindent(needIndent());
    generator.push(`])`);
  }
}
function generateResource(generator, node) {
  if (node.body) {
    generateNode(generator, node.body);
  } else {
    generator.push('null');
  }
}
function generateNode(generator, node) {
  const {
    helper
  } = generator;
  switch (node.type) {
    case 0 /* NodeTypes.Resource */:
      generateResource(generator, node);
      break;
    case 1 /* NodeTypes.Plural */:
      generatePluralNode(generator, node);
      break;
    case 2 /* NodeTypes.Message */:
      generateMessageNode(generator, node);
      break;
    case 6 /* NodeTypes.Linked */:
      generateLinkedNode(generator, node);
      break;
    case 8 /* NodeTypes.LinkedModifier */:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 7 /* NodeTypes.LinkedKey */:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 5 /* NodeTypes.List */:
      generator.push(`${helper("interpolate" /* HelperNameMap.INTERPOLATE */)}(${helper("list" /* HelperNameMap.LIST */)}(${node.index}))`, node);
      break;
    case 4 /* NodeTypes.Named */:
      generator.push(`${helper("interpolate" /* HelperNameMap.INTERPOLATE */)}(${helper("named" /* HelperNameMap.NAMED */)}(${JSON.stringify(node.key)}))`, node);
      break;
    case 9 /* NodeTypes.Literal */:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 3 /* NodeTypes.Text */:
      generator.push(JSON.stringify(node.value), node);
      break;
    default:
      if (false) {}
  }
}
// generate code from AST
const generate = (ast, options = {}) => {
  const mode = shared_isString(options.mode) ? options.mode : 'normal';
  const filename = shared_isString(options.filename) ? options.filename : 'message.intl';
  const sourceMap = !!options.sourceMap;
  // prettier-ignore
  const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === 'arrow' ? ';' : '\n';
  const needIndent = options.needIndent ? options.needIndent : mode !== 'arrow';
  const helpers = ast.helpers || [];
  const generator = createCodeGenerator(ast, {
    mode,
    filename,
    sourceMap,
    breakLineCode,
    needIndent
  });
  generator.push(mode === 'normal' ? `function __msg__ (ctx) {` : `(ctx) => {`);
  generator.indent(needIndent);
  if (helpers.length > 0) {
    generator.push(`const { ${join(helpers.map(s => `${s}: _${s}`), ', ')} } = ctx`);
    generator.newline();
  }
  generator.push(`return `);
  generateNode(generator, ast);
  generator.deindent(needIndent);
  generator.push(`}`);
  delete ast.helpers;
  const {
    code,
    map
  } = generator.context();
  return {
    ast,
    code,
    map: map ? map.toJSON() : undefined // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function baseCompile(source, options = {}) {
  const assignedOptions = shared_assign({}, options);
  const jit = !!assignedOptions.jit;
  const enalbeMinify = !!assignedOptions.minify;
  const enambeOptimize = assignedOptions.optimize == null ? true : assignedOptions.optimize;
  // parse source codes
  const parser = createParser(assignedOptions);
  const ast = parser.parse(source);
  if (!jit) {
    // transform ASTs
    transform(ast, assignedOptions);
    // generate javascript codes
    return generate(ast, assignedOptions);
  } else {
    // optimize ASTs
    enambeOptimize && optimize(ast);
    // minimize ASTs
    enalbeMinify && minify(ast);
    // In JIT mode, no ast transform, no code generation.
    return {
      ast,
      code: ''
    };
  }
}

;// ./node_modules/@intlify/core-base/dist/core-base.mjs












/*!
  * core-base v11.0.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */




/**
 * This is only called in esm-bundler builds.
 * istanbul-ignore-next
 */
function initFeatureFlags() {
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== 'boolean') {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
  if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== 'boolean') {
    getGlobalThis().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
  }
}
function core_base_format(ast) {
  const msg = ctx => formatParts(ctx, ast);
  return msg;
}
function formatParts(ctx, ast) {
  const body = resolveBody(ast);
  if (body == null) {
    throw createUnhandleNodeError(0 /* NodeTypes.Resource */);
  }
  const type = resolveType(body);
  if (type === 1 /* NodeTypes.Plural */) {
    const plural = body;
    const cases = resolveCases(plural);
    return ctx.plural(cases.reduce((messages, c) => [...messages, formatMessageParts(ctx, c)], []));
  } else {
    return formatMessageParts(ctx, body);
  }
}
const PROPS_BODY = ['b', 'body'];
function resolveBody(node) {
  return resolveProps(node, PROPS_BODY);
}
const PROPS_CASES = ['c', 'cases'];
function resolveCases(node) {
  return resolveProps(node, PROPS_CASES, []);
}
function formatMessageParts(ctx, node) {
  const static_ = resolveStatic(node);
  if (static_ != null) {
    return ctx.type === 'text' ? static_ : ctx.normalize([static_]);
  } else {
    const messages = resolveItems(node).reduce((acm, c) => [...acm, formatMessagePart(ctx, c)], []);
    return ctx.normalize(messages);
  }
}
const PROPS_STATIC = ['s', 'static'];
function resolveStatic(node) {
  return resolveProps(node, PROPS_STATIC);
}
const PROPS_ITEMS = ['i', 'items'];
function resolveItems(node) {
  return resolveProps(node, PROPS_ITEMS, []);
}
function formatMessagePart(ctx, node) {
  const type = resolveType(node);
  switch (type) {
    case 3 /* NodeTypes.Text */:
      {
        return resolveValue$1(node, type);
      }
    case 9 /* NodeTypes.Literal */:
      {
        return resolveValue$1(node, type);
      }
    case 4 /* NodeTypes.Named */:
      {
        const named = node;
        if (hasOwn(named, 'k') && named.k) {
          return ctx.interpolate(ctx.named(named.k));
        }
        if (hasOwn(named, 'key') && named.key) {
          return ctx.interpolate(ctx.named(named.key));
        }
        throw createUnhandleNodeError(type);
      }
    case 5 /* NodeTypes.List */:
      {
        const list = node;
        if (hasOwn(list, 'i') && isNumber(list.i)) {
          return ctx.interpolate(ctx.list(list.i));
        }
        if (hasOwn(list, 'index') && isNumber(list.index)) {
          return ctx.interpolate(ctx.list(list.index));
        }
        throw createUnhandleNodeError(type);
      }
    case 6 /* NodeTypes.Linked */:
      {
        const linked = node;
        const modifier = resolveLinkedModifier(linked);
        const key = resolveLinkedKey(linked);
        return ctx.linked(formatMessagePart(ctx, key), modifier ? formatMessagePart(ctx, modifier) : undefined, ctx.type);
      }
    case 7 /* NodeTypes.LinkedKey */:
      {
        return resolveValue$1(node, type);
      }
    case 8 /* NodeTypes.LinkedModifier */:
      {
        return resolveValue$1(node, type);
      }
    default:
      throw new Error(`unhandled node on format message part: ${type}`);
  }
}
const PROPS_TYPE = ['t', 'type'];
function resolveType(node) {
  return resolveProps(node, PROPS_TYPE);
}
const PROPS_VALUE = ['v', 'value'];
function resolveValue$1(node, type) {
  const resolved = resolveProps(node, PROPS_VALUE);
  if (resolved) {
    return resolved;
  } else {
    throw createUnhandleNodeError(type);
  }
}
const PROPS_MODIFIER = ['m', 'modifier'];
function resolveLinkedModifier(node) {
  return resolveProps(node, PROPS_MODIFIER);
}
const PROPS_KEY = ['k', 'key'];
function resolveLinkedKey(node) {
  const resolved = resolveProps(node, PROPS_KEY);
  if (resolved) {
    return resolved;
  } else {
    throw createUnhandleNodeError(6 /* NodeTypes.Linked */);
  }
}
function resolveProps(node, props, defaultValue) {
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (hasOwn(node, prop) && node[prop] != null) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return node[prop];
    }
  }
  return defaultValue;
}
function createUnhandleNodeError(type) {
  return new Error(`unhandled node type: ${type}`);
}
const WARN_MESSAGE = (/* unused pure expression or super */ null && (`Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.`));
function checkHtmlMessage(source, warnHtmlMessage) {
  if (warnHtmlMessage && detectHtmlTag(source)) {
    warn(format$1(WARN_MESSAGE, {
      source
    }));
  }
}
const defaultOnCacheKey = message => message;
let compileCache = shared_create();
function clearCompileCache() {
  compileCache = create();
}
function core_base_isMessageAST(val) {
  return shared_isObject(val) && resolveType(val) === 0 && (hasOwn(val, 'b') || hasOwn(val, 'body'));
}
function core_base_baseCompile(message, options = {}) {
  // error detecting on compile
  let detectError = false;
  const onError = options.onError || defaultOnError;
  options.onError = err => {
    detectError = true;
    onError(err);
  };
  // compile with mesasge-compiler
  return {
    ...baseCompile(message, options),
    detectError
  };
}
/* #__NO_SIDE_EFFECTS__ */
function compile(message, context) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && shared_isString(message)) {
    // check HTML message
    const warnHtmlMessage = shared_isBoolean(context.warnHtmlMessage) ? context.warnHtmlMessage : true;
     false && 0;
    // check caches
    const onCacheKey = context.onCacheKey || defaultOnCacheKey;
    const cacheKey = onCacheKey(message);
    const cached = compileCache[cacheKey];
    if (cached) {
      return cached;
    }
    // compile with JIT mode
    const {
      ast,
      detectError
    } = core_base_baseCompile(message, {
      ...context,
      location: "production" !== 'production',
      jit: true
    });
    // compose message function from AST
    const msg = core_base_format(ast);
    // if occurred compile error, don't cache
    return !detectError ? compileCache[cacheKey] = msg : msg;
  } else {
    if (false) {}
    // AST case (passed from bundler)
    const cacheKey = message.cacheKey;
    if (cacheKey) {
      const cached = compileCache[cacheKey];
      if (cached) {
        return cached;
      }
      // compose message function from message (AST)
      return compileCache[cacheKey] = core_base_format(message);
    } else {
      return core_base_format(message);
    }
  }
}
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function getDevToolsHook() {
  return devtools;
}
function initI18nDevTools(i18n, version, meta) {
  // TODO: queue if devtools is undefined
  devtools && devtools.emit('i18n:init', {
    timestamp: Date.now(),
    i18n,
    version,
    meta
  });
}
const translateDevTools = /* #__PURE__*/createDevToolsHook('function:translate');
function createDevToolsHook(hook) {
  return payloads => devtools && devtools.emit(hook, payloads);
}
const CoreErrorCodes = {
  INVALID_ARGUMENT: COMPILE_ERROR_CODES_EXTEND_POINT,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
};
const CORE_ERROR_CODES_EXTEND_POINT = 24;
function createCoreError(code) {
  return createCompileError(code, null,  false ? 0 : undefined);
}
/** @internal */
const core_base_errorMessages = {
  [CoreErrorCodes.INVALID_ARGUMENT]: 'Invalid arguments',
  [CoreErrorCodes.INVALID_DATE_ARGUMENT]: 'The date provided is an invalid Date object.' + 'Make sure your Date represents a valid date.',
  [CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT]: 'The argument provided is not a valid ISO date string',
  [CoreErrorCodes.NOT_SUPPORT_NON_STRING_MESSAGE]: 'Not support non-string message',
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: 'cannot support promise value',
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: 'cannot support async function',
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE]: 'cannot support locale type'
};

/** @internal */
function getLocale(context, options) {
  return options.locale != null ? resolveLocale(options.locale) : resolveLocale(context.locale);
}
let _resolveLocale;
/** @internal */
function resolveLocale(locale) {
  if (shared_isString(locale)) {
    return locale;
  } else {
    if (shared_isFunction(locale)) {
      if (locale.resolvedOnce && _resolveLocale != null) {
        return _resolveLocale;
      } else if (locale.constructor.name === 'Function') {
        const resolve = locale();
        if (isPromise(resolve)) {
          throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
        }
        return _resolveLocale = resolve;
      } else {
        throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
      }
    } else {
      throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
    }
  }
}
/**
 * Fallback with simple implemenation
 *
 * @remarks
 * A fallback locale function implemented with a simple fallback algorithm.
 *
 * Basically, it returns the value as specified in the `fallbackLocale` props, and is processed with the fallback inside intlify.
 *
 * @param ctx - A {@link CoreContext | context}
 * @param fallback - A {@link FallbackLocale | fallback locale}
 * @param start - A starting {@link Locale | locale}
 *
 * @returns Fallback locales
 *
 * @VueI18nGeneral
 */
function fallbackWithSimple(ctx, fallback, start) {
  // prettier-ignore
  return [...new Set([start, ...(shared_isArray(fallback) ? fallback : shared_isObject(fallback) ? Object.keys(fallback) : shared_isString(fallback) ? [fallback] : [start])])];
}
/**
 * Fallback with locale chain
 *
 * @remarks
 * A fallback locale function implemented with a fallback chain algorithm. It's used in VueI18n as default.
 *
 * @param ctx - A {@link CoreContext | context}
 * @param fallback - A {@link FallbackLocale | fallback locale}
 * @param start - A starting {@link Locale | locale}
 *
 * @returns Fallback locales
 *
 * @VueI18nSee [Fallbacking](../guide/essentials/fallback)
 *
 * @VueI18nGeneral
 */
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = shared_isString(start) ? start : DEFAULT_LOCALE;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    // first block defined by start
    let block = [start];
    // while any intervening block found
    while (shared_isArray(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    // prettier-ignore
    // last block defined by default
    const defaults = shared_isArray(fallback) || !isPlainObject(fallback) ? fallback : fallback['default'] ? fallback['default'] : null;
    // convert defaults to array
    block = shared_isString(defaults) ? [defaults] : defaults;
    if (shared_isArray(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i = 0; i < block.length && shared_isBoolean(follow); i++) {
    const locale = block[i];
    if (shared_isString(locale)) {
      follow = appendLocaleToChain(chain, block[i], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split('-');
  do {
    const target = tokens.join('-');
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== '!';
      const locale = target.replace(/!/g, '');
      chain.push(locale);
      if ((shared_isArray(blocks) || isPlainObject(blocks)) && blocks[locale] // eslint-disable-line @typescript-eslint/no-explicit-any
      ) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
const pathStateMachine = [];
pathStateMachine[0 /* States.BEFORE_PATH */] = {
  ["w" /* PathCharTypes.WORKSPACE */]: [0 /* States.BEFORE_PATH */],
  ["i" /* PathCharTypes.IDENT */]: [3 /* States.IN_IDENT */, 0 /* Actions.APPEND */],
  ["[" /* PathCharTypes.LEFT_BRACKET */]: [4 /* States.IN_SUB_PATH */],
  ["o" /* PathCharTypes.END_OF_FAIL */]: [7 /* States.AFTER_PATH */]
};
pathStateMachine[1 /* States.IN_PATH */] = {
  ["w" /* PathCharTypes.WORKSPACE */]: [1 /* States.IN_PATH */],
  ["." /* PathCharTypes.DOT */]: [2 /* States.BEFORE_IDENT */],
  ["[" /* PathCharTypes.LEFT_BRACKET */]: [4 /* States.IN_SUB_PATH */],
  ["o" /* PathCharTypes.END_OF_FAIL */]: [7 /* States.AFTER_PATH */]
};
pathStateMachine[2 /* States.BEFORE_IDENT */] = {
  ["w" /* PathCharTypes.WORKSPACE */]: [2 /* States.BEFORE_IDENT */],
  ["i" /* PathCharTypes.IDENT */]: [3 /* States.IN_IDENT */, 0 /* Actions.APPEND */],
  ["0" /* PathCharTypes.ZERO */]: [3 /* States.IN_IDENT */, 0 /* Actions.APPEND */]
};
pathStateMachine[3 /* States.IN_IDENT */] = {
  ["i" /* PathCharTypes.IDENT */]: [3 /* States.IN_IDENT */, 0 /* Actions.APPEND */],
  ["0" /* PathCharTypes.ZERO */]: [3 /* States.IN_IDENT */, 0 /* Actions.APPEND */],
  ["w" /* PathCharTypes.WORKSPACE */]: [1 /* States.IN_PATH */, 1 /* Actions.PUSH */],
  ["." /* PathCharTypes.DOT */]: [2 /* States.BEFORE_IDENT */, 1 /* Actions.PUSH */],
  ["[" /* PathCharTypes.LEFT_BRACKET */]: [4 /* States.IN_SUB_PATH */, 1 /* Actions.PUSH */],
  ["o" /* PathCharTypes.END_OF_FAIL */]: [7 /* States.AFTER_PATH */, 1 /* Actions.PUSH */]
};
pathStateMachine[4 /* States.IN_SUB_PATH */] = {
  ["'" /* PathCharTypes.SINGLE_QUOTE */]: [5 /* States.IN_SINGLE_QUOTE */, 0 /* Actions.APPEND */],
  ["\"" /* PathCharTypes.DOUBLE_QUOTE */]: [6 /* States.IN_DOUBLE_QUOTE */, 0 /* Actions.APPEND */],
  ["[" /* PathCharTypes.LEFT_BRACKET */]: [4 /* States.IN_SUB_PATH */, 2 /* Actions.INC_SUB_PATH_DEPTH */],
  ["]" /* PathCharTypes.RIGHT_BRACKET */]: [1 /* States.IN_PATH */, 3 /* Actions.PUSH_SUB_PATH */],
  ["o" /* PathCharTypes.END_OF_FAIL */]: 8 /* States.ERROR */,
  ["l" /* PathCharTypes.ELSE */]: [4 /* States.IN_SUB_PATH */, 0 /* Actions.APPEND */]
};
pathStateMachine[5 /* States.IN_SINGLE_QUOTE */] = {
  ["'" /* PathCharTypes.SINGLE_QUOTE */]: [4 /* States.IN_SUB_PATH */, 0 /* Actions.APPEND */],
  ["o" /* PathCharTypes.END_OF_FAIL */]: 8 /* States.ERROR */,
  ["l" /* PathCharTypes.ELSE */]: [5 /* States.IN_SINGLE_QUOTE */, 0 /* Actions.APPEND */]
};
pathStateMachine[6 /* States.IN_DOUBLE_QUOTE */] = {
  ["\"" /* PathCharTypes.DOUBLE_QUOTE */]: [4 /* States.IN_SUB_PATH */, 0 /* Actions.APPEND */],
  ["o" /* PathCharTypes.END_OF_FAIL */]: 8 /* States.ERROR */,
  ["l" /* PathCharTypes.ELSE */]: [6 /* States.IN_DOUBLE_QUOTE */, 0 /* Actions.APPEND */]
};
/**
 * Check if an expression is a literal value.
 */
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
/**
 * Strip quotes from a string
 */
function stripQuotes(str) {
  const a = str.charCodeAt(0);
  const b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
}
/**
 * Determine the type of a character in a keypath.
 */
function getPathCharType(ch) {
  if (ch === undefined || ch === null) {
    return "o" /* PathCharTypes.END_OF_FAIL */;
  }
  const code = ch.charCodeAt(0);
  switch (code) {
    case 0x5b: // [
    case 0x5d: // ]
    case 0x2e: // .
    case 0x22: // "
    case 0x27:
      // '
      return ch;
    case 0x5f: // _
    case 0x24: // $
    case 0x2d:
      // -
      return "i" /* PathCharTypes.IDENT */;
    case 0x09: // Tab (HT)
    case 0x0a: // Newline (LF)
    case 0x0d: // Return (CR)
    case 0xa0: // No-break space (NBSP)
    case 0xfeff: // Byte Order Mark (BOM)
    case 0x2028: // Line Separator (LS)
    case 0x2029:
      // Paragraph Separator (PS)
      return "w" /* PathCharTypes.WORKSPACE */;
  }
  return "i" /* PathCharTypes.IDENT */;
}
/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 */
function formatSubPath(path) {
  const trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" /* PathCharTypes.ASTARISK */ + trimmed;
}
/**
 * Parse a string path into an array of segments
 */
function parse(path) {
  const keys = [];
  let index = -1;
  let mode = 0 /* States.BEFORE_PATH */;
  let subPathDepth = 0;
  let c;
  let key; // eslint-disable-line
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[0 /* Actions.APPEND */] = () => {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[1 /* Actions.PUSH */] = () => {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };
  actions[2 /* Actions.INC_SUB_PATH_DEPTH */] = () => {
    actions[0 /* Actions.APPEND */]();
    subPathDepth++;
  };
  actions[3 /* Actions.PUSH_SUB_PATH */] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4 /* States.IN_SUB_PATH */;
      actions[0 /* Actions.APPEND */]();
    } else {
      subPathDepth = 0;
      if (key === undefined) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[1 /* Actions.PUSH */]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index + 1];
    if (mode === 5 /* States.IN_SINGLE_QUOTE */ && nextChar === "'" /* PathCharTypes.SINGLE_QUOTE */ || mode === 6 /* States.IN_DOUBLE_QUOTE */ && nextChar === "\"" /* PathCharTypes.DOUBLE_QUOTE */) {
      index++;
      newChar = '\\' + nextChar;
      actions[0 /* Actions.APPEND */]();
      return true;
    }
  }
  while (mode !== null) {
    index++;
    c = path[index];
    if (c === '\\' && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap["l" /* PathCharTypes.ELSE */] || 8 /* States.ERROR */;
    // check parse error
    if (transition === 8 /* States.ERROR */) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== undefined) {
      action = actions[transition[1]];
      if (action) {
        newChar = c;
        if (action() === false) {
          return;
        }
      }
    }
    // check parse finish
    if (mode === 7 /* States.AFTER_PATH */) {
      return keys;
    }
  }
}
// path token cache
const cache = new Map();
/**
 * key-value message resolver
 *
 * @remarks
 * Resolves messages with the key-value structure. Note that messages with a hierarchical structure such as objects cannot be resolved
 *
 * @param obj - A target object to be resolved with path
 * @param path - A {@link Path | path} to resolve the value of message
 *
 * @returns A resolved {@link PathValue | path value}
 *
 * @VueI18nGeneral
 */
function resolveWithKeyValue(obj, path) {
  return shared_isObject(obj) ? obj[path] : null;
}
/**
 * message resolver
 *
 * @remarks
 * Resolves messages. messages with a hierarchical structure such as objects can be resolved. This resolver is used in VueI18n as default.
 *
 * @param obj - A target object to be resolved with path
 * @param path - A {@link Path | path} to resolve the value of message
 *
 * @returns A resolved {@link PathValue | path value}
 *
 * @VueI18nGeneral
 */
function resolveValue(obj, path) {
  // check object
  if (!shared_isObject(obj)) {
    return null;
  }
  // parse path
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  // check hit
  if (!hit) {
    return null;
  }
  // resolve path value
  const len = hit.length;
  let last = obj;
  let i = 0;
  while (i < len) {
    const val = last[hit[i]];
    if (val === undefined) {
      return null;
    }
    if (shared_isFunction(last)) {
      return null;
    }
    last = val;
    i++;
  }
  return last;
}
const CoreWarnCodes = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
};
const CORE_WARN_CODES_EXTEND_POINT = 8;
/** @internal */
const warnMessages = {
  [CoreWarnCodes.NOT_FOUND_KEY]: `Not found '{key}' key in '{locale}' locale messages.`,
  [CoreWarnCodes.FALLBACK_TO_TRANSLATE]: `Fall back to translate '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.CANNOT_FORMAT_NUMBER]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
  [CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT]: `Fall back to number format '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.CANNOT_FORMAT_DATE]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
  [CoreWarnCodes.FALLBACK_TO_DATE_FORMAT]: `Fall back to datetime format '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: `This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future.`
};
function getWarnMessage(code, ...args) {
  return format$1(warnMessages[code], ...args);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Intlify core-base version
 * @internal
 */
const VERSION = '11.0.1';
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = 'en-US';
const MISSING_RESOLVE_VALUE = '';
const capitalize = str => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
  return {
    upper: (val, type) => {
      // prettier-ignore
      return type === 'text' && shared_isString(val) ? val.toUpperCase() : type === 'vnode' && shared_isObject(val) && '__v_isVNode' in val ? val.children.toUpperCase() : val;
    },
    lower: (val, type) => {
      // prettier-ignore
      return type === 'text' && shared_isString(val) ? val.toLowerCase() : type === 'vnode' && shared_isObject(val) && '__v_isVNode' in val ? val.children.toLowerCase() : val;
    },
    capitalize: (val, type) => {
      // prettier-ignore
      return type === 'text' && shared_isString(val) ? capitalize(val) : type === 'vnode' && shared_isObject(val) && '__v_isVNode' in val ? capitalize(val.children) : val;
    }
  };
}
let _compiler;
function registerMessageCompiler(compiler) {
  _compiler = compiler;
}
let _resolver;
/**
 * Register the message resolver
 *
 * @param resolver - A {@link MessageResolver} function
 *
 * @VueI18nGeneral
 */
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
/**
 * Register the locale fallbacker
 *
 * @param fallbacker - A {@link LocaleFallbacker} function
 *
 * @VueI18nGeneral
 */
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
// Additional Meta for Intlify DevTools
let _additionalMeta = null;
/* #__NO_SIDE_EFFECTS__ */
const setAdditionalMeta = meta => {
  _additionalMeta = meta;
};
/* #__NO_SIDE_EFFECTS__ */
const getAdditionalMeta = () => _additionalMeta;
let _fallbackContext = null;
const setFallbackContext = context => {
  _fallbackContext = context;
};
const getFallbackContext = () => _fallbackContext;
// ID for CoreContext
let _cid = 0;
function createCoreContext(options = {}) {
  // setup options
  const onWarn = shared_isFunction(options.onWarn) ? options.onWarn : shared_warn;
  const version = shared_isString(options.version) ? options.version : VERSION;
  const locale = shared_isString(options.locale) || shared_isFunction(options.locale) ? options.locale : DEFAULT_LOCALE;
  const _locale = shared_isFunction(locale) ? DEFAULT_LOCALE : locale;
  const fallbackLocale = shared_isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || shared_isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale;
  const messages = isPlainObject(options.messages) ? options.messages : createResources(_locale);
  const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : createResources(_locale);
  const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : createResources(_locale);
  const modifiers = shared_assign(shared_create(), options.modifiers, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || shared_create();
  const missing = shared_isFunction(options.missing) ? options.missing : null;
  const missingWarn = shared_isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = shared_isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = shared_isFunction(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject(options.processor) ? options.processor : null;
  const warnHtmlMessage = shared_isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = shared_isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
  if (false) {}
  const messageResolver = shared_isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = shared_isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const fallbackContext = shared_isObject(options.fallbackContext) ? options.fallbackContext : undefined;
  // setup internal options
  const internalOptions = options;
  const __datetimeFormatters = shared_isObject(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : new Map();
  const __numberFormatters = shared_isObject(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : new Map();
  const __meta = shared_isObject(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version,
    cid: _cid,
    locale,
    fallbackLocale,
    messages,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    fallbackContext,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  // for vue-devtools timeline event
  if (false) {}
  // NOTE: experimental !!
  if ( false || __INTLIFY_PROD_DEVTOOLS__) {
    initI18nDevTools(context, version, __meta);
  }
  return context;
}
const createResources = locale => ({
  [locale]: shared_create()
});
/** @internal */
function isTranslateFallbackWarn(fallback, key) {
  return fallback instanceof RegExp ? fallback.test(key) : fallback;
}
/** @internal */
function isTranslateMissingWarn(missing, key) {
  return missing instanceof RegExp ? missing.test(key) : missing;
}
/** @internal */
function handleMissing(context, key, locale, missingWarn, type) {
  const {
    missing,
    onWarn
  } = context;
  // for vue-devtools timeline event
  if (false) {}
  if (missing !== null) {
    const ret = missing(context, locale, key, type);
    return shared_isString(ret) ? ret : key;
  } else {
    if (false) {}
    return key;
  }
}
/** @internal */
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = new Map();
  ctx.localeFallbacker(ctx, fallback, locale);
}
/** @internal */
function isAlmostSameLocale(locale, compareLocale) {
  if (locale === compareLocale) return false;
  return locale.split('-')[0] === compareLocale.split('-')[0];
}
/** @internal */
function isImplicitFallback(targetLocale, locales) {
  const index = locales.indexOf(targetLocale);
  if (index === -1) {
    return false;
  }
  for (let i = index + 1; i < locales.length; i++) {
    if (isAlmostSameLocale(targetLocale, locales[i])) {
      return true;
    }
  }
  return false;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const intlDefined = typeof Intl !== 'undefined';
const Availabilities = {
  dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== 'undefined',
  numberFormat: intlDefined && typeof Intl.NumberFormat !== 'undefined'
};

// implementation of `datetime` function
function datetime(context, ...args) {
  const {
    datetimeFormats,
    unresolving,
    fallbackLocale,
    onWarn,
    localeFallbacker
  } = context;
  const {
    __datetimeFormatters
  } = context;
  if (false) {}
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = shared_isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = shared_isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = getLocale(context, options);
  const locales = localeFallbacker(context,
  // eslint-disable-line @typescript-eslint/no-explicit-any
  fallbackLocale, locale);
  if (!shared_isString(key) || key === '') {
    return new Intl.DateTimeFormat(locale, overrides).format(value);
  }
  // resolve format
  let datetimeFormat = {};
  let targetLocale;
  let format = null;
  let from = locale;
  let to = null;
  const type = 'datetime format';
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (false) {}
    // for vue-devtools timeline event
    if (false) {}
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format = datetimeFormat[key];
    if (isPlainObject(format)) break;
    handleMissing(context, key, targetLocale, missingWarn, type); // eslint-disable-line @typescript-eslint/no-explicit-any
    from = to;
  }
  // checking format and target locale
  if (!isPlainObject(format) || !shared_isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, shared_assign({}, format, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
/** @internal */
const DATETIME_FORMAT_OPTIONS_KEYS = ['localeMatcher', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName', 'formatMatcher', 'hour12', 'timeZone', 'dateStyle', 'timeStyle', 'calendar', 'dayPeriod', 'numberingSystem', 'hourCycle', 'fractionalSecondDigits'];
/** @internal */
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = shared_create();
  let overrides = shared_create();
  let value;
  if (shared_isString(arg1)) {
    // Only allow ISO strings - other date formats are often supported,
    // but may cause different results in different browsers.
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    // Some browsers can not parse the iso datetime separated by space,
    // this is a compromise solution by replace the 'T'/' ' with 'T'
    const dateTime = matches[3] ? matches[3].trim().startsWith('T') ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value = new Date(dateTime);
    try {
      // This will fail if the date is not valid
      value.toISOString();
    } catch {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (isDate(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value = arg1;
  } else if (isNumber(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (shared_isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach(key => {
      if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (shared_isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || '', value, options, overrides];
}
/** @internal */
function clearDateTimeFormat(ctx, locale, format) {
  const context = ctx;
  for (const key in format) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}

// implementation of `number` function
function number(context, ...args) {
  const {
    numberFormats,
    unresolving,
    fallbackLocale,
    onWarn,
    localeFallbacker
  } = context;
  const {
    __numberFormatters
  } = context;
  if (false) {}
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = shared_isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = shared_isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = getLocale(context, options);
  const locales = localeFallbacker(context,
  // eslint-disable-line @typescript-eslint/no-explicit-any
  fallbackLocale, locale);
  if (!shared_isString(key) || key === '') {
    return new Intl.NumberFormat(locale, overrides).format(value);
  }
  // resolve format
  let numberFormat = {};
  let targetLocale;
  let format = null;
  let from = locale;
  let to = null;
  const type = 'number format';
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (false) {}
    // for vue-devtools timeline event
    if (false) {}
    numberFormat = numberFormats[targetLocale] || {};
    format = numberFormat[key];
    if (isPlainObject(format)) break;
    handleMissing(context, key, targetLocale, missingWarn, type); // eslint-disable-line @typescript-eslint/no-explicit-any
    from = to;
  }
  // checking format and target locale
  if (!isPlainObject(format) || !shared_isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, shared_assign({}, format, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
/** @internal */
const NUMBER_FORMAT_OPTIONS_KEYS = ['localeMatcher', 'style', 'currency', 'currencyDisplay', 'currencySign', 'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'compactDisplay', 'notation', 'signDisplay', 'unit', 'unitDisplay', 'roundingMode', 'roundingPriority', 'roundingIncrement', 'trailingZeroDisplay'];
/** @internal */
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = shared_create();
  let overrides = shared_create();
  if (!isNumber(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value = arg1;
  if (shared_isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach(key => {
      if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (shared_isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || '', value, options, overrides];
}
/** @internal */
function clearNumberFormat(ctx, locale, format) {
  const context = ctx;
  for (const key in format) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
const DEFAULT_MODIFIER = str => str;
const DEFAULT_MESSAGE = ctx => ''; // eslint-disable-line
const DEFAULT_MESSAGE_DATA_TYPE = 'text';
const DEFAULT_NORMALIZE = values => values.length === 0 ? '' : join(values);
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    // prettier-ignore
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  // prettier-ignore
  const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
  // prettier-ignore
  return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = shared_isObject(options.pluralRules) && shared_isString(locale) && shared_isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = shared_isObject(options.pluralRules) && shared_isString(locale) && shared_isFunction(options.pluralRules[locale]) ? pluralDefault : undefined;
  const plural = messages => {
    return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
  };
  const _list = options.list || [];
  const list = index => _list[index];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _named = options.named || shared_create();
  isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = key => _named[key];
  function message(key, useLinked) {
    // prettier-ignore
    const msg = shared_isFunction(options.messages) ? options.messages(key, !!useLinked) : shared_isObject(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) // resolve from parent messages
    : DEFAULT_MESSAGE : msg;
  }
  const _modifier = name => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = isPlainObject(options.processor) && shared_isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject(options.processor) && shared_isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = isPlainObject(options.processor) && shared_isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const linked = (key, ...args) => {
    const [arg1, arg2] = args;
    let type = 'text';
    let modifier = '';
    if (args.length === 1) {
      if (shared_isObject(arg1)) {
        modifier = arg1.modifier || modifier;
        type = arg1.type || type;
      } else if (shared_isString(arg1)) {
        modifier = arg1 || modifier;
      }
    } else if (args.length === 2) {
      if (shared_isString(arg1)) {
        modifier = arg1 || modifier;
      }
      if (shared_isString(arg2)) {
        type = arg2 || type;
      }
    }
    const ret = message(key, true)(ctx);
    const msg =
    // The message in vnode resolved with linked are returned as an array by processor.nomalize
    type === 'vnode' && shared_isArray(ret) && modifier ? ret[0] : ret;
    return modifier ? _modifier(modifier)(msg, type) : msg;
  };
  const ctx = {
    ["list" /* HelperNameMap.LIST */]: list,
    ["named" /* HelperNameMap.NAMED */]: named,
    ["plural" /* HelperNameMap.PLURAL */]: plural,
    ["linked" /* HelperNameMap.LINKED */]: linked,
    ["message" /* HelperNameMap.MESSAGE */]: message,
    ["type" /* HelperNameMap.TYPE */]: type,
    ["interpolate" /* HelperNameMap.INTERPOLATE */]: interpolate,
    ["normalize" /* HelperNameMap.NORMALIZE */]: normalize,
    ["values" /* HelperNameMap.VALUES */]: shared_assign(shared_create(), _list, _named)
  };
  return ctx;
}
const NOOP_MESSAGE_FUNCTION = () => '';
const isMessageFunction = val => shared_isFunction(val);
// implementation of `translate` function
function translate(context, ...args) {
  const {
    fallbackFormat,
    postTranslation,
    unresolving,
    messageCompiler,
    fallbackLocale,
    messages
  } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = shared_isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = shared_isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = shared_isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  // prettier-ignore
  const defaultMsgOrKey = shared_isString(options.default) || shared_isBoolean(options.default) // default by function option
  ? !shared_isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat // default by `fallbackFormat` option
  ? !messageCompiler ? () => key : key : null;
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey != null && (shared_isString(defaultMsgOrKey) || shared_isFunction(defaultMsgOrKey));
  const locale = getLocale(context, options);
  // escape params
  escapeParameter && escapeParams(options);
  // resolve message format
  // eslint-disable-next-line prefer-const
  let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [key, locale, messages[locale] || shared_create()];
  // NOTE:
  //  Fix to work around `ssrTransfrom` bug in Vite.
  //  https://github.com/vitejs/vite/issues/4306
  //  To get around this, use temporary variables.
  //  https://github.com/nuxt/framework/issues/1461#issuecomment-954606243
  let format = formatScope;
  // if you use default message, set it as message format!
  let cacheBaseKey = key;
  if (!resolvedMessage && !(shared_isString(format) || core_base_isMessageAST(format) || isMessageFunction(format))) {
    if (enableDefaultMsg) {
      format = defaultMsgOrKey;
      cacheBaseKey = format;
    }
  }
  // checking message format and target locale
  if (!resolvedMessage && (!(shared_isString(format) || core_base_isMessageAST(format) || isMessageFunction(format)) || !shared_isString(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  // TODO: refactor
  if (false) {}
  // setup compile error detecting
  let occurred = false;
  const onError = () => {
    occurred = true;
  };
  // compile message format
  const msg = !isMessageFunction(format) ? compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, onError) : format;
  // if occurred compile error, return the message format
  if (occurred) {
    return format;
  }
  // evaluate message with context
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  // if use post translation option, proceed it with handler
  const ret = postTranslation ? postTranslation(messaged, key) : messaged;
  // NOTE: experimental !!
  if ( false || __INTLIFY_PROD_DEVTOOLS__) {
    // prettier-ignore
    const payloads = {
      timestamp: Date.now(),
      key: shared_isString(key) ? key : isMessageFunction(format) ? format.key : '',
      locale: targetLocale || (isMessageFunction(format) ? format.locale : ''),
      format: shared_isString(format) ? format : isMessageFunction(format) ? format.source : '',
      message: ret
    };
    payloads.meta = shared_assign({}, context.__meta, getAdditionalMeta() || {});
    translateDevTools(payloads);
  }
  return ret;
}
function escapeParams(options) {
  if (shared_isArray(options.list)) {
    options.list = options.list.map(item => shared_isString(item) ? escapeHtml(item) : item);
  } else if (shared_isObject(options.named)) {
    Object.keys(options.named).forEach(key => {
      if (shared_isString(options.named[key])) {
        options.named[key] = escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const {
    messages,
    onWarn,
    messageResolver: resolveValue,
    localeFallbacker
  } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale); // eslint-disable-line @typescript-eslint/no-explicit-any
  let message = shared_create();
  let targetLocale;
  let format = null;
  let from = locale;
  let to = null;
  const type = 'translate';
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (false) {}
    // for vue-devtools timeline event
    if (false) {}
    message = messages[targetLocale] || shared_create();
    // for vue-devtools timeline event
    let start = null;
    let startTag;
    let endTag;
    if (false) {}
    if ((format = resolveValue(message, key)) === null) {
      // if null, resolve with object key path
      format = message[key]; // eslint-disable-line @typescript-eslint/no-explicit-any
    }
    // for vue-devtools timeline event
    if (false) {}
    if (shared_isString(format) || core_base_isMessageAST(format) || isMessageFunction(format)) {
      break;
    }
    if (!isImplicitFallback(targetLocale, locales)) {
      const missingRet = handleMissing(context,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      key, targetLocale, missingWarn, type);
      if (missingRet !== key) {
        format = missingRet;
      }
    }
    from = to;
  }
  return [format, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, onError) {
  const {
    messageCompiler,
    warnHtmlMessage
  } = context;
  if (isMessageFunction(format)) {
    const msg = format;
    msg.locale = msg.locale || targetLocale;
    msg.key = msg.key || key;
    return msg;
  }
  if (messageCompiler == null) {
    const msg = () => format;
    msg.locale = targetLocale;
    msg.key = key;
    return msg;
  }
  // for vue-devtools timeline event
  let start = null;
  let startTag;
  let endTag;
  if (false) {}
  const msg = messageCompiler(format, getCompileContext(context, targetLocale, cacheBaseKey, format, warnHtmlMessage, onError));
  // for vue-devtools timeline event
  if (false) {}
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  // for vue-devtools timeline event
  let start = null;
  let startTag;
  let endTag;
  if (false) {}
  const messaged = msg(msgCtx);
  // for vue-devtools timeline event
  if (false) {}
  return messaged;
}
/** @internal */
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = shared_create();
  if (!shared_isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1) && !core_base_isMessageAST(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  // prettier-ignore
  const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber(arg2)) {
    options.plural = arg2;
  } else if (shared_isString(arg2)) {
    options.default = arg2;
  } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (shared_isArray(arg2)) {
    options.list = arg2;
  }
  if (isNumber(arg3)) {
    options.plural = arg3;
  } else if (shared_isString(arg3)) {
    options.default = arg3;
  } else if (isPlainObject(arg3)) {
    shared_assign(options, arg3);
  }
  return [key, options];
}
function getCompileContext(context, locale, key, source, warnHtmlMessage, onError) {
  return {
    locale,
    key,
    warnHtmlMessage,
    onError: err => {
      onError && onError(err);
      if (false) {} else {
        throw err;
      }
    },
    onCacheKey: source => generateFormatCacheKey(locale, key, source)
  };
}
function getSourceForCodeFrame(source) {
  if (isString(source)) {
    return source;
  } else {
    if (source.loc && source.loc.source) {
      return source.loc.source;
    }
  }
}
function getMessageContextOptions(context, locale, message, options) {
  const {
    modifiers,
    pluralRules,
    messageResolver: resolveValue,
    fallbackLocale,
    fallbackWarn,
    missingWarn,
    fallbackContext
  } = context;
  const resolveMessage = (key, useLinked) => {
    let val = resolveValue(message, key);
    // fallback
    if (val == null && (fallbackContext || useLinked)) {
      const [,, message] = resolveMessageFormat(fallbackContext || context,
      // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
      key, locale, fallbackLocale, fallbackWarn, missingWarn);
      val = resolveValue(message, key);
    }
    if (shared_isString(val) || core_base_isMessageAST(val)) {
      let occurred = false;
      const onError = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, onError);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      // TODO: should be implemented warning message
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
{
  initFeatureFlags();
}

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6768);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(144);
;// ./node_modules/vue-i18n/dist/vue-i18n.mjs







/*!
  * vue-i18n v11.0.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */





/**
 * Vue I18n Version
 *
 * @remarks
 * Semver format. Same format as the package.json `version` field.
 *
 * @VueI18nGeneral
 */
const vue_i18n_VERSION = '11.0.1';
/**
 * This is only called in esm-bundler builds.
 * istanbul-ignore-next
 */
function vue_i18n_initFeatureFlags() {
  if (typeof __VUE_I18N_FULL_INSTALL__ !== 'boolean') {
    getGlobalThis().__VUE_I18N_FULL_INSTALL__ = true;
  }
  if (typeof __VUE_I18N_LEGACY_API__ !== 'boolean') {
    getGlobalThis().__VUE_I18N_LEGACY_API__ = true;
  }
  if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== 'boolean') {
    getGlobalThis().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
  }
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== 'boolean') {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
const I18nErrorCodes = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: CORE_ERROR_CODES_EXTEND_POINT,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive module errors
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32,
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function createI18nError(code, ...args) {
  return createCompileError(code, null,  false ? 0 : undefined);
}
const vue_i18n_errorMessages = {
  [I18nErrorCodes.UNEXPECTED_RETURN_TYPE]: 'Unexpected return type in composer',
  [I18nErrorCodes.INVALID_ARGUMENT]: 'Invalid argument',
  [I18nErrorCodes.MUST_BE_CALL_SETUP_TOP]: 'Must be called at the top of a `setup` function',
  [I18nErrorCodes.NOT_INSTALLED]: 'Need to install with `app.use` function',
  [I18nErrorCodes.UNEXPECTED_ERROR]: 'Unexpected error',
  [I18nErrorCodes.REQUIRED_VALUE]: `Required in value: {0}`,
  [I18nErrorCodes.INVALID_VALUE]: `Invalid value`,
  [I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: `Cannot setup vue-devtools plugin`,
  [I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE]: 'Need to install with `provide` function',
  [I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N]: 'Not compatible legacy VueI18n.',
  [I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: 'Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly'
};
const TranslateVNodeSymbol = /* #__PURE__*/shared_makeSymbol('__translateVNode');
const DatetimePartsSymbol = /* #__PURE__*/shared_makeSymbol('__datetimeParts');
const NumberPartsSymbol = /* #__PURE__*/shared_makeSymbol('__numberParts');
const EnableEmitter = /* #__PURE__*/(/* unused pure expression or super */ null && (makeSymbol('__enableEmitter')));
const DisableEmitter = /* #__PURE__*/(/* unused pure expression or super */ null && (makeSymbol('__disableEmitter')));
const SetPluralRulesSymbol = shared_makeSymbol('__setPluralRules');
shared_makeSymbol('__intlifyMeta');
const InejctWithOptionSymbol = /* #__PURE__*/shared_makeSymbol('__injectWithOption');
const DisposeSymbol = /* #__PURE__*/shared_makeSymbol('__dispose');
const I18nWarnCodes = {
  FALLBACK_TO_ROOT: CORE_WARN_CODES_EXTEND_POINT,
  // 8
  NOT_FOUND_PARENT_SCOPE: 9,
  IGNORE_OBJ_FLATTEN: 10,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  DEPRECATE_LEGACY_MODE: 11,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 12
};
const vue_i18n_warnMessages = {
  [I18nWarnCodes.FALLBACK_TO_ROOT]: `Fall back to {type} '{key}' with root locale.`,
  [I18nWarnCodes.NOT_FOUND_PARENT_SCOPE]: `Not found parent scope. use the global scope.`,
  [I18nWarnCodes.IGNORE_OBJ_FLATTEN]: `Ignore object flatten: '{key}' key has an string value`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [I18nWarnCodes.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.\nAbout how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [I18nWarnCodes.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: `'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.`
};
function vue_i18n_getWarnMessage(code, ...args) {
  return format(vue_i18n_warnMessages[code], ...args);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Transform flat json in obj to normal json in obj
 */
function handleFlatJson(obj) {
  // check obj
  if (!shared_isObject(obj)) {
    return obj;
  }
  for (const key in obj) {
    // check key
    if (!hasOwn(obj, key)) {
      continue;
    }
    // handle for normal json
    if (!key.includes('.')) {
      // recursive process value if value is also a object
      if (shared_isObject(obj[key])) {
        handleFlatJson(obj[key]);
      }
    }
    // handle for flat json, transform to normal json
    else {
      // go to the last object
      const subKeys = key.split('.');
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      let hasStringValue = false;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = shared_create();
        }
        if (!shared_isObject(currentObj[subKeys[i]])) {
           false && 0;
          hasStringValue = true;
          break;
        }
        currentObj = currentObj[subKeys[i]];
      }
      // update last object value, delete old property
      if (!hasStringValue) {
        currentObj[subKeys[lastIndex]] = obj[key];
        delete obj[key];
      }
      // recursive process value if value is also a object
      if (shared_isObject(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const {
    messages,
    __i18n,
    messageResolver,
    flatJson
  } = options;
  // prettier-ignore
  const ret = isPlainObject(messages) ? messages : shared_isArray(__i18n) ? shared_create() : {
    [locale]: shared_create()
  };
  // merge locale messages of i18n custom block
  if (shared_isArray(__i18n)) {
    __i18n.forEach(custom => {
      if ('locale' in custom && 'resource' in custom) {
        const {
          locale,
          resource
        } = custom;
        if (locale) {
          ret[locale] = ret[locale] || shared_create();
          deepCopy(resource, ret[locale]);
        } else {
          deepCopy(resource, ret);
        }
      } else {
        shared_isString(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  // handle messages for flat json
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(gl, options, componentOptions) {
  // prettier-ignore
  let messages = shared_isObject(options.messages) ? options.messages : shared_create();
  if ('__i18nGlobal' in componentOptions) {
    messages = getLocaleMessages(gl.locale.value, {
      messages,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  // merge locale messages
  const locales = Object.keys(messages);
  if (locales.length) {
    locales.forEach(locale => {
      gl.mergeLocaleMessage(locale, messages[locale]);
    });
  }
  {
    // merge datetime formats
    if (shared_isObject(options.datetimeFormats)) {
      const locales = Object.keys(options.datetimeFormats);
      if (locales.length) {
        locales.forEach(locale => {
          gl.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    // merge number formats
    if (shared_isObject(options.numberFormats)) {
      const locales = Object.keys(options.numberFormats);
      if (locales.length) {
        locales.forEach(locale => {
          gl.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Text */.EY, null, key, 0);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
// extend VNode interface
const DEVTOOLS_META = '__INTLIFY_META__';
const NOOP_RETURN_ARRAY = () => [];
const NOOP_RETURN_FALSE = () => false;
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, (0,runtime_core_esm_bundler/* getCurrentInstance */.nI)() || undefined, type);
  };
}
// for Intlify DevTools
/* #__NO_SIDE_EFFECTS__ */
const getMetaInfo = () => {
  const instance = (0,runtime_core_esm_bundler/* getCurrentInstance */.nI)();
  let meta = null;
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? {
    [DEVTOOLS_META]: meta
  } : null;
};
/**
 * Create composer interface factory
 *
 * @internal
 */
function createComposer(options = {}) {
  const {
    __root,
    __injectWithOption
  } = options;
  const _isGlobal = __root === undefined;
  const flatJson = options.flatJson;
  const _ref = inBrowser ? reactivity_esm_bundler/* ref */.KR : reactivity_esm_bundler/* shallowRef */.IJ;
  let _inheritLocale = shared_isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = _ref(
  // prettier-ignore
  __root && _inheritLocale ? __root.locale.value : shared_isString(options.locale) ? options.locale : DEFAULT_LOCALE);
  const _fallbackLocale = _ref(
  // prettier-ignore
  __root && _inheritLocale ? __root.fallbackLocale.value : shared_isString(options.fallbackLocale) || shared_isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
  const _messages = _ref(getLocaleMessages(_locale.value, options));
  // prettier-ignore
  const _datetimeFormats = _ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : {
    [_locale.value]: {}
  });
  // prettier-ignore
  const _numberFormats = _ref(isPlainObject(options.numberFormats) ? options.numberFormats : {
    [_locale.value]: {}
  });
  // warning suppress options
  // prettier-ignore
  let _missingWarn = __root ? __root.missingWarn : shared_isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  // prettier-ignore
  let _fallbackWarn = __root ? __root.fallbackWarn : shared_isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  // prettier-ignore
  let _fallbackRoot = __root ? __root.fallbackRoot : shared_isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  // configure fall back to root
  let _fallbackFormat = !!options.fallbackFormat;
  // runtime missing
  let _missing = shared_isFunction(options.missing) ? options.missing : null;
  let _runtimeMissing = shared_isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  // postTranslation handler
  let _postTranslation = shared_isFunction(options.postTranslation) ? options.postTranslation : null;
  // prettier-ignore
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : shared_isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  // custom linked modifiers
  // prettier-ignore
  const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  // pluralRules
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  // runtime context
  // eslint-disable-next-line prefer-const
  let _context;
  const getCoreContext = () => {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: vue_i18n_VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? undefined : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? undefined : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      messageCompiler: options.messageCompiler,
      __meta: {
        framework: 'vue'
      }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : undefined;
      ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : undefined;
    }
    if (false) {}
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  };
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  // track reactivity
  function trackReactivityValues() {
    return [_locale.value, _fallbackLocale.value, _messages.value, _datetimeFormats.value, _numberFormats.value];
  }
  // locale
  const locale = (0,runtime_core_esm_bundler/* computed */.EW)({
    get: () => _locale.value,
    set: val => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  // fallbackLocale
  const fallbackLocale = (0,runtime_core_esm_bundler/* computed */.EW)({
    get: () => _fallbackLocale.value,
    set: val => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  // messages
  const messages = (0,runtime_core_esm_bundler/* computed */.EW)(() => _messages.value);
  // datetimeFormats
  const datetimeFormats = /* #__PURE__*/(0,runtime_core_esm_bundler/* computed */.EW)(() => _datetimeFormats.value);
  // numberFormats
  const numberFormats = /* #__PURE__*/(0,runtime_core_esm_bundler/* computed */.EW)(() => _numberFormats.value);
  // getPostTranslationHandler
  function getPostTranslationHandler() {
    return shared_isFunction(_postTranslation) ? _postTranslation : null;
  }
  // setPostTranslationHandler
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  // getMissingHandler
  function getMissingHandler() {
    return _missing;
  }
  // setMissingHandler
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  function isResolvedTranslateMessage(type, arg) {
    return type !== 'translate' || !arg.resolvedMessage;
  }
  const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues(); // track reactive dependency
    // NOTE: experimental !!
    let ret;
    try {
      if ( false || __INTLIFY_PROD_DEVTOOLS__) {
        setAdditionalMeta(getMetaInfo());
      }
      if (!_isGlobal) {
        _context.fallbackContext = __root ? getFallbackContext() : undefined;
      }
      ret = fn(_context);
    } finally {
      if ( false || __INTLIFY_PROD_DEVTOOLS__) {
        setAdditionalMeta(null);
      }
      if (!_isGlobal) {
        _context.fallbackContext = undefined;
      }
    }
    if (warnType !== 'translate exists' &&
    // for not `te` (e.g `t`)
    isNumber(ret) && ret === NOT_REOSLVED || warnType === 'translate exists' && !ret // for `te`
    ) {
      const [key, arg2] = argumentParser();
      if (false) {}
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      /* istanbul ignore next */
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  // t
  function t(...args) {
    return wrapWithDeps(context => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), 'translate', root => Reflect.apply(root.t, root, [...args]), key => key, val => shared_isString(val));
  }
  // rt
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !shared_isObject(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t(...[arg1, arg2, shared_assign({
      resolvedMessage: true
    }, arg3 || {})]);
  }
  // d
  function d(...args) {
    return wrapWithDeps(context => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), 'datetime format', root => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, val => shared_isString(val));
  }
  // n
  function n(...args) {
    return wrapWithDeps(context => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), 'number format', root => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, val => shared_isString(val));
  }
  // for custom processor
  function normalize(values) {
    return values.map(val => shared_isString(val) || isNumber(val) || shared_isBoolean(val) ? createTextNode(String(val)) : val);
  }
  const interpolate = val => val;
  const processor = {
    normalize,
    interpolate,
    type: 'vnode'
  };
  // translateVNode, using for `i18n-t` component
  function translateVNode(...args) {
    return wrapWithDeps(context => {
      let ret;
      const _context = context;
      try {
        _context.processor = processor;
        ret = Reflect.apply(translate, null, [_context, ...args]);
      } finally {
        _context.processor = null;
      }
      return ret;
    }, () => parseTranslateArgs(...args), 'translate', root => root[TranslateVNodeSymbol](...args), key => [createTextNode(key)], val => shared_isArray(val));
  }
  // numberParts, using for `i18n-n` component
  function numberParts(...args) {
    return wrapWithDeps(context => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), 'number format', root => root[NumberPartsSymbol](...args), NOOP_RETURN_ARRAY, val => shared_isString(val) || shared_isArray(val));
  }
  // datetimeParts, using for `i18n-d` component
  function datetimeParts(...args) {
    return wrapWithDeps(context => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), 'datetime format', root => root[DatetimePartsSymbol](...args), NOOP_RETURN_ARRAY, val => shared_isString(val) || shared_isArray(val));
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  // te
  function te(key, locale) {
    return wrapWithDeps(() => {
      if (!key) {
        return false;
      }
      const targetLocale = shared_isString(locale) ? locale : _locale.value;
      const message = getLocaleMessage(targetLocale);
      const resolved = _context.messageResolver(message, key);
      return core_base_isMessageAST(resolved) || isMessageFunction(resolved) || shared_isString(resolved);
    }, () => [key], 'translate exists', root => {
      return Reflect.apply(root.te, root, [key, locale]);
    }, NOOP_RETURN_FALSE, val => shared_isBoolean(val));
  }
  function resolveMessages(key) {
    let messages = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages = messageValue;
        break;
      }
    }
    return messages;
  }
  // tm
  function tm(key) {
    const messages = resolveMessages(key);
    // prettier-ignore
    return messages != null ? messages : __root ? __root.tm(key) || {} : {};
  }
  // getLocaleMessage
  function getLocaleMessage(locale) {
    return _messages.value[locale] || {};
  }
  // setLocaleMessage
  function setLocaleMessage(locale, message) {
    if (flatJson) {
      const _message = {
        [locale]: message
      };
      for (const key in _message) {
        if (hasOwn(_message, key)) {
          handleFlatJson(_message[key]);
        }
      }
      message = _message[locale];
    }
    _messages.value[locale] = message;
    _context.messages = _messages.value;
  }
  // mergeLocaleMessage
  function mergeLocaleMessage(locale, message) {
    _messages.value[locale] = _messages.value[locale] || {};
    const _message = {
      [locale]: message
    };
    if (flatJson) {
      for (const key in _message) {
        if (hasOwn(_message, key)) {
          handleFlatJson(_message[key]);
        }
      }
    }
    message = _message[locale];
    deepCopy(message, _messages.value[locale]);
    _context.messages = _messages.value;
  }
  // getDateTimeFormat
  function getDateTimeFormat(locale) {
    return _datetimeFormats.value[locale] || {};
  }
  // setDateTimeFormat
  function setDateTimeFormat(locale, format) {
    _datetimeFormats.value[locale] = format;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale, format);
  }
  // mergeDateTimeFormat
  function mergeDateTimeFormat(locale, format) {
    _datetimeFormats.value[locale] = shared_assign(_datetimeFormats.value[locale] || {}, format);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale, format);
  }
  // getNumberFormat
  function getNumberFormat(locale) {
    return _numberFormats.value[locale] || {};
  }
  // setNumberFormat
  function setNumberFormat(locale, format) {
    _numberFormats.value[locale] = format;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale, format);
  }
  // mergeNumberFormat
  function mergeNumberFormat(locale, format) {
    _numberFormats.value[locale] = shared_assign(_numberFormats.value[locale] || {}, format);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale, format);
  }
  // for debug
  composerID++;
  // watch root locale & fallbackLocale
  if (__root && inBrowser) {
    (0,runtime_core_esm_bundler/* watch */.wB)(__root.locale, val => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    (0,runtime_core_esm_bundler/* watch */.wB)(__root.fallbackLocale, val => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  // define basic composition API!
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d;
    composer.n = n;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOptionSymbol] = __injectWithOption;
    composer[TranslateVNodeSymbol] = translateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  // for vue-devtools timeline event
  if (false) {}
  return composer;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const VUE_I18N_COMPONENT_TYPES = 'vue-i18n: composer properties';
const VueDevToolsLabels = {
  'vue-devtools-plugin-vue-i18n': 'Vue I18n DevTools',
  'vue-i18n-resource-inspector': 'Vue I18n DevTools',
  'vue-i18n-timeline': 'Vue I18n'
};
const VueDevToolsPlaceholders = {
  'vue-i18n-resource-inspector': 'Search for scopes ...'
};
const VueDevToolsTimelineColors = {
  'vue-i18n-timeline': 0xffcd19
};
let devtoolsApi;
async function enableDevTools(app, i18n) {
  return new Promise((resolve, reject) => {
    try {
      setupDevtoolsPlugin({
        id: 'vue-devtools-plugin-vue-i18n',
        label: VueDevToolsLabels['vue-devtools-plugin-vue-i18n'],
        packageName: 'vue-i18n',
        homepage: 'https://vue-i18n.intlify.dev',
        logo: 'https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png',
        componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
        app: app // eslint-disable-line @typescript-eslint/no-explicit-any
      }, api => {
        devtoolsApi = api;
        api.on.visitComponentTree(({
          componentInstance,
          treeNode
        }) => {
          updateComponentTreeTags(componentInstance, treeNode, i18n);
        });
        api.on.inspectComponent(({
          componentInstance,
          instanceData
        }) => {
          if (componentInstance.vnode.el && componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
            if (i18n.mode === 'legacy') {
              // ignore global scope on legacy mode
              if (componentInstance.vnode.el.__VUE_I18N__ !== i18n.global.__composer) {
                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
              }
            } else {
              inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
            }
          }
        });
        api.addInspector({
          id: 'vue-i18n-resource-inspector',
          label: VueDevToolsLabels['vue-i18n-resource-inspector'],
          icon: 'language',
          treeFilterPlaceholder: VueDevToolsPlaceholders['vue-i18n-resource-inspector']
        });
        api.on.getInspectorTree(payload => {
          if (payload.app === app && payload.inspectorId === 'vue-i18n-resource-inspector') {
            registerScope(payload, i18n);
          }
        });
        const roots = new Map();
        api.on.getInspectorState(async payload => {
          if (payload.app === app && payload.inspectorId === 'vue-i18n-resource-inspector') {
            api.unhighlightElement();
            inspectScope(payload, i18n);
            if (payload.nodeId === 'global') {
              if (!roots.has(payload.app)) {
                const [root] = await api.getComponentInstances(payload.app);
                roots.set(payload.app, root);
              }
              api.highlightElement(roots.get(payload.app));
            } else {
              const instance = getComponentInstance(payload.nodeId, i18n);
              instance && api.highlightElement(instance);
            }
          }
        });
        api.on.editInspectorState(payload => {
          if (payload.app === app && payload.inspectorId === 'vue-i18n-resource-inspector') {
            editScope(payload, i18n);
          }
        });
        api.addTimelineLayer({
          id: 'vue-i18n-timeline',
          label: VueDevToolsLabels['vue-i18n-timeline'],
          color: VueDevToolsTimelineColors['vue-i18n-timeline']
        });
        resolve(true);
      });
    } catch (e) {
      console.error(e);
      // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
      reject(false);
    }
  });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getI18nScopeLable(instance) {
  return instance.type.name || instance.type.displayName || instance.type.__file || 'Anonymous';
}
function updateComponentTreeTags(instance,
// eslint-disable-line @typescript-eslint/no-explicit-any
treeNode, i18n) {
  // prettier-ignore
  const global = i18n.mode === 'composition' ? i18n.global : i18n.global.__composer;
  if (instance && instance.vnode.el && instance.vnode.el.__VUE_I18N__) {
    // add custom tags local scope only
    if (instance.vnode.el.__VUE_I18N__ !== global) {
      const tag = {
        label: `i18n (${getI18nScopeLable(instance)} Scope)`,
        textColor: 0x000000,
        backgroundColor: 0xffcd19
      };
      treeNode.tags.push(tag);
    }
  }
}
function inspectComposer(instanceData, composer) {
  const type = VUE_I18N_COMPONENT_TYPES;
  instanceData.state.push({
    type,
    key: 'locale',
    editable: true,
    value: composer.locale.value
  });
  instanceData.state.push({
    type,
    key: 'availableLocales',
    editable: false,
    value: composer.availableLocales
  });
  instanceData.state.push({
    type,
    key: 'fallbackLocale',
    editable: true,
    value: composer.fallbackLocale.value
  });
  instanceData.state.push({
    type,
    key: 'inheritLocale',
    editable: true,
    value: composer.inheritLocale
  });
  instanceData.state.push({
    type,
    key: 'messages',
    editable: false,
    value: getLocaleMessageValue(composer.messages.value)
  });
  {
    instanceData.state.push({
      type,
      key: 'datetimeFormats',
      editable: false,
      value: composer.datetimeFormats.value
    });
    instanceData.state.push({
      type,
      key: 'numberFormats',
      editable: false,
      value: composer.numberFormats.value
    });
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getLocaleMessageValue(messages) {
  const value = {};
  Object.keys(messages).forEach(key => {
    const v = messages[key];
    if (isFunction(v) && 'source' in v) {
      value[key] = getMessageFunctionDetails(v);
    } else if (isMessageAST(v) && v.loc && v.loc.source) {
      value[key] = v.loc.source;
    } else if (isObject(v)) {
      value[key] = getLocaleMessageValue(v);
    } else {
      value[key] = v;
    }
  });
  return value;
}
const ESC = {
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '&': '&amp;'
};
function vue_i18n_escape(s) {
  return s.replace(/[<>"&]/g, escapeChar);
}
function escapeChar(a) {
  return ESC[a] || a;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getMessageFunctionDetails(func) {
  const argString = func.source ? `("${vue_i18n_escape(func.source)}")` : `(?)`;
  return {
    _custom: {
      type: 'function',
      display: `<span>ƒ</span> ${argString}`
    }
  };
}
function registerScope(payload, i18n) {
  payload.rootNodes.push({
    id: 'global',
    label: 'Global Scope'
  });
  // prettier-ignore
  const global = i18n.mode === 'composition' ? i18n.global : i18n.global.__composer;
  for (const [keyInstance, instance] of i18n.__instances) {
    // prettier-ignore
    const composer = i18n.mode === 'composition' ? instance : instance.__composer;
    if (global === composer) {
      continue;
    }
    payload.rootNodes.push({
      id: composer.id.toString(),
      label: `${getI18nScopeLable(keyInstance)} Scope`
    });
  }
}
function getComponentInstance(nodeId, i18n) {
  let instance = null;
  if (nodeId !== 'global') {
    for (const [component, composer] of i18n.__instances.entries()) {
      if (composer.id.toString() === nodeId) {
        instance = component;
        break;
      }
    }
  }
  return instance;
}
function getComposer$2(nodeId, i18n) {
  if (nodeId === 'global') {
    return i18n.mode === 'composition' ? i18n.global : i18n.global.__composer;
  } else {
    const instance = Array.from(i18n.__instances.values()).find(item => item.id.toString() === nodeId);
    if (instance) {
      return i18n.mode === 'composition' ? instance : instance.__composer;
    } else {
      return null;
    }
  }
}
function inspectScope(payload, i18n
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
  const composer = getComposer$2(payload.nodeId, i18n);
  if (composer) {
    // TODO:
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload.state = makeScopeInspectState(composer);
  }
  return null;
}
function makeScopeInspectState(composer) {
  const state = {};
  const localeType = 'Locale related info';
  const localeStates = [{
    type: localeType,
    key: 'locale',
    editable: true,
    value: composer.locale.value
  }, {
    type: localeType,
    key: 'fallbackLocale',
    editable: true,
    value: composer.fallbackLocale.value
  }, {
    type: localeType,
    key: 'availableLocales',
    editable: false,
    value: composer.availableLocales
  }, {
    type: localeType,
    key: 'inheritLocale',
    editable: true,
    value: composer.inheritLocale
  }];
  state[localeType] = localeStates;
  const localeMessagesType = 'Locale messages info';
  const localeMessagesStates = [{
    type: localeMessagesType,
    key: 'messages',
    editable: false,
    value: getLocaleMessageValue(composer.messages.value)
  }];
  state[localeMessagesType] = localeMessagesStates;
  {
    const datetimeFormatsType = 'Datetime formats info';
    const datetimeFormatsStates = [{
      type: datetimeFormatsType,
      key: 'datetimeFormats',
      editable: false,
      value: composer.datetimeFormats.value
    }];
    state[datetimeFormatsType] = datetimeFormatsStates;
    const numberFormatsType = 'Datetime formats info';
    const numberFormatsStates = [{
      type: numberFormatsType,
      key: 'numberFormats',
      editable: false,
      value: composer.numberFormats.value
    }];
    state[numberFormatsType] = numberFormatsStates;
  }
  return state;
}
function addTimelineEvent(event, payload) {
  if (devtoolsApi) {
    let groupId;
    if (payload && 'groupId' in payload) {
      groupId = payload.groupId;
      delete payload.groupId;
    }
    devtoolsApi.addTimelineEvent({
      layerId: 'vue-i18n-timeline',
      event: {
        title: event,
        groupId,
        time: Date.now(),
        meta: {},
        data: payload || {},
        logType: event === 'compile-error' ? 'error' : event === 'fallback' || event === 'missing' ? 'warning' : 'default'
      }
    });
  }
}
function editScope(payload, i18n) {
  const composer = getComposer$2(payload.nodeId, i18n);
  if (composer) {
    const [field] = payload.path;
    if (field === 'locale' && isString(payload.state.value)) {
      composer.locale.value = payload.state.value;
    } else if (field === 'fallbackLocale' && (isString(payload.state.value) || isArray(payload.state.value) || isObject(payload.state.value))) {
      composer.fallbackLocale.value = payload.state.value;
    } else if (field === 'inheritLocale' && isBoolean(payload.state.value)) {
      composer.inheritLocale = payload.state.value;
    }
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Convert to I18n Composer Options from VueI18n Options
 *
 * @internal
 */
function convertComposerOptions(options) {
  const locale = shared_isString(options.locale) ? options.locale : DEFAULT_LOCALE;
  const fallbackLocale = shared_isString(options.fallbackLocale) || shared_isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const missing = shared_isFunction(options.missing) ? options.missing : undefined;
  const missingWarn = shared_isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
  const fallbackWarn = shared_isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
  const fallbackRoot = shared_isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  const fallbackFormat = !!options.formatFallbackMessages;
  const modifiers = isPlainObject(options.modifiers) ? options.modifiers : {};
  const pluralizationRules = options.pluralizationRules;
  const postTranslation = shared_isFunction(options.postTranslation) ? options.postTranslation : undefined;
  const warnHtmlMessage = shared_isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== 'off' : true;
  const escapeParameter = !!options.escapeParameterHtml;
  const inheritLocale = shared_isBoolean(options.sync) ? options.sync : true;
  let messages = options.messages;
  if (isPlainObject(options.sharedMessages)) {
    const sharedMessages = options.sharedMessages;
    const locales = Object.keys(sharedMessages);
    messages = locales.reduce((messages, locale) => {
      const message = messages[locale] || (messages[locale] = {});
      shared_assign(message, sharedMessages[locale]);
      return messages;
    }, messages || {});
  }
  const {
    __i18n,
    __root,
    __injectWithOption
  } = options;
  const datetimeFormats = options.datetimeFormats;
  const numberFormats = options.numberFormats;
  const flatJson = options.flatJson;
  return {
    locale,
    fallbackLocale,
    messages,
    flatJson,
    datetimeFormats,
    numberFormats,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackRoot,
    fallbackFormat,
    modifiers,
    pluralRules: pluralizationRules,
    postTranslation,
    warnHtmlMessage,
    escapeParameter,
    messageResolver: options.messageResolver,
    inheritLocale,
    __i18n,
    __root,
    __injectWithOption
  };
}
/**
 * create VueI18n interface factory
 *
 * @internal
 *
 * @deprecated will be removed at vue-i18n v12
 */
function createVueI18n(options = {}) {
  const composer = createComposer(convertComposerOptions(options));
  const {
    __extender
  } = options;
  // defines VueI18n
  const vueI18n = {
    // id
    id: composer.id,
    // locale
    get locale() {
      return composer.locale.value;
    },
    set locale(val) {
      composer.locale.value = val;
    },
    // fallbackLocale
    get fallbackLocale() {
      return composer.fallbackLocale.value;
    },
    set fallbackLocale(val) {
      composer.fallbackLocale.value = val;
    },
    // messages
    get messages() {
      return composer.messages.value;
    },
    // datetimeFormats
    get datetimeFormats() {
      return composer.datetimeFormats.value;
    },
    // numberFormats
    get numberFormats() {
      return composer.numberFormats.value;
    },
    // availableLocales
    get availableLocales() {
      return composer.availableLocales;
    },
    // missing
    get missing() {
      return composer.getMissingHandler();
    },
    set missing(handler) {
      composer.setMissingHandler(handler);
    },
    // silentTranslationWarn
    get silentTranslationWarn() {
      return shared_isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
    },
    set silentTranslationWarn(val) {
      composer.missingWarn = shared_isBoolean(val) ? !val : val;
    },
    // silentFallbackWarn
    get silentFallbackWarn() {
      return shared_isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
    },
    set silentFallbackWarn(val) {
      composer.fallbackWarn = shared_isBoolean(val) ? !val : val;
    },
    // modifiers
    get modifiers() {
      return composer.modifiers;
    },
    // formatFallbackMessages
    get formatFallbackMessages() {
      return composer.fallbackFormat;
    },
    set formatFallbackMessages(val) {
      composer.fallbackFormat = val;
    },
    // postTranslation
    get postTranslation() {
      return composer.getPostTranslationHandler();
    },
    set postTranslation(handler) {
      composer.setPostTranslationHandler(handler);
    },
    // sync
    get sync() {
      return composer.inheritLocale;
    },
    set sync(val) {
      composer.inheritLocale = val;
    },
    // warnInHtmlMessage
    get warnHtmlInMessage() {
      return composer.warnHtmlMessage ? 'warn' : 'off';
    },
    set warnHtmlInMessage(val) {
      composer.warnHtmlMessage = val !== 'off';
    },
    // escapeParameterHtml
    get escapeParameterHtml() {
      return composer.escapeParameter;
    },
    set escapeParameterHtml(val) {
      composer.escapeParameter = val;
    },
    // pluralizationRules
    get pluralizationRules() {
      return composer.pluralRules || {};
    },
    // for internal
    __composer: composer,
    // t
    t(...args) {
      return Reflect.apply(composer.t, composer, [...args]);
    },
    // rt
    rt(...args) {
      return Reflect.apply(composer.rt, composer, [...args]);
    },
    // te
    te(key, locale) {
      return composer.te(key, locale);
    },
    // tm
    tm(key) {
      return composer.tm(key);
    },
    // getLocaleMessage
    getLocaleMessage(locale) {
      return composer.getLocaleMessage(locale);
    },
    // setLocaleMessage
    setLocaleMessage(locale, message) {
      composer.setLocaleMessage(locale, message);
    },
    // mergeLocaleMessage
    mergeLocaleMessage(locale, message) {
      composer.mergeLocaleMessage(locale, message);
    },
    // d
    d(...args) {
      return Reflect.apply(composer.d, composer, [...args]);
    },
    // getDateTimeFormat
    getDateTimeFormat(locale) {
      return composer.getDateTimeFormat(locale);
    },
    // setDateTimeFormat
    setDateTimeFormat(locale, format) {
      composer.setDateTimeFormat(locale, format);
    },
    // mergeDateTimeFormat
    mergeDateTimeFormat(locale, format) {
      composer.mergeDateTimeFormat(locale, format);
    },
    // n
    n(...args) {
      return Reflect.apply(composer.n, composer, [...args]);
    },
    // getNumberFormat
    getNumberFormat(locale) {
      return composer.getNumberFormat(locale);
    },
    // setNumberFormat
    setNumberFormat(locale, format) {
      composer.setNumberFormat(locale, format);
    },
    // mergeNumberFormat
    mergeNumberFormat(locale, format) {
      composer.mergeNumberFormat(locale, format);
    }
  };
  vueI18n.__extender = __extender;
  // for vue-devtools timeline event
  if (false) {}
  return vueI18n;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * Supports compatibility for legacy vue-i18n APIs
 * This mixin is used when we use vue-i18n@v9.x or later
 */
function defineMixin(vuei18n, composer, i18n) {
  return {
    beforeCreate() {
      const instance = (0,runtime_core_esm_bundler/* getCurrentInstance */.nI)();
      /* istanbul ignore if */
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      const options = this.$options;
      if (options.i18n) {
        const optionsI18n = options.i18n;
        if (options.__i18n) {
          optionsI18n.__i18n = options.__i18n;
        }
        optionsI18n.__root = composer;
        if (this === this.$root) {
          // merge option and gttach global
          this.$i18n = mergeToGlobal(vuei18n, optionsI18n);
        } else {
          optionsI18n.__injectWithOption = true;
          optionsI18n.__extender = i18n.__vueI18nExtend;
          // atttach local VueI18n instance
          this.$i18n = createVueI18n(optionsI18n);
          // extend VueI18n instance
          const _vueI18n = this.$i18n;
          if (_vueI18n.__extender) {
            _vueI18n.__disposer = _vueI18n.__extender(this.$i18n);
          }
        }
      } else if (options.__i18n) {
        if (this === this.$root) {
          // merge option and gttach global
          this.$i18n = mergeToGlobal(vuei18n, options);
        } else {
          // atttach local VueI18n instance
          this.$i18n = createVueI18n({
            __i18n: options.__i18n,
            __injectWithOption: true,
            __extender: i18n.__vueI18nExtend,
            __root: composer
          });
          // extend VueI18n instance
          const _vueI18n = this.$i18n;
          if (_vueI18n.__extender) {
            _vueI18n.__disposer = _vueI18n.__extender(this.$i18n);
          }
        }
      } else {
        // attach global VueI18n instance
        this.$i18n = vuei18n;
      }
      if (options.__i18nGlobal) {
        adjustI18nResources(composer, options, options);
      }
      // defines vue-i18n legacy APIs
      this.$t = (...args) => this.$i18n.t(...args);
      this.$rt = (...args) => this.$i18n.rt(...args);
      this.$te = (key, locale) => this.$i18n.te(key, locale);
      this.$d = (...args) => this.$i18n.d(...args);
      this.$n = (...args) => this.$i18n.n(...args);
      this.$tm = key => this.$i18n.tm(key);
      i18n.__setInstance(instance, this.$i18n);
    },
    mounted() {
      /* istanbul ignore if */
      if (false) {}
    },
    unmounted() {
      const instance = (0,runtime_core_esm_bundler/* getCurrentInstance */.nI)();
      /* istanbul ignore if */
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      const _vueI18n = this.$i18n;
      /* istanbul ignore if */
      if (false) {}
      delete this.$t;
      delete this.$rt;
      delete this.$te;
      delete this.$d;
      delete this.$n;
      delete this.$tm;
      if (_vueI18n.__disposer) {
        _vueI18n.__disposer();
        delete _vueI18n.__disposer;
        delete _vueI18n.__extender;
      }
      i18n.__deleteInstance(instance);
      delete this.$i18n;
    }
  };
}
function mergeToGlobal(g, options) {
  g.locale = options.locale || g.locale;
  g.fallbackLocale = options.fallbackLocale || g.fallbackLocale;
  g.missing = options.missing || g.missing;
  g.silentTranslationWarn = options.silentTranslationWarn || g.silentFallbackWarn;
  g.silentFallbackWarn = options.silentFallbackWarn || g.silentFallbackWarn;
  g.formatFallbackMessages = options.formatFallbackMessages || g.formatFallbackMessages;
  g.postTranslation = options.postTranslation || g.postTranslation;
  g.warnHtmlInMessage = options.warnHtmlInMessage || g.warnHtmlInMessage;
  g.escapeParameterHtml = options.escapeParameterHtml || g.escapeParameterHtml;
  g.sync = options.sync || g.sync;
  g.__composer[SetPluralRulesSymbol](options.pluralizationRules || g.pluralizationRules);
  const messages = getLocaleMessages(g.locale, {
    messages: options.messages,
    __i18n: options.__i18n
  });
  Object.keys(messages).forEach(locale => g.mergeLocaleMessage(locale, messages[locale]));
  if (options.datetimeFormats) {
    Object.keys(options.datetimeFormats).forEach(locale => g.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
  }
  if (options.numberFormats) {
    Object.keys(options.numberFormats).forEach(locale => g.mergeNumberFormat(locale, options.numberFormats[locale]));
  }
  return g;
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (val /* ComponentI18nScope */) => val === 'parent' || val === 'global',
    default: 'parent' /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
{
  slots
},
// SetupContext,
keys) {
  if (keys.length === 1 && keys[0] === 'default') {
    // default slot with list
    const ret = slots.default ? slots.default() : [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ret.reduce((slot, current) => {
      return [...slot,
      // prettier-ignore
      ...(current.type === runtime_core_esm_bundler/* Fragment */.FK ? current.children : [current])];
    }, []);
  } else {
    // named slots
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, shared_create());
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getFragmentableTag() {
  return runtime_core_esm_bundler/* Fragment */.FK;
}
const TranslationImpl = /*#__PURE__*/(0,runtime_core_esm_bundler/* defineComponent */.pM)({
  /* eslint-disable */
  name: 'i18n-t',
  props: shared_assign({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      validator: val => isNumber(val) || !isNaN(val)
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const {
      slots,
      attrs
    } = context;
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return () => {
      const keys = Object.keys(slots).filter(key => key !== '_');
      const options = shared_create();
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== undefined) {
        options.plural = shared_isString(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const children = i18n[TranslateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = shared_assign(shared_create(), attrs);
      const tag = shared_isString(props.tag) || shared_isObject(props.tag) ? props.tag : getFragmentableTag();
      return (0,runtime_core_esm_bundler.h)(tag, assignedAttrs, children);
    };
  }
});
/**
 * export the public type for h/tsx inference
 * also to avoid inline import() in generated d.ts files
 */
/**
 * Translation Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [TranslationProps](component#translationprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Component Interpolation](../guide/advanced/component)
 *
 * @example
 * ```html
 * <div id="app">
 *   <!-- ... -->
 *   <i18n keypath="term" tag="label" for="tos">
 *     <a :href="url" target="_blank">{{ $t('tos') }}</a>
 *   </i18n>
 *   <!-- ... -->
 * </div>
 * ```
 * ```js
 * import { createApp } from 'vue'
 * import { createI18n } from 'vue-i18n'
 *
 * const messages = {
 *   en: {
 *     tos: 'Term of Service',
 *     term: 'I accept xxx {0}.'
 *   },
 *   ja: {
 *     tos: '利用規約',
 *     term: '私は xxx の{0}に同意します。'
 *   }
 * }
 *
 * const i18n = createI18n({
 *   locale: 'en',
 *   messages
 * })
 *
 * const app = createApp({
 *   data: {
 *     url: '/term'
 *   }
 * }).use(i18n).mount('#app')
 * ```
 *
 * @VueI18nComponent
 */
const Translation = TranslationImpl;
const I18nT = (/* unused pure expression or super */ null && (Translation));
function isVNode(target) {
  return shared_isArray(target) && !shared_isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const {
    slots,
    attrs
  } = context;
  return () => {
    const options = {
      part: true
    };
    let overrides = shared_create();
    if (props.locale) {
      options.locale = props.locale;
    }
    if (shared_isString(props.format)) {
      options.key = props.format;
    } else if (shared_isObject(props.format)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (shared_isString(props.format.key)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        options.key = props.format.key;
      }
      // Filter out number format options only
      overrides = Object.keys(props.format).reduce((options, prop) => {
        return slotKeys.includes(prop) ? shared_assign(shared_create(), options, {
          [prop]: props.format[prop]
        }) // eslint-disable-line @typescript-eslint/no-explicit-any
        : options;
      }, shared_create());
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (shared_isArray(parts)) {
      children = parts.map((part, index) => {
        const slot = slots[part.type];
        const node = slot ? slot({
          [part.type]: part.value,
          index,
          parts
        }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index}`;
        }
        return node;
      });
    } else if (shared_isString(parts)) {
      children = [parts];
    }
    const assignedAttrs = shared_assign(shared_create(), attrs);
    const tag = shared_isString(props.tag) || shared_isObject(props.tag) ? props.tag : getFragmentableTag();
    return (0,runtime_core_esm_bundler.h)(tag, assignedAttrs, children);
  };
}
const NumberFormatImpl = /*#__PURE__*/(0,runtime_core_esm_bundler/* defineComponent */.pM)({
  /* eslint-disable */
  name: 'i18n-n',
  props: shared_assign({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    i18n[NumberPartsSymbol](...args));
  }
});
/**
 * export the public type for h/tsx inference
 * also to avoid inline import() in generated d.ts files
 */
/**
 * Number Format Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [FormattableProps](component#formattableprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Custom Formatting](../guide/essentials/number#custom-formatting)
 *
 * @VueI18nDanger
 * Not supported IE, due to no support `Intl.NumberFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts)
 *
 * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-numberformat)
 *
 * @VueI18nComponent
 */
const NumberFormat = NumberFormatImpl;
const I18nN = (/* unused pure expression or super */ null && (NumberFormat));
function getComposer$1(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === 'composition') {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
/**
 * @deprecated will be removed at vue-i18n v12
 */
function vTDirective(i18n) {
  const _process = binding => {
    if (false) {}
    const {
      instance,
      value
    } = binding;
    /* istanbul ignore if */
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$1(i18n, instance.$);
    const parsedValue = parseValue(value);
    return [Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]), composer];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    if (inBrowser && i18n.global === composer) {
      // global scope only
      el.__i18nWatcher = (0,runtime_core_esm_bundler/* watch */.wB)(composer.locale, () => {
        binding.instance && binding.instance.$forceUpdate();
      });
    }
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = el => {
    if (inBrowser && el.__i18nWatcher) {
      el.__i18nWatcher();
      el.__i18nWatcher = undefined;
      delete el.__i18nWatcher;
    }
    if (el.__composer) {
      el.__composer = undefined;
      delete el.__composer;
    }
  };
  const update = (el, {
    value
  }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value);
      el.textContent = Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]);
    }
  };
  const getSSRProps = binding => {
    const [textContent] = _process(binding);
    return {
      textContent
    };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps
  };
}
function parseValue(value) {
  if (shared_isString(value)) {
    return {
      path: value
    };
  } else if (isPlainObject(value)) {
    if (!('path' in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, 'path');
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const {
    path,
    locale,
    args,
    choice,
    plural
  } = value;
  const options = {};
  const named = args || {};
  if (shared_isString(locale)) {
    options.locale = locale;
  }
  if (isNumber(choice)) {
    options.plural = choice;
  }
  if (isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
  const globalInstall = shared_isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    [Translation.name, 'I18nT'].forEach(name => app.component(name, Translation));
    [NumberFormat.name, 'I18nN'].forEach(name => app.component(name, NumberFormat));
    [DatetimeFormat.name, 'I18nD'].forEach(name => app.component(name, DatetimeFormat));
  }
  // install directive
  {
    app.directive('t', vTDirective(i18n));
  }
}

/**
 * Injection key for {@link useI18n}
 *
 * @remarks
 * The global injection key for I18n instances with `useI18n`. this injection key is used in Web Components.
 * Specify the i18n instance created by {@link createI18n} together with `provide` function.
 *
 * @VueI18nGeneral
 */
const I18nInjectionKey = /* #__PURE__*/shared_makeSymbol('global-vue-i18n');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createI18n(options = {}) {
  // prettier-ignore
  const __legacyMode = __VUE_I18N_LEGACY_API__ && shared_isBoolean(options.legacy) ? options.legacy : __VUE_I18N_LEGACY_API__;
  if (false) {}
  // prettier-ignore
  const __globalInjection = shared_isBoolean(options.globalInjection) ? options.globalInjection : true;
  const __instances = new Map();
  const [globalScope, __global] = createGlobal(options, __legacyMode);
  const symbol = /* #__PURE__*/shared_makeSymbol( false ? 0 : '');
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  const i18n = {
    // mode
    get mode() {
      return __VUE_I18N_LEGACY_API__ && __legacyMode ? 'legacy' : 'composition';
    },
    // install plugin
    async install(app, ...options) {
      if (false) {}
      // setup global provider
      app.__VUE_I18N_SYMBOL__ = symbol;
      app.provide(app.__VUE_I18N_SYMBOL__, i18n);
      // set composer & vuei18n extend hook options from plugin options
      if (isPlainObject(options[0])) {
        const opts = options[0];
        i18n.__composerExtend = opts.__composerExtend;
        i18n.__vueI18nExtend = opts.__vueI18nExtend;
      }
      // global method and properties injection for Composition API
      let globalReleaseHandler = null;
      if (!__legacyMode && __globalInjection) {
        globalReleaseHandler = injectGlobalFields(app, i18n.global);
      }
      // install built-in components and directive
      if (__VUE_I18N_FULL_INSTALL__) {
        apply(app, i18n, ...options);
      }
      // setup mixin for Legacy API
      if (__VUE_I18N_LEGACY_API__ && __legacyMode) {
        app.mixin(defineMixin(__global, __global.__composer, i18n));
      }
      // release global scope
      const unmountApp = app.unmount;
      app.unmount = () => {
        globalReleaseHandler && globalReleaseHandler();
        i18n.dispose();
        unmountApp();
      };
      // setup vue-devtools plugin
      if (false) {}
    },
    // global accessor
    get global() {
      return __global;
    },
    dispose() {
      globalScope.stop();
    },
    // @internal
    __instances,
    // @internal
    __getInstance,
    // @internal
    __setInstance,
    // @internal
    __deleteInstance
  };
  return i18n;
}
function useI18n(options = {}) {
  const instance = (0,runtime_core_esm_bundler/* getCurrentInstance */.nI)();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSTALLED);
  }
  const i18n = getI18nInstance(instance);
  const gl = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (scope === 'global') {
    adjustI18nResources(gl, options, componentOptions);
    return gl;
  }
  if (scope === 'parent') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let composer = getComposer(i18n, instance, options.__useComponent);
    if (composer == null) {
      if (false) {}
      composer = gl;
    }
    return composer;
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = shared_assign({}, options);
    if ('__i18n' in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (gl) {
      composerOptions.__root = gl;
    }
    composer = createComposer(composerOptions);
    if (i18nInternal.__composerExtend) {
      composer[DisposeSymbol] = i18nInternal.__composerExtend(composer);
    }
    setupLifeCycle(i18nInternal, instance, composer);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode) {
  const scope = (0,reactivity_esm_bundler/* effectScope */.uY)();
  const obj = __VUE_I18N_LEGACY_API__ && legacyMode ? scope.run(() => createVueI18n(options)) : scope.run(() => createComposer(options));
  if (obj == null) {
    throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
  }
  return [scope, obj];
}
function getI18nInstance(instance) {
  const i18n = (0,runtime_core_esm_bundler/* inject */.WQ)(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
  /* istanbul ignore if */
  if (!i18n) {
    throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);
  }
  return i18n;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getScope(options, componentOptions) {
  // prettier-ignore
  return isEmptyObject(options) ? '__i18n' in componentOptions ? 'local' : 'global' : !options.useScope ? 'local' : options.useScope;
}
function getGlobalComposer(i18n) {
  // prettier-ignore
  return i18n.mode === 'composition' ? i18n.global : i18n.global.__composer;
}
function getComposer(i18n, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = getParentComponentInstance(target, useComponent);
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === 'composition') {
      composer = i18nInternal.__getInstance(current);
    } else {
      if (__VUE_I18N_LEGACY_API__) {
        const vueI18n = i18nInternal.__getInstance(current);
        if (vueI18n != null) {
          composer = vueI18n.__composer;
          if (useComponent && composer && !composer[InejctWithOptionSymbol] // eslint-disable-line @typescript-eslint/no-explicit-any
          ) {
            composer = null;
          }
        }
      }
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function getParentComponentInstance(target, useComponent = false) {
  if (target == null) {
    return null;
  }
  // if `useComponent: true` will be specified, we get lexical scope owner instance for use-case slots
  return !useComponent ? target.parent : target.vnode.ctx || target.parent; // eslint-disable-line @typescript-eslint/no-explicit-any
}
function setupLifeCycle(i18n, target, composer) {
  let emitter = null;
  (0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
    // inject composer instance to DOM for intlify-devtools
    if (false) {}
  }, target);
  (0,runtime_core_esm_bundler/* onUnmounted */.hi)(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _composer = composer;
    // remove composer instance from DOM for intlify-devtools
    if (false) {}
    i18n.__deleteInstance(target);
    // dispose extended resources
    const dispose = _composer[DisposeSymbol];
    if (dispose) {
      dispose();
      delete _composer[DisposeSymbol];
    }
  }, target);
}
const globalExportProps = ['locale', 'fallbackLocale', 'availableLocales'];
const globalExportMethods = ['t', 'rt', 'd', 'n', 'tm', 'te'];
function injectGlobalFields(app, composer) {
  const i18n = Object.create(null);
  globalExportProps.forEach(prop => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = (0,reactivity_esm_bundler/* isRef */.i9)(desc.value) // check computed props
    ? {
      get() {
        return desc.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach(method => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
  const dispose = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete app.config.globalProperties.$i18n;
    globalExportMethods.forEach(method => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete app.config.globalProperties[`$${method}`];
    });
  };
  return dispose;
}
const DatetimeFormatImpl = /* #__PURE__*/(0,runtime_core_esm_bundler/* defineComponent */.pM)({
  /* eslint-disable */
  name: 'i18n-d',
  props: shared_assign({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    i18n[DatetimePartsSymbol](...args));
  }
});
/**
 * Datetime Format Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [FormattableProps](component#formattableprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Custom Formatting](../guide/essentials/datetime#custom-formatting)
 *
 * @VueI18nDanger
 * Not supported IE, due to no support `Intl.DateTimeFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts)
 *
 * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-datetimeformat)
 *
 * @VueI18nComponent
 */
const DatetimeFormat = DatetimeFormatImpl;
const I18nD = (/* unused pure expression or super */ null && (DatetimeFormat));
{
  vue_i18n_initFeatureFlags();
}
// register message compiler at vue-i18n
registerMessageCompiler(compile);
// register message resolver at vue-i18n
registerMessageResolver(resolveValue);
// register fallback locale at vue-i18n
registerLocaleFallbacker(fallbackWithLocaleChain);
// NOTE: experimental !!
if ( false || __INTLIFY_PROD_DEVTOOLS__) {
  const target = getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
if (false) {}


/***/ })

}]);
//# sourceMappingURL=chunk-vendors.439b1e83.js.map
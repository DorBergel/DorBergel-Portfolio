import {
  require_prop_types
} from "./chunk-QGVADFPC.js";
import {
  require_react_dom
} from "./chunk-ZIYUGMGG.js";
import {
  require_react
} from "./chunk-65KY755N.js";
import {
  __commonJS
} from "./chunk-V4OQ3NZ2.js";

// node_modules/lodash.throttle/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.throttle/index.js"(exports, module) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function throttle(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = throttle;
  }
});

// node_modules/react-scroll/modules/mixins/passive-event-listeners.js
var require_passive_event_listeners = __commonJS({
  "node_modules/react-scroll/modules/mixins/passive-event-listeners.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var addPassiveEventListener = exports.addPassiveEventListener = function addPassiveEventListener2(target, eventName, listener) {
      var listenerName = listener.name;
      if (!listenerName) {
        listenerName = eventName;
        console.warn("Listener must be a named function.");
      }
      if (!attachedListeners.has(eventName)) attachedListeners.set(eventName, /* @__PURE__ */ new Set());
      var listeners = attachedListeners.get(eventName);
      if (listeners.has(listenerName)) return;
      var supportsPassiveOption = function() {
        var supportsPassiveOption2 = false;
        try {
          var opts = Object.defineProperty({}, "passive", {
            get: function get() {
              supportsPassiveOption2 = true;
            }
          });
          window.addEventListener("test", null, opts);
        } catch (e) {
        }
        return supportsPassiveOption2;
      }();
      target.addEventListener(eventName, listener, supportsPassiveOption ? { passive: true } : false);
      listeners.add(listenerName);
    };
    var removePassiveEventListener = exports.removePassiveEventListener = function removePassiveEventListener2(target, eventName, listener) {
      target.removeEventListener(eventName, listener);
      attachedListeners.get(eventName).delete(listener.name || eventName);
    };
    var attachedListeners = /* @__PURE__ */ new Map();
  }
});

// node_modules/react-scroll/modules/mixins/scroll-spy.js
var require_scroll_spy = __commonJS({
  "node_modules/react-scroll/modules/mixins/scroll-spy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _lodash = require_lodash();
    var _lodash2 = _interopRequireDefault(_lodash);
    var _passiveEventListeners = require_passive_event_listeners();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var eventThrottler = function eventThrottler2(eventHandler) {
      var throttleAmount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
      return (0, _lodash2.default)(eventHandler, throttleAmount);
    };
    var scrollSpy = {
      spyCallbacks: [],
      spySetState: [],
      scrollSpyContainers: [],
      mount: function mount(scrollSpyContainer, throttle) {
        if (scrollSpyContainer) {
          var eventHandler = eventThrottler(function(event) {
            scrollSpy.scrollHandler(scrollSpyContainer);
          }, throttle);
          scrollSpy.scrollSpyContainers.push(scrollSpyContainer);
          (0, _passiveEventListeners.addPassiveEventListener)(scrollSpyContainer, "scroll", eventHandler);
          return function() {
            (0, _passiveEventListeners.removePassiveEventListener)(scrollSpyContainer, "scroll", eventHandler);
            scrollSpy.scrollSpyContainers.splice(scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer), 1);
          };
        }
        return function() {
        };
      },
      isMounted: function isMounted(scrollSpyContainer) {
        return scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer) !== -1;
      },
      currentPositionX: function currentPositionX(scrollSpyContainer) {
        if (scrollSpyContainer === document) {
          var supportPageOffset = window.scrollY !== void 0;
          var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
          return supportPageOffset ? window.scrollX : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
        } else {
          return scrollSpyContainer.scrollLeft;
        }
      },
      currentPositionY: function currentPositionY(scrollSpyContainer) {
        if (scrollSpyContainer === document) {
          var supportPageOffset = window.scrollX !== void 0;
          var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
          return supportPageOffset ? window.scrollY : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
        } else {
          return scrollSpyContainer.scrollTop;
        }
      },
      scrollHandler: function scrollHandler(scrollSpyContainer) {
        var callbacks = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)].spyCallbacks || [];
        callbacks.forEach(function(c) {
          return c(scrollSpy.currentPositionX(scrollSpyContainer), scrollSpy.currentPositionY(scrollSpyContainer));
        });
      },
      addStateHandler: function addStateHandler(handler) {
        scrollSpy.spySetState.push(handler);
      },
      addSpyHandler: function addSpyHandler(handler, scrollSpyContainer) {
        var container = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)];
        if (!container.spyCallbacks) {
          container.spyCallbacks = [];
        }
        container.spyCallbacks.push(handler);
      },
      updateStates: function updateStates() {
        scrollSpy.spySetState.forEach(function(s) {
          return s();
        });
      },
      unmount: function unmount(stateHandler, spyHandler) {
        scrollSpy.scrollSpyContainers.forEach(function(c) {
          return c.spyCallbacks && c.spyCallbacks.length && c.spyCallbacks.indexOf(spyHandler) > -1 && c.spyCallbacks.splice(c.spyCallbacks.indexOf(spyHandler), 1);
        });
        if (scrollSpy.spySetState && scrollSpy.spySetState.length && scrollSpy.spySetState.indexOf(stateHandler) > -1) {
          scrollSpy.spySetState.splice(scrollSpy.spySetState.indexOf(stateHandler), 1);
        }
        document.removeEventListener("scroll", scrollSpy.scrollHandler);
      },
      update: function update() {
        return scrollSpy.scrollSpyContainers.forEach(function(c) {
          return scrollSpy.scrollHandler(c);
        });
      }
    };
    exports.default = scrollSpy;
  }
});

// node_modules/react-scroll/modules/mixins/utils.js
var require_utils = __commonJS({
  "node_modules/react-scroll/modules/mixins/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var updateHash = function updateHash2(hash, historyUpdate) {
      var hashVal = hash.indexOf("#") === 0 ? hash.substring(1) : hash;
      var hashToUpdate = hashVal ? "#" + hashVal : "";
      var curLoc = window && window.location;
      var urlToPush = hashToUpdate ? curLoc.pathname + curLoc.search + hashToUpdate : curLoc.pathname + curLoc.search;
      historyUpdate ? history.pushState(history.state, "", urlToPush) : history.replaceState(history.state, "", urlToPush);
    };
    var getHash = function getHash2() {
      return window.location.hash.replace(/^#/, "");
    };
    var filterElementInContainer = function filterElementInContainer2(container) {
      return function(element) {
        return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
      };
    };
    var isPositioned = function isPositioned2(element) {
      return getComputedStyle(element).position !== "static";
    };
    var getElementOffsetInfoUntil = function getElementOffsetInfoUntil2(element, predicate) {
      var offsetTop = element.offsetTop;
      var currentOffsetParent = element.offsetParent;
      while (currentOffsetParent && !predicate(currentOffsetParent)) {
        offsetTop += currentOffsetParent.offsetTop;
        currentOffsetParent = currentOffsetParent.offsetParent;
      }
      return { offsetTop, offsetParent: currentOffsetParent };
    };
    var scrollOffset = function scrollOffset2(c, t, horizontal) {
      if (horizontal) {
        return c === document ? t.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(c).position !== "static" ? t.offsetLeft : t.offsetLeft - c.offsetLeft;
      } else {
        if (c === document) {
          return t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
        }
        if (isPositioned(c)) {
          if (t.offsetParent !== c) {
            var isContainerElementOrDocument = function isContainerElementOrDocument2(e) {
              return e === c || e === document;
            };
            var _getElementOffsetInfo = getElementOffsetInfoUntil(t, isContainerElementOrDocument), offsetTop = _getElementOffsetInfo.offsetTop, offsetParent = _getElementOffsetInfo.offsetParent;
            if (offsetParent !== c) {
              throw new Error("Seems containerElement is not an ancestor of the Element");
            }
            return offsetTop;
          }
          return t.offsetTop;
        }
        if (t.offsetParent === c.offsetParent) {
          return t.offsetTop - c.offsetTop;
        }
        var isDocument = function isDocument2(e) {
          return e === document;
        };
        return getElementOffsetInfoUntil(t, isDocument).offsetTop - getElementOffsetInfoUntil(c, isDocument).offsetTop;
      }
    };
    exports.default = {
      updateHash,
      getHash,
      filterElementInContainer,
      scrollOffset
    };
  }
});

// node_modules/react-scroll/modules/mixins/smooth.js
var require_smooth = __commonJS({
  "node_modules/react-scroll/modules/mixins/smooth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = {
      /*
       * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
       */
      defaultEasing: function defaultEasing(x) {
        if (x < 0.5) {
          return Math.pow(x * 2, 2) / 2;
        }
        return 1 - Math.pow((1 - x) * 2, 2) / 2;
      },
      /*
       * https://gist.github.com/gre/1650294
       */
      // no easing, no acceleration
      linear: function linear(x) {
        return x;
      },
      // accelerating from zero velocity
      easeInQuad: function easeInQuad(x) {
        return x * x;
      },
      // decelerating to zero velocity
      easeOutQuad: function easeOutQuad(x) {
        return x * (2 - x);
      },
      // acceleration until halfway, then deceleration
      easeInOutQuad: function easeInOutQuad(x) {
        return x < 0.5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
      },
      // accelerating from zero velocity 
      easeInCubic: function easeInCubic(x) {
        return x * x * x;
      },
      // decelerating to zero velocity π
      easeOutCubic: function easeOutCubic(x) {
        return --x * x * x + 1;
      },
      // acceleration until halfway, then deceleration 
      easeInOutCubic: function easeInOutCubic(x) {
        return x < 0.5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
      },
      // accelerating from zero velocity 
      easeInQuart: function easeInQuart(x) {
        return x * x * x * x;
      },
      // decelerating to zero velocity 
      easeOutQuart: function easeOutQuart(x) {
        return 1 - --x * x * x * x;
      },
      // acceleration until halfway, then deceleration
      easeInOutQuart: function easeInOutQuart(x) {
        return x < 0.5 ? 8 * x * x * x * x : 1 - 8 * --x * x * x * x;
      },
      // accelerating from zero velocity
      easeInQuint: function easeInQuint(x) {
        return x * x * x * x * x;
      },
      // decelerating to zero velocity
      easeOutQuint: function easeOutQuint(x) {
        return 1 + --x * x * x * x * x;
      },
      // acceleration until halfway, then deceleration 
      easeInOutQuint: function easeInOutQuint(x) {
        return x < 0.5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x;
      }
    };
  }
});

// node_modules/react-scroll/modules/mixins/cancel-events.js
var require_cancel_events = __commonJS({
  "node_modules/react-scroll/modules/mixins/cancel-events.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _passiveEventListeners = require_passive_event_listeners();
    var events = ["mousedown", "wheel", "touchmove", "keydown"];
    exports.default = {
      subscribe: function subscribe(cancelEvent) {
        return typeof document !== "undefined" && events.forEach(function(event) {
          return (0, _passiveEventListeners.addPassiveEventListener)(document, event, cancelEvent);
        });
      }
    };
  }
});

// node_modules/react-scroll/modules/mixins/scroll-events.js
var require_scroll_events = __commonJS({
  "node_modules/react-scroll/modules/mixins/scroll-events.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Events = {
      registered: {},
      scrollEvent: {
        register: function register(evtName, callback) {
          Events.registered[evtName] = callback;
        },
        remove: function remove(evtName) {
          Events.registered[evtName] = null;
        }
      }
    };
    exports.default = Events;
  }
});

// node_modules/react-scroll/modules/mixins/animate-scroll.js
var require_animate_scroll = __commonJS({
  "node_modules/react-scroll/modules/mixins/animate-scroll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _utils = require_utils();
    var _utils2 = _interopRequireDefault(_utils);
    var _smooth = require_smooth();
    var _smooth2 = _interopRequireDefault(_smooth);
    var _cancelEvents = require_cancel_events();
    var _cancelEvents2 = _interopRequireDefault(_cancelEvents);
    var _scrollEvents = require_scroll_events();
    var _scrollEvents2 = _interopRequireDefault(_scrollEvents);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var getAnimationType = function getAnimationType2(options) {
      return _smooth2.default[options.smooth] || _smooth2.default.defaultEasing;
    };
    var functionWrapper = function functionWrapper2(value) {
      return typeof value === "function" ? value : function() {
        return value;
      };
    };
    var currentWindowProperties = function currentWindowProperties2() {
      if (typeof window !== "undefined") {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
      }
    };
    var requestAnimationFrameHelper = function() {
      return currentWindowProperties() || function(callback, element, delay) {
        window.setTimeout(callback, delay || 1e3 / 60, (/* @__PURE__ */ new Date()).getTime());
      };
    }();
    var makeData = function makeData2() {
      return {
        currentPosition: 0,
        startPosition: 0,
        targetPosition: 0,
        progress: 0,
        duration: 0,
        cancel: false,
        target: null,
        containerElement: null,
        to: null,
        start: null,
        delta: null,
        percent: null,
        delayTimeout: null
      };
    };
    var currentPositionX = function currentPositionX2(options) {
      var containerElement = options.data.containerElement;
      if (containerElement && containerElement !== document && containerElement !== document.body) {
        return containerElement.scrollLeft;
      } else {
        var supportPageOffset = window.pageXOffset !== void 0;
        var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
        return supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
      }
    };
    var currentPositionY = function currentPositionY2(options) {
      var containerElement = options.data.containerElement;
      if (containerElement && containerElement !== document && containerElement !== document.body) {
        return containerElement.scrollTop;
      } else {
        var supportPageOffset = window.pageXOffset !== void 0;
        var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
      }
    };
    var scrollContainerWidth = function scrollContainerWidth2(options) {
      var containerElement = options.data.containerElement;
      if (containerElement && containerElement !== document && containerElement !== document.body) {
        return containerElement.scrollWidth - containerElement.offsetWidth;
      } else {
        var body = document.body;
        var html = document.documentElement;
        return Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
      }
    };
    var scrollContainerHeight = function scrollContainerHeight2(options) {
      var containerElement = options.data.containerElement;
      if (containerElement && containerElement !== document && containerElement !== document.body) {
        return containerElement.scrollHeight - containerElement.offsetHeight;
      } else {
        var body = document.body;
        var html = document.documentElement;
        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      }
    };
    var animateScroll = function animateScroll2(easing, options, timestamp) {
      var data = options.data;
      if (!options.ignoreCancelEvents && data.cancel) {
        if (_scrollEvents2.default.registered["end"]) {
          _scrollEvents2.default.registered["end"](data.to, data.target, data.currentPositionY);
        }
        return;
      }
      ;
      data.delta = Math.round(data.targetPosition - data.startPosition);
      if (data.start === null) {
        data.start = timestamp;
      }
      data.progress = timestamp - data.start;
      data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);
      data.currentPosition = data.startPosition + Math.ceil(data.delta * data.percent);
      if (data.containerElement && data.containerElement !== document && data.containerElement !== document.body) {
        if (options.horizontal) {
          data.containerElement.scrollLeft = data.currentPosition;
        } else {
          data.containerElement.scrollTop = data.currentPosition;
        }
      } else {
        if (options.horizontal) {
          window.scrollTo(data.currentPosition, 0);
        } else {
          window.scrollTo(0, data.currentPosition);
        }
      }
      if (data.percent < 1) {
        var easedAnimate = animateScroll2.bind(null, easing, options);
        requestAnimationFrameHelper.call(window, easedAnimate);
        return;
      }
      if (_scrollEvents2.default.registered["end"]) {
        _scrollEvents2.default.registered["end"](data.to, data.target, data.currentPosition);
      }
    };
    var setContainer = function setContainer2(options) {
      options.data.containerElement = !options ? null : options.containerId ? document.getElementById(options.containerId) : options.container && options.container.nodeType ? options.container : document;
    };
    var animateTopScroll = function animateTopScroll2(scrollOffset, options, to, target) {
      options.data = options.data || makeData();
      window.clearTimeout(options.data.delayTimeout);
      var setCancel = function setCancel2() {
        options.data.cancel = true;
      };
      _cancelEvents2.default.subscribe(setCancel);
      setContainer(options);
      options.data.start = null;
      options.data.cancel = false;
      options.data.startPosition = options.horizontal ? currentPositionX(options) : currentPositionY(options);
      options.data.targetPosition = options.absolute ? scrollOffset : scrollOffset + options.data.startPosition;
      if (options.data.startPosition === options.data.targetPosition) {
        if (_scrollEvents2.default.registered["end"]) {
          _scrollEvents2.default.registered["end"](options.data.to, options.data.target, options.data.currentPosition);
        }
        return;
      }
      options.data.delta = Math.round(options.data.targetPosition - options.data.startPosition);
      options.data.duration = functionWrapper(options.duration)(options.data.delta);
      options.data.duration = isNaN(parseFloat(options.data.duration)) ? 1e3 : parseFloat(options.data.duration);
      options.data.to = to;
      options.data.target = target;
      var easing = getAnimationType(options);
      var easedAnimate = animateScroll.bind(null, easing, options);
      if (options && options.delay > 0) {
        options.data.delayTimeout = window.setTimeout(function() {
          if (_scrollEvents2.default.registered["begin"]) {
            _scrollEvents2.default.registered["begin"](options.data.to, options.data.target);
          }
          requestAnimationFrameHelper.call(window, easedAnimate);
        }, options.delay);
        return;
      }
      if (_scrollEvents2.default.registered["begin"]) {
        _scrollEvents2.default.registered["begin"](options.data.to, options.data.target);
      }
      requestAnimationFrameHelper.call(window, easedAnimate);
    };
    var proceedOptions = function proceedOptions2(options) {
      options = _extends({}, options);
      options.data = options.data || makeData();
      options.absolute = true;
      return options;
    };
    var scrollToTop = function scrollToTop2(options) {
      animateTopScroll(0, proceedOptions(options));
    };
    var scrollTo = function scrollTo2(toPosition, options) {
      animateTopScroll(toPosition, proceedOptions(options));
    };
    var scrollToBottom = function scrollToBottom2(options) {
      options = proceedOptions(options);
      setContainer(options);
      animateTopScroll(options.horizontal ? scrollContainerWidth(options) : scrollContainerHeight(options), options);
    };
    var scrollMore = function scrollMore2(toPosition, options) {
      options = proceedOptions(options);
      setContainer(options);
      var currentPosition = options.horizontal ? currentPositionX(options) : currentPositionY(options);
      animateTopScroll(toPosition + currentPosition, options);
    };
    exports.default = {
      animateTopScroll,
      getAnimationType,
      scrollToTop,
      scrollToBottom,
      scrollTo,
      scrollMore
    };
  }
});

// node_modules/react-scroll/modules/mixins/scroller.js
var require_scroller = __commonJS({
  "node_modules/react-scroll/modules/mixins/scroller.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _utils = require_utils();
    var _utils2 = _interopRequireDefault(_utils);
    var _animateScroll = require_animate_scroll();
    var _animateScroll2 = _interopRequireDefault(_animateScroll);
    var _scrollEvents = require_scroll_events();
    var _scrollEvents2 = _interopRequireDefault(_scrollEvents);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var __mapped = {};
    var __activeLink = void 0;
    exports.default = {
      unmount: function unmount() {
        __mapped = {};
      },
      register: function register(name, element) {
        __mapped[name] = element;
      },
      unregister: function unregister(name) {
        delete __mapped[name];
      },
      get: function get(name) {
        return __mapped[name] || document.getElementById(name) || document.getElementsByName(name)[0] || document.getElementsByClassName(name)[0];
      },
      setActiveLink: function setActiveLink(link) {
        return __activeLink = link;
      },
      getActiveLink: function getActiveLink() {
        return __activeLink;
      },
      scrollTo: function scrollTo(to, props) {
        var target = this.get(to);
        if (!target) {
          console.warn("target Element not found");
          return;
        }
        props = _extends({}, props, { absolute: false });
        var containerId = props.containerId;
        var container = props.container;
        var containerElement = void 0;
        if (containerId) {
          containerElement = document.getElementById(containerId);
        } else if (container && container.nodeType) {
          containerElement = container;
        } else {
          containerElement = document;
        }
        props.absolute = true;
        var horizontal = props.horizontal;
        var scrollOffset = _utils2.default.scrollOffset(containerElement, target, horizontal) + (props.offset || 0);
        if (!props.smooth) {
          if (_scrollEvents2.default.registered["begin"]) {
            _scrollEvents2.default.registered["begin"](to, target);
          }
          if (containerElement === document) {
            if (props.horizontal) {
              window.scrollTo(scrollOffset, 0);
            } else {
              window.scrollTo(0, scrollOffset);
            }
          } else {
            containerElement.scrollTop = scrollOffset;
          }
          if (_scrollEvents2.default.registered["end"]) {
            _scrollEvents2.default.registered["end"](to, target);
          }
          return;
        }
        _animateScroll2.default.animateTopScroll(scrollOffset, props, to, target);
      }
    };
  }
});

// node_modules/react-scroll/modules/mixins/scroll-hash.js
var require_scroll_hash = __commonJS({
  "node_modules/react-scroll/modules/mixins/scroll-hash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _passiveEventListeners = require_passive_event_listeners();
    var _utils = require_utils();
    var _utils2 = _interopRequireDefault(_utils);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var scrollHash = {
      mountFlag: false,
      initialized: false,
      scroller: null,
      containers: {},
      mount: function mount(scroller) {
        this.scroller = scroller;
        this.handleHashChange = this.handleHashChange.bind(this);
        window.addEventListener("hashchange", this.handleHashChange);
        this.initStateFromHash();
        this.mountFlag = true;
      },
      mapContainer: function mapContainer(to, container) {
        this.containers[to] = container;
      },
      isMounted: function isMounted() {
        return this.mountFlag;
      },
      isInitialized: function isInitialized() {
        return this.initialized;
      },
      initStateFromHash: function initStateFromHash() {
        var _this = this;
        var hash = this.getHash();
        if (hash) {
          window.setTimeout(function() {
            _this.scrollTo(hash, true);
            _this.initialized = true;
          }, 10);
        } else {
          this.initialized = true;
        }
      },
      scrollTo: function scrollTo(to, isInit) {
        var scroller = this.scroller;
        var element = scroller.get(to);
        if (element && (isInit || to !== scroller.getActiveLink())) {
          var container = this.containers[to] || document;
          scroller.scrollTo(to, { container });
        }
      },
      getHash: function getHash() {
        return _utils2.default.getHash();
      },
      changeHash: function changeHash(to, saveHashHistory) {
        if (this.isInitialized() && _utils2.default.getHash() !== to) {
          _utils2.default.updateHash(to, saveHashHistory);
        }
      },
      handleHashChange: function handleHashChange() {
        this.scrollTo(this.getHash());
      },
      unmount: function unmount() {
        this.scroller = null;
        this.containers = null;
        window.removeEventListener("hashchange", this.handleHashChange);
      }
    };
    exports.default = scrollHash;
  }
});

// node_modules/react-scroll/modules/mixins/scroll-link.js
var require_scroll_link = __commonJS({
  "node_modules/react-scroll/modules/mixins/scroll-link.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _scrollSpy = require_scroll_spy();
    var _scrollSpy2 = _interopRequireDefault(_scrollSpy);
    var _scroller = require_scroller();
    var _scroller2 = _interopRequireDefault(_scroller);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _scrollHash = require_scroll_hash();
    var _scrollHash2 = _interopRequireDefault(_scrollHash);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var protoTypes = {
      to: _propTypes2.default.string.isRequired,
      containerId: _propTypes2.default.string,
      container: _propTypes2.default.object,
      activeClass: _propTypes2.default.string,
      activeStyle: _propTypes2.default.object,
      spy: _propTypes2.default.bool,
      horizontal: _propTypes2.default.bool,
      smooth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
      offset: _propTypes2.default.number,
      delay: _propTypes2.default.number,
      isDynamic: _propTypes2.default.bool,
      onClick: _propTypes2.default.func,
      duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
      absolute: _propTypes2.default.bool,
      onSetActive: _propTypes2.default.func,
      onSetInactive: _propTypes2.default.func,
      ignoreCancelEvents: _propTypes2.default.bool,
      hashSpy: _propTypes2.default.bool,
      saveHashHistory: _propTypes2.default.bool,
      spyThrottle: _propTypes2.default.number
    };
    exports.default = function(Component, customScroller) {
      var scroller = customScroller || _scroller2.default;
      var Link = function(_React$PureComponent) {
        _inherits(Link2, _React$PureComponent);
        function Link2(props) {
          _classCallCheck(this, Link2);
          var _this = _possibleConstructorReturn(this, (Link2.__proto__ || Object.getPrototypeOf(Link2)).call(this, props));
          _initialiseProps.call(_this);
          _this.state = {
            active: false
          };
          _this.beforeUnmountCallbacks = [];
          return _this;
        }
        _createClass(Link2, [{
          key: "getScrollSpyContainer",
          value: function getScrollSpyContainer() {
            var containerId = this.props.containerId;
            var container = this.props.container;
            if (containerId && !container) {
              return document.getElementById(containerId);
            }
            if (container && container.nodeType) {
              return container;
            }
            return document;
          }
        }, {
          key: "componentDidMount",
          value: function componentDidMount() {
            if (this.props.spy || this.props.hashSpy) {
              var scrollSpyContainer = this.getScrollSpyContainer();
              if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
                var fn = _scrollSpy2.default.mount(scrollSpyContainer, this.props.spyThrottle);
                this.beforeUnmountCallbacks.push(fn);
              }
              if (this.props.hashSpy) {
                if (!_scrollHash2.default.isMounted()) {
                  _scrollHash2.default.mount(scroller);
                }
                _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
              }
              _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);
              this.setState({
                container: scrollSpyContainer
              });
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
            this.beforeUnmountCallbacks.forEach(function(fn) {
              return fn();
            });
          }
        }, {
          key: "render",
          value: function render() {
            var className = "";
            if (this.state && this.state.active) {
              className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
            } else {
              className = this.props.className;
            }
            var style = {};
            if (this.state && this.state.active) {
              style = _extends({}, this.props.style, this.props.activeStyle);
            } else {
              style = _extends({}, this.props.style);
            }
            var props = _extends({}, this.props);
            for (var prop in protoTypes) {
              if (props.hasOwnProperty(prop)) {
                delete props[prop];
              }
            }
            props.className = className;
            props.style = style;
            props.onClick = this.handleClick;
            return _react2.default.createElement(Component, props);
          }
        }]);
        return Link2;
      }(_react2.default.PureComponent);
      var _initialiseProps = function _initialiseProps2() {
        var _this2 = this;
        this.scrollTo = function(to, props) {
          scroller.scrollTo(to, _extends({}, _this2.state, props));
        };
        this.handleClick = function(event) {
          if (_this2.props.onClick) {
            _this2.props.onClick(event);
          }
          if (event.stopPropagation) event.stopPropagation();
          if (event.preventDefault) event.preventDefault();
          _this2.scrollTo(_this2.props.to, _this2.props);
        };
        this.spyHandler = function(x, y) {
          var scrollSpyContainer = _this2.getScrollSpyContainer();
          if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
            return;
          }
          var horizontal = _this2.props.horizontal;
          var to = _this2.props.to;
          var element = null;
          var isInside = void 0;
          var isOutside = void 0;
          if (horizontal) {
            var elemLeftBound = 0;
            var elemRightBound = 0;
            var containerLeft = 0;
            if (scrollSpyContainer.getBoundingClientRect) {
              var containerCords = scrollSpyContainer.getBoundingClientRect();
              containerLeft = containerCords.left;
            }
            if (!element || _this2.props.isDynamic) {
              element = scroller.get(to);
              if (!element) {
                return;
              }
              var cords = element.getBoundingClientRect();
              elemLeftBound = cords.left - containerLeft + x;
              elemRightBound = elemLeftBound + cords.width;
            }
            var offsetX = x - _this2.props.offset;
            isInside = offsetX >= Math.floor(elemLeftBound) && offsetX < Math.floor(elemRightBound);
            isOutside = offsetX < Math.floor(elemLeftBound) || offsetX >= Math.floor(elemRightBound);
          } else {
            var elemTopBound = 0;
            var elemBottomBound = 0;
            var containerTop = 0;
            if (scrollSpyContainer.getBoundingClientRect) {
              var _containerCords = scrollSpyContainer.getBoundingClientRect();
              containerTop = _containerCords.top;
            }
            if (!element || _this2.props.isDynamic) {
              element = scroller.get(to);
              if (!element) {
                return;
              }
              var _cords = element.getBoundingClientRect();
              elemTopBound = _cords.top - containerTop + y;
              elemBottomBound = elemTopBound + _cords.height;
            }
            var offsetY = y - _this2.props.offset;
            isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
            isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
          }
          var activeLink = scroller.getActiveLink();
          if (isOutside) {
            if (to === activeLink) {
              scroller.setActiveLink(void 0);
            }
            if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
              var _props$saveHashHistor = _this2.props.saveHashHistory, saveHashHistory = _props$saveHashHistor === void 0 ? false : _props$saveHashHistor;
              _scrollHash2.default.changeHash("", saveHashHistory);
            }
            if (_this2.props.spy && _this2.state.active) {
              _this2.setState({ active: false });
              _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
            }
          }
          if (isInside && (activeLink !== to || _this2.state.active === false)) {
            scroller.setActiveLink(to);
            var _props$saveHashHistor2 = _this2.props.saveHashHistory, _saveHashHistory = _props$saveHashHistor2 === void 0 ? false : _props$saveHashHistor2;
            _this2.props.hashSpy && _scrollHash2.default.changeHash(to, _saveHashHistory);
            if (_this2.props.spy) {
              _this2.setState({ active: true });
              _this2.props.onSetActive && _this2.props.onSetActive(to, element);
            }
          }
        };
      };
      Link.propTypes = protoTypes;
      Link.defaultProps = { offset: 0 };
      return Link;
    };
  }
});

// node_modules/react-scroll/modules/components/Link.js
var require_Link = __commonJS({
  "node_modules/react-scroll/modules/components/Link.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _scrollLink = require_scroll_link();
    var _scrollLink2 = _interopRequireDefault(_scrollLink);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var LinkElement = function(_React$Component) {
      _inherits(LinkElement2, _React$Component);
      function LinkElement2() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, LinkElement2);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement2.__proto__ || Object.getPrototypeOf(LinkElement2)).call.apply(_ref, [this].concat(args))), _this), _this.render = function() {
          return _react2.default.createElement(
            "a",
            _this.props,
            _this.props.children
          );
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }
      return LinkElement2;
    }(_react2.default.Component);
    exports.default = (0, _scrollLink2.default)(LinkElement);
  }
});

// node_modules/react-scroll/modules/components/Button.js
var require_Button = __commonJS({
  "node_modules/react-scroll/modules/components/Button.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _scrollLink = require_scroll_link();
    var _scrollLink2 = _interopRequireDefault(_scrollLink);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var ButtonElement = function(_React$Component) {
      _inherits(ButtonElement2, _React$Component);
      function ButtonElement2() {
        _classCallCheck(this, ButtonElement2);
        return _possibleConstructorReturn(this, (ButtonElement2.__proto__ || Object.getPrototypeOf(ButtonElement2)).apply(this, arguments));
      }
      _createClass(ButtonElement2, [{
        key: "render",
        value: function render() {
          return _react2.default.createElement(
            "button",
            this.props,
            this.props.children
          );
        }
      }]);
      return ButtonElement2;
    }(_react2.default.Component);
    exports.default = (0, _scrollLink2.default)(ButtonElement);
  }
});

// node_modules/react-scroll/modules/mixins/scroll-element.js
var require_scroll_element = __commonJS({
  "node_modules/react-scroll/modules/mixins/scroll-element.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _reactDom = require_react_dom();
    var _reactDom2 = _interopRequireDefault(_reactDom);
    var _scroller = require_scroller();
    var _scroller2 = _interopRequireDefault(_scroller);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    exports.default = function(Component) {
      var Element = function(_React$Component) {
        _inherits(Element2, _React$Component);
        function Element2(props) {
          _classCallCheck(this, Element2);
          var _this = _possibleConstructorReturn(this, (Element2.__proto__ || Object.getPrototypeOf(Element2)).call(this, props));
          _this.childBindings = {
            domNode: null
          };
          return _this;
        }
        _createClass(Element2, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            if (typeof window === "undefined") {
              return false;
            }
            this.registerElems(this.props.name);
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate(prevProps) {
            if (this.props.name !== prevProps.name) {
              this.registerElems(this.props.name);
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            if (typeof window === "undefined") {
              return false;
            }
            _scroller2.default.unregister(this.props.name);
          }
        }, {
          key: "registerElems",
          value: function registerElems(name) {
            _scroller2.default.register(name, this.childBindings.domNode);
          }
        }, {
          key: "render",
          value: function render() {
            return _react2.default.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
          }
        }]);
        return Element2;
      }(_react2.default.Component);
      ;
      Element.propTypes = {
        name: _propTypes2.default.string,
        id: _propTypes2.default.string
      };
      return Element;
    };
  }
});

// node_modules/react-scroll/modules/components/Element.js
var require_Element = __commonJS({
  "node_modules/react-scroll/modules/components/Element.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _scrollElement = require_scroll_element();
    var _scrollElement2 = _interopRequireDefault(_scrollElement);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var ElementWrapper = function(_React$Component) {
      _inherits(ElementWrapper2, _React$Component);
      function ElementWrapper2() {
        _classCallCheck(this, ElementWrapper2);
        return _possibleConstructorReturn(this, (ElementWrapper2.__proto__ || Object.getPrototypeOf(ElementWrapper2)).apply(this, arguments));
      }
      _createClass(ElementWrapper2, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          var newProps = _extends({}, this.props);
          delete newProps.name;
          if (newProps.parentBindings) {
            delete newProps.parentBindings;
          }
          return _react2.default.createElement(
            "div",
            _extends({}, newProps, { ref: function ref(el) {
              _this2.props.parentBindings.domNode = el;
            } }),
            this.props.children
          );
        }
      }]);
      return ElementWrapper2;
    }(_react2.default.Component);
    ElementWrapper.propTypes = {
      name: _propTypes2.default.string,
      id: _propTypes2.default.string
    };
    exports.default = (0, _scrollElement2.default)(ElementWrapper);
  }
});

// node_modules/react-scroll/modules/mixins/Helpers.js
var require_Helpers = __commonJS({
  "node_modules/react-scroll/modules/mixins/Helpers.js"(exports, module) {
    "use strict";
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var React = require_react();
    var ReactDOM = require_react_dom();
    var utils = require_utils();
    var scrollSpy = require_scroll_spy();
    var defaultScroller = require_scroller();
    var PropTypes = require_prop_types();
    var scrollHash = require_scroll_hash();
    var protoTypes = {
      to: PropTypes.string.isRequired,
      containerId: PropTypes.string,
      container: PropTypes.object,
      activeClass: PropTypes.string,
      spy: PropTypes.bool,
      smooth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      offset: PropTypes.number,
      delay: PropTypes.number,
      isDynamic: PropTypes.bool,
      onClick: PropTypes.func,
      duration: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
      absolute: PropTypes.bool,
      onSetActive: PropTypes.func,
      onSetInactive: PropTypes.func,
      ignoreCancelEvents: PropTypes.bool,
      hashSpy: PropTypes.bool,
      spyThrottle: PropTypes.number
    };
    var Helpers = {
      Scroll: function Scroll(Component, customScroller) {
        console.warn("Helpers.Scroll is deprecated since v1.7.0");
        var scroller = customScroller || defaultScroller;
        var Scroll2 = function(_React$Component) {
          _inherits(Scroll3, _React$Component);
          function Scroll3(props) {
            _classCallCheck(this, Scroll3);
            var _this = _possibleConstructorReturn(this, (Scroll3.__proto__ || Object.getPrototypeOf(Scroll3)).call(this, props));
            _initialiseProps.call(_this);
            _this.state = {
              active: false
            };
            return _this;
          }
          _createClass(Scroll3, [{
            key: "getScrollSpyContainer",
            value: function getScrollSpyContainer() {
              var containerId = this.props.containerId;
              var container = this.props.container;
              if (containerId) {
                return document.getElementById(containerId);
              }
              if (container && container.nodeType) {
                return container;
              }
              return document;
            }
          }, {
            key: "componentDidMount",
            value: function componentDidMount() {
              if (this.props.spy || this.props.hashSpy) {
                var scrollSpyContainer = this.getScrollSpyContainer();
                if (!scrollSpy.isMounted(scrollSpyContainer)) {
                  scrollSpy.mount(scrollSpyContainer, this.props.spyThrottle);
                }
                if (this.props.hashSpy) {
                  if (!scrollHash.isMounted()) {
                    scrollHash.mount(scroller);
                  }
                  scrollHash.mapContainer(this.props.to, scrollSpyContainer);
                }
                if (this.props.spy) {
                  scrollSpy.addStateHandler(this.stateHandler);
                }
                scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);
                this.setState({
                  container: scrollSpyContainer
                });
              }
            }
          }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
              scrollSpy.unmount(this.stateHandler, this.spyHandler);
            }
          }, {
            key: "render",
            value: function render() {
              var className = "";
              if (this.state && this.state.active) {
                className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
              } else {
                className = this.props.className;
              }
              var props = _extends({}, this.props);
              for (var prop in protoTypes) {
                if (props.hasOwnProperty(prop)) {
                  delete props[prop];
                }
              }
              props.className = className;
              props.onClick = this.handleClick;
              return React.createElement(Component, props);
            }
          }]);
          return Scroll3;
        }(React.Component);
        var _initialiseProps = function _initialiseProps2() {
          var _this2 = this;
          this.scrollTo = function(to, props) {
            scroller.scrollTo(to, _extends({}, _this2.state, props));
          };
          this.handleClick = function(event) {
            if (_this2.props.onClick) {
              _this2.props.onClick(event);
            }
            if (event.stopPropagation) event.stopPropagation();
            if (event.preventDefault) event.preventDefault();
            _this2.scrollTo(_this2.props.to, _this2.props);
          };
          this.stateHandler = function() {
            if (scroller.getActiveLink() !== _this2.props.to) {
              if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
                _this2.props.onSetInactive();
              }
              _this2.setState({ active: false });
            }
          };
          this.spyHandler = function(y) {
            var scrollSpyContainer = _this2.getScrollSpyContainer();
            if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
              return;
            }
            var to = _this2.props.to;
            var element = null;
            var elemTopBound = 0;
            var elemBottomBound = 0;
            var containerTop = 0;
            if (scrollSpyContainer.getBoundingClientRect) {
              var containerCords = scrollSpyContainer.getBoundingClientRect();
              containerTop = containerCords.top;
            }
            if (!element || _this2.props.isDynamic) {
              element = scroller.get(to);
              if (!element) {
                return;
              }
              var cords = element.getBoundingClientRect();
              elemTopBound = cords.top - containerTop + y;
              elemBottomBound = elemTopBound + cords.height;
            }
            var offsetY = y - _this2.props.offset;
            var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
            var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
            var activeLink = scroller.getActiveLink();
            if (isOutside) {
              if (to === activeLink) {
                scroller.setActiveLink(void 0);
              }
              if (_this2.props.hashSpy && scrollHash.getHash() === to) {
                scrollHash.changeHash();
              }
              if (_this2.props.spy && _this2.state.active) {
                _this2.setState({ active: false });
                _this2.props.onSetInactive && _this2.props.onSetInactive();
              }
              return scrollSpy.updateStates();
            }
            if (isInside && activeLink !== to) {
              scroller.setActiveLink(to);
              _this2.props.hashSpy && scrollHash.changeHash(to);
              if (_this2.props.spy) {
                _this2.setState({ active: true });
                _this2.props.onSetActive && _this2.props.onSetActive(to);
              }
              return scrollSpy.updateStates();
            }
          };
        };
        ;
        Scroll2.propTypes = protoTypes;
        Scroll2.defaultProps = { offset: 0 };
        return Scroll2;
      },
      Element: function Element(Component) {
        console.warn("Helpers.Element is deprecated since v1.7.0");
        var Element2 = function(_React$Component2) {
          _inherits(Element3, _React$Component2);
          function Element3(props) {
            _classCallCheck(this, Element3);
            var _this3 = _possibleConstructorReturn(this, (Element3.__proto__ || Object.getPrototypeOf(Element3)).call(this, props));
            _this3.childBindings = {
              domNode: null
            };
            return _this3;
          }
          _createClass(Element3, [{
            key: "componentDidMount",
            value: function componentDidMount() {
              if (typeof window === "undefined") {
                return false;
              }
              this.registerElems(this.props.name);
            }
          }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
              if (this.props.name !== prevProps.name) {
                this.registerElems(this.props.name);
              }
            }
          }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
              if (typeof window === "undefined") {
                return false;
              }
              defaultScroller.unregister(this.props.name);
            }
          }, {
            key: "registerElems",
            value: function registerElems(name) {
              defaultScroller.register(name, this.childBindings.domNode);
            }
          }, {
            key: "render",
            value: function render() {
              return React.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
            }
          }]);
          return Element3;
        }(React.Component);
        ;
        Element2.propTypes = {
          name: PropTypes.string,
          id: PropTypes.string
        };
        return Element2;
      }
    };
    module.exports = Helpers;
  }
});

// node_modules/react-scroll/modules/index.js
var require_modules = __commonJS({
  "node_modules/react-scroll/modules/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Helpers = exports.ScrollElement = exports.ScrollLink = exports.animateScroll = exports.scrollSpy = exports.Events = exports.scroller = exports.Element = exports.Button = exports.Link = void 0;
    var _Link = require_Link();
    var _Link2 = _interopRequireDefault(_Link);
    var _Button = require_Button();
    var _Button2 = _interopRequireDefault(_Button);
    var _Element = require_Element();
    var _Element2 = _interopRequireDefault(_Element);
    var _scroller = require_scroller();
    var _scroller2 = _interopRequireDefault(_scroller);
    var _scrollEvents = require_scroll_events();
    var _scrollEvents2 = _interopRequireDefault(_scrollEvents);
    var _scrollSpy = require_scroll_spy();
    var _scrollSpy2 = _interopRequireDefault(_scrollSpy);
    var _animateScroll = require_animate_scroll();
    var _animateScroll2 = _interopRequireDefault(_animateScroll);
    var _scrollLink = require_scroll_link();
    var _scrollLink2 = _interopRequireDefault(_scrollLink);
    var _scrollElement = require_scroll_element();
    var _scrollElement2 = _interopRequireDefault(_scrollElement);
    var _Helpers = require_Helpers();
    var _Helpers2 = _interopRequireDefault(_Helpers);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.Link = _Link2.default;
    exports.Button = _Button2.default;
    exports.Element = _Element2.default;
    exports.scroller = _scroller2.default;
    exports.Events = _scrollEvents2.default;
    exports.scrollSpy = _scrollSpy2.default;
    exports.animateScroll = _animateScroll2.default;
    exports.ScrollLink = _scrollLink2.default;
    exports.ScrollElement = _scrollElement2.default;
    exports.Helpers = _Helpers2.default;
    exports.default = { Link: _Link2.default, Button: _Button2.default, Element: _Element2.default, scroller: _scroller2.default, Events: _scrollEvents2.default, scrollSpy: _scrollSpy2.default, animateScroll: _animateScroll2.default, ScrollLink: _scrollLink2.default, ScrollElement: _scrollElement2.default, Helpers: _Helpers2.default };
  }
});
export default require_modules();
//# sourceMappingURL=react-scroll.js.map

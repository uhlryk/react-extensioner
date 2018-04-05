(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object")
        module.exports = factory(require("react"));
    else if (typeof define === "function" && define.amd) define(["react"], factory);
    else {
        var a =
            typeof exports === "object"
                ? factory(require("react"))
                : factory(root["React"]);
        for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
    }
})(typeof self !== "undefined" ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
    return /******/ (function(modules) {
        // webpackBootstrap
        /******/ // The module cache
        /******/ var installedModules = {}; // The require function
        /******/
        /******/ /******/ function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) {
                /******/ return installedModules[moduleId].exports;
                /******/
            } // Create a new module (and put it into the cache)
            /******/ /******/ var module = (installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
                /******/
            }); // Execute the module function
            /******/
            /******/ /******/ modules[moduleId].call(
                module.exports,
                module,
                module.exports,
                __webpack_require__
            ); // Flag the module as loaded
            /******/
            /******/ /******/ module.l = true; // Return the exports of the module
            /******/
            /******/ /******/ return module.exports;
            /******/
        } // expose the modules object (__webpack_modules__)
        /******/
        /******/
        /******/ /******/ __webpack_require__.m = modules; // expose the module cache
        /******/
        /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
        /******/
        /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) {
                /******/ Object.defineProperty(exports, name, {
                    /******/ configurable: false,
                    /******/ enumerable: true,
                    /******/ get: getter
                    /******/
                });
                /******/
            }
            /******/
        }; // getDefaultExport function for compatibility with non-harmony modules
        /******/
        /******/ /******/ __webpack_require__.n = function(module) {
            /******/ var getter =
                module && module.__esModule
                    ? /******/ function getDefault() {
                          return module["default"];
                      }
                    : /******/ function getModuleExports() {
                          return module;
                      };
            /******/ __webpack_require__.d(getter, "a", getter);
            /******/ return getter;
            /******/
        }; // Object.prototype.hasOwnProperty.call
        /******/
        /******/ /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }; // __webpack_public_path__
        /******/
        /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
        /******/
        /******/ /******/ return __webpack_require__((__webpack_require__.s = 9));
        /******/
    })(
        /************************************************************************/
        /******/ [
            /* 0 */
            /***/ function(module, exports) {
                // shim for using process in browser
                var process = (module.exports = {});

                // cached from whatever global is present so that test runners that stub it
                // don't break things.  But we need to wrap it in a try catch in case it is
                // wrapped in strict mode code which doesn't define any globals.  It's inside a
                // function because try/catches deoptimize in certain engines.

                var cachedSetTimeout;
                var cachedClearTimeout;

                function defaultSetTimout() {
                    throw new Error("setTimeout has not been defined");
                }
                function defaultClearTimeout() {
                    throw new Error("clearTimeout has not been defined");
                }
                (function() {
                    try {
                        if (typeof setTimeout === "function") {
                            cachedSetTimeout = setTimeout;
                        } else {
                            cachedSetTimeout = defaultSetTimout;
                        }
                    } catch (e) {
                        cachedSetTimeout = defaultSetTimout;
                    }
                    try {
                        if (typeof clearTimeout === "function") {
                            cachedClearTimeout = clearTimeout;
                        } else {
                            cachedClearTimeout = defaultClearTimeout;
                        }
                    } catch (e) {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                })();
                function runTimeout(fun) {
                    if (cachedSetTimeout === setTimeout) {
                        //normal enviroments in sane situations
                        return setTimeout(fun, 0);
                    }
                    // if setTimeout wasn't available but was latter defined
                    if (
                        (cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) &&
                        setTimeout
                    ) {
                        cachedSetTimeout = setTimeout;
                        return setTimeout(fun, 0);
                    }
                    try {
                        // when when somebody has screwed with setTimeout but no I.E. maddness
                        return cachedSetTimeout(fun, 0);
                    } catch (e) {
                        try {
                            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                            return cachedSetTimeout.call(null, fun, 0);
                        } catch (e) {
                            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                            return cachedSetTimeout.call(this, fun, 0);
                        }
                    }
                }
                function runClearTimeout(marker) {
                    if (cachedClearTimeout === clearTimeout) {
                        //normal enviroments in sane situations
                        return clearTimeout(marker);
                    }
                    // if clearTimeout wasn't available but was latter defined
                    if (
                        (cachedClearTimeout === defaultClearTimeout ||
                            !cachedClearTimeout) &&
                        clearTimeout
                    ) {
                        cachedClearTimeout = clearTimeout;
                        return clearTimeout(marker);
                    }
                    try {
                        // when when somebody has screwed with setTimeout but no I.E. maddness
                        return cachedClearTimeout(marker);
                    } catch (e) {
                        try {
                            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                            return cachedClearTimeout.call(null, marker);
                        } catch (e) {
                            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                            return cachedClearTimeout.call(this, marker);
                        }
                    }
                }
                var queue = [];
                var draining = false;
                var currentQueue;
                var queueIndex = -1;

                function cleanUpNextTick() {
                    if (!draining || !currentQueue) {
                        return;
                    }
                    draining = false;
                    if (currentQueue.length) {
                        queue = currentQueue.concat(queue);
                    } else {
                        queueIndex = -1;
                    }
                    if (queue.length) {
                        drainQueue();
                    }
                }

                function drainQueue() {
                    if (draining) {
                        return;
                    }
                    var timeout = runTimeout(cleanUpNextTick);
                    draining = true;

                    var len = queue.length;
                    while (len) {
                        currentQueue = queue;
                        queue = [];
                        while (++queueIndex < len) {
                            if (currentQueue) {
                                currentQueue[queueIndex].run();
                            }
                        }
                        queueIndex = -1;
                        len = queue.length;
                    }
                    currentQueue = null;
                    draining = false;
                    runClearTimeout(timeout);
                }

                process.nextTick = function(fun) {
                    var args = new Array(arguments.length - 1);
                    if (arguments.length > 1) {
                        for (var i = 1; i < arguments.length; i++) {
                            args[i - 1] = arguments[i];
                        }
                    }
                    queue.push(new Item(fun, args));
                    if (queue.length === 1 && !draining) {
                        runTimeout(drainQueue);
                    }
                };

                // v8 likes predictible objects
                function Item(fun, array) {
                    this.fun = fun;
                    this.array = array;
                }
                Item.prototype.run = function() {
                    this.fun.apply(null, this.array);
                };
                process.title = "browser";
                process.browser = true;
                process.env = {};
                process.argv = [];
                process.version = ""; // empty string to avoid regexp issues
                process.versions = {};

                function noop() {}

                process.on = noop;
                process.addListener = noop;
                process.once = noop;
                process.off = noop;
                process.removeListener = noop;
                process.removeAllListeners = noop;
                process.emit = noop;
                process.prependListener = noop;
                process.prependOnceListener = noop;

                process.listeners = function(name) {
                    return [];
                };

                process.binding = function(name) {
                    throw new Error("process.binding is not supported");
                };

                process.cwd = function() {
                    return "/";
                };
                process.chdir = function(dir) {
                    throw new Error("process.chdir is not supported");
                };
                process.umask = function() {
                    return 0;
                };

                /***/
            },
            /* 1 */
            /***/ function(module, exports) {
                module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

                /***/
            },
            /* 2 */
            /***/ function(module, exports, __webpack_require__) {
                "use strict";

                /**
                 * Copyright (c) 2013-present, Facebook, Inc.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 *
                 *
                 */

                function makeEmptyFunction(arg) {
                    return function() {
                        return arg;
                    };
                }

                /**
                 * This function accepts and discards inputs; it has no side effects. This is
                 * primarily useful idiomatically for overridable function endpoints which
                 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
                 */
                var emptyFunction = function emptyFunction() {};

                emptyFunction.thatReturns = makeEmptyFunction;
                emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
                emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
                emptyFunction.thatReturnsNull = makeEmptyFunction(null);
                emptyFunction.thatReturnsThis = function() {
                    return this;
                };
                emptyFunction.thatReturnsArgument = function(arg) {
                    return arg;
                };

                module.exports = emptyFunction;

                /***/
            },
            /* 3 */
            /***/ function(module, exports, __webpack_require__) {
                "use strict";
                /* WEBPACK VAR INJECTION */ (function(process) {
                    /**
                     * Copyright (c) 2013-present, Facebook, Inc.
                     *
                     * This source code is licensed under the MIT license found in the
                     * LICENSE file in the root directory of this source tree.
                     *
                     */

                    /**
                     * Use invariant() to assert state which your program assumes to be true.
                     *
                     * Provide sprintf-style format (only %s is supported) and arguments
                     * to provide information about what broke and what you were
                     * expecting.
                     *
                     * The invariant message will be stripped in production, but the invariant
                     * will remain to ensure logic does not differ in production.
                     */

                    var validateFormat = function validateFormat(format) {};

                    if (process.env.NODE_ENV !== "production") {
                        validateFormat = function validateFormat(format) {
                            if (format === undefined) {
                                throw new Error(
                                    "invariant requires an error message argument"
                                );
                            }
                        };
                    }

                    function invariant(condition, format, a, b, c, d, e, f) {
                        validateFormat(format);

                        if (!condition) {
                            var error;
                            if (format === undefined) {
                                error = new Error(
                                    "Minified exception occurred; use the non-minified dev environment " +
                                        "for the full error message and additional helpful warnings."
                                );
                            } else {
                                var args = [a, b, c, d, e, f];
                                var argIndex = 0;
                                error = new Error(
                                    format.replace(/%s/g, function() {
                                        return args[argIndex++];
                                    })
                                );
                                error.name = "Invariant Violation";
                            }

                            error.framesToPop = 1; // we don't care about invariant's own frame
                            throw error;
                        }
                    }

                    module.exports = invariant;
                    /* WEBPACK VAR INJECTION */
                }.call(exports, __webpack_require__(0)));

                /***/
            },
            /* 4 */
            /***/ function(module, exports, __webpack_require__) {
                "use strict";
                /**
                 * Copyright (c) 2013-present, Facebook, Inc.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */

                var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

                module.exports = ReactPropTypesSecret;

                /***/
            },
            /* 5 */
            /***/ function(module, exports, __webpack_require__) {
                "use strict";

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _react = __webpack_require__(1);

                var _react2 = _interopRequireDefault(_react);

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj };
                }

                exports.default = _react2.default.createContext();

                /***/
            },
            /* 6 */
            /***/ function(module, exports) {
                var g;

                // This works in non-strict mode
                g = (function() {
                    return this;
                })();

                try {
                    // This works if eval is allowed (see CSP)
                    g = g || Function("return this")() || (1, eval)("this");
                } catch (e) {
                    // This works if the window reference is available
                    if (typeof window === "object") g = window;
                }

                // g can still be undefined, but nothing to do about it...
                // We return undefined, instead of nothing here, so it's
                // easier to handle this case. if(!global) { ...}

                module.exports = g;

                /***/
            },
            /* 7 */
            /***/ function(module, exports, __webpack_require__) {
                /* WEBPACK VAR INJECTION */ (function(process) {
                    /**
                     * Copyright (c) 2013-present, Facebook, Inc.
                     *
                     * This source code is licensed under the MIT license found in the
                     * LICENSE file in the root directory of this source tree.
                     */

                    if (process.env.NODE_ENV !== "production") {
                        var REACT_ELEMENT_TYPE =
                            (typeof Symbol === "function" &&
                                Symbol.for &&
                                Symbol.for("react.element")) ||
                            0xeac7;

                        var isValidElement = function(object) {
                            return (
                                typeof object === "object" &&
                                object !== null &&
                                object.$$typeof === REACT_ELEMENT_TYPE
                            );
                        };

                        // By explicitly using `prop-types` you are opting into new development behavior.
                        // http://fb.me/prop-types-in-prod
                        var throwOnDirectAccess = true;
                        module.exports = __webpack_require__(11)(
                            isValidElement,
                            throwOnDirectAccess
                        );
                    } else {
                        // By explicitly using `prop-types` you are opting into new production behavior.
                        // http://fb.me/prop-types-in-prod
                        module.exports = __webpack_require__(14)();
                    }

                    /* WEBPACK VAR INJECTION */
                }.call(exports, __webpack_require__(0)));

                /***/
            },
            /* 8 */
            /***/ function(module, exports, __webpack_require__) {
                "use strict";
                /* WEBPACK VAR INJECTION */ (function(process) {
                    /**
                     * Copyright (c) 2014-present, Facebook, Inc.
                     *
                     * This source code is licensed under the MIT license found in the
                     * LICENSE file in the root directory of this source tree.
                     *
                     */

                    var emptyFunction = __webpack_require__(2);

                    /**
                     * Similar to invariant but only logs a warning if the condition is not met.
                     * This can be used to log issues in development environments in critical
                     * paths. Removing the logging code for production environments will keep the
                     * same logic and follow the same code paths.
                     */

                    var warning = emptyFunction;

                    if (process.env.NODE_ENV !== "production") {
                        var printWarning = function printWarning(format) {
                            for (
                                var _len = arguments.length,
                                    args = Array(_len > 1 ? _len - 1 : 0),
                                    _key = 1;
                                _key < _len;
                                _key++
                            ) {
                                args[_key - 1] = arguments[_key];
                            }

                            var argIndex = 0;
                            var message =
                                "Warning: " +
                                format.replace(/%s/g, function() {
                                    return args[argIndex++];
                                });
                            if (typeof console !== "undefined") {
                                console.error(message);
                            }
                            try {
                                // --- Welcome to debugging React ---
                                // This error was thrown as a convenience so that you can use this stack
                                // to find the callsite that caused this warning to fire.
                                throw new Error(message);
                            } catch (x) {}
                        };

                        warning = function warning(condition, format) {
                            if (format === undefined) {
                                throw new Error(
                                    "`warning(condition, format, ...args)` requires a warning " +
                                        "message argument"
                                );
                            }

                            if (format.indexOf("Failed Composite propType: ") === 0) {
                                return; // Ignore CompositeComponent proptype check.
                            }

                            if (!condition) {
                                for (
                                    var _len2 = arguments.length,
                                        args = Array(_len2 > 2 ? _len2 - 2 : 0),
                                        _key2 = 2;
                                    _key2 < _len2;
                                    _key2++
                                ) {
                                    args[_key2 - 2] = arguments[_key2];
                                }

                                printWarning.apply(undefined, [format].concat(args));
                            }
                        };
                    }

                    module.exports = warning;
                    /* WEBPACK VAR INJECTION */
                }.call(exports, __webpack_require__(0)));

                /***/
            },
            /* 9 */
            /***/ function(module, exports, __webpack_require__) {
                "use strict";

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.withProperties = exports.ExtensionerEvent = exports.ExtensionerProvider = undefined;

                var _ExtensionerProvider2 = __webpack_require__(10);

                var _ExtensionerProvider3 = _interopRequireDefault(_ExtensionerProvider2);

                var _ExtensionerEvent2 = __webpack_require__(15);

                var _ExtensionerEvent3 = _interopRequireDefault(_ExtensionerEvent2);

                var _withProperties2 = __webpack_require__(24);

                var _withProperties3 = _interopRequireDefault(_withProperties2);

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj };
                }

                exports.ExtensionerProvider = _ExtensionerProvider3.default;
                exports.ExtensionerEvent = _ExtensionerEvent3.default;
                exports.withProperties = _withProperties3.default;

                /***/
            },
            /* 10 */
            /***/ function(module, exports, __webpack_require__) {
                "use strict";

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _createClass = (function() {
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
                        if (protoProps)
                            defineProperties(Constructor.prototype, protoProps);
                        if (staticProps) defineProperties(Constructor, staticProps);
                        return Constructor;
                    };
                })();

                var _react = __webpack_require__(1);

                var _react2 = _interopRequireDefault(_react);

                var _propTypes = __webpack_require__(7);

                var _propTypes2 = _interopRequireDefault(_propTypes);

                var _ExtensionerManagerContext = __webpack_require__(5);

                var _ExtensionerManagerContext2 = _interopRequireDefault(
                    _ExtensionerManagerContext
                );

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj };
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                function _possibleConstructorReturn(self, call) {
                    if (!self) {
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    }
                    return call &&
                        (typeof call === "object" || typeof call === "function")
                        ? call
                        : self;
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                        throw new TypeError(
                            "Super expression must either be null or a function, not " +
                                typeof superClass
                        );
                    }
                    subClass.prototype = Object.create(
                        superClass && superClass.prototype,
                        {
                            constructor: {
                                value: subClass,
                                enumerable: false,
                                writable: true,
                                configurable: true
                            }
                        }
                    );
                    if (superClass)
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf(subClass, superClass)
                            : (subClass.__proto__ = superClass);
                }

                let ExtensionerProvider = (function(_React$Component) {
                    _inherits(ExtensionerProvider, _React$Component);

                    function ExtensionerProvider() {
                        _classCallCheck(this, ExtensionerProvider);

                        return _possibleConstructorReturn(
                            this,
                            (
                                ExtensionerProvider.__proto__ ||
                                Object.getPrototypeOf(ExtensionerProvider)
                            ).apply(this, arguments)
                        );
                    }

                    _createClass(ExtensionerProvider, [
                        {
                            key: "render",
                            value: function render() {
                                return _react2.default.createElement(
                                    _ExtensionerManagerContext2.default.Provider,
                                    { value: this.props.manager },
                                    this.props.children
                                );
                            }
                        }
                    ]);

                    return ExtensionerProvider;
                })(_react2.default.Component);

                ExtensionerProvider.propTypes = {
                    manager: _propTypes2.default.object.isRequired,
                    children: _propTypes2.default.oneOfType([
                        _propTypes2.default.arrayOf(_propTypes2.default.node),
                        _propTypes2.default.node
                    ])
                };

                exports.default = ExtensionerProvider;

                /***/
            },
            /* 11 */
            /***/ function(module, exports, __webpack_require__) {
                "use strict";
                /* WEBPACK VAR INJECTION */ (function(process) {
                    /**
                     * Copyright (c) 2013-present, Facebook, Inc.
                     *
                     * This source code is licensed under the MIT license found in the
                     * LICENSE file in the root directory of this source tree.
                     */

                    var emptyFunction = __webpack_require__(2);
                    var invariant = __webpack_require__(3);
                    var warning = __webpack_require__(8);
                    var assign = __webpack_require__(12);

                    var ReactPropTypesSecret = __webpack_require__(4);
                    var checkPropTypes = __webpack_require__(13);

                    module.exports = function(isValidElement, throwOnDirectAccess) {
                        /* global Symbol */
                        var ITERATOR_SYMBOL =
                            typeof Symbol === "function" && Symbol.iterator;
                        var FAUX_ITERATOR_SYMBOL = "@@iterator"; // Before Symbol spec.

                        /**
                         * Returns the iterator method function contained on the iterable object.
                         *
                         * Be sure to invoke the function with the iterable as context:
                         *
                         *     var iteratorFn = getIteratorFn(myIterable);
                         *     if (iteratorFn) {
                         *       var iterator = iteratorFn.call(myIterable);
                         *       ...
                         *     }
                         *
                         * @param {?object} maybeIterable
                         * @return {?function}
                         */
                        function getIteratorFn(maybeIterable) {
                            var iteratorFn =
                                maybeIterable &&
                                ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
                                    maybeIterable[FAUX_ITERATOR_SYMBOL]);
                            if (typeof iteratorFn === "function") {
                                return iteratorFn;
                            }
                        }

                        /**
                         * Collection of methods that allow declaration and validation of props that are
                         * supplied to React components. Example usage:
                         *
                         *   var Props = require('ReactPropTypes');
                         *   var MyArticle = React.createClass({
                         *     propTypes: {
                         *       // An optional string prop named "description".
                         *       description: Props.string,
                         *
                         *       // A required enum prop named "category".
                         *       category: Props.oneOf(['News','Photos']).isRequired,
                         *
                         *       // A prop named "dialog" that requires an instance of Dialog.
                         *       dialog: Props.instanceOf(Dialog).isRequired
                         *     },
                         *     render: function() { ... }
                         *   });
                         *
                         * A more formal specification of how these methods are used:
                         *
                         *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
                         *   decl := ReactPropTypes.{type}(.isRequired)?
                         *
                         * Each and every declaration produces a function with the same signature. This
                         * allows the creation of custom validation functions. For example:
                         *
                         *  var MyLink = React.createClass({
                         *    propTypes: {
                         *      // An optional string or URI prop named "href".
                         *      href: function(props, propName, componentName) {
                         *        var propValue = props[propName];
                         *        if (propValue != null && typeof propValue !== 'string' &&
                         *            !(propValue instanceof URI)) {
                         *          return new Error(
                         *            'Expected a string or an URI for ' + propName + ' in ' +
                         *            componentName
                         *          );
                         *        }
                         *      }
                         *    },
                         *    render: function() {...}
                         *  });
                         *
                         * @internal
                         */

                        var ANONYMOUS = "<<anonymous>>";

                        // Important!
                        // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
                        var ReactPropTypes = {
                            array: createPrimitiveTypeChecker("array"),
                            bool: createPrimitiveTypeChecker("boolean"),
                            func: createPrimitiveTypeChecker("function"),
                            number: createPrimitiveTypeChecker("number"),
                            object: createPrimitiveTypeChecker("object"),
                            string: createPrimitiveTypeChecker("string"),
                            symbol: createPrimitiveTypeChecker("symbol"),

                            any: createAnyTypeChecker(),
                            arrayOf: createArrayOfTypeChecker,
                            element: createElementTypeChecker(),
                            instanceOf: createInstanceTypeChecker,
                            node: createNodeChecker(),
                            objectOf: createObjectOfTypeChecker,
                            oneOf: createEnumTypeChecker,
                            oneOfType: createUnionTypeChecker,
                            shape: createShapeTypeChecker,
                            exact: createStrictShapeTypeChecker
                        };

                        /**
                         * inlined Object.is polyfill to avoid requiring consumers ship their own
                         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
                         */
                        /*eslint-disable no-self-compare*/
                        function is(x, y) {
                            // SameValue algorithm
                            if (x === y) {
                                // Steps 1-5, 7-10
                                // Steps 6.b-6.e: +0 != -0
                                return x !== 0 || 1 / x === 1 / y;
                            } else {
                                // Step 6.a: NaN == NaN
                                return x !== x && y !== y;
                            }
                        }
                        /*eslint-enable no-self-compare*/

                        /**
                         * We use an Error-like object for backward compatibility as people may call
                         * PropTypes directly and inspect their output. However, we don't use real
                         * Errors anymore. We don't inspect their stack anyway, and creating them
                         * is prohibitively expensive if they are created too often, such as what
                         * happens in oneOfType() for any type before the one that matched.
                         */
                        function PropTypeError(message) {
                            this.message = message;
                            this.stack = "";
                        }
                        // Make `instanceof Error` still work for returned errors.
                        PropTypeError.prototype = Error.prototype;

                        function createChainableTypeChecker(validate) {
                            if (process.env.NODE_ENV !== "production") {
                                var manualPropTypeCallCache = {};
                                var manualPropTypeWarningCount = 0;
                            }
                            function checkType(
                                isRequired,
                                props,
                                propName,
                                componentName,
                                location,
                                propFullName,
                                secret
                            ) {
                                componentName = componentName || ANONYMOUS;
                                propFullName = propFullName || propName;

                                if (secret !== ReactPropTypesSecret) {
                                    if (throwOnDirectAccess) {
                                        // New behavior only for users of `prop-types` package
                                        invariant(
                                            false,
                                            "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
                                                "Use `PropTypes.checkPropTypes()` to call them. " +
                                                "Read more at http://fb.me/use-check-prop-types"
                                        );
                                    } else if (
                                        process.env.NODE_ENV !== "production" &&
                                        typeof console !== "undefined"
                                    ) {
                                        // Old behavior for people using React.PropTypes
                                        var cacheKey = componentName + ":" + propName;
                                        if (
                                            !manualPropTypeCallCache[cacheKey] &&
                                            // Avoid spamming the console because they are often not actionable except for lib authors
                                            manualPropTypeWarningCount < 3
                                        ) {
                                            warning(
                                                false,
                                                "You are manually calling a React.PropTypes validation " +
                                                    "function for the `%s` prop on `%s`. This is deprecated " +
                                                    "and will throw in the standalone `prop-types` package. " +
                                                    "You may be seeing this warning due to a third-party PropTypes " +
                                                    "library. See https://fb.me/react-warning-dont-call-proptypes " +
                                                    "for details.",
                                                propFullName,
                                                componentName
                                            );
                                            manualPropTypeCallCache[cacheKey] = true;
                                            manualPropTypeWarningCount++;
                                        }
                                    }
                                }
                                if (props[propName] == null) {
                                    if (isRequired) {
                                        if (props[propName] === null) {
                                            return new PropTypeError(
                                                "The " +
                                                    location +
                                                    " `" +
                                                    propFullName +
                                                    "` is marked as required " +
                                                    ("in `" +
                                                        componentName +
                                                        "`, but its value is `null`.")
                                            );
                                        }
                                        return new PropTypeError(
                                            "The " +
                                                location +
                                                " `" +
                                                propFullName +
                                                "` is marked as required in " +
                                                ("`" +
                                                    componentName +
                                                    "`, but its value is `undefined`.")
                                        );
                                    }
                                    return null;
                                } else {
                                    return validate(
                                        props,
                                        propName,
                                        componentName,
                                        location,
                                        propFullName
                                    );
                                }
                            }

                            var chainedCheckType = checkType.bind(null, false);
                            chainedCheckType.isRequired = checkType.bind(null, true);

                            return chainedCheckType;
                        }

                        function createPrimitiveTypeChecker(expectedType) {
                            function validate(
                                props,
                                propName,
                                componentName,
                                location,
                                propFullName,
                                secret
                            ) {
                                var propValue = props[propName];
                                var propType = getPropType(propValue);
                                if (propType !== expectedType) {
                                    // `propValue` being instance of, say, date/regexp, pass the 'object'
                                    // check, but we can offer a more precise error message here rather than
                                    // 'of type `object`'.
                                    var preciseType = getPreciseType(propValue);

                                    return new PropTypeError(
                                        "Invalid " +
                                            location +
                                            " `" +
                                            propFullName +
                                            "` of type " +
                                            ("`" +
                                                preciseType +
                                                "` supplied to `" +
                                                componentName +
                                                "`, expected ") +
                                            ("`" + expectedType + "`.")
                                    );
                                }
                                return null;
                            }
                            return createChainableTypeChecker(validate);
                        }

                        function createAnyTypeChecker() {
                            return createChainableTypeChecker(
                                emptyFunction.thatReturnsNull
                            );
                        }

                        function createArrayOfTypeChecker(typeChecker) {
                            function validate(
                                props,
                                propName,
                                componentName,
                                location,
                                propFullName
                            ) {
                                if (typeof typeChecker !== "function") {
                                    return new PropTypeError(
                                        "Property `" +
                                            propFullName +
                                            "` of component `" +
                                            componentName +
                                            "` has invalid PropType notation inside arrayOf."
                                    );
                                }
                                var propValue = props[propName];
                                if (!Array.isArray(propValue)) {
                                    var propType = getPropType(propValue);
                                    return new PropTypeError(
                                        "Invalid " +
                                            location +
                                            " `" +
                                            propFullName +
                                            "` of type " +
                                            ("`" +
                                                propType +
                                                "` supplied to `" +
                                                componentName +
                                                "`, expected an array.")
                                    );
                                }
                                for (var i = 0; i < propValue.length; i++) {
                                    var error = typeChecker(
                                        propValue,
                                        i,
                                        componentName,
                                        location,
                                        propFullName + "[" + i + "]",
                                        ReactPropTypesSecret
                                    );
                                    if (error instanceof Error) {
                                        return error;
                                    }
                                }
                                return null;
                            }
                            return createChainableTypeChecker(validate);
                        }

                        function createElementTypeChecker() {
                            function validate(
                                props,
                                propName,
                                componentName,
                                location,
                                propFullName
                            ) {
                                var propValue = props[propName];
                                if (!isValidElement(propValue)) {
                                    var propType = getPropType(propValue);
                                    return new PropTypeError(
                                        "Invalid " +
                                            location +
                                            " `" +
                                            propFullName +
                                            "` of type " +
                                            ("`" +
                                                propType +
                                                "` supplied to `" +
                                                componentName +
                                                "`, expected a single ReactElement.")
                                    );
                                }
                                return null;
                            }
                            return createChainableTypeChecker(validate);
                        }

                        function createInstanceTypeChecker(expectedClass) {
                            function validate(
                                props,
                                propName,
                                componentName,
                                location,
                                propFullName
                            ) {
                                if (!(props[propName] instanceof expectedClass)) {
                                    var expectedClassName =
                                        expectedClass.name || ANONYMOUS;
                                    var actualClassName = getClassName(props[propName]);
                                    return new PropTypeError(
                                        "Invalid " +
                                            location +
                                            " `" +
                                            propFullName +
                                            "` of type " +
                                            ("`" +
                                                actualClassName +
                                                "` supplied to `" +
                                                componentName +
                                                "`, expected ") +
                                            ("instance of `" + expectedClassName + "`.")
                                    );
                                }
                                return null;
                            }
                            return createChainableTypeChecker(validate);
                        }

                        function createEnumTypeChecker(expectedValues) {
                            if (!Array.isArray(expectedValues)) {
                                process.env.NODE_ENV !== "production"
                                    ? warning(
                                          false,
                                          "Invalid argument supplied to oneOf, expected an instance of array."
                                      )
                                    : void 0;
                                return emptyFunction.thatReturnsNull;
                            }

                            function validate(
                                props,
                                propName,
                                componentName,
                                location,
                                propFullName
                            ) {
                                var propValue = props[propName];
                                for (var i = 0; i < expectedValues.length; i++) {
                                    if (is(propValue, expectedValues[i])) {
                                        return null;
                                    }
                                }

                                var valuesString = JSON.stringify(expectedValues);
                                return new PropTypeError(
                                    "Invalid " +
                                        location +
                                        " `" +
                                        propFullName +
                                        "` of value `" +
                                        propValue +
                                        "` " +
                                        ("supplied to `" +
                                            componentName +
                                            "`, expected one of " +
                                            valuesString +
                                            ".")
                                );
                            }
                            return createChainableTypeChecker(validate);
                        }

                        function createObjectOfTypeChecker(typeChecker) {
                            function validate(
                                props,
                                propName,
                                componentName,
                                location,
                                propFullName
                            ) {
                                if (typeof typeChecker !== "function") {
                                    return new PropTypeError(
                                        "Property `" +
                                            propFullName +
                                            "` of component `" +
                                            componentName +
                                            "` has invalid PropType notation inside objectOf."
                                    );
                                }
                                var propValue = props[propName];
                                var propType = getPropType(propValue);
                                if (propType !== "object") {
                                    return new PropTypeError(
                                        "Invalid " +
                                            location +
                                            " `" +
                                            propFullName +
                                            "` of type " +
                                            ("`" +
                                                propType +
                                                "` supplied to `" +
                                                componentName +
                                                "`, expected an object.")
                                    );
                                }
                                for (var key in propValue) {
                                    if (propValue.hasOwnProperty(key)) {
                                        var error = typeChecker(
                                            propValue,
                                            key,
                                            componentName,
                                            location,
                                            propFullName + "." + key,
                                            ReactPropTypesSecret
                                        );
                                        if (error instanceof Error) {
                                            return error;
                                        }
                                    }
                                }
                                return null;
                            }
                            return createChainableTypeChecker(validate);
                        }

                        function createUnionTypeChecker(arrayOfTypeCheckers) {
                            if (!Array.isArray(arrayOfTypeCheckers)) {
                                process.env.NODE_ENV !== "production"
                                    ? warning(
                                          false,
                                          "Invalid argument supplied to oneOfType, expected an instance of array."
                                      )
                                    : void 0;
                                return emptyFunction.thatReturnsNull;
                            }

                            for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                                var checker = arrayOfTypeCheckers[i];
                                if (typeof checker !== "function") {
                                    warning(
                                        false,
                                        "Invalid argument supplied to oneOfType. Expected an array of check functions, but " +
                                            "received %s at index %s.",
                                        getPostfixForTypeWarning(checker),
                                        i
                                    );
                                    return emptyFunction.thatReturnsNull;
                                }
                            }

                            function validate(
                                props,
                                propName,
                                componentName,
                                location,
                                propFullName
                            ) {
                                for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                                    var checker = arrayOfTypeCheckers[i];
                                    if (
                                        checker(
                                            props,
                                            propName,
                                            componentName,
                                            location,
                                            propFullName,
                                            ReactPropTypesSecret
                                        ) == null
                                    ) {
                                        return null;
                                    }
                                }

                                return new PropTypeError(
                                    "Invalid " +
                                        location +
                                        " `" +
                                        propFullName +
                                        "` supplied to " +
                                        ("`" + componentName + "`.")
                                );
                            }
                            return createChainableTypeChecker(validate);
                        }

                        function createNodeChecker() {
                            function validate(
                                props,
                                propName,
                                componentName,
                                location,
                                propFullName
                            ) {
                                if (!isNode(props[propName])) {
                                    return new PropTypeError(
                                        "Invalid " +
                                            location +
                                            " `" +
                                            propFullName +
                                            "` supplied to " +
                                            ("`" +
                                                componentName +
                                                "`, expected a ReactNode.")
                                    );
                                }
                                return null;
                            }
                            return createChainableTypeChecker(validate);
                        }

                        function createShapeTypeChecker(shapeTypes) {
                            function validate(
                                props,
                                propName,
                                componentName,
                                location,
                                propFullName
                            ) {
                                var propValue = props[propName];
                                var propType = getPropType(propValue);
                                if (propType !== "object") {
                                    return new PropTypeError(
                                        "Invalid " +
                                            location +
                                            " `" +
                                            propFullName +
                                            "` of type `" +
                                            propType +
                                            "` " +
                                            ("supplied to `" +
                                                componentName +
                                                "`, expected `object`.")
                                    );
                                }
                                for (var key in shapeTypes) {
                                    var checker = shapeTypes[key];
                                    if (!checker) {
                                        continue;
                                    }
                                    var error = checker(
                                        propValue,
                                        key,
                                        componentName,
                                        location,
                                        propFullName + "." + key,
                                        ReactPropTypesSecret
                                    );
                                    if (error) {
                                        return error;
                                    }
                                }
                                return null;
                            }
                            return createChainableTypeChecker(validate);
                        }

                        function createStrictShapeTypeChecker(shapeTypes) {
                            function validate(
                                props,
                                propName,
                                componentName,
                                location,
                                propFullName
                            ) {
                                var propValue = props[propName];
                                var propType = getPropType(propValue);
                                if (propType !== "object") {
                                    return new PropTypeError(
                                        "Invalid " +
                                            location +
                                            " `" +
                                            propFullName +
                                            "` of type `" +
                                            propType +
                                            "` " +
                                            ("supplied to `" +
                                                componentName +
                                                "`, expected `object`.")
                                    );
                                }
                                // We need to check all keys in case some are required but missing from
                                // props.
                                var allKeys = assign({}, props[propName], shapeTypes);
                                for (var key in allKeys) {
                                    var checker = shapeTypes[key];
                                    if (!checker) {
                                        return new PropTypeError(
                                            "Invalid " +
                                                location +
                                                " `" +
                                                propFullName +
                                                "` key `" +
                                                key +
                                                "` supplied to `" +
                                                componentName +
                                                "`." +
                                                "\nBad object: " +
                                                JSON.stringify(
                                                    props[propName],
                                                    null,
                                                    "  "
                                                ) +
                                                "\nValid keys: " +
                                                JSON.stringify(
                                                    Object.keys(shapeTypes),
                                                    null,
                                                    "  "
                                                )
                                        );
                                    }
                                    var error = checker(
                                        propValue,
                                        key,
                                        componentName,
                                        location,
                                        propFullName + "." + key,
                                        ReactPropTypesSecret
                                    );
                                    if (error) {
                                        return error;
                                    }
                                }
                                return null;
                            }

                            return createChainableTypeChecker(validate);
                        }

                        function isNode(propValue) {
                            switch (typeof propValue) {
                                case "number":
                                case "string":
                                case "undefined":
                                    return true;
                                case "boolean":
                                    return !propValue;
                                case "object":
                                    if (Array.isArray(propValue)) {
                                        return propValue.every(isNode);
                                    }
                                    if (propValue === null || isValidElement(propValue)) {
                                        return true;
                                    }

                                    var iteratorFn = getIteratorFn(propValue);
                                    if (iteratorFn) {
                                        var iterator = iteratorFn.call(propValue);
                                        var step;
                                        if (iteratorFn !== propValue.entries) {
                                            while (!(step = iterator.next()).done) {
                                                if (!isNode(step.value)) {
                                                    return false;
                                                }
                                            }
                                        } else {
                                            // Iterator will provide entry [k,v] tuples rather than values.
                                            while (!(step = iterator.next()).done) {
                                                var entry = step.value;
                                                if (entry) {
                                                    if (!isNode(entry[1])) {
                                                        return false;
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        return false;
                                    }

                                    return true;
                                default:
                                    return false;
                            }
                        }

                        function isSymbol(propType, propValue) {
                            // Native Symbol.
                            if (propType === "symbol") {
                                return true;
                            }

                            // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
                            if (propValue["@@toStringTag"] === "Symbol") {
                                return true;
                            }

                            // Fallback for non-spec compliant Symbols which are polyfilled.
                            if (
                                typeof Symbol === "function" &&
                                propValue instanceof Symbol
                            ) {
                                return true;
                            }

                            return false;
                        }

                        // Equivalent of `typeof` but with special handling for array and regexp.
                        function getPropType(propValue) {
                            var propType = typeof propValue;
                            if (Array.isArray(propValue)) {
                                return "array";
                            }
                            if (propValue instanceof RegExp) {
                                // Old webkits (at least until Android 4.0) return 'function' rather than
                                // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
                                // passes PropTypes.object.
                                return "object";
                            }
                            if (isSymbol(propType, propValue)) {
                                return "symbol";
                            }
                            return propType;
                        }

                        // This handles more types than `getPropType`. Only used for error messages.
                        // See `createPrimitiveTypeChecker`.
                        function getPreciseType(propValue) {
                            if (typeof propValue === "undefined" || propValue === null) {
                                return "" + propValue;
                            }
                            var propType = getPropType(propValue);
                            if (propType === "object") {
                                if (propValue instanceof Date) {
                                    return "date";
                                } else if (propValue instanceof RegExp) {
                                    return "regexp";
                                }
                            }
                            return propType;
                        }

                        // Returns a string that is postfixed to a warning about an invalid type.
                        // For example, "undefined" or "of type array"
                        function getPostfixForTypeWarning(value) {
                            var type = getPreciseType(value);
                            switch (type) {
                                case "array":
                                case "object":
                                    return "an " + type;
                                case "boolean":
                                case "date":
                                case "regexp":
                                    return "a " + type;
                                default:
                                    return type;
                            }
                        }

                        // Returns class name of the object, if any.
                        function getClassName(propValue) {
                            if (!propValue.constructor || !propValue.constructor.name) {
                                return ANONYMOUS;
                            }
                            return propValue.constructor.name;
                        }

                        ReactPropTypes.checkPropTypes = checkPropTypes;
                        ReactPropTypes.PropTypes = ReactPropTypes;

                        return ReactPropTypes;
                    };

                    /* WEBPACK VAR INJECTION */
                }.call(exports, __webpack_require__(0)));

                /***/
            },
            /* 12 */
            /***/ function(module, exports, __webpack_require__) {
                "use strict";
                /*
object-assign
(c) Sindre Sorhus
@license MIT
*/

                /* eslint-disable no-unused-vars */
                var getOwnPropertySymbols = Object.getOwnPropertySymbols;
                var hasOwnProperty = Object.prototype.hasOwnProperty;
                var propIsEnumerable = Object.prototype.propertyIsEnumerable;

                function toObject(val) {
                    if (val === null || val === undefined) {
                        throw new TypeError(
                            "Object.assign cannot be called with null or undefined"
                        );
                    }

                    return Object(val);
                }

                function shouldUseNative() {
                    try {
                        if (!Object.assign) {
                            return false;
                        }

                        // Detect buggy property enumeration order in older V8 versions.

                        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
                        var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
                        test1[5] = "de";
                        if (Object.getOwnPropertyNames(test1)[0] === "5") {
                            return false;
                        }

                        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                        var test2 = {};
                        for (var i = 0; i < 10; i++) {
                            test2["_" + String.fromCharCode(i)] = i;
                        }
                        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
                            return test2[n];
                        });
                        if (order2.join("") !== "0123456789") {
                            return false;
                        }

                        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                        var test3 = {};
                        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                            test3[letter] = letter;
                        });
                        if (
                            Object.keys(Object.assign({}, test3)).join("") !==
                            "abcdefghijklmnopqrst"
                        ) {
                            return false;
                        }

                        return true;
                    } catch (err) {
                        // We don't expect any of the above to throw, but better to be safe.
                        return false;
                    }
                }

                module.exports = shouldUseNative()
                    ? Object.assign
                    : function(target, source) {
                          var from;
                          var to = toObject(target);
                          var symbols;

                          for (var s = 1; s < arguments.length; s++) {
                              from = Object(arguments[s]);

                              for (var key in from) {
                                  if (hasOwnProperty.call(from, key)) {
                                      to[key] = from[key];
                                  }
                              }

                              if (getOwnPropertySymbols) {
                                  symbols = getOwnPropertySymbols(from);
                                  for (var i = 0; i < symbols.length; i++) {
                                      if (propIsEnumerable.call(from, symbols[i])) {
                                          to[symbols[i]] = from[symbols[i]];
                                      }
                                  }
                              }
                          }

                          return to;
                      };

                /***/
            },
            /* 13 */
            /***/ function(module, exports, __webpack_require__) {
                "use strict";
                /* WEBPACK VAR INJECTION */ (function(process) {
                    /**
                     * Copyright (c) 2013-present, Facebook, Inc.
                     *
                     * This source code is licensed under the MIT license found in the
                     * LICENSE file in the root directory of this source tree.
                     */

                    if (process.env.NODE_ENV !== "production") {
                        var invariant = __webpack_require__(3);
                        var warning = __webpack_require__(8);
                        var ReactPropTypesSecret = __webpack_require__(4);
                        var loggedTypeFailures = {};
                    }

                    /**
                     * Assert that the values match with the type specs.
                     * Error messages are memorized and will only be shown once.
                     *
                     * @param {object} typeSpecs Map of name to a ReactPropType
                     * @param {object} values Runtime values that need to be type-checked
                     * @param {string} location e.g. "prop", "context", "child context"
                     * @param {string} componentName Name of the component for error messages.
                     * @param {?Function} getStack Returns the component stack.
                     * @private
                     */
                    function checkPropTypes(
                        typeSpecs,
                        values,
                        location,
                        componentName,
                        getStack
                    ) {
                        if (process.env.NODE_ENV !== "production") {
                            for (var typeSpecName in typeSpecs) {
                                if (typeSpecs.hasOwnProperty(typeSpecName)) {
                                    var error;
                                    // Prop type validation may throw. In case they do, we don't want to
                                    // fail the render phase where it didn't fail before. So we log it.
                                    // After these have been cleaned up, we'll let them throw.
                                    try {
                                        // This is intentionally an invariant that gets caught. It's the same
                                        // behavior as without this statement except with a better message.
                                        invariant(
                                            typeof typeSpecs[typeSpecName] === "function",
                                            "%s: %s type `%s` is invalid; it must be a function, usually from " +
                                                "the `prop-types` package, but received `%s`.",
                                            componentName || "React class",
                                            location,
                                            typeSpecName,
                                            typeof typeSpecs[typeSpecName]
                                        );
                                        error = typeSpecs[typeSpecName](
                                            values,
                                            typeSpecName,
                                            componentName,
                                            location,
                                            null,
                                            ReactPropTypesSecret
                                        );
                                    } catch (ex) {
                                        error = ex;
                                    }
                                    warning(
                                        !error || error instanceof Error,
                                        "%s: type specification of %s `%s` is invalid; the type checker " +
                                            "function must return `null` or an `Error` but returned a %s. " +
                                            "You may have forgotten to pass an argument to the type checker " +
                                            "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " +
                                            "shape all require an argument).",
                                        componentName || "React class",
                                        location,
                                        typeSpecName,
                                        typeof error
                                    );
                                    if (
                                        error instanceof Error &&
                                        !(error.message in loggedTypeFailures)
                                    ) {
                                        // Only monitor this failure once because there tends to be a lot of the
                                        // same error.
                                        loggedTypeFailures[error.message] = true;

                                        var stack = getStack ? getStack() : "";

                                        warning(
                                            false,
                                            "Failed %s type: %s%s",
                                            location,
                                            error.message,
                                            stack != null ? stack : ""
                                        );
                                    }
                                }
                            }
                        }
                    }

                    module.exports = checkPropTypes;

                    /* WEBPACK VAR INJECTION */
                }.call(exports, __webpack_require__(0)));

                /***/
            },
            /* 14 */
            /***/ function(module, exports, __webpack_require__) {
                "use strict";
                /**
                 * Copyright (c) 2013-present, Facebook, Inc.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */

                var emptyFunction = __webpack_require__(2);
                var invariant = __webpack_require__(3);
                var ReactPropTypesSecret = __webpack_require__(4);

                module.exports = function() {
                    function shim(
                        props,
                        propName,
                        componentName,
                        location,
                        propFullName,
                        secret
                    ) {
                        if (secret === ReactPropTypesSecret) {
                            // It is still safe when called from React.
                            return;
                        }
                        invariant(
                            false,
                            "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
                                "Use PropTypes.checkPropTypes() to call them. " +
                                "Read more at http://fb.me/use-check-prop-types"
                        );
                    }
                    shim.isRequired = shim;
                    function getShim() {
                        return shim;
                    }
                    // Important!
                    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
                    var ReactPropTypes = {
                        array: shim,
                        bool: shim,
                        func: shim,
                        number: shim,
                        object: shim,
                        string: shim,
                        symbol: shim,

                        any: shim,
                        arrayOf: getShim,
                        element: shim,
                        instanceOf: getShim,
                        node: shim,
                        objectOf: getShim,
                        oneOf: getShim,
                        oneOfType: getShim,
                        shape: getShim,
                        exact: getShim
                    };

                    ReactPropTypes.checkPropTypes = emptyFunction;
                    ReactPropTypes.PropTypes = ReactPropTypes;

                    return ReactPropTypes;
                };

                /***/
            },
            /* 15 */
            /***/ function(module, exports, __webpack_require__) {
                "use strict";

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _createClass = (function() {
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
                        if (protoProps)
                            defineProperties(Constructor.prototype, protoProps);
                        if (staticProps) defineProperties(Constructor, staticProps);
                        return Constructor;
                    };
                })();

                var _react = __webpack_require__(1);

                var _react2 = _interopRequireDefault(_react);

                var _propTypes = __webpack_require__(7);

                var _propTypes2 = _interopRequireDefault(_propTypes);

                var _extensioner = __webpack_require__(16);

                var _ExtensionerManagerContext = __webpack_require__(5);

                var _ExtensionerManagerContext2 = _interopRequireDefault(
                    _ExtensionerManagerContext
                );

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj };
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                function _possibleConstructorReturn(self, call) {
                    if (!self) {
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    }
                    return call &&
                        (typeof call === "object" || typeof call === "function")
                        ? call
                        : self;
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                        throw new TypeError(
                            "Super expression must either be null or a function, not " +
                                typeof superClass
                        );
                    }
                    subClass.prototype = Object.create(
                        superClass && superClass.prototype,
                        {
                            constructor: {
                                value: subClass,
                                enumerable: false,
                                writable: true,
                                configurable: true
                            }
                        }
                    );
                    if (superClass)
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf(subClass, superClass)
                            : (subClass.__proto__ = superClass);
                }

                let ExtensionerEvent = (function(_React$Component) {
                    _inherits(ExtensionerEvent, _React$Component);

                    function ExtensionerEvent() {
                        _classCallCheck(this, ExtensionerEvent);

                        return _possibleConstructorReturn(
                            this,
                            (
                                ExtensionerEvent.__proto__ ||
                                Object.getPrototypeOf(ExtensionerEvent)
                            ).apply(this, arguments)
                        );
                    }

                    _createClass(ExtensionerEvent, [
                        {
                            key: "render",
                            value: function render() {
                                return _react2.default.createElement(
                                    _ExtensionerManagerContext2.default.Consumer,
                                    null,
                                    manager =>
                                        Object.entries(
                                            manager.createEvent(
                                                this.props.name,
                                                _extensioner.syncMapCompose
                                            )(this.props.value)
                                        ).map(({ extensionName, result }) =>
                                            _react2.default.createElement(
                                                _react.Fragment,
                                                {
                                                    key:
                                                        this.props.name +
                                                        "_" +
                                                        extensionName
                                                },
                                                result
                                            )
                                        )
                                );
                            }
                        }
                    ]);

                    return ExtensionerEvent;
                })(_react2.default.Component);

                ExtensionerEvent.propTypes = {
                    name: _propTypes2.default.string.isRequired,
                    value: _propTypes2.default.any.isRequired
                };

                exports.default = ExtensionerEvent;

                /***/
            },
            /* 16 */
            /***/ function(module, exports, __webpack_require__) {
                (function webpackUniversalModuleDefinition(root, factory) {
                    if (true) module.exports = factory();
                    else if (typeof define === "function" && define.amd)
                        define([], factory);
                    else {
                        var a = factory();
                        for (var i in a)
                            (typeof exports === "object" ? exports : root)[i] = a[i];
                    }
                })(typeof self !== "undefined" ? self : this, function() {
                    return /******/ (function(modules) {
                        // webpackBootstrap
                        /******/ // The module cache
                        /******/ var installedModules = {}; // The require function
                        /******/
                        /******/ /******/ function __webpack_require__(moduleId) {
                            /******/
                            /******/ // Check if module is in cache
                            /******/ if (installedModules[moduleId]) {
                                /******/ return installedModules[moduleId].exports;
                                /******/
                            } // Create a new module (and put it into the cache)
                            /******/ /******/ var module = (installedModules[moduleId] = {
                                /******/ i: moduleId,
                                /******/ l: false,
                                /******/ exports: {}
                                /******/
                            }); // Execute the module function
                            /******/
                            /******/ /******/ modules[moduleId].call(
                                module.exports,
                                module,
                                module.exports,
                                __webpack_require__
                            ); // Flag the module as loaded
                            /******/
                            /******/ /******/ module.l = true; // Return the exports of the module
                            /******/
                            /******/ /******/ return module.exports;
                            /******/
                        } // expose the modules object (__webpack_modules__)
                        /******/
                        /******/
                        /******/ /******/ __webpack_require__.m = modules; // expose the module cache
                        /******/
                        /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
                        /******/
                        /******/ /******/ __webpack_require__.d = function(
                            exports,
                            name,
                            getter
                        ) {
                            /******/ if (!__webpack_require__.o(exports, name)) {
                                /******/ Object.defineProperty(exports, name, {
                                    /******/ configurable: false,
                                    /******/ enumerable: true,
                                    /******/ get: getter
                                    /******/
                                });
                                /******/
                            }
                            /******/
                        }; // getDefaultExport function for compatibility with non-harmony modules
                        /******/
                        /******/ /******/ __webpack_require__.n = function(module) {
                            /******/ var getter =
                                module && module.__esModule
                                    ? /******/ function getDefault() {
                                          return module["default"];
                                      }
                                    : /******/ function getModuleExports() {
                                          return module;
                                      };
                            /******/ __webpack_require__.d(getter, "a", getter);
                            /******/ return getter;
                            /******/
                        }; // Object.prototype.hasOwnProperty.call
                        /******/
                        /******/ /******/ __webpack_require__.o = function(
                            object,
                            property
                        ) {
                            return Object.prototype.hasOwnProperty.call(object, property);
                        }; // __webpack_public_path__
                        /******/
                        /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
                        /******/
                        /******/ /******/ return __webpack_require__(
                            (__webpack_require__.s = 3)
                        );
                        /******/
                    })(
                        /************************************************************************/
                        /******/ [
                            /* 0 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                var _createClass = (function() {
                                    function defineProperties(target, props) {
                                        for (var i = 0; i < props.length; i++) {
                                            var descriptor = props[i];
                                            descriptor.enumerable =
                                                descriptor.enumerable || false;
                                            descriptor.configurable = true;
                                            if ("value" in descriptor)
                                                descriptor.writable = true;
                                            Object.defineProperty(
                                                target,
                                                descriptor.key,
                                                descriptor
                                            );
                                        }
                                    }
                                    return function(
                                        Constructor,
                                        protoProps,
                                        staticProps
                                    ) {
                                        if (protoProps)
                                            defineProperties(
                                                Constructor.prototype,
                                                protoProps
                                            );
                                        if (staticProps)
                                            defineProperties(Constructor, staticProps);
                                        return Constructor;
                                    };
                                })();

                                function _classCallCheck(instance, Constructor) {
                                    if (!(instance instanceof Constructor)) {
                                        throw new TypeError(
                                            "Cannot call a class as a function"
                                        );
                                    }
                                }

                                var Extension = (function() {
                                    function Extension(data) {
                                        _classCallCheck(this, Extension);

                                        this._properties =
                                            (data && data.properties) || {};
                                        this._events = (data && data.events) || {};
                                    }

                                    _createClass(Extension, [
                                        {
                                            key: "setProperty",
                                            value: function setProperty(
                                                propertyName,
                                                value
                                            ) {
                                                this._properties[propertyName] = value;
                                                return this;
                                            }
                                        },
                                        {
                                            key: "hasProperty",
                                            value: function hasProperty(propertyName) {
                                                return this._properties.hasOwnProperty(
                                                    propertyName
                                                );
                                            }
                                        },
                                        {
                                            key: "getProperty",
                                            value: function getProperty(propertyName) {
                                                return this._properties[propertyName];
                                            }
                                        },
                                        {
                                            key: "setEventListener",
                                            value: function setEventListener(
                                                eventName,
                                                handler
                                            ) {
                                                this._events[eventName] = handler;
                                                return this;
                                            }
                                        },
                                        {
                                            key: "hasEventListener",
                                            value: function hasEventListener(eventName) {
                                                return this._events.hasOwnProperty(
                                                    eventName
                                                );
                                            }
                                        },
                                        {
                                            key: "getEventListener",
                                            value: function getEventListener(eventName) {
                                                return this._events[eventName];
                                            }
                                        }
                                    ]);

                                    return Extension;
                                })();

                                exports.default = Extension;

                                /***/
                            },
                            /* 1 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                exports.default = function(
                                    extensionJoints,
                                    eventName,
                                    value
                                ) {
                                    return extensionJoints.map(function(extensionJoint) {
                                        return extensionJoint
                                            .getExtension()
                                            .getEventListener(eventName)(value);
                                    });
                                };

                                /***/
                            },
                            /* 2 */
                            /***/ function(module, exports) {
                                module.exports = __webpack_require__(17);

                                /***/
                            },
                            /* 3 */
                            /***/ function(module, exports, __webpack_require__) {
                                module.exports = __webpack_require__(4);

                                /***/
                            },
                            /* 4 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });
                                exports.asyncMapCompose = exports.asyncListCompose = exports.syncMapCompose = exports.syncListCompose = exports.Extension = exports.Manager = undefined;

                                var _Manager2 = __webpack_require__(5);

                                var _Manager3 = _interopRequireDefault(_Manager2);

                                var _Extension2 = __webpack_require__(0);

                                var _Extension3 = _interopRequireDefault(_Extension2);

                                var _syncList = __webpack_require__(1);

                                var _syncList2 = _interopRequireDefault(_syncList);

                                var _syncMap = __webpack_require__(8);

                                var _syncMap2 = _interopRequireDefault(_syncMap);

                                var _asyncList = __webpack_require__(9);

                                var _asyncList2 = _interopRequireDefault(_asyncList);

                                var _asyncMap = __webpack_require__(10);

                                var _asyncMap2 = _interopRequireDefault(_asyncMap);

                                function _interopRequireDefault(obj) {
                                    return obj && obj.__esModule ? obj : { default: obj };
                                }

                                exports.Manager = _Manager3.default;
                                exports.Extension = _Extension3.default;
                                exports.syncListCompose = _syncList2.default;
                                exports.syncMapCompose = _syncMap2.default;
                                exports.asyncListCompose = _asyncList2.default;
                                exports.asyncMapCompose = _asyncMap2.default;

                                /***/
                            },
                            /* 5 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                var _createClass = (function() {
                                    function defineProperties(target, props) {
                                        for (var i = 0; i < props.length; i++) {
                                            var descriptor = props[i];
                                            descriptor.enumerable =
                                                descriptor.enumerable || false;
                                            descriptor.configurable = true;
                                            if ("value" in descriptor)
                                                descriptor.writable = true;
                                            Object.defineProperty(
                                                target,
                                                descriptor.key,
                                                descriptor
                                            );
                                        }
                                    }
                                    return function(
                                        Constructor,
                                        protoProps,
                                        staticProps
                                    ) {
                                        if (protoProps)
                                            defineProperties(
                                                Constructor.prototype,
                                                protoProps
                                            );
                                        if (staticProps)
                                            defineProperties(Constructor, staticProps);
                                        return Constructor;
                                    };
                                })();

                                var _functionOverloader = __webpack_require__(6);

                                var _functionOverloader2 = _interopRequireDefault(
                                    _functionOverloader
                                );

                                var _Extension = __webpack_require__(0);

                                var _Extension2 = _interopRequireDefault(_Extension);

                                var _ExtensionJoint = __webpack_require__(7);

                                var _ExtensionJoint2 = _interopRequireDefault(
                                    _ExtensionJoint
                                );

                                var _syncList = __webpack_require__(1);

                                var _syncList2 = _interopRequireDefault(_syncList);

                                function _interopRequireDefault(obj) {
                                    return obj && obj.__esModule ? obj : { default: obj };
                                }

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

                                function _classCallCheck(instance, Constructor) {
                                    if (!(instance instanceof Constructor)) {
                                        throw new TypeError(
                                            "Cannot call a class as a function"
                                        );
                                    }
                                }

                                var Manager = (function() {
                                    function Manager() {
                                        _classCallCheck(this, Manager);

                                        this._extensionJoints = {};
                                    }

                                    _createClass(Manager, [
                                        {
                                            key: "registerExtension",
                                            value: function registerExtension() {
                                                var _this = this;

                                                _functionOverloader2.default.set
                                                    .apply(
                                                        _functionOverloader2.default,
                                                        arguments
                                                    )
                                                    .when(
                                                        _functionOverloader2.default
                                                            .STRING,
                                                        _functionOverloader2.default.INSTANCE(
                                                            _Extension2.default
                                                        )
                                                    )
                                                    .do(function(
                                                        extensionName,
                                                        extension
                                                    ) {
                                                        _this._extensionJoints[
                                                            extensionName
                                                        ] = new _ExtensionJoint2.default(
                                                            extensionName,
                                                            extension,
                                                            _this
                                                        );
                                                    })
                                                    .when(
                                                        _functionOverloader2.default
                                                            .STRING,
                                                        _functionOverloader2.default
                                                            .OBJECT
                                                    )
                                                    .do(function(extensionName, _ref) {
                                                        var properties = _ref.properties,
                                                            events = _ref.events;

                                                        _this._extensionJoints[
                                                            extensionName
                                                        ] = new _ExtensionJoint2.default(
                                                            extensionName,
                                                            new _Extension2.default({
                                                                properties: properties,
                                                                events: events
                                                            }),
                                                            _this
                                                        );
                                                    });
                                                return this;
                                            }
                                        },
                                        {
                                            key: "getExtensionJoints",
                                            value: function getExtensionJoints() {
                                                var onlyActive =
                                                    arguments.length > 0 &&
                                                    arguments[0] !== undefined
                                                        ? arguments[0]
                                                        : true;

                                                return Object.values(
                                                    this._extensionJoints
                                                ).filter(function(extensionJoint) {
                                                    return onlyActive
                                                        ? extensionJoint.isEnabled()
                                                        : true;
                                                });
                                            }
                                        },
                                        {
                                            key: "getExtensionJointsWithProperty",
                                            value: function getExtensionJointsWithProperty(
                                                propertyName
                                            ) {
                                                var onlyActive =
                                                    arguments.length > 1 &&
                                                    arguments[1] !== undefined
                                                        ? arguments[1]
                                                        : true;

                                                return this.getExtensionJoints(
                                                    onlyActive
                                                ).filter(function(extensionJoint) {
                                                    return extensionJoint
                                                        .getExtension()
                                                        .hasProperty(propertyName);
                                                });
                                            }
                                        },
                                        {
                                            key: "getExtensionJointsWithEventListener",
                                            value: function getExtensionJointsWithEventListener(
                                                eventName
                                            ) {
                                                var onlyActive =
                                                    arguments.length > 1 &&
                                                    arguments[1] !== undefined
                                                        ? arguments[1]
                                                        : true;

                                                return this.getExtensionJoints(
                                                    onlyActive
                                                ).filter(function(extensionJoint) {
                                                    return extensionJoint
                                                        .getExtension()
                                                        .hasEventListener(eventName);
                                                });
                                            }
                                        },
                                        {
                                            key: "getPropertyValues",
                                            value: function getPropertyValues(
                                                propertyName
                                            ) {
                                                var onlyActive =
                                                    arguments.length > 1 &&
                                                    arguments[1] !== undefined
                                                        ? arguments[1]
                                                        : true;

                                                return this.getExtensionJointsWithProperty(
                                                    propertyName,
                                                    onlyActive
                                                ).reduce(function(
                                                    response,
                                                    extensionJoint
                                                ) {
                                                    return Object.assign(
                                                        _defineProperty(
                                                            {},
                                                            extensionJoint.getName(),
                                                            extensionJoint
                                                                .getExtension()
                                                                .getProperty(propertyName)
                                                        ),
                                                        response
                                                    );
                                                },
                                                {});
                                            }
                                        },
                                        {
                                            key: "isExtensionJointEnabled",
                                            value: function isExtensionJointEnabled(
                                                extensionName
                                            ) {
                                                if (
                                                    this.hasExtensionJoint(extensionName)
                                                ) {
                                                    return this._extensionJoints[
                                                        extensionName
                                                    ].isEnabled();
                                                }
                                                return false;
                                            }
                                        },
                                        {
                                            key: "disableExtensionJoint",
                                            value: function disableExtensionJoint(
                                                extensionName
                                            ) {
                                                if (
                                                    this.hasExtensionJoint(extensionName)
                                                ) {
                                                    this._extensionJoints[
                                                        extensionName
                                                    ].disable();
                                                    return true;
                                                }
                                                return false;
                                            }
                                        },
                                        {
                                            key: "enableExtensionJoint",
                                            value: function enableExtensionJoint(
                                                extensionName
                                            ) {
                                                if (
                                                    this.hasExtensionJoint(extensionName)
                                                ) {
                                                    this._extensionJoints[
                                                        extensionName
                                                    ].enable();
                                                    return true;
                                                }
                                                return false;
                                            }
                                        },
                                        {
                                            key: "hasExtensionJoint",
                                            value: function hasExtensionJoint(
                                                extensionName
                                            ) {
                                                return !!this._extensionJoints[
                                                    extensionName
                                                ];
                                            }
                                        },
                                        {
                                            key: "getExtensionJoint",
                                            value: function getExtensionJoint(
                                                extensionName
                                            ) {
                                                if (
                                                    this.hasExtensionJoint(extensionName)
                                                ) {
                                                    return this._extensionJoints[
                                                        extensionName
                                                    ];
                                                }
                                                return null;
                                            }
                                        },
                                        {
                                            key: "createEvent",
                                            value: function createEvent(eventName) {
                                                var _this2 = this;

                                                var composeFunction =
                                                    arguments.length > 1 &&
                                                    arguments[1] !== undefined
                                                        ? arguments[1]
                                                        : _syncList2.default;

                                                return function(value) {
                                                    return composeFunction(
                                                        _this2.getExtensionJointsWithEventListener(
                                                            eventName
                                                        ),
                                                        eventName,
                                                        value
                                                    );
                                                };
                                            }
                                        }
                                    ]);

                                    return Manager;
                                })();

                                exports.default = Manager;

                                /***/
                            },
                            /* 6 */
                            /***/ function(module, exports) {
                                module.exports = __webpack_require__(20);

                                /***/
                            },
                            /* 7 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                var _createClass = (function() {
                                    function defineProperties(target, props) {
                                        for (var i = 0; i < props.length; i++) {
                                            var descriptor = props[i];
                                            descriptor.enumerable =
                                                descriptor.enumerable || false;
                                            descriptor.configurable = true;
                                            if ("value" in descriptor)
                                                descriptor.writable = true;
                                            Object.defineProperty(
                                                target,
                                                descriptor.key,
                                                descriptor
                                            );
                                        }
                                    }
                                    return function(
                                        Constructor,
                                        protoProps,
                                        staticProps
                                    ) {
                                        if (protoProps)
                                            defineProperties(
                                                Constructor.prototype,
                                                protoProps
                                            );
                                        if (staticProps)
                                            defineProperties(Constructor, staticProps);
                                        return Constructor;
                                    };
                                })();

                                function _classCallCheck(instance, Constructor) {
                                    if (!(instance instanceof Constructor)) {
                                        throw new TypeError(
                                            "Cannot call a class as a function"
                                        );
                                    }
                                }

                                var ExtensionJoint = (function() {
                                    function ExtensionJoint(name, extension, manager) {
                                        _classCallCheck(this, ExtensionJoint);

                                        this._name = name;
                                        this._extension = extension;
                                        this._enabled = true;
                                        this._manager = manager;
                                    }

                                    _createClass(ExtensionJoint, [
                                        {
                                            key: "isEnabled",
                                            value: function isEnabled() {
                                                return this._enabled;
                                            }
                                        },
                                        {
                                            key: "enable",
                                            value: function enable() {
                                                this._enabled = true;
                                            }
                                        },
                                        {
                                            key: "disable",
                                            value: function disable() {
                                                this._enabled = false;
                                            }
                                        },
                                        {
                                            key: "getExtension",
                                            value: function getExtension() {
                                                return this._extension;
                                            }
                                        },
                                        {
                                            key: "getName",
                                            value: function getName() {
                                                return this._name;
                                            }
                                        },
                                        {
                                            key: "getManager",
                                            value: function getManager() {
                                                return this._manager;
                                            }
                                        }
                                    ]);

                                    return ExtensionJoint;
                                })();

                                exports.default = ExtensionJoint;

                                /***/
                            },
                            /* 8 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

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

                                exports.default = function(
                                    extensionJoints,
                                    eventName,
                                    value
                                ) {
                                    return extensionJoints.reduce(function(
                                        response,
                                        extensionJoint
                                    ) {
                                        return Object.assign(
                                            _defineProperty(
                                                {},
                                                extensionJoint.getName(),
                                                extensionJoint
                                                    .getExtension()
                                                    .getEventListener(eventName)(value)
                                            ),
                                            response
                                        );
                                    },
                                    {});
                                };

                                /***/
                            },
                            /* 9 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                var _bluebird = __webpack_require__(2);

                                var _bluebird2 = _interopRequireDefault(_bluebird);

                                function _interopRequireDefault(obj) {
                                    return obj && obj.__esModule ? obj : { default: obj };
                                }

                                exports.default = function(
                                    extensionJoints,
                                    eventName,
                                    value
                                ) {
                                    return _bluebird2.default.all(
                                        extensionJoints.map(function(extensionJoint) {
                                            return extensionJoint
                                                .getExtension()
                                                .getEventListener(eventName)(value);
                                        })
                                    );
                                };

                                /***/
                            },
                            /* 10 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                var _bluebird = __webpack_require__(2);

                                var _bluebird2 = _interopRequireDefault(_bluebird);

                                function _interopRequireDefault(obj) {
                                    return obj && obj.__esModule ? obj : { default: obj };
                                }

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

                                exports.default = function(
                                    extensionJoints,
                                    eventName,
                                    value
                                ) {
                                    return _bluebird2.default.props(
                                        extensionJoints.reduce(function(
                                            response,
                                            extensionJoint
                                        ) {
                                            return Object.assign(
                                                _defineProperty(
                                                    {},
                                                    extensionJoint.getName(),
                                                    extensionJoint
                                                        .getExtension()
                                                        .getEventListener(eventName)(
                                                        value
                                                    )
                                                ),
                                                response
                                            );
                                        },
                                        {})
                                    );
                                };

                                /***/
                            }
                            /******/
                        ]
                    );
                });
                //# sourceMappingURL=index.js.map

                /***/
            },
            /* 17 */
            /***/ function(module, exports, __webpack_require__) {
                /* WEBPACK VAR INJECTION */ (function(process, global, setImmediate) {
                    /* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013-2017 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
                    /**
                     * bluebird build version 3.5.1
                     * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
                     */
                    !(function(e) {
                        if (true) module.exports = e();
                        else if ("function" == typeof define && define.amd) define([], e);
                        else {
                            var f;
                            "undefined" != typeof window
                                ? (f = window)
                                : "undefined" != typeof global
                                    ? (f = global)
                                    : "undefined" != typeof self && (f = self),
                                (f.Promise = e());
                        }
                    })(function() {
                        var define, module, exports;
                        return (function e(t, n, r) {
                            function s(o, u) {
                                if (!n[o]) {
                                    if (!t[o]) {
                                        var a = typeof _dereq_ == "function" && _dereq_;
                                        if (!u && a) return a(o, !0);
                                        if (i) return i(o, !0);
                                        var f = new Error(
                                            "Cannot find module '" + o + "'"
                                        );
                                        throw ((f.code = "MODULE_NOT_FOUND"), f);
                                    }
                                    var l = (n[o] = { exports: {} });
                                    t[o][0].call(
                                        l.exports,
                                        function(e) {
                                            var n = t[o][1][e];
                                            return s(n ? n : e);
                                        },
                                        l,
                                        l.exports,
                                        e,
                                        t,
                                        n,
                                        r
                                    );
                                }
                                return n[o].exports;
                            }
                            var i = typeof _dereq_ == "function" && _dereq_;
                            for (var o = 0; o < r.length; o++) s(r[o]);
                            return s;
                        })(
                            {
                                1: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(Promise) {
                                            var SomePromiseArray =
                                                Promise._SomePromiseArray;
                                            function any(promises) {
                                                var ret = new SomePromiseArray(promises);
                                                var promise = ret.promise();
                                                ret.setHowMany(1);
                                                ret.setUnwrap();
                                                ret.init();
                                                return promise;
                                            }

                                            Promise.any = function(promises) {
                                                return any(promises);
                                            };

                                            Promise.prototype.any = function() {
                                                return any(this);
                                            };
                                        };
                                    },
                                    {}
                                ],
                                2: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        var firstLineError;
                                        try {
                                            throw new Error();
                                        } catch (e) {
                                            firstLineError = e;
                                        }
                                        var schedule = _dereq_("./schedule");
                                        var Queue = _dereq_("./queue");
                                        var util = _dereq_("./util");

                                        function Async() {
                                            this._customScheduler = false;
                                            this._isTickUsed = false;
                                            this._lateQueue = new Queue(16);
                                            this._normalQueue = new Queue(16);
                                            this._haveDrainedQueues = false;
                                            this._trampolineEnabled = true;
                                            var self = this;
                                            this.drainQueues = function() {
                                                self._drainQueues();
                                            };
                                            this._schedule = schedule;
                                        }

                                        Async.prototype.setScheduler = function(fn) {
                                            var prev = this._schedule;
                                            this._schedule = fn;
                                            this._customScheduler = true;
                                            return prev;
                                        };

                                        Async.prototype.hasCustomScheduler = function() {
                                            return this._customScheduler;
                                        };

                                        Async.prototype.enableTrampoline = function() {
                                            this._trampolineEnabled = true;
                                        };

                                        Async.prototype.disableTrampolineIfNecessary = function() {
                                            if (util.hasDevTools) {
                                                this._trampolineEnabled = false;
                                            }
                                        };

                                        Async.prototype.haveItemsQueued = function() {
                                            return (
                                                this._isTickUsed ||
                                                this._haveDrainedQueues
                                            );
                                        };

                                        Async.prototype.fatalError = function(e, isNode) {
                                            if (isNode) {
                                                process.stderr.write(
                                                    "Fatal " +
                                                        (e instanceof Error
                                                            ? e.stack
                                                            : e) +
                                                        "\n"
                                                );
                                                process.exit(2);
                                            } else {
                                                this.throwLater(e);
                                            }
                                        };

                                        Async.prototype.throwLater = function(fn, arg) {
                                            if (arguments.length === 1) {
                                                arg = fn;
                                                fn = function() {
                                                    throw arg;
                                                };
                                            }
                                            if (typeof setTimeout !== "undefined") {
                                                setTimeout(function() {
                                                    fn(arg);
                                                }, 0);
                                            } else
                                                try {
                                                    this._schedule(function() {
                                                        fn(arg);
                                                    });
                                                } catch (e) {
                                                    throw new Error(
                                                        "No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                                                    );
                                                }
                                        };

                                        function AsyncInvokeLater(fn, receiver, arg) {
                                            this._lateQueue.push(fn, receiver, arg);
                                            this._queueTick();
                                        }

                                        function AsyncInvoke(fn, receiver, arg) {
                                            this._normalQueue.push(fn, receiver, arg);
                                            this._queueTick();
                                        }

                                        function AsyncSettlePromises(promise) {
                                            this._normalQueue._pushOne(promise);
                                            this._queueTick();
                                        }

                                        if (!util.hasDevTools) {
                                            Async.prototype.invokeLater = AsyncInvokeLater;
                                            Async.prototype.invoke = AsyncInvoke;
                                            Async.prototype.settlePromises = AsyncSettlePromises;
                                        } else {
                                            Async.prototype.invokeLater = function(
                                                fn,
                                                receiver,
                                                arg
                                            ) {
                                                if (this._trampolineEnabled) {
                                                    AsyncInvokeLater.call(
                                                        this,
                                                        fn,
                                                        receiver,
                                                        arg
                                                    );
                                                } else {
                                                    this._schedule(function() {
                                                        setTimeout(function() {
                                                            fn.call(receiver, arg);
                                                        }, 100);
                                                    });
                                                }
                                            };

                                            Async.prototype.invoke = function(
                                                fn,
                                                receiver,
                                                arg
                                            ) {
                                                if (this._trampolineEnabled) {
                                                    AsyncInvoke.call(
                                                        this,
                                                        fn,
                                                        receiver,
                                                        arg
                                                    );
                                                } else {
                                                    this._schedule(function() {
                                                        fn.call(receiver, arg);
                                                    });
                                                }
                                            };

                                            Async.prototype.settlePromises = function(
                                                promise
                                            ) {
                                                if (this._trampolineEnabled) {
                                                    AsyncSettlePromises.call(
                                                        this,
                                                        promise
                                                    );
                                                } else {
                                                    this._schedule(function() {
                                                        promise._settlePromises();
                                                    });
                                                }
                                            };
                                        }

                                        Async.prototype._drainQueue = function(queue) {
                                            while (queue.length() > 0) {
                                                var fn = queue.shift();
                                                if (typeof fn !== "function") {
                                                    fn._settlePromises();
                                                    continue;
                                                }
                                                var receiver = queue.shift();
                                                var arg = queue.shift();
                                                fn.call(receiver, arg);
                                            }
                                        };

                                        Async.prototype._drainQueues = function() {
                                            this._drainQueue(this._normalQueue);
                                            this._reset();
                                            this._haveDrainedQueues = true;
                                            this._drainQueue(this._lateQueue);
                                        };

                                        Async.prototype._queueTick = function() {
                                            if (!this._isTickUsed) {
                                                this._isTickUsed = true;
                                                this._schedule(this.drainQueues);
                                            }
                                        };

                                        Async.prototype._reset = function() {
                                            this._isTickUsed = false;
                                        };

                                        module.exports = Async;
                                        module.exports.firstLineError = firstLineError;
                                    },
                                    { "./queue": 26, "./schedule": 29, "./util": 36 }
                                ],
                                3: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(
                                            Promise,
                                            INTERNAL,
                                            tryConvertToPromise,
                                            debug
                                        ) {
                                            var calledBind = false;
                                            var rejectThis = function(_, e) {
                                                this._reject(e);
                                            };

                                            var targetRejected = function(e, context) {
                                                context.promiseRejectionQueued = true;
                                                context.bindingPromise._then(
                                                    rejectThis,
                                                    rejectThis,
                                                    null,
                                                    this,
                                                    e
                                                );
                                            };

                                            var bindingResolved = function(
                                                thisArg,
                                                context
                                            ) {
                                                if ((this._bitField & 50397184) === 0) {
                                                    this._resolveCallback(context.target);
                                                }
                                            };

                                            var bindingRejected = function(e, context) {
                                                if (!context.promiseRejectionQueued)
                                                    this._reject(e);
                                            };

                                            Promise.prototype.bind = function(thisArg) {
                                                if (!calledBind) {
                                                    calledBind = true;
                                                    Promise.prototype._propagateFrom = debug.propagateFromFunction();
                                                    Promise.prototype._boundValue = debug.boundValueFunction();
                                                }
                                                var maybePromise = tryConvertToPromise(
                                                    thisArg
                                                );
                                                var ret = new Promise(INTERNAL);
                                                ret._propagateFrom(this, 1);
                                                var target = this._target();
                                                ret._setBoundTo(maybePromise);
                                                if (maybePromise instanceof Promise) {
                                                    var context = {
                                                        promiseRejectionQueued: false,
                                                        promise: ret,
                                                        target: target,
                                                        bindingPromise: maybePromise
                                                    };
                                                    target._then(
                                                        INTERNAL,
                                                        targetRejected,
                                                        undefined,
                                                        ret,
                                                        context
                                                    );
                                                    maybePromise._then(
                                                        bindingResolved,
                                                        bindingRejected,
                                                        undefined,
                                                        ret,
                                                        context
                                                    );
                                                    ret._setOnCancel(maybePromise);
                                                } else {
                                                    ret._resolveCallback(target);
                                                }
                                                return ret;
                                            };

                                            Promise.prototype._setBoundTo = function(
                                                obj
                                            ) {
                                                if (obj !== undefined) {
                                                    this._bitField =
                                                        this._bitField | 2097152;
                                                    this._boundTo = obj;
                                                } else {
                                                    this._bitField =
                                                        this._bitField & ~2097152;
                                                }
                                            };

                                            Promise.prototype._isBound = function() {
                                                return (
                                                    (this._bitField & 2097152) === 2097152
                                                );
                                            };

                                            Promise.bind = function(thisArg, value) {
                                                return Promise.resolve(value).bind(
                                                    thisArg
                                                );
                                            };
                                        };
                                    },
                                    {}
                                ],
                                4: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        var old;
                                        if (typeof Promise !== "undefined") old = Promise;
                                        function noConflict() {
                                            try {
                                                if (Promise === bluebird) Promise = old;
                                            } catch (e) {}
                                            return bluebird;
                                        }
                                        var bluebird = _dereq_("./promise")();
                                        bluebird.noConflict = noConflict;
                                        module.exports = bluebird;
                                    },
                                    { "./promise": 22 }
                                ],
                                5: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        var cr = Object.create;
                                        if (cr) {
                                            var callerCache = cr(null);
                                            var getterCache = cr(null);
                                            callerCache[" size"] = getterCache[
                                                " size"
                                            ] = 0;
                                        }

                                        module.exports = function(Promise) {
                                            var util = _dereq_("./util");
                                            var canEvaluate = util.canEvaluate;
                                            var isIdentifier = util.isIdentifier;

                                            var getMethodCaller;
                                            var getGetter;
                                            if (false) {
                                                var makeMethodCaller = function(
                                                    methodName
                                                ) {
                                                    return new Function(
                                                        "ensureMethod",
                                                        "                                    \n\
        return function(obj) {                                               \n\
            'use strict'                                                     \n\
            var len = this.length;                                           \n\
            ensureMethod(obj, 'methodName');                                 \n\
            switch(len) {                                                    \n\
                case 1: return obj.methodName(this[0]);                      \n\
                case 2: return obj.methodName(this[0], this[1]);             \n\
                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
                case 0: return obj.methodName();                             \n\
                default:                                                     \n\
                    return obj.methodName.apply(obj, this);                  \n\
            }                                                                \n\
        };                                                                   \n\
        ".replace(
                                                            /methodName/g,
                                                            methodName
                                                        )
                                                    )(ensureMethod);
                                                };

                                                var makeGetter = function(propertyName) {
                                                    return new Function(
                                                        "obj",
                                                        "                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ".replace(
                                                            "propertyName",
                                                            propertyName
                                                        )
                                                    );
                                                };

                                                var getCompiled = function(
                                                    name,
                                                    compiler,
                                                    cache
                                                ) {
                                                    var ret = cache[name];
                                                    if (typeof ret !== "function") {
                                                        if (!isIdentifier(name)) {
                                                            return null;
                                                        }
                                                        ret = compiler(name);
                                                        cache[name] = ret;
                                                        cache[" size"]++;
                                                        if (cache[" size"] > 512) {
                                                            var keys = Object.keys(cache);
                                                            for (var i = 0; i < 256; ++i)
                                                                delete cache[keys[i]];
                                                            cache[" size"] =
                                                                keys.length - 256;
                                                        }
                                                    }
                                                    return ret;
                                                };

                                                getMethodCaller = function(name) {
                                                    return getCompiled(
                                                        name,
                                                        makeMethodCaller,
                                                        callerCache
                                                    );
                                                };

                                                getGetter = function(name) {
                                                    return getCompiled(
                                                        name,
                                                        makeGetter,
                                                        getterCache
                                                    );
                                                };
                                            }

                                            function ensureMethod(obj, methodName) {
                                                var fn;
                                                if (obj != null) fn = obj[methodName];
                                                if (typeof fn !== "function") {
                                                    var message =
                                                        "Object " +
                                                        util.classString(obj) +
                                                        " has no method '" +
                                                        util.toString(methodName) +
                                                        "'";
                                                    throw new Promise.TypeError(message);
                                                }
                                                return fn;
                                            }

                                            function caller(obj) {
                                                var methodName = this.pop();
                                                var fn = ensureMethod(obj, methodName);
                                                return fn.apply(obj, this);
                                            }
                                            Promise.prototype.call = function(
                                                methodName
                                            ) {
                                                var args = [].slice.call(arguments, 1);
                                                if (false) {
                                                    if (canEvaluate) {
                                                        var maybeCaller = getMethodCaller(
                                                            methodName
                                                        );
                                                        if (maybeCaller !== null) {
                                                            return this._then(
                                                                maybeCaller,
                                                                undefined,
                                                                undefined,
                                                                args,
                                                                undefined
                                                            );
                                                        }
                                                    }
                                                }
                                                args.push(methodName);
                                                return this._then(
                                                    caller,
                                                    undefined,
                                                    undefined,
                                                    args,
                                                    undefined
                                                );
                                            };

                                            function namedGetter(obj) {
                                                return obj[this];
                                            }
                                            function indexedGetter(obj) {
                                                var index = +this;
                                                if (index < 0)
                                                    index = Math.max(
                                                        0,
                                                        index + obj.length
                                                    );
                                                return obj[index];
                                            }
                                            Promise.prototype.get = function(
                                                propertyName
                                            ) {
                                                var isIndex =
                                                    typeof propertyName === "number";
                                                var getter;
                                                if (!isIndex) {
                                                    if (canEvaluate) {
                                                        var maybeGetter = getGetter(
                                                            propertyName
                                                        );
                                                        getter =
                                                            maybeGetter !== null
                                                                ? maybeGetter
                                                                : namedGetter;
                                                    } else {
                                                        getter = namedGetter;
                                                    }
                                                } else {
                                                    getter = indexedGetter;
                                                }
                                                return this._then(
                                                    getter,
                                                    undefined,
                                                    undefined,
                                                    propertyName,
                                                    undefined
                                                );
                                            };
                                        };
                                    },
                                    { "./util": 36 }
                                ],
                                6: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(
                                            Promise,
                                            PromiseArray,
                                            apiRejection,
                                            debug
                                        ) {
                                            var util = _dereq_("./util");
                                            var tryCatch = util.tryCatch;
                                            var errorObj = util.errorObj;
                                            var async = Promise._async;

                                            Promise.prototype[
                                                "break"
                                            ] = Promise.prototype.cancel = function() {
                                                if (!debug.cancellation())
                                                    return this._warn(
                                                        "cancellation is disabled"
                                                    );

                                                var promise = this;
                                                var child = promise;
                                                while (promise._isCancellable()) {
                                                    if (!promise._cancelBy(child)) {
                                                        if (child._isFollowing()) {
                                                            child._followee().cancel();
                                                        } else {
                                                            child._cancelBranched();
                                                        }
                                                        break;
                                                    }

                                                    var parent =
                                                        promise._cancellationParent;
                                                    if (
                                                        parent == null ||
                                                        !parent._isCancellable()
                                                    ) {
                                                        if (promise._isFollowing()) {
                                                            promise._followee().cancel();
                                                        } else {
                                                            promise._cancelBranched();
                                                        }
                                                        break;
                                                    } else {
                                                        if (promise._isFollowing())
                                                            promise._followee().cancel();
                                                        promise._setWillBeCancelled();
                                                        child = promise;
                                                        promise = parent;
                                                    }
                                                }
                                            };

                                            Promise.prototype._branchHasCancelled = function() {
                                                this._branchesRemainingToCancel--;
                                            };

                                            Promise.prototype._enoughBranchesHaveCancelled = function() {
                                                return (
                                                    this._branchesRemainingToCancel ===
                                                        undefined ||
                                                    this._branchesRemainingToCancel <= 0
                                                );
                                            };

                                            Promise.prototype._cancelBy = function(
                                                canceller
                                            ) {
                                                if (canceller === this) {
                                                    this._branchesRemainingToCancel = 0;
                                                    this._invokeOnCancel();
                                                    return true;
                                                } else {
                                                    this._branchHasCancelled();
                                                    if (
                                                        this._enoughBranchesHaveCancelled()
                                                    ) {
                                                        this._invokeOnCancel();
                                                        return true;
                                                    }
                                                }
                                                return false;
                                            };

                                            Promise.prototype._cancelBranched = function() {
                                                if (this._enoughBranchesHaveCancelled()) {
                                                    this._cancel();
                                                }
                                            };

                                            Promise.prototype._cancel = function() {
                                                if (!this._isCancellable()) return;
                                                this._setCancelled();
                                                async.invoke(
                                                    this._cancelPromises,
                                                    this,
                                                    undefined
                                                );
                                            };

                                            Promise.prototype._cancelPromises = function() {
                                                if (this._length() > 0)
                                                    this._settlePromises();
                                            };

                                            Promise.prototype._unsetOnCancel = function() {
                                                this._onCancelField = undefined;
                                            };

                                            Promise.prototype._isCancellable = function() {
                                                return (
                                                    this.isPending() &&
                                                    !this._isCancelled()
                                                );
                                            };

                                            Promise.prototype.isCancellable = function() {
                                                return (
                                                    this.isPending() &&
                                                    !this.isCancelled()
                                                );
                                            };

                                            Promise.prototype._doInvokeOnCancel = function(
                                                onCancelCallback,
                                                internalOnly
                                            ) {
                                                if (util.isArray(onCancelCallback)) {
                                                    for (
                                                        var i = 0;
                                                        i < onCancelCallback.length;
                                                        ++i
                                                    ) {
                                                        this._doInvokeOnCancel(
                                                            onCancelCallback[i],
                                                            internalOnly
                                                        );
                                                    }
                                                } else if (
                                                    onCancelCallback !== undefined
                                                ) {
                                                    if (
                                                        typeof onCancelCallback ===
                                                        "function"
                                                    ) {
                                                        if (!internalOnly) {
                                                            var e = tryCatch(
                                                                onCancelCallback
                                                            ).call(this._boundValue());
                                                            if (e === errorObj) {
                                                                this._attachExtraTrace(
                                                                    e.e
                                                                );
                                                                async.throwLater(e.e);
                                                            }
                                                        }
                                                    } else {
                                                        onCancelCallback._resultCancelled(
                                                            this
                                                        );
                                                    }
                                                }
                                            };

                                            Promise.prototype._invokeOnCancel = function() {
                                                var onCancelCallback = this._onCancel();
                                                this._unsetOnCancel();
                                                async.invoke(
                                                    this._doInvokeOnCancel,
                                                    this,
                                                    onCancelCallback
                                                );
                                            };

                                            Promise.prototype._invokeInternalOnCancel = function() {
                                                if (this._isCancellable()) {
                                                    this._doInvokeOnCancel(
                                                        this._onCancel(),
                                                        true
                                                    );
                                                    this._unsetOnCancel();
                                                }
                                            };

                                            Promise.prototype._resultCancelled = function() {
                                                this.cancel();
                                            };
                                        };
                                    },
                                    { "./util": 36 }
                                ],
                                7: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(NEXT_FILTER) {
                                            var util = _dereq_("./util");
                                            var getKeys = _dereq_("./es5").keys;
                                            var tryCatch = util.tryCatch;
                                            var errorObj = util.errorObj;

                                            function catchFilter(instances, cb, promise) {
                                                return function(e) {
                                                    var boundTo = promise._boundValue();
                                                    predicateLoop: for (
                                                        var i = 0;
                                                        i < instances.length;
                                                        ++i
                                                    ) {
                                                        var item = instances[i];

                                                        if (
                                                            item === Error ||
                                                            (item != null &&
                                                                item.prototype instanceof
                                                                    Error)
                                                        ) {
                                                            if (e instanceof item) {
                                                                return tryCatch(cb).call(
                                                                    boundTo,
                                                                    e
                                                                );
                                                            }
                                                        } else if (
                                                            typeof item === "function"
                                                        ) {
                                                            var matchesPredicate = tryCatch(
                                                                item
                                                            ).call(boundTo, e);
                                                            if (
                                                                matchesPredicate ===
                                                                errorObj
                                                            ) {
                                                                return matchesPredicate;
                                                            } else if (matchesPredicate) {
                                                                return tryCatch(cb).call(
                                                                    boundTo,
                                                                    e
                                                                );
                                                            }
                                                        } else if (util.isObject(e)) {
                                                            var keys = getKeys(item);
                                                            for (
                                                                var j = 0;
                                                                j < keys.length;
                                                                ++j
                                                            ) {
                                                                var key = keys[j];
                                                                if (item[key] != e[key]) {
                                                                    continue predicateLoop;
                                                                }
                                                            }
                                                            return tryCatch(cb).call(
                                                                boundTo,
                                                                e
                                                            );
                                                        }
                                                    }
                                                    return NEXT_FILTER;
                                                };
                                            }

                                            return catchFilter;
                                        };
                                    },
                                    { "./es5": 13, "./util": 36 }
                                ],
                                8: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(Promise) {
                                            var longStackTraces = false;
                                            var contextStack = [];

                                            Promise.prototype._promiseCreated = function() {};
                                            Promise.prototype._pushContext = function() {};
                                            Promise.prototype._popContext = function() {
                                                return null;
                                            };
                                            Promise._peekContext = Promise.prototype._peekContext = function() {};

                                            function Context() {
                                                this._trace = new Context.CapturedTrace(
                                                    peekContext()
                                                );
                                            }
                                            Context.prototype._pushContext = function() {
                                                if (this._trace !== undefined) {
                                                    this._trace._promiseCreated = null;
                                                    contextStack.push(this._trace);
                                                }
                                            };

                                            Context.prototype._popContext = function() {
                                                if (this._trace !== undefined) {
                                                    var trace = contextStack.pop();
                                                    var ret = trace._promiseCreated;
                                                    trace._promiseCreated = null;
                                                    return ret;
                                                }
                                                return null;
                                            };

                                            function createContext() {
                                                if (longStackTraces) return new Context();
                                            }

                                            function peekContext() {
                                                var lastIndex = contextStack.length - 1;
                                                if (lastIndex >= 0) {
                                                    return contextStack[lastIndex];
                                                }
                                                return undefined;
                                            }
                                            Context.CapturedTrace = null;
                                            Context.create = createContext;
                                            Context.deactivateLongStackTraces = function() {};
                                            Context.activateLongStackTraces = function() {
                                                var Promise_pushContext =
                                                    Promise.prototype._pushContext;
                                                var Promise_popContext =
                                                    Promise.prototype._popContext;
                                                var Promise_PeekContext =
                                                    Promise._peekContext;
                                                var Promise_peekContext =
                                                    Promise.prototype._peekContext;
                                                var Promise_promiseCreated =
                                                    Promise.prototype._promiseCreated;
                                                Context.deactivateLongStackTraces = function() {
                                                    Promise.prototype._pushContext = Promise_pushContext;
                                                    Promise.prototype._popContext = Promise_popContext;
                                                    Promise._peekContext = Promise_PeekContext;
                                                    Promise.prototype._peekContext = Promise_peekContext;
                                                    Promise.prototype._promiseCreated = Promise_promiseCreated;
                                                    longStackTraces = false;
                                                };
                                                longStackTraces = true;
                                                Promise.prototype._pushContext =
                                                    Context.prototype._pushContext;
                                                Promise.prototype._popContext =
                                                    Context.prototype._popContext;
                                                Promise._peekContext = Promise.prototype._peekContext = peekContext;
                                                Promise.prototype._promiseCreated = function() {
                                                    var ctx = this._peekContext();
                                                    if (
                                                        ctx &&
                                                        ctx._promiseCreated == null
                                                    )
                                                        ctx._promiseCreated = this;
                                                };
                                            };
                                            return Context;
                                        };
                                    },
                                    {}
                                ],
                                9: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(Promise, Context) {
                                            var getDomain = Promise._getDomain;
                                            var async = Promise._async;
                                            var Warning = _dereq_("./errors").Warning;
                                            var util = _dereq_("./util");
                                            var canAttachTrace = util.canAttachTrace;
                                            var unhandledRejectionHandled;
                                            var possiblyUnhandledRejection;
                                            var bluebirdFramePattern = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
                                            var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
                                            var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
                                            var stackFramePattern = null;
                                            var formatStack = null;
                                            var indentStackFrames = false;
                                            var printWarning;
                                            var debugging = !!(
                                                util.env("BLUEBIRD_DEBUG") != 0 &&
                                                (true ||
                                                    util.env("BLUEBIRD_DEBUG") ||
                                                    util.env("NODE_ENV") ===
                                                        "development")
                                            );

                                            var warnings = !!(
                                                util.env("BLUEBIRD_WARNINGS") != 0 &&
                                                (debugging ||
                                                    util.env("BLUEBIRD_WARNINGS"))
                                            );

                                            var longStackTraces = !!(
                                                util.env("BLUEBIRD_LONG_STACK_TRACES") !=
                                                    0 &&
                                                (debugging ||
                                                    util.env(
                                                        "BLUEBIRD_LONG_STACK_TRACES"
                                                    ))
                                            );

                                            var wForgottenReturn =
                                                util.env("BLUEBIRD_W_FORGOTTEN_RETURN") !=
                                                    0 &&
                                                (warnings ||
                                                    !!util.env(
                                                        "BLUEBIRD_W_FORGOTTEN_RETURN"
                                                    ));

                                            Promise.prototype.suppressUnhandledRejections = function() {
                                                var target = this._target();
                                                target._bitField =
                                                    (target._bitField & ~1048576) |
                                                    524288;
                                            };

                                            Promise.prototype._ensurePossibleRejectionHandled = function() {
                                                if ((this._bitField & 524288) !== 0)
                                                    return;
                                                this._setRejectionIsUnhandled();
                                                var self = this;
                                                setTimeout(function() {
                                                    self._notifyUnhandledRejection();
                                                }, 1);
                                            };

                                            Promise.prototype._notifyUnhandledRejectionIsHandled = function() {
                                                fireRejectionEvent(
                                                    "rejectionHandled",
                                                    unhandledRejectionHandled,
                                                    undefined,
                                                    this
                                                );
                                            };

                                            Promise.prototype._setReturnedNonUndefined = function() {
                                                this._bitField =
                                                    this._bitField | 268435456;
                                            };

                                            Promise.prototype._returnedNonUndefined = function() {
                                                return (this._bitField & 268435456) !== 0;
                                            };

                                            Promise.prototype._notifyUnhandledRejection = function() {
                                                if (this._isRejectionUnhandled()) {
                                                    var reason = this._settledValue();
                                                    this._setUnhandledRejectionIsNotified();
                                                    fireRejectionEvent(
                                                        "unhandledRejection",
                                                        possiblyUnhandledRejection,
                                                        reason,
                                                        this
                                                    );
                                                }
                                            };

                                            Promise.prototype._setUnhandledRejectionIsNotified = function() {
                                                this._bitField = this._bitField | 262144;
                                            };

                                            Promise.prototype._unsetUnhandledRejectionIsNotified = function() {
                                                this._bitField = this._bitField & ~262144;
                                            };

                                            Promise.prototype._isUnhandledRejectionNotified = function() {
                                                return (this._bitField & 262144) > 0;
                                            };

                                            Promise.prototype._setRejectionIsUnhandled = function() {
                                                this._bitField = this._bitField | 1048576;
                                            };

                                            Promise.prototype._unsetRejectionIsUnhandled = function() {
                                                this._bitField =
                                                    this._bitField & ~1048576;
                                                if (
                                                    this._isUnhandledRejectionNotified()
                                                ) {
                                                    this._unsetUnhandledRejectionIsNotified();
                                                    this._notifyUnhandledRejectionIsHandled();
                                                }
                                            };

                                            Promise.prototype._isRejectionUnhandled = function() {
                                                return (this._bitField & 1048576) > 0;
                                            };

                                            Promise.prototype._warn = function(
                                                message,
                                                shouldUseOwnTrace,
                                                promise
                                            ) {
                                                return warn(
                                                    message,
                                                    shouldUseOwnTrace,
                                                    promise || this
                                                );
                                            };

                                            Promise.onPossiblyUnhandledRejection = function(
                                                fn
                                            ) {
                                                var domain = getDomain();
                                                possiblyUnhandledRejection =
                                                    typeof fn === "function"
                                                        ? domain === null
                                                            ? fn
                                                            : util.domainBind(domain, fn)
                                                        : undefined;
                                            };

                                            Promise.onUnhandledRejectionHandled = function(
                                                fn
                                            ) {
                                                var domain = getDomain();
                                                unhandledRejectionHandled =
                                                    typeof fn === "function"
                                                        ? domain === null
                                                            ? fn
                                                            : util.domainBind(domain, fn)
                                                        : undefined;
                                            };

                                            var disableLongStackTraces = function() {};
                                            Promise.longStackTraces = function() {
                                                if (
                                                    async.haveItemsQueued() &&
                                                    !config.longStackTraces
                                                ) {
                                                    throw new Error(
                                                        "cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                                                    );
                                                }
                                                if (
                                                    !config.longStackTraces &&
                                                    longStackTracesIsSupported()
                                                ) {
                                                    var Promise_captureStackTrace =
                                                        Promise.prototype
                                                            ._captureStackTrace;
                                                    var Promise_attachExtraTrace =
                                                        Promise.prototype
                                                            ._attachExtraTrace;
                                                    config.longStackTraces = true;
                                                    disableLongStackTraces = function() {
                                                        if (
                                                            async.haveItemsQueued() &&
                                                            !config.longStackTraces
                                                        ) {
                                                            throw new Error(
                                                                "cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                                                            );
                                                        }
                                                        Promise.prototype._captureStackTrace = Promise_captureStackTrace;
                                                        Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
                                                        Context.deactivateLongStackTraces();
                                                        async.enableTrampoline();
                                                        config.longStackTraces = false;
                                                    };
                                                    Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
                                                    Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
                                                    Context.activateLongStackTraces();
                                                    async.disableTrampolineIfNecessary();
                                                }
                                            };

                                            Promise.hasLongStackTraces = function() {
                                                return (
                                                    config.longStackTraces &&
                                                    longStackTracesIsSupported()
                                                );
                                            };

                                            var fireDomEvent = (function() {
                                                try {
                                                    if (
                                                        typeof CustomEvent === "function"
                                                    ) {
                                                        var event = new CustomEvent(
                                                            "CustomEvent"
                                                        );
                                                        util.global.dispatchEvent(event);
                                                        return function(name, event) {
                                                            var domEvent = new CustomEvent(
                                                                name.toLowerCase(),
                                                                {
                                                                    detail: event,
                                                                    cancelable: true
                                                                }
                                                            );
                                                            return !util.global.dispatchEvent(
                                                                domEvent
                                                            );
                                                        };
                                                    } else if (
                                                        typeof Event === "function"
                                                    ) {
                                                        var event = new Event(
                                                            "CustomEvent"
                                                        );
                                                        util.global.dispatchEvent(event);
                                                        return function(name, event) {
                                                            var domEvent = new Event(
                                                                name.toLowerCase(),
                                                                {
                                                                    cancelable: true
                                                                }
                                                            );
                                                            domEvent.detail = event;
                                                            return !util.global.dispatchEvent(
                                                                domEvent
                                                            );
                                                        };
                                                    } else {
                                                        var event = document.createEvent(
                                                            "CustomEvent"
                                                        );
                                                        event.initCustomEvent(
                                                            "testingtheevent",
                                                            false,
                                                            true,
                                                            {}
                                                        );
                                                        util.global.dispatchEvent(event);
                                                        return function(name, event) {
                                                            var domEvent = document.createEvent(
                                                                "CustomEvent"
                                                            );
                                                            domEvent.initCustomEvent(
                                                                name.toLowerCase(),
                                                                false,
                                                                true,
                                                                event
                                                            );
                                                            return !util.global.dispatchEvent(
                                                                domEvent
                                                            );
                                                        };
                                                    }
                                                } catch (e) {}
                                                return function() {
                                                    return false;
                                                };
                                            })();

                                            var fireGlobalEvent = (function() {
                                                if (util.isNode) {
                                                    return function() {
                                                        return process.emit.apply(
                                                            process,
                                                            arguments
                                                        );
                                                    };
                                                } else {
                                                    if (!util.global) {
                                                        return function() {
                                                            return false;
                                                        };
                                                    }
                                                    return function(name) {
                                                        var methodName =
                                                            "on" + name.toLowerCase();
                                                        var method =
                                                            util.global[methodName];
                                                        if (!method) return false;
                                                        method.apply(
                                                            util.global,
                                                            [].slice.call(arguments, 1)
                                                        );
                                                        return true;
                                                    };
                                                }
                                            })();

                                            function generatePromiseLifecycleEventObject(
                                                name,
                                                promise
                                            ) {
                                                return { promise: promise };
                                            }

                                            var eventToObjectGenerator = {
                                                promiseCreated: generatePromiseLifecycleEventObject,
                                                promiseFulfilled: generatePromiseLifecycleEventObject,
                                                promiseRejected: generatePromiseLifecycleEventObject,
                                                promiseResolved: generatePromiseLifecycleEventObject,
                                                promiseCancelled: generatePromiseLifecycleEventObject,
                                                promiseChained: function(
                                                    name,
                                                    promise,
                                                    child
                                                ) {
                                                    return {
                                                        promise: promise,
                                                        child: child
                                                    };
                                                },
                                                warning: function(name, warning) {
                                                    return { warning: warning };
                                                },
                                                unhandledRejection: function(
                                                    name,
                                                    reason,
                                                    promise
                                                ) {
                                                    return {
                                                        reason: reason,
                                                        promise: promise
                                                    };
                                                },
                                                rejectionHandled: generatePromiseLifecycleEventObject
                                            };

                                            var activeFireEvent = function(name) {
                                                var globalEventFired = false;
                                                try {
                                                    globalEventFired = fireGlobalEvent.apply(
                                                        null,
                                                        arguments
                                                    );
                                                } catch (e) {
                                                    async.throwLater(e);
                                                    globalEventFired = true;
                                                }

                                                var domEventFired = false;
                                                try {
                                                    domEventFired = fireDomEvent(
                                                        name,
                                                        eventToObjectGenerator[
                                                            name
                                                        ].apply(null, arguments)
                                                    );
                                                } catch (e) {
                                                    async.throwLater(e);
                                                    domEventFired = true;
                                                }

                                                return domEventFired || globalEventFired;
                                            };

                                            Promise.config = function(opts) {
                                                opts = Object(opts);
                                                if ("longStackTraces" in opts) {
                                                    if (opts.longStackTraces) {
                                                        Promise.longStackTraces();
                                                    } else if (
                                                        !opts.longStackTraces &&
                                                        Promise.hasLongStackTraces()
                                                    ) {
                                                        disableLongStackTraces();
                                                    }
                                                }
                                                if ("warnings" in opts) {
                                                    var warningsOption = opts.warnings;
                                                    config.warnings = !!warningsOption;
                                                    wForgottenReturn = config.warnings;

                                                    if (util.isObject(warningsOption)) {
                                                        if (
                                                            "wForgottenReturn" in
                                                            warningsOption
                                                        ) {
                                                            wForgottenReturn = !!warningsOption.wForgottenReturn;
                                                        }
                                                    }
                                                }
                                                if (
                                                    "cancellation" in opts &&
                                                    opts.cancellation &&
                                                    !config.cancellation
                                                ) {
                                                    if (async.haveItemsQueued()) {
                                                        throw new Error(
                                                            "cannot enable cancellation after promises are in use"
                                                        );
                                                    }
                                                    Promise.prototype._clearCancellationData = cancellationClearCancellationData;
                                                    Promise.prototype._propagateFrom = cancellationPropagateFrom;
                                                    Promise.prototype._onCancel = cancellationOnCancel;
                                                    Promise.prototype._setOnCancel = cancellationSetOnCancel;
                                                    Promise.prototype._attachCancellationCallback = cancellationAttachCancellationCallback;
                                                    Promise.prototype._execute = cancellationExecute;
                                                    propagateFromFunction = cancellationPropagateFrom;
                                                    config.cancellation = true;
                                                }
                                                if ("monitoring" in opts) {
                                                    if (
                                                        opts.monitoring &&
                                                        !config.monitoring
                                                    ) {
                                                        config.monitoring = true;
                                                        Promise.prototype._fireEvent = activeFireEvent;
                                                    } else if (
                                                        !opts.monitoring &&
                                                        config.monitoring
                                                    ) {
                                                        config.monitoring = false;
                                                        Promise.prototype._fireEvent = defaultFireEvent;
                                                    }
                                                }
                                                return Promise;
                                            };

                                            function defaultFireEvent() {
                                                return false;
                                            }

                                            Promise.prototype._fireEvent = defaultFireEvent;
                                            Promise.prototype._execute = function(
                                                executor,
                                                resolve,
                                                reject
                                            ) {
                                                try {
                                                    executor(resolve, reject);
                                                } catch (e) {
                                                    return e;
                                                }
                                            };
                                            Promise.prototype._onCancel = function() {};
                                            Promise.prototype._setOnCancel = function(
                                                handler
                                            ) {};
                                            Promise.prototype._attachCancellationCallback = function(
                                                onCancel
                                            ) {};
                                            Promise.prototype._captureStackTrace = function() {};
                                            Promise.prototype._attachExtraTrace = function() {};
                                            Promise.prototype._clearCancellationData = function() {};
                                            Promise.prototype._propagateFrom = function(
                                                parent,
                                                flags
                                            ) {};

                                            function cancellationExecute(
                                                executor,
                                                resolve,
                                                reject
                                            ) {
                                                var promise = this;
                                                try {
                                                    executor(resolve, reject, function(
                                                        onCancel
                                                    ) {
                                                        if (
                                                            typeof onCancel !== "function"
                                                        ) {
                                                            throw new TypeError(
                                                                "onCancel must be a function, got: " +
                                                                    util.toString(
                                                                        onCancel
                                                                    )
                                                            );
                                                        }
                                                        promise._attachCancellationCallback(
                                                            onCancel
                                                        );
                                                    });
                                                } catch (e) {
                                                    return e;
                                                }
                                            }

                                            function cancellationAttachCancellationCallback(
                                                onCancel
                                            ) {
                                                if (!this._isCancellable()) return this;

                                                var previousOnCancel = this._onCancel();
                                                if (previousOnCancel !== undefined) {
                                                    if (util.isArray(previousOnCancel)) {
                                                        previousOnCancel.push(onCancel);
                                                    } else {
                                                        this._setOnCancel([
                                                            previousOnCancel,
                                                            onCancel
                                                        ]);
                                                    }
                                                } else {
                                                    this._setOnCancel(onCancel);
                                                }
                                            }

                                            function cancellationOnCancel() {
                                                return this._onCancelField;
                                            }

                                            function cancellationSetOnCancel(onCancel) {
                                                this._onCancelField = onCancel;
                                            }

                                            function cancellationClearCancellationData() {
                                                this._cancellationParent = undefined;
                                                this._onCancelField = undefined;
                                            }

                                            function cancellationPropagateFrom(
                                                parent,
                                                flags
                                            ) {
                                                if ((flags & 1) !== 0) {
                                                    this._cancellationParent = parent;
                                                    var branchesRemainingToCancel =
                                                        parent._branchesRemainingToCancel;
                                                    if (
                                                        branchesRemainingToCancel ===
                                                        undefined
                                                    ) {
                                                        branchesRemainingToCancel = 0;
                                                    }
                                                    parent._branchesRemainingToCancel =
                                                        branchesRemainingToCancel + 1;
                                                }
                                                if (
                                                    (flags & 2) !== 0 &&
                                                    parent._isBound()
                                                ) {
                                                    this._setBoundTo(parent._boundTo);
                                                }
                                            }

                                            function bindingPropagateFrom(parent, flags) {
                                                if (
                                                    (flags & 2) !== 0 &&
                                                    parent._isBound()
                                                ) {
                                                    this._setBoundTo(parent._boundTo);
                                                }
                                            }
                                            var propagateFromFunction = bindingPropagateFrom;

                                            function boundValueFunction() {
                                                var ret = this._boundTo;
                                                if (ret !== undefined) {
                                                    if (ret instanceof Promise) {
                                                        if (ret.isFulfilled()) {
                                                            return ret.value();
                                                        } else {
                                                            return undefined;
                                                        }
                                                    }
                                                }
                                                return ret;
                                            }

                                            function longStackTracesCaptureStackTrace() {
                                                this._trace = new CapturedTrace(
                                                    this._peekContext()
                                                );
                                            }

                                            function longStackTracesAttachExtraTrace(
                                                error,
                                                ignoreSelf
                                            ) {
                                                if (canAttachTrace(error)) {
                                                    var trace = this._trace;
                                                    if (trace !== undefined) {
                                                        if (ignoreSelf)
                                                            trace = trace._parent;
                                                    }
                                                    if (trace !== undefined) {
                                                        trace.attachExtraTrace(error);
                                                    } else if (!error.__stackCleaned__) {
                                                        var parsed = parseStackAndMessage(
                                                            error
                                                        );
                                                        util.notEnumerableProp(
                                                            error,
                                                            "stack",
                                                            parsed.message +
                                                                "\n" +
                                                                parsed.stack.join("\n")
                                                        );
                                                        util.notEnumerableProp(
                                                            error,
                                                            "__stackCleaned__",
                                                            true
                                                        );
                                                    }
                                                }
                                            }

                                            function checkForgottenReturns(
                                                returnValue,
                                                promiseCreated,
                                                name,
                                                promise,
                                                parent
                                            ) {
                                                if (
                                                    returnValue === undefined &&
                                                    promiseCreated !== null &&
                                                    wForgottenReturn
                                                ) {
                                                    if (
                                                        parent !== undefined &&
                                                        parent._returnedNonUndefined()
                                                    )
                                                        return;
                                                    if ((promise._bitField & 65535) === 0)
                                                        return;

                                                    if (name) name = name + " ";
                                                    var handlerLine = "";
                                                    var creatorLine = "";
                                                    if (promiseCreated._trace) {
                                                        var traceLines = promiseCreated._trace.stack.split(
                                                            "\n"
                                                        );
                                                        var stack = cleanStack(
                                                            traceLines
                                                        );
                                                        for (
                                                            var i = stack.length - 1;
                                                            i >= 0;
                                                            --i
                                                        ) {
                                                            var line = stack[i];
                                                            if (
                                                                !nodeFramePattern.test(
                                                                    line
                                                                )
                                                            ) {
                                                                var lineMatches = line.match(
                                                                    parseLinePattern
                                                                );
                                                                if (lineMatches) {
                                                                    handlerLine =
                                                                        "at " +
                                                                        lineMatches[1] +
                                                                        ":" +
                                                                        lineMatches[2] +
                                                                        ":" +
                                                                        lineMatches[3] +
                                                                        " ";
                                                                }
                                                                break;
                                                            }
                                                        }

                                                        if (stack.length > 0) {
                                                            var firstUserLine = stack[0];
                                                            for (
                                                                var i = 0;
                                                                i < traceLines.length;
                                                                ++i
                                                            ) {
                                                                if (
                                                                    traceLines[i] ===
                                                                    firstUserLine
                                                                ) {
                                                                    if (i > 0) {
                                                                        creatorLine =
                                                                            "\n" +
                                                                            traceLines[
                                                                                i - 1
                                                                            ];
                                                                    }
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                    }
                                                    var msg =
                                                        "a promise was created in a " +
                                                        name +
                                                        "handler " +
                                                        handlerLine +
                                                        "but was not returned from it, " +
                                                        "see http://goo.gl/rRqMUw" +
                                                        creatorLine;
                                                    promise._warn(
                                                        msg,
                                                        true,
                                                        promiseCreated
                                                    );
                                                }
                                            }

                                            function deprecated(name, replacement) {
                                                var message =
                                                    name +
                                                    " is deprecated and will be removed in a future version.";
                                                if (replacement)
                                                    message +=
                                                        " Use " +
                                                        replacement +
                                                        " instead.";
                                                return warn(message);
                                            }

                                            function warn(
                                                message,
                                                shouldUseOwnTrace,
                                                promise
                                            ) {
                                                if (!config.warnings) return;
                                                var warning = new Warning(message);
                                                var ctx;
                                                if (shouldUseOwnTrace) {
                                                    promise._attachExtraTrace(warning);
                                                } else if (
                                                    config.longStackTraces &&
                                                    (ctx = Promise._peekContext())
                                                ) {
                                                    ctx.attachExtraTrace(warning);
                                                } else {
                                                    var parsed = parseStackAndMessage(
                                                        warning
                                                    );
                                                    warning.stack =
                                                        parsed.message +
                                                        "\n" +
                                                        parsed.stack.join("\n");
                                                }

                                                if (
                                                    !activeFireEvent("warning", warning)
                                                ) {
                                                    formatAndLogError(warning, "", true);
                                                }
                                            }

                                            function reconstructStack(message, stacks) {
                                                for (
                                                    var i = 0;
                                                    i < stacks.length - 1;
                                                    ++i
                                                ) {
                                                    stacks[i].push(
                                                        "From previous event:"
                                                    );
                                                    stacks[i] = stacks[i].join("\n");
                                                }
                                                if (i < stacks.length) {
                                                    stacks[i] = stacks[i].join("\n");
                                                }
                                                return message + "\n" + stacks.join("\n");
                                            }

                                            function removeDuplicateOrEmptyJumps(stacks) {
                                                for (var i = 0; i < stacks.length; ++i) {
                                                    if (
                                                        stacks[i].length === 0 ||
                                                        (i + 1 < stacks.length &&
                                                            stacks[i][0] ===
                                                                stacks[i + 1][0])
                                                    ) {
                                                        stacks.splice(i, 1);
                                                        i--;
                                                    }
                                                }
                                            }

                                            function removeCommonRoots(stacks) {
                                                var current = stacks[0];
                                                for (var i = 1; i < stacks.length; ++i) {
                                                    var prev = stacks[i];
                                                    var currentLastIndex =
                                                        current.length - 1;
                                                    var currentLastLine =
                                                        current[currentLastIndex];
                                                    var commonRootMeetPoint = -1;

                                                    for (
                                                        var j = prev.length - 1;
                                                        j >= 0;
                                                        --j
                                                    ) {
                                                        if (prev[j] === currentLastLine) {
                                                            commonRootMeetPoint = j;
                                                            break;
                                                        }
                                                    }

                                                    for (
                                                        var j = commonRootMeetPoint;
                                                        j >= 0;
                                                        --j
                                                    ) {
                                                        var line = prev[j];
                                                        if (
                                                            current[currentLastIndex] ===
                                                            line
                                                        ) {
                                                            current.pop();
                                                            currentLastIndex--;
                                                        } else {
                                                            break;
                                                        }
                                                    }
                                                    current = prev;
                                                }
                                            }

                                            function cleanStack(stack) {
                                                var ret = [];
                                                for (var i = 0; i < stack.length; ++i) {
                                                    var line = stack[i];
                                                    var isTraceLine =
                                                        "    (No stack trace)" === line ||
                                                        stackFramePattern.test(line);
                                                    var isInternalFrame =
                                                        isTraceLine && shouldIgnore(line);
                                                    if (isTraceLine && !isInternalFrame) {
                                                        if (
                                                            indentStackFrames &&
                                                            line.charAt(0) !== " "
                                                        ) {
                                                            line = "    " + line;
                                                        }
                                                        ret.push(line);
                                                    }
                                                }
                                                return ret;
                                            }

                                            function stackFramesAsArray(error) {
                                                var stack = error.stack
                                                    .replace(/\s+$/g, "")
                                                    .split("\n");
                                                for (var i = 0; i < stack.length; ++i) {
                                                    var line = stack[i];
                                                    if (
                                                        "    (No stack trace)" === line ||
                                                        stackFramePattern.test(line)
                                                    ) {
                                                        break;
                                                    }
                                                }
                                                if (
                                                    i > 0 &&
                                                    error.name != "SyntaxError"
                                                ) {
                                                    stack = stack.slice(i);
                                                }
                                                return stack;
                                            }

                                            function parseStackAndMessage(error) {
                                                var stack = error.stack;
                                                var message = error.toString();
                                                stack =
                                                    typeof stack === "string" &&
                                                    stack.length > 0
                                                        ? stackFramesAsArray(error)
                                                        : ["    (No stack trace)"];
                                                return {
                                                    message: message,
                                                    stack:
                                                        error.name == "SyntaxError"
                                                            ? stack
                                                            : cleanStack(stack)
                                                };
                                            }

                                            function formatAndLogError(
                                                error,
                                                title,
                                                isSoft
                                            ) {
                                                if (typeof console !== "undefined") {
                                                    var message;
                                                    if (util.isObject(error)) {
                                                        var stack = error.stack;
                                                        message =
                                                            title +
                                                            formatStack(stack, error);
                                                    } else {
                                                        message = title + String(error);
                                                    }
                                                    if (
                                                        typeof printWarning === "function"
                                                    ) {
                                                        printWarning(message, isSoft);
                                                    } else if (
                                                        typeof console.log ===
                                                            "function" ||
                                                        typeof console.log === "object"
                                                    ) {
                                                        console.log(message);
                                                    }
                                                }
                                            }

                                            function fireRejectionEvent(
                                                name,
                                                localHandler,
                                                reason,
                                                promise
                                            ) {
                                                var localEventFired = false;
                                                try {
                                                    if (
                                                        typeof localHandler === "function"
                                                    ) {
                                                        localEventFired = true;
                                                        if (name === "rejectionHandled") {
                                                            localHandler(promise);
                                                        } else {
                                                            localHandler(reason, promise);
                                                        }
                                                    }
                                                } catch (e) {
                                                    async.throwLater(e);
                                                }

                                                if (name === "unhandledRejection") {
                                                    if (
                                                        !activeFireEvent(
                                                            name,
                                                            reason,
                                                            promise
                                                        ) &&
                                                        !localEventFired
                                                    ) {
                                                        formatAndLogError(
                                                            reason,
                                                            "Unhandled rejection "
                                                        );
                                                    }
                                                } else {
                                                    activeFireEvent(name, promise);
                                                }
                                            }

                                            function formatNonError(obj) {
                                                var str;
                                                if (typeof obj === "function") {
                                                    str =
                                                        "[function " +
                                                        (obj.name || "anonymous") +
                                                        "]";
                                                } else {
                                                    str =
                                                        obj &&
                                                        typeof obj.toString === "function"
                                                            ? obj.toString()
                                                            : util.toString(obj);
                                                    var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
                                                    if (ruselessToString.test(str)) {
                                                        try {
                                                            var newStr = JSON.stringify(
                                                                obj
                                                            );
                                                            str = newStr;
                                                        } catch (e) {}
                                                    }
                                                    if (str.length === 0) {
                                                        str = "(empty array)";
                                                    }
                                                }
                                                return (
                                                    "(<" +
                                                    snip(str) +
                                                    ">, no stack trace)"
                                                );
                                            }

                                            function snip(str) {
                                                var maxChars = 41;
                                                if (str.length < maxChars) {
                                                    return str;
                                                }
                                                return (
                                                    str.substr(0, maxChars - 3) + "..."
                                                );
                                            }

                                            function longStackTracesIsSupported() {
                                                return (
                                                    typeof captureStackTrace ===
                                                    "function"
                                                );
                                            }

                                            var shouldIgnore = function() {
                                                return false;
                                            };
                                            var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                                            function parseLineInfo(line) {
                                                var matches = line.match(
                                                    parseLineInfoRegex
                                                );
                                                if (matches) {
                                                    return {
                                                        fileName: matches[1],
                                                        line: parseInt(matches[2], 10)
                                                    };
                                                }
                                            }

                                            function setBounds(
                                                firstLineError,
                                                lastLineError
                                            ) {
                                                if (!longStackTracesIsSupported()) return;
                                                var firstStackLines = firstLineError.stack.split(
                                                    "\n"
                                                );
                                                var lastStackLines = lastLineError.stack.split(
                                                    "\n"
                                                );
                                                var firstIndex = -1;
                                                var lastIndex = -1;
                                                var firstFileName;
                                                var lastFileName;
                                                for (
                                                    var i = 0;
                                                    i < firstStackLines.length;
                                                    ++i
                                                ) {
                                                    var result = parseLineInfo(
                                                        firstStackLines[i]
                                                    );
                                                    if (result) {
                                                        firstFileName = result.fileName;
                                                        firstIndex = result.line;
                                                        break;
                                                    }
                                                }
                                                for (
                                                    var i = 0;
                                                    i < lastStackLines.length;
                                                    ++i
                                                ) {
                                                    var result = parseLineInfo(
                                                        lastStackLines[i]
                                                    );
                                                    if (result) {
                                                        lastFileName = result.fileName;
                                                        lastIndex = result.line;
                                                        break;
                                                    }
                                                }
                                                if (
                                                    firstIndex < 0 ||
                                                    lastIndex < 0 ||
                                                    !firstFileName ||
                                                    !lastFileName ||
                                                    firstFileName !== lastFileName ||
                                                    firstIndex >= lastIndex
                                                ) {
                                                    return;
                                                }

                                                shouldIgnore = function(line) {
                                                    if (bluebirdFramePattern.test(line))
                                                        return true;
                                                    var info = parseLineInfo(line);
                                                    if (info) {
                                                        if (
                                                            info.fileName ===
                                                                firstFileName &&
                                                            (firstIndex <= info.line &&
                                                                info.line <= lastIndex)
                                                        ) {
                                                            return true;
                                                        }
                                                    }
                                                    return false;
                                                };
                                            }

                                            function CapturedTrace(parent) {
                                                this._parent = parent;
                                                this._promisesCreated = 0;
                                                var length = (this._length =
                                                    1 +
                                                    (parent === undefined
                                                        ? 0
                                                        : parent._length));
                                                captureStackTrace(this, CapturedTrace);
                                                if (length > 32) this.uncycle();
                                            }
                                            util.inherits(CapturedTrace, Error);
                                            Context.CapturedTrace = CapturedTrace;

                                            CapturedTrace.prototype.uncycle = function() {
                                                var length = this._length;
                                                if (length < 2) return;
                                                var nodes = [];
                                                var stackToIndex = {};

                                                for (
                                                    var i = 0, node = this;
                                                    node !== undefined;
                                                    ++i
                                                ) {
                                                    nodes.push(node);
                                                    node = node._parent;
                                                }
                                                length = this._length = i;
                                                for (var i = length - 1; i >= 0; --i) {
                                                    var stack = nodes[i].stack;
                                                    if (
                                                        stackToIndex[stack] === undefined
                                                    ) {
                                                        stackToIndex[stack] = i;
                                                    }
                                                }
                                                for (var i = 0; i < length; ++i) {
                                                    var currentStack = nodes[i].stack;
                                                    var index =
                                                        stackToIndex[currentStack];
                                                    if (
                                                        index !== undefined &&
                                                        index !== i
                                                    ) {
                                                        if (index > 0) {
                                                            nodes[
                                                                index - 1
                                                            ]._parent = undefined;
                                                            nodes[index - 1]._length = 1;
                                                        }
                                                        nodes[i]._parent = undefined;
                                                        nodes[i]._length = 1;
                                                        var cycleEdgeNode =
                                                            i > 0 ? nodes[i - 1] : this;

                                                        if (index < length - 1) {
                                                            cycleEdgeNode._parent =
                                                                nodes[index + 1];
                                                            cycleEdgeNode._parent.uncycle();
                                                            cycleEdgeNode._length =
                                                                cycleEdgeNode._parent
                                                                    ._length + 1;
                                                        } else {
                                                            cycleEdgeNode._parent = undefined;
                                                            cycleEdgeNode._length = 1;
                                                        }
                                                        var currentChildLength =
                                                            cycleEdgeNode._length + 1;
                                                        for (var j = i - 2; j >= 0; --j) {
                                                            nodes[
                                                                j
                                                            ]._length = currentChildLength;
                                                            currentChildLength++;
                                                        }
                                                        return;
                                                    }
                                                }
                                            };

                                            CapturedTrace.prototype.attachExtraTrace = function(
                                                error
                                            ) {
                                                if (error.__stackCleaned__) return;
                                                this.uncycle();
                                                var parsed = parseStackAndMessage(error);
                                                var message = parsed.message;
                                                var stacks = [parsed.stack];

                                                var trace = this;
                                                while (trace !== undefined) {
                                                    stacks.push(
                                                        cleanStack(
                                                            trace.stack.split("\n")
                                                        )
                                                    );
                                                    trace = trace._parent;
                                                }
                                                removeCommonRoots(stacks);
                                                removeDuplicateOrEmptyJumps(stacks);
                                                util.notEnumerableProp(
                                                    error,
                                                    "stack",
                                                    reconstructStack(message, stacks)
                                                );
                                                util.notEnumerableProp(
                                                    error,
                                                    "__stackCleaned__",
                                                    true
                                                );
                                            };

                                            var captureStackTrace = (function stackDetection() {
                                                var v8stackFramePattern = /^\s*at\s*/;
                                                var v8stackFormatter = function(
                                                    stack,
                                                    error
                                                ) {
                                                    if (typeof stack === "string")
                                                        return stack;

                                                    if (
                                                        error.name !== undefined &&
                                                        error.message !== undefined
                                                    ) {
                                                        return error.toString();
                                                    }
                                                    return formatNonError(error);
                                                };

                                                if (
                                                    typeof Error.stackTraceLimit ===
                                                        "number" &&
                                                    typeof Error.captureStackTrace ===
                                                        "function"
                                                ) {
                                                    Error.stackTraceLimit += 6;
                                                    stackFramePattern = v8stackFramePattern;
                                                    formatStack = v8stackFormatter;
                                                    var captureStackTrace =
                                                        Error.captureStackTrace;

                                                    shouldIgnore = function(line) {
                                                        return bluebirdFramePattern.test(
                                                            line
                                                        );
                                                    };
                                                    return function(
                                                        receiver,
                                                        ignoreUntil
                                                    ) {
                                                        Error.stackTraceLimit += 6;
                                                        captureStackTrace(
                                                            receiver,
                                                            ignoreUntil
                                                        );
                                                        Error.stackTraceLimit -= 6;
                                                    };
                                                }
                                                var err = new Error();

                                                if (
                                                    typeof err.stack === "string" &&
                                                    err.stack
                                                        .split("\n")[0]
                                                        .indexOf("stackDetection@") >= 0
                                                ) {
                                                    stackFramePattern = /@/;
                                                    formatStack = v8stackFormatter;
                                                    indentStackFrames = true;
                                                    return function captureStackTrace(o) {
                                                        o.stack = new Error().stack;
                                                    };
                                                }

                                                var hasStackAfterThrow;
                                                try {
                                                    throw new Error();
                                                } catch (e) {
                                                    hasStackAfterThrow = "stack" in e;
                                                }
                                                if (
                                                    !("stack" in err) &&
                                                    hasStackAfterThrow &&
                                                    typeof Error.stackTraceLimit ===
                                                        "number"
                                                ) {
                                                    stackFramePattern = v8stackFramePattern;
                                                    formatStack = v8stackFormatter;
                                                    return function captureStackTrace(o) {
                                                        Error.stackTraceLimit += 6;
                                                        try {
                                                            throw new Error();
                                                        } catch (e) {
                                                            o.stack = e.stack;
                                                        }
                                                        Error.stackTraceLimit -= 6;
                                                    };
                                                }

                                                formatStack = function(stack, error) {
                                                    if (typeof stack === "string")
                                                        return stack;

                                                    if (
                                                        (typeof error === "object" ||
                                                            typeof error ===
                                                                "function") &&
                                                        error.name !== undefined &&
                                                        error.message !== undefined
                                                    ) {
                                                        return error.toString();
                                                    }
                                                    return formatNonError(error);
                                                };

                                                return null;
                                            })([]);

                                            if (
                                                typeof console !== "undefined" &&
                                                typeof console.warn !== "undefined"
                                            ) {
                                                printWarning = function(message) {
                                                    console.warn(message);
                                                };
                                                if (util.isNode && process.stderr.isTTY) {
                                                    printWarning = function(
                                                        message,
                                                        isSoft
                                                    ) {
                                                        var color = isSoft
                                                            ? "\u001b[33m"
                                                            : "\u001b[31m";
                                                        console.warn(
                                                            color +
                                                                message +
                                                                "\u001b[0m\n"
                                                        );
                                                    };
                                                } else if (
                                                    !util.isNode &&
                                                    typeof new Error().stack === "string"
                                                ) {
                                                    printWarning = function(
                                                        message,
                                                        isSoft
                                                    ) {
                                                        console.warn(
                                                            "%c" + message,
                                                            isSoft
                                                                ? "color: darkorange"
                                                                : "color: red"
                                                        );
                                                    };
                                                }
                                            }

                                            var config = {
                                                warnings: warnings,
                                                longStackTraces: false,
                                                cancellation: false,
                                                monitoring: false
                                            };

                                            if (longStackTraces)
                                                Promise.longStackTraces();

                                            return {
                                                longStackTraces: function() {
                                                    return config.longStackTraces;
                                                },
                                                warnings: function() {
                                                    return config.warnings;
                                                },
                                                cancellation: function() {
                                                    return config.cancellation;
                                                },
                                                monitoring: function() {
                                                    return config.monitoring;
                                                },
                                                propagateFromFunction: function() {
                                                    return propagateFromFunction;
                                                },
                                                boundValueFunction: function() {
                                                    return boundValueFunction;
                                                },
                                                checkForgottenReturns: checkForgottenReturns,
                                                setBounds: setBounds,
                                                warn: warn,
                                                deprecated: deprecated,
                                                CapturedTrace: CapturedTrace,
                                                fireDomEvent: fireDomEvent,
                                                fireGlobalEvent: fireGlobalEvent
                                            };
                                        };
                                    },
                                    { "./errors": 12, "./util": 36 }
                                ],
                                10: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(Promise) {
                                            function returner() {
                                                return this.value;
                                            }
                                            function thrower() {
                                                throw this.reason;
                                            }

                                            Promise.prototype[
                                                "return"
                                            ] = Promise.prototype.thenReturn = function(
                                                value
                                            ) {
                                                if (value instanceof Promise)
                                                    value.suppressUnhandledRejections();
                                                return this._then(
                                                    returner,
                                                    undefined,
                                                    undefined,
                                                    { value: value },
                                                    undefined
                                                );
                                            };

                                            Promise.prototype[
                                                "throw"
                                            ] = Promise.prototype.thenThrow = function(
                                                reason
                                            ) {
                                                return this._then(
                                                    thrower,
                                                    undefined,
                                                    undefined,
                                                    { reason: reason },
                                                    undefined
                                                );
                                            };

                                            Promise.prototype.catchThrow = function(
                                                reason
                                            ) {
                                                if (arguments.length <= 1) {
                                                    return this._then(
                                                        undefined,
                                                        thrower,
                                                        undefined,
                                                        { reason: reason },
                                                        undefined
                                                    );
                                                } else {
                                                    var _reason = arguments[1];
                                                    var handler = function() {
                                                        throw _reason;
                                                    };
                                                    return this.caught(reason, handler);
                                                }
                                            };

                                            Promise.prototype.catchReturn = function(
                                                value
                                            ) {
                                                if (arguments.length <= 1) {
                                                    if (value instanceof Promise)
                                                        value.suppressUnhandledRejections();
                                                    return this._then(
                                                        undefined,
                                                        returner,
                                                        undefined,
                                                        { value: value },
                                                        undefined
                                                    );
                                                } else {
                                                    var _value = arguments[1];
                                                    if (_value instanceof Promise)
                                                        _value.suppressUnhandledRejections();
                                                    var handler = function() {
                                                        return _value;
                                                    };
                                                    return this.caught(value, handler);
                                                }
                                            };
                                        };
                                    },
                                    {}
                                ],
                                11: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(Promise, INTERNAL) {
                                            var PromiseReduce = Promise.reduce;
                                            var PromiseAll = Promise.all;

                                            function promiseAllThis() {
                                                return PromiseAll(this);
                                            }

                                            function PromiseMapSeries(promises, fn) {
                                                return PromiseReduce(
                                                    promises,
                                                    fn,
                                                    INTERNAL,
                                                    INTERNAL
                                                );
                                            }

                                            Promise.prototype.each = function(fn) {
                                                return PromiseReduce(
                                                    this,
                                                    fn,
                                                    INTERNAL,
                                                    0
                                                )._then(
                                                    promiseAllThis,
                                                    undefined,
                                                    undefined,
                                                    this,
                                                    undefined
                                                );
                                            };

                                            Promise.prototype.mapSeries = function(fn) {
                                                return PromiseReduce(
                                                    this,
                                                    fn,
                                                    INTERNAL,
                                                    INTERNAL
                                                );
                                            };

                                            Promise.each = function(promises, fn) {
                                                return PromiseReduce(
                                                    promises,
                                                    fn,
                                                    INTERNAL,
                                                    0
                                                )._then(
                                                    promiseAllThis,
                                                    undefined,
                                                    undefined,
                                                    promises,
                                                    undefined
                                                );
                                            };

                                            Promise.mapSeries = PromiseMapSeries;
                                        };
                                    },
                                    {}
                                ],
                                12: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        var es5 = _dereq_("./es5");
                                        var Objectfreeze = es5.freeze;
                                        var util = _dereq_("./util");
                                        var inherits = util.inherits;
                                        var notEnumerableProp = util.notEnumerableProp;

                                        function subError(nameProperty, defaultMessage) {
                                            function SubError(message) {
                                                if (!(this instanceof SubError))
                                                    return new SubError(message);
                                                notEnumerableProp(
                                                    this,
                                                    "message",
                                                    typeof message === "string"
                                                        ? message
                                                        : defaultMessage
                                                );
                                                notEnumerableProp(
                                                    this,
                                                    "name",
                                                    nameProperty
                                                );
                                                if (Error.captureStackTrace) {
                                                    Error.captureStackTrace(
                                                        this,
                                                        this.constructor
                                                    );
                                                } else {
                                                    Error.call(this);
                                                }
                                            }
                                            inherits(SubError, Error);
                                            return SubError;
                                        }

                                        var _TypeError, _RangeError;
                                        var Warning = subError("Warning", "warning");
                                        var CancellationError = subError(
                                            "CancellationError",
                                            "cancellation error"
                                        );
                                        var TimeoutError = subError(
                                            "TimeoutError",
                                            "timeout error"
                                        );
                                        var AggregateError = subError(
                                            "AggregateError",
                                            "aggregate error"
                                        );
                                        try {
                                            _TypeError = TypeError;
                                            _RangeError = RangeError;
                                        } catch (e) {
                                            _TypeError = subError(
                                                "TypeError",
                                                "type error"
                                            );
                                            _RangeError = subError(
                                                "RangeError",
                                                "range error"
                                            );
                                        }

                                        var methods = (
                                            "join pop push shift unshift slice filter forEach some " +
                                            "every map indexOf lastIndexOf reduce reduceRight sort reverse"
                                        ).split(" ");

                                        for (var i = 0; i < methods.length; ++i) {
                                            if (
                                                typeof Array.prototype[methods[i]] ===
                                                "function"
                                            ) {
                                                AggregateError.prototype[methods[i]] =
                                                    Array.prototype[methods[i]];
                                            }
                                        }

                                        es5.defineProperty(
                                            AggregateError.prototype,
                                            "length",
                                            {
                                                value: 0,
                                                configurable: false,
                                                writable: true,
                                                enumerable: true
                                            }
                                        );
                                        AggregateError.prototype["isOperational"] = true;
                                        var level = 0;
                                        AggregateError.prototype.toString = function() {
                                            var indent = Array(level * 4 + 1).join(" ");
                                            var ret =
                                                "\n" +
                                                indent +
                                                "AggregateError of:" +
                                                "\n";
                                            level++;
                                            indent = Array(level * 4 + 1).join(" ");
                                            for (var i = 0; i < this.length; ++i) {
                                                var str =
                                                    this[i] === this
                                                        ? "[Circular AggregateError]"
                                                        : this[i] + "";
                                                var lines = str.split("\n");
                                                for (var j = 0; j < lines.length; ++j) {
                                                    lines[j] = indent + lines[j];
                                                }
                                                str = lines.join("\n");
                                                ret += str + "\n";
                                            }
                                            level--;
                                            return ret;
                                        };

                                        function OperationalError(message) {
                                            if (!(this instanceof OperationalError))
                                                return new OperationalError(message);
                                            notEnumerableProp(
                                                this,
                                                "name",
                                                "OperationalError"
                                            );
                                            notEnumerableProp(this, "message", message);
                                            this.cause = message;
                                            this["isOperational"] = true;

                                            if (message instanceof Error) {
                                                notEnumerableProp(
                                                    this,
                                                    "message",
                                                    message.message
                                                );
                                                notEnumerableProp(
                                                    this,
                                                    "stack",
                                                    message.stack
                                                );
                                            } else if (Error.captureStackTrace) {
                                                Error.captureStackTrace(
                                                    this,
                                                    this.constructor
                                                );
                                            }
                                        }
                                        inherits(OperationalError, Error);

                                        var errorTypes = Error["__BluebirdErrorTypes__"];
                                        if (!errorTypes) {
                                            errorTypes = Objectfreeze({
                                                CancellationError: CancellationError,
                                                TimeoutError: TimeoutError,
                                                OperationalError: OperationalError,
                                                RejectionError: OperationalError,
                                                AggregateError: AggregateError
                                            });
                                            es5.defineProperty(
                                                Error,
                                                "__BluebirdErrorTypes__",
                                                {
                                                    value: errorTypes,
                                                    writable: false,
                                                    enumerable: false,
                                                    configurable: false
                                                }
                                            );
                                        }

                                        module.exports = {
                                            Error: Error,
                                            TypeError: _TypeError,
                                            RangeError: _RangeError,
                                            CancellationError:
                                                errorTypes.CancellationError,
                                            OperationalError: errorTypes.OperationalError,
                                            TimeoutError: errorTypes.TimeoutError,
                                            AggregateError: errorTypes.AggregateError,
                                            Warning: Warning
                                        };
                                    },
                                    { "./es5": 13, "./util": 36 }
                                ],
                                13: [
                                    function(_dereq_, module, exports) {
                                        var isES5 = (function() {
                                            "use strict";
                                            return this === undefined;
                                        })();

                                        if (isES5) {
                                            module.exports = {
                                                freeze: Object.freeze,
                                                defineProperty: Object.defineProperty,
                                                getDescriptor:
                                                    Object.getOwnPropertyDescriptor,
                                                keys: Object.keys,
                                                names: Object.getOwnPropertyNames,
                                                getPrototypeOf: Object.getPrototypeOf,
                                                isArray: Array.isArray,
                                                isES5: isES5,
                                                propertyIsWritable: function(obj, prop) {
                                                    var descriptor = Object.getOwnPropertyDescriptor(
                                                        obj,
                                                        prop
                                                    );
                                                    return !!(
                                                        !descriptor ||
                                                        descriptor.writable ||
                                                        descriptor.set
                                                    );
                                                }
                                            };
                                        } else {
                                            var has = {}.hasOwnProperty;
                                            var str = {}.toString;
                                            var proto = {}.constructor.prototype;

                                            var ObjectKeys = function(o) {
                                                var ret = [];
                                                for (var key in o) {
                                                    if (has.call(o, key)) {
                                                        ret.push(key);
                                                    }
                                                }
                                                return ret;
                                            };

                                            var ObjectGetDescriptor = function(o, key) {
                                                return { value: o[key] };
                                            };

                                            var ObjectDefineProperty = function(
                                                o,
                                                key,
                                                desc
                                            ) {
                                                o[key] = desc.value;
                                                return o;
                                            };

                                            var ObjectFreeze = function(obj) {
                                                return obj;
                                            };

                                            var ObjectGetPrototypeOf = function(obj) {
                                                try {
                                                    return Object(obj).constructor
                                                        .prototype;
                                                } catch (e) {
                                                    return proto;
                                                }
                                            };

                                            var ArrayIsArray = function(obj) {
                                                try {
                                                    return (
                                                        str.call(obj) === "[object Array]"
                                                    );
                                                } catch (e) {
                                                    return false;
                                                }
                                            };

                                            module.exports = {
                                                isArray: ArrayIsArray,
                                                keys: ObjectKeys,
                                                names: ObjectKeys,
                                                defineProperty: ObjectDefineProperty,
                                                getDescriptor: ObjectGetDescriptor,
                                                freeze: ObjectFreeze,
                                                getPrototypeOf: ObjectGetPrototypeOf,
                                                isES5: isES5,
                                                propertyIsWritable: function() {
                                                    return true;
                                                }
                                            };
                                        }
                                    },
                                    {}
                                ],
                                14: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(Promise, INTERNAL) {
                                            var PromiseMap = Promise.map;

                                            Promise.prototype.filter = function(
                                                fn,
                                                options
                                            ) {
                                                return PromiseMap(
                                                    this,
                                                    fn,
                                                    options,
                                                    INTERNAL
                                                );
                                            };

                                            Promise.filter = function(
                                                promises,
                                                fn,
                                                options
                                            ) {
                                                return PromiseMap(
                                                    promises,
                                                    fn,
                                                    options,
                                                    INTERNAL
                                                );
                                            };
                                        };
                                    },
                                    {}
                                ],
                                15: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(
                                            Promise,
                                            tryConvertToPromise,
                                            NEXT_FILTER
                                        ) {
                                            var util = _dereq_("./util");
                                            var CancellationError =
                                                Promise.CancellationError;
                                            var errorObj = util.errorObj;
                                            var catchFilter = _dereq_("./catch_filter")(
                                                NEXT_FILTER
                                            );

                                            function PassThroughHandlerContext(
                                                promise,
                                                type,
                                                handler
                                            ) {
                                                this.promise = promise;
                                                this.type = type;
                                                this.handler = handler;
                                                this.called = false;
                                                this.cancelPromise = null;
                                            }

                                            PassThroughHandlerContext.prototype.isFinallyHandler = function() {
                                                return this.type === 0;
                                            };

                                            function FinallyHandlerCancelReaction(
                                                finallyHandler
                                            ) {
                                                this.finallyHandler = finallyHandler;
                                            }

                                            FinallyHandlerCancelReaction.prototype._resultCancelled = function() {
                                                checkCancel(this.finallyHandler);
                                            };

                                            function checkCancel(ctx, reason) {
                                                if (ctx.cancelPromise != null) {
                                                    if (arguments.length > 1) {
                                                        ctx.cancelPromise._reject(reason);
                                                    } else {
                                                        ctx.cancelPromise._cancel();
                                                    }
                                                    ctx.cancelPromise = null;
                                                    return true;
                                                }
                                                return false;
                                            }

                                            function succeed() {
                                                return finallyHandler.call(
                                                    this,
                                                    this.promise._target()._settledValue()
                                                );
                                            }
                                            function fail(reason) {
                                                if (checkCancel(this, reason)) return;
                                                errorObj.e = reason;
                                                return errorObj;
                                            }
                                            function finallyHandler(reasonOrValue) {
                                                var promise = this.promise;
                                                var handler = this.handler;

                                                if (!this.called) {
                                                    this.called = true;
                                                    var ret = this.isFinallyHandler()
                                                        ? handler.call(
                                                              promise._boundValue()
                                                          )
                                                        : handler.call(
                                                              promise._boundValue(),
                                                              reasonOrValue
                                                          );
                                                    if (ret === NEXT_FILTER) {
                                                        return ret;
                                                    } else if (ret !== undefined) {
                                                        promise._setReturnedNonUndefined();
                                                        var maybePromise = tryConvertToPromise(
                                                            ret,
                                                            promise
                                                        );
                                                        if (
                                                            maybePromise instanceof
                                                            Promise
                                                        ) {
                                                            if (
                                                                this.cancelPromise != null
                                                            ) {
                                                                if (
                                                                    maybePromise._isCancelled()
                                                                ) {
                                                                    var reason = new CancellationError(
                                                                        "late cancellation observer"
                                                                    );
                                                                    promise._attachExtraTrace(
                                                                        reason
                                                                    );
                                                                    errorObj.e = reason;
                                                                    return errorObj;
                                                                } else if (
                                                                    maybePromise.isPending()
                                                                ) {
                                                                    maybePromise._attachCancellationCallback(
                                                                        new FinallyHandlerCancelReaction(
                                                                            this
                                                                        )
                                                                    );
                                                                }
                                                            }
                                                            return maybePromise._then(
                                                                succeed,
                                                                fail,
                                                                undefined,
                                                                this,
                                                                undefined
                                                            );
                                                        }
                                                    }
                                                }

                                                if (promise.isRejected()) {
                                                    checkCancel(this);
                                                    errorObj.e = reasonOrValue;
                                                    return errorObj;
                                                } else {
                                                    checkCancel(this);
                                                    return reasonOrValue;
                                                }
                                            }

                                            Promise.prototype._passThrough = function(
                                                handler,
                                                type,
                                                success,
                                                fail
                                            ) {
                                                if (typeof handler !== "function")
                                                    return this.then();
                                                return this._then(
                                                    success,
                                                    fail,
                                                    undefined,
                                                    new PassThroughHandlerContext(
                                                        this,
                                                        type,
                                                        handler
                                                    ),
                                                    undefined
                                                );
                                            };

                                            Promise.prototype.lastly = Promise.prototype[
                                                "finally"
                                            ] = function(handler) {
                                                return this._passThrough(
                                                    handler,
                                                    0,
                                                    finallyHandler,
                                                    finallyHandler
                                                );
                                            };

                                            Promise.prototype.tap = function(handler) {
                                                return this._passThrough(
                                                    handler,
                                                    1,
                                                    finallyHandler
                                                );
                                            };

                                            Promise.prototype.tapCatch = function(
                                                handlerOrPredicate
                                            ) {
                                                var len = arguments.length;
                                                if (len === 1) {
                                                    return this._passThrough(
                                                        handlerOrPredicate,
                                                        1,
                                                        undefined,
                                                        finallyHandler
                                                    );
                                                } else {
                                                    var catchInstances = new Array(
                                                            len - 1
                                                        ),
                                                        j = 0,
                                                        i;
                                                    for (i = 0; i < len - 1; ++i) {
                                                        var item = arguments[i];
                                                        if (util.isObject(item)) {
                                                            catchInstances[j++] = item;
                                                        } else {
                                                            return Promise.reject(
                                                                new TypeError(
                                                                    "tapCatch statement predicate: " +
                                                                        "expecting an object but got " +
                                                                        util.classString(
                                                                            item
                                                                        )
                                                                )
                                                            );
                                                        }
                                                    }
                                                    catchInstances.length = j;
                                                    var handler = arguments[i];
                                                    return this._passThrough(
                                                        catchFilter(
                                                            catchInstances,
                                                            handler,
                                                            this
                                                        ),
                                                        1,
                                                        undefined,
                                                        finallyHandler
                                                    );
                                                }
                                            };

                                            return PassThroughHandlerContext;
                                        };
                                    },
                                    { "./catch_filter": 7, "./util": 36 }
                                ],
                                16: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(
                                            Promise,
                                            apiRejection,
                                            INTERNAL,
                                            tryConvertToPromise,
                                            Proxyable,
                                            debug
                                        ) {
                                            var errors = _dereq_("./errors");
                                            var TypeError = errors.TypeError;
                                            var util = _dereq_("./util");
                                            var errorObj = util.errorObj;
                                            var tryCatch = util.tryCatch;
                                            var yieldHandlers = [];

                                            function promiseFromYieldHandler(
                                                value,
                                                yieldHandlers,
                                                traceParent
                                            ) {
                                                for (
                                                    var i = 0;
                                                    i < yieldHandlers.length;
                                                    ++i
                                                ) {
                                                    traceParent._pushContext();
                                                    var result = tryCatch(
                                                        yieldHandlers[i]
                                                    )(value);
                                                    traceParent._popContext();
                                                    if (result === errorObj) {
                                                        traceParent._pushContext();
                                                        var ret = Promise.reject(
                                                            errorObj.e
                                                        );
                                                        traceParent._popContext();
                                                        return ret;
                                                    }
                                                    var maybePromise = tryConvertToPromise(
                                                        result,
                                                        traceParent
                                                    );
                                                    if (maybePromise instanceof Promise)
                                                        return maybePromise;
                                                }
                                                return null;
                                            }

                                            function PromiseSpawn(
                                                generatorFunction,
                                                receiver,
                                                yieldHandler,
                                                stack
                                            ) {
                                                if (debug.cancellation()) {
                                                    var internal = new Promise(INTERNAL);
                                                    var _finallyPromise = (this._finallyPromise = new Promise(
                                                        INTERNAL
                                                    ));
                                                    this._promise = internal.lastly(
                                                        function() {
                                                            return _finallyPromise;
                                                        }
                                                    );
                                                    internal._captureStackTrace();
                                                    internal._setOnCancel(this);
                                                } else {
                                                    var promise = (this._promise = new Promise(
                                                        INTERNAL
                                                    ));
                                                    promise._captureStackTrace();
                                                }
                                                this._stack = stack;
                                                this._generatorFunction = generatorFunction;
                                                this._receiver = receiver;
                                                this._generator = undefined;
                                                this._yieldHandlers =
                                                    typeof yieldHandler === "function"
                                                        ? [yieldHandler].concat(
                                                              yieldHandlers
                                                          )
                                                        : yieldHandlers;
                                                this._yieldedPromise = null;
                                                this._cancellationPhase = false;
                                            }
                                            util.inherits(PromiseSpawn, Proxyable);

                                            PromiseSpawn.prototype._isResolved = function() {
                                                return this._promise === null;
                                            };

                                            PromiseSpawn.prototype._cleanup = function() {
                                                this._promise = this._generator = null;
                                                if (
                                                    debug.cancellation() &&
                                                    this._finallyPromise !== null
                                                ) {
                                                    this._finallyPromise._fulfill();
                                                    this._finallyPromise = null;
                                                }
                                            };

                                            PromiseSpawn.prototype._promiseCancelled = function() {
                                                if (this._isResolved()) return;
                                                var implementsReturn =
                                                    typeof this._generator["return"] !==
                                                    "undefined";

                                                var result;
                                                if (!implementsReturn) {
                                                    var reason = new Promise.CancellationError(
                                                        "generator .return() sentinel"
                                                    );
                                                    Promise.coroutine.returnSentinel = reason;
                                                    this._promise._attachExtraTrace(
                                                        reason
                                                    );
                                                    this._promise._pushContext();
                                                    result = tryCatch(
                                                        this._generator["throw"]
                                                    ).call(this._generator, reason);
                                                    this._promise._popContext();
                                                } else {
                                                    this._promise._pushContext();
                                                    result = tryCatch(
                                                        this._generator["return"]
                                                    ).call(this._generator, undefined);
                                                    this._promise._popContext();
                                                }
                                                this._cancellationPhase = true;
                                                this._yieldedPromise = null;
                                                this._continue(result);
                                            };

                                            PromiseSpawn.prototype._promiseFulfilled = function(
                                                value
                                            ) {
                                                this._yieldedPromise = null;
                                                this._promise._pushContext();
                                                var result = tryCatch(
                                                    this._generator.next
                                                ).call(this._generator, value);
                                                this._promise._popContext();
                                                this._continue(result);
                                            };

                                            PromiseSpawn.prototype._promiseRejected = function(
                                                reason
                                            ) {
                                                this._yieldedPromise = null;
                                                this._promise._attachExtraTrace(reason);
                                                this._promise._pushContext();
                                                var result = tryCatch(
                                                    this._generator["throw"]
                                                ).call(this._generator, reason);
                                                this._promise._popContext();
                                                this._continue(result);
                                            };

                                            PromiseSpawn.prototype._resultCancelled = function() {
                                                if (
                                                    this._yieldedPromise instanceof
                                                    Promise
                                                ) {
                                                    var promise = this._yieldedPromise;
                                                    this._yieldedPromise = null;
                                                    promise.cancel();
                                                }
                                            };

                                            PromiseSpawn.prototype.promise = function() {
                                                return this._promise;
                                            };

                                            PromiseSpawn.prototype._run = function() {
                                                this._generator = this._generatorFunction.call(
                                                    this._receiver
                                                );
                                                this._receiver = this._generatorFunction = undefined;
                                                this._promiseFulfilled(undefined);
                                            };

                                            PromiseSpawn.prototype._continue = function(
                                                result
                                            ) {
                                                var promise = this._promise;
                                                if (result === errorObj) {
                                                    this._cleanup();
                                                    if (this._cancellationPhase) {
                                                        return promise.cancel();
                                                    } else {
                                                        return promise._rejectCallback(
                                                            result.e,
                                                            false
                                                        );
                                                    }
                                                }

                                                var value = result.value;
                                                if (result.done === true) {
                                                    this._cleanup();
                                                    if (this._cancellationPhase) {
                                                        return promise.cancel();
                                                    } else {
                                                        return promise._resolveCallback(
                                                            value
                                                        );
                                                    }
                                                } else {
                                                    var maybePromise = tryConvertToPromise(
                                                        value,
                                                        this._promise
                                                    );
                                                    if (
                                                        !(maybePromise instanceof Promise)
                                                    ) {
                                                        maybePromise = promiseFromYieldHandler(
                                                            maybePromise,
                                                            this._yieldHandlers,
                                                            this._promise
                                                        );
                                                        if (maybePromise === null) {
                                                            this._promiseRejected(
                                                                new TypeError(
                                                                    "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace(
                                                                        "%s",
                                                                        String(value)
                                                                    ) +
                                                                        "From coroutine:\u000a" +
                                                                        this._stack
                                                                            .split("\n")
                                                                            .slice(1, -7)
                                                                            .join("\n")
                                                                )
                                                            );
                                                            return;
                                                        }
                                                    }
                                                    maybePromise = maybePromise._target();
                                                    var bitField = maybePromise._bitField;
                                                    if ((bitField & 50397184) === 0) {
                                                        this._yieldedPromise = maybePromise;
                                                        maybePromise._proxy(this, null);
                                                    } else if (
                                                        (bitField & 33554432) !==
                                                        0
                                                    ) {
                                                        Promise._async.invoke(
                                                            this._promiseFulfilled,
                                                            this,
                                                            maybePromise._value()
                                                        );
                                                    } else if (
                                                        (bitField & 16777216) !==
                                                        0
                                                    ) {
                                                        Promise._async.invoke(
                                                            this._promiseRejected,
                                                            this,
                                                            maybePromise._reason()
                                                        );
                                                    } else {
                                                        this._promiseCancelled();
                                                    }
                                                }
                                            };

                                            Promise.coroutine = function(
                                                generatorFunction,
                                                options
                                            ) {
                                                if (
                                                    typeof generatorFunction !==
                                                    "function"
                                                ) {
                                                    throw new TypeError(
                                                        "generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                                                    );
                                                }
                                                var yieldHandler = Object(options)
                                                    .yieldHandler;
                                                var PromiseSpawn$ = PromiseSpawn;
                                                var stack = new Error().stack;
                                                return function() {
                                                    var generator = generatorFunction.apply(
                                                        this,
                                                        arguments
                                                    );
                                                    var spawn = new PromiseSpawn$(
                                                        undefined,
                                                        undefined,
                                                        yieldHandler,
                                                        stack
                                                    );
                                                    var ret = spawn.promise();
                                                    spawn._generator = generator;
                                                    spawn._promiseFulfilled(undefined);
                                                    return ret;
                                                };
                                            };

                                            Promise.coroutine.addYieldHandler = function(
                                                fn
                                            ) {
                                                if (typeof fn !== "function") {
                                                    throw new TypeError(
                                                        "expecting a function but got " +
                                                            util.classString(fn)
                                                    );
                                                }
                                                yieldHandlers.push(fn);
                                            };

                                            Promise.spawn = function(generatorFunction) {
                                                debug.deprecated(
                                                    "Promise.spawn()",
                                                    "Promise.coroutine()"
                                                );
                                                if (
                                                    typeof generatorFunction !==
                                                    "function"
                                                ) {
                                                    return apiRejection(
                                                        "generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                                                    );
                                                }
                                                var spawn = new PromiseSpawn(
                                                    generatorFunction,
                                                    this
                                                );
                                                var ret = spawn.promise();
                                                spawn._run(Promise.spawn);
                                                return ret;
                                            };
                                        };
                                    },
                                    { "./errors": 12, "./util": 36 }
                                ],
                                17: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(
                                            Promise,
                                            PromiseArray,
                                            tryConvertToPromise,
                                            INTERNAL,
                                            async,
                                            getDomain
                                        ) {
                                            var util = _dereq_("./util");
                                            var canEvaluate = util.canEvaluate;
                                            var tryCatch = util.tryCatch;
                                            var errorObj = util.errorObj;
                                            var reject;

                                            if (false) {
                                                if (canEvaluate) {
                                                    var thenCallback = function(i) {
                                                        return new Function(
                                                            "value",
                                                            "holder",
                                                            "                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ".replace(
                                                                /Index/g,
                                                                i
                                                            )
                                                        );
                                                    };

                                                    var promiseSetter = function(i) {
                                                        return new Function(
                                                            "promise",
                                                            "holder",
                                                            "                           \n\
            'use strict';                                                    \n\
            holder.pIndex = promise;                                         \n\
            ".replace(
                                                                /Index/g,
                                                                i
                                                            )
                                                        );
                                                    };

                                                    var generateHolderClass = function(
                                                        total
                                                    ) {
                                                        var props = new Array(total);
                                                        for (
                                                            var i = 0;
                                                            i < props.length;
                                                            ++i
                                                        ) {
                                                            props[i] = "this.p" + (i + 1);
                                                        }
                                                        var assignment =
                                                            props.join(" = ") +
                                                            " = null;";
                                                        var cancellationCode =
                                                            "var promise;\n" +
                                                            props
                                                                .map(function(prop) {
                                                                    return (
                                                                        "                                                         \n\
                promise = " +
                                                                        prop +
                                                                        ";                                      \n\
                if (promise instanceof Promise) {                            \n\
                    promise.cancel();                                        \n\
                }                                                            \n\
            "
                                                                    );
                                                                })
                                                                .join("\n");
                                                        var passedArguments = props.join(
                                                            ", "
                                                        );
                                                        var name = "Holder$" + total;

                                                        var code =
                                                            "return function(tryCatch, errorObj, Promise, async) {    \n\
            'use strict';                                                    \n\
            function [TheName](fn) {                                         \n\
                [TheProperties]                                              \n\
                this.fn = fn;                                                \n\
                this.asyncNeeded = true;                                     \n\
                this.now = 0;                                                \n\
            }                                                                \n\
                                                                             \n\
            [TheName].prototype._callFunction = function(promise) {          \n\
                promise._pushContext();                                      \n\
                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n\
                promise._popContext();                                       \n\
                if (ret === errorObj) {                                      \n\
                    promise._rejectCallback(ret.e, false);                   \n\
                } else {                                                     \n\
                    promise._resolveCallback(ret);                           \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype.checkFulfillment = function(promise) {       \n\
                var now = ++this.now;                                        \n\
                if (now === [TheTotal]) {                                    \n\
                    if (this.asyncNeeded) {                                  \n\
                        async.invoke(this._callFunction, this, promise);     \n\
                    } else {                                                 \n\
                        this._callFunction(promise);                         \n\
                    }                                                        \n\
                                                                             \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype._resultCancelled = function() {              \n\
                [CancellationCode]                                           \n\
            };                                                               \n\
                                                                             \n\
            return [TheName];                                                \n\
        }(tryCatch, errorObj, Promise, async);                               \n\
        ";

                                                        code = code
                                                            .replace(/\[TheName\]/g, name)
                                                            .replace(
                                                                /\[TheTotal\]/g,
                                                                total
                                                            )
                                                            .replace(
                                                                /\[ThePassedArguments\]/g,
                                                                passedArguments
                                                            )
                                                            .replace(
                                                                /\[TheProperties\]/g,
                                                                assignment
                                                            )
                                                            .replace(
                                                                /\[CancellationCode\]/g,
                                                                cancellationCode
                                                            );

                                                        return new Function(
                                                            "tryCatch",
                                                            "errorObj",
                                                            "Promise",
                                                            "async",
                                                            code
                                                        )(
                                                            tryCatch,
                                                            errorObj,
                                                            Promise,
                                                            async
                                                        );
                                                    };

                                                    var holderClasses = [];
                                                    var thenCallbacks = [];
                                                    var promiseSetters = [];

                                                    for (var i = 0; i < 8; ++i) {
                                                        holderClasses.push(
                                                            generateHolderClass(i + 1)
                                                        );
                                                        thenCallbacks.push(
                                                            thenCallback(i + 1)
                                                        );
                                                        promiseSetters.push(
                                                            promiseSetter(i + 1)
                                                        );
                                                    }

                                                    reject = function(reason) {
                                                        this._reject(reason);
                                                    };
                                                }
                                            }

                                            Promise.join = function() {
                                                var last = arguments.length - 1;
                                                var fn;
                                                if (
                                                    last > 0 &&
                                                    typeof arguments[last] === "function"
                                                ) {
                                                    fn = arguments[last];
                                                    if (false) {
                                                        if (last <= 8 && canEvaluate) {
                                                            var ret = new Promise(
                                                                INTERNAL
                                                            );
                                                            ret._captureStackTrace();
                                                            var HolderClass =
                                                                holderClasses[last - 1];
                                                            var holder = new HolderClass(
                                                                fn
                                                            );
                                                            var callbacks = thenCallbacks;

                                                            for (
                                                                var i = 0;
                                                                i < last;
                                                                ++i
                                                            ) {
                                                                var maybePromise = tryConvertToPromise(
                                                                    arguments[i],
                                                                    ret
                                                                );
                                                                if (
                                                                    maybePromise instanceof
                                                                    Promise
                                                                ) {
                                                                    maybePromise = maybePromise._target();
                                                                    var bitField =
                                                                        maybePromise._bitField;
                                                                    if (
                                                                        (bitField &
                                                                            50397184) ===
                                                                        0
                                                                    ) {
                                                                        maybePromise._then(
                                                                            callbacks[i],
                                                                            reject,
                                                                            undefined,
                                                                            ret,
                                                                            holder
                                                                        );
                                                                        promiseSetters[i](
                                                                            maybePromise,
                                                                            holder
                                                                        );
                                                                        holder.asyncNeeded = false;
                                                                    } else if (
                                                                        (bitField &
                                                                            33554432) !==
                                                                        0
                                                                    ) {
                                                                        callbacks[i].call(
                                                                            ret,
                                                                            maybePromise._value(),
                                                                            holder
                                                                        );
                                                                    } else if (
                                                                        (bitField &
                                                                            16777216) !==
                                                                        0
                                                                    ) {
                                                                        ret._reject(
                                                                            maybePromise._reason()
                                                                        );
                                                                    } else {
                                                                        ret._cancel();
                                                                    }
                                                                } else {
                                                                    callbacks[i].call(
                                                                        ret,
                                                                        maybePromise,
                                                                        holder
                                                                    );
                                                                }
                                                            }

                                                            if (!ret._isFateSealed()) {
                                                                if (holder.asyncNeeded) {
                                                                    var domain = getDomain();
                                                                    if (domain !== null) {
                                                                        holder.fn = util.domainBind(
                                                                            domain,
                                                                            holder.fn
                                                                        );
                                                                    }
                                                                }
                                                                ret._setAsyncGuaranteed();
                                                                ret._setOnCancel(holder);
                                                            }
                                                            return ret;
                                                        }
                                                    }
                                                }
                                                var args = [].slice.call(arguments);
                                                if (fn) args.pop();
                                                var ret = new PromiseArray(
                                                    args
                                                ).promise();
                                                return fn !== undefined
                                                    ? ret.spread(fn)
                                                    : ret;
                                            };
                                        };
                                    },
                                    { "./util": 36 }
                                ],
                                18: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(
                                            Promise,
                                            PromiseArray,
                                            apiRejection,
                                            tryConvertToPromise,
                                            INTERNAL,
                                            debug
                                        ) {
                                            var getDomain = Promise._getDomain;
                                            var util = _dereq_("./util");
                                            var tryCatch = util.tryCatch;
                                            var errorObj = util.errorObj;
                                            var async = Promise._async;

                                            function MappingPromiseArray(
                                                promises,
                                                fn,
                                                limit,
                                                _filter
                                            ) {
                                                this.constructor$(promises);
                                                this._promise._captureStackTrace();
                                                var domain = getDomain();
                                                this._callback =
                                                    domain === null
                                                        ? fn
                                                        : util.domainBind(domain, fn);
                                                this._preservedValues =
                                                    _filter === INTERNAL
                                                        ? new Array(this.length())
                                                        : null;
                                                this._limit = limit;
                                                this._inFlight = 0;
                                                this._queue = [];
                                                async.invoke(
                                                    this._asyncInit,
                                                    this,
                                                    undefined
                                                );
                                            }
                                            util.inherits(
                                                MappingPromiseArray,
                                                PromiseArray
                                            );

                                            MappingPromiseArray.prototype._asyncInit = function() {
                                                this._init$(undefined, -2);
                                            };

                                            MappingPromiseArray.prototype._init = function() {};

                                            MappingPromiseArray.prototype._promiseFulfilled = function(
                                                value,
                                                index
                                            ) {
                                                var values = this._values;
                                                var length = this.length();
                                                var preservedValues = this
                                                    ._preservedValues;
                                                var limit = this._limit;

                                                if (index < 0) {
                                                    index = index * -1 - 1;
                                                    values[index] = value;
                                                    if (limit >= 1) {
                                                        this._inFlight--;
                                                        this._drainQueue();
                                                        if (this._isResolved())
                                                            return true;
                                                    }
                                                } else {
                                                    if (
                                                        limit >= 1 &&
                                                        this._inFlight >= limit
                                                    ) {
                                                        values[index] = value;
                                                        this._queue.push(index);
                                                        return false;
                                                    }
                                                    if (preservedValues !== null)
                                                        preservedValues[index] = value;

                                                    var promise = this._promise;
                                                    var callback = this._callback;
                                                    var receiver = promise._boundValue();
                                                    promise._pushContext();
                                                    var ret = tryCatch(callback).call(
                                                        receiver,
                                                        value,
                                                        index,
                                                        length
                                                    );
                                                    var promiseCreated = promise._popContext();
                                                    debug.checkForgottenReturns(
                                                        ret,
                                                        promiseCreated,
                                                        preservedValues !== null
                                                            ? "Promise.filter"
                                                            : "Promise.map",
                                                        promise
                                                    );
                                                    if (ret === errorObj) {
                                                        this._reject(ret.e);
                                                        return true;
                                                    }

                                                    var maybePromise = tryConvertToPromise(
                                                        ret,
                                                        this._promise
                                                    );
                                                    if (maybePromise instanceof Promise) {
                                                        maybePromise = maybePromise._target();
                                                        var bitField =
                                                            maybePromise._bitField;
                                                        if ((bitField & 50397184) === 0) {
                                                            if (limit >= 1)
                                                                this._inFlight++;
                                                            values[index] = maybePromise;
                                                            maybePromise._proxy(
                                                                this,
                                                                (index + 1) * -1
                                                            );
                                                            return false;
                                                        } else if (
                                                            (bitField & 33554432) !==
                                                            0
                                                        ) {
                                                            ret = maybePromise._value();
                                                        } else if (
                                                            (bitField & 16777216) !==
                                                            0
                                                        ) {
                                                            this._reject(
                                                                maybePromise._reason()
                                                            );
                                                            return true;
                                                        } else {
                                                            this._cancel();
                                                            return true;
                                                        }
                                                    }
                                                    values[index] = ret;
                                                }
                                                var totalResolved = ++this._totalResolved;
                                                if (totalResolved >= length) {
                                                    if (preservedValues !== null) {
                                                        this._filter(
                                                            values,
                                                            preservedValues
                                                        );
                                                    } else {
                                                        this._resolve(values);
                                                    }
                                                    return true;
                                                }
                                                return false;
                                            };

                                            MappingPromiseArray.prototype._drainQueue = function() {
                                                var queue = this._queue;
                                                var limit = this._limit;
                                                var values = this._values;
                                                while (
                                                    queue.length > 0 &&
                                                    this._inFlight < limit
                                                ) {
                                                    if (this._isResolved()) return;
                                                    var index = queue.pop();
                                                    this._promiseFulfilled(
                                                        values[index],
                                                        index
                                                    );
                                                }
                                            };

                                            MappingPromiseArray.prototype._filter = function(
                                                booleans,
                                                values
                                            ) {
                                                var len = values.length;
                                                var ret = new Array(len);
                                                var j = 0;
                                                for (var i = 0; i < len; ++i) {
                                                    if (booleans[i]) ret[j++] = values[i];
                                                }
                                                ret.length = j;
                                                this._resolve(ret);
                                            };

                                            MappingPromiseArray.prototype.preservedValues = function() {
                                                return this._preservedValues;
                                            };

                                            function map(promises, fn, options, _filter) {
                                                if (typeof fn !== "function") {
                                                    return apiRejection(
                                                        "expecting a function but got " +
                                                            util.classString(fn)
                                                    );
                                                }

                                                var limit = 0;
                                                if (options !== undefined) {
                                                    if (
                                                        typeof options === "object" &&
                                                        options !== null
                                                    ) {
                                                        if (
                                                            typeof options.concurrency !==
                                                            "number"
                                                        ) {
                                                            return Promise.reject(
                                                                new TypeError(
                                                                    "'concurrency' must be a number but it is " +
                                                                        util.classString(
                                                                            options.concurrency
                                                                        )
                                                                )
                                                            );
                                                        }
                                                        limit = options.concurrency;
                                                    } else {
                                                        return Promise.reject(
                                                            new TypeError(
                                                                "options argument must be an object but it is " +
                                                                    util.classString(
                                                                        options
                                                                    )
                                                            )
                                                        );
                                                    }
                                                }
                                                limit =
                                                    typeof limit === "number" &&
                                                    isFinite(limit) &&
                                                    limit >= 1
                                                        ? limit
                                                        : 0;
                                                return new MappingPromiseArray(
                                                    promises,
                                                    fn,
                                                    limit,
                                                    _filter
                                                ).promise();
                                            }

                                            Promise.prototype.map = function(
                                                fn,
                                                options
                                            ) {
                                                return map(this, fn, options, null);
                                            };

                                            Promise.map = function(
                                                promises,
                                                fn,
                                                options,
                                                _filter
                                            ) {
                                                return map(
                                                    promises,
                                                    fn,
                                                    options,
                                                    _filter
                                                );
                                            };
                                        };
                                    },
                                    { "./util": 36 }
                                ],
                                19: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(
                                            Promise,
                                            INTERNAL,
                                            tryConvertToPromise,
                                            apiRejection,
                                            debug
                                        ) {
                                            var util = _dereq_("./util");
                                            var tryCatch = util.tryCatch;

                                            Promise.method = function(fn) {
                                                if (typeof fn !== "function") {
                                                    throw new Promise.TypeError(
                                                        "expecting a function but got " +
                                                            util.classString(fn)
                                                    );
                                                }
                                                return function() {
                                                    var ret = new Promise(INTERNAL);
                                                    ret._captureStackTrace();
                                                    ret._pushContext();
                                                    var value = tryCatch(fn).apply(
                                                        this,
                                                        arguments
                                                    );
                                                    var promiseCreated = ret._popContext();
                                                    debug.checkForgottenReturns(
                                                        value,
                                                        promiseCreated,
                                                        "Promise.method",
                                                        ret
                                                    );
                                                    ret._resolveFromSyncValue(value);
                                                    return ret;
                                                };
                                            };

                                            Promise.attempt = Promise["try"] = function(
                                                fn
                                            ) {
                                                if (typeof fn !== "function") {
                                                    return apiRejection(
                                                        "expecting a function but got " +
                                                            util.classString(fn)
                                                    );
                                                }
                                                var ret = new Promise(INTERNAL);
                                                ret._captureStackTrace();
                                                ret._pushContext();
                                                var value;
                                                if (arguments.length > 1) {
                                                    debug.deprecated(
                                                        "calling Promise.try with more than 1 argument"
                                                    );
                                                    var arg = arguments[1];
                                                    var ctx = arguments[2];
                                                    value = util.isArray(arg)
                                                        ? tryCatch(fn).apply(ctx, arg)
                                                        : tryCatch(fn).call(ctx, arg);
                                                } else {
                                                    value = tryCatch(fn)();
                                                }
                                                var promiseCreated = ret._popContext();
                                                debug.checkForgottenReturns(
                                                    value,
                                                    promiseCreated,
                                                    "Promise.try",
                                                    ret
                                                );
                                                ret._resolveFromSyncValue(value);
                                                return ret;
                                            };

                                            Promise.prototype._resolveFromSyncValue = function(
                                                value
                                            ) {
                                                if (value === util.errorObj) {
                                                    this._rejectCallback(value.e, false);
                                                } else {
                                                    this._resolveCallback(value, true);
                                                }
                                            };
                                        };
                                    },
                                    { "./util": 36 }
                                ],
                                20: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        var util = _dereq_("./util");
                                        var maybeWrapAsError = util.maybeWrapAsError;
                                        var errors = _dereq_("./errors");
                                        var OperationalError = errors.OperationalError;
                                        var es5 = _dereq_("./es5");

                                        function isUntypedError(obj) {
                                            return (
                                                obj instanceof Error &&
                                                es5.getPrototypeOf(obj) ===
                                                    Error.prototype
                                            );
                                        }

                                        var rErrorKey = /^(?:name|message|stack|cause)$/;
                                        function wrapAsOperationalError(obj) {
                                            var ret;
                                            if (isUntypedError(obj)) {
                                                ret = new OperationalError(obj);
                                                ret.name = obj.name;
                                                ret.message = obj.message;
                                                ret.stack = obj.stack;
                                                var keys = es5.keys(obj);
                                                for (var i = 0; i < keys.length; ++i) {
                                                    var key = keys[i];
                                                    if (!rErrorKey.test(key)) {
                                                        ret[key] = obj[key];
                                                    }
                                                }
                                                return ret;
                                            }
                                            util.markAsOriginatingFromRejection(obj);
                                            return obj;
                                        }

                                        function nodebackForPromise(promise, multiArgs) {
                                            return function(err, value) {
                                                if (promise === null) return;
                                                if (err) {
                                                    var wrapped = wrapAsOperationalError(
                                                        maybeWrapAsError(err)
                                                    );
                                                    promise._attachExtraTrace(wrapped);
                                                    promise._reject(wrapped);
                                                } else if (!multiArgs) {
                                                    promise._fulfill(value);
                                                } else {
                                                    var args = [].slice.call(
                                                        arguments,
                                                        1
                                                    );
                                                    promise._fulfill(args);
                                                }
                                                promise = null;
                                            };
                                        }

                                        module.exports = nodebackForPromise;
                                    },
                                    { "./errors": 12, "./es5": 13, "./util": 36 }
                                ],
                                21: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(Promise) {
                                            var util = _dereq_("./util");
                                            var async = Promise._async;
                                            var tryCatch = util.tryCatch;
                                            var errorObj = util.errorObj;

                                            function spreadAdapter(val, nodeback) {
                                                var promise = this;
                                                if (!util.isArray(val))
                                                    return successAdapter.call(
                                                        promise,
                                                        val,
                                                        nodeback
                                                    );
                                                var ret = tryCatch(nodeback).apply(
                                                    promise._boundValue(),
                                                    [null].concat(val)
                                                );
                                                if (ret === errorObj) {
                                                    async.throwLater(ret.e);
                                                }
                                            }

                                            function successAdapter(val, nodeback) {
                                                var promise = this;
                                                var receiver = promise._boundValue();
                                                var ret =
                                                    val === undefined
                                                        ? tryCatch(nodeback).call(
                                                              receiver,
                                                              null
                                                          )
                                                        : tryCatch(nodeback).call(
                                                              receiver,
                                                              null,
                                                              val
                                                          );
                                                if (ret === errorObj) {
                                                    async.throwLater(ret.e);
                                                }
                                            }
                                            function errorAdapter(reason, nodeback) {
                                                var promise = this;
                                                if (!reason) {
                                                    var newReason = new Error(
                                                        reason + ""
                                                    );
                                                    newReason.cause = reason;
                                                    reason = newReason;
                                                }
                                                var ret = tryCatch(nodeback).call(
                                                    promise._boundValue(),
                                                    reason
                                                );
                                                if (ret === errorObj) {
                                                    async.throwLater(ret.e);
                                                }
                                            }

                                            Promise.prototype.asCallback = Promise.prototype.nodeify = function(
                                                nodeback,
                                                options
                                            ) {
                                                if (typeof nodeback == "function") {
                                                    var adapter = successAdapter;
                                                    if (
                                                        options !== undefined &&
                                                        Object(options).spread
                                                    ) {
                                                        adapter = spreadAdapter;
                                                    }
                                                    this._then(
                                                        adapter,
                                                        errorAdapter,
                                                        undefined,
                                                        this,
                                                        nodeback
                                                    );
                                                }
                                                return this;
                                            };
                                        };
                                    },
                                    { "./util": 36 }
                                ],
                                22: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function() {
                                            var makeSelfResolutionError = function() {
                                                return new TypeError(
                                                    "circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                                                );
                                            };
                                            var reflectHandler = function() {
                                                return new Promise.PromiseInspection(
                                                    this._target()
                                                );
                                            };
                                            var apiRejection = function(msg) {
                                                return Promise.reject(new TypeError(msg));
                                            };
                                            function Proxyable() {}
                                            var UNDEFINED_BINDING = {};
                                            var util = _dereq_("./util");

                                            var getDomain;
                                            if (util.isNode) {
                                                getDomain = function() {
                                                    var ret = process.domain;
                                                    if (ret === undefined) ret = null;
                                                    return ret;
                                                };
                                            } else {
                                                getDomain = function() {
                                                    return null;
                                                };
                                            }
                                            util.notEnumerableProp(
                                                Promise,
                                                "_getDomain",
                                                getDomain
                                            );

                                            var es5 = _dereq_("./es5");
                                            var Async = _dereq_("./async");
                                            var async = new Async();
                                            es5.defineProperty(Promise, "_async", {
                                                value: async
                                            });
                                            var errors = _dereq_("./errors");
                                            var TypeError = (Promise.TypeError =
                                                errors.TypeError);
                                            Promise.RangeError = errors.RangeError;
                                            var CancellationError = (Promise.CancellationError =
                                                errors.CancellationError);
                                            Promise.TimeoutError = errors.TimeoutError;
                                            Promise.OperationalError =
                                                errors.OperationalError;
                                            Promise.RejectionError =
                                                errors.OperationalError;
                                            Promise.AggregateError =
                                                errors.AggregateError;
                                            var INTERNAL = function() {};
                                            var APPLY = {};
                                            var NEXT_FILTER = {};
                                            var tryConvertToPromise = _dereq_(
                                                "./thenables"
                                            )(Promise, INTERNAL);
                                            var PromiseArray = _dereq_("./promise_array")(
                                                Promise,
                                                INTERNAL,
                                                tryConvertToPromise,
                                                apiRejection,
                                                Proxyable
                                            );
                                            var Context = _dereq_("./context")(Promise);
                                            /*jshint unused:false*/
                                            var createContext = Context.create;
                                            var debug = _dereq_("./debuggability")(
                                                Promise,
                                                Context
                                            );
                                            var CapturedTrace = debug.CapturedTrace;
                                            var PassThroughHandlerContext = _dereq_(
                                                "./finally"
                                            )(Promise, tryConvertToPromise, NEXT_FILTER);
                                            var catchFilter = _dereq_("./catch_filter")(
                                                NEXT_FILTER
                                            );
                                            var nodebackForPromise = _dereq_(
                                                "./nodeback"
                                            );
                                            var errorObj = util.errorObj;
                                            var tryCatch = util.tryCatch;
                                            function check(self, executor) {
                                                if (
                                                    self == null ||
                                                    self.constructor !== Promise
                                                ) {
                                                    throw new TypeError(
                                                        "the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                                                    );
                                                }
                                                if (typeof executor !== "function") {
                                                    throw new TypeError(
                                                        "expecting a function but got " +
                                                            util.classString(executor)
                                                    );
                                                }
                                            }

                                            function Promise(executor) {
                                                if (executor !== INTERNAL) {
                                                    check(this, executor);
                                                }
                                                this._bitField = 0;
                                                this._fulfillmentHandler0 = undefined;
                                                this._rejectionHandler0 = undefined;
                                                this._promise0 = undefined;
                                                this._receiver0 = undefined;
                                                this._resolveFromExecutor(executor);
                                                this._promiseCreated();
                                                this._fireEvent("promiseCreated", this);
                                            }

                                            Promise.prototype.toString = function() {
                                                return "[object Promise]";
                                            };

                                            Promise.prototype.caught = Promise.prototype[
                                                "catch"
                                            ] = function(fn) {
                                                var len = arguments.length;
                                                if (len > 1) {
                                                    var catchInstances = new Array(
                                                            len - 1
                                                        ),
                                                        j = 0,
                                                        i;
                                                    for (i = 0; i < len - 1; ++i) {
                                                        var item = arguments[i];
                                                        if (util.isObject(item)) {
                                                            catchInstances[j++] = item;
                                                        } else {
                                                            return apiRejection(
                                                                "Catch statement predicate: " +
                                                                    "expecting an object but got " +
                                                                    util.classString(item)
                                                            );
                                                        }
                                                    }
                                                    catchInstances.length = j;
                                                    fn = arguments[i];
                                                    return this.then(
                                                        undefined,
                                                        catchFilter(
                                                            catchInstances,
                                                            fn,
                                                            this
                                                        )
                                                    );
                                                }
                                                return this.then(undefined, fn);
                                            };

                                            Promise.prototype.reflect = function() {
                                                return this._then(
                                                    reflectHandler,
                                                    reflectHandler,
                                                    undefined,
                                                    this,
                                                    undefined
                                                );
                                            };

                                            Promise.prototype.then = function(
                                                didFulfill,
                                                didReject
                                            ) {
                                                if (
                                                    debug.warnings() &&
                                                    arguments.length > 0 &&
                                                    typeof didFulfill !== "function" &&
                                                    typeof didReject !== "function"
                                                ) {
                                                    var msg =
                                                        ".then() only accepts functions but was passed: " +
                                                        util.classString(didFulfill);
                                                    if (arguments.length > 1) {
                                                        msg +=
                                                            ", " +
                                                            util.classString(didReject);
                                                    }
                                                    this._warn(msg);
                                                }
                                                return this._then(
                                                    didFulfill,
                                                    didReject,
                                                    undefined,
                                                    undefined,
                                                    undefined
                                                );
                                            };

                                            Promise.prototype.done = function(
                                                didFulfill,
                                                didReject
                                            ) {
                                                var promise = this._then(
                                                    didFulfill,
                                                    didReject,
                                                    undefined,
                                                    undefined,
                                                    undefined
                                                );
                                                promise._setIsFinal();
                                            };

                                            Promise.prototype.spread = function(fn) {
                                                if (typeof fn !== "function") {
                                                    return apiRejection(
                                                        "expecting a function but got " +
                                                            util.classString(fn)
                                                    );
                                                }
                                                return this.all()._then(
                                                    fn,
                                                    undefined,
                                                    undefined,
                                                    APPLY,
                                                    undefined
                                                );
                                            };

                                            Promise.prototype.toJSON = function() {
                                                var ret = {
                                                    isFulfilled: false,
                                                    isRejected: false,
                                                    fulfillmentValue: undefined,
                                                    rejectionReason: undefined
                                                };
                                                if (this.isFulfilled()) {
                                                    ret.fulfillmentValue = this.value();
                                                    ret.isFulfilled = true;
                                                } else if (this.isRejected()) {
                                                    ret.rejectionReason = this.reason();
                                                    ret.isRejected = true;
                                                }
                                                return ret;
                                            };

                                            Promise.prototype.all = function() {
                                                if (arguments.length > 0) {
                                                    this._warn(
                                                        ".all() was passed arguments but it does not take any"
                                                    );
                                                }
                                                return new PromiseArray(this).promise();
                                            };

                                            Promise.prototype.error = function(fn) {
                                                return this.caught(
                                                    util.originatesFromRejection,
                                                    fn
                                                );
                                            };

                                            Promise.getNewLibraryCopy = module.exports;

                                            Promise.is = function(val) {
                                                return val instanceof Promise;
                                            };

                                            Promise.fromNode = Promise.fromCallback = function(
                                                fn
                                            ) {
                                                var ret = new Promise(INTERNAL);
                                                ret._captureStackTrace();
                                                var multiArgs =
                                                    arguments.length > 1
                                                        ? !!Object(arguments[1]).multiArgs
                                                        : false;
                                                var result = tryCatch(fn)(
                                                    nodebackForPromise(ret, multiArgs)
                                                );
                                                if (result === errorObj) {
                                                    ret._rejectCallback(result.e, true);
                                                }
                                                if (!ret._isFateSealed())
                                                    ret._setAsyncGuaranteed();
                                                return ret;
                                            };

                                            Promise.all = function(promises) {
                                                return new PromiseArray(
                                                    promises
                                                ).promise();
                                            };

                                            Promise.cast = function(obj) {
                                                var ret = tryConvertToPromise(obj);
                                                if (!(ret instanceof Promise)) {
                                                    ret = new Promise(INTERNAL);
                                                    ret._captureStackTrace();
                                                    ret._setFulfilled();
                                                    ret._rejectionHandler0 = obj;
                                                }
                                                return ret;
                                            };

                                            Promise.resolve = Promise.fulfilled =
                                                Promise.cast;

                                            Promise.reject = Promise.rejected = function(
                                                reason
                                            ) {
                                                var ret = new Promise(INTERNAL);
                                                ret._captureStackTrace();
                                                ret._rejectCallback(reason, true);
                                                return ret;
                                            };

                                            Promise.setScheduler = function(fn) {
                                                if (typeof fn !== "function") {
                                                    throw new TypeError(
                                                        "expecting a function but got " +
                                                            util.classString(fn)
                                                    );
                                                }
                                                return async.setScheduler(fn);
                                            };

                                            Promise.prototype._then = function(
                                                didFulfill,
                                                didReject,
                                                _,
                                                receiver,
                                                internalData
                                            ) {
                                                var haveInternalData =
                                                    internalData !== undefined;
                                                var promise = haveInternalData
                                                    ? internalData
                                                    : new Promise(INTERNAL);
                                                var target = this._target();
                                                var bitField = target._bitField;

                                                if (!haveInternalData) {
                                                    promise._propagateFrom(this, 3);
                                                    promise._captureStackTrace();
                                                    if (
                                                        receiver === undefined &&
                                                        (this._bitField & 2097152) !== 0
                                                    ) {
                                                        if (
                                                            !((bitField & 50397184) === 0)
                                                        ) {
                                                            receiver = this._boundValue();
                                                        } else {
                                                            receiver =
                                                                target === this
                                                                    ? undefined
                                                                    : this._boundTo;
                                                        }
                                                    }
                                                    this._fireEvent(
                                                        "promiseChained",
                                                        this,
                                                        promise
                                                    );
                                                }

                                                var domain = getDomain();
                                                if (!((bitField & 50397184) === 0)) {
                                                    var handler,
                                                        value,
                                                        settler =
                                                            target._settlePromiseCtx;
                                                    if ((bitField & 33554432) !== 0) {
                                                        value = target._rejectionHandler0;
                                                        handler = didFulfill;
                                                    } else if (
                                                        (bitField & 16777216) !==
                                                        0
                                                    ) {
                                                        value =
                                                            target._fulfillmentHandler0;
                                                        handler = didReject;
                                                        target._unsetRejectionIsUnhandled();
                                                    } else {
                                                        settler =
                                                            target._settlePromiseLateCancellationObserver;
                                                        value = new CancellationError(
                                                            "late cancellation observer"
                                                        );
                                                        target._attachExtraTrace(value);
                                                        handler = didReject;
                                                    }

                                                    async.invoke(settler, target, {
                                                        handler:
                                                            domain === null
                                                                ? handler
                                                                : typeof handler ===
                                                                      "function" &&
                                                                  util.domainBind(
                                                                      domain,
                                                                      handler
                                                                  ),
                                                        promise: promise,
                                                        receiver: receiver,
                                                        value: value
                                                    });
                                                } else {
                                                    target._addCallbacks(
                                                        didFulfill,
                                                        didReject,
                                                        promise,
                                                        receiver,
                                                        domain
                                                    );
                                                }

                                                return promise;
                                            };

                                            Promise.prototype._length = function() {
                                                return this._bitField & 65535;
                                            };

                                            Promise.prototype._isFateSealed = function() {
                                                return (this._bitField & 117506048) !== 0;
                                            };

                                            Promise.prototype._isFollowing = function() {
                                                return (
                                                    (this._bitField & 67108864) ===
                                                    67108864
                                                );
                                            };

                                            Promise.prototype._setLength = function(len) {
                                                this._bitField =
                                                    (this._bitField & -65536) |
                                                    (len & 65535);
                                            };

                                            Promise.prototype._setFulfilled = function() {
                                                this._bitField =
                                                    this._bitField | 33554432;
                                                this._fireEvent("promiseFulfilled", this);
                                            };

                                            Promise.prototype._setRejected = function() {
                                                this._bitField =
                                                    this._bitField | 16777216;
                                                this._fireEvent("promiseRejected", this);
                                            };

                                            Promise.prototype._setFollowing = function() {
                                                this._bitField =
                                                    this._bitField | 67108864;
                                                this._fireEvent("promiseResolved", this);
                                            };

                                            Promise.prototype._setIsFinal = function() {
                                                this._bitField = this._bitField | 4194304;
                                            };

                                            Promise.prototype._isFinal = function() {
                                                return (this._bitField & 4194304) > 0;
                                            };

                                            Promise.prototype._unsetCancelled = function() {
                                                this._bitField = this._bitField & ~65536;
                                            };

                                            Promise.prototype._setCancelled = function() {
                                                this._bitField = this._bitField | 65536;
                                                this._fireEvent("promiseCancelled", this);
                                            };

                                            Promise.prototype._setWillBeCancelled = function() {
                                                this._bitField = this._bitField | 8388608;
                                            };

                                            Promise.prototype._setAsyncGuaranteed = function() {
                                                if (async.hasCustomScheduler()) return;
                                                this._bitField =
                                                    this._bitField | 134217728;
                                            };

                                            Promise.prototype._receiverAt = function(
                                                index
                                            ) {
                                                var ret =
                                                    index === 0
                                                        ? this._receiver0
                                                        : this[index * 4 - 4 + 3];
                                                if (ret === UNDEFINED_BINDING) {
                                                    return undefined;
                                                } else if (
                                                    ret === undefined &&
                                                    this._isBound()
                                                ) {
                                                    return this._boundValue();
                                                }
                                                return ret;
                                            };

                                            Promise.prototype._promiseAt = function(
                                                index
                                            ) {
                                                return this[index * 4 - 4 + 2];
                                            };

                                            Promise.prototype._fulfillmentHandlerAt = function(
                                                index
                                            ) {
                                                return this[index * 4 - 4 + 0];
                                            };

                                            Promise.prototype._rejectionHandlerAt = function(
                                                index
                                            ) {
                                                return this[index * 4 - 4 + 1];
                                            };

                                            Promise.prototype._boundValue = function() {};

                                            Promise.prototype._migrateCallback0 = function(
                                                follower
                                            ) {
                                                var bitField = follower._bitField;
                                                var fulfill =
                                                    follower._fulfillmentHandler0;
                                                var reject = follower._rejectionHandler0;
                                                var promise = follower._promise0;
                                                var receiver = follower._receiverAt(0);
                                                if (receiver === undefined)
                                                    receiver = UNDEFINED_BINDING;
                                                this._addCallbacks(
                                                    fulfill,
                                                    reject,
                                                    promise,
                                                    receiver,
                                                    null
                                                );
                                            };

                                            Promise.prototype._migrateCallbackAt = function(
                                                follower,
                                                index
                                            ) {
                                                var fulfill = follower._fulfillmentHandlerAt(
                                                    index
                                                );
                                                var reject = follower._rejectionHandlerAt(
                                                    index
                                                );
                                                var promise = follower._promiseAt(index);
                                                var receiver = follower._receiverAt(
                                                    index
                                                );
                                                if (receiver === undefined)
                                                    receiver = UNDEFINED_BINDING;
                                                this._addCallbacks(
                                                    fulfill,
                                                    reject,
                                                    promise,
                                                    receiver,
                                                    null
                                                );
                                            };

                                            Promise.prototype._addCallbacks = function(
                                                fulfill,
                                                reject,
                                                promise,
                                                receiver,
                                                domain
                                            ) {
                                                var index = this._length();

                                                if (index >= 65535 - 4) {
                                                    index = 0;
                                                    this._setLength(0);
                                                }

                                                if (index === 0) {
                                                    this._promise0 = promise;
                                                    this._receiver0 = receiver;
                                                    if (typeof fulfill === "function") {
                                                        this._fulfillmentHandler0 =
                                                            domain === null
                                                                ? fulfill
                                                                : util.domainBind(
                                                                      domain,
                                                                      fulfill
                                                                  );
                                                    }
                                                    if (typeof reject === "function") {
                                                        this._rejectionHandler0 =
                                                            domain === null
                                                                ? reject
                                                                : util.domainBind(
                                                                      domain,
                                                                      reject
                                                                  );
                                                    }
                                                } else {
                                                    var base = index * 4 - 4;
                                                    this[base + 2] = promise;
                                                    this[base + 3] = receiver;
                                                    if (typeof fulfill === "function") {
                                                        this[base + 0] =
                                                            domain === null
                                                                ? fulfill
                                                                : util.domainBind(
                                                                      domain,
                                                                      fulfill
                                                                  );
                                                    }
                                                    if (typeof reject === "function") {
                                                        this[base + 1] =
                                                            domain === null
                                                                ? reject
                                                                : util.domainBind(
                                                                      domain,
                                                                      reject
                                                                  );
                                                    }
                                                }
                                                this._setLength(index + 1);
                                                return index;
                                            };

                                            Promise.prototype._proxy = function(
                                                proxyable,
                                                arg
                                            ) {
                                                this._addCallbacks(
                                                    undefined,
                                                    undefined,
                                                    arg,
                                                    proxyable,
                                                    null
                                                );
                                            };

                                            Promise.prototype._resolveCallback = function(
                                                value,
                                                shouldBind
                                            ) {
                                                if ((this._bitField & 117506048) !== 0)
                                                    return;
                                                if (value === this)
                                                    return this._rejectCallback(
                                                        makeSelfResolutionError(),
                                                        false
                                                    );
                                                var maybePromise = tryConvertToPromise(
                                                    value,
                                                    this
                                                );
                                                if (!(maybePromise instanceof Promise))
                                                    return this._fulfill(value);

                                                if (shouldBind)
                                                    this._propagateFrom(maybePromise, 2);

                                                var promise = maybePromise._target();

                                                if (promise === this) {
                                                    this._reject(
                                                        makeSelfResolutionError()
                                                    );
                                                    return;
                                                }

                                                var bitField = promise._bitField;
                                                if ((bitField & 50397184) === 0) {
                                                    var len = this._length();
                                                    if (len > 0)
                                                        promise._migrateCallback0(this);
                                                    for (var i = 1; i < len; ++i) {
                                                        promise._migrateCallbackAt(
                                                            this,
                                                            i
                                                        );
                                                    }
                                                    this._setFollowing();
                                                    this._setLength(0);
                                                    this._setFollowee(promise);
                                                } else if ((bitField & 33554432) !== 0) {
                                                    this._fulfill(promise._value());
                                                } else if ((bitField & 16777216) !== 0) {
                                                    this._reject(promise._reason());
                                                } else {
                                                    var reason = new CancellationError(
                                                        "late cancellation observer"
                                                    );
                                                    promise._attachExtraTrace(reason);
                                                    this._reject(reason);
                                                }
                                            };

                                            Promise.prototype._rejectCallback = function(
                                                reason,
                                                synchronous,
                                                ignoreNonErrorWarnings
                                            ) {
                                                var trace = util.ensureErrorObject(
                                                    reason
                                                );
                                                var hasStack = trace === reason;
                                                if (
                                                    !hasStack &&
                                                    !ignoreNonErrorWarnings &&
                                                    debug.warnings()
                                                ) {
                                                    var message =
                                                        "a promise was rejected with a non-error: " +
                                                        util.classString(reason);
                                                    this._warn(message, true);
                                                }
                                                this._attachExtraTrace(
                                                    trace,
                                                    synchronous ? hasStack : false
                                                );
                                                this._reject(reason);
                                            };

                                            Promise.prototype._resolveFromExecutor = function(
                                                executor
                                            ) {
                                                if (executor === INTERNAL) return;
                                                var promise = this;
                                                this._captureStackTrace();
                                                this._pushContext();
                                                var synchronous = true;
                                                var r = this._execute(
                                                    executor,
                                                    function(value) {
                                                        promise._resolveCallback(value);
                                                    },
                                                    function(reason) {
                                                        promise._rejectCallback(
                                                            reason,
                                                            synchronous
                                                        );
                                                    }
                                                );
                                                synchronous = false;
                                                this._popContext();

                                                if (r !== undefined) {
                                                    promise._rejectCallback(r, true);
                                                }
                                            };

                                            Promise.prototype._settlePromiseFromHandler = function(
                                                handler,
                                                receiver,
                                                value,
                                                promise
                                            ) {
                                                var bitField = promise._bitField;
                                                if ((bitField & 65536) !== 0) return;
                                                promise._pushContext();
                                                var x;
                                                if (receiver === APPLY) {
                                                    if (
                                                        !value ||
                                                        typeof value.length !== "number"
                                                    ) {
                                                        x = errorObj;
                                                        x.e = new TypeError(
                                                            "cannot .spread() a non-array: " +
                                                                util.classString(value)
                                                        );
                                                    } else {
                                                        x = tryCatch(handler).apply(
                                                            this._boundValue(),
                                                            value
                                                        );
                                                    }
                                                } else {
                                                    x = tryCatch(handler).call(
                                                        receiver,
                                                        value
                                                    );
                                                }
                                                var promiseCreated = promise._popContext();
                                                bitField = promise._bitField;
                                                if ((bitField & 65536) !== 0) return;

                                                if (x === NEXT_FILTER) {
                                                    promise._reject(value);
                                                } else if (x === errorObj) {
                                                    promise._rejectCallback(x.e, false);
                                                } else {
                                                    debug.checkForgottenReturns(
                                                        x,
                                                        promiseCreated,
                                                        "",
                                                        promise,
                                                        this
                                                    );
                                                    promise._resolveCallback(x);
                                                }
                                            };

                                            Promise.prototype._target = function() {
                                                var ret = this;
                                                while (ret._isFollowing())
                                                    ret = ret._followee();
                                                return ret;
                                            };

                                            Promise.prototype._followee = function() {
                                                return this._rejectionHandler0;
                                            };

                                            Promise.prototype._setFollowee = function(
                                                promise
                                            ) {
                                                this._rejectionHandler0 = promise;
                                            };

                                            Promise.prototype._settlePromise = function(
                                                promise,
                                                handler,
                                                receiver,
                                                value
                                            ) {
                                                var isPromise =
                                                    promise instanceof Promise;
                                                var bitField = this._bitField;
                                                var asyncGuaranteed =
                                                    (bitField & 134217728) !== 0;
                                                if ((bitField & 65536) !== 0) {
                                                    if (isPromise)
                                                        promise._invokeInternalOnCancel();

                                                    if (
                                                        receiver instanceof
                                                            PassThroughHandlerContext &&
                                                        receiver.isFinallyHandler()
                                                    ) {
                                                        receiver.cancelPromise = promise;
                                                        if (
                                                            tryCatch(handler).call(
                                                                receiver,
                                                                value
                                                            ) === errorObj
                                                        ) {
                                                            promise._reject(errorObj.e);
                                                        }
                                                    } else if (
                                                        handler === reflectHandler
                                                    ) {
                                                        promise._fulfill(
                                                            reflectHandler.call(receiver)
                                                        );
                                                    } else if (
                                                        receiver instanceof Proxyable
                                                    ) {
                                                        receiver._promiseCancelled(
                                                            promise
                                                        );
                                                    } else if (
                                                        isPromise ||
                                                        promise instanceof PromiseArray
                                                    ) {
                                                        promise._cancel();
                                                    } else {
                                                        receiver.cancel();
                                                    }
                                                } else if (
                                                    typeof handler === "function"
                                                ) {
                                                    if (!isPromise) {
                                                        handler.call(
                                                            receiver,
                                                            value,
                                                            promise
                                                        );
                                                    } else {
                                                        if (asyncGuaranteed)
                                                            promise._setAsyncGuaranteed();
                                                        this._settlePromiseFromHandler(
                                                            handler,
                                                            receiver,
                                                            value,
                                                            promise
                                                        );
                                                    }
                                                } else if (
                                                    receiver instanceof Proxyable
                                                ) {
                                                    if (!receiver._isResolved()) {
                                                        if ((bitField & 33554432) !== 0) {
                                                            receiver._promiseFulfilled(
                                                                value,
                                                                promise
                                                            );
                                                        } else {
                                                            receiver._promiseRejected(
                                                                value,
                                                                promise
                                                            );
                                                        }
                                                    }
                                                } else if (isPromise) {
                                                    if (asyncGuaranteed)
                                                        promise._setAsyncGuaranteed();
                                                    if ((bitField & 33554432) !== 0) {
                                                        promise._fulfill(value);
                                                    } else {
                                                        promise._reject(value);
                                                    }
                                                }
                                            };

                                            Promise.prototype._settlePromiseLateCancellationObserver = function(
                                                ctx
                                            ) {
                                                var handler = ctx.handler;
                                                var promise = ctx.promise;
                                                var receiver = ctx.receiver;
                                                var value = ctx.value;
                                                if (typeof handler === "function") {
                                                    if (!(promise instanceof Promise)) {
                                                        handler.call(
                                                            receiver,
                                                            value,
                                                            promise
                                                        );
                                                    } else {
                                                        this._settlePromiseFromHandler(
                                                            handler,
                                                            receiver,
                                                            value,
                                                            promise
                                                        );
                                                    }
                                                } else if (promise instanceof Promise) {
                                                    promise._reject(value);
                                                }
                                            };

                                            Promise.prototype._settlePromiseCtx = function(
                                                ctx
                                            ) {
                                                this._settlePromise(
                                                    ctx.promise,
                                                    ctx.handler,
                                                    ctx.receiver,
                                                    ctx.value
                                                );
                                            };

                                            Promise.prototype._settlePromise0 = function(
                                                handler,
                                                value,
                                                bitField
                                            ) {
                                                var promise = this._promise0;
                                                var receiver = this._receiverAt(0);
                                                this._promise0 = undefined;
                                                this._receiver0 = undefined;
                                                this._settlePromise(
                                                    promise,
                                                    handler,
                                                    receiver,
                                                    value
                                                );
                                            };

                                            Promise.prototype._clearCallbackDataAtIndex = function(
                                                index
                                            ) {
                                                var base = index * 4 - 4;
                                                this[base + 2] = this[base + 3] = this[
                                                    base + 0
                                                ] = this[base + 1] = undefined;
                                            };

                                            Promise.prototype._fulfill = function(value) {
                                                var bitField = this._bitField;
                                                if ((bitField & 117506048) >>> 16) return;
                                                if (value === this) {
                                                    var err = makeSelfResolutionError();
                                                    this._attachExtraTrace(err);
                                                    return this._reject(err);
                                                }
                                                this._setFulfilled();
                                                this._rejectionHandler0 = value;

                                                if ((bitField & 65535) > 0) {
                                                    if ((bitField & 134217728) !== 0) {
                                                        this._settlePromises();
                                                    } else {
                                                        async.settlePromises(this);
                                                    }
                                                }
                                            };

                                            Promise.prototype._reject = function(reason) {
                                                var bitField = this._bitField;
                                                if ((bitField & 117506048) >>> 16) return;
                                                this._setRejected();
                                                this._fulfillmentHandler0 = reason;

                                                if (this._isFinal()) {
                                                    return async.fatalError(
                                                        reason,
                                                        util.isNode
                                                    );
                                                }

                                                if ((bitField & 65535) > 0) {
                                                    async.settlePromises(this);
                                                } else {
                                                    this._ensurePossibleRejectionHandled();
                                                }
                                            };

                                            Promise.prototype._fulfillPromises = function(
                                                len,
                                                value
                                            ) {
                                                for (var i = 1; i < len; i++) {
                                                    var handler = this._fulfillmentHandlerAt(
                                                        i
                                                    );
                                                    var promise = this._promiseAt(i);
                                                    var receiver = this._receiverAt(i);
                                                    this._clearCallbackDataAtIndex(i);
                                                    this._settlePromise(
                                                        promise,
                                                        handler,
                                                        receiver,
                                                        value
                                                    );
                                                }
                                            };

                                            Promise.prototype._rejectPromises = function(
                                                len,
                                                reason
                                            ) {
                                                for (var i = 1; i < len; i++) {
                                                    var handler = this._rejectionHandlerAt(
                                                        i
                                                    );
                                                    var promise = this._promiseAt(i);
                                                    var receiver = this._receiverAt(i);
                                                    this._clearCallbackDataAtIndex(i);
                                                    this._settlePromise(
                                                        promise,
                                                        handler,
                                                        receiver,
                                                        reason
                                                    );
                                                }
                                            };

                                            Promise.prototype._settlePromises = function() {
                                                var bitField = this._bitField;
                                                var len = bitField & 65535;

                                                if (len > 0) {
                                                    if ((bitField & 16842752) !== 0) {
                                                        var reason = this
                                                            ._fulfillmentHandler0;
                                                        this._settlePromise0(
                                                            this._rejectionHandler0,
                                                            reason,
                                                            bitField
                                                        );
                                                        this._rejectPromises(len, reason);
                                                    } else {
                                                        var value = this
                                                            ._rejectionHandler0;
                                                        this._settlePromise0(
                                                            this._fulfillmentHandler0,
                                                            value,
                                                            bitField
                                                        );
                                                        this._fulfillPromises(len, value);
                                                    }
                                                    this._setLength(0);
                                                }
                                                this._clearCancellationData();
                                            };

                                            Promise.prototype._settledValue = function() {
                                                var bitField = this._bitField;
                                                if ((bitField & 33554432) !== 0) {
                                                    return this._rejectionHandler0;
                                                } else if ((bitField & 16777216) !== 0) {
                                                    return this._fulfillmentHandler0;
                                                }
                                            };

                                            function deferResolve(v) {
                                                this.promise._resolveCallback(v);
                                            }
                                            function deferReject(v) {
                                                this.promise._rejectCallback(v, false);
                                            }

                                            Promise.defer = Promise.pending = function() {
                                                debug.deprecated(
                                                    "Promise.defer",
                                                    "new Promise"
                                                );
                                                var promise = new Promise(INTERNAL);
                                                return {
                                                    promise: promise,
                                                    resolve: deferResolve,
                                                    reject: deferReject
                                                };
                                            };

                                            util.notEnumerableProp(
                                                Promise,
                                                "_makeSelfResolutionError",
                                                makeSelfResolutionError
                                            );

                                            _dereq_("./method")(
                                                Promise,
                                                INTERNAL,
                                                tryConvertToPromise,
                                                apiRejection,
                                                debug
                                            );
                                            _dereq_("./bind")(
                                                Promise,
                                                INTERNAL,
                                                tryConvertToPromise,
                                                debug
                                            );
                                            _dereq_("./cancel")(
                                                Promise,
                                                PromiseArray,
                                                apiRejection,
                                                debug
                                            );
                                            _dereq_("./direct_resolve")(Promise);
                                            _dereq_("./synchronous_inspection")(Promise);
                                            _dereq_("./join")(
                                                Promise,
                                                PromiseArray,
                                                tryConvertToPromise,
                                                INTERNAL,
                                                async,
                                                getDomain
                                            );
                                            Promise.Promise = Promise;
                                            Promise.version = "3.5.1";
                                            _dereq_("./map.js")(
                                                Promise,
                                                PromiseArray,
                                                apiRejection,
                                                tryConvertToPromise,
                                                INTERNAL,
                                                debug
                                            );
                                            _dereq_("./call_get.js")(Promise);
                                            _dereq_("./using.js")(
                                                Promise,
                                                apiRejection,
                                                tryConvertToPromise,
                                                createContext,
                                                INTERNAL,
                                                debug
                                            );
                                            _dereq_("./timers.js")(
                                                Promise,
                                                INTERNAL,
                                                debug
                                            );
                                            _dereq_("./generators.js")(
                                                Promise,
                                                apiRejection,
                                                INTERNAL,
                                                tryConvertToPromise,
                                                Proxyable,
                                                debug
                                            );
                                            _dereq_("./nodeify.js")(Promise);
                                            _dereq_("./promisify.js")(Promise, INTERNAL);
                                            _dereq_("./props.js")(
                                                Promise,
                                                PromiseArray,
                                                tryConvertToPromise,
                                                apiRejection
                                            );
                                            _dereq_("./race.js")(
                                                Promise,
                                                INTERNAL,
                                                tryConvertToPromise,
                                                apiRejection
                                            );
                                            _dereq_("./reduce.js")(
                                                Promise,
                                                PromiseArray,
                                                apiRejection,
                                                tryConvertToPromise,
                                                INTERNAL,
                                                debug
                                            );
                                            _dereq_("./settle.js")(
                                                Promise,
                                                PromiseArray,
                                                debug
                                            );
                                            _dereq_("./some.js")(
                                                Promise,
                                                PromiseArray,
                                                apiRejection
                                            );
                                            _dereq_("./filter.js")(Promise, INTERNAL);
                                            _dereq_("./each.js")(Promise, INTERNAL);
                                            _dereq_("./any.js")(Promise);

                                            util.toFastProperties(Promise);
                                            util.toFastProperties(Promise.prototype);
                                            function fillTypes(value) {
                                                var p = new Promise(INTERNAL);
                                                p._fulfillmentHandler0 = value;
                                                p._rejectionHandler0 = value;
                                                p._promise0 = value;
                                                p._receiver0 = value;
                                            }
                                            // Complete slack tracking, opt out of field-type tracking and
                                            // stabilize map
                                            fillTypes({ a: 1 });
                                            fillTypes({ b: 2 });
                                            fillTypes({ c: 3 });
                                            fillTypes(1);
                                            fillTypes(function() {});
                                            fillTypes(undefined);
                                            fillTypes(false);
                                            fillTypes(new Promise(INTERNAL));
                                            debug.setBounds(
                                                Async.firstLineError,
                                                util.lastLineError
                                            );
                                            return Promise;
                                        };
                                    },
                                    {
                                        "./any.js": 1,
                                        "./async": 2,
                                        "./bind": 3,
                                        "./call_get.js": 5,
                                        "./cancel": 6,
                                        "./catch_filter": 7,
                                        "./context": 8,
                                        "./debuggability": 9,
                                        "./direct_resolve": 10,
                                        "./each.js": 11,
                                        "./errors": 12,
                                        "./es5": 13,
                                        "./filter.js": 14,
                                        "./finally": 15,
                                        "./generators.js": 16,
                                        "./join": 17,
                                        "./map.js": 18,
                                        "./method": 19,
                                        "./nodeback": 20,
                                        "./nodeify.js": 21,
                                        "./promise_array": 23,
                                        "./promisify.js": 24,
                                        "./props.js": 25,
                                        "./race.js": 27,
                                        "./reduce.js": 28,
                                        "./settle.js": 30,
                                        "./some.js": 31,
                                        "./synchronous_inspection": 32,
                                        "./thenables": 33,
                                        "./timers.js": 34,
                                        "./using.js": 35,
                                        "./util": 36
                                    }
                                ],
                                23: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(
                                            Promise,
                                            INTERNAL,
                                            tryConvertToPromise,
                                            apiRejection,
                                            Proxyable
                                        ) {
                                            var util = _dereq_("./util");
                                            var isArray = util.isArray;

                                            function toResolutionValue(val) {
                                                switch (val) {
                                                    case -2:
                                                        return [];
                                                    case -3:
                                                        return {};
                                                    case -6:
                                                        return new Map();
                                                }
                                            }

                                            function PromiseArray(values) {
                                                var promise = (this._promise = new Promise(
                                                    INTERNAL
                                                ));
                                                if (values instanceof Promise) {
                                                    promise._propagateFrom(values, 3);
                                                }
                                                promise._setOnCancel(this);
                                                this._values = values;
                                                this._length = 0;
                                                this._totalResolved = 0;
                                                this._init(undefined, -2);
                                            }
                                            util.inherits(PromiseArray, Proxyable);

                                            PromiseArray.prototype.length = function() {
                                                return this._length;
                                            };

                                            PromiseArray.prototype.promise = function() {
                                                return this._promise;
                                            };

                                            PromiseArray.prototype._init = function init(
                                                _,
                                                resolveValueIfEmpty
                                            ) {
                                                var values = tryConvertToPromise(
                                                    this._values,
                                                    this._promise
                                                );
                                                if (values instanceof Promise) {
                                                    values = values._target();
                                                    var bitField = values._bitField;
                                                    this._values = values;

                                                    if ((bitField & 50397184) === 0) {
                                                        this._promise._setAsyncGuaranteed();
                                                        return values._then(
                                                            init,
                                                            this._reject,
                                                            undefined,
                                                            this,
                                                            resolveValueIfEmpty
                                                        );
                                                    } else if (
                                                        (bitField & 33554432) !==
                                                        0
                                                    ) {
                                                        values = values._value();
                                                    } else if (
                                                        (bitField & 16777216) !==
                                                        0
                                                    ) {
                                                        return this._reject(
                                                            values._reason()
                                                        );
                                                    } else {
                                                        return this._cancel();
                                                    }
                                                }
                                                values = util.asArray(values);
                                                if (values === null) {
                                                    var err = apiRejection(
                                                        "expecting an array or an iterable object but got " +
                                                            util.classString(values)
                                                    ).reason();
                                                    this._promise._rejectCallback(
                                                        err,
                                                        false
                                                    );
                                                    return;
                                                }

                                                if (values.length === 0) {
                                                    if (resolveValueIfEmpty === -5) {
                                                        this._resolveEmptyArray();
                                                    } else {
                                                        this._resolve(
                                                            toResolutionValue(
                                                                resolveValueIfEmpty
                                                            )
                                                        );
                                                    }
                                                    return;
                                                }
                                                this._iterate(values);
                                            };

                                            PromiseArray.prototype._iterate = function(
                                                values
                                            ) {
                                                var len = this.getActualLength(
                                                    values.length
                                                );
                                                this._length = len;
                                                this._values = this.shouldCopyValues()
                                                    ? new Array(len)
                                                    : this._values;
                                                var result = this._promise;
                                                var isResolved = false;
                                                var bitField = null;
                                                for (var i = 0; i < len; ++i) {
                                                    var maybePromise = tryConvertToPromise(
                                                        values[i],
                                                        result
                                                    );

                                                    if (maybePromise instanceof Promise) {
                                                        maybePromise = maybePromise._target();
                                                        bitField = maybePromise._bitField;
                                                    } else {
                                                        bitField = null;
                                                    }

                                                    if (isResolved) {
                                                        if (bitField !== null) {
                                                            maybePromise.suppressUnhandledRejections();
                                                        }
                                                    } else if (bitField !== null) {
                                                        if ((bitField & 50397184) === 0) {
                                                            maybePromise._proxy(this, i);
                                                            this._values[
                                                                i
                                                            ] = maybePromise;
                                                        } else if (
                                                            (bitField & 33554432) !==
                                                            0
                                                        ) {
                                                            isResolved = this._promiseFulfilled(
                                                                maybePromise._value(),
                                                                i
                                                            );
                                                        } else if (
                                                            (bitField & 16777216) !==
                                                            0
                                                        ) {
                                                            isResolved = this._promiseRejected(
                                                                maybePromise._reason(),
                                                                i
                                                            );
                                                        } else {
                                                            isResolved = this._promiseCancelled(
                                                                i
                                                            );
                                                        }
                                                    } else {
                                                        isResolved = this._promiseFulfilled(
                                                            maybePromise,
                                                            i
                                                        );
                                                    }
                                                }
                                                if (!isResolved)
                                                    result._setAsyncGuaranteed();
                                            };

                                            PromiseArray.prototype._isResolved = function() {
                                                return this._values === null;
                                            };

                                            PromiseArray.prototype._resolve = function(
                                                value
                                            ) {
                                                this._values = null;
                                                this._promise._fulfill(value);
                                            };

                                            PromiseArray.prototype._cancel = function() {
                                                if (
                                                    this._isResolved() ||
                                                    !this._promise._isCancellable()
                                                )
                                                    return;
                                                this._values = null;
                                                this._promise._cancel();
                                            };

                                            PromiseArray.prototype._reject = function(
                                                reason
                                            ) {
                                                this._values = null;
                                                this._promise._rejectCallback(
                                                    reason,
                                                    false
                                                );
                                            };

                                            PromiseArray.prototype._promiseFulfilled = function(
                                                value,
                                                index
                                            ) {
                                                this._values[index] = value;
                                                var totalResolved = ++this._totalResolved;
                                                if (totalResolved >= this._length) {
                                                    this._resolve(this._values);
                                                    return true;
                                                }
                                                return false;
                                            };

                                            PromiseArray.prototype._promiseCancelled = function() {
                                                this._cancel();
                                                return true;
                                            };

                                            PromiseArray.prototype._promiseRejected = function(
                                                reason
                                            ) {
                                                this._totalResolved++;
                                                this._reject(reason);
                                                return true;
                                            };

                                            PromiseArray.prototype._resultCancelled = function() {
                                                if (this._isResolved()) return;
                                                var values = this._values;
                                                this._cancel();
                                                if (values instanceof Promise) {
                                                    values.cancel();
                                                } else {
                                                    for (
                                                        var i = 0;
                                                        i < values.length;
                                                        ++i
                                                    ) {
                                                        if (
                                                            values[i] instanceof Promise
                                                        ) {
                                                            values[i].cancel();
                                                        }
                                                    }
                                                }
                                            };

                                            PromiseArray.prototype.shouldCopyValues = function() {
                                                return true;
                                            };

                                            PromiseArray.prototype.getActualLength = function(
                                                len
                                            ) {
                                                return len;
                                            };

                                            return PromiseArray;
                                        };
                                    },
                                    { "./util": 36 }
                                ],
                                24: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(Promise, INTERNAL) {
                                            var THIS = {};
                                            var util = _dereq_("./util");
                                            var nodebackForPromise = _dereq_(
                                                "./nodeback"
                                            );
                                            var withAppended = util.withAppended;
                                            var maybeWrapAsError = util.maybeWrapAsError;
                                            var canEvaluate = util.canEvaluate;
                                            var TypeError = _dereq_("./errors").TypeError;
                                            var defaultSuffix = "Async";
                                            var defaultPromisified = {
                                                __isPromisified__: true
                                            };
                                            var noCopyProps = [
                                                "arity",
                                                "length",
                                                "name",
                                                "arguments",
                                                "caller",
                                                "callee",
                                                "prototype",
                                                "__isPromisified__"
                                            ];
                                            var noCopyPropsPattern = new RegExp(
                                                "^(?:" + noCopyProps.join("|") + ")$"
                                            );

                                            var defaultFilter = function(name) {
                                                return (
                                                    util.isIdentifier(name) &&
                                                    name.charAt(0) !== "_" &&
                                                    name !== "constructor"
                                                );
                                            };

                                            function propsFilter(key) {
                                                return !noCopyPropsPattern.test(key);
                                            }

                                            function isPromisified(fn) {
                                                try {
                                                    return fn.__isPromisified__ === true;
                                                } catch (e) {
                                                    return false;
                                                }
                                            }

                                            function hasPromisified(obj, key, suffix) {
                                                var val = util.getDataPropertyOrDefault(
                                                    obj,
                                                    key + suffix,
                                                    defaultPromisified
                                                );
                                                return val ? isPromisified(val) : false;
                                            }
                                            function checkValid(
                                                ret,
                                                suffix,
                                                suffixRegexp
                                            ) {
                                                for (var i = 0; i < ret.length; i += 2) {
                                                    var key = ret[i];
                                                    if (suffixRegexp.test(key)) {
                                                        var keyWithoutAsyncSuffix = key.replace(
                                                            suffixRegexp,
                                                            ""
                                                        );
                                                        for (
                                                            var j = 0;
                                                            j < ret.length;
                                                            j += 2
                                                        ) {
                                                            if (
                                                                ret[j] ===
                                                                keyWithoutAsyncSuffix
                                                            ) {
                                                                throw new TypeError(
                                                                    "Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a".replace(
                                                                        "%s",
                                                                        suffix
                                                                    )
                                                                );
                                                            }
                                                        }
                                                    }
                                                }
                                            }

                                            function promisifiableMethods(
                                                obj,
                                                suffix,
                                                suffixRegexp,
                                                filter
                                            ) {
                                                var keys = util.inheritedDataKeys(obj);
                                                var ret = [];
                                                for (var i = 0; i < keys.length; ++i) {
                                                    var key = keys[i];
                                                    var value = obj[key];
                                                    var passesDefaultFilter =
                                                        filter === defaultFilter
                                                            ? true
                                                            : defaultFilter(
                                                                  key,
                                                                  value,
                                                                  obj
                                                              );
                                                    if (
                                                        typeof value === "function" &&
                                                        !isPromisified(value) &&
                                                        !hasPromisified(
                                                            obj,
                                                            key,
                                                            suffix
                                                        ) &&
                                                        filter(
                                                            key,
                                                            value,
                                                            obj,
                                                            passesDefaultFilter
                                                        )
                                                    ) {
                                                        ret.push(key, value);
                                                    }
                                                }
                                                checkValid(ret, suffix, suffixRegexp);
                                                return ret;
                                            }

                                            var escapeIdentRegex = function(str) {
                                                return str.replace(/([$])/, "\\$");
                                            };

                                            var makeNodePromisifiedEval;
                                            if (false) {
                                                var switchCaseArgumentOrder = function(
                                                    likelyArgumentCount
                                                ) {
                                                    var ret = [likelyArgumentCount];
                                                    var min = Math.max(
                                                        0,
                                                        likelyArgumentCount - 1 - 3
                                                    );
                                                    for (
                                                        var i = likelyArgumentCount - 1;
                                                        i >= min;
                                                        --i
                                                    ) {
                                                        ret.push(i);
                                                    }
                                                    for (
                                                        var i = likelyArgumentCount + 1;
                                                        i <= 3;
                                                        ++i
                                                    ) {
                                                        ret.push(i);
                                                    }
                                                    return ret;
                                                };

                                                var argumentSequence = function(
                                                    argumentCount
                                                ) {
                                                    return util.filledRange(
                                                        argumentCount,
                                                        "_arg",
                                                        ""
                                                    );
                                                };

                                                var parameterDeclaration = function(
                                                    parameterCount
                                                ) {
                                                    return util.filledRange(
                                                        Math.max(parameterCount, 3),
                                                        "_arg",
                                                        ""
                                                    );
                                                };

                                                var parameterCount = function(fn) {
                                                    if (typeof fn.length === "number") {
                                                        return Math.max(
                                                            Math.min(fn.length, 1023 + 1),
                                                            0
                                                        );
                                                    }
                                                    return 0;
                                                };

                                                makeNodePromisifiedEval = function(
                                                    callback,
                                                    receiver,
                                                    originalName,
                                                    fn,
                                                    _,
                                                    multiArgs
                                                ) {
                                                    var newParameterCount = Math.max(
                                                        0,
                                                        parameterCount(fn) - 1
                                                    );
                                                    var argumentOrder = switchCaseArgumentOrder(
                                                        newParameterCount
                                                    );
                                                    var shouldProxyThis =
                                                        typeof callback === "string" ||
                                                        receiver === THIS;

                                                    function generateCallForArgumentCount(
                                                        count
                                                    ) {
                                                        var args = argumentSequence(
                                                            count
                                                        ).join(", ");
                                                        var comma = count > 0 ? ", " : "";
                                                        var ret;
                                                        if (shouldProxyThis) {
                                                            ret =
                                                                "ret = callback.call(this, {{args}}, nodeback); break;\n";
                                                        } else {
                                                            ret =
                                                                receiver === undefined
                                                                    ? "ret = callback({{args}}, nodeback); break;\n"
                                                                    : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
                                                        }
                                                        return ret
                                                            .replace("{{args}}", args)
                                                            .replace(", ", comma);
                                                    }

                                                    function generateArgumentSwitchCase() {
                                                        var ret = "";
                                                        for (
                                                            var i = 0;
                                                            i < argumentOrder.length;
                                                            ++i
                                                        ) {
                                                            ret +=
                                                                "case " +
                                                                argumentOrder[i] +
                                                                ":" +
                                                                generateCallForArgumentCount(
                                                                    argumentOrder[i]
                                                                );
                                                        }

                                                        ret += "                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = nodeback;                                              \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ".replace(
                                                            "[CodeForCall]",
                                                            shouldProxyThis
                                                                ? "ret = callback.apply(this, args);\n"
                                                                : "ret = callback.apply(receiver, args);\n"
                                                        );
                                                        return ret;
                                                    }

                                                    var getFunctionCode =
                                                        typeof callback === "string"
                                                            ? "this != null ? this['" +
                                                              callback +
                                                              "'] : fn"
                                                            : "fn";
                                                    var body =
                                                        "'use strict';                                                \n\
        var ret = function (Parameters) {                                    \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._captureStackTrace();                                    \n\
            var nodeback = nodebackForPromise(promise, " +
                                                        multiArgs +
                                                        ");   \n\
            var ret;                                                         \n\
            var callback = tryCatch([GetFunctionCode]);                      \n\
            switch(len) {                                                    \n\
                [CodeForSwitchCase]                                          \n\
            }                                                                \n\
            if (ret === errorObj) {                                          \n\
                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
            }                                                                \n\
            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
            return promise;                                                  \n\
        };                                                                   \n\
        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
        return ret;                                                          \n\
    "
                                                            .replace(
                                                                "[CodeForSwitchCase]",
                                                                generateArgumentSwitchCase()
                                                            )
                                                            .replace(
                                                                "[GetFunctionCode]",
                                                                getFunctionCode
                                                            );
                                                    body = body.replace(
                                                        "Parameters",
                                                        parameterDeclaration(
                                                            newParameterCount
                                                        )
                                                    );
                                                    return new Function(
                                                        "Promise",
                                                        "fn",
                                                        "receiver",
                                                        "withAppended",
                                                        "maybeWrapAsError",
                                                        "nodebackForPromise",
                                                        "tryCatch",
                                                        "errorObj",
                                                        "notEnumerableProp",
                                                        "INTERNAL",
                                                        body
                                                    )(
                                                        Promise,
                                                        fn,
                                                        receiver,
                                                        withAppended,
                                                        maybeWrapAsError,
                                                        nodebackForPromise,
                                                        util.tryCatch,
                                                        util.errorObj,
                                                        util.notEnumerableProp,
                                                        INTERNAL
                                                    );
                                                };
                                            }

                                            function makeNodePromisifiedClosure(
                                                callback,
                                                receiver,
                                                _,
                                                fn,
                                                __,
                                                multiArgs
                                            ) {
                                                var defaultThis = (function() {
                                                    return this;
                                                })();
                                                var method = callback;
                                                if (typeof method === "string") {
                                                    callback = fn;
                                                }
                                                function promisified() {
                                                    var _receiver = receiver;
                                                    if (receiver === THIS)
                                                        _receiver = this;
                                                    var promise = new Promise(INTERNAL);
                                                    promise._captureStackTrace();
                                                    var cb =
                                                        typeof method === "string" &&
                                                        this !== defaultThis
                                                            ? this[method]
                                                            : callback;
                                                    var fn = nodebackForPromise(
                                                        promise,
                                                        multiArgs
                                                    );
                                                    try {
                                                        cb.apply(
                                                            _receiver,
                                                            withAppended(arguments, fn)
                                                        );
                                                    } catch (e) {
                                                        promise._rejectCallback(
                                                            maybeWrapAsError(e),
                                                            true,
                                                            true
                                                        );
                                                    }
                                                    if (!promise._isFateSealed())
                                                        promise._setAsyncGuaranteed();
                                                    return promise;
                                                }
                                                util.notEnumerableProp(
                                                    promisified,
                                                    "__isPromisified__",
                                                    true
                                                );
                                                return promisified;
                                            }

                                            var makeNodePromisified = canEvaluate
                                                ? makeNodePromisifiedEval
                                                : makeNodePromisifiedClosure;

                                            function promisifyAll(
                                                obj,
                                                suffix,
                                                filter,
                                                promisifier,
                                                multiArgs
                                            ) {
                                                var suffixRegexp = new RegExp(
                                                    escapeIdentRegex(suffix) + "$"
                                                );
                                                var methods = promisifiableMethods(
                                                    obj,
                                                    suffix,
                                                    suffixRegexp,
                                                    filter
                                                );

                                                for (
                                                    var i = 0, len = methods.length;
                                                    i < len;
                                                    i += 2
                                                ) {
                                                    var key = methods[i];
                                                    var fn = methods[i + 1];
                                                    var promisifiedKey = key + suffix;
                                                    if (
                                                        promisifier ===
                                                        makeNodePromisified
                                                    ) {
                                                        obj[
                                                            promisifiedKey
                                                        ] = makeNodePromisified(
                                                            key,
                                                            THIS,
                                                            key,
                                                            fn,
                                                            suffix,
                                                            multiArgs
                                                        );
                                                    } else {
                                                        var promisified = promisifier(
                                                            fn,
                                                            function() {
                                                                return makeNodePromisified(
                                                                    key,
                                                                    THIS,
                                                                    key,
                                                                    fn,
                                                                    suffix,
                                                                    multiArgs
                                                                );
                                                            }
                                                        );
                                                        util.notEnumerableProp(
                                                            promisified,
                                                            "__isPromisified__",
                                                            true
                                                        );
                                                        obj[promisifiedKey] = promisified;
                                                    }
                                                }
                                                util.toFastProperties(obj);
                                                return obj;
                                            }

                                            function promisify(
                                                callback,
                                                receiver,
                                                multiArgs
                                            ) {
                                                return makeNodePromisified(
                                                    callback,
                                                    receiver,
                                                    undefined,
                                                    callback,
                                                    null,
                                                    multiArgs
                                                );
                                            }

                                            Promise.promisify = function(fn, options) {
                                                if (typeof fn !== "function") {
                                                    throw new TypeError(
                                                        "expecting a function but got " +
                                                            util.classString(fn)
                                                    );
                                                }
                                                if (isPromisified(fn)) {
                                                    return fn;
                                                }
                                                options = Object(options);
                                                var receiver =
                                                    options.context === undefined
                                                        ? THIS
                                                        : options.context;
                                                var multiArgs = !!options.multiArgs;
                                                var ret = promisify(
                                                    fn,
                                                    receiver,
                                                    multiArgs
                                                );
                                                util.copyDescriptors(
                                                    fn,
                                                    ret,
                                                    propsFilter
                                                );
                                                return ret;
                                            };

                                            Promise.promisifyAll = function(
                                                target,
                                                options
                                            ) {
                                                if (
                                                    typeof target !== "function" &&
                                                    typeof target !== "object"
                                                ) {
                                                    throw new TypeError(
                                                        "the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                                                    );
                                                }
                                                options = Object(options);
                                                var multiArgs = !!options.multiArgs;
                                                var suffix = options.suffix;
                                                if (typeof suffix !== "string")
                                                    suffix = defaultSuffix;
                                                var filter = options.filter;
                                                if (typeof filter !== "function")
                                                    filter = defaultFilter;
                                                var promisifier = options.promisifier;
                                                if (typeof promisifier !== "function")
                                                    promisifier = makeNodePromisified;

                                                if (!util.isIdentifier(suffix)) {
                                                    throw new RangeError(
                                                        "suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                                                    );
                                                }

                                                var keys = util.inheritedDataKeys(target);
                                                for (var i = 0; i < keys.length; ++i) {
                                                    var value = target[keys[i]];
                                                    if (
                                                        keys[i] !== "constructor" &&
                                                        util.isClass(value)
                                                    ) {
                                                        promisifyAll(
                                                            value.prototype,
                                                            suffix,
                                                            filter,
                                                            promisifier,
                                                            multiArgs
                                                        );
                                                        promisifyAll(
                                                            value,
                                                            suffix,
                                                            filter,
                                                            promisifier,
                                                            multiArgs
                                                        );
                                                    }
                                                }

                                                return promisifyAll(
                                                    target,
                                                    suffix,
                                                    filter,
                                                    promisifier,
                                                    multiArgs
                                                );
                                            };
                                        };
                                    },
                                    { "./errors": 12, "./nodeback": 20, "./util": 36 }
                                ],
                                25: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(
                                            Promise,
                                            PromiseArray,
                                            tryConvertToPromise,
                                            apiRejection
                                        ) {
                                            var util = _dereq_("./util");
                                            var isObject = util.isObject;
                                            var es5 = _dereq_("./es5");
                                            var Es6Map;
                                            if (typeof Map === "function") Es6Map = Map;

                                            var mapToEntries = (function() {
                                                var index = 0;
                                                var size = 0;

                                                function extractEntry(value, key) {
                                                    this[index] = value;
                                                    this[index + size] = key;
                                                    index++;
                                                }

                                                return function mapToEntries(map) {
                                                    size = map.size;
                                                    index = 0;
                                                    var ret = new Array(map.size * 2);
                                                    map.forEach(extractEntry, ret);
                                                    return ret;
                                                };
                                            })();

                                            var entriesToMap = function(entries) {
                                                var ret = new Es6Map();
                                                var length = (entries.length / 2) | 0;
                                                for (var i = 0; i < length; ++i) {
                                                    var key = entries[length + i];
                                                    var value = entries[i];
                                                    ret.set(key, value);
                                                }
                                                return ret;
                                            };

                                            function PropertiesPromiseArray(obj) {
                                                var isMap = false;
                                                var entries;
                                                if (
                                                    Es6Map !== undefined &&
                                                    obj instanceof Es6Map
                                                ) {
                                                    entries = mapToEntries(obj);
                                                    isMap = true;
                                                } else {
                                                    var keys = es5.keys(obj);
                                                    var len = keys.length;
                                                    entries = new Array(len * 2);
                                                    for (var i = 0; i < len; ++i) {
                                                        var key = keys[i];
                                                        entries[i] = obj[key];
                                                        entries[i + len] = key;
                                                    }
                                                }
                                                this.constructor$(entries);
                                                this._isMap = isMap;
                                                this._init$(undefined, isMap ? -6 : -3);
                                            }
                                            util.inherits(
                                                PropertiesPromiseArray,
                                                PromiseArray
                                            );

                                            PropertiesPromiseArray.prototype._init = function() {};

                                            PropertiesPromiseArray.prototype._promiseFulfilled = function(
                                                value,
                                                index
                                            ) {
                                                this._values[index] = value;
                                                var totalResolved = ++this._totalResolved;
                                                if (totalResolved >= this._length) {
                                                    var val;
                                                    if (this._isMap) {
                                                        val = entriesToMap(this._values);
                                                    } else {
                                                        val = {};
                                                        var keyOffset = this.length();
                                                        for (
                                                            var i = 0,
                                                                len = this.length();
                                                            i < len;
                                                            ++i
                                                        ) {
                                                            val[
                                                                this._values[
                                                                    i + keyOffset
                                                                ]
                                                            ] = this._values[i];
                                                        }
                                                    }
                                                    this._resolve(val);
                                                    return true;
                                                }
                                                return false;
                                            };

                                            PropertiesPromiseArray.prototype.shouldCopyValues = function() {
                                                return false;
                                            };

                                            PropertiesPromiseArray.prototype.getActualLength = function(
                                                len
                                            ) {
                                                return len >> 1;
                                            };

                                            function props(promises) {
                                                var ret;
                                                var castValue = tryConvertToPromise(
                                                    promises
                                                );

                                                if (!isObject(castValue)) {
                                                    return apiRejection(
                                                        "cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                                                    );
                                                } else if (castValue instanceof Promise) {
                                                    ret = castValue._then(
                                                        Promise.props,
                                                        undefined,
                                                        undefined,
                                                        undefined,
                                                        undefined
                                                    );
                                                } else {
                                                    ret = new PropertiesPromiseArray(
                                                        castValue
                                                    ).promise();
                                                }

                                                if (castValue instanceof Promise) {
                                                    ret._propagateFrom(castValue, 2);
                                                }
                                                return ret;
                                            }

                                            Promise.prototype.props = function() {
                                                return props(this);
                                            };

                                            Promise.props = function(promises) {
                                                return props(promises);
                                            };
                                        };
                                    },
                                    { "./es5": 13, "./util": 36 }
                                ],
                                26: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        function arrayMove(
                                            src,
                                            srcIndex,
                                            dst,
                                            dstIndex,
                                            len
                                        ) {
                                            for (var j = 0; j < len; ++j) {
                                                dst[j + dstIndex] = src[j + srcIndex];
                                                src[j + srcIndex] = void 0;
                                            }
                                        }

                                        function Queue(capacity) {
                                            this._capacity = capacity;
                                            this._length = 0;
                                            this._front = 0;
                                        }

                                        Queue.prototype._willBeOverCapacity = function(
                                            size
                                        ) {
                                            return this._capacity < size;
                                        };

                                        Queue.prototype._pushOne = function(arg) {
                                            var length = this.length();
                                            this._checkCapacity(length + 1);
                                            var i =
                                                (this._front + length) &
                                                (this._capacity - 1);
                                            this[i] = arg;
                                            this._length = length + 1;
                                        };

                                        Queue.prototype.push = function(
                                            fn,
                                            receiver,
                                            arg
                                        ) {
                                            var length = this.length() + 3;
                                            if (this._willBeOverCapacity(length)) {
                                                this._pushOne(fn);
                                                this._pushOne(receiver);
                                                this._pushOne(arg);
                                                return;
                                            }
                                            var j = this._front + length - 3;
                                            this._checkCapacity(length);
                                            var wrapMask = this._capacity - 1;
                                            this[(j + 0) & wrapMask] = fn;
                                            this[(j + 1) & wrapMask] = receiver;
                                            this[(j + 2) & wrapMask] = arg;
                                            this._length = length;
                                        };

                                        Queue.prototype.shift = function() {
                                            var front = this._front,
                                                ret = this[front];

                                            this[front] = undefined;
                                            this._front =
                                                (front + 1) & (this._capacity - 1);
                                            this._length--;
                                            return ret;
                                        };

                                        Queue.prototype.length = function() {
                                            return this._length;
                                        };

                                        Queue.prototype._checkCapacity = function(size) {
                                            if (this._capacity < size) {
                                                this._resizeTo(this._capacity << 1);
                                            }
                                        };

                                        Queue.prototype._resizeTo = function(capacity) {
                                            var oldCapacity = this._capacity;
                                            this._capacity = capacity;
                                            var front = this._front;
                                            var length = this._length;
                                            var moveItemsCount =
                                                (front + length) & (oldCapacity - 1);
                                            arrayMove(
                                                this,
                                                0,
                                                this,
                                                oldCapacity,
                                                moveItemsCount
                                            );
                                        };

                                        module.exports = Queue;
                                    },
                                    {}
                                ],
                                27: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(
                                            Promise,
                                            INTERNAL,
                                            tryConvertToPromise,
                                            apiRejection
                                        ) {
                                            var util = _dereq_("./util");

                                            var raceLater = function(promise) {
                                                return promise.then(function(array) {
                                                    return race(array, promise);
                                                });
                                            };

                                            function race(promises, parent) {
                                                var maybePromise = tryConvertToPromise(
                                                    promises
                                                );

                                                if (maybePromise instanceof Promise) {
                                                    return raceLater(maybePromise);
                                                } else {
                                                    promises = util.asArray(promises);
                                                    if (promises === null)
                                                        return apiRejection(
                                                            "expecting an array or an iterable object but got " +
                                                                util.classString(promises)
                                                        );
                                                }

                                                var ret = new Promise(INTERNAL);
                                                if (parent !== undefined) {
                                                    ret._propagateFrom(parent, 3);
                                                }
                                                var fulfill = ret._fulfill;
                                                var reject = ret._reject;
                                                for (
                                                    var i = 0, len = promises.length;
                                                    i < len;
                                                    ++i
                                                ) {
                                                    var val = promises[i];

                                                    if (
                                                        val === undefined &&
                                                        !(i in promises)
                                                    ) {
                                                        continue;
                                                    }

                                                    Promise.cast(val)._then(
                                                        fulfill,
                                                        reject,
                                                        undefined,
                                                        ret,
                                                        null
                                                    );
                                                }
                                                return ret;
                                            }

                                            Promise.race = function(promises) {
                                                return race(promises, undefined);
                                            };

                                            Promise.prototype.race = function() {
                                                return race(this, undefined);
                                            };
                                        };
                                    },
                                    { "./util": 36 }
                                ],
                                28: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(
                                            Promise,
                                            PromiseArray,
                                            apiRejection,
                                            tryConvertToPromise,
                                            INTERNAL,
                                            debug
                                        ) {
                                            var getDomain = Promise._getDomain;
                                            var util = _dereq_("./util");
                                            var tryCatch = util.tryCatch;

                                            function ReductionPromiseArray(
                                                promises,
                                                fn,
                                                initialValue,
                                                _each
                                            ) {
                                                this.constructor$(promises);
                                                var domain = getDomain();
                                                this._fn =
                                                    domain === null
                                                        ? fn
                                                        : util.domainBind(domain, fn);
                                                if (initialValue !== undefined) {
                                                    initialValue = Promise.resolve(
                                                        initialValue
                                                    );
                                                    initialValue._attachCancellationCallback(
                                                        this
                                                    );
                                                }
                                                this._initialValue = initialValue;
                                                this._currentCancellable = null;
                                                if (_each === INTERNAL) {
                                                    this._eachValues = Array(
                                                        this._length
                                                    );
                                                } else if (_each === 0) {
                                                    this._eachValues = null;
                                                } else {
                                                    this._eachValues = undefined;
                                                }
                                                this._promise._captureStackTrace();
                                                this._init$(undefined, -5);
                                            }
                                            util.inherits(
                                                ReductionPromiseArray,
                                                PromiseArray
                                            );

                                            ReductionPromiseArray.prototype._gotAccum = function(
                                                accum
                                            ) {
                                                if (
                                                    this._eachValues !== undefined &&
                                                    this._eachValues !== null &&
                                                    accum !== INTERNAL
                                                ) {
                                                    this._eachValues.push(accum);
                                                }
                                            };

                                            ReductionPromiseArray.prototype._eachComplete = function(
                                                value
                                            ) {
                                                if (this._eachValues !== null) {
                                                    this._eachValues.push(value);
                                                }
                                                return this._eachValues;
                                            };

                                            ReductionPromiseArray.prototype._init = function() {};

                                            ReductionPromiseArray.prototype._resolveEmptyArray = function() {
                                                this._resolve(
                                                    this._eachValues !== undefined
                                                        ? this._eachValues
                                                        : this._initialValue
                                                );
                                            };

                                            ReductionPromiseArray.prototype.shouldCopyValues = function() {
                                                return false;
                                            };

                                            ReductionPromiseArray.prototype._resolve = function(
                                                value
                                            ) {
                                                this._promise._resolveCallback(value);
                                                this._values = null;
                                            };

                                            ReductionPromiseArray.prototype._resultCancelled = function(
                                                sender
                                            ) {
                                                if (sender === this._initialValue)
                                                    return this._cancel();
                                                if (this._isResolved()) return;
                                                this._resultCancelled$();
                                                if (
                                                    this._currentCancellable instanceof
                                                    Promise
                                                ) {
                                                    this._currentCancellable.cancel();
                                                }
                                                if (
                                                    this._initialValue instanceof Promise
                                                ) {
                                                    this._initialValue.cancel();
                                                }
                                            };

                                            ReductionPromiseArray.prototype._iterate = function(
                                                values
                                            ) {
                                                this._values = values;
                                                var value;
                                                var i;
                                                var length = values.length;
                                                if (this._initialValue !== undefined) {
                                                    value = this._initialValue;
                                                    i = 0;
                                                } else {
                                                    value = Promise.resolve(values[0]);
                                                    i = 1;
                                                }

                                                this._currentCancellable = value;

                                                if (!value.isRejected()) {
                                                    for (; i < length; ++i) {
                                                        var ctx = {
                                                            accum: null,
                                                            value: values[i],
                                                            index: i,
                                                            length: length,
                                                            array: this
                                                        };
                                                        value = value._then(
                                                            gotAccum,
                                                            undefined,
                                                            undefined,
                                                            ctx,
                                                            undefined
                                                        );
                                                    }
                                                }

                                                if (this._eachValues !== undefined) {
                                                    value = value._then(
                                                        this._eachComplete,
                                                        undefined,
                                                        undefined,
                                                        this,
                                                        undefined
                                                    );
                                                }
                                                value._then(
                                                    completed,
                                                    completed,
                                                    undefined,
                                                    value,
                                                    this
                                                );
                                            };

                                            Promise.prototype.reduce = function(
                                                fn,
                                                initialValue
                                            ) {
                                                return reduce(
                                                    this,
                                                    fn,
                                                    initialValue,
                                                    null
                                                );
                                            };

                                            Promise.reduce = function(
                                                promises,
                                                fn,
                                                initialValue,
                                                _each
                                            ) {
                                                return reduce(
                                                    promises,
                                                    fn,
                                                    initialValue,
                                                    _each
                                                );
                                            };

                                            function completed(valueOrReason, array) {
                                                if (this.isFulfilled()) {
                                                    array._resolve(valueOrReason);
                                                } else {
                                                    array._reject(valueOrReason);
                                                }
                                            }

                                            function reduce(
                                                promises,
                                                fn,
                                                initialValue,
                                                _each
                                            ) {
                                                if (typeof fn !== "function") {
                                                    return apiRejection(
                                                        "expecting a function but got " +
                                                            util.classString(fn)
                                                    );
                                                }
                                                var array = new ReductionPromiseArray(
                                                    promises,
                                                    fn,
                                                    initialValue,
                                                    _each
                                                );
                                                return array.promise();
                                            }

                                            function gotAccum(accum) {
                                                this.accum = accum;
                                                this.array._gotAccum(accum);
                                                var value = tryConvertToPromise(
                                                    this.value,
                                                    this.array._promise
                                                );
                                                if (value instanceof Promise) {
                                                    this.array._currentCancellable = value;
                                                    return value._then(
                                                        gotValue,
                                                        undefined,
                                                        undefined,
                                                        this,
                                                        undefined
                                                    );
                                                } else {
                                                    return gotValue.call(this, value);
                                                }
                                            }

                                            function gotValue(value) {
                                                var array = this.array;
                                                var promise = array._promise;
                                                var fn = tryCatch(array._fn);
                                                promise._pushContext();
                                                var ret;
                                                if (array._eachValues !== undefined) {
                                                    ret = fn.call(
                                                        promise._boundValue(),
                                                        value,
                                                        this.index,
                                                        this.length
                                                    );
                                                } else {
                                                    ret = fn.call(
                                                        promise._boundValue(),
                                                        this.accum,
                                                        value,
                                                        this.index,
                                                        this.length
                                                    );
                                                }
                                                if (ret instanceof Promise) {
                                                    array._currentCancellable = ret;
                                                }
                                                var promiseCreated = promise._popContext();
                                                debug.checkForgottenReturns(
                                                    ret,
                                                    promiseCreated,
                                                    array._eachValues !== undefined
                                                        ? "Promise.each"
                                                        : "Promise.reduce",
                                                    promise
                                                );
                                                return ret;
                                            }
                                        };
                                    },
                                    { "./util": 36 }
                                ],
                                29: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        var util = _dereq_("./util");
                                        var schedule;
                                        var noAsyncScheduler = function() {
                                            throw new Error(
                                                "No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                                            );
                                        };
                                        var NativePromise = util.getNativePromise();
                                        if (
                                            util.isNode &&
                                            typeof MutationObserver === "undefined"
                                        ) {
                                            var GlobalSetImmediate = global.setImmediate;
                                            var ProcessNextTick = process.nextTick;
                                            schedule = util.isRecentNode
                                                ? function(fn) {
                                                      GlobalSetImmediate.call(global, fn);
                                                  }
                                                : function(fn) {
                                                      ProcessNextTick.call(process, fn);
                                                  };
                                        } else if (
                                            typeof NativePromise === "function" &&
                                            typeof NativePromise.resolve === "function"
                                        ) {
                                            var nativePromise = NativePromise.resolve();
                                            schedule = function(fn) {
                                                nativePromise.then(fn);
                                            };
                                        } else if (
                                            typeof MutationObserver !== "undefined" &&
                                            !(
                                                typeof window !== "undefined" &&
                                                window.navigator &&
                                                (window.navigator.standalone ||
                                                    window.cordova)
                                            )
                                        ) {
                                            schedule = (function() {
                                                var div = document.createElement("div");
                                                var opts = { attributes: true };
                                                var toggleScheduled = false;
                                                var div2 = document.createElement("div");
                                                var o2 = new MutationObserver(function() {
                                                    div.classList.toggle("foo");
                                                    toggleScheduled = false;
                                                });
                                                o2.observe(div2, opts);

                                                var scheduleToggle = function() {
                                                    if (toggleScheduled) return;
                                                    toggleScheduled = true;
                                                    div2.classList.toggle("foo");
                                                };

                                                return function schedule(fn) {
                                                    var o = new MutationObserver(
                                                        function() {
                                                            o.disconnect();
                                                            fn();
                                                        }
                                                    );
                                                    o.observe(div, opts);
                                                    scheduleToggle();
                                                };
                                            })();
                                        } else if (typeof setImmediate !== "undefined") {
                                            schedule = function(fn) {
                                                setImmediate(fn);
                                            };
                                        } else if (typeof setTimeout !== "undefined") {
                                            schedule = function(fn) {
                                                setTimeout(fn, 0);
                                            };
                                        } else {
                                            schedule = noAsyncScheduler;
                                        }
                                        module.exports = schedule;
                                    },
                                    { "./util": 36 }
                                ],
                                30: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(
                                            Promise,
                                            PromiseArray,
                                            debug
                                        ) {
                                            var PromiseInspection =
                                                Promise.PromiseInspection;
                                            var util = _dereq_("./util");

                                            function SettledPromiseArray(values) {
                                                this.constructor$(values);
                                            }
                                            util.inherits(
                                                SettledPromiseArray,
                                                PromiseArray
                                            );

                                            SettledPromiseArray.prototype._promiseResolved = function(
                                                index,
                                                inspection
                                            ) {
                                                this._values[index] = inspection;
                                                var totalResolved = ++this._totalResolved;
                                                if (totalResolved >= this._length) {
                                                    this._resolve(this._values);
                                                    return true;
                                                }
                                                return false;
                                            };

                                            SettledPromiseArray.prototype._promiseFulfilled = function(
                                                value,
                                                index
                                            ) {
                                                var ret = new PromiseInspection();
                                                ret._bitField = 33554432;
                                                ret._settledValueField = value;
                                                return this._promiseResolved(index, ret);
                                            };
                                            SettledPromiseArray.prototype._promiseRejected = function(
                                                reason,
                                                index
                                            ) {
                                                var ret = new PromiseInspection();
                                                ret._bitField = 16777216;
                                                ret._settledValueField = reason;
                                                return this._promiseResolved(index, ret);
                                            };

                                            Promise.settle = function(promises) {
                                                debug.deprecated(
                                                    ".settle()",
                                                    ".reflect()"
                                                );
                                                return new SettledPromiseArray(
                                                    promises
                                                ).promise();
                                            };

                                            Promise.prototype.settle = function() {
                                                return Promise.settle(this);
                                            };
                                        };
                                    },
                                    { "./util": 36 }
                                ],
                                31: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(
                                            Promise,
                                            PromiseArray,
                                            apiRejection
                                        ) {
                                            var util = _dereq_("./util");
                                            var RangeError = _dereq_("./errors")
                                                .RangeError;
                                            var AggregateError = _dereq_("./errors")
                                                .AggregateError;
                                            var isArray = util.isArray;
                                            var CANCELLATION = {};

                                            function SomePromiseArray(values) {
                                                this.constructor$(values);
                                                this._howMany = 0;
                                                this._unwrap = false;
                                                this._initialized = false;
                                            }
                                            util.inherits(SomePromiseArray, PromiseArray);

                                            SomePromiseArray.prototype._init = function() {
                                                if (!this._initialized) {
                                                    return;
                                                }
                                                if (this._howMany === 0) {
                                                    this._resolve([]);
                                                    return;
                                                }
                                                this._init$(undefined, -5);
                                                var isArrayResolved = isArray(
                                                    this._values
                                                );
                                                if (
                                                    !this._isResolved() &&
                                                    isArrayResolved &&
                                                    this._howMany >
                                                        this._canPossiblyFulfill()
                                                ) {
                                                    this._reject(
                                                        this._getRangeError(this.length())
                                                    );
                                                }
                                            };

                                            SomePromiseArray.prototype.init = function() {
                                                this._initialized = true;
                                                this._init();
                                            };

                                            SomePromiseArray.prototype.setUnwrap = function() {
                                                this._unwrap = true;
                                            };

                                            SomePromiseArray.prototype.howMany = function() {
                                                return this._howMany;
                                            };

                                            SomePromiseArray.prototype.setHowMany = function(
                                                count
                                            ) {
                                                this._howMany = count;
                                            };

                                            SomePromiseArray.prototype._promiseFulfilled = function(
                                                value
                                            ) {
                                                this._addFulfilled(value);
                                                if (
                                                    this._fulfilled() === this.howMany()
                                                ) {
                                                    this._values.length = this.howMany();
                                                    if (
                                                        this.howMany() === 1 &&
                                                        this._unwrap
                                                    ) {
                                                        this._resolve(this._values[0]);
                                                    } else {
                                                        this._resolve(this._values);
                                                    }
                                                    return true;
                                                }
                                                return false;
                                            };
                                            SomePromiseArray.prototype._promiseRejected = function(
                                                reason
                                            ) {
                                                this._addRejected(reason);
                                                return this._checkOutcome();
                                            };

                                            SomePromiseArray.prototype._promiseCancelled = function() {
                                                if (
                                                    this._values instanceof Promise ||
                                                    this._values == null
                                                ) {
                                                    return this._cancel();
                                                }
                                                this._addRejected(CANCELLATION);
                                                return this._checkOutcome();
                                            };

                                            SomePromiseArray.prototype._checkOutcome = function() {
                                                if (
                                                    this.howMany() >
                                                    this._canPossiblyFulfill()
                                                ) {
                                                    var e = new AggregateError();
                                                    for (
                                                        var i = this.length();
                                                        i < this._values.length;
                                                        ++i
                                                    ) {
                                                        if (
                                                            this._values[i] !==
                                                            CANCELLATION
                                                        ) {
                                                            e.push(this._values[i]);
                                                        }
                                                    }
                                                    if (e.length > 0) {
                                                        this._reject(e);
                                                    } else {
                                                        this._cancel();
                                                    }
                                                    return true;
                                                }
                                                return false;
                                            };

                                            SomePromiseArray.prototype._fulfilled = function() {
                                                return this._totalResolved;
                                            };

                                            SomePromiseArray.prototype._rejected = function() {
                                                return (
                                                    this._values.length - this.length()
                                                );
                                            };

                                            SomePromiseArray.prototype._addRejected = function(
                                                reason
                                            ) {
                                                this._values.push(reason);
                                            };

                                            SomePromiseArray.prototype._addFulfilled = function(
                                                value
                                            ) {
                                                this._values[
                                                    this._totalResolved++
                                                ] = value;
                                            };

                                            SomePromiseArray.prototype._canPossiblyFulfill = function() {
                                                return this.length() - this._rejected();
                                            };

                                            SomePromiseArray.prototype._getRangeError = function(
                                                count
                                            ) {
                                                var message =
                                                    "Input array must contain at least " +
                                                    this._howMany +
                                                    " items but contains only " +
                                                    count +
                                                    " items";
                                                return new RangeError(message);
                                            };

                                            SomePromiseArray.prototype._resolveEmptyArray = function() {
                                                this._reject(this._getRangeError(0));
                                            };

                                            function some(promises, howMany) {
                                                if (
                                                    (howMany | 0) !== howMany ||
                                                    howMany < 0
                                                ) {
                                                    return apiRejection(
                                                        "expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                                                    );
                                                }
                                                var ret = new SomePromiseArray(promises);
                                                var promise = ret.promise();
                                                ret.setHowMany(howMany);
                                                ret.init();
                                                return promise;
                                            }

                                            Promise.some = function(promises, howMany) {
                                                return some(promises, howMany);
                                            };

                                            Promise.prototype.some = function(howMany) {
                                                return some(this, howMany);
                                            };

                                            Promise._SomePromiseArray = SomePromiseArray;
                                        };
                                    },
                                    { "./errors": 12, "./util": 36 }
                                ],
                                32: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(Promise) {
                                            function PromiseInspection(promise) {
                                                if (promise !== undefined) {
                                                    promise = promise._target();
                                                    this._bitField = promise._bitField;
                                                    this._settledValueField = promise._isFateSealed()
                                                        ? promise._settledValue()
                                                        : undefined;
                                                } else {
                                                    this._bitField = 0;
                                                    this._settledValueField = undefined;
                                                }
                                            }

                                            PromiseInspection.prototype._settledValue = function() {
                                                return this._settledValueField;
                                            };

                                            var value = (PromiseInspection.prototype.value = function() {
                                                if (!this.isFulfilled()) {
                                                    throw new TypeError(
                                                        "cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                                                    );
                                                }
                                                return this._settledValue();
                                            });

                                            var reason = (PromiseInspection.prototype.error = PromiseInspection.prototype.reason = function() {
                                                if (!this.isRejected()) {
                                                    throw new TypeError(
                                                        "cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                                                    );
                                                }
                                                return this._settledValue();
                                            });

                                            var isFulfilled = (PromiseInspection.prototype.isFulfilled = function() {
                                                return (this._bitField & 33554432) !== 0;
                                            });

                                            var isRejected = (PromiseInspection.prototype.isRejected = function() {
                                                return (this._bitField & 16777216) !== 0;
                                            });

                                            var isPending = (PromiseInspection.prototype.isPending = function() {
                                                return (this._bitField & 50397184) === 0;
                                            });

                                            var isResolved = (PromiseInspection.prototype.isResolved = function() {
                                                return (this._bitField & 50331648) !== 0;
                                            });

                                            PromiseInspection.prototype.isCancelled = function() {
                                                return (this._bitField & 8454144) !== 0;
                                            };

                                            Promise.prototype.__isCancelled = function() {
                                                return (this._bitField & 65536) === 65536;
                                            };

                                            Promise.prototype._isCancelled = function() {
                                                return this._target().__isCancelled();
                                            };

                                            Promise.prototype.isCancelled = function() {
                                                return (
                                                    (this._target()._bitField &
                                                        8454144) !==
                                                    0
                                                );
                                            };

                                            Promise.prototype.isPending = function() {
                                                return isPending.call(this._target());
                                            };

                                            Promise.prototype.isRejected = function() {
                                                return isRejected.call(this._target());
                                            };

                                            Promise.prototype.isFulfilled = function() {
                                                return isFulfilled.call(this._target());
                                            };

                                            Promise.prototype.isResolved = function() {
                                                return isResolved.call(this._target());
                                            };

                                            Promise.prototype.value = function() {
                                                return value.call(this._target());
                                            };

                                            Promise.prototype.reason = function() {
                                                var target = this._target();
                                                target._unsetRejectionIsUnhandled();
                                                return reason.call(target);
                                            };

                                            Promise.prototype._value = function() {
                                                return this._settledValue();
                                            };

                                            Promise.prototype._reason = function() {
                                                this._unsetRejectionIsUnhandled();
                                                return this._settledValue();
                                            };

                                            Promise.PromiseInspection = PromiseInspection;
                                        };
                                    },
                                    {}
                                ],
                                33: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(Promise, INTERNAL) {
                                            var util = _dereq_("./util");
                                            var errorObj = util.errorObj;
                                            var isObject = util.isObject;

                                            function tryConvertToPromise(obj, context) {
                                                if (isObject(obj)) {
                                                    if (obj instanceof Promise)
                                                        return obj;
                                                    var then = getThen(obj);
                                                    if (then === errorObj) {
                                                        if (context)
                                                            context._pushContext();
                                                        var ret = Promise.reject(then.e);
                                                        if (context)
                                                            context._popContext();
                                                        return ret;
                                                    } else if (
                                                        typeof then === "function"
                                                    ) {
                                                        if (isAnyBluebirdPromise(obj)) {
                                                            var ret = new Promise(
                                                                INTERNAL
                                                            );
                                                            obj._then(
                                                                ret._fulfill,
                                                                ret._reject,
                                                                undefined,
                                                                ret,
                                                                null
                                                            );
                                                            return ret;
                                                        }
                                                        return doThenable(
                                                            obj,
                                                            then,
                                                            context
                                                        );
                                                    }
                                                }
                                                return obj;
                                            }

                                            function doGetThen(obj) {
                                                return obj.then;
                                            }

                                            function getThen(obj) {
                                                try {
                                                    return doGetThen(obj);
                                                } catch (e) {
                                                    errorObj.e = e;
                                                    return errorObj;
                                                }
                                            }

                                            var hasProp = {}.hasOwnProperty;
                                            function isAnyBluebirdPromise(obj) {
                                                try {
                                                    return hasProp.call(obj, "_promise0");
                                                } catch (e) {
                                                    return false;
                                                }
                                            }

                                            function doThenable(x, then, context) {
                                                var promise = new Promise(INTERNAL);
                                                var ret = promise;
                                                if (context) context._pushContext();
                                                promise._captureStackTrace();
                                                if (context) context._popContext();
                                                var synchronous = true;
                                                var result = util
                                                    .tryCatch(then)
                                                    .call(x, resolve, reject);
                                                synchronous = false;

                                                if (promise && result === errorObj) {
                                                    promise._rejectCallback(
                                                        result.e,
                                                        true,
                                                        true
                                                    );
                                                    promise = null;
                                                }

                                                function resolve(value) {
                                                    if (!promise) return;
                                                    promise._resolveCallback(value);
                                                    promise = null;
                                                }

                                                function reject(reason) {
                                                    if (!promise) return;
                                                    promise._rejectCallback(
                                                        reason,
                                                        synchronous,
                                                        true
                                                    );
                                                    promise = null;
                                                }
                                                return ret;
                                            }

                                            return tryConvertToPromise;
                                        };
                                    },
                                    { "./util": 36 }
                                ],
                                34: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(
                                            Promise,
                                            INTERNAL,
                                            debug
                                        ) {
                                            var util = _dereq_("./util");
                                            var TimeoutError = Promise.TimeoutError;

                                            function HandleWrapper(handle) {
                                                this.handle = handle;
                                            }

                                            HandleWrapper.prototype._resultCancelled = function() {
                                                clearTimeout(this.handle);
                                            };

                                            var afterValue = function(value) {
                                                return delay(+this).thenReturn(value);
                                            };
                                            var delay = (Promise.delay = function(
                                                ms,
                                                value
                                            ) {
                                                var ret;
                                                var handle;
                                                if (value !== undefined) {
                                                    ret = Promise.resolve(value)._then(
                                                        afterValue,
                                                        null,
                                                        null,
                                                        ms,
                                                        undefined
                                                    );
                                                    if (
                                                        debug.cancellation() &&
                                                        value instanceof Promise
                                                    ) {
                                                        ret._setOnCancel(value);
                                                    }
                                                } else {
                                                    ret = new Promise(INTERNAL);
                                                    handle = setTimeout(function() {
                                                        ret._fulfill();
                                                    }, +ms);
                                                    if (debug.cancellation()) {
                                                        ret._setOnCancel(
                                                            new HandleWrapper(handle)
                                                        );
                                                    }
                                                    ret._captureStackTrace();
                                                }
                                                ret._setAsyncGuaranteed();
                                                return ret;
                                            });

                                            Promise.prototype.delay = function(ms) {
                                                return delay(ms, this);
                                            };

                                            var afterTimeout = function(
                                                promise,
                                                message,
                                                parent
                                            ) {
                                                var err;
                                                if (typeof message !== "string") {
                                                    if (message instanceof Error) {
                                                        err = message;
                                                    } else {
                                                        err = new TimeoutError(
                                                            "operation timed out"
                                                        );
                                                    }
                                                } else {
                                                    err = new TimeoutError(message);
                                                }
                                                util.markAsOriginatingFromRejection(err);
                                                promise._attachExtraTrace(err);
                                                promise._reject(err);

                                                if (parent != null) {
                                                    parent.cancel();
                                                }
                                            };

                                            function successClear(value) {
                                                clearTimeout(this.handle);
                                                return value;
                                            }

                                            function failureClear(reason) {
                                                clearTimeout(this.handle);
                                                throw reason;
                                            }

                                            Promise.prototype.timeout = function(
                                                ms,
                                                message
                                            ) {
                                                ms = +ms;
                                                var ret, parent;

                                                var handleWrapper = new HandleWrapper(
                                                    setTimeout(function timeoutTimeout() {
                                                        if (ret.isPending()) {
                                                            afterTimeout(
                                                                ret,
                                                                message,
                                                                parent
                                                            );
                                                        }
                                                    }, ms)
                                                );

                                                if (debug.cancellation()) {
                                                    parent = this.then();
                                                    ret = parent._then(
                                                        successClear,
                                                        failureClear,
                                                        undefined,
                                                        handleWrapper,
                                                        undefined
                                                    );
                                                    ret._setOnCancel(handleWrapper);
                                                } else {
                                                    ret = this._then(
                                                        successClear,
                                                        failureClear,
                                                        undefined,
                                                        handleWrapper,
                                                        undefined
                                                    );
                                                }

                                                return ret;
                                            };
                                        };
                                    },
                                    { "./util": 36 }
                                ],
                                35: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        module.exports = function(
                                            Promise,
                                            apiRejection,
                                            tryConvertToPromise,
                                            createContext,
                                            INTERNAL,
                                            debug
                                        ) {
                                            var util = _dereq_("./util");
                                            var TypeError = _dereq_("./errors").TypeError;
                                            var inherits = _dereq_("./util").inherits;
                                            var errorObj = util.errorObj;
                                            var tryCatch = util.tryCatch;
                                            var NULL = {};

                                            function thrower(e) {
                                                setTimeout(function() {
                                                    throw e;
                                                }, 0);
                                            }

                                            function castPreservingDisposable(thenable) {
                                                var maybePromise = tryConvertToPromise(
                                                    thenable
                                                );
                                                if (
                                                    maybePromise !== thenable &&
                                                    typeof thenable._isDisposable ===
                                                        "function" &&
                                                    typeof thenable._getDisposer ===
                                                        "function" &&
                                                    thenable._isDisposable()
                                                ) {
                                                    maybePromise._setDisposable(
                                                        thenable._getDisposer()
                                                    );
                                                }
                                                return maybePromise;
                                            }
                                            function dispose(resources, inspection) {
                                                var i = 0;
                                                var len = resources.length;
                                                var ret = new Promise(INTERNAL);
                                                function iterator() {
                                                    if (i >= len) return ret._fulfill();
                                                    var maybePromise = castPreservingDisposable(
                                                        resources[i++]
                                                    );
                                                    if (
                                                        maybePromise instanceof Promise &&
                                                        maybePromise._isDisposable()
                                                    ) {
                                                        try {
                                                            maybePromise = tryConvertToPromise(
                                                                maybePromise
                                                                    ._getDisposer()
                                                                    .tryDispose(
                                                                        inspection
                                                                    ),
                                                                resources.promise
                                                            );
                                                        } catch (e) {
                                                            return thrower(e);
                                                        }
                                                        if (
                                                            maybePromise instanceof
                                                            Promise
                                                        ) {
                                                            return maybePromise._then(
                                                                iterator,
                                                                thrower,
                                                                null,
                                                                null,
                                                                null
                                                            );
                                                        }
                                                    }
                                                    iterator();
                                                }
                                                iterator();
                                                return ret;
                                            }

                                            function Disposer(data, promise, context) {
                                                this._data = data;
                                                this._promise = promise;
                                                this._context = context;
                                            }

                                            Disposer.prototype.data = function() {
                                                return this._data;
                                            };

                                            Disposer.prototype.promise = function() {
                                                return this._promise;
                                            };

                                            Disposer.prototype.resource = function() {
                                                if (this.promise().isFulfilled()) {
                                                    return this.promise().value();
                                                }
                                                return NULL;
                                            };

                                            Disposer.prototype.tryDispose = function(
                                                inspection
                                            ) {
                                                var resource = this.resource();
                                                var context = this._context;
                                                if (context !== undefined)
                                                    context._pushContext();
                                                var ret =
                                                    resource !== NULL
                                                        ? this.doDispose(
                                                              resource,
                                                              inspection
                                                          )
                                                        : null;
                                                if (context !== undefined)
                                                    context._popContext();
                                                this._promise._unsetDisposable();
                                                this._data = null;
                                                return ret;
                                            };

                                            Disposer.isDisposer = function(d) {
                                                return (
                                                    d != null &&
                                                    typeof d.resource === "function" &&
                                                    typeof d.tryDispose === "function"
                                                );
                                            };

                                            function FunctionDisposer(
                                                fn,
                                                promise,
                                                context
                                            ) {
                                                this.constructor$(fn, promise, context);
                                            }
                                            inherits(FunctionDisposer, Disposer);

                                            FunctionDisposer.prototype.doDispose = function(
                                                resource,
                                                inspection
                                            ) {
                                                var fn = this.data();
                                                return fn.call(
                                                    resource,
                                                    resource,
                                                    inspection
                                                );
                                            };

                                            function maybeUnwrapDisposer(value) {
                                                if (Disposer.isDisposer(value)) {
                                                    this.resources[
                                                        this.index
                                                    ]._setDisposable(value);
                                                    return value.promise();
                                                }
                                                return value;
                                            }

                                            function ResourceList(length) {
                                                this.length = length;
                                                this.promise = null;
                                                this[length - 1] = null;
                                            }

                                            ResourceList.prototype._resultCancelled = function() {
                                                var len = this.length;
                                                for (var i = 0; i < len; ++i) {
                                                    var item = this[i];
                                                    if (item instanceof Promise) {
                                                        item.cancel();
                                                    }
                                                }
                                            };

                                            Promise.using = function() {
                                                var len = arguments.length;
                                                if (len < 2)
                                                    return apiRejection(
                                                        "you must pass at least 2 arguments to Promise.using"
                                                    );
                                                var fn = arguments[len - 1];
                                                if (typeof fn !== "function") {
                                                    return apiRejection(
                                                        "expecting a function but got " +
                                                            util.classString(fn)
                                                    );
                                                }
                                                var input;
                                                var spreadArgs = true;
                                                if (
                                                    len === 2 &&
                                                    Array.isArray(arguments[0])
                                                ) {
                                                    input = arguments[0];
                                                    len = input.length;
                                                    spreadArgs = false;
                                                } else {
                                                    input = arguments;
                                                    len--;
                                                }
                                                var resources = new ResourceList(len);
                                                for (var i = 0; i < len; ++i) {
                                                    var resource = input[i];
                                                    if (Disposer.isDisposer(resource)) {
                                                        var disposer = resource;
                                                        resource = resource.promise();
                                                        resource._setDisposable(disposer);
                                                    } else {
                                                        var maybePromise = tryConvertToPromise(
                                                            resource
                                                        );
                                                        if (
                                                            maybePromise instanceof
                                                            Promise
                                                        ) {
                                                            resource = maybePromise._then(
                                                                maybeUnwrapDisposer,
                                                                null,
                                                                null,
                                                                {
                                                                    resources: resources,
                                                                    index: i
                                                                },
                                                                undefined
                                                            );
                                                        }
                                                    }
                                                    resources[i] = resource;
                                                }

                                                var reflectedResources = new Array(
                                                    resources.length
                                                );
                                                for (
                                                    var i = 0;
                                                    i < reflectedResources.length;
                                                    ++i
                                                ) {
                                                    reflectedResources[
                                                        i
                                                    ] = Promise.resolve(
                                                        resources[i]
                                                    ).reflect();
                                                }

                                                var resultPromise = Promise.all(
                                                    reflectedResources
                                                ).then(function(inspections) {
                                                    for (
                                                        var i = 0;
                                                        i < inspections.length;
                                                        ++i
                                                    ) {
                                                        var inspection = inspections[i];
                                                        if (inspection.isRejected()) {
                                                            errorObj.e = inspection.error();
                                                            return errorObj;
                                                        } else if (
                                                            !inspection.isFulfilled()
                                                        ) {
                                                            resultPromise.cancel();
                                                            return;
                                                        }
                                                        inspections[
                                                            i
                                                        ] = inspection.value();
                                                    }
                                                    promise._pushContext();

                                                    fn = tryCatch(fn);
                                                    var ret = spreadArgs
                                                        ? fn.apply(undefined, inspections)
                                                        : fn(inspections);
                                                    var promiseCreated = promise._popContext();
                                                    debug.checkForgottenReturns(
                                                        ret,
                                                        promiseCreated,
                                                        "Promise.using",
                                                        promise
                                                    );
                                                    return ret;
                                                });

                                                var promise = resultPromise.lastly(
                                                    function() {
                                                        var inspection = new Promise.PromiseInspection(
                                                            resultPromise
                                                        );
                                                        return dispose(
                                                            resources,
                                                            inspection
                                                        );
                                                    }
                                                );
                                                resources.promise = promise;
                                                promise._setOnCancel(resources);
                                                return promise;
                                            };

                                            Promise.prototype._setDisposable = function(
                                                disposer
                                            ) {
                                                this._bitField = this._bitField | 131072;
                                                this._disposer = disposer;
                                            };

                                            Promise.prototype._isDisposable = function() {
                                                return (this._bitField & 131072) > 0;
                                            };

                                            Promise.prototype._getDisposer = function() {
                                                return this._disposer;
                                            };

                                            Promise.prototype._unsetDisposable = function() {
                                                this._bitField = this._bitField & ~131072;
                                                this._disposer = undefined;
                                            };

                                            Promise.prototype.disposer = function(fn) {
                                                if (typeof fn === "function") {
                                                    return new FunctionDisposer(
                                                        fn,
                                                        this,
                                                        createContext()
                                                    );
                                                }
                                                throw new TypeError();
                                            };
                                        };
                                    },
                                    { "./errors": 12, "./util": 36 }
                                ],
                                36: [
                                    function(_dereq_, module, exports) {
                                        "use strict";
                                        var es5 = _dereq_("./es5");
                                        var canEvaluate = typeof navigator == "undefined";

                                        var errorObj = { e: {} };
                                        var tryCatchTarget;
                                        var globalObject =
                                            typeof self !== "undefined"
                                                ? self
                                                : typeof window !== "undefined"
                                                    ? window
                                                    : typeof global !== "undefined"
                                                        ? global
                                                        : this !== undefined
                                                            ? this
                                                            : null;

                                        function tryCatcher() {
                                            try {
                                                var target = tryCatchTarget;
                                                tryCatchTarget = null;
                                                return target.apply(this, arguments);
                                            } catch (e) {
                                                errorObj.e = e;
                                                return errorObj;
                                            }
                                        }
                                        function tryCatch(fn) {
                                            tryCatchTarget = fn;
                                            return tryCatcher;
                                        }

                                        var inherits = function(Child, Parent) {
                                            var hasProp = {}.hasOwnProperty;

                                            function T() {
                                                this.constructor = Child;
                                                this.constructor$ = Parent;
                                                for (var propertyName in Parent.prototype) {
                                                    if (
                                                        hasProp.call(
                                                            Parent.prototype,
                                                            propertyName
                                                        ) &&
                                                        propertyName.charAt(
                                                            propertyName.length - 1
                                                        ) !== "$"
                                                    ) {
                                                        this[propertyName + "$"] =
                                                            Parent.prototype[
                                                                propertyName
                                                            ];
                                                    }
                                                }
                                            }
                                            T.prototype = Parent.prototype;
                                            Child.prototype = new T();
                                            return Child.prototype;
                                        };

                                        function isPrimitive(val) {
                                            return (
                                                val == null ||
                                                val === true ||
                                                val === false ||
                                                typeof val === "string" ||
                                                typeof val === "number"
                                            );
                                        }

                                        function isObject(value) {
                                            return (
                                                typeof value === "function" ||
                                                (typeof value === "object" &&
                                                    value !== null)
                                            );
                                        }

                                        function maybeWrapAsError(maybeError) {
                                            if (!isPrimitive(maybeError))
                                                return maybeError;

                                            return new Error(safeToString(maybeError));
                                        }

                                        function withAppended(target, appendee) {
                                            var len = target.length;
                                            var ret = new Array(len + 1);
                                            var i;
                                            for (i = 0; i < len; ++i) {
                                                ret[i] = target[i];
                                            }
                                            ret[i] = appendee;
                                            return ret;
                                        }

                                        function getDataPropertyOrDefault(
                                            obj,
                                            key,
                                            defaultValue
                                        ) {
                                            if (es5.isES5) {
                                                var desc = Object.getOwnPropertyDescriptor(
                                                    obj,
                                                    key
                                                );

                                                if (desc != null) {
                                                    return desc.get == null &&
                                                        desc.set == null
                                                        ? desc.value
                                                        : defaultValue;
                                                }
                                            } else {
                                                return {}.hasOwnProperty.call(obj, key)
                                                    ? obj[key]
                                                    : undefined;
                                            }
                                        }

                                        function notEnumerableProp(obj, name, value) {
                                            if (isPrimitive(obj)) return obj;
                                            var descriptor = {
                                                value: value,
                                                configurable: true,
                                                enumerable: false,
                                                writable: true
                                            };
                                            es5.defineProperty(obj, name, descriptor);
                                            return obj;
                                        }

                                        function thrower(r) {
                                            throw r;
                                        }

                                        var inheritedDataKeys = (function() {
                                            var excludedPrototypes = [
                                                Array.prototype,
                                                Object.prototype,
                                                Function.prototype
                                            ];

                                            var isExcludedProto = function(val) {
                                                for (
                                                    var i = 0;
                                                    i < excludedPrototypes.length;
                                                    ++i
                                                ) {
                                                    if (excludedPrototypes[i] === val) {
                                                        return true;
                                                    }
                                                }
                                                return false;
                                            };

                                            if (es5.isES5) {
                                                var getKeys = Object.getOwnPropertyNames;
                                                return function(obj) {
                                                    var ret = [];
                                                    var visitedKeys = Object.create(null);
                                                    while (
                                                        obj != null &&
                                                        !isExcludedProto(obj)
                                                    ) {
                                                        var keys;
                                                        try {
                                                            keys = getKeys(obj);
                                                        } catch (e) {
                                                            return ret;
                                                        }
                                                        for (
                                                            var i = 0;
                                                            i < keys.length;
                                                            ++i
                                                        ) {
                                                            var key = keys[i];
                                                            if (visitedKeys[key])
                                                                continue;
                                                            visitedKeys[key] = true;
                                                            var desc = Object.getOwnPropertyDescriptor(
                                                                obj,
                                                                key
                                                            );
                                                            if (
                                                                desc != null &&
                                                                desc.get == null &&
                                                                desc.set == null
                                                            ) {
                                                                ret.push(key);
                                                            }
                                                        }
                                                        obj = es5.getPrototypeOf(obj);
                                                    }
                                                    return ret;
                                                };
                                            } else {
                                                var hasProp = {}.hasOwnProperty;
                                                return function(obj) {
                                                    if (isExcludedProto(obj)) return [];
                                                    var ret = [];

                                                    /*jshint forin:false */
                                                    enumeration: for (var key in obj) {
                                                        if (hasProp.call(obj, key)) {
                                                            ret.push(key);
                                                        } else {
                                                            for (
                                                                var i = 0;
                                                                i <
                                                                excludedPrototypes.length;
                                                                ++i
                                                            ) {
                                                                if (
                                                                    hasProp.call(
                                                                        excludedPrototypes[
                                                                            i
                                                                        ],
                                                                        key
                                                                    )
                                                                ) {
                                                                    continue enumeration;
                                                                }
                                                            }
                                                            ret.push(key);
                                                        }
                                                    }
                                                    return ret;
                                                };
                                            }
                                        })();

                                        var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
                                        function isClass(fn) {
                                            try {
                                                if (typeof fn === "function") {
                                                    var keys = es5.names(fn.prototype);

                                                    var hasMethods =
                                                        es5.isES5 && keys.length > 1;
                                                    var hasMethodsOtherThanConstructor =
                                                        keys.length > 0 &&
                                                        !(
                                                            keys.length === 1 &&
                                                            keys[0] === "constructor"
                                                        );
                                                    var hasThisAssignmentAndStaticMethods =
                                                        thisAssignmentPattern.test(
                                                            fn + ""
                                                        ) && es5.names(fn).length > 0;

                                                    if (
                                                        hasMethods ||
                                                        hasMethodsOtherThanConstructor ||
                                                        hasThisAssignmentAndStaticMethods
                                                    ) {
                                                        return true;
                                                    }
                                                }
                                                return false;
                                            } catch (e) {
                                                return false;
                                            }
                                        }

                                        function toFastProperties(obj) {
                                            /*jshint -W027,-W055,-W031*/
                                            function FakeConstructor() {}
                                            FakeConstructor.prototype = obj;
                                            var l = 8;
                                            while (l--) new FakeConstructor();
                                            return obj;
                                            eval(obj);
                                        }

                                        var rident = /^[a-z$_][a-z$_0-9]*$/i;
                                        function isIdentifier(str) {
                                            return rident.test(str);
                                        }

                                        function filledRange(count, prefix, suffix) {
                                            var ret = new Array(count);
                                            for (var i = 0; i < count; ++i) {
                                                ret[i] = prefix + i + suffix;
                                            }
                                            return ret;
                                        }

                                        function safeToString(obj) {
                                            try {
                                                return obj + "";
                                            } catch (e) {
                                                return "[no string representation]";
                                            }
                                        }

                                        function isError(obj) {
                                            return (
                                                obj instanceof Error ||
                                                (obj !== null &&
                                                    typeof obj === "object" &&
                                                    typeof obj.message === "string" &&
                                                    typeof obj.name === "string")
                                            );
                                        }

                                        function markAsOriginatingFromRejection(e) {
                                            try {
                                                notEnumerableProp(
                                                    e,
                                                    "isOperational",
                                                    true
                                                );
                                            } catch (ignore) {}
                                        }

                                        function originatesFromRejection(e) {
                                            if (e == null) return false;
                                            return (
                                                e instanceof
                                                    Error["__BluebirdErrorTypes__"]
                                                        .OperationalError ||
                                                e["isOperational"] === true
                                            );
                                        }

                                        function canAttachTrace(obj) {
                                            return (
                                                isError(obj) &&
                                                es5.propertyIsWritable(obj, "stack")
                                            );
                                        }

                                        var ensureErrorObject = (function() {
                                            if (!("stack" in new Error())) {
                                                return function(value) {
                                                    if (canAttachTrace(value))
                                                        return value;
                                                    try {
                                                        throw new Error(
                                                            safeToString(value)
                                                        );
                                                    } catch (err) {
                                                        return err;
                                                    }
                                                };
                                            } else {
                                                return function(value) {
                                                    if (canAttachTrace(value))
                                                        return value;
                                                    return new Error(safeToString(value));
                                                };
                                            }
                                        })();

                                        function classString(obj) {
                                            return {}.toString.call(obj);
                                        }

                                        function copyDescriptors(from, to, filter) {
                                            var keys = es5.names(from);
                                            for (var i = 0; i < keys.length; ++i) {
                                                var key = keys[i];
                                                if (filter(key)) {
                                                    try {
                                                        es5.defineProperty(
                                                            to,
                                                            key,
                                                            es5.getDescriptor(from, key)
                                                        );
                                                    } catch (ignore) {}
                                                }
                                            }
                                        }

                                        var asArray = function(v) {
                                            if (es5.isArray(v)) {
                                                return v;
                                            }
                                            return null;
                                        };

                                        if (
                                            typeof Symbol !== "undefined" &&
                                            Symbol.iterator
                                        ) {
                                            var ArrayFrom =
                                                typeof Array.from === "function"
                                                    ? function(v) {
                                                          return Array.from(v);
                                                      }
                                                    : function(v) {
                                                          var ret = [];
                                                          var it = v[Symbol.iterator]();
                                                          var itResult;
                                                          while (
                                                              !(itResult = it.next()).done
                                                          ) {
                                                              ret.push(itResult.value);
                                                          }
                                                          return ret;
                                                      };

                                            asArray = function(v) {
                                                if (es5.isArray(v)) {
                                                    return v;
                                                } else if (
                                                    v != null &&
                                                    typeof v[Symbol.iterator] ===
                                                        "function"
                                                ) {
                                                    return ArrayFrom(v);
                                                }
                                                return null;
                                            };
                                        }

                                        var isNode =
                                            typeof process !== "undefined" &&
                                            classString(process).toLowerCase() ===
                                                "[object process]";

                                        var hasEnvVariables =
                                            typeof process !== "undefined" &&
                                            typeof process.env !== "undefined";

                                        function env(key) {
                                            return hasEnvVariables
                                                ? process.env[key]
                                                : undefined;
                                        }

                                        function getNativePromise() {
                                            if (typeof Promise === "function") {
                                                try {
                                                    var promise = new Promise(
                                                        function() {}
                                                    );
                                                    if (
                                                        {}.toString.call(promise) ===
                                                        "[object Promise]"
                                                    ) {
                                                        return Promise;
                                                    }
                                                } catch (e) {}
                                            }
                                        }

                                        function domainBind(self, cb) {
                                            return self.bind(cb);
                                        }

                                        var ret = {
                                            isClass: isClass,
                                            isIdentifier: isIdentifier,
                                            inheritedDataKeys: inheritedDataKeys,
                                            getDataPropertyOrDefault: getDataPropertyOrDefault,
                                            thrower: thrower,
                                            isArray: es5.isArray,
                                            asArray: asArray,
                                            notEnumerableProp: notEnumerableProp,
                                            isPrimitive: isPrimitive,
                                            isObject: isObject,
                                            isError: isError,
                                            canEvaluate: canEvaluate,
                                            errorObj: errorObj,
                                            tryCatch: tryCatch,
                                            inherits: inherits,
                                            withAppended: withAppended,
                                            maybeWrapAsError: maybeWrapAsError,
                                            toFastProperties: toFastProperties,
                                            filledRange: filledRange,
                                            toString: safeToString,
                                            canAttachTrace: canAttachTrace,
                                            ensureErrorObject: ensureErrorObject,
                                            originatesFromRejection: originatesFromRejection,
                                            markAsOriginatingFromRejection: markAsOriginatingFromRejection,
                                            classString: classString,
                                            copyDescriptors: copyDescriptors,
                                            hasDevTools:
                                                typeof chrome !== "undefined" &&
                                                chrome &&
                                                typeof chrome.loadTimes === "function",
                                            isNode: isNode,
                                            hasEnvVariables: hasEnvVariables,
                                            env: env,
                                            global: globalObject,
                                            getNativePromise: getNativePromise,
                                            domainBind: domainBind
                                        };
                                        ret.isRecentNode =
                                            ret.isNode &&
                                            (function() {
                                                var version = process.versions.node
                                                    .split(".")
                                                    .map(Number);
                                                return (
                                                    (version[0] === 0 &&
                                                        version[1] > 10) ||
                                                    version[0] > 0
                                                );
                                            })();

                                        if (ret.isNode) ret.toFastProperties(process);

                                        try {
                                            throw new Error();
                                        } catch (e) {
                                            ret.lastLineError = e;
                                        }
                                        module.exports = ret;
                                    },
                                    { "./es5": 13 }
                                ]
                            },
                            {},
                            [4]
                        )(4);
                    });
                    if (typeof window !== "undefined" && window !== null) {
                        window.P = window.Promise;
                    } else if (typeof self !== "undefined" && self !== null) {
                        self.P = self.Promise;
                    }
                    /* WEBPACK VAR INJECTION */
                }.call(
                    exports,
                    __webpack_require__(0),
                    __webpack_require__(6),
                    __webpack_require__(18).setImmediate
                ));

                /***/
            },
            /* 18 */
            /***/ function(module, exports, __webpack_require__) {
                /* WEBPACK VAR INJECTION */ (function(global) {
                    var apply = Function.prototype.apply;

                    // DOM APIs, for completeness

                    exports.setTimeout = function() {
                        return new Timeout(
                            apply.call(setTimeout, window, arguments),
                            clearTimeout
                        );
                    };
                    exports.setInterval = function() {
                        return new Timeout(
                            apply.call(setInterval, window, arguments),
                            clearInterval
                        );
                    };
                    exports.clearTimeout = exports.clearInterval = function(timeout) {
                        if (timeout) {
                            timeout.close();
                        }
                    };

                    function Timeout(id, clearFn) {
                        this._id = id;
                        this._clearFn = clearFn;
                    }
                    Timeout.prototype.unref = Timeout.prototype.ref = function() {};
                    Timeout.prototype.close = function() {
                        this._clearFn.call(window, this._id);
                    };

                    // Does not start the time, just sets up the members needed.
                    exports.enroll = function(item, msecs) {
                        clearTimeout(item._idleTimeoutId);
                        item._idleTimeout = msecs;
                    };

                    exports.unenroll = function(item) {
                        clearTimeout(item._idleTimeoutId);
                        item._idleTimeout = -1;
                    };

                    exports._unrefActive = exports.active = function(item) {
                        clearTimeout(item._idleTimeoutId);

                        var msecs = item._idleTimeout;
                        if (msecs >= 0) {
                            item._idleTimeoutId = setTimeout(function onTimeout() {
                                if (item._onTimeout) item._onTimeout();
                            }, msecs);
                        }
                    };

                    // setimmediate attaches itself to the global object
                    __webpack_require__(19);
                    // On some exotic environments, it's not clear which object `setimmeidate` was
                    // able to install onto.  Search each possibility in the same order as the
                    // `setimmediate` library.
                    exports.setImmediate =
                        (typeof self !== "undefined" && self.setImmediate) ||
                        (typeof global !== "undefined" && global.setImmediate) ||
                        (this && this.setImmediate);
                    exports.clearImmediate =
                        (typeof self !== "undefined" && self.clearImmediate) ||
                        (typeof global !== "undefined" && global.clearImmediate) ||
                        (this && this.clearImmediate);

                    /* WEBPACK VAR INJECTION */
                }.call(exports, __webpack_require__(6)));

                /***/
            },
            /* 19 */
            /***/ function(module, exports, __webpack_require__) {
                /* WEBPACK VAR INJECTION */ (function(global, process) {
                    (function(global, undefined) {
                        "use strict";

                        if (global.setImmediate) {
                            return;
                        }

                        var nextHandle = 1; // Spec says greater than zero
                        var tasksByHandle = {};
                        var currentlyRunningATask = false;
                        var doc = global.document;
                        var registerImmediate;

                        function setImmediate(callback) {
                            // Callback can either be a function or a string
                            if (typeof callback !== "function") {
                                callback = new Function("" + callback);
                            }
                            // Copy function arguments
                            var args = new Array(arguments.length - 1);
                            for (var i = 0; i < args.length; i++) {
                                args[i] = arguments[i + 1];
                            }
                            // Store and register the task
                            var task = { callback: callback, args: args };
                            tasksByHandle[nextHandle] = task;
                            registerImmediate(nextHandle);
                            return nextHandle++;
                        }

                        function clearImmediate(handle) {
                            delete tasksByHandle[handle];
                        }

                        function run(task) {
                            var callback = task.callback;
                            var args = task.args;
                            switch (args.length) {
                                case 0:
                                    callback();
                                    break;
                                case 1:
                                    callback(args[0]);
                                    break;
                                case 2:
                                    callback(args[0], args[1]);
                                    break;
                                case 3:
                                    callback(args[0], args[1], args[2]);
                                    break;
                                default:
                                    callback.apply(undefined, args);
                                    break;
                            }
                        }

                        function runIfPresent(handle) {
                            // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
                            // So if we're currently running a task, we'll need to delay this invocation.
                            if (currentlyRunningATask) {
                                // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                                // "too much recursion" error.
                                setTimeout(runIfPresent, 0, handle);
                            } else {
                                var task = tasksByHandle[handle];
                                if (task) {
                                    currentlyRunningATask = true;
                                    try {
                                        run(task);
                                    } finally {
                                        clearImmediate(handle);
                                        currentlyRunningATask = false;
                                    }
                                }
                            }
                        }

                        function installNextTickImplementation() {
                            registerImmediate = function(handle) {
                                process.nextTick(function() {
                                    runIfPresent(handle);
                                });
                            };
                        }

                        function canUsePostMessage() {
                            // The test against `importScripts` prevents this implementation from being installed inside a web worker,
                            // where `global.postMessage` means something completely different and can't be used for this purpose.
                            if (global.postMessage && !global.importScripts) {
                                var postMessageIsAsynchronous = true;
                                var oldOnMessage = global.onmessage;
                                global.onmessage = function() {
                                    postMessageIsAsynchronous = false;
                                };
                                global.postMessage("", "*");
                                global.onmessage = oldOnMessage;
                                return postMessageIsAsynchronous;
                            }
                        }

                        function installPostMessageImplementation() {
                            // Installs an event handler on `global` for the `message` event: see
                            // * https://developer.mozilla.org/en/DOM/window.postMessage
                            // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

                            var messagePrefix = "setImmediate$" + Math.random() + "$";
                            var onGlobalMessage = function(event) {
                                if (
                                    event.source === global &&
                                    typeof event.data === "string" &&
                                    event.data.indexOf(messagePrefix) === 0
                                ) {
                                    runIfPresent(+event.data.slice(messagePrefix.length));
                                }
                            };

                            if (global.addEventListener) {
                                global.addEventListener(
                                    "message",
                                    onGlobalMessage,
                                    false
                                );
                            } else {
                                global.attachEvent("onmessage", onGlobalMessage);
                            }

                            registerImmediate = function(handle) {
                                global.postMessage(messagePrefix + handle, "*");
                            };
                        }

                        function installMessageChannelImplementation() {
                            var channel = new MessageChannel();
                            channel.port1.onmessage = function(event) {
                                var handle = event.data;
                                runIfPresent(handle);
                            };

                            registerImmediate = function(handle) {
                                channel.port2.postMessage(handle);
                            };
                        }

                        function installReadyStateChangeImplementation() {
                            var html = doc.documentElement;
                            registerImmediate = function(handle) {
                                // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                                // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                                var script = doc.createElement("script");
                                script.onreadystatechange = function() {
                                    runIfPresent(handle);
                                    script.onreadystatechange = null;
                                    html.removeChild(script);
                                    script = null;
                                };
                                html.appendChild(script);
                            };
                        }

                        function installSetTimeoutImplementation() {
                            registerImmediate = function(handle) {
                                setTimeout(runIfPresent, 0, handle);
                            };
                        }

                        // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
                        var attachTo =
                            Object.getPrototypeOf && Object.getPrototypeOf(global);
                        attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

                        // Don't get fooled by e.g. browserify environments.
                        if ({}.toString.call(global.process) === "[object process]") {
                            // For Node.js before 0.9
                            installNextTickImplementation();
                        } else if (canUsePostMessage()) {
                            // For non-IE10 modern browsers
                            installPostMessageImplementation();
                        } else if (global.MessageChannel) {
                            // For web workers, where supported
                            installMessageChannelImplementation();
                        } else if (
                            doc &&
                            "onreadystatechange" in doc.createElement("script")
                        ) {
                            // For IE 6–8
                            installReadyStateChangeImplementation();
                        } else {
                            // For older browsers
                            installSetTimeoutImplementation();
                        }

                        attachTo.setImmediate = setImmediate;
                        attachTo.clearImmediate = clearImmediate;
                    })(
                        typeof self === "undefined"
                            ? typeof global === "undefined" ? this : global
                            : self
                    );

                    /* WEBPACK VAR INJECTION */
                }.call(exports, __webpack_require__(6), __webpack_require__(0)));

                /***/
            },
            /* 20 */
            /***/ function(module, exports, __webpack_require__) {
                (function webpackUniversalModuleDefinition(root, factory) {
                    if (true) module.exports = factory();
                    else if (typeof define === "function" && define.amd)
                        define([], factory);
                    else {
                        var a = factory();
                        for (var i in a)
                            (typeof exports === "object" ? exports : root)[i] = a[i];
                    }
                })(typeof self !== "undefined" ? self : this, function() {
                    return /******/ (function(modules) {
                        // webpackBootstrap
                        /******/ // The module cache
                        /******/ var installedModules = {}; // The require function
                        /******/
                        /******/ /******/ function __webpack_require__(moduleId) {
                            /******/
                            /******/ // Check if module is in cache
                            /******/ if (installedModules[moduleId]) {
                                /******/ return installedModules[moduleId].exports;
                                /******/
                            } // Create a new module (and put it into the cache)
                            /******/ /******/ var module = (installedModules[moduleId] = {
                                /******/ i: moduleId,
                                /******/ l: false,
                                /******/ exports: {}
                                /******/
                            }); // Execute the module function
                            /******/
                            /******/ /******/ modules[moduleId].call(
                                module.exports,
                                module,
                                module.exports,
                                __webpack_require__
                            ); // Flag the module as loaded
                            /******/
                            /******/ /******/ module.l = true; // Return the exports of the module
                            /******/
                            /******/ /******/ return module.exports;
                            /******/
                        } // expose the modules object (__webpack_modules__)
                        /******/
                        /******/
                        /******/ /******/ __webpack_require__.m = modules; // expose the module cache
                        /******/
                        /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
                        /******/
                        /******/ /******/ __webpack_require__.d = function(
                            exports,
                            name,
                            getter
                        ) {
                            /******/ if (!__webpack_require__.o(exports, name)) {
                                /******/ Object.defineProperty(exports, name, {
                                    /******/ configurable: false,
                                    /******/ enumerable: true,
                                    /******/ get: getter
                                    /******/
                                });
                                /******/
                            }
                            /******/
                        }; // getDefaultExport function for compatibility with non-harmony modules
                        /******/
                        /******/ /******/ __webpack_require__.n = function(module) {
                            /******/ var getter =
                                module && module.__esModule
                                    ? /******/ function getDefault() {
                                          return module["default"];
                                      }
                                    : /******/ function getModuleExports() {
                                          return module;
                                      };
                            /******/ __webpack_require__.d(getter, "a", getter);
                            /******/ return getter;
                            /******/
                        }; // Object.prototype.hasOwnProperty.call
                        /******/
                        /******/ /******/ __webpack_require__.o = function(
                            object,
                            property
                        ) {
                            return Object.prototype.hasOwnProperty.call(object, property);
                        }; // __webpack_public_path__
                        /******/
                        /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
                        /******/
                        /******/ /******/ return __webpack_require__(
                            (__webpack_require__.s = 5)
                        );
                        /******/
                    })(
                        /************************************************************************/
                        /******/ [
                            /* 0 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });
                                exports.default = createDoneAction;
                                function createDoneAction(_ref) {
                                    var result = _ref.result,
                                        debug = _ref.debug;

                                    return function() {
                                        debug("call done with result", result);
                                        return result;
                                    };
                                }

                                /***/
                            },
                            /* 1 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });
                                exports.default = createElseAction;

                                var _createDoneAction = __webpack_require__(0);

                                var _createDoneAction2 = _interopRequireDefault(
                                    _createDoneAction
                                );

                                function _interopRequireDefault(obj) {
                                    return obj && obj.__esModule ? obj : { default: obj };
                                }

                                function _toConsumableArray(arr) {
                                    if (Array.isArray(arr)) {
                                        for (
                                            var i = 0, arr2 = Array(arr.length);
                                            i < arr.length;
                                            i++
                                        ) {
                                            arr2[i] = arr[i];
                                        }
                                        return arr2;
                                    } else {
                                        return Array.from(arr);
                                    }
                                }

                                function createElseAction(_ref) {
                                    var testedArguments = _ref.testedArguments,
                                        result = _ref.result,
                                        isEnabled = _ref.isEnabled,
                                        debug = _ref.debug;

                                    return function(callback) {
                                        debug("call else");
                                        if (isEnabled) {
                                            debug("execute function");
                                            isEnabled = false;
                                            result = callback.apply(
                                                undefined,
                                                _toConsumableArray(testedArguments)
                                            );
                                            debug("function sync result", result);
                                        }
                                        return {
                                            done: (0, _createDoneAction2.default)({
                                                result: result,
                                                debug: debug
                                            })
                                        };
                                    };
                                }

                                /***/
                            },
                            /* 2 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });
                                exports.default = createWhenAction;

                                var _checkCondition = __webpack_require__(10);

                                var _checkCondition2 = _interopRequireDefault(
                                    _checkCondition
                                );

                                var _createDoAction = __webpack_require__(11);

                                var _createDoAction2 = _interopRequireDefault(
                                    _createDoAction
                                );

                                function _interopRequireDefault(obj) {
                                    return obj && obj.__esModule ? obj : { default: obj };
                                }

                                function createWhenAction(_ref) {
                                    var testedArguments = _ref.testedArguments,
                                        result = _ref.result,
                                        isEnabled = _ref.isEnabled,
                                        debug = _ref.debug;

                                    return function() {
                                        for (
                                            var _len = arguments.length,
                                                conditionArguments = Array(_len),
                                                _key = 0;
                                            _key < _len;
                                            _key++
                                        ) {
                                            conditionArguments[_key] = arguments[_key];
                                        }

                                        debug("call when", conditionArguments);
                                        var conditionResult = (0,
                                        _checkCondition2.default)(
                                            conditionArguments,
                                            testedArguments
                                        );
                                        debug("conditionResult", conditionResult);
                                        return {
                                            do: (0, _createDoAction2.default)({
                                                conditionResult: conditionResult,
                                                testedArguments: testedArguments,
                                                isEnabled: isEnabled,
                                                result: result,
                                                debug: debug
                                            })
                                        };
                                    };
                                }

                                /***/
                            },
                            /* 3 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                var _typeof =
                                    typeof Symbol === "function" &&
                                    typeof Symbol.iterator === "symbol"
                                        ? function(obj) {
                                              return typeof obj;
                                          }
                                        : function(obj) {
                                              return obj &&
                                                  typeof Symbol === "function" &&
                                                  obj.constructor === Symbol &&
                                                  obj !== Symbol.prototype
                                                  ? "symbol"
                                                  : typeof obj;
                                          };

                                exports.default = checkTypeCondition;
                                function checkTypeCondition(
                                    conditionArgument,
                                    testedArgument,
                                    index,
                                    conditionArguments,
                                    testedArguments
                                ) {
                                    return [
                                        functionConditionArgument,
                                        objectConditionArgument,
                                        elseConditionArgument
                                    ]
                                        .map(function(conditionArgumentFactory) {
                                            return conditionArgumentFactory(
                                                conditionArgument,
                                                testedArgument,
                                                index,
                                                conditionArguments,
                                                testedArguments
                                            );
                                        })
                                        .find(function(conditionArgumentObject) {
                                            return conditionArgumentObject.test();
                                        })
                                        .execute();
                                }

                                function functionConditionArgument(
                                    conditionArgument,
                                    testedArgument,
                                    index,
                                    conditionArguments,
                                    testedArguments
                                ) {
                                    return {
                                        execute: function execute() {
                                            return conditionArgument().execute(
                                                testedArgument,
                                                index,
                                                conditionArguments,
                                                testedArguments
                                            );
                                        },
                                        test: function test() {
                                            return (
                                                typeof conditionArgument === "function"
                                            );
                                        }
                                    };
                                }

                                function objectConditionArgument(
                                    conditionArgument,
                                    testedArgument,
                                    index,
                                    conditionArguments,
                                    testedArguments
                                ) {
                                    return {
                                        execute: function execute() {
                                            return conditionArgument.execute(
                                                testedArgument,
                                                index,
                                                conditionArguments,
                                                testedArguments
                                            );
                                        },
                                        test: function test() {
                                            return (
                                                (typeof conditionArgument === "undefined"
                                                    ? "undefined"
                                                    : _typeof(conditionArgument)) ===
                                                "object"
                                            );
                                        }
                                    };
                                }

                                function elseConditionArgument(conditionArgument) {
                                    return {
                                        execute: function execute() {
                                            throw TypeError(
                                                "Wrong arguments",
                                                conditionArgument
                                            );
                                        },
                                        test: function test() {
                                            return true;
                                        }
                                    };
                                }

                                /***/
                            },
                            /* 4 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });
                                exports.default = createElseThrowAction;

                                var _createDoneAction = __webpack_require__(0);

                                var _createDoneAction2 = _interopRequireDefault(
                                    _createDoneAction
                                );

                                function _interopRequireDefault(obj) {
                                    return obj && obj.__esModule ? obj : { default: obj };
                                }

                                function createElseThrowAction(_ref) {
                                    var testedArguments = _ref.testedArguments,
                                        result = _ref.result,
                                        isEnabled = _ref.isEnabled,
                                        debug = _ref.debug;

                                    return function() {
                                        debug("call elseThrow");
                                        if (isEnabled) {
                                            isEnabled = false;
                                            throw TypeError(
                                                "Wrong parameters",
                                                testedArguments
                                            );
                                        }
                                        return {
                                            done: (0, _createDoneAction2.default)({
                                                result: result,
                                                debug: debug
                                            })
                                        };
                                    };
                                }

                                /***/
                            },
                            /* 5 */
                            /***/ function(module, exports, __webpack_require__) {
                                module.exports = __webpack_require__(6);

                                /***/
                            },
                            /* 6 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });
                                exports.default = undefined;

                                var _Overload = __webpack_require__(7);

                                var _Overload2 = _interopRequireDefault(_Overload);

                                function _interopRequireDefault(obj) {
                                    return obj && obj.__esModule ? obj : { default: obj };
                                }

                                exports.default = _Overload2.default;

                                /***/
                            },
                            /* 7 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                var _createClass = (function() {
                                    function defineProperties(target, props) {
                                        for (var i = 0; i < props.length; i++) {
                                            var descriptor = props[i];
                                            descriptor.enumerable =
                                                descriptor.enumerable || false;
                                            descriptor.configurable = true;
                                            if ("value" in descriptor)
                                                descriptor.writable = true;
                                            Object.defineProperty(
                                                target,
                                                descriptor.key,
                                                descriptor
                                            );
                                        }
                                    }
                                    return function(
                                        Constructor,
                                        protoProps,
                                        staticProps
                                    ) {
                                        if (protoProps)
                                            defineProperties(
                                                Constructor.prototype,
                                                protoProps
                                            );
                                        if (staticProps)
                                            defineProperties(Constructor, staticProps);
                                        return Constructor;
                                    };
                                })();

                                var _debug = __webpack_require__(8);

                                var _debug2 = _interopRequireDefault(_debug);

                                var _createSetAction = __webpack_require__(9);

                                var _createSetAction2 = _interopRequireDefault(
                                    _createSetAction
                                );

                                var _createTypeFactory = __webpack_require__(12);

                                var _createTypeFactory2 = _interopRequireDefault(
                                    _createTypeFactory
                                );

                                var _number = __webpack_require__(13);

                                var _number2 = _interopRequireDefault(_number);

                                var _string = __webpack_require__(14);

                                var _string2 = _interopRequireDefault(_string);

                                var _object = __webpack_require__(15);

                                var _object2 = _interopRequireDefault(_object);

                                var _array = __webpack_require__(16);

                                var _array2 = _interopRequireDefault(_array);

                                var _boolean = __webpack_require__(17);

                                var _boolean2 = _interopRequireDefault(_boolean);

                                var _function = __webpack_require__(18);

                                var _function2 = _interopRequireDefault(_function);

                                var _symbol = __webpack_require__(19);

                                var _symbol2 = _interopRequireDefault(_symbol);

                                var _undefined = __webpack_require__(20);

                                var _undefined2 = _interopRequireDefault(_undefined);

                                var _instance = __webpack_require__(21);

                                var _instance2 = _interopRequireDefault(_instance);

                                var _interface = __webpack_require__(22);

                                var _interface2 = _interopRequireDefault(_interface);

                                var _null = __webpack_require__(24);

                                var _null2 = _interopRequireDefault(_null);

                                var _any = __webpack_require__(25);

                                var _any2 = _interopRequireDefault(_any);

                                function _interopRequireDefault(obj) {
                                    return obj && obj.__esModule ? obj : { default: obj };
                                }

                                function _classCallCheck(instance, Constructor) {
                                    if (!(instance instanceof Constructor)) {
                                        throw new TypeError(
                                            "Cannot call a class as a function"
                                        );
                                    }
                                }

                                var Overload = (function() {
                                    function Overload() {
                                        _classCallCheck(this, Overload);
                                    }

                                    _createClass(Overload, null, [
                                        {
                                            key: "set",
                                            value: function set() {
                                                for (
                                                    var _len = arguments.length,
                                                        testedArguments = Array(_len),
                                                        _key = 0;
                                                    _key < _len;
                                                    _key++
                                                ) {
                                                    testedArguments[_key] =
                                                        arguments[_key];
                                                }

                                                var isEnabled = true;
                                                var result = null;
                                                var debug = (0, _debug2.default)(
                                                    "Overloader"
                                                );
                                                var setAction = (0,
                                                _createSetAction2.default)({
                                                    testedArguments: testedArguments,
                                                    isEnabled: isEnabled,
                                                    result: result,
                                                    debug: debug
                                                });
                                                return setAction();
                                            }
                                        }
                                    ]);

                                    return Overload;
                                })();

                                Overload.NUMBER = (0, _createTypeFactory2.default)(
                                    _number2.default
                                );
                                Overload.STRING = (0, _createTypeFactory2.default)(
                                    _string2.default
                                );
                                Overload.OBJECT = (0, _createTypeFactory2.default)(
                                    _object2.default
                                );
                                Overload.ARRAY = (0, _createTypeFactory2.default)(
                                    _array2.default
                                );
                                Overload.BOOLEAN = (0, _createTypeFactory2.default)(
                                    _boolean2.default
                                );
                                Overload.FUNCTION = (0, _createTypeFactory2.default)(
                                    _function2.default
                                );
                                Overload.SYMBOL = (0, _createTypeFactory2.default)(
                                    _symbol2.default
                                );
                                Overload.UNDEFINED = (0, _createTypeFactory2.default)(
                                    _undefined2.default
                                );
                                Overload.NULL = (0, _createTypeFactory2.default)(
                                    _null2.default
                                );
                                Overload.ANY = (0, _createTypeFactory2.default)(
                                    _any2.default
                                );
                                Overload.INSTANCE = (0, _createTypeFactory2.default)(
                                    _instance2.default
                                );
                                Overload.INTERFACE = (0, _createTypeFactory2.default)(
                                    _interface2.default
                                );
                                exports.default = Overload;

                                /***/
                            },
                            /* 8 */
                            /***/ function(module, exports) {
                                module.exports = __webpack_require__(21);

                                /***/
                            },
                            /* 9 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });
                                exports.default = createSetAction;

                                var _createElseAction = __webpack_require__(1);

                                var _createElseAction2 = _interopRequireDefault(
                                    _createElseAction
                                );

                                var _createWhenAction = __webpack_require__(2);

                                var _createWhenAction2 = _interopRequireDefault(
                                    _createWhenAction
                                );

                                var _createElseThrowAction = __webpack_require__(4);

                                var _createElseThrowAction2 = _interopRequireDefault(
                                    _createElseThrowAction
                                );

                                var _createDoneAction = __webpack_require__(0);

                                var _createDoneAction2 = _interopRequireDefault(
                                    _createDoneAction
                                );

                                function _interopRequireDefault(obj) {
                                    return obj && obj.__esModule ? obj : { default: obj };
                                }

                                function createSetAction(_ref) {
                                    var testedArguments = _ref.testedArguments,
                                        result = _ref.result,
                                        isEnabled = _ref.isEnabled,
                                        debug = _ref.debug;

                                    return function() {
                                        debug("call set");
                                        var options = {
                                            testedArguments: testedArguments,
                                            isEnabled: isEnabled,
                                            result: result,
                                            debug: debug
                                        };
                                        return {
                                            when: (0, _createWhenAction2.default)(
                                                options
                                            ),
                                            else: (0, _createElseAction2.default)(
                                                options
                                            ),
                                            elseThrow: (0,
                                            _createElseThrowAction2.default)(options),
                                            done: (0, _createDoneAction2.default)(options)
                                        };
                                    };
                                }

                                /***/
                            },
                            /* 10 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });
                                exports.default = checkCondition;

                                var _checkTypeCondition = __webpack_require__(3);

                                var _checkTypeCondition2 = _interopRequireDefault(
                                    _checkTypeCondition
                                );

                                function _interopRequireDefault(obj) {
                                    return obj && obj.__esModule ? obj : { default: obj };
                                }

                                function checkCondition(
                                    conditionArguments,
                                    testedArguments
                                ) {
                                    if (
                                        conditionArguments.length ===
                                        testedArguments.length
                                    ) {
                                        return conditionArguments.every(function(
                                            conditionArgument,
                                            index
                                        ) {
                                            var testedArgument = testedArguments[index];
                                            return (0, _checkTypeCondition2.default)(
                                                conditionArgument,
                                                testedArgument,
                                                index,
                                                conditionArguments,
                                                testedArguments
                                            );
                                        });
                                    }
                                    return false;
                                }

                                /***/
                            },
                            /* 11 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });
                                exports.default = createDoAction;

                                var _createElseAction = __webpack_require__(1);

                                var _createElseAction2 = _interopRequireDefault(
                                    _createElseAction
                                );

                                var _createWhenAction = __webpack_require__(2);

                                var _createWhenAction2 = _interopRequireDefault(
                                    _createWhenAction
                                );

                                var _createElseThrowAction = __webpack_require__(4);

                                var _createElseThrowAction2 = _interopRequireDefault(
                                    _createElseThrowAction
                                );

                                var _createDoneAction = __webpack_require__(0);

                                var _createDoneAction2 = _interopRequireDefault(
                                    _createDoneAction
                                );

                                function _interopRequireDefault(obj) {
                                    return obj && obj.__esModule ? obj : { default: obj };
                                }

                                function _toConsumableArray(arr) {
                                    if (Array.isArray(arr)) {
                                        for (
                                            var i = 0, arr2 = Array(arr.length);
                                            i < arr.length;
                                            i++
                                        ) {
                                            arr2[i] = arr[i];
                                        }
                                        return arr2;
                                    } else {
                                        return Array.from(arr);
                                    }
                                }

                                function createDoAction(_ref) {
                                    var testedArguments = _ref.testedArguments,
                                        result = _ref.result,
                                        conditionResult = _ref.conditionResult,
                                        isEnabled = _ref.isEnabled,
                                        debug = _ref.debug;

                                    return function(callback) {
                                        debug("call do");
                                        if (conditionResult && isEnabled) {
                                            debug("execute function");
                                            isEnabled = false;
                                            result = callback.apply(
                                                undefined,
                                                _toConsumableArray(testedArguments)
                                            );
                                            debug("function sync result", result);
                                        }
                                        var options = {
                                            testedArguments: testedArguments,
                                            isEnabled: isEnabled,
                                            result: result,
                                            debug: debug
                                        };
                                        return {
                                            when: (0, _createWhenAction2.default)(
                                                options
                                            ),
                                            else: (0, _createElseAction2.default)(
                                                options
                                            ),
                                            elseThrow: (0,
                                            _createElseThrowAction2.default)(options),
                                            done: (0, _createDoneAction2.default)(options)
                                        };
                                    };
                                }

                                /***/
                            },
                            /* 12 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });
                                exports.default = createType;
                                function createType(typeCondition) {
                                    return function(typeInput) {
                                        return {
                                            execute: function execute(
                                                testedArgument,
                                                index,
                                                conditionArguments,
                                                testedArguments
                                            ) {
                                                return typeCondition(
                                                    testedArgument,
                                                    typeInput,
                                                    index,
                                                    conditionArguments,
                                                    testedArguments
                                                );
                                            }
                                        };
                                    };
                                }

                                /***/
                            },
                            /* 13 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                exports.default = function(arg) {
                                    return (
                                        typeof arg === "number" || arg instanceof Number
                                    );
                                };

                                /***/
                            },
                            /* 14 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                exports.default = function(arg) {
                                    return (
                                        typeof arg === "string" || arg instanceof String
                                    );
                                };

                                /***/
                            },
                            /* 15 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                var _typeof =
                                    typeof Symbol === "function" &&
                                    typeof Symbol.iterator === "symbol"
                                        ? function(obj) {
                                              return typeof obj;
                                          }
                                        : function(obj) {
                                              return obj &&
                                                  typeof Symbol === "function" &&
                                                  obj.constructor === Symbol &&
                                                  obj !== Symbol.prototype
                                                  ? "symbol"
                                                  : typeof obj;
                                          };

                                exports.default = function(arg) {
                                    return (
                                        (typeof arg === "undefined"
                                            ? "undefined"
                                            : _typeof(arg)) === "object" &&
                                        arg !== null &&
                                        arg instanceof String === false &&
                                        arg instanceof Number === false &&
                                        arg instanceof Boolean === false
                                    );
                                };

                                /***/
                            },
                            /* 16 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                var _typeof =
                                    typeof Symbol === "function" &&
                                    typeof Symbol.iterator === "symbol"
                                        ? function(obj) {
                                              return typeof obj;
                                          }
                                        : function(obj) {
                                              return obj &&
                                                  typeof Symbol === "function" &&
                                                  obj.constructor === Symbol &&
                                                  obj !== Symbol.prototype
                                                  ? "symbol"
                                                  : typeof obj;
                                          };

                                exports.default = function(arg) {
                                    return (
                                        (typeof arg === "undefined"
                                            ? "undefined"
                                            : _typeof(arg)) === "object" &&
                                        arg instanceof Array
                                    );
                                };

                                /***/
                            },
                            /* 17 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                exports.default = function(arg) {
                                    return (
                                        typeof arg === "boolean" || arg instanceof Boolean
                                    );
                                };

                                /***/
                            },
                            /* 18 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                exports.default = function(arg) {
                                    return typeof arg === "function";
                                };

                                /***/
                            },
                            /* 19 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                var _typeof =
                                    typeof Symbol === "function" &&
                                    typeof Symbol.iterator === "symbol"
                                        ? function(obj) {
                                              return typeof obj;
                                          }
                                        : function(obj) {
                                              return obj &&
                                                  typeof Symbol === "function" &&
                                                  obj.constructor === Symbol &&
                                                  obj !== Symbol.prototype
                                                  ? "symbol"
                                                  : typeof obj;
                                          };

                                exports.default = function(arg) {
                                    return (
                                        (typeof arg === "undefined"
                                            ? "undefined"
                                            : _typeof(arg)) === "symbol"
                                    );
                                };

                                /***/
                            },
                            /* 20 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                exports.default = function(arg) {
                                    return typeof arg === "undefined";
                                };

                                /***/
                            },
                            /* 21 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                exports.default = function(arg, targetClass) {
                                    return arg instanceof targetClass;
                                };

                                /***/
                            },
                            /* 22 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                var _typeof =
                                    typeof Symbol === "function" &&
                                    typeof Symbol.iterator === "symbol"
                                        ? function(obj) {
                                              return typeof obj;
                                          }
                                        : function(obj) {
                                              return obj &&
                                                  typeof Symbol === "function" &&
                                                  obj.constructor === Symbol &&
                                                  obj !== Symbol.prototype
                                                  ? "symbol"
                                                  : typeof obj;
                                          };

                                var _checkSingleCondition = __webpack_require__(23);

                                var _checkSingleCondition2 = _interopRequireDefault(
                                    _checkSingleCondition
                                );

                                function _interopRequireDefault(obj) {
                                    return obj && obj.__esModule ? obj : { default: obj };
                                }

                                exports.default = function(arg) {
                                    var targetInterface =
                                        arguments.length > 1 && arguments[1] !== undefined
                                            ? arguments[1]
                                            : {};
                                    return (
                                        (typeof arg === "undefined"
                                            ? "undefined"
                                            : _typeof(arg)) === "object" &&
                                        Object.keys(targetInterface).every(function(key) {
                                            return (0,
                                            _checkSingleCondition2.default)(targetInterface[key], arg[key]);
                                        })
                                    );
                                };

                                /***/
                            },
                            /* 23 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });
                                exports.default = checkSingleCondition;

                                var _checkTypeCondition = __webpack_require__(3);

                                var _checkTypeCondition2 = _interopRequireDefault(
                                    _checkTypeCondition
                                );

                                function _interopRequireDefault(obj) {
                                    return obj && obj.__esModule ? obj : { default: obj };
                                }

                                function checkSingleCondition(
                                    conditionArgument,
                                    testedArgument
                                ) {
                                    return (0, _checkTypeCondition2.default)(
                                        conditionArgument,
                                        testedArgument,
                                        1,
                                        [conditionArgument],
                                        [testedArgument]
                                    );
                                }

                                /***/
                            },
                            /* 24 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                exports.default = function(arg) {
                                    return arg === null;
                                };

                                /***/
                            },
                            /* 25 */
                            /***/ function(module, exports, __webpack_require__) {
                                "use strict";

                                Object.defineProperty(exports, "__esModule", {
                                    value: true
                                });

                                exports.default = function(arg) {
                                    return true;
                                };

                                /***/
                            }
                            /******/
                        ]
                    );
                });
                //# sourceMappingURL=index.js.map

                /***/
            },
            /* 21 */
            /***/ function(module, exports, __webpack_require__) {
                /* WEBPACK VAR INJECTION */ (function(process) {
                    /**
                     * This is the web browser implementation of `debug()`.
                     *
                     * Expose `debug()` as the module.
                     */

                    exports = module.exports = __webpack_require__(22);
                    exports.log = log;
                    exports.formatArgs = formatArgs;
                    exports.save = save;
                    exports.load = load;
                    exports.useColors = useColors;
                    exports.storage =
                        "undefined" != typeof chrome &&
                        "undefined" != typeof chrome.storage
                            ? chrome.storage.local
                            : localstorage();

                    /**
                     * Colors.
                     */

                    exports.colors = [
                        "#0000CC",
                        "#0000FF",
                        "#0033CC",
                        "#0033FF",
                        "#0066CC",
                        "#0066FF",
                        "#0099CC",
                        "#0099FF",
                        "#00CC00",
                        "#00CC33",
                        "#00CC66",
                        "#00CC99",
                        "#00CCCC",
                        "#00CCFF",
                        "#3300CC",
                        "#3300FF",
                        "#3333CC",
                        "#3333FF",
                        "#3366CC",
                        "#3366FF",
                        "#3399CC",
                        "#3399FF",
                        "#33CC00",
                        "#33CC33",
                        "#33CC66",
                        "#33CC99",
                        "#33CCCC",
                        "#33CCFF",
                        "#6600CC",
                        "#6600FF",
                        "#6633CC",
                        "#6633FF",
                        "#66CC00",
                        "#66CC33",
                        "#9900CC",
                        "#9900FF",
                        "#9933CC",
                        "#9933FF",
                        "#99CC00",
                        "#99CC33",
                        "#CC0000",
                        "#CC0033",
                        "#CC0066",
                        "#CC0099",
                        "#CC00CC",
                        "#CC00FF",
                        "#CC3300",
                        "#CC3333",
                        "#CC3366",
                        "#CC3399",
                        "#CC33CC",
                        "#CC33FF",
                        "#CC6600",
                        "#CC6633",
                        "#CC9900",
                        "#CC9933",
                        "#CCCC00",
                        "#CCCC33",
                        "#FF0000",
                        "#FF0033",
                        "#FF0066",
                        "#FF0099",
                        "#FF00CC",
                        "#FF00FF",
                        "#FF3300",
                        "#FF3333",
                        "#FF3366",
                        "#FF3399",
                        "#FF33CC",
                        "#FF33FF",
                        "#FF6600",
                        "#FF6633",
                        "#FF9900",
                        "#FF9933",
                        "#FFCC00",
                        "#FFCC33"
                    ];

                    /**
                     * Currently only WebKit-based Web Inspectors, Firefox >= v31,
                     * and the Firebug extension (any Firefox version) are known
                     * to support "%c" CSS customizations.
                     *
                     * TODO: add a `localStorage` variable to explicitly enable/disable colors
                     */

                    function useColors() {
                        // NB: In an Electron preload script, document will be defined but not fully
                        // initialized. Since we know we're in Chrome, we'll just detect this case
                        // explicitly
                        if (
                            typeof window !== "undefined" &&
                            window.process &&
                            window.process.type === "renderer"
                        ) {
                            return true;
                        }

                        // Internet Explorer and Edge do not support colors.
                        if (
                            typeof navigator !== "undefined" &&
                            navigator.userAgent &&
                            navigator.userAgent
                                .toLowerCase()
                                .match(/(edge|trident)\/(\d+)/)
                        ) {
                            return false;
                        }

                        // is webkit? http://stackoverflow.com/a/16459606/376773
                        // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
                        return (
                            (typeof document !== "undefined" &&
                                document.documentElement &&
                                document.documentElement.style &&
                                document.documentElement.style.WebkitAppearance) ||
                            // is firebug? http://stackoverflow.com/a/398120/376773
                            (typeof window !== "undefined" &&
                                window.console &&
                                (window.console.firebug ||
                                    (window.console.exception &&
                                        window.console.table))) ||
                            // is firefox >= v31?
                            // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
                            (typeof navigator !== "undefined" &&
                                navigator.userAgent &&
                                navigator.userAgent
                                    .toLowerCase()
                                    .match(/firefox\/(\d+)/) &&
                                parseInt(RegExp.$1, 10) >= 31) ||
                            // double check webkit in userAgent just in case we are in a worker
                            (typeof navigator !== "undefined" &&
                                navigator.userAgent &&
                                navigator.userAgent
                                    .toLowerCase()
                                    .match(/applewebkit\/(\d+)/))
                        );
                    }

                    /**
                     * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
                     */

                    exports.formatters.j = function(v) {
                        try {
                            return JSON.stringify(v);
                        } catch (err) {
                            return "[UnexpectedJSONParseError]: " + err.message;
                        }
                    };

                    /**
                     * Colorize log arguments if enabled.
                     *
                     * @api public
                     */

                    function formatArgs(args) {
                        var useColors = this.useColors;

                        args[0] =
                            (useColors ? "%c" : "") +
                            this.namespace +
                            (useColors ? " %c" : " ") +
                            args[0] +
                            (useColors ? "%c " : " ") +
                            "+" +
                            exports.humanize(this.diff);

                        if (!useColors) return;

                        var c = "color: " + this.color;
                        args.splice(1, 0, c, "color: inherit");

                        // the final "%c" is somewhat tricky, because there could be other
                        // arguments passed either before or after the %c, so we need to
                        // figure out the correct index to insert the CSS into
                        var index = 0;
                        var lastC = 0;
                        args[0].replace(/%[a-zA-Z%]/g, function(match) {
                            if ("%%" === match) return;
                            index++;
                            if ("%c" === match) {
                                // we only are interested in the *last* %c
                                // (the user may have provided their own)
                                lastC = index;
                            }
                        });

                        args.splice(lastC, 0, c);
                    }

                    /**
                     * Invokes `console.log()` when available.
                     * No-op when `console.log` is not a "function".
                     *
                     * @api public
                     */

                    function log() {
                        // this hackery is required for IE8/9, where
                        // the `console.log` function doesn't have 'apply'
                        return (
                            "object" === typeof console &&
                            console.log &&
                            Function.prototype.apply.call(console.log, console, arguments)
                        );
                    }

                    /**
                     * Save `namespaces`.
                     *
                     * @param {String} namespaces
                     * @api private
                     */

                    function save(namespaces) {
                        try {
                            if (null == namespaces) {
                                exports.storage.removeItem("debug");
                            } else {
                                exports.storage.debug = namespaces;
                            }
                        } catch (e) {}
                    }

                    /**
                     * Load `namespaces`.
                     *
                     * @return {String} returns the previously persisted debug modes
                     * @api private
                     */

                    function load() {
                        var r;
                        try {
                            r = exports.storage.debug;
                        } catch (e) {}

                        // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
                        if (!r && typeof process !== "undefined" && "env" in process) {
                            r = process.env.DEBUG;
                        }

                        return r;
                    }

                    /**
                     * Enable namespaces listed in `localStorage.debug` initially.
                     */

                    exports.enable(load());

                    /**
                     * Localstorage attempts to return the localstorage.
                     *
                     * This is necessary because safari throws
                     * when a user disables cookies/localstorage
                     * and you attempt to access it.
                     *
                     * @return {LocalStorage}
                     * @api private
                     */

                    function localstorage() {
                        try {
                            return window.localStorage;
                        } catch (e) {}
                    }

                    /* WEBPACK VAR INJECTION */
                }.call(exports, __webpack_require__(0)));

                /***/
            },
            /* 22 */
            /***/ function(module, exports, __webpack_require__) {
                /**
                 * This is the common logic for both the Node.js and web browser
                 * implementations of `debug()`.
                 *
                 * Expose `debug()` as the module.
                 */

                exports = module.exports = createDebug.debug = createDebug[
                    "default"
                ] = createDebug;
                exports.coerce = coerce;
                exports.disable = disable;
                exports.enable = enable;
                exports.enabled = enabled;
                exports.humanize = __webpack_require__(23);

                /**
                 * Active `debug` instances.
                 */
                exports.instances = [];

                /**
                 * The currently active debug mode names, and names to skip.
                 */

                exports.names = [];
                exports.skips = [];

                /**
                 * Map of special "%n" handling functions, for the debug "format" argument.
                 *
                 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
                 */

                exports.formatters = {};

                /**
                 * Select a color.
                 * @param {String} namespace
                 * @return {Number}
                 * @api private
                 */

                function selectColor(namespace) {
                    var hash = 0,
                        i;

                    for (i in namespace) {
                        hash = (hash << 5) - hash + namespace.charCodeAt(i);
                        hash |= 0; // Convert to 32bit integer
                    }

                    return exports.colors[Math.abs(hash) % exports.colors.length];
                }

                /**
                 * Create a debugger with the given `namespace`.
                 *
                 * @param {String} namespace
                 * @return {Function}
                 * @api public
                 */

                function createDebug(namespace) {
                    var prevTime;

                    function debug() {
                        // disabled?
                        if (!debug.enabled) return;

                        var self = debug;

                        // set `diff` timestamp
                        var curr = +new Date();
                        var ms = curr - (prevTime || curr);
                        self.diff = ms;
                        self.prev = prevTime;
                        self.curr = curr;
                        prevTime = curr;

                        // turn the `arguments` into a proper Array
                        var args = new Array(arguments.length);
                        for (var i = 0; i < args.length; i++) {
                            args[i] = arguments[i];
                        }

                        args[0] = exports.coerce(args[0]);

                        if ("string" !== typeof args[0]) {
                            // anything else let's inspect with %O
                            args.unshift("%O");
                        }

                        // apply any `formatters` transformations
                        var index = 0;
                        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(
                            match,
                            format
                        ) {
                            // if we encounter an escaped % then don't increase the array index
                            if (match === "%%") return match;
                            index++;
                            var formatter = exports.formatters[format];
                            if ("function" === typeof formatter) {
                                var val = args[index];
                                match = formatter.call(self, val);

                                // now we need to remove `args[index]` since it's inlined in the `format`
                                args.splice(index, 1);
                                index--;
                            }
                            return match;
                        });

                        // apply env-specific formatting (colors, etc.)
                        exports.formatArgs.call(self, args);

                        var logFn = debug.log || exports.log || console.log.bind(console);
                        logFn.apply(self, args);
                    }

                    debug.namespace = namespace;
                    debug.enabled = exports.enabled(namespace);
                    debug.useColors = exports.useColors();
                    debug.color = selectColor(namespace);
                    debug.destroy = destroy;

                    // env-specific initialization logic for debug instances
                    if ("function" === typeof exports.init) {
                        exports.init(debug);
                    }

                    exports.instances.push(debug);

                    return debug;
                }

                function destroy() {
                    var index = exports.instances.indexOf(this);
                    if (index !== -1) {
                        exports.instances.splice(index, 1);
                        return true;
                    } else {
                        return false;
                    }
                }

                /**
                 * Enables a debug mode by namespaces. This can include modes
                 * separated by a colon and wildcards.
                 *
                 * @param {String} namespaces
                 * @api public
                 */

                function enable(namespaces) {
                    exports.save(namespaces);

                    exports.names = [];
                    exports.skips = [];

                    var i;
                    var split = (typeof namespaces === "string" ? namespaces : "").split(
                        /[\s,]+/
                    );
                    var len = split.length;

                    for (i = 0; i < len; i++) {
                        if (!split[i]) continue; // ignore empty strings
                        namespaces = split[i].replace(/\*/g, ".*?");
                        if (namespaces[0] === "-") {
                            exports.skips.push(
                                new RegExp("^" + namespaces.substr(1) + "$")
                            );
                        } else {
                            exports.names.push(new RegExp("^" + namespaces + "$"));
                        }
                    }

                    for (i = 0; i < exports.instances.length; i++) {
                        var instance = exports.instances[i];
                        instance.enabled = exports.enabled(instance.namespace);
                    }
                }

                /**
                 * Disable debug output.
                 *
                 * @api public
                 */

                function disable() {
                    exports.enable("");
                }

                /**
                 * Returns true if the given mode name is enabled, false otherwise.
                 *
                 * @param {String} name
                 * @return {Boolean}
                 * @api public
                 */

                function enabled(name) {
                    if (name[name.length - 1] === "*") {
                        return true;
                    }
                    var i, len;
                    for (i = 0, len = exports.skips.length; i < len; i++) {
                        if (exports.skips[i].test(name)) {
                            return false;
                        }
                    }
                    for (i = 0, len = exports.names.length; i < len; i++) {
                        if (exports.names[i].test(name)) {
                            return true;
                        }
                    }
                    return false;
                }

                /**
                 * Coerce `val`.
                 *
                 * @param {Mixed} val
                 * @return {Mixed}
                 * @api private
                 */

                function coerce(val) {
                    if (val instanceof Error) return val.stack || val.message;
                    return val;
                }

                /***/
            },
            /* 23 */
            /***/ function(module, exports) {
                /**
                 * Helpers.
                 */

                var s = 1000;
                var m = s * 60;
                var h = m * 60;
                var d = h * 24;
                var y = d * 365.25;

                /**
                 * Parse or format the given `val`.
                 *
                 * Options:
                 *
                 *  - `long` verbose formatting [false]
                 *
                 * @param {String|Number} val
                 * @param {Object} [options]
                 * @throws {Error} throw an error if val is not a non-empty string or a number
                 * @return {String|Number}
                 * @api public
                 */

                module.exports = function(val, options) {
                    options = options || {};
                    var type = typeof val;
                    if (type === "string" && val.length > 0) {
                        return parse(val);
                    } else if (type === "number" && isNaN(val) === false) {
                        return options.long ? fmtLong(val) : fmtShort(val);
                    }
                    throw new Error(
                        "val is not a non-empty string or a valid number. val=" +
                            JSON.stringify(val)
                    );
                };

                /**
                 * Parse the given `str` and return milliseconds.
                 *
                 * @param {String} str
                 * @return {Number}
                 * @api private
                 */

                function parse(str) {
                    str = String(str);
                    if (str.length > 100) {
                        return;
                    }
                    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                        str
                    );
                    if (!match) {
                        return;
                    }
                    var n = parseFloat(match[1]);
                    var type = (match[2] || "ms").toLowerCase();
                    switch (type) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return n * y;
                        case "days":
                        case "day":
                        case "d":
                            return n * d;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return n * h;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return n * m;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return n * s;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return n;
                        default:
                            return undefined;
                    }
                }

                /**
                 * Short format for `ms`.
                 *
                 * @param {Number} ms
                 * @return {String}
                 * @api private
                 */

                function fmtShort(ms) {
                    if (ms >= d) {
                        return Math.round(ms / d) + "d";
                    }
                    if (ms >= h) {
                        return Math.round(ms / h) + "h";
                    }
                    if (ms >= m) {
                        return Math.round(ms / m) + "m";
                    }
                    if (ms >= s) {
                        return Math.round(ms / s) + "s";
                    }
                    return ms + "ms";
                }

                /**
                 * Long format for `ms`.
                 *
                 * @param {Number} ms
                 * @return {String}
                 * @api private
                 */

                function fmtLong(ms) {
                    return (
                        plural(ms, d, "day") ||
                        plural(ms, h, "hour") ||
                        plural(ms, m, "minute") ||
                        plural(ms, s, "second") ||
                        ms + " ms"
                    );
                }

                /**
                 * Pluralization helper.
                 */

                function plural(ms, n, name) {
                    if (ms < n) {
                        return;
                    }
                    if (ms < n * 1.5) {
                        return Math.floor(ms / n) + " " + name;
                    }
                    return Math.ceil(ms / n) + " " + name + "s";
                }

                /***/
            },
            /* 24 */
            /***/ function(module, exports, __webpack_require__) {
                "use strict";

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _extends =
                    Object.assign ||
                    function(target) {
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

                var _react = __webpack_require__(1);

                var _react2 = _interopRequireDefault(_react);

                var _ExtensionerManagerContext = __webpack_require__(5);

                var _ExtensionerManagerContext2 = _interopRequireDefault(
                    _ExtensionerManagerContext
                );

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj };
                }

                function withProperties(properties, WrappedComponent) {
                    return () =>
                        _react2.default.createElement(
                            _ExtensionerManagerContext2.default.Consumer,
                            null,
                            manager =>
                                _react2.default.createElement(
                                    WrappedComponent,
                                    _extends(
                                        {
                                            manager: manager
                                        },
                                        properties.reduce(
                                            (response, propName) =>
                                                Object.assign(
                                                    {
                                                        [propName]: manager.getPropertyValues(
                                                            propName
                                                        )
                                                    },
                                                    response
                                                ),
                                            {}
                                        )
                                    )
                                )
                        );
                }

                exports.default = withProperties;

                /***/
            }
            /******/
        ]
    );
});
//# sourceMappingURL=index.js.map

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@ionic-super-tabs/core/dist/esm-es5/super-tab_3.entry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ionic-super-tabs/core/dist/esm-es5/super-tab_3.entry.js ***!
  \*******************************************************************************/
/*! exports provided: super_tab, super_tabs, super_tabs_container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "super_tab", function() { return SuperTabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "super_tabs", function() { return SuperTabsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "super_tabs_container", function() { return SuperTabsContainerComponent; });
/* harmony import */ var _core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-7e187e4f.js */ "./node_modules/@ionic-super-tabs/core/dist/esm-es5/core-7e187e4f.js");
/* harmony import */ var _utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-b0b0ce49.js */ "./node_modules/@ionic-super-tabs/core/dist/esm-es5/utils-b0b0ce49.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var SuperTabComponent = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    /**
     * Returns the root scrollable element
     */
    class_1.prototype.getRootScrollableEl = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ionContent;
            return __generator(this, function (_a) {
                if (this.el.scrollHeight > this.el.clientHeight) {
                    return [2 /*return*/, this.el];
                }
                ionContent = this.el.querySelector('ion-content');
                if (ionContent) {
                    return [2 /*return*/, ionContent.getScrollElement()];
                }
                return [2 /*return*/, null];
            });
        });
    };
    class_1.prototype.render = function () {
        return Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{height:var(--super-tab-height,100%);position:relative;display:block;overflow:hidden;z-index:1;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0;width:var(--super-tab-width,100vw);-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased}ion-content,ion-nav{height:100%;max-height:100%;position:absolute}ion-content>.ion-page,ion-nav>.ion-page{position:absolute}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var SuperTabsComponent = /** @class */ (function () {
    function class_2(hostRef) {
        Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Initial active tab index.
         * Defaults to `0`.
         *
         * @type {number}
         */
        this.activeTabIndex = 0;
        this._config = _utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["D"];
        this.tabChange = Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "tabChange", 7);
    }
    /**
     * Set/update the configuration
     * @param {SuperTabsConfig} config Configuration object
     */
    class_2.prototype.setConfig = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.debug('setConfig called with: ', config);
                this._config = Object.assign(Object.assign({}, _utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["D"]), config);
                this.container && (this.container.config = this._config);
                this.toolbar && (this.toolbar.config = this._config);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Set the selected tab.
     * This will move the container and the toolbar to the selected tab.
     * @param index {number} the index of the tab you want to select
     * @param [animate=true] {boolean} whether you want to animate the transition
     */
    class_2.prototype.selectTab = function (index, animate) {
        if (animate === void 0) { animate = true; }
        return __awaiter(this, void 0, void 0, function () {
            var lastIndex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.debug('selectTab called with :', index, animate);
                        lastIndex = this.activeTabIndex;
                        if (!this.container) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.container.setActiveTabIndex(index, true, animate)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.toolbar) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toolbar.setActiveTab(index, true, animate)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.emitTabChangeEvent(index, lastIndex);
                        this.activeTabIndex = lastIndex;
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.onConfigChange = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setConfig(config)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.onWindowResize = function () {
        this.debug('onWindowResize');
        this.toolbar && this.toolbar.setSelectedTab(this.activeTabIndex);
        this.container.reindexTabs();
    };
    class_2.prototype.componentDidLoad = function () {
        var _this = this;
        this.debug('componentDidLoad');
        // listen to `slotchange` event to detect any changes in children
        this.el.shadowRoot.addEventListener('slotchange', this.onSlotchange.bind(this));
        requestAnimationFrame(function () {
            _this.container.moveContainerByIndex(_this.activeTabIndex, false);
            _this.toolbar && _this.toolbar.setSelectedTab(_this.activeTabIndex, false);
        });
    };
    class_2.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.debug('componentWillLoad');
                        if (!this.config) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setConfig(this.config)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // index children
                        this.indexChildren();
                        // set the selected tab so the toolbar & container are aligned and in sync
                        // this.selectTab(this.activeTabIndex);
                        this.container && this.container.setActiveTabIndex(this.activeTabIndex);
                        this.toolbar && this.toolbar.setActiveTab(this.activeTabIndex);
                        // setup event listeners so we can synchronize child components
                        // 1. listen to selectedTabIndex changes emitted by the container.
                        this.container && this.el.addEventListener('selectedTabIndexChange', this.onContainerSelectedTabChange.bind(this));
                        // 2. listen to activeTabIndex changes emitted by the container
                        this.container && this.el.addEventListener('activeTabIndexChange', this.onContainerActiveTabChange.bind(this));
                        // 3. listen to tab button clicks emitted by the toolbar
                        this.toolbar && this.el.addEventListener('buttonClick', this.onToolbarButtonClick.bind(this));
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.onContainerSelectedTabChange = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.toolbar) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toolbar.setSelectedTab(ev.detail)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.emitTabChangeEvent = function (newIndex, oldIndex) {
        if (typeof newIndex !== 'number' || newIndex < 0) {
            return;
        }
        if (typeof oldIndex !== 'number' || oldIndex < 0) {
            oldIndex = this.activeTabIndex;
        }
        this.tabChange.emit({
            changed: newIndex !== oldIndex,
            index: newIndex,
        });
    };
    class_2.prototype.onContainerActiveTabChange = function (ev) {
        this.debug('onContainerActiveTabChange called with: ', ev);
        var index = ev.detail;
        this.emitTabChangeEvent(index);
        this.activeTabIndex = index;
        this.toolbar && this.toolbar.setActiveTab(index, true, true);
    };
    class_2.prototype.onToolbarButtonClick = function (ev) {
        this.debug('onToolbarButtonClick called with: ', ev);
        var index = ev.detail.index;
        this.container && this.container.setActiveTabIndex(index, true, true);
        this.emitTabChangeEvent(index);
        this.activeTabIndex = index;
    };
    class_2.prototype.indexChildren = function () {
        this.debug('indexChildren called');
        var container = this.el.querySelector('super-tabs-container');
        var toolbar = this.el.querySelector('super-tabs-toolbar');
        if (container && this.container !== container) {
            this.container = container;
            container.config = this._config;
        }
        if (toolbar && this.toolbar !== toolbar) {
            this.toolbar = toolbar;
            toolbar.config = this._config;
        }
    };
    class_2.prototype.onSlotchange = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.debug('onSlotChange fired');
                // re-index the child components
                this.indexChildren();
                // reselect the current tab to ensure that we're on the correct tab
                this.selectTab(this.activeTabIndex);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Internal method to output values in debug mode.
     */
    class_2.prototype.debug = function () {
        var vals = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vals[_i] = arguments[_i];
        }
        Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this._config, 'tabs', vals);
    };
    class_2.prototype.render = function () {
        // Render 3 slots
        // Top & bottom slots allow the toolbar position to be configurable via slots.
        // The nameless slot is used to hold the `super-tabs-container`.
        return (Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "top" }), Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "bottom" })));
    };
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "watchers", {
        get: function () {
            return {
                "config": ["onConfigChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "style", {
        get: function () { return ":host{height:100%;max-height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;z-index:1;position:relative;contain:layout size style;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-ms-touch-action:none;touch-action:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var SuperTabsContainerComponent = /** @class */ (function () {
    function class_3(hostRef) {
        Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Enable/disable swiping
         */
        this.swipeEnabled = true;
        /**
         * Set to true to automatically scroll to the top of the tab when the button is clicked while the tab is
         * already selected.
         */
        this.autoScrollTop = false;
        this.tabs = [];
        this.isDragging = false;
        this.leftThreshold = 0;
        this.rightThreshold = 0;
        this.scrollWidth = 0;
        this.clientWidth = 0;
        this.activeTabIndexChange = Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "activeTabIndexChange", 7);
        this.selectedTabIndexChange = Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "selectedTabIndexChange", 7);
        this.queue = Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "queue");
    }
    class_3.prototype.componentDidLoad = function () {
        this.debug('componentDidLoad');
        this.slot = this.el.shadowRoot.querySelector('slot');
        this.slot.addEventListener('slotchange', this.onSlotChange.bind(this));
    };
    class_3.prototype.onSlotChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tabs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tabs = Array.from(this.el.querySelectorAll('super-tab'));
                        return [4 /*yield*/, Promise.all(tabs.map(function (t) { return t.componentOnReady(); }))];
                    case 1:
                        _a.sent();
                        this.tabs = tabs;
                        this.debug('onSlotChange', 'total tabs:', this.tabs.length);
                        if (this.ready && typeof this._activeTabIndex === 'number') {
                            this.moveContainerByIndex(this._activeTabIndex, true);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.componentWillUpdate = function () {
        this.debug('componentDidUpdate fired');
        this.indexTabs();
    };
    /**
     * @internal
     */
    class_3.prototype.reindexTabs = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.indexTabs();
                return [2 /*return*/];
            });
        });
    };
    /**
     * @internal
     *
     * Moves the container to align with the specified tab index
     * @param index {number} Index of the tab
     * @param animate {boolean} Whether to animate the transition
     */
    class_3.prototype.moveContainerByIndex = function (index, animate) {
        this.debug('moveContainerByIndex called with:', index, animate);
        var scrollX = this.indexToPosition(index);
        if (scrollX === 0 && index > 0) {
            this.debug('moveContainerByIndex', 'scrollX === 0 && index > 0');
            return Promise.resolve();
        }
        return this.moveContainer(scrollX, animate);
    };
    /**
     * @internal
     *
     * Sets the scrollLeft property of the container
     * @param scrollX {number}
     * @param animate {boolean}
     */
    class_3.prototype.moveContainer = function (scrollX, animate) {
        this.debug('moveContainer', scrollX, animate);
        Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["s"])(this.el, scrollX, 0, animate ? this.config.transitionDuration : 0, this.queue);
        return Promise.resolve();
    };
    /** @internal */
    class_3.prototype.setActiveTabIndex = function (index, moveContainer, animate) {
        if (moveContainer === void 0) { moveContainer = true; }
        if (animate === void 0) { animate = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.debug('setActiveTabIndex', index);
                        if (!(this._activeTabIndex === index)) return [3 /*break*/, 2];
                        if (!this.autoScrollTop) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.scrollToTop()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!moveContainer) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.moveContainerByIndex(index, animate)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.updateActiveTabIndex(index, false)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Scroll the active tab to the top.
     */
    class_3.prototype.scrollToTop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var current;
            var _this = this;
            return __generator(this, function (_a) {
                if (this._activeTabIndex === undefined) {
                    return [2 /*return*/];
                }
                current = this.tabs[this._activeTabIndex];
                this.queue.read(function () {
                    current.getRootScrollableEl()
                        .then(function (el) {
                        if (el) {
                            Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["s"])(el, 0, 0, _this.config.transitionDuration, _this.queue);
                        }
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.updateActiveTabIndex = function (index, emit) {
        if (emit === void 0) { emit = true; }
        this.debug('updateActiveTabIndex', index, emit, this._activeTabIndex);
        this._activeTabIndex = index;
        emit && this.activeTabIndexChange.emit(this._activeTabIndex);
    };
    class_3.prototype.updateSelectedTabIndex = function (index) {
        if (index === this._selectedTabIndex) {
            return;
        }
        this._selectedTabIndex = index;
        this.selectedTabIndexChange.emit(this._selectedTabIndex);
    };
    class_3.prototype.onTouchStart = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var avoid, element, coords, vw;
            return __generator(this, function (_a) {
                if (!this.swipeEnabled) {
                    return [2 /*return*/];
                }
                if (this.config.avoidElements) {
                    avoid = false;
                    element = ev.target;
                    if (element) {
                        do {
                            if (typeof element.getAttribute === 'function' && element.getAttribute('avoid-super-tabs')) {
                                return [2 /*return*/];
                            }
                            element = element.parentElement;
                        } while (element && !avoid);
                    }
                }
                coords = Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["p"])(ev);
                vw = this.clientWidth;
                if (coords.x < this.leftThreshold || coords.x > vw - this.rightThreshold) {
                    // ignore this gesture, it started in the side menu touch zone
                    return [2 /*return*/];
                }
                if (this.config.shortSwipeDuration > 0) {
                    this.initialTimestamp = Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["b"])();
                }
                this.initialCoords = coords;
                this.lastPosX = coords.x;
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.onClick = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.isDragging) {
                    ev.stopImmediatePropagation();
                    ev.preventDefault();
                }
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.onTouchMove = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var coords, shouldCapture, deltaX, scrollLeft, scrollX;
            return __generator(this, function (_a) {
                if (!this.swipeEnabled || !this.initialCoords || typeof this.lastPosX !== 'number') {
                    return [2 /*return*/];
                }
                coords = Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["p"])(ev);
                if (!this.isDragging) {
                    shouldCapture = Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["c"])(coords, this.initialCoords, this.config);
                    if (!shouldCapture) {
                        if (Math.abs(coords.y - this.initialCoords.y) > 100) {
                            this.initialCoords = void 0;
                            this.lastPosX = void 0;
                        }
                        return [2 /*return*/];
                    }
                    // gesture is good, let's capture all next onTouchMove events
                    this.isDragging = true;
                }
                // scroll container
                if (!this.isDragging) {
                    return [2 /*return*/];
                }
                // stop anything else from capturing these events, to make sure the content doesn't slide
                if (!this.config.allowElementScroll) {
                    ev.stopImmediatePropagation();
                }
                deltaX = this.lastPosX - coords.x;
                if (deltaX === 0) {
                    return [2 /*return*/];
                }
                scrollLeft = Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this.el);
                scrollX = Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.el, deltaX);
                if (scrollX === scrollLeft) {
                    return [2 /*return*/];
                }
                this.updateSelectedTabIndex(this.positionToIndex(scrollX));
                // update last X value
                this.lastPosX = coords.x;
                this.moveContainer(scrollX, false);
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.onTouchEnd = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var coords, deltaTime, shortSwipe, shortSwipeDelta;
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.swipeEnabled || !this.isDragging) {
                    return [2 /*return*/];
                }
                coords = Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["p"])(ev);
                deltaTime = Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["b"])() - this.initialTimestamp;
                shortSwipe = this.config.shortSwipeDuration > 0 && deltaTime <= this.config.shortSwipeDuration;
                shortSwipeDelta = coords.x - this.initialCoords.x;
                this.queue.read(function () {
                    var selectedTabIndex = _this.calcSelectedTab();
                    var expectedTabIndex = Math.round(selectedTabIndex);
                    if (shortSwipe && expectedTabIndex === _this._activeTabIndex) {
                        selectedTabIndex += shortSwipeDelta > 0 ? -1 : 1;
                    }
                    selectedTabIndex = _this.normalizeSelectedTab(selectedTabIndex);
                    _this.updateActiveTabIndex(selectedTabIndex);
                    _this.moveContainerByIndex(selectedTabIndex, true);
                });
                this.isDragging = false;
                this.initialCoords = void 0;
                this.lastPosX = void 0;
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.indexTabs = function () {
        var _this = this;
        this.scrollWidth = this.el.scrollWidth;
        this.clientWidth = this.el.clientWidth;
        this.debug('indexTab called', 'scrollWidth:', this.scrollWidth, 'clientWidth:', this.clientWidth);
        if (this.scrollWidth === 0 || this.clientWidth === 0) {
            requestAnimationFrame(function () {
                _this.indexTabs();
            });
            return;
        }
        if (this.config) {
            switch (this.config.sideMenu) {
                case 'both':
                    this.rightThreshold = this.leftThreshold = this.config.sideMenuThreshold || 0;
                    break;
                case 'left':
                    this.leftThreshold = this.config.sideMenuThreshold || 0;
                    break;
                case 'right':
                    this.rightThreshold = this.config.sideMenuThreshold || 0;
                    break;
            }
        }
        if (this._activeTabIndex !== undefined) {
            this.moveContainerByIndex(this._activeTabIndex, false)
                .then(function () {
                _this.ready = true;
            });
        }
    };
    class_3.prototype.calcSelectedTab = function () {
        var tabsWidth = this.scrollWidth;
        var tabWidth = this.clientWidth;
        var minX = 0;
        var maxX = tabsWidth - tabWidth;
        var scrollX = Math.max(minX, Math.min(maxX, Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this.el)));
        return this.positionToIndex(scrollX);
    };
    class_3.prototype.positionToIndex = function (scrollX) {
        this.debug('positionToIndex', scrollX, this.clientWidth);
        var tabWidth = this.clientWidth;
        return scrollX / tabWidth;
    };
    class_3.prototype.indexToPosition = function (tabIndex) {
        this.debug('indexToPosition', tabIndex, this.clientWidth);
        var tabWidth = this.clientWidth;
        return tabIndex * tabWidth;
    };
    class_3.prototype.normalizeSelectedTab = function (index) {
        var tabsWidth = this.scrollWidth;
        var tabWidth = this.clientWidth;
        var minX = 0;
        var maxX = tabsWidth - tabWidth;
        var scrollX = Math.max(minX, Math.min(maxX, tabWidth * Math.round(index)));
        return scrollX / tabWidth;
    };
    /**
     * Internal method to output values in debug mode.
     */
    class_3.prototype.debug = function () {
        var vals = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vals[_i] = arguments[_i];
        }
        Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this.config, 'container', vals);
    };
    class_3.prototype.render = function () {
        this.debug('Rendering');
        return Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
    };
    Object.defineProperty(class_3.prototype, "el", {
        get: function () { return Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_3, "style", {
        get: function () { return ":host{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;min-width:100%;-ms-flex:1 1 auto;flex:1 1 auto;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--super-tab-width,100vw);height:var(--super-tab-height,100%);overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);-ms-touch-action:pan-y;touch-action:pan-y;-moz-user-select:none;-ms-user-select:none;user-select:none;will-change:scroll-position;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased}"; },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());



/***/ })

}]);
//# sourceMappingURL=4-es5.js.map
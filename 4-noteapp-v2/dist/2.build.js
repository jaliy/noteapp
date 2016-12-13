webpackJsonp([2,4],{

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(22)

	/* script */
	__vue_exports__ = __webpack_require__(26)

	/* template */
	var __vue_template__ = __webpack_require__(27)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\github\\noteapp\\4-noteapp-v2\\src\\components\\header.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e4a1cb02", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e4a1cb02", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] header.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(25)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e4a1cb02!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e4a1cb02!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(24)();
	// imports


	// module
	exports.push([module.id, "/**less variable define*/\n/**stylesheet*/\n.head {\n  position: fixed;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  background: #42B983;\n  color: #fff;\n  left: 0;\n  top: 0;\n  width: 100%;\n  z-index: 5;\n}\n.head .btn-back {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  -webkit-box-align: center;\n  width: 1rem;\n  height: 0.8rem;\n  color: #fff;\n  font-weight: bold;\n  text-align: center;\n  font-size: .8rem;\n}\n.head .btn-back:after {\n  content: '';\n  border-bottom: 3px solid #ddd;\n  border-left: 3px solid #ddd;\n  transform: rotate(45deg);\n  display: block;\n  width: .32rem;\n  height: .32rem;\n  position: absolute;\n  left: 35%;\n  top: 50%;\n  margin-top: -0.2rem;\n}\n.head h1 {\n  text-align: center;\n  font-size: 0.4rem;\n  padding: 0 1rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n", ""]);

	// exports


/***/ },

/***/ 24:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },

/***/ 26:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		props: {
			isSubNav: Boolean,
			title: String
		},
		methods: {
			goHome: function goHome() {
				//replace不会记录history，push会记录
				//this.$router.push("/")
				this.$router.replace("/");
			}
		}
	};

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('header', {
	    staticClass: "head"
	  }, [(_vm.isSubNav) ? _h('a', {
	    staticClass: "btn-back",
	    attrs: {
	      "href": "javascript:;"
	    },
	    on: {
	      "click": _vm.goHome
	    }
	  }) : _vm._e(), " ", _h('h1', [_vm._s(_vm.title)])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-e4a1cb02", module.exports)
	  }
	}

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.confirm = exports.alert = undefined;

	var _Box = __webpack_require__(46);

	exports.alert = _Box.alert;
	exports.confirm = _Box.confirm;

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.confirm = exports.alert = undefined;

	var _vue = __webpack_require__(3);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AlertVue = _vue2.default.extend(__webpack_require__(47));

	var Message = function Message() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


		var title = options.title || "提示",
		    isConfirm = options.isConfirm === undefined || options.isConfirm === false ? false : true,
		    message = typeof options === 'string' ? options : options.message;

		return new Promise(function (resolve, reject) {
			var ins = new AlertVue({
				el: document.createElement("div")
			});

			ins.message = message;
			ins.title = title;
			ins.isConfirm = isConfirm;
			ins.onOk = function () {
				ins.visible = false;
				resolve(true);
			};
			ins.onCancel = function () {
				ins.visible = false;
				resolve(false);
			};
			document.body.appendChild(ins.$el);

			_vue2.default.nextTick(function () {
				ins.visible = true;
			});
		});
	};

	var alert = function alert() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		var title = options.title || "提示";
		var message = typeof options === 'string' ? options : options.message;

		return new Message(Object.assign({
			isConfirm: false
		}, {
			title: title,
			message: message
		}));
	};

	var confirm = function confirm() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		var title = options.title || "提示";
		var message = typeof options === 'string' ? options : options.message;

		return new Message(Object.assign({
			isConfirm: true
		}, {
			title: title,
			message: message
		}));
	};
	exports.alert = alert;
	exports.confirm = confirm;

/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(48)

	/* script */
	__vue_exports__ = __webpack_require__(50)

	/* template */
	var __vue_template__ = __webpack_require__(51)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\github\\noteapp\\4-noteapp-v2\\src\\components\\Box\\src\\box.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0199c6c0"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0199c6c0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0199c6c0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] box.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(25)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0199c6c0&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./box.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0199c6c0&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./box.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(24)();
	// imports


	// module
	exports.push([module.id, "\n.fade-enter-active[data-v-0199c6c0],\n.fade-leave-active[data-v-0199c6c0] {\n  transition: opacity 0.2s;\n}\n.fade-enter[data-v-0199c6c0],\n.fade-leave-active[data-v-0199c6c0] {\n  opacity: 0;\n}\n.ui-alert[data-v-0199c6c0] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.ui-alert .ui-msg-box[data-v-0199c6c0] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 80%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n  transform: translate3d(-50%, -50%, 0);\n  z-index: 1001;\n  background-color: #fff;\n  border-radius: 3px;\n  text-overflow: ellipsis;\n  word-break: break-word;\n  text-align: center;\n  font-size: .4rem;\n}\n.ui-alert .ui-title[data-v-0199c6c0] {\n  padding-top: .2rem;\n  padding-bottom: .2rem;\n  font-size: .4rem;\n  color: #666;\n}\n.ui-alert .ui-msg[data-v-0199c6c0] {\n  font-size: .32rem;\n  color: #999;\n  padding-bottom: .2rem;\n}\n.ui-alert .ui-buttons[data-v-0199c6c0] {\n  display: flex;\n  border-top: 1px solid #ddd;\n  height: 1rem;\n  line-height: 1rem;\n}\n.ui-alert .ui-buttons .btn[data-v-0199c6c0] {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-right: 1px solid #ddd;\n  font-size: .36rem;\n  flex: 1;\n  display: block;\n  color: #42B983;\n}\n.ui-alert .ui-mask[data-v-0199c6c0] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: .5;\n  background: #000;\n  z-index: 1000;\n}\n", ""]);

	// exports


/***/ },

/***/ 50:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		props: {
			title: String,
			message: String
		},
		data: function data() {
			return {
				isConfirm: true,
				visible: false,
				onOk: null,
				onCancel: null
			};
		},

		methods: {
			onOk: function onOk() {
				this.onOk && this.onOk();
			},
			onCancel: function onCancel() {
				this.onCancel && this.onCancel();
			}
		}
	};

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [(_vm.visible) ? _h('div', {
	    staticClass: "ui-alert"
	  }, [_h('div', {
	    staticClass: "ui-msg-box"
	  }, [_h('div', {
	    staticClass: "ui-title",
	    domProps: {
	      "textContent": _vm._s(_vm.title)
	    }
	  }, ["提示"]), " ", _h('div', {
	    staticClass: "ui-msg",
	    domProps: {
	      "textContent": _vm._s(_vm.message)
	    }
	  }), " ", _h('div', {
	    staticClass: "ui-buttons"
	  }, [_h('a', {
	    staticClass: "btn",
	    attrs: {
	      "href": "javascript:;"
	    },
	    on: {
	      "click": _vm.onOk
	    }
	  }, ["确认"]), " ", (_vm.isConfirm) ? _h('a', {
	    staticClass: "btn",
	    attrs: {
	      "href": "javascript:;"
	    },
	    on: {
	      "click": _vm.onCancel
	    }
	  }, ["取消"]) : _vm._e()])]), " ", _h('div', {
	    staticClass: "ui-mask"
	  })]) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0199c6c0", module.exports)
	  }
	}

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(55)

	/* script */
	__vue_exports__ = __webpack_require__(57)

	/* template */
	var __vue_template__ = __webpack_require__(58)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\github\\noteapp\\4-noteapp-v2\\src\\views\\create.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-cfd9c024", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-cfd9c024", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] create.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(56);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(25)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-cfd9c024!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-cfd9c024!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(24)();
	// imports


	// module
	exports.push([module.id, "\n.create .txt-editor {\n  box-shadow: 10px 10px 5px #888888;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: .8rem 0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.create .txt-editor input,\n.create .txt-editor textarea {\n  display: block;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  padding: .1rem;\n  font-size: .4rem;\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\";\n}\n.create .txt-editor input {\n  width: 100%;\n  height: .8rem;\n  line-height: .8rem;\n}\n.create .txt-editor textarea {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n}\n.create .btn-save {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: .8rem;\n  line-height: .8rem;\n  text-align: center;\n  font-size: .4rem;\n  color: #fff;\n  background-color: #42B983;\n}\n", ""]);

	// exports


/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Box = __webpack_require__(45);

	var _api = __webpack_require__(12);

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	exports.default = {
		data: function data() {
			return {
				note: {
					id: "",
					title: "",
					textValue: ""
				}
			};
		},

		components: {
			nvHead: __webpack_require__(21)
		},
		methods: {
			doSave: function doSave() {
				var _this = this;

				if (this.note.textValue === "" || this.note.title === "") {
					(0, _Box.alert)("标题和内容不为空");
					return;
				}
				var msg = null;
				if (this.note.id === "") {
					var id = _api.Storage.insertOne(this.note);
					this.note.id = id;
					msg = "添加成功！";
				} else {
					_api.Storage.updateOne(this.note);
					msg = "更新成功！";
				}
				(0, _Box.alert)(msg).then(function () {
					_this.$router.push("home");
				});
			}
		},
		beforeRouteLeave: function beforeRouteLeave(to, from, next) {
			next();
		}
	};

/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "create"
	  }, [_h('nv-head', {
	    attrs: {
	      "is-sub-nav": true,
	      "title": "新建笔记"
	    }
	  }), " ", _h('div', {
	    staticClass: "txt-editor"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.note.title),
	      expression: "note.title"
	    }],
	    attrs: {
	      "type": "text",
	      "placeholder": "标题"
	    },
	    domProps: {
	      "value": _vm._s(_vm.note.title)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.note.title = $event.target.value
	      }
	    }
	  }), " ", _h('textarea', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.note.textValue),
	      expression: "note.textValue"
	    }],
	    attrs: {
	      "placeholder": "老王笔记"
	    },
	    domProps: {
	      "value": _vm._s(_vm.note.textValue)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.note.textValue = $event.target.value
	      }
	    }
	  })]), " ", _h('a', {
	    staticClass: "btn-save",
	    attrs: {
	      "href": "javascript:;"
	    },
	    on: {
	      "click": _vm.doSave
	    }
	  }, ["保存"])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-cfd9c024", module.exports)
	  }
	}

/***/ }

});
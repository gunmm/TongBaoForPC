/*! vue-ydui v0.4.4 by YDCSS (c) 2017 Licensed MIT */ ! function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e(require("Vue")) : "function" == typeof define && define.amd ? define(["Vue"], e) : "object" == typeof exports ? exports.ydui = e(require("Vue")) : t.ydui = e(t.Vue)
}(this, function(t) {
	return function(t) {
		function e(i) {
			if(n[i]) return n[i].exports;
			var a = n[i] = {
				exports: {},
				id: i,
				loaded: !1
			};
			return t[i].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports
		}
		var n = {};
		return e.m = t, e.c = n, e.p = "/dist/", e(0)
	}([function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), n(8);
		var i = n(170),
			a = n(180),
			s = n(163),
			r = n(183),
			o = n(164),
			l = n(192),
			c = n(176),
			A = n(177),
			u = n(182),
			d = n(178),
			f = n(186),
			h = n(162),
			p = n(194),
			v = n(193),
			m = n(188),
			g = n(161),
			w = n(189),
			C = n(179),
			y = n(190),
			B = n(191),
			b = n(165),
			_ = n(185),
			E = n(181),
			x = n(167),
			I = n(187),
			Q = n(195),
			L = n(184),
			M = n(168);
		window.document.addEventListener("touchstart", function(t) {}, !1);
		var k = function(t) {
			t.prototype.$dialog = {
				confirm: i.Confirm,
				alert: i.Alert,
				toast: i.Toast,
				notify: i.Notify,
				loading: i.Loading
			}
		};
		"undefined" != typeof window && window.Vue && k(window.Vue), e.default = {
			install: k
		}
	}, function(t, e) {
		t.exports = function(t, e, n, i) {
			var a, s = t = t || {},
				r = typeof t.default;
			"object" !== r && "function" !== r || (a = t, s = t.default);
			var o = "function" == typeof s ? s.options : s;
			if(e && (o.render = e.render, o.staticRenderFns = e.staticRenderFns), n && (o._scopeId = n), i) {
				var l = o.computed || (o.computed = {});
				Object.keys(i).forEach(function(t) {
					var e = i[t];
					l[t] = function() {
						return e
					}
				})
			}
			return {
				esModule: a,
				exports: s,
				options: o
			}
		}
	}, , function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = function() {
				var t = function(t) {
						t.preventDefault(), t.stopPropagation()
					},
					e = !1;
				return {
					lock: function() {
						e || (e = !0, document.addEventListener("touchmove", t))
					},
					unlock: function() {
						e = !1, document.removeEventListener("touchmove", t)
					}
				}
			}(),
			i = function(t) {
				var e = /^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,
					n = /^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,
					i = /^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;
				return e.test(t) || n.test(t) || i.test(t)
			},
			a = function(t) {
				for(var e = t; e && "HTML" !== e.tagName && "BODY" !== e.tagName && 1 === e.nodeType;) {
					var n = document.defaultView.getComputedStyle(e).overflowY;
					if("scroll" === n || "auto" === n) return e;
					e = e.parentNode
				}
				return window
			},
			s = function(t, e) {
				var n = t == window ? document.body.offsetHeight : t.offsetHeight,
					i = t === window ? 0 : t.getBoundingClientRect().top,
					a = e.getBoundingClientRect().top - i,
					s = a + e.offsetHeight;
				return a >= 0 && a < n || s > 0 && s <= n
			},
			r = function(t, e) {
				return e = e || "", 0 != e.replace(/\s/g, "").length && new RegExp(" " + e + " ").test(" " + t.className + " ")
			},
			o = function(t, e) {
				r(t, e) || (t.className = "" == t.className ? e : t.className + " " + e)
			},
			l = function(t, e) {
				if(r(t, e)) {
					for(var n = " " + t.className.replace(/[\t\r\n]/g, "") + " "; n.indexOf(" " + e + " ") >= 0;) n = n.replace(" " + e + " ", " ");
					t.className = n.replace(/^\s+|\s+$/g, "")
				}
			};
		e.pageScroll = n, e.isColor = i, e.getScrollview = a, e.checkInview = s, e.addClass = o, e.removeClass = l
	}, , function(e, n) {
		e.exports = t
	}, function(t, e, n) {
		n(17);
		var i = n(1)(n(121), n(85), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		function i(t, e) {
			for(var n = 0; n < t.length; n++) {
				var i = t[n],
					a = f[i.id];
				if(a) {
					a.refs++;
					for(var s = 0; s < a.parts.length; s++) a.parts[s](i.parts[s]);
					for(; s < i.parts.length; s++) a.parts.push(c(i.parts[s], e))
				} else {
					for(var r = [], s = 0; s < i.parts.length; s++) r.push(c(i.parts[s], e));
					f[i.id] = {
						id: i.id,
						refs: 1,
						parts: r
					}
				}
			}
		}

		function a(t) {
			for(var e = [], n = {}, i = 0; i < t.length; i++) {
				var a = t[i],
					s = a[0],
					r = a[1],
					o = a[2],
					l = a[3],
					c = {
						css: r,
						media: o,
						sourceMap: l
					};
				n[s] ? n[s].parts.push(c) : e.push(n[s] = {
					id: s,
					parts: [c]
				})
			}
			return e
		}

		function s(t, e) {
			var n = v(),
				i = w[w.length - 1];
			if("top" === t.insertAt) i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), w.push(e);
			else {
				if("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
				n.appendChild(e)
			}
		}

		function r(t) {
			t.parentNode.removeChild(t);
			var e = w.indexOf(t);
			e >= 0 && w.splice(e, 1)
		}

		function o(t) {
			var e = document.createElement("style");
			return e.type = "text/css", s(t, e), e
		}

		function l(t) {
			var e = document.createElement("link");
			return e.rel = "stylesheet", s(t, e), e
		}

		function c(t, e) {
			var n, i, a;
			if(e.singleton) {
				var s = g++;
				n = m || (m = o(e)), i = A.bind(null, n, s, !1), a = A.bind(null, n, s, !0)
			} else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(e), i = d.bind(null, n), a = function() {
				r(n), n.href && URL.revokeObjectURL(n.href)
			}) : (n = o(e), i = u.bind(null, n), a = function() {
				r(n)
			});
			return i(t),
				function(e) {
					if(e) {
						if(e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
						i(t = e)
					} else a()
				}
		}

		function A(t, e, n, i) {
			var a = n ? "" : i.css;
			if(t.styleSheet) t.styleSheet.cssText = C(e, a);
			else {
				var s = document.createTextNode(a),
					r = t.childNodes;
				r[e] && t.removeChild(r[e]), r.length ? t.insertBefore(s, r[e]) : t.appendChild(s)
			}
		}

		function u(t, e) {
			var n = e.css,
				i = e.media;
			if(i && t.setAttribute("media", i), t.styleSheet) t.styleSheet.cssText = n;
			else {
				for(; t.firstChild;) t.removeChild(t.firstChild);
				t.appendChild(document.createTextNode(n))
			}
		}

		function d(t, e) {
			var n = e.css,
				i = e.sourceMap;
			i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
			var a = new Blob([n], {
					type: "text/css"
				}),
				s = t.href;
			t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
		}
		var f = {},
			h = function(t) {
				var e;
				return function() {
					return "undefined" == typeof e && (e = t.apply(this, arguments)), e
				}
			},
			p = h(function() {
				return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
			}),
			v = h(function() {
				return document.head || document.getElementsByTagName("head")[0]
			}),
			m = null,
			g = 0,
			w = [];
		t.exports = function(t, e) {
			e = e || {}, "undefined" == typeof e.singleton && (e.singleton = p()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
			var n = a(t);
			return i(n, e),
				function(t) {
					for(var s = [], r = 0; r < n.length; r++) {
						var o = n[r],
							l = f[o.id];
						l.refs--, s.push(l)
					}
					if(t) {
						var c = a(t);
						i(c, e)
					}
					for(var r = 0; r < s.length; r++) {
						var l = s[r];
						if(0 === l.refs) {
							for(var A = 0; A < l.parts.length; A++) l.parts[A]();
							delete f[l.id]
						}
					}
				}
		};
		var C = function() {
			var t = [];
			return function(e, n) {
				return t[e] = n, t.filter(Boolean).join("\n")
			}
		}()
	}, function(t, e, n) {
		var i = n(9);
		"string" == typeof i && (i = [
			[t.id, i, ""]
		]);
		n(7)(i, {});
		i.locals && (t.exports = i.locals)
	}, function(t, e, n) {
		//		e = t.exports = n(10)(), e.push([t.id, '*,:after,:before{box-sizing:border-box;outline:none}body,html{height:100%}body{background-color:#f5f5f5;font-size:12px;-webkit-font-smoothing:antialiased;font-family:arial,sans-serif}blockquote,body,button,dd,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,hr,iframe,input,legend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0}article,aside,audio,details,figcaption,figure,footer,header,img,mark,menu,nav,section,summary,time,video{display:block;margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%}fieldset,img{border:0}address,caption,cite,dfn,em,i,th,var{font-style:normal;font-weight:400}ol,ul{list-style:none}a{color:inherit}a,a:hover{text-decoration:none}a,button,input,label{-webkit-tap-highlight-color:rgba(0,0,0,0)}button,input{font:100% tahoma,\\5b8b\\4f53,arial;vertical-align:baseline;border-radius:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none}button::-moz-focus-inner,input[type=button]::-moz-focus-inner,input[type=file]>input[type=button]::-moz-focus-inner,input[type=reset]::-moz-focus-inner,input[type=submit]::-moz-focus-inner{border:none}input[type=checkbox],input[type=radio]{vertical-align:middle}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none!important;-moz-appearance:none!important;margin:0}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px #fff inset}textarea{outline:none;border-radius:0;-webkit-appearance:none;-moz-appearance:none;overflow:auto;resize:none;font:100% tahoma,\\5b8b\\4f53,arial}@font-face{font-family:YDUI-INLAY;src:url(data:application/x-font-ttf;charset=utf-8;base64,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) format("truetype")}.g-fix-ios-overflow-scrolling-bug{-webkit-overflow-scrolling:auto!important}', ""])
	}, function(t, e) {
		t.exports = function() {
			var t = [];
			return t.toString = function() {
				for(var t = [], e = 0; e < this.length; e++) {
					var n = this[e];
					n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
				}
				return t.join("")
			}, t.i = function(e, n) {
				"string" == typeof e && (e = [
					[null, e, ""]
				]);
				for(var i = {}, a = 0; a < this.length; a++) {
					var s = this[a][0];
					"number" == typeof s && (i[s] = !0)
				}
				for(a = 0; a < e.length; a++) {
					var r = e[a];
					"number" == typeof r[0] && i[r[0]] || (n && !r[2] ? r[2] = n : n && (r[2] = "(" + r[2] + ") and (" + n + ")"), t.push(r))
				}
			}, t
		}
	}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e, n) {
		n(31);
		var i = n(1)(n(118), n(114), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(32);
		var i = n(1)(n(119), n(117), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(120), n(97), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(122), n(86), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(25);
		var i = n(1)(n(123), n(99), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(13);
		var i = n(1)(n(124), n(81), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(125), n(100), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(126), n(89), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(11);
		var i = n(1)(n(127), n(75), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(128), n(107), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(129), n(91), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(130), n(101), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(131), n(77), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(132), n(111), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(21);
		var i = n(1)(n(133), n(93), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(26);
		var i = n(1)(n(134), n(103), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(135), n(113), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(29);
		var i = n(1)(n(136), n(110), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(15);
		var i = n(1)(n(137), n(83), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(138), n(102), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(139), n(94), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(140), n(88), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(24);
		var i = n(1)(n(141), n(98), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(142), n(109), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(143), n(106), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(27);
		var i = n(1)(n(144), n(104), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(19);
		var i = n(1)(n(145), n(90), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(23);
		var i = n(1)(n(146), n(96), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(147), n(105), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(30);
		var i = n(1)(n(148), n(112), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(149), n(78), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(14);
		var i = n(1)(n(150), n(82), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(151), n(79), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(152), n(76), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(22);
		var i = n(1)(n(153), n(95), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(12);
		var i = n(1)(n(154), n(80), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(28);
		var i = n(1)(n(155), n(108), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(156), n(116), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(16);
		var i = n(1)(n(157), n(84), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		var i = n(1)(n(158), n(115), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(20);
		var i = n(1)(n(159), n(92), null, null);
		t.exports = i.exports
	}, function(t, e, n) {
		n(18);
		var i = n(1)(n(160), n(87), null, null);
		t.exports = i.exports
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "mask-black-dialog"
				}, [n("div", {
					staticClass: "m-confirm m-alert"
				}, [n("div", {
					staticClass: "confirm-bd",
					domProps: {
						innerHTML: t._s(t.mes)
					}
				}), t._v(" "), n("div", {
					staticClass: "confirm-ft"
				}, [n("a", {
					staticClass: "confirm-btn primary",
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: function(e) {
							e.stopPropagation(), t.closeAlert(e)
						}
					}
				}, [t._v("确定")])])])])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "slider-item"
				}, [t._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "mask-white-dialog"
				}, [n("div", {
					staticClass: "m-toast",
					class: "" == t.iconsClass ? "toast-none-icon" : ""
				}, [t.iconsClass ? n("div", {
					class: t.iconsClass
				}) : t._e(), t._v(" "), n("p", {
					staticClass: "toast-content",
					domProps: {
						innerHTML: t._s(t.mes)
					}
				})])])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "scrolltab-content-item"
				}, [n("strong", {
					staticClass: "scrolltab-content-title"
				}, [t._v(t._s(t.label))]), t._v(" "), t._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("yd-button", {
					class: t.start ? "btn-disabled" : "",
					style: {
						backgroundColor: t.bgcolor,
						color: t.color
					},
					attrs: {
						size: t.size,
						type: t.type,
						disabled: t.start
					}
				}, [t._v("\n    " + t._s(t.tmpStr) + "\n")])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("span", {
					staticClass: "m-spinner"
				}, [n("a", {
					ref: "minus",
					attrs: {
						href: "javascript:;"
					}
				}), t._v(" "), n("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: t.counter,
						expression: "counter"
					}],
					ref: "numInput",
					attrs: {
						type: "text",
						readonly: t.readonly,
						placeholder: ""
					},
					domProps: {
						value: t._s(t.counter)
					},
					on: {
						input: function(e) {
							e.target.composing || (t.counter = e.target.value)
						}
					}
				}), t._v(" "), n("a", {
					ref: "add",
					attrs: {
						href: "javascript:;"
					}
				})])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", [n("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.show,
						expression: "show"
					}],
					staticClass: "mask-cityselect",
					on: {
						click: function(e) {
							e.stopPropagation(), t.close(e)
						}
					}
				}), t._v(" "), n("div", {
					staticClass: "m-cityselect",
					class: t.show ? "cityselect-active" : ""
				}, [n("div", {
					staticClass: "cityselect-header"
				}, [n("p", {
					staticClass: "cityselect-title"
				}, [t._v("所在地区")]), t._v(" "), n("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.ready,
						expression: "ready"
					}],
					staticClass: "cityselect-nav"
				}, [n("a", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: !!t.nav.txt1,
						expression: "!!nav.txt1"
					}],
					class: 0 == t.nav.index ? "cityselect-nav-active" : "",
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: function(e) {
							e.stopPropagation(), t.backoffView(0)
						}
					}
				}, [t._v(t._s(t.nav.txt1))]), t._v(" "), n("a", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: !!t.nav.txt2,
						expression: "!!nav.txt2"
					}],
					class: 1 == t.nav.index ? "cityselect-nav-active" : "",
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: function(e) {
							e.stopPropagation(), t.backoffView(1)
						}
					}
				}, [t._v(t._s(t.nav.txt2))]), t._v(" "), n("a", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: !!t.nav.txt3,
						expression: "!!nav.txt3"
					}],
					class: 2 == t.nav.index ? "cityselect-nav-active" : "",
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: function(e) {
							e.stopPropagation(), t.forwardView(!0)
						}
					}
				}, [t._v(t._s(t.nav.txt3))])])]), t._v(" "), n("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: !t.ready,
						expression: "!ready"
					}],
					staticClass: "cityselect-loading"
				}, [t._v("加载中")]), t._v(" "), n("ul", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.ready,
						expression: "ready"
					}],
					staticClass: "cityselect-content",
					class: t.activeClasses
				}, [n("li", {
					ref: "provanceBox",
					staticClass: "cityselect-item"
				}, [n("div", {
					staticClass: "cityselect-item-box"
				}, t._l(t.citys, function(e) {
					return n("a", {
						class: e.n == t.activeProvance ? "cityselect-item-active" : "",
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(n) {
								n.stopPropagation(), t.chooseProvance(e.n, e.c)
							}
						}
					}, [n("span", [t._v(t._s(e.n))])])
				}))]), t._v(" "), n("li", {
					ref: "cityBox",
					staticClass: "cityselect-item"
				}, [n("div", {
					staticClass: "cityselect-item-box"
				}, t._l(t.cityArray, function(e) {
					return n("a", {
						class: e.n == t.activeCity ? "cityselect-item-active" : "",
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(n) {
								n.stopPropagation(), t.chooseCity(e.n, e.a)
							}
						}
					}, [n("span", [t._v(t._s(e.n))])])
				}))]), t._v(" "), n("li", {
					ref: "areaBox",
					staticClass: "cityselect-item"
				}, [n("div", {
					staticClass: "cityselect-item-box"
				}, t._l(t.areaArray, function(e) {
					return n("a", {
						class: e == t.activeArea ? "cityselect-item-active" : "",
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(n) {
								n.stopPropagation(), t.chooseArea(e)
							}
						}
					}, [n("span", [t._v(t._s(e))])])
				}))])])])])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "m-scrolltab"
				}, [n("div", {
					staticClass: "scrolltab-nav"
				}, t._l(t.navList, function(e) {
					return n("a", {
						staticClass: "scrolltab-item",
						class: t.activeIndex == e._uid ? "scrolltab-active" : "",
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(n) {
								t.moveHandler(e._uid)
							}
						}
					}, [n("div", {
						staticClass: "scrolltab-icon"
					}, [n("i", {
						class: e.icon
					})]), t._v(" "), n("div", {
						staticClass: "scrolltab-title"
					}, [t._v(t._s(e.label))])])
				})), t._v(" "), n("div", {
					ref: "scrollView",
					staticClass: "scrolltab-content"
				}, [t._t("default")], 2)])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("section", {
					staticClass: "g-flexview"
				}, [t.showNavbar ? t._t("navbar", [t.title ? n("yd-navbar", {
					attrs: {
						title: t.title
					}
				}, [n("router-link", {
					attrs: {
						to: t.link || "/"
					},
					slot: "left"
				}, [n("yd-navbar-back-icon")], 1)], 1) : t._e()]) : t._e(), t._v(" "), n("section", {
					ref: "scrollView",
					staticClass: "g-scrollview"
				}, [t._t("default")], 2), t._v(" "), t._t("tabbar")], 2)
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "m-tab",
					attrs: {
						id: "J_Tab"
					}
				}, [n("ul", {
					staticClass: "tab-nav"
				}, t._l(t.navList, function(e) {
					return n("li", {
						staticClass: "tab-nav-item",
						class: e._uid == t.activeIndex ? "tab-active" : "",
						on: {
							click: function(n) {
								t.changeHandler(e._uid, e.label)
							}
						}
					}, [n("a", {
						attrs: {
							href: "javascript:;"
						}
					}, [t._v(t._s(e.label))])])
				})), t._v(" "), n("div", {
					staticClass: "tab-panel"
				}, [t._t("default")], 2)])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("button", {
					class: t.classes,
					style: {
						backgroundColor: t.bgcolor,
						color: t.color
					},
					attrs: {
						disabled: t.disabled
					}
				}, [t._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "m-cell"
				}, [t.title ? n("div", {
					staticClass: "cell-title"
				}, [t._v(t._s(t.title))]) : t._e(), t._v(" "), t._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "m-textarea"
				}, [n("textarea", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: t.mlstr,
						expression: "mlstr"
					}],
					attrs: {
						placeholder: t.placeholder,
						maxlength: t.maxlength,
						readonly: t.readonly
					},
					domProps: {
						value: t._s(t.mlstr)
					},
					on: {
						input: function(e) {
							e.target.composing || (t.mlstr = e.target.value)
						}
					}
				}), t._v(" "), t.showCounter && t.maxlength ? n("div", {
					staticClass: "textarea-counter"
				}, [t._v(t._s(t.num) + "/" + t._s(t.maxlength))]) : t._e()])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "list-other"
				}, [t._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("span")
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", [n("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.show,
						expression: "show"
					}],
					staticClass: "m-popup-mask",
					on: {
						click: function(e) {
							e.stopPropagation(), t.close(e)
						}
					}
				}), t._v(" "), n("div", {
					class: t.classes(),
					style: t.styles()
				}, [t._t("default")], 2)])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "mask-white-dialog"
				}, [n("div", {
					staticClass: "m-loading"
				}, [n("div", {
					staticClass: "loading-icon"
				}), t._v(" "), n("div", {
					staticClass: "loading-txt",
					domProps: {
						innerHTML: t._s(t.title)
					}
				})])])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("footer", {
					staticClass: "m-tabbar tabbbar-top-line-color",
					class: t.classes,
					style: t.styles
				}, [t._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("router-link", {
					staticClass: "grids-item",
					attrs: {
						to: t.link || ""
					}
				}, [t.checkIcon ? n("div", {
					staticClass: "grids-icon"
				}, [t._t("icon")], 2) : t._e(), t._v(" "), t.checkText ? n("div", {
					staticClass: "grids-txt"
				}, [t._t("text")], 2) : t._e()])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return "link" == t.type ? n("router-link", {
					staticClass: "list-item",
					attrs: {
						to: t.href
					}
				}, [n("div", {
					staticClass: "list-img"
				}, [t._t("img")], 2), t._v(" "), n("div", {
					staticClass: "list-mes"
				}, [n("div", {
					staticClass: "list-title"
				}, [t._t("title")], 2), t._v(" "), t._t("other")], 2)]) : n("a", {
					staticClass: "list-item",
					attrs: {
						href: t.href || "javascript:;"
					}
				}, [n("div", {
					staticClass: "list-img"
				}, [t._t("img")], 2), t._v(" "), n("div", {
					staticClass: "list-mes"
				}, [n("div", {
					staticClass: "list-title"
				}, [t._t("title")], 2), t._v(" "), t._t("other")], 2)])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					ref: "slider",
					staticClass: "m-slider"
				}, [n("div", {
					ref: "warpper",
					staticClass: "slider-wrapper",
					class: "vertical" == t.direction ? "slider-wrapper-vertical" : "",
					style: t.dragStyleObject
				}, [n("div", {
					staticClass: "slider-item",
					style: t.itemHeight,
					domProps: {
						innerHTML: t._s(t.lastItem)
					}
				}), t._v(" "), t._t("default"), t._v(" "), n("div", {
					staticClass: "slider-item",
					style: t.itemHeight,
					domProps: {
						innerHTML: t._s(t.firtstItem)
					}
				})], 2), t._v(" "), n("div", {
					staticClass: "slider-pagination",
					class: "vertical" == t.direction ? "slider-pagination-vertical" : ""
				}, t._l(t.itemNums, function(e, i) {
					return n("span", {
						staticClass: "slider-pagination-item",
						class: t.paginationIndex == i ? "slider-pagination-item-active" : ""
					})
				}))])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "m-progressbar"
				}, ["line" != t.type ? n("div", {
					staticClass: "progressbar-content"
				}, [t._t("default")], 2) : t._e(), t._v(" "), n("svg", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.show,
						expression: "show"
					}],
					attrs: {
						viewBox: t.viewBox,
						preserveAspectRatio: "line" == t.type ? "none" : ""
					}
				}, [n("path", {
					attrs: {
						"fill-opacity": t.fillColor ? 1 : 0,
						d: t.getPathString,
						fill: t.fillColor,
						stroke: t.strokeColor,
						"stroke-width": t.trailWidth
					}
				}), t._v(" "), n("path", {
					ref: "trailPath",
					style: {
						strokeDasharray: t.stroke.dasharray,
						strokeDashoffset: t.stroke.dashoffset
					},
					attrs: {
						"fill-opacity": "0",
						d: t.getPathString,
						stroke: t.trailColor,
						"stroke-width": t.strokeWidth ? t.strokeWidth : t.trailWidth
					}
				})])])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "m-button"
				}, [t._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("article", {
					staticClass: "m-list",
					class: t.classes
				}, [t._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return "label" == t.type || "checkbox" == t.type || "radio" == t.type ? n("label", {
					staticClass: "cell-item"
				}, [t.checkLeft ? n("span", {
					staticClass: "cell-left"
				}, [n("span", {
					staticClass: "cell-icon"
				}, [t._t("icon")], 2), t._v(" "), t._t("left")], 2) : t._e(), t._v(" "), n("label", {
					staticClass: "cell-right",
					class: t.classes
				}, [t._t("right"), t._v(" "), "checkbox" == t.type ? n("i", {
					staticClass: "cell-checkbox-icon"
				}) : t._e(), t._v(" "), "radio" == t.type ? n("i", {
					staticClass: "cell-radio-icon"
				}) : t._e()], 2)]) : "link" == t.type ? n("router-link", {
					staticClass: "cell-item",
					attrs: {
						to: t.href
					}
				}, [t.checkLeft ? n("div", {
					staticClass: "cell-left"
				}, [n("span", {
					staticClass: "cell-icon"
				}, [t._t("icon")], 2), t._v(" "), t._t("left")], 2) : t._e(), t._v(" "), n("div", {
					staticClass: "cell-right",
					class: t.classes
				}, [t._t("right")], 2)]) : "a" == t.type ? n("a", {
					staticClass: "cell-item",
					attrs: {
						href: t.href
					}
				}, [t.checkLeft ? n("div", {
					staticClass: "cell-left"
				}, [n("span", {
					staticClass: "cell-icon"
				}, [t._t("icon")], 2), t._v(" "), t._t("left")], 2) : t._e(), t._v(" "), n("div", {
					staticClass: "cell-right",
					class: t.classes
				}, [t._t("right")], 2)]) : n("div", {
					staticClass: "cell-item"
				}, [t.checkLeft ? n("div", {
					staticClass: "cell-left"
				}, [n("span", {
					staticClass: "cell-icon"
				}, [t._t("icon")], 2), t._v(" "), t._t("left")], 2) : t._e(), t._v(" "), n("div", {
					staticClass: "cell-right",
					class: t.classes
				}, [t._t("right")], 2)])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("span", [n("span", {
					domProps: {
						innerHTML: t._s(t.str)
					}
				}), t._v(" "), t.showTpl ? n("span", {
					ref: "tpl"
				}, [t._t("default")], 2) : t._e()])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "m-notify",
					class: t.classes,
					domProps: {
						innerHTML: t._s(t.mes)
					}
				})
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("img", {
					attrs: {
						src: t.defaultSrc,
						datasrc: t.src
					}
				})
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("i", {
					class: t.classes,
					style: t.styles
				})
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("header", {
					staticClass: "m-navbar navbar-bottom-line-color",
					class: t.classes,
					style: {
						backgroundColor: t.bgcolor,
						height: t.height
					}
				}, [n("div", {
					staticClass: "navbar-item"
				}, [t._t("left")], 2), t._v(" "), n("div", {
					staticClass: "navbar-center-box",
					style: {
						height: t.height
					}
				}, [n("div", {
					staticClass: "navbar-center"
				}, [t._t("center", [n("span", {
					staticClass: "center-title",
					style: {
						color: t.color,
						fontSize: t.fontsize
					}
				}, [t._v(t._s(t.title))])])], 2)]), t._v(" "), n("div", {
					staticClass: "navbar-item"
				}, [t._t("right")], 2)])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", [n("div", {
					ref: "dragBox"
				}, [t._t("default"), t._v(" "), n("div", {
					ref: "dragTip",
					staticClass: "pullrefresh-dragtip",
					class: t.dragTip.animationTiming,
					style: {
						transform: "translate3d(0, " + t.dragTip.translate + "px, 0) scale(" + t.dragTip.scale + ")"
					}
				}, [n("span", {
					class: t.dragTip.loadingIcon,
					style: {
						transform: "rotate(" + t.dragTip.iconRotate + "deg)",
						opacity: t.dragTip.iconOpacity
					}
				})])], 2), t._v(" "), t.showHelpTag ? n("div", {
					staticClass: "pullrefresh-draghelp",
					on: {
						click: function(e) {
							t.showHelpTag = !1
						}
					}
				}, [t._m(0)]) : t._e()])
			},
			staticRenderFns: [function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", [n("span", [t._v("下拉更新")])])
			}]
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("span", [t._t("default"), n("i", {
					staticClass: "next-icon",
					style: {
						color: t.color
					}
				})], 2)
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "mask-black-dialog"
				}, [n("div", {
					staticClass: "m-confirm"
				}, [n("div", {
					staticClass: "confirm-hd"
				}, [n("strong", {
					staticClass: "confirm-title",
					domProps: {
						innerHTML: t._s(t.title)
					}
				})]), t._v(" "), n("div", {
					staticClass: "confirm-bd",
					domProps: {
						innerHTML: t._s(t.mes)
					}
				}), t._v(" "), "function" == typeof t.opts ? [n("div", {
					staticClass: "confirm-ft"
				}, [n("a", {
					staticClass: "confirm-btn default",
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: function(e) {
							e.stopPropagation(), t.closeConfirm(!1)
						}
					}
				}, [t._v("取消")]), t._v(" "), n("a", {
					staticClass: "confirm-btn primary",
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: function(e) {
							e.stopPropagation(), t.closeConfirm(!1, t.opts)
						}
					}
				}, [t._v("确定")])])] : [n("div", {
					staticClass: "confirm-ft"
				}, t._l(t.opts, function(e) {
					return n("a", {
						staticClass: "confirm-btn",
						class: "boolean" == typeof e.color ? e.color ? "primary" : "default" : "",
						style: {
							color: e.color
						},
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(n) {
								n.stopPropagation(), t.closeConfirm(e.stay, e.callback)
							}
						}
					}, [t._v(t._s(e.txt))])
				}))]], 2)])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: t.checked,
						expression: "checked"
					}],
					staticClass: "m-switch",
					attrs: {
						type: "checkbox"
					},
					domProps: {
						checked: Array.isArray(t.checked) ? t._i(t.checked, null) > -1 : t.checked
					},
					on: {
						click: function(e) {
							var n = t.checked,
								i = e.target,
								a = !!i.checked;
							if(Array.isArray(n)) {
								var s = null,
									r = t._i(n, s);
								a ? r < 0 && (t.checked = n.concat(s)) : r > -1 && (t.checked = n.slice(0, r).concat(n.slice(r + 1)))
							} else t.checked = a
						}
					}
				})
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("span", [n("i", {
					staticClass: "back-icon",
					style: {
						color: t.color
					}
				}), t._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", [n("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.show,
						expression: "show"
					}],
					staticClass: "mask-keyboard",
					on: {
						click: function(e) {
							e.stopPropagation(), t.close(e)
						}
					}
				}), t._v(" "), n("div", {
					staticClass: "m-keyboard",
					class: t.show ? "keyboard-active" : ""
				}, [n("div", {
					staticClass: "keyboard-head"
				}, [n("strong", {
					ref: "laoxu"
				}, [t._v("输入数字密码")])]), t._v(" "), n("div", {
					staticClass: "keyboard-error"
				}, [t._v(t._s(t.error))]), t._v(" "), n("ul", {
					staticClass: "keyboard-password"
				}, t._l(6, function(e) {
					return n("li", [n("i", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.nums.length >= e,
							expression: "nums.length >= n"
						}]
					})])
				})), t._v(" "), n("div", {
					staticClass: "keyboard-content"
				}, [n("div", {
					staticClass: "keyboard-title"
				}, [t._v(t._s(t.title))]), t._v(" "), n("ul", {
					staticClass: "keyboard-numbers"
				}, t._l(4, function(e) {
					return n("li", [4 == e ? n("a", {
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(e) {
								e.stopPropagation(), t.close(e)
							}
						}
					}, [t._v("取消")]) : t._e(), t._v(" "), t._l(t.numsArr.slice(3 * (e - 1), 3 * e), function(e) {
						return n("a", {
							attrs: {
								href: "javascript:;"
							},
							on: {
								click: function(n) {
									n.stopPropagation(), t.numclick(e)
								}
							}
						}, [t._v(t._s(e))])
					}), t._v(" "), 4 == e ? n("a", {
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(e) {
								e.stopPropagation(), t.backspace(e)
							}
						}
					}) : t._e()], 2)
				}))])])])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", [t.title ? n("div", {
					staticClass: "m-gridstitle"
				}, [t._v(t._s(t.title))]) : t._e(), t._v(" "), n("div", {
					class: t.classes
				}, [t._t("default")], 2)])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("span", {
					staticClass: "m-rate",
					style: {
						fontSize: t.size,
						color: t.color
					}
				}, [t._l(~~t.count, function(e) {
					return n("a", {
						class: t.index >= e ? "rate-active" : "",
						style: {
							color: t.index >= e ? t.activeColor : t.color,
							paddingRight: t.padding
						},
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(n) {
								!t.readonly && t.choose(e)
							}
						}
					})
				}), t._v(" "), t.str ? n("span", {
					staticClass: "rate-text",
					domProps: {
						innerHTML: t._s(t.str)
					}
				}) : t._e()], 2)
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", [t._t("list"), t._v(" "), n("div", {
					ref: "tag"
				}), t._v(" "), n("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: !t.isLoading && t.isDone,
						expression: "!isLoading && isDone"
					}],
					staticClass: "list-donetip"
				}, [t._t("doneTip", [t._v("没有更多数据了")])], 2), t._v(" "), n("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.isLoading,
						expression: "isLoading"
					}],
					staticClass: "list-loading"
				}, [t._t("loadingTip", [t._v("加载中")])], 2)], 2)
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", [n("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.show,
						expression: "show"
					}],
					staticClass: "mask-actionsheet",
					on: {
						click: function(e) {
							e.stopPropagation(), t.close(e)
						}
					}
				}), t._v(" "), n("div", {
					staticClass: "m-actionsheet",
					class: t.show ? "actionsheet-active" : ""
				}, [t._l(t.items, function(e) {
					return n("a", {
						staticClass: "actionsheet-item",
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(n) {
								n.stopPropagation(), t.itemClick(e)
							}
						}
					}, [t._v(t._s(e.label))])
				}), t._v(" "), t.cancel ? n("a", {
					staticClass: "actionsheet-action",
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: function(e) {
							e.stopPropagation(), t.close(e)
						}
					}
				}, [t._v(t._s(t.cancel))]) : t._e()], 2)])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("router-link", {
					staticClass: "tabbar-item",
					class: t.classes,
					style: t.styles,
					attrs: {
						to: t.link
					}
				}, [n("span", {
					staticClass: "tabbar-icon"
				}, [t._t("icon"), t._v(" "), n("span", {
					staticClass: "tabbar-badge"
				}, [t._t("badge")], 2), t._v(" "), t.dot ? n("span", {
					staticClass: "tabbar-dot"
				}) : t._e()], 2), t._v(" "), n("span", {
					staticClass: "tabbar-txt"
				}, [t._v(t._s(t.title))])])
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "tab-panel-item",
					class: t.classes
				}, [t._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function(t, e) {
		t.exports = {
			render: function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("span", {
					staticClass: "badge",
					class: t.typesClass,
					style: {
						backgroundColor: t.bgcolor,
						color: t.color
					}
				}, [t._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(3);
		e.default = {
			name: "yd-actionsheet",
			data: function() {
				return {
					show: !1
				}
			},
			props: {
				value: {
					type: Boolean,
					default: !1
				},
				items: {
					type: Array,
					require: !0
				},
				cancel: String
			},
			watch: {
				value: function(t) {
					t && this.isIOS && (0, i.addClass)(this.scrollView, "g-fix-ios-overflow-scrolling-bug"), this.show = t
				}
			},
			methods: {
				itemClick: function(t) {
					t && ("function" == typeof t.method && t.method(), !t.stay && this.close())
				},
				close: function() {
					this.isIOS && (0, i.removeClass)(this.scrollView, "g-fix-ios-overflow-scrolling-bug"), this.$emit("input", !1)
				}
			},
			destroyed: function() {
				this.close()
			},
			mounted: function() {
				this.scrollView = (0, i.getScrollview)(this.$el), this.isIOS = !!(window.navigator && window.navigator.userAgent || "").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
			}
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(3);
		e.default = {
			name: "yd-badge",
			props: {
				type: {
					validator: function(t) {
						return ["primary", "danger", "warning", "hollow"].indexOf(t) > -1
					}
				},
				shape: {
					validator: function(t) {
						return ["circle", "square"].indexOf(t) > -1
					}
				},
				color: {
					validator: function(t) {
						return !t || (0, i.isColor)(t)
					}
				},
				bgcolor: {
					validator: function(t) {
						return !t || (0, i.isColor)(t)
					}
				}
			},
			computed: {
				typesClass: function() {
					return this.bgcolor ? "square" == this.shape ? " badge-radius" : "" : (this.type ? "badge-" + this.type : "") + ("square" == this.shape ? " badge-radius" : "")
				}
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-button-group"
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(3);
		e.default = {
			name: "yd-button",
			props: {
				disabled: Boolean,
				type: {
					validator: function(t) {
						return ["primary", "danger", "warning", "hollow", "disabled"].indexOf(t) > -1
					},
					default: "primary"
				},
				size: {
					validator: function(t) {
						return ["small", "large"].indexOf(t) > -1
					}
				},
				bgcolor: {
					validator: function(t) {
						return !t || (0, i.isColor)(t)
					}
				},
				color: {
					validator: function(t) {
						return !t || (0, i.isColor)(t)
					}
				}
			},
			computed: {
				classes: function() {
					var t = "large" == this.size ? "btn-block" : "btn",
						e = "btn-" + this.type;
					return this.disabled && (e = "btn-disabled"), this.bgcolor && (e = ""), t + " " + e
				}
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-cell-group",
			props: {
				title: String
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-cell-item",
			props: {
				type: {
					type: String,
					validator: function(t) {
						return ["link", "a", "label", "div", "checkbox", "radio"].indexOf(t) > -1
					},
					default: "div"
				},
				arrow: {
					type: Boolean,
					default: !1
				},
				href: {
					type: [String, Object]
				}
			},
			computed: {
				checkLeft: function() {
					return !!this.$slots.left || !!this.$slots.icon
				},
				classes: function() {
					return this.arrow ? "cell-arrow" : ""
				}
			}
		}
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = n(3),
			s = n(166),
			r = i(s);
		e.default = {
			name: "yd-cityselect",
			data: function() {
				return {
					citys: r.default,
					show: !1,
					nav: {
						index: 0,
						txt1: "请选择",
						txt2: "",
						txt3: ""
					},
					activeProvance: "",
					activeCity: "",
					activeArea: "",
					cityArray: [],
					areaArray: [],
					activeClasses: "",
					itemHeight: 40
				}
			},
			props: {
				ready: {
					type: Boolean,
					default: !0
				},
				provance: String,
				city: String,
				area: String,
				done: Function,
				value: {
					type: Boolean,
					default: !1
				}
			},
			watch: {
				value: function(t) {
					t && this.isIOS && (0, a.addClass)(this.scrollView, "g-fix-ios-overflow-scrolling-bug"), this.show = t
				},
				ready: function(t) {
					t && setTimeout(this.init, 0)
				}
			},
			methods: {
				init: function() {
					this.ready && (this.setDefalutValue(), this.scrollView = (0, a.getScrollview)(this.$el), this.isIOS = !!(window.navigator && window.navigator.userAgent || "").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))
				},
				chooseProvance: function(t, e) {
					this.nav.index = 1, this.nav.txt1 = this.activeProvance = t, this.nav.txt2 = "请选择", this.nav.txt3 = "", this.cityArray = e, this.activeCity = ""
				},
				chooseCity: function(t, e) {
					return this.nav.txt2 = this.activeCity = t, this.activeArea = "", e.length <= 0 ? void this.returnValue() : (this.nav.txt3 = "请选择", this.areaArray = e, void this.forwardView(!0))
				},
				chooseArea: function(t) {
					this.nav.txt3 = this.activeArea = t, this.returnValue()
				},
				setDefalutValue: function() {
					var t = this;
					this.provance && this.citys.every(function(e, n) {
						if(e.n == t.provance) {
							var i = t.$refs.provanceBox;
							i.scrollTop = n * t.itemHeight - i.offsetHeight / 3, t.nav.index = 1, t.nav.txt1 = t.activeProvance = t.provance, t.nav.txt2 = "请选择";
							var a = t.cityArray = e.c;
							return a.every(function(e, n) {
								if(e.n == t.city) {
									var i = t.$refs.cityBox;
									i.scrollTop = n * t.itemHeight - i.offsetHeight / 3, t.nav.txt2 = t.activeCity = t.city;
									var a = t.areaArray = e.a,
										s = a.indexOf(t.area);
									if(a.length > 0 && (t.nav.index = 2, t.nav.txt3 = "请选择", t.forwardView(!1)), s > -1) {
										var r = t.$refs.areaBox;
										r.scrollTop = s * t.itemHeight - r.offsetHeight / 3, t.nav.txt3 = t.activeArea = t.area
									}
									return !1
								}
								return !0
							}), !1
						}
						return !0
					})
				},
				returnValue: function() {
					this.done({
						provance: this.activeProvance,
						city: this.activeCity,
						area: this.activeArea
					}), this.close()
				},
				close: function() {
					this.isIOS && (0, a.removeClass)(this.scrollView, "g-fix-ios-overflow-scrolling-bug"), this.$emit("input", !1), this.show = !1
				},
				backoffView: function(t) {
					this.nav.index = t, this.activeClasses = "cityselect-move-animate cityselect-prev"
				},
				forwardView: function(t) {
					this.nav.index = 2, this.activeClasses = (t ? "cityselect-move-animate" : "") + " cityselect-next"
				}
			},
			mounted: function() {
				this.init()
			},
			destroyed: function() {
				this.close()
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-countdown",
			data: function() {
				return {
					str: "",
					timer: null,
					tempFormat: "",
					showTpl: !0
				}
			},
			props: {
				time: {
					type: String
				},
				format: {
					type: String,
					default: "{%d}天{%h}时{%m}分{%s}秒"
				},
				callback: {
					type: Function
				},
				doneText: {
					type: String,
					default: "已结束"
				}
			},
			methods: {
				run: function() {
					var t = this,
						e = Math.floor(new Date(this.time).getTime() / 1e3);
					this.timer = setInterval(function() {
						var n = e - Math.floor((new Date).getTime() / 1e3);
						n > 0 ? t.str = t.timestampTotime(n) : ("function" == typeof t.callback && t.callback(), t.str = t.doneText, clearInterval(t.timer))
					}, 1e3)
				},
				timestampTotime: function(t) {
					var e = this.tempFormat,
						n = {};
					n.s = t % 60, t = Math.floor(t / 60), n.m = t % 60, t = Math.floor(t / 60), n.h = t % 24, n.d = Math.floor(t / 24);
					var i = function(t) {
							return t <= 0 ? "00" : t < 10 ? "0" + t : t
						},
						a = ["d", "h", "m", "s"];
					return a.forEach(function(t) {
						var a = i(n[t]).toString().split("");
						e = e.replace("{%" + t + "}", i(n[t])), e = e.replace("{%" + t + "0}", 0 != ~~a[0] ? a[0] : ""), e = e.replace("{%" + t + "1}", ~~a[a.length - 2]), e = e.replace("{%" + t + "2}", ~~a[a.length - 1])
					}), e
				}
			},
			mounted: function() {
				var t = this;
				this.$nextTick(function() {
					t.tempFormat = t.$slots.default ? t.$refs.tpl.innerHTML : t.format, t.showTpl = !1, t.run()
				})
			},
			destroyed: function() {
				clearInterval(this.timer)
			}
		}
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = n(169),
			s = i(a);
		e.default = {
			name: "yd-countup",
			data: function() {
				return {
					instance: null
				}
			},
			props: {
				start: {
					type: Boolean,
					default: !0
				},
				startnum: {
					validator: function(t) {
						return /^([0]|[1-9]\d*)(\.\d*)?$/.test(t)
					},
					default: 0
				},
				endnum: {
					validator: function(t) {
						return /^([0]|[1-9]\d*)(\.\d*)?$/.test(t)
					},
					required: !0
				},
				decimals: {
					validator: function(t) {
						return /^\d*$/.test(t)
					},
					default: 0
				},
				duration: {
					validator: function(t) {
						return /^([0]|[1-9]\d*)(\.\d*)?$/.test(t)
					},
					default: 2
				},
				useEasing: {
					type: Boolean,
					default: !1
				},
				separator: {
					type: String,
					default: ""
				},
				prefix: {
					type: String,
					default: ""
				},
				suffix: {
					type: String,
					default: ""
				},
				callback: {
					type: Function
				}
			},
			watch: {
				start: function(t) {
					var e = this;
					t && this.instance.start(function() {
						"function" == typeof e.callback && e.callback(e.instance)
					})
				},
				endnum: function(t) {
					this.instance && this.instance.update && this.instance.update(t)
				}
			},
			methods: {
				init: function() {
					var t = this;
					if(!this.instance) {
						var e = {
							decimal: ".",
							useEasing: this.useEasing,
							separator: this.separator,
							prefix: this.prefix,
							suffix: this.suffix
						};
						this.instance = new s.default(this.$el, this.startnum, this.endnum, this.decimals, this.duration, e), this.start && this.instance.start(function() {
							"function" == typeof t.callback && t.callback(t.instance)
						})
					}
				}
			},
			mounted: function() {
				this.init()
			},
			destroyed: function() {
				this.instance = null
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			props: {
				mes: String,
				callback: Function
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			props: {
				title: String,
				mes: String,
				opts: {
					type: [Array, Function],
					default: function() {}
				}
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			props: {
				title: String
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			data: function() {
				return {
					classes: ""
				}
			},
			props: {
				mes: String,
				timeout: Number,
				callback: Function
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			props: {
				mes: String,
				icon: String,
				timeout: Number,
				callback: Function
			},
			computed: {
				iconsClass: function() {
					var t = "";
					return "success" != this.icon && "error" != this.icon || (t = "toast-" + this.icon + "-icon"), t
				}
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-grids-group",
			props: {
				rows: {
					validator: function(t) {
						return ["2", "3", "4", "5"].indexOf(t + "") > -1
					},
					default: "4"
				},
				title: String
			},
			computed: {
				classes: function() {
					return "m-grids-" + this.rows
				}
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-grids-item",
			props: {
				link: String
			},
			computed: {
				checkIcon: function() {
					return !!this.$slots.icon
				},
				checkText: function() {
					return !!this.$slots.text
				}
			}
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(3);
		e.default = {
			name: "yd-icon",
			props: {
				name: String,
				color: {
					validator: function(t) {
						return !t || (0, i.isColor)(t)
					}
				},
				size: {
					validator: function(t) {
						return /^(\.|\d+\.)?\d+(px|rem)$/.test(t)
					},
					default: ".6rem"
				}
			},
			computed: {
				classes: function() {
					return "icon-" + this.name
				},
				styles: function() {
					var t = {};
					return this.size && (t.fontSize = this.size), this.color && (t.color = this.color), t
				}
			}
		}
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = n(5),
			s = i(a),
			r = n(3);
		window.$yduiBus = window.$yduiBus || new s.default, e.default = {
			name: "yd-infinitescroll",
			data: function() {
				return {
					isLoading: !1,
					isDone: !1
				}
			},
			props: {
				onInfinite: {
					type: Function,
					required: !0
				}
			},
			methods: {
				init: function() {
					var t = this;
					this.scrollview = (0, r.getScrollview)(this.$el), this.scrollview.addEventListener("scroll", function() {
						t.throttle(t.scrollHandler)
					}), window.$yduiBus.$on("ydui.infinitescroll.loadedDone", function() {
						t.isLoading = !1, t.isDone = !0
					}), window.$yduiBus.$on("ydui.infinitescroll.finishLoad", function() {
						t.isLoading = !1
					})
				},
				scrollHandler: function() {
					if(!this.isLoading && !this.isDone) {
						var t = this.scrollview,
							e = t == window ? document.body.offsetHeight : t.offsetHeight,
							n = t == window ? 0 : t.getBoundingClientRect().top;
						this.$refs.tag.getBoundingClientRect().top <= n + e + e / 10 && (this.isLoading = !0, this.onInfinite())
					}
				},
				throttle: function(t, e) {
					clearTimeout(t.tId), t.tId = setTimeout(function() {
						t.call(e)
					}, 100)
				}
			},
			mounted: function() {
				this.$nextTick(this.init)
			},
			destroyed: function() {
				this.scrollview.removeEventListener("scroll", this.scrollHandler)
			}
		}
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = n(5),
			s = i(a),
			r = n(3);
		window.$yduiBus = window.$yduiBus || new s.default, e.default = {
			name: "yd-keyboard",
			data: function() {
				return {
					nums: "",
					show: !1,
					error: "",
					numsArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
				}
			},
			props: {
				inputDone: {
					type: Function
				},
				disorder: {
					type: Boolean,
					default: !1
				},
				value: {
					type: Boolean,
					default: !1
				},
				title: {
					type: String,
					default: "YDUI安全键盘"
				}
			},
			watch: {
				value: function(t) {
					t && this.isIOS && (0, r.addClass)(this.scrollView, "g-fix-ios-overflow-scrolling-bug"), this.nums = "", this.error = "", this.show = t, this.show && this.disorder && (this.numsArr = this.upsetOrder(this.numsArr))
				},
				nums: function(t) {
					t.length >= 6 && this.inputDone && "function" == typeof this.inputDone && this.inputDone(t)
				}
			},
			methods: {
				init: function() {
					var t = this;
					this.scrollView = (0, r.getScrollview)(this.$el), this.isIOS = !!(window.navigator && window.navigator.userAgent || "").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), window.$yduiBus.$on("ydui.keyboard.error", function(e) {
						t.setError(e)
					}), window.$yduiBus.$on("ydui.keyboard.close", this.close)
				},
				numclick: function(t) {
					this.error = "", this.nums.length >= 6 || (this.nums += t)
				},
				backspace: function() {
					var t = this.nums;
					t && (this.nums = t.substr(0, t.length - 1))
				},
				upsetOrder: function(t) {
					for(var e = Math.floor, n = Math.random, i = t.length, a = void 0, s = void 0, r = void 0, o = e(i / 2) + 1; o--;) a = e(n() * i), s = e(n() * i), a !== s && (r = t[a], t[a] = t[s], t[s] = r);
					return t
				},
				close: function() {
					this.isIOS && (0, r.removeClass)(this.scrollView, "g-fix-ios-overflow-scrolling-bug"), this.$emit("input", !1)
				},
				setError: function(t) {
					this.error = t, this.nums = ""
				}
			},
			mounted: function() {
				this.$nextTick(this.init)
			},
			destroyed: function() {
				this.close()
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-layout",
			props: {
				link: String,
				title: String,
				showNavbar: {
					type: Boolean,
					default: !0
				}
			}
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(3);
		e.default = {
			name: "yd-lazyimg",
			props: {
				src: {
					type: String
				},
				defaultSrc: {
					type: String,
					default: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
				}
			},
			methods: {
				init: function() {
					this.scrollview = (0, i.getScrollview)(this.$el), this.scrollHandler(), this.bindEvent()
				},
				scrollHandler: function() {
					(0, i.checkInview)(this.scrollview, this.$el) && (this.$el.setAttribute("src", this.$el.getAttribute("datasrc")), this.unbindEvent())
				},
				bindEvent: function() {
					this.scrollview.addEventListener("scroll", this.scrollHandler), window.addEventListener("resize", this.scrollHandler)
				},
				unbindEvent: function() {
					this.scrollview.removeEventListener("scroll", this.scrollHandler), window.removeEventListener("resize", this.scrollHandler)
				}
			},
			mounted: function() {
				var t = this;
				this.$nextTick(function() {
					t.init()
				})
			},
			destoryed: function() {
				this.unbindEvent()
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-list-item",
			props: {
				type: {
					type: String,
					validator: function(t) {
						return ["link", "a"].indexOf(t) > -1
					},
					default: "a"
				},
				href: [String, Object]
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-list-other"
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-list",
			props: {
				theme: {
					validator: function(t) {
						return ["1", "2", "3", "4", "5"].indexOf(t + "") > -1
					},
					default: "1"
				}
			},
			computed: {
				classes: function() {
					return "list-theme" + this.theme
				}
			}
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(3);
		e.default = {
			name: "yd-navbar-back-icon",
			props: {
				color: {
					validator: function(t) {
						return !t || (0, i.isColor)(t)
					},
					default: "#5C5C5C"
				}
			}
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(3);
		e.default = {
			name: "yd-navbar-next-icon",
			props: {
				color: {
					validator: function(t) {
						return !t || (0, i.isColor)(t)
					},
					default: "#5C5C5C"
				}
			}
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(3);
		e.default = {
			name: "yd-navbar",
			props: {
				title: String,
				fixed: Boolean,
				bgcolor: {
					validator: function(t) {
						return !t || (0, i.isColor)(t)
					},
					default: "#FFF"
				},
				color: {
					validator: function(t) {
						return !t || (0, i.isColor)(t)
					},
					default: "#5C5C5C"
				},
				fontsize: {
					validator: function(t) {
						return /^(\.|\d+\.)?\d+(px|rem)$/.test(t)
					},
					default: ".4rem"
				},
				height: {
					validator: function(t) {
						return /^(\.|\d+\.)?\d+(px|rem)$/.test(t)
					},
					default: ".9rem"
				}
			},
			computed: {
				classes: function() {
					return this.fixed ? "navbar-fixed" : ""
				}
			}
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(3);
		e.default = {
			name: "yd-popup",
			data: function() {
				return {
					show: !1
				}
			},
			props: {
				position: {
					validator: function(t) {
						return ["bottom", "center", "left", "right"].indexOf(t) > -1
					},
					default: "bottom"
				},
				height: {
					type: String,
					default: "50%"
				},
				width: {
					type: String,
					default: "50%"
				},
				value: {
					type: Boolean,
					default: !1
				}
			},
			watch: {
				value: function(t) {
					t && this.isIOS && (0, i.addClass)(this.scrollView, "g-fix-ios-overflow-scrolling-bug"), this.show = t
				}
			},
			methods: {
				styles: function() {
					return "left" == this.position || "right" == this.position ? {
						width: this.width
					} : "bottom" == this.position ? {
						width: "100%",
						height: this.height
					} : {
						width: this.width
					}
				},
				classes: function() {
					return("center" == this.position ? "m-popup-center " : "m-popup ") + (this.show ? "popup-show " : "") + "popup-" + this.position
				},
				close: function() {
					this.isIOS && (0, i.removeClass)(this.scrollView, "g-fix-ios-overflow-scrolling-bug"), this.show = !1, this.$emit("input", !1)
				}
			},
			mounted: function() {
				this.scrollView = (0, i.getScrollview)(this.$el), this.isIOS = !!(window.navigator && window.navigator.userAgent || "").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
			}
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(3);
		e.default = {
			name: "yd-progressbar",
			data: function() {
				return {
					viewBox: "0 0 100 100",
					show: !1,
					stroke: {
						dasharray: "",
						dashoffset: ""
					}
				}
			},
			props: {
				type: {
					validator: function(t) {
						return ["circle", "line"].indexOf(t) > -1
					},
					default: "circle"
				},
				fillColor: {
					validator: function(t) {
						return !t || (0, i.isColor)(t)
					}
				},
				strokeWidth: {
					validator: function(t) {
						return /^\d*$/.test(t)
					},
					default: 0
				},
				strokeColor: {
					validator: function(t) {
						return !t || (0, i.isColor)(t)
					},
					default: "#E5E5E5"
				},
				trailWidth: {
					validator: function(t) {
						return /^\d*$/.test(t)
					},
					default: 0,
					require: !0
				},
				trailColor: {
					validator: function(t) {
						return !t || (0, i.isColor)(t)
					},
					default: "#646464"
				},
				progress: {
					validator: function(t) {
						return /^(0(.\d+)?|1(\.0+)?)$/.test(t)
					},
					default: 0
				}
			},
			methods: {
				init: function() {
					var t = this,
						e = this.length = this.$refs.trailPath.getTotalLength();
					this.stroke.dashoffset = e, this.stroke.dasharray = e + "," + e, this.scrollview = (0, i.getScrollview)(this.$el), this.show = !0, "line" == this.type && (this.viewBox = "0 0 100 " + (this.strokeWidth ? this.strokeWidth : this.trailWidth)), this.$nextTick(function() {
						t.scrollHandler()
					}), this.bindEvent()
				},
				scrollHandler: function() {
					(0, i.checkInview)(this.scrollview, this.$el) && (this.stroke.dashoffset = this.length - this.progress * this.length)
				},
				bindEvent: function() {
					this.scrollview.addEventListener("scroll", this.scrollHandler), window.addEventListener("resize", this.scrollHandler)
				},
				unbindEvent: function() {
					this.scrollview.removeEventListener("scroll", this.scrollHandler), window.removeEventListener("resize", this.scrollHandler)
				}
			},
			watch: {
				progress: function(t) {
					this.stroke.dashoffset = this.length - t * this.length
				}
			},
			computed: {
				getPathString: function() {
					if("line" == this.type) return "M 0,{R} L 100,{R}".replace(/\{R\}/g, this.trailWidth / 2);
					var t = 50 - (this.strokeWidth ? this.strokeWidth : this.trailWidth) / 2;
					return "M 50,50 m 0,-{R} a {R},{R} 0 1 1 0,{2R} a {R},{R} 0 1 1 0,-{2R}".replace(/\{R\}/g, t).replace(/\{2R\}/g, 2 * t)
				}
			},
			mounted: function() {
				this.init()
			},
			destoryed: function() {
				this.unbindEvent()
			}
		}
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = n(5),
			s = i(a);
		window.$yduiBus = window.$yduiBus || new s.default, e.default = {
			name: "yd-pullrefresh",
			props: {
				onInfinite: {
					type: Function,
					required: !0
				}
			},
			data: function() {
				return {
					showHelpTag: !1,
					dragTip: {
						iconOpacity: .5,
						iconRotate: 0,
						loadingIcon: "",
						animationTiming: "",
						scale: 1,
						translate: 0,
						distance: 100
					},
					touches: {
						loading: !1,
						startClientY: 0,
						moveOffset: 0,
						isDraging: !1
					}
				}
			},
			methods: {
				init: function() {
					this.offsetTop = this.$refs.dragBox.getBoundingClientRect().top, this.bindEvents(), window.$yduiBus.$on("ydui.pullrefresh.finishLoad", this.finishLoad),
						this.showHelp()
				},
				showHelp: function() {
					var t = this,
						e = "PULLREFRESH-TIP",
						n = window.localStorage;
					1 != n.getItem(e) && (this.showHelpTag = !0, setTimeout(function() {
						t.showHelpTag = !1
					}, 5e3)), n.setItem(e, 1)
				},
				bindEvents: function() {
					var t = this.$refs.dragBox;
					t.addEventListener("touchstart", this.touchStartHandler), t.addEventListener("touchmove", this.touchMoveHandler), t.addEventListener("touchend", this.touchEndHandler), document.body.addEventListener("touchmove", this.stopWeixinDrag)
				},
				unbindEvents: function() {
					var t = this.$refs.dragBox;
					t.removeEventListener("touchstart", this.touchStartHandler), t.removeEventListener("touchmove", this.touchMoveHandler), t.removeEventListener("touchend", this.touchEndHandler), document.body.removeEventListener("touchmove", this.stopWeixinDrag)
				},
				stopWeixinDrag: function(t) {
					this.touches.isDraging && t.preventDefault()
				},
				touchStartHandler: function(t) {
					return this.touches.loading ? void t.preventDefault() : void(this.$refs.dragBox.getBoundingClientRect().top < this.offsetTop || (this.touches.startClientY = t.touches[0].clientY))
				},
				touchMoveHandler: function(t) {
					var e = t.touches[0];
					if(this.touches.loading) return void t.preventDefault();
					if(!(this.touches.startClientY > e.clientY || this.$refs.dragBox.getBoundingClientRect().top < this.offsetTop || this.touches.loading)) {
						this.touches.isDraging = !0;
						var n = e.clientY - this.touches.startClientY;
						this.dragTip.iconOpacity = n / 100, n >= this.dragTip.distance && (n = this.dragTip.distance), this.dragTip.iconRotate = n / .25, this.touches.moveOffset = this.dragTip.translate = n
					}
				},
				touchEndHandler: function(t) {
					var e = this.touches;
					if(e.loading) return void t.preventDefault();
					if(!(this.$refs.dragBox.getBoundingClientRect().top < this.offsetTop)) {
						if(this.dragTip.animationTiming = "pullrefresh-animation-timing", e.moveOffset >= this.dragTip.distance) return this.dragTip.translate = this.dragTip.distance / 1.5, this.dragTip.loadingIcon = "pullrefresh-loading", void this.triggerLoad();
						this.dragTip.translate = 0, this.resetParams()
					}
				},
				triggerLoad: function() {
					this.touches.loading = !0, this.onInfinite()
				},
				finishLoad: function() {
					var t = this;
					setTimeout(function() {
						t.dragTip.iconRotate = 0, t.dragTip.scale = 0, t.resetParams()
					}, 200)
				},
				resetParams: function() {
					var t = this;
					setTimeout(function() {
						var e = t.touches,
							n = t.dragTip;
						e.isDraging = !1, e.loading = !1, e.moveOffset = 0, n.animationTiming = "", n.iconOpacity = .5, n.translate = 0, n.scale = 1, n.loadingIcon = ""
					}, 150)
				}
			},
			mounted: function() {
				this.$nextTick(this.init)
			},
			destroyed: function() {
				this.unbindEvents()
			}
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(3);
		e.default = {
			name: "yd-rate",
			data: function() {
				return {
					index: 0,
					str: ""
				}
			},
			props: {
				count: {
					validator: function(t) {
						return /^(([1-9]\d*)|0)$/.test(t)
					},
					default: 5
				},
				size: {
					validator: function(t) {
						return /^(\.|\d+\.)?\d+(px|rem)$/.test(t)
					},
					default: ".5rem"
				},
				color: {
					validator: function(t) {
						return !t || (0, i.isColor)(t)
					},
					default: "#CCC"
				},
				activeColor: {
					validator: function(t) {
						return !t || (0, i.isColor)(t)
					},
					default: "#FF5D50"
				},
				value: {
					validator: function(t) {
						return /^(([1-9]\d*)|0)$/.test(t)
					}
				},
				showText: {
					type: Array
				},
				readonly: {
					type: Boolean,
					default: !1
				},
				padding: {
					validator: function(t) {
						return /^(\.|\d+\.)?\d+(px|rem)$/.test(t)
					},
					default: ".06rem"
				}
			},
			methods: {
				choose: function(t) {
					this.index = t, this.$emit("input", t), this.showText && (this.str = (this.showText[t - 1] || "").replace("$", t))
				}
			},
			mounted: function() {
				var t = this;
				this.$nextTick(function() {
					t.choose(t.value)
				})
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-scrolltab-panel",
			props: {
				label: String,
				icon: String,
				active: Boolean
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-scrolltab",
			data: function() {
				return {
					scrolling: !1,
					navList: [],
					activeIndex: 0,
					timer: null
				}
			},
			methods: {
				getPanels: function() {
					return this.$children.filter(function(t) {
						return "yd-scrolltab-panel" === t.$options.name
					})
				},
				init: function() {
					this.scrollView = this.$refs.scrollView, this.contentOffsetTop = this.scrollView.getBoundingClientRect().top, this.bindEvent(), this.setDefault()
				},
				bindEvent: function() {
					this.scrollView.addEventListener("scroll", this.scrollHandler), window.addEventListener("resize", this.scrollHandler)
				},
				setDefault: function() {
					var t = this,
						e = this.getPanels(),
						n = 0;
					e.forEach(function(i) {
						t.navList.push({
							label: i.label,
							_uid: i._uid,
							icon: i.icon
						}), i.active ? (t.activeIndex = i._uid, t.moveHandler(i._uid)) : (++n, n >= e.length && (t.activeIndex = e[0]._uid))
					})
				},
				moveHandler: function(t) {
					var e = this;
					if(!this.scrolling) {
						this.scrolling = !0;
						var n = this.getPanels(),
							i = n.filter(function(e) {
								return e._uid == t
							})[0].$el.getBoundingClientRect().top;
						this.scrollView.scrollTop = i + this.scrollView.scrollTop - this.contentOffsetTop + 2, this.activeIndex = t, setTimeout(function() {
							e.scrolling = !1
						}, 6)
					}
				},
				scrollHandler: function() {
					var t = this;
					if(!this.scrolling) {
						var e = this.getPanels(),
							n = e.length,
							i = this.scrollView,
							a = i.offsetHeight,
							s = i.scrollTop,
							r = e[0].$el.offsetHeight;
						return s >= r * n - a ? void(this.activeIndex = e[n - 1]._uid) : void e.forEach(function(e) {
							e.$el.getBoundingClientRect().top <= t.contentOffsetTop && (t.activeIndex = e._uid)
						})
					}
				}
			},
			mounted: function() {
				this.init()
			},
			destroyed: function() {
				this.scrollView.removeEventListener("scroll", this.scrollHandler), window.removeEventListener("resize", this.scrollHandler)
			}
		}
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = n(6),
			s = i(a);
		e.default = {
			name: "yd-sendcode",
			extends: s.default,
			data: function() {
				return {
					tmpStr: "获取短信验证码",
					timer: null,
					start: !1
				}
			},
			props: {
				initStr: String,
				second: {
					default: 60,
					validator: function(t) {
						return /^\d*$/.test(t)
					}
				},
				runStr: {
					type: String,
					default: "{%s}秒后重新获取"
				},
				resetStr: {
					type: String,
					default: "重新获取验证码"
				},
				value: {
					type: Boolean,
					default: !1
				}
			},
			methods: {
				run: function() {
					var t = this,
						e = this.second;
					this.tmpStr = this.getStr(this.second), this.timer = setInterval(function() {
						e--, t.tmpStr = t.getStr(e), e <= 0 && t.stop()
					}, 1e3)
				},
				stop: function() {
					this.tmpStr = this.resetStr, this.$emit("input", !1), clearInterval(this.timer)
				},
				getStr: function(t) {
					return this.runStr.replace(/\{([^{]*?)%s(.*?)\}/g, t)
				}
			},
			watch: {
				value: function(t) {
					this.start = t, t && this.run()
				}
			},
			mounted: function() {
				this.initStr && (this.tmpStr = this.initStr)
			},
			destroyed: function() {
				this.stop()
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-slider-item"
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-slider",
			data: function() {
				return {
					firtstItem: "",
					lastItem: "",
					itemNums: 0,
					index: 1,
					itemsArr: [],
					autoPlayTimer: null,
					paginationIndex: 0,
					itemHeight: {
						height: null
					},
					dragStyleObject: {
						transform: 0,
						speed: 0
					},
					touches: {
						moveTag: 0,
						startClientPosition: 0,
						moveOffset: 0,
						touchStartTime: 0,
						isTouchEvent: !1,
						allowClick: !1
					}
				}
			},
			props: {
				ready: {
					type: Boolean,
					default: !0
				},
				speed: {
					default: 300,
					validator: function(t) {
						return /^\d*$/.test(t)
					}
				},
				autoplay: {
					default: 0,
					validator: function(t) {
						return /^\d*$/.test(t)
					}
				},
				direction: {
					validator: function(t) {
						return ["horizontal", "vertical"].indexOf(t) > -1
					},
					default: "horizontal"
				}
			},
			methods: {
				init: function() {
					if(this.ready) {
						if(this.itemsArr = this.$children.filter(function(t) {
								return "yd-slider-item" === t.$options.name
							}), this.itemNums = this.itemsArr.length, "vertical" == this.direction) {
							this.$refs.slider.style.height = "100%";
							var t = this.$el.clientHeight;
							this.itemHeight.height = t + "px", this.setTranslate(0, -t), this.itemsArr.forEach(function(e) {
								e.$el.style.height = t + "px"
							})
						} else this.setTranslate(0, -this.$refs.warpper.offsetWidth);
						this.cloneItem(), this.bindEvents(), this.autoplay > 0 && this.autoPlay()
					}
				},
				cloneItem: function() {
					var t = this.itemsArr;
					this.firtstItem = t[0].$el.innerHTML, this.lastItem = t[t.length - 1].$el.innerHTML
				},
				touchStartHandler: function(t) {
					var e = this.touches;
					if(e.allowClick = !0, e.isTouchEvent = "touchstart" === t.type, (e.isTouchEvent || !("which" in t) || 3 !== t.which) && 0 == e.moveTag) {
						e.moveTag = 1, "vertical" == this.direction ? e.startClientPosition = t.touches ? t.touches[0].clientY : t.clientY : e.startClientPosition = t.touches ? t.touches[0].clientX : t.clientX, e.touchStartTime = Date.now();
						var n = this.itemNums;
						if(0 == this.index) return this.index = n, void this.setTranslate(0, -n * ("vertical" == this.direction ? this.$el.clientHeight : this.$refs.warpper.offsetWidth));
						this.index > n && (this.index = 1, this.setTranslate(0, "vertical" == this.direction ? -this.$el.clientHeight : -this.$refs.warpper.offsetWidth))
					}
				},
				touchMoveHandler: function(t) {
					t.preventDefault();
					var e = this.touches;
					if(e.allowClick = !1, !e.isTouchEvent || "mousemove" !== t.type) {
						var n = 0;
						n = "vertical" == this.direction ? t.touches ? t.touches[0].clientY : t.clientY : t.touches ? t.touches[0].clientX : t.clientX;
						var i = e.moveOffset = n - e.startClientPosition;
						0 != i && 0 != e.moveTag && (1 == e.moveTag && (this.stopAutoplay(), e.moveTag = 2), 2 == e.moveTag && this.setTranslate(0, -this.index * ("vertical" == this.direction ? this.$el.clientHeight : this.$refs.warpper.offsetWidth) + i))
					}
				},
				touchEndHandler: function() {
					var t = this.touches,
						e = t.moveOffset,
						n = "vertical" == this.direction ? this.$el.clientHeight : this.$refs.warpper.offsetWidth;
					if(setTimeout(function() {
							t.allowClick = !0
						}, 0), 1 == t.moveTag && (t.moveTag = 0), 2 == t.moveTag) {
						t.moveTag = 0;
						var i = Date.now() - t.touchStartTime;
						i > 300 && Math.abs(e) <= .5 * n ? this.setTranslate(this.speed, -this.index * n) : this.setTranslate(this.speed, -((e > 0 ? --this.index : ++this.index) * n)), this.autoPlay()
					}
				},
				autoPlay: function() {
					var t = this;
					this.autoPlayTimer = setInterval(function() {
						var e = "vertical" == t.direction ? t.$el.clientHeight : t.$refs.warpper.offsetWidth;
						return t.index > t.itemNums ? (t.index = 1, t.setTranslate(0, -e), void setTimeout(function() {
							t.setTranslate(t.speed, -(++t.index * e))
						}, 100)) : void t.setTranslate(t.speed, -(++t.index * e))
					}, this.autoplay)
				},
				stopAutoplay: function() {
					clearInterval(this.autoPlayTimer)
				},
				bindEvents: function() {
					var t = this,
						e = this.touchEvents();
					this.$el.addEventListener(e.start, this.touchStartHandler), this.$el.addEventListener(e.move, this.touchMoveHandler), this.$el.addEventListener(e.end, this.touchEndHandler), this.$el.addEventListener("click", function(e) {
						t.touches.allowClick || e.preventDefault()
					}), window.addEventListener("resize", this.resizeSlides)
				},
				unbindEvents: function() {
					var t = this.touchEvents();
					this.$el.removeEventListener(t.start, this.touchStartHandler), this.$el.removeEventListener(t.move, this.touchMoveHandler), this.$el.removeEventListener(t.end, this.touchEndHandler), window.removeEventListener("resize", this.resizeSlides)
				},
				touchEvents: function() {
					var t = window.Modernizr && !!window.Modernizr.touch || function() {
						return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
					}();
					return {
						start: t ? "touchstart" : "mousedown",
						move: t ? "touchmove" : "mousemove",
						end: t ? "touchend" : "mouseup"
					}
				},
				setTranslate: function(t, e) {
					this.dragStyleObject.transitionDuration = t + "ms", "vertical" == this.direction ? this.dragStyleObject.transform = "translate3d(0, " + e + "px, 0)" : this.dragStyleObject.transform = "translate3d(" + e + "px, 0, 0)"
				},
				resizeSlides: function() {
					if("vertical" == this.direction) {
						var t = this.$el.clientHeight;
						this.dragStyleObject.transform = "translate3d(0, " + -this.index * t + "px, 0)"
					} else {
						var e = this.$refs.warpper.offsetWidth;
						this.dragStyleObject.transform = "translate3d(" + -this.index * e + "px, 0, 0)"
					}
				}
			},
			watch: {
				index: function t() {
					var t = this.index,
						e = this.itemNums,
						n = (t - 1) % e;
					this.paginationIndex = n < 0 ? e - 1 : n
				},
				ready: function(t) {
					t && setTimeout(this.init, 0)
				}
			},
			mounted: function() {
				this.init()
			},
			destroyed: function() {
				this.unbindEvents(), this.stopAutoplay()
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-spinner",
			data: function() {
				return {
					counter: 0,
					tapParams: {
						timer: null,
						tapStartTime: 0
					},
					parms: {
						max: 0,
						min: -1
					}
				}
			},
			props: {
				unit: {
					default: 1,
					validator: function(t) {
						return /^([1-9]\d*)$/.test(t)
					}
				},
				max: {
					default: 0,
					validator: function(t) {
						return /^(([1-9]\d*)|0)$/.test(t)
					}
				},
				min: {
					default: -1,
					validator: function(t) {
						return /^((-?([1-9]\d*))|0)$/.test(t)
					}
				},
				longpress: {
					type: Boolean,
					default: !0
				},
				readonly: {
					type: Boolean,
					default: !1
				},
				value: {
					validator: function(t) {
						return /^(([1-9]\d*)|0)$/.test(t)
					}
				}
			},
			methods: {
				init: function() {
					this.checkParameters() && (this.setDefalutValue(), this.bindEvents())
				},
				checkParameters: function() {
					var t = ~~this.max,
						e = ~~this.unit,
						n = ~~this.min;
					return t < e && 0 != t ? (console.error("[YDUI warn]: The parameter 'max'(" + t + ") must be greater than or equal to 'unit'(" + e + ")."), !1) : t % e != 0 ? (console.error("[YDUI warn]: The parameter 'max'(" + t + ") and 'unit'(" + e + ") must be multiple."), !1) : n % e != 0 && n >= 0 ? (console.error("[YDUI warn]: The parameter 'min'(" + n + ") and 'unit'(" + e + ") must be multiple."), !1) : !(t < n && 0 != t) || (console.error("[YDUI warn]: The parameter 'max'(" + t + ") must be greater than to 'min'(" + n + ")."), !1)
				},
				setDefalutValue: function() {
					var t = ~~this.unit,
						e = ~~this.min,
						n = ~~this.value;
					return ~~n > 0 ? void this.setValue(n) : void(e < 0 ? this.setValue(t) : this.setValue(e))
				},
				calculation: function(t) {
					var e = ~~this.max,
						n = ~~this.min < 0 ? ~~this.unit : ~~this.min,
						i = ~~this.unit;
					if(!this.readonly) {
						var a = this.counter,
							s = void 0;
						if("add" == t) {
							if(s = a + i, 0 != e && s > e) return
						} else if(s = a - i, s < n) return;
						this.setValue(s), this.longpress && this.longpressHandler(t)
					}
				},
				setValue: function(t) {
					var e = ~~this.max,
						n = ~~this.min < 0 ? ~~this.unit : ~~this.min,
						i = ~~this.unit;
					/^(([1-9]\d*)|0)$/.test(t) || (t = i), t > e && 0 != e && (t = e), t % i > 0 && (t = t - t % i + i, t > e && 0 != e && (t -= i)), t < n && (t = n - n % i), this.counter = t, this.$emit("input", t)
				},
				longpressHandler: function(t) {
					var e = this,
						n = (new Date).getTime() / 1e3,
						i = n - this.tapParams.tapStartTime;
					i < 1 && (i = .5);
					var a = 10 * i;
					30 == i && (a = 50), i >= 40 && (a = 100), this.tapParams.timer = setTimeout(function() {
						e.calculation(t)
					}, 1e3 / a)
				},
				clearTapTimer: function() {
					clearTimeout(this.tapParams.timer)
				},
				bindEvents: function() {
					var t = this,
						e = this.$refs.add,
						n = this.$refs.minus,
						i = {
							mousedownEvent: "touchstart",
							mouseupEvent: "touchend"
						},
						a = window.Modernizr && !!window.Modernizr.touch || function() {
							return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
						}();
					a || (i.mousedownEvent = "mousedown", i.mouseupEvent = "mouseup"), e.addEventListener(i.mousedownEvent, function(n) {
						t.longpress && (n.preventDefault(), n.stopPropagation(), t.tapParams.tapStartTime = (new Date).getTime() / 1e3, e.addEventListener(i.mouseupEvent, t.clearTapTimer)), t.calculation("add")
					}), n.addEventListener(i.mousedownEvent, function(e) {
						t.longpress && (e.preventDefault(), e.stopPropagation(), t.tapParams.tapStartTime = (new Date).getTime() / 1e3, n.addEventListener(i.mouseupEvent, t.clearTapTimer)), t.calculation("minus")
					}), this.$refs.numInput.addEventListener("change", function() {
						t.setValue(t.counter)
					})
				}
			},
			mounted: function() {
				this.init()
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-switch",
			data: function() {
				return {
					checked: !1
				}
			},
			props: {
				value: Boolean
			},
			watch: {
				checked: function(t) {
					this.$emit("input", t)
				}
			},
			mounted: function() {
				this.checked = this.value
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-tab-panel",
			props: {
				label: String,
				active: Boolean
			},
			computed: {
				classes: function() {
					return this.$parent.activeIndex == this._uid ? "tab-active" : ""
				}
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-tab",
			data: function() {
				return {
					navList: [],
					activeIndex: 0
				}
			},
			props: {
				change: Function
			},
			methods: {
				init: function() {
					var t = this,
						e = this.$children.filter(function(t) {
							return "yd-tab-panel" === t.$options.name
						}),
						n = 0;
					e.forEach(function(i) {
						t.navList.push({
							label: i.label,
							_uid: i._uid
						}), i.active ? t.activeIndex = i._uid : (++n, n >= e.length && (t.activeIndex = e[0]._uid))
					})
				},
				changeHandler: function(t, e) {
					"function" == typeof this.change && this.change(e), this.activeIndex = t
				}
			},
			mounted: function() {
				this.init()
			}
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		n(3);
		e.default = {
			name: "yd-tabbar-item",
			props: {
				link: String,
				title: String,
				active: Boolean,
				dot: Boolean
			},
			computed: {
				classes: function() {
					return this.active ? "tabbar-active" : ""
				},
				styles: function() {
					return {
						color: this.active ? this.activeColor : this.$parent.color
					}
				}
			}
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(3);
		e.default = {
			name: "yd-tabbar",
			props: {
				fixed: Boolean,
				activeColor: {
					validator: function(t) {
						return !t || (0, i.isColor)(t)
					},
					default: "#09BB07"
				},
				bgcolor: {
					validator: function(t) {
						return !t || (0, i.isColor)(t)
					},
					default: "#FFF"
				},
				color: {
					validator: function(t) {
						return !t || (0, i.isColor)(t)
					},
					default: "#979797"
				},
				fontsize: {
					validator: function(t) {
						return /^(\.|\d+\.)?\d+(px|rem)$/.test(t)
					},
					default: ".24rem"
				}
			},
			computed: {
				classes: function() {
					return this.fixed ? "tabbar-fixed" : ""
				},
				styles: function() {
					return {
						color: this.activeColor,
						backgroundColor: this.bgcolor,
						fontSize: this.fontsize
					}
				}
			}
		}
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "yd-textarea",
			data: function() {
				return {
					num: 0,
					mlstr: ""
				}
			},
			props: {
				maxlength: {
					validator: function(t) {
						return !t || /^(([1-9]\d*)|0)$/.test(t)
					}
				},
				placeholder: {
					type: String
				},
				readonly: {
					type: Boolean,
					default: !1
				},
				value: {
					type: String
				},
				showCounter: {
					type: Boolean,
					default: !0
				},
				change: {
					type: Function
				}
			},
			watch: {
				mlstr: function(t) {
					this.$emit("input", t), "function" == typeof this.change && this.change(), this.showCounter && (this.num = t.length)
				}
			},
			mounted: function() {
				var t = this;
				this.$nextTick(function() {
					var e = t.value;
					e && (t.mlstr = e.length > t.maxlength ? e.substr(e, t.maxlength) : e)
				})
			}
		}
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.ActionSheet = void 0;
		var a = n(33),
			s = i(a);
		e.ActionSheet = s.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.Badge = void 0;
		var a = n(34),
			s = i(a);
		e.Badge = s.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.ButtonGroup = e.Button = void 0;
		var a = n(6),
			s = i(a),
			r = n(35),
			o = i(r);
		e.Button = s.default, e.ButtonGroup = o.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.CellGroup = e.CellItem = void 0;
		var a = n(37),
			s = i(a),
			r = n(36),
			o = i(r);
		e.CellItem = s.default, e.CellGroup = o.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.CitySelect = void 0;
		var a = n(38),
			s = i(a);
		e.CitySelect = s.default
	}, function(t, e, n) {
		var i, a;
		! function() {
			var s = [{
				n: "北京",
				c: [{
					a: ["城区", "城区以外"],
					n: "密云区"
				}, {
					a: ["三环到四环之间", "四环到五环之间", "五环到六环之间", "管庄", "北苑", "定福庄", "三环以内"],
					n: "朝阳区"
				}, {
					a: ["六环以内", "城区", "城区以外"],
					n: "昌平区"
				}, {
					a: ["城区", "城区以外"],
					n: "平谷区"
				}, {
					a: ["三环以内", "三环到四环之间", "四环到五环之间", "五环到六环之间", "六环以外", "西三旗", "西二旗"],
					n: "海淀区"
				}, {
					a: ["内环到二环里", "二环到三环"],
					n: "西城区"
				}, {
					a: ["内环到三环里"],
					n: "东城区"
				}, {
					a: ["一环到二环", "二环到三环"],
					n: "崇文区"
				}, {
					a: ["内环到三环里"],
					n: "宣武区"
				}, {
					a: ["四环到五环之间", "二环到三环", "三环到四环之间", "五环到六环之间", "六环之外"],
					n: "丰台区"
				}, {
					a: ["四环到五环内", "石景山城区", "八大处科技园区"],
					n: "石景山区"
				}, {
					a: ["城区", "龙泉镇", "永定镇", "大台镇", "潭柘寺镇", "王平镇", "军庄镇", "妙峰山镇", "雁翅镇", "斋堂镇", "清水镇"],
					n: "门头沟"
				}, {
					a: ["城区", "大安山乡", "大石窝镇", "窦店镇", "佛子庄乡", "韩村河镇", "河北镇", "良乡镇", "琉璃河镇", "南窖乡", "蒲洼乡", "青龙湖镇", "十渡镇", "石楼镇", "史家营乡", "霞云岭乡", "新镇", "阎村镇", "燕山地区", "张坊镇", "长沟镇", "长阳镇", "周口店镇"],
					n: "房山区"
				}, {
					a: ["六环内（马驹桥镇）", "中仓街道", "新华街道", "玉桥街道", "北苑街道", "六环外（马驹桥镇）", "永顺镇", "梨园镇", "宋庄镇", "漷县镇", "张家湾镇", "西集镇", "永乐店镇", "潞城镇", "台湖镇", "于家务乡", "次渠镇"],
					n: "通州区"
				}, {
					a: ["延庆镇", "城区", "康庄镇", "八达岭镇", "永宁镇", "旧县镇", "张山营镇", "四海镇", "千家店镇", "沈家营镇", "大榆树镇", "井庄镇", "大庄科乡", "刘斌堡乡", "香营乡", "珍珠泉乡"],
					n: "延庆县"
				}, {
					a: ["四环至五环之间", "五环至六环之间", "六环以外", "亦庄经济开发区"],
					n: "大兴区"
				}, {
					a: ["北石槽镇", "北务镇", "北小营镇", "大孙各庄镇", "高丽营镇", "光明街道", "后沙峪地区", "空港街道", "李桥镇", "李遂镇", "龙湾屯镇", "马坡地区", "木林镇", "南彩镇", "南法信地区", "牛栏山地区", "仁和地区", "胜利街道", "石园街道", "双丰街道", "天竺地区", "旺泉街道", "杨镇地区", "张镇", "赵全营镇"],
					n: "顺义区"
				}, {
					a: ["城区以内", "郊区"],
					n: "怀柔区"
				}]
			}, {
				n: "上海",
				c: [{
					a: ["城区"],
					n: "静安区"
				}, {
					a: ["城区"],
					n: "闸北区"
				}, {
					a: ["城区"],
					n: "虹口区"
				}, {
					a: ["城区"],
					n: "杨浦区"
				}, {
					a: ["罗店镇", "城区", "大场镇", "杨行镇", "月浦镇", "罗泾镇", "顾村镇", "高境镇", "庙行镇", "淞南镇", "宝山城市工业园区"],
					n: "宝山区"
				}, {
					a: ["城区", "莘庄镇", "七宝镇", "浦江镇", "梅陇镇", "虹桥镇", "马桥镇", "吴泾镇", "华漕镇", "颛桥镇"],
					n: "闵行区"
				}, {
					a: ["城区", "南翔镇", "马陆镇", "华亭镇", "江桥镇", "菊园新区", "安亭镇", "徐行镇", "外冈镇", "嘉定工业区"],
					n: "嘉定区"
				}, {
					a: ["城区", "川沙新镇", "祝桥镇", "新场镇", "高桥镇", "惠南镇", "北蔡镇", "合庆镇", "唐镇", "曹路镇", "金桥镇", "高行镇", "高东镇", "张江镇", "三林镇", "南汇新城镇", "康桥镇", "宣桥镇", "书院镇", "大团镇", "周浦镇", "芦潮港镇", "泥城镇", "航头镇", "万祥镇", "老港镇"],
					n: "浦东新区"
				}, {
					a: ["城区", "赵巷镇", "徐泾镇", "华新镇", "重固镇", "白鹤镇", "练塘镇", "金泽镇", "朱家角镇"],
					n: "青浦区"
				}, {
					a: ["城区", "泗泾镇", "佘山镇", "车墩镇", "新桥镇", "洞泾镇", "九亭镇", "泖港镇", "石湖荡镇", "新浜镇", "叶榭镇", "小昆山镇"],
					n: "松江区"
				}, {
					a: ["城区", "金山工业区", "朱泾镇", "枫泾镇", "张堰镇", "亭林镇", "吕巷镇", "廊下镇", "金山卫镇", "漕泾镇", "山阳镇"],
					n: "金山区"
				}, {
					a: ["南桥镇", "奉城镇", "四团镇", "柘林镇", "庄行镇", "金汇镇", "青村镇", "海湾镇"],
					n: "奉贤区"
				}, {
					a: ["城区"],
					n: "普陀区"
				}, {
					a: ["城区"],
					n: "黄浦区"
				}, {
					a: ["堡镇", "庙镇", "陈家镇", "城桥镇", "东平镇", "港西镇", "港沿镇", "建设镇", "绿华镇", "三星镇", "竖新镇", "向化镇", "新海镇", "新河镇", "中兴镇", "长兴乡", "横沙乡", "新村乡"],
					n: "崇明县"
				}, {
					a: ["城区"],
					n: "徐汇区"
				}, {
					a: ["城区"],
					n: "长宁区"
				}]
			}, {
				n: "天津",
				c: [{
					a: ["全境"],
					n: "东丽区"
				}, {
					a: ["全境"],
					n: "和平区"
				}, {
					a: ["全境"],
					n: "河北区"
				}, {
					a: ["全境"],
					n: "河东区"
				}, {
					a: ["全境"],
					n: "河西区"
				}, {
					a: ["全境"],
					n: "红桥区"
				}, {
					a: ["全境"],
					n: "蓟县"
				}, {
					a: ["全境"],
					n: "静海县"
				}, {
					a: ["全境"],
					n: "南开区"
				}, {
					a: ["全境"],
					n: "塘沽区"
				}, {
					a: ["杨柳青,中北,精武,大寺镇,环外海泰及外环内", "其它地区"],
					n: "西青区"
				}, {
					a: ["杨村镇、下朱庄内", "其它地区"],
					n: "武清区"
				}, {
					a: ["双港，辛庄", "咸水沽镇、海河教育园，海河科技园", "其他地区"],
					n: "津南区"
				}, {
					a: ["汉沽区街里、汉沽开发区", "其它地区"],
					n: "汉沽区"
				}, {
					a: ["大港油田", "主城区内", "主城区外"],
					n: "大港区"
				}, {
					a: ["外环外双街镇，河北工大新校，屈店工业园", "外环内", "外环外其它地区"],
					n: "北辰区"
				}, {
					a: ["城关镇、马家店开发区、天宝工业园", "其它地区"],
					n: "宝坻区"
				}, {
					a: ["芦台镇、经济开发区、贸易开发区", "其它地区"],
					n: "宁河县"
				}]
			}, {
				n: "重庆",
				c: [{
					a: ["县城内", "青杠镇", "来凤镇", "丁家镇", "大路镇", "八塘镇", "七塘镇", "河边镇", "福禄镇", "大兴镇", "正兴镇", "广普镇", "三合镇", "健龙镇"],
					n: "璧山县"
				}, {
					a: ["县城内", "广顺镇", "安富镇", "峰高镇", "双河镇", "直升镇", "路孔镇", "清江镇", "仁义镇", "河包镇", "古昌镇", "吴家镇", "观胜镇", "铜鼓镇", "清流镇", "盘龙镇", "远觉镇", "清升镇", "荣隆镇", "龙集镇"],
					n: "荣昌县"
				}, {
					a: ["县城内", "土桥镇", "二坪镇", "水口镇", "安居镇", "白羊镇", "平滩镇", "石鱼镇", "福果镇", "维新镇", "高楼镇", "大庙镇", "围龙镇", "华兴镇", "永嘉镇", "安溪镇", "西河镇", "太平镇", "旧县镇", "虎峰镇", "少云镇", "蒲吕镇", "侣俸镇", "小林乡", "双山乡", "庆隆乡"],
					n: "铜梁县"
				}, {
					a: ["内环以内", "寸滩镇", "郭家沱镇", "铁山坪镇", "鱼嘴镇", "复盛镇", "五宝镇", "大石坝镇"],
					n: "江北区"
				}, {
					a: ["城区", "内环以内", "茶园新区", "鸡冠石镇", "长生桥镇", "峡口镇", "广阳镇", "迎龙镇"],
					n: "南岸区"
				}, {
					a: ["内环以内", "白市驿镇", "铜罐驿镇", "华岩镇", "巴福镇", "含谷镇", "金凤镇", "石板镇", "陶家镇", "西彭镇", "走马镇"],
					n: "九龙坡区"
				}, {
					a: ["内环以内", "陈家桥镇", "歌乐山镇", "青木关镇", "回龙坝镇", "大学城", "虎溪镇", "西永镇", "土主镇", "井口镇", "曾家镇", "凤凰镇", "中梁镇"],
					n: "沙坪坝区"
				}, {
					a: ["茄子溪镇", "建胜镇", "跳磴镇", "内环以内"],
					n: "大渡口区"
				}, {
					a: ["城区", "三江镇", "安稳镇", "打通镇", "丁山镇", "东溪镇", "扶欢镇", "赶水镇", "郭扶镇", "横山镇", "隆盛镇", "三角镇", "石壕镇", "石角镇", "新盛镇", "永城镇", "永新镇", "中峰镇", "篆塘镇", "丛林镇", "关坝镇", "黑山镇", "金桥镇", "南桐镇", "青年镇", "石林镇", "万东镇"],
					n: "綦江区"
				}, {
					a: ["城区", "草街镇", "盐井镇", "云门镇", "大石镇", "沙鱼镇", "官渡镇", "涞滩镇", "肖家镇", "古楼镇", "三庙镇", "二郎镇", "龙凤镇", "隆兴镇", "铜溪镇", "双凤镇", "狮滩镇", "清平镇", "土场镇", "小沔镇", "三汇镇", "香龙镇", "钱塘镇", "龙市镇", "燕窝镇", "太和镇", "渭沱镇", "双槐镇"],
					n: "合川区"
				}, {
					a: ["城区", "南泉镇", "一品镇", "南彭镇", "惠民镇", "麻柳嘴镇", "天星寺镇", "双河口镇", "界石镇", "安澜镇", "跳石镇", "木洞镇", "丰盛镇", "二圣镇", "东泉镇", "姜家镇", "接龙镇", "石滩镇", "石龙镇"],
					n: "巴南区"
				}, {
					a: ["城区", "东阳镇", "蔡家岗镇", "童家溪镇", "施家梁镇", "金刀峡镇", "澄江镇", "水土镇", "歇马镇", "天府镇", "复兴镇", "静观镇", "柳荫镇", "三圣镇"],
					n: "北碚区"
				}, {
					a: ["城区", "四面山镇", "支坪镇", "白沙镇", "珞璜镇", "柏林镇", "蔡家镇", "慈云镇", "杜市镇", "广兴镇", "嘉平镇", "贾嗣镇", "李市镇", "龙华镇", "石蟆镇", "石门镇", "塘河镇", "吴滩镇", "西湖镇", "夏坝镇", "先锋镇", "永兴镇", "油溪镇", "中山镇", "朱杨镇"],
					n: "江津区"
				}, {
					a: ["城区", "礼嘉镇", "两路镇", "王家镇", "悦来镇", "玉峰山镇", "茨竹镇", "大盛镇", "大塆镇", "古路镇", "龙兴镇", "洛碛镇", "木耳镇", "石船镇", "统景镇", "兴隆镇"],
					n: "渝北区"
				}, {
					a: ["城区", "长寿湖镇", "邻封镇", "但渡镇", "云集镇", "双龙镇", "龙河镇", "石堰镇", "云台镇", "海棠镇", "葛兰镇", "新市镇", "八颗镇", "洪湖镇", "万顺镇"],
					n: "长寿区"
				}, {
					a: ["城区", "双竹镇", "三教镇", "大安镇", "陈食镇", "板桥镇", "宝峰镇", "临江镇", "红炉镇", "吉安镇", "金龙镇", "来苏镇", "青峰镇", "双石镇", "松溉镇", "五间镇", "仙龙镇", "永荣镇", "朱沱镇", "何埂镇"],
					n: "永川区"
				}, {
					a: ["全境"],
					n: "渝中区"
				}, {
					a: ["全境"],
					n: "高新区"
				}, {
					a: ["全境"],
					n: "北部新区"
				}, {
					a: ["城区", "龙滩子镇", "龙水镇", "智凤镇", "宝顶镇", "中敖镇", "三驱镇", "宝兴镇", "玉龙镇", "石马镇", "拾万镇", "回龙镇", "金山镇", "万古镇", "国梁镇", "雍溪镇", "珠溪镇", "龙石镇", "邮亭镇", "铁山镇", "高升镇", "季家镇", "古龙镇", "高坪镇", "双路镇", "通桥镇"],
					n: "大足区"
				}, {
					a: ["城区", "白土镇", "白羊镇", "大周镇", "弹子镇", "分水镇", "甘宁镇", "高峰镇", "高梁镇", "后山镇", "李河镇", "龙驹镇", "龙沙镇", "罗田镇", "孙家镇", "太安镇", "太龙镇", "天城镇", "武陵镇", "响水镇", "小周镇", "新田镇", "新乡镇", "熊家镇", "余家镇", "长岭镇", "长坪镇", "长滩镇", "走马镇", "瀼渡镇", "茨竹乡", "柱山乡", "燕山乡", "溪口乡", "普子乡", "地宝乡", "铁峰乡", "黄柏乡", "九池乡", "梨树乡", "郭村乡", "恒合乡"],
					n: "万州区"
				}, {
					a: ["城区", "李渡镇", "白涛镇", "百胜镇", "堡子镇", "焦石镇", "蔺市镇", "龙桥镇", "龙潭镇", "马武镇", "南沱镇", "青羊镇", "清溪镇", "石沱镇", "新妙镇", "义和镇", "增福乡", "珍溪镇", "镇安镇", "致韩镇", "土地坡乡", "武陵山乡", "中峰乡", "梓里乡", "丛林乡", "大木乡", "惠民乡", "酒店乡", "聚宝乡", "卷洞乡", "两汇乡", "罗云乡", "明家乡", "仁义乡", "山窝乡", "石和乡", "石龙乡", "太和乡", "天台乡", "同乐乡", "新村乡"],
					n: "涪陵区"
				}, {
					a: ["县城内", "梁山镇", "柏家镇", "碧山镇", "大观镇", "福禄镇", "合兴镇", "和林镇", "虎城镇", "回龙镇", "金带镇", "聚奎镇", "礼让镇", "龙门镇", "明达镇", "蟠龙镇", "屏锦镇", "仁贤镇", "石安镇", "文化镇", "新盛镇", "荫平镇", "袁驿镇", "云龙镇", "竹山镇", "安胜乡", "铁门乡", "紫照乡", "曲水乡", "龙胜乡", "城北乡", "城东乡", "复平乡"],
					n: "梁平县"
				}, {
					a: ["城区", "头渡镇", "兴隆镇", "冷水关乡", "德隆乡", "峰岩乡", "福寿乡", "古花乡", "河图乡", "民主乡", "木凉乡", "乾丰乡", "庆元乡", "石莲乡", "石溪乡", "铁村乡", "土溪乡", "鱼泉乡", "中桥乡", "太平场镇", "大观镇", "大有镇", "合溪镇", "金山镇", "鸣玉镇", "南平镇", "三泉镇", "神童镇", "石墙镇", "水江镇"],
					n: "南川区"
				}, {
					a: ["县城内", "柏梓镇", "宝龙镇", "崇龛镇", "古溪镇", "龙形镇", "米心镇", "群力镇", "上和镇", "双江镇", "太安镇", "塘坝镇", "卧佛镇", "五桂镇", "小渡镇", "新胜镇", "玉溪镇", "别口乡", "田家乡", "寿桥乡"],
					n: "潼南县"
				}, {
					a: ["城区", "正阳镇", "舟白镇", "阿蓬江镇", "小南海镇", "鹅池镇", "冯家镇", "黑溪镇", "黄溪镇", "金溪镇", "黎水镇", "邻鄂镇", "马喇镇", "石会镇", "石家镇", "濯水镇", "白石乡", "白土乡", "金洞乡", "蓬东乡", "沙坝乡", "杉岭乡", "水市乡", "水田乡", "太极乡", "五里乡", "新华乡", "中塘乡"],
					n: "黔江区"
				}, {
					a: ["白桥镇", "大德镇", "金峰镇", "谭家镇", "天和镇", "白泉乡", "县城内", "九龙山镇", "大进镇", "敦好镇", "高桥镇", "郭家镇", "和谦镇", "河堰镇", "厚坝镇", "临江镇", "南门镇", "南雅镇", "渠口镇", "铁桥镇", "岳溪镇", "温泉镇", "义和镇", "长沙镇", "赵家镇", "镇安镇", "中和镇", "竹溪镇", "三汇口乡", "白桥乡", "大德乡", "关面乡", "金峰乡", "麻柳乡", "满月乡", "谭家乡", "天和乡", "巫山镇", "五通乡", "紫水乡"],
					n: "开县"
				}, {
					a: ["县城内", "云阳镇", "巴阳镇", "凤鸣镇", "高阳镇", "故陵镇", "红狮镇", "黄石镇", "江口镇", "龙角镇", "路阳镇", "南溪镇", "农坝镇", "盘龙镇", "平安镇", "渠马镇", "人和镇", "桑坪镇", "沙市镇", "双土镇", "鱼泉镇", "云安镇", "洞鹿乡", "后叶乡", "龙洞乡", "毛坝乡", "泥溪乡", "票草乡", "普安乡", "栖霞乡", "清水乡", "上坝乡", "石门乡", "双龙乡", "水口乡", "外郎乡", "新津乡", "堰坪乡", "养鹿乡", "耀灵乡", "云硐乡"],
					n: "云阳县"
				}, {
					a: ["县城内", "忠州镇", "拔山镇", "白石镇", "东溪镇", "复兴镇", "官坝镇", "花桥镇", "黄金镇", "金鸡镇", "马灌镇", "任家镇", "汝溪镇", "三汇镇", "石宝镇", "石黄镇", "双桂镇", "乌杨镇", "新生镇", "洋渡镇", "野鹤镇", "永丰镇", "金声乡", "磨子乡", "善广乡", "石子乡", "涂井乡", "兴峰乡", "新立镇"],
					n: "忠县"
				}, {
					a: ["县城内", "桂溪镇", "澄溪镇", "高安镇", "高峰镇", "鹤游镇", "普顺镇", "沙坪镇", "太平镇", "五洞镇", "新民镇", "砚台镇", "永安镇", "周嘉镇", "白家乡", "包家乡", "曹回乡", "大石乡", "杠家乡", "坪山镇", "黄沙乡", "裴兴乡", "三溪乡", "沙河乡", "永平乡", "长龙乡"],
					n: "垫江县"
				}, {
					a: ["县城内", "葛城镇", "巴山镇", "高观镇", "庙坝镇", "明通镇", "坪坝镇", "修齐镇", "北屏乡", "东安乡", "高楠乡", "高燕乡", "河鱼乡", "厚坪乡", "鸡鸣乡", "岚天乡", "蓼子乡", "龙田乡", "明中乡", "双河乡", "咸宜乡", "沿河乡", "治平乡", "周溪乡", "左岚乡"],
					n: "城口县"
				}, {
					a: ["县城内", "仙女山镇", "巷口镇", "白马镇", "火炉镇", "江口镇", "平桥镇", "桐梓镇", "土坎镇", "鸭江镇", "羊角镇", "长坝镇", "白云乡", "沧沟乡", "凤来乡", "浩口乡", "和顺乡", "后坪乡", "黄莺乡", "接龙乡", "庙垭乡", "石桥乡", "双河乡", "铁矿乡", "土地乡", "文复乡", "赵家乡"],
					n: "武隆县"
				}, {
					a: ["县城内", "南天湖镇", "许明寺镇", "包鸾镇", "董家镇", "高家镇", "虎威镇", "江池镇", "龙河镇", "名山镇", "三元镇", "社坛镇", "十直镇", "树人镇", "双路镇", "武平镇", "兴义镇", "湛普镇", "镇江镇", "太平坝乡", "双龙场乡", "保合乡", "崇兴乡", "都督乡", "暨龙乡", "栗子乡", "龙孔乡", "青龙乡", "仁沙乡", "三坝乡", "三建乡"],
					n: "丰都县"
				}, {
					a: ["永乐镇", "县城内", "永安镇", "白帝镇", "草堂镇", "大树镇", "汾河镇", "公平镇", "甲高镇", "康乐镇", "青龙镇", "吐祥镇", "新民镇", "兴隆镇", "羊市镇", "朱衣镇", "竹园镇", "安坪乡", "冯坪乡", "鹤峰乡", "红土乡", "康坪乡", "龙桥乡", "平安乡", "石岗乡", "太和乡", "五马乡", "新政乡", "岩湾乡", "云雾乡", "长安乡"],
					n: "奉节县"
				}, {
					a: ["县城内", "城厢镇", "凤凰镇", "古路镇", "尖山镇", "宁厂镇", "上磺镇", "文峰镇", "下堡镇", "徐家镇", "朝阳洞乡", "大河乡", "峰灵乡", "花台乡", "兰英乡", "菱角乡", "蒲莲乡", "胜利乡", "双阳乡", "塘坊乡", "天星乡", "天元乡", "田坝乡", "通城乡", "土城乡", "乌龙乡", "鱼鳞乡", "长桂乡", "中岗乡", "中梁乡"],
					n: "巫溪县"
				}, {
					a: ["县城内", "巫峡镇", "大昌镇", "福田镇", "官渡镇", "官阳镇", "龙溪镇", "骡坪镇", "庙堂乡", "庙宇镇", "双龙镇", "铜鼓镇", "抱龙镇", "大溪乡", "当阳乡", "邓家乡", "笃坪乡", "红椿乡", "建平乡", "金坪乡", "两坪乡", "龙井乡", "培石乡", "平河乡", "曲尺乡", "三溪乡", "竹贤乡"],
					n: "巫山县"
				}, {
					a: ["王家乡", "洗新乡", "新乐乡", "中益乡", "县城内", "南宾镇", "黄水镇", "临溪镇", "龙沙镇", "马武镇", "沙子镇", "王场镇", "西沱镇", "下路镇", "沿溪镇", "渔池镇", "悦崃镇", "大歇乡", "枫木乡", "河嘴乡", "黄鹤乡", "金铃乡", "金竹乡", "冷水乡", "黎场乡", "六塘乡", "龙潭乡", "桥头乡", "三河乡", "三益乡", "石家乡", "万朝乡"],
					n: "石柱县"
				}, {
					a: ["保家镇", "高谷镇", "黄家镇", "连湖镇", "龙射镇", "鹿角镇", "普子镇", "桑柘镇", "万足镇", "郁山镇", "梅子垭乡", "鞍子乡", "大垭乡", "棣棠乡", "靛水乡", "朗溪乡", "联合乡", "龙塘乡", "龙溪乡", "芦塘乡", "鹿鸣乡", "平安乡", "迁乔乡", "乔梓乡", "润溪乡", "三义乡", "善感乡", "县城内", "石柳乡", "石盘乡", "双龙乡", "太原乡", "桐楼乡", "小厂乡", "新田乡", "岩东乡", "长滩乡", "诸佛乡", "走马乡"],
					n: "彭水县"
				}, {
					a: ["县城内", "钟多镇", "苍岭镇", "车田乡", "大溪镇", "丁市镇", "泔溪镇", "龚滩镇", "黑水镇", "后溪镇", "李溪镇", "龙潭镇", "麻旺镇", "小河镇", "兴隆镇", "酉酬镇", "南腰界乡", "后坪坝乡", "板溪乡", "官清乡", "花田乡", "江丰乡", "可大乡", "浪坪乡", "两罾乡", "毛坝乡", "庙溪乡", "木叶乡", "楠木乡", "偏柏乡", "清泉乡", "双泉乡", "天馆乡", "铜鼓乡", "涂市乡", "万木乡", "五福乡", "宜居乡", "腴地乡", "板桥乡"],
					n: "酉阳县"
				}, {
					a: ["县城内", "清溪场镇", "中和镇", "隘口镇", "峨溶镇", "官庄镇", "洪安镇", "兰桥镇", "龙池镇", "梅江镇", "平凯镇", "溶溪镇", "石堤镇", "石耶镇", "雅江镇", "巴家乡", "保安乡", "岑溪乡", "大溪乡", "干川乡", "膏田乡", "官舟乡", "海洋乡", "里仁乡", "妙泉乡", "平马乡", "宋农乡", "溪口乡", "孝溪乡", "涌洞乡", "中平乡", "钟灵乡"],
					n: "秀山县"
				}]
			}, {
				n: "河北",
				c: [{
					a: ["路北区", "路南区", "迁安市", "丰润区", "古冶区", "开平区", "遵化市", "丰南区", "迁西县", "滦南县", "玉田县", "曹妃甸区", "乐亭县", "滦县"],
					n: "唐山市"
				}, {
					a: ["沧县", "泊头市", "河间市", "献县", "肃宁县", "青县", "东光县", "吴桥县", "南皮县", "盐山县", "海兴县", "孟村县", "运河区", "新华区", "任丘市", "黄骅市"],
					n: "沧州市"
				}, {
					a: ["三河市", "广阳区", "开发区", "固安县", "安次区", "永清县", "香河县", "大城县", "文安县", "大厂县", "霸州市"],
					n: "廊坊市"
				}, {
					a: ["冀州市", "深州市", "饶阳县", "枣强县", "桃城区", "故城县", "阜城县", "安平县", "武邑县", "景县", "武强县"],
					n: "衡水市"
				}, {
					a: ["藁城市", "鹿泉市", "正定县", "新华区", "桥西区", "桥东区", "裕华区", "长安区", "辛集市", "晋州市", "新乐市", "平山县", "井陉矿区", "井陉县", "栾城县", "行唐县", "灵寿县", "高邑县", "赵县", "赞皇县", "深泽县", "无极县", "元氏县"],
					n: "石家庄市"
				}, {
					a: ["丛台区", "邯山区", "复兴区", "武安市", "临漳县", "永年县", "邯郸县", "峰峰矿区", "曲周县", "馆陶县", "魏县", "成安县", "大名县", "涉县", "鸡泽县", "邱县", "广平县", "肥乡县", "磁县"],
					n: "邯郸市"
				}, {
					a: ["宁晋县", "威县", "桥西区", "桥东区", "邢台县", "南宫市", "沙河市", "柏乡县", "任县", "清河县", "隆尧县", "临城县", "广宗县", "临西县", "内丘县", "平乡县", "巨鹿县", "新河县", "南和县"],
					n: "邢台市"
				}, {
					a: ["涿州市", "定州市", "徐水县", "高碑店市", "新市区", "北市区", "南市区", "安国市", "安新县", "满城县", "清苑县", "涞水县", "阜平县", "定兴县", "唐县", "高阳县", "容城县", "涞源县", "望都县", "易县", "曲阳县", "蠡县", "顺平县", "博野县", "雄县"],
					n: "保定市"
				}, {
					a: ["怀安县", "沽源县", "宣化区", "宣化县", "康保县", "张北县", "阳原县", "赤城县", "崇礼县", "尚义县", "蔚县", "涿鹿县", "万全县", "下花园区", "桥西区", "桥东区", "怀来县"],
					n: "张家口市"
				}, {
					a: ["双滦区", "鹰手营子矿区", "隆化县", "兴隆县", "平泉县", "滦平县", "丰宁县", "围场县", "宽城县", "双桥区", "承德县"],
					n: "承德市"
				}, {
					a: ["卢龙县", "青龙县", "昌黎县", "北戴河区", "海港区", "山海关区", "抚宁县"],
					n: "秦皇岛市"
				}]
			}, {
				n: "山西",
				c: [{
					a: ["长治县", "潞城市", "郊区", "襄垣县", "屯留县", "平顺县", "黎城县", "壶关县", "长子县", "武乡县", "沁县", "沁源县", "城区"],
					n: "长治市"
				}, {
					a: ["小店区", "迎泽区", "晋源区", "万柏林区", "尖草坪区", "杏花岭区", "古交市", "阳曲县", "娄烦县", "清徐县"],
					n: "太原市"
				}, {
					a: ["大同县", "天镇县", "灵丘县", "阳高县", "左云县", "浑源县", "广灵县", "城区", "新荣区", "南郊区", "矿区"],
					n: "大同市"
				}, {
					a: ["盂县", "平定县", "郊区", "城区", "矿区"],
					n: "阳泉市"
				}, {
					a: ["城区", "高平市", "阳城县", "沁水县", "陵川县", "泽州县"],
					n: "晋城市"
				}, {
					a: ["平鲁区", "山阴县", "右玉县", "应县", "怀仁县", "朔城区"],
					n: "朔州市"
				}, {
					a: ["介休市", "昔阳县", "祁县", "左权县", "寿阳县", "太谷县", "和顺县", "灵石县", "平遥县", "榆社县", "榆次区"],
					n: "晋中市"
				}, {
					a: ["原平市", "代县", "神池县", "五寨县", "五台县", "偏关县", "宁武县", "静乐县", "繁峙县", "河曲县", "保德县", "定襄县", "忻府区", "岢岚县"],
					n: "忻州市"
				}, {
					a: ["离石区", "孝义市", "汾阳市", "文水县", "中阳县", "兴县", "临县", "方山县", "柳林县", "岚县", "交口县", "交城县", "石楼县"],
					n: "吕梁市"
				}, {
					a: ["曲沃县", "侯马市", "霍州市", "汾西县", "吉县", "安泽县", "浮山县", "大宁县", "古县", "隰县", "襄汾县", "翼城县", "永和县", "乡宁县", "洪洞县", "蒲县", "尧都区"],
					n: "临汾市"
				}, {
					a: ["盐湖区", "河津市", "永济市", "新绛县", "平陆县", "垣曲县", "绛县", "稷山县", "芮城县", "夏县", "临猗县", "万荣县", "闻喜县"],
					n: "运城市"
				}]
			}, {
				n: "河南",
				c: [{
					a: ["永城市", "宁陵县", "虞城县", "民权县", "夏邑县", "柘城县", "睢县", "睢阳区", "梁园区"],
					n: "商丘市"
				}, {
					a: ["项城市", "商水县", "淮阳县", "太康县", "鹿邑县", "西华县", "扶沟县", "沈丘县", "郸城县", "川汇区", "东新区", "经济开发区"],
					n: "周口市"
				}, {
					a: ["确山县", "新蔡县", "上蔡县", "泌阳县", "西平县", "遂平县", "汝南县", "平舆县", "正阳县", "驿城区"],
					n: "驻马店市"
				}, {
					a: ["潢川县", "淮滨县", "息县", "新县", "固始县", "罗山县", "光山县", "商城县", "平桥区", "浉河区"],
					n: "信阳市"
				}, {
					a: ["二七区", "中原区", "郑东新区", "管城区", "金水区", "经济开发区", "高新技术开发区", "新郑市", "巩义市", "荥阳市", "中牟县", "新密市", "登封市", "惠济区", "上街区"],
					n: "郑州市"
				}, {
					a: ["金明区", "龙亭区", "顺河区", "鼓楼区", "禹王台区", "通许县", "开封县", "杞县", "兰考县", "尉氏县"],
					n: "开封市"
				}, {
					a: ["涧西区", "西工区", "洛龙区", "嵩县", "偃师市", "孟津县", "汝阳县", "伊川县", "洛宁县", "宜阳县", "栾川县", "新安县", "伊滨区", "吉利区", "瀍河区", "老城区"],
					n: "洛阳市"
				}, {
					a: ["湛河区", "卫东区", "新华区", "汝州市", "舞钢市", "郏县", "叶县", "鲁山县", "宝丰县", "石龙区"],
					n: "平顶山市"
				}, {
					a: ["沁阳市", "孟州市", "修武县", "温县", "武陟县", "博爱县", "山阳区", "解放区", "马村区", "中站区"],
					n: "焦作市"
				}, {
					a: ["淇滨区", "浚县", "淇县", "鹤山区", "山城区"],
					n: "鹤壁市"
				}, {
					a: ["牧野区", "红旗区", "卫滨区", "卫辉市", "辉县市", "新乡县", "获嘉县", "原阳县", "长垣县", "延津县", "封丘县", "凤泉区"],
					n: "新乡市"
				}, {
					a: ["龙安区", "殷都区", "文峰区", "开发区", "北关区", "林州市", "安阳县", "滑县", "汤阴县", "内黄县"],
					n: "安阳市"
				}, {
					a: ["濮阳县", "南乐县", "台前县", "清丰县", "范县", "华龙区"],
					n: "濮阳市"
				}, {
					a: ["城区", "五龙口镇", "下冶镇", "轵城镇", "王屋镇", "思礼镇", "邵原镇", "坡头镇", "梨林镇", "克井镇", "大峪镇", "承留镇"],
					n: "济源市"
				}, {
					a: ["魏都区", "禹州市", "长葛市", "许昌县", "鄢陵县", "襄城县"],
					n: "许昌市"
				}, {
					a: ["郾城区", "临颍县", "召陵区", "舞阳县", "源汇区"],
					n: "漯河市"
				}, {
					a: ["渑池县", "湖滨区", "义马市", "灵宝市", "陕县", "卢氏县"],
					n: "三门峡市"
				}, {
					a: ["社旗县", "西峡县", "卧龙区", "宛城区", "邓州市", "桐柏县", "方城县", "淅川县", "镇平县", "唐河县", "南召县", "内乡县", "新野县"],
					n: "南阳市"
				}]
			}, {
				n: "辽宁",
				c: [{
					a: ["苏家屯区", "新民市", "法库县", "辽中县", "康平县", "皇姑区", "铁西区", "大东区", "沈河区", "东陵区", "于洪区", "和平区", "浑南新区", "沈北新区"],
					n: "沈阳市"
				}, {
					a: ["中山区", "沙河口区", "西岗区", "甘井子区", "高新园区", "大连开发区", "金州区", "旅顺口区", "普兰店市", "瓦房店市", "庄河市", "长海县"],
					n: "大连市"
				}, {
					a: ["铁东区", "立山区", "台安县", "海城市", "岫岩县", "铁西区", "千山区"],
					n: "鞍山市"
				}, {
					a: ["望花区", "东洲区", "新抚区", "顺城区", "抚顺县", "新宾县", "清原县"],
					n: "抚顺市"
				}, {
					a: ["桓仁县", "本溪县", "平山区", "溪湖区", "明山区", "南芬区"],
					n: "本溪市"
				}, {
					a: ["元宝区", "振兴区", "振安区", "东港市", "凤城市", "宽甸县"],
					n: "丹东市"
				}, {
					a: ["凌河区", "古塔区", "太和区", "义县", "凌海市", "北镇市", "黑山县", "经济技术开发区"],
					n: "锦州市"
				}, {
					a: ["龙港区", "连山区", "兴城市", "绥中县", "建昌县", "南票区"],
					n: "葫芦岛市"
				}, {
					a: ["西市区", "站前区", "大石桥市", "盖州市", "老边区", "鲅鱼圈区"],
					n: "营口市"
				}, {
					a: ["盘山县", "大洼县", "兴隆台区", "双台子区"],
					n: "盘锦市"
				}, {
					a: ["阜新县", "彰武县", "海州区", "太平区", "细河区", "清河门区", "新邱区"],
					n: "阜新市"
				}, {
					a: ["辽阳县", "白塔区", "文圣区", "灯塔市", "太子河区", "弓长岭区", "宏伟区"],
					n: "辽阳市"
				}, {
					a: ["凌源市", "北票市", "喀喇沁左翼县", "朝阳县", "双塔区", "建平县", "龙城区"],
					n: "朝阳市"
				}, {
					a: ["银州区", "清河区", "开原市", "铁岭县", "西丰县", "昌图县", "调兵山市"],
					n: "铁岭市"
				}]
			}, {
				n: "吉林",
				c: [{
					a: ["德惠市", "榆树市", "九台市", "农安县", "朝阳区", "南关区", "宽城区", "二道区", "双阳区", "绿园区", "净月区", "汽车产业开发区", "高新技术开发区", "经济技术开发区"],
					n: "长春市"
				}, {
					a: ["昌邑区", "龙潭区", "船营区", "丰满区", "舒兰市", "桦甸市", "蛟河市", "磐石市", "永吉县"],
					n: "吉林市"
				}, {
					a: ["铁东区", "铁西区", "公主岭市", "双辽市", "梨树县", "伊通县"],
					n: "四平市"
				}, {
					a: ["东昌区", "梅河口市", "集安市", "通化县", "辉南县", "柳河县", "二道江区"],
					n: "通化市"
				}, {
					a: ["浑江区", "临江市", "江源区", "靖宇县", "抚松县", "长白县"],
					n: "白山市"
				}, {
					a: ["宁江区", "前郭县", "乾安县", "长岭县", "扶余县"],
					n: "松原市"
				}, {
					a: ["大安市", "洮南市", "通榆县", "镇赉县", "洮北区"],
					n: "白城市"
				}, {
					a: ["延吉市", "图们市", "敦化市", "珲春市", "龙井市", "和龙市", "汪清县", "安图县"],
					n: "延边州"
				}, {
					a: ["龙山区", "西安区", "东丰县", "东辽县"],
					n: "辽源市"
				}]
			}, {
				n: "黑龙江",
				c: [{
					a: ["勃利县", "桃山区", "新兴区", "茄子河区"],
					n: "七台河市"
				}, {
					a: ["北安市", "五大连池市", "逊克县", "孙吴县", "嫩江县", "爱辉区"],
					n: "黑河市"
				}, {
					a: ["北林区", "安达市", "肇东市", "海伦市", "绥棱县", "兰西县", "明水县", "青冈县", "庆安县", "望奎县"],
					n: "绥化市"
				}, {
					a: ["加格达奇区", "松岭区", "呼中区", "呼玛县", "塔河县", "漠河县", "新林区"],
					n: "大兴安岭地区"
				}, {
					a: ["阿城区", "尚志市", "双城市", "五常市", "方正县", "宾县", "依兰县", "巴彦县", "通河县", "木兰县", "延寿县", "呼兰区", "松北区", "道里区", "南岗区", "道外区", "香坊区", "平房区"],
					n: "哈尔滨市"
				}, {
					a: ["建华区", "龙沙区", "铁锋区", "梅里斯区", "昂昂溪区", "富拉尔基区", "碾子山区", "讷河市", "富裕县", "拜泉县", "甘南县", "依安县", "克山县", "龙江县", "克东县", "泰来县"],
					n: "齐齐哈尔市"
				}, {
					a: ["兴山区", "向阳区", "工农区", "南山区", "兴安区", "东山区", "萝北县", "绥滨县"],
					n: "鹤岗市"
				}, {
					a: ["尖山区", "岭东区", "四方台区", "宝山区", "集贤县", "宝清县", "友谊县", "饶河县"],
					n: "双鸭山市"
				}, {
					a: ["恒山区", "滴道区", "梨树区", "城子河区", "麻山区", "鸡冠区", "密山市", "虎林市", "鸡东县"],
					n: "鸡西市"
				}, {
					a: ["萨尔图区", "龙凤区", "让胡路区", "红岗区", "大同区", "林甸县", "肇州县", "肇源县", "杜尔伯特县"],
					n: "大庆市"
				}, {
					a: ["伊春区", "南岔区", "友好区", "西林区", "翠峦区", "新青区", "美溪区", "金山屯区", "五营区", "乌马河区", "汤旺河区", "带岭区", "乌伊岭区", "红星区", "上甘岭区", "铁力市", "嘉荫县"],
					n: "伊春市"
				}, {
					a: ["爱民区", "东安区", "阳明区", "西安区", "绥芬河市", "海林市", "宁安市", "穆棱市", "林口县", "东宁县"],
					n: "牡丹江市"
				}, {
					a: ["桦川县", "抚远县", "桦南县", "汤原县", "前进区", "向阳区", "东风区", "郊区", "同江市", "富锦市"],
					n: "佳木斯市"
				}]
			}, {
				n: "内蒙古",
				c: [{
					a: ["玉泉区", "赛罕区", "土默特左旗", "和林格尔县", "武川县", "托克托县", "清水河县", "回民区", "新城区"],
					n: "呼和浩特市"
				}, {
					a: ["固阳县", "土默特右旗", "达茂联合旗", "东河区", "九原区", "青山区", "昆都仑区", "石拐区", "白云矿区"],
					n: "包头市"
				}, {
					a: ["海勃湾区", "海南区", "乌达区"],
					n: "乌海市"
				}, {
					a: ["宁城县", "敖汉旗", "喀喇沁旗", "翁牛特旗", "巴林右旗", "林西县", "克什克腾旗", "巴林左旗", "阿鲁科尔沁旗", "元宝山区", "红山区", "松山区"],
					n: "赤峰市"
				}, {
					a: ["集宁区", "丰镇市", "兴和县", "卓资县", "商都县", "凉城县", "化德县", "察哈尔右翼前旗", "察哈尔右翼中旗", "察哈尔右翼后旗", "四子王旗"],
					n: "乌兰察布市"
				}, {
					a: ["锡林浩特市", "二连浩特市", "多伦县", "阿巴嘎旗", "西乌珠穆沁旗", "东乌珠穆沁旗", "苏尼特右旗", "苏尼特左旗", "太仆寺旗", "正镶白旗", "正蓝旗", "镶黄旗"],
					n: "锡林郭勒盟"
				}, {
					a: ["海拉尔区", "满洲里市", "牙克石市", "扎兰屯市", "根河市", "额尔古纳市", "陈巴尔虎旗", "阿荣旗", "新巴尔虎左旗", "新巴尔虎右旗", "鄂伦春旗", "莫力达瓦旗", "鄂温克族旗"],
					n: "呼伦贝尔市"
				}, {
					a: ["东胜区", "准格尔旗", "伊金霍洛旗", "乌审旗", "杭锦旗", "鄂托克旗", "鄂托克前旗", "达拉特旗", "康巴什新区"],
					n: "鄂尔多斯市"
				}, {
					a: ["临河区", "五原县", "磴口县", "杭锦后旗", "乌拉特中旗", "乌拉特后旗 ", "乌拉特前旗"],
					n: "巴彦淖尔市"
				}, {
					a: ["阿拉善右旗", "阿拉善左旗", "额济纳旗"],
					n: "阿拉善盟"
				}, {
					a: ["乌兰浩特市", "阿尔山市", "突泉县", "扎赉特旗", "科尔沁右翼前旗", "科尔沁右翼中旗"],
					n: "兴安盟"
				}, {
					a: ["科尔沁区", "霍林郭勒市", "开鲁县", "库伦旗", "奈曼旗", "扎鲁特旗", "科尔沁左翼中旗", "科尔沁左翼后旗"],
					n: "通辽市"
				}]
			}, {
				n: "江苏",
				c: [{
					a: ["玄武区", "秦淮区", "建邺区", "鼓楼区", "栖霞区", "江宁区", "六合区", "雨花台区", "高淳区", "溧水区", "浦口区"],
					n: "南京市"
				}, {
					a: ["贾汪区", "金山桥开发区", "铜山经济技术开发区", "八段工业园区", "鼓楼区", "邳州市", "泉山区", "新沂市", "云龙区", "铜山区", "睢宁县", "沛县", "丰县"],
					n: "徐州市"
				}, {
					a: ["海州区", "赣榆区", "连云区", "灌云县", "东海县", "灌南县"],
					n: "连云港市"
				}, {
					a: ["经济开发区", "楚州区", "洪泽县", "金湖县", "盱眙县", "清河区", "淮阴区", "清浦区", "涟水县"],
					n: "淮安市"
				}, {
					a: ["宿城区", "沭阳县", "泗阳县", "宿豫区", "泗洪县", "宿迁经济开发区"],
					n: "宿迁市"
				}, {
					a: ["射阳县", "亭湖区", "盐都区", "东台市", "大丰区", "建湖县", "响水县", "阜宁县", "滨海县"],
					n: "盐城市"
				}, {
					a: ["广陵区", "邗江区", "宝应县", "仪征市", "高邮市", "江都区"],
					n: "扬州市"
				}, {
					a: ["海陵区", "高港区", "泰兴市", "靖江市", "兴化市", "姜堰区"],
					n: "泰州市"
				}, {
					a: ["港闸区", "崇川区", "通州区", "南通经济技术开发区", "如东县", "海安县", "如皋市", "海门市", "启东市"],
					n: "南通市"
				}, {
					a: ["润州区", "京口区", "丹徒区", "镇江新区", "丹阳市", "句容市", "扬中市", "丹徒新区"],
					n: "镇江市"
				}, {
					a: ["钟楼区", "天宁区", "武进区", "新北区", "金坛区", "溧阳市"],
					n: "常州市"
				}, {
					a: ["崇安区", "南长区", "北塘区", "锡山区", "惠山区", "新区", "江阴市", "宜兴市", "滨湖区"],
					n: "无锡市"
				}, {
					a: ["常熟市", "张家港市", "太仓市", "相城区", "金阊区", "虎丘区", "平江区", "沧浪区", "工业园区", "高新区", "吴江区", "吴中区", "昆山市"],
					n: "苏州市"
				}]
			}, {
				n: "山东",
				c: [{
					a: ["河口区", "广饶县", "利津县", "垦利区", "东营区"],
					n: "东营市"
				}, {
					a: ["潍城区", "奎文区", "高新区", "寒亭区", "寿光市", "青州市", "诸城市", "安丘市", "高密市", "昌邑市", "昌乐县", "临朐县", "坊子区"],
					n: "潍坊市"
				}, {
					a: ["莱山区", "芝罘区", "开发区", "福山区", "牟平区", "龙口市", "莱州市", "莱阳市", "招远市", "蓬莱市", "栖霞市", "海阳市", "长岛县"],
					n: "烟台市"
				}, {
					a: ["荣成市", "文登市", "乳山市", "环翠区"],
					n: "威海市"
				}, {
					a: ["莱城区", "钢城区"],
					n: "莱芜市"
				}, {
					a: ["德城区", "临邑县", "齐河县", "乐陵市", "禹城市", "陵县", "宁津县", "武城县", "庆云县", "平原县", "夏津县"],
					n: "德州市"
				}, {
					a: ["兰陵县", "兰山区", "河东区", "沂南县", "沂水县", "费县", "平邑县", "蒙阴县", "临沭县", "莒南县", "郯城县", "罗庄区"],
					n: "临沂市"
				}, {
					a: ["东昌府区", "临清市", "阳谷县", "茌平县", "莘县", "东阿县", "冠县", "高唐县"],
					n: "聊城市"
				}, {
					a: ["北海新区", "滨城区", "邹平县", "沾化县", "惠民县", "博兴县", "阳信县", "无棣县"],
					n: "滨州市"
				}, {
					a: ["牡丹区", "单县", "曹县", "定陶县", "巨野县", "成武县", "东明县", "郓城县", "鄄城县"],
					n: "菏泽市"
				}, {
					a: ["岚山区", "新市区", "五莲县", "东港区", "莒县"],
					n: "日照市"
				}, {
					a: ["梁山县", "兖州市", "微山县", "汶上县", "泗水县", "嘉祥县", "鱼台县", "金乡县", "邹城市", "市中区", "曲阜市", "高新区", "任城区"],
					n: "济宁市"
				}, {
					a: ["东平县", "岱岳区", "泰山区", "肥城市", "新泰市", "宁阳县"],
					n: "泰安市"
				}, {
					a: ["高新区", "长清区", "历城区", "天桥区", "槐荫区", "历下区", "市中区", "章丘市", "平阴县", "济阳县", "商河县"],
					n: "济南市"
				}, {
					a: ["四方区", "市北区", "市南区", "黄岛区", "李沧区", "即墨市", "城阳区", "崂山区", "胶州市", "平度市", "莱西市"],
					n: "青岛市"
				}, {
					a: ["临淄区", "张店区", "周村区", "淄川区", "博山区", "高青县", "沂源县", "桓台县"],
					n: "淄博市"
				}, {
					a: ["滕州市", "山亭区", "台儿庄区", "峄城区", "薛城区", "市中区"],
					n: "枣庄市"
				}]
			}, {
				n: "安徽",
				c: [{
					a: ["铜官区", "枞阳县", "郊区", "义安区"],
					n: "铜陵市"
				}, {
					a: ["包河区", "蜀山区", "瑶海区", "庐阳区", "滨湖新区", "经济技术开发区", "高新技术开发区", "新站综合开发试验区", "肥西县", "政务文化新区", "巢湖市", "长丰县", "肥东县", "庐江县", "北城新区"],
					n: "合肥市"
				}, {
					a: ["淮南高新技术开发区", "田家庵区", "大通区", "谢家集区", "八公山区", "寿县", "凤台县", "潘集区"],
					n: "淮南市"
				}, {
					a: ["杜集区", "烈山区", "濉溪县", "相山区"],
					n: "淮北市"
				}, {
					a: ["镜湖区", "弋江区", "无为县", "芜湖县", "繁昌县", "南陵县", "鸠江区", "三山区"],
					n: "芜湖市"
				}, {
					a: ["蚌山区", "怀远县", "固镇县", "五河县", "淮上区", "龙子湖区", "禹会区"],
					n: "蚌埠市"
				}, {
					a: ["博望区", "花山区", "雨山区", "当涂县", "含山县", "和县"],
					n: "马鞍山市"
				}, {
					a: ["桐城市", "宿松县", "太湖县", "怀宁县", "岳西县", "望江县", "潜山县", "大观区", "宜秀区", "迎江区"],
					n: "安庆市"
				}, {
					a: ["徽州区", "屯溪区", "休宁县", "歙县", "黟县", "祁门县", "黄山区"],
					n: "黄山市"
				}, {
					a: ["琅琊区", "天长市", "明光市", "全椒县", "来安县", "南谯区", "定远县", "凤阳县"],
					n: "滁州市"
				}, {
					a: ["经济开发区", "界首市", "太和县", "阜南县", "颍上县", "临泉县", "颍泉区", "颍州区", "颍东区"],
					n: "阜阳市"
				}, {
					a: ["利辛县", "蒙城县", "涡阳县", "谯城区"],
					n: "亳州市"
				}, {
					a: ["旌德县", "宁国市", "郎溪县", "广德县", "绩溪县", "泾县", "宣州区"],
					n: "宣城市"
				}, {
					a: ["经济开发区", "埇桥区", "灵璧县", "泗县", "萧县", "砀山县"],
					n: "宿州市"
				}, {
					a: ["贵池区", "东至县", "石台县", "青阳县"],
					n: "池州市"
				}, {
					a: ["霍山县", "金寨县", "霍邱县", "舒城县", "金安区", "裕安区"],
					n: "六安市"
				}]
			}, {
				n: "浙江",
				c: [{
					a: ["龙泉市", "缙云县", "遂昌县", "松阳县", "景宁县", "云和县", "青田县", "莲都区", "庆元县"],
					n: "丽水市"
				}, {
					a: ["临海市", "三门县", "天台县", "仙居县", "黄岩区", "椒江区", "路桥区", "温岭市", "玉环县"],
					n: "台州市"
				}, {
					a: ["岱山县", "嵊泗县", "普陀区", "定海区"],
					n: "舟山市"
				}, {
					a: ["海曙区", "江东区", "高新科技开发区", "慈溪市", "北仑区", "镇海区", "鄞州区", "江北区", "余姚市", "奉化市", "宁海县", "象山县"],
					n: "宁波市"
				}, {
					a: ["上城区", "下城区", "拱墅区", "西湖区", "江干区", "下沙区", "余杭区", "萧山区", "滨江区", "临安市", "富阳区", "桐庐县", "建德市", "淳安县"],
					n: "杭州市"
				}, {
					a: ["龙湾区", "茶山高教园区", "瑞安市", "乐清市", "鹿城区", "瓯海区", "永嘉县", "文成县", "平阳县", "泰顺县", "洞头区", "苍南县"],
					n: "温州市"
				}, {
					a: ["桐乡市", "平湖市", "嘉善县", "南湖区", "秀洲区", "海宁市", "海盐县"],
					n: "嘉兴市"
				}, {
					a: ["南浔区", "吴兴区", "长兴县", "德清县", "安吉县"],
					n: "湖州市"
				}, {
					a: ["柯桥区", "越城区", "诸暨市", "上虞区", "嵊州市", "新昌县"],
					n: "绍兴市"
				}, {
					a: ["金东区", "婺城区", "兰溪市", "武义县", "浦江县", "磐安县", "义乌市", "永康市", "东阳市"],
					n: "金华市"
				}, {
					a: ["柯城区", "衢江区", "江山市", "常山县", "开化县", "龙游县"],
					n: "衢州市"
				}]
			}, {
				n: "福建",
				c: [{
					a: ["台江区", "鼓楼区", "晋安区", "仓山区", "马尾区", "福清市", "闽侯县", "长乐市", "平潭县", "连江县", "罗源县", "永泰县", "闽清县"],
					n: "福州市"
				}, {
					a: ["思明区", "湖里区", "翔安区", "海沧区", "集美区", "同安区"],
					n: "厦门市"
				}, {
					a: ["永安市", "明溪县", "将乐县", "大田县", "宁化县", "建宁县", "沙县", "尤溪县", "清流县", "泰宁县", "梅列区", "三元区"],
					n: "三明市"
				}, {
					a: ["仙游县", "城厢区", "荔城区", "秀屿区", "涵江区"],
					n: "莆田市"
				}, {
					a: ["泉港区", "石狮市", "南安市", "惠安县", "安溪县", "德化县", "永春县", "金门县", "洛江区", "鲤城区", "丰泽区", "晋江市"],
					n: "泉州市"
				}, {
					a: ["芗城区", "龙文区", "龙海市", "平和县", "南靖县", "诏安县", "漳浦县", "华安县", "云霄县", "东山县", "长泰县"],
					n: "漳州市"
				}, {
					a: ["建瓯市", "邵武市", "武夷山市", "建阳市", "松溪县", "顺昌县", "浦城县", "政和县", "光泽县", "延平区"],
					n: "南平市"
				}, {
					a: ["新罗区", "漳平市", "长汀县", "武平县", "永定县", "上杭县", "连城县"],
					n: "龙岩市"
				}, {
					a: ["蕉城区", "东侨开发区", "福安市", "福鼎市", "寿宁县", "霞浦县", "柘荣县", "屏南县", "古田县", "周宁县"],
					n: "宁德市"
				}]
			}, {
				n: "湖北",
				c: [{
					a: ["松柏镇", "阳日镇", "木鱼镇", "红坪镇", "新华镇", "宋洛乡", "九湖乡", "下谷坪乡"],
					n: "神农架林区"
				}, {
					a: ["硚口区", "武昌区", "武汉经济技术开发区", "江岸区", "江汉区", "蔡甸区", "江夏区", "新洲区", "黄陂区", "汉阳区", "青山区", "洪山区", "汉南区", "东西湖区"],
					n: "武汉市"
				}, {
					a: ["园林", "杨市", "周矶", "广华", "泰丰", "竹根滩镇", "高石碑镇", "积玉口镇", "渔洋镇", "王场镇", "熊口镇", "老新镇", "浩口镇", "张金镇", "龙湾镇", "江汉石油管理局", "潜江经济开发区", "西大垸管理区", "运粮湖管理区", "周矶管理区", "后湖管理区", "熊口管理区", "总口管理区", "高场原种场", "浩口原种场"],
					n: "潜江市"
				}, {
					a: ["黄石港区", "下陆区", "西塞山区", "铁山区", "大冶市", "阳新县", "经济技术开发区"],
					n: "黄石市"
				}, {
					a: ["老河口市", "枣阳市", "宜城市", "南漳县", "保康县", "谷城县", "樊城区", "襄城区", "襄州区"],
					n: "襄阳市"
				}, {
					a: ["丹江口市", "房县", "竹山县", "竹溪县", "郧县", "郧西县", "茅箭区", "张湾区"],
					n: "十堰市"
				}, {
					a: ["沙市区", "荆州区", "江陵县", "洪湖市", "石首市", "松滋市", "监利县", "公安县"],
					n: "荆州市"
				}, {
					a: ["伍家岗区", "西陵区", "宜都市", "猇亭区", "点军区", "当阳市", "枝江市", "夷陵区", "秭归县", "兴山县", "远安县", "五峰土家族自治县", "长阳土家族自治县"],
					n: "宜昌市"
				}, {
					a: ["汉川市", "云梦县", "大悟县", "孝昌县", "孝南区", "应城市", "安陆市"],
					n: "孝感市"
				}, {
					a: ["黄州区", "蕲春县", "麻城市", "武穴市", "浠水县", "红安县", "罗田县", "黄梅县", "英山县", "团风县"],
					n: "黄冈市"
				}, {
					a: ["侨乡街道开发区", "竟陵街道", "杨林街道", "佛子山镇", "多宝镇", "拖市镇", "张港镇", "蒋场镇", "汪场镇", "渔薪镇", "黄潭镇", "岳口镇", "横林镇", "彭市镇", "麻洋镇", "多祥镇", "干驿镇", "马湾镇", "卢市镇", "小板镇", "九真镇", "皂市镇", "胡市镇", "石河镇", "净潭乡", "蒋湖农场", "白茅湖农场", "沉湖管委会"],
					n: "天门市"
				}, {
					a: ["城区", "郑场镇", "毛嘴镇", "豆河镇", "三伏潭镇", "胡场镇", "长埫口镇", "西流河镇", "沙湖镇", "杨林尾镇", "彭场镇", "张沟镇", "郭河镇", "沔城镇", "通海口镇", "陈场镇", "工业园区", "九合垸原种场", "沙湖原种场", "排湖渔场", "五湖渔场", "赵西垸林场", "刘家垸林场", "畜禽良种场"],
					n: "仙桃市"
				}, {
					a: ["咸安区", "赤壁市", "嘉鱼县", "通山县", "崇阳县", "通城县"],
					n: "咸宁市"
				}, {
					a: ["恩施市", "利川市", "建始县", "来凤县", "巴东县", "鹤峰县", "宣恩县", "咸丰县"],
					n: "恩施州"
				}, {
					a: ["梁子湖区", "华容区", "鄂城区"],
					n: "鄂州市"
				}, {
					a: ["东宝区", "掇刀区", "钟祥市", "京山县", "沙洋县"],
					n: "荆门市"
				}, {
					a: ["曾都区", "广水市", "随县"],
					n: "随州市"
				}]
			}, {
				n: "湖南",
				c: [{
					a: ["慈利县", "桑植县", "武陵源区", "永定区"],
					n: "张家界市"
				}, {
					a: ["资兴市", "宜章县", "安仁县", "汝城县", "嘉禾县", "临武县", "桂东县", "永兴县", "桂阳县", "北湖区", "苏仙区"],
					n: "郴州市"
				}, {
					a: ["南县", "桃江县", "安化县", "赫山区", "资阳区", "沅江市"],
					n: "益阳市"
				}, {
					a: ["冷水滩区", "祁阳县", "双牌县", "道县", "江永县", "江华县", "宁远县", "新田县", "蓝山县", "东安县", "零陵区"],
					n: "永州市"
				}, {
					a: ["鹤城区", "洪江市", "会同县", "溆浦县", "中方县", "辰溪县", "靖州县", "通道县", "芷江县", "新晃县", "麻阳县", "沅陵县"],
					n: "怀化市"
				}, {
					a: ["娄星区", "冷水江市", "涟源市", "新化县", "双峰县"],
					n: "娄底市"
				}, {
					a: ["吉首市", "古丈县", "龙山县", "永顺县", "泸溪县", "凤凰县", "花垣县", "保靖县"],
					n: "湘西州"
				}, {
					a: ["芙蓉区", "岳麓区", "雨花区", "开福区", "天心区", "浏阳市", "长沙县", "宁乡县", "望城区"],
					n: "长沙市"
				}, {
					a: ["天元区", "石峰区", "芦淞区", "荷塘区", "醴陵市", "株洲县", "攸县", "茶陵县", "炎陵县"],
					n: "株洲市"
				}, {
					a: ["雨湖区", "岳塘区", "湘乡市", "湘潭县", "韶山市"],
					n: "湘潭市"
				}, {
					a: ["蒸湘区", "石鼓区", "珠晖区", "雁峰区", "常宁市", "衡阳县", "耒阳市", "衡东县", "衡南县", "衡山县", "祁东县", "南岳区"],
					n: "衡阳市"
				}, {
					a: ["大祥区", "双清区", "北塔区", "武冈市", "邵东县", "洞口县", "新邵县", "绥宁县", "新宁县", "邵阳县", "隆回县", "城步县"],
					n: "邵阳市"
				}, {
					a: ["岳阳楼区", "君山区", "云溪区", "临湘市", "汨罗市", "岳阳县", "湘阴县", "华容县", "平江县"],
					n: "岳阳市"
				}, {
					a: ["汉寿县", "石门县", "安乡县", "鼎城区", "武陵区", "津市市", "澧县", "临澧县", "桃源县"],
					n: "常德市"
				}]
			}, {
				n: "广东",
				c: [{
					a: ["天河区", "海珠区", "荔湾区", "越秀区", "番禺区", "花都区", "萝岗区", "白云区", "南沙区", "黄埔区", "增城区", "从化区", "广州大学城"],
					n: "广州市"
				}, {
					a: ["罗湖区", "福田区", "南山区", "宝安区", "光明新区", "龙岗区", "坪山新区", "盐田区", "龙华新区", "大鹏新区"],
					n: "深圳市"
				}, {
					a: ["斗门区", "金湾区", "香洲区"],
					n: "珠海市"
				}, {
					a: ["龙湖区", "金平区", "澄海区", "潮阳区", "潮南区", "濠江区", "南澳县"],
					n: "汕头市"
				}, {
					a: ["武江区", "浈江区", "南雄市", "乐昌市", "仁化县", "始兴县", "翁源县", "新丰县", "乳源瑶族自治县", "曲江区"],
					n: "韶关市"
				}, {
					a: ["和平县", "龙川县", "紫金县", "连平县", "源城区", "东源县"],
					n: "河源市"
				}, {
					a: ["梅江区", "兴宁市", "梅县", "蕉岭县", "大埔县", "丰顺县", "五华县", "平远县"],
					n: "梅州市"
				}, {
					a: ["惠阳区", "大亚湾区", "惠城区", "惠东县", "博罗县", "龙门县"],
					n: "惠州市"
				}, {
					a: ["城区", "陆丰市", "陆河县", "海丰县"],
					n: "汕尾市"
				}, {
					a: ["长安镇", "莞城区", "南城区", "寮步镇", "大岭山镇", "横沥镇", "常平镇", "厚街镇", "万江区", "樟木头镇", "塘厦镇", "凤岗镇", "大朗镇", "东坑镇", "清溪镇", "企石镇", "茶山镇", "东城区", "虎门镇", "黄江镇", "石排镇", "道滘镇", "沙田镇", "高埗镇", "石龙镇", "石碣镇", "洪梅镇", "麻涌镇", "松山湖", "桥头镇", "望牛墩镇", "中堂镇", "谢岗镇"],
					n: "东莞市"
				}, {
					a: ["城区", "火炬开发区", "小榄镇", "古镇", "三乡镇", "民众镇", "东凤镇", "板芙镇", "神湾镇", "横栏镇", "港口镇", "三角镇", "大涌镇", "南头镇", "沙溪镇", "坦洲镇", "黄圃镇", "五桂山镇", "南朗镇", "沙朗镇", "阜沙镇", "东升镇"],
					n: "中山市"
				}, {
					a: ["台山市", "新会区", "鹤山市", "江海区", "蓬江区", "开平市", "恩平市"],
					n: "江门市"
				}, {
					a: ["顺德区", "禅城区", "高明区", "三水区", "南海区"],
					n: "佛山市"
				}, {
					a: ["江城区", "阳东县", "阳春市", "阳西县"],
					n: "阳江市"
				}, {
					a: ["赤坎区", "霞山区", "经济技术开发区", "麻章区", "遂溪县", "廉江市", "坡头区", "雷州市", "吴川市", "徐闻县"],
					n: "湛江市"
				}, {
					a: ["茂南区", "电白县", "高州市", "化州市", "茂港区", "信宜市"],
					n: "茂名市"
				}, {
					a: ["端州区", "四会市", "高要市", "广宁县", "德庆县", "怀集县", "封开县", "鼎湖区"],
					n: "肇庆市"
				}, {
					a: ["云城区", "罗定市", "云安县", "新兴县", "郁南县"],
					n: "云浮市"
				}, {
					a: ["连州市", "佛冈县", "阳山县", "清新县", "连山县", "连南县", "清城区", "英德市"],
					n: "清远市"
				}, {
					a: ["湘桥区", "枫溪区", "潮安区", "饶平县"],
					n: "潮州市"
				}, {
					a: ["东山区", "普宁市", "榕城区", "揭东县", "揭西县", "惠来县"],
					n: "揭阳市"
				}]
			}, {
				n: "广西",
				c: [{
					a: ["八步区", "钟山县", "昭平县", "富川县", "平桂管理区"],
					n: "贺州市"
				}, {
					a: ["右江区", "平果县", "乐业县", "田阳县", "西林县", "田林县", "德保县", "靖西县", "田东县", "那坡县", "隆林县", "凌云县"],
					n: "百色市"
				}, {
					a: ["宜州市", "天峨县", "凤山县", "南丹县", "东兰县", "巴马县", "环江县", "大化县", "都安县", "金城江区", "罗城县"],
					n: "河池市"
				}, {
					a: ["江州区", "凭祥市", "扶绥县", "大新县", "天等县", "宁明县", "龙州县"],
					n: "崇左市"
				}, {
					a: ["良庆区", "江南区", "兴宁区", "青秀区", "西乡塘区", "横县", "上林县", "隆安县", "马山县", "武鸣区", "邕宁区", "宾阳县"],
					n: "南宁市"
				}, {
					a: ["融安县", "三江县", "融水县", "鱼峰区", "城中区", "柳南区", "柳北区", "柳江县", "柳城县", "鹿寨县"],
					n: "柳州市"
				}, {
					a: ["象山区", "恭城县", "秀峰区", "叠彩区", "七星区", "雁山区", "阳朔县", "临桂县", "灵川县", "全州县", "平乐县", "兴安县", "灌阳县", "荔浦县", "资源县", "永福县", "龙胜县"],
					n: "桂林市"
				}, {
					a: ["岑溪市", "苍梧县", "藤县", "蒙山县", "万秀区", "蝶山区", "长洲区"],
					n: "梧州市"
				}, {
					a: ["海城区", "银海区", "合浦县", "铁山港区"],
					n: "北海市"
				}, {
					a: ["防城区", "港口区", "东兴市", "上思县"],
					n: "防城港市"
				}, {
					a: ["钦南区", "钦北区", "浦北县", "灵山县"],
					n: "钦州市"
				}, {
					a: ["港南区", "港北区", "桂平市", "平南县", "覃塘区"],
					n: "贵港市"
				}, {
					a: ["玉州区", "北流市", "容县", "博白县", "陆川县", "兴业县"],
					n: "玉林市"
				}, {
					a: ["兴宾区", "合山市", "忻城县", "武宣县", "象州县", "金秀县"],
					n: "来宾市"
				}]
			}, {
				n: "江西",
				c: [{
					a: ["青云谱区", "西湖区", "东湖区", "昌北区", "南昌县", "进贤县", "安义县", "青山湖区", "红谷滩新区", "新建县", "湾里区", "高新区"],
					n: "南昌市"
				}, {
					a: ["珠山区", "乐平市", "浮梁县", "昌江区"],
					n: "景德镇市"
				}, {
					a: ["湘东区", "莲花县", "上栗县", "芦溪县", "安源区"],
					n: "萍乡市"
				}, {
					a: ["分宜县", "渝水区"],
					n: "新余市"
				}, {
					a: ["浔阳区", "八里湖新区", "经济技术开发区", "修水县", "瑞昌市", "彭泽县", "湖口县", "共青城市", "九江县", "庐山区", "德安县", "都昌县", "永修县", "武宁县", "星子县", "庐山风景名胜区"],
					n: "九江市"
				}, {
					a: ["龙虎山风景旅游区", "余江县", "贵溪市", "月湖区"],
					n: "鹰潭市"
				}, {
					a: ["德兴市", "广丰县", "鄱阳县", "婺源县", "余干县", "横峰县", "弋阳县", "铅山县", "玉山县", "万年县", "信州区", "上饶县"],
					n: "上饶市"
				}, {
					a: ["丰城市", "樟树市", "袁州区", "高安市", "铜鼓县", "靖安县", "宜丰县", "奉新县", "万载县", "上高县"],
					n: "宜春市"
				}, {
					a: ["南丰县", "乐安县", "金溪县", "南城县", "东乡县", "资溪县", "宜黄县", "崇仁县", "黎川县", "广昌县", "临川区"],
					n: "抚州市"
				}, {
					a: ["青原区", "吉州区", "井冈山市", "吉安县", "永丰县", "永新县", "新干县", "泰和县", "峡江县", "遂川县", "安福县", "吉水县", "万安县"],
					n: "吉安市"
				}, {
					a: ["章贡区", "南康市", "瑞金市", "石城县", "安远县", "赣县", "宁都县", "寻乌县", "兴国县", "定南县", "上犹县", "于都县", "龙南县", "崇义县", "大余县", "信丰县", "全南县", "会昌县"],
					n: "赣州市"
				}]
			}, {
				n: "四川",
				c: [{
					a: ["仁寿县", "彭山区", "洪雅县", "丹棱县", "青神县", "东坡区"],
					n: "眉山市"
				}, {
					a: ["雁江区", "安岳县", "乐至县", "简阳市"],
					n: "资阳市"
				}, {
					a: ["马尔康县", "九寨沟县", "红原县", "阿坝县", "理县", "若尔盖县", "金川县", "小金县", "黑水县", "松潘县", "壤塘县", "茂县", "汶川县"],
					n: "阿坝州"
				}, {
					a: ["康定县", "泸定县", "九龙县", "丹巴县", "道孚县", "炉霍县", "色达县", "甘孜县", "新龙县", "白玉县", "德格县", "石渠县", "雅江县", "理塘县", "巴塘县", "稻城县", "乡城县", "得荣县"],
					n: "甘孜州"
				}, {
					a: ["美姑县", "昭觉县", "会理县", "会东县", "普格县", "宁南县", "德昌县", "冕宁县", "盐源县", "金阳县", "布拖县", "雷波县", "越西县", "喜德县", "甘洛县", "木里县", "西昌市"],
					n: "凉山州"
				}, {
					a: ["武侯区", "金牛区", "青羊区", "成华区", "高新区", "锦江区", "郫县", "双流县", "高新西区", "龙泉驿区", "新都区", "温江区", "都江堰市", "彭州市", "青白江区", "崇州市", "金堂县", "新津县", "邛崃市", "大邑县", "蒲江县"],
					n: "成都市"
				}, {
					a: ["自流井区", "沿滩区", "荣县", "富顺县", "大安区", "贡井区"],
					n: "自贡市"
				}, {
					a: ["仁和区", "西区", "东区", "米易县", "盐边县"],
					n: "攀枝花市"
				}, {
					a: ["纳溪区", "江阳区", "龙马潭区", "泸县", "合江县", "叙永县", "古蔺县"],
					n: "泸州市"
				}, {
					a: ["江油市", "涪城区", "游仙区", "高新区", "经开区", "盐亭县", "三台县", "平武县", "北川县", "安县", "梓潼县"],
					n: "绵阳市"
				}, {
					a: ["广汉市", "什邡市", "旌阳区", "绵竹市", "罗江县", "中江县"],
					n: "德阳市"
				}, {
					a: ["昭化区", "朝天区", "利州区", "青川县", "旺苍县", "剑阁县", "苍溪县"],
					n: "广元市"
				}, {
					a: ["船山区", "射洪县", "蓬溪县", "大英县", "安居区"],
					n: "遂宁市"
				}, {
					a: ["东兴区", "资中县", "隆昌县", "威远县", "市中区"],
					n: "内江市"
				}, {
					a: ["市中区", "峨眉山市", "五通桥区", "沙湾区", "金口河区", "夹江县", "井研县", "犍为县", "沐川县", "峨边县", "马边县"],
					n: "乐山市"
				}, {
					a: ["宜宾县", "南溪区", "江安县", "长宁县", "兴文县", "珙县", "翠屏区", "高县", "屏山县", "筠连县"],
					n: "宜宾市"
				}, {
					a: ["前锋区", "岳池县", "武胜县", "邻水县", "广安区", "华蓥市"],
					n: "广安市"
				}, {
					a: ["顺庆区", "高坪区", "嘉陵区", "西充县", "阆中市", "南部县", "仪陇县", "蓬安县", "营山县"],
					n: "南充市"
				}, {
					a: ["通川区", "达川区", "大竹县", "渠县", "万源市", "宣汉县", "开江县"],
					n: "达州市"
				}, {
					a: ["巴州区", "恩阳区", "南江县", "平昌县", "通江县"],
					n: "巴中市"
				}, {
					a: ["芦山县", "石棉县", "名山区", "天全县", "荥经县", "汉源县", "宝兴县", "雨城区"],
					n: "雅安市"
				}]
			}, {
				n: "海南",
				c: [{
					a: ["嘉积镇", "万泉镇", "石壁镇", "中原镇", "博鳌镇", "阳江镇", "龙江镇", "潭门镇", "塔洋镇", "长坡镇", "大路镇", "会山镇", "彬村山华侨农场", "东太农场", "东红农场", "东升农场", "南俸农场"],
					n: "琼海市"
				}, {
					a: ["兴隆镇", "南林农场", "万城镇", "龙滚镇", "和乐镇", "后安镇", "大茂镇", "东澳镇", "礼纪镇", "长丰镇", "山根镇", "北大镇", "南桥镇", "三更罗镇", "六连林场", "东兴农场", "东和农场", "新中农场", "兴隆华侨农场"],
					n: "万宁市"
				}, {
					a: ["秀英区", "龙华区", "琼山区", "美兰区"],
					n: "海口市"
				}, {
					a: ["八所镇", "东河镇", "大田镇", "感城镇", "板桥镇", "三家镇", "四更镇", "新龙镇", "天安乡", "江边乡", "广坝农场", "东方华侨农场"],
					n: "东方市"
				}, {
					a: ["崖城镇", "海棠湾镇", "吉阳镇", "凤凰镇", "天涯镇", "育才镇", "河西区", "河东区", "南田农场", "南新农场", "南岛农场", "立才农场", "南滨农场"],
					n: "三亚市"
				}, {
					a: ["文城镇", "重兴镇", "蓬莱镇", "会文镇", "东路镇", "潭牛镇", "东阁镇", "文教镇", "东郊镇", "龙楼镇", "昌洒镇", "翁田镇", "抱罗镇", "冯坡镇", "锦山镇", "铺前镇", "公坡镇", "迈号镇", "清谰镇", "南阳镇", "新桥镇", "头苑镇", "宝芳乡", "龙马乡", "湖山乡", "东路农场", "南阳农场", "罗豆农场", "橡胶研究所"],
					n: "文昌市"
				}, {
					a: ["通什镇", "南圣镇", "毛阳镇", "番阳镇", "畅好乡", "毛道乡", "水满乡", "畅好农场"],
					n: "五指山市"
				}, {
					a: ["城区", "临城镇", "波莲镇", "东英镇", "博厚镇", "皇桐镇", "多文镇", "和舍镇", "南宝镇", "新盈镇", "调楼镇", "加来镇", "红华农场", "加来农场"],
					n: "临高县"
				}, {
					a: ["城区", "金江镇", "老城镇", "瑞溪镇", "永发镇", "加乐镇", "文儒镇", "中兴镇", "仁兴镇", "福山镇", "桥头镇", "大丰镇", "红光农场", "西达农场", "金安农场"],
					n: "澄迈县"
				}, {
					a: ["黄竹镇", "城区", "定城镇", "新竹镇", "龙湖镇", "雷鸣镇", "龙门镇", "龙河镇", "岭口镇", "翰林镇", "富文镇", "金鸡岭农场", "中瑞农场", "南海农场"],
					n: "定安县"
				}, {
					a: ["县城内", "屯城镇", "新兴镇", "枫木镇", "乌坡镇", "南吕镇", "南坤镇", "中建农场", "坡心镇", "中坤农场", "西昌镇"],
					n: "屯昌县"
				}, {
					a: ["红林农场", "城区", "石碌镇", "叉河镇", "十月田镇", "乌烈镇", "昌化镇", "海尾镇", "七叉镇", "王下乡", "海南矿业公司", "霸王岭林场"],
					n: "昌江县"
				}, {
					a: ["南开乡", "阜龙乡", "青松乡", "金波乡", "荣邦乡", "城区", "白沙农场", "牙叉镇", "龙江农场", "七坊镇", "邦溪农场", "邦溪镇", "打安镇", "细水乡", "元门乡"],
					n: "白沙县"
				}, {
					a: ["吊罗山乡", "黎母山林业公司", "阳江农场", "乌石农场", "加钗农场", "长征农场", "营根镇", "湾岭镇", "黎母山镇", "和平镇", "长征镇", "红毛镇", "中平镇", "上安乡", "什运乡", "城区"],
					n: "琼中县"
				}, {
					a: ["东华镇", "南平镇", "吊罗山林业公司", "岭门农场", "南平农场", "椰林镇", "光坡镇", "三才镇", "英州镇", "隆广镇", "文罗镇", "本号镇", "新村镇", "黎安镇", "提蒙乡", "群英乡", "城区"],
					n: "陵水县"
				}, {
					a: ["保亭研究所", "新星农场", "金江农场", "三道农场", "保城镇", "什玲镇", "加茂镇", "响水镇", "新政镇", "三道镇", "六弓乡", "南林乡", "毛感乡"],
					n: "保亭县"
				}, {
					a: ["尖峰岭林业公司", "莺歌海盐场", "山荣农场", "乐光农场", "抱由镇", "保国农场", "万冲镇", "大安镇", "志仲镇", "千家镇", "九所镇", "利国镇", "黄流镇", "佛罗镇", "尖峰镇", "莺歌海镇", "城区"],
					n: "乐东县"
				}, {
					a: ["中沙群岛", "西沙群岛", "南沙群岛"],
					n: "三沙市"
				}, {
					a: ["热作学院", "那大镇", "富克镇", "和庆镇", "南丰镇", "大成镇", "雅星镇", "兰洋镇", "光村镇", "木棠镇", "海头镇", "峨蔓镇", "三都镇", "王五镇", "白马井镇", "中和镇", "排浦镇", "东成镇", "新州镇", "洋浦经济开发区", "西培农场", "西联农场", "蓝洋农场", "八一农场", "西华农场", "西庆农场", "西流农场", "新盈农场", "龙山农场", "红岭农场"],
					n: "儋州市"
				}]
			}, {
				n: "贵州",
				c: [{
					a: ["南明区", "云岩区", "花溪区", "小河区", "白云区", "清镇市", "开阳县", "修文县", "息烽县", "乌当区", "观山湖区"],
					n: "贵阳市"
				}, {
					a: ["盘县", "六枝特区", "水城县", "钟山区"],
					n: "六盘水市"
				}, {
					a: ["红花岗区", "汇川区", "赤水市", "仁怀市", "遵义县", "桐梓县", "绥阳县", "习水县", "凤冈县", "正安县", "湄潭县", "余庆县", "道真县", "务川县"],
					n: "遵义市"
				}, {
					a: ["碧江区", "德江县", "江口县", "思南县", "万山区", "石阡县", "玉屏侗族自治县", "松桃苗族自治县", "印江土家族苗族自治县", "沿河土家族自治县"],
					n: "铜仁市"
				}, {
					a: ["七星关区", "黔西县", "大方县", "织金县", "金沙县", "赫章县", "纳雍县", "威宁彝族回族苗族自治县"],
					n: "毕节市"
				}, {
					a: ["西秀区", "普定县", "平坝县", "镇宁布依族苗族自治县", "关岭布依族苗族自治县", "紫云苗族布依族自治县"],
					n: "安顺市"
				}, {
					a: ["兴义市", "望谟县", "兴仁县", "普安县", "册亨县", "晴隆县", "贞丰县", "安龙县"],
					n: "黔西南州"
				}, {
					a: ["凯里市", "施秉市", "从江县", "锦屏县", "镇远县", "麻江县", "台江县", "天柱县", "黄平县", "榕江县", "剑河县", "三穗县", "雷山县", "黎平县", "岑巩县", "丹寨县"],
					n: "黔东南州"
				}, {
					a: ["都匀市", "福泉市", "贵定县", "惠水县", "罗甸县", "瓮安县", "荔波县", "龙里县", "平塘县", "长顺县", "独山县", "三都县"],
					n: "黔南州"
				}]
			}, {
				n: "云南",
				c: [{
					a: ["玉龙县", "华坪县", "永胜县", "宁蒗县", "古城区"],
					n: "丽江市"
				}, {
					a: ["文山市", "麻栗坡县", "砚山县", "广南县", "马关县", "富宁县", "西畴县", "丘北县"],
					n: "文山州"
				}, {
					a: ["香格里拉县", "德钦县", "维西县"],
					n: "迪庆州"
				}, {
					a: ["个旧市", "开远市", "弥勒县", "红河县", "绿春县", "蒙自市", "泸西县", "建水县", "元阳县", "石屏县", "金平县", "屏边县", "河口县"],
					n: "红河州"
				}, {
					a: ["景洪市", "勐海县", "勐腊县"],
					n: "西双版纳州"
				}, {
					a: ["元谋县", "南华县", "牟定县", "武定县", "大姚县", "双柏县", "禄丰县", "永仁县", "姚安县", "楚雄市"],
					n: "楚雄州"
				}, {
					a: ["剑川县", "弥渡县", "云龙县", "洱源县", "鹤庆县", "宾川县", "祥云县", "永平县", "巍山县", "漾濞县", "南涧县", "大理市"],
					n: "大理州"
				}, {
					a: ["芒市", "瑞丽市", "盈江县", "梁河县", "陇川县"],
					n: "德宏州"
				}, {
					a: ["泸水县", "福贡县", "兰坪县", "贡山县"],
					n: "怒江州"
				}, {
					a: ["盘龙区", "五华区", "西山区", "官渡区", "呈贡区", "东川区", "安宁市", "富民县", "嵩明县", "晋宁县", "宜良县", "禄劝县", "石林县", "寻甸县"],
					n: "昆明市"
				}, {
					a: ["麒麟区", "马龙县", "宣威市", "富源县", "会泽县", "陆良县", "师宗县", "罗平县", "沾益县"],
					n: "曲靖市"
				}, {
					a: ["红塔区", "华宁县", "澄江县", "易门县", "通海县", "江川县", "元江县", "新平县", "峨山县"],
					n: "玉溪市"
				}, {
					a: ["鲁甸县", "绥江县", "昭阳区", "镇雄县", "永善县", "大关县", "盐津县", "彝良县", "水富县", "巧家县", "威信县"],
					n: "昭通市"
				}, {
					a: ["孟连县", "思茅区", "宁洱县", "景东县", "镇沅县", "景谷县", "墨江县", "澜沧县", "西盟县", "江城县"],
					n: "普洱市"
				}, {
					a: ["双江县", "沧源县", "临翔区", "镇康县", "凤庆县", "云县", "永德县", "耿马县"],
					n: "临沧市"
				}, {
					a: ["隆阳区", "施甸县", "昌宁县", "龙陵县", "腾冲县"],
					n: "保山市"
				}]
			}, {
				n: "西藏",
				c: [{
					a: ["双湖县", "索县", "那曲县", "嘉黎县", "比如县", "聂荣县", "安多县", "申扎县", "班戈县", "巴青县", "尼玛县"],
					n: "那曲地区"
				}, {
					a: ["贡嘎县", "扎囊县", "乃东县", "桑日县", "琼结县", "曲松县", "措美县", "洛扎县", "加查县", "隆子县", "错那县", "浪卡子县"],
					n: "山南地区"
				}, {
					a: ["昌都县", "江达县", "贡觉县", "类乌齐县", "丁青县", "察雅县", "八宿县", "左贡县", "芒康县", "洛隆县", "边坝县"],
					n: "昌都地区"
				}, {
					a: ["聂拉木县", "昂仁县", "日喀则市", "南木林县", "江孜县", "定日县", "萨迦县　", "拉孜县", "谢通门县", "白朗县", "仁布县", "康马县", "定结县", "仲巴县", "亚东县", "吉隆县", "萨嘎县", "岗巴县"],
					n: "日喀则地区"
				}, {
					a: ["噶尔县", "普兰县", "札达县　", "日土县", "革吉县", "改则县", "措勤县"],
					n: "阿里地区"
				}, {
					a: ["林芝县", "工布江达县", "米林县", "墨脱县", "波密县", "察隅县", "朗县"],
					n: "林芝地区"
				}, {
					a: ["城关区", "林周县", "当雄县", "尼木县", "曲水县", "堆龙德庆县", "达孜县", "墨竹工卡县"],
					n: "拉萨市"
				}]
			}, {
				n: "陕西",
				c: [{
					a: ["新城区", "雁塔区", "未央区", "长安区", "灞桥区", "碑林区", "莲湖区", "临潼区", "阎良区", "西安武警工程学院", "高陵县", "蓝田县", "户县", "周至县"],
					n: "西安市"
				}, {
					a: ["印台区", "宜君县", "王益区", "耀州区"],
					n: "铜川市"
				}, {
					a: ["渭滨区", "金台区", "岐山县", "太白县", "凤翔县", "陇县", "麟游县", "千阳县", "扶风县", "凤县", "眉县", "陈仓区"],
					n: "宝鸡市"
				}, {
					a: ["秦都区", "渭城区", "兴平市", "礼泉县", "泾阳县", "永寿县", "三原县", "彬县", "旬邑县", "长武县", "乾县", "武功县", "淳化县", "杨陵区"],
					n: "咸阳市"
				}, {
					a: ["韩城市", "华阴市", "蒲城县", "华县", "潼关县", "大荔县", "澄城县", "合阳县", "白水县", "富平县", "临渭区"],
					n: "渭南市"
				}, {
					a: ["宝塔区", "安塞县", "洛川县", "子长县", "黄陵县", "延长县", "宜川县", "延川县", "甘泉县", "富县", "志丹县", "黄龙县", "吴起县"],
					n: "延安市"
				}, {
					a: ["经济开发区南区", "汉台区", "南郑县", "城固县", "洋县", "佛坪县", "留坝县", "镇巴县", "西乡县", "勉县", "略阳县", "宁强县"],
					n: "汉中市"
				}, {
					a: ["清涧县", "绥德县", "佳县", "神木县", "府谷县", "子洲县", "横山县", "米脂县", "吴堡县", "定边县", "榆阳区", "靖边县"],
					n: "榆林市"
				}, {
					a: ["商州区", "镇安县", "山阳县", "洛南县", "商南县", "丹凤县", "柞水县"],
					n: "商洛市"
				}, {
					a: ["汉滨区", "紫阳县", "岚皋县", "旬阳县", "镇坪县", "平利县", "宁陕县", "汉阴县", "石泉县", "白河县"],
					n: "安康市"
				}]
			}, {
				n: "甘肃",
				c: [{
					a: ["合作市", "夏河县", "碌曲县", "舟曲县", "玛曲县", "迭部县", "临潭县", "卓尼县"],
					n: "甘南州"
				}, {
					a: ["岷县", "安定区", "通渭县", "临洮县", "漳县", "渭源县", "陇西县"],
					n: "定西市"
				}, {
					a: ["临夏县", "康乐县", "永靖县", "和政县", "东乡族自治县", "积石山县", "临夏市", "广河县"],
					n: "临夏州"
				}, {
					a: ["七里河区", "安宁区", "城关区", "西固区", "红古区", "永登县", "榆中县", "皋兰县"],
					n: "兰州市"
				}, {
					a: ["永昌县", "金川区"],
					n: "金昌市"
				}, {
					a: ["白银区", "平川区", "靖远县", "景泰县", "会宁县"],
					n: "白银市"
				}, {
					a: ["麦积区", "秦州区", "甘谷县", "武山县", "清水县", "秦安县", "张家川县"],
					n: "天水市"
				}, {
					a: ["长城区", "镜铁区", "雄关区"],
					n: "嘉峪关市"
				}, {
					a: ["静宁县", "崆峒区", "华亭县", "崇信县", "泾川县", "灵台县", "庄浪县"],
					n: "平凉市"
				}, {
					a: ["庆城县", "西峰区", "镇原县", "合水县", "华池县", "环县", "宁县", "正宁县"],
					n: "庆阳市"
				}, {
					a: ["成县", "礼县", "康县", "武都区", "文县", "两当县", "徽县", "宕昌县", "西和县"],
					n: "陇南市"
				}, {
					a: ["凉州区", "古浪县", "天祝县", "民勤县"],
					n: "武威市"
				}, {
					a: ["甘州区", "山丹县", "临泽县", "高台县", "肃南县", "民乐县"],
					n: "张掖市"
				}, {
					a: ["金塔县", "阿克塞县", "肃北县", "瓜州县", "肃州区", "玉门市", "敦煌市"],
					n: "酒泉市"
				}]
			}, {
				n: "青海",
				c: [{
					a: ["湟中县", "湟源县", "大通县", "城中区", "城东区", "城西区", "城北区"],
					n: "西宁市"
				}, {
					a: ["平安县", "乐都县", "民和县", "互助县", "化隆县", "循化县"],
					n: "海东地区"
				}, {
					a: ["海晏县", "祁连县", "刚察县", "门源县"],
					n: "海北州"
				}, {
					a: ["尖扎县", "同仁县", "泽库县", "河南县"],
					n: "黄南州"
				}, {
					a: ["共和县", "同德县", "贵德县", "兴海县", "贵南县"],
					n: "海南州"
				}, {
					a: ["玛沁县", "甘德县", "达日县", "班玛县", "久治县", "玛多县"],
					n: "果洛州"
				}, {
					a: ["玉树县", "称多县", "囊谦县", "杂多县", "治多县", "曲麻莱县"],
					n: "玉树州"
				}, {
					a: ["德令哈市", "乌兰县", "天峻县", "都兰县", "大柴旦行委", "冷湖行委", "茫崖行委", "格尔木市"],
					n: "海西州"
				}]
			}, {
				n: "宁夏",
				c: [{
					a: ["灵武市", "永宁县", "贺兰县", "兴庆区", "金凤区", "西夏区"],
					n: "银川市"
				}, {
					a: ["平罗县", "惠农区", "大武口区"],
					n: "石嘴山市"
				}, {
					a: ["青铜峡市", "同心县", "盐池县", "红寺堡开发区", "利通区"],
					n: "吴忠市"
				}, {
					a: ["西吉县", "隆德县", "泾源县", "彭阳县", "原州区"],
					n: "固原市"
				}, {
					a: ["中宁县", "海原县", "沙坡头区"],
					n: "中卫市"
				}]
			}, {
				n: "新疆",
				c: [{
					a: ["铁门关市"],
					n: "铁门关市"
				}, {
					a: ["五家渠市"],
					n: "五家渠市"
				}, {
					a: ["阿拉尔市"],
					n: "阿拉尔市"
				}, {
					a: ["图木舒克市"],
					n: "图木舒克市"
				}, {
					a: ["天山区", "头屯河区", "达坂城区", "米东区", "新市区", "沙依巴克区", "水磨沟区", "乌鲁木齐县"],
					n: "乌鲁木齐市"
				}, {
					a: ["克拉玛依区", "独山子区", "乌尔禾区", "白碱滩区"],
					n: "克拉玛依市"
				}, {
					a: ["石河子市"],
					n: "石河子市"
				}, {
					a: ["吐鲁番市", "托克逊县", "鄯善县"],
					n: "吐鲁番地区"
				}, {
					a: ["哈密市", "巴里坤县", "伊吾县"],
					n: "哈密地区"
				}, {
					a: ["和田县", "和田市", "墨玉县", "洛浦县", "策勒县", "于田县", "民丰县", "皮山县"],
					n: "和田地区"
				}, {
					a: ["阿克苏市", "温宿县", "沙雅县", "拜城县", "阿瓦提县", "库车县", "柯坪县", "新和县", "乌什县"],
					n: "阿克苏地区"
				}, {
					a: ["喀什市", "巴楚县", "泽普县", "伽师县", "叶城县", "岳普湖县", "疏附县", "疏勒县", "英吉沙县", "麦盖提县", "莎车县", "塔什库尔干县"],
					n: "喀什地区"
				}, {
					a: ["阿图什市", "阿合奇县", "乌恰县", "阿克陶县"],
					n: "克孜勒苏州"
				}, {
					a: ["库尔勒市", "尉犁县", "和静县", "博湖县", "和硕县", "轮台县", "若羌县", "且末县", "焉耆县"],
					n: "巴音郭楞州"
				}, {
					a: ["昌吉市", "阜康市", "奇台县", "玛纳斯县", "吉木萨尔县", "呼图壁县", "木垒县"],
					n: "昌吉州"
				}, {
					a: ["阿拉山口市", "博乐市", "精河县", "温泉县"],
					n: "博尔塔拉州"
				}, {
					a: ["伊宁县", "伊宁市", "特克斯县", "尼勒克县", "昭苏县", "新源县", "霍城县", "察布查尔县", "巩留县", "奎屯市"],
					n: "伊犁州"
				}, {
					a: ["塔城市", "乌苏市", "额敏县", "裕民县", "沙湾县", "托里县", "和布克赛尔县"],
					n: "塔城地区"
				}, {
					a: ["北屯市", "阿勒泰市", "富蕴县", "青河县", "吉木乃县", "布尔津县", "福海县", "哈巴河县"],
					n: "阿勒泰地区"
				}]
			}, {
				n: "台湾",
				c: [{
					a: ["台湾市区内"],
					n: "台湾"
				}]
			}, {
				n: "钓鱼岛",
				c: [{
					a: [],
					n: "钓鱼岛"
				}]
			}, {
				n: "港澳",
				c: [{
					a: ["中西区", "东区", "九龙城区", "观塘区", "深水埗区", "湾仔区", "黄大仙区", "油尖旺区", "离岛区", "葵青区", "北区", "西贡区", "沙田区", "屯门区", "大埔区", "荃湾区", "元朗区", "香港", "九龙", "新界"],
					n: "香港特别行政区"
				}, {
					a: ["澳门特别行政区", "澳门半岛", "凼仔", "路凼城", "路环"],
					n: "澳门特别行政区"
				}]
			}];
			i = s, a = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== a && (t.exports = a))
		}()
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.CountDown = void 0;
		var a = n(39),
			s = i(a);
		e.CountDown = s.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.CountUp = void 0;
		var a = n(40),
			s = i(a);
		e.CountUp = s.default
	}, function(t, e, n) {
		var i, a, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		};
		! function(s, r) {
			i = r, a = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== a && (t.exports = a))
		}(void 0, function(t, e, n) {
			var i = function(t, e, n, i, a, r) {
				for(var o = 0, l = ["webkit", "moz", "ms", "o"], c = 0; c < l.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[l[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[l[c] + "CancelAnimationFrame"] || window[l[c] + "CancelRequestAnimationFrame"];
				window.requestAnimationFrame || (window.requestAnimationFrame = function(t, e) {
					var n = (new Date).getTime(),
						i = Math.max(0, 16 - (n - o)),
						a = window.setTimeout(function() {
							t(n + i)
						}, i);
					return o = n + i, a
				}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
					clearTimeout(t)
				});
				var A = this;
				if(A.options = {
						useEasing: !0,
						useGrouping: !0,
						separator: ",",
						decimal: ".",
						easingFn: null,
						formattingFn: null,
						prefix: "",
						suffix: ""
					}, r && "object" === ("undefined" == typeof r ? "undefined" : s(r)))
					for(var u in A.options) r.hasOwnProperty(u) && (A.options[u] = r[u]);
				"" === A.options.separator && (A.options.useGrouping = !1), A.version = function() {
					return "1.8.2"
				}, A.d = "string" == typeof t ? document.getElementById(t) : t, A.startVal = Number(e), A.endVal = Number(n), A.countDown = A.startVal > A.endVal, A.frameVal = A.startVal, A.decimals = Math.max(0, i || 0), A.dec = Math.pow(10, A.decimals), A.duration = 1e3 * Number(a) || 2e3, A.formatNumber = function(t) {
					t = t.toFixed(A.decimals), t += "";
					var e, n, i, a;
					if(e = t.split("."), n = e[0], i = e.length > 1 ? A.options.decimal + e[1] : "", a = /(\d+)(\d{3})/, A.options.useGrouping)
						for(; a.test(n);) n = n.replace(a, "$1" + A.options.separator + "$2");
					return A.options.prefix + n + i + A.options.suffix
				}, A.easeOutExpo = function(t, e, n, i) {
					return n * (-Math.pow(2, -10 * t / i) + 1) * 1024 / 1023 + e
				}, A.easingFn = A.options.easingFn ? A.options.easingFn : A.easeOutExpo, A.formattingFn = A.options.formattingFn ? A.options.formattingFn : A.formatNumber, A.printValue = function(t) {
					var e = A.formattingFn(t);
					"INPUT" === A.d.tagName ? this.d.value = e : "text" === A.d.tagName || "tspan" === A.d.tagName ? this.d.textContent = e : this.d.innerHTML = e
				}, A.count = function(t) {
					A.startTime || (A.startTime = t), A.timestamp = t;
					var e = t - A.startTime;
					A.remaining = A.duration - e, A.options.useEasing ? A.countDown ? A.frameVal = A.startVal - A.easingFn(e, 0, A.startVal - A.endVal, A.duration) : A.frameVal = A.easingFn(e, A.startVal, A.endVal - A.startVal, A.duration) : A.countDown ? A.frameVal = A.startVal - (A.startVal - A.endVal) * (e / A.duration) : A.frameVal = A.startVal + (A.endVal - A.startVal) * (e / A.duration), A.countDown ? A.frameVal = A.frameVal < A.endVal ? A.endVal : A.frameVal : A.frameVal = A.frameVal > A.endVal ? A.endVal : A.frameVal, A.frameVal = Math.round(A.frameVal * A.dec) / A.dec, A.printValue(A.frameVal), e < A.duration ? A.rAF = requestAnimationFrame(A.count) : A.callback && A.callback()
				}, A.start = function(t) {
					return A.callback = t, A.rAF = requestAnimationFrame(A.count), !1
				}, A.pauseResume = function() {
					A.paused ? (A.paused = !1, delete A.startTime, A.duration = A.remaining, A.startVal = A.frameVal, requestAnimationFrame(A.count)) : (A.paused = !0, cancelAnimationFrame(A.rAF))
				}, A.reset = function() {
					A.paused = !1, delete A.startTime, A.startVal = e, cancelAnimationFrame(A.rAF), A.printValue(A.startVal)
				}, A.update = function(t) {
					cancelAnimationFrame(A.rAF), A.paused = !1, delete A.startTime, A.startVal = A.frameVal, A.endVal = Number(t), A.countDown = A.startVal > A.endVal, A.rAF = requestAnimationFrame(A.count)
				}, A.printValue(A.startVal)
			};
			return i
		})
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.Loading = e.Notify = e.Toast = e.Alert = e.Confirm = void 0;
		var a = n(171),
			s = i(a),
			r = n(172),
			o = i(r),
			l = n(175),
			c = i(l),
			A = n(174),
			u = i(A),
			d = n(173),
			f = i(d);
		e.Confirm = o.default, e.Alert = s.default, e.Toast = c.default, e.Notify = u.default, e.Loading = f.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = n(5),
			s = i(a),
			r = n(3),
			o = s.default.extend(n(41)),
			l = new o({
				el: document.createElement("div")
			});
		o.prototype.closeAlert = function() {
			r.pageScroll.unlock();
			var t = l.$el;
			t.parentNode && t.parentNode.removeChild(t), "function" == typeof this.callback && this.callback()
		};
		var c = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			l.mes = t.mes, l.callback = t.callback, document.body.appendChild(l.$el), r.pageScroll.lock()
		};
		e.default = c
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = n(5),
			s = i(a),
			r = n(3),
			o = s.default.extend(n(42)),
			l = new o({
				el: document.createElement("div")
			});
		o.prototype.closeConfirm = function(t, e) {
			if("function" == typeof e && e(), !t) {
				r.pageScroll.unlock();
				var n = l.$el;
				n.parentNode && n.parentNode.removeChild(n)
			}
		};
		var c = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			l.mes = t.mes || "", l.title = t.title || "提示", l.opts = t.opts, document.body.appendChild(l.$el), r.pageScroll.lock()
		};
		e.default = c
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = n(5),
			s = i(a),
			r = n(3),
			o = s.default.extend(n(43)),
			l = new o({
				el: document.createElement("div")
			});
		o.prototype.open = function(t) {
			l.title = t || "正在加载", document.body.appendChild(l.$el), r.pageScroll.lock()
		}, o.prototype.close = function() {
			var t = l.$el;
			t.parentNode && t.parentNode.removeChild(t), r.pageScroll.unlock()
		}, e.default = {
			open: l.open,
			close: l.close
		}
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = n(5),
			s = i(a),
			r = s.default.extend(n(44)),
			o = new r({
				el: document.createElement("div")
			}),
			l = null,
			c = !1;
		r.prototype.closeNotify = function() {
			o.classes = "notify-out", setTimeout(function() {
				var t = o.$el;
				t.parentNode && t.parentNode.removeChild(t), c = !1
			}, 150), "function" == typeof this.callback && this.callback()
		};
		var A = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			o.classes = "", o.mes = t.mes, o.timeout = ~~t.timeout || 5e3, o.callback = t.callback, c || (c = !0, document.body.appendChild(o.$el), o.$el.addEventListener("click", function() {
				clearTimeout(l), o.closeNotify()
			}), l = setTimeout(function() {
				clearTimeout(l), o.closeNotify()
			}, o.timeout))
		};
		e.default = A
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = n(5),
			s = i(a),
			r = n(3),
			o = s.default.extend(n(45)),
			l = new o({
				el: document.createElement("div")
			});
		o.prototype.closeToast = function() {
			var t = l.$el;
			t.parentNode && t.parentNode.removeChild(t), r.pageScroll.unlock(), "function" == typeof this.callback && this.callback()
		};
		var c = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			l.mes = t.mes, l.icon = t.icon, l.timeout = ~~t.timeout || 2e3, l.callback = t.callback, document.body.appendChild(l.$el), r.pageScroll.lock();
			var e = setTimeout(function() {
				clearTimeout(e), l.closeToast()
			}, l.timeout + 100)
		};
		e.default = c
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.GridsGroup = e.GridsItem = void 0;
		var a = n(47),
			s = i(a),
			r = n(46),
			o = i(r);
		e.GridsItem = s.default, e.GridsGroup = o.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.Icons = void 0;
		var a = n(48),
			s = i(a);
		e.Icons = s.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.InfiniteScroll = void 0;
		var a = n(49),
			s = i(a);
		e.InfiniteScroll = s.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.KeyBoard = void 0;
		var a = n(50),
			s = i(a);
		e.KeyBoard = s.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.Layout = void 0;
		var a = n(51),
			s = i(a);
		e.Layout = s.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.LazyImg = void 0;
		var a = n(52),
			s = i(a);
		e.LazyImg = s.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.ListOther = e.ListItem = e.ListTheme = void 0;
		var a = n(55),
			s = i(a),
			r = n(53),
			o = i(r),
			l = n(54),
			c = i(l);
		e.ListTheme = s.default, e.ListItem = o.default, e.ListOther = c.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.NavBarNextIcon = e.NavBarBackIcon = e.NavBar = void 0;
		var a = n(58),
			s = i(a),
			r = n(56),
			o = i(r),
			l = n(57),
			c = i(l);
		e.NavBar = s.default, e.NavBarBackIcon = o.default, e.NavBarNextIcon = c.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.Popup = void 0;
		var a = n(59),
			s = i(a);
		e.Popup = s.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.ProgressBar = void 0;
		var a = n(60),
			s = i(a);
		e.ProgressBar = s.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.PullRefresh = void 0;
		var a = n(61),
			s = i(a);
		e.PullRefresh = s.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.Rate = void 0;
		var a = n(62),
			s = i(a);
		e.Rate = s.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.ScrollTabPanel = e.ScrollTab = void 0;
		var a = n(64),
			s = i(a),
			r = n(63),
			o = i(r);
		e.ScrollTab = s.default, e.ScrollTabPanel = o.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.SendCode = void 0;
		var a = n(65),
			s = i(a);
		e.SendCode = s.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.SliderItem = e.Slider = void 0;
		var a = n(67),
			s = i(a),
			r = n(66),
			o = i(r);
		e.Slider = s.default, e.SliderItem = o.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.Spinner = void 0;
		var a = n(68),
			s = i(a);
		e.Spinner = s.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.Switch = void 0;
		var a = n(69),
			s = i(a);
		e.Switch = s.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.TabPanel = e.Tab = void 0;
		var a = n(71),
			s = i(a),
			r = n(70),
			o = i(r);
		e.Tab = s.default, e.TabPanel = o.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.TabBarItem = e.TabBar = void 0;
		var a = n(73),
			s = i(a),
			r = n(72),
			o = i(r);
		e.TabBar = s.default, e.TabBarItem = o.default
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.TextArea = void 0;
		var a = n(74),
			s = i(a);
		e.TextArea = s.default
	}])
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v5.0.0-beta2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper);
}(void 0, function (t) {
  "use strict";

  function e(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return t && Object.keys(t).forEach(function (n) {
      if ("default" !== n) {
        var i = Object.getOwnPropertyDescriptor(t, n);
        Object.defineProperty(e, n, i.get ? i : {
          enumerable: !0,
          get: function get() {
            return t[n];
          }
        });
      }
    }), e["default"] = t, Object.freeze(e);
  }

  var n = e(t);

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function s() {
    return (s = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
      }

      return t;
    }).apply(this, arguments);
  }

  function r(t, e) {
    var n, i;
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, n = t, i = e, (Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(n, i);
  }

  var a,
      l,
      c = function c(t) {
    do {
      t += Math.floor(1e6 * Math.random());
    } while (document.getElementById(t));

    return t;
  },
      u = function u(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var n = t.getAttribute("href");
      if (!n || !n.includes("#") && !n.startsWith(".")) return null;
      n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]), e = n && "#" !== n ? n.trim() : null;
    }

    return e;
  },
      h = function h(t) {
    var e = u(t);
    return e && document.querySelector(e) ? e : null;
  },
      d = function d(t) {
    var e = u(t);
    return e ? document.querySelector(e) : null;
  },
      f = function f(t) {
    if (!t) return 0;
    var e = window.getComputedStyle(t),
        n = e.transitionDuration,
        i = e.transitionDelay,
        o = Number.parseFloat(n),
        s = Number.parseFloat(i);
    return o || s ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(n) + Number.parseFloat(i))) : 0;
  },
      p = function p(t) {
    t.dispatchEvent(new Event("transitionend"));
  },
      g = function g(t) {
    return (t[0] || t).nodeType;
  },
      m = function m(t, e) {
    var n = !1,
        i = e + 5;
    t.addEventListener("transitionend", function e() {
      n = !0, t.removeEventListener("transitionend", e);
    }), setTimeout(function () {
      n || p(t);
    }, i);
  },
      _ = function _(t, e, n) {
    Object.keys(n).forEach(function (i) {
      var o,
          s = n[i],
          r = e[i],
          a = r && g(r) ? "element" : null == (o = r) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
      if (!new RegExp(s).test(a)) throw new TypeError(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + s + '".');
    });
  },
      v = function v(t) {
    if (!t) return !1;

    if (t.style && t.parentNode && t.parentNode.style) {
      var e = getComputedStyle(t),
          n = getComputedStyle(t.parentNode);
      return "none" !== e.display && "none" !== n.display && "hidden" !== e.visibility;
    }

    return !1;
  },
      b = function b() {
    return function () {};
  },
      y = function y(t) {
    return t.offsetHeight;
  },
      w = function w() {
    var t = window.jQuery;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
      E = "rtl" === document.documentElement.dir,
      T = function T(t, e) {
    var n;
    n = function n() {
      var n = w();

      if (n) {
        var i = n.fn[t];
        n.fn[t] = e.jQueryInterface, n.fn[t].Constructor = e, n.fn[t].noConflict = function () {
          return n.fn[t] = i, e.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", n) : n();
  },
      A = (a = {}, l = 1, {
    set: function set(t, e, n) {
      void 0 === t.bsKey && (t.bsKey = {
        key: e,
        id: l
      }, l++), a[t.bsKey.id] = n;
    },
    get: function get(t, e) {
      if (!t || void 0 === t.bsKey) return null;
      var n = t.bsKey;
      return n.key === e ? a[n.id] : null;
    },
    "delete": function _delete(t, e) {
      if (void 0 !== t.bsKey) {
        var n = t.bsKey;
        n.key === e && (delete a[n.id], delete t.bsKey);
      }
    }
  }),
      k = function k(t, e, n) {
    A.set(t, e, n);
  },
      L = function L(t, e) {
    return A.get(t, e);
  },
      C = /[^.]*(?=\..*)\.|.*/,
      D = /\..*/,
      S = /::\d+$/,
      N = {},
      O = 1,
      I = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      j = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function P(t, e) {
    return e && e + "::" + O++ || t.uidEvent || O++;
  }

  function x(t) {
    var e = P(t);
    return t.uidEvent = e, N[e] = N[e] || {}, N[e];
  }

  function H(t, e, n) {
    void 0 === n && (n = null);

    for (var i = Object.keys(t), o = 0, s = i.length; o < s; o++) {
      var r = t[i[o]];
      if (r.originalHandler === e && r.delegationSelector === n) return r;
    }

    return null;
  }

  function B(t, e, n) {
    var i = "string" == typeof e,
        o = i ? n : e,
        s = t.replace(D, ""),
        r = I[s];
    return r && (s = r), j.has(s) || (s = t), [i, o, s];
  }

  function M(t, e, n, i, o) {
    if ("string" == typeof e && t) {
      n || (n = i, i = null);
      var s = B(e, n, i),
          r = s[0],
          a = s[1],
          l = s[2],
          c = x(t),
          u = c[l] || (c[l] = {}),
          h = H(u, a, r ? n : null);
      if (h) h.oneOff = h.oneOff && o;else {
        var d = P(a, e.replace(C, "")),
            f = r ? function (t, e, n) {
          return function i(o) {
            for (var s = t.querySelectorAll(e), r = o.target; r && r !== this; r = r.parentNode) {
              for (var a = s.length; a--;) {
                if (s[a] === r) return o.delegateTarget = r, i.oneOff && K.off(t, o.type, n), n.apply(r, [o]);
              }
            }

            return null;
          };
        }(t, n, i) : function (t, e) {
          return function n(i) {
            return i.delegateTarget = t, n.oneOff && K.off(t, i.type, e), e.apply(t, [i]);
          };
        }(t, n);
        f.delegationSelector = r ? n : null, f.originalHandler = a, f.oneOff = o, f.uidEvent = d, u[d] = f, t.addEventListener(l, f, r);
      }
    }
  }

  function R(t, e, n, i, o) {
    var s = H(e[n], i, o);
    s && (t.removeEventListener(n, s, Boolean(o)), delete e[n][s.uidEvent]);
  }

  var K = {
    on: function on(t, e, n, i) {
      M(t, e, n, i, !1);
    },
    one: function one(t, e, n, i) {
      M(t, e, n, i, !0);
    },
    off: function off(t, e, n, i) {
      if ("string" == typeof e && t) {
        var o = B(e, n, i),
            s = o[0],
            r = o[1],
            a = o[2],
            l = a !== e,
            c = x(t),
            u = e.startsWith(".");

        if (void 0 === r) {
          u && Object.keys(c).forEach(function (n) {
            !function (t, e, n, i) {
              var o = e[n] || {};
              Object.keys(o).forEach(function (s) {
                if (s.includes(i)) {
                  var r = o[s];
                  R(t, e, n, r.originalHandler, r.delegationSelector);
                }
              });
            }(t, c, n, e.slice(1));
          });
          var h = c[a] || {};
          Object.keys(h).forEach(function (n) {
            var i = n.replace(S, "");

            if (!l || e.includes(i)) {
              var o = h[n];
              R(t, c, a, o.originalHandler, o.delegationSelector);
            }
          });
        } else {
          if (!c || !c[a]) return;
          R(t, c, a, r, s ? n : null);
        }
      }
    },
    trigger: function trigger(t, e, n) {
      if ("string" != typeof e || !t) return null;
      var i,
          o = w(),
          s = e.replace(D, ""),
          r = e !== s,
          a = j.has(s),
          l = !0,
          c = !0,
          u = !1,
          h = null;
      return r && o && (i = o.Event(e, n), o(t).trigger(i), l = !i.isPropagationStopped(), c = !i.isImmediatePropagationStopped(), u = i.isDefaultPrevented()), a ? (h = document.createEvent("HTMLEvents")).initEvent(s, l, !0) : h = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== n && Object.keys(n).forEach(function (t) {
        Object.defineProperty(h, t, {
          get: function get() {
            return n[t];
          }
        });
      }), u && h.preventDefault(), c && t.dispatchEvent(h), h.defaultPrevented && void 0 !== i && i.preventDefault(), h;
    }
  },
      W = function () {
    function t(t) {
      t && (this._element = t, k(t, this.constructor.DATA_KEY, this));
    }

    return t.prototype.dispose = function () {
      var t, e;
      t = this._element, e = this.constructor.DATA_KEY, A["delete"](t, e), this._element = null;
    }, t.getInstance = function (t) {
      return L(t, this.DATA_KEY);
    }, o(t, null, [{
      key: "VERSION",
      get: function get() {
        return "5.0.0-beta2";
      }
    }]), t;
  }(),
      U = function (t) {
    function e() {
      return t.apply(this, arguments) || this;
    }

    r(e, t);
    var n = e.prototype;
    return n.close = function (t) {
      var e = t ? this._getRootElement(t) : this._element,
          n = this._triggerCloseEvent(e);

      null === n || n.defaultPrevented || this._removeElement(e);
    }, n._getRootElement = function (t) {
      return d(t) || t.closest(".alert");
    }, n._triggerCloseEvent = function (t) {
      return K.trigger(t, "close.bs.alert");
    }, n._removeElement = function (t) {
      var e = this;

      if (t.classList.remove("show"), t.classList.contains("fade")) {
        var n = f(t);
        K.one(t, "transitionend", function () {
          return e._destroyElement(t);
        }), m(t, n);
      } else this._destroyElement(t);
    }, n._destroyElement = function (t) {
      t.parentNode && t.parentNode.removeChild(t), K.trigger(t, "closed.bs.alert");
    }, e.jQueryInterface = function (t) {
      return this.each(function () {
        var n = L(this, "bs.alert");
        n || (n = new e(this)), "close" === t && n[t](this);
      });
    }, e.handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, o(e, null, [{
      key: "DATA_KEY",
      get: function get() {
        return "bs.alert";
      }
    }]), e;
  }(W);

  K.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', U.handleDismiss(new U())), T("alert", U);

  var F = function (t) {
    function e() {
      return t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.toggle = function () {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }, e.jQueryInterface = function (t) {
      return this.each(function () {
        var n = L(this, "bs.button");
        n || (n = new e(this)), "toggle" === t && n[t]();
      });
    }, o(e, null, [{
      key: "DATA_KEY",
      get: function get() {
        return "bs.button";
      }
    }]), e;
  }(W);

  function z(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function Y(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  K.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', function (t) {
    t.preventDefault();
    var e = t.target.closest('[data-bs-toggle="button"]'),
        n = L(e, "bs.button");
    n || (n = new F(e)), n.toggle();
  }), T("button", F);

  var X = {
    setDataAttribute: function setDataAttribute(t, e, n) {
      t.setAttribute("data-bs-" + Y(e), n);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + Y(e));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {};
      return Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs");
      }).forEach(function (n) {
        var i = n.replace(/^bs/, "");
        i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = z(t.dataset[n]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return z(t.getAttribute("data-bs-" + Y(e)));
    },
    offset: function offset(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + document.body.scrollTop,
        left: e.left + document.body.scrollLeft
      };
    },
    position: function position(t) {
      return {
        top: t.offsetTop,
        left: t.offsetLeft
      };
    }
  },
      q = function q(t, e) {
    var n;
    return void 0 === e && (e = document.documentElement), (n = []).concat.apply(n, Element.prototype.querySelectorAll.call(e, t));
  },
      Q = function Q(t, e) {
    return void 0 === e && (e = document.documentElement), Element.prototype.querySelector.call(e, t);
  },
      V = function V(t, e) {
    var n;
    return (n = []).concat.apply(n, t.children).filter(function (t) {
      return t.matches(e);
    });
  },
      $ = function $(t, e) {
    for (var n = t.previousElementSibling; n;) {
      if (n.matches(e)) return [n];
      n = n.previousElementSibling;
    }

    return [];
  },
      G = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      Z = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      J = function (t) {
    function e(e, n) {
      var i;
      return (i = t.call(this, e) || this)._items = null, i._interval = null, i._activeElement = null, i._isPaused = !1, i._isSliding = !1, i.touchTimeout = null, i.touchStartX = 0, i.touchDeltaX = 0, i._config = i._getConfig(n), i._indicatorsElement = Q(".carousel-indicators", i._element), i._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, i._pointerEvent = Boolean(window.PointerEvent), i._addEventListeners(), i;
    }

    r(e, t);
    var n = e.prototype;
    return n.next = function () {
      this._isSliding || this._slide("next");
    }, n.nextWhenVisible = function () {
      !document.hidden && v(this._element) && this.next();
    }, n.prev = function () {
      this._isSliding || this._slide("prev");
    }, n.pause = function (t) {
      t || (this._isPaused = !0), Q(".carousel-item-next, .carousel-item-prev", this._element) && (p(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, n.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, n.to = function (t) {
      var e = this;
      this._activeElement = Q(".active.carousel-item", this._element);

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) K.one(this._element, "slid.bs.carousel", function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = t > n ? "next" : "prev";

        this._slide(i, this._items[t]);
      }
    }, n.dispose = function () {
      t.prototype.dispose.call(this), K.off(this._element, ".bs.carousel"), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, n._getConfig = function (t) {
      return t = s({}, G, t), _("carousel", t, Z), t;
    }, n._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);

      if (!(t <= 40)) {
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e > 0 && (E ? this.next() : this.prev()), e < 0 && (E ? this.prev() : this.next());
      }
    }, n._addEventListeners = function () {
      var t = this;
      this._config.keyboard && K.on(this._element, "keydown.bs.carousel", function (e) {
        return t._keydown(e);
      }), "hover" === this._config.pause && (K.on(this._element, "mouseenter.bs.carousel", function (e) {
        return t.pause(e);
      }), K.on(this._element, "mouseleave.bs.carousel", function (e) {
        return t.cycle(e);
      })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
    }, n._addTouchEventListeners = function () {
      var t = this,
          e = function e(_e) {
        !t._pointerEvent || "pen" !== _e.pointerType && "touch" !== _e.pointerType ? t._pointerEvent || (t.touchStartX = _e.touches[0].clientX) : t.touchStartX = _e.clientX;
      },
          n = function n(e) {
        !t._pointerEvent || "pen" !== e.pointerType && "touch" !== e.pointerType || (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
          return t.cycle(e);
        }, 500 + t._config.interval));
      };

      q(".carousel-item img", this._element).forEach(function (t) {
        K.on(t, "dragstart.bs.carousel", function (t) {
          return t.preventDefault();
        });
      }), this._pointerEvent ? (K.on(this._element, "pointerdown.bs.carousel", function (t) {
        return e(t);
      }), K.on(this._element, "pointerup.bs.carousel", function (t) {
        return n(t);
      }), this._element.classList.add("pointer-event")) : (K.on(this._element, "touchstart.bs.carousel", function (t) {
        return e(t);
      }), K.on(this._element, "touchmove.bs.carousel", function (e) {
        return function (e) {
          e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX;
        }(e);
      }), K.on(this._element, "touchend.bs.carousel", function (t) {
        return n(t);
      }));
    }, n._keydown = function (t) {
      /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), E ? this.next() : this.prev()) : "ArrowRight" === t.key && (t.preventDefault(), E ? this.prev() : this.next()));
    }, n._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? q(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
    }, n._getItemByDirection = function (t, e) {
      var n = "next" === t,
          i = "prev" === t,
          o = this._getItemIndex(e),
          s = this._items.length - 1;

      if ((i && 0 === o || n && o === s) && !this._config.wrap) return e;
      var r = (o + ("prev" === t ? -1 : 1)) % this._items.length;
      return -1 === r ? this._items[this._items.length - 1] : this._items[r];
    }, n._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(Q(".active.carousel-item", this._element));

      return K.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });
    }, n._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var e = Q(".active", this._indicatorsElement);
        e.classList.remove("active"), e.removeAttribute("aria-current");

        for (var n = q("[data-bs-target]", this._indicatorsElement), i = 0; i < n.length; i++) {
          if (Number.parseInt(n[i].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
            n[i].classList.add("active"), n[i].setAttribute("aria-current", "true");
            break;
          }
        }
      }
    }, n._updateInterval = function () {
      var t = this._activeElement || Q(".active.carousel-item", this._element);

      if (t) {
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, n._slide = function (t, e) {
      var n = this,
          i = Q(".active.carousel-item", this._element),
          o = this._getItemIndex(i),
          s = e || i && this._getItemByDirection(t, i),
          r = this._getItemIndex(s),
          a = Boolean(this._interval),
          l = "next" === t ? "carousel-item-start" : "carousel-item-end",
          c = "next" === t ? "carousel-item-next" : "carousel-item-prev",
          u = "next" === t ? "left" : "right";

      if (s && s.classList.contains("active")) this._isSliding = !1;else if (!this._triggerSlideEvent(s, u).defaultPrevented && i && s) {
        if (this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s), this._activeElement = s, this._element.classList.contains("slide")) {
          s.classList.add(c), y(s), i.classList.add(l), s.classList.add(l);
          var h = f(i);
          K.one(i, "transitionend", function () {
            s.classList.remove(l, c), s.classList.add("active"), i.classList.remove("active", c, l), n._isSliding = !1, setTimeout(function () {
              K.trigger(n._element, "slid.bs.carousel", {
                relatedTarget: s,
                direction: u,
                from: o,
                to: r
              });
            }, 0);
          }), m(i, h);
        } else i.classList.remove("active"), s.classList.add("active"), this._isSliding = !1, K.trigger(this._element, "slid.bs.carousel", {
          relatedTarget: s,
          direction: u,
          from: o,
          to: r
        });

        a && this.cycle();
      }
    }, e.carouselInterface = function (t, n) {
      var i = L(t, "bs.carousel"),
          o = s({}, G, X.getDataAttributes(t));
      "object" == _typeof(n) && (o = s({}, o, n));
      var r = "string" == typeof n ? n : o.slide;
      if (i || (i = new e(t, o)), "number" == typeof n) i.to(n);else if ("string" == typeof r) {
        if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
        i[r]();
      } else o.interval && o.ride && (i.pause(), i.cycle());
    }, e.jQueryInterface = function (t) {
      return this.each(function () {
        e.carouselInterface(this, t);
      });
    }, e.dataApiClickHandler = function (t) {
      var n = d(this);

      if (n && n.classList.contains("carousel")) {
        var i = s({}, X.getDataAttributes(n), X.getDataAttributes(this)),
            o = this.getAttribute("data-bs-slide-to");
        o && (i.interval = !1), e.carouselInterface(n, i), o && L(n, "bs.carousel").to(o), t.preventDefault();
      }
    }, o(e, null, [{
      key: "Default",
      get: function get() {
        return G;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.carousel";
      }
    }]), e;
  }(W);

  K.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", J.dataApiClickHandler), K.on(window, "load.bs.carousel.data-api", function () {
    for (var t = q('[data-bs-ride="carousel"]'), e = 0, n = t.length; e < n; e++) {
      J.carouselInterface(t[e], L(t[e], "bs.carousel"));
    }
  }), T("carousel", J);

  var tt = {
    toggle: !0,
    parent: ""
  },
      et = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      nt = function (t) {
    function e(e, n) {
      var i;
      (i = t.call(this, e) || this)._isTransitioning = !1, i._config = i._getConfig(n), i._triggerArray = q('[data-bs-toggle="collapse"][href="#' + e.id + '"],[data-bs-toggle="collapse"][data-bs-target="#' + e.id + '"]');

      for (var o = q('[data-bs-toggle="collapse"]'), s = 0, r = o.length; s < r; s++) {
        var a = o[s],
            l = h(a),
            c = q(l).filter(function (t) {
          return t === e;
        });
        null !== l && c.length && (i._selector = l, i._triggerArray.push(a));
      }

      return i._parent = i._config.parent ? i._getParent() : null, i._config.parent || i._addAriaAndCollapsedClass(i._element, i._triggerArray), i._config.toggle && i.toggle(), i;
    }

    r(e, t);
    var n = e.prototype;
    return n.toggle = function () {
      this._element.classList.contains("show") ? this.hide() : this.show();
    }, n.show = function () {
      var t = this;

      if (!this._isTransitioning && !this._element.classList.contains("show")) {
        var n, i;
        this._parent && 0 === (n = q(".show, .collapsing", this._parent).filter(function (e) {
          return "string" == typeof t._config.parent ? e.getAttribute("data-bs-parent") === t._config.parent : e.classList.contains("collapse");
        })).length && (n = null);
        var o = Q(this._selector);

        if (n) {
          var s = n.find(function (t) {
            return o !== t;
          });
          if ((i = s ? L(s, "bs.collapse") : null) && i._isTransitioning) return;
        }

        if (!K.trigger(this._element, "show.bs.collapse").defaultPrevented) {
          n && n.forEach(function (t) {
            o !== t && e.collapseInterface(t, "hide"), i || k(t, "bs.collapse", null);
          });

          var r = this._getDimension();

          this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[r] = 0, this._triggerArray.length && this._triggerArray.forEach(function (t) {
            t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0);
          }), this.setTransitioning(!0);
          var a = "scroll" + (r[0].toUpperCase() + r.slice(1)),
              l = f(this._element);
          K.one(this._element, "transitionend", function () {
            t._element.classList.remove("collapsing"), t._element.classList.add("collapse", "show"), t._element.style[r] = "", t.setTransitioning(!1), K.trigger(t._element, "shown.bs.collapse");
          }), m(this._element, l), this._element.style[r] = this._element[a] + "px";
        }
      }
    }, n.hide = function () {
      var t = this;

      if (!this._isTransitioning && this._element.classList.contains("show") && !K.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
        var e = this._getDimension();

        this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", y(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
        var n = this._triggerArray.length;
        if (n > 0) for (var i = 0; i < n; i++) {
          var o = this._triggerArray[i],
              s = d(o);
          s && !s.classList.contains("show") && (o.classList.add("collapsed"), o.setAttribute("aria-expanded", !1));
        }
        this.setTransitioning(!0), this._element.style[e] = "";
        var r = f(this._element);
        K.one(this._element, "transitionend", function () {
          t.setTransitioning(!1), t._element.classList.remove("collapsing"), t._element.classList.add("collapse"), K.trigger(t._element, "hidden.bs.collapse");
        }), m(this._element, r);
      }
    }, n.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, n.dispose = function () {
      t.prototype.dispose.call(this), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null;
    }, n._getConfig = function (t) {
      return (t = s({}, tt, t)).toggle = Boolean(t.toggle), _("collapse", t, et), t;
    }, n._getDimension = function () {
      return this._element.classList.contains("width") ? "width" : "height";
    }, n._getParent = function () {
      var t = this,
          e = this._config.parent;
      return g(e) ? void 0 === e.jquery && void 0 === e[0] || (e = e[0]) : e = Q(e), q('[data-bs-toggle="collapse"][data-bs-parent="' + e + '"]', e).forEach(function (e) {
        var n = d(e);

        t._addAriaAndCollapsedClass(n, [e]);
      }), e;
    }, n._addAriaAndCollapsedClass = function (t, e) {
      if (t && e.length) {
        var n = t.classList.contains("show");
        e.forEach(function (t) {
          n ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", n);
        });
      }
    }, e.collapseInterface = function (t, n) {
      var i = L(t, "bs.collapse"),
          o = s({}, tt, X.getDataAttributes(t), "object" == _typeof(n) && n ? n : {});

      if (!i && o.toggle && "string" == typeof n && /show|hide/.test(n) && (o.toggle = !1), i || (i = new e(t, o)), "string" == typeof n) {
        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
        i[n]();
      }
    }, e.jQueryInterface = function (t) {
      return this.each(function () {
        e.collapseInterface(this, t);
      });
    }, o(e, null, [{
      key: "Default",
      get: function get() {
        return tt;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.collapse";
      }
    }]), e;
  }(W);

  K.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var e = X.getDataAttributes(this),
        n = h(this);
    q(n).forEach(function (t) {
      var n,
          i = L(t, "bs.collapse");
      i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, nt.collapseInterface(t, n);
    });
  }), T("collapse", nt);

  var it = new RegExp("ArrowUp|ArrowDown|Escape"),
      ot = E ? "top-end" : "top-start",
      st = E ? "top-start" : "top-end",
      rt = E ? "bottom-end" : "bottom-start",
      at = E ? "bottom-start" : "bottom-end",
      lt = E ? "left-start" : "right-start",
      ct = E ? "right-start" : "left-start",
      ut = {
    offset: [0, 2],
    flip: !0,
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null
  },
      ht = {
    offset: "(array|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)"
  },
      dt = function (e) {
    function i(t, n) {
      var i;
      return (i = e.call(this, t) || this)._popper = null, i._config = i._getConfig(n), i._menu = i._getMenuElement(), i._inNavbar = i._detectNavbar(), i._addEventListeners(), i;
    }

    r(i, e);
    var a = i.prototype;
    return a.toggle = function () {
      if (!this._element.disabled && !this._element.classList.contains("disabled")) {
        var t = this._element.classList.contains("show");

        i.clearMenus(), t || this.show();
      }
    }, a.show = function () {
      if (!(this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show"))) {
        var e = i.getParentFromElement(this._element),
            o = {
          relatedTarget: this._element
        };

        if (!K.trigger(this._element, "show.bs.dropdown", o).defaultPrevented) {
          if (this._inNavbar) X.setDataAttribute(this._menu, "popper", "none");else {
            if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            var s = this._element;
            "parent" === this._config.reference ? s = e : g(this._config.reference) ? (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])) : "object" == _typeof(this._config.reference) && (s = this._config.reference);

            var r = this._getPopperConfig(),
                a = r.modifiers.find(function (t) {
              return "applyStyles" === t.name && !1 === t.enabled;
            });

            this._popper = t.createPopper(s, this._menu, r), a && X.setDataAttribute(this._menu, "popper", "static");
          }
          var l;
          "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && (l = []).concat.apply(l, document.body.children).forEach(function (t) {
            return K.on(t, "mouseover", null, function () {});
          }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), K.trigger(this._element, "shown.bs.dropdown", o);
        }
      }
    }, a.hide = function () {
      if (!this._element.disabled && !this._element.classList.contains("disabled") && this._menu.classList.contains("show")) {
        var t = {
          relatedTarget: this._element
        };
        K.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), X.removeDataAttribute(this._menu, "popper"), K.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, a.dispose = function () {
      e.prototype.dispose.call(this), K.off(this._element, ".bs.dropdown"), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null);
    }, a.update = function () {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }, a._addEventListeners = function () {
      var t = this;
      K.on(this._element, "click.bs.dropdown", function (e) {
        e.preventDefault(), e.stopPropagation(), t.toggle();
      });
    }, a._getConfig = function (t) {
      if (t = s({}, this.constructor.Default, X.getDataAttributes(this._element), t), _("dropdown", t, this.constructor.DefaultType), "object" == _typeof(t.reference) && !g(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
      return t;
    }, a._getMenuElement = function () {
      return function (t, e) {
        for (var n = t.nextElementSibling; n;) {
          if (n.matches(e)) return [n];
          n = n.nextElementSibling;
        }

        return [];
      }(this._element, ".dropdown-menu")[0];
    }, a._getPlacement = function () {
      var t = this._element.parentNode;
      if (t.classList.contains("dropend")) return lt;
      if (t.classList.contains("dropstart")) return ct;
      var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? e ? st : ot : e ? at : rt;
    }, a._detectNavbar = function () {
      return null !== this._element.closest(".navbar");
    }, a._getOffset = function () {
      var t = this,
          e = this._config.offset;
      return "string" == typeof e ? e.split(",").map(function (t) {
        return Number.parseInt(t, 10);
      }) : "function" == typeof e ? function (n) {
        return e(n, t._element);
      } : e;
    }, a._getPopperConfig = function () {
      var t = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            altBoundary: this._config.flip,
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      return "static" === this._config.display && (t.modifiers = [{
        name: "applyStyles",
        enabled: !1
      }]), s({}, t, "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
    }, i.dropdownInterface = function (t, e) {
      var n = L(t, "bs.dropdown");

      if (n || (n = new i(t, "object" == _typeof(e) ? e : null)), "string" == typeof e) {
        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
        n[e]();
      }
    }, i.jQueryInterface = function (t) {
      return this.each(function () {
        i.dropdownInterface(this, t);
      });
    }, i.clearMenus = function (t) {
      if (!t || 2 !== t.button && ("keyup" !== t.type || "Tab" === t.key)) for (var e = q('[data-bs-toggle="dropdown"]'), n = 0, i = e.length; n < i; n++) {
        var o = L(e[n], "bs.dropdown"),
            s = {
          relatedTarget: e[n]
        };

        if (t && "click" === t.type && (s.clickEvent = t), o) {
          var r,
              a = o._menu;
          if (e[n].classList.contains("show") && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && "Tab" === t.key) && a.contains(t.target) || K.trigger(e[n], "hide.bs.dropdown", s).defaultPrevented)) "ontouchstart" in document.documentElement && (r = []).concat.apply(r, document.body.children).forEach(function (t) {
            return K.off(t, "mouseover", null, function () {});
          }), e[n].setAttribute("aria-expanded", "false"), o._popper && o._popper.destroy(), a.classList.remove("show"), e[n].classList.remove("show"), X.removeDataAttribute(a, "popper"), K.trigger(e[n], "hidden.bs.dropdown", s);
        }
      }
    }, i.getParentFromElement = function (t) {
      return d(t) || t.parentNode;
    }, i.dataApiKeydownHandler = function (t) {
      if (!(/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !it.test(t.key)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !this.classList.contains("disabled"))) {
        var e = i.getParentFromElement(this),
            n = this.classList.contains("show");
        if ("Escape" === t.key) return (this.matches('[data-bs-toggle="dropdown"]') ? this : $(this, '[data-bs-toggle="dropdown"]')[0]).focus(), void i.clearMenus();
        if (n || "ArrowUp" !== t.key && "ArrowDown" !== t.key) {
          if (n && "Space" !== t.key) {
            var o = q(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(v);

            if (o.length) {
              var s = o.indexOf(t.target);
              "ArrowUp" === t.key && s > 0 && s--, "ArrowDown" === t.key && s < o.length - 1 && s++, o[s = -1 === s ? 0 : s].focus();
            }
          } else i.clearMenus();
        } else (this.matches('[data-bs-toggle="dropdown"]') ? this : $(this, '[data-bs-toggle="dropdown"]')[0]).click();
      }
    }, o(i, null, [{
      key: "Default",
      get: function get() {
        return ut;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ht;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.dropdown";
      }
    }]), i;
  }(W);

  K.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', dt.dataApiKeydownHandler), K.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", dt.dataApiKeydownHandler), K.on(document, "click.bs.dropdown.data-api", dt.clearMenus), K.on(document, "keyup.bs.dropdown.data-api", dt.clearMenus), K.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
    t.preventDefault(), t.stopPropagation(), dt.dropdownInterface(this, "toggle");
  }), K.on(document, "click.bs.dropdown.data-api", ".dropdown form", function (t) {
    return t.stopPropagation();
  }), T("dropdown", dt);

  var ft = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
      pt = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  },
      gt = function (t) {
    function e(e, n) {
      var i;
      return (i = t.call(this, e) || this)._config = i._getConfig(n), i._dialog = Q(".modal-dialog", e), i._backdrop = null, i._isShown = !1, i._isBodyOverflowing = !1, i._ignoreBackdropClick = !1, i._isTransitioning = !1, i._scrollbarWidth = 0, i;
    }

    r(e, t);
    var n = e.prototype;
    return n.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, n.show = function (t) {
      var e = this;

      if (!this._isShown && !this._isTransitioning) {
        this._element.classList.contains("fade") && (this._isTransitioning = !0);
        var n = K.trigger(this._element, "show.bs.modal", {
          relatedTarget: t
        });
        this._isShown || n.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), K.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', function (t) {
          return e.hide(t);
        }), K.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
          K.one(e._element, "mouseup.dismiss.bs.modal", function (t) {
            t.target === e._element && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, n.hide = function (t) {
      var e = this;

      if (t && t.preventDefault(), this._isShown && !this._isTransitioning && !K.trigger(this._element, "hide.bs.modal").defaultPrevented) {
        this._isShown = !1;

        var n = this._element.classList.contains("fade");

        if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), K.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), K.off(this._element, "click.dismiss.bs.modal"), K.off(this._dialog, "mousedown.dismiss.bs.modal"), n) {
          var i = f(this._element);
          K.one(this._element, "transitionend", function (t) {
            return e._hideModal(t);
          }), m(this._element, i);
        } else this._hideModal();
      }
    }, n.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return K.off(t, ".bs.modal");
      }), t.prototype.dispose.call(this), K.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, n.handleUpdate = function () {
      this._adjustDialog();
    }, n._getConfig = function (t) {
      return t = s({}, ft, t), _("modal", t, pt), t;
    }, n._showElement = function (t) {
      var e = this,
          n = this._element.classList.contains("fade"),
          i = Q(".modal-body", this._dialog);

      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), n && y(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();

      var o = function o() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, K.trigger(e._element, "shown.bs.modal", {
          relatedTarget: t
        });
      };

      if (n) {
        var s = f(this._dialog);
        K.one(this._dialog, "transitionend", o), m(this._dialog, s);
      } else o();
    }, n._enforceFocus = function () {
      var t = this;
      K.off(document, "focusin.bs.modal"), K.on(document, "focusin.bs.modal", function (e) {
        document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus();
      });
    }, n._setEscapeEvent = function () {
      var t = this;
      this._isShown ? K.on(this._element, "keydown.dismiss.bs.modal", function (e) {
        t._config.keyboard && "Escape" === e.key ? (e.preventDefault(), t.hide()) : t._config.keyboard || "Escape" !== e.key || t._triggerBackdropTransition();
      }) : K.off(this._element, "keydown.dismiss.bs.modal");
    }, n._setResizeEvent = function () {
      var t = this;
      this._isShown ? K.on(window, "resize.bs.modal", function () {
        return t._adjustDialog();
      }) : K.off(window, "resize.bs.modal");
    }, n._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
        document.body.classList.remove("modal-open"), t._resetAdjustments(), t._resetScrollbar(), K.trigger(t._element, "hidden.bs.modal");
      });
    }, n._removeBackdrop = function () {
      this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null;
    }, n._showBackdrop = function (t) {
      var e = this,
          n = this._element.classList.contains("fade") ? "fade" : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), document.body.appendChild(this._backdrop), K.on(this._element, "click.dismiss.bs.modal", function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide());
        }), n && y(this._backdrop), this._backdrop.classList.add("show"), !n) return void t();
        var i = f(this._backdrop);
        K.one(this._backdrop, "transitionend", t), m(this._backdrop, i);
      } else if (!this._isShown && this._backdrop) {
        this._backdrop.classList.remove("show");

        var o = function o() {
          e._removeBackdrop(), t();
        };

        if (this._element.classList.contains("fade")) {
          var s = f(this._backdrop);
          K.one(this._backdrop, "transitionend", o), m(this._backdrop, s);
        } else o();
      } else t();
    }, n._triggerBackdropTransition = function () {
      var t = this;

      if (!K.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
        var e = this._element.scrollHeight > document.documentElement.clientHeight;
        e || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
        var n = f(this._dialog);
        K.off(this._element, "transitionend"), K.one(this._element, "transitionend", function () {
          t._element.classList.remove("modal-static"), e || (K.one(t._element, "transitionend", function () {
            t._element.style.overflowY = "";
          }), m(t._element, n));
        }), m(this._element, n), this._element.focus();
      }
    }, n._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      (!this._isBodyOverflowing && t && !E || this._isBodyOverflowing && !t && E) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !t && !E || !this._isBodyOverflowing && t && E) && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, n._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, n._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, n._setScrollbar = function () {
      var t = this;
      this._isBodyOverflowing && (this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", function (e) {
        return e + t._scrollbarWidth;
      }), this._setElementAttributes(".sticky-top", "marginRight", function (e) {
        return e - t._scrollbarWidth;
      }), this._setElementAttributes("body", "paddingRight", function (e) {
        return e + t._scrollbarWidth;
      })), document.body.classList.add("modal-open");
    }, n._setElementAttributes = function (t, e, n) {
      q(t).forEach(function (t) {
        var i = t.style[e],
            o = window.getComputedStyle(t)[e];
        X.setDataAttribute(t, e, i), t.style[e] = n(Number.parseFloat(o)) + "px";
      });
    }, n._resetScrollbar = function () {
      this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight"), this._resetElementAttributes("body", "paddingRight");
    }, n._resetElementAttributes = function (t, e) {
      q(t).forEach(function (t) {
        var n = X.getDataAttribute(t, e);
        void 0 === n && t === document.body ? t.style[e] = "" : (X.removeDataAttribute(t, e), t.style[e] = n);
      });
    }, n._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = "modal-scrollbar-measure", document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, e.jQueryInterface = function (t, n) {
      return this.each(function () {
        var i = L(this, "bs.modal"),
            o = s({}, ft, X.getDataAttributes(this), "object" == _typeof(t) && t ? t : {});

        if (i || (i = new e(this, o)), "string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
          i[t](n);
        }
      });
    }, o(e, null, [{
      key: "Default",
      get: function get() {
        return ft;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.modal";
      }
    }]), e;
  }(W);

  K.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var e = this,
        n = d(this);
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), K.one(n, "show.bs.modal", function (t) {
      t.defaultPrevented || K.one(n, "hidden.bs.modal", function () {
        v(e) && e.focus();
      });
    });
    var i = L(n, "bs.modal");

    if (!i) {
      var o = s({}, X.getDataAttributes(n), X.getDataAttributes(this));
      i = new gt(n, o);
    }

    i.toggle(this);
  }), T("modal", gt);
  var mt = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      _t = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      vt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function bt(t, e, n) {
    var i;
    if (!t.length) return t;
    if (n && "function" == typeof n) return n(t);

    for (var o = new window.DOMParser().parseFromString(t, "text/html"), s = Object.keys(e), r = (i = []).concat.apply(i, o.body.querySelectorAll("*")), a = function a(t, n) {
      var i,
          o = r[t],
          a = o.nodeName.toLowerCase();
      if (!s.includes(a)) return o.parentNode.removeChild(o), "continue";
      var l = (i = []).concat.apply(i, o.attributes),
          c = [].concat(e["*"] || [], e[a] || []);
      l.forEach(function (t) {
        (function (t, e) {
          var n = t.nodeName.toLowerCase();
          if (e.includes(n)) return !mt.has(n) || Boolean(_t.test(t.nodeValue) || vt.test(t.nodeValue));

          for (var i = e.filter(function (t) {
            return t instanceof RegExp;
          }), o = 0, s = i.length; o < s; o++) {
            if (i[o].test(n)) return !0;
          }

          return !1;
        })(t, c) || o.removeAttribute(t.nodeName);
      });
    }, l = 0, c = r.length; l < c; l++) {
      a(l);
    }

    return o.body.innerHTML;
  }

  var yt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      wt = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Et = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacements: "array",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object",
    popperConfig: "(null|object|function)"
  },
      Tt = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: E ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: E ? "right" : "left"
  },
      At = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    boundary: "clippingParents",
    customClass: "",
    sanitize: !0,
    sanitizeFn: null,
    allowList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    popperConfig: null
  },
      kt = {
    HIDE: "hide.bs.tooltip",
    HIDDEN: "hidden.bs.tooltip",
    SHOW: "show.bs.tooltip",
    SHOWN: "shown.bs.tooltip",
    INSERTED: "inserted.bs.tooltip",
    CLICK: "click.bs.tooltip",
    FOCUSIN: "focusin.bs.tooltip",
    FOCUSOUT: "focusout.bs.tooltip",
    MOUSEENTER: "mouseenter.bs.tooltip",
    MOUSELEAVE: "mouseleave.bs.tooltip"
  },
      Lt = function (e) {
    function i(t, i) {
      var o;
      if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      return (o = e.call(this, t) || this)._isEnabled = !0, o._timeout = 0, o._hoverState = "", o._activeTrigger = {}, o._popper = null, o.config = o._getConfig(i), o.tip = null, o._setListeners(), o;
    }

    r(i, e);
    var a = i.prototype;
    return a.enable = function () {
      this._isEnabled = !0;
    }, a.disable = function () {
      this._isEnabled = !1;
    }, a.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, a.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this._initializeOnDelegatedTarget(t);

        e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
      } else {
        if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, a.dispose = function () {
      clearTimeout(this._timeout), K.off(this._element, this.constructor.EVENT_KEY), K.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, e.prototype.dispose.call(this);
    }, a.show = function () {
      var e = this;
      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");

      if (this.isWithContent() && this._isEnabled) {
        var n = K.trigger(this._element, this.constructor.Event.SHOW),
            i = function t(e) {
          if (!document.documentElement.attachShadow) return null;

          if ("function" == typeof e.getRootNode) {
            var n = e.getRootNode();
            return n instanceof ShadowRoot ? n : null;
          }

          return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null;
        }(this._element),
            o = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);

        if (!n.defaultPrevented && o) {
          var s = this.getTipElement(),
              r = c(this.constructor.NAME);
          s.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && s.classList.add("fade");

          var a = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this._element) : this.config.placement,
              l = this._getAttachment(a);

          this._addAttachmentClass(l);

          var u = this._getContainer();

          k(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || u.appendChild(s), K.trigger(this._element, this.constructor.Event.INSERTED), this._popper = t.createPopper(this._element, s, this._getPopperConfig(l)), s.classList.add("show");
          var h,
              d,
              p = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
          p && (h = s.classList).add.apply(h, p.split(" ")), "ontouchstart" in document.documentElement && (d = []).concat.apply(d, document.body.children).forEach(function (t) {
            K.on(t, "mouseover", function () {});
          });

          var g = function g() {
            var t = e._hoverState;
            e._hoverState = null, K.trigger(e._element, e.constructor.Event.SHOWN), "out" === t && e._leave(null, e);
          };

          if (this.tip.classList.contains("fade")) {
            var _ = f(this.tip);

            K.one(this.tip, "transitionend", g), m(this.tip, _);
          } else g();
        }
      }
    }, a.hide = function () {
      var t = this;

      if (this._popper) {
        var e = this.getTipElement(),
            n = function n() {
          "show" !== t._hoverState && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t._element.removeAttribute("aria-describedby"), K.trigger(t._element, t.constructor.Event.HIDDEN), t._popper && (t._popper.destroy(), t._popper = null);
        };

        if (!K.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
          var i;

          if (e.classList.remove("show"), "ontouchstart" in document.documentElement && (i = []).concat.apply(i, document.body.children).forEach(function (t) {
            return K.off(t, "mouseover", b);
          }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
            var o = f(e);
            K.one(e, "transitionend", n), m(e, o);
          } else n();

          this._hoverState = "";
        }
      }
    }, a.update = function () {
      null !== this._popper && this._popper.update();
    }, a.isWithContent = function () {
      return Boolean(this.getTitle());
    }, a.getTipElement = function () {
      if (this.tip) return this.tip;
      var t = document.createElement("div");
      return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip;
    }, a.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(Q(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show");
    }, a.setElementContent = function (t, e) {
      if (null !== t) return "object" == _typeof(e) && g(e) ? (e.jquery && (e = e[0]), void (this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = bt(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
    }, a.getTitle = function () {
      var t = this._element.getAttribute("data-bs-original-title");

      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t;
    }, a.updateAttachment = function (t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }, a._initializeOnDelegatedTarget = function (t, e) {
      var n = this.constructor.DATA_KEY;
      return (e = e || L(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), k(t.delegateTarget, n, e)), e;
    }, a._getOffset = function () {
      var t = this,
          e = this.config.offset;
      return "string" == typeof e ? e.split(",").map(function (t) {
        return Number.parseInt(t, 10);
      }) : "function" == typeof e ? function (n) {
        return e(n, t._element);
      } : e;
    }, a._getPopperConfig = function (t) {
      var e = this,
          n = {
        placement: t,
        modifiers: [{
          name: "flip",
          options: {
            altBoundary: !0,
            fallbackPlacements: this.config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this.config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: "." + this.constructor.NAME + "-arrow"
          }
        }, {
          name: "onChange",
          enabled: !0,
          phase: "afterWrite",
          fn: function fn(t) {
            return e._handlePopperPlacementChange(t);
          }
        }],
        onFirstUpdate: function onFirstUpdate(t) {
          t.options.placement !== t.placement && e._handlePopperPlacementChange(t);
        }
      };
      return s({}, n, "function" == typeof this.config.popperConfig ? this.config.popperConfig(n) : this.config.popperConfig);
    }, a._addAttachmentClass = function (t) {
      this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t));
    }, a._getContainer = function () {
      return !1 === this.config.container ? document.body : g(this.config.container) ? this.config.container : Q(this.config.container);
    }, a._getAttachment = function (t) {
      return Tt[t.toUpperCase()];
    }, a._setListeners = function () {
      var t = this;
      this.config.trigger.split(" ").forEach(function (e) {
        if ("click" === e) K.on(t._element, t.constructor.Event.CLICK, t.config.selector, function (e) {
          return t.toggle(e);
        });else if ("manual" !== e) {
          var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
              i = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
          K.on(t._element, n, t.config.selector, function (e) {
            return t._enter(e);
          }), K.on(t._element, i, t.config.selector, function (e) {
            return t._leave(e);
          });
        }
      }), this._hideModalHandler = function () {
        t._element && t.hide();
      }, K.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = s({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, a._fixTitle = function () {
      var t = this._element.getAttribute("title"),
          e = _typeof(this._element.getAttribute("data-bs-original-title"));

      (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
    }, a._enter = function (t, e) {
      e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        "show" === e._hoverState && e.show();
      }, e.config.delay.show) : e.show());
    }, a._leave = function (t, e) {
      e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        "out" === e._hoverState && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, a._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, a._getConfig = function (t) {
      var e = X.getDataAttributes(this._element);
      return Object.keys(e).forEach(function (t) {
        wt.has(t) && delete e[t];
      }), t && "object" == _typeof(t.container) && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = s({}, this.constructor.Default, e, "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = bt(t.template, t.allowList, t.sanitizeFn)), t;
    }, a._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, a._cleanTipClass = function () {
      var t = this.getTipElement(),
          e = t.getAttribute("class").match(yt);
      null !== e && e.length > 0 && e.map(function (t) {
        return t.trim();
      }).forEach(function (e) {
        return t.classList.remove(e);
      });
    }, a._handlePopperPlacementChange = function (t) {
      var e = t.state;
      e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
    }, i.jQueryInterface = function (t) {
      return this.each(function () {
        var e = L(this, "bs.tooltip"),
            n = "object" == _typeof(t) && t;

        if ((e || !/dispose|hide/.test(t)) && (e || (e = new i(this, n)), "string" == typeof t)) {
          if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]();
        }
      });
    }, o(i, null, [{
      key: "Default",
      get: function get() {
        return At;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.tooltip";
      }
    }, {
      key: "Event",
      get: function get() {
        return kt;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".bs.tooltip";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Et;
      }
    }]), i;
  }(W);

  T("tooltip", Lt);

  var Ct = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      Dt = s({}, Lt.Default, {
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      St = s({}, Lt.DefaultType, {
    content: "(string|element|function)"
  }),
      Nt = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  },
      Ot = function (t) {
    function e() {
      return t.apply(this, arguments) || this;
    }

    r(e, t);
    var n = e.prototype;
    return n.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, n.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(Q(".popover-header", t), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this._element)), this.setElementContent(Q(".popover-body", t), e), t.classList.remove("fade", "show");
    }, n._addAttachmentClass = function (t) {
      this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t));
    }, n._getContent = function () {
      return this._element.getAttribute("data-bs-content") || this.config.content;
    }, n._cleanTipClass = function () {
      var t = this.getTipElement(),
          e = t.getAttribute("class").match(Ct);
      null !== e && e.length > 0 && e.map(function (t) {
        return t.trim();
      }).forEach(function (e) {
        return t.classList.remove(e);
      });
    }, e.jQueryInterface = function (t) {
      return this.each(function () {
        var n = L(this, "bs.popover"),
            i = "object" == _typeof(t) ? t : null;

        if ((n || !/dispose|hide/.test(t)) && (n || (n = new e(this, i), k(this, "bs.popover", n)), "string" == typeof t)) {
          if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
          n[t]();
        }
      });
    }, o(e, null, [{
      key: "Default",
      get: function get() {
        return Dt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return Nt;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".bs.popover";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return St;
      }
    }]), e;
  }(Lt);

  T("popover", Ot);

  var It = {
    offset: 10,
    method: "auto",
    target: ""
  },
      jt = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      Pt = function (t) {
    function e(e, n) {
      var i;
      return (i = t.call(this, e) || this)._scrollElement = "BODY" === e.tagName ? window : e, i._config = i._getConfig(n), i._selector = i._config.target + " .nav-link, " + i._config.target + " .list-group-item, " + i._config.target + " .dropdown-item", i._offsets = [], i._targets = [], i._activeTarget = null, i._scrollHeight = 0, K.on(i._scrollElement, "scroll.bs.scrollspy", function () {
        return i._process();
      }), i.refresh(), i._process(), i;
    }

    r(e, t);
    var n = e.prototype;
    return n.refresh = function () {
      var t = this,
          e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
          n = "auto" === this._config.method ? e : this._config.method,
          i = "position" === n ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), q(this._selector).map(function (t) {
        var e = h(t),
            o = e ? Q(e) : null;

        if (o) {
          var s = o.getBoundingClientRect();
          if (s.width || s.height) return [X[n](o).top + i, e];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (e) {
        t._offsets.push(e[0]), t._targets.push(e[1]);
      });
    }, n.dispose = function () {
      t.prototype.dispose.call(this), K.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, n._getConfig = function (t) {
      if ("string" != typeof (t = s({}, It, "object" == _typeof(t) && t ? t : {})).target && g(t.target)) {
        var e = t.target.id;
        e || (e = c("scrollspy"), t.target.id = e), t.target = "#" + e;
      }

      return _("scrollspy", t, jt), t;
    }, n._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, n._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, n._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, n._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), t >= n) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

        for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, n._activate = function (t) {
      this._activeTarget = t, this._clear();

      var e = this._selector.split(",").map(function (e) {
        return e + '[data-bs-target="' + t + '"],' + e + '[href="' + t + '"]';
      }),
          n = Q(e.join(","));

      n.classList.contains("dropdown-item") ? (Q(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), function (t, e) {
        for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) {
          i.matches(e) && n.push(i), i = i.parentNode;
        }

        return n;
      }(n, ".nav, .list-group").forEach(function (t) {
        $(t, ".nav-link, .list-group-item").forEach(function (t) {
          return t.classList.add("active");
        }), $(t, ".nav-item").forEach(function (t) {
          V(t, ".nav-link").forEach(function (t) {
            return t.classList.add("active");
          });
        });
      })), K.trigger(this._scrollElement, "activate.bs.scrollspy", {
        relatedTarget: t
      });
    }, n._clear = function () {
      q(this._selector).filter(function (t) {
        return t.classList.contains("active");
      }).forEach(function (t) {
        return t.classList.remove("active");
      });
    }, e.jQueryInterface = function (t) {
      return this.each(function () {
        var n = L(this, "bs.scrollspy");

        if (n || (n = new e(this, "object" == _typeof(t) && t)), "string" == typeof t) {
          if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
          n[t]();
        }
      });
    }, o(e, null, [{
      key: "Default",
      get: function get() {
        return It;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.scrollspy";
      }
    }]), e;
  }(W);

  K.on(window, "load.bs.scrollspy.data-api", function () {
    q('[data-bs-spy="scroll"]').forEach(function (t) {
      return new Pt(t, X.getDataAttributes(t));
    });
  }), T("scrollspy", Pt);

  var xt = function (t) {
    function e() {
      return t.apply(this, arguments) || this;
    }

    r(e, t);
    var n = e.prototype;
    return n.show = function () {
      var t = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || this._element.classList.contains("disabled"))) {
        var e,
            n = d(this._element),
            i = this._element.closest(".nav, .list-group");

        if (i) {
          var o = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
          e = (e = q(o, i))[e.length - 1];
        }

        var s = e ? K.trigger(e, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;

        if (!(K.trigger(this._element, "show.bs.tab", {
          relatedTarget: e
        }).defaultPrevented || null !== s && s.defaultPrevented)) {
          this._activate(this._element, i);

          var r = function r() {
            K.trigger(e, "hidden.bs.tab", {
              relatedTarget: t._element
            }), K.trigger(t._element, "shown.bs.tab", {
              relatedTarget: e
            });
          };

          n ? this._activate(n, n.parentNode, r) : r();
        }
      }
    }, n._activate = function (t, e, n) {
      var i = this,
          o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? V(e, ".active") : q(":scope > li > .active", e))[0],
          s = n && o && o.classList.contains("fade"),
          r = function r() {
        return i._transitionComplete(t, o, n);
      };

      if (o && s) {
        var a = f(o);
        o.classList.remove("show"), K.one(o, "transitionend", r), m(o, a);
      } else r();
    }, n._transitionComplete = function (t, e, n) {
      if (e) {
        e.classList.remove("active");
        var i = Q(":scope > .dropdown-menu .active", e.parentNode);
        i && i.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), y(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && t.parentNode.classList.contains("dropdown-menu") && (t.closest(".dropdown") && q(".dropdown-toggle").forEach(function (t) {
        return t.classList.add("active");
      }), t.setAttribute("aria-expanded", !0)), n && n();
    }, e.jQueryInterface = function (t) {
      return this.each(function () {
        var n = L(this, "bs.tab") || new e(this);

        if ("string" == typeof t) {
          if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
          n[t]();
        }
      });
    }, o(e, null, [{
      key: "DATA_KEY",
      get: function get() {
        return "bs.tab";
      }
    }]), e;
  }(W);

  K.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    t.preventDefault(), (L(this, "bs.tab") || new xt(this)).show();
  }), T("tab", xt);

  var Ht = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      Bt = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  },
      Mt = function (t) {
    function e(e, n) {
      var i;
      return (i = t.call(this, e) || this)._config = i._getConfig(n), i._timeout = null, i._setListeners(), i;
    }

    r(e, t);
    var n = e.prototype;
    return n.show = function () {
      var t = this;

      if (!K.trigger(this._element, "show.bs.toast").defaultPrevented) {
        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");

        var e = function e() {
          t._element.classList.remove("showing"), t._element.classList.add("show"), K.trigger(t._element, "shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout(function () {
            t.hide();
          }, t._config.delay));
        };

        if (this._element.classList.remove("hide"), y(this._element), this._element.classList.add("showing"), this._config.animation) {
          var n = f(this._element);
          K.one(this._element, "transitionend", e), m(this._element, n);
        } else e();
      }
    }, n.hide = function () {
      var t = this;

      if (this._element.classList.contains("show") && !K.trigger(this._element, "hide.bs.toast").defaultPrevented) {
        var e = function e() {
          t._element.classList.add("hide"), K.trigger(t._element, "hidden.bs.toast");
        };

        if (this._element.classList.remove("show"), this._config.animation) {
          var n = f(this._element);
          K.one(this._element, "transitionend", e), m(this._element, n);
        } else e();
      }
    }, n.dispose = function () {
      this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), K.off(this._element, "click.dismiss.bs.toast"), t.prototype.dispose.call(this), this._config = null;
    }, n._getConfig = function (t) {
      return t = s({}, Bt, X.getDataAttributes(this._element), "object" == _typeof(t) && t ? t : {}), _("toast", t, this.constructor.DefaultType), t;
    }, n._setListeners = function () {
      var t = this;
      K.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', function () {
        return t.hide();
      });
    }, n._clearTimeout = function () {
      clearTimeout(this._timeout), this._timeout = null;
    }, e.jQueryInterface = function (t) {
      return this.each(function () {
        var n = L(this, "bs.toast");

        if (n || (n = new e(this, "object" == _typeof(t) && t)), "string" == typeof t) {
          if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
          n[t](this);
        }
      });
    }, o(e, null, [{
      key: "DefaultType",
      get: function get() {
        return Ht;
      }
    }, {
      key: "Default",
      get: function get() {
        return Bt;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.toast";
      }
    }]), e;
  }(W);

  return T("toast", Mt), {
    Alert: U,
    Button: F,
    Carousel: J,
    Collapse: nt,
    Dropdown: dt,
    Modal: gt,
    Popover: Ot,
    ScrollSpy: Pt,
    Tab: xt,
    Toast: Mt,
    Tooltip: Lt
  };
});
!function (i) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function (i) {
  "use strict";

  var e = window.Slick || {};
  (e = function () {
    var e = 0;
    return function (t, o) {
      var s,
          n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
        s = this;
    s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function step(i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function complete() {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
        t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();
    null !== t && "object" == _typeof(t) && t.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
        t = {};
    !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
        t,
        o = this;

    if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) {
        t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      }

      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;

    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");

        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");

          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }

          d.appendChild(a);
        }

        o.appendChild(d);
      }

      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();

    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;

      for (o in r.breakpoints) {
        r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      }

      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);

    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;

      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;

      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;

      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e, t;
    if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;
        break;
      }

      t = e[o];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
        e = this;
    e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
        t = {};
    t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    !1 === t.cssTransitions ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    !1 === e.cssTransitions ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
        e = 0,
        t = 0,
        o = 0;
    if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) {
        ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      }
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) {
      ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
        t,
        o,
        s,
        n = this,
        r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
        e = this,
        t = 0,
        o = 0,
        s = [];

    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) {
      s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    }

    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
        t,
        o = this;
    return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
      return i >= 0 && i < e.slideCount;
    });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);
      i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), -1 !== s && i(this).attr({
        "aria-describedby": "slick-slide-control" + e.instanceUid + s
      });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());

    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) {
      e.$slides.eq(s).attr("tabindex", 0);
    }

    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "next" : "previous"
      }
    }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
        r.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }

    var t,
        o,
        s,
        n = this;
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) {
      r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    }
    e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
        o,
        s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;

    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";

      for (e in n) {
        if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
          for (t = n[e].breakpoint; o >= 0;) {
            s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
          }

          s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
        }
      }

      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
    o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
        t,
        o = this,
        s = {};
    !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
        t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) {
      if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
        for (e = r.options.responsive.length - 1; e >= 0;) {
          r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
        }

        r.options.responsive.push(s[t]);
      }
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
        e = document.body.style;
    i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
        t,
        o,
        s,
        n = this;

    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));

    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
        t,
        o,
        s = this;

    if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) {
        t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      }

      for (e = 0; e < o + s.slideCount; e += 1) {
        t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      }

      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
        o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
    if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      !0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
        e,
        t,
        o,
        s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
        t,
        o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;

    if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;

        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }

      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;

      case "move":
        e.swipeMove(i);
        break;

      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
        t = this;
    if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
    void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;
    Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;

    for (i = 0; i < r; i++) {
      if ("object" == _typeof(s) || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    }

    return o;
  };
});
/******/

(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // identity function for calling harmony imports with the correct context

  /******/

  __webpack_require__.i = function (value) {
    return value;
  };
  /******/

  /******/
  // define getter function for harmony exports

  /******/


  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        /******/
        configurable: false,

        /******/
        enumerable: true,

        /******/
        get: getter
        /******/

      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 5);
  /******/
})(
/************************************************************************/

/******/
[
/* 0 */

/***/
function (module, exports, __webpack_require__) {
  "use strict"; // Test via a getter in the options object to see if the passive property is accessed
  // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection

  var supportsPassive = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test', null, opts);
  } catch (e) {// pass
  }

  module.exports.event = function event(elem, _eventNames, handler, mode) {
    var eventNames = _eventNames.split(' ');

    var prefix = mode == 'on' ? 'add' : 'remove';
    eventNames.forEach(function (eventName) {
      var options = false;

      if (['scroll', 'touchstart', 'touchmove'].indexOf(eventName) != -1 && supportsPassive) {
        options = {
          passive: true
        };
      }

      elem[prefix + 'EventListener'](eventName, handler, options);
    });
  };

  function each(obj, handler) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        handler(key, obj[key]);
      }
    }
  }

  module.exports.css = function css(node, key, value) {
    var styles;

    if (value === undefined) {
      // Getter mode
      if (typeof key == 'string') {
        return node.style[key];
      }

      styles = key;
    } else {
      styles = {};
      styles[key] = value;
    }

    each(styles, function (k, val) {
      node.style[k] = val;
    });
  };

  module.exports.add = function add(node, cls) {
    if (!cls) {
      return;
    }

    node.classList.add(cls);
  };

  module.exports.rm = function add(node, cls) {
    if (!cls) {
      return;
    }

    node.classList.remove(cls);
  };

  module.exports.has = function has(node, cls) {
    if (!cls) {
      return false;
    }

    return node.classList.contains(cls);
  };

  module.exports.clone = function clone(_input) {
    var output = {};
    var input = _input || {};
    each(input, function (key, value) {
      output[key] = value;
    });
    return output;
  };

  module.exports.qs = function qs(selector, _ctx) {
    if (selector instanceof HTMLElement) {
      return selector;
    }

    var ctx = _ctx || document;
    return ctx.querySelector(selector);
  };

  module.exports.each = each;
  /***/
},
/* 1 */

/***/
function (module, exports) {
  // shim for using process in browser
  var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
  // don't break things.  But we need to wrap it in a try catch in case it is
  // wrapped in strict mode code which doesn't define any globals.  It's inside a
  // function because try/catches deoptimize in certain engines.

  var cachedSetTimeout;
  var cachedClearTimeout;

  function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
  }

  function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
  }

  (function () {
    try {
      if (typeof setTimeout === 'function') {
        cachedSetTimeout = setTimeout;
      } else {
        cachedSetTimeout = defaultSetTimout;
      }
    } catch (e) {
      cachedSetTimeout = defaultSetTimout;
    }

    try {
      if (typeof clearTimeout === 'function') {
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
    } // if setTimeout wasn't available but was latter defined


    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
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
    } // if clearTimeout wasn't available but was latter defined


    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
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

  process.nextTick = function (fun) {
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
  }; // v8 likes predictible objects


  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }

  Item.prototype.run = function () {
    this.fun.apply(null, this.array);
  };

  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = ''; // empty string to avoid regexp issues

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

  process.listeners = function (name) {
    return [];
  };

  process.binding = function (name) {
    throw new Error('process.binding is not supported');
  };

  process.cwd = function () {
    return '/';
  };

  process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
  };

  process.umask = function () {
    return 0;
  };
  /***/

},
/* 2 */

/***/
function (module, exports) {
  module.exports = function log(level, msg, more) {
    var func = console[level] || console.log;
    var args = ['Baron: ' + msg, more];
    Function.prototype.apply.call(func, console, args);
  };
  /***/

},
/* 3 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";
  /* WEBPACK VAR INJECTION */

  (function (process) {
    var g = function () {
      return this || (1, eval)('this');
    }();

    var scopedWindow = g && g.window || g;

    var event = __webpack_require__(0).event;

    var css = __webpack_require__(0).css;

    var add = __webpack_require__(0).add;

    var has = __webpack_require__(0).has;

    var rm = __webpack_require__(0).rm;

    var clone = __webpack_require__(0).clone;

    var qs = __webpack_require__(0).qs;

    var _baron = baron; // Stored baron value for noConflict usage
    // var Item = {}

    var pos = ['left', 'top', 'right', 'bottom', 'width', 'height']; // Global store for all baron instances (to be able to dispose them on html-nodes)

    var instances = [];
    var origin = {
      v: {
        // Vertical
        x: 'Y',
        pos: pos[1],
        oppos: pos[3],
        crossPos: pos[0],
        crossOpPos: pos[2],
        size: pos[5],
        crossSize: pos[4],
        crossMinSize: 'min-' + pos[4],
        crossMaxSize: 'max-' + pos[4],
        client: 'clientHeight',
        crossClient: 'clientWidth',
        scrollEdge: 'scrollLeft',
        offset: 'offsetHeight',
        crossOffset: 'offsetWidth',
        offsetPos: 'offsetTop',
        scroll: 'scrollTop',
        scrollSize: 'scrollHeight'
      },
      h: {
        // Horizontal
        x: 'X',
        pos: pos[0],
        oppos: pos[2],
        crossPos: pos[1],
        crossOpPos: pos[3],
        size: pos[4],
        crossSize: pos[5],
        crossMinSize: 'min-' + pos[5],
        crossMaxSize: 'max-' + pos[5],
        client: 'clientWidth',
        crossClient: 'clientHeight',
        scrollEdge: 'scrollTop',
        offset: 'offsetWidth',
        crossOffset: 'offsetHeight',
        offsetPos: 'offsetLeft',
        scroll: 'scrollLeft',
        scrollSize: 'scrollWidth'
      }
    }; // Some ugly vars

    var opera12maxScrollbarSize = 17; // I hate you https://github.com/Diokuz/baron/issues/110

    var macmsxffScrollbarSize = 15;
    var macosxffRe = /[\s\S]*Macintosh[\s\S]*\) Gecko[\s\S]*/;
    var isMacFF = macosxffRe.test(scopedWindow.navigator && scopedWindow.navigator.userAgent);
    var log, liveBarons, shownErrors;

    if (process.env.NODE_ENV !== 'production') {
      log = __webpack_require__(2);
      liveBarons = 0;
      shownErrors = {
        liveTooMany: false,
        allTooMany: false
      };
    } // window.baron and jQuery.fn.baron points to this function


    function baron(user) {
      var withParams = !!user;
      var tryNode = user && user[0] || user;
      var isNode = typeof user == 'string' || tryNode instanceof HTMLElement;
      var params = isNode ? {
        root: user
      } : clone(user);
      var jQueryMode;
      var rootNode;
      var defaultParams = {
        direction: 'v',
        barOnCls: '_scrollbar',
        resizeDebounce: 0,
        event: event,
        cssGuru: false,
        impact: 'scroller',
        position: 'static'
      };
      params = params || {}; // Extending default params by user-defined params

      for (var key in defaultParams) {
        if (params[key] == null) {
          // eslint-disable-line
          params[key] = defaultParams[key];
        }
      }

      if (process.env.NODE_ENV !== 'production') {
        if (params.position == 'absolute' && params.impact == 'clipper') {
          log('error', ['Simultaneous use of `absolute` position and `clipper` impact values detected.', 'Those values cannot be used together.', 'See more https://github.com/Diokuz/baron/issues/138'].join(' '), params);
        }
      } // `this` could be a jQuery instance


      jQueryMode = this && this instanceof scopedWindow.jQuery;

      if (params._chain) {
        rootNode = params.root;
      } else if (jQueryMode) {
        params.root = rootNode = this[0];
      } else {
        rootNode = qs(params.root || params.scroller);
      }

      if (process.env.NODE_ENV !== 'production') {
        if (!rootNode) {
          log('error', ['Baron initialization failed: root node not found.'].join(', '), params);
          return; // or return baron-shell?
        }
      }

      var attr = manageAttr(rootNode, params.direction);
      var id = +attr; // Could be NaN

      params.index = id; // baron() can return existing instances,
      // @TODO update params on-the-fly
      // https://github.com/Diokuz/baron/issues/124

      if (id == id && attr !== null && instances[id]) {
        if (process.env.NODE_ENV !== 'production') {
          if (withParams) {
            log('error', ['repeated initialization for html-node detected', 'https://github.com/Diokuz/baron/blob/master/docs/logs/repeated.md'].join(', '), params.root);
          }
        }

        return instances[id];
      } // root and scroller can be different nodes


      if (params.root && params.scroller) {
        params.scroller = qs(params.scroller, rootNode);

        if (process.env.NODE_ENV !== 'production') {
          if (!params.scroller) {
            log('error', 'Scroller not found!', rootNode, params.scroller);
          }
        }
      } else {
        params.scroller = rootNode;
      }

      params.root = rootNode;
      var instance = init(params);

      if (instance.autoUpdate) {
        instance.autoUpdate();
      }

      return instance;
    }

    function arrayEach(_obj, iterator) {
      var i = 0;
      var obj = _obj;
      if (obj.length === undefined || obj === scopedWindow) obj = [obj];

      while (obj[i]) {
        iterator.call(this, obj[i], i);
        i++;
      }
    } // shortcut for getTime


    function getTime() {
      return new Date().getTime();
    }

    if (process.env.NODE_ENV !== 'production') {
      baron._instances = instances;
    }

    function manageEvents(item, eventManager, mode) {
      // Creating new functions for one baron item only one time
      item._eventHandlers = item._eventHandlers || [{
        // onScroll:
        element: item.scroller,
        handler: function handler(e) {
          item.scroll(e);
        },
        type: 'scroll'
      }, {
        // css transitions & animations
        element: item.root,
        handler: function handler() {
          item.update();
        },
        type: 'transitionend animationend'
      }, {
        // onKeyup (textarea):
        element: item.scroller,
        handler: function handler() {
          item.update();
        },
        type: 'keyup'
      }, {
        // onMouseDown:
        element: item.bar,
        handler: function handler(e) {
          e.preventDefault(); // Text selection disabling in Opera

          item.selection(); // Disable text selection in ie8

          item.drag.now = 1; // Save private byte

          if (item.draggingCls) {
            add(item.root, item.draggingCls);
          }
        },
        type: 'touchstart mousedown'
      }, {
        // onMouseUp:
        element: document,
        handler: function handler() {
          item.selection(1); // Enable text selection

          item.drag.now = 0;

          if (item.draggingCls) {
            rm(item.root, item.draggingCls);
          }
        },
        type: 'mouseup blur touchend'
      }, {
        // onCoordinateReset:
        element: document,
        handler: function handler(e) {
          if (e.button != 2) {
            // Not RM
            item._pos0(e);
          }
        },
        type: 'touchstart mousedown'
      }, {
        // onMouseMove:
        element: document,
        handler: function handler(e) {
          if (item.drag.now) {
            item.drag(e);
          }
        },
        type: 'mousemove touchmove'
      }, {
        // @TODO make one global listener
        // onResize:
        element: scopedWindow,
        handler: function handler() {
          item.update();
        },
        type: 'resize'
      }, {
        // @todo remove
        // sizeChange:
        element: item.root,
        handler: function handler() {
          item.update();
        },
        type: 'sizeChange'
      }, {
        // Clipper onScroll bug https://github.com/Diokuz/baron/issues/116
        element: item.clipper,
        handler: function handler() {
          item.clipperOnScroll();
        },
        type: 'scroll'
      }];
      arrayEach(item._eventHandlers, function (evt) {
        if (evt.element) {
          // workaround for element-elements in `fix` plugin
          // @todo dispose `fix` in proper way and remove workaround
          if (evt.element.length && evt.element !== scopedWindow) {
            for (var i = 0; i < evt.element.length; i++) {
              eventManager(evt.element[i], evt.type, evt.handler, mode);
            }
          } else {
            eventManager(evt.element, evt.type, evt.handler, mode);
          }
        }
      }); // if (item.scroller) {
      //     event(item.scroller, 'scroll', item._eventHandlers.onScroll, mode)
      // }
      // if (item.bar) {
      //     event(item.bar, 'touchstart mousedown', item._eventHandlers.onMouseDown, mode)
      // }
      // event(document, 'mouseup blur touchend', item._eventHandlers.onMouseUp, mode)
      // event(document, 'touchstart mousedown', item._eventHandlers.onCoordinateReset, mode)
      // event(document, 'mousemove touchmove', item._eventHandlers.onMouseMove, mode)
      // event(window, 'resize', item._eventHandlers.onResize, mode)
      // if (item.root) {
      //     event(item.root, 'sizeChange', item._eventHandlers.onResize, mode)
      //     // Custon event for alternate baron update mechanism
      // }
    } // set, remove or read baron-specific id-attribute
    // @returns {String|null} - id node value, or null, if there is no attr


    function manageAttr(node, direction, mode, id) {
      var attrName = 'data-baron-' + direction + '-id';

      if (mode == 'on') {
        node.setAttribute(attrName, id);
      } else if (mode == 'off') {
        node.removeAttribute(attrName);
      }

      return node.getAttribute(attrName);
    }

    function init(params) {
      var out = new baron.prototype.constructor(params);
      manageEvents(out, params.event, 'on');
      manageAttr(out.root, params.direction, 'on', instances.length);
      instances.push(out);

      if (process.env.NODE_ENV !== 'production') {
        liveBarons++;

        if (liveBarons > 100 && !shownErrors.liveTooMany) {
          log('warn', ['You have too many live baron instances on page (' + liveBarons + ')!', 'Are you forget to dispose some of them?', 'All baron instances can be found in baron._instances:'].join(' '), instances);
          shownErrors.liveTooMany = true;
        }

        if (instances.length > 1000 && !shownErrors.allTooMany) {
          log('warn', ['You have too many inited baron instances on page (' + instances.length + ')!', 'Some of them are disposed, and thats good news.', 'but baron.init was call too many times, and thats is bad news.', 'All baron instances can be found in baron._instances:'].join(' '), instances);
          shownErrors.allTooMany = true;
        }
      }

      out.update();
      return out;
    }

    function fire(eventName) {
      if (this.events && this.events[eventName]) {
        for (var i = 0; i < this.events[eventName].length; i++) {
          var args = Array.prototype.slice.call(arguments, 1);
          this.events[eventName][i].apply(this, args);
        }
      }
    }

    baron.prototype = {
      // underscore.js realization
      // used in autoUpdate plugin
      _debounce: function _debounce(func, wait) {
        var self = this,
            timeout,
            // args, // right now there is no need for arguments
        // context, // and for context
        timestamp; // result // and for result

        var later = function later() {
          if (self._disposed) {
            clearTimeout(timeout);
            timeout = self = null;
            return;
          }

          var last = getTime() - timestamp;

          if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
          } else {
            timeout = null; // result = func.apply(context, args)

            func(); // context = args = null
          }
        };

        return function () {
          // context = this
          // args = arguments
          timestamp = getTime();

          if (!timeout) {
            timeout = setTimeout(later, wait);
          } // return result

        };
      },
      constructor: function constructor(params) {
        var barPos, scrollerPos0, track, resizePauseTimer, scrollingTimer, resizeLastFire, oldBarSize;
        resizeLastFire = getTime();
        this.params = params;
        this.event = params.event;
        this.events = {}; // DOM elements

        this.root = params.root; // Always html node, not just selector

        this.scroller = qs(params.scroller);

        if (process.env.NODE_ENV !== 'production') {
          if (this.scroller.tagName == 'body') {
            log('error', ['Please, do not use BODY as a scroller.', 'https://github.com/Diokuz/baron/blob/master/docs/logs/do-not-use-body.md'].join(', '), params);
          }
        }

        this.bar = qs(params.bar, this.root);
        track = this.track = qs(params.track, this.root);

        if (!this.track && this.bar) {
          track = this.bar.parentNode;
        }

        this.clipper = this.scroller.parentNode; // Parameters

        this.direction = params.direction;
        this.rtl = params.rtl;
        this.origin = origin[this.direction];
        this.barOnCls = params.barOnCls;
        this.scrollingCls = params.scrollingCls;
        this.draggingCls = params.draggingCls;
        this.impact = params.impact;
        this.position = params.position;
        this.rtl = params.rtl;
        this.barTopLimit = 0;
        this.resizeDebounce = params.resizeDebounce; // Updating height or width of bar

        function setBarSize(_size) {
          var barMinSize = this.barMinSize || 20;
          var size = _size;

          if (size > 0 && size < barMinSize) {
            size = barMinSize;
          }

          if (this.bar) {
            css(this.bar, this.origin.size, parseInt(size, 10) + 'px');
          }
        } // Updating top or left bar position


        function posBar(_pos) {
          if (this.bar) {
            var was = css(this.bar, this.origin.pos),
                will = +_pos + 'px';

            if (will && will != was) {
              css(this.bar, this.origin.pos, will);
            }
          }
        } // Free path for bar


        function k() {
          return track[this.origin.client] - this.barTopLimit - this.bar[this.origin.offset];
        } // Relative content top position to bar top position


        function relToPos(r) {
          return r * k.call(this) + this.barTopLimit;
        } // Bar position to relative content position


        function posToRel(t) {
          return (t - this.barTopLimit) / k.call(this);
        } // Cursor position in main direction in px // Now with iOs support


        this.cursor = function (e) {
          return e['client' + this.origin.x] || (((e.originalEvent || e).touches || {})[0] || {})['page' + this.origin.x];
        }; // Text selection pos preventing


        function dontPosSelect() {
          return false;
        }

        this.pos = function (x) {
          // Absolute scroller position in px
          var ie = 'page' + this.origin.x + 'Offset',
              key = this.scroller[ie] ? ie : this.origin.scroll;
          if (x !== undefined) this.scroller[key] = x;
          return this.scroller[key];
        };

        this.rpos = function (r) {
          // Relative scroller position (0..1)
          var free = this.scroller[this.origin.scrollSize] - this.scroller[this.origin.client],
              x;

          if (r) {
            x = this.pos(r * free);
          } else {
            x = this.pos();
          }

          return x / (free || 1);
        }; // Switch on the bar by adding user-defined CSS classname to scroller


        this.barOn = function (dispose) {
          if (this.barOnCls) {
            var noScroll = this.scroller[this.origin.client] >= this.scroller[this.origin.scrollSize];

            if (dispose || noScroll) {
              if (has(this.root, this.barOnCls)) {
                rm(this.root, this.barOnCls);
              }
            } else if (!has(this.root, this.barOnCls)) {
              add(this.root, this.barOnCls);
            }
          }
        };

        this._pos0 = function (e) {
          scrollerPos0 = this.cursor(e) - barPos;
        };

        this.drag = function (e) {
          var rel = posToRel.call(this, this.cursor(e) - scrollerPos0);
          var sub = this.scroller[this.origin.scrollSize] - this.scroller[this.origin.client];
          this.scroller[this.origin.scroll] = rel * sub;
        }; // Text selection preventing on drag


        this.selection = function (enable) {
          this.event(document, 'selectpos selectstart', dontPosSelect, enable ? 'off' : 'on');
        }; // onResize & DOM modified handler
        // also fires on init
        // Note: max/min-size didnt sets if size did not really changed (for example, on init in Chrome)


        this.resize = function () {
          var self = this;
          var minPeriod = self.resizeDebounce === undefined ? 300 : self.resizeDebounce;
          var delay = 0;

          if (getTime() - resizeLastFire < minPeriod) {
            clearTimeout(resizePauseTimer);
            delay = minPeriod;
          }

          function upd() {
            var offset = self.scroller[self.origin.crossOffset];
            var client = self.scroller[self.origin.crossClient];
            var padding = 0;
            var was, will; // https://github.com/Diokuz/baron/issues/110

            if (isMacFF) {
              padding = macmsxffScrollbarSize; // Opera 12 bug https://github.com/Diokuz/baron/issues/105
            } else if (client > 0 && offset === 0) {
              // Only Opera 12 in some rare nested flexbox cases goes here
              // Sorry guys for magic,
              // but I dont want to create temporary html-nodes set
              // just for measuring scrollbar size in Opera 12.
              // 17px for Windows XP-8.1, 15px for Mac (really rare).
              offset = client + opera12maxScrollbarSize;
            }

            if (offset) {
              // if there is no size, css should not be set
              self.barOn();

              if (self.impact == 'scroller') {
                // scroller
                var delta = offset - client + padding; // `static` position works only for `scroller` impact

                if (self.position == 'static') {
                  // static
                  was = css(self.scroller, self.origin.crossSize);
                  will = self.clipper[self.origin.crossClient] + delta + 'px';

                  if (was != will) {
                    self._setCrossSizes(self.scroller, will);
                  }
                } else {
                  // absolute
                  var styles = {};
                  var key = self.rtl ? 'Left' : 'Right';

                  if (self.direction == 'h') {
                    key = 'Bottom';
                  }

                  styles['padding' + key] = delta + 'px';
                  css(self.scroller, styles);
                }
              } else {
                // clipper
                was = css(self.clipper, self.origin.crossSize);
                will = client + 'px';

                if (was != will) {
                  self._setCrossSizes(self.clipper, will);
                }
              }
            } else {// do nothing (display: none, or something)
            }

            Array.prototype.unshift.call(arguments, 'resize');
            fire.apply(self, arguments);
            resizeLastFire = getTime();
          }

          if (delay) {
            resizePauseTimer = setTimeout(upd, delay);
          } else {
            upd();
          }
        };

        this.updatePositions = function (force) {
          var newBarSize,
              self = this;

          if (self.bar) {
            newBarSize = (track[self.origin.client] - self.barTopLimit) * self.scroller[self.origin.client] / self.scroller[self.origin.scrollSize]; // Positioning bar

            if (force || parseInt(oldBarSize, 10) != parseInt(newBarSize, 10)) {
              setBarSize.call(self, newBarSize);
              oldBarSize = newBarSize;
            }

            barPos = relToPos.call(self, self.rpos());
            posBar.call(self, barPos);
          }

          Array.prototype.unshift.call(arguments, 'scroll');
          fire.apply(self, arguments);
        }; // onScroll handler


        this.scroll = function () {
          var self = this;
          self.updatePositions();

          if (self.scrollingCls) {
            if (!scrollingTimer) {
              add(self.root, self.scrollingCls);
            }

            clearTimeout(scrollingTimer);
            scrollingTimer = setTimeout(function () {
              rm(self.root, self.scrollingCls);
              scrollingTimer = undefined;
            }, 300);
          }
        }; // https://github.com/Diokuz/baron/issues/116


        this.clipperOnScroll = function () {
          // WTF is this line? https://github.com/Diokuz/baron/issues/134
          // if (this.direction == 'h') return
          // assign `initial scroll position` to `clipper.scrollLeft` (0 for ltr, ~20 for rtl)
          if (!this.rtl) {
            this.clipper[this.origin.scrollEdge] = 0;
          } else {
            this.clipper[this.origin.scrollEdge] = this.clipper[this.origin.scrollSize];
          }
        }; // Flexbox `align-items: stretch` (default) requires to set min-width for vertical
        // and max-height for horizontal scroll. Just set them all.
        // http://www.w3.org/TR/css-flexbox-1/#valdef-align-items-stretch


        this._setCrossSizes = function (node, size) {
          var styles = {};
          styles[this.origin.crossSize] = size;
          styles[this.origin.crossMinSize] = size;
          styles[this.origin.crossMaxSize] = size;
          css(node, styles);
        }; // Set common css rules


        this._dumbCss = function (on) {
          if (params.cssGuru) return;
          var overflow = on ? 'hidden' : null;
          var msOverflowStyle = on ? 'none' : null;
          css(this.clipper, {
            overflow: overflow,
            msOverflowStyle: msOverflowStyle,
            position: this.position == 'static' ? '' : 'relative'
          });
          var scroll = on ? 'scroll' : null;
          var axis = this.direction == 'v' ? 'y' : 'x';
          var scrollerCss = {};
          scrollerCss['overflow-' + axis] = scroll;
          scrollerCss['box-sizing'] = 'border-box';
          scrollerCss.margin = '0';
          scrollerCss.border = '0';

          if (this.position == 'absolute') {
            scrollerCss.position = 'absolute';
            scrollerCss.top = '0';

            if (this.direction == 'h') {
              scrollerCss.left = scrollerCss.right = '0';
            } else {
              scrollerCss.bottom = '0';
              scrollerCss.right = this.rtl ? '0' : '';
              scrollerCss.left = this.rtl ? '' : '0';
            }
          }

          css(this.scroller, scrollerCss);
        }; // onInit actions


        this._dumbCss(true);

        if (isMacFF) {
          var padding = 'paddingRight';
          var styles = {}; // getComputedStyle is ie9+, but we here only in f ff

          var paddingWas = scopedWindow.getComputedStyle(this.scroller)[[padding]];

          if (params.direction == 'h') {
            padding = 'paddingBottom';
          } else if (params.rtl) {
            padding = 'paddingLeft';
          }

          var numWas = parseInt(paddingWas, 10);
          if (numWas != numWas) numWas = 0;
          styles[padding] = macmsxffScrollbarSize + numWas + 'px';
          css(this.scroller, styles);
        }

        return this;
      },
      // fires on any update and on init
      update: function update(params) {
        if (process.env.NODE_ENV !== 'production') {
          if (this._disposed) {
            log('error', ['Update on disposed baron instance detected.', 'You should clear your stored baron value for this instance:', this].join(' '), params);
          }
        }

        fire.call(this, 'upd', params); // Update all plugins' params

        this.resize(1);
        this.updatePositions(1);
        return this;
      },
      // One instance
      dispose: function dispose() {
        if (process.env.NODE_ENV !== 'production') {
          if (this._disposed) {
            log('error', 'Already disposed:', this);
          }

          liveBarons--;
        }

        manageEvents(this, this.event, 'off');
        manageAttr(this.root, this.params.direction, 'off');

        if (this.params.direction == 'v') {
          this._setCrossSizes(this.scroller, '');
        } else {
          this._setCrossSizes(this.clipper, '');
        }

        this._dumbCss(false);

        this.barOn(true);
        fire.call(this, 'dispose');
        instances[this.params.index] = null;
        this.params = null;
        this._disposed = true;
      },
      on: function on(eventName, func, arg) {
        var names = eventName.split(' ');

        for (var i = 0; i < names.length; i++) {
          if (names[i] == 'init') {
            func.call(this, arg);
          } else {
            this.events[names[i]] = this.events[names[i]] || [];
            this.events[names[i]].push(function (userArg) {
              func.call(this, userArg || arg);
            });
          }
        }
      },
      baron: function (_baron2) {
        function baron(_x) {
          return _baron2.apply(this, arguments);
        }

        baron.toString = function () {
          return _baron2.toString();
        };

        return baron;
      }(function (params) {
        params.root = this.params.root;
        params.scroller = this.params.scroller;
        params.direction = this.params.direction == 'v' ? 'h' : 'v';
        params._chain = true;
        return baron(params);
      })
    }; // baron.fn.constructor.prototype = baron.fn

    baron.prototype.constructor.prototype = baron.prototype; // Use when you need "baron" global var for another purposes

    baron.noConflict = function () {
      scopedWindow.baron = _baron; // Restoring original value of "baron" global var

      return baron;
    };

    baron.version = '3.0.1';
    baron.prototype.autoUpdate = __webpack_require__(4)(scopedWindow);
    baron.prototype.fix = __webpack_require__(7);
    baron.prototype.controls = __webpack_require__(6);
    module.exports = baron;
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(1));
  /***/
},
/* 4 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";
  /* Autoupdate plugin for baron 0.6+ */

  function autoUpdateOne(MutationObserver) {
    var self = this;
    var watcher;

    if (this._au) {
      return;
    }

    function actualizeWatcher() {
      if (!self.root[self.origin.offset]) {
        startWatch();
      } else {
        stopWatch();
      }
    } // Set interval timeout for watching when root node will be visible


    function startWatch() {
      if (watcher) return;
      watcher = setInterval(function () {
        if (self.root[self.origin.offset]) {
          stopWatch();
          self.update();
        }
      }, 300); // is it good enought for you?)
    }

    function stopWatch() {
      clearInterval(watcher);
      watcher = null;
    }

    var debouncedUpdater = self._debounce(function () {
      self.update();
    }, 300);

    this._observer = new MutationObserver(function () {
      actualizeWatcher();
      self.update();
      debouncedUpdater();
    });
    this.on('init', function () {
      self._observer.observe(self.root, {
        childList: true,
        subtree: true,
        characterData: true // attributes: true
        // No reasons to set attributes to true
        // The case when root/child node with already properly inited baron toggled to hidden and then back to visible,
        // and the size of parent was changed during that hidden state, is very rare
        // Other cases are covered by watcher, and you still can do .update by yourself

      });

      actualizeWatcher();
    });
    this.on('dispose', function () {
      self._observer.disconnect();

      stopWatch();
      delete self._observer;
    });
    this._au = true;
  }

  module.exports = function autoUpdateCreator(win) {
    var MutationObserver = win.MutationObserver || win.WebKitMutationObserver || win.MozMutationObserver || null;
    return function autoUpdate() {
      if (!MutationObserver) return this;
      autoUpdateOne.call(this, MutationObserver);
      return this;
    };
  };
  /***/

},
/* 5 */

/***/
function (module, exports, __webpack_require__) {
  var _baron = __webpack_require__(3);

  window.baron = _baron;

  if (window.jQuery && window.jQuery.fn) {
    window.jQuery.fn.baron = _baron;
  }
  /***/

},
/* 6 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";
  /* Controls plugin for baron */

  var qs = __webpack_require__(0).qs;

  module.exports = function controls(params) {
    var forward,
        backward,
        track,
        screen,
        self = this,
        event;
    screen = params.screen || 0.9;

    if (params.forward) {
      forward = qs(params.forward, this.clipper);
      event = {
        element: forward,
        handler: function handler() {
          var y = self.pos() + (params.delta || 30);
          self.pos(y);
        },
        type: 'click'
      };

      this._eventHandlers.push(event); // For auto-dispose


      this.event(event.element, event.type, event.handler, 'on');
    }

    if (params.backward) {
      backward = qs(params.backward, this.clipper);
      event = {
        element: backward,
        handler: function handler() {
          var y = self.pos() - (params.delta || 30);
          self.pos(y);
        },
        type: 'click'
      };

      this._eventHandlers.push(event); // For auto-dispose


      this.event(event.element, event.type, event.handler, 'on');
    }

    if (params.track) {
      if (params.track === true) {
        track = this.track;
      } else {
        track = qs(params.track, this.clipper);
      }

      if (track) {
        event = {
          element: track,
          handler: function handler(e) {
            // https://github.com/Diokuz/baron/issues/121
            if (e.target != track) return;
            var x = e['offset' + self.origin.x],
                xBar = self.bar[self.origin.offsetPos],
                sign = 0;

            if (x < xBar) {
              sign = -1;
            } else if (x > xBar + self.bar[self.origin.offset]) {
              sign = 1;
            }

            var y = self.pos() + sign * screen * self.scroller[self.origin.client];
            self.pos(y);
          },
          type: 'mousedown'
        };

        this._eventHandlers.push(event); // For auto-dispose


        this.event(event.element, event.type, event.handler, 'on');
      }
    }
  };
  /***/

},
/* 7 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";
  /* WEBPACK VAR INJECTION */

  (function (process) {
    /* Fixable elements plugin for baron */
    var log = __webpack_require__(2);

    var css = __webpack_require__(0).css;

    var add = __webpack_require__(0).add;

    var rm = __webpack_require__(0).rm;

    module.exports = function fix(userParams) {
      var elements,
          viewPortSize,
          params = {
        // Default params
        outside: '',
        inside: '',
        before: '',
        after: '',
        past: '',
        future: '',
        radius: 0,
        minView: 0
      },
          topFixHeights = [],
          // inline style for element
      topRealHeights = [],
          // ? something related to negative margins for fixable elements
      headerTops = [],
          // offset positions when not fixed
      scroller = this.scroller,
          eventManager = this.event,
          self = this;

      if (process.env.NODE_ENV !== 'production') {
        if (this.position != 'static') {
          log('error', ['Fix plugin cannot work properly in non-static baron position.', 'See more https://github.com/Diokuz/baron/issues/135'].join(' '), this.params);
        }
      } // i - number of fixing element, pos - fix-position in px, flag - 1: top, 2: bottom
      // Invocation only in case when fix-state changed


      function fixElement(i, _pos, flag) {
        var pos = _pos;
        var ori = flag == 1 ? 'pos' : 'oppos';

        if (viewPortSize < (params.minView || 0)) {
          // No headers fixing when no enought space for viewport
          pos = undefined;
        } // Removing all fixing stuff - we can do this because fixElement triggers only when fixState really changed


        css(elements[i], this.origin.pos, '');
        css(elements[i], this.origin.oppos, '');
        rm(elements[i], params.outside); // Fixing if needed

        if (pos !== undefined) {
          pos += 'px';
          css(elements[i], this.origin[ori], pos);
          add(elements[i], params.outside);
        }
      }

      function bubbleWheel(e) {
        try {
          var i = document.createEvent('WheelEvent'); // i - for extra byte
          // evt.initWebKitWheelEvent(deltaX, deltaY, window, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey)

          i.initWebKitWheelEvent(e.originalEvent.wheelDeltaX, e.originalEvent.wheelDeltaY);
          scroller.dispatchEvent(i);
          e.preventDefault();
        } catch (ex) {//
        }
      }

      function init(_params) {
        var pos;

        for (var key in _params) {
          params[key] = _params[key];
        }

        if (params.elements instanceof HTMLElement) {
          elements = [params.elements];
        } else if (typeof params.elements == 'string') {
          elements = this.scroller.querySelectorAll(params.elements);
        } else if (params.elements && params.elements[0] instanceof HTMLElement) {
          elements = params.elements;
        }

        if (elements) {
          viewPortSize = this.scroller[this.origin.client];

          for (var i = 0; i < elements.length; i++) {
            // Variable header heights
            pos = {};
            pos[this.origin.size] = elements[i][this.origin.offset] + 'px';

            if (elements[i].parentNode !== this.scroller) {
              css(elements[i].parentNode, pos);
            }

            pos = {};
            pos[this.origin.crossSize] = elements[i].parentNode[this.origin.crossClient] + 'px';
            css(elements[i], pos); // Between fixed headers

            viewPortSize -= elements[i][this.origin.offset];
            headerTops[i] = elements[i].parentNode[this.origin.offsetPos]; // No paddings for parentNode
            // Summary elements height above current

            topFixHeights[i] = topFixHeights[i - 1] || 0; // Not zero because of negative margins

            topRealHeights[i] = topRealHeights[i - 1] || Math.min(headerTops[i], 0);

            if (elements[i - 1]) {
              topFixHeights[i] += elements[i - 1][this.origin.offset];
              topRealHeights[i] += elements[i - 1][this.origin.offset];
            }

            if (!(i == 0 && headerTops[i] == 0)
            /* && force */
            ) {
                this.event(elements[i], 'mousewheel', bubbleWheel, 'off');
                this.event(elements[i], 'mousewheel', bubbleWheel);
              }
          }

          if (params.limiter && elements[0]) {
            // Bottom edge of first header as top limit for track
            if (this.track && this.track != this.scroller) {
              pos = {};
              pos[this.origin.pos] = elements[0].parentNode[this.origin.offset] + 'px';
              css(this.track, pos);
            } else {
              this.barTopLimit = elements[0].parentNode[this.origin.offset];
            } // this.barTopLimit = elements[0].parentNode[this.origin.offset]


            this.scroll();
          }

          if (params.limiter === false) {
            // undefined (in second fix instance) should have no influence on bar limit
            this.barTopLimit = 0;
          }
        }

        var event = {
          element: elements,
          handler: function handler() {
            var parent = this.parentNode,
                top = parent.offsetTop,
                num; // finding num -> elements[num] === this

            for (var j = 0; j < elements.length; j++) {
              if (elements[j] === this) num = j;
            }

            var locPos = top - topFixHeights[num];

            if (params.scroll) {
              // User defined callback
              params.scroll({
                x1: self.scroller.scrollTop,
                x2: locPos
              });
            } else {
              self.scroller.scrollTop = locPos;
            }
          },
          type: 'click'
        };

        if (params.clickable) {
          this._eventHandlers.push(event); // For auto-dispose
          // eventManager(event.element, event.type, event.handler, 'off')


          for (var j = 0; j < event.element.length; j++) {
            eventManager(event.element[j], event.type, event.handler, 'on');
          }
        }
      }

      this.on('init', init, userParams);
      var fixFlag = [],
          // 1 - past, 2 - future, 3 - current (not fixed)
      gradFlag = [];
      this.on('init scroll', function () {
        var fixState, hTop, gradState;
        var i;

        if (elements) {
          var change; // fixFlag update

          for (i = 0; i < elements.length; i++) {
            fixState = 0;

            if (headerTops[i] - this.pos() < topRealHeights[i] + params.radius) {
              // Header trying to go up
              fixState = 1;
              hTop = topFixHeights[i];
            } else if (headerTops[i] - this.pos() > topRealHeights[i] + viewPortSize - params.radius) {
              // Header trying to go down
              fixState = 2; // console.log('topFixHeights[i] + viewPortSize + topRealHeights[i]', topFixHeights[i], this.scroller[this.origin.client], topRealHeights[i])

              hTop = this.scroller[this.origin.client] - elements[i][this.origin.offset] - topFixHeights[i] - viewPortSize; // console.log('hTop', hTop, viewPortSize, elements[this.origin.offset], topFixHeights[i])
              // (topFixHeights[i] + viewPortSize + elements[this.origin.offset]) - this.scroller[this.origin.client]
            } else {
              // Header in viewport
              fixState = 3;
              hTop = undefined;
            }

            gradState = false;

            if (headerTops[i] - this.pos() < topRealHeights[i] || headerTops[i] - this.pos() > topRealHeights[i] + viewPortSize) {
              gradState = true;
            }

            if (fixState != fixFlag[i] || gradState != gradFlag[i]) {
              fixElement.call(this, i, hTop, fixState);
              fixFlag[i] = fixState;
              gradFlag[i] = gradState;
              change = true;
            }
          } // Adding positioning classes (on last top and first bottom header)


          if (change) {
            // At leats one change in elements flag structure occured
            for (i = 0; i < elements.length; i++) {
              if (fixFlag[i] == 1 && params.past) {
                add(elements[i], params.past);
                rm(elements[i], params.future);
              }

              if (fixFlag[i] == 2 && params.future) {
                add(elements[i], params.future);
                rm(elements[i], params.past);
              }

              if (fixFlag[i] == 3) {
                rm(elements[i], params.past);
                rm(elements[i], params.future);
                add(elements[i], params.inside);
              }

              if (fixFlag[i] != fixFlag[i + 1] && fixFlag[i] == 1) {
                add(elements[i], params.before);
                rm(elements[i], params.after); // Last top fixed header
              } else if (fixFlag[i] != fixFlag[i - 1] && fixFlag[i] == 2) {
                add(elements[i], params.after);
                rm(elements[i], params.before); // First bottom fixed header
              } else {
                rm(elements[i], params.before);
                rm(elements[i], params.after);
              }

              if (params.grad) {
                if (gradFlag[i]) {
                  add(elements[i], params.grad);
                } else {
                  rm(elements[i], params.grad);
                }
              }
            }
          }
        }
      });
      this.on('resize upd', function (updParams) {
        init.call(this, updParams && updParams.fix);
      });
      return this;
    };
    /* WEBPACK VAR INJECTION */

  }).call(exports, __webpack_require__(1));
  /***/
}
/******/
]);
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/


!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : jQuery);
}(function (a) {
  var b,
      c = navigator.userAgent,
      d = /iphone/i.test(c),
      e = /chrome/i.test(c),
      f = /android/i.test(c);
  a.mask = {
    definitions: {
      9: "[0-9]",
      a: "[A-Za-z]",
      "*": "[A-Za-z0-9]"
    },
    autoclear: !0,
    dataName: "rawMaskFn",
    placeholder: "_"
  }, a.fn.extend({
    caret: function caret(a, b) {
      var c;
      if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () {
        this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select());
      })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
        begin: a,
        end: b
      });
    },
    unmask: function unmask() {
      return this.trigger("unmask");
    },
    mask: function mask(c, g) {
      var h, i, j, k, l, m, n, o;

      if (!c && this.length > 0) {
        h = a(this[0]);
        var p = h.data(a.mask.dataName);
        return p ? p() : void 0;
      }

      return g = a.extend({
        autoclear: a.mask.autoclear,
        placeholder: a.mask.placeholder,
        completed: null
      }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) {
        "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null);
      }), this.trigger("unmask").each(function () {
        function h() {
          if (g.completed) {
            for (var a = l; m >= a; a++) {
              if (j[a] && C[a] === p(a)) return;
            }

            g.completed.call(B);
          }
        }

        function p(a) {
          return g.placeholder.charAt(a < g.placeholder.length ? a : 0);
        }

        function q(a) {
          for (; ++a < n && !j[a];) {
            ;
          }

          return a;
        }

        function r(a) {
          for (; --a >= 0 && !j[a];) {
            ;
          }

          return a;
        }

        function s(a, b) {
          var c, d;

          if (!(0 > a)) {
            for (c = a, d = q(b); n > c; c++) {
              if (j[c]) {
                if (!(n > d && j[c].test(C[d]))) break;
                C[c] = C[d], C[d] = p(d), d = q(d);
              }
            }

            z(), B.caret(Math.max(l, a));
          }
        }

        function t(a) {
          var b, c, d, e;

          for (b = a, c = p(a); n > b; b++) {
            if (j[b]) {
              if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
              c = e;
            }
          }
        }

        function u() {
          var a = B.val(),
              b = B.caret();

          if (o && o.length && o.length > a.length) {
            for (A(!0); b.begin > 0 && !j[b.begin - 1];) {
              b.begin--;
            }

            if (0 === b.begin) for (; b.begin < l && !j[b.begin];) {
              b.begin++;
            }
            B.caret(b.begin, b.begin);
          } else {
            for (A(!0); b.begin < n && !j[b.begin];) {
              b.begin++;
            }

            B.caret(b.begin, b.begin);
          }

          h();
        }

        function v() {
          A(), B.val() != E && B.change();
        }

        function w(a) {
          if (!B.prop("readonly")) {
            var b,
                c,
                e,
                f = a.which || a.keyCode;
            o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault());
          }
        }

        function x(b) {
          if (!B.prop("readonly")) {
            var c,
                d,
                e,
                g = b.which || b.keyCode,
                i = B.caret();

            if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
              if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                if (t(c), C[c] = d, z(), e = q(c), f) {
                  var k = function k() {
                    a.proxy(a.fn.caret, B, e)();
                  };

                  setTimeout(k, 0);
                } else B.caret(e);

                i.begin <= m && h();
              }

              b.preventDefault();
            }
          }
        }

        function y(a, b) {
          var c;

          for (c = a; b > c && n > c; c++) {
            j[c] && (C[c] = p(c));
          }
        }

        function z() {
          B.val(C.join(""));
        }

        function A(a) {
          var b,
              c,
              d,
              e = B.val(),
              f = -1;

          for (b = 0, d = 0; n > b; b++) {
            if (j[b]) {
              for (C[b] = p(b); d++ < e.length;) {
                if (c = e.charAt(d - 1), j[b].test(c)) {
                  C[b] = c, f = b;
                  break;
                }
              }

              if (d > e.length) {
                y(b + 1, n);
                break;
              }
            } else C[b] === e.charAt(d) && d++, k > b && (f = b);
          }

          return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l;
        }

        var B = a(this),
            C = a.map(c.split(""), function (a, b) {
          return "?" != a ? i[a] ? p(b) : a : void 0;
        }),
            D = C.join(""),
            E = B.val();
        B.data(a.mask.dataName, function () {
          return a.map(C, function (a, b) {
            return j[b] && a != p(b) ? a : null;
          }).join("");
        }), B.one("unmask", function () {
          B.off(".mask").removeData(a.mask.dataName);
        }).on("focus.mask", function () {
          if (!B.prop("readonly")) {
            clearTimeout(b);
            var a;
            E = B.val(), a = A(), b = setTimeout(function () {
              B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a));
            }, 10);
          }
        }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () {
          B.prop("readonly") || setTimeout(function () {
            var a = A(!0);
            B.caret(a), h();
          }, 0);
        }), e && f && B.off("input.mask").on("input.mask", u), A();
      });
    }
  });
});
/*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.8.7
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011-2018 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
This file is generated by `grunt build`, do not edit it by hand.
*/

(function () {
  var $,
      AbstractChosen,
      Chosen,
      SelectParser,
      bind = function bind(fn, me) {
    return function () {
      return fn.apply(me, arguments);
    };
  },
      extend = function extend(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key)) child[key] = parent[key];
    }

    function ctor() {
      this.constructor = child;
    }

    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      hasProp = {}.hasOwnProperty;

  SelectParser = function () {
    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }

    SelectParser.prototype.add_node = function (child) {
      if (child.nodeName.toUpperCase() === "OPTGROUP") {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };

    SelectParser.prototype.add_group = function (group) {
      var group_position, i, len, option, ref, results1;
      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: true,
        label: group.label,
        title: group.title ? group.title : void 0,
        children: 0,
        disabled: group.disabled,
        classes: group.className
      });
      ref = group.childNodes;
      results1 = [];

      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        results1.push(this.add_option(option, group_position, group.disabled));
      }

      return results1;
    };

    SelectParser.prototype.add_option = function (option, group_position, group_disabled) {
      if (option.nodeName.toUpperCase() === "OPTION") {
        if (option.text !== "") {
          if (group_position != null) {
            this.parsed[group_position].children += 1;
          }

          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
            html: option.innerHTML,
            title: option.title ? option.title : void 0,
            selected: option.selected,
            disabled: group_disabled === true ? group_disabled : option.disabled,
            group_array_index: group_position,
            group_label: group_position != null ? this.parsed[group_position].label : null,
            classes: option.className,
            style: option.style.cssText
          });
        } else {
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: true
          });
        }

        return this.options_index += 1;
      }
    };

    return SelectParser;
  }();

  SelectParser.select_to_array = function (select) {
    var child, i, len, parser, ref;
    parser = new SelectParser();
    ref = select.childNodes;

    for (i = 0, len = ref.length; i < len; i++) {
      child = ref[i];
      parser.add_node(child);
    }

    return parser.parsed;
  };

  AbstractChosen = function () {
    function AbstractChosen(form_field, options1) {
      this.form_field = form_field;
      this.options = options1 != null ? options1 : {};
      this.label_click_handler = bind(this.label_click_handler, this);

      if (!AbstractChosen.browser_is_supported()) {
        return;
      }

      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.set_default_values();
      this.setup();
      this.set_up_html();
      this.register_observers();
      this.on_ready();
    }

    AbstractChosen.prototype.set_default_values = function () {
      this.click_test_action = function (_this) {
        return function (evt) {
          return _this.test_active_click(evt);
        };
      }(this);

      this.activate_action = function (_this) {
        return function (evt) {
          return _this.activate_field(evt);
        };
      }(this);

      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.is_rtl = this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className);
      this.allow_single_deselect = this.options.allow_single_deselect != null && this.form_field.options[0] != null && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || false;
      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
      this.group_search = this.options.group_search != null ? this.options.group_search : true;
      this.search_contains = this.options.search_contains || false;
      this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
      this.max_selected_options = this.options.max_selected_options || Infinity;
      this.inherit_select_classes = this.options.inherit_select_classes || false;
      this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
      this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
      this.include_group_label_in_selected = this.options.include_group_label_in_selected || false;
      this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY;
      this.case_sensitive_search = this.options.case_sensitive_search || false;
      return this.hide_results_on_select = this.options.hide_results_on_select != null ? this.options.hide_results_on_select : true;
    };

    AbstractChosen.prototype.set_default_text = function () {
      if (this.form_field.getAttribute("data-placeholder")) {
        this.default_text = this.form_field.getAttribute("data-placeholder");
      } else if (this.is_multiple) {
        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
      } else {
        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
      }

      this.default_text = this.escape_html(this.default_text);
      return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
    };

    AbstractChosen.prototype.choice_label = function (item) {
      if (this.include_group_label_in_selected && item.group_label != null) {
        return "<b class='group-name'>" + this.escape_html(item.group_label) + "</b>" + item.html;
      } else {
        return item.html;
      }
    };

    AbstractChosen.prototype.mouse_enter = function () {
      return this.mouse_on_container = true;
    };

    AbstractChosen.prototype.mouse_leave = function () {
      return this.mouse_on_container = false;
    };

    AbstractChosen.prototype.input_focus = function (evt) {
      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout(function (_this) {
            return function () {
              return _this.container_mousedown();
            };
          }(this), 50);
        }
      } else {
        if (!this.active_field) {
          return this.activate_field();
        }
      }
    };

    AbstractChosen.prototype.input_blur = function (evt) {
      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout(function (_this) {
          return function () {
            return _this.blur_test();
          };
        }(this), 100);
      }
    };

    AbstractChosen.prototype.label_click_handler = function (evt) {
      if (this.is_multiple) {
        return this.container_mousedown(evt);
      } else {
        return this.activate_field();
      }
    };

    AbstractChosen.prototype.results_option_build = function (options) {
      var content, data, data_content, i, len, ref, shown_results;
      content = '';
      shown_results = 0;
      ref = this.results_data;

      for (i = 0, len = ref.length; i < len; i++) {
        data = ref[i];
        data_content = '';

        if (data.group) {
          data_content = this.result_add_group(data);
        } else {
          data_content = this.result_add_option(data);
        }

        if (data_content !== '') {
          shown_results++;
          content += data_content;
        }

        if (options != null ? options.first : void 0) {
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.single_set_selected_text(this.choice_label(data));
          }
        }

        if (shown_results >= this.max_shown_results) {
          break;
        }
      }

      return content;
    };

    AbstractChosen.prototype.result_add_option = function (option) {
      var classes, option_el;

      if (!option.search_match) {
        return '';
      }

      if (!this.include_option_in_results(option)) {
        return '';
      }

      classes = [];

      if (!option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("active-result");
      }

      if (option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("disabled-result");
      }

      if (option.selected) {
        classes.push("result-selected");
      }

      if (option.group_array_index != null) {
        classes.push("group-option");
      }

      if (option.classes !== "") {
        classes.push(option.classes);
      }

      option_el = document.createElement("li");
      option_el.className = classes.join(" ");

      if (option.style) {
        option_el.style.cssText = option.style;
      }

      option_el.setAttribute("data-option-array-index", option.array_index);
      option_el.innerHTML = option.highlighted_html || option.html;

      if (option.title) {
        option_el.title = option.title;
      } // console.log(option_el.innerHTML)


      if (this.is_size.title.length > 0) {
        var split = option_el.innerHTML.split(';');
        option_el.innerHTML = '';
        split.forEach(function (name) {
          option_el.innerHTML += '<span class="size-value">' + name + '</span>';
        });
      }

      return this.outerHTML(option_el);
    };

    AbstractChosen.prototype.result_add_group = function (group) {
      var classes, group_el;

      if (!(group.search_match || group.group_match)) {
        return '';
      }

      if (!(group.active_options > 0)) {
        return '';
      }

      classes = [];
      classes.push("group-result");

      if (group.classes) {
        classes.push(group.classes);
      }

      group_el = document.createElement("li");
      group_el.className = classes.join(" ");
      group_el.innerHTML = group.highlighted_html || this.escape_html(group.label);

      if (group.title) {
        group_el.title = group.title;
      }

      return this.outerHTML(group_el);
    };

    AbstractChosen.prototype.results_update_field = function () {
      this.set_default_text();

      if (!this.is_multiple) {
        this.results_reset_cleanup();
      }

      this.result_clear_highlight();
      this.results_build();

      if (this.results_showing) {
        return this.winnow_results();
      }
    };

    AbstractChosen.prototype.reset_single_select_options = function () {
      var i, len, ref, result, results1;
      ref = this.results_data;
      results1 = [];

      for (i = 0, len = ref.length; i < len; i++) {
        result = ref[i];

        if (result.selected) {
          results1.push(result.selected = false);
        } else {
          results1.push(void 0);
        }
      }

      return results1;
    };

    AbstractChosen.prototype.results_toggle = function () {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.results_search = function (evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.winnow_results = function (options) {
      var escapedQuery, fix, i, len, option, prefix, query, ref, regex, results, results_group, search_match, startpos, suffix, text;
      this.no_results_clear();
      results = 0;
      query = this.get_search_text();
      escapedQuery = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      regex = this.get_search_regex(escapedQuery);
      ref = this.results_data;

      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        option.search_match = false;
        results_group = null;
        search_match = null;
        option.highlighted_html = '';

        if (this.include_option_in_results(option)) {
          if (option.group) {
            option.group_match = false;
            option.active_options = 0;
          }

          if (option.group_array_index != null && this.results_data[option.group_array_index]) {
            results_group = this.results_data[option.group_array_index];

            if (results_group.active_options === 0 && results_group.search_match) {
              results += 1;
            }

            results_group.active_options += 1;
          }

          text = option.group ? option.label : option.text;

          if (!(option.group && !this.group_search)) {
            search_match = this.search_string_match(text, regex);
            option.search_match = search_match != null;

            if (option.search_match && !option.group) {
              results += 1;
            }

            if (option.search_match) {
              if (query.length) {
                startpos = search_match.index;
                prefix = text.slice(0, startpos);
                fix = text.slice(startpos, startpos + query.length);
                suffix = text.slice(startpos + query.length);
                option.highlighted_html = this.escape_html(prefix) + "<em>" + this.escape_html(fix) + "</em>" + this.escape_html(suffix);
              }

              if (results_group != null) {
                results_group.group_match = true;
              }
            } else if (option.group_array_index != null && this.results_data[option.group_array_index].search_match) {
              option.search_match = true;
            }
          }
        }
      }

      this.result_clear_highlight();

      if (results < 1 && query.length) {
        this.update_results_content("");
        return this.no_results(query);
      } else {
        this.update_results_content(this.results_option_build());

        if (!(options != null ? options.skip_highlight : void 0)) {
          return this.winnow_results_set_highlight();
        }
      }
    };

    AbstractChosen.prototype.get_search_regex = function (escaped_search_string) {
      var regex_flag, regex_string;
      regex_string = this.search_contains ? escaped_search_string : "(^|\\s|\\b)" + escaped_search_string + "[^\\s]*";

      if (!(this.enable_split_word_search || this.search_contains)) {
        regex_string = "^" + regex_string;
      }

      regex_flag = this.case_sensitive_search ? "" : "i";
      return new RegExp(regex_string, regex_flag);
    };

    AbstractChosen.prototype.search_string_match = function (search_string, regex) {
      var match;
      match = regex.exec(search_string);

      if (!this.search_contains && (match != null ? match[1] : void 0)) {
        match.index += 1;
      }

      return match;
    };

    AbstractChosen.prototype.choices_count = function () {
      var i, len, option, ref;

      if (this.selected_option_count != null) {
        return this.selected_option_count;
      }

      this.selected_option_count = 0;
      ref = this.form_field.options;

      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];

        if (option.selected) {
          this.selected_option_count += 1;
        }
      }

      return this.selected_option_count;
    };

    AbstractChosen.prototype.choices_click = function (evt) {
      evt.preventDefault();
      this.activate_field();

      if (!(this.results_showing || this.is_disabled)) {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.keydown_checker = function (evt) {
      var ref, stroke;
      stroke = (ref = evt.which) != null ? ref : evt.keyCode;
      this.search_field_scale();

      if (stroke !== 8 && this.pending_backstroke) {
        this.clear_backstroke();
      }

      switch (stroke) {
        case 8:
          this.backstroke_length = this.get_search_field_value().length;
          break;

        case 9:
          if (this.results_showing && !this.is_multiple) {
            this.result_select(evt);
          }

          this.mouse_on_container = false;
          break;

        case 13:
          if (this.results_showing) {
            evt.preventDefault();
          }

          break;

        case 27:
          if (this.results_showing) {
            evt.preventDefault();
          }

          break;

        case 32:
          if (this.disable_search) {
            evt.preventDefault();
          }

          break;

        case 38:
          evt.preventDefault();
          this.keyup_arrow();
          break;

        case 40:
          evt.preventDefault();
          this.keydown_arrow();
          break;
      }
    };

    AbstractChosen.prototype.keyup_checker = function (evt) {
      var ref, stroke;
      stroke = (ref = evt.which) != null ? ref : evt.keyCode;
      this.search_field_scale();

      switch (stroke) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
            this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            this.results_search();
          }

          break;

        case 13:
          evt.preventDefault();

          if (this.results_showing) {
            this.result_select(evt);
          }

          break;

        case 27:
          if (this.results_showing) {
            this.results_hide();
          }

          break;

        case 9:
        case 16:
        case 17:
        case 18:
        case 38:
        case 40:
        case 91:
          break;

        default:
          this.results_search();
          break;
      }
    };

    AbstractChosen.prototype.clipboard_event_checker = function (evt) {
      if (this.is_disabled) {
        return;
      }

      return setTimeout(function (_this) {
        return function () {
          return _this.results_search();
        };
      }(this), 50);
    };

    AbstractChosen.prototype.container_width = function () {
      if (this.options.width != null) {
        return this.options.width;
      } else {
        return this.form_field.offsetWidth + "px";
      }
    };

    AbstractChosen.prototype.include_option_in_results = function (option) {
      if (this.is_multiple && !this.display_selected_options && option.selected) {
        return false;
      }

      if (!this.display_disabled_options && option.disabled) {
        return false;
      }

      if (option.empty) {
        return false;
      }

      return true;
    };

    AbstractChosen.prototype.search_results_touchstart = function (evt) {
      this.touch_started = true;
      return this.search_results_mouseover(evt);
    };

    AbstractChosen.prototype.search_results_touchmove = function (evt) {
      this.touch_started = false;
      return this.search_results_mouseout(evt);
    };

    AbstractChosen.prototype.search_results_touchend = function (evt) {
      if (this.touch_started) {
        return this.search_results_mouseup(evt);
      }
    };

    AbstractChosen.prototype.outerHTML = function (element) {
      var tmp;

      if (element.outerHTML) {
        return element.outerHTML;
      }

      tmp = document.createElement("div");
      tmp.appendChild(element);
      return tmp.innerHTML;
    };

    AbstractChosen.prototype.get_single_html = function () {
      this.is_size = {
        title: [],
        titleHtml: '',
        data: this.form_field_jq.data('is_sizechoose')
      };

      if (typeof this.is_size.data !== 'undefined') {
        this.is_size.title = this.is_size.data.split(';');

        if (this.is_size.title.length > 0) {
          this.is_size.titleHtml = '<div class="chosen-title">';
          var that = this;
          this.is_size.title.forEach(function (name) {
            that.is_size.titleHtml += '<span class="title-item">' + name + '</span>';
          });
          this.is_size.titleHtml += '</div>';
        }
      }

      return "<a class='chosen-single chosen-default'>" + "<span>" + this.default_text + "</span>" + "<div><b></b></div> </a> <div class='chosen-drop'>" + "<div class='chosen-search'>" + "<input class='chosen-search-input' type='text' autocomplete='off' />" + "</div>" + this.is_size.titleHtml + "<div class='baron baron-column'>" + "<div class='baron__free'><div class='baron__bar'></div></div>" + "<ul class='chosen-results baron__scroller'></ul>" + "</div>" + "</div>";
    };

    AbstractChosen.prototype.get_multi_html = function () {
      return "<ul class=\"chosen-choices\">\n  <li class=\"search-field\">\n    <input class=\"chosen-search-input\" type=\"text\" autocomplete=\"off\" value=\"" + this.default_text + "\" />\n  </li>\n</ul>\n<div class=\"chosen-drop\">\n  <ul class=\"chosen-results\"></ul>\n</div>";
    };

    AbstractChosen.prototype.get_no_results_html = function (terms) {
      return "<li class=\"no-results\">\n  " + this.results_none_found + " <span>" + this.escape_html(terms) + "</span>\n</li>";
    };

    AbstractChosen.browser_is_supported = function () {
      return true;
    };

    AbstractChosen.default_multiple_text = "Select Some Options";
    AbstractChosen.default_single_text = "Select an Option";
    AbstractChosen.default_no_result_text = "No results match";
    return AbstractChosen;
  }();

  $ = jQuery;
  $.fn.extend({
    chosen: function chosen(options) {
      if (!AbstractChosen.browser_is_supported()) {
        return this;
      }

      return this.each(function (input_field) {
        var $this, chosen;
        $this = $(this);
        chosen = $this.data('chosen');

        if (options === 'destroy') {
          if (chosen instanceof Chosen) {
            chosen.destroy();
          }

          return;
        }

        if (!(chosen instanceof Chosen)) {
          $this.data('chosen', new Chosen(this, options));
        }
      });
    }
  });

  Chosen = function (superClass) {
    extend(Chosen, superClass);

    function Chosen() {
      return Chosen.__super__.constructor.apply(this, arguments);
    }

    Chosen.prototype.setup = function () {
      this.form_field_jq = $(this.form_field);
      return this.current_selectedIndex = this.form_field.selectedIndex;
    };

    Chosen.prototype.set_up_html = function () {
      var container_classes, container_props;
      container_classes = ["chosen-container"];
      container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));

      if (this.inherit_select_classes && this.form_field.className) {
        container_classes.push(this.form_field.className);
      }

      if (this.is_rtl) {
        container_classes.push("chosen-rtl");
      }

      container_props = {
        'class': container_classes.join(' '),
        'title': this.form_field.title
      };

      if (this.form_field.id.length) {
        container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
      }

      this.container = $("<div />", container_props);
      this.container.width(this.container_width());

      if (this.is_multiple) {
        this.container.html(this.get_multi_html());
      } else {
        this.container.html(this.get_single_html());
      }

      this.form_field_jq.hide().after(this.container);
      this.dropdown = this.container.find('div.chosen-drop').first();
      this.search_field = this.container.find('input').first();
      this.search_results = this.container.find('ul.chosen-results').first();
      this.search_field_scale();
      this.search_no_results = this.container.find('li.no-results').first();

      if (this.is_multiple) {
        this.search_choices = this.container.find('ul.chosen-choices').first();
        this.search_container = this.container.find('li.search-field').first();
      } else {
        this.search_container = this.container.find('div.chosen-search').first();
        this.selected_item = this.container.find('.chosen-single').first();
      }

      this.results_build();
      this.set_tab_index();
      return this.set_label_behavior();
    };

    Chosen.prototype.on_ready = function () {
      return this.form_field_jq.trigger("chosen:ready", {
        chosen: this
      });
    };

    Chosen.prototype.register_observers = function () {
      // this.container.on('touchstart.chosen', (function(_this) {
      //   return function(evt) {
      //     _this.container_mousedown(evt);
      //   };
      // })(this));
      this.container.on('touchend.chosen', function (_this) {
        return function (evt) {
          _this.container_mouseup(evt);
        };
      }(this));
      this.container.on('mousedown.chosen', function (_this) {
        return function (evt) {
          _this.container_mousedown(evt);
        };
      }(this));
      this.container.on('mouseup.chosen', function (_this) {
        return function (evt) {
          _this.container_mouseup(evt);
        };
      }(this));
      this.container.on('mouseenter.chosen', function (_this) {
        return function (evt) {
          _this.mouse_enter(evt);
        };
      }(this));
      this.container.on('mouseleave.chosen', function (_this) {
        return function (evt) {
          _this.mouse_leave(evt);
        };
      }(this));
      this.search_results.on('mouseup.chosen', function (_this) {
        return function (evt) {
          _this.search_results_mouseup(evt);
        };
      }(this));
      this.search_results.on('mouseover.chosen', function (_this) {
        return function (evt) {
          _this.search_results_mouseover(evt);
        };
      }(this));
      this.search_results.on('mouseout.chosen', function (_this) {
        return function (evt) {
          _this.search_results_mouseout(evt);
        };
      }(this));
      this.search_results.on('mousewheel.chosen DOMMouseScroll.chosen', function (_this) {
        return function (evt) {
          _this.search_results_mousewheel(evt);
        };
      }(this));
      this.search_results.on('touchstart.chosen', function (_this) {
        return function (evt) {
          _this.search_results_touchstart(evt);
        };
      }(this));
      this.search_results.on('touchmove.chosen', function (_this) {
        return function (evt) {
          _this.search_results_touchmove(evt);
        };
      }(this));
      this.search_results.on('touchend.chosen', function (_this) {
        return function (evt) {
          _this.search_results_touchend(evt);
        };
      }(this));
      this.form_field_jq.on("chosen:updated.chosen", function (_this) {
        return function (evt) {
          _this.results_update_field(evt);
        };
      }(this));
      this.form_field_jq.on("chosen:activate.chosen", function (_this) {
        return function (evt) {
          _this.activate_field(evt);
        };
      }(this));
      this.form_field_jq.on("chosen:open.chosen", function (_this) {
        return function (evt) {
          _this.container_mousedown(evt);
        };
      }(this));
      this.form_field_jq.on("chosen:close.chosen", function (_this) {
        return function (evt) {
          _this.close_field(evt);
        };
      }(this));
      this.search_field.on('blur.chosen', function (_this) {
        return function (evt) {
          _this.input_blur(evt);
        };
      }(this));
      this.search_field.on('keyup.chosen', function (_this) {
        return function (evt) {
          _this.keyup_checker(evt);
        };
      }(this));
      this.search_field.on('keydown.chosen', function (_this) {
        return function (evt) {
          _this.keydown_checker(evt);
        };
      }(this));
      this.search_field.on('focus.chosen', function (_this) {
        return function (evt) {
          _this.input_focus(evt);
        };
      }(this));
      this.search_field.on('cut.chosen', function (_this) {
        return function (evt) {
          _this.clipboard_event_checker(evt);
        };
      }(this));
      this.search_field.on('paste.chosen', function (_this) {
        return function (evt) {
          _this.clipboard_event_checker(evt);
        };
      }(this));

      if (this.is_multiple) {
        return this.search_choices.on('click.chosen', function (_this) {
          return function (evt) {
            _this.choices_click(evt);
          };
        }(this));
      } else {
        return this.container.on('click.chosen', function (evt) {
          evt.preventDefault();
        });
      }
    };

    Chosen.prototype.destroy = function () {
      $(this.container[0].ownerDocument).off('click.chosen', this.click_test_action);

      if (this.form_field_label.length > 0) {
        this.form_field_label.off('click.chosen');
      }

      if (this.search_field[0].tabIndex) {
        this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
      }

      this.container.remove();
      this.form_field_jq.removeData('chosen');
      return this.form_field_jq.show();
    };

    Chosen.prototype.search_field_disabled = function () {
      this.is_disabled = this.form_field.disabled || this.form_field_jq.parents('fieldset').is(':disabled');
      this.container.toggleClass('chosen-disabled', this.is_disabled);
      this.search_field[0].disabled = this.is_disabled;

      if (!this.is_multiple) {
        this.selected_item.off('focus.chosen', this.activate_field);
      }

      if (this.is_disabled) {
        return this.close_field();
      } else if (!this.is_multiple) {
        return this.selected_item.on('focus.chosen', this.activate_field);
      }
    };

    Chosen.prototype.container_mousedown = function (evt) {
      var ref;

      if (this.is_disabled) {
        return;
      }

      if (evt && ((ref = evt.type) === 'mousedown' || ref === 'touchstart') && !this.results_showing) {
        evt.preventDefault();
      }

      if (!(evt != null && $(evt.target).hasClass("search-choice-close"))) {
        if (!this.active_field) {
          if (this.is_multiple) {
            this.search_field.val("");
          }

          $(this.container[0].ownerDocument).on('click.chosen', this.click_test_action);
          this.results_show();
        } else if (!this.is_multiple && evt && ($(evt.target)[0] === this.selected_item[0] || $(evt.target).parents("a.chosen-single").length)) {
          evt.preventDefault();
          this.results_toggle();
        }

        return this.activate_field();
      }
    };

    Chosen.prototype.container_mouseup = function (evt) {
      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
        return this.results_reset(evt);
      }
    };

    Chosen.prototype.search_results_mousewheel = function (evt) {
      var delta;

      if (evt.originalEvent) {
        delta = evt.originalEvent.deltaY || -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
      }

      if (delta != null) {
        evt.preventDefault();

        if (evt.type === 'DOMMouseScroll') {
          delta = delta * 40;
        }

        return this.search_results.scrollTop(delta + this.search_results.scrollTop());
      }
    };

    Chosen.prototype.blur_test = function (evt) {
      if (!this.active_field && this.container.hasClass("chosen-container-active")) {
        return this.close_field();
      }
    };

    Chosen.prototype.close_field = function () {
      $(this.container[0].ownerDocument).off("click.chosen", this.click_test_action);
      this.active_field = false;
      this.results_hide();
      this.container.removeClass("chosen-container-active");
      this.clear_backstroke();
      this.show_search_field_default();
      this.search_field_scale();
      return this.search_field.blur();
    };

    Chosen.prototype.activate_field = function () {
      if (this.is_disabled) {
        return;
      }

      this.container.addClass("chosen-container-active");
      this.active_field = true;
      this.search_field.val(this.search_field.val());
      return this.search_field.focus();
    };

    Chosen.prototype.test_active_click = function (evt) {
      var active_container;
      active_container = $(evt.target).closest('.chosen-container');

      if (active_container.length && this.container[0] === active_container[0]) {
        return this.active_field = true;
      } else {
        return this.close_field();
      }
    };

    Chosen.prototype.results_build = function () {
      this.parsing = true;
      this.selected_option_count = null;
      this.results_data = SelectParser.select_to_array(this.form_field);

      if (this.is_multiple) {
        this.search_choices.find("li.search-choice").remove();
      } else {
        this.single_set_selected_text();

        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
          this.search_field[0].readOnly = true;
          this.container.addClass("chosen-container-single-nosearch");
        } else {
          this.search_field[0].readOnly = false;
          this.container.removeClass("chosen-container-single-nosearch");
        }
      }

      this.update_results_content(this.results_option_build({
        first: true
      }));
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      return this.parsing = false;
    };

    Chosen.prototype.result_do_highlight = function (el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;

      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.addClass("highlighted");
        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
        visible_top = this.search_results.scrollTop();
        visible_bottom = maxHeight + visible_top;
        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
        high_bottom = high_top + this.result_highlight.outerHeight();

        if (high_bottom >= visible_bottom) {
          return this.search_results.scrollTop(high_bottom - maxHeight > 0 ? high_bottom - maxHeight : 0);
        } else if (high_top < visible_top) {
          return this.search_results.scrollTop(high_top);
        }
      }
    };

    Chosen.prototype.result_clear_highlight = function () {
      if (this.result_highlight) {
        this.result_highlight.removeClass("highlighted");
      }

      return this.result_highlight = null;
    };

    Chosen.prototype.results_show = function () {
      if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
        this.form_field_jq.trigger("chosen:maxselected", {
          chosen: this
        });
        return false;
      }

      this.container.addClass("chosen-with-drop");
      this.results_showing = true;
      this.search_field.focus();
      this.search_field.val(this.get_search_field_value());
      this.winnow_results();
      return this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen: this
      });
    };

    Chosen.prototype.update_results_content = function (content) {
      return this.search_results.html(content);
    };

    Chosen.prototype.results_hide = function () {
      if (this.results_showing) {
        this.result_clear_highlight();
        this.container.removeClass("chosen-with-drop");
        this.form_field_jq.trigger("chosen:hiding_dropdown", {
          chosen: this
        });
      }

      return this.results_showing = false;
    };

    Chosen.prototype.set_tab_index = function (el) {
      var ti;

      if (this.form_field.tabIndex) {
        ti = this.form_field.tabIndex;
        this.form_field.tabIndex = -1;
        return this.search_field[0].tabIndex = ti;
      }
    };

    Chosen.prototype.set_label_behavior = function () {
      this.form_field_label = this.form_field_jq.parents("label");

      if (!this.form_field_label.length && this.form_field.id.length) {
        this.form_field_label = $("label[for='" + this.form_field.id + "']");
      }

      if (this.form_field_label.length > 0) {
        return this.form_field_label.on('click.chosen', this.label_click_handler);
      }
    };

    Chosen.prototype.show_search_field_default = function () {
      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
        this.search_field.val(this.default_text);
        return this.search_field.addClass("default");
      } else {
        this.search_field.val("");
        return this.search_field.removeClass("default");
      }
    };

    Chosen.prototype.search_results_mouseup = function (evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();

      if (target.length) {
        this.result_highlight = target;
        this.result_select(evt);
        return this.search_field.focus();
      }
    };

    Chosen.prototype.search_results_mouseover = function (evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();

      if (target) {
        return this.result_do_highlight(target);
      }
    };

    Chosen.prototype.search_results_mouseout = function (evt) {
      if ($(evt.target).hasClass("active-result") || $(evt.target).parents('.active-result').first()) {
        return this.result_clear_highlight();
      }
    };

    Chosen.prototype.choice_build = function (item) {
      var choice, close_link;
      choice = $('<li />', {
        "class": "search-choice"
      }).html("<span>" + this.choice_label(item) + "</span>");

      if (item.disabled) {
        choice.addClass('search-choice-disabled');
      } else {
        close_link = $('<a />', {
          "class": 'search-choice-close',
          'data-option-array-index': item.array_index
        });
        close_link.on('click.chosen', function (_this) {
          return function (evt) {
            return _this.choice_destroy_link_click(evt);
          };
        }(this));
        choice.append(close_link);
      }

      return this.search_container.before(choice);
    };

    Chosen.prototype.choice_destroy_link_click = function (evt) {
      evt.preventDefault();
      evt.stopPropagation();

      if (!this.is_disabled) {
        return this.choice_destroy($(evt.target));
      }
    };

    Chosen.prototype.choice_destroy = function (link) {
      if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
        if (this.active_field) {
          this.search_field.focus();
        } else {
          this.show_search_field_default();
        }

        if (this.is_multiple && this.choices_count() > 0 && this.get_search_field_value().length < 1) {
          this.results_hide();
        }

        link.parents('li').first().remove();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.results_reset = function () {
      this.reset_single_select_options();
      this.form_field.options[0].selected = true;
      this.single_set_selected_text();
      this.show_search_field_default();
      this.results_reset_cleanup();
      this.trigger_form_field_change();

      if (this.active_field) {
        return this.results_hide();
      }
    };

    Chosen.prototype.results_reset_cleanup = function () {
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.selected_item.find("abbr").remove();
    };

    Chosen.prototype.result_select = function (evt) {
      var high, item;

      if (this.result_highlight) {
        high = this.result_highlight;
        this.result_clear_highlight();

        if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
          this.form_field_jq.trigger("chosen:maxselected", {
            chosen: this
          });
          return false;
        }

        if (this.is_multiple) {
          high.removeClass("active-result");
        } else {
          this.reset_single_select_options();
        }

        high.addClass("result-selected");
        item = this.results_data[high[0].getAttribute("data-option-array-index")];
        item.selected = true;
        this.form_field.options[item.options_index].selected = true;
        this.selected_option_count = null;

        if (this.is_multiple) {
          this.choice_build(item);
        } else {
          this.single_set_selected_text(this.choice_label(item));
        }

        if (this.is_multiple && (!this.hide_results_on_select || evt.metaKey || evt.ctrlKey)) {
          if (evt.metaKey || evt.ctrlKey) {
            this.winnow_results({
              skip_highlight: true
            });
          } else {
            this.search_field.val("");
            this.winnow_results();
          }
        } else {
          this.results_hide();
          this.show_search_field_default();
        }

        if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
          this.trigger_form_field_change({
            selected: this.form_field.options[item.options_index].value
          });
        }

        this.current_selectedIndex = this.form_field.selectedIndex;
        evt.preventDefault();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.single_set_selected_text = function (text) {
      if (text == null) {
        text = this.default_text;
      }

      if (text === this.default_text) {
        this.selected_item.addClass("chosen-default");
      } else {
        this.single_deselect_control_build();
        this.selected_item.removeClass("chosen-default");
      }

      return this.selected_item.find("span").html(text);
    };

    Chosen.prototype.result_deselect = function (pos) {
      var result_data;
      result_data = this.results_data[pos];

      if (!this.form_field.options[result_data.options_index].disabled) {
        result_data.selected = false;
        this.form_field.options[result_data.options_index].selected = false;
        this.selected_option_count = null;
        this.result_clear_highlight();

        if (this.results_showing) {
          this.winnow_results();
        }

        this.trigger_form_field_change({
          deselected: this.form_field.options[result_data.options_index].value
        });
        this.search_field_scale();
        return true;
      } else {
        return false;
      }
    };

    Chosen.prototype.single_deselect_control_build = function () {
      if (!this.allow_single_deselect) {
        return;
      }

      if (!this.selected_item.find("abbr").length) {
        this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
      }

      return this.selected_item.addClass("chosen-single-with-deselect");
    };

    Chosen.prototype.get_search_field_value = function () {
      return this.search_field.val();
    };

    Chosen.prototype.get_search_text = function () {
      return $.trim(this.get_search_field_value());
    };

    Chosen.prototype.escape_html = function (text) {
      return $('<div/>').text(text).html();
    };

    Chosen.prototype.winnow_results_set_highlight = function () {
      var do_high, selected_results;
      selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
      do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();

      if (do_high != null) {
        return this.result_do_highlight(do_high);
      }
    };

    Chosen.prototype.no_results = function (terms) {
      var no_results_html;
      no_results_html = this.get_no_results_html(terms);
      this.search_results.append(no_results_html);
      return this.form_field_jq.trigger("chosen:no_results", {
        chosen: this
      });
    };

    Chosen.prototype.no_results_clear = function () {
      return this.search_results.find(".no-results").remove();
    };

    Chosen.prototype.keydown_arrow = function () {
      var next_sib;

      if (this.results_showing && this.result_highlight) {
        next_sib = this.result_highlight.nextAll("li.active-result").first();

        if (next_sib) {
          return this.result_do_highlight(next_sib);
        }
      } else {
        return this.results_show();
      }
    };

    Chosen.prototype.keyup_arrow = function () {
      var prev_sibs;

      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = this.result_highlight.prevAll("li.active-result");

        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs.first());
        } else {
          if (this.choices_count() > 0) {
            this.results_hide();
          }

          return this.result_clear_highlight();
        }
      }
    };

    Chosen.prototype.keydown_backstroke = function () {
      var next_available_destroy;

      if (this.pending_backstroke) {
        this.choice_destroy(this.pending_backstroke.find("a").first());
        return this.clear_backstroke();
      } else {
        next_available_destroy = this.search_container.siblings("li.search-choice").last();

        if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
          this.pending_backstroke = next_available_destroy;

          if (this.single_backstroke_delete) {
            return this.keydown_backstroke();
          } else {
            return this.pending_backstroke.addClass("search-choice-focus");
          }
        }
      }
    };

    Chosen.prototype.clear_backstroke = function () {
      if (this.pending_backstroke) {
        this.pending_backstroke.removeClass("search-choice-focus");
      }

      return this.pending_backstroke = null;
    };

    Chosen.prototype.search_field_scale = function () {
      var div, i, len, style, style_block, styles, width;

      if (!this.is_multiple) {
        return;
      }

      style_block = {
        position: 'absolute',
        left: '-1000px',
        top: '-1000px',
        display: 'none',
        whiteSpace: 'pre'
      };
      styles = ['fontSize', 'fontStyle', 'fontWeight', 'fontFamily', 'lineHeight', 'textTransform', 'letterSpacing'];

      for (i = 0, len = styles.length; i < len; i++) {
        style = styles[i];
        style_block[style] = this.search_field.css(style);
      }

      div = $('<div />').css(style_block);
      div.text(this.get_search_field_value());
      $('body').append(div);
      width = div.width() + 25;
      div.remove();

      if (this.container.is(':visible')) {
        width = Math.min(this.container.outerWidth() - 10, width);
      }

      return this.search_field.width(width);
    };

    Chosen.prototype.trigger_form_field_change = function (extra) {
      this.form_field_jq.trigger("input", extra);
      return this.form_field_jq.trigger("change", extra);
    };

    return Chosen;
  }(AbstractChosen);
}).call(void 0);
!function (t, e, i) {
  !function () {
    var s,
        a,
        n,
        h = "2.2.3",
        o = "datepicker",
        r = ".datepicker-here",
        c = !1,
        d = '<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>',
        l = {
      classes: "",
      inline: !1,
      language: "ru",
      startDate: new Date(),
      firstDay: "",
      weekends: [6, 0],
      dateFormat: "",
      altField: "",
      altFieldDateFormat: "@",
      toggleSelected: !0,
      keyboardNav: !0,
      position: "bottom left",
      offset: 12,
      view: "days",
      minView: "days",
      showOtherMonths: !0,
      selectOtherMonths: !0,
      moveToOtherMonthsOnSelect: !0,
      showOtherYears: !0,
      selectOtherYears: !0,
      moveToOtherYearsOnSelect: !0,
      minDate: "",
      maxDate: "",
      disableNavWhenOutOfRange: !0,
      multipleDates: !1,
      multipleDatesSeparator: ",",
      range: !1,
      todayButton: !1,
      clearButton: !1,
      showEvent: "focus",
      autoClose: !1,
      monthsField: "monthsShort",
      prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
      nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
      navTitles: {
        days: "MM, <i>yyyy</i>",
        months: "yyyy",
        years: "yyyy1 - yyyy2"
      },
      timepicker: !1,
      onlyTimepicker: !1,
      dateTimeSeparator: " ",
      timeFormat: "",
      minHours: 0,
      maxHours: 24,
      minMinutes: 0,
      maxMinutes: 59,
      hoursStep: 1,
      minutesStep: 1,
      onSelect: "",
      onShow: "",
      onHide: "",
      onChangeMonth: "",
      onChangeYear: "",
      onChangeDecade: "",
      onChangeView: "",
      onRenderCell: ""
    },
        u = {
      ctrlRight: [17, 39],
      ctrlUp: [17, 38],
      ctrlLeft: [17, 37],
      ctrlDown: [17, 40],
      shiftRight: [16, 39],
      shiftUp: [16, 38],
      shiftLeft: [16, 37],
      shiftDown: [16, 40],
      altUp: [18, 38],
      altRight: [18, 39],
      altLeft: [18, 37],
      altDown: [18, 40],
      ctrlShiftUp: [16, 17, 38]
    },
        m = function m(t, a) {
      this.el = t, this.$el = e(t), this.opts = e.extend(!0, {}, l, a, this.$el.data()), s == i && (s = e("body")), this.opts.startDate || (this.opts.startDate = new Date()), "INPUT" == this.el.nodeName && (this.elIsInput = !0), this.opts.altField && (this.$altField = "string" == typeof this.opts.altField ? e(this.opts.altField) : this.opts.altField), this.inited = !1, this.visible = !1, this.silent = !1, this.currentDate = this.opts.startDate, this.currentView = this.opts.view, this._createShortCuts(), this.selectedDates = [], this.views = {}, this.keys = [], this.minRange = "", this.maxRange = "", this._prevOnSelectValue = "", this.init();
    };

    n = m, n.prototype = {
      VERSION: h,
      viewIndexes: ["days", "months", "years"],
      init: function init() {
        c || this.opts.inline || !this.elIsInput || this._buildDatepickersContainer(), this._buildBaseHtml(), this._defineLocale(this.opts.language), this._syncWithMinMaxDates(), this.elIsInput && (this.opts.inline || (this._setPositionClasses(this.opts.position), this._bindEvents()), this.opts.keyboardNav && !this.opts.onlyTimepicker && this._bindKeyboardEvents(), this.$datepicker.on("mousedown", this._onMouseDownDatepicker.bind(this)), this.$datepicker.on("mouseup", this._onMouseUpDatepicker.bind(this))), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.timepicker && (this.timepicker = new e.fn.datepicker.Timepicker(this, this.opts), this._bindTimepickerEvents()), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.views[this.currentView] = new e.fn.datepicker.Body(this, this.currentView, this.opts), this.views[this.currentView].show(), this.nav = new e.fn.datepicker.Navigation(this, this.opts), this.view = this.currentView, this.$el.on("clickCell.adp", this._onClickCell.bind(this)), this.$datepicker.on("mouseenter", ".datepicker--cell", this._onMouseEnterCell.bind(this)), this.$datepicker.on("mouseleave", ".datepicker--cell", this._onMouseLeaveCell.bind(this)), this.inited = !0;
      },
      _createShortCuts: function _createShortCuts() {
        this.minDate = this.opts.minDate ? this.opts.minDate : new Date(-86399999136e5), this.maxDate = this.opts.maxDate ? this.opts.maxDate : new Date(86399999136e5);
      },
      _bindEvents: function _bindEvents() {
        this.$el.on(this.opts.showEvent + ".adp", this._onShowEvent.bind(this)), this.$el.on("mouseup.adp", this._onMouseUpEl.bind(this)), this.$el.on("blur.adp", this._onBlur.bind(this)), this.$el.on("keyup.adp", this._onKeyUpGeneral.bind(this)), e(t).on("resize.adp", this._onResize.bind(this)), e("body").on("mouseup.adp", this._onMouseUpBody.bind(this));
      },
      _bindKeyboardEvents: function _bindKeyboardEvents() {
        this.$el.on("keydown.adp", this._onKeyDown.bind(this)), this.$el.on("keyup.adp", this._onKeyUp.bind(this)), this.$el.on("hotKey.adp", this._onHotKey.bind(this));
      },
      _bindTimepickerEvents: function _bindTimepickerEvents() {
        this.$el.on("timeChange.adp", this._onTimeChange.bind(this));
      },
      isWeekend: function isWeekend(t) {
        return -1 !== this.opts.weekends.indexOf(t);
      },
      _defineLocale: function _defineLocale(t) {
        "string" == typeof t ? (this.loc = e.fn.datepicker.language[t], this.loc || (console.warn("Can't find language \"" + t + '" in Datepicker.language, will use "ru" instead'), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru)), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, e.fn.datepicker.language[t])) : this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, t), this.opts.dateFormat && (this.loc.dateFormat = this.opts.dateFormat), this.opts.timeFormat && (this.loc.timeFormat = this.opts.timeFormat), "" !== this.opts.firstDay && (this.loc.firstDay = this.opts.firstDay), this.opts.timepicker && (this.loc.dateFormat = [this.loc.dateFormat, this.loc.timeFormat].join(this.opts.dateTimeSeparator)), this.opts.onlyTimepicker && (this.loc.dateFormat = this.loc.timeFormat);
        var i = this._getWordBoundaryRegExp;
        (this.loc.timeFormat.match(i("aa")) || this.loc.timeFormat.match(i("AA"))) && (this.ampm = !0);
      },
      _buildDatepickersContainer: function _buildDatepickersContainer() {
        c = !0, s.append('<div class="datepickers-container" id="datepickers-container"></div>'), a = e("#datepickers-container");
      },
      _buildBaseHtml: function _buildBaseHtml() {
        var t,
            i = e('<div class="datepicker-inline">');
        t = "INPUT" == this.el.nodeName ? this.opts.inline ? i.insertAfter(this.$el) : a : i.appendTo(this.$el), this.$datepicker = e(d).appendTo(t), this.$content = e(".datepicker--content", this.$datepicker), this.$nav = e(".datepicker--nav", this.$datepicker);
      },
      _triggerOnChange: function _triggerOnChange() {
        if (!this.selectedDates.length) {
          if ("" === this._prevOnSelectValue) return;
          return this._prevOnSelectValue = "", this.opts.onSelect("", "", this);
        }

        var t,
            e = this.selectedDates,
            i = n.getParsedDate(e[0]),
            s = this,
            a = new Date(i.year, i.month, i.date, i.hours, i.minutes);
        t = e.map(function (t) {
          return s.formatDate(s.loc.dateFormat, t);
        }).join(this.opts.multipleDatesSeparator), (this.opts.multipleDates || this.opts.range) && (a = e.map(function (t) {
          var e = n.getParsedDate(t);
          return new Date(e.year, e.month, e.date, e.hours, e.minutes);
        })), this._prevOnSelectValue = t, this.opts.onSelect(t, a, this);
      },
      next: function next() {
        var t = this.parsedDate,
            e = this.opts;

        switch (this.view) {
          case "days":
            this.date = new Date(t.year, t.month + 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
            break;

          case "months":
            this.date = new Date(t.year + 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
            break;

          case "years":
            this.date = new Date(t.year + 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade);
        }
      },
      prev: function prev() {
        var t = this.parsedDate,
            e = this.opts;

        switch (this.view) {
          case "days":
            this.date = new Date(t.year, t.month - 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
            break;

          case "months":
            this.date = new Date(t.year - 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
            break;

          case "years":
            this.date = new Date(t.year - 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade);
        }
      },
      formatDate: function formatDate(t, e) {
        e = e || this.date;
        var i,
            s = t,
            a = this._getWordBoundaryRegExp,
            h = this.loc,
            o = n.getLeadingZeroNum,
            r = n.getDecade(e),
            c = n.getParsedDate(e),
            d = c.fullHours,
            l = c.hours,
            u = t.match(a("aa")) || t.match(a("AA")),
            m = "am",
            p = this._replacer;

        switch (this.opts.timepicker && this.timepicker && u && (i = this.timepicker._getValidHoursFromDate(e, u), d = o(i.hours), l = i.hours, m = i.dayPeriod), !0) {
          case /@/.test(s):
            s = s.replace(/@/, e.getTime());

          case /aa/.test(s):
            s = p(s, a("aa"), m);

          case /AA/.test(s):
            s = p(s, a("AA"), m.toUpperCase());

          case /dd/.test(s):
            s = p(s, a("dd"), c.fullDate);

          case /d/.test(s):
            s = p(s, a("d"), c.date);

          case /DD/.test(s):
            s = p(s, a("DD"), h.days[c.day]);

          case /D/.test(s):
            s = p(s, a("D"), h.daysShort[c.day]);

          case /mm/.test(s):
            s = p(s, a("mm"), c.fullMonth);

          case /m/.test(s):
            s = p(s, a("m"), c.month + 1);

          case /MM/.test(s):
            s = p(s, a("MM"), this.loc.months[c.month]);

          case /M/.test(s):
            s = p(s, a("M"), h.monthsShort[c.month]);

          case /ii/.test(s):
            s = p(s, a("ii"), c.fullMinutes);

          case /i/.test(s):
            s = p(s, a("i"), c.minutes);

          case /hh/.test(s):
            s = p(s, a("hh"), d);

          case /h/.test(s):
            s = p(s, a("h"), l);

          case /yyyy/.test(s):
            s = p(s, a("yyyy"), c.year);

          case /yyyy1/.test(s):
            s = p(s, a("yyyy1"), r[0]);

          case /yyyy2/.test(s):
            s = p(s, a("yyyy2"), r[1]);

          case /yy/.test(s):
            s = p(s, a("yy"), c.year.toString().slice(-2));
        }

        return s;
      },
      _replacer: function _replacer(t, e, i) {
        return t.replace(e, function (t, e, s, a) {
          return e + i + a;
        });
      },
      _getWordBoundaryRegExp: function _getWordBoundaryRegExp(t) {
        var e = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
        return new RegExp("(^|>|" + e + ")(" + t + ")($|<|" + e + ")", "g");
      },
      selectDate: function selectDate(t) {
        var e = this,
            i = e.opts,
            s = e.parsedDate,
            a = e.selectedDates,
            h = a.length,
            o = "";
        if (Array.isArray(t)) return void t.forEach(function (t) {
          e.selectDate(t);
        });

        if (t instanceof Date) {
          if (this.lastSelectedDate = t, this.timepicker && this.timepicker._setTime(t), e._trigger("selectDate", t), this.timepicker && (t.setHours(this.timepicker.hours), t.setMinutes(this.timepicker.minutes)), "days" == e.view && t.getMonth() != s.month && i.moveToOtherMonthsOnSelect && (o = new Date(t.getFullYear(), t.getMonth(), 1)), "years" == e.view && t.getFullYear() != s.year && i.moveToOtherYearsOnSelect && (o = new Date(t.getFullYear(), 0, 1)), o && (e.silent = !0, e.date = o, e.silent = !1, e.nav._render()), i.multipleDates && !i.range) {
            if (h === i.multipleDates) return;
            e._isSelected(t) || e.selectedDates.push(t);
          } else i.range ? 2 == h ? (e.selectedDates = [t], e.minRange = t, e.maxRange = "") : 1 == h ? (e.selectedDates.push(t), e.maxRange ? e.minRange = t : e.maxRange = t, n.bigger(e.maxRange, e.minRange) && (e.maxRange = e.minRange, e.minRange = t), e.selectedDates = [e.minRange, e.maxRange]) : (e.selectedDates = [t], e.minRange = t) : e.selectedDates = [t];

          e._setInputValue(), i.onSelect && e._triggerOnChange(), i.autoClose && !this.timepickerIsActive && (i.multipleDates || i.range ? i.range && 2 == e.selectedDates.length && e.hide() : e.hide()), e.views[this.currentView]._render();
        }
      },
      removeDate: function removeDate(t) {
        var e = this.selectedDates,
            i = this;
        if (t instanceof Date) return e.some(function (s, a) {
          return n.isSame(s, t) ? (e.splice(a, 1), i.selectedDates.length ? i.lastSelectedDate = i.selectedDates[i.selectedDates.length - 1] : (i.minRange = "", i.maxRange = "", i.lastSelectedDate = ""), i.views[i.currentView]._render(), i._setInputValue(), i.opts.onSelect && i._triggerOnChange(), !0) : void 0;
        });
      },
      today: function today() {
        this.silent = !0, this.view = this.opts.minView, this.silent = !1, this.date = new Date(), this.opts.todayButton instanceof Date && this.selectDate(this.opts.todayButton);
      },
      clear: function clear() {
        this.selectedDates = [], this.minRange = "", this.maxRange = "", this.views[this.currentView]._render(), this._setInputValue(), this.opts.onSelect && this._triggerOnChange();
      },
      update: function update(t, i) {
        var s = arguments.length,
            a = this.lastSelectedDate;
        return 2 == s ? this.opts[t] = i : 1 == s && "object" == _typeof(t) && (this.opts = e.extend(!0, this.opts, t)), this._createShortCuts(), this._syncWithMinMaxDates(), this._defineLocale(this.opts.language), this.nav._addButtonsIfNeed(), this.opts.onlyTimepicker || this.nav._render(), this.views[this.currentView]._render(), this.elIsInput && !this.opts.inline && (this._setPositionClasses(this.opts.position), this.visible && this.setPosition(this.opts.position)), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.opts.timepicker && (a && this.timepicker._handleDate(a), this.timepicker._updateRanges(), this.timepicker._updateCurrentTime(), a && (a.setHours(this.timepicker.hours), a.setMinutes(this.timepicker.minutes))), this._setInputValue(), this;
      },
      _syncWithMinMaxDates: function _syncWithMinMaxDates() {
        var t = this.date.getTime();
        this.silent = !0, this.minTime > t && (this.date = this.minDate), this.maxTime < t && (this.date = this.maxDate), this.silent = !1;
      },
      _isSelected: function _isSelected(t, e) {
        var i = !1;
        return this.selectedDates.some(function (s) {
          return n.isSame(s, t, e) ? (i = s, !0) : void 0;
        }), i;
      },
      _setInputValue: function _setInputValue() {
        var t,
            e = this,
            i = e.opts,
            s = e.loc.dateFormat,
            a = i.altFieldDateFormat,
            n = e.selectedDates.map(function (t) {
          return e.formatDate(s, t);
        });
        i.altField && e.$altField.length && (t = this.selectedDates.map(function (t) {
          return e.formatDate(a, t);
        }), t = t.join(this.opts.multipleDatesSeparator), this.$altField.val(t)), n = n.join(this.opts.multipleDatesSeparator), this.$el.val(n);
      },
      _isInRange: function _isInRange(t, e) {
        var i = t.getTime(),
            s = n.getParsedDate(t),
            a = n.getParsedDate(this.minDate),
            h = n.getParsedDate(this.maxDate),
            o = new Date(s.year, s.month, a.date).getTime(),
            r = new Date(s.year, s.month, h.date).getTime(),
            c = {
          day: i >= this.minTime && i <= this.maxTime,
          month: o >= this.minTime && r <= this.maxTime,
          year: s.year >= a.year && s.year <= h.year
        };
        return e ? c[e] : c.day;
      },
      _getDimensions: function _getDimensions(t) {
        var e = t.offset();
        return {
          width: t.outerWidth(),
          height: t.outerHeight(),
          left: e.left,
          top: e.top
        };
      },
      _getDateFromCell: function _getDateFromCell(t) {
        var e = this.parsedDate,
            s = t.data("year") || e.year,
            a = t.data("month") == i ? e.month : t.data("month"),
            n = t.data("date") || 1;
        return new Date(s, a, n);
      },
      _setPositionClasses: function _setPositionClasses(t) {
        t = t.split(" ");
        var e = t[0],
            i = t[1],
            s = "datepicker -" + e + "-" + i + "- -from-" + e + "-";
        this.visible && (s += " active"), this.$datepicker.removeAttr("class").addClass(s);
      },
      setPosition: function setPosition(t) {
        t = t || this.opts.position;

        var e,
            i,
            s = this._getDimensions(this.$el),
            a = this._getDimensions(this.$datepicker),
            n = t.split(" "),
            h = this.opts.offset,
            o = n[0],
            r = n[1];

        switch (o) {
          case "top":
            e = s.top - a.height - h;
            break;

          case "right":
            i = s.left + s.width + h;
            break;

          case "bottom":
            e = s.top + s.height + h;
            break;

          case "left":
            i = s.left - a.width - h;
        }

        switch (r) {
          case "top":
            e = s.top;
            break;

          case "right":
            i = s.left + s.width - a.width;
            break;

          case "bottom":
            e = s.top + s.height - a.height;
            break;

          case "left":
            i = s.left;
            break;

          case "center":
            /left|right/.test(o) ? e = s.top + s.height / 2 - a.height / 2 : i = s.left + s.width / 2 - a.width / 2;
        }

        this.$datepicker.css({
          left: i,
          top: e
        });
      },
      show: function show() {
        var t = this.opts.onShow;
        this.setPosition(this.opts.position), this.$datepicker.addClass("active"), this.visible = !0, t && this._bindVisionEvents(t);
      },
      hide: function hide() {
        var t = this.opts.onHide;
        this.$datepicker.removeClass("active").css({
          left: "-100000px"
        }), this.focused = "", this.keys = [], this.inFocus = !1, this.visible = !1, this.$el.blur(), t && this._bindVisionEvents(t);
      },
      down: function down(t) {
        this._changeView(t, "down");
      },
      up: function up(t) {
        this._changeView(t, "up");
      },
      _bindVisionEvents: function _bindVisionEvents(t) {
        this.$datepicker.off("transitionend.dp"), t(this, !1), this.$datepicker.one("transitionend.dp", t.bind(this, this, !0));
      },
      _changeView: function _changeView(t, e) {
        t = t || this.focused || this.date;
        var i = "up" == e ? this.viewIndex + 1 : this.viewIndex - 1;
        i > 2 && (i = 2), 0 > i && (i = 0), this.silent = !0, this.date = new Date(t.getFullYear(), t.getMonth(), 1), this.silent = !1, this.view = this.viewIndexes[i];
      },
      _handleHotKey: function _handleHotKey(t) {
        var e,
            i,
            s,
            a = n.getParsedDate(this._getFocusedDate()),
            h = this.opts,
            o = !1,
            r = !1,
            c = !1,
            d = a.year,
            l = a.month,
            u = a.date;

        switch (t) {
          case "ctrlRight":
          case "ctrlUp":
            l += 1, o = !0;
            break;

          case "ctrlLeft":
          case "ctrlDown":
            l -= 1, o = !0;
            break;

          case "shiftRight":
          case "shiftUp":
            r = !0, d += 1;
            break;

          case "shiftLeft":
          case "shiftDown":
            r = !0, d -= 1;
            break;

          case "altRight":
          case "altUp":
            c = !0, d += 10;
            break;

          case "altLeft":
          case "altDown":
            c = !0, d -= 10;
            break;

          case "ctrlShiftUp":
            this.up();
        }

        s = n.getDaysCount(new Date(d, l)), i = new Date(d, l, u), u > s && (u = s), i.getTime() < this.minTime ? i = this.minDate : i.getTime() > this.maxTime && (i = this.maxDate), this.focused = i, e = n.getParsedDate(i), o && h.onChangeMonth && h.onChangeMonth(e.month, e.year), r && h.onChangeYear && h.onChangeYear(e.year), c && h.onChangeDecade && h.onChangeDecade(this.curDecade);
      },
      _registerKey: function _registerKey(t) {
        var e = this.keys.some(function (e) {
          return e == t;
        });
        e || this.keys.push(t);
      },
      _unRegisterKey: function _unRegisterKey(t) {
        var e = this.keys.indexOf(t);
        this.keys.splice(e, 1);
      },
      _isHotKeyPressed: function _isHotKeyPressed() {
        var t,
            e = !1,
            i = this,
            s = this.keys.sort();

        for (var a in u) {
          t = u[a], s.length == t.length && t.every(function (t, e) {
            return t == s[e];
          }) && (i._trigger("hotKey", a), e = !0);
        }

        return e;
      },
      _trigger: function _trigger(t, e) {
        this.$el.trigger(t, e);
      },
      _focusNextCell: function _focusNextCell(t, e) {
        e = e || this.cellType;
        var i = n.getParsedDate(this._getFocusedDate()),
            s = i.year,
            a = i.month,
            h = i.date;

        if (!this._isHotKeyPressed()) {
          switch (t) {
            case 37:
              "day" == e ? h -= 1 : "", "month" == e ? a -= 1 : "", "year" == e ? s -= 1 : "";
              break;

            case 38:
              "day" == e ? h -= 7 : "", "month" == e ? a -= 3 : "", "year" == e ? s -= 4 : "";
              break;

            case 39:
              "day" == e ? h += 1 : "", "month" == e ? a += 1 : "", "year" == e ? s += 1 : "";
              break;

            case 40:
              "day" == e ? h += 7 : "", "month" == e ? a += 3 : "", "year" == e ? s += 4 : "";
          }

          var o = new Date(s, a, h);
          o.getTime() < this.minTime ? o = this.minDate : o.getTime() > this.maxTime && (o = this.maxDate), this.focused = o;
        }
      },
      _getFocusedDate: function _getFocusedDate() {
        var t = this.focused || this.selectedDates[this.selectedDates.length - 1],
            e = this.parsedDate;
        if (!t) switch (this.view) {
          case "days":
            t = new Date(e.year, e.month, new Date().getDate());
            break;

          case "months":
            t = new Date(e.year, e.month, 1);
            break;

          case "years":
            t = new Date(e.year, 0, 1);
        }
        return t;
      },
      _getCell: function _getCell(t, i) {
        i = i || this.cellType;
        var s,
            a = n.getParsedDate(t),
            h = '.datepicker--cell[data-year="' + a.year + '"]';

        switch (i) {
          case "month":
            h = '[data-month="' + a.month + '"]';
            break;

          case "day":
            h += '[data-month="' + a.month + '"][data-date="' + a.date + '"]';
        }

        return s = this.views[this.currentView].$el.find(h), s.length ? s : e("");
      },
      destroy: function destroy() {
        var t = this;
        t.$el.off(".adp").data("datepicker", ""), t.selectedDates = [], t.focused = "", t.views = {}, t.keys = [], t.minRange = "", t.maxRange = "", t.opts.inline || !t.elIsInput ? t.$datepicker.closest(".datepicker-inline").remove() : t.$datepicker.remove();
      },
      _handleAlreadySelectedDates: function _handleAlreadySelectedDates(t, e) {
        this.opts.range ? this.opts.toggleSelected ? this.removeDate(e) : 2 != this.selectedDates.length && this._trigger("clickCell", e) : this.opts.toggleSelected && this.removeDate(e), this.opts.toggleSelected || (this.lastSelectedDate = t, this.opts.timepicker && (this.timepicker._setTime(t), this.timepicker.update()));
      },
      _onShowEvent: function _onShowEvent(t) {
        this.visible || this.show();
      },
      _onBlur: function _onBlur() {
        !this.inFocus && this.visible && this.hide();
      },
      _onMouseDownDatepicker: function _onMouseDownDatepicker(t) {
        this.inFocus = !0;
      },
      _onMouseUpDatepicker: function _onMouseUpDatepicker(t) {
        this.inFocus = !1, t.originalEvent.inFocus = !0, t.originalEvent.timepickerFocus || this.$el.focus();
      },
      _onKeyUpGeneral: function _onKeyUpGeneral(t) {
        var e = this.$el.val();
        e || this.clear();
      },
      _onResize: function _onResize() {
        this.visible && this.setPosition();
      },
      _onMouseUpBody: function _onMouseUpBody(t) {
        t.originalEvent.inFocus || this.visible && !this.inFocus && this.hide();
      },
      _onMouseUpEl: function _onMouseUpEl(t) {
        t.originalEvent.inFocus = !0, setTimeout(this._onKeyUpGeneral.bind(this), 4);
      },
      _onKeyDown: function _onKeyDown(t) {
        var e = t.which;

        if (this._registerKey(e), e >= 37 && 40 >= e && (t.preventDefault(), this._focusNextCell(e)), 13 == e && this.focused) {
          if (this._getCell(this.focused).hasClass("-disabled-")) return;
          if (this.view != this.opts.minView) this.down();else {
            var i = this._isSelected(this.focused, this.cellType);

            if (!i) return this.timepicker && (this.focused.setHours(this.timepicker.hours), this.focused.setMinutes(this.timepicker.minutes)), void this.selectDate(this.focused);

            this._handleAlreadySelectedDates(i, this.focused);
          }
        }

        27 == e && this.hide();
      },
      _onKeyUp: function _onKeyUp(t) {
        var e = t.which;

        this._unRegisterKey(e);
      },
      _onHotKey: function _onHotKey(t, e) {
        this._handleHotKey(e);
      },
      _onMouseEnterCell: function _onMouseEnterCell(t) {
        var i = e(t.target).closest(".datepicker--cell"),
            s = this._getDateFromCell(i);

        this.silent = !0, this.focused && (this.focused = ""), i.addClass("-focus-"), this.focused = s, this.silent = !1, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this.focused) && (this.maxRange = this.minRange, this.minRange = ""), this.views[this.currentView]._update());
      },
      _onMouseLeaveCell: function _onMouseLeaveCell(t) {
        var i = e(t.target).closest(".datepicker--cell");
        i.removeClass("-focus-"), this.silent = !0, this.focused = "", this.silent = !1;
      },
      _onTimeChange: function _onTimeChange(t, e, i) {
        var s = new Date(),
            a = this.selectedDates,
            n = !1;
        a.length && (n = !0, s = this.lastSelectedDate), s.setHours(e), s.setMinutes(i), n || this._getCell(s).hasClass("-disabled-") ? (this._setInputValue(), this.opts.onSelect && this._triggerOnChange()) : this.selectDate(s);
      },
      _onClickCell: function _onClickCell(t, e) {
        this.timepicker && (e.setHours(this.timepicker.hours), e.setMinutes(this.timepicker.minutes)), this.selectDate(e);
      },

      set focused(t) {
        if (!t && this.focused) {
          var e = this._getCell(this.focused);

          e.length && e.removeClass("-focus-");
        }

        this._focused = t, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this._focused) && (this.maxRange = this.minRange, this.minRange = "")), this.silent || (this.date = t);
      },

      get focused() {
        return this._focused;
      },

      get parsedDate() {
        return n.getParsedDate(this.date);
      },

      set date(t) {
        return t instanceof Date ? (this.currentDate = t, this.inited && !this.silent && (this.views[this.view]._render(), this.nav._render(), this.visible && this.elIsInput && this.setPosition()), t) : void 0;
      },

      get date() {
        return this.currentDate;
      },

      set view(t) {
        return this.viewIndex = this.viewIndexes.indexOf(t), this.viewIndex < 0 ? void 0 : (this.prevView = this.currentView, this.currentView = t, this.inited && (this.views[t] ? this.views[t]._render() : this.views[t] = new e.fn.datepicker.Body(this, t, this.opts), this.views[this.prevView].hide(), this.views[t].show(), this.nav._render(), this.opts.onChangeView && this.opts.onChangeView(t), this.elIsInput && this.visible && this.setPosition()), t);
      },

      get view() {
        return this.currentView;
      },

      get cellType() {
        return this.view.substring(0, this.view.length - 1);
      },

      get minTime() {
        var t = n.getParsedDate(this.minDate);
        return new Date(t.year, t.month, t.date).getTime();
      },

      get maxTime() {
        var t = n.getParsedDate(this.maxDate);
        return new Date(t.year, t.month, t.date).getTime();
      },

      get curDecade() {
        return n.getDecade(this.date);
      }

    }, n.getDaysCount = function (t) {
      return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
    }, n.getParsedDate = function (t) {
      return {
        year: t.getFullYear(),
        month: t.getMonth(),
        fullMonth: t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
        date: t.getDate(),
        fullDate: t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
        day: t.getDay(),
        hours: t.getHours(),
        fullHours: t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
        minutes: t.getMinutes(),
        fullMinutes: t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()
      };
    }, n.getDecade = function (t) {
      var e = 10 * Math.floor(t.getFullYear() / 10);
      return [e, e + 9];
    }, n.template = function (t, e) {
      return t.replace(/#\{([\w]+)\}/g, function (t, i) {
        return e[i] || 0 === e[i] ? e[i] : void 0;
      });
    }, n.isSame = function (t, e, i) {
      if (!t || !e) return !1;
      var s = n.getParsedDate(t),
          a = n.getParsedDate(e),
          h = i ? i : "day",
          o = {
        day: s.date == a.date && s.month == a.month && s.year == a.year,
        month: s.month == a.month && s.year == a.year,
        year: s.year == a.year
      };
      return o[h];
    }, n.less = function (t, e, i) {
      return t && e ? e.getTime() < t.getTime() : !1;
    }, n.bigger = function (t, e, i) {
      return t && e ? e.getTime() > t.getTime() : !1;
    }, n.getLeadingZeroNum = function (t) {
      return parseInt(t) < 10 ? "0" + t : t;
    }, n.resetTime = function (t) {
      return "object" == _typeof(t) ? (t = n.getParsedDate(t), new Date(t.year, t.month, t.date)) : void 0;
    }, e.fn.datepicker = function (t) {
      return this.each(function () {
        if (e.data(this, o)) {
          var i = e.data(this, o);
          i.opts = e.extend(!0, i.opts, t), i.update();
        } else e.data(this, o, new m(this, t));
      });
    }, e.fn.datepicker.Constructor = m, e.fn.datepicker.language = {
      ru: {
        days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
        daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        today: "Сегодня",
        clear: "Очистить",
        dateFormat: "dd.mm.yyyy",
        timeFormat: "hh:ii",
        firstDay: 1
      }
    }, e(function () {
      e(r).datepicker();
    });
  }(), function () {
    var t = {
      days: '<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',
      months: '<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',
      years: '<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>'
    },
        s = e.fn.datepicker,
        a = s.Constructor;
    s.Body = function (t, i, s) {
      this.d = t, this.type = i, this.opts = s, this.$el = e(""), this.opts.onlyTimepicker || this.init();
    }, s.Body.prototype = {
      init: function init() {
        this._buildBaseHtml(), this._render(), this._bindEvents();
      },
      _bindEvents: function _bindEvents() {
        this.$el.on("click", ".datepicker--cell", e.proxy(this._onClickCell, this));
      },
      _buildBaseHtml: function _buildBaseHtml() {
        this.$el = e(t[this.type]).appendTo(this.d.$content), this.$names = e(".datepicker--days-names", this.$el), this.$cells = e(".datepicker--cells", this.$el);
      },
      _getDayNamesHtml: function _getDayNamesHtml(t, e, s, a) {
        return e = e != i ? e : t, s = s ? s : "", a = a != i ? a : 0, a > 7 ? s : 7 == e ? this._getDayNamesHtml(t, 0, s, ++a) : (s += '<div class="datepicker--day-name' + (this.d.isWeekend(e) ? " -weekend-" : "") + '">' + this.d.loc.daysMin[e] + "</div>", this._getDayNamesHtml(t, ++e, s, ++a));
      },
      _getCellContents: function _getCellContents(t, e) {
        var i = "datepicker--cell datepicker--cell-" + e,
            s = new Date(),
            n = this.d,
            h = a.resetTime(n.minRange),
            o = a.resetTime(n.maxRange),
            r = n.opts,
            c = a.getParsedDate(t),
            d = {},
            l = c.date;

        switch (e) {
          case "day":
            n.isWeekend(c.day) && (i += " -weekend-"), c.month != this.d.parsedDate.month && (i += " -other-month-", r.selectOtherMonths || (i += " -disabled-"), r.showOtherMonths || (l = ""));
            break;

          case "month":
            l = n.loc[n.opts.monthsField][c.month];
            break;

          case "year":
            var u = n.curDecade;
            l = c.year, (c.year < u[0] || c.year > u[1]) && (i += " -other-decade-", r.selectOtherYears || (i += " -disabled-"), r.showOtherYears || (l = ""));
        }

        return r.onRenderCell && (d = r.onRenderCell(t, e) || {}, l = d.html ? d.html : l, i += d.classes ? " " + d.classes : ""), r.range && (a.isSame(h, t, e) && (i += " -range-from-"), a.isSame(o, t, e) && (i += " -range-to-"), 1 == n.selectedDates.length && n.focused ? ((a.bigger(h, t) && a.less(n.focused, t) || a.less(o, t) && a.bigger(n.focused, t)) && (i += " -in-range-"), a.less(o, t) && a.isSame(n.focused, t) && (i += " -range-from-"), a.bigger(h, t) && a.isSame(n.focused, t) && (i += " -range-to-")) : 2 == n.selectedDates.length && a.bigger(h, t) && a.less(o, t) && (i += " -in-range-")), a.isSame(s, t, e) && (i += " -current-"), n.focused && a.isSame(t, n.focused, e) && (i += " -focus-"), n._isSelected(t, e) && (i += " -selected-"), (!n._isInRange(t, e) || d.disabled) && (i += " -disabled-"), {
          html: l,
          classes: i
        };
      },
      _getDaysHtml: function _getDaysHtml(t) {
        var e = a.getDaysCount(t),
            i = new Date(t.getFullYear(), t.getMonth(), 1).getDay(),
            s = new Date(t.getFullYear(), t.getMonth(), e).getDay(),
            n = i - this.d.loc.firstDay,
            h = 6 - s + this.d.loc.firstDay;
        n = 0 > n ? n + 7 : n, h = h > 6 ? h - 7 : h;

        for (var o, r, c = -n + 1, d = "", l = c, u = e + h; u >= l; l++) {
          r = t.getFullYear(), o = t.getMonth(), d += this._getDayHtml(new Date(r, o, l));
        }

        return d;
      },
      _getDayHtml: function _getDayHtml(t) {
        var e = this._getCellContents(t, "day");

        return '<div class="' + e.classes + '" data-date="' + t.getDate() + '" data-month="' + t.getMonth() + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>";
      },
      _getMonthsHtml: function _getMonthsHtml(t) {
        for (var e = "", i = a.getParsedDate(t), s = 0; 12 > s;) {
          e += this._getMonthHtml(new Date(i.year, s)), s++;
        }

        return e;
      },
      _getMonthHtml: function _getMonthHtml(t) {
        var e = this._getCellContents(t, "month");

        return '<div class="' + e.classes + '" data-month="' + t.getMonth() + '">' + e.html + "</div>";
      },
      _getYearsHtml: function _getYearsHtml(t) {
        var e = (a.getParsedDate(t), a.getDecade(t)),
            i = e[0] - 1,
            s = "",
            n = i;

        for (n; n <= e[1] + 1; n++) {
          s += this._getYearHtml(new Date(n, 0));
        }

        return s;
      },
      _getYearHtml: function _getYearHtml(t) {
        var e = this._getCellContents(t, "year");

        return '<div class="' + e.classes + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>";
      },
      _renderTypes: {
        days: function days() {
          var t = this._getDayNamesHtml(this.d.loc.firstDay),
              e = this._getDaysHtml(this.d.currentDate);

          this.$cells.html(e), this.$names.html(t);
        },
        months: function months() {
          var t = this._getMonthsHtml(this.d.currentDate);

          this.$cells.html(t);
        },
        years: function years() {
          var t = this._getYearsHtml(this.d.currentDate);

          this.$cells.html(t);
        }
      },
      _render: function _render() {
        this.opts.onlyTimepicker || this._renderTypes[this.type].bind(this)();
      },
      _update: function _update() {
        var t,
            i,
            s,
            a = e(".datepicker--cell", this.$cells),
            n = this;
        a.each(function (a, h) {
          i = e(this), s = n.d._getDateFromCell(e(this)), t = n._getCellContents(s, n.d.cellType), i.attr("class", t.classes);
        });
      },
      show: function show() {
        this.opts.onlyTimepicker || (this.$el.addClass("active"), this.acitve = !0);
      },
      hide: function hide() {
        this.$el.removeClass("active"), this.active = !1;
      },
      _handleClick: function _handleClick(t) {
        var e = t.data("date") || 1,
            i = t.data("month") || 0,
            s = t.data("year") || this.d.parsedDate.year,
            a = this.d;
        if (a.view != this.opts.minView) return void a.down(new Date(s, i, e));

        var n = new Date(s, i, e),
            h = this.d._isSelected(n, this.d.cellType);

        return h ? void a._handleAlreadySelectedDates.bind(a, h, n)() : void a._trigger("clickCell", n);
      },
      _onClickCell: function _onClickCell(t) {
        var i = e(t.target).closest(".datepicker--cell");
        i.hasClass("-disabled-") || this._handleClick.bind(this)(i);
      }
    };
  }(), function () {
    var t = '<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',
        i = '<div class="datepicker--buttons"></div>',
        s = '<span class="datepicker--button" data-action="#{action}">#{label}</span>',
        a = e.fn.datepicker,
        n = a.Constructor;
    a.Navigation = function (t, e) {
      this.d = t, this.opts = e, this.$buttonsContainer = "", this.init();
    }, a.Navigation.prototype = {
      init: function init() {
        this._buildBaseHtml(), this._bindEvents();
      },
      _bindEvents: function _bindEvents() {
        this.d.$nav.on("click", ".datepicker--nav-action", e.proxy(this._onClickNavButton, this)), this.d.$nav.on("click", ".datepicker--nav-title", e.proxy(this._onClickNavTitle, this)), this.d.$datepicker.on("click", ".datepicker--button", e.proxy(this._onClickNavButton, this));
      },
      _buildBaseHtml: function _buildBaseHtml() {
        this.opts.onlyTimepicker || this._render(), this._addButtonsIfNeed();
      },
      _addButtonsIfNeed: function _addButtonsIfNeed() {
        this.opts.todayButton && this._addButton("today"), this.opts.clearButton && this._addButton("clear");
      },
      _render: function _render() {
        var i = this._getTitle(this.d.currentDate),
            s = n.template(t, e.extend({
          title: i
        }, this.opts));

        this.d.$nav.html(s), "years" == this.d.view && e(".datepicker--nav-title", this.d.$nav).addClass("-disabled-"), this.setNavStatus();
      },
      _getTitle: function _getTitle(t) {
        return this.d.formatDate(this.opts.navTitles[this.d.view], t);
      },
      _addButton: function _addButton(t) {
        this.$buttonsContainer.length || this._addButtonsContainer();
        var i = {
          action: t,
          label: this.d.loc[t]
        },
            a = n.template(s, i);
        e("[data-action=" + t + "]", this.$buttonsContainer).length || this.$buttonsContainer.append(a);
      },
      _addButtonsContainer: function _addButtonsContainer() {
        this.d.$datepicker.append(i), this.$buttonsContainer = e(".datepicker--buttons", this.d.$datepicker);
      },
      setNavStatus: function setNavStatus() {
        if ((this.opts.minDate || this.opts.maxDate) && this.opts.disableNavWhenOutOfRange) {
          var t = this.d.parsedDate,
              e = t.month,
              i = t.year,
              s = t.date;

          switch (this.d.view) {
            case "days":
              this.d._isInRange(new Date(i, e - 1, 1), "month") || this._disableNav("prev"), this.d._isInRange(new Date(i, e + 1, 1), "month") || this._disableNav("next");
              break;

            case "months":
              this.d._isInRange(new Date(i - 1, e, s), "year") || this._disableNav("prev"), this.d._isInRange(new Date(i + 1, e, s), "year") || this._disableNav("next");
              break;

            case "years":
              var a = n.getDecade(this.d.date);
              this.d._isInRange(new Date(a[0] - 1, 0, 1), "year") || this._disableNav("prev"), this.d._isInRange(new Date(a[1] + 1, 0, 1), "year") || this._disableNav("next");
          }
        }
      },
      _disableNav: function _disableNav(t) {
        e('[data-action="' + t + '"]', this.d.$nav).addClass("-disabled-");
      },
      _activateNav: function _activateNav(t) {
        e('[data-action="' + t + '"]', this.d.$nav).removeClass("-disabled-");
      },
      _onClickNavButton: function _onClickNavButton(t) {
        var i = e(t.target).closest("[data-action]"),
            s = i.data("action");
        this.d[s]();
      },
      _onClickNavTitle: function _onClickNavTitle(t) {
        return e(t.target).hasClass("-disabled-") ? void 0 : "days" == this.d.view ? this.d.view = "months" : void (this.d.view = "years");
      }
    };
  }(), function () {
    var t = '<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>',
        i = e.fn.datepicker,
        s = i.Constructor;
    i.Timepicker = function (t, e) {
      this.d = t, this.opts = e, this.init();
    }, i.Timepicker.prototype = {
      init: function init() {
        var t = "input";
        this._setTime(this.d.date), this._buildHTML(), navigator.userAgent.match(/trident/gi) && (t = "change"), this.d.$el.on("selectDate", this._onSelectDate.bind(this)), this.$ranges.on(t, this._onChangeRange.bind(this)), this.$ranges.on("mouseup", this._onMouseUpRange.bind(this)), this.$ranges.on("mousemove focus ", this._onMouseEnterRange.bind(this)), this.$ranges.on("mouseout blur", this._onMouseOutRange.bind(this));
      },
      _setTime: function _setTime(t) {
        var e = s.getParsedDate(t);
        this._handleDate(t), this.hours = e.hours < this.minHours ? this.minHours : e.hours, this.minutes = e.minutes < this.minMinutes ? this.minMinutes : e.minutes;
      },
      _setMinTimeFromDate: function _setMinTimeFromDate(t) {
        this.minHours = t.getHours(), this.minMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() > t.getHours() && (this.minMinutes = this.opts.minMinutes);
      },
      _setMaxTimeFromDate: function _setMaxTimeFromDate(t) {
        this.maxHours = t.getHours(), this.maxMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() < t.getHours() && (this.maxMinutes = this.opts.maxMinutes);
      },
      _setDefaultMinMaxTime: function _setDefaultMinMaxTime() {
        var t = 23,
            e = 59,
            i = this.opts;
        this.minHours = i.minHours < 0 || i.minHours > t ? 0 : i.minHours, this.minMinutes = i.minMinutes < 0 || i.minMinutes > e ? 0 : i.minMinutes, this.maxHours = i.maxHours < 0 || i.maxHours > t ? t : i.maxHours, this.maxMinutes = i.maxMinutes < 0 || i.maxMinutes > e ? e : i.maxMinutes;
      },
      _validateHoursMinutes: function _validateHoursMinutes(t) {
        this.hours < this.minHours ? this.hours = this.minHours : this.hours > this.maxHours && (this.hours = this.maxHours), this.minutes < this.minMinutes ? this.minutes = this.minMinutes : this.minutes > this.maxMinutes && (this.minutes = this.maxMinutes);
      },
      _buildHTML: function _buildHTML() {
        var i = s.getLeadingZeroNum,
            a = {
          hourMin: this.minHours,
          hourMax: i(this.maxHours),
          hourStep: this.opts.hoursStep,
          hourValue: this.hours,
          hourVisible: i(this.displayHours),
          minMin: this.minMinutes,
          minMax: i(this.maxMinutes),
          minStep: this.opts.minutesStep,
          minValue: i(this.minutes)
        },
            n = s.template(t, a);
        this.$timepicker = e(n).appendTo(this.d.$datepicker), this.$ranges = e('[type="range"]', this.$timepicker), this.$hours = e('[name="hours"]', this.$timepicker), this.$minutes = e('[name="minutes"]', this.$timepicker), this.$hoursText = e(".datepicker--time-current-hours", this.$timepicker), this.$minutesText = e(".datepicker--time-current-minutes", this.$timepicker), this.d.ampm && (this.$ampm = e('<span class="datepicker--time-current-ampm">').appendTo(e(".datepicker--time-current", this.$timepicker)).html(this.dayPeriod), this.$timepicker.addClass("-am-pm-"));
      },
      _updateCurrentTime: function _updateCurrentTime() {
        var t = s.getLeadingZeroNum(this.displayHours),
            e = s.getLeadingZeroNum(this.minutes);
        this.$hoursText.html(t), this.$minutesText.html(e), this.d.ampm && this.$ampm.html(this.dayPeriod);
      },
      _updateRanges: function _updateRanges() {
        this.$hours.attr({
          min: this.minHours,
          max: this.maxHours
        }).val(this.hours), this.$minutes.attr({
          min: this.minMinutes,
          max: this.maxMinutes
        }).val(this.minutes);
      },
      _handleDate: function _handleDate(t) {
        this._setDefaultMinMaxTime(), t && (s.isSame(t, this.d.opts.minDate) ? this._setMinTimeFromDate(this.d.opts.minDate) : s.isSame(t, this.d.opts.maxDate) && this._setMaxTimeFromDate(this.d.opts.maxDate)), this._validateHoursMinutes(t);
      },
      update: function update() {
        this._updateRanges(), this._updateCurrentTime();
      },
      _getValidHoursFromDate: function _getValidHoursFromDate(t, e) {
        var i = t,
            a = t;
        t instanceof Date && (i = s.getParsedDate(t), a = i.hours);
        var n = e || this.d.ampm,
            h = "am";
        if (n) switch (!0) {
          case 0 == a:
            a = 12;
            break;

          case 12 == a:
            h = "pm";
            break;

          case a > 11:
            a -= 12, h = "pm";
        }
        return {
          hours: a,
          dayPeriod: h
        };
      },

      set hours(t) {
        this._hours = t;

        var e = this._getValidHoursFromDate(t);

        this.displayHours = e.hours, this.dayPeriod = e.dayPeriod;
      },

      get hours() {
        return this._hours;
      },

      _onChangeRange: function _onChangeRange(t) {
        var i = e(t.target),
            s = i.attr("name");
        this.d.timepickerIsActive = !0, this[s] = i.val(), this._updateCurrentTime(), this.d._trigger("timeChange", [this.hours, this.minutes]), this._handleDate(this.d.lastSelectedDate), this.update();
      },
      _onSelectDate: function _onSelectDate(t, e) {
        this._handleDate(e), this.update();
      },
      _onMouseEnterRange: function _onMouseEnterRange(t) {
        var i = e(t.target).attr("name");
        e(".datepicker--time-current-" + i, this.$timepicker).addClass("-focus-");
      },
      _onMouseOutRange: function _onMouseOutRange(t) {
        var i = e(t.target).attr("name");
        this.d.inFocus || e(".datepicker--time-current-" + i, this.$timepicker).removeClass("-focus-");
      },
      _onMouseUpRange: function _onMouseUpRange(t) {
        this.d.timepickerIsActive = !1;
      }
    };
  }();
}(window, jQuery);
/* jquery-multifile v2.2.2 @ 2020-04-16 06:05:29 */

window.jQuery && function (d) {
  "use strict";

  function g(e) {
    return 1048576 < e ? (e / 1048576).toFixed(1) + "Mb" : 1024 == e ? "1Mb" : (e / 1024).toFixed(1) + "Kb";
  }

  function h(e) {
    return (e.files && e.files.length ? e.files : null) || [{
      name: e.value,
      size: 0,
      type: ((e.value || "").match(/[^\.]+$/i) || [""])[0]
    }];
  }

  d.fn.MultiFile = function (e) {
    if (0 == this.length) return this;

    if ("string" == typeof arguments[0]) {
      if (1 < this.length) {
        var i = arguments;
        return this.each(function () {
          d.fn.MultiFile.apply(d(this), i);
        });
      }

      return d.fn.MultiFile[arguments[0]].apply(this, d.makeArray(arguments).slice(1) || []);
    }

    "number" == typeof e && (e = {
      max: e
    });
    e = d.extend({}, d.fn.MultiFile.options, e || {});
    d("form").not("MultiFile-intercepted").addClass("MultiFile-intercepted").submit(d.fn.MultiFile.disableEmpty), d.fn.MultiFile.options.autoIntercept && (d.fn.MultiFile.intercept(d.fn.MultiFile.options.autoIntercept), d.fn.MultiFile.options.autoIntercept = null), this.not(".MultiFile-applied").addClass("MultiFile-applied").each(function () {
      window.MultiFile = (window.MultiFile || 0) + 1;
      var i = window.MultiFile,
          f = {
        e: this,
        E: d(this),
        clone: d(this).clone()
      },
          p = d.extend({}, d.fn.MultiFile.options, e || {}, (d.metadata ? f.E.metadata() : d.meta ? f.E.data() : null) || {}, {});
      0 < p.max || (p.max = f.E.attr("maxlength")), 0 < p.max || (p.max = (String(f.e.className.match(/\b(max|limit)\-([0-9]+)\b/gi) || [""]).match(/[0-9]+/gi) || [""])[0], 0 < p.max ? p.max = String(p.max).match(/[0-9]+/gi)[0] : p.max = -1), p.max = new Number(p.max), p.accept = p.accept || f.E.attr("accept") || "", p.accept || (p.accept = f.e.className.match(/\b(accept\-[\w\|]+)\b/gi) || "", p.accept = new String(p.accept).replace(/^(accept|ext)\-/i, "")), p.maxsize = 0 < p.maxsize ? p.maxsize : f.E.data("maxsize") || 0, 0 < p.maxsize || (p.maxsize = (String(f.e.className.match(/\b(maxsize|maxload|size)\-([0-9]+)\b/gi) || [""]).match(/[0-9]+/gi) || [""])[0], 0 < p.maxsize ? p.maxsize = String(p.maxsize).match(/[0-9]+/gi)[0] : p.maxsize = -1), p.maxfile = 0 < p.maxfile ? p.maxfile : f.E.data("maxfile") || 0, 0 < p.maxfile || (p.maxfile = (String(f.e.className.match(/\b(maxfile|filemax)\-([0-9]+)\b/gi) || [""]).match(/[0-9]+/gi) || [""])[0], 0 < p.maxfile ? p.maxfile = String(p.maxfile).match(/[0-9]+/gi)[0] : p.maxfile = -1), 1 < p.maxfile && (p.maxfile = 1024 * p.maxfile), 1 < p.maxsize && (p.maxsize = 1024 * p.maxsize), !1 !== p.multiple && 1 < p.max && f.E.attr("multiple", "multiple").prop("multiple", !0), d.extend(f, p || {}), f.STRING = d.extend({}, d.fn.MultiFile.options.STRING, f.STRING), d.extend(f, {
        n: 0,
        slaves: [],
        files: [],
        instanceKey: f.e.id || "MultiFile" + String(i),
        generateID: function generateID(e) {
          return f.instanceKey + (0 < e ? "_F" + String(e) : "");
        },
        trigger: function trigger(e, t, a, i) {
          var l,
              n = a[e] || a["on" + e];
          if (n) return i = i || a.files || h(this), d.each(i, function (e, i) {
            l = n.apply(a.wrapper, [t, i.name, a, i]);
          }), l;
        }
      }), 1 < String(f.accept).length && (f.accept = f.accept.replace(/\W+/g, "|").replace(/^\W|\W$/g, ""), f.rxAccept = new RegExp("\\.(" + (f.accept ? f.accept : "") + ")$", "gi")), f.wrapID = f.instanceKey, f.E.wrap('<div class="MultiFile-wrap" id="' + f.wrapID + '"></div>'), f.wrapper = d("#" + f.wrapID), f.e.name = f.e.name || "file" + i + "[]", f.list || (f.wrapper.append('<div class="MultiFile-list" id="' + f.wrapID + '_list"></div>'), f.list = d("#" + f.wrapID + "_list")), f.list = d(f.list), f.addSlave = function (u, m) {
        var e;
        f.n++, u.MultiFile = f, u.id = u.name = "", u.id = f.generateID(m), u.name = String(f.namePattern.replace(/\$name/gi, d(f.clone).attr("name")).replace(/\$id/gi, d(f.clone).attr("id")).replace(/\$g/gi, i).replace(/\$i/gi, m)), 0 < f.max && f.files.length > f.max && (e = u.disabled = !0), f.current = u, (u = d(u)).val("").attr("value", "")[0].value = "", u.addClass("MultiFile-applied"), u.change(function (e, i, t) {
          d(this).blur();
          var r = this,
              a = f.files || [],
              l = this.files || [{
            name: this.value,
            size: 0,
            type: ((this.value || "").match(/[^\.]+$/i) || [""])[0]
          }],
              n = [],
              s = 0,
              c = f.total_size || 0,
              o = [];
          d.each(l, function (e, i) {
            n[n.length] = i;
          }), f.trigger("FileSelect", this, f, n), d.each(l, function (e, i) {
            function a(e) {
              return e.replace("$ext", String(l.match(/[^\.]+$/i) || "")).replace("$file", l.match(/[^\/\\]+$/gi)).replace("$size", g(t) + " > " + g(f.maxfile));
            }

            var l = i.name.replace(/^C:\\fakepath\\/gi, ""),
                t = i.size;
            f.accept && l && !l.match(f.rxAccept) && (o[o.length] = a(f.STRING.denied), f.trigger("FileInvalid", this, f, [i])), d(f.wrapper).find("input[type=file]").not(r).each(function () {
              d.each(h(this), function (e, i) {
                if (i.name) {
                  var t = (i.name || "").replace(/^C:\\fakepath\\/gi, "");
                  l != t && l != t.substr(t.length - l.length) || (o[o.length] = a(f.STRING.duplicate), f.trigger("FileDuplicate", r, f, [i]));
                }
              });
            }), 0 < f.maxfile && 0 < t && t > f.maxfile && (o[o.length] = a(f.STRING.toobig), f.trigger("FileTooBig", this, f, [i]));
            var n = f.trigger("FileValidate", this, f, [i]);
            n && "" != n && (o[o.length] = a(n)), s += i.size;
          }), c += s, n.size = s, n.total = c, n.total_length = n.length + a.length, 0 < f.max && a.length + l.length > f.max && (o[o.length] = f.STRING.toomany.replace("$max", f.max), f.trigger("FileTooMany", this, f, n)), 0 < f.maxsize && c > f.maxsize && (o[o.length] = f.STRING.toomuch.replace("$size", g(c) + " > " + g(f.maxsize)), f.trigger("FileTooMuch", this, f, n));
          var p = d(f.clone).clone();
          if (p.addClass("MultiFile"), 0 < o.length) return f.error(o.join("\n\n")), f.n--, f.addSlave(p[0], m), u.parent().prepend(p), u.remove(), !1;
          f.total_size = c, (l = a.concat(n)).size = c, l.size_label = g(c), f.files = l, d(this).css({
            position: "absolute",
            top: "-3000px"
          }), u.after(p), f.addSlave(p[0], m + 1), f.addToList(this, m, n), f.trigger("afterFileSelect", this, f, n);
        }), d(u).data("MultiFile-wrap", f.wrapper), d(f.wrapper).data("MultiFile", f), e && d(u).attr("disabled", "disabled").prop("disabled", !0);
      }, f.addToList = function (c, e, i) {
        f.trigger("FileAppend", c, f, i);
        var o = d("<span/>");
        d.each(i, function (e, t) {
          var i = String(t.name || "").replace(/[&<>'"]/g, function (e) {
            return "&#" + e.charCodeAt() + ";";
          }),
              a = f.STRING,
              l = a.label || a.file || a.name,
              n = a.title || a.tooltip || a.selected,
              r = "image/" == t.type.substr(0, 6) ? '<img class="MultiFile-preview" style="' + f.previewCss + '"/>' : "",
              s = d(('<span class="MultiFile-label" title="' + n + '"><span class="MultiFile-title">' + l + "</span>" + (f.preview || d(c).is(".with-preview") ? r : "") + "</span>").replace(/\$(file|name)/gi, (i.match(/[^\/\\]+$/gi) || [i])[0]).replace(/\$(ext|extension|type)/gi, (i.match(/[^\.]+$/gi) || [""])[0]).replace(/\$(size)/gi, g(t.size || 0)).replace(/\$(preview)/gi, r).replace(/\$(i)/gi, e));
          s.find("img.MultiFile-preview").each(function () {
            var i = this,
                e = new FileReader();
            e.readAsDataURL(t), e.onload = function (e) {
              i.src = e.target.result;
            };
          }), 0 < e && p.separator && o.append(p.separator), o.append(s);
          i = String(t.name || "");
          o[o.length] = ('<span class="MultiFile-title" title="' + f.STRING.selected + '">' + f.STRING.file + "</span>").replace(/\$(file|name)/gi, (i.match(/[^\/\\]+$/gi) || [i])[0]).replace(/\$(ext|extension|type)/gi, (i.match(/[^\.]+$/gi) || [""])[0]).replace(/\$(size)/gi, g(t.size || 0)).replace(/\$(i)/gi, e);
        });
        var t = d('<div class="MultiFile-label"></div>'),
            a = d('<a class="MultiFile-remove" href="#' + f.wrapID + '">' + f.STRING.remove + "</a>").click(function () {
          var e = h(c);
          f.trigger("FileRemove", c, f, e), f.n--, f.current.disabled = !1, d(c).remove(), d(this).parent().remove(), d(f.current).css({
            position: "",
            top: ""
          }), d(f.current).reset().val("").attr("value", "")[0].value = "";
          var t = [],
              a = 0;
          return d(f.wrapper).find("input[type=file]").each(function () {
            d.each(h(this), function (e, i) {
              i.name && (t[t.length] = i, a += i.size);
            });
          }), f.files = t, f.total_size = a, f.size_label = g(a), d(f.wrapper).data("MultiFile", f), f.trigger("afterFileRemove", c, f, e), f.trigger("FileChange", f.current, f, t), !1;
        });
        f.list.append(t.append(a, " ", o)), f.trigger("afterFileAppend", c, f, i), f.trigger("FileChange", c, f, f.files);
      }, f.MultiFile || f.addSlave(f.e, 0), f.n++;
    });
  }, d.extend(d.fn.MultiFile, {
    data: function data() {
      var e = d(this),
          i = e.is(".MultiFile-wrap") ? e : e.data("MultiFile-wrap");
      if (!i || !i.length) return !console.error("Could not find MultiFile control wrapper");
      var t = i.data("MultiFile");
      return t ? t || {} : !console.error("Could not find MultiFile data in wrapper");
    },
    reset: function reset() {
      var e = this.MultiFile("data");
      return e && d(e.list).find("a.MultiFile-remove").click(), d(this);
    },
    files: function files() {
      var e = this.MultiFile("data");
      return e ? e.files || [] : !console.log("MultiFile plugin not initialized");
    },
    size: function size() {
      var e = this.MultiFile("data");
      return e ? e.total_size || 0 : !console.log("MultiFile plugin not initialized");
    },
    count: function count() {
      var e = this.MultiFile("data");
      return e ? e.files && e.files.length || 0 : !console.log("MultiFile plugin not initialized");
    },
    disableEmpty: function disableEmpty(e) {
      e = ("string" == typeof e ? e : "") || "mfD";
      var i = [];
      return d("input:file.MultiFile").each(function () {
        "" == d(this).val() && (i[i.length] = this);
      }), window.clearTimeout(d.fn.MultiFile.reEnableTimeout), d.fn.MultiFile.reEnableTimeout = window.setTimeout(d.fn.MultiFile.reEnableEmpty, 500), d(i).each(function () {
        this.disabled = !0;
      }).addClass(e);
    },
    reEnableEmpty: function reEnableEmpty(e) {
      return d("input:file." + (e = ("string" == typeof e ? e : "") || "mfD")).removeClass(e).each(function () {
        this.disabled = !1;
      });
    },
    intercepted: {},
    intercept: function intercept(e, i, t) {
      var a, l;
      if ((t = t || []).constructor.toString().indexOf("Array") < 0 && (t = [t]), "function" == typeof e) return d.fn.MultiFile.disableEmpty(), l = e.apply(i || window, t), setTimeout(function () {
        d.fn.MultiFile.reEnableEmpty();
      }, 1e3), l;
      e.constructor.toString().indexOf("Array") < 0 && (e = [e]);

      for (var n = 0; n < e.length; n++) {
        (a = e[n] + "") && function (e) {
          d.fn.MultiFile.intercepted[e] = d.fn[e] || function () {}, d.fn[e] = function () {
            return d.fn.MultiFile.disableEmpty(), l = d.fn.MultiFile.intercepted[e].apply(this, arguments), setTimeout(function () {
              d.fn.MultiFile.reEnableEmpty();
            }, 1e3), l;
          };
        }(a);
      }
    }
  }), d.fn.MultiFile.options = {
    accept: "",
    max: -1,
    maxfile: -1,
    maxsize: -1,
    namePattern: "$name",
    preview: !1,
    previewCss: "max-height:100px; max-width:100px;",
    separator: ", ",
    STRING: {
      remove: "x",
      denied: "You cannot select a $ext file.\nTry again...",
      file: "$file",
      selected: "File selected: $file",
      duplicate: "This file has already been selected:\n$file",
      toomuch: "The files selected exceed the maximum size permited ($size)",
      toomany: "Too many files selected (max: $max)",
      toobig: "$file is too big (max $size)"
    },
    autoIntercept: ["submit", "ajaxSubmit", "ajaxForm", "validate", "valid"],
    error: function error(e) {
      "undefined" != typeof console && console.log(e), alert(e);
    }
  }, d.fn.reset = d.fn.reset || function () {
    return this.each(function () {
      try {
        this.reset();
      } catch (e) {}
    });
  }, d(function () {
    d("input[type=file].multi").MultiFile();
  });
}(jQuery);
document.addEventListener('DOMContentLoaded', function () {
  jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
  jQuery('.quantity').each(function () {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');
    btnUp.click(function () {
      var oldValue = parseFloat(input.val());

      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }

      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
    btnDown.click(function () {
      var oldValue = parseFloat(input.val());

      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }

      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  }); // console.log('Init quantities')
});
document.addEventListener('DOMContentLoaded', function () {
  // $(".chosen").chosen({disable_search_threshold: 10})
  var windowResizeTimer;
  $(window).on('resize', function () {
    clearTimeout(windowResizeTimer);
    windowResizeTimer = setTimeout(function () {
      console.log('RESIZE');

      if (window.innerWidth < 992) {
        $('.gallery__slider').slick('unslick');
      }
    }, 100);
  });

  if (typeof $.fn.MultiFile != 'undefined') {
    $('input[type="file"]').each(function (i, t) {
      $(t).MultiFile({
        max: 10,
        accept: 'png|jpeg',
        list: $('input[type="file"]').nextAll('.form-control-label__list')
      });
    });
  }

  ;

  if (typeof $.fn.chosen != 'undefined') {
    $('.chosen').chosen({
      disable_search_threshold: 10,
      inherit_select_classes: 1
    }).on('chosen:showing_dropdown', function () {
      baron({
        root: $('.chosen-with-drop .baron-column')[0],
        scroller: '.baron__scroller',
        bar: '.baron__bar',
        scrollingCls: '_scrolling',
        draggingCls: '_dragging'
      });
    });
  } // init button toggle in header for mobile menu

  // Mobile menu toggle handler - handle clicks on button and image inside
  $(document).on('click', '.header__btn-menu, .header__btn-menu img', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $body = $('body');
    var $menu = $('.mobile-menu');
    $body.toggleClass('open--mobile-menu overflow-hidden');
    
    // Force z-index and visibility when menu is open
    if ($body.hasClass('open--mobile-menu')) {
      $menu.css({
        'z-index': '2000',
        'opacity': '1',
        'visibility': 'visible',
        'pointer-events': 'auto'
      });
    } else {
      $menu.css({
        'z-index': '-100',
        'opacity': '0',
        'visibility': 'hidden',
        'pointer-events': 'none'
      });
    }
    
    console.log('Mobile menu toggled. Body has classes:', $body.attr('class'));
    console.log('Mobile menu z-index:', $menu.css('z-index'));
    console.log('Mobile menu opacity:', $menu.css('opacity'));
    console.log('Mobile menu visibility:', $menu.css('visibility'));
  });
  
  // Close mobile menu when clicking outside of it
  $(document).on('click', '.open--mobile-menu .mobile-menu', function (e) {
    e.stopPropagation();
  });
  
  $(document).on('click', 'body.open--mobile-menu', function (e) {
    if (!$(e.target).closest('.mobile-menu, .header__btn-menu').length) {
      var $body = $('body');
      var $menu = $('.mobile-menu');
      $body.removeClass('open--mobile-menu overflow-hidden');
      // Reset menu styles when closing
      $menu.css({
        'z-index': '-100',
        'opacity': '0',
        'visibility': 'hidden',
        'pointer-events': 'none'
      });
    }
  }); // init button toggle in account-header for notification

  $('.header-account__btn-notification').on('click', function (e) {
    e.preventDefault();
    $('.header-account__notification').toggleClass('_show');
    $('.header-account__menu').removeClass('_show');
  }); // init button toggle in account-header for user menu

  $('.header-account__btn-menu').on('click', function (e) {
    e.preventDefault();
    $('.header-account__menu').toggleClass('_show');
    $('.header-account__notification').removeClass('_show');
  }); // input mask for telephone

  $('[type="tel"]').mask('+7 (999) 999-99-99');

  if (typeof $.fn.slick != 'undefined') {
    console.log('SLIDERS');
    $('.slider-simple').slick({
      prevArrow: '<div class="slick-prev"><svg><use xlink:href="#arrow"></use></svg></div>',
      nextArrow: '<div class="slick-next"><svg><use xlink:href="#arrow"></use></svg></div>'
    });

    if (window.innerWidth > 991) {
      var speedGallery = 400,
          gallerySyncTimer;
      $('.gallery__slider').slick({
        prevArrow: '<div class="slick-prev"><svg><use xlink:href="#arrow"></use></svg></div>',
        nextArrow: '<div class="slick-next"><svg><use xlink:href="#arrow"></use></svg></div>',
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: speedGallery
      });
      $('.gallery__footer').each(function (i, t) {
        var mainGallery = $(t).prevAll('.gallery__slider');
        var scroller = t.querySelector('.gallery__footer-scroller');
        var thumbs = $(scroller).find('.gallery__thumb');
        var thumbHeight = thumbs[0].offsetHeight + 20; // 22 - margin-right

        thumbs.each(function (thumbIndex, thumb) {
          if (!thumbIndex) $(thumb).addClass('active');
          $(thumb).click(function () {
            mainGallery.slick('slickGoTo', thumbIndex);
            $(thumb).addClass('active').siblings('.active').removeClass('active');
            clearTimeout(gallerySyncTimer);
            gallerySyncTimer = setTimeout(function () {
              mainGallery.slick('slickGoTo', thumbIndex);
            }, speedGallery - 100);
          });
        }); // Buttons prev & next

        var next = $(t).find('.gallery__next');
        var prev = $(t).find('.gallery__prev');
        $(scroller).on('scroll', function () {
          if (scroller.scrollTop == 0) prev.addClass('_disabled');else prev.removeClass('_disabled');
          if (scroller.scrollTop + scroller.clientHeight == scroller.scrollHeight) next.addClass('_disabled');else next.removeClass('_disabled');
        });

        function toNext() {
          var scrl = scroller.scrollTop;
          $(scroller).stop().animate({
            scrollTop: scrl + thumbHeight - scrl % thumbHeight
          }, speedGallery);
          var active = thumbs.find('.active');
        }

        function toPrev() {
          var scrl = scroller.scrollTop,
              full = 0;
          if (scrl % thumbHeight == 0) full = thumbHeight;
          $(scroller).stop().animate({
            scrollTop: scrl - scrl % thumbHeight - full
          }, speedGallery);
        }

        next.click(toNext);
        prev.click(toPrev);
        mainGallery.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
          console.log('before', nextSlide);
          var direction = nextSlide - currentSlide;
          var nextThumb = thumbs.eq(nextSlide);
          nextThumb.addClass('active').siblings('.active').removeClass('active');
          $(scroller).stop().animate({
            scrollTop: nextThumb[0].offsetTop - (scroller.clientHeight - thumbHeight) / 2
          }, speedGallery);
        }); // drag & scroll

        var isDown = false;
        var startX;
        var scrollTop;
        scroller.addEventListener('mousedown', function (e) {
          isDown = true;
          scroller.classList.add('active');
          startX = e.pageY - scroller.offsetLeft;
          scrollTop = scroller.scrollTop;
        });
        scroller.addEventListener('mouseleave', function () {
          isDown = false;
          scroller.classList.remove('active');
        });
        scroller.addEventListener('mouseup', function () {
          isDown = false;
          scroller.classList.remove('active');
        });
        scroller.addEventListener('mousemove', function (e) {
          if (!isDown) return;
          e.preventDefault();
          var x = e.pageY - scroller.offsetLeft;
          var walk = (x - startX) * 2; //scroll-fast

          scroller.scrollTop = scrollTop - walk;
        });
      });
    }
  }

  console.log('Init validation'); // Fetch all the forms we want to apply custom Bootstrap validation styles to

  var forms = document.querySelectorAll('.needs-validation'); // Loop over them and prevent submission

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
  $(document).ready(function () {
    $('.examples-slider').slick({
      prevArrow: '<img src="img/arrow-prev.svg" class="examples-slider__arrow examples-slider__arrow-prev">',
      nextArrow: '<img src="img/arrow-prev.svg" class="examples-slider__arrow examples-slider__arrow-next">',
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      fade: true,
      // autoplay: true,
      autoplaySpeed: 2000
    });
  });
  var pages = $('.examples-slide__counter');
  var slider = $('.examples-slider');
  slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    pages.text(i + '/' + slick.slideCount);
  });
  $(document).ready(function () {
    $('.slider').slick({
      prevArrow: '<img src="img/arrow-prev.svg" class="slider__arrow slider__arrow-prev">',
      nextArrow: '<img src="img/arrow-prev.svg" class="slider__arrow slider__arrow-next">',
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      // autoplay: true,
      autoplaySpeed: 2000,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  });
  $(".map").click(function () {
    var map = $(".map");
    map.append('<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d96775.64909322526!2d-74.07601286590207!3d40.71275413447247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zTmV3IFlvcmssINCd0YzRji3QmdC-0YDQuiwg0KHQqNCQ!3m2!1d40.7127753!2d-74.0059728!5e0!3m2!1sru!2sru!4v1623063426900!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>');
    map.removeClass('map-google');
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzL3NyYy91dGlsL2luZGV4LmpzIiwiLi4vLi4vanMvc3JjL2RvbS9kYXRhLmpzIiwiLi4vLi4vanMvc3JjL2RvbS9ldmVudC1oYW5kbGVyLmpzIiwiLi4vLi4vanMvc3JjL2Jhc2UtY29tcG9uZW50LmpzIiwiLi4vLi4vanMvc3JjL2FsZXJ0LmpzIiwiLi4vLi4vanMvc3JjL2J1dHRvbi5qcyIsIi4uLy4uL2pzL3NyYy9kb20vbWFuaXB1bGF0b3IuanMiLCIuLi8uLi9qcy9zcmMvZG9tL3NlbGVjdG9yLWVuZ2luZS5qcyIsIi4uLy4uL2pzL3NyYy9jYXJvdXNlbC5qcyIsIi4uLy4uL2pzL3NyYy9jb2xsYXBzZS5qcyIsIi4uLy4uL2pzL3NyYy9kcm9wZG93bi5qcyIsIi4uLy4uL2pzL3NyYy9tb2RhbC5qcyIsIi4uLy4uL2pzL3NyYy91dGlsL3Nhbml0aXplci5qcyIsIi4uLy4uL2pzL3NyYy90b29sdGlwLmpzIiwiLi4vLi4vanMvc3JjL3BvcG92ZXIuanMiLCIuLi8uLi9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwiLi4vLi4vanMvc3JjL3RhYi5qcyIsIi4uLy4uL2pzL3NyYy90b2FzdC5qcyIsIi4uLy4uL2pzL2luZGV4LnVtZC5qcyJdLCJuYW1lcyI6WyJzdG9yZURhdGEiLCJpZCIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRTZWxlY3RvciIsInNlbGVjdG9yIiwiZWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImhyZWZBdHRyIiwiaW5jbHVkZXMiLCJzdGFydHNXaXRoIiwic3BsaXQiLCJ0cmltIiwiZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50RnJvbVNlbGVjdG9yIiwiZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwiZmxvYXRUcmFuc2l0aW9uRGVsYXkiLCJ0cmlnZ2VyVHJhbnNpdGlvbkVuZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImlzRWxlbWVudCIsIm9iaiIsIm5vZGVUeXBlIiwiZW11bGF0ZVRyYW5zaXRpb25FbmQiLCJkdXJhdGlvbiIsImNhbGxlZCIsImVtdWxhdGVkRHVyYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwibGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsInR5cGVDaGVja0NvbmZpZyIsImNvbXBvbmVudE5hbWUiLCJjb25maWciLCJjb25maWdUeXBlcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiZXhwZWN0ZWRUeXBlcyIsInByb3BlcnR5IiwidmFsdWUiLCJ2YWx1ZVR5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJtYXRjaCIsInRvTG93ZXJDYXNlIiwiUmVnRXhwIiwidGVzdCIsIlR5cGVFcnJvciIsInRvVXBwZXJDYXNlIiwiaXNWaXNpYmxlIiwic3R5bGUiLCJwYXJlbnROb2RlIiwiZWxlbWVudFN0eWxlIiwicGFyZW50Tm9kZVN0eWxlIiwiZGlzcGxheSIsInZpc2liaWxpdHkiLCJub29wIiwicmVmbG93Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0alF1ZXJ5IiwialF1ZXJ5IiwiYm9keSIsImhhc0F0dHJpYnV0ZSIsImlzUlRMIiwiZG9jdW1lbnRFbGVtZW50IiwiZGlyIiwiZGVmaW5lSlF1ZXJ5UGx1Z2luIiwibmFtZSIsInBsdWdpbiIsIiQiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJmbiIsImpRdWVyeUludGVyZmFjZSIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsInJlYWR5U3RhdGUiLCJjYWxsYmFjayIsIm1hcERhdGEiLCJzZXQiLCJrZXkiLCJkYXRhIiwiYnNLZXkiLCJnZXQiLCJrZXlQcm9wZXJ0aWVzIiwiZGVsZXRlIiwiRGF0YSIsImluc3RhbmNlIiwibmFtZXNwYWNlUmVnZXgiLCJzdHJpcE5hbWVSZWdleCIsInN0cmlwVWlkUmVnZXgiLCJldmVudFJlZ2lzdHJ5IiwidWlkRXZlbnQiLCJjdXN0b21FdmVudHMiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsIm5hdGl2ZUV2ZW50cyIsIlNldCIsImdldFVpZEV2ZW50IiwidWlkIiwiZ2V0RXZlbnQiLCJmaW5kSGFuZGxlciIsImV2ZW50cyIsImhhbmRsZXIiLCJkZWxlZ2F0aW9uU2VsZWN0b3IiLCJ1aWRFdmVudExpc3QiLCJpIiwibGVuIiwibGVuZ3RoIiwiZXZlbnQiLCJvcmlnaW5hbEhhbmRsZXIiLCJub3JtYWxpemVQYXJhbXMiLCJvcmlnaW5hbFR5cGVFdmVudCIsImRlbGVnYXRpb25GbiIsImRlbGVnYXRpb24iLCJ0eXBlRXZlbnQiLCJyZXBsYWNlIiwiY3VzdG9tIiwiaGFzIiwiYWRkSGFuZGxlciIsIm9uZU9mZiIsImhhbmRsZXJzIiwicHJldmlvdXNGbiIsImRvbUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInRhcmdldCIsInRoaXMiLCJkZWxlZ2F0ZVRhcmdldCIsIkV2ZW50SGFuZGxlciIsIm9mZiIsInR5cGUiLCJhcHBseSIsImJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyIiwiYm9vdHN0cmFwSGFuZGxlciIsInJlbW92ZUhhbmRsZXIiLCJCb29sZWFuIiwib24iLCJvbmUiLCJpbk5hbWVzcGFjZSIsImlzTmFtZXNwYWNlIiwibmFtZXNwYWNlIiwic3RvcmVFbGVtZW50RXZlbnQiLCJoYW5kbGVyS2V5IiwicmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzIiwiZWxlbWVudEV2ZW50Iiwic2xpY2UiLCJrZXlIYW5kbGVycyIsInRyaWdnZXIiLCJhcmdzIiwialF1ZXJ5RXZlbnQiLCJpc05hdGl2ZSIsImJ1YmJsZXMiLCJuYXRpdmVEaXNwYXRjaCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJldnQiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJDdXN0b21FdmVudCIsImNhbmNlbGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsInByZXZlbnREZWZhdWx0IiwiQmFzZUNvbXBvbmVudCIsIl9lbGVtZW50IiwiY29uc3RydWN0b3IiLCJEQVRBX0tFWSIsImRpc3Bvc2UiLCJnZXRJbnN0YW5jZSIsIkFsZXJ0IiwiY2xvc2UiLCJyb290RWxlbWVudCIsIl9nZXRSb290RWxlbWVudCIsImN1c3RvbUV2ZW50IiwiX3RyaWdnZXJDbG9zZUV2ZW50IiwiX3JlbW92ZUVsZW1lbnQiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY29udGFpbnMiLCJfdGhpcyIsIl9kZXN0cm95RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiZWFjaCIsImhhbmRsZURpc21pc3MiLCJhbGVydEluc3RhbmNlIiwiQnV0dG9uIiwidG9nZ2xlIiwic2V0QXR0cmlidXRlIiwibm9ybWFsaXplRGF0YSIsInZhbCIsIm5vcm1hbGl6ZURhdGFLZXkiLCJjaHIiLCJidXR0b24iLCJNYW5pcHVsYXRvciIsInNldERhdGFBdHRyaWJ1dGUiLCJyZW1vdmVEYXRhQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZ2V0RGF0YUF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwiZGF0YXNldCIsImZpbHRlciIsInB1cmVLZXkiLCJjaGFyQXQiLCJnZXREYXRhQXR0cmlidXRlIiwib2Zmc2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInNjcm9sbFRvcCIsImxlZnQiLCJzY3JvbGxMZWZ0IiwicG9zaXRpb24iLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0IiwiU2VsZWN0b3JFbmdpbmUiLCJfcmVmIiwiY29uY2F0IiwiRWxlbWVudCIsInByb3RvdHlwZSIsIl9yZWYyIiwiY2hpbGRyZW4iLCJjaGlsZCIsIm1hdGNoZXMiLCJwcmV2aW91cyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJEZWZhdWx0IiwiaW50ZXJ2YWwiLCJrZXlib2FyZCIsInNsaWRlIiwicGF1c2UiLCJ3cmFwIiwidG91Y2giLCJEZWZhdWx0VHlwZSIsIkNhcm91c2VsIiwiX2l0ZW1zIiwiX2ludGVydmFsIiwiX2FjdGl2ZUVsZW1lbnQiLCJfaXNQYXVzZWQiLCJfaXNTbGlkaW5nIiwidG91Y2hUaW1lb3V0IiwidG91Y2hTdGFydFgiLCJ0b3VjaERlbHRhWCIsIl9jb25maWciLCJfZ2V0Q29uZmlnIiwiX2luZGljYXRvcnNFbGVtZW50IiwiX3RvdWNoU3VwcG9ydGVkIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJfcG9pbnRlckV2ZW50IiwiUG9pbnRlckV2ZW50IiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwibmV4dCIsIl9zbGlkZSIsIm5leHRXaGVuVmlzaWJsZSIsImhpZGRlbiIsInByZXYiLCJjeWNsZSIsImNsZWFySW50ZXJ2YWwiLCJfdXBkYXRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInZpc2liaWxpdHlTdGF0ZSIsImJpbmQiLCJ0byIsImluZGV4IiwiYWN0aXZlSW5kZXgiLCJfZ2V0SXRlbUluZGV4IiwiX3RoaXMyIiwiZGlyZWN0aW9uIiwiX0Jhc2VDb21wb25lbnQiLCJfZXh0ZW5kcyIsIl9oYW5kbGVTd2lwZSIsImFic0RlbHRheCIsImFicyIsIl90aGlzMyIsIl9rZXlkb3duIiwiX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMiLCJzdGFydCIsIl90aGlzNCIsInBvaW50ZXJUeXBlIiwidG91Y2hlcyIsImNsaWVudFgiLCJlbmQiLCJjbGVhclRpbWVvdXQiLCJpdGVtSW1nIiwiZSIsImFkZCIsIm1vdmUiLCJ0YWdOYW1lIiwiaW5kZXhPZiIsIl9nZXRJdGVtQnlEaXJlY3Rpb24iLCJhY3RpdmVFbGVtZW50IiwiaXNOZXh0RGlyZWN0aW9uIiwiaXNQcmV2RGlyZWN0aW9uIiwibGFzdEl0ZW1JbmRleCIsIml0ZW1JbmRleCIsIl90cmlnZ2VyU2xpZGVFdmVudCIsInJlbGF0ZWRUYXJnZXQiLCJldmVudERpcmVjdGlvbk5hbWUiLCJ0YXJnZXRJbmRleCIsImZyb21JbmRleCIsImZyb20iLCJfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudCIsImFjdGl2ZUluZGljYXRvciIsImluZGljYXRvcnMiLCJwYXJzZUludCIsImVsZW1lbnRJbnRlcnZhbCIsImRlZmF1bHRJbnRlcnZhbCIsImFjdGl2ZUVsZW1lbnRJbmRleCIsIm5leHRFbGVtZW50IiwibmV4dEVsZW1lbnRJbmRleCIsImlzQ3ljbGluZyIsImRpcmVjdGlvbmFsQ2xhc3NOYW1lIiwib3JkZXJDbGFzc05hbWUiLCJfdGhpczUiLCJjYXJvdXNlbEludGVyZmFjZSIsImFjdGlvbiIsInJpZGUiLCJkYXRhQXBpQ2xpY2tIYW5kbGVyIiwic2xpZGVJbmRleCIsImNhcm91c2VscyIsInBhcmVudCIsIkNvbGxhcHNlIiwiX2lzVHJhbnNpdGlvbmluZyIsIl90cmlnZ2VyQXJyYXkiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSIsInRvZ2dsZUxpc3QiLCJlbGVtIiwiZmlsdGVyRWxlbWVudCIsImZvdW5kRWxlbSIsIl9zZWxlY3RvciIsInB1c2giLCJfcGFyZW50IiwiX2dldFBhcmVudCIsIl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MiLCJoaWRlIiwic2hvdyIsImFjdGl2ZXMiLCJhY3RpdmVzRGF0YSIsImNvbnRhaW5lciIsInRlbXBBY3RpdmVEYXRhIiwiZmluZCIsImVsZW1BY3RpdmUiLCJjb2xsYXBzZUludGVyZmFjZSIsImRpbWVuc2lvbiIsIl9nZXREaW1lbnNpb24iLCJzZXRUcmFuc2l0aW9uaW5nIiwic2Nyb2xsU2l6ZSIsInRyaWdnZXJBcnJheUxlbmd0aCIsImlzVHJhbnNpdGlvbmluZyIsImpxdWVyeSIsInNlbGVjdGVkIiwidHJpZ2dlckFycmF5IiwiaXNPcGVuIiwidHJpZ2dlckRhdGEiLCJSRUdFWFBfS0VZRE9XTiIsIkFSUk9XX1VQX0tFWSIsIlBMQUNFTUVOVF9UT1AiLCJQTEFDRU1FTlRfVE9QRU5EIiwiUExBQ0VNRU5UX0JPVFRPTSIsIlBMQUNFTUVOVF9CT1RUT01FTkQiLCJQTEFDRU1FTlRfUklHSFQiLCJQTEFDRU1FTlRfTEVGVCIsImZsaXAiLCJib3VuZGFyeSIsInJlZmVyZW5jZSIsInBvcHBlckNvbmZpZyIsIkRyb3Bkb3duIiwiX3BvcHBlciIsIl9tZW51IiwiX2dldE1lbnVFbGVtZW50IiwiX2luTmF2YmFyIiwiX2RldGVjdE5hdmJhciIsImRpc2FibGVkIiwiaXNBY3RpdmUiLCJjbGVhck1lbnVzIiwiZ2V0UGFyZW50RnJvbUVsZW1lbnQiLCJQb3BwZXIiLCJyZWZlcmVuY2VFbGVtZW50IiwiX2dldFBvcHBlckNvbmZpZyIsImlzRGlzcGxheVN0YXRpYyIsIm1vZGlmaWVycyIsIm1vZGlmaWVyIiwiZW5hYmxlZCIsImZvY3VzIiwiZGVzdHJveSIsInVwZGF0ZSIsInN0b3BQcm9wYWdhdGlvbiIsIm5leHRFbGVtZW50U2libGluZyIsIl9nZXRQbGFjZW1lbnQiLCJwYXJlbnREcm9wZG93biIsImlzRW5kIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIl9nZXRPZmZzZXQiLCJtYXAiLCJwb3BwZXJEYXRhIiwiZGVmYXVsdEJzUG9wcGVyQ29uZmlnIiwicGxhY2VtZW50Iiwib3B0aW9ucyIsImFsdEJvdW5kYXJ5IiwiZHJvcGRvd25JbnRlcmZhY2UiLCJ0b2dnbGVzIiwiY29udGV4dCIsImNsaWNrRXZlbnQiLCJkcm9wZG93bk1lbnUiLCJkYXRhQXBpS2V5ZG93bkhhbmRsZXIiLCJpdGVtcyIsImNsaWNrIiwiYmFja2Ryb3AiLCJNb2RhbCIsIl9kaWFsb2ciLCJfYmFja2Ryb3AiLCJfaXNTaG93biIsIl9pc0JvZHlPdmVyZmxvd2luZyIsIl9pZ25vcmVCYWNrZHJvcENsaWNrIiwiX3Njcm9sbGJhcldpZHRoIiwic2hvd0V2ZW50IiwiX2NoZWNrU2Nyb2xsYmFyIiwiX3NldFNjcm9sbGJhciIsIl9hZGp1c3REaWFsb2ciLCJfc2V0RXNjYXBlRXZlbnQiLCJfc2V0UmVzaXplRXZlbnQiLCJfc2hvd0JhY2tkcm9wIiwiX3Nob3dFbGVtZW50IiwidHJhbnNpdGlvbiIsIl9oaWRlTW9kYWwiLCJodG1sRWxlbWVudCIsImhhbmRsZVVwZGF0ZSIsIm1vZGFsQm9keSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJhcHBlbmRDaGlsZCIsIl9lbmZvcmNlRm9jdXMiLCJ0cmFuc2l0aW9uQ29tcGxldGUiLCJfdGhpczYiLCJfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbiIsIl90aGlzNyIsIl90aGlzOCIsIl9yZXNldEFkanVzdG1lbnRzIiwiX3Jlc2V0U2Nyb2xsYmFyIiwiX3JlbW92ZUJhY2tkcm9wIiwiYW5pbWF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJfdGhpczkiLCJjdXJyZW50VGFyZ2V0IiwiYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24iLCJjYWxsYmFja1JlbW92ZSIsImlzTW9kYWxPdmVyZmxvd2luZyIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIm92ZXJmbG93WSIsIm1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uIiwiX3RoaXMxMCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0Iiwicm91bmQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJfZ2V0U2Nyb2xsYmFyV2lkdGgiLCJfc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJjYWxjdWxhdGVkVmFsdWUiLCJfdGhpczExIiwic3R5bGVQcm9wIiwiYWN0dWFsVmFsdWUiLCJfcmVzZXRFbGVtZW50QXR0cmlidXRlcyIsInNjcm9sbERpdiIsInNjcm9sbGJhcldpZHRoIiwid2lkdGgiLCJjbGllbnRXaWR0aCIsIl90aGlzMTIiLCJ1cmlBdHRycyIsIlNBRkVfVVJMX1BBVFRFUk4iLCJEQVRBX1VSTF9QQVRURVJOIiwic2FuaXRpemVIdG1sIiwidW5zYWZlSHRtbCIsImFsbG93TGlzdCIsInNhbml0aXplRm4iLCJjcmVhdGVkRG9jdW1lbnQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJhbGxvd2xpc3RLZXlzIiwiZWxlbWVudHMiLCJlbCIsImVsTmFtZSIsIm5vZGVOYW1lIiwiYXR0cmlidXRlTGlzdCIsImFsbG93ZWRBdHRyaWJ1dGVzIiwiYXR0ciIsImFsbG93ZWRBdHRyaWJ1dGVMaXN0IiwiYXR0ck5hbWUiLCJub2RlVmFsdWUiLCJyZWdFeHAiLCJhdHRyUmVnZXgiLCJfbG9vcCIsImlubmVySFRNTCIsIkJTQ0xTX1BSRUZJWF9SRUdFWCIsIkRJU0FMTE9XRURfQVRUUklCVVRFUyIsImFuaW1hdGlvbiIsInRlbXBsYXRlIiwidGl0bGUiLCJkZWxheSIsImh0bWwiLCJmYWxsYmFja1BsYWNlbWVudHMiLCJjdXN0b21DbGFzcyIsInNhbml0aXplIiwiQXR0YWNobWVudE1hcCIsIkFVVE8iLCJUT1AiLCJSSUdIVCIsIkJPVFRPTSIsIkxFRlQiLCIqIiwiYSIsImFyZWEiLCJiIiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImltZyIsImxpIiwib2wiLCJwIiwicHJlIiwicyIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsIkhJREUiLCJISURERU4iLCJTSE9XIiwiU0hPV04iLCJJTlNFUlRFRCIsIkNMSUNLIiwiRk9DVVNJTiIsIkZPQ1VTT1VUIiwiTU9VU0VFTlRFUiIsIk1PVVNFTEVBVkUiLCJUb29sdGlwIiwiX2lzRW5hYmxlZCIsIl90aW1lb3V0IiwiX2hvdmVyU3RhdGUiLCJfYWN0aXZlVHJpZ2dlciIsInRpcCIsIl9zZXRMaXN0ZW5lcnMiLCJlbmFibGUiLCJkaXNhYmxlIiwidG9nZ2xlRW5hYmxlZCIsIl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQiLCJfaXNXaXRoQWN0aXZlVHJpZ2dlciIsIl9lbnRlciIsIl9sZWF2ZSIsImdldFRpcEVsZW1lbnQiLCJFVkVOVF9LRVkiLCJfaGlkZU1vZGFsSGFuZGxlciIsIkVycm9yIiwiaXNXaXRoQ29udGVudCIsInNoYWRvd1Jvb3QiLCJmaW5kU2hhZG93Um9vdCIsImF0dGFjaFNoYWRvdyIsImdldFJvb3ROb2RlIiwicm9vdCIsIlNoYWRvd1Jvb3QiLCJpc0luVGhlRG9tIiwib3duZXJEb2N1bWVudCIsInRpcElkIiwiTkFNRSIsInNldENvbnRlbnQiLCJhdHRhY2htZW50IiwiX2dldEF0dGFjaG1lbnQiLCJfYWRkQXR0YWNobWVudENsYXNzIiwiX2dldENvbnRhaW5lciIsIl90aXAkY2xhc3NMaXN0IiwiY29tcGxldGUiLCJwcmV2SG92ZXJTdGF0ZSIsIl9jbGVhblRpcENsYXNzIiwiZ2V0VGl0bGUiLCJzZXRFbGVtZW50Q29udGVudCIsImNvbnRlbnQiLCJ0ZXh0Q29udGVudCIsInVwZGF0ZUF0dGFjaG1lbnQiLCJkYXRhS2V5IiwiX2dldERlbGVnYXRlQ29uZmlnIiwicGhhc2UiLCJfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlIiwib25GaXJzdFVwZGF0ZSIsIkNMQVNTX1BSRUZJWCIsImV2ZW50SW4iLCJldmVudE91dCIsIl9maXhUaXRsZSIsIm9yaWdpbmFsVGl0bGVUeXBlIiwiZGF0YUF0dHJpYnV0ZXMiLCJkYXRhQXR0ciIsInRhYkNsYXNzIiwidG9rZW4iLCJ0Q2xhc3MiLCJzdGF0ZSIsInBvcHBlciIsIlBvcG92ZXIiLCJfZ2V0Q29udGVudCIsIm1ldGhvZCIsIlNjcm9sbFNweSIsIl9zY3JvbGxFbGVtZW50IiwiX29mZnNldHMiLCJfdGFyZ2V0cyIsIl9hY3RpdmVUYXJnZXQiLCJfc2Nyb2xsSGVpZ2h0IiwiX3Byb2Nlc3MiLCJyZWZyZXNoIiwiYXV0b01ldGhvZCIsIm9mZnNldE1ldGhvZCIsIm9mZnNldEJhc2UiLCJfZ2V0U2Nyb2xsVG9wIiwiX2dldFNjcm9sbEhlaWdodCIsInRhcmdldFNlbGVjdG9yIiwidGFyZ2V0QkNSIiwiaGVpZ2h0IiwiaXRlbSIsInNvcnQiLCJwYWdlWU9mZnNldCIsIm1heCIsIl9nZXRPZmZzZXRIZWlnaHQiLCJpbm5lckhlaWdodCIsIm1heFNjcm9sbCIsIl9hY3RpdmF0ZSIsIl9jbGVhciIsInF1ZXJpZXMiLCJsaW5rIiwiam9pbiIsInBhcmVudHMiLCJhbmNlc3RvciIsImxpc3RHcm91cCIsIlNFTEVDVE9SX05BVl9MSU5LUyIsIm5hdkl0ZW0iLCJub2RlIiwic3B5IiwiVGFiIiwibGlzdEVsZW1lbnQiLCJpdGVtU2VsZWN0b3IiLCJoaWRlRXZlbnQiLCJhY3RpdmUiLCJfdHJhbnNpdGlvbkNvbXBsZXRlIiwiZHJvcGRvd25DaGlsZCIsImRyb3Bkb3duIiwiYXV0b2hpZGUiLCJUb2FzdCIsIl9jbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7O0FBQUEsTUNPUUEsQ0RQUjtBQUFBLE1DUU1DLENEUk47QUFBQSxNQW1CTUMsQ0FBQUEsR0FBUyxTQUFUQSxDQUFTLENBQUEsQ0FBQSxFQUFBO0FBQ2IsT0FBQTtBQUNFQyxNQUFBQSxDQUFBQSxJQUFVQyxJQUFBQSxDQUFLQyxLQUFMRCxDQXJCRSxNQXFCU0EsSUFBQUEsQ0FBS0UsTUFBTEYsRUFBWEEsQ0FBVkQ7QUFBMEJHLEtBRDVCLFFBRVNDLFFBQUFBLENBQVNDLGNBQVRELENBQXdCSixDQUF4QkksQ0FGVDs7QUFJQSxXQUFPSixDQUFQO0FBQU9BLEdBeEJUO0FBQUEsTUEyQk1NLENBQUFBLEdBQWMsU0FBZEEsQ0FBYyxDQUFBLENBQUEsRUFBQTtBQUNsQixRQUFJQyxDQUFBQSxHQUFXQyxDQUFBQSxDQUFRQyxZQUFSRCxDQUFxQixnQkFBckJBLENBQWY7O0FBRUEsUUFBQSxDQUFLRCxDQUFMLElBQThCLFFBQWJBLENBQWpCLEVBQW1DO0FBQ2pDLFVBQUlHLENBQUFBLEdBQVdGLENBQUFBLENBQVFDLFlBQVJELENBQXFCLE1BQXJCQSxDQUFmO0FBTUEsVUFBQSxDQUFLRSxDQUFMLElBQUtBLENBQWNBLENBQUFBLENBQVNDLFFBQVRELENBQWtCLEdBQWxCQSxDQUFkQSxJQUFnQyxDQUFTQSxDQUFBQSxDQUFTRSxVQUFURixD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T1AsRUFBUDtBQUFPQTtBQUpBTyxLQW1JVTVHLEVBL0hWcUc7QUFBQUEsTUFBQUEsR0FBQUEsRUFBQUEsVUFBQUE7QUFBQUEsTUFBQUEsR0FBQUEsRUFHVCxlQUFBO0FBQ0UsZUF0RGEsVUFzRGI7QUF0RGE7QUFrRE5BLEtBK0hVckcsQ0FBQUEsQ0E5SVUsRUFuQ2QsQ0FtQ2M7QUFEekJxaEIsR0FBQUEsQ0FBYy9lLENBQWQrZSxDQW5DTjs7QUFtQ29CL2UsU0E0SnBCakcsQ0FBQUEsQ0EvTGEsT0ErTGJBLEVBQXlCZ2xCLEVBQXpCaGxCLENBQUFBLEVDck1lO0FBQ2J1RyxJQUFBQSxLQUFBQSxFQUFBQSxDQURhO0FBRWJpQixJQUFBQSxNQUFBQSxFQUFBQSxDQUZhO0FBR2JnRCxJQUFBQSxRQUFBQSxFQUFBQSxDQUhhO0FBSWJ3RixJQUFBQSxRQUFBQSxFQUFBQSxFQUphO0FBS2I2QyxJQUFBQSxRQUFBQSxFQUFBQSxFQUxhO0FBTWIwQyxJQUFBQSxLQUFBQSxFQUFBQSxFQU5hO0FBT2IwTSxJQUFBQSxPQUFBQSxFQUFBQSxFQVBhO0FBUWJHLElBQUFBLFNBQUFBLEVBQUFBLEVBUmE7QUFTYm1DLElBQUFBLEdBQUFBLEVBQUFBLEVBVGE7QUFVYlMsSUFBQUEsS0FBQUEsRUFBQUEsRUFWYTtBQVdiM0csSUFBQUEsT0FBQUEsRUFBQUE7QUFYYSxHRHlDS3BZO0FDOUJsQm9ZLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMik6IHV0aWwvaW5kZXguanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBNQVhfVUlEID0gMTAwMDAwMFxuY29uc3QgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwXG5jb25zdCBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJ1xuXG4vLyBTaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5jb25zdCB0b1R5cGUgPSBvYmogPT4ge1xuICBpZiAob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGAke29ian1gXG4gIH1cblxuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFB1YmxpYyBVdGlsIEFwaVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBnZXRVSUQgPSBwcmVmaXggPT4ge1xuICBkbyB7XG4gICAgcHJlZml4ICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpXG4gIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG5cbiAgcmV0dXJuIHByZWZpeFxufVxuXG5jb25zdCBnZXRTZWxlY3RvciA9IGVsZW1lbnQgPT4ge1xuICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKVxuXG4gIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgIGxldCBocmVmQXR0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcblxuICAgIC8vIFRoZSBvbmx5IHZhbGlkIGNvbnRlbnQgdGhhdCBjb3VsZCBkb3VibGUgYXMgYSBzZWxlY3RvciBhcmUgSURzIG9yIGNsYXNzZXMsXG4gICAgLy8gc28gZXZlcnl0aGluZyBzdGFydGluZyB3aXRoIGAjYCBvciBgLmAuIElmIGEgXCJyZWFsXCIgVVJMIGlzIHVzZWQgYXMgdGhlIHNlbGVjdG9yLFxuICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8zMjI3M1xuICAgIGlmICghaHJlZkF0dHIgfHwgKCFocmVmQXR0ci5pbmNsdWRlcygnIycpICYmICFocmVmQXR0ci5zdGFydHNXaXRoKCcuJykpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lIENNUyBwdXRzIG91dCBhIGZ1bGwgVVJMIHdpdGggdGhlIGFuY2hvciBhcHBlbmRlZFxuICAgIGlmIChocmVmQXR0ci5pbmNsdWRlcygnIycpICYmICFocmVmQXR0ci5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGhyZWZBdHRyID0gJyMnICsgaHJlZkF0dHIuc3BsaXQoJyMnKVsxXVxuICAgIH1cblxuICAgIHNlbGVjdG9yID0gaHJlZkF0dHIgJiYgaHJlZkF0dHIgIT09ICcjJyA/IGhyZWZBdHRyLnRyaW0oKSA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvclxufVxuXG5jb25zdCBnZXRTZWxlY3RvckZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gIHJldHVybiBzZWxlY3RvciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogbnVsbFxufVxuXG5jb25zdCBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgbGV0IHsgdHJhbnNpdGlvbkR1cmF0aW9uLCB0cmFuc2l0aW9uRGVsYXkgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG5cbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KVxuXG4gIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXVxuICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXVxuXG4gIHJldHVybiAoTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVJcbn1cblxuY29uc3QgdHJpZ2dlclRyYW5zaXRpb25FbmQgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChUUkFOU0lUSU9OX0VORCkpXG59XG5cbmNvbnN0IGlzRWxlbWVudCA9IG9iaiA9PiAob2JqWzBdIHx8IG9iaikubm9kZVR5cGVcblxuY29uc3QgZW11bGF0ZVRyYW5zaXRpb25FbmQgPSAoZWxlbWVudCwgZHVyYXRpb24pID0+IHtcbiAgbGV0IGNhbGxlZCA9IGZhbHNlXG4gIGNvbnN0IGR1cmF0aW9uUGFkZGluZyA9IDVcbiAgY29uc3QgZW11bGF0ZWREdXJhdGlvbiA9IGR1cmF0aW9uICsgZHVyYXRpb25QYWRkaW5nXG5cbiAgZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgY2FsbGVkID0gdHJ1ZVxuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgbGlzdGVuZXIpXG4gIH1cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGxpc3RlbmVyKVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQoZWxlbWVudClcbiAgICB9XG4gIH0sIGVtdWxhdGVkRHVyYXRpb24pXG59XG5cbmNvbnN0IHR5cGVDaGVja0NvbmZpZyA9IChjb21wb25lbnROYW1lLCBjb25maWcsIGNvbmZpZ1R5cGVzKSA9PiB7XG4gIE9iamVjdC5rZXlzKGNvbmZpZ1R5cGVzKS5mb3JFYWNoKHByb3BlcnR5ID0+IHtcbiAgICBjb25zdCBleHBlY3RlZFR5cGVzID0gY29uZmlnVHlwZXNbcHJvcGVydHldXG4gICAgY29uc3QgdmFsdWUgPSBjb25maWdbcHJvcGVydHldXG4gICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUgJiYgaXNFbGVtZW50KHZhbHVlKSA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSlcblxuICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIGAke2NvbXBvbmVudE5hbWUudG9VcHBlckNhc2UoKX06IGAgK1xuICAgICAgICBgT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYCArXG4gICAgICAgIGBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gXG4gICAgICApXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBpc1Zpc2libGUgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAoZWxlbWVudC5zdHlsZSAmJiBlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlKSB7XG4gICAgY29uc3QgZWxlbWVudFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuICAgIGNvbnN0IHBhcmVudE5vZGVTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudC5wYXJlbnROb2RlKVxuXG4gICAgcmV0dXJuIGVsZW1lbnRTdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiZcbiAgICAgIHBhcmVudE5vZGVTdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiZcbiAgICAgIGVsZW1lbnRTdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJ1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmNvbnN0IGZpbmRTaGFkb3dSb290ID0gZWxlbWVudCA9PiB7XG4gIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcbiAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKVxuICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsXG4gIH1cblxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSlcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IGZ1bmN0aW9uICgpIHt9XG5cbmNvbnN0IHJlZmxvdyA9IGVsZW1lbnQgPT4gZWxlbWVudC5vZmZzZXRIZWlnaHRcblxuY29uc3QgZ2V0alF1ZXJ5ID0gKCkgPT4ge1xuICBjb25zdCB7IGpRdWVyeSB9ID0gd2luZG93XG5cbiAgaWYgKGpRdWVyeSAmJiAhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYnMtbm8tanF1ZXJ5JykpIHtcbiAgICByZXR1cm4galF1ZXJ5XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWQgPSBjYWxsYmFjayA9PiB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2FsbGJhY2spXG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbmNvbnN0IGlzUlRMID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PT0gJ3J0bCdcblxuY29uc3QgZGVmaW5lSlF1ZXJ5UGx1Z2luID0gKG5hbWUsIHBsdWdpbikgPT4ge1xuICBvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICgkKSB7XG4gICAgICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW25hbWVdXG4gICAgICAkLmZuW25hbWVdID0gcGx1Z2luLmpRdWVyeUludGVyZmFjZVxuICAgICAgJC5mbltuYW1lXS5Db25zdHJ1Y3RvciA9IHBsdWdpblxuICAgICAgJC5mbltuYW1lXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAgICAgICAkLmZuW25hbWVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgICAgIHJldHVybiBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQge1xuICBnZXRVSUQsXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCxcbiAgaXNFbGVtZW50LFxuICBlbXVsYXRlVHJhbnNpdGlvbkVuZCxcbiAgdHlwZUNoZWNrQ29uZmlnLFxuICBpc1Zpc2libGUsXG4gIGZpbmRTaGFkb3dSb290LFxuICBub29wLFxuICByZWZsb3csXG4gIGdldGpRdWVyeSxcbiAgb25ET01Db250ZW50TG9hZGVkLFxuICBpc1JUTCxcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMik6IGRvbS9kYXRhLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgbWFwRGF0YSA9ICgoKSA9PiB7XG4gIGNvbnN0IHN0b3JlRGF0YSA9IHt9XG4gIGxldCBpZCA9IDFcbiAgcmV0dXJuIHtcbiAgICBzZXQoZWxlbWVudCwga2V5LCBkYXRhKSB7XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQuYnNLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVsZW1lbnQuYnNLZXkgPSB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIGlkXG4gICAgICAgIH1cbiAgICAgICAgaWQrK1xuICAgICAgfVxuXG4gICAgICBzdG9yZURhdGFbZWxlbWVudC5ic0tleS5pZF0gPSBkYXRhXG4gICAgfSxcbiAgICBnZXQoZWxlbWVudCwga2V5KSB7XG4gICAgICBpZiAoIWVsZW1lbnQgfHwgdHlwZW9mIGVsZW1lbnQuYnNLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleVByb3BlcnRpZXMgPSBlbGVtZW50LmJzS2V5XG4gICAgICBpZiAoa2V5UHJvcGVydGllcy5rZXkgPT09IGtleSkge1xuICAgICAgICByZXR1cm4gc3RvcmVEYXRhW2tleVByb3BlcnRpZXMuaWRdXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSxcbiAgICBkZWxldGUoZWxlbWVudCwga2V5KSB7XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQuYnNLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBrZXlQcm9wZXJ0aWVzID0gZWxlbWVudC5ic0tleVxuICAgICAgaWYgKGtleVByb3BlcnRpZXMua2V5ID09PSBrZXkpIHtcbiAgICAgICAgZGVsZXRlIHN0b3JlRGF0YVtrZXlQcm9wZXJ0aWVzLmlkXVxuICAgICAgICBkZWxldGUgZWxlbWVudC5ic0tleVxuICAgICAgfVxuICAgIH1cbiAgfVxufSkoKVxuXG5jb25zdCBEYXRhID0ge1xuICBzZXREYXRhKGluc3RhbmNlLCBrZXksIGRhdGEpIHtcbiAgICBtYXBEYXRhLnNldChpbnN0YW5jZSwga2V5LCBkYXRhKVxuICB9LFxuICBnZXREYXRhKGluc3RhbmNlLCBrZXkpIHtcbiAgICByZXR1cm4gbWFwRGF0YS5nZXQoaW5zdGFuY2UsIGtleSlcbiAgfSxcbiAgcmVtb3ZlRGF0YShpbnN0YW5jZSwga2V5KSB7XG4gICAgbWFwRGF0YS5kZWxldGUoaW5zdGFuY2UsIGtleSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMik6IGRvbS9ldmVudC1oYW5kbGVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZ2V0alF1ZXJ5IH0gZnJvbSAnLi4vdXRpbC9pbmRleCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgbmFtZXNwYWNlUmVnZXggPSAvW14uXSooPz1cXC4uKilcXC58LiovXG5jb25zdCBzdHJpcE5hbWVSZWdleCA9IC9cXC4uKi9cbmNvbnN0IHN0cmlwVWlkUmVnZXggPSAvOjpcXGQrJC9cbmNvbnN0IGV2ZW50UmVnaXN0cnkgPSB7fSAvLyBFdmVudHMgc3RvcmFnZVxubGV0IHVpZEV2ZW50ID0gMVxuY29uc3QgY3VzdG9tRXZlbnRzID0ge1xuICBtb3VzZWVudGVyOiAnbW91c2VvdmVyJyxcbiAgbW91c2VsZWF2ZTogJ21vdXNlb3V0J1xufVxuY29uc3QgbmF0aXZlRXZlbnRzID0gbmV3IFNldChbXG4gICdjbGljaycsXG4gICdkYmxjbGljaycsXG4gICdtb3VzZXVwJyxcbiAgJ21vdXNlZG93bicsXG4gICdjb250ZXh0bWVudScsXG4gICdtb3VzZXdoZWVsJyxcbiAgJ0RPTU1vdXNlU2Nyb2xsJyxcbiAgJ21vdXNlb3ZlcicsXG4gICdtb3VzZW91dCcsXG4gICdtb3VzZW1vdmUnLFxuICAnc2VsZWN0c3RhcnQnLFxuICAnc2VsZWN0ZW5kJyxcbiAgJ2tleWRvd24nLFxuICAna2V5cHJlc3MnLFxuICAna2V5dXAnLFxuICAnb3JpZW50YXRpb25jaGFuZ2UnLFxuICAndG91Y2hzdGFydCcsXG4gICd0b3VjaG1vdmUnLFxuICAndG91Y2hlbmQnLFxuICAndG91Y2hjYW5jZWwnLFxuICAncG9pbnRlcmRvd24nLFxuICAncG9pbnRlcm1vdmUnLFxuICAncG9pbnRlcnVwJyxcbiAgJ3BvaW50ZXJsZWF2ZScsXG4gICdwb2ludGVyY2FuY2VsJyxcbiAgJ2dlc3R1cmVzdGFydCcsXG4gICdnZXN0dXJlY2hhbmdlJyxcbiAgJ2dlc3R1cmVlbmQnLFxuICAnZm9jdXMnLFxuICAnYmx1cicsXG4gICdjaGFuZ2UnLFxuICAncmVzZXQnLFxuICAnc2VsZWN0JyxcbiAgJ3N1Ym1pdCcsXG4gICdmb2N1c2luJyxcbiAgJ2ZvY3Vzb3V0JyxcbiAgJ2xvYWQnLFxuICAndW5sb2FkJyxcbiAgJ2JlZm9yZXVubG9hZCcsXG4gICdyZXNpemUnLFxuICAnbW92ZScsXG4gICdET01Db250ZW50TG9hZGVkJyxcbiAgJ3JlYWR5c3RhdGVjaGFuZ2UnLFxuICAnZXJyb3InLFxuICAnYWJvcnQnLFxuICAnc2Nyb2xsJ1xuXSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFByaXZhdGUgbWV0aG9kc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZnVuY3Rpb24gZ2V0VWlkRXZlbnQoZWxlbWVudCwgdWlkKSB7XG4gIHJldHVybiAodWlkICYmIGAke3VpZH06OiR7dWlkRXZlbnQrK31gKSB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kytcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnQoZWxlbWVudCkge1xuICBjb25zdCB1aWQgPSBnZXRVaWRFdmVudChlbGVtZW50KVxuXG4gIGVsZW1lbnQudWlkRXZlbnQgPSB1aWRcbiAgZXZlbnRSZWdpc3RyeVt1aWRdID0gZXZlbnRSZWdpc3RyeVt1aWRdIHx8IHt9XG5cbiAgcmV0dXJuIGV2ZW50UmVnaXN0cnlbdWlkXVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSBlbGVtZW50XG5cbiAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgZm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KGVsZW1lbnQsIFtldmVudF0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgc2VsZWN0b3IsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICBmb3IgKGxldCB7IHRhcmdldCB9ID0gZXZlbnQ7IHRhcmdldCAmJiB0YXJnZXQgIT09IHRoaXM7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKGxldCBpID0gZG9tRWxlbWVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgIGlmIChkb21FbGVtZW50c1tpXSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSB0YXJnZXRcblxuICAgICAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vY29uc2lzdGVudC1kZXN0cnVjdHVyaW5nXG4gICAgICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0YXJnZXQsIFtldmVudF0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUbyBwbGVhc2UgRVNMaW50XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSGFuZGxlcihldmVudHMsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3RvciA9IG51bGwpIHtcbiAgY29uc3QgdWlkRXZlbnRMaXN0ID0gT2JqZWN0LmtleXMoZXZlbnRzKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB1aWRFdmVudExpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBldmVudCA9IGV2ZW50c1t1aWRFdmVudExpc3RbaV1dXG5cbiAgICBpZiAoZXZlbnQub3JpZ2luYWxIYW5kbGVyID09PSBoYW5kbGVyICYmIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvciA9PT0gZGVsZWdhdGlvblNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gZXZlbnRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXJhbXMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICBjb25zdCBkZWxlZ2F0aW9uID0gdHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnXG4gIGNvbnN0IG9yaWdpbmFsSGFuZGxlciA9IGRlbGVnYXRpb24gPyBkZWxlZ2F0aW9uRm4gOiBoYW5kbGVyXG5cbiAgLy8gYWxsb3cgdG8gZ2V0IHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gbmFtZXNwYWNlZCBldmVudHMgKCdjbGljay5icy5idXR0b24nIC0tPiAnY2xpY2snKVxuICBsZXQgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpXG4gIGNvbnN0IGN1c3RvbSA9IGN1c3RvbUV2ZW50c1t0eXBlRXZlbnRdXG5cbiAgaWYgKGN1c3RvbSkge1xuICAgIHR5cGVFdmVudCA9IGN1c3RvbVxuICB9XG5cbiAgY29uc3QgaXNOYXRpdmUgPSBuYXRpdmVFdmVudHMuaGFzKHR5cGVFdmVudClcblxuICBpZiAoIWlzTmF0aXZlKSB7XG4gICAgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgfVxuXG4gIHJldHVybiBbZGVsZWdhdGlvbiwgb3JpZ2luYWxIYW5kbGVyLCB0eXBlRXZlbnRdXG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbiwgb25lT2ZmKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIWhhbmRsZXIpIHtcbiAgICBoYW5kbGVyID0gZGVsZWdhdGlvbkZuXG4gICAgZGVsZWdhdGlvbkZuID0gbnVsbFxuICB9XG5cbiAgY29uc3QgW2RlbGVnYXRpb24sIG9yaWdpbmFsSGFuZGxlciwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtcyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKVxuICBjb25zdCBldmVudHMgPSBnZXRFdmVudChlbGVtZW50KVxuICBjb25zdCBoYW5kbGVycyA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IChldmVudHNbdHlwZUV2ZW50XSA9IHt9KVxuICBjb25zdCBwcmV2aW91c0ZuID0gZmluZEhhbmRsZXIoaGFuZGxlcnMsIG9yaWdpbmFsSGFuZGxlciwgZGVsZWdhdGlvbiA/IGhhbmRsZXIgOiBudWxsKVxuXG4gIGlmIChwcmV2aW91c0ZuKSB7XG4gICAgcHJldmlvdXNGbi5vbmVPZmYgPSBwcmV2aW91c0ZuLm9uZU9mZiAmJiBvbmVPZmZcblxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgdWlkID0gZ2V0VWlkRXZlbnQob3JpZ2luYWxIYW5kbGVyLCBvcmlnaW5hbFR5cGVFdmVudC5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpXG4gIGNvbnN0IGZuID0gZGVsZWdhdGlvbiA/XG4gICAgYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSA6XG4gICAgYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyKVxuXG4gIGZuLmRlbGVnYXRpb25TZWxlY3RvciA9IGRlbGVnYXRpb24gPyBoYW5kbGVyIDogbnVsbFxuICBmbi5vcmlnaW5hbEhhbmRsZXIgPSBvcmlnaW5hbEhhbmRsZXJcbiAgZm4ub25lT2ZmID0gb25lT2ZmXG4gIGZuLnVpZEV2ZW50ID0gdWlkXG4gIGhhbmRsZXJzW3VpZF0gPSBmblxuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBkZWxlZ2F0aW9uKVxufVxuXG5mdW5jdGlvbiByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpIHtcbiAgY29uc3QgZm4gPSBmaW5kSGFuZGxlcihldmVudHNbdHlwZUV2ZW50XSwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKVxuXG4gIGlmICghZm4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBCb29sZWFuKGRlbGVnYXRpb25TZWxlY3RvcikpXG4gIGRlbGV0ZSBldmVudHNbdHlwZUV2ZW50XVtmbi51aWRFdmVudF1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBuYW1lc3BhY2UpIHtcbiAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuXG4gIE9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5mb3JFYWNoKGhhbmRsZXJLZXkgPT4ge1xuICAgIGlmIChoYW5kbGVyS2V5LmluY2x1ZGVzKG5hbWVzcGFjZSkpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gc3RvcmVFbGVtZW50RXZlbnRbaGFuZGxlcktleV1cblxuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQub3JpZ2luYWxIYW5kbGVyLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBFdmVudEhhbmRsZXIgPSB7XG4gIG9uKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4sIGZhbHNlKVxuICB9LFxuXG4gIG9uZShlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuLCB0cnVlKVxuICB9LFxuXG4gIG9mZihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IFtkZWxlZ2F0aW9uLCBvcmlnaW5hbEhhbmRsZXIsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbXMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbilcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IHR5cGVFdmVudCAhPT0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgICBjb25zdCBldmVudHMgPSBnZXRFdmVudChlbGVtZW50KVxuICAgIGNvbnN0IGlzTmFtZXNwYWNlID0gb3JpZ2luYWxUeXBlRXZlbnQuc3RhcnRzV2l0aCgnLicpXG5cbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsSGFuZGxlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFNpbXBsZXN0IGNhc2U6IGhhbmRsZXIgaXMgcGFzc2VkLCByZW1vdmUgdGhhdCBsaXN0ZW5lciBPTkxZLlxuICAgICAgaWYgKCFldmVudHMgfHwgIWV2ZW50c1t0eXBlRXZlbnRdKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBvcmlnaW5hbEhhbmRsZXIsIGRlbGVnYXRpb24gPyBoYW5kbGVyIDogbnVsbClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc05hbWVzcGFjZSkge1xuICAgICAgT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKGVsZW1lbnRFdmVudCA9PiB7XG4gICAgICAgIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIGVsZW1lbnRFdmVudCwgb3JpZ2luYWxUeXBlRXZlbnQuc2xpY2UoMSkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge31cbiAgICBPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkuZm9yRWFjaChrZXlIYW5kbGVycyA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyS2V5ID0ga2V5SGFuZGxlcnMucmVwbGFjZShzdHJpcFVpZFJlZ2V4LCAnJylcblxuICAgICAgaWYgKCFpbk5hbWVzcGFjZSB8fCBvcmlnaW5hbFR5cGVFdmVudC5pbmNsdWRlcyhoYW5kbGVyS2V5KSkge1xuICAgICAgICBjb25zdCBldmVudCA9IHN0b3JlRWxlbWVudEV2ZW50W2tleUhhbmRsZXJzXVxuXG4gICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50Lm9yaWdpbmFsSGFuZGxlciwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgdHJpZ2dlcihlbGVtZW50LCBldmVudCwgYXJncykge1xuICAgIGlmICh0eXBlb2YgZXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIGNvbnN0IHR5cGVFdmVudCA9IGV2ZW50LnJlcGxhY2Uoc3RyaXBOYW1lUmVnZXgsICcnKVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gZXZlbnQgIT09IHR5cGVFdmVudFxuICAgIGNvbnN0IGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzLmhhcyh0eXBlRXZlbnQpXG5cbiAgICBsZXQgalF1ZXJ5RXZlbnRcbiAgICBsZXQgYnViYmxlcyA9IHRydWVcbiAgICBsZXQgbmF0aXZlRGlzcGF0Y2ggPSB0cnVlXG4gICAgbGV0IGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZVxuICAgIGxldCBldnQgPSBudWxsXG5cbiAgICBpZiAoaW5OYW1lc3BhY2UgJiYgJCkge1xuICAgICAgalF1ZXJ5RXZlbnQgPSAkLkV2ZW50KGV2ZW50LCBhcmdzKVxuXG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoalF1ZXJ5RXZlbnQpXG4gICAgICBidWJibGVzID0gIWpRdWVyeUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIG5hdGl2ZURpc3BhdGNoID0gIWpRdWVyeUV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSBqUXVlcnlFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKVxuICAgIH1cblxuICAgIGlmIChpc05hdGl2ZSkge1xuICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKVxuICAgICAgZXZ0LmluaXRFdmVudCh0eXBlRXZlbnQsIGJ1YmJsZXMsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldmVudCwge1xuICAgICAgICBidWJibGVzLFxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIG1lcmdlIGN1c3RvbSBpbmZvcm1hdGlvbiBpbiBvdXIgZXZlbnRcbiAgICBpZiAodHlwZW9mIGFyZ3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBPYmplY3Qua2V5cyhhcmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldnQsIGtleSwge1xuICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcmdzW2tleV1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICB9XG5cbiAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgJiYgdHlwZW9mIGpRdWVyeUV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgalF1ZXJ5RXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHJldHVybiBldnRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEyKTogYmFzZS1jb21wb25lbnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBWRVJTSU9OID0gJzUuMC4wLWJldGEyJ1xuXG5jbGFzcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICBEYXRhLnNldERhdGEoZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcylcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgRGF0YS5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8qKiBTdGF0aWMgKi9cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xuICAgIHJldHVybiBEYXRhLmdldERhdGEoZWxlbWVudCwgdGhpcy5EQVRBX0tFWSlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb21wb25lbnRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEyKTogYWxlcnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGVtdWxhdGVUcmFuc2l0aW9uRW5kLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudFxufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdhbGVydCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmFsZXJ0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IFNFTEVDVE9SX0RJU01JU1MgPSAnW2RhdGEtYnMtZGlzbWlzcz1cImFsZXJ0XCJdJ1xuXG5jb25zdCBFVkVOVF9DTE9TRSA9IGBjbG9zZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMT1NFRCA9IGBjbG9zZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9BTEVSVCA9ICdhbGVydCdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBBbGVydCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGNsb3NlKGVsZW1lbnQpIHtcbiAgICBjb25zdCByb290RWxlbWVudCA9IGVsZW1lbnQgPyB0aGlzLl9nZXRSb290RWxlbWVudChlbGVtZW50KSA6IHRoaXMuX2VsZW1lbnRcbiAgICBjb25zdCBjdXN0b21FdmVudCA9IHRoaXMuX3RyaWdnZXJDbG9zZUV2ZW50KHJvb3RFbGVtZW50KVxuXG4gICAgaWYgKGN1c3RvbUV2ZW50ID09PSBudWxsIHx8IGN1c3RvbUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3JlbW92ZUVsZW1lbnQocm9vdEVsZW1lbnQpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSB8fCBlbGVtZW50LmNsb3Nlc3QoYC4ke0NMQVNTX05BTUVfQUxFUlR9YClcbiAgfVxuXG4gIF90cmlnZ2VyQ2xvc2VFdmVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX0NMT1NFKVxuICB9XG5cbiAgX3JlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChlbGVtZW50KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uZShlbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsICgpID0+IHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpKVxuICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKGVsZW1lbnQsIHRyYW5zaXRpb25EdXJhdGlvbilcbiAgfVxuXG4gIF9kZXN0cm95RWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfQ0xPU0VEKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXREYXRhKHRoaXMsIERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBBbGVydCh0aGlzKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAnY2xvc2UnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgaGFuZGxlRGlzbWlzcyhhbGVydEluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cblxuICAgICAgYWxlcnRJbnN0YW5jZS5jbG9zZSh0aGlzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9ESVNNSVNTLCBBbGVydC5oYW5kbGVEaXNtaXNzKG5ldyBBbGVydCgpKSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkFsZXJ0IHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE5BTUUsIEFsZXJ0KVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTIpOiBidXR0b24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4gfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdidXR0b24nXG5jb25zdCBEQVRBX0tFWSA9ICdicy5idXR0b24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJidXR0b25cIl0nXG5cbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIC8vIFRvZ2dsZSBjbGFzcyBhbmQgc3luYyB0aGUgYGFyaWEtcHJlc3NlZGAgYXR0cmlidXRlIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgYC50b2dnbGUoKWAgbWV0aG9kXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0FDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldERhdGEodGhpcywgREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IEJ1dHRvbih0aGlzKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZXZlbnQgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JfREFUQV9UT0dHTEUpXG5cbiAgbGV0IGRhdGEgPSBEYXRhLmdldERhdGEoYnV0dG9uLCBEQVRBX0tFWSlcbiAgaWYgKCFkYXRhKSB7XG4gICAgZGF0YSA9IG5ldyBCdXR0b24oYnV0dG9uKVxuICB9XG5cbiAgZGF0YS50b2dnbGUoKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkJ1dHRvbiB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihOQU1FLCBCdXR0b24pXG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTIpOiBkb20vbWFuaXB1bGF0b3IuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhKHZhbCkge1xuICBpZiAodmFsID09PSAndHJ1ZScpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHZhbCA9PT0gTnVtYmVyKHZhbCkudG9TdHJpbmcoKSkge1xuICAgIHJldHVybiBOdW1iZXIodmFsKVxuICB9XG5cbiAgaWYgKHZhbCA9PT0gJycgfHwgdmFsID09PSAnbnVsbCcpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhS2V5KGtleSkge1xuICByZXR1cm4ga2V5LnJlcGxhY2UoL1tBLVpdL2csIGNociA9PiBgLSR7Y2hyLnRvTG93ZXJDYXNlKCl9YClcbn1cblxuY29uc3QgTWFuaXB1bGF0b3IgPSB7XG4gIHNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWAsIHZhbHVlKVxuICB9LFxuXG4gIHJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YClcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge31cblxuICAgIE9iamVjdC5rZXlzKGVsZW1lbnQuZGF0YXNldClcbiAgICAgIC5maWx0ZXIoa2V5ID0+IGtleS5zdGFydHNXaXRoKCdicycpKVxuICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgbGV0IHB1cmVLZXkgPSBrZXkucmVwbGFjZSgvXmJzLywgJycpXG4gICAgICAgIHB1cmVLZXkgPSBwdXJlS2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcHVyZUtleS5zbGljZSgxLCBwdXJlS2V5Lmxlbmd0aClcbiAgICAgICAgYXR0cmlidXRlc1twdXJlS2V5XSA9IG5vcm1hbGl6ZURhdGEoZWxlbWVudC5kYXRhc2V0W2tleV0pXG4gICAgICB9KVxuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXNcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIHJldHVybiBub3JtYWxpemVEYXRhKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApKVxuICB9LFxuXG4gIG9mZnNldChlbGVtZW50KSB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHJlY3QudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICBsZWZ0OiByZWN0LmxlZnQgKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRcbiAgICB9XG4gIH0sXG5cbiAgcG9zaXRpb24oZWxlbWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgICAgbGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmlwdWxhdG9yXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMik6IGRvbS9zZWxlY3Rvci1lbmdpbmUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOT0RFX1RFWFQgPSAzXG5cbmNvbnN0IFNlbGVjdG9yRW5naW5lID0ge1xuICBmaW5kKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpKVxuICB9LFxuXG4gIGZpbmRPbmUoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKVxuICB9LFxuXG4gIGNoaWxkcmVuKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5lbGVtZW50LmNoaWxkcmVuKVxuICAgICAgLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5tYXRjaGVzKHNlbGVjdG9yKSlcbiAgfSxcblxuICBwYXJlbnRzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgcGFyZW50cyA9IFtdXG5cbiAgICBsZXQgYW5jZXN0b3IgPSBlbGVtZW50LnBhcmVudE5vZGVcblxuICAgIHdoaWxlIChhbmNlc3RvciAmJiBhbmNlc3Rvci5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiYgYW5jZXN0b3Iubm9kZVR5cGUgIT09IE5PREVfVEVYVCkge1xuICAgICAgaWYgKGFuY2VzdG9yLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChhbmNlc3RvcilcbiAgICAgIH1cblxuICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudHNcbiAgfSxcblxuICBwcmV2KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IHByZXZpb3VzID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAocHJldmlvdXMpIHtcbiAgICAgIGlmIChwcmV2aW91cy5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW3ByZXZpb3VzXVxuICAgICAgfVxuXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcblxuICBuZXh0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IG5leHQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKG5leHQpIHtcbiAgICAgIGlmIChuZXh0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbbmV4dF1cbiAgICAgIH1cblxuICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3JFbmdpbmVcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEyKTogY2Fyb3VzZWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGVtdWxhdGVUcmFuc2l0aW9uRW5kLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcbiAgaXNWaXNpYmxlLFxuICBpc1JUTCxcbiAgcmVmbG93LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjYXJvdXNlbCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNhcm91c2VsJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCdcbmNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0J1xuY29uc3QgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCA9IDUwMCAvLyBUaW1lIGZvciBtb3VzZSBjb21wYXQgZXZlbnRzIHRvIGZpcmUgYWZ0ZXIgdG91Y2hcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDQwXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGludGVydmFsOiA1MDAwLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgc2xpZGU6IGZhbHNlLFxuICBwYXVzZTogJ2hvdmVyJyxcbiAgd3JhcDogdHJ1ZSxcbiAgdG91Y2g6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGludGVydmFsOiAnKG51bWJlcnxib29sZWFuKScsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIHNsaWRlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIHBhdXNlOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHdyYXA6ICdib29sZWFuJyxcbiAgdG91Y2g6ICdib29sZWFuJ1xufVxuXG5jb25zdCBESVJFQ1RJT05fTkVYVCA9ICduZXh0J1xuY29uc3QgRElSRUNUSU9OX1BSRVYgPSAncHJldidcbmNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnXG5jb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnXG5cbmNvbnN0IEVWRU5UX1NMSURFID0gYHNsaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hTVEFSVCA9IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUkRPV04gPSBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRFJBR19TVEFSVCA9IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9DQVJPVVNFTCA9ICdjYXJvdXNlbCdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfU0xJREUgPSAnc2xpZGUnXG5jb25zdCBDTEFTU19OQU1FX0VORCA9ICdjYXJvdXNlbC1pdGVtLWVuZCdcbmNvbnN0IENMQVNTX05BTUVfU1RBUlQgPSAnY2Fyb3VzZWwtaXRlbS1zdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkVYVCA9ICdjYXJvdXNlbC1pdGVtLW5leHQnXG5jb25zdCBDTEFTU19OQU1FX1BSRVYgPSAnY2Fyb3VzZWwtaXRlbS1wcmV2J1xuY29uc3QgQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UID0gJ3BvaW50ZXItZXZlbnQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX0lURU0gPSAnLmFjdGl2ZS5jYXJvdXNlbC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSVRFTSA9ICcuY2Fyb3VzZWwtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0lURU1fSU1HID0gJy5jYXJvdXNlbC1pdGVtIGltZydcbmNvbnN0IFNFTEVDVE9SX05FWFRfUFJFViA9ICcuY2Fyb3VzZWwtaXRlbS1uZXh0LCAuY2Fyb3VzZWwtaXRlbS1wcmV2J1xuY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SUyA9ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycydcbmNvbnN0IFNFTEVDVE9SX0lORElDQVRPUiA9ICdbZGF0YS1icy10YXJnZXRdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9TTElERSA9ICdbZGF0YS1icy1zbGlkZV0sIFtkYXRhLWJzLXNsaWRlLXRvXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfUklERSA9ICdbZGF0YS1icy1yaWRlPVwiY2Fyb3VzZWxcIl0nXG5cbmNvbnN0IFBPSU5URVJfVFlQRV9UT1VDSCA9ICd0b3VjaCdcbmNvbnN0IFBPSU5URVJfVFlQRV9QRU4gPSAncGVuJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9pdGVtcyA9IG51bGxcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2VcbiAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbFxuICAgIHRoaXMudG91Y2hTdGFydFggPSAwXG4gICAgdGhpcy50b3VjaERlbHRhWCA9IDBcblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lORElDQVRPUlMsIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fdG91Y2hTdXBwb3J0ZWQgPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuICAgIHRoaXMuX3BvaW50ZXJFdmVudCA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBuZXh0KCkge1xuICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9zbGlkZShESVJFQ1RJT05fTkVYVClcbiAgICB9XG4gIH1cblxuICBuZXh0V2hlblZpc2libGUoKSB7XG4gICAgLy8gRG9uJ3QgY2FsbCBuZXh0IHdoZW4gdGhlIHBhZ2UgaXNuJ3QgdmlzaWJsZVxuICAgIC8vIG9yIHRoZSBjYXJvdXNlbCBvciBpdHMgcGFyZW50IGlzbid0IHZpc2libGVcbiAgICBpZiAoIWRvY3VtZW50LmhpZGRlbiAmJiBpc1Zpc2libGUodGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICB9XG5cbiAgcHJldigpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5fc2xpZGUoRElSRUNUSU9OX1BSRVYpXG4gICAgfVxuICB9XG5cbiAgcGF1c2UoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9ORVhUX1BSRVYsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KVxuICAgICAgdGhpcy5jeWNsZSh0cnVlKVxuICAgIH1cblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gIH1cblxuICBjeWNsZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCAmJiAhdGhpcy5faXNQYXVzZWQpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUludGVydmFsKClcblxuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA/IHRoaXMubmV4dFdoZW5WaXNpYmxlIDogdGhpcy5uZXh0KS5iaW5kKHRoaXMpLFxuICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICB0byhpbmRleCkge1xuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2FjdGl2ZUVsZW1lbnQpXG5cbiAgICBpZiAoaW5kZXggPiB0aGlzLl9pdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBpbmRleCA+IGFjdGl2ZUluZGV4ID9cbiAgICAgIERJUkVDVElPTl9ORVhUIDpcbiAgICAgIERJUkVDVElPTl9QUkVWXG5cbiAgICB0aGlzLl9zbGlkZShkaXJlY3Rpb24sIHRoaXMuX2l0ZW1zW2luZGV4XSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVkpXG5cbiAgICB0aGlzLl9pdGVtcyA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgPSBudWxsXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgdGhpcy5faXNQYXVzZWQgPSBudWxsXG4gICAgdGhpcy5faXNTbGlkaW5nID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9oYW5kbGVTd2lwZSgpIHtcbiAgICBjb25zdCBhYnNEZWx0YXggPSBNYXRoLmFicyh0aGlzLnRvdWNoRGVsdGFYKVxuXG4gICAgaWYgKGFic0RlbHRheCA8PSBTV0lQRV9USFJFU0hPTEQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFic0RlbHRheCAvIHRoaXMudG91Y2hEZWx0YVhcblxuICAgIHRoaXMudG91Y2hEZWx0YVggPSAwXG5cbiAgICAvLyBzd2lwZSBsZWZ0XG4gICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcbiAgICAgIGlmIChpc1JUTCkge1xuICAgICAgICB0aGlzLm5leHQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmV2KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzd2lwZSByaWdodFxuICAgIGlmIChkaXJlY3Rpb24gPCAwKSB7XG4gICAgICBpZiAoaXNSVEwpIHtcbiAgICAgICAgdGhpcy5wcmV2KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubmV4dCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VFTlRFUiwgZXZlbnQgPT4gdGhpcy5wYXVzZShldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VMRUFWRSwgZXZlbnQgPT4gdGhpcy5jeWNsZShldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b3VjaCAmJiB0aGlzLl90b3VjaFN1cHBvcnRlZCkge1xuICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpXG4gICAgfVxuICB9XG5cbiAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50ICYmIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKSkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQuY2xpZW50WFxuICAgICAgfSBlbHNlIGlmICghdGhpcy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtb3ZlID0gZXZlbnQgPT4ge1xuICAgICAgLy8gZW5zdXJlIHN3aXBpbmcgd2l0aCBvbmUgdG91Y2ggYW5kIG5vdCBwaW5jaGluZ1xuICAgICAgaWYgKGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRoaXMudG91Y2hEZWx0YVggPSAwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvdWNoRGVsdGFYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQgJiYgKGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfUEVOIHx8IGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfVE9VQ0gpKSB7XG4gICAgICAgIHRoaXMudG91Y2hEZWx0YVggPSBldmVudC5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WFxuICAgICAgfVxuXG4gICAgICB0aGlzLl9oYW5kbGVTd2lwZSgpXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICAgIC8vIElmIGl0J3MgYSB0b3VjaC1lbmFibGVkIGRldmljZSwgbW91c2VlbnRlci9sZWF2ZSBhcmUgZmlyZWQgYXNcbiAgICAgICAgLy8gcGFydCBvZiB0aGUgbW91c2UgY29tcGF0aWJpbGl0eSBldmVudHMgb24gZmlyc3QgdGFwIC0gdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAgIC8vIGhlcmUsIHdlIGxpc3RlbiBmb3IgdG91Y2hlbmQsIGV4cGxpY2l0bHkgcGF1c2UgdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIChhcyBpZiBpdCdzIHRoZSBzZWNvbmQgdGltZSB3ZSB0YXAgb24gaXQsIG1vdXNlZW50ZXIgY29tcGF0IGV2ZW50XG4gICAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgICAgLy8gZXZlbnRzIHRvIGZpcmUpIHdlIGV4cGxpY2l0bHkgcmVzdGFydCBjeWNsaW5nXG5cbiAgICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dChldmVudCA9PiB0aGlzLmN5Y2xlKGV2ZW50KSwgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCArIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU1fSU1HLCB0aGlzLl9lbGVtZW50KS5mb3JFYWNoKGl0ZW1JbWcgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKGl0ZW1JbWcsIEVWRU5UX0RSQUdfU1RBUlQsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUkRPV04sIGV2ZW50ID0+IHN0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSVVAsIGV2ZW50ID0+IGVuZChldmVudCkpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQpXG4gICAgfSBlbHNlIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSFNUQVJULCBldmVudCA9PiBzdGFydChldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hNT1ZFLCBldmVudCA9PiBtb3ZlKGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSEVORCwgZXZlbnQgPT4gZW5kKGV2ZW50KSlcbiAgICB9XG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gQVJST1dfTEVGVF9LRVkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGlmIChpc1JUTCkge1xuICAgICAgICB0aGlzLm5leHQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmV2KClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gQVJST1dfUklHSFRfS0VZKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoaXNSVEwpIHtcbiAgICAgICAgdGhpcy5wcmV2KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubmV4dCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgdGhpcy5faXRlbXMgPSBlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50Tm9kZSA/XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU0sIGVsZW1lbnQucGFyZW50Tm9kZSkgOlxuICAgICAgW11cblxuICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKGVsZW1lbnQpXG4gIH1cblxuICBfZ2V0SXRlbUJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgYWN0aXZlRWxlbWVudCkge1xuICAgIGNvbnN0IGlzTmV4dERpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX05FWFRcbiAgICBjb25zdCBpc1ByZXZEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9QUkVWXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBsYXN0SXRlbUluZGV4ID0gdGhpcy5faXRlbXMubGVuZ3RoIC0gMVxuICAgIGNvbnN0IGlzR29pbmdUb1dyYXAgPSAoaXNQcmV2RGlyZWN0aW9uICYmIGFjdGl2ZUluZGV4ID09PSAwKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc05leHREaXJlY3Rpb24gJiYgYWN0aXZlSW5kZXggPT09IGxhc3RJdGVtSW5kZXgpXG5cbiAgICBpZiAoaXNHb2luZ1RvV3JhcCAmJiAhdGhpcy5fY29uZmlnLndyYXApIHtcbiAgICAgIHJldHVybiBhY3RpdmVFbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3QgZGVsdGEgPSBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9QUkVWID8gLTEgOiAxXG4gICAgY29uc3QgaXRlbUluZGV4ID0gKGFjdGl2ZUluZGV4ICsgZGVsdGEpICUgdGhpcy5faXRlbXMubGVuZ3RoXG5cbiAgICByZXR1cm4gaXRlbUluZGV4ID09PSAtMSA/XG4gICAgICB0aGlzLl9pdGVtc1t0aGlzLl9pdGVtcy5sZW5ndGggLSAxXSA6XG4gICAgICB0aGlzLl9pdGVtc1tpdGVtSW5kZXhdXG4gIH1cblxuICBfdHJpZ2dlclNsaWRlRXZlbnQocmVsYXRlZFRhcmdldCwgZXZlbnREaXJlY3Rpb25OYW1lKSB7XG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgocmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBmcm9tSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudCkpXG5cbiAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJREUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQsXG4gICAgICBkaXJlY3Rpb246IGV2ZW50RGlyZWN0aW9uTmFtZSxcbiAgICAgIGZyb206IGZyb21JbmRleCxcbiAgICAgIHRvOiB0YXJnZXRJbmRleFxuICAgIH0pXG4gIH1cblxuICBfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICBjb25zdCBhY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRSwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICAgIGFjdGl2ZUluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgYWN0aXZlSW5kaWNhdG9yLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JylcblxuICAgICAgY29uc3QgaW5kaWNhdG9ycyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSU5ESUNBVE9SLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudClcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRpY2F0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChOdW1iZXIucGFyc2VJbnQoaW5kaWNhdG9yc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKSwgMTApID09PSB0aGlzLl9nZXRJdGVtSW5kZXgoZWxlbWVudCkpIHtcbiAgICAgICAgICBpbmRpY2F0b3JzW2ldLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICAgICAgaW5kaWNhdG9yc1tpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICd0cnVlJylcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUludGVydmFsKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRJbnRlcnZhbCA9IE51bWJlci5wYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1pbnRlcnZhbCcpLCAxMClcblxuICAgIGlmIChlbGVtZW50SW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gZWxlbWVudEludGVydmFsXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgfVxuICB9XG5cbiAgX3NsaWRlKGRpcmVjdGlvbiwgZWxlbWVudCkge1xuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KVxuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZWxlbWVudCB8fCAoYWN0aXZlRWxlbWVudCAmJiB0aGlzLl9nZXRJdGVtQnlEaXJlY3Rpb24oZGlyZWN0aW9uLCBhY3RpdmVFbGVtZW50KSlcblxuICAgIGNvbnN0IG5leHRFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgobmV4dEVsZW1lbnQpXG4gICAgY29uc3QgaXNDeWNsaW5nID0gQm9vbGVhbih0aGlzLl9pbnRlcnZhbClcblxuICAgIGNvbnN0IGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTkVYVCA/IENMQVNTX05BTUVfU1RBUlQgOiBDTEFTU19OQU1FX0VORFxuICAgIGNvbnN0IG9yZGVyQ2xhc3NOYW1lID0gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTkVYVCA/IENMQVNTX05BTUVfTkVYVCA6IENMQVNTX05BTUVfUFJFVlxuICAgIGNvbnN0IGV2ZW50RGlyZWN0aW9uTmFtZSA9IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX05FWFQgPyBESVJFQ1RJT05fTEVGVCA6IERJUkVDVElPTl9SSUdIVFxuXG4gICAgaWYgKG5leHRFbGVtZW50ICYmIG5leHRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSkpIHtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzbGlkZUV2ZW50ID0gdGhpcy5fdHJpZ2dlclNsaWRlRXZlbnQobmV4dEVsZW1lbnQsIGV2ZW50RGlyZWN0aW9uTmFtZSlcbiAgICBpZiAoc2xpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWVcblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgIH1cblxuICAgIHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobmV4dEVsZW1lbnQpXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG5leHRFbGVtZW50XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TTElERSkpIHtcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQob3JkZXJDbGFzc05hbWUpXG5cbiAgICAgIHJlZmxvdyhuZXh0RWxlbWVudClcblxuICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoYWN0aXZlRWxlbWVudClcblxuICAgICAgRXZlbnRIYW5kbGVyLm9uZShhY3RpdmVFbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShkaXJlY3Rpb25hbENsYXNzTmFtZSwgb3JkZXJDbGFzc05hbWUpXG4gICAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFLCBvcmRlckNsYXNzTmFtZSwgZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCB7XG4gICAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgICAgICAgZnJvbTogYWN0aXZlRWxlbWVudEluZGV4LFxuICAgICAgICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICAgICAgICB9KVxuICAgICAgICB9LCAwKVxuICAgICAgfSlcblxuICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQoYWN0aXZlRWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICAgIGZyb206IGFjdGl2ZUVsZW1lbnRJbmRleCxcbiAgICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGNhcm91c2VsSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGxldCBkYXRhID0gRGF0YS5nZXREYXRhKGVsZW1lbnQsIERBVEFfS0VZKVxuICAgIGxldCBfY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICBfY29uZmlnID0ge1xuICAgICAgICAuLi5fY29uZmlnLFxuICAgICAgICAuLi5jb25maWdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb24gPSB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGNvbmZpZyA6IF9jb25maWcuc2xpZGVcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgZGF0YSA9IG5ldyBDYXJvdXNlbChlbGVtZW50LCBfY29uZmlnKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgZGF0YS50byhjb25maWcpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2FjdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7YWN0aW9ufVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVthY3Rpb25dKClcbiAgICB9IGVsc2UgaWYgKF9jb25maWcuaW50ZXJ2YWwgJiYgX2NvbmZpZy5yaWRlKSB7XG4gICAgICBkYXRhLnBhdXNlKClcbiAgICAgIGRhdGEuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBDYXJvdXNlbC5jYXJvdXNlbEludGVyZmFjZSh0aGlzLCBjb25maWcpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBkYXRhQXBpQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRhcmdldCksXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzKVxuICAgIH1cbiAgICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKVxuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIGNvbmZpZy5pbnRlcnZhbCA9IGZhbHNlXG4gICAgfVxuXG4gICAgQ2Fyb3VzZWwuY2Fyb3VzZWxJbnRlcmZhY2UodGFyZ2V0LCBjb25maWcpXG5cbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgRGF0YS5nZXREYXRhKHRhcmdldCwgREFUQV9LRVkpLnRvKHNsaWRlSW5kZXgpXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9TTElERSwgQ2Fyb3VzZWwuZGF0YUFwaUNsaWNrSGFuZGxlcilcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBjYXJvdXNlbHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfUklERSlcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2Fyb3VzZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgQ2Fyb3VzZWwuY2Fyb3VzZWxJbnRlcmZhY2UoY2Fyb3VzZWxzW2ldLCBEYXRhLmdldERhdGEoY2Fyb3VzZWxzW2ldLCBEQVRBX0tFWSkpXG4gIH1cbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5DYXJvdXNlbCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihOQU1FLCBDYXJvdXNlbClcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEyKTogY29sbGFwc2UuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGVtdWxhdGVUcmFuc2l0aW9uRW5kLFxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50LFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcbiAgaXNFbGVtZW50LFxuICByZWZsb3csXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnY29sbGFwc2UnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jb2xsYXBzZSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICB0b2dnbGU6IHRydWUsXG4gIHBhcmVudDogJydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIHRvZ2dsZTogJ2Jvb2xlYW4nLFxuICBwYXJlbnQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFID0gJ2NvbGxhcHNlJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTSU5HID0gJ2NvbGxhcHNpbmcnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFRCA9ICdjb2xsYXBzZWQnXG5cbmNvbnN0IFdJRFRIID0gJ3dpZHRoJ1xuY29uc3QgSEVJR0hUID0gJ2hlaWdodCdcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFUyA9ICcuc2hvdywgLmNvbGxhcHNpbmcnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gU2VsZWN0b3JFbmdpbmUuZmluZChcbiAgICAgIGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfVtocmVmPVwiIyR7ZWxlbWVudC5pZH1cIl0sYCArXG4gICAgICBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1bZGF0YS1icy10YXJnZXQ9XCIjJHtlbGVtZW50LmlkfVwiXWBcbiAgICApXG5cbiAgICBjb25zdCB0b2dnbGVMaXN0ID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtID0gdG9nZ2xlTGlzdFtpXVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pXG4gICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcbiAgICAgICAgLmZpbHRlcihmb3VuZEVsZW0gPT4gZm91bmRFbGVtID09PSBlbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnQgPyB0aGlzLl9nZXRQYXJlbnQoKSA6IG51bGxcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX2VsZW1lbnQsIHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBhY3RpdmVzXG4gICAgbGV0IGFjdGl2ZXNEYXRhXG5cbiAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICBhY3RpdmVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9BQ1RJVkVTLCB0aGlzLl9wYXJlbnQpXG4gICAgICAgIC5maWx0ZXIoZWxlbSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXBhcmVudCcpID09PSB0aGlzLl9jb25maWcucGFyZW50XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICAgIH0pXG5cbiAgICAgIGlmIChhY3RpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhY3RpdmVzID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUodGhpcy5fc2VsZWN0b3IpXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIGNvbnN0IHRlbXBBY3RpdmVEYXRhID0gYWN0aXZlcy5maW5kKGVsZW0gPT4gY29udGFpbmVyICE9PSBlbGVtKVxuICAgICAgYWN0aXZlc0RhdGEgPSB0ZW1wQWN0aXZlRGF0YSA/IERhdGEuZ2V0RGF0YSh0ZW1wQWN0aXZlRGF0YSwgREFUQV9LRVkpIDogbnVsbFxuXG4gICAgICBpZiAoYWN0aXZlc0RhdGEgJiYgYWN0aXZlc0RhdGEuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVylcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlcykge1xuICAgICAgYWN0aXZlcy5mb3JFYWNoKGVsZW1BY3RpdmUgPT4ge1xuICAgICAgICBpZiAoY29udGFpbmVyICE9PSBlbGVtQWN0aXZlKSB7XG4gICAgICAgICAgQ29sbGFwc2UuY29sbGFwc2VJbnRlcmZhY2UoZWxlbUFjdGl2ZSwgJ2hpZGUnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhY3RpdmVzRGF0YSkge1xuICAgICAgICAgIERhdGEuc2V0RGF0YShlbGVtQWN0aXZlLCBEQVRBX0tFWSwgbnVsbClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORylcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IDBcblxuICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICB0aGlzLl90cmlnZ2VyQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVylcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsIGNvbXBsZXRlKVxuXG4gICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV19cHhgXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl19cHhgXG5cbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IHRyaWdnZXJBcnJheUxlbmd0aCA9IHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGhcbiAgICBpZiAodHJpZ2dlckFycmF5TGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmlnZ2VyQXJyYXlMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy5fdHJpZ2dlckFycmF5W2ldXG4gICAgICAgIGNvbnN0IGVsZW0gPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRyaWdnZXIpXG5cbiAgICAgICAgaWYgKGVsZW0gJiYgIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgICB0cmlnZ2VyLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICAgICAgdHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsIGNvbXBsZXRlKVxuICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQsIHRyYW5zaXRpb25EdXJhdGlvbilcbiAgfVxuXG4gIHNldFRyYW5zaXRpb25pbmcoaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gaXNUcmFuc2l0aW9uaW5nXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICAgIHRoaXMuX2NvbmZpZyA9IG51bGxcbiAgICB0aGlzLl9wYXJlbnQgPSBudWxsXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gbnVsbFxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSkgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhXSURUSCkgPyBXSURUSCA6IEhFSUdIVFxuICB9XG5cbiAgX2dldFBhcmVudCgpIHtcbiAgICBsZXQgeyBwYXJlbnQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKGlzRWxlbWVudChwYXJlbnQpKSB7XG4gICAgICAvLyBpdCdzIGEgalF1ZXJ5IG9iamVjdFxuICAgICAgaWYgKHR5cGVvZiBwYXJlbnQuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgcGFyZW50WzBdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnRbMF1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShwYXJlbnQpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1bZGF0YS1icy1wYXJlbnQ9XCIke3BhcmVudH1cIl1gXG5cbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yLCBwYXJlbnQpXG4gICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFxuICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgIFtlbGVtZW50XVxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgcmV0dXJuIHBhcmVudFxuICB9XG5cbiAgX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhlbGVtZW50LCB0cmlnZ2VyQXJyYXkpIHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgIXRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzT3BlbiA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRyaWdnZXJBcnJheS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICB9XG5cbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH0pXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgY29sbGFwc2VJbnRlcmZhY2UoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgbGV0IGRhdGEgPSBEYXRhLmdldERhdGEoZWxlbWVudCwgREFUQV9LRVkpXG4gICAgY29uc3QgX2NvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEgJiYgX2NvbmZpZy50b2dnbGUgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgJiYgL3Nob3d8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gbmV3IENvbGxhcHNlKGVsZW1lbnQsIF9jb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBDb2xsYXBzZS5jb2xsYXBzZUludGVyZmFjZSh0aGlzLCBjb25maWcpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyB8fCAoZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJEYXRhID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcylcbiAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG4gIGNvbnN0IHNlbGVjdG9yRWxlbWVudHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKVxuXG4gIHNlbGVjdG9yRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBjb25zdCBkYXRhID0gRGF0YS5nZXREYXRhKGVsZW1lbnQsIERBVEFfS0VZKVxuICAgIGxldCBjb25maWdcbiAgICBpZiAoZGF0YSkge1xuICAgICAgLy8gdXBkYXRlIHBhcmVudCBhdHRyaWJ1dGVcbiAgICAgIGlmIChkYXRhLl9wYXJlbnQgPT09IG51bGwgJiYgdHlwZW9mIHRyaWdnZXJEYXRhLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZGF0YS5fY29uZmlnLnBhcmVudCA9IHRyaWdnZXJEYXRhLnBhcmVudFxuICAgICAgICBkYXRhLl9wYXJlbnQgPSBkYXRhLl9nZXRQYXJlbnQoKVxuICAgICAgfVxuXG4gICAgICBjb25maWcgPSAndG9nZ2xlJ1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcgPSB0cmlnZ2VyRGF0YVxuICAgIH1cblxuICAgIENvbGxhcHNlLmNvbGxhcHNlSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZylcbiAgfSlcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Db2xsYXBzZSB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihOQU1FLCBDb2xsYXBzZSlcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEyKTogZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgaXNFbGVtZW50LFxuICBpc1Zpc2libGUsXG4gIGlzUlRMLFxuICBub29wLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Ryb3Bkb3duJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZHJvcGRvd24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5jb25zdCBTUEFDRV9LRVkgPSAnU3BhY2UnXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IEFSUk9XX1VQX0tFWSA9ICdBcnJvd1VwJ1xuY29uc3QgQVJST1dfRE9XTl9LRVkgPSAnQXJyb3dEb3duJ1xuY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMiAvLyBNb3VzZUV2ZW50LmJ1dHRvbiB2YWx1ZSBmb3IgdGhlIHNlY29uZGFyeSBidXR0b24sIHVzdWFsbHkgdGhlIHJpZ2h0IGJ1dHRvblxuXG5jb25zdCBSRUdFWFBfS0VZRE9XTiA9IG5ldyBSZWdFeHAoYCR7QVJST1dfVVBfS0VZfXwke0FSUk9XX0RPV05fS0VZfXwke0VTQ0FQRV9LRVl9YClcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0sgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fREFUQV9BUEkgPSBga2V5ZG93biR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWVVQX0RBVEFfQVBJID0gYGtleXVwJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RJU0FCTEVEID0gJ2Rpc2FibGVkJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUCA9ICdkcm9wdXAnXG5jb25zdCBDTEFTU19OQU1FX0RST1BFTkQgPSAnZHJvcGVuZCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFNUQVJUID0gJ2Ryb3BzdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkFWQkFSID0gJ25hdmJhcidcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIl0nXG5jb25zdCBTRUxFQ1RPUl9GT1JNX0NISUxEID0gJy5kcm9wZG93biBmb3JtJ1xuY29uc3QgU0VMRUNUT1JfTUVOVSA9ICcuZHJvcGRvd24tbWVudSdcbmNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgPSAnLm5hdmJhci1uYXYnXG5jb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xuXG5jb25zdCBQTEFDRU1FTlRfVE9QID0gaXNSVEwgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUEVORCA9IGlzUlRMID8gJ3RvcC1zdGFydCcgOiAndG9wLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT00gPSBpc1JUTCA/ICdib3R0b20tZW5kJyA6ICdib3R0b20tc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NRU5EID0gaXNSVEwgPyAnYm90dG9tLXN0YXJ0JyA6ICdib3R0b20tZW5kJ1xuY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gaXNSVEwgPyAnbGVmdC1zdGFydCcgOiAncmlnaHQtc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfTEVGVCA9IGlzUlRMID8gJ3JpZ2h0LXN0YXJ0JyA6ICdsZWZ0LXN0YXJ0J1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQ6IFswLCAyXSxcbiAgZmxpcDogdHJ1ZSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICByZWZlcmVuY2U6ICd0b2dnbGUnLFxuICBkaXNwbGF5OiAnZHluYW1pYycsXG4gIHBvcHBlckNvbmZpZzogbnVsbFxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICBmbGlwOiAnYm9vbGVhbicsXG4gIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIHJlZmVyZW5jZTogJyhzdHJpbmd8ZWxlbWVudHxvYmplY3QpJyxcbiAgZGlzcGxheTogJ3N0cmluZycsXG4gIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fbWVudSA9IHRoaXMuX2dldE1lbnVFbGVtZW50KClcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5kaXNhYmxlZCB8fCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RJU0FCTEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBEcm9wZG93bi5jbGVhck1lbnVzKClcblxuICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zaG93KClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9ESVNBQkxFRCkgfHwgdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFRvdGFsbHkgZGlzYWJsZSBQb3BwZXIgZm9yIERyb3Bkb3ducyBpbiBOYXZiYXJcbiAgICBpZiAodGhpcy5faW5OYXZiYXIpIHtcbiAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicsICdub25lJylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgZHJvcGRvd25zIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJylcbiAgICAgIH1cblxuICAgICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gcGFyZW50XG4gICAgICB9IGVsc2UgaWYgKGlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVxuXG4gICAgICAgIC8vIENoZWNrIGlmIGl0J3MgalF1ZXJ5IGVsZW1lbnRcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlLmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVswXVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwb3BwZXJDb25maWcgPSB0aGlzLl9nZXRQb3BwZXJDb25maWcoKVxuICAgICAgY29uc3QgaXNEaXNwbGF5U3RhdGljID0gcG9wcGVyQ29uZmlnLm1vZGlmaWVycy5maW5kKG1vZGlmaWVyID0+IG1vZGlmaWVyLm5hbWUgPT09ICdhcHBseVN0eWxlcycgJiYgbW9kaWZpZXIuZW5hYmxlZCA9PT0gZmFsc2UpXG5cbiAgICAgIHRoaXMuX3BvcHBlciA9IFBvcHBlci5jcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgcG9wcGVyQ29uZmlnKVxuXG4gICAgICBpZiAoaXNEaXNwbGF5U3RhdGljKSB7XG4gICAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicsICdzdGF0aWMnKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgIXBhcmVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUl9OQVYpKSB7XG4gICAgICBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbilcbiAgICAgICAgLmZvckVhY2goZWxlbSA9PiBFdmVudEhhbmRsZXIub24oZWxlbSwgJ21vdXNlb3ZlcicsIG51bGwsIG5vb3AoKSkpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuXG4gICAgdGhpcy5fbWVudS5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCByZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5kaXNhYmxlZCB8fCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RJU0FCTEVEKSB8fCAhdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy5fbWVudS5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOLCByZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWSlcbiAgICB0aGlzLl9tZW51ID0gbnVsbFxuXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0ssIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi5jb25maWdcbiAgICB9XG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50KGNvbmZpZy5yZWZlcmVuY2UpICYmXG4gICAgICB0eXBlb2YgY29uZmlnLnJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09ICdmdW5jdGlvbidcbiAgICApIHtcbiAgICAgIC8vIFBvcHBlciB2aXJ0dWFsIGVsZW1lbnRzIHJlcXVpcmUgYSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke05BTUUudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcInJlZmVyZW5jZVwiIHByb3ZpZGVkIHR5cGUgXCJvYmplY3RcIiB3aXRob3V0IGEgcmVxdWlyZWQgXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIiBtZXRob2QuYClcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0TWVudUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLm5leHQodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF1cbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgcGFyZW50RHJvcGRvd24gPSB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGVcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9SSUdIVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QU1RBUlQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX0xFRlRcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIHRvIHRyaW0gdGhlIHZhbHVlIGJlY2F1c2UgY3VzdG9tIHByb3BlcnRpZXMgY2FuIGFsc28gaW5jbHVkZSBzcGFjZXNcbiAgICBjb25zdCBpc0VuZCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1icy1wb3NpdGlvbicpLnRyaW0oKSA9PT0gJ2VuZCdcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfVE9QRU5EIDogUExBQ0VNRU5UX1RPUFxuICAgIH1cblxuICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9CT1RUT01FTkQgOiBQTEFDRU1FTlRfQk9UVE9NXG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoYC4ke0NMQVNTX05BTUVfTkFWQkFSfWApICE9PSBudWxsXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWwgPT4gTnVtYmVyLnBhcnNlSW50KHZhbCwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYWx0Qm91bmRhcnk6IHRoaXMuX2NvbmZpZy5mbGlwLFxuICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBQb3BwZXIgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgZGVmYXVsdEJzUG9wcGVyQ29uZmlnLm1vZGlmaWVycyA9IFt7XG4gICAgICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi4odHlwZW9mIHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKGRlZmF1bHRCc1BvcHBlckNvbmZpZykgOiB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBkcm9wZG93bkludGVyZmFjZShlbGVtZW50LCBjb25maWcpIHtcbiAgICBsZXQgZGF0YSA9IERhdGEuZ2V0RGF0YShlbGVtZW50LCBEQVRBX0tFWSlcbiAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsXG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGRhdGEgPSBuZXcgRHJvcGRvd24oZWxlbWVudCwgX2NvbmZpZylcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIERyb3Bkb3duLmRyb3Bkb3duSW50ZXJmYWNlKHRoaXMsIGNvbmZpZylcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGNsZWFyTWVudXMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LmJ1dHRvbiA9PT0gUklHSFRfTU9VU0VfQlVUVE9OIHx8IChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSAhPT0gVEFCX0tFWSkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gRGF0YS5nZXREYXRhKHRvZ2dsZXNbaV0sIERBVEFfS0VZKVxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdG9nZ2xlc1tpXVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudFxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHJvcGRvd25NZW51ID0gY29udGV4dC5fbWVudVxuICAgICAgaWYgKCF0b2dnbGVzW2ldLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCAmJiAoKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiZcbiAgICAgICAgICAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkgfHxcbiAgICAgICAgICAoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkpKSAmJlxuICAgICAgICAgIGRyb3Bkb3duTWVudS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRvZ2dsZXNbaV0sIEVWRU5UX0hJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKVxuICAgICAgICAgIC5mb3JFYWNoKGVsZW0gPT4gRXZlbnRIYW5kbGVyLm9mZihlbGVtLCAnbW91c2VvdmVyJywgbnVsbCwgbm9vcCgpKSlcbiAgICAgIH1cblxuICAgICAgdG9nZ2xlc1tpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuXG4gICAgICBpZiAoY29udGV4dC5fcG9wcGVyKSB7XG4gICAgICAgIGNvbnRleHQuX3BvcHBlci5kZXN0cm95KClcbiAgICAgIH1cblxuICAgICAgZHJvcGRvd25NZW51LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgdG9nZ2xlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUoZHJvcGRvd25NZW51LCAncG9wcGVyJylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRvZ2dsZXNbaV0sIEVWRU5UX0hJRERFTiwgcmVsYXRlZFRhcmdldClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0UGFyZW50RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpIHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgc3RhdGljIGRhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgIC8vIElmIG5vdCBpbnB1dC90ZXh0YXJlYTpcbiAgICAvLyAgLSBBbmQgbm90IGEga2V5IGluIFJFR0VYUF9LRVlET1dOID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYTpcbiAgICAvLyAgLSBJZiBzcGFjZSBrZXkgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vICAtIElmIGtleSBpcyBvdGhlciB0aGFuIGVzY2FwZVxuICAgIC8vICAgIC0gSWYga2V5IGlzIG5vdCB1cCBvciBkb3duID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyAgICAtIElmIHRyaWdnZXIgaW5zaWRlIHRoZSBtZW51ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkgP1xuICAgICAgZXZlbnQua2V5ID09PSBTUEFDRV9LRVkgfHwgKGV2ZW50LmtleSAhPT0gRVNDQVBFX0tFWSAmJlxuICAgICAgKChldmVudC5rZXkgIT09IEFSUk9XX0RPV05fS0VZICYmIGV2ZW50LmtleSAhPT0gQVJST1dfVVBfS0VZKSB8fFxuICAgICAgICBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9NRU5VKSkpIDpcbiAgICAgICFSRUdFWFBfS0VZRE9XTi50ZXN0KGV2ZW50LmtleSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9ESVNBQkxFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLmdldFBhcmVudEZyb21FbGVtZW50KHRoaXMpXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZKSB7XG4gICAgICBjb25zdCBidXR0b24gPSB0aGlzLm1hdGNoZXMoU0VMRUNUT1JfREFUQV9UT0dHTEUpID8gdGhpcyA6IFNlbGVjdG9yRW5naW5lLnByZXYodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUpWzBdXG4gICAgICBidXR0b24uZm9jdXMoKVxuICAgICAgRHJvcGRvd24uY2xlYXJNZW51cygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzQWN0aXZlICYmIChldmVudC5rZXkgPT09IEFSUk9XX1VQX0tFWSB8fCBldmVudC5rZXkgPT09IEFSUk9XX0RPV05fS0VZKSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSA/IHRoaXMgOiBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXVxuICAgICAgYnV0dG9uLmNsaWNrKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNBY3RpdmUgfHwgZXZlbnQua2V5ID09PSBTUEFDRV9LRVkpIHtcbiAgICAgIERyb3Bkb3duLmNsZWFyTWVudXMoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMsIHBhcmVudCkuZmlsdGVyKGlzVmlzaWJsZSlcblxuICAgIGlmICghaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgaW5kZXggPSBpdGVtcy5pbmRleE9mKGV2ZW50LnRhcmdldClcblxuICAgIC8vIFVwXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gQVJST1dfVVBfS0VZICYmIGluZGV4ID4gMCkge1xuICAgICAgaW5kZXgtLVxuICAgIH1cblxuICAgIC8vIERvd25cbiAgICBpZiAoZXZlbnQua2V5ID09PSBBUlJPV19ET1dOX0tFWSAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICAvLyBpbmRleCBpcyAtMSBpZiB0aGUgZmlyc3Qga2V5ZG93biBpcyBhbiBBcnJvd1VwXG4gICAgaW5kZXggPSBpbmRleCA9PT0gLTEgPyAwIDogaW5kZXhcblxuICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX01FTlUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gIERyb3Bkb3duLmRyb3Bkb3duSW50ZXJmYWNlKHRoaXMsICd0b2dnbGUnKVxufSlcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0ZPUk1fQ0hJTEQsIGUgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkRyb3Bkb3duIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE5BTUUsIERyb3Bkb3duKVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTIpOiBtb2RhbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICBpc1Zpc2libGUsXG4gIGlzUlRMLFxuICByZWZsb3csXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnbW9kYWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5tb2RhbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgZm9jdXM6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIGZvY3VzOiAnYm9vbGVhbidcbn1cblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1JFU0laRSA9IGByZXNpemUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19ESVNNSVNTID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VVUF9ESVNNSVNTID0gYG1vdXNldXAuZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTID0gYG1vdXNlZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0NST0xMQkFSX01FQVNVUkVSID0gJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJ1xuY29uc3QgQ0xBU1NfTkFNRV9CQUNLRFJPUCA9ICdtb2RhbC1iYWNrZHJvcCdcbmNvbnN0IENMQVNTX05BTUVfT1BFTiA9ICdtb2RhbC1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU1RBVElDID0gJ21vZGFsLXN0YXRpYydcblxuY29uc3QgU0VMRUNUT1JfRElBTE9HID0gJy5tb2RhbC1kaWFsb2cnXG5jb25zdCBTRUxFQ1RPUl9NT0RBTF9CT0RZID0gJy5tb2RhbC1ib2R5J1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIl0nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MgPSAnW2RhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJdJ1xuY29uc3QgU0VMRUNUT1JfRklYRURfQ09OVEVOVCA9ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJ1xuY29uc3QgU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQgPSAnLnN0aWNreS10b3AnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBNb2RhbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9kaWFsb2cgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RJQUxPRywgZWxlbWVudClcbiAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGxcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IGZhbHNlXG4gICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IDBcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0XG4gICAgfSlcblxuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuXG4gICAgdGhpcy5fY2hlY2tTY3JvbGxiYXIoKVxuICAgIHRoaXMuX3NldFNjcm9sbGJhcigpXG5cbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuXG4gICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MsIGV2ZW50ID0+IHRoaXMuaGlkZShldmVudCkpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZGlhbG9nLCBFVkVOVF9NT1VTRURPV05fRElTTUlTUywgKCkgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRVVQX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5fZWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB0aGlzLl9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGhpZGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTilcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9kaWFsb2csIEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTKVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnLCBldmVudCA9PiB0aGlzLl9oaWRlTW9kYWwoZXZlbnQpKVxuICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlTW9kYWwoKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgW3dpbmRvdywgdGhpcy5fZWxlbWVudCwgdGhpcy5fZGlhbG9nXVxuICAgICAgLmZvckVhY2goaHRtbEVsZW1lbnQgPT4gRXZlbnRIYW5kbGVyLm9mZihodG1sRWxlbWVudCwgRVZFTlRfS0VZKSlcblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuXG4gICAgLyoqXG4gICAgICogYGRvY3VtZW50YCBoYXMgMiBldmVudHMgYEVWRU5UX0ZPQ1VTSU5gIGFuZCBgRVZFTlRfQ0xJQ0tfREFUQV9BUElgXG4gICAgICogRG8gbm90IG1vdmUgYGRvY3VtZW50YCBpbiBgaHRtbEVsZW1lbnRzYCBhcnJheVxuICAgICAqIEl0IHdpbGwgcmVtb3ZlIGBFVkVOVF9DTElDS19EQVRBX0FQSWAgZXZlbnQgdGhhdCBzaG91bGQgcmVtYWluXG4gICAgICovXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTilcblxuICAgIHRoaXMuX2NvbmZpZyA9IG51bGxcbiAgICB0aGlzLl9kaWFsb2cgPSBudWxsXG4gICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsXG4gICAgdGhpcy5faXNTaG93biA9IG51bGxcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IG51bGxcbiAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gbnVsbFxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IG51bGxcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZSgpIHtcbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkge1xuICAgIGNvbnN0IHRyYW5zaXRpb24gPSB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gICAgY29uc3QgbW9kYWxCb2R5ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NT0RBTF9CT0RZLCB0aGlzLl9kaWFsb2cpXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSB8fCB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAvLyBEb24ndCBtb3ZlIG1vZGFsJ3MgRE9NIHBvc2l0aW9uXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwXG5cbiAgICBpZiAobW9kYWxCb2R5KSB7XG4gICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMFxuICAgIH1cblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICByZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzKClcbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZGlhbG9nKVxuXG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2RpYWxvZywgJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uQ29tcGxldGUpXG4gICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9kaWFsb2csIHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbkNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBfZW5mb3JjZUZvY3VzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4pIC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4ge1xuICAgICAgaWYgKGRvY3VtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgICB0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgICAhdGhpcy5fZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBfc2V0RXNjYXBlRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCAmJiBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fY29uZmlnLmtleWJvYXJkICYmIGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUylcbiAgICB9XG4gIH1cblxuICBfc2V0UmVzaXplRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX1JFU0laRSwgKCkgPT4gdGhpcy5fYWRqdXN0RGlhbG9nKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYod2luZG93LCBFVkVOVF9SRVNJWkUpXG4gICAgfVxuICB9XG5cbiAgX2hpZGVNb2RhbCgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfT1BFTilcbiAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgdGhpcy5fcmVzZXRTY3JvbGxiYXIoKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH0pXG4gIH1cblxuICBfcmVtb3ZlQmFja2Ryb3AoKSB7XG4gICAgdGhpcy5fYmFja2Ryb3AucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9iYWNrZHJvcClcbiAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGxcbiAgfVxuXG4gIF9zaG93QmFja2Ryb3AoY2FsbGJhY2spIHtcbiAgICBjb25zdCBhbmltYXRlID0gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSA/XG4gICAgICBDTEFTU19OQU1FX0ZBREUgOlxuICAgICAgJydcblxuICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgdGhpcy5fYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9CQUNLRFJPUFxuXG4gICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc0xpc3QuYWRkKGFuaW1hdGUpXG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fYmFja2Ryb3ApXG5cbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrKSB7XG4gICAgICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgIHJlZmxvdyh0aGlzLl9iYWNrZHJvcClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAgIGlmICghYW5pbWF0ZSkge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2JhY2tkcm9wKVxuXG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2JhY2tkcm9wLCAndHJhbnNpdGlvbmVuZCcsIGNhbGxiYWNrKVxuICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fYmFja2Ryb3AsIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24gJiYgdGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICBjb25zdCBjYWxsYmFja1JlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQmFja2Ryb3AoKVxuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKSB7XG4gICAgICAgIGNvbnN0IGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fYmFja2Ryb3ApXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fYmFja2Ryb3AsICd0cmFuc2l0aW9uZW5kJywgY2FsbGJhY2tSZW1vdmUpXG4gICAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2JhY2tkcm9wLCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrUmVtb3ZlKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIF90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCkge1xuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cbiAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NUQVRJQylcbiAgICBjb25zdCBtb2RhbFRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2RpYWxvZylcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsICd0cmFuc2l0aW9uZW5kJylcbiAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU1RBVElDKVxuICAgICAgaWYgKCFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICcnXG4gICAgICAgIH0pXG4gICAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQsIG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgfVxuICAgIH0pXG4gICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgbW9kYWxUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBfYWRqdXN0RGlhbG9nKCkge1xuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9XG4gICAgICB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcblxuICAgIGlmICgoIXRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZyAmJiAhaXNSVEwpIHx8ICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nICYmIGlzUlRMKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IGAke3RoaXMuX3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cblxuICAgIGlmICgodGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgIWlzTW9kYWxPdmVyZmxvd2luZyAmJiAhaXNSVEwpIHx8ICghdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nICYmIGlzUlRMKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG4gIH1cblxuICBfcmVzZXRBZGp1c3RtZW50cygpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJydcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnXG4gIH1cblxuICBfY2hlY2tTY3JvbGxiYXIoKSB7XG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IE1hdGgucm91bmQocmVjdC5sZWZ0ICsgcmVjdC5yaWdodCkgPCB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gdGhpcy5fZ2V0U2Nyb2xsYmFyV2lkdGgoKVxuICB9XG5cbiAgX3NldFNjcm9sbGJhcigpIHtcbiAgICBpZiAodGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcpIHtcbiAgICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsICdwYWRkaW5nUmlnaHQnLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGgpXG4gICAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgJ21hcmdpblJpZ2h0JywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSAtIHRoaXMuX3Njcm9sbGJhcldpZHRoKVxuICAgICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoJ2JvZHknLCAncGFkZGluZ1JpZ2h0JywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHRoaXMuX3Njcm9sbGJhcldpZHRoKVxuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX09QRU4pXG4gIH1cblxuICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoc2VsZWN0b3IsIHN0eWxlUHJvcCwgY2FsbGJhY2spIHtcbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKVxuICAgICAgLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZWxlbWVudC5zdHlsZVtzdHlsZVByb3BdXG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3N0eWxlUHJvcF1cbiAgICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3AsIGFjdHVhbFZhbHVlKVxuICAgICAgICBlbGVtZW50LnN0eWxlW3N0eWxlUHJvcF0gPSBjYWxsYmFjayhOdW1iZXIucGFyc2VGbG9hdChjYWxjdWxhdGVkVmFsdWUpKSArICdweCdcbiAgICAgIH0pXG4gIH1cblxuICBfcmVzZXRTY3JvbGxiYXIoKSB7XG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCAncGFkZGluZ1JpZ2h0JylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCAnbWFyZ2luUmlnaHQnKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoJ2JvZHknLCAncGFkZGluZ1JpZ2h0JylcbiAgfVxuXG4gIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3ApIHtcbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcClcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZVtzdHlsZVByb3BdID0gJydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wKVxuICAgICAgICBlbGVtZW50LnN0eWxlW3N0eWxlUHJvcF0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7IC8vIHRoeCBkLndhbHNoXG4gICAgY29uc3Qgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9TQ1JPTExCQVJfTUVBU1VSRVJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdilcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aFxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KVxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcsIHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXREYXRhKHRoaXMsIERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uRGVmYXVsdCxcbiAgICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcyksXG4gICAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgTW9kYWwodGhpcywgX2NvbmZpZylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAodGhpcy50YWdOYW1lID09PSAnQScgfHwgdGhpcy50YWdOYW1lID09PSAnQVJFQScpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfU0hPVywgc2hvd0V2ZW50ID0+IHtcbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIC8vIG9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBsZXQgZGF0YSA9IERhdGEuZ2V0RGF0YSh0YXJnZXQsIERBVEFfS0VZKVxuICBpZiAoIWRhdGEpIHtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0YXJnZXQpLFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcylcbiAgICB9XG5cbiAgICBkYXRhID0gbmV3IE1vZGFsKHRhcmdldCwgY29uZmlnKVxuICB9XG5cbiAgZGF0YS50b2dnbGUodGhpcylcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Nb2RhbCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihOQU1FLCBNb2RhbClcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEyKTogdXRpbC9zYW5pdGl6ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCB1cmlBdHRycyA9IG5ldyBTZXQoW1xuICAnYmFja2dyb3VuZCcsXG4gICdjaXRlJyxcbiAgJ2hyZWYnLFxuICAnaXRlbXR5cGUnLFxuICAnbG9uZ2Rlc2MnLFxuICAncG9zdGVyJyxcbiAgJ3NyYycsXG4gICd4bGluazpocmVmJ1xuXSlcblxuY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBhIGNvbW1vbmx5IHVzZWZ1bCBzdWJzZXQgb2YgVVJMcyB0aGF0IGFyZSBzYWZlLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD86KD86aHR0cHM/fG1haWx0b3xmdHB8dGVsfGZpbGUpOnxbXiMmLzo/XSooPzpbIy8/XXwkKSkvZ2lcblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCBtYXRjaGVzIHNhZmUgZGF0YSBVUkxzLiBPbmx5IG1hdGNoZXMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyB0eXBlcy5cbiAqXG4gKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gKi9cbmNvbnN0IERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGE6KD86aW1hZ2VcXC8oPzpibXB8Z2lmfGpwZWd8anBnfHBuZ3x0aWZmfHdlYnApfHZpZGVvXFwvKD86bXBlZ3xtcDR8b2dnfHdlYm0pfGF1ZGlvXFwvKD86bXAzfG9nYXxvZ2d8b3B1cykpO2Jhc2U2NCxbXFxkKy9hLXpdKz0qJC9pXG5cbmNvbnN0IGFsbG93ZWRBdHRyaWJ1dGUgPSAoYXR0ciwgYWxsb3dlZEF0dHJpYnV0ZUxpc3QpID0+IHtcbiAgY29uc3QgYXR0ck5hbWUgPSBhdHRyLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICBpZiAoYWxsb3dlZEF0dHJpYnV0ZUxpc3QuaW5jbHVkZXMoYXR0ck5hbWUpKSB7XG4gICAgaWYgKHVyaUF0dHJzLmhhcyhhdHRyTmFtZSkpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFNBRkVfVVJMX1BBVFRFUk4udGVzdChhdHRyLm5vZGVWYWx1ZSkgfHwgREFUQV9VUkxfUEFUVEVSTi50ZXN0KGF0dHIubm9kZVZhbHVlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uc3QgcmVnRXhwID0gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKGF0dHJSZWdleCA9PiBhdHRyUmVnZXggaW5zdGFuY2VvZiBSZWdFeHApXG5cbiAgLy8gQ2hlY2sgaWYgYSByZWd1bGFyIGV4cHJlc3Npb24gdmFsaWRhdGVzIHRoZSBhdHRyaWJ1dGUuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZWdFeHAubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAocmVnRXhwW2ldLnRlc3QoYXR0ck5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdEFsbG93bGlzdCA9IHtcbiAgLy8gR2xvYmFsIGF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBhbnkgc3VwcGxpZWQgZWxlbWVudCBiZWxvdy5cbiAgJyonOiBbJ2NsYXNzJywgJ2RpcicsICdpZCcsICdsYW5nJywgJ3JvbGUnLCBBUklBX0FUVFJJQlVURV9QQVRURVJOXSxcbiAgYTogWyd0YXJnZXQnLCAnaHJlZicsICd0aXRsZScsICdyZWwnXSxcbiAgYXJlYTogW10sXG4gIGI6IFtdLFxuICBicjogW10sXG4gIGNvbDogW10sXG4gIGNvZGU6IFtdLFxuICBkaXY6IFtdLFxuICBlbTogW10sXG4gIGhyOiBbXSxcbiAgaDE6IFtdLFxuICBoMjogW10sXG4gIGgzOiBbXSxcbiAgaDQ6IFtdLFxuICBoNTogW10sXG4gIGg2OiBbXSxcbiAgaTogW10sXG4gIGltZzogWydzcmMnLCAnc3Jjc2V0JywgJ2FsdCcsICd0aXRsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcbiAgbGk6IFtdLFxuICBvbDogW10sXG4gIHA6IFtdLFxuICBwcmU6IFtdLFxuICBzOiBbXSxcbiAgc21hbGw6IFtdLFxuICBzcGFuOiBbXSxcbiAgc3ViOiBbXSxcbiAgc3VwOiBbXSxcbiAgc3Ryb25nOiBbXSxcbiAgdTogW10sXG4gIHVsOiBbXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVIdG1sKHVuc2FmZUh0bWwsIGFsbG93TGlzdCwgc2FuaXRpemVGbikge1xuICBpZiAoIXVuc2FmZUh0bWwubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuc2FmZUh0bWxcbiAgfVxuXG4gIGlmIChzYW5pdGl6ZUZuICYmIHR5cGVvZiBzYW5pdGl6ZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHNhbml0aXplRm4odW5zYWZlSHRtbClcbiAgfVxuXG4gIGNvbnN0IGRvbVBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKClcbiAgY29uc3QgY3JlYXRlZERvY3VtZW50ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyh1bnNhZmVIdG1sLCAndGV4dC9odG1sJylcbiAgY29uc3QgYWxsb3dsaXN0S2V5cyA9IE9iamVjdC5rZXlzKGFsbG93TGlzdClcbiAgY29uc3QgZWxlbWVudHMgPSBbXS5jb25jYXQoLi4uY3JlYXRlZERvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnKicpKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGVsID0gZWxlbWVudHNbaV1cbiAgICBjb25zdCBlbE5hbWUgPSBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAoIWFsbG93bGlzdEtleXMuaW5jbHVkZXMoZWxOYW1lKSkge1xuICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcblxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVMaXN0ID0gW10uY29uY2F0KC4uLmVsLmF0dHJpYnV0ZXMpXG4gICAgY29uc3QgYWxsb3dlZEF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoYWxsb3dMaXN0WycqJ10gfHwgW10sIGFsbG93TGlzdFtlbE5hbWVdIHx8IFtdKVxuXG4gICAgYXR0cmlidXRlTGlzdC5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlKGF0dHIsIGFsbG93ZWRBdHRyaWJ1dGVzKSkge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5ub2RlTmFtZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZWREb2N1bWVudC5ib2R5LmlubmVySFRNTFxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTIpOiB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICogYXMgUG9wcGVyIGZyb20gJ0Bwb3BwZXJqcy9jb3JlJ1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGVtdWxhdGVUcmFuc2l0aW9uRW5kLFxuICBmaW5kU2hhZG93Um9vdCxcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIGdldFVJRCxcbiAgaXNFbGVtZW50LFxuICBpc1JUTCxcbiAgbm9vcCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCB7XG4gIERlZmF1bHRBbGxvd2xpc3QsXG4gIHNhbml0aXplSHRtbFxufSBmcm9tICcuL3V0aWwvc2FuaXRpemVyJ1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3Rvb2x0aXAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy50b29sdGlwJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IENMQVNTX1BSRUZJWCA9ICdicy10b29sdGlwJ1xuY29uc3QgQlNDTFNfUFJFRklYX1JFR0VYID0gbmV3IFJlZ0V4cChgKF58XFxcXHMpJHtDTEFTU19QUkVGSVh9XFxcXFMrYCwgJ2cnKVxuY29uc3QgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gbmV3IFNldChbJ3Nhbml0aXplJywgJ2FsbG93TGlzdCcsICdzYW5pdGl6ZUZuJ10pXG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgdGVtcGxhdGU6ICdzdHJpbmcnLFxuICB0aXRsZTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknLFxuICB0cmlnZ2VyOiAnc3RyaW5nJyxcbiAgZGVsYXk6ICcobnVtYmVyfG9iamVjdCknLFxuICBodG1sOiAnYm9vbGVhbicsXG4gIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHBsYWNlbWVudDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICBjb250YWluZXI6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICBmYWxsYmFja1BsYWNlbWVudHM6ICdhcnJheScsXG4gIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGN1c3RvbUNsYXNzOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgYWxsb3dMaXN0OiAnb2JqZWN0JyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKSdcbn1cblxuY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgQVVUTzogJ2F1dG8nLFxuICBUT1A6ICd0b3AnLFxuICBSSUdIVDogaXNSVEwgPyAnbGVmdCcgOiAncmlnaHQnLFxuICBCT1RUT006ICdib3R0b20nLFxuICBMRUZUOiBpc1JUTCA/ICdyaWdodCcgOiAnbGVmdCdcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2PicsXG4gIHRyaWdnZXI6ICdob3ZlciBmb2N1cycsXG4gIHRpdGxlOiAnJyxcbiAgZGVsYXk6IDAsXG4gIGh0bWw6IGZhbHNlLFxuICBzZWxlY3RvcjogZmFsc2UsXG4gIHBsYWNlbWVudDogJ3RvcCcsXG4gIG9mZnNldDogWzAsIDBdLFxuICBjb250YWluZXI6IGZhbHNlLFxuICBmYWxsYmFja1BsYWNlbWVudHM6IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10sXG4gIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgY3VzdG9tQ2xhc3M6ICcnLFxuICBzYW5pdGl6ZTogdHJ1ZSxcbiAgc2FuaXRpemVGbjogbnVsbCxcbiAgYWxsb3dMaXN0OiBEZWZhdWx0QWxsb3dsaXN0LFxuICBwb3BwZXJDb25maWc6IG51bGxcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREU6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVzogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTjogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgSU5TRVJURUQ6IGBpbnNlcnRlZCR7RVZFTlRfS0VZfWAsXG4gIENMSUNLOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICBGT0NVU0lOOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTT1VUOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICBNT1VTRUVOVEVSOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkU6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxufVxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfTU9EQUwgPSAnbW9kYWwnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgSE9WRVJfU1RBVEVfU0hPVyA9ICdzaG93J1xuY29uc3QgSE9WRVJfU1RBVEVfT1VUID0gJ291dCdcblxuY29uc3QgU0VMRUNUT1JfVE9PTFRJUF9JTk5FUiA9ICcudG9vbHRpcC1pbm5lcidcblxuY29uc3QgVFJJR0dFUl9IT1ZFUiA9ICdob3ZlcidcbmNvbnN0IFRSSUdHRVJfRk9DVVMgPSAnZm9jdXMnXG5jb25zdCBUUklHR0VSX0NMSUNLID0gJ2NsaWNrJ1xuY29uc3QgVFJJR0dFUl9NQU5VQUwgPSAnbWFudWFsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVG9vbHRpcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICAgIH1cblxuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICAvLyBwcml2YXRlXG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICAgIHRoaXMuX3RpbWVvdXQgPSAwXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9XG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuXG4gICAgLy8gUHJvdGVjdGVkXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMudGlwID0gbnVsbFxuXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgcmV0dXJuIEV2ZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gRVZFTlRfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2VcbiAgfVxuXG4gIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZFxuICB9XG5cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudClcblxuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICFjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrXG5cbiAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgY29udGV4dC5fZW50ZXIobnVsbCwgY29udGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuX2xlYXZlKG51bGwsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fZW50ZXIobnVsbCwgdGhpcylcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSlcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChgLiR7Q0xBU1NfTkFNRV9NT0RBTH1gKSwgJ2hpZGUuYnMubW9kYWwnLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuXG4gICAgaWYgKHRoaXMudGlwICYmIHRoaXMudGlwLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMudGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy50aXApXG4gICAgfVxuXG4gICAgdGhpcy5faXNFbmFibGVkID0gbnVsbFxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0gbnVsbFxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgdGhpcy5jb25maWcgPSBudWxsXG4gICAgdGhpcy50aXAgPSBudWxsXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50cycpXG4gICAgfVxuXG4gICAgaWYgKCEodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XKVxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBmaW5kU2hhZG93Um9vdCh0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGlzSW5UaGVEb20gPSBzaGFkb3dSb290ID09PSBudWxsID9cbiAgICAgIHRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy5fZWxlbWVudCkgOlxuICAgICAgc2hhZG93Um9vdC5jb250YWlucyh0aGlzLl9lbGVtZW50KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8ICFpc0luVGhlRG9tKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IHRpcElkID0gZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSlcblxuICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZClcblxuICAgIHRoaXMuc2V0Q29udGVudCgpXG5cbiAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VtZW50ID0gdHlwZW9mIHRoaXMuY29uZmlnLnBsYWNlbWVudCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuY2FsbCh0aGlzLCB0aXAsIHRoaXMuX2VsZW1lbnQpIDpcbiAgICAgIHRoaXMuY29uZmlnLnBsYWNlbWVudFxuXG4gICAgY29uc3QgYXR0YWNobWVudCA9IHRoaXMuX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KVxuICAgIHRoaXMuX2FkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZ2V0Q29udGFpbmVyKClcbiAgICBEYXRhLnNldERhdGEodGlwLCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRoaXMudGlwKSkge1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpcClcbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LklOU0VSVEVEKVxuXG4gICAgdGhpcy5fcG9wcGVyID0gUG9wcGVyLmNyZWF0ZVBvcHBlcih0aGlzLl9lbGVtZW50LCB0aXAsIHRoaXMuX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSlcblxuICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IGN1c3RvbUNsYXNzID0gdHlwZW9mIHRoaXMuY29uZmlnLmN1c3RvbUNsYXNzID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcuY3VzdG9tQ2xhc3MoKSA6IHRoaXMuY29uZmlnLmN1c3RvbUNsYXNzXG4gICAgaWYgKGN1c3RvbUNsYXNzKSB7XG4gICAgICB0aXAuY2xhc3NMaXN0LmFkZCguLi5jdXN0b21DbGFzcy5zcGxpdCgnICcpKVxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCgpKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHByZXZIb3ZlclN0YXRlID0gdGhpcy5faG92ZXJTdGF0ZVxuXG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gbnVsbFxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XTilcblxuICAgICAgaWYgKHByZXZIb3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9PVVQpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMudGlwKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLnRpcCwgJ3RyYW5zaXRpb25lbmQnLCBjb21wbGV0ZSlcbiAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMudGlwLCB0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5fcG9wcGVyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hvdmVyU3RhdGUgIT09IEhPVkVSX1NUQVRFX1NIT1cgJiYgdGlwLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGlwKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9jbGVhblRpcENsYXNzKClcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElEREVOKVxuXG4gICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElERSlcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbilcbiAgICAgICAgLmZvckVhY2goZWxlbWVudCA9PiBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKSlcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfQ0xJQ0tdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfRk9DVVNdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfSE9WRVJdID0gZmFsc2VcblxuICAgIGlmICh0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGlwKVxuXG4gICAgICBFdmVudEhhbmRsZXIub25lKHRpcCwgJ3RyYW5zaXRpb25lbmQnLCBjb21wbGV0ZSlcbiAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRpcCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJvdGVjdGVkXG5cbiAgaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmdldFRpdGxlKCkpXG4gIH1cblxuICBnZXRUaXBFbGVtZW50KCkge1xuICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgcmV0dXJuIHRoaXMudGlwXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmNvbmZpZy50ZW1wbGF0ZVxuXG4gICAgdGhpcy50aXAgPSBlbGVtZW50LmNoaWxkcmVuWzBdXG4gICAgcmV0dXJuIHRoaXMudGlwXG4gIH1cblxuICBzZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIsIHRpcCksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUsIENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIHNldEVsZW1lbnRDb250ZW50KGVsZW1lbnQsIGNvbnRlbnQpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnb2JqZWN0JyAmJiBpc0VsZW1lbnQoY29udGVudCkpIHtcbiAgICAgIGlmIChjb250ZW50LmpxdWVyeSkge1xuICAgICAgICBjb250ZW50ID0gY29udGVudFswXVxuICAgICAgfVxuXG4gICAgICAvLyBjb250ZW50IGlzIGEgRE9NIG5vZGUgb3IgYSBqUXVlcnlcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5odG1sKSB7XG4gICAgICAgIGlmIChjb250ZW50LnBhcmVudE5vZGUgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudC50ZXh0Q29udGVudFxuICAgICAgfVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcuaHRtbCkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnNhbml0aXplKSB7XG4gICAgICAgIGNvbnRlbnQgPSBzYW5pdGl6ZUh0bWwoY29udGVudCwgdGhpcy5jb25maWcuYWxsb3dMaXN0LCB0aGlzLmNvbmZpZy5zYW5pdGl6ZUZuKVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnRcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnRcbiAgICB9XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICBsZXQgdGl0bGUgPSB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpXG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB0aXRsZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy50aXRsZSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgIHRoaXMuY29uZmlnLnRpdGxlLmNhbGwodGhpcy5fZWxlbWVudCkgOlxuICAgICAgICB0aGlzLmNvbmZpZy50aXRsZVxuICAgIH1cblxuICAgIHJldHVybiB0aXRsZVxuICB9XG5cbiAgdXBkYXRlQXR0YWNobWVudChhdHRhY2htZW50KSB7XG4gICAgaWYgKGF0dGFjaG1lbnQgPT09ICdyaWdodCcpIHtcbiAgICAgIHJldHVybiAnZW5kJ1xuICAgIH1cblxuICAgIGlmIChhdHRhY2htZW50ID09PSAnbGVmdCcpIHtcbiAgICAgIHJldHVybiAnc3RhcnQnXG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dGFjaG1lbnRcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBEYXRhLmdldERhdGEoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGRhdGFLZXkpXG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihldmVudC5kZWxlZ2F0ZVRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSlcbiAgICAgIERhdGEuc2V0RGF0YShldmVudC5kZWxlZ2F0ZVRhcmdldCwgZGF0YUtleSwgY29udGV4dClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGV4dFxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCB7IG9mZnNldCB9ID0gdGhpcy5jb25maWdcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWwgPT4gTnVtYmVyLnBhcnNlSW50KHZhbCwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpIHtcbiAgICBjb25zdCBkZWZhdWx0QnNQb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBhbHRCb3VuZGFyeTogdHJ1ZSxcbiAgICAgICAgICAgIGZhbGxiYWNrUGxhY2VtZW50czogdGhpcy5jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRzXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLmNvbmZpZy5ib3VuZGFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdhcnJvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZWxlbWVudDogYC4ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXJyb3dgXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ29uQ2hhbmdlJyxcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIHBoYXNlOiAnYWZ0ZXJXcml0ZScsXG4gICAgICAgICAgZm46IGRhdGEgPT4gdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBvbkZpcnN0VXBkYXRlOiBkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEub3B0aW9ucy5wbGFjZW1lbnQgIT09IGRhdGEucGxhY2VtZW50KSB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGVmYXVsdEJzUG9wcGVyQ29uZmlnLFxuICAgICAgLi4uKHR5cGVvZiB0aGlzLmNvbmZpZy5wb3BwZXJDb25maWcgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbmZpZy5wb3BwZXJDb25maWcoZGVmYXVsdEJzUG9wcGVyQ29uZmlnKSA6IHRoaXMuY29uZmlnLnBvcHBlckNvbmZpZylcbiAgICB9XG4gIH1cblxuICBfYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICB0aGlzLmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKGAke0NMQVNTX1BSRUZJWH0tJHt0aGlzLnVwZGF0ZUF0dGFjaG1lbnQoYXR0YWNobWVudCl9YClcbiAgfVxuXG4gIF9nZXRDb250YWluZXIoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5XG4gICAgfVxuXG4gICAgaWYgKGlzRWxlbWVudCh0aGlzLmNvbmZpZy5jb250YWluZXIpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuY29udGFpbmVyXG4gICAgfVxuXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUodGhpcy5jb25maWcuY29udGFpbmVyKVxuICB9XG5cbiAgX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5jb25maWcudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICB0cmlnZ2Vycy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuQ0xJQ0ssIHRoaXMuY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLnRvZ2dsZShldmVudClcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUUklHR0VSX01BTlVBTCkge1xuICAgICAgICBjb25zdCBldmVudEluID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUVOVEVSIDpcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTSU5cbiAgICAgICAgY29uc3QgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID9cbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFTEVBVkUgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNPVVRcblxuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRJbiwgdGhpcy5jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMuX2VudGVyKGV2ZW50KSlcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50T3V0LCB0aGlzLmNvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5fbGVhdmUoZXZlbnQpKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudC5jbG9zZXN0KGAuJHtDTEFTU19OQU1FX01PREFMfWApLCAnaGlkZS5icy5tb2RhbCcsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG5cbiAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAuLi50aGlzLmNvbmZpZyxcbiAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgIHNlbGVjdG9yOiAnJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9maXhUaXRsZSgpXG4gICAgfVxuICB9XG5cbiAgX2ZpeFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICBjb25zdCBvcmlnaW5hbFRpdGxlVHlwZSA9IHR5cGVvZiB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpXG5cbiAgICBpZiAodGl0bGUgfHwgb3JpZ2luYWxUaXRsZVR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScsIHRpdGxlIHx8ICcnKVxuICAgICAgaWYgKHRpdGxlICYmICF0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpICYmICF0aGlzLl9lbGVtZW50LnRleHRDb250ZW50KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGl0bGUpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsICcnKVxuICAgIH1cbiAgfVxuXG4gIF9lbnRlcihldmVudCwgY29udGV4dCkge1xuICAgIGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQsIGNvbnRleHQpXG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c2luJyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXG4gICAgICBdID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChjb250ZXh0LmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSB8fCBjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9TSE9XKSB7XG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfU0hPV1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfU0hPV1xuXG4gICAgaWYgKCFjb250ZXh0LmNvbmZpZy5kZWxheSB8fCAhY29udGV4dC5jb25maWcuZGVsYXkuc2hvdykge1xuICAgICAgY29udGV4dC5zaG93KClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9TSE9XKSB7XG4gICAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICB9XG4gICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuc2hvdylcbiAgfVxuXG4gIF9sZWF2ZShldmVudCwgY29udGV4dCkge1xuICAgIGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQsIGNvbnRleHQpXG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUlxuICAgICAgXSA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfT1VUXG5cbiAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX09VVCkge1xuICAgICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpXG4gIH1cblxuICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgaW4gdGhpcy5fYWN0aXZlVHJpZ2dlcikge1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRyaWdnZXJbdHJpZ2dlcl0pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uc3QgZGF0YUF0dHJpYnV0ZXMgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KVxuXG4gICAgT2JqZWN0LmtleXMoZGF0YUF0dHJpYnV0ZXMpLmZvckVhY2goZGF0YUF0dHIgPT4ge1xuICAgICAgaWYgKERJU0FMTE9XRURfQVRUUklCVVRFUy5oYXMoZGF0YUF0dHIpKSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cl1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnLmNvbnRhaW5lciA9PT0gJ29iamVjdCcgJiYgY29uZmlnLmNvbnRhaW5lci5qcXVlcnkpIHtcbiAgICAgIGNvbmZpZy5jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyWzBdXG4gICAgfVxuXG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uZGF0YUF0dHJpYnV0ZXMsXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKVxuXG4gICAgaWYgKGNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgY29uZmlnLnRlbXBsYXRlID0gc2FuaXRpemVIdG1sKGNvbmZpZy50ZW1wbGF0ZSwgY29uZmlnLmFsbG93TGlzdCwgY29uZmlnLnNhbml0aXplRm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERlbGVnYXRlQ29uZmlnKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHt9XG5cbiAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdGhpcy5jb25maWdba2V5XSkge1xuICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb25maWdba2V5XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCB0YWJDbGFzcyA9IHRpcC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykubWF0Y2goQlNDTFNfUFJFRklYX1JFR0VYKVxuICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICB0YWJDbGFzcy5tYXAodG9rZW4gPT4gdG9rZW4udHJpbSgpKVxuICAgICAgICAuZm9yRWFjaCh0Q2xhc3MgPT4gdGlwLmNsYXNzTGlzdC5yZW1vdmUodENsYXNzKSlcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKHBvcHBlckRhdGEpIHtcbiAgICBjb25zdCB7IHN0YXRlIH0gPSBwb3BwZXJEYXRhXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRpcCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlclxuICAgIHRoaXMuX2NsZWFuVGlwQ2xhc3MoKVxuICAgIHRoaXMuX2FkZEF0dGFjaG1lbnRDbGFzcyh0aGlzLl9nZXRBdHRhY2htZW50KHN0YXRlLnBsYWNlbWVudCkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldERhdGEodGhpcywgREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvb2x0aXAodGhpcywgX2NvbmZpZylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuVG9vbHRpcCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihOQU1FLCBUb29sdGlwKVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMik6IHBvcG92ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4gfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdwb3BvdmVyJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMucG9wb3ZlcidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBDTEFTU19QUkVGSVggPSAnYnMtcG9wb3ZlcidcbmNvbnN0IEJTQ0xTX1BSRUZJWF9SRUdFWCA9IG5ldyBSZWdFeHAoYChefFxcXFxzKSR7Q0xBU1NfUFJFRklYfVxcXFxTK2AsICdnJylcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0LFxuICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gIG9mZnNldDogWzAsIDhdLFxuICB0cmlnZ2VyOiAnY2xpY2snLFxuICBjb250ZW50OiAnJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1hcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICc8aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiPjwvaDM+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+J1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0VHlwZSxcbiAgY29udGVudDogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTjogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1c6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV046IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIElOU0VSVEVEOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICBDTElDSzogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTjogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICBGT0NVU09VVDogYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUjogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbn1cblxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgU0VMRUNUT1JfVElUTEUgPSAnLnBvcG92ZXItaGVhZGVyJ1xuY29uc3QgU0VMRUNUT1JfQ09OVEVOVCA9ICcucG9wb3Zlci1ib2R5J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgUG9wb3ZlciBleHRlbmRzIFRvb2x0aXAge1xuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIEVWRU5UX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIE92ZXJyaWRlc1xuXG4gIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKSB8fCB0aGlzLl9nZXRDb250ZW50KClcbiAgfVxuXG4gIHNldENvbnRlbnQoKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcblxuICAgIC8vIHdlIHVzZSBhcHBlbmQgZm9yIGh0bWwgb2JqZWN0cyB0byBtYWludGFpbiBqcyBldmVudHNcbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfVElUTEUsIHRpcCksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICBsZXQgY29udGVudCA9IHRoaXMuX2dldENvbnRlbnQoKVxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29udGVudCA9IGNvbnRlbnQuY2FsbCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9DT05URU5ULCB0aXApLCBjb250ZW50KVxuXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9GQURFLCBDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgdGhpcy5nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LmFkZChgJHtDTEFTU19QUkVGSVh9LSR7dGhpcy51cGRhdGVBdHRhY2htZW50KGF0dGFjaG1lbnQpfWApXG4gIH1cblxuICBfZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtY29udGVudCcpIHx8IHRoaXMuY29uZmlnLmNvbnRlbnRcbiAgfVxuXG4gIF9jbGVhblRpcENsYXNzKCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgdGFiQ2xhc3MgPSB0aXAuZ2V0QXR0cmlidXRlKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWClcbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgdGFiQ2xhc3MubWFwKHRva2VuID0+IHRva2VuLnRyaW0oKSlcbiAgICAgICAgLmZvckVhY2godENsYXNzID0+IHRpcC5jbGFzc0xpc3QucmVtb3ZlKHRDbGFzcykpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXREYXRhKHRoaXMsIERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBQb3BvdmVyKHRoaXMsIF9jb25maWcpXG4gICAgICAgIERhdGEuc2V0RGF0YSh0aGlzLCBEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuUG9wb3ZlciB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihOQU1FLCBQb3BvdmVyKVxuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMik6IHNjcm9sbHNweS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCxcbiAgZ2V0VUlELFxuICBpc0VsZW1lbnQsXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnc2Nyb2xsc3B5J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuc2Nyb2xsc3B5J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldDogMTAsXG4gIG1ldGhvZDogJ2F1dG8nLFxuICB0YXJnZXQ6ICcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQ6ICdudW1iZXInLFxuICBtZXRob2Q6ICdzdHJpbmcnLFxuICB0YXJnZXQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFVkVOVF9BQ1RJVkFURSA9IGBhY3RpdmF0ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NDUk9MTCA9IGBzY3JvbGwke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fSVRFTSA9ICdkcm9wZG93bi1pdGVtJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NQWSA9ICdbZGF0YS1icy1zcHk9XCJzY3JvbGxcIl0nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCdcbmNvbnN0IFNFTEVDVE9SX05BVl9MSU5LUyA9ICcubmF2LWxpbmsnXG5jb25zdCBTRUxFQ1RPUl9OQVZfSVRFTVMgPSAnLm5hdi1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfTElTVF9JVEVNUyA9ICcubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV04gPSAnLmRyb3Bkb3duJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5cbmNvbnN0IE1FVEhPRF9PRkZTRVQgPSAnb2Zmc2V0J1xuY29uc3QgTUVUSE9EX1BPU0lUSU9OID0gJ3Bvc2l0aW9uJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgU2Nyb2xsU3B5IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IGVsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknID8gd2luZG93IDogZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fc2VsZWN0b3IgPSBgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTRUxFQ1RPUl9MSVNUX0lURU1TfSwgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAuJHtDTEFTU19OQU1FX0RST1BET1dOX0lURU19YFxuICAgIHRoaXMuX29mZnNldHMgPSBbXVxuICAgIHRoaXMuX3RhcmdldHMgPSBbXVxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSAwXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fc2Nyb2xsRWxlbWVudCwgRVZFTlRfU0NST0xMLCAoKSA9PiB0aGlzLl9wcm9jZXNzKCkpXG5cbiAgICB0aGlzLnJlZnJlc2goKVxuICAgIHRoaXMuX3Byb2Nlc3MoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgYXV0b01ldGhvZCA9IHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHRoaXMuX3Njcm9sbEVsZW1lbnQud2luZG93ID9cbiAgICAgIE1FVEhPRF9PRkZTRVQgOlxuICAgICAgTUVUSE9EX1BPU0lUSU9OXG5cbiAgICBjb25zdCBvZmZzZXRNZXRob2QgPSB0aGlzLl9jb25maWcubWV0aG9kID09PSAnYXV0bycgP1xuICAgICAgYXV0b01ldGhvZCA6XG4gICAgICB0aGlzLl9jb25maWcubWV0aG9kXG5cbiAgICBjb25zdCBvZmZzZXRCYXNlID0gb2Zmc2V0TWV0aG9kID09PSBNRVRIT0RfUE9TSVRJT04gP1xuICAgICAgdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgOlxuICAgICAgMFxuXG4gICAgdGhpcy5fb2Zmc2V0cyA9IFtdXG4gICAgdGhpcy5fdGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcblxuICAgIGNvbnN0IHRhcmdldHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKHRoaXMuX3NlbGVjdG9yKVxuXG4gICAgdGFyZ2V0cy5tYXAoZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRhcmdldFNlbGVjdG9yID8gU2VsZWN0b3JFbmdpbmUuZmluZE9uZSh0YXJnZXRTZWxlY3RvcikgOiBudWxsXG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0QkNSID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGlmICh0YXJnZXRCQ1Iud2lkdGggfHwgdGFyZ2V0QkNSLmhlaWdodCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBNYW5pcHVsYXRvcltvZmZzZXRNZXRob2RdKHRhcmdldCkudG9wICsgb2Zmc2V0QmFzZSxcbiAgICAgICAgICAgIHRhcmdldFNlbGVjdG9yXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSlcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHRoaXMuX29mZnNldHMucHVzaChpdGVtWzBdKVxuICAgICAgICB0aGlzLl90YXJnZXRzLnB1c2goaXRlbVsxXSlcbiAgICAgIH0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fc2Nyb2xsRWxlbWVudCwgRVZFTlRfS0VZKVxuXG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgPSBudWxsXG4gICAgdGhpcy5fc2VsZWN0b3IgPSBudWxsXG4gICAgdGhpcy5fb2Zmc2V0cyA9IG51bGxcbiAgICB0aGlzLl90YXJnZXRzID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgaXNFbGVtZW50KGNvbmZpZy50YXJnZXQpKSB7XG4gICAgICBsZXQgeyBpZCB9ID0gY29uZmlnLnRhcmdldFxuICAgICAgaWYgKCFpZCkge1xuICAgICAgICBpZCA9IGdldFVJRChOQU1FKVxuICAgICAgICBjb25maWcudGFyZ2V0LmlkID0gaWRcbiAgICAgIH1cblxuICAgICAgY29uZmlnLnRhcmdldCA9IGAjJHtpZH1gXG4gICAgfVxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0U2Nyb2xsVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3cgP1xuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudC5wYWdlWU9mZnNldCA6XG4gICAgICB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbFRvcFxuICB9XG5cbiAgX2dldFNjcm9sbEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxIZWlnaHQgfHwgTWF0aC5tYXgoXG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCxcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHRcbiAgICApXG4gIH1cblxuICBfZ2V0T2Zmc2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3cgP1xuICAgICAgd2luZG93LmlubmVySGVpZ2h0IDpcbiAgICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gIH1cblxuICBfcHJvY2VzcygpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLl9nZXRTY3JvbGxUb3AoKSArIHRoaXMuX2NvbmZpZy5vZmZzZXRcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKVxuICAgIGNvbnN0IG1heFNjcm9sbCA9IHRoaXMuX2NvbmZpZy5vZmZzZXQgKyBzY3JvbGxIZWlnaHQgLSB0aGlzLl9nZXRPZmZzZXRIZWlnaHQoKVxuXG4gICAgaWYgKHRoaXMuX3Njcm9sbEhlaWdodCAhPT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB0aGlzLnJlZnJlc2goKVxuICAgIH1cblxuICAgIGlmIChzY3JvbGxUb3AgPj0gbWF4U2Nyb2xsKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl90YXJnZXRzW3RoaXMuX3RhcmdldHMubGVuZ3RoIC0gMV1cblxuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAmJiBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzWzBdICYmIHRoaXMuX29mZnNldHNbMF0gPiAwKSB7XG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgICB0aGlzLl9jbGVhcigpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gdGhpcy5fb2Zmc2V0cy5sZW5ndGg7IGktLTspIHtcbiAgICAgIGNvbnN0IGlzQWN0aXZlVGFyZ2V0ID0gdGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0aGlzLl90YXJnZXRzW2ldICYmXG4gICAgICAgICAgc2Nyb2xsVG9wID49IHRoaXMuX29mZnNldHNbaV0gJiZcbiAgICAgICAgICAodHlwZW9mIHRoaXMuX29mZnNldHNbaSArIDFdID09PSAndW5kZWZpbmVkJyB8fCBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzW2kgKyAxXSlcblxuICAgICAgaWYgKGlzQWN0aXZlVGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRoaXMuX3RhcmdldHNbaV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2FjdGl2YXRlKHRhcmdldCkge1xuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldFxuXG4gICAgdGhpcy5fY2xlYXIoKVxuXG4gICAgY29uc3QgcXVlcmllcyA9IHRoaXMuX3NlbGVjdG9yLnNwbGl0KCcsJylcbiAgICAgIC5tYXAoc2VsZWN0b3IgPT4gYCR7c2VsZWN0b3J9W2RhdGEtYnMtdGFyZ2V0PVwiJHt0YXJnZXR9XCJdLCR7c2VsZWN0b3J9W2hyZWY9XCIke3RhcmdldH1cIl1gKVxuXG4gICAgY29uc3QgbGluayA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUocXVlcmllcy5qb2luKCcsJykpXG5cbiAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIGxpbmsuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTikpXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGluayBhcyBhY3RpdmVcbiAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgU2VsZWN0b3JFbmdpbmUucGFyZW50cyhsaW5rLCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUClcbiAgICAgICAgLmZvckVhY2gobGlzdEdyb3VwID0+IHtcbiAgICAgICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICAgICAgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIGAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTElTVF9JVEVNU31gKVxuICAgICAgICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuXG4gICAgICAgICAgLy8gSGFuZGxlIHNwZWNpYWwgY2FzZSB3aGVuIC5uYXYtbGluayBpcyBpbnNpZGUgLm5hdi1pdGVtXG4gICAgICAgICAgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIFNFTEVDVE9SX05BVl9JVEVNUylcbiAgICAgICAgICAgIC5mb3JFYWNoKG5hdkl0ZW0gPT4ge1xuICAgICAgICAgICAgICBTZWxlY3RvckVuZ2luZS5jaGlsZHJlbihuYXZJdGVtLCBTRUxFQ1RPUl9OQVZfTElOS1MpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9zY3JvbGxFbGVtZW50LCBFVkVOVF9BQ1RJVkFURSwge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGFyZ2V0XG4gICAgfSlcbiAgfVxuXG4gIF9jbGVhcigpIHtcbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKHRoaXMuX3NlbGVjdG9yKVxuICAgICAgLmZpbHRlcihub2RlID0+IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgICAgIC5mb3JFYWNoKG5vZGUgPT4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9IERhdGEuZ2V0RGF0YSh0aGlzLCBEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgU2Nyb2xsU3B5KHRoaXMsIF9jb25maWcpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9TUFkpXG4gICAgLmZvckVhY2goc3B5ID0+IG5ldyBTY3JvbGxTcHkoc3B5LCBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhzcHkpKSlcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5TY3JvbGxTcHkgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oTkFNRSwgU2Nyb2xsU3B5KVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxTcHlcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEyKTogdGFiLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBlbXVsYXRlVHJhbnNpdGlvbkVuZCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIHJlZmxvd1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAndGFiJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMudGFiJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX01FTlUgPSAnZHJvcGRvd24tbWVudSdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfRElTQUJMRUQgPSAnZGlzYWJsZWQnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX1VMID0gJzpzY29wZSA+IGxpID4gLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fQUNUSVZFX0NISUxEID0gJzpzY29wZSA+IC5kcm9wZG93bi1tZW51IC5hY3RpdmUnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUYWIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGlmICgodGhpcy5fZWxlbWVudC5wYXJlbnROb2RlICYmXG4gICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSkpIHx8XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RJU0FCTEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHByZXZpb3VzXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKVxuXG4gICAgaWYgKGxpc3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBpdGVtU2VsZWN0b3IgPSBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ09MJyA/IFNFTEVDVE9SX0FDVElWRV9VTCA6IFNFTEVDVE9SX0FDVElWRVxuICAgICAgcHJldmlvdXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKGl0ZW1TZWxlY3RvciwgbGlzdEVsZW1lbnQpXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzW3ByZXZpb3VzLmxlbmd0aCAtIDFdXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gcHJldmlvdXMgP1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIocHJldmlvdXMsIEVWRU5UX0hJREUsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfSkgOlxuICAgICAgbnVsbFxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8IChoaWRlRXZlbnQgIT09IG51bGwgJiYgaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl9lbGVtZW50LCBsaXN0RWxlbWVudClcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIocHJldmlvdXMsIEVWRU5UX0hJRERFTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdGhpcy5fYWN0aXZhdGUodGFyZ2V0LCB0YXJnZXQucGFyZW50Tm9kZSwgY29tcGxldGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FjdGl2YXRlKGVsZW1lbnQsIGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50cyA9IGNvbnRhaW5lciAmJiAoY29udGFpbmVyLm5vZGVOYW1lID09PSAnVUwnIHx8IGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ09MJykgP1xuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9BQ1RJVkVfVUwsIGNvbnRhaW5lcikgOlxuICAgICAgU2VsZWN0b3JFbmdpbmUuY2hpbGRyZW4oY29udGFpbmVyLCBTRUxFQ1RPUl9BQ1RJVkUpXG5cbiAgICBjb25zdCBhY3RpdmUgPSBhY3RpdmVFbGVtZW50c1swXVxuICAgIGNvbnN0IGlzVHJhbnNpdGlvbmluZyA9IGNhbGxiYWNrICYmIChhY3RpdmUgJiYgYWN0aXZlLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB0aGlzLl90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjaylcblxuICAgIGlmIChhY3RpdmUgJiYgaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChhY3RpdmUpXG4gICAgICBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAgIEV2ZW50SGFuZGxlci5vbmUoYWN0aXZlLCAndHJhbnNpdGlvbmVuZCcsIGNvbXBsZXRlKVxuICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQoYWN0aXZlLCB0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBfdHJhbnNpdGlvbkNvbXBsZXRlKGVsZW1lbnQsIGFjdGl2ZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgY29uc3QgZHJvcGRvd25DaGlsZCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRFJPUERPV05fQUNUSVZFX0NISUxELCBhY3RpdmUucGFyZW50Tm9kZSlcblxuICAgICAgaWYgKGRyb3Bkb3duQ2hpbGQpIHtcbiAgICAgICAgZHJvcGRvd25DaGlsZC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlLmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgICBhY3RpdmUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIHJlZmxvdyhlbGVtZW50KVxuXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fTUVOVSkpIHtcbiAgICAgIGNvbnN0IGRyb3Bkb3duRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTilcblxuICAgICAgaWYgKGRyb3Bkb3duRWxlbWVudCkge1xuICAgICAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSlcbiAgICAgICAgICAuZm9yRWFjaChkcm9wZG93biA9PiBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gRGF0YS5nZXREYXRhKHRoaXMsIERBVEFfS0VZKSB8fCBuZXcgVGFiKHRoaXMpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBkYXRhID0gRGF0YS5nZXREYXRhKHRoaXMsIERBVEFfS0VZKSB8fCBuZXcgVGFiKHRoaXMpXG4gIGRhdGEuc2hvdygpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuVGFiIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE5BTUUsIFRhYilcblxuZXhwb3J0IGRlZmF1bHQgVGFiXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMik6IHRvYXN0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBlbXVsYXRlVHJhbnNpdGlvbkVuZCxcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIHJlZmxvdyxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3RvYXN0J1xuY29uc3QgREFUQV9LRVkgPSAnYnMudG9hc3QnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuXG5jb25zdCBFVkVOVF9DTElDS19ESVNNSVNTID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9ISURFID0gJ2hpZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU0hPV0lORyA9ICdzaG93aW5nJ1xuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gIGF1dG9oaWRlOiAnYm9vbGVhbicsXG4gIGRlbGF5OiAnbnVtYmVyJ1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb246IHRydWUsXG4gIGF1dG9oaWRlOiB0cnVlLFxuICBkZWxheTogNTAwMFxufVxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MgPSAnW2RhdGEtYnMtZGlzbWlzcz1cInRvYXN0XCJdJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVG9hc3QgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0hJREUpXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORylcbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsIGNvbXBsZXRlKVxuICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfSElERSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgY29tcGxldGUpXG4gICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50LCB0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MpXG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgICB0aGlzLl9jb25maWcgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSlcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIFNFTEVDVE9SX0RBVEFfRElTTUlTUywgKCkgPT4gdGhpcy5oaWRlKCkpXG4gIH1cblxuICBfY2xlYXJUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldERhdGEodGhpcywgREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvYXN0KHRoaXMsIF9jb25maWcpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Ub2FzdCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihOQU1FLCBUb2FzdClcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEyKTogaW5kZXgudW1kLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEFsZXJ0IGZyb20gJy4vc3JjL2FsZXJ0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL3NyYy9idXR0b24nXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9zcmMvY2Fyb3VzZWwnXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnLi9zcmMvY29sbGFwc2UnXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9zcmMvZHJvcGRvd24nXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9zcmMvbW9kYWwnXG5pbXBvcnQgUG9wb3ZlciBmcm9tICcuL3NyYy9wb3BvdmVyJ1xuaW1wb3J0IFNjcm9sbFNweSBmcm9tICcuL3NyYy9zY3JvbGxzcHknXG5pbXBvcnQgVGFiIGZyb20gJy4vc3JjL3RhYidcbmltcG9ydCBUb2FzdCBmcm9tICcuL3NyYy90b2FzdCdcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vc3JjL3Rvb2x0aXAnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQWxlcnQsXG4gIEJ1dHRvbixcbiAgQ2Fyb3VzZWwsXG4gIENvbGxhcHNlLFxuICBEcm9wZG93bixcbiAgTW9kYWwsXG4gIFBvcG92ZXIsXG4gIFNjcm9sbFNweSxcbiAgVGFiLFxuICBUb2FzdCxcbiAgVG9vbHRpcFxufVxuIl19

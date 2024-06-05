// ==UserScript==
// @name         GreasyFork Feedback Filter
// @namespace    https://magicdawn.fun/greasyfork-feedback-filter
// @version      0.0.4
// @author       monkey
// @description  Help U to hide or filter script feedbacks
// @license      MIT
// @icon         https://raw.gitmirror.com/greasyfork-org/greasyfork/main/public/images/blacklogo96.png
// @source       https://github.com/magicdawn/greasyfork-feedback-filter.git
// @match        https://greasyfork.org/*
// @require      https://registry.npmmirror.com/react/18.3.1/files/umd/react.production.min.js
// @require      https://registry.npmmirror.com/react-dom/18.3.1/files/umd/react-dom.production.min.js
// @grant        GM.getValue
// @grant        GM.registerMenuCommand
// @grant        GM.setValue
// ==/UserScript==

(async function (React, ReactDOM__default) {
  'use strict';

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);
  const ReactDOM__default__namespace = /*#__PURE__*/_interopNamespaceDefault(ReactDOM__default);

  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f$3 = React, k$3 = Symbol.for("react.element"), l$4 = Symbol.for("react.fragment"), m$4 = Object.prototype.hasOwnProperty, n$4 = f$3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$4 = { key: true, ref: true, __self: true, __source: true };
  function q$3(c2, a2, g2) {
    var b2, d2 = {}, e2 = null, h2 = null;
    void 0 !== g2 && (e2 = "" + g2);
    void 0 !== a2.key && (e2 = "" + a2.key);
    void 0 !== a2.ref && (h2 = a2.ref);
    for (b2 in a2)
      m$4.call(a2, b2) && !p$4.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
    if (c2 && c2.defaultProps)
      for (b2 in a2 = c2.defaultProps, a2)
        void 0 === d2[b2] && (d2[b2] = a2[b2]);
    return { $$typeof: k$3, type: c2, key: e2, ref: h2, props: d2, _owner: n$4.current };
  }
  reactJsxRuntime_production_min.Fragment = l$4;
  reactJsxRuntime_production_min.jsx = q$3;
  reactJsxRuntime_production_min.jsxs = q$3;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  function sheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    }
    for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
      if (document.styleSheets[i2].ownerNode === tag) {
        return document.styleSheets[i2];
      }
    }
  }
  function createStyleElement(options) {
    var tag = document.createElement("style");
    tag.setAttribute("data-emotion", options.key);
    if (options.nonce !== void 0) {
      tag.setAttribute("nonce", options.nonce);
    }
    tag.appendChild(document.createTextNode(""));
    tag.setAttribute("data-s", "");
    return tag;
  }
  var StyleSheet = /* @__PURE__ */ function() {
    function StyleSheet2(options) {
      var _this = this;
      this._insertTag = function(tag) {
        var before2;
        if (_this.tags.length === 0) {
          if (_this.insertionPoint) {
            before2 = _this.insertionPoint.nextSibling;
          } else if (_this.prepend) {
            before2 = _this.container.firstChild;
          } else {
            before2 = _this.before;
          }
        } else {
          before2 = _this.tags[_this.tags.length - 1].nextSibling;
        }
        _this.container.insertBefore(tag, before2);
        _this.tags.push(tag);
      };
      this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce;
      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.insertionPoint = options.insertionPoint;
      this.before = null;
    }
    var _proto = StyleSheet2.prototype;
    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };
    _proto.insert = function insert(rule) {
      if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }
      var tag = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);
        try {
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e2) {
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }
      this.ctr++;
    };
    _proto.flush = function flush() {
      this.tags.forEach(function(tag) {
        return tag.parentNode && tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };
    return StyleSheet2;
  }();
  var MS = "-ms-";
  var MOZ = "-moz-";
  var WEBKIT = "-webkit-";
  var COMMENT$1 = "comm";
  var RULESET$1 = "rule";
  var DECLARATION$1 = "decl";
  var IMPORT$1 = "@import";
  var KEYFRAMES$1 = "@keyframes";
  var LAYER$1 = "@layer";
  var abs$1 = Math.abs;
  var from$1 = String.fromCharCode;
  var assign = Object.assign;
  function hash(value, length2) {
    return charat$1(value, 0) ^ 45 ? (((length2 << 2 ^ charat$1(value, 0)) << 2 ^ charat$1(value, 1)) << 2 ^ charat$1(value, 2)) << 2 ^ charat$1(value, 3) : 0;
  }
  function trim$1(value) {
    return value.trim();
  }
  function match$1(value, pattern4) {
    return (value = pattern4.exec(value)) ? value[0] : value;
  }
  function replace$1(value, pattern4, replacement) {
    return value.replace(pattern4, replacement);
  }
  function indexof$1(value, search) {
    return value.indexOf(search);
  }
  function charat$1(value, index2) {
    return value.charCodeAt(index2) | 0;
  }
  function substr$1(value, begin, end) {
    return value.slice(begin, end);
  }
  function strlen$1(value) {
    return value.length;
  }
  function sizeof$1(value) {
    return value.length;
  }
  function append$1(value, array4) {
    return array4.push(value), value;
  }
  function combine(array4, callback) {
    return array4.map(callback).join("");
  }
  var line$1 = 1;
  var column$1 = 1;
  var length$1 = 0;
  var position$1 = 0;
  var character$1 = 0;
  var characters$1 = "";
  function node$1(value, root2, parent, type4, props, children, length2) {
    return { value, root: root2, parent, type: type4, props, children, line: line$1, column: column$1, length: length2, return: "" };
  }
  function copy(root2, props) {
    return assign(node$1("", null, null, "", null, null, 0), root2, { length: -root2.length }, props);
  }
  function char$1() {
    return character$1;
  }
  function prev$1() {
    character$1 = position$1 > 0 ? charat$1(characters$1, --position$1) : 0;
    if (column$1--, character$1 === 10)
      column$1 = 1, line$1--;
    return character$1;
  }
  function next$1() {
    character$1 = position$1 < length$1 ? charat$1(characters$1, position$1++) : 0;
    if (column$1++, character$1 === 10)
      column$1 = 1, line$1++;
    return character$1;
  }
  function peek$1() {
    return charat$1(characters$1, position$1);
  }
  function caret$1() {
    return position$1;
  }
  function slice$1(begin, end) {
    return substr$1(characters$1, begin, end);
  }
  function token$1(type4) {
    switch (type4) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function alloc$1(value) {
    return line$1 = column$1 = 1, length$1 = strlen$1(characters$1 = value), position$1 = 0, [];
  }
  function dealloc$1(value) {
    return characters$1 = "", value;
  }
  function delimit$1(type4) {
    return trim$1(slice$1(position$1 - 1, delimiter$1(type4 === 91 ? type4 + 2 : type4 === 40 ? type4 + 1 : type4)));
  }
  function whitespace$2(type4) {
    while (character$1 = peek$1())
      if (character$1 < 33)
        next$1();
      else
        break;
    return token$1(type4) > 2 || token$1(character$1) > 3 ? "" : " ";
  }
  function escaping$1(index2, count) {
    while (--count && next$1())
      if (character$1 < 48 || character$1 > 102 || character$1 > 57 && character$1 < 65 || character$1 > 70 && character$1 < 97)
        break;
    return slice$1(index2, caret$1() + (count < 6 && peek$1() == 32 && next$1() == 32));
  }
  function delimiter$1(type4) {
    while (next$1())
      switch (character$1) {
        case type4:
          return position$1;
        case 34:
        case 39:
          if (type4 !== 34 && type4 !== 39)
            delimiter$1(character$1);
          break;
        case 40:
          if (type4 === 41)
            delimiter$1(type4);
          break;
        case 92:
          next$1();
          break;
      }
    return position$1;
  }
  function commenter$1(type4, index2) {
    while (next$1())
      if (type4 + character$1 === 47 + 10)
        break;
      else if (type4 + character$1 === 42 + 42 && peek$1() === 47)
        break;
    return "/*" + slice$1(index2, position$1 - 1) + "*" + from$1(type4 === 47 ? type4 : next$1());
  }
  function identifier$1(index2) {
    while (!token$1(peek$1()))
      next$1();
    return slice$1(index2, position$1);
  }
  function compile$1(value) {
    return dealloc$1(parse$1("", null, null, null, [""], value = alloc$1(value), 0, [0], value));
  }
  function parse$1(value, root2, parent, rule, rules2, rulesets, pseudo, points, declarations) {
    var index2 = 0;
    var offset2 = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type4 = "";
    var props = rules2;
    var children = rulesets;
    var reference = rule;
    var characters2 = type4;
    while (scanning)
      switch (previous = character2, character2 = next$1()) {
        case 40:
          if (previous != 108 && charat$1(characters2, length2 - 1) == 58) {
            if (indexof$1(characters2 += replace$1(delimit$1(character2), "&", "&\f"), "&\f") != -1)
              ampersand = -1;
            break;
          }
        case 34:
        case 39:
        case 91:
          characters2 += delimit$1(character2);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          characters2 += whitespace$2(previous);
          break;
        case 92:
          characters2 += escaping$1(caret$1() - 1, 7);
          continue;
        case 47:
          switch (peek$1()) {
            case 42:
            case 47:
              append$1(comment$1(commenter$1(next$1(), caret$1()), root2, parent), declarations);
              break;
            default:
              characters2 += "/";
          }
          break;
        case 123 * variable:
          points[index2++] = strlen$1(characters2) * ampersand;
        case 125 * variable:
        case 59:
        case 0:
          switch (character2) {
            case 0:
            case 125:
              scanning = 0;
            case 59 + offset2:
              if (ampersand == -1)
                characters2 = replace$1(characters2, /\f/g, "");
              if (property > 0 && strlen$1(characters2) - length2)
                append$1(property > 32 ? declaration$1(characters2 + ";", rule, parent, length2 - 1) : declaration$1(replace$1(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
              break;
            case 59:
              characters2 += ";";
            default:
              append$1(reference = ruleset$1(characters2, root2, parent, index2, offset2, rules2, points, type4, props = [], children = [], length2), rulesets);
              if (character2 === 123)
                if (offset2 === 0)
                  parse$1(characters2, root2, reference, reference, props, rulesets, length2, points, children);
                else
                  switch (atrule === 99 && charat$1(characters2, 3) === 110 ? 100 : atrule) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      parse$1(value, reference, reference, rule && append$1(ruleset$1(value, reference, reference, 0, 0, rules2, points, type4, rules2, props = [], length2), children), rules2, children, length2, points, rule ? props : children);
                      break;
                    default:
                      parse$1(characters2, reference, reference, reference, [""], children, 0, points, children);
                  }
          }
          index2 = offset2 = property = 0, variable = ampersand = 1, type4 = characters2 = "", length2 = pseudo;
          break;
        case 58:
          length2 = 1 + strlen$1(characters2), property = previous;
        default:
          if (variable < 1) {
            if (character2 == 123)
              --variable;
            else if (character2 == 125 && variable++ == 0 && prev$1() == 125)
              continue;
          }
          switch (characters2 += from$1(character2), character2 * variable) {
            case 38:
              ampersand = offset2 > 0 ? 1 : (characters2 += "\f", -1);
              break;
            case 44:
              points[index2++] = (strlen$1(characters2) - 1) * ampersand, ampersand = 1;
              break;
            case 64:
              if (peek$1() === 45)
                characters2 += delimit$1(next$1());
              atrule = peek$1(), offset2 = length2 = strlen$1(type4 = characters2 += identifier$1(caret$1())), character2++;
              break;
            case 45:
              if (previous === 45 && strlen$1(characters2) == 2)
                variable = 0;
          }
      }
    return rulesets;
  }
  function ruleset$1(value, root2, parent, index2, offset2, rules2, points, type4, props, children, length2) {
    var post = offset2 - 1;
    var rule = offset2 === 0 ? rules2 : [""];
    var size2 = sizeof$1(rule);
    for (var i2 = 0, j = 0, k2 = 0; i2 < index2; ++i2)
      for (var x2 = 0, y2 = substr$1(value, post + 1, post = abs$1(j = points[i2])), z2 = value; x2 < size2; ++x2)
        if (z2 = trim$1(j > 0 ? rule[x2] + " " + y2 : replace$1(y2, /&\f/g, rule[x2])))
          props[k2++] = z2;
    return node$1(value, root2, parent, offset2 === 0 ? RULESET$1 : type4, props, children, length2);
  }
  function comment$1(value, root2, parent) {
    return node$1(value, root2, parent, COMMENT$1, from$1(char$1()), substr$1(value, 2, -2), 0);
  }
  function declaration$1(value, root2, parent, length2) {
    return node$1(value, root2, parent, DECLARATION$1, substr$1(value, 0, length2), substr$1(value, length2 + 1, -1), length2);
  }
  function serialize$1(children, callback) {
    var output = "";
    var length2 = sizeof$1(children);
    for (var i2 = 0; i2 < length2; i2++)
      output += callback(children[i2], i2, children, callback) || "";
    return output;
  }
  function stringify$2(element, index2, children, callback) {
    switch (element.type) {
      case LAYER$1:
        if (element.children.length)
          break;
      case IMPORT$1:
      case DECLARATION$1:
        return element.return = element.return || element.value;
      case COMMENT$1:
        return "";
      case KEYFRAMES$1:
        return element.return = element.value + "{" + serialize$1(element.children, callback) + "}";
      case RULESET$1:
        element.value = element.props.join(",");
    }
    return strlen$1(children = serialize$1(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
  }
  function middleware(collection) {
    var length2 = sizeof$1(collection);
    return function(element, index2, children, callback) {
      var output = "";
      for (var i2 = 0; i2 < length2; i2++)
        output += collection[i2](element, index2, children, callback) || "";
      return output;
    };
  }
  function rulesheet(callback) {
    return function(element) {
      if (!element.root) {
        if (element = element.return)
          callback(element);
      }
    };
  }
  function memoize$1(fn) {
    var cache2 = /* @__PURE__ */ Object.create(null);
    return function(arg) {
      if (cache2[arg] === void 0)
        cache2[arg] = fn(arg);
      return cache2[arg];
    };
  }
  var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index2) {
    var previous = 0;
    var character2 = 0;
    while (true) {
      previous = character2;
      character2 = peek$1();
      if (previous === 38 && character2 === 12) {
        points[index2] = 1;
      }
      if (token$1(character2)) {
        break;
      }
      next$1();
    }
    return slice$1(begin, position$1);
  };
  var toRules = function toRules2(parsed, points) {
    var index2 = -1;
    var character2 = 44;
    do {
      switch (token$1(character2)) {
        case 0:
          if (character2 === 38 && peek$1() === 12) {
            points[index2] = 1;
          }
          parsed[index2] += identifierWithPointTracking(position$1 - 1, points, index2);
          break;
        case 2:
          parsed[index2] += delimit$1(character2);
          break;
        case 4:
          if (character2 === 44) {
            parsed[++index2] = peek$1() === 58 ? "&\f" : "";
            points[index2] = parsed[index2].length;
            break;
          }
        default:
          parsed[index2] += from$1(character2);
      }
    } while (character2 = next$1());
    return parsed;
  };
  var getRules = function getRules2(value, points) {
    return dealloc$1(toRules(alloc$1(value), points));
  };
  var fixedElements = /* @__PURE__ */ new WeakMap();
  var compat = function compat2(element) {
    if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) {
      return;
    }
    var value = element.value, parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while (parent.type !== "rule") {
      parent = parent.parent;
      if (!parent)
        return;
    }
    if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
      return;
    }
    if (isImplicitRule) {
      return;
    }
    fixedElements.set(element, true);
    var points = [];
    var rules2 = getRules(value, points);
    var parentRules = parent.props;
    for (var i2 = 0, k2 = 0; i2 < rules2.length; i2++) {
      for (var j = 0; j < parentRules.length; j++, k2++) {
        element.props[k2] = points[i2] ? rules2[i2].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules2[i2];
      }
    }
  };
  var removeLabel = function removeLabel2(element) {
    if (element.type === "decl") {
      var value = element.value;
      if (
        // charcode for l
        value.charCodeAt(0) === 108 && // charcode for b
        value.charCodeAt(2) === 98
      ) {
        element["return"] = "";
        element.value = "";
      }
    }
  };
  function prefix(value, length2) {
    switch (hash(value, length2)) {
      case 5103:
        return WEBKIT + "print-" + value + value;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      case 6828:
      case 4268:
        return WEBKIT + value + MS + value + value;
      case 6165:
        return WEBKIT + value + MS + "flex-" + value + value;
      case 5187:
        return WEBKIT + value + replace$1(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
      case 5443:
        return WEBKIT + value + MS + "flex-item-" + replace$1(value, /flex-|-self/, "") + value;
      case 4675:
        return WEBKIT + value + MS + "flex-line-pack" + replace$1(value, /align-content|flex-|-self/, "") + value;
      case 5548:
        return WEBKIT + value + MS + replace$1(value, "shrink", "negative") + value;
      case 5292:
        return WEBKIT + value + MS + replace$1(value, "basis", "preferred-size") + value;
      case 6060:
        return WEBKIT + "box-" + replace$1(value, "-grow", "") + WEBKIT + value + MS + replace$1(value, "grow", "positive") + value;
      case 4554:
        return WEBKIT + replace$1(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
      case 6187:
        return replace$1(replace$1(replace$1(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
      case 5495:
      case 3959:
        return replace$1(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
      case 4968:
        return replace$1(replace$1(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace$1(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (strlen$1(value) - 1 - length2 > 6)
          switch (charat$1(value, length2 + 1)) {
            case 109:
              if (charat$1(value, length2 + 4) !== 45)
                break;
            case 102:
              return replace$1(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat$1(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
            case 115:
              return ~indexof$1(value, "stretch") ? prefix(replace$1(value, "stretch", "fill-available"), length2) + value : value;
          }
        break;
      case 4949:
        if (charat$1(value, length2 + 1) !== 115)
          break;
      case 6444:
        switch (charat$1(value, strlen$1(value) - 3 - (~indexof$1(value, "!important") && 10))) {
          case 107:
            return replace$1(value, ":", ":" + WEBKIT) + value;
          case 101:
            return replace$1(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat$1(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        }
        break;
      case 5936:
        switch (charat$1(value, length2 + 11)) {
          case 114:
            return WEBKIT + value + MS + replace$1(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
          case 108:
            return WEBKIT + value + MS + replace$1(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
          case 45:
            return WEBKIT + value + MS + replace$1(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
        }
        return WEBKIT + value + MS + value + value;
    }
    return value;
  }
  var prefixer = function prefixer2(element, index2, children, callback) {
    if (element.length > -1) {
      if (!element["return"])
        switch (element.type) {
          case DECLARATION$1:
            element["return"] = prefix(element.value, element.length);
            break;
          case KEYFRAMES$1:
            return serialize$1([copy(element, {
              value: replace$1(element.value, "@", "@" + WEBKIT)
            })], callback);
          case RULESET$1:
            if (element.length)
              return combine(element.props, function(value) {
                switch (match$1(value, /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    return serialize$1([copy(element, {
                      props: [replace$1(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                    })], callback);
                  case "::placeholder":
                    return serialize$1([copy(element, {
                      props: [replace$1(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                    }), copy(element, {
                      props: [replace$1(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                    }), copy(element, {
                      props: [replace$1(value, /:(plac\w+)/, MS + "input-$1")]
                    })], callback);
                }
                return "";
              });
        }
    }
  };
  var defaultStylisPlugins = [prefixer];
  var createCache$1 = function createCache2(options) {
    var key = options.key;
    if (key === "css") {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(ssrStyles, function(node2) {
        var dataEmotionAttribute = node2.getAttribute("data-emotion");
        if (dataEmotionAttribute.indexOf(" ") === -1) {
          return;
        }
        document.head.appendChild(node2);
        node2.setAttribute("data-s", "");
      });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    var inserted = {};
    var container;
    var nodesToHydrate = [];
    {
      container = options.container || document.head;
      Array.prototype.forEach.call(
        // this means we will ignore elements which don't have a space in them which
        // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
        document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
        function(node2) {
          var attrib = node2.getAttribute("data-emotion").split(" ");
          for (var i2 = 1; i2 < attrib.length; i2++) {
            inserted[attrib[i2]] = true;
          }
          nodesToHydrate.push(node2);
        }
      );
    }
    var _insert;
    var omnipresentPlugins = [compat, removeLabel];
    {
      var currentSheet;
      var finalizingPlugins = [stringify$2, rulesheet(function(rule) {
        currentSheet.insert(rule);
      })];
      var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
      var stylis = function stylis2(styles) {
        return serialize$1(compile$1(styles), serializer);
      };
      _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;
        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        if (shouldCache) {
          cache2.inserted[serialized.name] = true;
        }
      };
    }
    var cache2 = {
      key,
      sheet: new StyleSheet({
        key,
        container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend,
        insertionPoint: options.insertionPoint
      }),
      nonce: options.nonce,
      inserted,
      registered: {},
      insert: _insert
    };
    cache2.sheet.hydrate(nodesToHydrate);
    return cache2;
  };
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n2) {
      for (var e2 = 1; e2 < arguments.length; e2++) {
        var t2 = arguments[e2];
        for (var r2 in t2)
          ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
      }
      return n2;
    }, _extends.apply(null, arguments);
  }
  var reactIs$2 = { exports: {} };
  var reactIs_production_min$1 = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b$1 = "function" === typeof Symbol && Symbol.for, c$2 = b$1 ? Symbol.for("react.element") : 60103, d$1 = b$1 ? Symbol.for("react.portal") : 60106, e$3 = b$1 ? Symbol.for("react.fragment") : 60107, f$2 = b$1 ? Symbol.for("react.strict_mode") : 60108, g$1 = b$1 ? Symbol.for("react.profiler") : 60114, h$3 = b$1 ? Symbol.for("react.provider") : 60109, k$2 = b$1 ? Symbol.for("react.context") : 60110, l$3 = b$1 ? Symbol.for("react.async_mode") : 60111, m$3 = b$1 ? Symbol.for("react.concurrent_mode") : 60111, n$3 = b$1 ? Symbol.for("react.forward_ref") : 60112, p$3 = b$1 ? Symbol.for("react.suspense") : 60113, q$2 = b$1 ? Symbol.for("react.suspense_list") : 60120, r$2 = b$1 ? Symbol.for("react.memo") : 60115, t$3 = b$1 ? Symbol.for("react.lazy") : 60116, v$1 = b$1 ? Symbol.for("react.block") : 60121, w$1 = b$1 ? Symbol.for("react.fundamental") : 60117, x = b$1 ? Symbol.for("react.responder") : 60118, y$1 = b$1 ? Symbol.for("react.scope") : 60119;
  function z(a2) {
    if ("object" === typeof a2 && null !== a2) {
      var u2 = a2.$$typeof;
      switch (u2) {
        case c$2:
          switch (a2 = a2.type, a2) {
            case l$3:
            case m$3:
            case e$3:
            case g$1:
            case f$2:
            case p$3:
              return a2;
            default:
              switch (a2 = a2 && a2.$$typeof, a2) {
                case k$2:
                case n$3:
                case t$3:
                case r$2:
                case h$3:
                  return a2;
                default:
                  return u2;
              }
          }
        case d$1:
          return u2;
      }
    }
  }
  function A(a2) {
    return z(a2) === m$3;
  }
  reactIs_production_min$1.AsyncMode = l$3;
  reactIs_production_min$1.ConcurrentMode = m$3;
  reactIs_production_min$1.ContextConsumer = k$2;
  reactIs_production_min$1.ContextProvider = h$3;
  reactIs_production_min$1.Element = c$2;
  reactIs_production_min$1.ForwardRef = n$3;
  reactIs_production_min$1.Fragment = e$3;
  reactIs_production_min$1.Lazy = t$3;
  reactIs_production_min$1.Memo = r$2;
  reactIs_production_min$1.Portal = d$1;
  reactIs_production_min$1.Profiler = g$1;
  reactIs_production_min$1.StrictMode = f$2;
  reactIs_production_min$1.Suspense = p$3;
  reactIs_production_min$1.isAsyncMode = function(a2) {
    return A(a2) || z(a2) === l$3;
  };
  reactIs_production_min$1.isConcurrentMode = A;
  reactIs_production_min$1.isContextConsumer = function(a2) {
    return z(a2) === k$2;
  };
  reactIs_production_min$1.isContextProvider = function(a2) {
    return z(a2) === h$3;
  };
  reactIs_production_min$1.isElement = function(a2) {
    return "object" === typeof a2 && null !== a2 && a2.$$typeof === c$2;
  };
  reactIs_production_min$1.isForwardRef = function(a2) {
    return z(a2) === n$3;
  };
  reactIs_production_min$1.isFragment = function(a2) {
    return z(a2) === e$3;
  };
  reactIs_production_min$1.isLazy = function(a2) {
    return z(a2) === t$3;
  };
  reactIs_production_min$1.isMemo = function(a2) {
    return z(a2) === r$2;
  };
  reactIs_production_min$1.isPortal = function(a2) {
    return z(a2) === d$1;
  };
  reactIs_production_min$1.isProfiler = function(a2) {
    return z(a2) === g$1;
  };
  reactIs_production_min$1.isStrictMode = function(a2) {
    return z(a2) === f$2;
  };
  reactIs_production_min$1.isSuspense = function(a2) {
    return z(a2) === p$3;
  };
  reactIs_production_min$1.isValidElementType = function(a2) {
    return "string" === typeof a2 || "function" === typeof a2 || a2 === e$3 || a2 === m$3 || a2 === g$1 || a2 === f$2 || a2 === p$3 || a2 === q$2 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === t$3 || a2.$$typeof === r$2 || a2.$$typeof === h$3 || a2.$$typeof === k$2 || a2.$$typeof === n$3 || a2.$$typeof === w$1 || a2.$$typeof === x || a2.$$typeof === y$1 || a2.$$typeof === v$1);
  };
  reactIs_production_min$1.typeOf = z;
  {
    reactIs$2.exports = reactIs_production_min$1;
  }
  var reactIsExports$1 = reactIs$2.exports;
  var reactIs$1 = reactIsExports$1;
  var FORWARD_REF_STATICS = {
    "$$typeof": true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    "$$typeof": true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
  var isBrowser$1 = true;
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = "";
    classNames.split(" ").forEach(function(className) {
      if (registered[className] !== void 0) {
        registeredStyles.push(registered[className] + ";");
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var registerStyles = function registerStyles2(cache2, serialized, isStringTag) {
    var className = cache2.key + "-" + serialized.name;
    if (
      // we only need to add the styles to the registered cache if the
      // class name could be used further down
      // the tree but if it's a string tag, we know it won't
      // so we don't have to add it to registered cache.
      // this improves memory usage since we can avoid storing the whole style string
      (isStringTag === false || // we need to always store it if we're in compat mode and
      // in node since emotion-server relies on whether a style is in
      // the registered cache to know whether a style is global or not
      // also, note that this check will be dead code eliminated in the browser
      isBrowser$1 === false) && cache2.registered[className] === void 0
    ) {
      cache2.registered[className] = serialized.styles;
    }
  };
  var insertStyles = function insertStyles2(cache2, serialized, isStringTag) {
    registerStyles(cache2, serialized, isStringTag);
    var className = cache2.key + "-" + serialized.name;
    if (cache2.inserted[serialized.name] === void 0) {
      var current = serialized;
      do {
        cache2.insert(serialized === current ? "." + className : "", current, cache2.sheet, true);
        current = current.next;
      } while (current !== void 0);
    }
  };
  function murmur2$1(str) {
    var h2 = 0;
    var k2, i2 = 0, len = str.length;
    for (; len >= 4; ++i2, len -= 4) {
      k2 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
      k2 = /* Math.imul(k, m): */
      (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
      k2 ^= /* k >>> r: */
      k2 >>> 24;
      h2 = /* Math.imul(k, m): */
      (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
    }
    switch (len) {
      case 3:
        h2 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
      case 2:
        h2 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
      case 1:
        h2 ^= str.charCodeAt(i2) & 255;
        h2 = /* Math.imul(h, m): */
        (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
    }
    h2 ^= h2 >>> 13;
    h2 = /* Math.imul(h, m): */
    (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
    return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
  }
  var unitlessKeys$1 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };
  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
  var isCustomProperty = function isCustomProperty2(property) {
    return property.charCodeAt(1) === 45;
  };
  var isProcessableValue = function isProcessableValue2(value) {
    return value != null && typeof value !== "boolean";
  };
  var processStyleName = /* @__PURE__ */ memoize$1(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
  });
  var processStyleValue = function processStyleValue2(key, value) {
    switch (key) {
      case "animation":
      case "animationName": {
        if (typeof value === "string") {
          return value.replace(animationRegex, function(match2, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
    }
    if (unitlessKeys$1[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
      return value + "px";
    }
    return value;
  };
  var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return "";
    }
    if (interpolation.__emotion_styles !== void 0) {
      return interpolation;
    }
    switch (typeof interpolation) {
      case "boolean": {
        return "";
      }
      case "object": {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }
        if (interpolation.styles !== void 0) {
          var next2 = interpolation.next;
          if (next2 !== void 0) {
            while (next2 !== void 0) {
              cursor = {
                name: next2.name,
                styles: next2.styles,
                next: cursor
              };
              next2 = next2.next;
            }
          }
          var styles = interpolation.styles + ";";
          return styles;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
      case "function": {
        if (mergedProps !== void 0) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }
        break;
      }
    }
    if (registered == null) {
      return interpolation;
    }
    var cached = registered[interpolation];
    return cached !== void 0 ? cached : interpolation;
  }
  function createStringFromObject(mergedProps, registered, obj) {
    var string3 = "";
    if (Array.isArray(obj)) {
      for (var i2 = 0; i2 < obj.length; i2++) {
        string3 += handleInterpolation(mergedProps, registered, obj[i2]) + ";";
      }
    } else {
      for (var _key in obj) {
        var value = obj[_key];
        if (typeof value !== "object") {
          if (registered != null && registered[value] !== void 0) {
            string3 += _key + "{" + registered[value] + "}";
          } else if (isProcessableValue(value)) {
            string3 += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
          }
        } else {
          if (_key === "NO_COMPONENT_SELECTOR" && false) {
            throw new Error(noComponentSelectorMessage);
          }
          if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string3 += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);
            switch (_key) {
              case "animation":
              case "animationName": {
                string3 += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }
              default: {
                string3 += _key + "{" + interpolated + "}";
              }
            }
          }
        }
      }
    }
    return string3;
  }
  var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
  var cursor;
  var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
      return args[0];
    }
    var stringMode = true;
    var styles = "";
    cursor = void 0;
    var strings = args[0];
    if (strings == null || strings.raw === void 0) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings);
    } else {
      styles += strings[0];
    }
    for (var i2 = 1; i2 < args.length; i2++) {
      styles += handleInterpolation(mergedProps, registered, args[i2]);
      if (stringMode) {
        styles += strings[i2];
      }
    }
    labelPattern.lastIndex = 0;
    var identifierName = "";
    var match2;
    while ((match2 = labelPattern.exec(styles)) !== null) {
      identifierName += "-" + // $FlowFixMe we know it's not null
      match2[1];
    }
    var name = murmur2$1(styles) + identifierName;
    return {
      name,
      styles,
      next: cursor
    };
  };
  var syncFallback = function syncFallback2(create) {
    return create();
  };
  var useInsertionEffect$2 = React__namespace["useInsertionEffect"] ? React__namespace["useInsertionEffect"] : false;
  var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect$2 || syncFallback;
  var useInsertionEffectWithLayoutFallback = useInsertionEffect$2 || React__namespace.useLayoutEffect;
  var hasOwn = {}.hasOwnProperty;
  var EmotionCacheContext = /* @__PURE__ */ React__namespace.createContext(
    // we're doing this to avoid preconstruct's dead code elimination in this one case
    // because this module is primarily intended for the browser and node
    // but it's also required in react native and similar environments sometimes
    // and we could have a special build just for that
    // but this is much easier and the native packages
    // might use a different theme context in the future anyway
    typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache$1({
      key: "css"
    }) : null
  );
  var CacheProvider = EmotionCacheContext.Provider;
  var withEmotionCache = function withEmotionCache2(func) {
    return /* @__PURE__ */ React.forwardRef(function(props, ref) {
      var cache2 = React.useContext(EmotionCacheContext);
      return func(props, cache2, ref);
    });
  };
  var ThemeContext = /* @__PURE__ */ React__namespace.createContext({});
  var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
  var createEmotionProps = function createEmotionProps2(type4, props) {
    var newProps = {};
    for (var key in props) {
      if (hasOwn.call(props, key)) {
        newProps[key] = props[key];
      }
    }
    newProps[typePropName] = type4;
    return newProps;
  };
  var Insertion = function Insertion2(_ref7) {
    var cache2 = _ref7.cache, serialized = _ref7.serialized, isStringTag = _ref7.isStringTag;
    registerStyles(cache2, serialized, isStringTag);
    useInsertionEffectAlwaysWithSyncFallback(function() {
      return insertStyles(cache2, serialized, isStringTag);
    });
    return null;
  };
  var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache2, ref) {
    var cssProp = props.css;
    if (typeof cssProp === "string" && cache2.registered[cssProp] !== void 0) {
      cssProp = cache2.registered[cssProp];
    }
    var WrappedComponent = props[typePropName];
    var registeredStyles = [cssProp];
    var className = "";
    if (typeof props.className === "string") {
      className = getRegisteredStyles(cache2.registered, registeredStyles, props.className);
    } else if (props.className != null) {
      className = props.className + " ";
    }
    var serialized = serializeStyles(registeredStyles, void 0, React__namespace.useContext(ThemeContext));
    className += cache2.key + "-" + serialized.name;
    var newProps = {};
    for (var key in props) {
      if (hasOwn.call(props, key) && key !== "css" && key !== typePropName && true) {
        newProps[key] = props[key];
      }
    }
    newProps.ref = ref;
    newProps.className = className;
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(Insertion, {
      cache: cache2,
      serialized,
      isStringTag: typeof WrappedComponent === "string"
    }), /* @__PURE__ */ React__namespace.createElement(WrappedComponent, newProps));
  });
  var Emotion$1 = Emotion;
  var Fragment = jsxRuntimeExports.Fragment;
  function jsx(type4, props, key) {
    if (!hasOwn.call(props, "css")) {
      return jsxRuntimeExports.jsx(type4, props, key);
    }
    return jsxRuntimeExports.jsx(Emotion$1, createEmotionProps(type4, props), key);
  }
  function jsxs(type4, props, key) {
    if (!hasOwn.call(props, "css")) {
      return jsxRuntimeExports.jsxs(type4, props, key);
    }
    return jsxRuntimeExports.jsxs(Emotion$1, createEmotionProps(type4, props), key);
  }
  const APP_NAME = "greasyfork-feedback-filter";
  const APP_NAME_DISPLAY = "GreasyFork Feedback Filter";
  const colorPrimary = "#01847F";
  var classnames$1 = { exports: {} };
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  (function(module) {
    (function() {
      var hasOwn2 = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i2 = 0; i2 < arguments.length; i2++) {
          var arg = arguments[i2];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn2.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$1);
  var classnamesExports = classnames$1.exports;
  const cx = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
  var reactIs = { exports: {} };
  var reactIs_production_min = {};
  /**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b = Symbol.for("react.element"), c$1 = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e$2 = Symbol.for("react.strict_mode"), f$1 = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h$2 = Symbol.for("react.context"), k$1 = Symbol.for("react.server_context"), l$2 = Symbol.for("react.forward_ref"), m$2 = Symbol.for("react.suspense"), n$2 = Symbol.for("react.suspense_list"), p$2 = Symbol.for("react.memo"), q$1 = Symbol.for("react.lazy"), t$2 = Symbol.for("react.offscreen"), u$2;
  u$2 = Symbol.for("react.module.reference");
  function v(a2) {
    if ("object" === typeof a2 && null !== a2) {
      var r2 = a2.$$typeof;
      switch (r2) {
        case b:
          switch (a2 = a2.type, a2) {
            case d:
            case f$1:
            case e$2:
            case m$2:
            case n$2:
              return a2;
            default:
              switch (a2 = a2 && a2.$$typeof, a2) {
                case k$1:
                case h$2:
                case l$2:
                case q$1:
                case p$2:
                case g:
                  return a2;
                default:
                  return r2;
              }
          }
        case c$1:
          return r2;
      }
    }
  }
  reactIs_production_min.ContextConsumer = h$2;
  reactIs_production_min.ContextProvider = g;
  reactIs_production_min.Element = b;
  reactIs_production_min.ForwardRef = l$2;
  reactIs_production_min.Fragment = d;
  reactIs_production_min.Lazy = q$1;
  reactIs_production_min.Memo = p$2;
  reactIs_production_min.Portal = c$1;
  reactIs_production_min.Profiler = f$1;
  reactIs_production_min.StrictMode = e$2;
  reactIs_production_min.Suspense = m$2;
  reactIs_production_min.SuspenseList = n$2;
  reactIs_production_min.isAsyncMode = function() {
    return false;
  };
  reactIs_production_min.isConcurrentMode = function() {
    return false;
  };
  reactIs_production_min.isContextConsumer = function(a2) {
    return v(a2) === h$2;
  };
  reactIs_production_min.isContextProvider = function(a2) {
    return v(a2) === g;
  };
  reactIs_production_min.isElement = function(a2) {
    return "object" === typeof a2 && null !== a2 && a2.$$typeof === b;
  };
  reactIs_production_min.isForwardRef = function(a2) {
    return v(a2) === l$2;
  };
  reactIs_production_min.isFragment = function(a2) {
    return v(a2) === d;
  };
  reactIs_production_min.isLazy = function(a2) {
    return v(a2) === q$1;
  };
  reactIs_production_min.isMemo = function(a2) {
    return v(a2) === p$2;
  };
  reactIs_production_min.isPortal = function(a2) {
    return v(a2) === c$1;
  };
  reactIs_production_min.isProfiler = function(a2) {
    return v(a2) === f$1;
  };
  reactIs_production_min.isStrictMode = function(a2) {
    return v(a2) === e$2;
  };
  reactIs_production_min.isSuspense = function(a2) {
    return v(a2) === m$2;
  };
  reactIs_production_min.isSuspenseList = function(a2) {
    return v(a2) === n$2;
  };
  reactIs_production_min.isValidElementType = function(a2) {
    return "string" === typeof a2 || "function" === typeof a2 || a2 === d || a2 === f$1 || a2 === e$2 || a2 === m$2 || a2 === n$2 || a2 === t$2 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === q$1 || a2.$$typeof === p$2 || a2.$$typeof === g || a2.$$typeof === h$2 || a2.$$typeof === l$2 || a2.$$typeof === u$2 || void 0 !== a2.getModuleId) ? true : false;
  };
  reactIs_production_min.typeOf = v;
  {
    reactIs.exports = reactIs_production_min;
  }
  var reactIsExports = reactIs.exports;
  function toArray$2(children) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var ret = [];
    React.Children.forEach(children, function(child) {
      if ((child === void 0 || child === null) && !option.keepEmpty) {
        return;
      }
      if (Array.isArray(child)) {
        ret = ret.concat(toArray$2(child));
      } else if (reactIsExports.isFragment(child) && child.props) {
        ret = ret.concat(toArray$2(child.props.children, option));
      } else {
        ret.push(child);
      }
    });
    return ret;
  }
  var warned = {};
  var preMessage = function preMessage2(fn) {
  };
  function warning$2(valid, message2) {
  }
  function note(valid, message2) {
  }
  function resetWarned() {
    warned = {};
  }
  function call(method4, valid, message2) {
    if (!valid && !warned[message2]) {
      method4(false, message2);
      warned[message2] = true;
    }
  }
  function warningOnce(valid, message2) {
    call(warning$2, valid, message2);
  }
  function noteOnce(valid, message2) {
    call(note, valid, message2);
  }
  warningOnce.preMessage = preMessage;
  warningOnce.resetWarned = resetWarned;
  warningOnce.noteOnce = noteOnce;
  function _typeof(o2) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
      return typeof o3;
    } : function(o3) {
      return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
    }, _typeof(o2);
  }
  function toPrimitive(t2, r2) {
    if ("object" != _typeof(t2) || !t2)
      return t2;
    var e2 = t2[Symbol.toPrimitive];
    if (void 0 !== e2) {
      var i2 = e2.call(t2, r2 || "default");
      if ("object" != _typeof(i2))
        return i2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t2);
  }
  function toPropertyKey(t2) {
    var i2 = toPrimitive(t2, "string");
    return "symbol" == _typeof(i2) ? i2 : i2 + "";
  }
  function _defineProperty(e2, r2, t2) {
    return (r2 = toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
      value: t2,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e2[r2] = t2, e2;
  }
  function ownKeys(e2, r2) {
    var t2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var o2 = Object.getOwnPropertySymbols(e2);
      r2 && (o2 = o2.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
      })), t2.push.apply(t2, o2);
    }
    return t2;
  }
  function _objectSpread2(e2) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t2 = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
        _defineProperty(e2, r3, t2[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
        Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
      });
    }
    return e2;
  }
  function isDOM(node2) {
    return node2 instanceof HTMLElement || node2 instanceof SVGElement;
  }
  function getDOM(node2) {
    if (node2 && _typeof(node2) === "object" && isDOM(node2.nativeElement)) {
      return node2.nativeElement;
    }
    if (isDOM(node2)) {
      return node2;
    }
    return null;
  }
  function findDOMNode(node2) {
    var domNode = getDOM(node2);
    if (domNode) {
      return domNode;
    }
    if (node2 instanceof React.Component) {
      var _ReactDOM$findDOMNode;
      return (_ReactDOM$findDOMNode = ReactDOM__default.findDOMNode) === null || _ReactDOM$findDOMNode === void 0 ? void 0 : _ReactDOM$findDOMNode.call(ReactDOM__default, node2);
    }
    return null;
  }
  function useMemo(getValue2, condition, shouldUpdate) {
    var cacheRef = React__namespace.useRef({});
    if (!("value" in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
      cacheRef.current.value = getValue2();
      cacheRef.current.condition = condition;
    }
    return cacheRef.current.value;
  }
  var fillRef = function fillRef2(ref, node2) {
    if (typeof ref === "function") {
      ref(node2);
    } else if (_typeof(ref) === "object" && ref && "current" in ref) {
      ref.current = node2;
    }
  };
  var composeRef = function composeRef2() {
    for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
      refs[_key] = arguments[_key];
    }
    var refList = refs.filter(Boolean);
    if (refList.length <= 1) {
      return refList[0];
    }
    return function(node2) {
      refs.forEach(function(ref) {
        fillRef(ref, node2);
      });
    };
  };
  var useComposeRef = function useComposeRef2() {
    for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      refs[_key2] = arguments[_key2];
    }
    return useMemo(function() {
      return composeRef.apply(void 0, refs);
    }, refs, function(prev2, next2) {
      return prev2.length !== next2.length || prev2.every(function(ref, i2) {
        return ref !== next2[i2];
      });
    });
  };
  var supportRef = function supportRef2(nodeOrComponent) {
    var _type$prototype, _nodeOrComponent$prot;
    var type4 = reactIsExports.isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
    if (typeof type4 === "function" && !((_type$prototype = type4.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render) && type4.$$typeof !== reactIsExports.ForwardRef) {
      return false;
    }
    if (typeof nodeOrComponent === "function" && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render) && nodeOrComponent.$$typeof !== reactIsExports.ForwardRef) {
      return false;
    }
    return true;
  };
  var CollectionContext = /* @__PURE__ */ React__namespace.createContext(null);
  function Collection(_ref7) {
    var children = _ref7.children, onBatchResize = _ref7.onBatchResize;
    var resizeIdRef = React__namespace.useRef(0);
    var resizeInfosRef = React__namespace.useRef([]);
    var onCollectionResize = React__namespace.useContext(CollectionContext);
    var onResize2 = React__namespace.useCallback(function(size2, element, data) {
      resizeIdRef.current += 1;
      var currentId = resizeIdRef.current;
      resizeInfosRef.current.push({
        size: size2,
        element,
        data
      });
      Promise.resolve().then(function() {
        if (currentId === resizeIdRef.current) {
          onBatchResize === null || onBatchResize === void 0 || onBatchResize(resizeInfosRef.current);
          resizeInfosRef.current = [];
        }
      });
      onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(size2, element, data);
    }, [onBatchResize, onCollectionResize]);
    return /* @__PURE__ */ React__namespace.createElement(CollectionContext.Provider, {
      value: onResize2
    }, children);
  }
  var MapShim = function() {
    if (typeof Map !== "undefined") {
      return Map;
    }
    function getIndex(arr, key) {
      var result = -1;
      arr.some(function(entry, index2) {
        if (entry[0] === key) {
          result = index2;
          return true;
        }
        return false;
      });
      return result;
    }
    return (
      /** @class */
      function() {
        function class_1() {
          this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
          /**
           * @returns {boolean}
           */
          get: function() {
            return this.__entries__.length;
          },
          enumerable: true,
          configurable: true
        });
        class_1.prototype.get = function(key) {
          var index2 = getIndex(this.__entries__, key);
          var entry = this.__entries__[index2];
          return entry && entry[1];
        };
        class_1.prototype.set = function(key, value) {
          var index2 = getIndex(this.__entries__, key);
          if (~index2) {
            this.__entries__[index2][1] = value;
          } else {
            this.__entries__.push([key, value]);
          }
        };
        class_1.prototype.delete = function(key) {
          var entries = this.__entries__;
          var index2 = getIndex(entries, key);
          if (~index2) {
            entries.splice(index2, 1);
          }
        };
        class_1.prototype.has = function(key) {
          return !!~getIndex(this.__entries__, key);
        };
        class_1.prototype.clear = function() {
          this.__entries__.splice(0);
        };
        class_1.prototype.forEach = function(callback, ctx) {
          if (ctx === void 0) {
            ctx = null;
          }
          for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
            var entry = _a[_i];
            callback.call(ctx, entry[1], entry[0]);
          }
        };
        return class_1;
      }()
    );
  }();
  var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
  var global$1 = function() {
    if (typeof global !== "undefined" && global.Math === Math) {
      return global;
    }
    if (typeof self !== "undefined" && self.Math === Math) {
      return self;
    }
    if (typeof window !== "undefined" && window.Math === Math) {
      return window;
    }
    return Function("return this")();
  }();
  var requestAnimationFrame$1 = function() {
    if (typeof requestAnimationFrame === "function") {
      return requestAnimationFrame.bind(global$1);
    }
    return function(callback) {
      return setTimeout(function() {
        return callback(Date.now());
      }, 1e3 / 60);
    };
  }();
  var trailingTimeout = 2;
  function throttle(callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    function resolvePending() {
      if (leadingCall) {
        leadingCall = false;
        callback();
      }
      if (trailingCall) {
        proxy2();
      }
    }
    function timeoutCallback() {
      requestAnimationFrame$1(resolvePending);
    }
    function proxy2() {
      var timeStamp = Date.now();
      if (leadingCall) {
        if (timeStamp - lastCallTime < trailingTimeout) {
          return;
        }
        trailingCall = true;
      } else {
        leadingCall = true;
        trailingCall = false;
        setTimeout(timeoutCallback, delay);
      }
      lastCallTime = timeStamp;
    }
    return proxy2;
  }
  var REFRESH_DELAY = 20;
  var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
  var mutationObserverSupported = typeof MutationObserver !== "undefined";
  var ResizeObserverController = (
    /** @class */
    function() {
      function ResizeObserverController2() {
        this.connected_ = false;
        this.mutationEventsAdded_ = false;
        this.mutationsObserver_ = null;
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
      }
      ResizeObserverController2.prototype.addObserver = function(observer) {
        if (!~this.observers_.indexOf(observer)) {
          this.observers_.push(observer);
        }
        if (!this.connected_) {
          this.connect_();
        }
      };
      ResizeObserverController2.prototype.removeObserver = function(observer) {
        var observers2 = this.observers_;
        var index2 = observers2.indexOf(observer);
        if (~index2) {
          observers2.splice(index2, 1);
        }
        if (!observers2.length && this.connected_) {
          this.disconnect_();
        }
      };
      ResizeObserverController2.prototype.refresh = function() {
        var changesDetected = this.updateObservers_();
        if (changesDetected) {
          this.refresh();
        }
      };
      ResizeObserverController2.prototype.updateObservers_ = function() {
        var activeObservers = this.observers_.filter(function(observer) {
          return observer.gatherActive(), observer.hasActive();
        });
        activeObservers.forEach(function(observer) {
          return observer.broadcastActive();
        });
        return activeObservers.length > 0;
      };
      ResizeObserverController2.prototype.connect_ = function() {
        if (!isBrowser || this.connected_) {
          return;
        }
        document.addEventListener("transitionend", this.onTransitionEnd_);
        window.addEventListener("resize", this.refresh);
        if (mutationObserverSupported) {
          this.mutationsObserver_ = new MutationObserver(this.refresh);
          this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        } else {
          document.addEventListener("DOMSubtreeModified", this.refresh);
          this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
      };
      ResizeObserverController2.prototype.disconnect_ = function() {
        if (!isBrowser || !this.connected_) {
          return;
        }
        document.removeEventListener("transitionend", this.onTransitionEnd_);
        window.removeEventListener("resize", this.refresh);
        if (this.mutationsObserver_) {
          this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
          document.removeEventListener("DOMSubtreeModified", this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
      };
      ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
        var isReflowProperty = transitionKeys.some(function(key) {
          return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
          this.refresh();
        }
      };
      ResizeObserverController2.getInstance = function() {
        if (!this.instance_) {
          this.instance_ = new ResizeObserverController2();
        }
        return this.instance_;
      };
      ResizeObserverController2.instance_ = null;
      return ResizeObserverController2;
    }()
  );
  var defineConfigurable = function(target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
      var key = _a[_i];
      Object.defineProperty(target, key, {
        value: props[key],
        enumerable: false,
        writable: false,
        configurable: true
      });
    }
    return target;
  };
  var getWindowOf = function(target) {
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    return ownerGlobal || global$1;
  };
  var emptyRect = createRectInit(0, 0, 0, 0);
  function toFloat(value) {
    return parseFloat(value) || 0;
  }
  function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function(size2, position2) {
      var value = styles["border-" + position2 + "-width"];
      return size2 + toFloat(value);
    }, 0);
  }
  function getPaddings(styles) {
    var positions = ["top", "right", "bottom", "left"];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
      var position2 = positions_1[_i];
      var value = styles["padding-" + position2];
      paddings[position2] = toFloat(value);
    }
    return paddings;
  }
  function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
  }
  function getHTMLElementContentRect(target) {
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    if (!clientWidth && !clientHeight) {
      return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    var width = toFloat(styles.width), height = toFloat(styles.height);
    if (styles.boxSizing === "border-box") {
      if (Math.round(width + horizPad) !== clientWidth) {
        width -= getBordersSize(styles, "left", "right") + horizPad;
      }
      if (Math.round(height + vertPad) !== clientHeight) {
        height -= getBordersSize(styles, "top", "bottom") + vertPad;
      }
    }
    if (!isDocumentElement(target)) {
      var vertScrollbar = Math.round(width + horizPad) - clientWidth;
      var horizScrollbar = Math.round(height + vertPad) - clientHeight;
      if (Math.abs(vertScrollbar) !== 1) {
        width -= vertScrollbar;
      }
      if (Math.abs(horizScrollbar) !== 1) {
        height -= horizScrollbar;
      }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
  }
  var isSVGGraphicsElement = function() {
    if (typeof SVGGraphicsElement !== "undefined") {
      return function(target) {
        return target instanceof getWindowOf(target).SVGGraphicsElement;
      };
    }
    return function(target) {
      return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
    };
  }();
  function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
  }
  function getContentRect(target) {
    if (!isBrowser) {
      return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
      return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
  }
  function createReadOnlyRect(_a) {
    var x2 = _a.x, y2 = _a.y, width = _a.width, height = _a.height;
    var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    defineConfigurable(rect, {
      x: x2,
      y: y2,
      width,
      height,
      top: y2,
      right: x2 + width,
      bottom: height + y2,
      left: x2
    });
    return rect;
  }
  function createRectInit(x2, y2, width, height) {
    return { x: x2, y: y2, width, height };
  }
  var ResizeObservation = (
    /** @class */
    function() {
      function ResizeObservation2(target) {
        this.broadcastWidth = 0;
        this.broadcastHeight = 0;
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
      }
      ResizeObservation2.prototype.isActive = function() {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
      };
      ResizeObservation2.prototype.broadcastRect = function() {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
      };
      return ResizeObservation2;
    }()
  );
  var ResizeObserverEntry = (
    /** @class */
    /* @__PURE__ */ function() {
      function ResizeObserverEntry2(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        defineConfigurable(this, { target, contentRect });
      }
      return ResizeObserverEntry2;
    }()
  );
  var ResizeObserverSPI = (
    /** @class */
    function() {
      function ResizeObserverSPI2(callback, controller, callbackCtx) {
        this.activeObservations_ = [];
        this.observations_ = new MapShim();
        if (typeof callback !== "function") {
          throw new TypeError("The callback provided as parameter 1 is not a function.");
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
      }
      ResizeObserverSPI2.prototype.observe = function(target) {
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        if (typeof Element === "undefined" || !(Element instanceof Object)) {
          return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        if (observations.has(target)) {
          return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        this.controller_.refresh();
      };
      ResizeObserverSPI2.prototype.unobserve = function(target) {
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        if (typeof Element === "undefined" || !(Element instanceof Object)) {
          return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        if (!observations.has(target)) {
          return;
        }
        observations.delete(target);
        if (!observations.size) {
          this.controller_.removeObserver(this);
        }
      };
      ResizeObserverSPI2.prototype.disconnect = function() {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
      };
      ResizeObserverSPI2.prototype.gatherActive = function() {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function(observation) {
          if (observation.isActive()) {
            _this.activeObservations_.push(observation);
          }
        });
      };
      ResizeObserverSPI2.prototype.broadcastActive = function() {
        if (!this.hasActive()) {
          return;
        }
        var ctx = this.callbackCtx_;
        var entries = this.activeObservations_.map(function(observation) {
          return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
      };
      ResizeObserverSPI2.prototype.clearActive = function() {
        this.activeObservations_.splice(0);
      };
      ResizeObserverSPI2.prototype.hasActive = function() {
        return this.activeObservations_.length > 0;
      };
      return ResizeObserverSPI2;
    }()
  );
  var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
  var ResizeObserver$2 = (
    /** @class */
    /* @__PURE__ */ function() {
      function ResizeObserver2(callback) {
        if (!(this instanceof ResizeObserver2)) {
          throw new TypeError("Cannot call a class as a function.");
        }
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
      }
      return ResizeObserver2;
    }()
  );
  [
    "observe",
    "unobserve",
    "disconnect"
  ].forEach(function(method4) {
    ResizeObserver$2.prototype[method4] = function() {
      var _a;
      return (_a = observers.get(this))[method4].apply(_a, arguments);
    };
  });
  var index = function() {
    if (typeof global$1.ResizeObserver !== "undefined") {
      return global$1.ResizeObserver;
    }
    return ResizeObserver$2;
  }();
  var elementListeners = /* @__PURE__ */ new Map();
  function onResize(entities) {
    entities.forEach(function(entity) {
      var _elementListeners$get;
      var target = entity.target;
      (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 || _elementListeners$get.forEach(function(listener) {
        return listener(target);
      });
    });
  }
  var resizeObserver = new index(onResize);
  function observe(element, callback) {
    if (!elementListeners.has(element)) {
      elementListeners.set(element, /* @__PURE__ */ new Set());
      resizeObserver.observe(element);
    }
    elementListeners.get(element).add(callback);
  }
  function unobserve(element, callback) {
    if (elementListeners.has(element)) {
      elementListeners.get(element).delete(callback);
      if (!elementListeners.get(element).size) {
        resizeObserver.unobserve(element);
        elementListeners.delete(element);
      }
    }
  }
  function _classCallCheck(a2, n2) {
    if (!(a2 instanceof n2))
      throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e2, r2) {
    for (var t2 = 0; t2 < r2.length; t2++) {
      var o2 = r2[t2];
      o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, toPropertyKey(o2.key), o2);
    }
  }
  function _createClass(e2, r2, t2) {
    return r2 && _defineProperties(e2.prototype, r2), t2 && _defineProperties(e2, t2), Object.defineProperty(e2, "prototype", {
      writable: false
    }), e2;
  }
  function _setPrototypeOf(t2, e2) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
      return t3.__proto__ = e3, t3;
    }, _setPrototypeOf(t2, e2);
  }
  function _inherits(t2, e2) {
    if ("function" != typeof e2 && null !== e2)
      throw new TypeError("Super expression must either be null or a function");
    t2.prototype = Object.create(e2 && e2.prototype, {
      constructor: {
        value: t2,
        writable: true,
        configurable: true
      }
    }), Object.defineProperty(t2, "prototype", {
      writable: false
    }), e2 && _setPrototypeOf(t2, e2);
  }
  function _getPrototypeOf(t2) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
      return t3.__proto__ || Object.getPrototypeOf(t3);
    }, _getPrototypeOf(t2);
  }
  function _isNativeReflectConstruct() {
    try {
      var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t3) {
    }
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
      return !!t2;
    })();
  }
  function _assertThisInitialized(e2) {
    if (void 0 === e2)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e2;
  }
  function _possibleConstructorReturn(t2, e2) {
    if (e2 && ("object" == _typeof(e2) || "function" == typeof e2))
      return e2;
    if (void 0 !== e2)
      throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t2);
  }
  function _createSuper(t2) {
    var r2 = _isNativeReflectConstruct();
    return function() {
      var e2, o2 = _getPrototypeOf(t2);
      if (r2) {
        var s2 = _getPrototypeOf(this).constructor;
        e2 = Reflect.construct(o2, arguments, s2);
      } else
        e2 = o2.apply(this, arguments);
      return _possibleConstructorReturn(this, e2);
    };
  }
  var DomWrapper$1 = /* @__PURE__ */ function(_React$Component) {
    _inherits(DomWrapper2, _React$Component);
    var _super = _createSuper(DomWrapper2);
    function DomWrapper2() {
      _classCallCheck(this, DomWrapper2);
      return _super.apply(this, arguments);
    }
    _createClass(DomWrapper2, [{
      key: "render",
      value: function render2() {
        return this.props.children;
      }
    }]);
    return DomWrapper2;
  }(React__namespace.Component);
  function SingleObserver(props, ref) {
    var children = props.children, disabled = props.disabled;
    var elementRef = React__namespace.useRef(null);
    var wrapperRef = React__namespace.useRef(null);
    var onCollectionResize = React__namespace.useContext(CollectionContext);
    var isRenderProps = typeof children === "function";
    var mergedChildren = isRenderProps ? children(elementRef) : children;
    var sizeRef = React__namespace.useRef({
      width: -1,
      height: -1,
      offsetWidth: -1,
      offsetHeight: -1
    });
    var canRef = !isRenderProps && /* @__PURE__ */ React__namespace.isValidElement(mergedChildren) && supportRef(mergedChildren);
    var originRef = canRef ? mergedChildren.ref : null;
    var mergedRef = useComposeRef(originRef, elementRef);
    var getDom = function getDom2() {
      var _elementRef$current;
      return findDOMNode(elementRef.current) || // Support `nativeElement` format
      (elementRef.current && _typeof(elementRef.current) === "object" ? findDOMNode((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.nativeElement) : null) || findDOMNode(wrapperRef.current);
    };
    React__namespace.useImperativeHandle(ref, function() {
      return getDom();
    });
    var propsRef = React__namespace.useRef(props);
    propsRef.current = props;
    var onInternalResize = React__namespace.useCallback(function(target) {
      var _propsRef$current = propsRef.current, onResize2 = _propsRef$current.onResize, data = _propsRef$current.data;
      var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
      var offsetWidth = target.offsetWidth, offsetHeight = target.offsetHeight;
      var fixedWidth = Math.floor(width);
      var fixedHeight = Math.floor(height);
      if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
        var size2 = {
          width: fixedWidth,
          height: fixedHeight,
          offsetWidth,
          offsetHeight
        };
        sizeRef.current = size2;
        var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
        var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
        var sizeInfo = _objectSpread2(_objectSpread2({}, size2), {}, {
          offsetWidth: mergedOffsetWidth,
          offsetHeight: mergedOffsetHeight
        });
        onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(sizeInfo, target, data);
        if (onResize2) {
          Promise.resolve().then(function() {
            onResize2(sizeInfo, target);
          });
        }
      }
    }, []);
    React__namespace.useEffect(function() {
      var currentElement = getDom();
      if (currentElement && !disabled) {
        observe(currentElement, onInternalResize);
      }
      return function() {
        return unobserve(currentElement, onInternalResize);
      };
    }, [elementRef.current, disabled]);
    return /* @__PURE__ */ React__namespace.createElement(DomWrapper$1, {
      ref: wrapperRef
    }, canRef ? /* @__PURE__ */ React__namespace.cloneElement(mergedChildren, {
      ref: mergedRef
    }) : mergedChildren);
  }
  var RefSingleObserver = /* @__PURE__ */ React__namespace.forwardRef(SingleObserver);
  var INTERNAL_PREFIX_KEY = "rc-observer-key";
  function ResizeObserver$1(props, ref) {
    var children = props.children;
    var childNodes = typeof children === "function" ? [children] : toArray$2(children);
    return childNodes.map(function(child, index2) {
      var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index2);
      return /* @__PURE__ */ React__namespace.createElement(RefSingleObserver, _extends({}, props, {
        key,
        ref: index2 === 0 ? ref : void 0
      }), child);
    });
  }
  var RefResizeObserver = /* @__PURE__ */ React__namespace.forwardRef(ResizeObserver$1);
  RefResizeObserver.Collection = Collection;
  function omit(obj, fields) {
    var clone = _objectSpread2({}, obj);
    if (Array.isArray(fields)) {
      fields.forEach(function(key) {
        delete clone[key];
      });
    }
    return clone;
  }
  function _arrayLikeToArray(r2, a2) {
    (null == a2 || a2 > r2.length) && (a2 = r2.length);
    for (var e2 = 0, n2 = Array(a2); e2 < a2; e2++)
      n2[e2] = r2[e2];
    return n2;
  }
  function _arrayWithoutHoles(r2) {
    if (Array.isArray(r2))
      return _arrayLikeToArray(r2);
  }
  function _iterableToArray(r2) {
    if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"])
      return Array.from(r2);
  }
  function _unsupportedIterableToArray(r2, a2) {
    if (r2) {
      if ("string" == typeof r2)
        return _arrayLikeToArray(r2, a2);
      var t2 = {}.toString.call(r2).slice(8, -1);
      return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r2, a2) : void 0;
    }
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toConsumableArray(r2) {
    return _arrayWithoutHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableSpread();
  }
  var raf = function raf2(callback) {
    return +setTimeout(callback, 16);
  };
  var caf = function caf2(num) {
    return clearTimeout(num);
  };
  if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
    raf = function raf3(callback) {
      return window.requestAnimationFrame(callback);
    };
    caf = function caf3(handle) {
      return window.cancelAnimationFrame(handle);
    };
  }
  var rafUUID = 0;
  var rafIds = /* @__PURE__ */ new Map();
  function cleanup(id) {
    rafIds.delete(id);
  }
  var wrapperRaf = function wrapperRaf2(callback) {
    var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    rafUUID += 1;
    var id = rafUUID;
    function callRef(leftTimes) {
      if (leftTimes === 0) {
        cleanup(id);
        callback();
      } else {
        var realId = raf(function() {
          callRef(leftTimes - 1);
        });
        rafIds.set(id, realId);
      }
    }
    callRef(times);
    return id;
  };
  wrapperRaf.cancel = function(id) {
    var realId = rafIds.get(id);
    cleanup(id);
    return caf(realId);
  };
  function _arrayWithHoles(r2) {
    if (Array.isArray(r2))
      return r2;
  }
  function _iterableToArrayLimit(r2, l2) {
    var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
    if (null != t2) {
      var e2, n2, i2, u2, a2 = [], f2 = true, o2 = false;
      try {
        if (i2 = (t2 = t2.call(r2)).next, 0 === l2) {
          if (Object(t2) !== t2)
            return;
          f2 = false;
        } else
          for (; !(f2 = (e2 = i2.call(t2)).done) && (a2.push(e2.value), a2.length !== l2); f2 = true)
            ;
      } catch (r3) {
        o2 = true, n2 = r3;
      } finally {
        try {
          if (!f2 && null != t2["return"] && (u2 = t2["return"](), Object(u2) !== u2))
            return;
        } finally {
          if (o2)
            throw n2;
        }
      }
      return a2;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _slicedToArray(r2, e2) {
    return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e2) || _unsupportedIterableToArray(r2, e2) || _nonIterableRest();
  }
  function murmur2(str) {
    var h2 = 0;
    var k2, i2 = 0, len = str.length;
    for (; len >= 4; ++i2, len -= 4) {
      k2 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
      k2 = /* Math.imul(k, m): */
      (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
      k2 ^= /* k >>> r: */
      k2 >>> 24;
      h2 = /* Math.imul(k, m): */
      (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
    }
    switch (len) {
      case 3:
        h2 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
      case 2:
        h2 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
      case 1:
        h2 ^= str.charCodeAt(i2) & 255;
        h2 = /* Math.imul(h, m): */
        (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
    }
    h2 ^= h2 >>> 13;
    h2 = /* Math.imul(h, m): */
    (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
    return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
  }
  function canUseDom() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  }
  function contains(root2, n2) {
    if (!root2) {
      return false;
    }
    if (root2.contains) {
      return root2.contains(n2);
    }
    var node2 = n2;
    while (node2) {
      if (node2 === root2) {
        return true;
      }
      node2 = node2.parentNode;
    }
    return false;
  }
  var APPEND_ORDER = "data-rc-order";
  var APPEND_PRIORITY = "data-rc-priority";
  var MARK_KEY = "rc-util-key";
  var containerCache = /* @__PURE__ */ new Map();
  function getMark() {
    var _ref7 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref7.mark;
    if (mark) {
      return mark.startsWith("data-") ? mark : "data-".concat(mark);
    }
    return MARK_KEY;
  }
  function getContainer(option) {
    if (option.attachTo) {
      return option.attachTo;
    }
    var head = document.querySelector("head");
    return head || document.body;
  }
  function getOrder(prepend) {
    if (prepend === "queue") {
      return "prependQueue";
    }
    return prepend ? "prepend" : "append";
  }
  function findStyles(container) {
    return Array.from((containerCache.get(container) || container).children).filter(function(node2) {
      return node2.tagName === "STYLE";
    });
  }
  function injectCSS(css2) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!canUseDom()) {
      return null;
    }
    var csp = option.csp, prepend = option.prepend, _option$priority = option.priority, priority = _option$priority === void 0 ? 0 : _option$priority;
    var mergedOrder = getOrder(prepend);
    var isPrependQueue = mergedOrder === "prependQueue";
    var styleNode = document.createElement("style");
    styleNode.setAttribute(APPEND_ORDER, mergedOrder);
    if (isPrependQueue && priority) {
      styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
    }
    if (csp !== null && csp !== void 0 && csp.nonce) {
      styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
    }
    styleNode.innerHTML = css2;
    var container = getContainer(option);
    var firstChild = container.firstChild;
    if (prepend) {
      if (isPrependQueue) {
        var existStyle = (option.styles || findStyles(container)).filter(function(node2) {
          if (!["prepend", "prependQueue"].includes(node2.getAttribute(APPEND_ORDER))) {
            return false;
          }
          var nodePriority = Number(node2.getAttribute(APPEND_PRIORITY) || 0);
          return priority >= nodePriority;
        });
        if (existStyle.length) {
          container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
          return styleNode;
        }
      }
      container.insertBefore(styleNode, firstChild);
    } else {
      container.appendChild(styleNode);
    }
    return styleNode;
  }
  function findExistNode(key) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var container = getContainer(option);
    return (option.styles || findStyles(container)).find(function(node2) {
      return node2.getAttribute(getMark(option)) === key;
    });
  }
  function removeCSS(key) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var existNode = findExistNode(key, option);
    if (existNode) {
      var container = getContainer(option);
      container.removeChild(existNode);
    }
  }
  function syncRealContainer(container, option) {
    var cachedRealContainer = containerCache.get(container);
    if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
      var placeholderStyle = injectCSS("", option);
      var parentNode = placeholderStyle.parentNode;
      containerCache.set(container, parentNode);
      container.removeChild(placeholderStyle);
    }
  }
  function updateCSS(css2, key) {
    var originOption = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var container = getContainer(originOption);
    var styles = findStyles(container);
    var option = _objectSpread2(_objectSpread2({}, originOption), {}, {
      styles
    });
    syncRealContainer(container, option);
    var existNode = findExistNode(key, option);
    if (existNode) {
      var _option$csp, _option$csp2;
      if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
        var _option$csp3;
        existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
      }
      if (existNode.innerHTML !== css2) {
        existNode.innerHTML = css2;
      }
      return existNode;
    }
    var newNode = injectCSS(css2, option);
    newNode.setAttribute(getMark(option), key);
    return newNode;
  }
  function _objectWithoutPropertiesLoose(r2, e2) {
    if (null == r2)
      return {};
    var t2 = {};
    for (var n2 in r2)
      if ({}.hasOwnProperty.call(r2, n2)) {
        if (e2.indexOf(n2) >= 0)
          continue;
        t2[n2] = r2[n2];
      }
    return t2;
  }
  function _objectWithoutProperties(e2, t2) {
    if (null == e2)
      return {};
    var o2, r2, i2 = _objectWithoutPropertiesLoose(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var n2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < n2.length; r2++)
        o2 = n2[r2], t2.indexOf(o2) >= 0 || {}.propertyIsEnumerable.call(e2, o2) && (i2[o2] = e2[o2]);
    }
    return i2;
  }
  function isEqual(obj1, obj2) {
    var shallow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var refSet2 = /* @__PURE__ */ new Set();
    function deepEqual(a2, b2) {
      var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
      var circular = refSet2.has(a2);
      warningOnce(!circular, "Warning: There may be circular references");
      if (circular) {
        return false;
      }
      if (a2 === b2) {
        return true;
      }
      if (shallow && level > 1) {
        return false;
      }
      refSet2.add(a2);
      var newLevel = level + 1;
      if (Array.isArray(a2)) {
        if (!Array.isArray(b2) || a2.length !== b2.length) {
          return false;
        }
        for (var i2 = 0; i2 < a2.length; i2++) {
          if (!deepEqual(a2[i2], b2[i2], newLevel)) {
            return false;
          }
        }
        return true;
      }
      if (a2 && b2 && _typeof(a2) === "object" && _typeof(b2) === "object") {
        var keys2 = Object.keys(a2);
        if (keys2.length !== Object.keys(b2).length) {
          return false;
        }
        return keys2.every(function(key) {
          return deepEqual(a2[key], b2[key], newLevel);
        });
      }
      return false;
    }
    return deepEqual(obj1, obj2);
  }
  var SPLIT$1 = "%";
  function pathKey(keys2) {
    return keys2.join(SPLIT$1);
  }
  var Entity = /* @__PURE__ */ function() {
    function Entity2(instanceId) {
      _classCallCheck(this, Entity2);
      _defineProperty(this, "instanceId", void 0);
      _defineProperty(this, "cache", /* @__PURE__ */ new Map());
      this.instanceId = instanceId;
    }
    _createClass(Entity2, [{
      key: "get",
      value: function get2(keys2) {
        return this.opGet(pathKey(keys2));
      }
      /** A fast get cache with `get` concat. */
    }, {
      key: "opGet",
      value: function opGet(keyPathStr) {
        return this.cache.get(keyPathStr) || null;
      }
    }, {
      key: "update",
      value: function update(keys2, valueFn) {
        return this.opUpdate(pathKey(keys2), valueFn);
      }
      /** A fast get cache with `get` concat. */
    }, {
      key: "opUpdate",
      value: function opUpdate(keyPathStr, valueFn) {
        var prevValue = this.cache.get(keyPathStr);
        var nextValue = valueFn(prevValue);
        if (nextValue === null) {
          this.cache.delete(keyPathStr);
        } else {
          this.cache.set(keyPathStr, nextValue);
        }
      }
    }]);
    return Entity2;
  }();
  var _excluded$h = ["children"];
  var ATTR_TOKEN = "data-token-hash";
  var ATTR_MARK = "data-css-hash";
  var CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
  function createCache() {
    var cssinjsInstanceId = Math.random().toString(12).slice(2);
    if (typeof document !== "undefined" && document.head && document.body) {
      var styles = document.body.querySelectorAll("style[".concat(ATTR_MARK, "]")) || [];
      var firstChild = document.head.firstChild;
      Array.from(styles).forEach(function(style2) {
        style2[CSS_IN_JS_INSTANCE] = style2[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;
        if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
          document.head.insertBefore(style2, firstChild);
        }
      });
      var styleHash = {};
      Array.from(document.querySelectorAll("style[".concat(ATTR_MARK, "]"))).forEach(function(style2) {
        var hash2 = style2.getAttribute(ATTR_MARK);
        if (styleHash[hash2]) {
          if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
            var _style$parentNode;
            (_style$parentNode = style2.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style2);
          }
        } else {
          styleHash[hash2] = true;
        }
      });
    }
    return new Entity(cssinjsInstanceId);
  }
  var StyleContext = /* @__PURE__ */ React__namespace.createContext({
    hashPriority: "low",
    cache: createCache(),
    defaultCache: true
  });
  var StyleProvider = function StyleProvider2(props) {
    var children = props.children, restProps = _objectWithoutProperties(props, _excluded$h);
    var parentContext = React__namespace.useContext(StyleContext);
    var context = useMemo(function() {
      var mergedContext = _objectSpread2({}, parentContext);
      Object.keys(restProps).forEach(function(key) {
        var value = restProps[key];
        if (restProps[key] !== void 0) {
          mergedContext[key] = value;
        }
      });
      var cache2 = restProps.cache;
      mergedContext.cache = mergedContext.cache || createCache();
      mergedContext.defaultCache = !cache2 && parentContext.defaultCache;
      return mergedContext;
    }, [parentContext, restProps], function(prev2, next2) {
      return !isEqual(prev2[0], next2[0], true) || !isEqual(prev2[1], next2[1], true);
    });
    return /* @__PURE__ */ React__namespace.createElement(StyleContext.Provider, {
      value: context
    }, children);
  };
  function sameDerivativeOption(left, right) {
    if (left.length !== right.length) {
      return false;
    }
    for (var i2 = 0; i2 < left.length; i2++) {
      if (left[i2] !== right[i2]) {
        return false;
      }
    }
    return true;
  }
  var ThemeCache = /* @__PURE__ */ function() {
    function ThemeCache2() {
      _classCallCheck(this, ThemeCache2);
      _defineProperty(this, "cache", void 0);
      _defineProperty(this, "keys", void 0);
      _defineProperty(this, "cacheCallTimes", void 0);
      this.cache = /* @__PURE__ */ new Map();
      this.keys = [];
      this.cacheCallTimes = 0;
    }
    _createClass(ThemeCache2, [{
      key: "size",
      value: function size2() {
        return this.keys.length;
      }
    }, {
      key: "internalGet",
      value: function internalGet(derivativeOption) {
        var _cache2, _cache3;
        var updateCallTimes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var cache2 = {
          map: this.cache
        };
        derivativeOption.forEach(function(derivative2) {
          if (!cache2) {
            cache2 = void 0;
          } else {
            var _cache;
            cache2 = (_cache = cache2) === null || _cache === void 0 || (_cache = _cache.map) === null || _cache === void 0 ? void 0 : _cache.get(derivative2);
          }
        });
        if ((_cache2 = cache2) !== null && _cache2 !== void 0 && _cache2.value && updateCallTimes) {
          cache2.value[1] = this.cacheCallTimes++;
        }
        return (_cache3 = cache2) === null || _cache3 === void 0 ? void 0 : _cache3.value;
      }
    }, {
      key: "get",
      value: function get2(derivativeOption) {
        var _this$internalGet;
        return (_this$internalGet = this.internalGet(derivativeOption, true)) === null || _this$internalGet === void 0 ? void 0 : _this$internalGet[0];
      }
    }, {
      key: "has",
      value: function has(derivativeOption) {
        return !!this.internalGet(derivativeOption);
      }
    }, {
      key: "set",
      value: function set2(derivativeOption, value) {
        var _this = this;
        if (!this.has(derivativeOption)) {
          if (this.size() + 1 > ThemeCache2.MAX_CACHE_SIZE + ThemeCache2.MAX_CACHE_OFFSET) {
            var _this$keys$reduce = this.keys.reduce(function(result, key) {
              var _result = _slicedToArray(result, 2), callTimes = _result[1];
              if (_this.internalGet(key)[1] < callTimes) {
                return [key, _this.internalGet(key)[1]];
              }
              return result;
            }, [this.keys[0], this.cacheCallTimes]), _this$keys$reduce2 = _slicedToArray(_this$keys$reduce, 1), targetKey = _this$keys$reduce2[0];
            this.delete(targetKey);
          }
          this.keys.push(derivativeOption);
        }
        var cache2 = this.cache;
        derivativeOption.forEach(function(derivative2, index2) {
          if (index2 === derivativeOption.length - 1) {
            cache2.set(derivative2, {
              value: [value, _this.cacheCallTimes++]
            });
          } else {
            var cacheValue = cache2.get(derivative2);
            if (!cacheValue) {
              cache2.set(derivative2, {
                map: /* @__PURE__ */ new Map()
              });
            } else if (!cacheValue.map) {
              cacheValue.map = /* @__PURE__ */ new Map();
            }
            cache2 = cache2.get(derivative2).map;
          }
        });
      }
    }, {
      key: "deleteByPath",
      value: function deleteByPath(currentCache, derivatives) {
        var cache2 = currentCache.get(derivatives[0]);
        if (derivatives.length === 1) {
          var _cache$value;
          if (!cache2.map) {
            currentCache.delete(derivatives[0]);
          } else {
            currentCache.set(derivatives[0], {
              map: cache2.map
            });
          }
          return (_cache$value = cache2.value) === null || _cache$value === void 0 ? void 0 : _cache$value[0];
        }
        var result = this.deleteByPath(cache2.map, derivatives.slice(1));
        if ((!cache2.map || cache2.map.size === 0) && !cache2.value) {
          currentCache.delete(derivatives[0]);
        }
        return result;
      }
    }, {
      key: "delete",
      value: function _delete(derivativeOption) {
        if (this.has(derivativeOption)) {
          this.keys = this.keys.filter(function(item) {
            return !sameDerivativeOption(item, derivativeOption);
          });
          return this.deleteByPath(this.cache, derivativeOption);
        }
        return void 0;
      }
    }]);
    return ThemeCache2;
  }();
  _defineProperty(ThemeCache, "MAX_CACHE_SIZE", 20);
  _defineProperty(ThemeCache, "MAX_CACHE_OFFSET", 5);
  var uuid$3 = 0;
  var Theme = /* @__PURE__ */ function() {
    function Theme2(derivatives) {
      _classCallCheck(this, Theme2);
      _defineProperty(this, "derivatives", void 0);
      _defineProperty(this, "id", void 0);
      this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
      this.id = uuid$3;
      if (derivatives.length === 0) {
        warning$2(derivatives.length > 0);
      }
      uuid$3 += 1;
    }
    _createClass(Theme2, [{
      key: "getDerivativeToken",
      value: function getDerivativeToken(token2) {
        return this.derivatives.reduce(function(result, derivative2) {
          return derivative2(token2, result);
        }, void 0);
      }
    }]);
    return Theme2;
  }();
  var cacheThemes = new ThemeCache();
  function createTheme(derivatives) {
    var derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
    if (!cacheThemes.has(derivativeArr)) {
      cacheThemes.set(derivativeArr, new Theme(derivativeArr));
    }
    return cacheThemes.get(derivativeArr);
  }
  var resultCache = /* @__PURE__ */ new WeakMap();
  var RESULT_VALUE = {};
  function memoResult(callback, deps) {
    var current = resultCache;
    for (var i2 = 0; i2 < deps.length; i2 += 1) {
      var dep = deps[i2];
      if (!current.has(dep)) {
        current.set(dep, /* @__PURE__ */ new WeakMap());
      }
      current = current.get(dep);
    }
    if (!current.has(RESULT_VALUE)) {
      current.set(RESULT_VALUE, callback());
    }
    return current.get(RESULT_VALUE);
  }
  var flattenTokenCache = /* @__PURE__ */ new WeakMap();
  function flattenToken(token2) {
    var hashed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var str = flattenTokenCache.get(token2) || "";
    if (!str) {
      Object.keys(token2).forEach(function(key) {
        var value = token2[key];
        str += key;
        if (value instanceof Theme) {
          str += value.id;
        } else if (value && _typeof(value) === "object") {
          str += flattenToken(value, hashed);
        } else {
          str += value;
        }
      });
      if (hashed) {
        str = murmur2(str);
      }
      flattenTokenCache.set(token2, str);
    }
    return str;
  }
  function token2key(token2, salt) {
    return murmur2("".concat(salt, "_").concat(flattenToken(token2, true)));
  }
  var isClientSide = canUseDom();
  function unit$1(num) {
    if (typeof num === "number") {
      return "".concat(num, "px");
    }
    return num;
  }
  function toStyleStr(style2, tokenKey, styleId) {
    var _objectSpread2$1;
    var customizeAttrs = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    var plain = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    if (plain) {
      return style2;
    }
    var attrs = _objectSpread2(_objectSpread2({}, customizeAttrs), {}, (_objectSpread2$1 = {}, _defineProperty(_objectSpread2$1, ATTR_TOKEN, tokenKey), _defineProperty(_objectSpread2$1, ATTR_MARK, styleId), _objectSpread2$1));
    var attrStr = Object.keys(attrs).map(function(attr) {
      var val = attrs[attr];
      return val ? "".concat(attr, '="').concat(val, '"') : null;
    }).filter(function(v2) {
      return v2;
    }).join(" ");
    return "<style ".concat(attrStr, ">").concat(style2, "</style>");
  }
  var token2CSSVar = function token2CSSVar2(token2) {
    var prefix2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return "--".concat(prefix2 ? "".concat(prefix2, "-") : "").concat(token2).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
  };
  var serializeCSSVar = function serializeCSSVar2(cssVars, hashId, options) {
    if (!Object.keys(cssVars).length) {
      return "";
    }
    return ".".concat(hashId).concat(options !== null && options !== void 0 && options.scope ? ".".concat(options.scope) : "", "{").concat(Object.entries(cssVars).map(function(_ref7) {
      var _ref22 = _slicedToArray(_ref7, 2), key = _ref22[0], value = _ref22[1];
      return "".concat(key, ":").concat(value, ";");
    }).join(""), "}");
  };
  var transformToken = function transformToken2(token2, themeKey, config) {
    var cssVars = {};
    var result = {};
    Object.entries(token2).forEach(function(_ref32) {
      var _config$preserve, _config$ignore;
      var _ref42 = _slicedToArray(_ref32, 2), key = _ref42[0], value = _ref42[1];
      if (config !== null && config !== void 0 && (_config$preserve = config.preserve) !== null && _config$preserve !== void 0 && _config$preserve[key]) {
        result[key] = value;
      } else if ((typeof value === "string" || typeof value === "number") && !(config !== null && config !== void 0 && (_config$ignore = config.ignore) !== null && _config$ignore !== void 0 && _config$ignore[key])) {
        var _config$unitless;
        var cssVar = token2CSSVar(key, config === null || config === void 0 ? void 0 : config.prefix);
        cssVars[cssVar] = typeof value === "number" && !(config !== null && config !== void 0 && (_config$unitless = config.unitless) !== null && _config$unitless !== void 0 && _config$unitless[key]) ? "".concat(value, "px") : String(value);
        result[key] = "var(".concat(cssVar, ")");
      }
    });
    return [result, serializeCSSVar(cssVars, themeKey, {
      scope: config === null || config === void 0 ? void 0 : config.scope
    })];
  };
  var useInternalLayoutEffect = canUseDom() ? React__namespace.useLayoutEffect : React__namespace.useEffect;
  var useLayoutEffect = function useLayoutEffect2(callback, deps) {
    var firstMountRef = React__namespace.useRef(true);
    useInternalLayoutEffect(function() {
      return callback(firstMountRef.current);
    }, deps);
    useInternalLayoutEffect(function() {
      firstMountRef.current = false;
      return function() {
        firstMountRef.current = true;
      };
    }, []);
  };
  var useLayoutUpdateEffect = function useLayoutUpdateEffect2(callback, deps) {
    useLayoutEffect(function(firstMount) {
      if (!firstMount) {
        return callback();
      }
    }, deps);
  };
  var fullClone$3 = _objectSpread2({}, React__namespace);
  var useInsertionEffect$1 = fullClone$3.useInsertionEffect;
  var useInsertionEffectPolyfill = function useInsertionEffectPolyfill2(renderEffect, effect, deps) {
    React__namespace.useMemo(renderEffect, deps);
    useLayoutEffect(function() {
      return effect(true);
    }, deps);
  };
  var useCompatibleInsertionEffect = useInsertionEffect$1 ? function(renderEffect, effect, deps) {
    return useInsertionEffect$1(function() {
      renderEffect();
      return effect();
    }, deps);
  } : useInsertionEffectPolyfill;
  var fullClone$2 = _objectSpread2({}, React__namespace);
  var useInsertionEffect = fullClone$2.useInsertionEffect;
  var useCleanupRegister = function useCleanupRegister2(deps) {
    var effectCleanups = [];
    var cleanupFlag = false;
    function register2(fn) {
      if (cleanupFlag) {
        return;
      }
      effectCleanups.push(fn);
    }
    React__namespace.useEffect(function() {
      cleanupFlag = false;
      return function() {
        cleanupFlag = true;
        if (effectCleanups.length) {
          effectCleanups.forEach(function(fn) {
            return fn();
          });
        }
      };
    }, deps);
    return register2;
  };
  var useRun = function useRun2() {
    return function(fn) {
      fn();
    };
  };
  var useEffectCleanupRegister = typeof useInsertionEffect !== "undefined" ? useCleanupRegister : useRun;
  function useGlobalCache(prefix2, keyPath, cacheFn, onCacheRemove, onCacheEffect) {
    var _React$useContext = React__namespace.useContext(StyleContext), globalCache = _React$useContext.cache;
    var fullPath = [prefix2].concat(_toConsumableArray(keyPath));
    var fullPathStr = pathKey(fullPath);
    var register2 = useEffectCleanupRegister([fullPathStr]);
    var buildCache = function buildCache2(updater) {
      globalCache.opUpdate(fullPathStr, function(prevCache) {
        var _ref7 = prevCache || [void 0, void 0], _ref22 = _slicedToArray(_ref7, 2), _ref2$ = _ref22[0], times = _ref2$ === void 0 ? 0 : _ref2$, cache2 = _ref22[1];
        var tmpCache = cache2;
        var mergedCache = tmpCache || cacheFn();
        var data = [times, mergedCache];
        return updater ? updater(data) : data;
      });
    };
    React__namespace.useMemo(
      function() {
        buildCache();
      },
      /* eslint-disable react-hooks/exhaustive-deps */
      [fullPathStr]
      /* eslint-enable */
    );
    var cacheEntity = globalCache.opGet(fullPathStr);
    var cacheContent = cacheEntity[1];
    useCompatibleInsertionEffect(function() {
      onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
    }, function(polyfill) {
      buildCache(function(_ref32) {
        var _ref42 = _slicedToArray(_ref32, 2), times = _ref42[0], cache2 = _ref42[1];
        if (polyfill && times === 0) {
          onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
        }
        return [times + 1, cache2];
      });
      return function() {
        globalCache.opUpdate(fullPathStr, function(prevCache) {
          var _ref52 = prevCache || [], _ref62 = _slicedToArray(_ref52, 2), _ref6$ = _ref62[0], times = _ref6$ === void 0 ? 0 : _ref6$, cache2 = _ref62[1];
          var nextCount = times - 1;
          if (nextCount === 0) {
            register2(function() {
              if (polyfill || !globalCache.opGet(fullPathStr)) {
                onCacheRemove === null || onCacheRemove === void 0 || onCacheRemove(cache2, false);
              }
            });
            return null;
          }
          return [times - 1, cache2];
        });
      };
    }, [fullPathStr]);
    return cacheContent;
  }
  var EMPTY_OVERRIDE = {};
  var hashPrefix = "css";
  var tokenKeys = /* @__PURE__ */ new Map();
  function recordCleanToken(tokenKey) {
    tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
  }
  function removeStyleTags(key, instanceId) {
    if (typeof document !== "undefined") {
      var styles = document.querySelectorAll("style[".concat(ATTR_TOKEN, '="').concat(key, '"]'));
      styles.forEach(function(style2) {
        if (style2[CSS_IN_JS_INSTANCE] === instanceId) {
          var _style$parentNode;
          (_style$parentNode = style2.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style2);
        }
      });
    }
  }
  var TOKEN_THRESHOLD = 0;
  function cleanTokenStyle(tokenKey, instanceId) {
    tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
    var tokenKeyList = Array.from(tokenKeys.keys());
    var cleanableKeyList = tokenKeyList.filter(function(key) {
      var count = tokenKeys.get(key) || 0;
      return count <= 0;
    });
    if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
      cleanableKeyList.forEach(function(key) {
        removeStyleTags(key, instanceId);
        tokenKeys.delete(key);
      });
    }
  }
  var getComputedToken$1 = function getComputedToken2(originToken, overrideToken, theme2, format2) {
    var derivativeToken = theme2.getDerivativeToken(originToken);
    var mergedDerivativeToken = _objectSpread2(_objectSpread2({}, derivativeToken), overrideToken);
    if (format2) {
      mergedDerivativeToken = format2(mergedDerivativeToken);
    }
    return mergedDerivativeToken;
  };
  var TOKEN_PREFIX = "token";
  function useCacheToken(theme2, tokens) {
    var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var _useContext = React.useContext(StyleContext), instanceId = _useContext.cache.instanceId, container = _useContext.container;
    var _option$salt = option.salt, salt = _option$salt === void 0 ? "" : _option$salt, _option$override = option.override, override = _option$override === void 0 ? EMPTY_OVERRIDE : _option$override, formatToken2 = option.formatToken, compute = option.getComputedToken, cssVar = option.cssVar;
    var mergedToken = memoResult(function() {
      return Object.assign.apply(Object, [{}].concat(_toConsumableArray(tokens)));
    }, tokens);
    var tokenStr = flattenToken(mergedToken);
    var overrideTokenStr = flattenToken(override);
    var cssVarStr = cssVar ? flattenToken(cssVar) : "";
    var cachedToken = useGlobalCache(TOKEN_PREFIX, [salt, theme2.id, tokenStr, overrideTokenStr, cssVarStr], function() {
      var _cssVar$key;
      var mergedDerivativeToken = compute ? compute(mergedToken, override, theme2) : getComputedToken$1(mergedToken, override, theme2, formatToken2);
      var actualToken = _objectSpread2({}, mergedDerivativeToken);
      var cssVarsStr = "";
      if (!!cssVar) {
        var _transformToken = transformToken(mergedDerivativeToken, cssVar.key, {
          prefix: cssVar.prefix,
          ignore: cssVar.ignore,
          unitless: cssVar.unitless,
          preserve: cssVar.preserve
        });
        var _transformToken2 = _slicedToArray(_transformToken, 2);
        mergedDerivativeToken = _transformToken2[0];
        cssVarsStr = _transformToken2[1];
      }
      var tokenKey = token2key(mergedDerivativeToken, salt);
      mergedDerivativeToken._tokenKey = tokenKey;
      actualToken._tokenKey = token2key(actualToken, salt);
      var themeKey = (_cssVar$key = cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) !== null && _cssVar$key !== void 0 ? _cssVar$key : tokenKey;
      mergedDerivativeToken._themeKey = themeKey;
      recordCleanToken(themeKey);
      var hashId = "".concat(hashPrefix, "-").concat(murmur2(tokenKey));
      mergedDerivativeToken._hashId = hashId;
      return [mergedDerivativeToken, hashId, actualToken, cssVarsStr, (cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) || ""];
    }, function(cache2) {
      cleanTokenStyle(cache2[0]._themeKey, instanceId);
    }, function(_ref7) {
      var _ref22 = _slicedToArray(_ref7, 4), token2 = _ref22[0], cssVarsStr = _ref22[3];
      if (cssVar && cssVarsStr) {
        var style2 = updateCSS(cssVarsStr, murmur2("css-variables-".concat(token2._themeKey)), {
          mark: ATTR_MARK,
          prepend: "queue",
          attachTo: container,
          priority: -999
        });
        style2[CSS_IN_JS_INSTANCE] = instanceId;
        style2.setAttribute(ATTR_TOKEN, token2._themeKey);
      }
    });
    return cachedToken;
  }
  var extract$2 = function extract2(cache2, effectStyles, options) {
    var _cache = _slicedToArray(cache2, 5), realToken = _cache[2], styleStr = _cache[3], cssVarKey = _cache[4];
    var _ref32 = options || {}, plain = _ref32.plain;
    if (!styleStr) {
      return null;
    }
    var styleId = realToken._tokenKey;
    var order = -999;
    var sharedAttrs = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(order)
    };
    var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
    return [order, styleId, styleText];
  };
  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };
  var COMMENT = "comm";
  var RULESET = "rule";
  var DECLARATION = "decl";
  var IMPORT = "@import";
  var KEYFRAMES = "@keyframes";
  var LAYER = "@layer";
  var abs = Math.abs;
  var from = String.fromCharCode;
  function trim(value) {
    return value.trim();
  }
  function replace(value, pattern4, replacement) {
    return value.replace(pattern4, replacement);
  }
  function indexof(value, search, position2) {
    return value.indexOf(search, position2);
  }
  function charat(value, index2) {
    return value.charCodeAt(index2) | 0;
  }
  function substr(value, begin, end) {
    return value.slice(begin, end);
  }
  function strlen(value) {
    return value.length;
  }
  function sizeof(value) {
    return value.length;
  }
  function append(value, array4) {
    return array4.push(value), value;
  }
  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = "";
  function node(value, root2, parent, type4, props, children, length2, siblings) {
    return { value, root: root2, parent, type: type4, props, children, line, column, length: length2, return: "", siblings };
  }
  function char() {
    return character;
  }
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10)
      column = 1, line--;
    return character;
  }
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10)
      column = 1, line++;
    return character;
  }
  function peek() {
    return charat(characters, position);
  }
  function caret() {
    return position;
  }
  function slice(begin, end) {
    return substr(characters, begin, end);
  }
  function token(type4) {
    switch (type4) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }
  function dealloc(value) {
    return characters = "", value;
  }
  function delimit(type4) {
    return trim(slice(position - 1, delimiter(type4 === 91 ? type4 + 2 : type4 === 40 ? type4 + 1 : type4)));
  }
  function whitespace$1(type4) {
    while (character = peek())
      if (character < 33)
        next();
      else
        break;
    return token(type4) > 2 || token(character) > 3 ? "" : " ";
  }
  function escaping(index2, count) {
    while (--count && next())
      if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
        break;
    return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
  }
  function delimiter(type4) {
    while (next())
      switch (character) {
        case type4:
          return position;
        case 34:
        case 39:
          if (type4 !== 34 && type4 !== 39)
            delimiter(character);
          break;
        case 40:
          if (type4 === 41)
            delimiter(type4);
          break;
        case 92:
          next();
          break;
      }
    return position;
  }
  function commenter(type4, index2) {
    while (next())
      if (type4 + character === 47 + 10)
        break;
      else if (type4 + character === 42 + 42 && peek() === 47)
        break;
    return "/*" + slice(index2, position - 1) + "*" + from(type4 === 47 ? type4 : next());
  }
  function identifier(index2) {
    while (!token(peek()))
      next();
    return slice(index2, position);
  }
  function compile(value) {
    return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
  }
  function parse(value, root2, parent, rule, rules2, rulesets, pseudo, points, declarations) {
    var index2 = 0;
    var offset2 = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type4 = "";
    var props = rules2;
    var children = rulesets;
    var reference = rule;
    var characters2 = type4;
    while (scanning)
      switch (previous = character2, character2 = next()) {
        case 40:
          if (previous != 108 && charat(characters2, length2 - 1) == 58) {
            if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index2 ? points[index2 - 1] : 0)) != -1)
              ampersand = -1;
            break;
          }
        case 34:
        case 39:
        case 91:
          characters2 += delimit(character2);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          characters2 += whitespace$1(previous);
          break;
        case 92:
          characters2 += escaping(caret() - 1, 7);
          continue;
        case 47:
          switch (peek()) {
            case 42:
            case 47:
              append(comment(commenter(next(), caret()), root2, parent, declarations), declarations);
              break;
            default:
              characters2 += "/";
          }
          break;
        case 123 * variable:
          points[index2++] = strlen(characters2) * ampersand;
        case 125 * variable:
        case 59:
        case 0:
          switch (character2) {
            case 0:
            case 125:
              scanning = 0;
            case 59 + offset2:
              if (ampersand == -1)
                characters2 = replace(characters2, /\f/g, "");
              if (property > 0 && strlen(characters2) - length2)
                append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
              break;
            case 59:
              characters2 += ";";
            default:
              append(reference = ruleset(characters2, root2, parent, index2, offset2, rules2, points, type4, props = [], children = [], length2, rulesets), rulesets);
              if (character2 === 123)
                if (offset2 === 0)
                  parse(characters2, root2, reference, reference, props, rulesets, length2, points, children);
                else
                  switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules2, points, type4, rules2, props = [], length2, children), children), rules2, children, length2, points, rule ? props : children);
                      break;
                    default:
                      parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                  }
          }
          index2 = offset2 = property = 0, variable = ampersand = 1, type4 = characters2 = "", length2 = pseudo;
          break;
        case 58:
          length2 = 1 + strlen(characters2), property = previous;
        default:
          if (variable < 1) {
            if (character2 == 123)
              --variable;
            else if (character2 == 125 && variable++ == 0 && prev() == 125)
              continue;
          }
          switch (characters2 += from(character2), character2 * variable) {
            case 38:
              ampersand = offset2 > 0 ? 1 : (characters2 += "\f", -1);
              break;
            case 44:
              points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
              break;
            case 64:
              if (peek() === 45)
                characters2 += delimit(next());
              atrule = peek(), offset2 = length2 = strlen(type4 = characters2 += identifier(caret())), character2++;
              break;
            case 45:
              if (previous === 45 && strlen(characters2) == 2)
                variable = 0;
          }
      }
    return rulesets;
  }
  function ruleset(value, root2, parent, index2, offset2, rules2, points, type4, props, children, length2, siblings) {
    var post = offset2 - 1;
    var rule = offset2 === 0 ? rules2 : [""];
    var size2 = sizeof(rule);
    for (var i2 = 0, j = 0, k2 = 0; i2 < index2; ++i2)
      for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j = points[i2])), z2 = value; x2 < size2; ++x2)
        if (z2 = trim(j > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
          props[k2++] = z2;
    return node(value, root2, parent, offset2 === 0 ? RULESET : type4, props, children, length2, siblings);
  }
  function comment(value, root2, parent, siblings) {
    return node(value, root2, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
  }
  function declaration(value, root2, parent, length2, siblings) {
    return node(value, root2, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
  }
  function serialize(children, callback) {
    var output = "";
    for (var i2 = 0; i2 < children.length; i2++)
      output += callback(children[i2], i2, children, callback) || "";
    return output;
  }
  function stringify$1(element, index2, children, callback) {
    switch (element.type) {
      case LAYER:
        if (element.children.length)
          break;
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return "";
      case KEYFRAMES:
        return element.return = element.value + "{" + serialize(element.children, callback) + "}";
      case RULESET:
        if (!strlen(element.value = element.props.join(",")))
          return "";
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
  }
  var ATTR_CACHE_MAP = "data-ant-cssinjs-cache-path";
  var CSS_FILE_STYLE = "_FILE_STYLE__";
  var cachePathMap;
  var fromCSSFile = true;
  function prepare() {
    if (!cachePathMap) {
      cachePathMap = {};
      if (canUseDom()) {
        var div = document.createElement("div");
        div.className = ATTR_CACHE_MAP;
        div.style.position = "fixed";
        div.style.visibility = "hidden";
        div.style.top = "-9999px";
        document.body.appendChild(div);
        var content = getComputedStyle(div).content || "";
        content = content.replace(/^"/, "").replace(/"$/, "");
        content.split(";").forEach(function(item) {
          var _item$split = item.split(":"), _item$split2 = _slicedToArray(_item$split, 2), path2 = _item$split2[0], hash2 = _item$split2[1];
          cachePathMap[path2] = hash2;
        });
        var inlineMapStyle = document.querySelector("style[".concat(ATTR_CACHE_MAP, "]"));
        if (inlineMapStyle) {
          var _inlineMapStyle$paren;
          fromCSSFile = false;
          (_inlineMapStyle$paren = inlineMapStyle.parentNode) === null || _inlineMapStyle$paren === void 0 || _inlineMapStyle$paren.removeChild(inlineMapStyle);
        }
        document.body.removeChild(div);
      }
    }
  }
  function existPath(path2) {
    prepare();
    return !!cachePathMap[path2];
  }
  function getStyleAndHash(path2) {
    var hash2 = cachePathMap[path2];
    var styleStr = null;
    if (hash2 && canUseDom()) {
      if (fromCSSFile) {
        styleStr = CSS_FILE_STYLE;
      } else {
        var _style = document.querySelector("style[".concat(ATTR_MARK, '="').concat(cachePathMap[path2], '"]'));
        if (_style) {
          styleStr = _style.innerHTML;
        } else {
          delete cachePathMap[path2];
        }
      }
    }
    return [styleStr, hash2];
  }
  var SKIP_CHECK = "_skip_check_";
  var MULTI_VALUE = "_multi_value_";
  function normalizeStyle(styleStr) {
    var serialized = serialize(compile(styleStr), stringify$1);
    return serialized.replace(/\{%%%\:[^;];}/g, ";");
  }
  function isCompoundCSSProperty(value) {
    return _typeof(value) === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
  }
  function injectSelectorHash(key, hashId, hashPriority) {
    if (!hashId) {
      return key;
    }
    var hashClassName = ".".concat(hashId);
    var hashSelector = hashPriority === "low" ? ":where(".concat(hashClassName, ")") : hashClassName;
    var keys2 = key.split(",").map(function(k2) {
      var _firstPath$match;
      var fullPath = k2.trim().split(/\s+/);
      var firstPath = fullPath[0] || "";
      var htmlElement = ((_firstPath$match = firstPath.match(/^\w+/)) === null || _firstPath$match === void 0 ? void 0 : _firstPath$match[0]) || "";
      firstPath = "".concat(htmlElement).concat(hashSelector).concat(firstPath.slice(htmlElement.length));
      return [firstPath].concat(_toConsumableArray(fullPath.slice(1))).join(" ");
    });
    return keys2.join(",");
  }
  var parseStyle = function parseStyle2(interpolation) {
    var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _ref7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      root: true,
      parentSelectors: []
    }, root2 = _ref7.root, injectHash = _ref7.injectHash, parentSelectors = _ref7.parentSelectors;
    var hashId = config.hashId, layer = config.layer;
    config.path;
    var hashPriority = config.hashPriority, _config$transformers = config.transformers, transformers = _config$transformers === void 0 ? [] : _config$transformers;
    config.linters;
    var styleStr = "";
    var effectStyle = {};
    function parseKeyframes(keyframes) {
      var animationName = keyframes.getName(hashId);
      if (!effectStyle[animationName]) {
        var _parseStyle = parseStyle2(keyframes.style, config, {
          root: false,
          parentSelectors
        }), _parseStyle2 = _slicedToArray(_parseStyle, 1), _parsedStr = _parseStyle2[0];
        effectStyle[animationName] = "@keyframes ".concat(keyframes.getName(hashId)).concat(_parsedStr);
      }
    }
    function flattenList(list) {
      var fullList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      list.forEach(function(item) {
        if (Array.isArray(item)) {
          flattenList(item, fullList);
        } else if (item) {
          fullList.push(item);
        }
      });
      return fullList;
    }
    var flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
    flattenStyleList.forEach(function(originStyle) {
      var style2 = typeof originStyle === "string" && !root2 ? {} : originStyle;
      if (typeof style2 === "string") {
        styleStr += "".concat(style2, "\n");
      } else if (style2._keyframe) {
        parseKeyframes(style2);
      } else {
        var mergedStyle = transformers.reduce(function(prev2, trans) {
          var _trans$visit;
          return (trans === null || trans === void 0 || (_trans$visit = trans.visit) === null || _trans$visit === void 0 ? void 0 : _trans$visit.call(trans, prev2)) || prev2;
        }, style2);
        Object.keys(mergedStyle).forEach(function(key) {
          var value = mergedStyle[key];
          if (_typeof(value) === "object" && value && (key !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
            var subInjectHash = false;
            var mergedKey = key.trim();
            var nextRoot = false;
            if ((root2 || injectHash) && hashId) {
              if (mergedKey.startsWith("@")) {
                subInjectHash = true;
              } else {
                mergedKey = injectSelectorHash(key, hashId, hashPriority);
              }
            } else if (root2 && !hashId && (mergedKey === "&" || mergedKey === "")) {
              mergedKey = "";
              nextRoot = true;
            }
            var _parseStyle3 = parseStyle2(value, config, {
              root: nextRoot,
              injectHash: subInjectHash,
              parentSelectors: [].concat(_toConsumableArray(parentSelectors), [mergedKey])
            }), _parseStyle4 = _slicedToArray(_parseStyle3, 2), _parsedStr2 = _parseStyle4[0], childEffectStyle = _parseStyle4[1];
            effectStyle = _objectSpread2(_objectSpread2({}, effectStyle), childEffectStyle);
            styleStr += "".concat(mergedKey).concat(_parsedStr2);
          } else {
            let appendStyle = function(cssKey, cssValue) {
              var styleName = cssKey.replace(/[A-Z]/g, function(match2) {
                return "-".concat(match2.toLowerCase());
              });
              var formatValue = cssValue;
              if (!unitlessKeys[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
                formatValue = "".concat(formatValue, "px");
              }
              if (cssKey === "animationName" && cssValue !== null && cssValue !== void 0 && cssValue._keyframe) {
                parseKeyframes(cssValue);
                formatValue = cssValue.getName(hashId);
              }
              styleStr += "".concat(styleName, ":").concat(formatValue, ";");
            };
            var _value;
            var actualValue = (_value = value === null || value === void 0 ? void 0 : value.value) !== null && _value !== void 0 ? _value : value;
            if (_typeof(value) === "object" && value !== null && value !== void 0 && value[MULTI_VALUE] && Array.isArray(actualValue)) {
              actualValue.forEach(function(item) {
                appendStyle(key, item);
              });
            } else {
              appendStyle(key, actualValue);
            }
          }
        });
      }
    });
    if (!root2) {
      styleStr = "{".concat(styleStr, "}");
    } else if (layer) {
      styleStr = "@layer ".concat(layer.name, " {").concat(styleStr, "}");
      if (layer.dependencies) {
        effectStyle["@layer ".concat(layer.name)] = layer.dependencies.map(function(deps) {
          return "@layer ".concat(deps, ", ").concat(layer.name, ";");
        }).join("\n");
      }
    }
    return [styleStr, effectStyle];
  };
  function uniqueHash(path2, styleStr) {
    return murmur2("".concat(path2.join("%")).concat(styleStr));
  }
  function Empty$2() {
    return null;
  }
  var STYLE_PREFIX = "style";
  function useStyleRegister(info, styleFn) {
    var token2 = info.token, path2 = info.path, hashId = info.hashId, layer = info.layer, nonce = info.nonce, clientOnly = info.clientOnly, _info$order = info.order, order = _info$order === void 0 ? 0 : _info$order;
    var _React$useContext = React__namespace.useContext(StyleContext), autoClear = _React$useContext.autoClear;
    _React$useContext.mock;
    var defaultCache = _React$useContext.defaultCache, hashPriority = _React$useContext.hashPriority, container = _React$useContext.container, ssrInline = _React$useContext.ssrInline, transformers = _React$useContext.transformers, linters = _React$useContext.linters, cache2 = _React$useContext.cache, enableLayer = _React$useContext.layer;
    var tokenKey = token2._tokenKey;
    var fullPath = [tokenKey];
    if (enableLayer) {
      fullPath.push("layer");
    }
    fullPath.push.apply(fullPath, _toConsumableArray(path2));
    var isMergedClientSide = isClientSide;
    var _useGlobalCache = useGlobalCache(
      STYLE_PREFIX,
      fullPath,
      // Create cache if needed
      function() {
        var cachePath = fullPath.join("|");
        if (existPath(cachePath)) {
          var _getStyleAndHash = getStyleAndHash(cachePath), _getStyleAndHash2 = _slicedToArray(_getStyleAndHash, 2), inlineCacheStyleStr = _getStyleAndHash2[0], styleHash = _getStyleAndHash2[1];
          if (inlineCacheStyleStr) {
            return [inlineCacheStyleStr, tokenKey, styleHash, {}, clientOnly, order];
          }
        }
        var styleObj = styleFn();
        var _parseStyle5 = parseStyle(styleObj, {
          hashId,
          hashPriority,
          layer: enableLayer ? layer : void 0,
          path: path2.join("-"),
          transformers,
          linters
        }), _parseStyle6 = _slicedToArray(_parseStyle5, 2), parsedStyle = _parseStyle6[0], effectStyle = _parseStyle6[1];
        var styleStr = normalizeStyle(parsedStyle);
        var styleId = uniqueHash(fullPath, styleStr);
        return [styleStr, tokenKey, styleId, effectStyle, clientOnly, order];
      },
      // Remove cache if no need
      function(_ref22, fromHMR) {
        var _ref32 = _slicedToArray(_ref22, 3), styleId = _ref32[2];
        if ((fromHMR || autoClear) && isClientSide) {
          removeCSS(styleId, {
            mark: ATTR_MARK
          });
        }
      },
      // Effect: Inject style here
      function(_ref42) {
        var _ref52 = _slicedToArray(_ref42, 4), styleStr = _ref52[0];
        _ref52[1];
        var styleId = _ref52[2], effectStyle = _ref52[3];
        if (isMergedClientSide && styleStr !== CSS_FILE_STYLE) {
          var mergedCSSConfig = {
            mark: ATTR_MARK,
            prepend: enableLayer ? false : "queue",
            attachTo: container,
            priority: order
          };
          var nonceStr = typeof nonce === "function" ? nonce() : nonce;
          if (nonceStr) {
            mergedCSSConfig.csp = {
              nonce: nonceStr
            };
          }
          var effectLayerKeys = [];
          var effectRestKeys = [];
          Object.keys(effectStyle).forEach(function(key) {
            if (key.startsWith("@layer")) {
              effectLayerKeys.push(key);
            } else {
              effectRestKeys.push(key);
            }
          });
          effectLayerKeys.forEach(function(effectKey) {
            updateCSS(normalizeStyle(effectStyle[effectKey]), "_layer-".concat(effectKey), _objectSpread2(_objectSpread2({}, mergedCSSConfig), {}, {
              prepend: true
            }));
          });
          var style2 = updateCSS(styleStr, styleId, mergedCSSConfig);
          style2[CSS_IN_JS_INSTANCE] = cache2.instanceId;
          style2.setAttribute(ATTR_TOKEN, tokenKey);
          effectRestKeys.forEach(function(effectKey) {
            updateCSS(normalizeStyle(effectStyle[effectKey]), "_effect-".concat(effectKey), mergedCSSConfig);
          });
        }
      }
    ), _useGlobalCache2 = _slicedToArray(_useGlobalCache, 3), cachedStyleStr = _useGlobalCache2[0], cachedTokenKey = _useGlobalCache2[1], cachedStyleId = _useGlobalCache2[2];
    return function(node2) {
      var styleNode;
      if (!ssrInline || isMergedClientSide || !defaultCache) {
        styleNode = /* @__PURE__ */ React__namespace.createElement(Empty$2, null);
      } else {
        var _ref62;
        styleNode = /* @__PURE__ */ React__namespace.createElement("style", _extends({}, (_ref62 = {}, _defineProperty(_ref62, ATTR_TOKEN, cachedTokenKey), _defineProperty(_ref62, ATTR_MARK, cachedStyleId), _ref62), {
          dangerouslySetInnerHTML: {
            __html: cachedStyleStr
          }
        }));
      }
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, styleNode, node2);
    };
  }
  var extract$1 = function extract22(cache2, effectStyles, options) {
    var _cache = _slicedToArray(cache2, 6), styleStr = _cache[0], tokenKey = _cache[1], styleId = _cache[2], effectStyle = _cache[3], clientOnly = _cache[4], order = _cache[5];
    var _ref7 = options || {}, plain = _ref7.plain;
    if (clientOnly) {
      return null;
    }
    var keyStyleText = styleStr;
    var sharedAttrs = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(order)
    };
    keyStyleText = toStyleStr(styleStr, tokenKey, styleId, sharedAttrs, plain);
    if (effectStyle) {
      Object.keys(effectStyle).forEach(function(effectKey) {
        if (!effectStyles[effectKey]) {
          effectStyles[effectKey] = true;
          var effectStyleStr = normalizeStyle(effectStyle[effectKey]);
          var effectStyleHTML = toStyleStr(effectStyleStr, tokenKey, "_effect-".concat(effectKey), sharedAttrs, plain);
          if (effectKey.startsWith("@layer")) {
            keyStyleText = effectStyleHTML + keyStyleText;
          } else {
            keyStyleText += effectStyleHTML;
          }
        }
      });
    }
    return [order, styleId, keyStyleText];
  };
  var CSS_VAR_PREFIX = "cssVar";
  var useCSSVarRegister = function useCSSVarRegister2(config, fn) {
    var key = config.key, prefix2 = config.prefix, unitless2 = config.unitless, ignore2 = config.ignore, token2 = config.token, _config$scope = config.scope, scope = _config$scope === void 0 ? "" : _config$scope;
    var _useContext = React.useContext(StyleContext), instanceId = _useContext.cache.instanceId, container = _useContext.container;
    var tokenKey = token2._tokenKey;
    var stylePath = [].concat(_toConsumableArray(config.path), [key, scope, tokenKey]);
    var cache2 = useGlobalCache(CSS_VAR_PREFIX, stylePath, function() {
      var originToken = fn();
      var _transformToken = transformToken(originToken, key, {
        prefix: prefix2,
        unitless: unitless2,
        ignore: ignore2,
        scope
      }), _transformToken2 = _slicedToArray(_transformToken, 2), mergedToken = _transformToken2[0], cssVarsStr = _transformToken2[1];
      var styleId = uniqueHash(stylePath, cssVarsStr);
      return [mergedToken, cssVarsStr, styleId, key];
    }, function(_ref7) {
      var _ref22 = _slicedToArray(_ref7, 3), styleId = _ref22[2];
      if (isClientSide) {
        removeCSS(styleId, {
          mark: ATTR_MARK
        });
      }
    }, function(_ref32) {
      var _ref42 = _slicedToArray(_ref32, 3), cssVarsStr = _ref42[1], styleId = _ref42[2];
      if (!cssVarsStr) {
        return;
      }
      var style2 = updateCSS(cssVarsStr, styleId, {
        mark: ATTR_MARK,
        prepend: "queue",
        attachTo: container,
        priority: -999
      });
      style2[CSS_IN_JS_INSTANCE] = instanceId;
      style2.setAttribute(ATTR_TOKEN, key);
    });
    return cache2;
  };
  var extract = function extract3(cache2, effectStyles, options) {
    var _cache = _slicedToArray(cache2, 4), styleStr = _cache[1], styleId = _cache[2], cssVarKey = _cache[3];
    var _ref52 = options || {}, plain = _ref52.plain;
    if (!styleStr) {
      return null;
    }
    var order = -999;
    var sharedAttrs = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(order)
    };
    var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
    return [order, styleId, styleText];
  };
  var _ExtractStyleFns;
  _ExtractStyleFns = {}, _defineProperty(_ExtractStyleFns, STYLE_PREFIX, extract$1), _defineProperty(_ExtractStyleFns, TOKEN_PREFIX, extract$2), _defineProperty(_ExtractStyleFns, CSS_VAR_PREFIX, extract);
  var Keyframe = /* @__PURE__ */ function() {
    function Keyframe2(name, style2) {
      _classCallCheck(this, Keyframe2);
      _defineProperty(this, "name", void 0);
      _defineProperty(this, "style", void 0);
      _defineProperty(this, "_keyframe", true);
      this.name = name;
      this.style = style2;
    }
    _createClass(Keyframe2, [{
      key: "getName",
      value: function getName() {
        var hashId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        return hashId ? "".concat(hashId, "-").concat(this.name) : this.name;
      }
    }]);
    return Keyframe2;
  }();
  function noSplit(list) {
    list.notSplit = true;
    return list;
  }
  ({
    // Inset
    inset: ["top", "right", "bottom", "left"],
    insetBlock: ["top", "bottom"],
    insetBlockStart: ["top"],
    insetBlockEnd: ["bottom"],
    insetInline: ["left", "right"],
    insetInlineStart: ["left"],
    insetInlineEnd: ["right"],
    // Margin
    marginBlock: ["marginTop", "marginBottom"],
    marginBlockStart: ["marginTop"],
    marginBlockEnd: ["marginBottom"],
    marginInline: ["marginLeft", "marginRight"],
    marginInlineStart: ["marginLeft"],
    marginInlineEnd: ["marginRight"],
    // Padding
    paddingBlock: ["paddingTop", "paddingBottom"],
    paddingBlockStart: ["paddingTop"],
    paddingBlockEnd: ["paddingBottom"],
    paddingInline: ["paddingLeft", "paddingRight"],
    paddingInlineStart: ["paddingLeft"],
    paddingInlineEnd: ["paddingRight"],
    // Border
    borderBlock: noSplit(["borderTop", "borderBottom"]),
    borderBlockStart: noSplit(["borderTop"]),
    borderBlockEnd: noSplit(["borderBottom"]),
    borderInline: noSplit(["borderLeft", "borderRight"]),
    borderInlineStart: noSplit(["borderLeft"]),
    borderInlineEnd: noSplit(["borderRight"]),
    // Border width
    borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
    borderBlockStartWidth: ["borderTopWidth"],
    borderBlockEndWidth: ["borderBottomWidth"],
    borderInlineWidth: ["borderLeftWidth", "borderRightWidth"],
    borderInlineStartWidth: ["borderLeftWidth"],
    borderInlineEndWidth: ["borderRightWidth"],
    // Border style
    borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
    borderBlockStartStyle: ["borderTopStyle"],
    borderBlockEndStyle: ["borderBottomStyle"],
    borderInlineStyle: ["borderLeftStyle", "borderRightStyle"],
    borderInlineStartStyle: ["borderLeftStyle"],
    borderInlineEndStyle: ["borderRightStyle"],
    // Border color
    borderBlockColor: ["borderTopColor", "borderBottomColor"],
    borderBlockStartColor: ["borderTopColor"],
    borderBlockEndColor: ["borderBottomColor"],
    borderInlineColor: ["borderLeftColor", "borderRightColor"],
    borderInlineStartColor: ["borderLeftColor"],
    borderInlineEndColor: ["borderRightColor"],
    // Border radius
    borderStartStartRadius: ["borderTopLeftRadius"],
    borderStartEndRadius: ["borderTopRightRadius"],
    borderEndStartRadius: ["borderBottomLeftRadius"],
    borderEndEndRadius: ["borderBottomRightRadius"]
  });
  var IconContext = /* @__PURE__ */ React.createContext({});
  function _toArray(r2) {
    return _arrayWithHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableRest();
  }
  function get(entity, path2) {
    var current = entity;
    for (var i2 = 0; i2 < path2.length; i2 += 1) {
      if (current === null || current === void 0) {
        return void 0;
      }
      current = current[path2[i2]];
    }
    return current;
  }
  function internalSet(entity, paths, value, removeIfUndefined) {
    if (!paths.length) {
      return value;
    }
    var _paths = _toArray(paths), path2 = _paths[0], restPath = _paths.slice(1);
    var clone;
    if (!entity && typeof path2 === "number") {
      clone = [];
    } else if (Array.isArray(entity)) {
      clone = _toConsumableArray(entity);
    } else {
      clone = _objectSpread2({}, entity);
    }
    if (removeIfUndefined && value === void 0 && restPath.length === 1) {
      delete clone[path2][restPath[0]];
    } else {
      clone[path2] = internalSet(clone[path2], restPath, value, removeIfUndefined);
    }
    return clone;
  }
  function set(entity, paths, value) {
    var removeIfUndefined = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    if (paths.length && removeIfUndefined && value === void 0 && !get(entity, paths.slice(0, -1))) {
      return entity;
    }
    return internalSet(entity, paths, value, removeIfUndefined);
  }
  function isObject$2(obj) {
    return _typeof(obj) === "object" && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
  }
  function createEmpty(source) {
    return Array.isArray(source) ? [] : {};
  }
  var keys = typeof Reflect === "undefined" ? Object.keys : Reflect.ownKeys;
  function merge$2() {
    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }
    var clone = createEmpty(sources[0]);
    sources.forEach(function(src) {
      function internalMerge(path2, parentLoopSet) {
        var loopSet = new Set(parentLoopSet);
        var value = get(src, path2);
        var isArr = Array.isArray(value);
        if (isArr || isObject$2(value)) {
          if (!loopSet.has(value)) {
            loopSet.add(value);
            var originValue = get(clone, path2);
            if (isArr) {
              clone = set(clone, path2, []);
            } else if (!originValue || _typeof(originValue) !== "object") {
              clone = set(clone, path2, createEmpty(value));
            }
            keys(value).forEach(function(key) {
              internalMerge([].concat(_toConsumableArray(path2), [key]), loopSet);
            });
          }
        } else {
          clone = set(clone, path2, value);
        }
      }
      internalMerge([]);
    });
    return clone;
  }
  function noop$2() {
  }
  const WarningContext = /* @__PURE__ */ React__namespace.createContext({});
  const devUseWarning = () => {
    const noopWarning = () => {
    };
    noopWarning.deprecated = noop$2;
    return noopWarning;
  };
  const ValidateMessagesContext = /* @__PURE__ */ React.createContext(void 0);
  var locale$3 = {
    // Options
    items_per_page: "/ page",
    jump_to: "Go to",
    jump_to_confirm: "confirm",
    page: "Page",
    // Pagination
    prev_page: "Previous Page",
    next_page: "Next Page",
    prev_5: "Previous 5 Pages",
    next_5: "Next 5 Pages",
    prev_3: "Previous 3 Pages",
    next_3: "Next 3 Pages",
    page_size: "Page Size"
  };
  var locale$2 = {
    locale: "en_US",
    today: "Today",
    now: "Now",
    backToToday: "Back to today",
    ok: "OK",
    clear: "Clear",
    month: "Month",
    year: "Year",
    timeSelect: "select time",
    dateSelect: "select date",
    weekSelect: "Choose a week",
    monthSelect: "Choose a month",
    yearSelect: "Choose a year",
    decadeSelect: "Choose a decade",
    yearFormat: "YYYY",
    dateFormat: "M/D/YYYY",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthBeforeYear: true,
    previousMonth: "Previous month (PageUp)",
    nextMonth: "Next month (PageDown)",
    previousYear: "Last year (Control + left)",
    nextYear: "Next year (Control + right)",
    previousDecade: "Last decade",
    nextDecade: "Next decade",
    previousCentury: "Last century",
    nextCentury: "Next century"
  };
  const locale$1 = {
    placeholder: "Select time",
    rangePlaceholder: ["Start time", "End time"]
  };
  const locale = {
    lang: Object.assign({
      placeholder: "Select date",
      yearPlaceholder: "Select year",
      quarterPlaceholder: "Select quarter",
      monthPlaceholder: "Select month",
      weekPlaceholder: "Select week",
      rangePlaceholder: ["Start date", "End date"],
      rangeYearPlaceholder: ["Start year", "End year"],
      rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
      rangeMonthPlaceholder: ["Start month", "End month"],
      rangeWeekPlaceholder: ["Start week", "End week"]
    }, locale$2),
    timePickerLocale: Object.assign({}, locale$1)
  };
  const typeTemplate$1 = "${label} is not a valid ${type}";
  const localeValues = {
    locale: "en",
    Pagination: locale$3,
    DatePicker: locale,
    TimePicker: locale$1,
    Calendar: locale,
    global: {
      placeholder: "Please select"
    },
    Table: {
      filterTitle: "Filter menu",
      filterConfirm: "OK",
      filterReset: "Reset",
      filterEmptyText: "No filters",
      filterCheckall: "Select all items",
      filterSearchPlaceholder: "Search in filters",
      emptyText: "No data",
      selectAll: "Select current page",
      selectInvert: "Invert current page",
      selectNone: "Clear all data",
      selectionAll: "Select all data",
      sortTitle: "Sort",
      expand: "Expand row",
      collapse: "Collapse row",
      triggerDesc: "Click to sort descending",
      triggerAsc: "Click to sort ascending",
      cancelSort: "Click to cancel sorting"
    },
    Tour: {
      Next: "Next",
      Previous: "Previous",
      Finish: "Finish"
    },
    Modal: {
      okText: "OK",
      cancelText: "Cancel",
      justOkText: "OK"
    },
    Popconfirm: {
      okText: "OK",
      cancelText: "Cancel"
    },
    Transfer: {
      titles: ["", ""],
      searchPlaceholder: "Search here",
      itemUnit: "item",
      itemsUnit: "items",
      remove: "Remove",
      selectCurrent: "Select current page",
      removeCurrent: "Remove current page",
      selectAll: "Select all data",
      deselectAll: "Deselect all data",
      removeAll: "Remove all data",
      selectInvert: "Invert current page"
    },
    Upload: {
      uploading: "Uploading...",
      removeFile: "Remove file",
      uploadError: "Upload error",
      previewFile: "Preview file",
      downloadFile: "Download file"
    },
    Empty: {
      description: "No data"
    },
    Icon: {
      icon: "icon"
    },
    Text: {
      edit: "Edit",
      copy: "Copy",
      copied: "Copied",
      expand: "Expand",
      collapse: "Collapse"
    },
    Form: {
      optional: "(optional)",
      defaultValidateMessages: {
        default: "Field validation error for ${label}",
        required: "Please enter ${label}",
        enum: "${label} must be one of [${enum}]",
        whitespace: "${label} cannot be a blank character",
        date: {
          format: "${label} date format is invalid",
          parse: "${label} cannot be converted to a date",
          invalid: "${label} is an invalid date"
        },
        types: {
          string: typeTemplate$1,
          method: typeTemplate$1,
          array: typeTemplate$1,
          object: typeTemplate$1,
          number: typeTemplate$1,
          date: typeTemplate$1,
          boolean: typeTemplate$1,
          integer: typeTemplate$1,
          float: typeTemplate$1,
          regexp: typeTemplate$1,
          email: typeTemplate$1,
          url: typeTemplate$1,
          hex: typeTemplate$1
        },
        string: {
          len: "${label} must be ${len} characters",
          min: "${label} must be at least ${min} characters",
          max: "${label} must be up to ${max} characters",
          range: "${label} must be between ${min}-${max} characters"
        },
        number: {
          len: "${label} must be equal to ${len}",
          min: "${label} must be minimum ${min}",
          max: "${label} must be maximum ${max}",
          range: "${label} must be between ${min}-${max}"
        },
        array: {
          len: "Must be ${len} ${label}",
          min: "At least ${min} ${label}",
          max: "At most ${max} ${label}",
          range: "The amount of ${label} must be between ${min}-${max}"
        },
        pattern: {
          mismatch: "${label} does not match the pattern ${pattern}"
        }
      }
    },
    Image: {
      preview: "Preview"
    },
    QRCode: {
      expired: "QR code expired",
      refresh: "Refresh",
      scanned: "Scanned"
    },
    ColorPicker: {
      presetEmpty: "Empty"
    }
  };
  let runtimeLocale = Object.assign({}, localeValues.Modal);
  let localeList = [];
  const generateLocale = () => localeList.reduce((merged, locale2) => Object.assign(Object.assign({}, merged), locale2), localeValues.Modal);
  function changeConfirmLocale(newLocale) {
    if (newLocale) {
      const cloneLocale = Object.assign({}, newLocale);
      localeList.push(cloneLocale);
      runtimeLocale = generateLocale();
      return () => {
        localeList = localeList.filter((locale2) => locale2 !== cloneLocale);
        runtimeLocale = generateLocale();
      };
    }
    runtimeLocale = Object.assign({}, localeValues.Modal);
  }
  function getConfirmLocale() {
    return runtimeLocale;
  }
  const LocaleContext = /* @__PURE__ */ React.createContext(void 0);
  const useLocale = (componentName, defaultLocale) => {
    const fullLocale = React__namespace.useContext(LocaleContext);
    const getLocale = React__namespace.useMemo(() => {
      var _a;
      const locale2 = defaultLocale || localeValues[componentName];
      const localeFromContext = (_a = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale[componentName]) !== null && _a !== void 0 ? _a : {};
      return Object.assign(Object.assign({}, typeof locale2 === "function" ? locale2() : locale2), localeFromContext || {});
    }, [componentName, defaultLocale, fullLocale]);
    const getLocaleCode = React__namespace.useMemo(() => {
      const localeCode = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.locale;
      if ((fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.exist) && !localeCode) {
        return localeValues.locale;
      }
      return localeCode;
    }, [fullLocale]);
    return [getLocale, getLocaleCode];
  };
  const ANT_MARK = "internalMark";
  const LocaleProvider = (props) => {
    const {
      locale: locale2 = {},
      children,
      _ANT_MARK__
    } = props;
    React__namespace.useEffect(() => {
      const clearLocale = changeConfirmLocale(locale2 && locale2.Modal);
      return clearLocale;
    }, [locale2]);
    const getMemoizedContextValue = React__namespace.useMemo(() => Object.assign(Object.assign({}, locale2), {
      exist: true
    }), [locale2]);
    return /* @__PURE__ */ React__namespace.createElement(LocaleContext.Provider, {
      value: getMemoizedContextValue
    }, children);
  };
  function bound01(n2, max) {
    if (isOnePointZero(n2)) {
      n2 = "100%";
    }
    var isPercent = isPercentage(n2);
    n2 = max === 360 ? n2 : Math.min(max, Math.max(0, parseFloat(n2)));
    if (isPercent) {
      n2 = parseInt(String(n2 * max), 10) / 100;
    }
    if (Math.abs(n2 - max) < 1e-6) {
      return 1;
    }
    if (max === 360) {
      n2 = (n2 < 0 ? n2 % max + max : n2 % max) / parseFloat(String(max));
    } else {
      n2 = n2 % max / parseFloat(String(max));
    }
    return n2;
  }
  function clamp01(val) {
    return Math.min(1, Math.max(0, val));
  }
  function isOnePointZero(n2) {
    return typeof n2 === "string" && n2.indexOf(".") !== -1 && parseFloat(n2) === 1;
  }
  function isPercentage(n2) {
    return typeof n2 === "string" && n2.indexOf("%") !== -1;
  }
  function boundAlpha(a2) {
    a2 = parseFloat(a2);
    if (isNaN(a2) || a2 < 0 || a2 > 1) {
      a2 = 1;
    }
    return a2;
  }
  function convertToPercentage(n2) {
    if (n2 <= 1) {
      return "".concat(Number(n2) * 100, "%");
    }
    return n2;
  }
  function pad2(c2) {
    return c2.length === 1 ? "0" + c2 : String(c2);
  }
  function rgbToRgb(r2, g2, b2) {
    return {
      r: bound01(r2, 255) * 255,
      g: bound01(g2, 255) * 255,
      b: bound01(b2, 255) * 255
    };
  }
  function rgbToHsl$1(r2, g2, b2) {
    r2 = bound01(r2, 255);
    g2 = bound01(g2, 255);
    b2 = bound01(b2, 255);
    var max = Math.max(r2, g2, b2);
    var min = Math.min(r2, g2, b2);
    var h2 = 0;
    var s2 = 0;
    var l2 = (max + min) / 2;
    if (max === min) {
      s2 = 0;
      h2 = 0;
    } else {
      var d2 = max - min;
      s2 = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
      switch (max) {
        case r2:
          h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
          break;
        case g2:
          h2 = (b2 - r2) / d2 + 2;
          break;
        case b2:
          h2 = (r2 - g2) / d2 + 4;
          break;
      }
      h2 /= 6;
    }
    return { h: h2, s: s2, l: l2 };
  }
  function hue2rgb(p2, q2, t2) {
    if (t2 < 0) {
      t2 += 1;
    }
    if (t2 > 1) {
      t2 -= 1;
    }
    if (t2 < 1 / 6) {
      return p2 + (q2 - p2) * (6 * t2);
    }
    if (t2 < 1 / 2) {
      return q2;
    }
    if (t2 < 2 / 3) {
      return p2 + (q2 - p2) * (2 / 3 - t2) * 6;
    }
    return p2;
  }
  function hslToRgb$1(h2, s2, l2) {
    var r2;
    var g2;
    var b2;
    h2 = bound01(h2, 360);
    s2 = bound01(s2, 100);
    l2 = bound01(l2, 100);
    if (s2 === 0) {
      g2 = l2;
      b2 = l2;
      r2 = l2;
    } else {
      var q2 = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
      var p2 = 2 * l2 - q2;
      r2 = hue2rgb(p2, q2, h2 + 1 / 3);
      g2 = hue2rgb(p2, q2, h2);
      b2 = hue2rgb(p2, q2, h2 - 1 / 3);
    }
    return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
  }
  function rgbToHsv(r2, g2, b2) {
    r2 = bound01(r2, 255);
    g2 = bound01(g2, 255);
    b2 = bound01(b2, 255);
    var max = Math.max(r2, g2, b2);
    var min = Math.min(r2, g2, b2);
    var h2 = 0;
    var v2 = max;
    var d2 = max - min;
    var s2 = max === 0 ? 0 : d2 / max;
    if (max === min) {
      h2 = 0;
    } else {
      switch (max) {
        case r2:
          h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
          break;
        case g2:
          h2 = (b2 - r2) / d2 + 2;
          break;
        case b2:
          h2 = (r2 - g2) / d2 + 4;
          break;
      }
      h2 /= 6;
    }
    return { h: h2, s: s2, v: v2 };
  }
  function hsvToRgb(h2, s2, v2) {
    h2 = bound01(h2, 360) * 6;
    s2 = bound01(s2, 100);
    v2 = bound01(v2, 100);
    var i2 = Math.floor(h2);
    var f2 = h2 - i2;
    var p2 = v2 * (1 - s2);
    var q2 = v2 * (1 - f2 * s2);
    var t2 = v2 * (1 - (1 - f2) * s2);
    var mod = i2 % 6;
    var r2 = [v2, q2, p2, p2, t2, v2][mod];
    var g2 = [t2, v2, v2, q2, p2, p2][mod];
    var b2 = [p2, p2, t2, v2, v2, q2][mod];
    return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
  }
  function rgbToHex(r2, g2, b2, allow3Char) {
    var hex2 = [
      pad2(Math.round(r2).toString(16)),
      pad2(Math.round(g2).toString(16)),
      pad2(Math.round(b2).toString(16))
    ];
    if (allow3Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1))) {
      return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0);
    }
    return hex2.join("");
  }
  function rgbaToHex(r2, g2, b2, a2, allow4Char) {
    var hex2 = [
      pad2(Math.round(r2).toString(16)),
      pad2(Math.round(g2).toString(16)),
      pad2(Math.round(b2).toString(16)),
      pad2(convertDecimalToHex(a2))
    ];
    if (allow4Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1)) && hex2[3].startsWith(hex2[3].charAt(1))) {
      return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0) + hex2[3].charAt(0);
    }
    return hex2.join("");
  }
  function convertDecimalToHex(d2) {
    return Math.round(parseFloat(d2) * 255).toString(16);
  }
  function convertHexToDecimal(h2) {
    return parseIntFromHex(h2) / 255;
  }
  function parseIntFromHex(val) {
    return parseInt(val, 16);
  }
  function numberInputToObject(color) {
    return {
      r: color >> 16,
      g: (color & 65280) >> 8,
      b: color & 255
    };
  }
  var names = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  function inputToRGB(color) {
    var rgb2 = { r: 0, g: 0, b: 0 };
    var a2 = 1;
    var s2 = null;
    var v2 = null;
    var l2 = null;
    var ok = false;
    var format2 = false;
    if (typeof color === "string") {
      color = stringInputToObject(color);
    }
    if (typeof color === "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb2 = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s2 = convertToPercentage(color.s);
        v2 = convertToPercentage(color.v);
        rgb2 = hsvToRgb(color.h, s2, v2);
        ok = true;
        format2 = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s2 = convertToPercentage(color.s);
        l2 = convertToPercentage(color.l);
        rgb2 = hslToRgb$1(color.h, s2, l2);
        ok = true;
        format2 = "hsl";
      }
      if (Object.prototype.hasOwnProperty.call(color, "a")) {
        a2 = color.a;
      }
    }
    a2 = boundAlpha(a2);
    return {
      ok,
      format: color.format || format2,
      r: Math.min(255, Math.max(rgb2.r, 0)),
      g: Math.min(255, Math.max(rgb2.g, 0)),
      b: Math.min(255, Math.max(rgb2.b, 0)),
      a: a2
    };
  }
  var CSS_INTEGER = "[-\\+]?\\d+%?";
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
  var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
  var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
  function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
      return false;
    }
    var named = false;
    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color === "transparent") {
      return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }
    var match2 = matchers.rgb.exec(color);
    if (match2) {
      return { r: match2[1], g: match2[2], b: match2[3] };
    }
    match2 = matchers.rgba.exec(color);
    if (match2) {
      return { r: match2[1], g: match2[2], b: match2[3], a: match2[4] };
    }
    match2 = matchers.hsl.exec(color);
    if (match2) {
      return { h: match2[1], s: match2[2], l: match2[3] };
    }
    match2 = matchers.hsla.exec(color);
    if (match2) {
      return { h: match2[1], s: match2[2], l: match2[3], a: match2[4] };
    }
    match2 = matchers.hsv.exec(color);
    if (match2) {
      return { h: match2[1], s: match2[2], v: match2[3] };
    }
    match2 = matchers.hsva.exec(color);
    if (match2) {
      return { h: match2[1], s: match2[2], v: match2[3], a: match2[4] };
    }
    match2 = matchers.hex8.exec(color);
    if (match2) {
      return {
        r: parseIntFromHex(match2[1]),
        g: parseIntFromHex(match2[2]),
        b: parseIntFromHex(match2[3]),
        a: convertHexToDecimal(match2[4]),
        format: named ? "name" : "hex8"
      };
    }
    match2 = matchers.hex6.exec(color);
    if (match2) {
      return {
        r: parseIntFromHex(match2[1]),
        g: parseIntFromHex(match2[2]),
        b: parseIntFromHex(match2[3]),
        format: named ? "name" : "hex"
      };
    }
    match2 = matchers.hex4.exec(color);
    if (match2) {
      return {
        r: parseIntFromHex(match2[1] + match2[1]),
        g: parseIntFromHex(match2[2] + match2[2]),
        b: parseIntFromHex(match2[3] + match2[3]),
        a: convertHexToDecimal(match2[4] + match2[4]),
        format: named ? "name" : "hex8"
      };
    }
    match2 = matchers.hex3.exec(color);
    if (match2) {
      return {
        r: parseIntFromHex(match2[1] + match2[1]),
        g: parseIntFromHex(match2[2] + match2[2]),
        b: parseIntFromHex(match2[3] + match2[3]),
        format: named ? "name" : "hex"
      };
    }
    return false;
  }
  function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
  }
  var TinyColor = (
    /** @class */
    function() {
      function TinyColor2(color, opts) {
        if (color === void 0) {
          color = "";
        }
        if (opts === void 0) {
          opts = {};
        }
        var _a;
        if (color instanceof TinyColor2) {
          return color;
        }
        if (typeof color === "number") {
          color = numberInputToObject(color);
        }
        this.originalInput = color;
        var rgb2 = inputToRGB(color);
        this.originalInput = color;
        this.r = rgb2.r;
        this.g = rgb2.g;
        this.b = rgb2.b;
        this.a = rgb2.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb2.format;
        this.gradientType = opts.gradientType;
        if (this.r < 1) {
          this.r = Math.round(this.r);
        }
        if (this.g < 1) {
          this.g = Math.round(this.g);
        }
        if (this.b < 1) {
          this.b = Math.round(this.b);
        }
        this.isValid = rgb2.ok;
      }
      TinyColor2.prototype.isDark = function() {
        return this.getBrightness() < 128;
      };
      TinyColor2.prototype.isLight = function() {
        return !this.isDark();
      };
      TinyColor2.prototype.getBrightness = function() {
        var rgb2 = this.toRgb();
        return (rgb2.r * 299 + rgb2.g * 587 + rgb2.b * 114) / 1e3;
      };
      TinyColor2.prototype.getLuminance = function() {
        var rgb2 = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb2.r / 255;
        var GsRGB = rgb2.g / 255;
        var BsRGB = rgb2.b / 255;
        if (RsRGB <= 0.03928) {
          R = RsRGB / 12.92;
        } else {
          R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
          G = GsRGB / 12.92;
        } else {
          G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
          B = BsRGB / 12.92;
        } else {
          B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
      };
      TinyColor2.prototype.getAlpha = function() {
        return this.a;
      };
      TinyColor2.prototype.setAlpha = function(alpha) {
        this.a = boundAlpha(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
      };
      TinyColor2.prototype.isMonochrome = function() {
        var s2 = this.toHsl().s;
        return s2 === 0;
      };
      TinyColor2.prototype.toHsv = function() {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
      };
      TinyColor2.prototype.toHsvString = function() {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        var h2 = Math.round(hsv.h * 360);
        var s2 = Math.round(hsv.s * 100);
        var v2 = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%)") : "hsva(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toHsl = function() {
        var hsl2 = rgbToHsl$1(this.r, this.g, this.b);
        return { h: hsl2.h * 360, s: hsl2.s, l: hsl2.l, a: this.a };
      };
      TinyColor2.prototype.toHslString = function() {
        var hsl2 = rgbToHsl$1(this.r, this.g, this.b);
        var h2 = Math.round(hsl2.h * 360);
        var s2 = Math.round(hsl2.s * 100);
        var l2 = Math.round(hsl2.l * 100);
        return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%)") : "hsla(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toHex = function(allow3Char) {
        if (allow3Char === void 0) {
          allow3Char = false;
        }
        return rgbToHex(this.r, this.g, this.b, allow3Char);
      };
      TinyColor2.prototype.toHexString = function(allow3Char) {
        if (allow3Char === void 0) {
          allow3Char = false;
        }
        return "#" + this.toHex(allow3Char);
      };
      TinyColor2.prototype.toHex8 = function(allow4Char) {
        if (allow4Char === void 0) {
          allow4Char = false;
        }
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
      };
      TinyColor2.prototype.toHex8String = function(allow4Char) {
        if (allow4Char === void 0) {
          allow4Char = false;
        }
        return "#" + this.toHex8(allow4Char);
      };
      TinyColor2.prototype.toHexShortString = function(allowShortChar) {
        if (allowShortChar === void 0) {
          allowShortChar = false;
        }
        return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
      };
      TinyColor2.prototype.toRgb = function() {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a
        };
      };
      TinyColor2.prototype.toRgbString = function() {
        var r2 = Math.round(this.r);
        var g2 = Math.round(this.g);
        var b2 = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r2, ", ").concat(g2, ", ").concat(b2, ")") : "rgba(".concat(r2, ", ").concat(g2, ", ").concat(b2, ", ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toPercentageRgb = function() {
        var fmt = function(x2) {
          return "".concat(Math.round(bound01(x2, 255) * 100), "%");
        };
        return {
          r: fmt(this.r),
          g: fmt(this.g),
          b: fmt(this.b),
          a: this.a
        };
      };
      TinyColor2.prototype.toPercentageRgbString = function() {
        var rnd = function(x2) {
          return Math.round(bound01(x2, 255) * 100);
        };
        return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toName = function() {
        if (this.a === 0) {
          return "transparent";
        }
        if (this.a < 1) {
          return false;
        }
        var hex2 = "#" + rgbToHex(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
          var _b = _a[_i], key = _b[0], value = _b[1];
          if (hex2 === value) {
            return key;
          }
        }
        return false;
      };
      TinyColor2.prototype.toString = function(format2) {
        var formatSet = Boolean(format2);
        format2 = format2 !== null && format2 !== void 0 ? format2 : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format2.startsWith("hex") || format2 === "name");
        if (needsAlphaFormat) {
          if (format2 === "name" && this.a === 0) {
            return this.toName();
          }
          return this.toRgbString();
        }
        if (format2 === "rgb") {
          formattedString = this.toRgbString();
        }
        if (format2 === "prgb") {
          formattedString = this.toPercentageRgbString();
        }
        if (format2 === "hex" || format2 === "hex6") {
          formattedString = this.toHexString();
        }
        if (format2 === "hex3") {
          formattedString = this.toHexString(true);
        }
        if (format2 === "hex4") {
          formattedString = this.toHex8String(true);
        }
        if (format2 === "hex8") {
          formattedString = this.toHex8String();
        }
        if (format2 === "name") {
          formattedString = this.toName();
        }
        if (format2 === "hsl") {
          formattedString = this.toHslString();
        }
        if (format2 === "hsv") {
          formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
      };
      TinyColor2.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
      };
      TinyColor2.prototype.clone = function() {
        return new TinyColor2(this.toString());
      };
      TinyColor2.prototype.lighten = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl2 = this.toHsl();
        hsl2.l += amount / 100;
        hsl2.l = clamp01(hsl2.l);
        return new TinyColor2(hsl2);
      };
      TinyColor2.prototype.brighten = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var rgb2 = this.toRgb();
        rgb2.r = Math.max(0, Math.min(255, rgb2.r - Math.round(255 * -(amount / 100))));
        rgb2.g = Math.max(0, Math.min(255, rgb2.g - Math.round(255 * -(amount / 100))));
        rgb2.b = Math.max(0, Math.min(255, rgb2.b - Math.round(255 * -(amount / 100))));
        return new TinyColor2(rgb2);
      };
      TinyColor2.prototype.darken = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl2 = this.toHsl();
        hsl2.l -= amount / 100;
        hsl2.l = clamp01(hsl2.l);
        return new TinyColor2(hsl2);
      };
      TinyColor2.prototype.tint = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        return this.mix("white", amount);
      };
      TinyColor2.prototype.shade = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        return this.mix("black", amount);
      };
      TinyColor2.prototype.desaturate = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl2 = this.toHsl();
        hsl2.s -= amount / 100;
        hsl2.s = clamp01(hsl2.s);
        return new TinyColor2(hsl2);
      };
      TinyColor2.prototype.saturate = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl2 = this.toHsl();
        hsl2.s += amount / 100;
        hsl2.s = clamp01(hsl2.s);
        return new TinyColor2(hsl2);
      };
      TinyColor2.prototype.greyscale = function() {
        return this.desaturate(100);
      };
      TinyColor2.prototype.spin = function(amount) {
        var hsl2 = this.toHsl();
        var hue = (hsl2.h + amount) % 360;
        hsl2.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor2(hsl2);
      };
      TinyColor2.prototype.mix = function(color, amount) {
        if (amount === void 0) {
          amount = 50;
        }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor2(color).toRgb();
        var p2 = amount / 100;
        var rgba2 = {
          r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
          g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
          b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
          a: (rgb2.a - rgb1.a) * p2 + rgb1.a
        };
        return new TinyColor2(rgba2);
      };
      TinyColor2.prototype.analogous = function(results, slices) {
        if (results === void 0) {
          results = 6;
        }
        if (slices === void 0) {
          slices = 30;
        }
        var hsl2 = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl2.h = (hsl2.h - (part * results >> 1) + 720) % 360; --results; ) {
          hsl2.h = (hsl2.h + part) % 360;
          ret.push(new TinyColor2(hsl2));
        }
        return ret;
      };
      TinyColor2.prototype.complement = function() {
        var hsl2 = this.toHsl();
        hsl2.h = (hsl2.h + 180) % 360;
        return new TinyColor2(hsl2);
      };
      TinyColor2.prototype.monochromatic = function(results) {
        if (results === void 0) {
          results = 6;
        }
        var hsv = this.toHsv();
        var h2 = hsv.h;
        var s2 = hsv.s;
        var v2 = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
          res.push(new TinyColor2({ h: h2, s: s2, v: v2 }));
          v2 = (v2 + modification) % 1;
        }
        return res;
      };
      TinyColor2.prototype.splitcomplement = function() {
        var hsl2 = this.toHsl();
        var h2 = hsl2.h;
        return [
          this,
          new TinyColor2({ h: (h2 + 72) % 360, s: hsl2.s, l: hsl2.l }),
          new TinyColor2({ h: (h2 + 216) % 360, s: hsl2.s, l: hsl2.l })
        ];
      };
      TinyColor2.prototype.onBackground = function(background) {
        var fg = this.toRgb();
        var bg = new TinyColor2(background).toRgb();
        var alpha = fg.a + bg.a * (1 - fg.a);
        return new TinyColor2({
          r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
          g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
          b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
          a: alpha
        });
      };
      TinyColor2.prototype.triad = function() {
        return this.polyad(3);
      };
      TinyColor2.prototype.tetrad = function() {
        return this.polyad(4);
      };
      TinyColor2.prototype.polyad = function(n2) {
        var hsl2 = this.toHsl();
        var h2 = hsl2.h;
        var result = [this];
        var increment = 360 / n2;
        for (var i2 = 1; i2 < n2; i2++) {
          result.push(new TinyColor2({ h: (h2 + i2 * increment) % 360, s: hsl2.s, l: hsl2.l }));
        }
        return result;
      };
      TinyColor2.prototype.equals = function(color) {
        return this.toRgbString() === new TinyColor2(color).toRgbString();
      };
      return TinyColor2;
    }()
  );
  var hueStep = 2;
  var saturationStep = 0.16;
  var saturationStep2 = 0.05;
  var brightnessStep1 = 0.05;
  var brightnessStep2 = 0.15;
  var lightColorCount = 5;
  var darkColorCount = 4;
  var darkColorMap = [{
    index: 7,
    opacity: 0.15
  }, {
    index: 6,
    opacity: 0.25
  }, {
    index: 5,
    opacity: 0.3
  }, {
    index: 5,
    opacity: 0.45
  }, {
    index: 5,
    opacity: 0.65
  }, {
    index: 5,
    opacity: 0.85
  }, {
    index: 4,
    opacity: 0.9
  }, {
    index: 3,
    opacity: 0.95
  }, {
    index: 2,
    opacity: 0.97
  }, {
    index: 1,
    opacity: 0.98
  }];
  function toHsv(_ref7) {
    var r2 = _ref7.r, g2 = _ref7.g, b2 = _ref7.b;
    var hsv = rgbToHsv(r2, g2, b2);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v
    };
  }
  function toHex(_ref22) {
    var r2 = _ref22.r, g2 = _ref22.g, b2 = _ref22.b;
    return "#".concat(rgbToHex(r2, g2, b2, false));
  }
  function mix$2(rgb1, rgb2, amount) {
    var p2 = amount / 100;
    var rgb3 = {
      r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
      g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
      b: (rgb2.b - rgb1.b) * p2 + rgb1.b
    };
    return rgb3;
  }
  function getHue(hsv, i2, light) {
    var hue;
    if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
      hue = light ? Math.round(hsv.h) - hueStep * i2 : Math.round(hsv.h) + hueStep * i2;
    } else {
      hue = light ? Math.round(hsv.h) + hueStep * i2 : Math.round(hsv.h) - hueStep * i2;
    }
    if (hue < 0) {
      hue += 360;
    } else if (hue >= 360) {
      hue -= 360;
    }
    return hue;
  }
  function getSaturation(hsv, i2, light) {
    if (hsv.h === 0 && hsv.s === 0) {
      return hsv.s;
    }
    var saturation;
    if (light) {
      saturation = hsv.s - saturationStep * i2;
    } else if (i2 === darkColorCount) {
      saturation = hsv.s + saturationStep;
    } else {
      saturation = hsv.s + saturationStep2 * i2;
    }
    if (saturation > 1) {
      saturation = 1;
    }
    if (light && i2 === lightColorCount && saturation > 0.1) {
      saturation = 0.1;
    }
    if (saturation < 0.06) {
      saturation = 0.06;
    }
    return Number(saturation.toFixed(2));
  }
  function getValue$2(hsv, i2, light) {
    var value;
    if (light) {
      value = hsv.v + brightnessStep1 * i2;
    } else {
      value = hsv.v - brightnessStep2 * i2;
    }
    if (value > 1) {
      value = 1;
    }
    return Number(value.toFixed(2));
  }
  function generate$1(color) {
    var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var patterns = [];
    var pColor = inputToRGB(color);
    for (var i2 = lightColorCount; i2 > 0; i2 -= 1) {
      var hsv = toHsv(pColor);
      var colorString = toHex(inputToRGB({
        h: getHue(hsv, i2, true),
        s: getSaturation(hsv, i2, true),
        v: getValue$2(hsv, i2, true)
      }));
      patterns.push(colorString);
    }
    patterns.push(toHex(pColor));
    for (var _i = 1; _i <= darkColorCount; _i += 1) {
      var _hsv = toHsv(pColor);
      var _colorString = toHex(inputToRGB({
        h: getHue(_hsv, _i),
        s: getSaturation(_hsv, _i),
        v: getValue$2(_hsv, _i)
      }));
      patterns.push(_colorString);
    }
    if (opts.theme === "dark") {
      return darkColorMap.map(function(_ref32) {
        var index2 = _ref32.index, opacity = _ref32.opacity;
        var darkColorString = toHex(mix$2(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index2]), opacity * 100));
        return darkColorString;
      });
    }
    return patterns;
  }
  var presetPrimaryColors = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1677FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666"
  };
  var presetPalettes = {};
  var presetDarkPalettes = {};
  Object.keys(presetPrimaryColors).forEach(function(key) {
    presetPalettes[key] = generate$1(presetPrimaryColors[key]);
    presetPalettes[key].primary = presetPalettes[key][5];
    presetDarkPalettes[key] = generate$1(presetPrimaryColors[key], {
      theme: "dark",
      backgroundColor: "#141414"
    });
    presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
  });
  var blue = presetPalettes.blue;
  const defaultPresetColors = {
    blue: "#1677ff",
    purple: "#722ED1",
    cyan: "#13C2C2",
    green: "#52C41A",
    magenta: "#EB2F96",
    pink: "#eb2f96",
    red: "#F5222D",
    orange: "#FA8C16",
    yellow: "#FADB14",
    volcano: "#FA541C",
    geekblue: "#2F54EB",
    gold: "#FAAD14",
    lime: "#A0D911"
  };
  const seedToken = Object.assign(Object.assign({}, defaultPresetColors), {
    // Color
    colorPrimary: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1677ff",
    colorLink: "",
    colorTextBase: "",
    colorBgBase: "",
    // Font
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
    fontSize: 14,
    // Line
    lineWidth: 1,
    lineType: "solid",
    // Motion
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
    motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    // Radius
    borderRadius: 6,
    // Size
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    // Control Base
    controlHeight: 32,
    // zIndex
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    // Image
    opacityImage: 1,
    // Wireframe
    wireframe: false,
    // Motion
    motion: true
  });
  function genColorMapToken(seed, _ref7) {
    let {
      generateColorPalettes: generateColorPalettes2,
      generateNeutralColorPalettes: generateNeutralColorPalettes2
    } = _ref7;
    const {
      colorSuccess: colorSuccessBase,
      colorWarning: colorWarningBase,
      colorError: colorErrorBase,
      colorInfo: colorInfoBase,
      colorPrimary: colorPrimaryBase,
      colorBgBase,
      colorTextBase
    } = seed;
    const primaryColors = generateColorPalettes2(colorPrimaryBase);
    const successColors = generateColorPalettes2(colorSuccessBase);
    const warningColors = generateColorPalettes2(colorWarningBase);
    const errorColors = generateColorPalettes2(colorErrorBase);
    const infoColors = generateColorPalettes2(colorInfoBase);
    const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
    const colorLink = seed.colorLink || seed.colorInfo;
    const linkColors = generateColorPalettes2(colorLink);
    return Object.assign(Object.assign({}, neutralColors), {
      colorPrimaryBg: primaryColors[1],
      colorPrimaryBgHover: primaryColors[2],
      colorPrimaryBorder: primaryColors[3],
      colorPrimaryBorderHover: primaryColors[4],
      colorPrimaryHover: primaryColors[5],
      colorPrimary: primaryColors[6],
      colorPrimaryActive: primaryColors[7],
      colorPrimaryTextHover: primaryColors[8],
      colorPrimaryText: primaryColors[9],
      colorPrimaryTextActive: primaryColors[10],
      colorSuccessBg: successColors[1],
      colorSuccessBgHover: successColors[2],
      colorSuccessBorder: successColors[3],
      colorSuccessBorderHover: successColors[4],
      colorSuccessHover: successColors[4],
      colorSuccess: successColors[6],
      colorSuccessActive: successColors[7],
      colorSuccessTextHover: successColors[8],
      colorSuccessText: successColors[9],
      colorSuccessTextActive: successColors[10],
      colorErrorBg: errorColors[1],
      colorErrorBgHover: errorColors[2],
      colorErrorBgActive: errorColors[3],
      colorErrorBorder: errorColors[3],
      colorErrorBorderHover: errorColors[4],
      colorErrorHover: errorColors[5],
      colorError: errorColors[6],
      colorErrorActive: errorColors[7],
      colorErrorTextHover: errorColors[8],
      colorErrorText: errorColors[9],
      colorErrorTextActive: errorColors[10],
      colorWarningBg: warningColors[1],
      colorWarningBgHover: warningColors[2],
      colorWarningBorder: warningColors[3],
      colorWarningBorderHover: warningColors[4],
      colorWarningHover: warningColors[4],
      colorWarning: warningColors[6],
      colorWarningActive: warningColors[7],
      colorWarningTextHover: warningColors[8],
      colorWarningText: warningColors[9],
      colorWarningTextActive: warningColors[10],
      colorInfoBg: infoColors[1],
      colorInfoBgHover: infoColors[2],
      colorInfoBorder: infoColors[3],
      colorInfoBorderHover: infoColors[4],
      colorInfoHover: infoColors[4],
      colorInfo: infoColors[6],
      colorInfoActive: infoColors[7],
      colorInfoTextHover: infoColors[8],
      colorInfoText: infoColors[9],
      colorInfoTextActive: infoColors[10],
      colorLinkHover: linkColors[4],
      colorLink: linkColors[6],
      colorLinkActive: linkColors[7],
      colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
      colorWhite: "#fff"
    });
  }
  const genRadius = (radiusBase) => {
    let radiusLG = radiusBase;
    let radiusSM = radiusBase;
    let radiusXS = radiusBase;
    let radiusOuter = radiusBase;
    if (radiusBase < 6 && radiusBase >= 5) {
      radiusLG = radiusBase + 1;
    } else if (radiusBase < 16 && radiusBase >= 6) {
      radiusLG = radiusBase + 2;
    } else if (radiusBase >= 16) {
      radiusLG = 16;
    }
    if (radiusBase < 7 && radiusBase >= 5) {
      radiusSM = 4;
    } else if (radiusBase < 8 && radiusBase >= 7) {
      radiusSM = 5;
    } else if (radiusBase < 14 && radiusBase >= 8) {
      radiusSM = 6;
    } else if (radiusBase < 16 && radiusBase >= 14) {
      radiusSM = 7;
    } else if (radiusBase >= 16) {
      radiusSM = 8;
    }
    if (radiusBase < 6 && radiusBase >= 2) {
      radiusXS = 1;
    } else if (radiusBase >= 6) {
      radiusXS = 2;
    }
    if (radiusBase > 4 && radiusBase < 8) {
      radiusOuter = 4;
    } else if (radiusBase >= 8) {
      radiusOuter = 6;
    }
    return {
      borderRadius: radiusBase,
      borderRadiusXS: radiusXS,
      borderRadiusSM: radiusSM,
      borderRadiusLG: radiusLG,
      borderRadiusOuter: radiusOuter
    };
  };
  function genCommonMapToken(token2) {
    const {
      motionUnit,
      motionBase,
      borderRadius,
      lineWidth
    } = token2;
    return Object.assign({
      // motion
      motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
      motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
      motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
      // line
      lineWidthBold: lineWidth + 1
    }, genRadius(borderRadius));
  }
  const genControlHeight = (token2) => {
    const {
      controlHeight
    } = token2;
    return {
      controlHeightSM: controlHeight * 0.75,
      controlHeightXS: controlHeight * 0.5,
      controlHeightLG: controlHeight * 1.25
    };
  };
  function getLineHeight(fontSize) {
    return (fontSize + 8) / fontSize;
  }
  function getFontSizes(base) {
    const fontSizes = new Array(10).fill(null).map((_, index2) => {
      const i2 = index2 - 1;
      const baseSize = base * Math.pow(2.71828, i2 / 5);
      const intSize = index2 > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
      return Math.floor(intSize / 2) * 2;
    });
    fontSizes[1] = base;
    return fontSizes.map((size2) => ({
      size: size2,
      lineHeight: getLineHeight(size2)
    }));
  }
  const genFontMapToken = (fontSize) => {
    const fontSizePairs = getFontSizes(fontSize);
    const fontSizes = fontSizePairs.map((pair) => pair.size);
    const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
    const fontSizeMD = fontSizes[1];
    const fontSizeSM = fontSizes[0];
    const fontSizeLG = fontSizes[2];
    const lineHeight = lineHeights[1];
    const lineHeightSM = lineHeights[0];
    const lineHeightLG = lineHeights[2];
    return {
      fontSizeSM,
      fontSize: fontSizeMD,
      fontSizeLG,
      fontSizeXL: fontSizes[3],
      fontSizeHeading1: fontSizes[6],
      fontSizeHeading2: fontSizes[5],
      fontSizeHeading3: fontSizes[4],
      fontSizeHeading4: fontSizes[3],
      fontSizeHeading5: fontSizes[2],
      lineHeight,
      lineHeightLG,
      lineHeightSM,
      fontHeight: Math.round(lineHeight * fontSizeMD),
      fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
      fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
      lineHeightHeading1: lineHeights[6],
      lineHeightHeading2: lineHeights[5],
      lineHeightHeading3: lineHeights[4],
      lineHeightHeading4: lineHeights[3],
      lineHeightHeading5: lineHeights[2]
    };
  };
  function genSizeMapToken$1(token2) {
    const {
      sizeUnit,
      sizeStep
    } = token2;
    return {
      sizeXXL: sizeUnit * (sizeStep + 8),
      // 48
      sizeXL: sizeUnit * (sizeStep + 4),
      // 32
      sizeLG: sizeUnit * (sizeStep + 2),
      // 24
      sizeMD: sizeUnit * (sizeStep + 1),
      // 20
      sizeMS: sizeUnit * sizeStep,
      // 16
      size: sizeUnit * sizeStep,
      // 16
      sizeSM: sizeUnit * (sizeStep - 1),
      // 12
      sizeXS: sizeUnit * (sizeStep - 2),
      // 8
      sizeXXS: sizeUnit * (sizeStep - 3)
      // 4
    };
  }
  const getAlphaColor$2 = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
  const getSolidColor$1 = (baseColor, brightness) => {
    const instance = new TinyColor(baseColor);
    return instance.darken(brightness).toHexString();
  };
  const generateColorPalettes$1 = (baseColor) => {
    const colors = generate$1(baseColor);
    return {
      1: colors[0],
      2: colors[1],
      3: colors[2],
      4: colors[3],
      5: colors[4],
      6: colors[5],
      7: colors[6],
      8: colors[4],
      9: colors[5],
      10: colors[6]
      // 8: colors[7],
      // 9: colors[8],
      // 10: colors[9],
    };
  };
  const generateNeutralColorPalettes$1 = (bgBaseColor, textBaseColor) => {
    const colorBgBase = bgBaseColor || "#fff";
    const colorTextBase = textBaseColor || "#000";
    return {
      colorBgBase,
      colorTextBase,
      colorText: getAlphaColor$2(colorTextBase, 0.88),
      colorTextSecondary: getAlphaColor$2(colorTextBase, 0.65),
      colorTextTertiary: getAlphaColor$2(colorTextBase, 0.45),
      colorTextQuaternary: getAlphaColor$2(colorTextBase, 0.25),
      colorFill: getAlphaColor$2(colorTextBase, 0.15),
      colorFillSecondary: getAlphaColor$2(colorTextBase, 0.06),
      colorFillTertiary: getAlphaColor$2(colorTextBase, 0.04),
      colorFillQuaternary: getAlphaColor$2(colorTextBase, 0.02),
      colorBgLayout: getSolidColor$1(colorBgBase, 4),
      colorBgContainer: getSolidColor$1(colorBgBase, 0),
      colorBgElevated: getSolidColor$1(colorBgBase, 0),
      colorBgSpotlight: getAlphaColor$2(colorTextBase, 0.85),
      colorBgBlur: "transparent",
      colorBorder: getSolidColor$1(colorBgBase, 15),
      colorBorderSecondary: getSolidColor$1(colorBgBase, 6)
    };
  };
  function derivative$2(token2) {
    const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
      const colors = generate$1(token2[colorKey]);
      return new Array(10).fill(1).reduce((prev2, _, i2) => {
        prev2[`${colorKey}-${i2 + 1}`] = colors[i2];
        prev2[`${colorKey}${i2 + 1}`] = colors[i2];
        return prev2;
      }, {});
    }).reduce((prev2, cur) => {
      prev2 = Object.assign(Object.assign({}, prev2), cur);
      return prev2;
    }, {});
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, token2), colorPalettes), genColorMapToken(token2, {
      generateColorPalettes: generateColorPalettes$1,
      generateNeutralColorPalettes: generateNeutralColorPalettes$1
    })), genFontMapToken(token2.fontSize)), genSizeMapToken$1(token2)), genControlHeight(token2)), genCommonMapToken(token2));
  }
  const defaultTheme = createTheme(derivative$2);
  const defaultConfig = {
    token: seedToken,
    override: {
      override: seedToken
    },
    hashed: true
  };
  const DesignTokenContext = /* @__PURE__ */ React.createContext(defaultConfig);
  const defaultIconPrefixCls = "anticon";
  const defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    return suffixCls ? `ant-${suffixCls}` : "ant";
  };
  const ConfigContext = /* @__PURE__ */ React__namespace.createContext({
    // We provide a default function for Context without provider
    getPrefixCls: defaultGetPrefixCls,
    iconPrefixCls: defaultIconPrefixCls
  });
  const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
  function getStyle$1(globalPrefixCls2, theme2) {
    const variables = {};
    const formatColor = (color, updater) => {
      let clone = color.clone();
      clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
      return clone.toRgbString();
    };
    const fillColor = (colorVal, type4) => {
      const baseColor = new TinyColor(colorVal);
      const colorPalettes = generate$1(baseColor.toRgbString());
      variables[`${type4}-color`] = formatColor(baseColor);
      variables[`${type4}-color-disabled`] = colorPalettes[1];
      variables[`${type4}-color-hover`] = colorPalettes[4];
      variables[`${type4}-color-active`] = colorPalettes[6];
      variables[`${type4}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
      variables[`${type4}-color-deprecated-bg`] = colorPalettes[0];
      variables[`${type4}-color-deprecated-border`] = colorPalettes[2];
    };
    if (theme2.primaryColor) {
      fillColor(theme2.primaryColor, "primary");
      const primaryColor = new TinyColor(theme2.primaryColor);
      const primaryColors = generate$1(primaryColor.toRgbString());
      primaryColors.forEach((color, index2) => {
        variables[`primary-${index2 + 1}`] = color;
      });
      variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, (c2) => c2.lighten(35));
      variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, (c2) => c2.lighten(20));
      variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, (c2) => c2.tint(20));
      variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, (c2) => c2.tint(50));
      variables["primary-color-deprecated-f-12"] = formatColor(primaryColor, (c2) => c2.setAlpha(c2.getAlpha() * 0.12));
      const primaryActiveColor = new TinyColor(primaryColors[0]);
      variables["primary-color-active-deprecated-f-30"] = formatColor(primaryActiveColor, (c2) => c2.setAlpha(c2.getAlpha() * 0.3));
      variables["primary-color-active-deprecated-d-02"] = formatColor(primaryActiveColor, (c2) => c2.darken(2));
    }
    if (theme2.successColor) {
      fillColor(theme2.successColor, "success");
    }
    if (theme2.warningColor) {
      fillColor(theme2.warningColor, "warning");
    }
    if (theme2.errorColor) {
      fillColor(theme2.errorColor, "error");
    }
    if (theme2.infoColor) {
      fillColor(theme2.infoColor, "info");
    }
    const cssList = Object.keys(variables).map((key) => `--${globalPrefixCls2}-${key}: ${variables[key]};`);
    return `
  :root {
    ${cssList.join("\n")}
  }
  `.trim();
  }
  function registerTheme(globalPrefixCls2, theme2) {
    const style2 = getStyle$1(globalPrefixCls2, theme2);
    if (canUseDom()) {
      updateCSS(style2, `${dynamicStyleMark}-dynamic-theme`);
    }
  }
  const DisabledContext = /* @__PURE__ */ React__namespace.createContext(false);
  const DisabledContextProvider = (_ref7) => {
    let {
      children,
      disabled
    } = _ref7;
    const originDisabled = React__namespace.useContext(DisabledContext);
    return /* @__PURE__ */ React__namespace.createElement(DisabledContext.Provider, {
      value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
    }, children);
  };
  const SizeContext = /* @__PURE__ */ React__namespace.createContext(void 0);
  const SizeContextProvider = (_ref7) => {
    let {
      children,
      size: size2
    } = _ref7;
    const originSize = React__namespace.useContext(SizeContext);
    return /* @__PURE__ */ React__namespace.createElement(SizeContext.Provider, {
      value: size2 || originSize
    }, children);
  };
  function useConfig() {
    const componentDisabled = React.useContext(DisabledContext);
    const componentSize = React.useContext(SizeContext);
    return {
      componentDisabled,
      componentSize
    };
  }
  const PresetColors = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
  const version$1 = "5.18.0";
  function isStableColor(color) {
    return color >= 0 && color <= 255;
  }
  function getAlphaColor$1(frontColor, backgroundColor) {
    const {
      r: fR,
      g: fG,
      b: fB,
      a: originAlpha
    } = new TinyColor(frontColor).toRgb();
    if (originAlpha < 1) {
      return frontColor;
    }
    const {
      r: bR,
      g: bG,
      b: bB
    } = new TinyColor(backgroundColor).toRgb();
    for (let fA = 0.01; fA <= 1; fA += 0.01) {
      const r2 = Math.round((fR - bR * (1 - fA)) / fA);
      const g2 = Math.round((fG - bG * (1 - fA)) / fA);
      const b2 = Math.round((fB - bB * (1 - fA)) / fA);
      if (isStableColor(r2) && isStableColor(g2) && isStableColor(b2)) {
        return new TinyColor({
          r: r2,
          g: g2,
          b: b2,
          a: Math.round(fA * 100) / 100
        }).toRgbString();
      }
    }
    return new TinyColor({
      r: fR,
      g: fG,
      b: fB,
      a: 1
    }).toRgbString();
  }
  var __rest$l = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  function formatToken(derivativeToken) {
    const {
      override
    } = derivativeToken, restToken = __rest$l(derivativeToken, ["override"]);
    const overrideTokens = Object.assign({}, override);
    Object.keys(seedToken).forEach((token2) => {
      delete overrideTokens[token2];
    });
    const mergedToken = Object.assign(Object.assign({}, restToken), overrideTokens);
    const screenXS = 480;
    const screenSM = 576;
    const screenMD = 768;
    const screenLG = 992;
    const screenXL = 1200;
    const screenXXL = 1600;
    if (mergedToken.motion === false) {
      const fastDuration = "0s";
      mergedToken.motionDurationFast = fastDuration;
      mergedToken.motionDurationMid = fastDuration;
      mergedToken.motionDurationSlow = fastDuration;
    }
    const aliasToken = Object.assign(Object.assign(Object.assign({}, mergedToken), {
      // ============== Background ============== //
      colorFillContent: mergedToken.colorFillSecondary,
      colorFillContentHover: mergedToken.colorFill,
      colorFillAlter: mergedToken.colorFillQuaternary,
      colorBgContainerDisabled: mergedToken.colorFillTertiary,
      // ============== Split ============== //
      colorBorderBg: mergedToken.colorBgContainer,
      colorSplit: getAlphaColor$1(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
      // ============== Text ============== //
      colorTextPlaceholder: mergedToken.colorTextQuaternary,
      colorTextDisabled: mergedToken.colorTextQuaternary,
      colorTextHeading: mergedToken.colorText,
      colorTextLabel: mergedToken.colorTextSecondary,
      colorTextDescription: mergedToken.colorTextTertiary,
      colorTextLightSolid: mergedToken.colorWhite,
      colorHighlight: mergedToken.colorError,
      colorBgTextHover: mergedToken.colorFillSecondary,
      colorBgTextActive: mergedToken.colorFill,
      colorIcon: mergedToken.colorTextTertiary,
      colorIconHover: mergedToken.colorText,
      colorErrorOutline: getAlphaColor$1(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
      colorWarningOutline: getAlphaColor$1(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
      // Font
      fontSizeIcon: mergedToken.fontSizeSM,
      // Line
      lineWidthFocus: mergedToken.lineWidth * 4,
      // Control
      lineWidth: mergedToken.lineWidth,
      controlOutlineWidth: mergedToken.lineWidth * 2,
      // Checkbox size and expand icon size
      controlInteractiveSize: mergedToken.controlHeight / 2,
      controlItemBgHover: mergedToken.colorFillTertiary,
      controlItemBgActive: mergedToken.colorPrimaryBg,
      controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
      controlItemBgActiveDisabled: mergedToken.colorFill,
      controlTmpOutline: mergedToken.colorFillQuaternary,
      controlOutline: getAlphaColor$1(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
      lineType: mergedToken.lineType,
      borderRadius: mergedToken.borderRadius,
      borderRadiusXS: mergedToken.borderRadiusXS,
      borderRadiusSM: mergedToken.borderRadiusSM,
      borderRadiusLG: mergedToken.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: "none",
      linkHoverDecoration: "none",
      linkFocusDecoration: "none",
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: mergedToken.sizeXXS,
      paddingXS: mergedToken.sizeXS,
      paddingSM: mergedToken.sizeSM,
      padding: mergedToken.size,
      paddingMD: mergedToken.sizeMD,
      paddingLG: mergedToken.sizeLG,
      paddingXL: mergedToken.sizeXL,
      paddingContentHorizontalLG: mergedToken.sizeLG,
      paddingContentVerticalLG: mergedToken.sizeMS,
      paddingContentHorizontal: mergedToken.sizeMS,
      paddingContentVertical: mergedToken.sizeSM,
      paddingContentHorizontalSM: mergedToken.size,
      paddingContentVerticalSM: mergedToken.sizeXS,
      marginXXS: mergedToken.sizeXXS,
      marginXS: mergedToken.sizeXS,
      marginSM: mergedToken.sizeSM,
      margin: mergedToken.size,
      marginMD: mergedToken.sizeMD,
      marginLG: mergedToken.sizeLG,
      marginXL: mergedToken.sizeXL,
      marginXXL: mergedToken.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS,
      screenXSMin: screenXS,
      screenXSMax: screenSM - 1,
      screenSM,
      screenSMMin: screenSM,
      screenSMMax: screenMD - 1,
      screenMD,
      screenMDMin: screenMD,
      screenMDMax: screenLG - 1,
      screenLG,
      screenLGMin: screenLG,
      screenLGMax: screenXL - 1,
      screenXL,
      screenXLMin: screenXL,
      screenXLMax: screenXXL - 1,
      screenXXL,
      screenXXLMin: screenXXL,
      boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
      boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
    }), overrideTokens);
    return aliasToken;
  }
  var __rest$k = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  const unitless = {
    lineHeight: true,
    lineHeightSM: true,
    lineHeightLG: true,
    lineHeightHeading1: true,
    lineHeightHeading2: true,
    lineHeightHeading3: true,
    lineHeightHeading4: true,
    lineHeightHeading5: true,
    opacityLoading: true,
    fontWeightStrong: true,
    zIndexPopupBase: true,
    zIndexBase: true
  };
  const ignore = {
    size: true,
    sizeSM: true,
    sizeLG: true,
    sizeMD: true,
    sizeXS: true,
    sizeXXS: true,
    sizeMS: true,
    sizeXL: true,
    sizeXXL: true,
    sizeUnit: true,
    sizeStep: true,
    motionBase: true,
    motionUnit: true
  };
  const preserve = {
    screenXS: true,
    screenXSMin: true,
    screenXSMax: true,
    screenSM: true,
    screenSMMin: true,
    screenSMMax: true,
    screenMD: true,
    screenMDMin: true,
    screenMDMax: true,
    screenLG: true,
    screenLGMin: true,
    screenLGMax: true,
    screenXL: true,
    screenXLMin: true,
    screenXLMax: true,
    screenXXL: true,
    screenXXLMin: true
  };
  const getComputedToken = (originToken, overrideToken, theme2) => {
    const derivativeToken = theme2.getDerivativeToken(originToken);
    const {
      override
    } = overrideToken, components = __rest$k(overrideToken, ["override"]);
    let mergedDerivativeToken = Object.assign(Object.assign({}, derivativeToken), {
      override
    });
    mergedDerivativeToken = formatToken(mergedDerivativeToken);
    if (components) {
      Object.entries(components).forEach((_ref7) => {
        let [key, value] = _ref7;
        const {
          theme: componentTheme
        } = value, componentTokens = __rest$k(value, ["theme"]);
        let mergedComponentToken = componentTokens;
        if (componentTheme) {
          mergedComponentToken = getComputedToken(Object.assign(Object.assign({}, mergedDerivativeToken), componentTokens), {
            override: componentTokens
          }, componentTheme);
        }
        mergedDerivativeToken[key] = mergedComponentToken;
      });
    }
    return mergedDerivativeToken;
  };
  function useToken$1() {
    const {
      token: rootDesignToken,
      hashed,
      theme: theme2,
      override,
      cssVar
    } = React.useContext(DesignTokenContext);
    const salt = `${version$1}-${hashed || ""}`;
    const mergedTheme = theme2 || defaultTheme;
    const [token2, hashId, realToken] = useCacheToken(mergedTheme, [seedToken, rootDesignToken], {
      salt,
      override,
      getComputedToken,
      // formatToken will not be consumed after 1.15.0 with getComputedToken.
      // But token will break if @ant-design/cssinjs is under 1.15.0 without it
      formatToken,
      cssVar: cssVar && {
        prefix: cssVar.prefix,
        key: cssVar.key,
        unitless,
        ignore,
        preserve
      }
    });
    return [mergedTheme, realToken, hashed ? hashId : "", token2, cssVar];
  }
  function _callSuper(t2, o2, e2) {
    return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t2, _isNativeReflectConstruct() ? Reflect.construct(o2, [], _getPrototypeOf(t2).constructor) : o2.apply(t2, e2));
  }
  let AbstractCalculator = /* @__PURE__ */ _createClass(function AbstractCalculator2() {
    _classCallCheck(this, AbstractCalculator2);
  });
  const CALC_UNIT = "CALC_UNIT";
  const regexp$1 = new RegExp(CALC_UNIT, "g");
  function unit(value) {
    if (typeof value === "number") {
      return `${value}${CALC_UNIT}`;
    }
    return value;
  }
  let CSSCalculator = /* @__PURE__ */ function(_AbstractCalculator) {
    function CSSCalculator2(num) {
      var _this;
      _classCallCheck(this, CSSCalculator2);
      _this = _callSuper(this, CSSCalculator2);
      _this.result = "";
      if (num instanceof CSSCalculator2) {
        _this.result = `(${num.result})`;
      } else if (typeof num === "number") {
        _this.result = unit(num);
      } else if (typeof num === "string") {
        _this.result = num;
      }
      return _this;
    }
    _inherits(CSSCalculator2, _AbstractCalculator);
    return _createClass(CSSCalculator2, [{
      key: "add",
      value: function add(num) {
        if (num instanceof CSSCalculator2) {
          this.result = `${this.result} + ${num.getResult()}`;
        } else if (typeof num === "number" || typeof num === "string") {
          this.result = `${this.result} + ${unit(num)}`;
        }
        this.lowPriority = true;
        return this;
      }
    }, {
      key: "sub",
      value: function sub(num) {
        if (num instanceof CSSCalculator2) {
          this.result = `${this.result} - ${num.getResult()}`;
        } else if (typeof num === "number" || typeof num === "string") {
          this.result = `${this.result} - ${unit(num)}`;
        }
        this.lowPriority = true;
        return this;
      }
    }, {
      key: "mul",
      value: function mul(num) {
        if (this.lowPriority) {
          this.result = `(${this.result})`;
        }
        if (num instanceof CSSCalculator2) {
          this.result = `${this.result} * ${num.getResult(true)}`;
        } else if (typeof num === "number" || typeof num === "string") {
          this.result = `${this.result} * ${num}`;
        }
        this.lowPriority = false;
        return this;
      }
    }, {
      key: "div",
      value: function div(num) {
        if (this.lowPriority) {
          this.result = `(${this.result})`;
        }
        if (num instanceof CSSCalculator2) {
          this.result = `${this.result} / ${num.getResult(true)}`;
        } else if (typeof num === "number" || typeof num === "string") {
          this.result = `${this.result} / ${num}`;
        }
        this.lowPriority = false;
        return this;
      }
    }, {
      key: "getResult",
      value: function getResult(force) {
        return this.lowPriority || force ? `(${this.result})` : this.result;
      }
    }, {
      key: "equal",
      value: function equal(options) {
        const {
          unit: cssUnit = true
        } = options || {};
        this.result = this.result.replace(regexp$1, cssUnit ? "px" : "");
        if (typeof this.lowPriority !== "undefined") {
          return `calc(${this.result})`;
        }
        return this.result;
      }
    }]);
  }(AbstractCalculator);
  let NumCalculator = /* @__PURE__ */ function(_AbstractCalculator) {
    function NumCalculator2(num) {
      var _this;
      _classCallCheck(this, NumCalculator2);
      _this = _callSuper(this, NumCalculator2);
      _this.result = 0;
      if (num instanceof NumCalculator2) {
        _this.result = num.result;
      } else if (typeof num === "number") {
        _this.result = num;
      }
      return _this;
    }
    _inherits(NumCalculator2, _AbstractCalculator);
    return _createClass(NumCalculator2, [{
      key: "add",
      value: function add(num) {
        if (num instanceof NumCalculator2) {
          this.result += num.result;
        } else if (typeof num === "number") {
          this.result += num;
        }
        return this;
      }
    }, {
      key: "sub",
      value: function sub(num) {
        if (num instanceof NumCalculator2) {
          this.result -= num.result;
        } else if (typeof num === "number") {
          this.result -= num;
        }
        return this;
      }
    }, {
      key: "mul",
      value: function mul(num) {
        if (num instanceof NumCalculator2) {
          this.result *= num.result;
        } else if (typeof num === "number") {
          this.result *= num;
        }
        return this;
      }
    }, {
      key: "div",
      value: function div(num) {
        if (num instanceof NumCalculator2) {
          this.result /= num.result;
        } else if (typeof num === "number") {
          this.result /= num;
        }
        return this;
      }
    }, {
      key: "equal",
      value: function equal() {
        return this.result;
      }
    }]);
  }(AbstractCalculator);
  const genCalc = (type4) => {
    const Calculator = type4 === "css" ? CSSCalculator : NumCalculator;
    return (num) => new Calculator(num);
  };
  function useEvent(callback) {
    var fnRef = React__namespace.useRef();
    fnRef.current = callback;
    var memoFn = React__namespace.useCallback(function() {
      var _fnRef$current;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
    }, []);
    return memoFn;
  }
  function useSafeState(defaultValue) {
    var destroyRef = React__namespace.useRef(false);
    var _React$useState = React__namespace.useState(defaultValue), _React$useState2 = _slicedToArray(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
    React__namespace.useEffect(function() {
      destroyRef.current = false;
      return function() {
        destroyRef.current = true;
      };
    }, []);
    function safeSetState(updater, ignoreDestroy) {
      if (ignoreDestroy && destroyRef.current) {
        return;
      }
      setValue(updater);
    }
    return [value, safeSetState];
  }
  function hasValue(value) {
    return value !== void 0;
  }
  function useMergedState(defaultStateValue, option) {
    var _ref7 = option || {}, defaultValue = _ref7.defaultValue, value = _ref7.value, onChange = _ref7.onChange, postState = _ref7.postState;
    var _useState = useSafeState(function() {
      if (hasValue(value)) {
        return value;
      } else if (hasValue(defaultValue)) {
        return typeof defaultValue === "function" ? defaultValue() : defaultValue;
      } else {
        return typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
      }
    }), _useState2 = _slicedToArray(_useState, 2), innerValue = _useState2[0], setInnerValue = _useState2[1];
    var mergedValue = value !== void 0 ? value : innerValue;
    var postMergedValue = postState ? postState(mergedValue) : mergedValue;
    var onChangeFn = useEvent(onChange);
    var _useState3 = useSafeState([mergedValue]), _useState4 = _slicedToArray(_useState3, 2), prevValue = _useState4[0], setPrevValue = _useState4[1];
    useLayoutUpdateEffect(function() {
      var prev2 = prevValue[0];
      if (innerValue !== prev2) {
        onChangeFn(innerValue, prev2);
      }
    }, [prevValue]);
    useLayoutUpdateEffect(function() {
      if (!hasValue(value)) {
        setInnerValue(value);
      }
    }, [value]);
    var triggerChange = useEvent(function(updater, ignoreDestroy) {
      setInnerValue(updater, ignoreDestroy);
      setPrevValue([mergedValue], ignoreDestroy);
    });
    return [postMergedValue, triggerChange];
  }
  const resetComponent = function(token2) {
    let needInheritFontFamily = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      color: token2.colorText,
      fontSize: token2.fontSize,
      // font-variant: @font-variant-base;
      lineHeight: token2.lineHeight,
      listStyle: "none",
      // font-feature-settings: @font-feature-settings-base;
      fontFamily: needInheritFontFamily ? "inherit" : token2.fontFamily
    };
  };
  const resetIcon = () => ({
    display: "inline-flex",
    alignItems: "center",
    color: "inherit",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
    verticalAlign: "-0.125em",
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "> *": {
      lineHeight: 1
    },
    svg: {
      display: "inline-block"
    }
  });
  const clearFix = () => ({
    // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
    "&::before": {
      display: "table",
      content: '""'
    },
    "&::after": {
      // https://github.com/ant-design/ant-design/issues/21864
      display: "table",
      clear: "both",
      content: '""'
    }
  });
  const genLinkStyle = (token2) => ({
    a: {
      color: token2.colorLink,
      textDecoration: token2.linkDecoration,
      backgroundColor: "transparent",
      // remove the gray background on active links in IE 10.
      outline: "none",
      cursor: "pointer",
      transition: `color ${token2.motionDurationSlow}`,
      "-webkit-text-decoration-skip": "objects",
      // remove gaps in links underline in iOS 8+ and Safari 8+.
      "&:hover": {
        color: token2.colorLinkHover
      },
      "&:active": {
        color: token2.colorLinkActive
      },
      [`&:active,
  &:hover`]: {
        textDecoration: token2.linkHoverDecoration,
        outline: 0
      },
      // https://github.com/ant-design/ant-design/issues/22503
      "&:focus": {
        textDecoration: token2.linkFocusDecoration,
        outline: 0
      },
      "&[disabled]": {
        color: token2.colorTextDisabled,
        cursor: "not-allowed"
      }
    }
  });
  const genCommonStyle = (token2, componentPrefixCls, rootCls, resetFont) => {
    const prefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
    const rootPrefixSelector = rootCls ? `.${rootCls}` : prefixSelector;
    const resetStyle = {
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      }
    };
    let resetFontStyle = {};
    if (resetFont !== false) {
      resetFontStyle = {
        fontFamily: token2.fontFamily,
        fontSize: token2.fontSize
      };
    }
    return {
      [rootPrefixSelector]: Object.assign(Object.assign(Object.assign({}, resetFontStyle), resetStyle), {
        [prefixSelector]: resetStyle
      })
    };
  };
  const genFocusOutline = (token2) => ({
    outline: `${unit$1(token2.lineWidthFocus)} solid ${token2.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: "outline-offset 0s, outline 0s"
  });
  const genFocusStyle = (token2) => ({
    "&:focus-visible": Object.assign({}, genFocusOutline(token2))
  });
  function genMaxMin(type4) {
    if (type4 === "js") {
      return {
        max: Math.max,
        min: Math.min
      };
    }
    return {
      max: function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return `max(${args.map((value) => unit$1(value)).join(",")})`;
      },
      min: function() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return `min(${args.map((value) => unit$1(value)).join(",")})`;
      }
    };
  }
  const enableStatistic = typeof CSSINJS_STATISTIC !== "undefined";
  let recording = true;
  function merge$1() {
    for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
      objs[_key] = arguments[_key];
    }
    if (!enableStatistic) {
      return Object.assign.apply(Object, [{}].concat(objs));
    }
    recording = false;
    const ret = {};
    objs.forEach((obj) => {
      const keys2 = Object.keys(obj);
      keys2.forEach((key) => {
        Object.defineProperty(ret, key, {
          configurable: true,
          enumerable: true,
          get: () => obj[key]
        });
      });
    });
    recording = true;
    return ret;
  }
  const statistic = {};
  function noop$1() {
  }
  const statisticToken = (token2) => {
    let tokenKeys2;
    let proxy2 = token2;
    let flush = noop$1;
    if (enableStatistic && typeof Proxy !== "undefined") {
      tokenKeys2 = /* @__PURE__ */ new Set();
      proxy2 = new Proxy(token2, {
        get(obj, prop) {
          if (recording) {
            tokenKeys2.add(prop);
          }
          return obj[prop];
        }
      });
      flush = (componentName, componentToken) => {
        var _a;
        statistic[componentName] = {
          global: Array.from(tokenKeys2),
          component: Object.assign(Object.assign({}, (_a = statistic[componentName]) === null || _a === void 0 ? void 0 : _a.component), componentToken)
        };
      };
    }
    return {
      token: proxy2,
      keys: tokenKeys2,
      flush
    };
  };
  const useResetIconStyle = (iconPrefixCls, csp) => {
    const [theme2, token2] = useToken$1();
    return useStyleRegister({
      theme: theme2,
      token: token2,
      hashId: "",
      path: ["ant-design-icons", iconPrefixCls],
      nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce,
      layer: {
        name: "antd"
      }
    }, () => [{
      [`.${iconPrefixCls}`]: Object.assign(Object.assign({}, resetIcon()), {
        [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
          display: "block"
        }
      })
    }]);
  };
  const getDefaultComponentToken = (component, token2, getDefaultToken) => {
    var _a;
    if (typeof getDefaultToken === "function") {
      return getDefaultToken(merge$1(token2, (_a = token2[component]) !== null && _a !== void 0 ? _a : {}));
    }
    return getDefaultToken !== null && getDefaultToken !== void 0 ? getDefaultToken : {};
  };
  const getComponentToken = (component, token2, defaultToken, options) => {
    const customToken = Object.assign({}, token2[component]);
    if (options === null || options === void 0 ? void 0 : options.deprecatedTokens) {
      const {
        deprecatedTokens
      } = options;
      deprecatedTokens.forEach((_ref7) => {
        let [oldTokenKey, newTokenKey] = _ref7;
        var _a;
        if ((customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey]) || (customToken === null || customToken === void 0 ? void 0 : customToken[newTokenKey])) {
          (_a = customToken[newTokenKey]) !== null && _a !== void 0 ? _a : customToken[newTokenKey] = customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey];
        }
      });
    }
    const mergedToken = Object.assign(Object.assign({}, defaultToken), customToken);
    Object.keys(mergedToken).forEach((key) => {
      if (mergedToken[key] === token2[key]) {
        delete mergedToken[key];
      }
    });
    return mergedToken;
  };
  const getCompVarPrefix = (component, prefix2) => `${[prefix2, component.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
  function genComponentStyleHook(componentName, styleFn, getDefaultToken) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const cells = Array.isArray(componentName) ? componentName : [componentName, componentName];
    const [component] = cells;
    const concatComponent = cells.join("-");
    return function(prefixCls) {
      let rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
      const [theme2, realToken, hashId, token2, cssVar] = useToken$1();
      const {
        getPrefixCls,
        iconPrefixCls,
        csp
      } = React.useContext(ConfigContext);
      const rootPrefixCls = getPrefixCls();
      const type4 = cssVar ? "css" : "js";
      const calc = genCalc(type4);
      const {
        max,
        min
      } = genMaxMin(type4);
      const sharedConfig = {
        theme: theme2,
        token: token2,
        hashId,
        nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce,
        clientOnly: options.clientOnly,
        layer: {
          name: "antd"
        },
        // antd is always at top of styles
        order: options.order || -999
      };
      useStyleRegister(Object.assign(Object.assign({}, sharedConfig), {
        clientOnly: false,
        path: ["Shared", rootPrefixCls]
      }), () => [{
        // Link
        "&": genLinkStyle(token2)
      }]);
      useResetIconStyle(iconPrefixCls, csp);
      const wrapSSR = useStyleRegister(Object.assign(Object.assign({}, sharedConfig), {
        path: [concatComponent, prefixCls, iconPrefixCls]
      }), () => {
        if (options.injectStyle === false) {
          return [];
        }
        const {
          token: proxyToken,
          flush
        } = statisticToken(token2);
        const defaultComponentToken = getDefaultComponentToken(component, realToken, getDefaultToken);
        const componentCls = `.${prefixCls}`;
        const componentToken = getComponentToken(component, realToken, defaultComponentToken, {
          deprecatedTokens: options.deprecatedTokens
        });
        if (cssVar) {
          Object.keys(defaultComponentToken).forEach((key) => {
            defaultComponentToken[key] = `var(${token2CSSVar(key, getCompVarPrefix(component, cssVar.prefix))})`;
          });
        }
        const mergedToken = merge$1(proxyToken, {
          componentCls,
          prefixCls,
          iconCls: `.${iconPrefixCls}`,
          antCls: `.${rootPrefixCls}`,
          calc,
          // @ts-ignore
          max,
          // @ts-ignore
          min
        }, cssVar ? defaultComponentToken : componentToken);
        const styleInterpolation = styleFn(mergedToken, {
          hashId,
          prefixCls,
          rootPrefixCls,
          iconPrefixCls
        });
        flush(component, componentToken);
        return [options.resetStyle === false ? null : genCommonStyle(mergedToken, prefixCls, rootCls, options.resetFont), styleInterpolation];
      });
      return [wrapSSR, hashId];
    };
  }
  const genSubStyleComponent = (componentName, styleFn, getDefaultToken, options) => {
    const useStyle2 = genComponentStyleHook(componentName, styleFn, getDefaultToken, Object.assign({
      resetStyle: false,
      // Sub Style should default after root one
      order: -998
    }, options));
    const StyledComponent = (_ref22) => {
      let {
        prefixCls,
        rootCls = prefixCls
      } = _ref22;
      useStyle2(prefixCls, rootCls);
      return null;
    };
    return StyledComponent;
  };
  const genCSSVarRegister = (component, getDefaultToken, options) => {
    function prefixToken(key) {
      return `${component}${key.slice(0, 1).toUpperCase()}${key.slice(1)}`;
    }
    const {
      unitless: originUnitless = {},
      injectStyle = true
    } = options !== null && options !== void 0 ? options : {};
    const compUnitless = {
      [prefixToken("zIndexPopup")]: true
    };
    Object.keys(originUnitless).forEach((key) => {
      compUnitless[prefixToken(key)] = originUnitless[key];
    });
    const CSSVarRegister = (_ref32) => {
      let {
        rootCls,
        cssVar
      } = _ref32;
      const [, realToken] = useToken$1();
      useCSSVarRegister({
        path: [component],
        prefix: cssVar.prefix,
        key: cssVar === null || cssVar === void 0 ? void 0 : cssVar.key,
        unitless: Object.assign(Object.assign({}, unitless), compUnitless),
        ignore,
        token: realToken,
        scope: rootCls
      }, () => {
        const defaultToken = getDefaultComponentToken(component, realToken, getDefaultToken);
        const componentToken = getComponentToken(component, realToken, defaultToken, {
          deprecatedTokens: options === null || options === void 0 ? void 0 : options.deprecatedTokens
        });
        Object.keys(defaultToken).forEach((key) => {
          componentToken[prefixToken(key)] = componentToken[key];
          delete componentToken[key];
        });
        return componentToken;
      });
      return null;
    };
    const useCSSVar = (rootCls) => {
      const [, , , , cssVar] = useToken$1();
      return [(node2) => injectStyle && cssVar ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CSSVarRegister, {
        rootCls,
        cssVar,
        component
      }), node2) : node2, cssVar === null || cssVar === void 0 ? void 0 : cssVar.key];
    };
    return useCSSVar;
  };
  const genStyleHooks = (component, styleFn, getDefaultToken, options) => {
    const useStyle2 = genComponentStyleHook(component, styleFn, getDefaultToken, options);
    const useCSSVar = genCSSVarRegister(Array.isArray(component) ? component[0] : component, getDefaultToken, options);
    return function(prefixCls) {
      let rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
      const [, hashId] = useStyle2(prefixCls, rootCls);
      const [wrapCSSVar, cssVarCls] = useCSSVar(rootCls);
      return [wrapCSSVar, hashId, cssVarCls];
    };
  };
  function genPresetColor(token2, genCss) {
    return PresetColors.reduce((prev2, colorKey) => {
      const lightColor = token2[`${colorKey}1`];
      const lightBorderColor = token2[`${colorKey}3`];
      const darkColor = token2[`${colorKey}6`];
      const textColor = token2[`${colorKey}7`];
      return Object.assign(Object.assign({}, prev2), genCss(colorKey, {
        lightColor,
        lightBorderColor,
        darkColor,
        textColor
      }));
    }, {});
  }
  const fullClone$1 = Object.assign({}, React__namespace);
  const {
    useId: useId$1
  } = fullClone$1;
  const useEmptyId = () => "";
  const useThemeKey = typeof useId$1 === "undefined" ? useEmptyId : useId$1;
  function useTheme(theme2, parentTheme, config) {
    var _a;
    devUseWarning();
    const themeConfig = theme2 || {};
    const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? Object.assign(Object.assign({}, defaultConfig), {
      hashed: (_a = parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.hashed) !== null && _a !== void 0 ? _a : defaultConfig.hashed,
      cssVar: parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.cssVar
    }) : parentTheme;
    const themeKey = useThemeKey();
    return useMemo(() => {
      var _a2, _b2;
      if (!theme2) {
        return parentTheme;
      }
      const mergedComponents = Object.assign({}, parentThemeConfig.components);
      Object.keys(theme2.components || {}).forEach((componentName) => {
        mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme2.components[componentName]);
      });
      const cssVarKey = `css-var-${themeKey.replace(/:/g, "")}`;
      const mergedCssVar = ((_a2 = themeConfig.cssVar) !== null && _a2 !== void 0 ? _a2 : parentThemeConfig.cssVar) && Object.assign(Object.assign(Object.assign({
        prefix: config === null || config === void 0 ? void 0 : config.prefixCls
      }, typeof parentThemeConfig.cssVar === "object" ? parentThemeConfig.cssVar : {}), typeof themeConfig.cssVar === "object" ? themeConfig.cssVar : {}), {
        key: typeof themeConfig.cssVar === "object" && ((_b2 = themeConfig.cssVar) === null || _b2 === void 0 ? void 0 : _b2.key) || cssVarKey
      });
      return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
        token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
        components: mergedComponents,
        cssVar: mergedCssVar
      });
    }, [themeConfig, parentThemeConfig], (prev2, next2) => prev2.some((prevTheme, index2) => {
      const nextTheme = next2[index2];
      return !isEqual(prevTheme, nextTheme, true);
    }));
  }
  var _excluded$g = ["children"];
  var Context$1 = /* @__PURE__ */ React__namespace.createContext({});
  function MotionProvider(_ref7) {
    var children = _ref7.children, props = _objectWithoutProperties(_ref7, _excluded$g);
    return /* @__PURE__ */ React__namespace.createElement(Context$1.Provider, {
      value: props
    }, children);
  }
  var DomWrapper = /* @__PURE__ */ function(_React$Component) {
    _inherits(DomWrapper2, _React$Component);
    var _super = _createSuper(DomWrapper2);
    function DomWrapper2() {
      _classCallCheck(this, DomWrapper2);
      return _super.apply(this, arguments);
    }
    _createClass(DomWrapper2, [{
      key: "render",
      value: function render2() {
        return this.props.children;
      }
    }]);
    return DomWrapper2;
  }(React__namespace.Component);
  var STATUS_NONE = "none";
  var STATUS_APPEAR = "appear";
  var STATUS_ENTER = "enter";
  var STATUS_LEAVE = "leave";
  var STEP_NONE = "none";
  var STEP_PREPARE = "prepare";
  var STEP_START = "start";
  var STEP_ACTIVE = "active";
  var STEP_ACTIVATED = "end";
  var STEP_PREPARED = "prepared";
  function makePrefixMap(styleProp, eventName) {
    var prefixes = {};
    prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
    prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
    prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
    prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
    prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
    return prefixes;
  }
  function getVendorPrefixes(domSupport, win) {
    var prefixes = {
      animationend: makePrefixMap("Animation", "AnimationEnd"),
      transitionend: makePrefixMap("Transition", "TransitionEnd")
    };
    if (domSupport) {
      if (!("AnimationEvent" in win)) {
        delete prefixes.animationend.animation;
      }
      if (!("TransitionEvent" in win)) {
        delete prefixes.transitionend.transition;
      }
    }
    return prefixes;
  }
  var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== "undefined" ? window : {});
  var style = {};
  if (canUseDom()) {
    var _document$createEleme = document.createElement("div");
    style = _document$createEleme.style;
  }
  var prefixedEventNames = {};
  function getVendorPrefixedEventName(eventName) {
    if (prefixedEventNames[eventName]) {
      return prefixedEventNames[eventName];
    }
    var prefixMap = vendorPrefixes[eventName];
    if (prefixMap) {
      var stylePropList = Object.keys(prefixMap);
      var len = stylePropList.length;
      for (var i2 = 0; i2 < len; i2 += 1) {
        var styleProp = stylePropList[i2];
        if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
          prefixedEventNames[eventName] = prefixMap[styleProp];
          return prefixedEventNames[eventName];
        }
      }
    }
    return "";
  }
  var internalAnimationEndName = getVendorPrefixedEventName("animationend");
  var internalTransitionEndName = getVendorPrefixedEventName("transitionend");
  var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
  var animationEndName = internalAnimationEndName || "animationend";
  var transitionEndName = internalTransitionEndName || "transitionend";
  function getTransitionName$1(transitionName, transitionType) {
    if (!transitionName)
      return null;
    if (_typeof(transitionName) === "object") {
      var type4 = transitionType.replace(/-\w/g, function(match2) {
        return match2[1].toUpperCase();
      });
      return transitionName[type4];
    }
    return "".concat(transitionName, "-").concat(transitionType);
  }
  const useDomMotionEvents = function(onInternalMotionEnd) {
    var cacheElementRef = React.useRef();
    function removeMotionEvents(element) {
      if (element) {
        element.removeEventListener(transitionEndName, onInternalMotionEnd);
        element.removeEventListener(animationEndName, onInternalMotionEnd);
      }
    }
    function patchMotionEvents(element) {
      if (cacheElementRef.current && cacheElementRef.current !== element) {
        removeMotionEvents(cacheElementRef.current);
      }
      if (element && element !== cacheElementRef.current) {
        element.addEventListener(transitionEndName, onInternalMotionEnd);
        element.addEventListener(animationEndName, onInternalMotionEnd);
        cacheElementRef.current = element;
      }
    }
    React__namespace.useEffect(function() {
      return function() {
        removeMotionEvents(cacheElementRef.current);
      };
    }, []);
    return [patchMotionEvents, removeMotionEvents];
  };
  var useIsomorphicLayoutEffect = canUseDom() ? React.useLayoutEffect : React.useEffect;
  const useNextFrame = function() {
    var nextFrameRef = React__namespace.useRef(null);
    function cancelNextFrame() {
      wrapperRaf.cancel(nextFrameRef.current);
    }
    function nextFrame(callback) {
      var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
      cancelNextFrame();
      var nextFrameId = wrapperRaf(function() {
        if (delay <= 1) {
          callback({
            isCanceled: function isCanceled() {
              return nextFrameId !== nextFrameRef.current;
            }
          });
        } else {
          nextFrame(callback, delay - 1);
        }
      });
      nextFrameRef.current = nextFrameId;
    }
    React__namespace.useEffect(function() {
      return function() {
        cancelNextFrame();
      };
    }, []);
    return [nextFrame, cancelNextFrame];
  };
  var FULL_STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
  var SIMPLE_STEP_QUEUE = [STEP_PREPARE, STEP_PREPARED];
  var SkipStep = false;
  var DoStep = true;
  function isActive(step) {
    return step === STEP_ACTIVE || step === STEP_ACTIVATED;
  }
  const useStepQueue = function(status, prepareOnly, callback) {
    var _useState = useSafeState(STEP_NONE), _useState2 = _slicedToArray(_useState, 2), step = _useState2[0], setStep = _useState2[1];
    var _useNextFrame = useNextFrame(), _useNextFrame2 = _slicedToArray(_useNextFrame, 2), nextFrame = _useNextFrame2[0], cancelNextFrame = _useNextFrame2[1];
    function startQueue() {
      setStep(STEP_PREPARE, true);
    }
    var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
    useIsomorphicLayoutEffect(function() {
      if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
        var index2 = STEP_QUEUE.indexOf(step);
        var nextStep = STEP_QUEUE[index2 + 1];
        var result = callback(step);
        if (result === SkipStep) {
          setStep(nextStep, true);
        } else if (nextStep) {
          nextFrame(function(info) {
            function doNext() {
              if (info.isCanceled())
                return;
              setStep(nextStep, true);
            }
            if (result === true) {
              doNext();
            } else {
              Promise.resolve(result).then(doNext);
            }
          });
        }
      }
    }, [status, step]);
    React__namespace.useEffect(function() {
      return function() {
        cancelNextFrame();
      };
    }, []);
    return [startQueue, step];
  };
  function useStatus(supportMotion, visible, getElement, _ref7) {
    var _ref$motionEnter = _ref7.motionEnter, motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter, _ref$motionAppear = _ref7.motionAppear, motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear, _ref$motionLeave = _ref7.motionLeave, motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave, motionDeadline = _ref7.motionDeadline, motionLeaveImmediately = _ref7.motionLeaveImmediately, onAppearPrepare = _ref7.onAppearPrepare, onEnterPrepare = _ref7.onEnterPrepare, onLeavePrepare = _ref7.onLeavePrepare, onAppearStart = _ref7.onAppearStart, onEnterStart = _ref7.onEnterStart, onLeaveStart = _ref7.onLeaveStart, onAppearActive = _ref7.onAppearActive, onEnterActive = _ref7.onEnterActive, onLeaveActive = _ref7.onLeaveActive, onAppearEnd = _ref7.onAppearEnd, onEnterEnd = _ref7.onEnterEnd, onLeaveEnd = _ref7.onLeaveEnd, onVisibleChanged = _ref7.onVisibleChanged;
    var _useState = useSafeState(), _useState2 = _slicedToArray(_useState, 2), asyncVisible = _useState2[0], setAsyncVisible = _useState2[1];
    var _useState3 = useSafeState(STATUS_NONE), _useState4 = _slicedToArray(_useState3, 2), status = _useState4[0], setStatus = _useState4[1];
    var _useState5 = useSafeState(null), _useState6 = _slicedToArray(_useState5, 2), style2 = _useState6[0], setStyle = _useState6[1];
    var mountedRef = React.useRef(false);
    var deadlineRef = React.useRef(null);
    function getDomElement() {
      return getElement();
    }
    var activeRef = React.useRef(false);
    function updateMotionEndStatus() {
      setStatus(STATUS_NONE, true);
      setStyle(null, true);
    }
    var onInternalMotionEnd = useEvent(function(event) {
      if (status === STATUS_NONE) {
        return;
      }
      var element = getDomElement();
      if (event && !event.deadline && event.target !== element) {
        return;
      }
      var currentActive = activeRef.current;
      var canEnd;
      if (status === STATUS_APPEAR && currentActive) {
        canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
      } else if (status === STATUS_ENTER && currentActive) {
        canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
      } else if (status === STATUS_LEAVE && currentActive) {
        canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
      }
      if (currentActive && canEnd !== false) {
        updateMotionEndStatus();
      }
    });
    var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd), _useDomMotionEvents2 = _slicedToArray(_useDomMotionEvents, 1), patchMotionEvents = _useDomMotionEvents2[0];
    var getEventHandlers = function getEventHandlers2(targetStatus) {
      switch (targetStatus) {
        case STATUS_APPEAR:
          return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onAppearPrepare), STEP_START, onAppearStart), STEP_ACTIVE, onAppearActive);
        case STATUS_ENTER:
          return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onEnterPrepare), STEP_START, onEnterStart), STEP_ACTIVE, onEnterActive);
        case STATUS_LEAVE:
          return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onLeavePrepare), STEP_START, onLeaveStart), STEP_ACTIVE, onLeaveActive);
        default:
          return {};
      }
    };
    var eventHandlers = React__namespace.useMemo(function() {
      return getEventHandlers(status);
    }, [status]);
    var _useStepQueue = useStepQueue(status, !supportMotion, function(newStep) {
      if (newStep === STEP_PREPARE) {
        var onPrepare = eventHandlers[STEP_PREPARE];
        if (!onPrepare) {
          return SkipStep;
        }
        return onPrepare(getDomElement());
      }
      if (step in eventHandlers) {
        var _eventHandlers$step;
        setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
      }
      if (step === STEP_ACTIVE && status !== STATUS_NONE) {
        patchMotionEvents(getDomElement());
        if (motionDeadline > 0) {
          clearTimeout(deadlineRef.current);
          deadlineRef.current = setTimeout(function() {
            onInternalMotionEnd({
              deadline: true
            });
          }, motionDeadline);
        }
      }
      if (step === STEP_PREPARED) {
        updateMotionEndStatus();
      }
      return DoStep;
    }), _useStepQueue2 = _slicedToArray(_useStepQueue, 2), startStep = _useStepQueue2[0], step = _useStepQueue2[1];
    var active = isActive(step);
    activeRef.current = active;
    useIsomorphicLayoutEffect(function() {
      setAsyncVisible(visible);
      var isMounted = mountedRef.current;
      mountedRef.current = true;
      var nextStatus;
      if (!isMounted && visible && motionAppear) {
        nextStatus = STATUS_APPEAR;
      }
      if (isMounted && visible && motionEnter) {
        nextStatus = STATUS_ENTER;
      }
      if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
        nextStatus = STATUS_LEAVE;
      }
      var nextEventHandlers = getEventHandlers(nextStatus);
      if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
        setStatus(nextStatus);
        startStep();
      } else {
        setStatus(STATUS_NONE);
      }
    }, [visible]);
    React.useEffect(function() {
      if (
        // Cancel appear
        status === STATUS_APPEAR && !motionAppear || // Cancel enter
        status === STATUS_ENTER && !motionEnter || // Cancel leave
        status === STATUS_LEAVE && !motionLeave
      ) {
        setStatus(STATUS_NONE);
      }
    }, [motionAppear, motionEnter, motionLeave]);
    React.useEffect(function() {
      return function() {
        mountedRef.current = false;
        clearTimeout(deadlineRef.current);
      };
    }, []);
    var firstMountChangeRef = React__namespace.useRef(false);
    React.useEffect(function() {
      if (asyncVisible) {
        firstMountChangeRef.current = true;
      }
      if (asyncVisible !== void 0 && status === STATUS_NONE) {
        if (firstMountChangeRef.current || asyncVisible) {
          onVisibleChanged === null || onVisibleChanged === void 0 || onVisibleChanged(asyncVisible);
        }
        firstMountChangeRef.current = true;
      }
    }, [asyncVisible, status]);
    var mergedStyle = style2;
    if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
      mergedStyle = _objectSpread2({
        transition: "none"
      }, mergedStyle);
    }
    return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
  }
  function genCSSMotion(config) {
    var transitionSupport = config;
    if (_typeof(config) === "object") {
      transitionSupport = config.transitionSupport;
    }
    function isSupportTransition(props, contextMotion) {
      return !!(props.motionName && transitionSupport && contextMotion !== false);
    }
    var CSSMotion2 = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
      var _props$visible = props.visible, visible = _props$visible === void 0 ? true : _props$visible, _props$removeOnLeave = props.removeOnLeave, removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave, forceRender = props.forceRender, children = props.children, motionName = props.motionName, leavedClassName = props.leavedClassName, eventProps = props.eventProps;
      var _React$useContext = React__namespace.useContext(Context$1), contextMotion = _React$useContext.motion;
      var supportMotion = isSupportTransition(props, contextMotion);
      var nodeRef = React.useRef();
      var wrapperNodeRef = React.useRef();
      function getDomElement() {
        try {
          return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
        } catch (e2) {
          return null;
        }
      }
      var _useStatus = useStatus(supportMotion, visible, getDomElement, props), _useStatus2 = _slicedToArray(_useStatus, 4), status = _useStatus2[0], statusStep = _useStatus2[1], statusStyle = _useStatus2[2], mergedVisible = _useStatus2[3];
      var renderedRef = React__namespace.useRef(mergedVisible);
      if (mergedVisible) {
        renderedRef.current = true;
      }
      var setNodeRef = React__namespace.useCallback(function(node2) {
        nodeRef.current = node2;
        fillRef(ref, node2);
      }, [ref]);
      var motionChildren;
      var mergedProps = _objectSpread2(_objectSpread2({}, eventProps), {}, {
        visible
      });
      if (!children) {
        motionChildren = null;
      } else if (status === STATUS_NONE) {
        if (mergedVisible) {
          motionChildren = children(_objectSpread2({}, mergedProps), setNodeRef);
        } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
          motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
            className: leavedClassName
          }), setNodeRef);
        } else if (forceRender || !removeOnLeave && !leavedClassName) {
          motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
            style: {
              display: "none"
            }
          }), setNodeRef);
        } else {
          motionChildren = null;
        }
      } else {
        var statusSuffix;
        if (statusStep === STEP_PREPARE) {
          statusSuffix = "prepare";
        } else if (isActive(statusStep)) {
          statusSuffix = "active";
        } else if (statusStep === STEP_START) {
          statusSuffix = "start";
        }
        var motionCls = getTransitionName$1(motionName, "".concat(status, "-").concat(statusSuffix));
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          className: cx(getTransitionName$1(motionName, status), _defineProperty(_defineProperty({}, motionCls, motionCls && statusSuffix), motionName, typeof motionName === "string")),
          style: statusStyle
        }), setNodeRef);
      }
      if (/* @__PURE__ */ React__namespace.isValidElement(motionChildren) && supportRef(motionChildren)) {
        var _ref7 = motionChildren, originNodeRef = _ref7.ref;
        if (!originNodeRef) {
          motionChildren = /* @__PURE__ */ React__namespace.cloneElement(motionChildren, {
            ref: setNodeRef
          });
        }
      }
      return /* @__PURE__ */ React__namespace.createElement(DomWrapper, {
        ref: wrapperNodeRef
      }, motionChildren);
    });
    CSSMotion2.displayName = "CSSMotion";
    return CSSMotion2;
  }
  const CSSMotion = genCSSMotion(supportTransition);
  var STATUS_ADD = "add";
  var STATUS_KEEP = "keep";
  var STATUS_REMOVE = "remove";
  var STATUS_REMOVED = "removed";
  function wrapKeyToObject(key) {
    var keyObj;
    if (key && _typeof(key) === "object" && "key" in key) {
      keyObj = key;
    } else {
      keyObj = {
        key
      };
    }
    return _objectSpread2(_objectSpread2({}, keyObj), {}, {
      key: String(keyObj.key)
    });
  }
  function parseKeys() {
    var keys2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return keys2.map(wrapKeyToObject);
  }
  function diffKeys() {
    var prevKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var currentKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var list = [];
    var currentIndex = 0;
    var currentLen = currentKeys.length;
    var prevKeyObjects = parseKeys(prevKeys);
    var currentKeyObjects = parseKeys(currentKeys);
    prevKeyObjects.forEach(function(keyObj) {
      var hit = false;
      for (var i2 = currentIndex; i2 < currentLen; i2 += 1) {
        var currentKeyObj = currentKeyObjects[i2];
        if (currentKeyObj.key === keyObj.key) {
          if (currentIndex < i2) {
            list = list.concat(currentKeyObjects.slice(currentIndex, i2).map(function(obj) {
              return _objectSpread2(_objectSpread2({}, obj), {}, {
                status: STATUS_ADD
              });
            }));
            currentIndex = i2;
          }
          list.push(_objectSpread2(_objectSpread2({}, currentKeyObj), {}, {
            status: STATUS_KEEP
          }));
          currentIndex += 1;
          hit = true;
          break;
        }
      }
      if (!hit) {
        list.push(_objectSpread2(_objectSpread2({}, keyObj), {}, {
          status: STATUS_REMOVE
        }));
      }
    });
    if (currentIndex < currentLen) {
      list = list.concat(currentKeyObjects.slice(currentIndex).map(function(obj) {
        return _objectSpread2(_objectSpread2({}, obj), {}, {
          status: STATUS_ADD
        });
      }));
    }
    var keys2 = {};
    list.forEach(function(_ref7) {
      var key = _ref7.key;
      keys2[key] = (keys2[key] || 0) + 1;
    });
    var duplicatedKeys = Object.keys(keys2).filter(function(key) {
      return keys2[key] > 1;
    });
    duplicatedKeys.forEach(function(matchKey) {
      list = list.filter(function(_ref22) {
        var key = _ref22.key, status = _ref22.status;
        return key !== matchKey || status !== STATUS_REMOVE;
      });
      list.forEach(function(node2) {
        if (node2.key === matchKey) {
          node2.status = STATUS_KEEP;
        }
      });
    });
    return list;
  }
  var _excluded$f = ["component", "children", "onVisibleChanged", "onAllRemoved"], _excluded2 = ["status"];
  var MOTION_PROP_NAMES = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
  function genCSSMotionList(transitionSupport) {
    var CSSMotion$1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : CSSMotion;
    var CSSMotionList2 = /* @__PURE__ */ function(_React$Component) {
      _inherits(CSSMotionList3, _React$Component);
      var _super = _createSuper(CSSMotionList3);
      function CSSMotionList3() {
        var _this;
        _classCallCheck(this, CSSMotionList3);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "state", {
          keyEntities: []
        });
        _defineProperty(_assertThisInitialized(_this), "removeKey", function(removeKey) {
          var keyEntities = _this.state.keyEntities;
          var nextKeyEntities = keyEntities.map(function(entity) {
            if (entity.key !== removeKey)
              return entity;
            return _objectSpread2(_objectSpread2({}, entity), {}, {
              status: STATUS_REMOVED
            });
          });
          _this.setState({
            keyEntities: nextKeyEntities
          });
          return nextKeyEntities.filter(function(_ref7) {
            var status = _ref7.status;
            return status !== STATUS_REMOVED;
          }).length;
        });
        return _this;
      }
      _createClass(CSSMotionList3, [{
        key: "render",
        value: function render2() {
          var _this2 = this;
          var keyEntities = this.state.keyEntities;
          var _this$props = this.props, component = _this$props.component, children = _this$props.children, _onVisibleChanged = _this$props.onVisibleChanged, onAllRemoved = _this$props.onAllRemoved, restProps = _objectWithoutProperties(_this$props, _excluded$f);
          var Component = component || React__namespace.Fragment;
          var motionProps = {};
          MOTION_PROP_NAMES.forEach(function(prop) {
            motionProps[prop] = restProps[prop];
            delete restProps[prop];
          });
          delete restProps.keys;
          return /* @__PURE__ */ React__namespace.createElement(Component, restProps, keyEntities.map(function(_ref22, index2) {
            var status = _ref22.status, eventProps = _objectWithoutProperties(_ref22, _excluded2);
            var visible = status === STATUS_ADD || status === STATUS_KEEP;
            return /* @__PURE__ */ React__namespace.createElement(CSSMotion$1, _extends({}, motionProps, {
              key: eventProps.key,
              visible,
              eventProps,
              onVisibleChanged: function onVisibleChanged(changedVisible) {
                _onVisibleChanged === null || _onVisibleChanged === void 0 || _onVisibleChanged(changedVisible, {
                  key: eventProps.key
                });
                if (!changedVisible) {
                  var restKeysCount = _this2.removeKey(eventProps.key);
                  if (restKeysCount === 0 && onAllRemoved) {
                    onAllRemoved();
                  }
                }
              }
            }), function(props, ref) {
              return children(_objectSpread2(_objectSpread2({}, props), {}, {
                index: index2
              }), ref);
            });
          }));
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(_ref32, _ref42) {
          var keys2 = _ref32.keys;
          var keyEntities = _ref42.keyEntities;
          var parsedKeyObjects = parseKeys(keys2);
          var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
          return {
            keyEntities: mixedKeyEntities.filter(function(entity) {
              var prevEntity = keyEntities.find(function(_ref52) {
                var key = _ref52.key;
                return entity.key === key;
              });
              if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
                return false;
              }
              return true;
            })
          };
        }
      }]);
      return CSSMotionList3;
    }(React__namespace.Component);
    _defineProperty(CSSMotionList2, "defaultProps", {
      component: "div"
    });
    return CSSMotionList2;
  }
  const CSSMotionList = genCSSMotionList(supportTransition);
  function MotionWrapper(props) {
    const {
      children
    } = props;
    const [, token2] = useToken$1();
    const {
      motion
    } = token2;
    const needWrapMotionProviderRef = React__namespace.useRef(false);
    needWrapMotionProviderRef.current = needWrapMotionProviderRef.current || motion === false;
    if (needWrapMotionProviderRef.current) {
      return /* @__PURE__ */ React__namespace.createElement(MotionProvider, {
        motion
      }, children);
    }
    return children;
  }
  const PropWarning = () => null;
  var __rest$j = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  const PASSED_PROPS = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
  const defaultPrefixCls = "ant";
  let globalPrefixCls;
  let globalIconPrefixCls;
  let globalTheme;
  let globalHolderRender;
  function getGlobalPrefixCls() {
    return globalPrefixCls || defaultPrefixCls;
  }
  function getGlobalIconPrefixCls() {
    return globalIconPrefixCls || defaultIconPrefixCls;
  }
  function isLegacyTheme(theme2) {
    return Object.keys(theme2).some((key) => key.endsWith("Color"));
  }
  const setGlobalConfig = (props) => {
    const {
      prefixCls,
      iconPrefixCls,
      theme: theme2,
      holderRender
    } = props;
    if (prefixCls !== void 0) {
      globalPrefixCls = prefixCls;
    }
    if (iconPrefixCls !== void 0) {
      globalIconPrefixCls = iconPrefixCls;
    }
    if ("holderRender" in props) {
      globalHolderRender = holderRender;
    }
    if (theme2) {
      if (isLegacyTheme(theme2)) {
        registerTheme(getGlobalPrefixCls(), theme2);
      } else {
        globalTheme = theme2;
      }
    }
  };
  const globalConfig = () => ({
    getPrefixCls: (suffixCls, customizePrefixCls) => {
      if (customizePrefixCls) {
        return customizePrefixCls;
      }
      return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
    },
    getIconPrefixCls: getGlobalIconPrefixCls,
    getRootPrefixCls: () => {
      if (globalPrefixCls) {
        return globalPrefixCls;
      }
      return getGlobalPrefixCls();
    },
    getTheme: () => globalTheme,
    holderRender: globalHolderRender
  });
  const ProviderChildren = (props) => {
    const {
      children,
      csp: customCsp,
      autoInsertSpaceInButton,
      alert,
      anchor,
      form,
      locale: locale2,
      componentSize,
      direction,
      space,
      virtual,
      dropdownMatchSelectWidth,
      popupMatchSelectWidth,
      popupOverflow,
      legacyLocale,
      parentContext,
      iconPrefixCls: customIconPrefixCls,
      theme: theme2,
      componentDisabled,
      segmented,
      statistic: statistic2,
      spin,
      calendar,
      carousel,
      cascader,
      collapse,
      typography,
      checkbox,
      descriptions,
      divider,
      drawer,
      skeleton,
      steps,
      image,
      layout,
      list,
      mentions,
      modal,
      progress,
      result,
      slider,
      breadcrumb,
      menu,
      pagination,
      input,
      textArea,
      empty,
      badge,
      radio,
      rate,
      switch: SWITCH,
      transfer,
      avatar,
      message: message2,
      tag,
      table,
      card,
      tabs,
      timeline,
      timePicker,
      upload,
      notification,
      tree,
      colorPicker,
      datePicker,
      rangePicker,
      flex,
      wave,
      dropdown,
      warning: warningConfig,
      tour,
      floatButtonGroup
    } = props;
    const getPrefixCls = React__namespace.useCallback((suffixCls, customizePrefixCls) => {
      const {
        prefixCls
      } = props;
      if (customizePrefixCls) {
        return customizePrefixCls;
      }
      const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
      return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
    }, [parentContext.getPrefixCls, props.prefixCls]);
    const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || defaultIconPrefixCls;
    const csp = customCsp || parentContext.csp;
    useResetIconStyle(iconPrefixCls, csp);
    const mergedTheme = useTheme(theme2, parentContext.theme, {
      prefixCls: getPrefixCls("")
    });
    const baseConfig = {
      csp,
      autoInsertSpaceInButton,
      alert,
      anchor,
      locale: locale2 || legacyLocale,
      direction,
      space,
      virtual,
      popupMatchSelectWidth: popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth,
      popupOverflow,
      getPrefixCls,
      iconPrefixCls,
      theme: mergedTheme,
      segmented,
      statistic: statistic2,
      spin,
      calendar,
      carousel,
      cascader,
      collapse,
      typography,
      checkbox,
      descriptions,
      divider,
      drawer,
      skeleton,
      steps,
      image,
      input,
      textArea,
      layout,
      list,
      mentions,
      modal,
      progress,
      result,
      slider,
      breadcrumb,
      menu,
      pagination,
      empty,
      badge,
      radio,
      rate,
      switch: SWITCH,
      transfer,
      avatar,
      message: message2,
      tag,
      table,
      card,
      tabs,
      timeline,
      timePicker,
      upload,
      notification,
      tree,
      colorPicker,
      datePicker,
      rangePicker,
      flex,
      wave,
      dropdown,
      warning: warningConfig,
      tour,
      floatButtonGroup
    };
    const config = Object.assign({}, parentContext);
    Object.keys(baseConfig).forEach((key) => {
      if (baseConfig[key] !== void 0) {
        config[key] = baseConfig[key];
      }
    });
    PASSED_PROPS.forEach((propName) => {
      const propValue = props[propName];
      if (propValue) {
        config[propName] = propValue;
      }
    });
    if (typeof autoInsertSpaceInButton !== "undefined") {
      config.button = Object.assign({
        autoInsertSpace: autoInsertSpaceInButton
      }, config.button);
    }
    const memoedConfig = useMemo(() => config, config, (prevConfig, currentConfig) => {
      const prevKeys = Object.keys(prevConfig);
      const currentKeys = Object.keys(currentConfig);
      return prevKeys.length !== currentKeys.length || prevKeys.some((key) => prevConfig[key] !== currentConfig[key]);
    });
    const memoIconContextValue = React__namespace.useMemo(() => ({
      prefixCls: iconPrefixCls,
      csp
    }), [iconPrefixCls, csp]);
    let childNode = /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(PropWarning, {
      dropdownMatchSelectWidth
    }), children);
    const validateMessages = React__namespace.useMemo(() => {
      var _a, _b, _c, _d;
      return merge$2(((_a = localeValues.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || {}, ((_c = (_b = memoedConfig.locale) === null || _b === void 0 ? void 0 : _b.Form) === null || _c === void 0 ? void 0 : _c.defaultValidateMessages) || {}, ((_d = memoedConfig.form) === null || _d === void 0 ? void 0 : _d.validateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
    }, [memoedConfig, form === null || form === void 0 ? void 0 : form.validateMessages]);
    if (Object.keys(validateMessages).length > 0) {
      childNode = /* @__PURE__ */ React__namespace.createElement(ValidateMessagesContext.Provider, {
        value: validateMessages
      }, childNode);
    }
    if (locale2) {
      childNode = /* @__PURE__ */ React__namespace.createElement(LocaleProvider, {
        locale: locale2,
        _ANT_MARK__: ANT_MARK
      }, childNode);
    }
    if (iconPrefixCls || csp) {
      childNode = /* @__PURE__ */ React__namespace.createElement(IconContext.Provider, {
        value: memoIconContextValue
      }, childNode);
    }
    if (componentSize) {
      childNode = /* @__PURE__ */ React__namespace.createElement(SizeContextProvider, {
        size: componentSize
      }, childNode);
    }
    childNode = /* @__PURE__ */ React__namespace.createElement(MotionWrapper, null, childNode);
    const memoTheme = React__namespace.useMemo(() => {
      const _a = mergedTheme || {}, {
        algorithm,
        token: token2,
        components,
        cssVar
      } = _a, rest = __rest$j(_a, ["algorithm", "token", "components", "cssVar"]);
      const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : defaultTheme;
      const parsedComponents = {};
      Object.entries(components || {}).forEach((_ref7) => {
        let [componentName, componentToken] = _ref7;
        const parsedToken = Object.assign({}, componentToken);
        if ("algorithm" in parsedToken) {
          if (parsedToken.algorithm === true) {
            parsedToken.theme = themeObj;
          } else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === "function") {
            parsedToken.theme = createTheme(parsedToken.algorithm);
          }
          delete parsedToken.algorithm;
        }
        parsedComponents[componentName] = parsedToken;
      });
      const mergedToken = Object.assign(Object.assign({}, seedToken), token2);
      return Object.assign(Object.assign({}, rest), {
        theme: themeObj,
        token: mergedToken,
        components: parsedComponents,
        override: Object.assign({
          override: mergedToken
        }, parsedComponents),
        cssVar
      });
    }, [mergedTheme]);
    if (theme2) {
      childNode = /* @__PURE__ */ React__namespace.createElement(DesignTokenContext.Provider, {
        value: memoTheme
      }, childNode);
    }
    if (memoedConfig.warning) {
      childNode = /* @__PURE__ */ React__namespace.createElement(WarningContext.Provider, {
        value: memoedConfig.warning
      }, childNode);
    }
    if (componentDisabled !== void 0) {
      childNode = /* @__PURE__ */ React__namespace.createElement(DisabledContextProvider, {
        disabled: componentDisabled
      }, childNode);
    }
    return /* @__PURE__ */ React__namespace.createElement(ConfigContext.Provider, {
      value: memoedConfig
    }, childNode);
  };
  const ConfigProvider = (props) => {
    const context = React__namespace.useContext(ConfigContext);
    const antLocale = React__namespace.useContext(LocaleContext);
    return /* @__PURE__ */ React__namespace.createElement(ProviderChildren, Object.assign({
      parentContext: context,
      legacyLocale: antLocale
    }, props));
  };
  ConfigProvider.ConfigContext = ConfigContext;
  ConfigProvider.SizeContext = SizeContext;
  ConfigProvider.config = setGlobalConfig;
  ConfigProvider.useConfig = useConfig;
  Object.defineProperty(ConfigProvider, "SizeContext", {
    get: () => {
      return SizeContext;
    }
  });
  const ConfigProvider$1 = ConfigProvider;
  var CheckCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, "name": "check-circle", "theme": "filled" };
  function getRoot(ele) {
    var _ele$getRootNode;
    return ele === null || ele === void 0 || (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
  }
  function inShadow(ele) {
    return getRoot(ele) instanceof ShadowRoot;
  }
  function getShadowRoot(ele) {
    return inShadow(ele) ? getRoot(ele) : null;
  }
  function camelCase(input) {
    return input.replace(/-(.)/g, function(match2, g2) {
      return g2.toUpperCase();
    });
  }
  function warning$1(valid, message2) {
    warningOnce(valid, "[@ant-design/icons] ".concat(message2));
  }
  function isIconDefinition(target) {
    return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
  }
  function normalizeAttrs() {
    var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Object.keys(attrs).reduce(function(acc, key) {
      var val = attrs[key];
      switch (key) {
        case "class":
          acc.className = val;
          delete acc.class;
          break;
        default:
          delete acc[key];
          acc[camelCase(key)] = val;
      }
      return acc;
    }, {});
  }
  function generate(node2, key, rootProps) {
    if (!rootProps) {
      return /* @__PURE__ */ React.createElement(node2.tag, _objectSpread2({
        key
      }, normalizeAttrs(node2.attrs)), (node2.children || []).map(function(child, index2) {
        return generate(child, "".concat(key, "-").concat(node2.tag, "-").concat(index2));
      }));
    }
    return /* @__PURE__ */ React.createElement(node2.tag, _objectSpread2(_objectSpread2({
      key
    }, normalizeAttrs(node2.attrs)), rootProps), (node2.children || []).map(function(child, index2) {
      return generate(child, "".concat(key, "-").concat(node2.tag, "-").concat(index2));
    }));
  }
  function getSecondaryColor(primaryColor) {
    return generate$1(primaryColor)[0];
  }
  function normalizeTwoToneColors(twoToneColor) {
    if (!twoToneColor) {
      return [];
    }
    return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
  }
  var iconStyles = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
  var useInsertStyles = function useInsertStyles2(eleRef) {
    var _useContext = React.useContext(IconContext), csp = _useContext.csp, prefixCls = _useContext.prefixCls;
    var mergedStyleStr = iconStyles;
    if (prefixCls) {
      mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
    }
    React.useEffect(function() {
      var ele = eleRef.current;
      var shadowRoot = getShadowRoot(ele);
      updateCSS(mergedStyleStr, "@ant-design-icons", {
        prepend: true,
        csp,
        attachTo: shadowRoot
      });
    }, []);
  };
  var _excluded$e = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
  var twoToneColorPalette = {
    primaryColor: "#333",
    secondaryColor: "#E6E6E6",
    calculated: false
  };
  function setTwoToneColors(_ref7) {
    var primaryColor = _ref7.primaryColor, secondaryColor = _ref7.secondaryColor;
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
    twoToneColorPalette.calculated = !!secondaryColor;
  }
  function getTwoToneColors() {
    return _objectSpread2({}, twoToneColorPalette);
  }
  var IconBase = function IconBase2(props) {
    var icon = props.icon, className = props.className, onClick = props.onClick, style2 = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded$e);
    var svgRef = React__namespace.useRef();
    var colors = twoToneColorPalette;
    if (primaryColor) {
      colors = {
        primaryColor,
        secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
      };
    }
    useInsertStyles(svgRef);
    warning$1(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
    if (!isIconDefinition(icon)) {
      return null;
    }
    var target = icon;
    if (target && typeof target.icon === "function") {
      target = _objectSpread2(_objectSpread2({}, target), {}, {
        icon: target.icon(colors.primaryColor, colors.secondaryColor)
      });
    }
    return generate(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
      className,
      onClick,
      style: style2,
      "data-icon": target.name,
      width: "1em",
      height: "1em",
      fill: "currentColor",
      "aria-hidden": "true"
    }, restProps), {}, {
      ref: svgRef
    }));
  };
  IconBase.displayName = "IconReact";
  IconBase.getTwoToneColors = getTwoToneColors;
  IconBase.setTwoToneColors = setTwoToneColors;
  function setTwoToneColor(twoToneColor) {
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return IconBase.setTwoToneColors({
      primaryColor,
      secondaryColor
    });
  }
  function getTwoToneColor() {
    var colors = IconBase.getTwoToneColors();
    if (!colors.calculated) {
      return colors.primaryColor;
    }
    return [colors.primaryColor, colors.secondaryColor];
  }
  var _excluded$d = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
  setTwoToneColor(blue.primary);
  var Icon = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded$d);
    var _React$useContext = React__namespace.useContext(IconContext), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
    var classString = cx(rootClassName, prefixCls, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), className);
    var iconTabIndex = tabIndex;
    if (iconTabIndex === void 0 && onClick) {
      iconTabIndex = -1;
    }
    var svgStyle = rotate ? {
      msTransform: "rotate(".concat(rotate, "deg)"),
      transform: "rotate(".concat(rotate, "deg)")
    } : void 0;
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return /* @__PURE__ */ React__namespace.createElement("span", _extends({
      role: "img",
      "aria-label": icon.name
    }, restProps, {
      ref,
      tabIndex: iconTabIndex,
      onClick,
      className: classString
    }), /* @__PURE__ */ React__namespace.createElement(IconBase, {
      icon,
      primaryColor,
      secondaryColor,
      style: svgStyle
    }));
  });
  Icon.displayName = "AntdIcon";
  Icon.getTwoToneColor = getTwoToneColor;
  Icon.setTwoToneColor = setTwoToneColor;
  var CheckCircleFilled = function CheckCircleFilled2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: CheckCircleFilled$1
    }));
  };
  var RefIcon$9 = /* @__PURE__ */ React__namespace.forwardRef(CheckCircleFilled);
  var CloseCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, "name": "close-circle", "theme": "filled" };
  var CloseCircleFilled = function CloseCircleFilled2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: CloseCircleFilled$1
    }));
  };
  var RefIcon$8 = /* @__PURE__ */ React__namespace.forwardRef(CloseCircleFilled);
  var CloseOutlined$1 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, "name": "close", "theme": "outlined" };
  var CloseOutlined = function CloseOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: CloseOutlined$1
    }));
  };
  var RefIcon$7 = /* @__PURE__ */ React__namespace.forwardRef(CloseOutlined);
  var ExclamationCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "exclamation-circle", "theme": "filled" };
  var ExclamationCircleFilled = function ExclamationCircleFilled2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: ExclamationCircleFilled$1
    }));
  };
  var RefIcon$6 = /* @__PURE__ */ React__namespace.forwardRef(ExclamationCircleFilled);
  var InfoCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "info-circle", "theme": "filled" };
  var InfoCircleFilled = function InfoCircleFilled2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: InfoCircleFilled$1
    }));
  };
  var RefIcon$5 = /* @__PURE__ */ React__namespace.forwardRef(InfoCircleFilled);
  var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
  var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
  var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
  var ariaPrefix = "aria-";
  var dataPrefix = "data-";
  function match(key, prefix2) {
    return key.indexOf(prefix2) === 0;
  }
  function pickAttrs(props) {
    var ariaOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var mergedConfig;
    if (ariaOnly === false) {
      mergedConfig = {
        aria: true,
        data: true,
        attr: true
      };
    } else if (ariaOnly === true) {
      mergedConfig = {
        aria: true
      };
    } else {
      mergedConfig = _objectSpread2({}, ariaOnly);
    }
    var attrs = {};
    Object.keys(props).forEach(function(key) {
      if (
        // Aria
        mergedConfig.aria && (key === "role" || match(key, ariaPrefix)) || // Data
        mergedConfig.data && match(key, dataPrefix) || // Attr
        mergedConfig.attr && propList.includes(key)
      ) {
        attrs[key] = props[key];
      }
    });
    return attrs;
  }
  function isFragment(child) {
    return child && /* @__PURE__ */ React.isValidElement(child) && child.type === React.Fragment;
  }
  const replaceElement = (element, replacement, props) => {
    if (!/* @__PURE__ */ React.isValidElement(element)) {
      return replacement;
    }
    return /* @__PURE__ */ React.cloneElement(element, typeof props === "function" ? props(element.props || {}) : props);
  };
  function cloneElement(element, props) {
    return replaceElement(element, element, props);
  }
  const useCSSVarCls = (prefixCls) => {
    const [, , , , cssVar] = useToken$1();
    return cssVar ? `${prefixCls}-css-var` : "";
  };
  var KeyCode = {
    /**
     * MAC_ENTER
     */
    MAC_ENTER: 3,
    /**
     * BACKSPACE
     */
    BACKSPACE: 8,
    /**
     * TAB
     */
    TAB: 9,
    /**
     * NUMLOCK on FF/Safari Mac
     */
    NUM_CENTER: 12,
    // NUMLOCK on FF/Safari Mac
    /**
     * ENTER
     */
    ENTER: 13,
    /**
     * SHIFT
     */
    SHIFT: 16,
    /**
     * CTRL
     */
    CTRL: 17,
    /**
     * ALT
     */
    ALT: 18,
    /**
     * PAUSE
     */
    PAUSE: 19,
    /**
     * CAPS_LOCK
     */
    CAPS_LOCK: 20,
    /**
     * ESC
     */
    ESC: 27,
    /**
     * SPACE
     */
    SPACE: 32,
    /**
     * PAGE_UP
     */
    PAGE_UP: 33,
    // also NUM_NORTH_EAST
    /**
     * PAGE_DOWN
     */
    PAGE_DOWN: 34,
    // also NUM_SOUTH_EAST
    /**
     * END
     */
    END: 35,
    // also NUM_SOUTH_WEST
    /**
     * HOME
     */
    HOME: 36,
    // also NUM_NORTH_WEST
    /**
     * LEFT
     */
    LEFT: 37,
    // also NUM_WEST
    /**
     * UP
     */
    UP: 38,
    // also NUM_NORTH
    /**
     * RIGHT
     */
    RIGHT: 39,
    // also NUM_EAST
    /**
     * DOWN
     */
    DOWN: 40,
    // also NUM_SOUTH
    /**
     * PRINT_SCREEN
     */
    PRINT_SCREEN: 44,
    /**
     * INSERT
     */
    INSERT: 45,
    // also NUM_INSERT
    /**
     * DELETE
     */
    DELETE: 46,
    // also NUM_DELETE
    /**
     * ZERO
     */
    ZERO: 48,
    /**
     * ONE
     */
    ONE: 49,
    /**
     * TWO
     */
    TWO: 50,
    /**
     * THREE
     */
    THREE: 51,
    /**
     * FOUR
     */
    FOUR: 52,
    /**
     * FIVE
     */
    FIVE: 53,
    /**
     * SIX
     */
    SIX: 54,
    /**
     * SEVEN
     */
    SEVEN: 55,
    /**
     * EIGHT
     */
    EIGHT: 56,
    /**
     * NINE
     */
    NINE: 57,
    /**
     * QUESTION_MARK
     */
    QUESTION_MARK: 63,
    // needs localization
    /**
     * A
     */
    A: 65,
    /**
     * B
     */
    B: 66,
    /**
     * C
     */
    C: 67,
    /**
     * D
     */
    D: 68,
    /**
     * E
     */
    E: 69,
    /**
     * F
     */
    F: 70,
    /**
     * G
     */
    G: 71,
    /**
     * H
     */
    H: 72,
    /**
     * I
     */
    I: 73,
    /**
     * J
     */
    J: 74,
    /**
     * K
     */
    K: 75,
    /**
     * L
     */
    L: 76,
    /**
     * M
     */
    M: 77,
    /**
     * N
     */
    N: 78,
    /**
     * O
     */
    O: 79,
    /**
     * P
     */
    P: 80,
    /**
     * Q
     */
    Q: 81,
    /**
     * R
     */
    R: 82,
    /**
     * S
     */
    S: 83,
    /**
     * T
     */
    T: 84,
    /**
     * U
     */
    U: 85,
    /**
     * V
     */
    V: 86,
    /**
     * W
     */
    W: 87,
    /**
     * X
     */
    X: 88,
    /**
     * Y
     */
    Y: 89,
    /**
     * Z
     */
    Z: 90,
    /**
     * META
     */
    META: 91,
    // WIN_KEY_LEFT
    /**
     * WIN_KEY_RIGHT
     */
    WIN_KEY_RIGHT: 92,
    /**
     * CONTEXT_MENU
     */
    CONTEXT_MENU: 93,
    /**
     * NUM_ZERO
     */
    NUM_ZERO: 96,
    /**
     * NUM_ONE
     */
    NUM_ONE: 97,
    /**
     * NUM_TWO
     */
    NUM_TWO: 98,
    /**
     * NUM_THREE
     */
    NUM_THREE: 99,
    /**
     * NUM_FOUR
     */
    NUM_FOUR: 100,
    /**
     * NUM_FIVE
     */
    NUM_FIVE: 101,
    /**
     * NUM_SIX
     */
    NUM_SIX: 102,
    /**
     * NUM_SEVEN
     */
    NUM_SEVEN: 103,
    /**
     * NUM_EIGHT
     */
    NUM_EIGHT: 104,
    /**
     * NUM_NINE
     */
    NUM_NINE: 105,
    /**
     * NUM_MULTIPLY
     */
    NUM_MULTIPLY: 106,
    /**
     * NUM_PLUS
     */
    NUM_PLUS: 107,
    /**
     * NUM_MINUS
     */
    NUM_MINUS: 109,
    /**
     * NUM_PERIOD
     */
    NUM_PERIOD: 110,
    /**
     * NUM_DIVISION
     */
    NUM_DIVISION: 111,
    /**
     * F1
     */
    F1: 112,
    /**
     * F2
     */
    F2: 113,
    /**
     * F3
     */
    F3: 114,
    /**
     * F4
     */
    F4: 115,
    /**
     * F5
     */
    F5: 116,
    /**
     * F6
     */
    F6: 117,
    /**
     * F7
     */
    F7: 118,
    /**
     * F8
     */
    F8: 119,
    /**
     * F9
     */
    F9: 120,
    /**
     * F10
     */
    F10: 121,
    /**
     * F11
     */
    F11: 122,
    /**
     * F12
     */
    F12: 123,
    /**
     * NUMLOCK
     */
    NUMLOCK: 144,
    /**
     * SEMICOLON
     */
    SEMICOLON: 186,
    // needs localization
    /**
     * DASH
     */
    DASH: 189,
    // needs localization
    /**
     * EQUALS
     */
    EQUALS: 187,
    // needs localization
    /**
     * COMMA
     */
    COMMA: 188,
    // needs localization
    /**
     * PERIOD
     */
    PERIOD: 190,
    // needs localization
    /**
     * SLASH
     */
    SLASH: 191,
    // needs localization
    /**
     * APOSTROPHE
     */
    APOSTROPHE: 192,
    // needs localization
    /**
     * SINGLE_QUOTE
     */
    SINGLE_QUOTE: 222,
    // needs localization
    /**
     * OPEN_SQUARE_BRACKET
     */
    OPEN_SQUARE_BRACKET: 219,
    // needs localization
    /**
     * BACKSLASH
     */
    BACKSLASH: 220,
    // needs localization
    /**
     * CLOSE_SQUARE_BRACKET
     */
    CLOSE_SQUARE_BRACKET: 221,
    // needs localization
    /**
     * WIN_KEY
     */
    WIN_KEY: 224,
    /**
     * MAC_FF_META
     */
    MAC_FF_META: 224,
    // Firefox (Gecko) fires this for the meta key instead of 91
    /**
     * WIN_IME
     */
    WIN_IME: 229,
    // ======================== Function ========================
    /**
     * whether text and modified key is entered at the same time.
     */
    isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e2) {
      var keyCode = e2.keyCode;
      if (e2.altKey && !e2.ctrlKey || e2.metaKey || // Function keys don't generate text
      keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
        return false;
      }
      switch (keyCode) {
        case KeyCode.ALT:
        case KeyCode.CAPS_LOCK:
        case KeyCode.CONTEXT_MENU:
        case KeyCode.CTRL:
        case KeyCode.DOWN:
        case KeyCode.END:
        case KeyCode.ESC:
        case KeyCode.HOME:
        case KeyCode.INSERT:
        case KeyCode.LEFT:
        case KeyCode.MAC_FF_META:
        case KeyCode.META:
        case KeyCode.NUMLOCK:
        case KeyCode.NUM_CENTER:
        case KeyCode.PAGE_DOWN:
        case KeyCode.PAGE_UP:
        case KeyCode.PAUSE:
        case KeyCode.PRINT_SCREEN:
        case KeyCode.RIGHT:
        case KeyCode.SHIFT:
        case KeyCode.UP:
        case KeyCode.WIN_KEY:
        case KeyCode.WIN_KEY_RIGHT:
          return false;
        default:
          return true;
      }
    },
    /**
     * whether character is entered.
     */
    isCharacterKey: function isCharacterKey(keyCode) {
      if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
        return true;
      }
      if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
        return true;
      }
      if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
        return true;
      }
      if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
        return true;
      }
      switch (keyCode) {
        case KeyCode.SPACE:
        case KeyCode.QUESTION_MARK:
        case KeyCode.NUM_PLUS:
        case KeyCode.NUM_MINUS:
        case KeyCode.NUM_PERIOD:
        case KeyCode.NUM_DIVISION:
        case KeyCode.SEMICOLON:
        case KeyCode.DASH:
        case KeyCode.EQUALS:
        case KeyCode.COMMA:
        case KeyCode.PERIOD:
        case KeyCode.SLASH:
        case KeyCode.APOSTROPHE:
        case KeyCode.SINGLE_QUOTE:
        case KeyCode.OPEN_SQUARE_BRACKET:
        case KeyCode.BACKSLASH:
        case KeyCode.CLOSE_SQUARE_BRACKET:
          return true;
        default:
          return false;
      }
    }
  };
  var Notify = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, style2 = props.style, className = props.className, _props$duration = props.duration, duration = _props$duration === void 0 ? 4.5 : _props$duration, showProgress = props.showProgress, _props$pauseOnHover = props.pauseOnHover, pauseOnHover = _props$pauseOnHover === void 0 ? true : _props$pauseOnHover, eventKey = props.eventKey, content = props.content, closable = props.closable, _props$closeIcon = props.closeIcon, closeIcon = _props$closeIcon === void 0 ? "x" : _props$closeIcon, divProps = props.props, onClick = props.onClick, onNoticeClose = props.onNoticeClose, times = props.times, forcedHovering = props.hovering;
    var _React$useState = React__namespace.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), hovering = _React$useState2[0], setHovering = _React$useState2[1];
    var _React$useState3 = React__namespace.useState(0), _React$useState4 = _slicedToArray(_React$useState3, 2), percent = _React$useState4[0], setPercent = _React$useState4[1];
    var _React$useState5 = React__namespace.useState(0), _React$useState6 = _slicedToArray(_React$useState5, 2), spentTime = _React$useState6[0], setSpentTime = _React$useState6[1];
    var mergedHovering = forcedHovering || hovering;
    var mergedShowProgress = duration > 0 && showProgress;
    var onInternalClose = function onInternalClose2() {
      onNoticeClose(eventKey);
    };
    var onCloseKeyDown = function onCloseKeyDown2(e2) {
      if (e2.key === "Enter" || e2.code === "Enter" || e2.keyCode === KeyCode.ENTER) {
        onInternalClose();
      }
    };
    React__namespace.useEffect(function() {
      if (!mergedHovering && duration > 0) {
        var start = Date.now() - spentTime;
        var timeout = setTimeout(function() {
          onInternalClose();
        }, duration * 1e3 - spentTime);
        return function() {
          if (pauseOnHover) {
            clearTimeout(timeout);
          }
          setSpentTime(Date.now() - start);
        };
      }
    }, [duration, mergedHovering, times]);
    React__namespace.useEffect(function() {
      if (!mergedHovering && mergedShowProgress && (pauseOnHover || spentTime === 0)) {
        var start = performance.now();
        var animationFrame;
        var calculate = function calculate2() {
          cancelAnimationFrame(animationFrame);
          animationFrame = requestAnimationFrame(function(timestamp) {
            var runtime = timestamp + spentTime - start;
            var progress = Math.min(runtime / (duration * 1e3), 1);
            setPercent(progress * 100);
            if (progress < 1) {
              calculate2();
            }
          });
        };
        calculate();
        return function() {
          if (pauseOnHover) {
            cancelAnimationFrame(animationFrame);
          }
        };
      }
    }, [duration, spentTime, mergedHovering, mergedShowProgress, times]);
    var closableObj = React__namespace.useMemo(function() {
      if (_typeof(closable) === "object" && closable !== null) {
        return closable;
      }
      if (closable) {
        return {
          closeIcon
        };
      }
      return {};
    }, [closable, closeIcon]);
    var ariaProps = pickAttrs(closableObj, true);
    var validPercent = 100 - (!percent || percent < 0 ? 0 : percent > 100 ? 100 : percent);
    var noticePrefixCls = "".concat(prefixCls, "-notice");
    return /* @__PURE__ */ React__namespace.createElement("div", _extends({}, divProps, {
      ref,
      className: cx(noticePrefixCls, className, _defineProperty({}, "".concat(noticePrefixCls, "-closable"), closable)),
      style: style2,
      onMouseEnter: function onMouseEnter(e2) {
        var _divProps$onMouseEnte;
        setHovering(true);
        divProps === null || divProps === void 0 || (_divProps$onMouseEnte = divProps.onMouseEnter) === null || _divProps$onMouseEnte === void 0 || _divProps$onMouseEnte.call(divProps, e2);
      },
      onMouseLeave: function onMouseLeave(e2) {
        var _divProps$onMouseLeav;
        setHovering(false);
        divProps === null || divProps === void 0 || (_divProps$onMouseLeav = divProps.onMouseLeave) === null || _divProps$onMouseLeav === void 0 || _divProps$onMouseLeav.call(divProps, e2);
      },
      onClick
    }), /* @__PURE__ */ React__namespace.createElement("div", {
      className: "".concat(noticePrefixCls, "-content")
    }, content), closable && /* @__PURE__ */ React__namespace.createElement("a", _extends({
      tabIndex: 0,
      className: "".concat(noticePrefixCls, "-close"),
      onKeyDown: onCloseKeyDown,
      "aria-label": "Close"
    }, ariaProps, {
      onClick: function onClick2(e2) {
        e2.preventDefault();
        e2.stopPropagation();
        onInternalClose();
      }
    }), closableObj.closeIcon), mergedShowProgress && /* @__PURE__ */ React__namespace.createElement("progress", {
      className: "".concat(noticePrefixCls, "-progress"),
      max: "100",
      value: validPercent
    }, validPercent + "%"));
  });
  var NotificationContext = /* @__PURE__ */ React.createContext({});
  var NotificationProvider = function NotificationProvider2(_ref7) {
    var children = _ref7.children, classNames = _ref7.classNames;
    return /* @__PURE__ */ React.createElement(NotificationContext.Provider, {
      value: {
        classNames
      }
    }, children);
  };
  var DEFAULT_OFFSET$1 = 8;
  var DEFAULT_THRESHOLD = 3;
  var DEFAULT_GAP = 16;
  var useStack = function useStack2(config) {
    var result = {
      offset: DEFAULT_OFFSET$1,
      threshold: DEFAULT_THRESHOLD,
      gap: DEFAULT_GAP
    };
    if (config && _typeof(config) === "object") {
      var _config$offset, _config$threshold, _config$gap;
      result.offset = (_config$offset = config.offset) !== null && _config$offset !== void 0 ? _config$offset : DEFAULT_OFFSET$1;
      result.threshold = (_config$threshold = config.threshold) !== null && _config$threshold !== void 0 ? _config$threshold : DEFAULT_THRESHOLD;
      result.gap = (_config$gap = config.gap) !== null && _config$gap !== void 0 ? _config$gap : DEFAULT_GAP;
    }
    return [!!config, result];
  };
  var _excluded$c = ["className", "style", "classNames", "styles"];
  var NoticeList = function NoticeList2(props) {
    var configList = props.configList, placement = props.placement, prefixCls = props.prefixCls, className = props.className, style2 = props.style, motion = props.motion, onAllNoticeRemoved = props.onAllNoticeRemoved, onNoticeClose = props.onNoticeClose, stackConfig = props.stack;
    var _useContext = React.useContext(NotificationContext), ctxCls = _useContext.classNames;
    var dictRef = React.useRef({});
    var _useState = React.useState(null), _useState2 = _slicedToArray(_useState, 2), latestNotice = _useState2[0], setLatestNotice = _useState2[1];
    var _useState3 = React.useState([]), _useState4 = _slicedToArray(_useState3, 2), hoverKeys = _useState4[0], setHoverKeys = _useState4[1];
    var keys2 = configList.map(function(config) {
      return {
        config,
        key: String(config.key)
      };
    });
    var _useStack = useStack(stackConfig), _useStack2 = _slicedToArray(_useStack, 2), stack = _useStack2[0], _useStack2$ = _useStack2[1], offset2 = _useStack2$.offset, threshold = _useStack2$.threshold, gap = _useStack2$.gap;
    var expanded = stack && (hoverKeys.length > 0 || keys2.length <= threshold);
    var placementMotion = typeof motion === "function" ? motion(placement) : motion;
    React.useEffect(function() {
      if (stack && hoverKeys.length > 1) {
        setHoverKeys(function(prev2) {
          return prev2.filter(function(key) {
            return keys2.some(function(_ref7) {
              var dataKey = _ref7.key;
              return key === dataKey;
            });
          });
        });
      }
    }, [hoverKeys, keys2, stack]);
    React.useEffect(function() {
      var _keys;
      if (stack && dictRef.current[(_keys = keys2[keys2.length - 1]) === null || _keys === void 0 ? void 0 : _keys.key]) {
        var _keys2;
        setLatestNotice(dictRef.current[(_keys2 = keys2[keys2.length - 1]) === null || _keys2 === void 0 ? void 0 : _keys2.key]);
      }
    }, [keys2, stack]);
    return /* @__PURE__ */ React.createElement(CSSMotionList, _extends({
      key: placement,
      className: cx(prefixCls, "".concat(prefixCls, "-").concat(placement), ctxCls === null || ctxCls === void 0 ? void 0 : ctxCls.list, className, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-stack"), !!stack), "".concat(prefixCls, "-stack-expanded"), expanded)),
      style: style2,
      keys: keys2,
      motionAppear: true
    }, placementMotion, {
      onAllRemoved: function onAllRemoved() {
        onAllNoticeRemoved(placement);
      }
    }), function(_ref22, nodeRef) {
      var config = _ref22.config, motionClassName = _ref22.className, motionStyle = _ref22.style, motionIndex = _ref22.index;
      var _ref32 = config, key = _ref32.key, times = _ref32.times;
      var strKey = String(key);
      var _ref42 = config, configClassName = _ref42.className, configStyle = _ref42.style, configClassNames = _ref42.classNames, configStyles = _ref42.styles, restConfig = _objectWithoutProperties(_ref42, _excluded$c);
      var dataIndex = keys2.findIndex(function(item) {
        return item.key === strKey;
      });
      var stackStyle = {};
      if (stack) {
        var index2 = keys2.length - 1 - (dataIndex > -1 ? dataIndex : motionIndex - 1);
        var transformX = placement === "top" || placement === "bottom" ? "-50%" : "0";
        if (index2 > 0) {
          var _dictRef$current$strK, _dictRef$current$strK2, _dictRef$current$strK3;
          stackStyle.height = expanded ? (_dictRef$current$strK = dictRef.current[strKey]) === null || _dictRef$current$strK === void 0 ? void 0 : _dictRef$current$strK.offsetHeight : latestNotice === null || latestNotice === void 0 ? void 0 : latestNotice.offsetHeight;
          var verticalOffset = 0;
          for (var i2 = 0; i2 < index2; i2++) {
            var _dictRef$current$keys;
            verticalOffset += ((_dictRef$current$keys = dictRef.current[keys2[keys2.length - 1 - i2].key]) === null || _dictRef$current$keys === void 0 ? void 0 : _dictRef$current$keys.offsetHeight) + gap;
          }
          var transformY = (expanded ? verticalOffset : index2 * offset2) * (placement.startsWith("top") ? 1 : -1);
          var scaleX = !expanded && latestNotice !== null && latestNotice !== void 0 && latestNotice.offsetWidth && (_dictRef$current$strK2 = dictRef.current[strKey]) !== null && _dictRef$current$strK2 !== void 0 && _dictRef$current$strK2.offsetWidth ? ((latestNotice === null || latestNotice === void 0 ? void 0 : latestNotice.offsetWidth) - offset2 * 2 * (index2 < 3 ? index2 : 3)) / ((_dictRef$current$strK3 = dictRef.current[strKey]) === null || _dictRef$current$strK3 === void 0 ? void 0 : _dictRef$current$strK3.offsetWidth) : 1;
          stackStyle.transform = "translate3d(".concat(transformX, ", ").concat(transformY, "px, 0) scaleX(").concat(scaleX, ")");
        } else {
          stackStyle.transform = "translate3d(".concat(transformX, ", 0, 0)");
        }
      }
      return /* @__PURE__ */ React.createElement("div", {
        ref: nodeRef,
        className: cx("".concat(prefixCls, "-notice-wrapper"), motionClassName, configClassNames === null || configClassNames === void 0 ? void 0 : configClassNames.wrapper),
        style: _objectSpread2(_objectSpread2(_objectSpread2({}, motionStyle), stackStyle), configStyles === null || configStyles === void 0 ? void 0 : configStyles.wrapper),
        onMouseEnter: function onMouseEnter() {
          return setHoverKeys(function(prev2) {
            return prev2.includes(strKey) ? prev2 : [].concat(_toConsumableArray(prev2), [strKey]);
          });
        },
        onMouseLeave: function onMouseLeave() {
          return setHoverKeys(function(prev2) {
            return prev2.filter(function(k2) {
              return k2 !== strKey;
            });
          });
        }
      }, /* @__PURE__ */ React.createElement(Notify, _extends({}, restConfig, {
        ref: function ref(node2) {
          if (dataIndex > -1) {
            dictRef.current[strKey] = node2;
          } else {
            delete dictRef.current[strKey];
          }
        },
        prefixCls,
        classNames: configClassNames,
        styles: configStyles,
        className: cx(configClassName, ctxCls === null || ctxCls === void 0 ? void 0 : ctxCls.notice),
        style: configStyle,
        times,
        key,
        eventKey: key,
        onNoticeClose,
        hovering: stack && hoverKeys.length > 0
      })));
    });
  };
  var Notifications = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-notification" : _props$prefixCls, container = props.container, motion = props.motion, maxCount = props.maxCount, className = props.className, style2 = props.style, onAllRemoved = props.onAllRemoved, stack = props.stack, renderNotifications2 = props.renderNotifications;
    var _React$useState = React__namespace.useState([]), _React$useState2 = _slicedToArray(_React$useState, 2), configList = _React$useState2[0], setConfigList = _React$useState2[1];
    var onNoticeClose = function onNoticeClose2(key) {
      var _config$onClose;
      var config = configList.find(function(item) {
        return item.key === key;
      });
      config === null || config === void 0 || (_config$onClose = config.onClose) === null || _config$onClose === void 0 || _config$onClose.call(config);
      setConfigList(function(list) {
        return list.filter(function(item) {
          return item.key !== key;
        });
      });
    };
    React__namespace.useImperativeHandle(ref, function() {
      return {
        open: function open2(config) {
          setConfigList(function(list) {
            var clone = _toConsumableArray(list);
            var index2 = clone.findIndex(function(item) {
              return item.key === config.key;
            });
            var innerConfig = _objectSpread2({}, config);
            if (index2 >= 0) {
              var _list$index;
              innerConfig.times = (((_list$index = list[index2]) === null || _list$index === void 0 ? void 0 : _list$index.times) || 0) + 1;
              clone[index2] = innerConfig;
            } else {
              innerConfig.times = 0;
              clone.push(innerConfig);
            }
            if (maxCount > 0 && clone.length > maxCount) {
              clone = clone.slice(-maxCount);
            }
            return clone;
          });
        },
        close: function close(key) {
          onNoticeClose(key);
        },
        destroy: function destroy2() {
          setConfigList([]);
        }
      };
    });
    var _React$useState3 = React__namespace.useState({}), _React$useState4 = _slicedToArray(_React$useState3, 2), placements2 = _React$useState4[0], setPlacements = _React$useState4[1];
    React__namespace.useEffect(function() {
      var nextPlacements = {};
      configList.forEach(function(config) {
        var _config$placement = config.placement, placement = _config$placement === void 0 ? "topRight" : _config$placement;
        if (placement) {
          nextPlacements[placement] = nextPlacements[placement] || [];
          nextPlacements[placement].push(config);
        }
      });
      Object.keys(placements2).forEach(function(placement) {
        nextPlacements[placement] = nextPlacements[placement] || [];
      });
      setPlacements(nextPlacements);
    }, [configList]);
    var onAllNoticeRemoved = function onAllNoticeRemoved2(placement) {
      setPlacements(function(originPlacements) {
        var clone = _objectSpread2({}, originPlacements);
        var list = clone[placement] || [];
        if (!list.length) {
          delete clone[placement];
        }
        return clone;
      });
    };
    var emptyRef = React__namespace.useRef(false);
    React__namespace.useEffect(function() {
      if (Object.keys(placements2).length > 0) {
        emptyRef.current = true;
      } else if (emptyRef.current) {
        onAllRemoved === null || onAllRemoved === void 0 || onAllRemoved();
        emptyRef.current = false;
      }
    }, [placements2]);
    if (!container) {
      return null;
    }
    var placementList = Object.keys(placements2);
    return /* @__PURE__ */ ReactDOM__default.createPortal(/* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, placementList.map(function(placement) {
      var placementConfigList = placements2[placement];
      var list = /* @__PURE__ */ React__namespace.createElement(NoticeList, {
        key: placement,
        configList: placementConfigList,
        placement,
        prefixCls,
        className: className === null || className === void 0 ? void 0 : className(placement),
        style: style2 === null || style2 === void 0 ? void 0 : style2(placement),
        motion,
        onNoticeClose,
        onAllNoticeRemoved,
        stack
      });
      return renderNotifications2 ? renderNotifications2(list, {
        prefixCls,
        key: placement
      }) : list;
    })), container);
  });
  var _excluded$b = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"];
  var defaultGetContainer = function defaultGetContainer2() {
    return document.body;
  };
  var uniqueKey = 0;
  function mergeConfig() {
    var clone = {};
    for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
      objList[_key] = arguments[_key];
    }
    objList.forEach(function(obj) {
      if (obj) {
        Object.keys(obj).forEach(function(key) {
          var val = obj[key];
          if (val !== void 0) {
            clone[key] = val;
          }
        });
      }
    });
    return clone;
  }
  function useNotification() {
    var rootConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _rootConfig$getContai = rootConfig.getContainer, getContainer2 = _rootConfig$getContai === void 0 ? defaultGetContainer : _rootConfig$getContai, motion = rootConfig.motion, prefixCls = rootConfig.prefixCls, maxCount = rootConfig.maxCount, className = rootConfig.className, style2 = rootConfig.style, onAllRemoved = rootConfig.onAllRemoved, stack = rootConfig.stack, renderNotifications2 = rootConfig.renderNotifications, shareConfig = _objectWithoutProperties(rootConfig, _excluded$b);
    var _React$useState = React__namespace.useState(), _React$useState2 = _slicedToArray(_React$useState, 2), container = _React$useState2[0], setContainer = _React$useState2[1];
    var notificationsRef = React__namespace.useRef();
    var contextHolder = /* @__PURE__ */ React__namespace.createElement(Notifications, {
      container,
      ref: notificationsRef,
      prefixCls,
      motion,
      maxCount,
      className,
      style: style2,
      onAllRemoved,
      stack,
      renderNotifications: renderNotifications2
    });
    var _React$useState3 = React__namespace.useState([]), _React$useState4 = _slicedToArray(_React$useState3, 2), taskQueue2 = _React$useState4[0], setTaskQueue = _React$useState4[1];
    var api = React__namespace.useMemo(function() {
      return {
        open: function open2(config) {
          var mergedConfig = mergeConfig(shareConfig, config);
          if (mergedConfig.key === null || mergedConfig.key === void 0) {
            mergedConfig.key = "rc-notification-".concat(uniqueKey);
            uniqueKey += 1;
          }
          setTaskQueue(function(queue) {
            return [].concat(_toConsumableArray(queue), [{
              type: "open",
              config: mergedConfig
            }]);
          });
        },
        close: function close(key) {
          setTaskQueue(function(queue) {
            return [].concat(_toConsumableArray(queue), [{
              type: "close",
              key
            }]);
          });
        },
        destroy: function destroy2() {
          setTaskQueue(function(queue) {
            return [].concat(_toConsumableArray(queue), [{
              type: "destroy"
            }]);
          });
        }
      };
    }, []);
    React__namespace.useEffect(function() {
      setContainer(getContainer2());
    });
    React__namespace.useEffect(function() {
      if (notificationsRef.current && taskQueue2.length) {
        taskQueue2.forEach(function(task) {
          switch (task.type) {
            case "open":
              notificationsRef.current.open(task.config);
              break;
            case "close":
              notificationsRef.current.close(task.key);
              break;
            case "destroy":
              notificationsRef.current.destroy();
              break;
          }
        });
        setTaskQueue(function(oriQueue) {
          return oriQueue.filter(function(task) {
            return !taskQueue2.includes(task);
          });
        });
      }
    }, [taskQueue2]);
    return [api, contextHolder];
  }
  var LoadingOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
  var LoadingOutlined = function LoadingOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: LoadingOutlined$1
    }));
  };
  var RefIcon$4 = /* @__PURE__ */ React__namespace.forwardRef(LoadingOutlined);
  const zIndexContext = /* @__PURE__ */ React.createContext(void 0);
  const CONTAINER_OFFSET = 100;
  const CONTAINER_OFFSET_MAX_COUNT = 10;
  const CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
  const containerBaseZIndexOffset = {
    Modal: CONTAINER_OFFSET,
    Drawer: CONTAINER_OFFSET,
    Popover: CONTAINER_OFFSET,
    Popconfirm: CONTAINER_OFFSET,
    Tooltip: CONTAINER_OFFSET,
    Tour: CONTAINER_OFFSET
  };
  const consumerBaseZIndexOffset = {
    SelectLike: 50,
    Dropdown: 50,
    DatePicker: 50,
    Menu: 50,
    ImagePreview: 1
  };
  function isContainerType(type4) {
    return type4 in containerBaseZIndexOffset;
  }
  function useZIndex(componentType, customZIndex) {
    const [, token2] = useToken$1();
    const parentZIndex = React.useContext(zIndexContext);
    const isContainer = isContainerType(componentType);
    if (customZIndex !== void 0) {
      return [customZIndex, customZIndex];
    }
    let zIndex = parentZIndex !== null && parentZIndex !== void 0 ? parentZIndex : 0;
    if (isContainer) {
      zIndex += // Use preset token zIndex by default but not stack when has parent container
      (parentZIndex ? 0 : token2.zIndexPopupBase) + // Container offset
      containerBaseZIndexOffset[componentType];
      zIndex = Math.min(zIndex, token2.zIndexPopupBase + CONTAINER_MAX_OFFSET);
    } else {
      zIndex += consumerBaseZIndexOffset[componentType];
    }
    return [parentZIndex === void 0 ? customZIndex : zIndex, zIndex];
  }
  const genMessageStyle = (token2) => {
    const {
      componentCls,
      iconCls,
      boxShadow,
      colorText,
      colorSuccess,
      colorError,
      colorWarning,
      colorInfo,
      fontSizeLG,
      motionEaseInOutCirc,
      motionDurationSlow,
      marginXS,
      paddingXS,
      borderRadiusLG,
      zIndexPopup,
      // Custom token
      contentPadding,
      contentBg
    } = token2;
    const noticeCls = `${componentCls}-notice`;
    const messageMoveIn = new Keyframe("MessageMoveIn", {
      "0%": {
        padding: 0,
        transform: "translateY(-100%)",
        opacity: 0
      },
      "100%": {
        padding: paddingXS,
        transform: "translateY(0)",
        opacity: 1
      }
    });
    const messageMoveOut = new Keyframe("MessageMoveOut", {
      "0%": {
        maxHeight: token2.height,
        padding: paddingXS,
        opacity: 1
      },
      "100%": {
        maxHeight: 0,
        padding: 0,
        opacity: 0
      }
    });
    const noticeStyle = {
      padding: paddingXS,
      textAlign: "center",
      [`${componentCls}-custom-content > ${iconCls}`]: {
        verticalAlign: "text-bottom",
        marginInlineEnd: marginXS,
        // affected by ltr or rtl
        fontSize: fontSizeLG
      },
      [`${noticeCls}-content`]: {
        display: "inline-block",
        padding: contentPadding,
        background: contentBg,
        borderRadius: borderRadiusLG,
        boxShadow,
        pointerEvents: "all"
      },
      [`${componentCls}-success > ${iconCls}`]: {
        color: colorSuccess
      },
      [`${componentCls}-error > ${iconCls}`]: {
        color: colorError
      },
      [`${componentCls}-warning > ${iconCls}`]: {
        color: colorWarning
      },
      [`${componentCls}-info > ${iconCls},
      ${componentCls}-loading > ${iconCls}`]: {
        color: colorInfo
      }
    };
    return [
      // ============================ Holder ============================
      {
        [componentCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
          color: colorText,
          position: "fixed",
          top: marginXS,
          width: "100%",
          pointerEvents: "none",
          zIndex: zIndexPopup,
          [`${componentCls}-move-up`]: {
            animationFillMode: "forwards"
          },
          [`
        ${componentCls}-move-up-appear,
        ${componentCls}-move-up-enter
      `]: {
            animationName: messageMoveIn,
            animationDuration: motionDurationSlow,
            animationPlayState: "paused",
            animationTimingFunction: motionEaseInOutCirc
          },
          [`
        ${componentCls}-move-up-appear${componentCls}-move-up-appear-active,
        ${componentCls}-move-up-enter${componentCls}-move-up-enter-active
      `]: {
            animationPlayState: "running"
          },
          [`${componentCls}-move-up-leave`]: {
            animationName: messageMoveOut,
            animationDuration: motionDurationSlow,
            animationPlayState: "paused",
            animationTimingFunction: motionEaseInOutCirc
          },
          [`${componentCls}-move-up-leave${componentCls}-move-up-leave-active`]: {
            animationPlayState: "running"
          },
          "&-rtl": {
            direction: "rtl",
            span: {
              direction: "rtl"
            }
          }
        })
      },
      // ============================ Notice ============================
      {
        [componentCls]: {
          [`${noticeCls}-wrapper`]: Object.assign({}, noticeStyle)
        }
      },
      // ============================= Pure =============================
      {
        [`${componentCls}-notice-pure-panel`]: Object.assign(Object.assign({}, noticeStyle), {
          padding: 0,
          textAlign: "start"
        })
      }
    ];
  };
  const prepareComponentToken$5 = (token2) => ({
    zIndexPopup: token2.zIndexPopupBase + CONTAINER_MAX_OFFSET + 10,
    contentBg: token2.colorBgElevated,
    contentPadding: `${(token2.controlHeightLG - token2.fontSize * token2.lineHeight) / 2}px ${token2.paddingSM}px`
  });
  const useStyle$a = genStyleHooks("Message", (token2) => {
    const combinedToken = merge$1(token2, {
      height: 150
    });
    return [genMessageStyle(combinedToken)];
  }, prepareComponentToken$5);
  var __rest$i = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  const TypeIcon = {
    info: /* @__PURE__ */ React__namespace.createElement(RefIcon$5, null),
    success: /* @__PURE__ */ React__namespace.createElement(RefIcon$9, null),
    error: /* @__PURE__ */ React__namespace.createElement(RefIcon$8, null),
    warning: /* @__PURE__ */ React__namespace.createElement(RefIcon$6, null),
    loading: /* @__PURE__ */ React__namespace.createElement(RefIcon$4, null)
  };
  const PureContent = (_ref7) => {
    let {
      prefixCls,
      type: type4,
      icon,
      children
    } = _ref7;
    return /* @__PURE__ */ React__namespace.createElement("div", {
      className: cx(`${prefixCls}-custom-content`, `${prefixCls}-${type4}`)
    }, icon || TypeIcon[type4], /* @__PURE__ */ React__namespace.createElement("span", null, children));
  };
  const PurePanel$3 = (props) => {
    const {
      prefixCls: staticPrefixCls,
      className,
      type: type4,
      icon,
      content
    } = props, restProps = __rest$i(props, ["prefixCls", "className", "type", "icon", "content"]);
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = staticPrefixCls || getPrefixCls("message");
    const rootCls = useCSSVarCls(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$a(prefixCls, rootCls);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement(Notify, Object.assign({}, restProps, {
      prefixCls,
      className: cx(className, hashId, `${prefixCls}-notice-pure-panel`, cssVarCls, rootCls),
      eventKey: "pure",
      duration: null,
      content: /* @__PURE__ */ React__namespace.createElement(PureContent, {
        prefixCls,
        type: type4,
        icon
      }, content)
    })));
  };
  function getMotion$1(prefixCls, transitionName) {
    return {
      motionName: transitionName !== null && transitionName !== void 0 ? transitionName : `${prefixCls}-move-up`
    };
  }
  function wrapPromiseFn(openFn) {
    let closeFn;
    const closePromise = new Promise((resolve) => {
      closeFn = openFn(() => {
        resolve(true);
      });
    });
    const result = () => {
      closeFn === null || closeFn === void 0 ? void 0 : closeFn();
    };
    result.then = (filled, rejected) => closePromise.then(filled, rejected);
    result.promise = closePromise;
    return result;
  }
  var __rest$h = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  const DEFAULT_OFFSET = 8;
  const DEFAULT_DURATION = 3;
  const Wrapper = (_ref7) => {
    let {
      children,
      prefixCls
    } = _ref7;
    const rootCls = useCSSVarCls(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$a(prefixCls, rootCls);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement(NotificationProvider, {
      classNames: {
        list: cx(hashId, cssVarCls, rootCls)
      }
    }, children));
  };
  const renderNotifications = (node2, _ref22) => {
    let {
      prefixCls,
      key
    } = _ref22;
    return /* @__PURE__ */ React__namespace.createElement(Wrapper, {
      prefixCls,
      key
    }, node2);
  };
  const Holder = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    const {
      top,
      prefixCls: staticPrefixCls,
      getContainer: staticGetContainer,
      maxCount,
      duration = DEFAULT_DURATION,
      rtl,
      transitionName,
      onAllRemoved
    } = props;
    const {
      getPrefixCls,
      getPopupContainer,
      message: message2,
      direction
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = staticPrefixCls || getPrefixCls("message");
    const getStyle2 = () => ({
      left: "50%",
      transform: "translateX(-50%)",
      top: top !== null && top !== void 0 ? top : DEFAULT_OFFSET
    });
    const getClassName = () => cx({
      [`${prefixCls}-rtl`]: rtl !== null && rtl !== void 0 ? rtl : direction === "rtl"
    });
    const getNotificationMotion = () => getMotion$1(prefixCls, transitionName);
    const mergedCloseIcon = /* @__PURE__ */ React__namespace.createElement("span", {
      className: `${prefixCls}-close-x`
    }, /* @__PURE__ */ React__namespace.createElement(RefIcon$7, {
      className: `${prefixCls}-close-icon`
    }));
    const [api, holder] = useNotification({
      prefixCls,
      style: getStyle2,
      className: getClassName,
      motion: getNotificationMotion,
      closable: false,
      closeIcon: mergedCloseIcon,
      duration,
      getContainer: () => (staticGetContainer === null || staticGetContainer === void 0 ? void 0 : staticGetContainer()) || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer()) || document.body,
      maxCount,
      onAllRemoved,
      renderNotifications
    });
    React__namespace.useImperativeHandle(ref, () => Object.assign(Object.assign({}, api), {
      prefixCls,
      message: message2
    }));
    return holder;
  });
  let keyIndex = 0;
  function useInternalMessage(messageConfig) {
    const holderRef = React__namespace.useRef(null);
    devUseWarning();
    const wrapAPI = React__namespace.useMemo(() => {
      const close = (key) => {
        var _a;
        (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.close(key);
      };
      const open2 = (config) => {
        if (!holderRef.current) {
          const fakeResult = () => {
          };
          fakeResult.then = () => {
          };
          return fakeResult;
        }
        const {
          open: originOpen,
          prefixCls,
          message: message2
        } = holderRef.current;
        const noticePrefixCls = `${prefixCls}-notice`;
        const {
          content,
          icon,
          type: type4,
          key,
          className,
          style: style2,
          onClose
        } = config, restConfig = __rest$h(config, ["content", "icon", "type", "key", "className", "style", "onClose"]);
        let mergedKey = key;
        if (mergedKey === void 0 || mergedKey === null) {
          keyIndex += 1;
          mergedKey = `antd-message-${keyIndex}`;
        }
        return wrapPromiseFn((resolve) => {
          originOpen(Object.assign(Object.assign({}, restConfig), {
            key: mergedKey,
            content: /* @__PURE__ */ React__namespace.createElement(PureContent, {
              prefixCls,
              type: type4,
              icon
            }, content),
            placement: "top",
            className: cx(type4 && `${noticePrefixCls}-${type4}`, className, message2 === null || message2 === void 0 ? void 0 : message2.className),
            style: Object.assign(Object.assign({}, message2 === null || message2 === void 0 ? void 0 : message2.style), style2),
            onClose: () => {
              onClose === null || onClose === void 0 ? void 0 : onClose();
              resolve();
            }
          }));
          return () => {
            close(mergedKey);
          };
        });
      };
      const destroy2 = (key) => {
        var _a;
        if (key !== void 0) {
          close(key);
        } else {
          (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
        }
      };
      const clone = {
        open: open2,
        destroy: destroy2
      };
      const keys2 = ["info", "success", "warning", "error", "loading"];
      keys2.forEach((type4) => {
        const typeOpen2 = (jointContent, duration, onClose) => {
          let config;
          if (jointContent && typeof jointContent === "object" && "content" in jointContent) {
            config = jointContent;
          } else {
            config = {
              content: jointContent
            };
          }
          let mergedDuration;
          let mergedOnClose;
          if (typeof duration === "function") {
            mergedOnClose = duration;
          } else {
            mergedDuration = duration;
            mergedOnClose = onClose;
          }
          const mergedConfig = Object.assign(Object.assign({
            onClose: mergedOnClose,
            duration: mergedDuration
          }, config), {
            type: type4
          });
          return open2(mergedConfig);
        };
        clone[type4] = typeOpen2;
      });
      return clone;
    }, []);
    return [wrapAPI, /* @__PURE__ */ React__namespace.createElement(Holder, Object.assign({
      key: "message-holder"
    }, messageConfig, {
      ref: holderRef
    }))];
  }
  function useMessage(messageConfig) {
    return useInternalMessage(messageConfig);
  }
  function usePatchElement() {
    const [elements, setElements] = React__namespace.useState([]);
    const patchElement = React__namespace.useCallback((element) => {
      setElements((originElements) => [].concat(_toConsumableArray(originElements), [element]));
      return () => {
        setElements((originElements) => originElements.filter((ele) => ele !== element));
      };
    }, []);
    return [elements, patchElement];
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function _regeneratorRuntime2() {
      return e2;
    };
    var t2, e2 = {}, r2 = Object.prototype, n2 = r2.hasOwnProperty, o2 = Object.defineProperty || function(t3, e3, r3) {
      t3[e3] = r3.value;
    }, i2 = "function" == typeof Symbol ? Symbol : {}, a2 = i2.iterator || "@@iterator", c2 = i2.asyncIterator || "@@asyncIterator", u2 = i2.toStringTag || "@@toStringTag";
    function define(t3, e3, r3) {
      return Object.defineProperty(t3, e3, {
        value: r3,
        enumerable: true,
        configurable: true,
        writable: true
      }), t3[e3];
    }
    try {
      define({}, "");
    } catch (t3) {
      define = function define2(t4, e3, r3) {
        return t4[e3] = r3;
      };
    }
    function wrap(t3, e3, r3, n3) {
      var i3 = e3 && e3.prototype instanceof Generator ? e3 : Generator, a3 = Object.create(i3.prototype), c3 = new Context2(n3 || []);
      return o2(a3, "_invoke", {
        value: makeInvokeMethod(t3, r3, c3)
      }), a3;
    }
    function tryCatch(t3, e3, r3) {
      try {
        return {
          type: "normal",
          arg: t3.call(e3, r3)
        };
      } catch (t4) {
        return {
          type: "throw",
          arg: t4
        };
      }
    }
    e2.wrap = wrap;
    var h2 = "suspendedStart", l2 = "suspendedYield", f2 = "executing", s2 = "completed", y2 = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var p2 = {};
    define(p2, a2, function() {
      return this;
    });
    var d2 = Object.getPrototypeOf, v2 = d2 && d2(d2(values([])));
    v2 && v2 !== r2 && n2.call(v2, a2) && (p2 = v2);
    var g2 = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p2);
    function defineIteratorMethods(t3) {
      ["next", "throw", "return"].forEach(function(e3) {
        define(t3, e3, function(t4) {
          return this._invoke(e3, t4);
        });
      });
    }
    function AsyncIterator(t3, e3) {
      function invoke(r4, o3, i3, a3) {
        var c3 = tryCatch(t3[r4], t3, o3);
        if ("throw" !== c3.type) {
          var u3 = c3.arg, h3 = u3.value;
          return h3 && "object" == _typeof(h3) && n2.call(h3, "__await") ? e3.resolve(h3.__await).then(function(t4) {
            invoke("next", t4, i3, a3);
          }, function(t4) {
            invoke("throw", t4, i3, a3);
          }) : e3.resolve(h3).then(function(t4) {
            u3.value = t4, i3(u3);
          }, function(t4) {
            return invoke("throw", t4, i3, a3);
          });
        }
        a3(c3.arg);
      }
      var r3;
      o2(this, "_invoke", {
        value: function value(t4, n3) {
          function callInvokeWithMethodAndArg() {
            return new e3(function(e4, r4) {
              invoke(t4, n3, e4, r4);
            });
          }
          return r3 = r3 ? r3.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e3, r3, n3) {
      var o3 = h2;
      return function(i3, a3) {
        if (o3 === f2)
          throw Error("Generator is already running");
        if (o3 === s2) {
          if ("throw" === i3)
            throw a3;
          return {
            value: t2,
            done: true
          };
        }
        for (n3.method = i3, n3.arg = a3; ; ) {
          var c3 = n3.delegate;
          if (c3) {
            var u3 = maybeInvokeDelegate(c3, n3);
            if (u3) {
              if (u3 === y2)
                continue;
              return u3;
            }
          }
          if ("next" === n3.method)
            n3.sent = n3._sent = n3.arg;
          else if ("throw" === n3.method) {
            if (o3 === h2)
              throw o3 = s2, n3.arg;
            n3.dispatchException(n3.arg);
          } else
            "return" === n3.method && n3.abrupt("return", n3.arg);
          o3 = f2;
          var p3 = tryCatch(e3, r3, n3);
          if ("normal" === p3.type) {
            if (o3 = n3.done ? s2 : l2, p3.arg === y2)
              continue;
            return {
              value: p3.arg,
              done: n3.done
            };
          }
          "throw" === p3.type && (o3 = s2, n3.method = "throw", n3.arg = p3.arg);
        }
      };
    }
    function maybeInvokeDelegate(e3, r3) {
      var n3 = r3.method, o3 = e3.iterator[n3];
      if (o3 === t2)
        return r3.delegate = null, "throw" === n3 && e3.iterator["return"] && (r3.method = "return", r3.arg = t2, maybeInvokeDelegate(e3, r3), "throw" === r3.method) || "return" !== n3 && (r3.method = "throw", r3.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), y2;
      var i3 = tryCatch(o3, e3.iterator, r3.arg);
      if ("throw" === i3.type)
        return r3.method = "throw", r3.arg = i3.arg, r3.delegate = null, y2;
      var a3 = i3.arg;
      return a3 ? a3.done ? (r3[e3.resultName] = a3.value, r3.next = e3.nextLoc, "return" !== r3.method && (r3.method = "next", r3.arg = t2), r3.delegate = null, y2) : a3 : (r3.method = "throw", r3.arg = new TypeError("iterator result is not an object"), r3.delegate = null, y2);
    }
    function pushTryEntry(t3) {
      var e3 = {
        tryLoc: t3[0]
      };
      1 in t3 && (e3.catchLoc = t3[1]), 2 in t3 && (e3.finallyLoc = t3[2], e3.afterLoc = t3[3]), this.tryEntries.push(e3);
    }
    function resetTryEntry(t3) {
      var e3 = t3.completion || {};
      e3.type = "normal", delete e3.arg, t3.completion = e3;
    }
    function Context2(t3) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t3.forEach(pushTryEntry, this), this.reset(true);
    }
    function values(e3) {
      if (e3 || "" === e3) {
        var r3 = e3[a2];
        if (r3)
          return r3.call(e3);
        if ("function" == typeof e3.next)
          return e3;
        if (!isNaN(e3.length)) {
          var o3 = -1, i3 = function next2() {
            for (; ++o3 < e3.length; )
              if (n2.call(e3, o3))
                return next2.value = e3[o3], next2.done = false, next2;
            return next2.value = t2, next2.done = true, next2;
          };
          return i3.next = i3;
        }
      }
      throw new TypeError(_typeof(e3) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o2(g2, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true
    }), o2(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u2, "GeneratorFunction"), e2.isGeneratorFunction = function(t3) {
      var e3 = "function" == typeof t3 && t3.constructor;
      return !!e3 && (e3 === GeneratorFunction || "GeneratorFunction" === (e3.displayName || e3.name));
    }, e2.mark = function(t3) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t3, GeneratorFunctionPrototype) : (t3.__proto__ = GeneratorFunctionPrototype, define(t3, u2, "GeneratorFunction")), t3.prototype = Object.create(g2), t3;
    }, e2.awrap = function(t3) {
      return {
        __await: t3
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c2, function() {
      return this;
    }), e2.AsyncIterator = AsyncIterator, e2.async = function(t3, r3, n3, o3, i3) {
      void 0 === i3 && (i3 = Promise);
      var a3 = new AsyncIterator(wrap(t3, r3, n3, o3), i3);
      return e2.isGeneratorFunction(r3) ? a3 : a3.next().then(function(t4) {
        return t4.done ? t4.value : a3.next();
      });
    }, defineIteratorMethods(g2), define(g2, u2, "Generator"), define(g2, a2, function() {
      return this;
    }), define(g2, "toString", function() {
      return "[object Generator]";
    }), e2.keys = function(t3) {
      var e3 = Object(t3), r3 = [];
      for (var n3 in e3)
        r3.push(n3);
      return r3.reverse(), function next2() {
        for (; r3.length; ) {
          var t4 = r3.pop();
          if (t4 in e3)
            return next2.value = t4, next2.done = false, next2;
        }
        return next2.done = true, next2;
      };
    }, e2.values = values, Context2.prototype = {
      constructor: Context2,
      reset: function reset(e3) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t2, this.done = false, this.delegate = null, this.method = "next", this.arg = t2, this.tryEntries.forEach(resetTryEntry), !e3)
          for (var r3 in this)
            "t" === r3.charAt(0) && n2.call(this, r3) && !isNaN(+r3.slice(1)) && (this[r3] = t2);
      },
      stop: function stop() {
        this.done = true;
        var t3 = this.tryEntries[0].completion;
        if ("throw" === t3.type)
          throw t3.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e3) {
        if (this.done)
          throw e3;
        var r3 = this;
        function handle(n3, o4) {
          return a3.type = "throw", a3.arg = e3, r3.next = n3, o4 && (r3.method = "next", r3.arg = t2), !!o4;
        }
        for (var o3 = this.tryEntries.length - 1; o3 >= 0; --o3) {
          var i3 = this.tryEntries[o3], a3 = i3.completion;
          if ("root" === i3.tryLoc)
            return handle("end");
          if (i3.tryLoc <= this.prev) {
            var c3 = n2.call(i3, "catchLoc"), u3 = n2.call(i3, "finallyLoc");
            if (c3 && u3) {
              if (this.prev < i3.catchLoc)
                return handle(i3.catchLoc, true);
              if (this.prev < i3.finallyLoc)
                return handle(i3.finallyLoc);
            } else if (c3) {
              if (this.prev < i3.catchLoc)
                return handle(i3.catchLoc, true);
            } else {
              if (!u3)
                throw Error("try statement without catch or finally");
              if (this.prev < i3.finallyLoc)
                return handle(i3.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t3, e3) {
        for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
          var o3 = this.tryEntries[r3];
          if (o3.tryLoc <= this.prev && n2.call(o3, "finallyLoc") && this.prev < o3.finallyLoc) {
            var i3 = o3;
            break;
          }
        }
        i3 && ("break" === t3 || "continue" === t3) && i3.tryLoc <= e3 && e3 <= i3.finallyLoc && (i3 = null);
        var a3 = i3 ? i3.completion : {};
        return a3.type = t3, a3.arg = e3, i3 ? (this.method = "next", this.next = i3.finallyLoc, y2) : this.complete(a3);
      },
      complete: function complete(t3, e3) {
        if ("throw" === t3.type)
          throw t3.arg;
        return "break" === t3.type || "continue" === t3.type ? this.next = t3.arg : "return" === t3.type ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : "normal" === t3.type && e3 && (this.next = e3), y2;
      },
      finish: function finish(t3) {
        for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
          var r3 = this.tryEntries[e3];
          if (r3.finallyLoc === t3)
            return this.complete(r3.completion, r3.afterLoc), resetTryEntry(r3), y2;
        }
      },
      "catch": function _catch(t3) {
        for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
          var r3 = this.tryEntries[e3];
          if (r3.tryLoc === t3) {
            var n3 = r3.completion;
            if ("throw" === n3.type) {
              var o3 = n3.arg;
              resetTryEntry(r3);
            }
            return o3;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e3, r3, n3) {
        return this.delegate = {
          iterator: values(e3),
          resultName: r3,
          nextLoc: n3
        }, "next" === this.method && (this.arg = t2), y2;
      }
    }, e2;
  }
  function asyncGeneratorStep(n2, t2, e2, r2, o2, a2, c2) {
    try {
      var i2 = n2[a2](c2), u2 = i2.value;
    } catch (n3) {
      return void e2(n3);
    }
    i2.done ? t2(u2) : Promise.resolve(u2).then(r2, o2);
  }
  function _asyncToGenerator(n2) {
    return function() {
      var t2 = this, e2 = arguments;
      return new Promise(function(r2, o2) {
        var a2 = n2.apply(t2, e2);
        function _next(n3) {
          asyncGeneratorStep(a2, r2, o2, _next, _throw, "next", n3);
        }
        function _throw(n3) {
          asyncGeneratorStep(a2, r2, o2, _next, _throw, "throw", n3);
        }
        _next(void 0);
      });
    };
  }
  var fullClone = _objectSpread2({}, ReactDOM__default__namespace);
  var version = fullClone.version, reactRender = fullClone.render, unmountComponentAtNode = fullClone.unmountComponentAtNode;
  var createRoot$1;
  try {
    var mainVersion = Number((version || "").split(".")[0]);
    if (mainVersion >= 18) {
      createRoot$1 = fullClone.createRoot;
    }
  } catch (e2) {
  }
  function toggleWarning(skip) {
    var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && _typeof(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === "object") {
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
    }
  }
  var MARK = "__rc_react_root__";
  function modernRender(node2, container) {
    toggleWarning(true);
    var root2 = container[MARK] || createRoot$1(container);
    toggleWarning(false);
    root2.render(node2);
    container[MARK] = root2;
  }
  function legacyRender(node2, container) {
    reactRender(node2, container);
  }
  function render(node2, container) {
    if (createRoot$1) {
      modernRender(node2, container);
      return;
    }
    legacyRender(node2, container);
  }
  function modernUnmount(_x) {
    return _modernUnmount.apply(this, arguments);
  }
  function _modernUnmount() {
    _modernUnmount = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(container) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1)
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", Promise.resolve().then(function() {
                var _container$MARK;
                (_container$MARK = container[MARK]) === null || _container$MARK === void 0 || _container$MARK.unmount();
                delete container[MARK];
              }));
            case 1:
            case "end":
              return _context.stop();
          }
      }, _callee);
    }));
    return _modernUnmount.apply(this, arguments);
  }
  function legacyUnmount(container) {
    unmountComponentAtNode(container);
  }
  function unmount(_x2) {
    return _unmount.apply(this, arguments);
  }
  function _unmount() {
    _unmount = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(container) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1)
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(createRoot$1 !== void 0)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", modernUnmount(container));
            case 2:
              legacyUnmount(container);
            case 3:
            case "end":
              return _context2.stop();
          }
      }, _callee2);
    }));
    return _unmount.apply(this, arguments);
  }
  const getTransitionName = (rootPrefixCls, motion, transitionName) => {
    if (transitionName !== void 0) {
      return transitionName;
    }
    return `${rootPrefixCls}-${motion}`;
  };
  const isVisible = function(element) {
    if (!element) {
      return false;
    }
    if (element instanceof Element) {
      if (element.offsetParent) {
        return true;
      }
      if (element.getBBox) {
        var _getBBox = element.getBBox(), width = _getBBox.width, height = _getBBox.height;
        if (width || height) {
          return true;
        }
      }
      if (element.getBoundingClientRect) {
        var _element$getBoundingC = element.getBoundingClientRect(), _width = _element$getBoundingC.width, _height = _element$getBoundingC.height;
        if (_width || _height) {
          return true;
        }
      }
    }
    return false;
  };
  const genWaveStyle = (token2) => {
    const {
      componentCls,
      colorPrimary: colorPrimary2
    } = token2;
    return {
      [componentCls]: {
        position: "absolute",
        background: "transparent",
        pointerEvents: "none",
        boxSizing: "border-box",
        color: `var(--wave-color, ${colorPrimary2})`,
        boxShadow: `0 0 0 0 currentcolor`,
        opacity: 0.2,
        // =================== Motion ===================
        "&.wave-motion-appear": {
          transition: [`box-shadow 0.4s ${token2.motionEaseOutCirc}`, `opacity 2s ${token2.motionEaseOutCirc}`].join(","),
          "&-active": {
            boxShadow: `0 0 0 6px currentcolor`,
            opacity: 0
          },
          "&.wave-quick": {
            transition: [`box-shadow ${token2.motionDurationSlow} ${token2.motionEaseInOut}`, `opacity ${token2.motionDurationSlow} ${token2.motionEaseInOut}`].join(",")
          }
        }
      }
    };
  };
  const useStyle$9 = genComponentStyleHook("Wave", (token2) => [genWaveStyle(token2)]);
  const TARGET_CLS = "ant-wave-target";
  function isNotGrey(color) {
    const match2 = (color || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
    if (match2 && match2[1] && match2[2] && match2[3]) {
      return !(match2[1] === match2[2] && match2[2] === match2[3]);
    }
    return true;
  }
  function isValidWaveColor(color) {
    return color && color !== "#fff" && color !== "#ffffff" && color !== "rgb(255, 255, 255)" && color !== "rgba(255, 255, 255, 1)" && isNotGrey(color) && !/rgba\((?:\d*, ){3}0\)/.test(color) && // any transparent rgba color
    color !== "transparent";
  }
  function getTargetWaveColor(node2) {
    const {
      borderTopColor,
      borderColor,
      backgroundColor
    } = getComputedStyle(node2);
    if (isValidWaveColor(borderTopColor)) {
      return borderTopColor;
    }
    if (isValidWaveColor(borderColor)) {
      return borderColor;
    }
    if (isValidWaveColor(backgroundColor)) {
      return backgroundColor;
    }
    return null;
  }
  function validateNum(value) {
    return Number.isNaN(value) ? 0 : value;
  }
  const WaveEffect = (props) => {
    const {
      className,
      target,
      component
    } = props;
    const divRef = React__namespace.useRef(null);
    const [color, setWaveColor] = React__namespace.useState(null);
    const [borderRadius, setBorderRadius] = React__namespace.useState([]);
    const [left, setLeft] = React__namespace.useState(0);
    const [top, setTop] = React__namespace.useState(0);
    const [width, setWidth] = React__namespace.useState(0);
    const [height, setHeight] = React__namespace.useState(0);
    const [enabled, setEnabled] = React__namespace.useState(false);
    const waveStyle = {
      left,
      top,
      width,
      height,
      borderRadius: borderRadius.map((radius) => `${radius}px`).join(" ")
    };
    if (color) {
      waveStyle["--wave-color"] = color;
    }
    function syncPos() {
      const nodeStyle = getComputedStyle(target);
      setWaveColor(getTargetWaveColor(target));
      const isStatic = nodeStyle.position === "static";
      const {
        borderLeftWidth,
        borderTopWidth
      } = nodeStyle;
      setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
      setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
      setWidth(target.offsetWidth);
      setHeight(target.offsetHeight);
      const {
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius
      } = nodeStyle;
      setBorderRadius([borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius].map((radius) => validateNum(parseFloat(radius))));
    }
    React__namespace.useEffect(() => {
      if (target) {
        const id = wrapperRaf(() => {
          syncPos();
          setEnabled(true);
        });
        let resizeObserver2;
        if (typeof ResizeObserver !== "undefined") {
          resizeObserver2 = new ResizeObserver(syncPos);
          resizeObserver2.observe(target);
        }
        return () => {
          wrapperRaf.cancel(id);
          resizeObserver2 === null || resizeObserver2 === void 0 ? void 0 : resizeObserver2.disconnect();
        };
      }
    }, []);
    if (!enabled) {
      return null;
    }
    const isSmallComponent = (component === "Checkbox" || component === "Radio") && (target === null || target === void 0 ? void 0 : target.classList.contains(TARGET_CLS));
    return /* @__PURE__ */ React__namespace.createElement(CSSMotion, {
      visible: true,
      motionAppear: true,
      motionName: "wave-motion",
      motionDeadline: 5e3,
      onAppearEnd: (_, event) => {
        var _a;
        if (event.deadline || event.propertyName === "opacity") {
          const holder = (_a = divRef.current) === null || _a === void 0 ? void 0 : _a.parentElement;
          unmount(holder).then(() => {
            holder === null || holder === void 0 ? void 0 : holder.remove();
          });
        }
        return false;
      }
    }, (_ref7, ref) => {
      let {
        className: motionClassName
      } = _ref7;
      return /* @__PURE__ */ React__namespace.createElement("div", {
        ref: composeRef(divRef, ref),
        className: cx(className, {
          "wave-quick": isSmallComponent
        }, motionClassName),
        style: waveStyle
      });
    });
  };
  const showWaveEffect = (target, info) => {
    var _a;
    const {
      component
    } = info;
    if (component === "Checkbox" && !((_a = target.querySelector("input")) === null || _a === void 0 ? void 0 : _a.checked)) {
      return;
    }
    const holder = document.createElement("div");
    holder.style.position = "absolute";
    holder.style.left = "0px";
    holder.style.top = "0px";
    target === null || target === void 0 ? void 0 : target.insertBefore(holder, target === null || target === void 0 ? void 0 : target.firstChild);
    render(/* @__PURE__ */ React__namespace.createElement(WaveEffect, Object.assign({}, info, {
      target
    })), holder);
  };
  const useWave = (nodeRef, className, component) => {
    const {
      wave
    } = React__namespace.useContext(ConfigContext);
    const [, token2, hashId] = useToken$1();
    const showWave = useEvent((event) => {
      const node2 = nodeRef.current;
      if ((wave === null || wave === void 0 ? void 0 : wave.disabled) || !node2) {
        return;
      }
      const targetNode = node2.querySelector(`.${TARGET_CLS}`) || node2;
      const {
        showEffect
      } = wave || {};
      (showEffect || showWaveEffect)(targetNode, {
        className,
        token: token2,
        component,
        event,
        hashId
      });
    });
    const rafId = React__namespace.useRef();
    const showDebounceWave = (event) => {
      wrapperRaf.cancel(rafId.current);
      rafId.current = wrapperRaf(() => {
        showWave(event);
      });
    };
    return showDebounceWave;
  };
  const Wave = (props) => {
    const {
      children,
      disabled,
      component
    } = props;
    const {
      getPrefixCls
    } = React.useContext(ConfigContext);
    const containerRef = React.useRef(null);
    const prefixCls = getPrefixCls("wave");
    const [, hashId] = useStyle$9(prefixCls);
    const showWave = useWave(containerRef, cx(prefixCls, hashId), component);
    React.useEffect(() => {
      const node2 = containerRef.current;
      if (!node2 || node2.nodeType !== 1 || disabled) {
        return;
      }
      const onClick = (e2) => {
        if (!isVisible(e2.target) || // No need wave
        !node2.getAttribute || node2.getAttribute("disabled") || node2.disabled || node2.className.includes("disabled") || node2.className.includes("-leave")) {
          return;
        }
        showWave(e2);
      };
      node2.addEventListener("click", onClick, true);
      return () => {
        node2.removeEventListener("click", onClick, true);
      };
    }, [disabled]);
    if (!/* @__PURE__ */ React.isValidElement(children)) {
      return children !== null && children !== void 0 ? children : null;
    }
    const ref = supportRef(children) ? composeRef(children.ref, containerRef) : containerRef;
    return cloneElement(children, {
      ref
    });
  };
  const useSize = (customSize) => {
    const size2 = React.useContext(SizeContext);
    const mergedSize = React.useMemo(() => {
      if (!customSize) {
        return size2;
      }
      if (typeof customSize === "string") {
        return customSize !== null && customSize !== void 0 ? customSize : size2;
      }
      if (customSize instanceof Function) {
        return customSize(size2);
      }
      return size2;
    }, [customSize, size2]);
    return mergedSize;
  };
  const SpaceCompactItemContext = /* @__PURE__ */ React__namespace.createContext(null);
  const useCompactItemContext = (prefixCls, direction) => {
    const compactItemContext = React__namespace.useContext(SpaceCompactItemContext);
    const compactItemClassnames = React__namespace.useMemo(() => {
      if (!compactItemContext) {
        return "";
      }
      const {
        compactDirection,
        isFirstItem,
        isLastItem
      } = compactItemContext;
      const separator = compactDirection === "vertical" ? "-vertical-" : "-";
      return cx(`${prefixCls}-compact${separator}item`, {
        [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
        [`${prefixCls}-compact${separator}last-item`]: isLastItem,
        [`${prefixCls}-compact${separator}item-rtl`]: direction === "rtl"
      });
    }, [prefixCls, direction, compactItemContext]);
    return {
      compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
      compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
      compactItemClassnames
    };
  };
  const NoCompactStyle = (_ref7) => {
    let {
      children
    } = _ref7;
    return /* @__PURE__ */ React__namespace.createElement(SpaceCompactItemContext.Provider, {
      value: null
    }, children);
  };
  var __rest$g = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  const GroupSizeContext = /* @__PURE__ */ React__namespace.createContext(void 0);
  const ButtonGroup = (props) => {
    const {
      getPrefixCls,
      direction
    } = React__namespace.useContext(ConfigContext);
    const {
      prefixCls: customizePrefixCls,
      size: size2,
      className
    } = props, others = __rest$g(props, ["prefixCls", "size", "className"]);
    const prefixCls = getPrefixCls("btn-group", customizePrefixCls);
    const [, , hashId] = useToken$1();
    let sizeCls = "";
    switch (size2) {
      case "large":
        sizeCls = "lg";
        break;
      case "small":
        sizeCls = "sm";
        break;
    }
    const classes = cx(prefixCls, {
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, className, hashId);
    return /* @__PURE__ */ React__namespace.createElement(GroupSizeContext.Provider, {
      value: size2
    }, /* @__PURE__ */ React__namespace.createElement("div", Object.assign({}, others, {
      className: classes
    })));
  };
  const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
  const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
  function convertLegacyProps(type4) {
    if (type4 === "danger") {
      return {
        danger: true
      };
    }
    return {
      type: type4
    };
  }
  function isString(str) {
    return typeof str === "string";
  }
  function isUnBorderedButtonType(type4) {
    return type4 === "text" || type4 === "link";
  }
  function splitCNCharsBySpace(child, needInserted) {
    if (child === null || child === void 0) {
      return;
    }
    const SPACE = needInserted ? " " : "";
    if (typeof child !== "string" && typeof child !== "number" && isString(child.type) && isTwoCNChar(child.props.children)) {
      return cloneElement(child, {
        children: child.props.children.split("").join(SPACE)
      });
    }
    if (isString(child)) {
      return isTwoCNChar(child) ? /* @__PURE__ */ React.createElement("span", null, child.split("").join(SPACE)) : /* @__PURE__ */ React.createElement("span", null, child);
    }
    if (isFragment(child)) {
      return /* @__PURE__ */ React.createElement("span", null, child);
    }
    return child;
  }
  function spaceChildren(children, needInserted) {
    let isPrevChildPure = false;
    const childList = [];
    React.Children.forEach(children, (child) => {
      const type4 = typeof child;
      const isCurrentChildPure = type4 === "string" || type4 === "number";
      if (isPrevChildPure && isCurrentChildPure) {
        const lastIndex = childList.length - 1;
        const lastChild = childList[lastIndex];
        childList[lastIndex] = `${lastChild}${child}`;
      } else {
        childList.push(child);
      }
      isPrevChildPure = isCurrentChildPure;
    });
    return React.Children.map(childList, (child) => splitCNCharsBySpace(child, needInserted));
  }
  const IconWrapper = /* @__PURE__ */ React.forwardRef((props, ref) => {
    const {
      className,
      style: style2,
      children,
      prefixCls
    } = props;
    const iconWrapperCls = cx(`${prefixCls}-icon`, className);
    return /* @__PURE__ */ React.createElement("span", {
      ref,
      className: iconWrapperCls,
      style: style2
    }, children);
  });
  const InnerLoadingIcon = /* @__PURE__ */ React.forwardRef((props, ref) => {
    const {
      prefixCls,
      className,
      style: style2,
      iconClassName
    } = props;
    const mergedIconCls = cx(`${prefixCls}-loading-icon`, className);
    return /* @__PURE__ */ React.createElement(IconWrapper, {
      prefixCls,
      className: mergedIconCls,
      style: style2,
      ref
    }, /* @__PURE__ */ React.createElement(RefIcon$4, {
      className: iconClassName
    }));
  });
  const getCollapsedWidth = () => ({
    width: 0,
    opacity: 0,
    transform: "scale(0)"
  });
  const getRealWidth = (node2) => ({
    width: node2.scrollWidth,
    opacity: 1,
    transform: "scale(1)"
  });
  const LoadingIcon = (props) => {
    const {
      prefixCls,
      loading,
      existIcon,
      className,
      style: style2
    } = props;
    const visible = !!loading;
    if (existIcon) {
      return /* @__PURE__ */ React.createElement(InnerLoadingIcon, {
        prefixCls,
        className,
        style: style2
      });
    }
    return /* @__PURE__ */ React.createElement(CSSMotion, {
      visible,
      // We do not really use this motionName
      motionName: `${prefixCls}-loading-icon-motion`,
      motionLeave: visible,
      removeOnLeave: true,
      onAppearStart: getCollapsedWidth,
      onAppearActive: getRealWidth,
      onEnterStart: getCollapsedWidth,
      onEnterActive: getRealWidth,
      onLeaveStart: getRealWidth,
      onLeaveActive: getCollapsedWidth
    }, (_ref7, ref) => {
      let {
        className: motionCls,
        style: motionStyle
      } = _ref7;
      return /* @__PURE__ */ React.createElement(InnerLoadingIcon, {
        prefixCls,
        className,
        style: Object.assign(Object.assign({}, style2), motionStyle),
        ref,
        iconClassName: motionCls
      });
    });
  };
  const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
    // Border
    [`> span, > ${buttonTypeCls}`]: {
      "&:not(:last-child)": {
        [`&, & > ${buttonTypeCls}`]: {
          "&:not(:disabled)": {
            borderInlineEndColor: borderColor
          }
        }
      },
      "&:not(:first-child)": {
        [`&, & > ${buttonTypeCls}`]: {
          "&:not(:disabled)": {
            borderInlineStartColor: borderColor
          }
        }
      }
    }
  });
  const genGroupStyle$1 = (token2) => {
    const {
      componentCls,
      fontSize,
      lineWidth,
      groupBorderColor,
      colorErrorHover
    } = token2;
    return {
      [`${componentCls}-group`]: [
        {
          position: "relative",
          display: "inline-flex",
          // Border
          [`> span, > ${componentCls}`]: {
            "&:not(:last-child)": {
              [`&, & > ${componentCls}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
              }
            },
            "&:not(:first-child)": {
              marginInlineStart: token2.calc(lineWidth).mul(-1).equal(),
              [`&, & > ${componentCls}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
              }
            }
          },
          [componentCls]: {
            position: "relative",
            zIndex: 1,
            [`&:hover,
          &:focus,
          &:active`]: {
              zIndex: 2
            },
            "&[disabled]": {
              zIndex: 0
            }
          },
          [`${componentCls}-icon-only`]: {
            fontSize
          }
        },
        // Border Color
        genButtonBorderStyle(`${componentCls}-primary`, groupBorderColor),
        genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)
      ]
    };
  };
  const prepareToken$1 = (token2) => {
    const {
      paddingInline,
      onlyIconSize,
      paddingBlock
    } = token2;
    const buttonToken = merge$1(token2, {
      buttonPaddingHorizontal: paddingInline,
      buttonPaddingVertical: paddingBlock,
      buttonIconOnlyFontSize: onlyIconSize
    });
    return buttonToken;
  };
  const prepareComponentToken$4 = (token2) => {
    var _a, _b, _c, _d, _e, _f;
    const contentFontSize = (_a = token2.contentFontSize) !== null && _a !== void 0 ? _a : token2.fontSize;
    const contentFontSizeSM = (_b = token2.contentFontSizeSM) !== null && _b !== void 0 ? _b : token2.fontSize;
    const contentFontSizeLG = (_c = token2.contentFontSizeLG) !== null && _c !== void 0 ? _c : token2.fontSizeLG;
    const contentLineHeight = (_d = token2.contentLineHeight) !== null && _d !== void 0 ? _d : getLineHeight(contentFontSize);
    const contentLineHeightSM = (_e = token2.contentLineHeightSM) !== null && _e !== void 0 ? _e : getLineHeight(contentFontSizeSM);
    const contentLineHeightLG = (_f = token2.contentLineHeightLG) !== null && _f !== void 0 ? _f : getLineHeight(contentFontSizeLG);
    return {
      fontWeight: 400,
      defaultShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlTmpOutline}`,
      primaryShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlOutline}`,
      dangerShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.colorErrorOutline}`,
      primaryColor: token2.colorTextLightSolid,
      dangerColor: token2.colorTextLightSolid,
      borderColorDisabled: token2.colorBorder,
      defaultGhostColor: token2.colorBgContainer,
      ghostBg: "transparent",
      defaultGhostBorderColor: token2.colorBgContainer,
      paddingInline: token2.paddingContentHorizontal - token2.lineWidth,
      paddingInlineLG: token2.paddingContentHorizontal - token2.lineWidth,
      paddingInlineSM: 8 - token2.lineWidth,
      onlyIconSize: token2.fontSizeLG,
      onlyIconSizeSM: token2.fontSizeLG - 2,
      onlyIconSizeLG: token2.fontSizeLG + 2,
      groupBorderColor: token2.colorPrimaryHover,
      linkHoverBg: "transparent",
      textHoverBg: token2.colorBgTextHover,
      defaultColor: token2.colorText,
      defaultBg: token2.colorBgContainer,
      defaultBorderColor: token2.colorBorder,
      defaultBorderColorDisabled: token2.colorBorder,
      defaultHoverBg: token2.colorBgContainer,
      defaultHoverColor: token2.colorPrimaryHover,
      defaultHoverBorderColor: token2.colorPrimaryHover,
      defaultActiveBg: token2.colorBgContainer,
      defaultActiveColor: token2.colorPrimaryActive,
      defaultActiveBorderColor: token2.colorPrimaryActive,
      contentFontSize,
      contentFontSizeSM,
      contentFontSizeLG,
      contentLineHeight,
      contentLineHeightSM,
      contentLineHeightLG,
      paddingBlock: Math.max((token2.controlHeight - contentFontSize * contentLineHeight) / 2 - token2.lineWidth, 0),
      paddingBlockSM: Math.max((token2.controlHeightSM - contentFontSizeSM * contentLineHeightSM) / 2 - token2.lineWidth, 0),
      paddingBlockLG: Math.max((token2.controlHeightLG - contentFontSizeLG * contentLineHeightLG) / 2 - token2.lineWidth, 0)
    };
  };
  const genSharedButtonStyle = (token2) => {
    const {
      componentCls,
      iconCls,
      fontWeight
    } = token2;
    return {
      [componentCls]: {
        outline: "none",
        position: "relative",
        display: "inline-flex",
        gap: token2.marginXS,
        alignItems: "center",
        justifyContent: "center",
        fontWeight,
        whiteSpace: "nowrap",
        textAlign: "center",
        backgroundImage: "none",
        background: "transparent",
        border: `${unit$1(token2.lineWidth)} ${token2.lineType} transparent`,
        cursor: "pointer",
        transition: `all ${token2.motionDurationMid} ${token2.motionEaseInOut}`,
        userSelect: "none",
        touchAction: "manipulation",
        color: token2.colorText,
        "&:disabled > *": {
          pointerEvents: "none"
        },
        "> span": {
          display: "inline-block"
        },
        [`${componentCls}-icon`]: {
          lineHeight: 1
        },
        "> a": {
          color: "currentColor"
        },
        "&:not(:disabled)": Object.assign({}, genFocusStyle(token2)),
        [`&${componentCls}-two-chinese-chars::first-letter`]: {
          letterSpacing: "0.34em"
        },
        [`&${componentCls}-two-chinese-chars > *:not(${iconCls})`]: {
          marginInlineEnd: "-0.34em",
          letterSpacing: "0.34em"
        },
        // iconPosition="end"
        "&-icon-end": {
          flexDirection: "row-reverse"
        }
      }
    };
  };
  const genHoverActiveButtonStyle = (btnCls, hoverStyle, activeStyle) => ({
    [`&:not(:disabled):not(${btnCls}-disabled)`]: {
      "&:hover": hoverStyle,
      "&:active": activeStyle
    }
  });
  const genCircleButtonStyle = (token2) => ({
    minWidth: token2.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: "50%"
  });
  const genRoundButtonStyle = (token2) => ({
    borderRadius: token2.controlHeight,
    paddingInlineStart: token2.calc(token2.controlHeight).div(2).equal(),
    paddingInlineEnd: token2.calc(token2.controlHeight).div(2).equal()
  });
  const genDisabledStyle$1 = (token2) => ({
    cursor: "not-allowed",
    borderColor: token2.borderColorDisabled,
    color: token2.colorTextDisabled,
    background: token2.colorBgContainerDisabled,
    boxShadow: "none"
  });
  const genGhostButtonStyle = (btnCls, background, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
    [`&${btnCls}-background-ghost`]: Object.assign(Object.assign({
      color: textColor || void 0,
      background,
      borderColor: borderColor || void 0,
      boxShadow: "none"
    }, genHoverActiveButtonStyle(btnCls, Object.assign({
      background
    }, hoverStyle), Object.assign({
      background
    }, activeStyle))), {
      "&:disabled": {
        cursor: "not-allowed",
        color: textColorDisabled || void 0,
        borderColor: borderColorDisabled || void 0
      }
    })
  });
  const genSolidDisabledButtonStyle = (token2) => ({
    [`&:disabled, &${token2.componentCls}-disabled`]: Object.assign({}, genDisabledStyle$1(token2))
  });
  const genSolidButtonStyle = (token2) => Object.assign({}, genSolidDisabledButtonStyle(token2));
  const genPureDisabledButtonStyle = (token2) => ({
    [`&:disabled, &${token2.componentCls}-disabled`]: {
      cursor: "not-allowed",
      color: token2.colorTextDisabled
    }
  });
  const genDefaultButtonStyle = (token2) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token2)), {
    background: token2.defaultBg,
    borderColor: token2.defaultBorderColor,
    color: token2.defaultColor,
    boxShadow: token2.defaultShadow
  }), genHoverActiveButtonStyle(token2.componentCls, {
    color: token2.defaultHoverColor,
    borderColor: token2.defaultHoverBorderColor,
    background: token2.defaultHoverBg
  }, {
    color: token2.defaultActiveColor,
    borderColor: token2.defaultActiveBorderColor,
    background: token2.defaultActiveBg
  })), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.defaultGhostColor, token2.defaultGhostBorderColor, token2.colorTextDisabled, token2.colorBorder)), {
    [`&${token2.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
      color: token2.colorError,
      borderColor: token2.colorError
    }, genHoverActiveButtonStyle(token2.componentCls, {
      color: token2.colorErrorHover,
      borderColor: token2.colorErrorBorderHover
    }, {
      color: token2.colorErrorActive,
      borderColor: token2.colorErrorActive
    })), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorError, token2.colorError, token2.colorTextDisabled, token2.colorBorder)), genSolidDisabledButtonStyle(token2))
  });
  const genPrimaryButtonStyle = (token2) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token2)), {
    color: token2.primaryColor,
    background: token2.colorPrimary,
    boxShadow: token2.primaryShadow
  }), genHoverActiveButtonStyle(token2.componentCls, {
    color: token2.colorTextLightSolid,
    background: token2.colorPrimaryHover
  }, {
    color: token2.colorTextLightSolid,
    background: token2.colorPrimaryActive
  })), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorPrimary, token2.colorPrimary, token2.colorTextDisabled, token2.colorBorder, {
    color: token2.colorPrimaryHover,
    borderColor: token2.colorPrimaryHover
  }, {
    color: token2.colorPrimaryActive,
    borderColor: token2.colorPrimaryActive
  })), {
    [`&${token2.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
      background: token2.colorError,
      boxShadow: token2.dangerShadow,
      color: token2.dangerColor
    }, genHoverActiveButtonStyle(token2.componentCls, {
      background: token2.colorErrorHover
    }, {
      background: token2.colorErrorActive
    })), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorError, token2.colorError, token2.colorTextDisabled, token2.colorBorder, {
      color: token2.colorErrorHover,
      borderColor: token2.colorErrorHover
    }, {
      color: token2.colorErrorActive,
      borderColor: token2.colorErrorActive
    })), genSolidDisabledButtonStyle(token2))
  });
  const genDashedButtonStyle = (token2) => Object.assign(Object.assign({}, genDefaultButtonStyle(token2)), {
    borderStyle: "dashed"
  });
  const genLinkButtonStyle = (token2) => Object.assign(Object.assign(Object.assign({
    color: token2.colorLink
  }, genHoverActiveButtonStyle(token2.componentCls, {
    color: token2.colorLinkHover,
    background: token2.linkHoverBg
  }, {
    color: token2.colorLinkActive
  })), genPureDisabledButtonStyle(token2)), {
    [`&${token2.componentCls}-dangerous`]: Object.assign(Object.assign({
      color: token2.colorError
    }, genHoverActiveButtonStyle(token2.componentCls, {
      color: token2.colorErrorHover
    }, {
      color: token2.colorErrorActive
    })), genPureDisabledButtonStyle(token2))
  });
  const genTextButtonStyle = (token2) => Object.assign(Object.assign(Object.assign({}, genHoverActiveButtonStyle(token2.componentCls, {
    color: token2.colorText,
    background: token2.textHoverBg
  }, {
    color: token2.colorText,
    background: token2.colorBgTextActive
  })), genPureDisabledButtonStyle(token2)), {
    [`&${token2.componentCls}-dangerous`]: Object.assign(Object.assign({
      color: token2.colorError
    }, genPureDisabledButtonStyle(token2)), genHoverActiveButtonStyle(token2.componentCls, {
      color: token2.colorErrorHover,
      background: token2.colorErrorBg
    }, {
      color: token2.colorErrorHover,
      background: token2.colorErrorBgActive
    }))
  });
  const genTypeButtonStyle = (token2) => {
    const {
      componentCls
    } = token2;
    return {
      [`${componentCls}-default`]: genDefaultButtonStyle(token2),
      [`${componentCls}-primary`]: genPrimaryButtonStyle(token2),
      [`${componentCls}-dashed`]: genDashedButtonStyle(token2),
      [`${componentCls}-link`]: genLinkButtonStyle(token2),
      [`${componentCls}-text`]: genTextButtonStyle(token2),
      [`${componentCls}-ghost`]: genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorBgContainer, token2.colorBgContainer, token2.colorTextDisabled, token2.colorBorder)
    };
  };
  const genButtonStyle = function(token2) {
    let prefixCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const {
      componentCls,
      controlHeight,
      fontSize,
      lineHeight,
      borderRadius,
      buttonPaddingHorizontal,
      iconCls,
      buttonPaddingVertical
    } = token2;
    const iconOnlyCls = `${componentCls}-icon-only`;
    return [
      {
        [`${prefixCls}`]: {
          fontSize,
          lineHeight,
          height: controlHeight,
          padding: `${unit$1(buttonPaddingVertical)} ${unit$1(buttonPaddingHorizontal)}`,
          borderRadius,
          [`&${iconOnlyCls}`]: {
            width: controlHeight,
            paddingInline: 0,
            // make `btn-icon-only` not too narrow
            [`&${componentCls}-compact-item`]: {
              flex: "none"
            },
            [`&${componentCls}-round`]: {
              width: "auto"
            },
            [iconCls]: {
              fontSize: token2.buttonIconOnlyFontSize
            }
          },
          // Loading
          [`&${componentCls}-loading`]: {
            opacity: token2.opacityLoading,
            cursor: "default"
          },
          [`${componentCls}-loading-icon`]: {
            transition: `width ${token2.motionDurationSlow} ${token2.motionEaseInOut}, opacity ${token2.motionDurationSlow} ${token2.motionEaseInOut}`
          }
        }
      },
      // Shape - patch prefixCls again to override solid border radius style
      {
        [`${componentCls}${componentCls}-circle${prefixCls}`]: genCircleButtonStyle(token2)
      },
      {
        [`${componentCls}${componentCls}-round${prefixCls}`]: genRoundButtonStyle(token2)
      }
    ];
  };
  const genSizeBaseButtonStyle = (token2) => {
    const baseToken = merge$1(token2, {
      fontSize: token2.contentFontSize,
      lineHeight: token2.contentLineHeight
    });
    return genButtonStyle(baseToken, token2.componentCls);
  };
  const genSizeSmallButtonStyle = (token2) => {
    const smallToken = merge$1(token2, {
      controlHeight: token2.controlHeightSM,
      fontSize: token2.contentFontSizeSM,
      lineHeight: token2.contentLineHeightSM,
      padding: token2.paddingXS,
      buttonPaddingHorizontal: token2.paddingInlineSM,
      buttonPaddingVertical: token2.paddingBlockSM,
      borderRadius: token2.borderRadiusSM,
      buttonIconOnlyFontSize: token2.onlyIconSizeSM
    });
    return genButtonStyle(smallToken, `${token2.componentCls}-sm`);
  };
  const genSizeLargeButtonStyle = (token2) => {
    const largeToken = merge$1(token2, {
      controlHeight: token2.controlHeightLG,
      fontSize: token2.contentFontSizeLG,
      lineHeight: token2.contentLineHeightLG,
      buttonPaddingHorizontal: token2.paddingInlineLG,
      buttonPaddingVertical: token2.paddingBlockLG,
      borderRadius: token2.borderRadiusLG,
      buttonIconOnlyFontSize: token2.onlyIconSizeLG
    });
    return genButtonStyle(largeToken, `${token2.componentCls}-lg`);
  };
  const genBlockButtonStyle = (token2) => {
    const {
      componentCls
    } = token2;
    return {
      [componentCls]: {
        [`&${componentCls}-block`]: {
          width: "100%"
        }
      }
    };
  };
  const useStyle$8 = genStyleHooks("Button", (token2) => {
    const buttonToken = prepareToken$1(token2);
    return [
      // Shared
      genSharedButtonStyle(buttonToken),
      // Size
      genSizeBaseButtonStyle(buttonToken),
      genSizeSmallButtonStyle(buttonToken),
      genSizeLargeButtonStyle(buttonToken),
      // Block
      genBlockButtonStyle(buttonToken),
      // Group (type, ghost, danger, loading)
      genTypeButtonStyle(buttonToken),
      // Button Group
      genGroupStyle$1(buttonToken)
    ];
  }, prepareComponentToken$4, {
    unitless: {
      fontWeight: true,
      contentLineHeight: true,
      contentLineHeightSM: true,
      contentLineHeightLG: true
    }
  });
  function compactItemBorder(token2, parentCls, options) {
    const {
      focusElCls,
      focus,
      borderElCls
    } = options;
    const childCombinator = borderElCls ? "> *" : "";
    const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n2) => `&:${n2} ${childCombinator}`).join(",");
    return {
      [`&-item:not(${parentCls}-last-item)`]: {
        marginInlineEnd: token2.calc(token2.lineWidth).mul(-1).equal()
      },
      "&-item": Object.assign(Object.assign({
        [hoverEffects]: {
          zIndex: 2
        }
      }, focusElCls ? {
        [`&${focusElCls}`]: {
          zIndex: 2
        }
      } : {}), {
        [`&[disabled] ${childCombinator}`]: {
          zIndex: 0
        }
      })
    };
  }
  function compactItemBorderRadius(prefixCls, parentCls, options) {
    const {
      borderElCls
    } = options;
    const childCombinator = borderElCls ? `> ${borderElCls}` : "";
    return {
      [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
        borderRadius: 0
      },
      [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
        [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0
        }
      },
      [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
        [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0
        }
      }
    };
  }
  function genCompactItemStyle(token2) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      focus: true
    };
    const {
      componentCls
    } = token2;
    const compactCls = `${componentCls}-compact`;
    return {
      [compactCls]: Object.assign(Object.assign({}, compactItemBorder(token2, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
    };
  }
  function compactItemVerticalBorder(token2, parentCls) {
    return {
      // border collapse
      [`&-item:not(${parentCls}-last-item)`]: {
        marginBottom: token2.calc(token2.lineWidth).mul(-1).equal()
      },
      "&-item": {
        "&:hover,&:focus,&:active": {
          zIndex: 2
        },
        "&[disabled]": {
          zIndex: 0
        }
      }
    };
  }
  function compactItemBorderVerticalRadius(prefixCls, parentCls) {
    return {
      [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
        borderRadius: 0
      },
      [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
        [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
          borderEndEndRadius: 0,
          borderEndStartRadius: 0
        }
      },
      [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
        [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
          borderStartStartRadius: 0,
          borderStartEndRadius: 0
        }
      }
    };
  }
  function genCompactItemVerticalStyle(token2) {
    const compactCls = `${token2.componentCls}-compact-vertical`;
    return {
      [compactCls]: Object.assign(Object.assign({}, compactItemVerticalBorder(token2, compactCls)), compactItemBorderVerticalRadius(token2.componentCls, compactCls))
    };
  }
  const genButtonCompactStyle = (token2) => {
    const {
      componentCls,
      calc
    } = token2;
    return {
      [componentCls]: {
        // Special styles for Primary Button
        [`&-compact-item${componentCls}-primary`]: {
          [`&:not([disabled]) + ${componentCls}-compact-item${componentCls}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: calc(token2.lineWidth).mul(-1).equal(),
              insetInlineStart: calc(token2.lineWidth).mul(-1).equal(),
              display: "inline-block",
              width: token2.lineWidth,
              height: `calc(100% + ${unit$1(token2.lineWidth)} * 2)`,
              backgroundColor: token2.colorPrimaryHover,
              content: '""'
            }
          }
        },
        // Special styles for Primary Button
        "&-compact-vertical-item": {
          [`&${componentCls}-primary`]: {
            [`&:not([disabled]) + ${componentCls}-compact-vertical-item${componentCls}-primary:not([disabled])`]: {
              position: "relative",
              "&:before": {
                position: "absolute",
                top: calc(token2.lineWidth).mul(-1).equal(),
                insetInlineStart: calc(token2.lineWidth).mul(-1).equal(),
                display: "inline-block",
                width: `calc(100% + ${unit$1(token2.lineWidth)} * 2)`,
                height: token2.lineWidth,
                backgroundColor: token2.colorPrimaryHover,
                content: '""'
              }
            }
          }
        }
      }
    };
  };
  const CompactCmp = genSubStyleComponent(["Button", "compact"], (token2) => {
    const buttonToken = prepareToken$1(token2);
    return [
      // Space Compact
      genCompactItemStyle(buttonToken),
      genCompactItemVerticalStyle(buttonToken),
      genButtonCompactStyle(buttonToken)
    ];
  }, prepareComponentToken$4);
  var __rest$f = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  function getLoadingConfig(loading) {
    if (typeof loading === "object" && loading) {
      let delay = loading === null || loading === void 0 ? void 0 : loading.delay;
      delay = !Number.isNaN(delay) && typeof delay === "number" ? delay : 0;
      return {
        loading: delay <= 0,
        delay
      };
    }
    return {
      loading: !!loading,
      delay: 0
    };
  }
  const InternalCompoundedButton = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var _a, _b, _c;
    const {
      loading = false,
      prefixCls: customizePrefixCls,
      type: type4,
      danger = false,
      shape = "default",
      size: customizeSize,
      styles,
      disabled: customDisabled,
      className,
      rootClassName,
      children,
      icon,
      iconPosition = "start",
      ghost = false,
      block = false,
      // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
      htmlType = "button",
      classNames: customClassNames,
      style: customStyle = {},
      autoInsertSpace
    } = props, rest = __rest$f(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace"]);
    const mergedType = type4 || "default";
    const {
      getPrefixCls,
      direction,
      button
    } = React.useContext(ConfigContext);
    const mergedInsertSpace = (_a = autoInsertSpace !== null && autoInsertSpace !== void 0 ? autoInsertSpace : button === null || button === void 0 ? void 0 : button.autoInsertSpace) !== null && _a !== void 0 ? _a : true;
    const prefixCls = getPrefixCls("btn", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$8(prefixCls);
    const disabled = React.useContext(DisabledContext);
    const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    const groupSize = React.useContext(GroupSizeContext);
    const loadingOrDelay = React.useMemo(() => getLoadingConfig(loading), [loading]);
    const [innerLoading, setLoading] = React.useState(loadingOrDelay.loading);
    const [hasTwoCNChar, setHasTwoCNChar] = React.useState(false);
    const internalRef = /* @__PURE__ */ React.createRef();
    const buttonRef = composeRef(ref, internalRef);
    const needInserted = React.Children.count(children) === 1 && !icon && !isUnBorderedButtonType(mergedType);
    React.useEffect(() => {
      let delayTimer = null;
      if (loadingOrDelay.delay > 0) {
        delayTimer = setTimeout(() => {
          delayTimer = null;
          setLoading(true);
        }, loadingOrDelay.delay);
      } else {
        setLoading(loadingOrDelay.loading);
      }
      function cleanupTimer() {
        if (delayTimer) {
          clearTimeout(delayTimer);
          delayTimer = null;
        }
      }
      return cleanupTimer;
    }, [loadingOrDelay]);
    React.useEffect(() => {
      if (!buttonRef || !buttonRef.current || !mergedInsertSpace) {
        return;
      }
      const buttonText = buttonRef.current.textContent;
      if (needInserted && isTwoCNChar(buttonText)) {
        if (!hasTwoCNChar) {
          setHasTwoCNChar(true);
        }
      } else if (hasTwoCNChar) {
        setHasTwoCNChar(false);
      }
    }, [buttonRef]);
    const handleClick = (e2) => {
      const {
        onClick
      } = props;
      if (innerLoading || mergedDisabled) {
        e2.preventDefault();
        return;
      }
      onClick === null || onClick === void 0 ? void 0 : onClick(e2);
    };
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    const sizeClassNameMap = {
      large: "lg",
      small: "sm",
      middle: void 0
    };
    const sizeFullName = useSize((ctxSize) => {
      var _a2, _b2;
      return (_b2 = (_a2 = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a2 !== void 0 ? _a2 : groupSize) !== null && _b2 !== void 0 ? _b2 : ctxSize;
    });
    const sizeCls = sizeFullName ? sizeClassNameMap[sizeFullName] || "" : "";
    const iconType = innerLoading ? "loading" : icon;
    const linkButtonRestProps = omit(rest, ["navigate"]);
    const classes = cx(prefixCls, hashId, cssVarCls, {
      [`${prefixCls}-${shape}`]: shape !== "default" && shape,
      [`${prefixCls}-${mergedType}`]: mergedType,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
      [`${prefixCls}-background-ghost`]: ghost && !isUnBorderedButtonType(mergedType),
      [`${prefixCls}-loading`]: innerLoading,
      [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar && mergedInsertSpace && !innerLoading,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-dangerous`]: danger,
      [`${prefixCls}-rtl`]: direction === "rtl",
      [`${prefixCls}-icon-end`]: iconPosition === "end"
    }, compactItemClassnames, className, rootClassName, button === null || button === void 0 ? void 0 : button.className);
    const fullStyle = Object.assign(Object.assign({}, button === null || button === void 0 ? void 0 : button.style), customStyle);
    const iconClasses = cx(customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.icon, (_b = button === null || button === void 0 ? void 0 : button.classNames) === null || _b === void 0 ? void 0 : _b.icon);
    const iconStyle = Object.assign(Object.assign({}, (styles === null || styles === void 0 ? void 0 : styles.icon) || {}), ((_c = button === null || button === void 0 ? void 0 : button.styles) === null || _c === void 0 ? void 0 : _c.icon) || {});
    const iconNode = icon && !innerLoading ? /* @__PURE__ */ React.createElement(IconWrapper, {
      prefixCls,
      className: iconClasses,
      style: iconStyle
    }, icon) : /* @__PURE__ */ React.createElement(LoadingIcon, {
      existIcon: !!icon,
      prefixCls,
      loading: innerLoading
    });
    const kids = children || children === 0 ? spaceChildren(children, needInserted && mergedInsertSpace) : null;
    if (linkButtonRestProps.href !== void 0) {
      return wrapCSSVar(/* @__PURE__ */ React.createElement("a", Object.assign({}, linkButtonRestProps, {
        className: cx(classes, {
          [`${prefixCls}-disabled`]: mergedDisabled
        }),
        href: mergedDisabled ? void 0 : linkButtonRestProps.href,
        style: fullStyle,
        onClick: handleClick,
        ref: buttonRef,
        tabIndex: mergedDisabled ? -1 : 0
      }), iconNode, kids));
    }
    let buttonNode = /* @__PURE__ */ React.createElement("button", Object.assign({}, rest, {
      type: htmlType,
      className: classes,
      style: fullStyle,
      onClick: handleClick,
      disabled: mergedDisabled,
      ref: buttonRef
    }), iconNode, kids, !!compactItemClassnames && /* @__PURE__ */ React.createElement(CompactCmp, {
      key: "compact",
      prefixCls
    }));
    if (!isUnBorderedButtonType(mergedType)) {
      buttonNode = /* @__PURE__ */ React.createElement(Wave, {
        component: "Button",
        disabled: innerLoading
      }, buttonNode);
    }
    return wrapCSSVar(buttonNode);
  });
  const Button = InternalCompoundedButton;
  Button.Group = ButtonGroup;
  Button.__ANT_BUTTON = true;
  function isThenable(thing) {
    return !!(thing && thing.then);
  }
  const ActionButton = (props) => {
    const {
      type: type4,
      children,
      prefixCls,
      buttonProps,
      close,
      autoFocus,
      emitEvent,
      isSilent,
      quitOnNullishReturnValue,
      actionFn
    } = props;
    const clickedRef = React__namespace.useRef(false);
    const buttonRef = React__namespace.useRef(null);
    const [loading, setLoading] = useSafeState(false);
    const onInternalClose = function() {
      close === null || close === void 0 ? void 0 : close.apply(void 0, arguments);
    };
    React__namespace.useEffect(() => {
      let timeoutId = null;
      if (autoFocus) {
        timeoutId = setTimeout(() => {
          var _a;
          (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        });
      }
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }, []);
    const handlePromiseOnOk = (returnValueOfOnOk) => {
      if (!isThenable(returnValueOfOnOk)) {
        return;
      }
      setLoading(true);
      returnValueOfOnOk.then(function() {
        setLoading(false, true);
        onInternalClose.apply(void 0, arguments);
        clickedRef.current = false;
      }, (e2) => {
        setLoading(false, true);
        clickedRef.current = false;
        if (isSilent === null || isSilent === void 0 ? void 0 : isSilent()) {
          return;
        }
        return Promise.reject(e2);
      });
    };
    const onClick = (e2) => {
      if (clickedRef.current) {
        return;
      }
      clickedRef.current = true;
      if (!actionFn) {
        onInternalClose();
        return;
      }
      let returnValueOfOnOk;
      if (emitEvent) {
        returnValueOfOnOk = actionFn(e2);
        if (quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
          clickedRef.current = false;
          onInternalClose(e2);
          return;
        }
      } else if (actionFn.length) {
        returnValueOfOnOk = actionFn(close);
        clickedRef.current = false;
      } else {
        returnValueOfOnOk = actionFn();
        if (!isThenable(returnValueOfOnOk)) {
          onInternalClose();
          return;
        }
      }
      handlePromiseOnOk(returnValueOfOnOk);
    };
    return /* @__PURE__ */ React__namespace.createElement(Button, Object.assign({}, convertLegacyProps(type4), {
      onClick,
      loading,
      prefixCls
    }, buttonProps, {
      ref: buttonRef
    }), children);
  };
  const ModalContext = /* @__PURE__ */ React.createContext({});
  const {
    Provider: ModalContextProvider
  } = ModalContext;
  const ConfirmCancelBtn = () => {
    const {
      autoFocusButton,
      cancelButtonProps,
      cancelTextLocale,
      isSilent,
      mergedOkCancel,
      rootPrefixCls,
      close,
      onCancel,
      onConfirm
    } = React.useContext(ModalContext);
    return mergedOkCancel ? /* @__PURE__ */ React.createElement(ActionButton, {
      isSilent,
      actionFn: onCancel,
      close: function() {
        close === null || close === void 0 ? void 0 : close.apply(void 0, arguments);
        onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(false);
      },
      autoFocus: autoFocusButton === "cancel",
      buttonProps: cancelButtonProps,
      prefixCls: `${rootPrefixCls}-btn`
    }, cancelTextLocale) : null;
  };
  const ConfirmOkBtn = () => {
    const {
      autoFocusButton,
      close,
      isSilent,
      okButtonProps,
      rootPrefixCls,
      okTextLocale,
      okType,
      onConfirm,
      onOk
    } = React.useContext(ModalContext);
    return /* @__PURE__ */ React.createElement(ActionButton, {
      isSilent,
      type: okType || "primary",
      actionFn: onOk,
      close: function() {
        close === null || close === void 0 ? void 0 : close.apply(void 0, arguments);
        onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(true);
      },
      autoFocus: autoFocusButton === "ok",
      buttonProps: okButtonProps,
      prefixCls: `${rootPrefixCls}-btn`
    }, okTextLocale);
  };
  var OrderContext = /* @__PURE__ */ React__namespace.createContext(null);
  var EMPTY_LIST = [];
  function useDom(render2, debug) {
    var _React$useState = React__namespace.useState(function() {
      if (!canUseDom()) {
        return null;
      }
      var defaultEle = document.createElement("div");
      return defaultEle;
    }), _React$useState2 = _slicedToArray(_React$useState, 1), ele = _React$useState2[0];
    var appendedRef = React__namespace.useRef(false);
    var queueCreate = React__namespace.useContext(OrderContext);
    var _React$useState3 = React__namespace.useState(EMPTY_LIST), _React$useState4 = _slicedToArray(_React$useState3, 2), queue = _React$useState4[0], setQueue = _React$useState4[1];
    var mergedQueueCreate = queueCreate || (appendedRef.current ? void 0 : function(appendFn) {
      setQueue(function(origin) {
        var newQueue = [appendFn].concat(_toConsumableArray(origin));
        return newQueue;
      });
    });
    function append2() {
      if (!ele.parentElement) {
        document.body.appendChild(ele);
      }
      appendedRef.current = true;
    }
    function cleanup2() {
      var _ele$parentElement;
      (_ele$parentElement = ele.parentElement) === null || _ele$parentElement === void 0 ? void 0 : _ele$parentElement.removeChild(ele);
      appendedRef.current = false;
    }
    useLayoutEffect(function() {
      if (render2) {
        if (queueCreate) {
          queueCreate(append2);
        } else {
          append2();
        }
      } else {
        cleanup2();
      }
      return cleanup2;
    }, [render2]);
    useLayoutEffect(function() {
      if (queue.length) {
        queue.forEach(function(appendFn) {
          return appendFn();
        });
        setQueue(EMPTY_LIST);
      }
    }, [queue]);
    return [ele, mergedQueueCreate];
  }
  function measureScrollbarSize(ele) {
    var randomId = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7));
    var measureEle = document.createElement("div");
    measureEle.id = randomId;
    var measureStyle = measureEle.style;
    measureStyle.position = "absolute";
    measureStyle.left = "0";
    measureStyle.top = "0";
    measureStyle.width = "100px";
    measureStyle.height = "100px";
    measureStyle.overflow = "scroll";
    var fallbackWidth;
    var fallbackHeight;
    if (ele) {
      var targetStyle = getComputedStyle(ele);
      measureStyle.scrollbarColor = targetStyle.scrollbarColor;
      measureStyle.scrollbarWidth = targetStyle.scrollbarWidth;
      var webkitScrollbarStyle = getComputedStyle(ele, "::-webkit-scrollbar");
      var width = parseInt(webkitScrollbarStyle.width, 10);
      var height = parseInt(webkitScrollbarStyle.height, 10);
      try {
        var widthStyle = width ? "width: ".concat(webkitScrollbarStyle.width, ";") : "";
        var heightStyle = height ? "height: ".concat(webkitScrollbarStyle.height, ";") : "";
        updateCSS("\n#".concat(randomId, "::-webkit-scrollbar {\n").concat(widthStyle, "\n").concat(heightStyle, "\n}"), randomId);
      } catch (e2) {
        console.error(e2);
        fallbackWidth = width;
        fallbackHeight = height;
      }
    }
    document.body.appendChild(measureEle);
    var scrollWidth = ele && fallbackWidth && !isNaN(fallbackWidth) ? fallbackWidth : measureEle.offsetWidth - measureEle.clientWidth;
    var scrollHeight = ele && fallbackHeight && !isNaN(fallbackHeight) ? fallbackHeight : measureEle.offsetHeight - measureEle.clientHeight;
    document.body.removeChild(measureEle);
    removeCSS(randomId);
    return {
      width: scrollWidth,
      height: scrollHeight
    };
  }
  function getTargetScrollBarSize(target) {
    if (typeof document === "undefined" || !target || !(target instanceof Element)) {
      return {
        width: 0,
        height: 0
      };
    }
    return measureScrollbarSize(target);
  }
  function isBodyOverflowing() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
  }
  var UNIQUE_ID = "rc-util-locker-".concat(Date.now());
  var uuid$2 = 0;
  function useScrollLocker(lock) {
    var mergedLock = !!lock;
    var _React$useState = React__namespace.useState(function() {
      uuid$2 += 1;
      return "".concat(UNIQUE_ID, "_").concat(uuid$2);
    }), _React$useState2 = _slicedToArray(_React$useState, 1), id = _React$useState2[0];
    useLayoutEffect(function() {
      if (mergedLock) {
        var scrollbarSize = getTargetScrollBarSize(document.body).width;
        var isOverflow = isBodyOverflowing();
        updateCSS("\nhtml body {\n  overflow-y: hidden;\n  ".concat(isOverflow ? "width: calc(100% - ".concat(scrollbarSize, "px);") : "", "\n}"), id);
      } else {
        removeCSS(id);
      }
      return function() {
        removeCSS(id);
      };
    }, [mergedLock, id]);
  }
  var inline = false;
  function inlineMock(nextInline) {
    return inline;
  }
  var getPortalContainer = function getPortalContainer2(getContainer2) {
    if (getContainer2 === false) {
      return false;
    }
    if (!canUseDom() || !getContainer2) {
      return null;
    }
    if (typeof getContainer2 === "string") {
      return document.querySelector(getContainer2);
    }
    if (typeof getContainer2 === "function") {
      return getContainer2();
    }
    return getContainer2;
  };
  var Portal = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var open2 = props.open, autoLock = props.autoLock, getContainer2 = props.getContainer;
    props.debug;
    var _props$autoDestroy = props.autoDestroy, autoDestroy = _props$autoDestroy === void 0 ? true : _props$autoDestroy, children = props.children;
    var _React$useState = React__namespace.useState(open2), _React$useState2 = _slicedToArray(_React$useState, 2), shouldRender = _React$useState2[0], setShouldRender = _React$useState2[1];
    var mergedRender = shouldRender || open2;
    React__namespace.useEffect(function() {
      if (autoDestroy || open2) {
        setShouldRender(open2);
      }
    }, [open2, autoDestroy]);
    var _React$useState3 = React__namespace.useState(function() {
      return getPortalContainer(getContainer2);
    }), _React$useState4 = _slicedToArray(_React$useState3, 2), innerContainer = _React$useState4[0], setInnerContainer = _React$useState4[1];
    React__namespace.useEffect(function() {
      var customizeContainer = getPortalContainer(getContainer2);
      setInnerContainer(customizeContainer !== null && customizeContainer !== void 0 ? customizeContainer : null);
    });
    var _useDom = useDom(mergedRender && !innerContainer), _useDom2 = _slicedToArray(_useDom, 2), defaultContainer = _useDom2[0], queueCreate = _useDom2[1];
    var mergedContainer = innerContainer !== null && innerContainer !== void 0 ? innerContainer : defaultContainer;
    useScrollLocker(autoLock && open2 && canUseDom() && (mergedContainer === defaultContainer || mergedContainer === document.body));
    var childRef = null;
    if (children && supportRef(children) && ref) {
      var _ref7 = children;
      childRef = _ref7.ref;
    }
    var mergedRef = useComposeRef(childRef, ref);
    if (!mergedRender || !canUseDom() || innerContainer === void 0) {
      return null;
    }
    var renderInline = mergedContainer === false || inlineMock();
    var reffedChildren = children;
    if (ref) {
      reffedChildren = /* @__PURE__ */ React__namespace.cloneElement(children, {
        ref: mergedRef
      });
    }
    return /* @__PURE__ */ React__namespace.createElement(OrderContext.Provider, {
      value: queueCreate
    }, renderInline ? reffedChildren : /* @__PURE__ */ ReactDOM__default.createPortal(reffedChildren, mergedContainer));
  });
  var RefContext = /* @__PURE__ */ React__namespace.createContext({});
  function getUseId() {
    var fullClone2 = _objectSpread2({}, React__namespace);
    return fullClone2.useId;
  }
  var uuid$1 = 0;
  var useOriginId = getUseId();
  const useId = useOriginId ? (
    // Use React `useId`
    function useId2(id) {
      var reactId = useOriginId();
      if (id) {
        return id;
      }
      return reactId;
    }
  ) : (
    // Use compatible of `useId`
    function useCompatId(id) {
      var _React$useState = React__namespace.useState("ssr-id"), _React$useState2 = _slicedToArray(_React$useState, 2), innerId = _React$useState2[0], setInnerId = _React$useState2[1];
      React__namespace.useEffect(function() {
        var nextId = uuid$1;
        uuid$1 += 1;
        setInnerId("rc_unique_".concat(nextId));
      }, []);
      if (id) {
        return id;
      }
      return innerId;
    }
  );
  function getMotionName(prefixCls, transitionName, animationName) {
    var motionName = transitionName;
    if (!motionName && animationName) {
      motionName = "".concat(prefixCls, "-").concat(animationName);
    }
    return motionName;
  }
  function getScroll(w2, top) {
    var ret = w2["page".concat(top ? "Y" : "X", "Offset")];
    var method4 = "scroll".concat(top ? "Top" : "Left");
    if (typeof ret !== "number") {
      var d2 = w2.document;
      ret = d2.documentElement[method4];
      if (typeof ret !== "number") {
        ret = d2.body[method4];
      }
    }
    return ret;
  }
  function offset(el) {
    var rect = el.getBoundingClientRect();
    var pos = {
      left: rect.left,
      top: rect.top
    };
    var doc = el.ownerDocument;
    var w2 = doc.defaultView || doc.parentWindow;
    pos.left += getScroll(w2);
    pos.top += getScroll(w2, true);
    return pos;
  }
  const MemoChildren = /* @__PURE__ */ React__namespace.memo(function(_ref7) {
    var children = _ref7.children;
    return children;
  }, function(_, _ref22) {
    var shouldUpdate = _ref22.shouldUpdate;
    return !shouldUpdate;
  });
  var sentinelStyle = {
    width: 0,
    height: 0,
    overflow: "hidden",
    outline: "none"
  };
  var entityStyle = {
    outline: "none"
  };
  var Panel = /* @__PURE__ */ React.forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, className = props.className, style2 = props.style, title = props.title, ariaId = props.ariaId, footer = props.footer, closable = props.closable, closeIcon = props.closeIcon, onClose = props.onClose, children = props.children, bodyStyle = props.bodyStyle, bodyProps = props.bodyProps, modalRender = props.modalRender, onMouseDown = props.onMouseDown, onMouseUp = props.onMouseUp, holderRef = props.holderRef, visible = props.visible, forceRender = props.forceRender, width = props.width, height = props.height, modalClassNames = props.classNames, modalStyles = props.styles;
    var _React$useContext = React.useContext(RefContext), panelRef = _React$useContext.panel;
    var mergedRef = useComposeRef(holderRef, panelRef);
    var sentinelStartRef = React.useRef();
    var sentinelEndRef = React.useRef();
    var entityRef = React.useRef();
    React.useImperativeHandle(ref, function() {
      return {
        focus: function focus() {
          var _entityRef$current;
          (_entityRef$current = entityRef.current) === null || _entityRef$current === void 0 || _entityRef$current.focus();
        },
        changeActive: function changeActive(next2) {
          var _document = document, activeElement = _document.activeElement;
          if (next2 && activeElement === sentinelEndRef.current) {
            sentinelStartRef.current.focus();
          } else if (!next2 && activeElement === sentinelStartRef.current) {
            sentinelEndRef.current.focus();
          }
        }
      };
    });
    var contentStyle = {};
    if (width !== void 0) {
      contentStyle.width = width;
    }
    if (height !== void 0) {
      contentStyle.height = height;
    }
    var footerNode;
    if (footer) {
      footerNode = /* @__PURE__ */ React.createElement("div", {
        className: cx("".concat(prefixCls, "-footer"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.footer),
        style: _objectSpread2({}, modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.footer)
      }, footer);
    }
    var headerNode;
    if (title) {
      headerNode = /* @__PURE__ */ React.createElement("div", {
        className: cx("".concat(prefixCls, "-header"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.header),
        style: _objectSpread2({}, modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.header)
      }, /* @__PURE__ */ React.createElement("div", {
        className: "".concat(prefixCls, "-title"),
        id: ariaId
      }, title));
    }
    var closableObj = React.useMemo(function() {
      if (_typeof(closable) === "object" && closable !== null) {
        return closable;
      }
      if (closable) {
        return {
          closeIcon: closeIcon !== null && closeIcon !== void 0 ? closeIcon : /* @__PURE__ */ React.createElement("span", {
            className: "".concat(prefixCls, "-close-x")
          })
        };
      }
      return {};
    }, [closable, closeIcon]);
    var ariaProps = pickAttrs(closableObj, true);
    var closer;
    if (closable) {
      closer = /* @__PURE__ */ React.createElement("button", _extends({
        type: "button",
        onClick: onClose,
        "aria-label": "Close"
      }, ariaProps, {
        className: "".concat(prefixCls, "-close")
      }), closableObj.closeIcon);
    }
    var content = /* @__PURE__ */ React.createElement("div", {
      className: cx("".concat(prefixCls, "-content"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.content),
      style: modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.content
    }, closer, headerNode, /* @__PURE__ */ React.createElement("div", _extends({
      className: cx("".concat(prefixCls, "-body"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.body),
      style: _objectSpread2(_objectSpread2({}, bodyStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.body)
    }, bodyProps), children), footerNode);
    return /* @__PURE__ */ React.createElement("div", {
      key: "dialog-element",
      role: "dialog",
      "aria-labelledby": title ? ariaId : null,
      "aria-modal": "true",
      ref: mergedRef,
      style: _objectSpread2(_objectSpread2({}, style2), contentStyle),
      className: cx(prefixCls, className),
      onMouseDown,
      onMouseUp
    }, /* @__PURE__ */ React.createElement("div", {
      tabIndex: 0,
      ref: sentinelStartRef,
      style: sentinelStyle,
      "aria-hidden": "true"
    }), /* @__PURE__ */ React.createElement("div", {
      ref: entityRef,
      tabIndex: -1,
      style: entityStyle
    }, /* @__PURE__ */ React.createElement(MemoChildren, {
      shouldUpdate: visible || forceRender
    }, modalRender ? modalRender(content) : content)), /* @__PURE__ */ React.createElement("div", {
      tabIndex: 0,
      ref: sentinelEndRef,
      style: sentinelStyle,
      "aria-hidden": "true"
    }));
  });
  var Content = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, title = props.title, style2 = props.style, className = props.className, visible = props.visible, forceRender = props.forceRender, destroyOnClose = props.destroyOnClose, motionName = props.motionName, ariaId = props.ariaId, onVisibleChanged = props.onVisibleChanged, mousePosition2 = props.mousePosition;
    var dialogRef = React.useRef();
    var _React$useState = React__namespace.useState(), _React$useState2 = _slicedToArray(_React$useState, 2), transformOrigin = _React$useState2[0], setTransformOrigin = _React$useState2[1];
    var contentStyle = {};
    if (transformOrigin) {
      contentStyle.transformOrigin = transformOrigin;
    }
    function onPrepare() {
      var elementOffset = offset(dialogRef.current);
      setTransformOrigin(mousePosition2 ? "".concat(mousePosition2.x - elementOffset.left, "px ").concat(mousePosition2.y - elementOffset.top, "px") : "");
    }
    return /* @__PURE__ */ React__namespace.createElement(CSSMotion, {
      visible,
      onVisibleChanged,
      onAppearPrepare: onPrepare,
      onEnterPrepare: onPrepare,
      forceRender,
      motionName,
      removeOnLeave: destroyOnClose,
      ref: dialogRef
    }, function(_ref7, motionRef) {
      var motionClassName = _ref7.className, motionStyle = _ref7.style;
      return /* @__PURE__ */ React__namespace.createElement(Panel, _extends({}, props, {
        ref,
        title,
        ariaId,
        prefixCls,
        holderRef: motionRef,
        style: _objectSpread2(_objectSpread2(_objectSpread2({}, motionStyle), style2), contentStyle),
        className: cx(className, motionClassName)
      }));
    });
  });
  Content.displayName = "Content";
  function Mask$1(props) {
    var prefixCls = props.prefixCls, style2 = props.style, visible = props.visible, maskProps = props.maskProps, motionName = props.motionName, className = props.className;
    return /* @__PURE__ */ React__namespace.createElement(CSSMotion, {
      key: "mask",
      visible,
      motionName,
      leavedClassName: "".concat(prefixCls, "-mask-hidden")
    }, function(_ref7, ref) {
      var motionClassName = _ref7.className, motionStyle = _ref7.style;
      return /* @__PURE__ */ React__namespace.createElement("div", _extends({
        ref,
        style: _objectSpread2(_objectSpread2({}, motionStyle), style2),
        className: cx("".concat(prefixCls, "-mask"), motionClassName, className)
      }, maskProps));
    });
  }
  function Dialog(props) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-dialog" : _props$prefixCls, zIndex = props.zIndex, _props$visible = props.visible, visible = _props$visible === void 0 ? false : _props$visible, _props$keyboard = props.keyboard, keyboard = _props$keyboard === void 0 ? true : _props$keyboard, _props$focusTriggerAf = props.focusTriggerAfterClose, focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf, wrapStyle = props.wrapStyle, wrapClassName = props.wrapClassName, wrapProps = props.wrapProps, onClose = props.onClose, afterOpenChange = props.afterOpenChange, afterClose = props.afterClose, transitionName = props.transitionName, animation = props.animation, _props$closable = props.closable, closable = _props$closable === void 0 ? true : _props$closable, _props$mask = props.mask, mask = _props$mask === void 0 ? true : _props$mask, maskTransitionName = props.maskTransitionName, maskAnimation = props.maskAnimation, _props$maskClosable = props.maskClosable, maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable, maskStyle = props.maskStyle, maskProps = props.maskProps, rootClassName = props.rootClassName, modalClassNames = props.classNames, modalStyles = props.styles;
    var lastOutSideActiveElementRef = React.useRef();
    var wrapperRef = React.useRef();
    var contentRef = React.useRef();
    var _React$useState = React__namespace.useState(visible), _React$useState2 = _slicedToArray(_React$useState, 2), animatedVisible = _React$useState2[0], setAnimatedVisible = _React$useState2[1];
    var ariaId = useId();
    function saveLastOutSideActiveElementRef() {
      if (!contains(wrapperRef.current, document.activeElement)) {
        lastOutSideActiveElementRef.current = document.activeElement;
      }
    }
    function focusDialogContent() {
      if (!contains(wrapperRef.current, document.activeElement)) {
        var _contentRef$current;
        (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
      }
    }
    function onDialogVisibleChanged(newVisible) {
      if (newVisible) {
        focusDialogContent();
      } else {
        setAnimatedVisible(false);
        if (mask && lastOutSideActiveElementRef.current && focusTriggerAfterClose) {
          try {
            lastOutSideActiveElementRef.current.focus({
              preventScroll: true
            });
          } catch (e2) {
          }
          lastOutSideActiveElementRef.current = null;
        }
        if (animatedVisible) {
          afterClose === null || afterClose === void 0 || afterClose();
        }
      }
      afterOpenChange === null || afterOpenChange === void 0 || afterOpenChange(newVisible);
    }
    function onInternalClose(e2) {
      onClose === null || onClose === void 0 || onClose(e2);
    }
    var contentClickRef = React.useRef(false);
    var contentTimeoutRef = React.useRef();
    var onContentMouseDown = function onContentMouseDown2() {
      clearTimeout(contentTimeoutRef.current);
      contentClickRef.current = true;
    };
    var onContentMouseUp = function onContentMouseUp2() {
      contentTimeoutRef.current = setTimeout(function() {
        contentClickRef.current = false;
      });
    };
    var onWrapperClick = null;
    if (maskClosable) {
      onWrapperClick = function onWrapperClick2(e2) {
        if (contentClickRef.current) {
          contentClickRef.current = false;
        } else if (wrapperRef.current === e2.target) {
          onInternalClose(e2);
        }
      };
    }
    function onWrapperKeyDown(e2) {
      if (keyboard && e2.keyCode === KeyCode.ESC) {
        e2.stopPropagation();
        onInternalClose(e2);
        return;
      }
      if (visible) {
        if (e2.keyCode === KeyCode.TAB) {
          contentRef.current.changeActive(!e2.shiftKey);
        }
      }
    }
    React.useEffect(function() {
      if (visible) {
        setAnimatedVisible(true);
        saveLastOutSideActiveElementRef();
      }
    }, [visible]);
    React.useEffect(function() {
      return function() {
        clearTimeout(contentTimeoutRef.current);
      };
    }, []);
    return /* @__PURE__ */ React__namespace.createElement("div", _extends({
      className: cx("".concat(prefixCls, "-root"), rootClassName)
    }, pickAttrs(props, {
      data: true
    })), /* @__PURE__ */ React__namespace.createElement(Mask$1, {
      prefixCls,
      visible: mask && visible,
      motionName: getMotionName(prefixCls, maskTransitionName, maskAnimation),
      style: _objectSpread2(_objectSpread2({
        zIndex
      }, maskStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.mask),
      maskProps,
      className: modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.mask
    }), /* @__PURE__ */ React__namespace.createElement("div", _extends({
      tabIndex: -1,
      onKeyDown: onWrapperKeyDown,
      className: cx("".concat(prefixCls, "-wrap"), wrapClassName, modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.wrapper),
      ref: wrapperRef,
      onClick: onWrapperClick,
      style: _objectSpread2(_objectSpread2(_objectSpread2({
        zIndex
      }, wrapStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.wrapper), {}, {
        display: !animatedVisible ? "none" : null
      })
    }, wrapProps), /* @__PURE__ */ React__namespace.createElement(Content, _extends({}, props, {
      onMouseDown: onContentMouseDown,
      onMouseUp: onContentMouseUp,
      ref: contentRef,
      closable,
      ariaId,
      prefixCls,
      visible: visible && animatedVisible,
      onClose: onInternalClose,
      onVisibleChanged: onDialogVisibleChanged,
      motionName: getMotionName(prefixCls, transitionName, animation)
    }))));
  }
  var DialogWrap = function DialogWrap2(props) {
    var visible = props.visible, getContainer2 = props.getContainer, forceRender = props.forceRender, _props$destroyOnClose = props.destroyOnClose, destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose, _afterClose = props.afterClose, panelRef = props.panelRef;
    var _React$useState = React__namespace.useState(visible), _React$useState2 = _slicedToArray(_React$useState, 2), animatedVisible = _React$useState2[0], setAnimatedVisible = _React$useState2[1];
    var refContext = React__namespace.useMemo(function() {
      return {
        panel: panelRef
      };
    }, [panelRef]);
    React__namespace.useEffect(function() {
      if (visible) {
        setAnimatedVisible(true);
      }
    }, [visible]);
    if (!forceRender && destroyOnClose && !animatedVisible) {
      return null;
    }
    return /* @__PURE__ */ React__namespace.createElement(RefContext.Provider, {
      value: refContext
    }, /* @__PURE__ */ React__namespace.createElement(Portal, {
      open: visible || forceRender || animatedVisible,
      autoDestroy: false,
      getContainer: getContainer2,
      autoLock: visible || animatedVisible
    }, /* @__PURE__ */ React__namespace.createElement(Dialog, _extends({}, props, {
      destroyOnClose,
      afterClose: function afterClose() {
        _afterClose === null || _afterClose === void 0 || _afterClose();
        setAnimatedVisible(false);
      }
    }))));
  };
  DialogWrap.displayName = "Dialog";
  function pickClosable(context) {
    if (!context) {
      return void 0;
    }
    return {
      closable: context.closable,
      closeIcon: context.closeIcon
    };
  }
  function useClosableConfig(closableCollection) {
    const {
      closable,
      closeIcon
    } = closableCollection || {};
    return React.useMemo(() => {
      if (
        // If `closable`, whatever rest be should be true
        !closable && (closable === false || closeIcon === false || closeIcon === null)
      ) {
        return false;
      }
      if (closable === void 0 && closeIcon === void 0) {
        return null;
      }
      let closableConfig = {
        closeIcon: typeof closeIcon !== "boolean" && closeIcon !== null ? closeIcon : void 0
      };
      if (closable && typeof closable === "object") {
        closableConfig = Object.assign(Object.assign({}, closableConfig), closable);
      }
      return closableConfig;
    }, [closable, closeIcon]);
  }
  function assignWithoutUndefined() {
    const target = {};
    for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
      objList[_key] = arguments[_key];
    }
    objList.forEach((obj) => {
      if (obj) {
        Object.keys(obj).forEach((key) => {
          if (obj[key] !== void 0) {
            target[key] = obj[key];
          }
        });
      }
    });
    return target;
  }
  const EmptyFallbackCloseCollection = {};
  function useClosable(propCloseCollection, contextCloseCollection) {
    let fallbackCloseCollection = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : EmptyFallbackCloseCollection;
    const propCloseConfig = useClosableConfig(propCloseCollection);
    const contextCloseConfig = useClosableConfig(contextCloseCollection);
    const mergedFallbackCloseCollection = React.useMemo(() => Object.assign({
      closeIcon: /* @__PURE__ */ React.createElement(RefIcon$7, null)
    }, fallbackCloseCollection), [fallbackCloseCollection]);
    const mergedClosableConfig = React.useMemo(() => {
      if (propCloseConfig === false) {
        return false;
      }
      if (propCloseConfig) {
        return assignWithoutUndefined(mergedFallbackCloseCollection, contextCloseConfig, propCloseConfig);
      }
      if (contextCloseConfig === false) {
        return false;
      }
      if (contextCloseConfig) {
        return assignWithoutUndefined(mergedFallbackCloseCollection, contextCloseConfig);
      }
      return !mergedFallbackCloseCollection.closable ? false : mergedFallbackCloseCollection;
    }, [propCloseConfig, contextCloseConfig, mergedFallbackCloseCollection]);
    return React.useMemo(() => {
      if (mergedClosableConfig === false) {
        return [false, null];
      }
      const {
        closeIconRender
      } = mergedFallbackCloseCollection;
      const {
        closeIcon
      } = mergedClosableConfig;
      let mergedCloseIcon = closeIcon;
      if (mergedCloseIcon !== null && mergedCloseIcon !== void 0) {
        if (closeIconRender) {
          mergedCloseIcon = closeIconRender(closeIcon);
        }
        const ariaProps = pickAttrs(mergedClosableConfig, true);
        if (Object.keys(ariaProps).length) {
          mergedCloseIcon = /* @__PURE__ */ React.isValidElement(mergedCloseIcon) ? /* @__PURE__ */ React.cloneElement(mergedCloseIcon, ariaProps) : /* @__PURE__ */ React.createElement("span", Object.assign({}, ariaProps), mergedCloseIcon);
        }
      }
      return [true, mergedCloseIcon];
    }, [mergedClosableConfig, mergedFallbackCloseCollection]);
  }
  const canUseDocElement = () => canUseDom() && window.document.documentElement;
  var HOOK_MARK = "RC_FORM_INTERNAL_HOOKS";
  var warningFunc = function warningFunc2() {
    warningOnce(false, "Can not find FormContext. Please make sure you wrap Field under Form.");
  };
  var Context = /* @__PURE__ */ React__namespace.createContext({
    getFieldValue: warningFunc,
    getFieldsValue: warningFunc,
    getFieldError: warningFunc,
    getFieldWarning: warningFunc,
    getFieldsError: warningFunc,
    isFieldsTouched: warningFunc,
    isFieldTouched: warningFunc,
    isFieldValidating: warningFunc,
    isFieldsValidating: warningFunc,
    resetFields: warningFunc,
    setFields: warningFunc,
    setFieldValue: warningFunc,
    setFieldsValue: warningFunc,
    validateFields: warningFunc,
    submit: warningFunc,
    getInternalHooks: function getInternalHooks() {
      warningFunc();
      return {
        dispatch: warningFunc,
        initEntityValue: warningFunc,
        registerField: warningFunc,
        useSubscribe: warningFunc,
        setInitialValues: warningFunc,
        destroyForm: warningFunc,
        setCallbacks: warningFunc,
        registerWatch: warningFunc,
        getFields: warningFunc,
        setValidateMessages: warningFunc,
        setPreserve: warningFunc,
        getInitialValue: warningFunc
      };
    }
  });
  var ListContext = /* @__PURE__ */ React__namespace.createContext(null);
  function toArray$1(value) {
    if (value === void 0 || value === null) {
      return [];
    }
    return Array.isArray(value) ? value : [value];
  }
  function isFormInstance(form) {
    return form && !!form._init;
  }
  function newMessages() {
    return {
      default: "Validation error on field %s",
      required: "%s is required",
      enum: "%s must be one of %s",
      whitespace: "%s cannot be empty",
      date: {
        format: "%s date %s is invalid for format %s",
        parse: "%s date could not be parsed, %s is invalid ",
        invalid: "%s date %s is invalid"
      },
      types: {
        string: "%s is not a %s",
        method: "%s is not a %s (function)",
        array: "%s is not an %s",
        object: "%s is not an %s",
        number: "%s is not a %s",
        date: "%s is not a %s",
        boolean: "%s is not a %s",
        integer: "%s is not an %s",
        float: "%s is not a %s",
        regexp: "%s is not a valid %s",
        email: "%s is not a valid %s",
        url: "%s is not a valid %s",
        hex: "%s is not a valid %s"
      },
      string: {
        len: "%s must be exactly %s characters",
        min: "%s must be at least %s characters",
        max: "%s cannot be longer than %s characters",
        range: "%s must be between %s and %s characters"
      },
      number: {
        len: "%s must equal %s",
        min: "%s cannot be less than %s",
        max: "%s cannot be greater than %s",
        range: "%s must be between %s and %s"
      },
      array: {
        len: "%s must be exactly %s in length",
        min: "%s cannot be less than %s in length",
        max: "%s cannot be greater than %s in length",
        range: "%s must be between %s and %s in length"
      },
      pattern: {
        mismatch: "%s value %s does not match pattern %s"
      },
      clone: function clone() {
        var cloned = JSON.parse(JSON.stringify(this));
        cloned.clone = this.clone;
        return cloned;
      }
    };
  }
  var messages = newMessages();
  function _isNativeFunction(t2) {
    try {
      return -1 !== Function.toString.call(t2).indexOf("[native code]");
    } catch (n2) {
      return "function" == typeof t2;
    }
  }
  function _construct(t2, e2, r2) {
    if (_isNativeReflectConstruct())
      return Reflect.construct.apply(null, arguments);
    var o2 = [null];
    o2.push.apply(o2, e2);
    var p2 = new (t2.bind.apply(t2, o2))();
    return r2 && _setPrototypeOf(p2, r2.prototype), p2;
  }
  function _wrapNativeSuper(t2) {
    var r2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
    return _wrapNativeSuper = function _wrapNativeSuper2(t3) {
      if (null === t3 || !_isNativeFunction(t3))
        return t3;
      if ("function" != typeof t3)
        throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r2) {
        if (r2.has(t3))
          return r2.get(t3);
        r2.set(t3, Wrapper2);
      }
      function Wrapper2() {
        return _construct(t3, arguments, _getPrototypeOf(this).constructor);
      }
      return Wrapper2.prototype = Object.create(t3.prototype, {
        constructor: {
          value: Wrapper2,
          enumerable: false,
          writable: true,
          configurable: true
        }
      }), _setPrototypeOf(Wrapper2, t3);
    }, _wrapNativeSuper(t2);
  }
  var define_process_env_default = {};
  var formatRegExp = /%[sdj%]/g;
  var warning = function warning2() {
  };
  if (typeof process !== "undefined" && define_process_env_default && false) {
    warning = function warning3(type4, errors) {
      if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
        if (errors.every(function(e2) {
          return typeof e2 === "string";
        })) {
          console.warn(type4, errors);
        }
      }
    };
  }
  function convertFieldsError(errors) {
    if (!errors || !errors.length)
      return null;
    var fields = {};
    errors.forEach(function(error) {
      var field = error.field;
      fields[field] = fields[field] || [];
      fields[field].push(error);
    });
    return fields;
  }
  function format(template) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var i2 = 0;
    var len = args.length;
    if (typeof template === "function") {
      return template.apply(null, args);
    }
    if (typeof template === "string") {
      var str = template.replace(formatRegExp, function(x2) {
        if (x2 === "%%") {
          return "%";
        }
        if (i2 >= len) {
          return x2;
        }
        switch (x2) {
          case "%s":
            return String(args[i2++]);
          case "%d":
            return Number(args[i2++]);
          case "%j":
            try {
              return JSON.stringify(args[i2++]);
            } catch (_) {
              return "[Circular]";
            }
            break;
          default:
            return x2;
        }
      });
      return str;
    }
    return template;
  }
  function isNativeStringType(type4) {
    return type4 === "string" || type4 === "url" || type4 === "hex" || type4 === "email" || type4 === "date" || type4 === "pattern";
  }
  function isEmptyValue(value, type4) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (type4 === "array" && Array.isArray(value) && !value.length) {
      return true;
    }
    if (isNativeStringType(type4) && typeof value === "string" && !value) {
      return true;
    }
    return false;
  }
  function asyncParallelArray(arr, func, callback) {
    var results = [];
    var total = 0;
    var arrLength = arr.length;
    function count(errors) {
      results.push.apply(results, _toConsumableArray(errors || []));
      total++;
      if (total === arrLength) {
        callback(results);
      }
    }
    arr.forEach(function(a2) {
      func(a2, count);
    });
  }
  function asyncSerialArray(arr, func, callback) {
    var index2 = 0;
    var arrLength = arr.length;
    function next2(errors) {
      if (errors && errors.length) {
        callback(errors);
        return;
      }
      var original = index2;
      index2 = index2 + 1;
      if (original < arrLength) {
        func(arr[original], next2);
      } else {
        callback([]);
      }
    }
    next2([]);
  }
  function flattenObjArr(objArr) {
    var ret = [];
    Object.keys(objArr).forEach(function(k2) {
      ret.push.apply(ret, _toConsumableArray(objArr[k2] || []));
    });
    return ret;
  }
  var AsyncValidationError = /* @__PURE__ */ function(_Error) {
    _inherits(AsyncValidationError2, _Error);
    var _super = _createSuper(AsyncValidationError2);
    function AsyncValidationError2(errors, fields) {
      var _this;
      _classCallCheck(this, AsyncValidationError2);
      _this = _super.call(this, "Async Validation Error");
      _defineProperty(_assertThisInitialized(_this), "errors", void 0);
      _defineProperty(_assertThisInitialized(_this), "fields", void 0);
      _this.errors = errors;
      _this.fields = fields;
      return _this;
    }
    return _createClass(AsyncValidationError2);
  }(/* @__PURE__ */ _wrapNativeSuper(Error));
  function asyncMap(objArr, option, func, callback, source) {
    if (option.first) {
      var _pending = new Promise(function(resolve, reject) {
        var next2 = function next22(errors) {
          callback(errors);
          return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
        };
        var flattenArr = flattenObjArr(objArr);
        asyncSerialArray(flattenArr, func, next2);
      });
      _pending.catch(function(e2) {
        return e2;
      });
      return _pending;
    }
    var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
    var objArrKeys = Object.keys(objArr);
    var objArrLength = objArrKeys.length;
    var total = 0;
    var results = [];
    var pending = new Promise(function(resolve, reject) {
      var next2 = function next22(errors) {
        results.push.apply(results, errors);
        total++;
        if (total === objArrLength) {
          callback(results);
          return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
        }
      };
      if (!objArrKeys.length) {
        callback(results);
        resolve(source);
      }
      objArrKeys.forEach(function(key) {
        var arr = objArr[key];
        if (firstFields.indexOf(key) !== -1) {
          asyncSerialArray(arr, func, next2);
        } else {
          asyncParallelArray(arr, func, next2);
        }
      });
    });
    pending.catch(function(e2) {
      return e2;
    });
    return pending;
  }
  function isErrorObj(obj) {
    return !!(obj && obj.message !== void 0);
  }
  function getValue$1(value, path2) {
    var v2 = value;
    for (var i2 = 0; i2 < path2.length; i2++) {
      if (v2 == void 0) {
        return v2;
      }
      v2 = v2[path2[i2]];
    }
    return v2;
  }
  function complementError(rule, source) {
    return function(oe) {
      var fieldValue;
      if (rule.fullFields) {
        fieldValue = getValue$1(source, rule.fullFields);
      } else {
        fieldValue = source[oe.field || rule.fullField];
      }
      if (isErrorObj(oe)) {
        oe.field = oe.field || rule.fullField;
        oe.fieldValue = fieldValue;
        return oe;
      }
      return {
        message: typeof oe === "function" ? oe() : oe,
        fieldValue,
        field: oe.field || rule.fullField
      };
    };
  }
  function deepMerge(target, source) {
    if (source) {
      for (var s2 in source) {
        if (source.hasOwnProperty(s2)) {
          var value = source[s2];
          if (_typeof(value) === "object" && _typeof(target[s2]) === "object") {
            target[s2] = _objectSpread2(_objectSpread2({}, target[s2]), value);
          } else {
            target[s2] = value;
          }
        }
      }
    }
    return target;
  }
  var ENUM$1 = "enum";
  var enumerable$1 = function enumerable(rule, value, source, errors, options) {
    rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
    if (rule[ENUM$1].indexOf(value) === -1) {
      errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
    }
  };
  var pattern$2 = function pattern(rule, value, source, errors, options) {
    if (rule.pattern) {
      if (rule.pattern instanceof RegExp) {
        rule.pattern.lastIndex = 0;
        if (!rule.pattern.test(value)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      } else if (typeof rule.pattern === "string") {
        var _pattern = new RegExp(rule.pattern);
        if (!_pattern.test(value)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      }
    }
  };
  var range = function range2(rule, value, source, errors, options) {
    var len = typeof rule.len === "number";
    var min = typeof rule.min === "number";
    var max = typeof rule.max === "number";
    var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    var val = value;
    var key = null;
    var num = typeof value === "number";
    var str = typeof value === "string";
    var arr = Array.isArray(value);
    if (num) {
      key = "number";
    } else if (str) {
      key = "string";
    } else if (arr) {
      key = "array";
    }
    if (!key) {
      return false;
    }
    if (arr) {
      val = value.length;
    }
    if (str) {
      val = value.replace(spRegexp, "_").length;
    }
    if (len) {
      if (val !== rule.len) {
        errors.push(format(options.messages[key].len, rule.fullField, rule.len));
      }
    } else if (min && !max && val < rule.min) {
      errors.push(format(options.messages[key].min, rule.fullField, rule.min));
    } else if (max && !min && val > rule.max) {
      errors.push(format(options.messages[key].max, rule.fullField, rule.max));
    } else if (min && max && (val < rule.min || val > rule.max)) {
      errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
    }
  };
  var required$1 = function required(rule, value, source, errors, options, type4) {
    if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type4 || rule.type))) {
      errors.push(format(options.messages.required, rule.fullField));
    }
  };
  var urlReg;
  const getUrlRegex = function() {
    if (urlReg) {
      return urlReg;
    }
    var word = "[a-fA-F\\d:]";
    var b2 = function b3(options) {
      return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(word, ")|(?<=").concat(word, ")(?=\\s|$))") : "";
    };
    var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
    var v6seg = "[a-fA-F\\d]{1,4}";
    var v6List = [
      "(?:".concat(v6seg, ":){7}(?:").concat(v6seg, "|:)"),
      // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
      "(?:".concat(v6seg, ":){6}(?:").concat(v4, "|:").concat(v6seg, "|:)"),
      // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
      "(?:".concat(v6seg, ":){5}(?::").concat(v4, "|(?::").concat(v6seg, "){1,2}|:)"),
      // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
      "(?:".concat(v6seg, ":){4}(?:(?::").concat(v6seg, "){0,1}:").concat(v4, "|(?::").concat(v6seg, "){1,3}|:)"),
      // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
      "(?:".concat(v6seg, ":){3}(?:(?::").concat(v6seg, "){0,2}:").concat(v4, "|(?::").concat(v6seg, "){1,4}|:)"),
      // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
      "(?:".concat(v6seg, ":){2}(?:(?::").concat(v6seg, "){0,3}:").concat(v4, "|(?::").concat(v6seg, "){1,5}|:)"),
      // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
      "(?:".concat(v6seg, ":){1}(?:(?::").concat(v6seg, "){0,4}:").concat(v4, "|(?::").concat(v6seg, "){1,6}|:)"),
      // 1::              1::3:4:5:6:7:8   1::8            1::
      "(?::(?:(?::".concat(v6seg, "){0,5}:").concat(v4, "|(?::").concat(v6seg, "){1,7}|:))")
      // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
    ];
    var v6Eth0 = "(?:%[0-9a-zA-Z]{1,})?";
    var v6 = "(?:".concat(v6List.join("|"), ")").concat(v6Eth0);
    var v46Exact = new RegExp("(?:^".concat(v4, "$)|(?:^").concat(v6, "$)"));
    var v4exact = new RegExp("^".concat(v4, "$"));
    var v6exact = new RegExp("^".concat(v6, "$"));
    var ip = function ip2(options) {
      return options && options.exact ? v46Exact : new RegExp("(?:".concat(b2(options)).concat(v4).concat(b2(options), ")|(?:").concat(b2(options)).concat(v6).concat(b2(options), ")"), "g");
    };
    ip.v4 = function(options) {
      return options && options.exact ? v4exact : new RegExp("".concat(b2(options)).concat(v4).concat(b2(options)), "g");
    };
    ip.v6 = function(options) {
      return options && options.exact ? v6exact : new RegExp("".concat(b2(options)).concat(v6).concat(b2(options)), "g");
    };
    var protocol = "(?:(?:[a-z]+:)?//)";
    var auth = "(?:\\S+(?::\\S*)?@)?";
    var ipv4 = ip.v4().source;
    var ipv6 = ip.v6().source;
    var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
    var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
    var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
    var port = "(?::\\d{2,5})?";
    var path2 = '(?:[/?#][^\\s"]*)?';
    var regex = "(?:".concat(protocol, "|www\\.)").concat(auth, "(?:localhost|").concat(ipv4, "|").concat(ipv6, "|").concat(host).concat(domain).concat(tld, ")").concat(port).concat(path2);
    urlReg = new RegExp("(?:^".concat(regex, "$)"), "i");
    return urlReg;
  };
  var pattern$1 = {
    // http://emailregex.com/
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    // url: new RegExp(
    //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
    //   'i',
    // ),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
  };
  var types = {
    integer: function integer(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    float: function float(value) {
      return types.number(value) && !types.integer(value);
    },
    array: function array(value) {
      return Array.isArray(value);
    },
    regexp: function regexp(value) {
      if (value instanceof RegExp) {
        return true;
      }
      try {
        return !!new RegExp(value);
      } catch (e2) {
        return false;
      }
    },
    date: function date(value) {
      return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
    },
    number: function number(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof value === "number";
    },
    object: function object(value) {
      return _typeof(value) === "object" && !types.array(value);
    },
    method: function method(value) {
      return typeof value === "function";
    },
    email: function email(value) {
      return typeof value === "string" && value.length <= 320 && !!value.match(pattern$1.email);
    },
    url: function url(value) {
      return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
    },
    hex: function hex(value) {
      return typeof value === "string" && !!value.match(pattern$1.hex);
    }
  };
  var type$1 = function type(rule, value, source, errors, options) {
    if (rule.required && value === void 0) {
      required$1(rule, value, source, errors, options);
      return;
    }
    var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
    var ruleType = rule.type;
    if (custom.indexOf(ruleType) > -1) {
      if (!types[ruleType](value)) {
        errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
      }
    } else if (ruleType && _typeof(value) !== rule.type) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  };
  var whitespace = function whitespace2(rule, value, source, errors, options) {
    if (/^\s+$/.test(value) || value === "") {
      errors.push(format(options.messages.whitespace, rule.fullField));
    }
  };
  const rules = {
    required: required$1,
    whitespace,
    type: type$1,
    range,
    enum: enumerable$1,
    pattern: pattern$2
  };
  var any = function any2(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
    }
    callback(errors);
  };
  var array2 = function array3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if ((value === void 0 || value === null) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, "array");
      if (value !== void 0 && value !== null) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var boolean = function boolean2(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var date2 = function date3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "date") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value, "date")) {
        var dateObject;
        if (value instanceof Date) {
          dateObject = value;
        } else {
          dateObject = new Date(value);
        }
        rules.type(rule, dateObject, source, errors, options);
        if (dateObject) {
          rules.range(rule, dateObject.getTime(), source, errors, options);
        }
      }
    }
    callback(errors);
  };
  var ENUM = "enum";
  var enumerable2 = function enumerable3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules[ENUM](rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var floatFn = function floatFn2(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var integer2 = function integer3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var method2 = function method3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var number2 = function number3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (value === "") {
        value = void 0;
      }
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var object2 = function object3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var pattern2 = function pattern3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value, "string")) {
        rules.pattern(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var regexp2 = function regexp3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value)) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var required2 = function required3(rule, value, callback, source, options) {
    var errors = [];
    var type4 = Array.isArray(value) ? "array" : _typeof(value);
    rules.required(rule, value, source, errors, options, type4);
    callback(errors);
  };
  var string = function string2(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, "string");
      if (!isEmptyValue(value, "string")) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
        rules.pattern(rule, value, source, errors, options);
        if (rule.whitespace === true) {
          rules.whitespace(rule, value, source, errors, options);
        }
      }
    }
    callback(errors);
  };
  var type2 = function type3(rule, value, callback, source, options) {
    var ruleType = rule.type;
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, ruleType) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, ruleType);
      if (!isEmptyValue(value, ruleType)) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  const validators = {
    string,
    method: method2,
    number: number2,
    boolean,
    regexp: regexp2,
    integer: integer2,
    float: floatFn,
    array: array2,
    object: object2,
    enum: enumerable2,
    pattern: pattern2,
    date: date2,
    url: type2,
    hex: type2,
    email: type2,
    required: required2,
    any
  };
  var Schema = /* @__PURE__ */ function() {
    function Schema2(descriptor) {
      _classCallCheck(this, Schema2);
      _defineProperty(this, "rules", null);
      _defineProperty(this, "_messages", messages);
      this.define(descriptor);
    }
    _createClass(Schema2, [{
      key: "define",
      value: function define(rules2) {
        var _this = this;
        if (!rules2) {
          throw new Error("Cannot configure a schema with no rules");
        }
        if (_typeof(rules2) !== "object" || Array.isArray(rules2)) {
          throw new Error("Rules must be an object");
        }
        this.rules = {};
        Object.keys(rules2).forEach(function(name) {
          var item = rules2[name];
          _this.rules[name] = Array.isArray(item) ? item : [item];
        });
      }
    }, {
      key: "messages",
      value: function messages2(_messages) {
        if (_messages) {
          this._messages = deepMerge(newMessages(), _messages);
        }
        return this._messages;
      }
    }, {
      key: "validate",
      value: function validate(source_) {
        var _this2 = this;
        var o2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var oc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
        };
        var source = source_;
        var options = o2;
        var callback = oc;
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        if (!this.rules || Object.keys(this.rules).length === 0) {
          if (callback) {
            callback(null, source);
          }
          return Promise.resolve(source);
        }
        function complete(results) {
          var errors = [];
          var fields = {};
          function add(e2) {
            if (Array.isArray(e2)) {
              var _errors;
              errors = (_errors = errors).concat.apply(_errors, _toConsumableArray(e2));
            } else {
              errors.push(e2);
            }
          }
          for (var i2 = 0; i2 < results.length; i2++) {
            add(results[i2]);
          }
          if (!errors.length) {
            callback(null, source);
          } else {
            fields = convertFieldsError(errors);
            callback(errors, fields);
          }
        }
        if (options.messages) {
          var messages$1 = this.messages();
          if (messages$1 === messages) {
            messages$1 = newMessages();
          }
          deepMerge(messages$1, options.messages);
          options.messages = messages$1;
        } else {
          options.messages = this.messages();
        }
        var series = {};
        var keys2 = options.keys || Object.keys(this.rules);
        keys2.forEach(function(z2) {
          var arr = _this2.rules[z2];
          var value = source[z2];
          arr.forEach(function(r2) {
            var rule = r2;
            if (typeof rule.transform === "function") {
              if (source === source_) {
                source = _objectSpread2({}, source);
              }
              value = source[z2] = rule.transform(value);
              if (value !== void 0 && value !== null) {
                rule.type = rule.type || (Array.isArray(value) ? "array" : _typeof(value));
              }
            }
            if (typeof rule === "function") {
              rule = {
                validator: rule
              };
            } else {
              rule = _objectSpread2({}, rule);
            }
            rule.validator = _this2.getValidationMethod(rule);
            if (!rule.validator) {
              return;
            }
            rule.field = z2;
            rule.fullField = rule.fullField || z2;
            rule.type = _this2.getType(rule);
            series[z2] = series[z2] || [];
            series[z2].push({
              rule,
              value,
              source,
              field: z2
            });
          });
        });
        var errorFields = {};
        return asyncMap(series, options, function(data, doIt) {
          var rule = data.rule;
          var deep = (rule.type === "object" || rule.type === "array") && (_typeof(rule.fields) === "object" || _typeof(rule.defaultField) === "object");
          deep = deep && (rule.required || !rule.required && data.value);
          rule.field = data.field;
          function addFullField(key, schema) {
            return _objectSpread2(_objectSpread2({}, schema), {}, {
              fullField: "".concat(rule.fullField, ".").concat(key),
              fullFields: rule.fullFields ? [].concat(_toConsumableArray(rule.fullFields), [key]) : [key]
            });
          }
          function cb() {
            var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            var errorList = Array.isArray(e2) ? e2 : [e2];
            if (!options.suppressWarning && errorList.length) {
              Schema2.warning("async-validator:", errorList);
            }
            if (errorList.length && rule.message !== void 0) {
              errorList = [].concat(rule.message);
            }
            var filledErrors = errorList.map(complementError(rule, source));
            if (options.first && filledErrors.length) {
              errorFields[rule.field] = 1;
              return doIt(filledErrors);
            }
            if (!deep) {
              doIt(filledErrors);
            } else {
              if (rule.required && !data.value) {
                if (rule.message !== void 0) {
                  filledErrors = [].concat(rule.message).map(complementError(rule, source));
                } else if (options.error) {
                  filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
                }
                return doIt(filledErrors);
              }
              var fieldsSchema = {};
              if (rule.defaultField) {
                Object.keys(data.value).map(function(key) {
                  fieldsSchema[key] = rule.defaultField;
                });
              }
              fieldsSchema = _objectSpread2(_objectSpread2({}, fieldsSchema), data.rule.fields);
              var paredFieldsSchema = {};
              Object.keys(fieldsSchema).forEach(function(field) {
                var fieldSchema = fieldsSchema[field];
                var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
                paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
              });
              var schema = new Schema2(paredFieldsSchema);
              schema.messages(options.messages);
              if (data.rule.options) {
                data.rule.options.messages = options.messages;
                data.rule.options.error = options.error;
              }
              schema.validate(data.value, data.rule.options || options, function(errs) {
                var finalErrors = [];
                if (filledErrors && filledErrors.length) {
                  finalErrors.push.apply(finalErrors, _toConsumableArray(filledErrors));
                }
                if (errs && errs.length) {
                  finalErrors.push.apply(finalErrors, _toConsumableArray(errs));
                }
                doIt(finalErrors.length ? finalErrors : null);
              });
            }
          }
          var res;
          if (rule.asyncValidator) {
            res = rule.asyncValidator(rule, data.value, cb, data.source, options);
          } else if (rule.validator) {
            try {
              res = rule.validator(rule, data.value, cb, data.source, options);
            } catch (error) {
              var _console$error, _console;
              (_console$error = (_console = console).error) === null || _console$error === void 0 || _console$error.call(_console, error);
              if (!options.suppressValidatorError) {
                setTimeout(function() {
                  throw error;
                }, 0);
              }
              cb(error.message);
            }
            if (res === true) {
              cb();
            } else if (res === false) {
              cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || "".concat(rule.fullField || rule.field, " fails"));
            } else if (res instanceof Array) {
              cb(res);
            } else if (res instanceof Error) {
              cb(res.message);
            }
          }
          if (res && res.then) {
            res.then(function() {
              return cb();
            }, function(e2) {
              return cb(e2);
            });
          }
        }, function(results) {
          complete(results);
        }, source);
      }
    }, {
      key: "getType",
      value: function getType(rule) {
        if (rule.type === void 0 && rule.pattern instanceof RegExp) {
          rule.type = "pattern";
        }
        if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
          throw new Error(format("Unknown rule type %s", rule.type));
        }
        return rule.type || "string";
      }
    }, {
      key: "getValidationMethod",
      value: function getValidationMethod(rule) {
        if (typeof rule.validator === "function") {
          return rule.validator;
        }
        var keys2 = Object.keys(rule);
        var messageIndex = keys2.indexOf("message");
        if (messageIndex !== -1) {
          keys2.splice(messageIndex, 1);
        }
        if (keys2.length === 1 && keys2[0] === "required") {
          return validators.required;
        }
        return validators[this.getType(rule)] || void 0;
      }
    }]);
    return Schema2;
  }();
  _defineProperty(Schema, "register", function register(type4, validator) {
    if (typeof validator !== "function") {
      throw new Error("Cannot register a validator by type, validator is not a function");
    }
    validators[type4] = validator;
  });
  _defineProperty(Schema, "warning", warning);
  _defineProperty(Schema, "messages", messages);
  _defineProperty(Schema, "validators", validators);
  var typeTemplate = "'${name}' is not a valid ${type}";
  var defaultValidateMessages = {
    default: "Validation error on field '${name}'",
    required: "'${name}' is required",
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
      format: "'${name}' is invalid for format date",
      parse: "'${name}' could not be parsed as date",
      invalid: "'${name}' is invalid date"
    },
    types: {
      string: typeTemplate,
      method: typeTemplate,
      array: typeTemplate,
      object: typeTemplate,
      number: typeTemplate,
      date: typeTemplate,
      boolean: typeTemplate,
      integer: typeTemplate,
      float: typeTemplate,
      regexp: typeTemplate,
      email: typeTemplate,
      url: typeTemplate,
      hex: typeTemplate
    },
    string: {
      len: "'${name}' must be exactly ${len} characters",
      min: "'${name}' must be at least ${min} characters",
      max: "'${name}' cannot be longer than ${max} characters",
      range: "'${name}' must be between ${min} and ${max} characters"
    },
    number: {
      len: "'${name}' must equal ${len}",
      min: "'${name}' cannot be less than ${min}",
      max: "'${name}' cannot be greater than ${max}",
      range: "'${name}' must be between ${min} and ${max}"
    },
    array: {
      len: "'${name}' must be exactly ${len} in length",
      min: "'${name}' cannot be less than ${min} in length",
      max: "'${name}' cannot be greater than ${max} in length",
      range: "'${name}' must be between ${min} and ${max} in length"
    },
    pattern: {
      mismatch: "'${name}' does not match pattern ${pattern}"
    }
  };
  var AsyncValidator = Schema;
  function replaceMessage(template, kv) {
    return template.replace(/\$\{\w+\}/g, function(str) {
      var key = str.slice(2, -1);
      return kv[key];
    });
  }
  var CODE_LOGIC_ERROR = "CODE_LOGIC_ERROR";
  function validateRule(_x, _x2, _x3, _x4, _x5) {
    return _validateRule.apply(this, arguments);
  }
  function _validateRule() {
    _validateRule = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(name, value, rule, options, messageVariables) {
      var cloneRule, originValidator, subRuleField, validator, messages2, result, subResults, kv, fillVariableResult;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1)
          switch (_context2.prev = _context2.next) {
            case 0:
              cloneRule = _objectSpread2({}, rule);
              delete cloneRule.ruleIndex;
              AsyncValidator.warning = function() {
                return void 0;
              };
              if (cloneRule.validator) {
                originValidator = cloneRule.validator;
                cloneRule.validator = function() {
                  try {
                    return originValidator.apply(void 0, arguments);
                  } catch (error) {
                    console.error(error);
                    return Promise.reject(CODE_LOGIC_ERROR);
                  }
                };
              }
              subRuleField = null;
              if (cloneRule && cloneRule.type === "array" && cloneRule.defaultField) {
                subRuleField = cloneRule.defaultField;
                delete cloneRule.defaultField;
              }
              validator = new AsyncValidator(_defineProperty({}, name, [cloneRule]));
              messages2 = merge$2(defaultValidateMessages, options.validateMessages);
              validator.messages(messages2);
              result = [];
              _context2.prev = 10;
              _context2.next = 13;
              return Promise.resolve(validator.validate(_defineProperty({}, name, value), _objectSpread2({}, options)));
            case 13:
              _context2.next = 18;
              break;
            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](10);
              if (_context2.t0.errors) {
                result = _context2.t0.errors.map(function(_ref42, index2) {
                  var message2 = _ref42.message;
                  var mergedMessage = message2 === CODE_LOGIC_ERROR ? messages2.default : message2;
                  return /* @__PURE__ */ React__namespace.isValidElement(mergedMessage) ? (
                    // Wrap ReactNode with `key`
                    /* @__PURE__ */ React__namespace.cloneElement(mergedMessage, {
                      key: "error_".concat(index2)
                    })
                  ) : mergedMessage;
                });
              }
            case 18:
              if (!(!result.length && subRuleField)) {
                _context2.next = 23;
                break;
              }
              _context2.next = 21;
              return Promise.all(value.map(function(subValue, i2) {
                return validateRule("".concat(name, ".").concat(i2), subValue, subRuleField, options, messageVariables);
              }));
            case 21:
              subResults = _context2.sent;
              return _context2.abrupt("return", subResults.reduce(function(prev2, errors) {
                return [].concat(_toConsumableArray(prev2), _toConsumableArray(errors));
              }, []));
            case 23:
              kv = _objectSpread2(_objectSpread2({}, rule), {}, {
                name,
                enum: (rule.enum || []).join(", ")
              }, messageVariables);
              fillVariableResult = result.map(function(error) {
                if (typeof error === "string") {
                  return replaceMessage(error, kv);
                }
                return error;
              });
              return _context2.abrupt("return", fillVariableResult);
            case 26:
            case "end":
              return _context2.stop();
          }
      }, _callee2, null, [[10, 15]]);
    }));
    return _validateRule.apply(this, arguments);
  }
  function validateRules(namePath, value, rules2, options, validateFirst, messageVariables) {
    var name = namePath.join(".");
    var filledRules = rules2.map(function(currentRule, ruleIndex) {
      var originValidatorFunc = currentRule.validator;
      var cloneRule = _objectSpread2(_objectSpread2({}, currentRule), {}, {
        ruleIndex
      });
      if (originValidatorFunc) {
        cloneRule.validator = function(rule, val, callback) {
          var hasPromise = false;
          var wrappedCallback = function wrappedCallback2() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            Promise.resolve().then(function() {
              warningOnce(!hasPromise, "Your validator function has already return a promise. `callback` will be ignored.");
              if (!hasPromise) {
                callback.apply(void 0, args);
              }
            });
          };
          var promise = originValidatorFunc(rule, val, wrappedCallback);
          hasPromise = promise && typeof promise.then === "function" && typeof promise.catch === "function";
          warningOnce(hasPromise, "`callback` is deprecated. Please return a promise instead.");
          if (hasPromise) {
            promise.then(function() {
              callback();
            }).catch(function(err) {
              callback(err || " ");
            });
          }
        };
      }
      return cloneRule;
    }).sort(function(_ref7, _ref22) {
      var w1 = _ref7.warningOnly, i1 = _ref7.ruleIndex;
      var w2 = _ref22.warningOnly, i2 = _ref22.ruleIndex;
      if (!!w1 === !!w2) {
        return i1 - i2;
      }
      if (w1) {
        return 1;
      }
      return -1;
    });
    var summaryPromise;
    if (validateFirst === true) {
      summaryPromise = new Promise(/* @__PURE__ */ function() {
        var _ref32 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(resolve, reject) {
          var i2, rule, errors;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1)
              switch (_context.prev = _context.next) {
                case 0:
                  i2 = 0;
                case 1:
                  if (!(i2 < filledRules.length)) {
                    _context.next = 12;
                    break;
                  }
                  rule = filledRules[i2];
                  _context.next = 5;
                  return validateRule(name, value, rule, options, messageVariables);
                case 5:
                  errors = _context.sent;
                  if (!errors.length) {
                    _context.next = 9;
                    break;
                  }
                  reject([{
                    errors,
                    rule
                  }]);
                  return _context.abrupt("return");
                case 9:
                  i2 += 1;
                  _context.next = 1;
                  break;
                case 12:
                  resolve([]);
                case 13:
                case "end":
                  return _context.stop();
              }
          }, _callee);
        }));
        return function(_x6, _x7) {
          return _ref32.apply(this, arguments);
        };
      }());
    } else {
      var rulePromises = filledRules.map(function(rule) {
        return validateRule(name, value, rule, options, messageVariables).then(function(errors) {
          return {
            errors,
            rule
          };
        });
      });
      summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function(errors) {
        return Promise.reject(errors);
      });
    }
    summaryPromise.catch(function(e2) {
      return e2;
    });
    return summaryPromise;
  }
  function finishOnAllFailed(_x8) {
    return _finishOnAllFailed.apply(this, arguments);
  }
  function _finishOnAllFailed() {
    _finishOnAllFailed = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee3(rulePromises) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1)
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", Promise.all(rulePromises).then(function(errorsList) {
                var _ref52;
                var errors = (_ref52 = []).concat.apply(_ref52, _toConsumableArray(errorsList));
                return errors;
              }));
            case 1:
            case "end":
              return _context3.stop();
          }
      }, _callee3);
    }));
    return _finishOnAllFailed.apply(this, arguments);
  }
  function finishOnFirstFailed(_x9) {
    return _finishOnFirstFailed.apply(this, arguments);
  }
  function _finishOnFirstFailed() {
    _finishOnFirstFailed = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee4(rulePromises) {
      var count;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1)
          switch (_context4.prev = _context4.next) {
            case 0:
              count = 0;
              return _context4.abrupt("return", new Promise(function(resolve) {
                rulePromises.forEach(function(promise) {
                  promise.then(function(ruleError) {
                    if (ruleError.errors.length) {
                      resolve([ruleError]);
                    }
                    count += 1;
                    if (count === rulePromises.length) {
                      resolve([]);
                    }
                  });
                });
              }));
            case 2:
            case "end":
              return _context4.stop();
          }
      }, _callee4);
    }));
    return _finishOnFirstFailed.apply(this, arguments);
  }
  function getNamePath(path2) {
    return toArray$1(path2);
  }
  function cloneByNamePathList(store, namePathList) {
    var newStore = {};
    namePathList.forEach(function(namePath) {
      var value = get(store, namePath);
      newStore = set(newStore, namePath, value);
    });
    return newStore;
  }
  function containsNamePath(namePathList, namePath) {
    var partialMatch = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    return namePathList && namePathList.some(function(path2) {
      return matchNamePath(namePath, path2, partialMatch);
    });
  }
  function matchNamePath(namePath, subNamePath) {
    var partialMatch = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!namePath || !subNamePath) {
      return false;
    }
    if (!partialMatch && namePath.length !== subNamePath.length) {
      return false;
    }
    return subNamePath.every(function(nameUnit, i2) {
      return namePath[i2] === nameUnit;
    });
  }
  function isSimilar(source, target) {
    if (source === target) {
      return true;
    }
    if (!source && target || source && !target) {
      return false;
    }
    if (!source || !target || _typeof(source) !== "object" || _typeof(target) !== "object") {
      return false;
    }
    var sourceKeys = Object.keys(source);
    var targetKeys = Object.keys(target);
    var keys2 = new Set([].concat(sourceKeys, targetKeys));
    return _toConsumableArray(keys2).every(function(key) {
      var sourceValue = source[key];
      var targetValue = target[key];
      if (typeof sourceValue === "function" && typeof targetValue === "function") {
        return true;
      }
      return sourceValue === targetValue;
    });
  }
  function defaultGetValueFromEvent(valuePropName) {
    var event = arguments.length <= 1 ? void 0 : arguments[1];
    if (event && event.target && _typeof(event.target) === "object" && valuePropName in event.target) {
      return event.target[valuePropName];
    }
    return event;
  }
  function move(array4, moveIndex, toIndex) {
    var length2 = array4.length;
    if (moveIndex < 0 || moveIndex >= length2 || toIndex < 0 || toIndex >= length2) {
      return array4;
    }
    var item = array4[moveIndex];
    var diff = moveIndex - toIndex;
    if (diff > 0) {
      return [].concat(_toConsumableArray(array4.slice(0, toIndex)), [item], _toConsumableArray(array4.slice(toIndex, moveIndex)), _toConsumableArray(array4.slice(moveIndex + 1, length2)));
    }
    if (diff < 0) {
      return [].concat(_toConsumableArray(array4.slice(0, moveIndex)), _toConsumableArray(array4.slice(moveIndex + 1, toIndex + 1)), [item], _toConsumableArray(array4.slice(toIndex + 1, length2)));
    }
    return array4;
  }
  var _excluded$a = ["name"];
  var EMPTY_ERRORS = [];
  function requireUpdate(shouldUpdate, prev2, next2, prevValue, nextValue, info) {
    if (typeof shouldUpdate === "function") {
      return shouldUpdate(prev2, next2, "source" in info ? {
        source: info.source
      } : {});
    }
    return prevValue !== nextValue;
  }
  var Field = /* @__PURE__ */ function(_React$Component) {
    _inherits(Field2, _React$Component);
    var _super = _createSuper(Field2);
    function Field2(props) {
      var _this;
      _classCallCheck(this, Field2);
      _this = _super.call(this, props);
      _defineProperty(_assertThisInitialized(_this), "state", {
        resetCount: 0
      });
      _defineProperty(_assertThisInitialized(_this), "cancelRegisterFunc", null);
      _defineProperty(_assertThisInitialized(_this), "mounted", false);
      _defineProperty(_assertThisInitialized(_this), "touched", false);
      _defineProperty(_assertThisInitialized(_this), "dirty", false);
      _defineProperty(_assertThisInitialized(_this), "validatePromise", void 0);
      _defineProperty(_assertThisInitialized(_this), "prevValidating", void 0);
      _defineProperty(_assertThisInitialized(_this), "errors", EMPTY_ERRORS);
      _defineProperty(_assertThisInitialized(_this), "warnings", EMPTY_ERRORS);
      _defineProperty(_assertThisInitialized(_this), "cancelRegister", function() {
        var _this$props = _this.props, preserve2 = _this$props.preserve, isListField = _this$props.isListField, name = _this$props.name;
        if (_this.cancelRegisterFunc) {
          _this.cancelRegisterFunc(isListField, preserve2, getNamePath(name));
        }
        _this.cancelRegisterFunc = null;
      });
      _defineProperty(_assertThisInitialized(_this), "getNamePath", function() {
        var _this$props2 = _this.props, name = _this$props2.name, fieldContext = _this$props2.fieldContext;
        var _fieldContext$prefixN = fieldContext.prefixName, prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
        return name !== void 0 ? [].concat(_toConsumableArray(prefixName), _toConsumableArray(name)) : [];
      });
      _defineProperty(_assertThisInitialized(_this), "getRules", function() {
        var _this$props3 = _this.props, _this$props3$rules = _this$props3.rules, rules2 = _this$props3$rules === void 0 ? [] : _this$props3$rules, fieldContext = _this$props3.fieldContext;
        return rules2.map(function(rule) {
          if (typeof rule === "function") {
            return rule(fieldContext);
          }
          return rule;
        });
      });
      _defineProperty(_assertThisInitialized(_this), "refresh", function() {
        if (!_this.mounted)
          return;
        _this.setState(function(_ref7) {
          var resetCount = _ref7.resetCount;
          return {
            resetCount: resetCount + 1
          };
        });
      });
      _defineProperty(_assertThisInitialized(_this), "metaCache", null);
      _defineProperty(_assertThisInitialized(_this), "triggerMetaEvent", function(destroy2) {
        var onMetaChange = _this.props.onMetaChange;
        if (onMetaChange) {
          var _meta = _objectSpread2(_objectSpread2({}, _this.getMeta()), {}, {
            destroy: destroy2
          });
          if (!isEqual(_this.metaCache, _meta)) {
            onMetaChange(_meta);
          }
          _this.metaCache = _meta;
        } else {
          _this.metaCache = null;
        }
      });
      _defineProperty(_assertThisInitialized(_this), "onStoreChange", function(prevStore, namePathList, info) {
        var _this$props4 = _this.props, shouldUpdate = _this$props4.shouldUpdate, _this$props4$dependen = _this$props4.dependencies, dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen, onReset = _this$props4.onReset;
        var store = info.store;
        var namePath = _this.getNamePath();
        var prevValue = _this.getValue(prevStore);
        var curValue = _this.getValue(store);
        var namePathMatch = namePathList && containsNamePath(namePathList, namePath);
        if (info.type === "valueUpdate" && info.source === "external" && !isEqual(prevValue, curValue)) {
          _this.touched = true;
          _this.dirty = true;
          _this.validatePromise = null;
          _this.errors = EMPTY_ERRORS;
          _this.warnings = EMPTY_ERRORS;
          _this.triggerMetaEvent();
        }
        switch (info.type) {
          case "reset":
            if (!namePathList || namePathMatch) {
              _this.touched = false;
              _this.dirty = false;
              _this.validatePromise = void 0;
              _this.errors = EMPTY_ERRORS;
              _this.warnings = EMPTY_ERRORS;
              _this.triggerMetaEvent();
              onReset === null || onReset === void 0 || onReset();
              _this.refresh();
              return;
            }
            break;
          case "remove": {
            if (shouldUpdate) {
              _this.reRender();
              return;
            }
            break;
          }
          case "setField": {
            var data = info.data;
            if (namePathMatch) {
              if ("touched" in data) {
                _this.touched = data.touched;
              }
              if ("validating" in data && !("originRCField" in data)) {
                _this.validatePromise = data.validating ? Promise.resolve([]) : null;
              }
              if ("errors" in data) {
                _this.errors = data.errors || EMPTY_ERRORS;
              }
              if ("warnings" in data) {
                _this.warnings = data.warnings || EMPTY_ERRORS;
              }
              _this.dirty = true;
              _this.triggerMetaEvent();
              _this.reRender();
              return;
            } else if ("value" in data && containsNamePath(namePathList, namePath, true)) {
              _this.reRender();
              return;
            }
            if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();
              return;
            }
            break;
          }
          case "dependenciesUpdate": {
            var dependencyList = dependencies.map(getNamePath);
            if (dependencyList.some(function(dependency) {
              return containsNamePath(info.relatedFields, dependency);
            })) {
              _this.reRender();
              return;
            }
            break;
          }
          default:
            if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();
              return;
            }
            break;
        }
        if (shouldUpdate === true) {
          _this.reRender();
        }
      });
      _defineProperty(_assertThisInitialized(_this), "validateRules", function(options) {
        var namePath = _this.getNamePath();
        var currentValue = _this.getValue();
        var _ref22 = options || {}, triggerName = _ref22.triggerName, _ref2$validateOnly = _ref22.validateOnly, validateOnly = _ref2$validateOnly === void 0 ? false : _ref2$validateOnly;
        var rootPromise = Promise.resolve().then(/* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
          var _this$props5, _this$props5$validate, validateFirst, messageVariables, validateDebounce, filteredRules, promise;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1)
              switch (_context.prev = _context.next) {
                case 0:
                  if (_this.mounted) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return", []);
                case 2:
                  _this$props5 = _this.props, _this$props5$validate = _this$props5.validateFirst, validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate, messageVariables = _this$props5.messageVariables, validateDebounce = _this$props5.validateDebounce;
                  filteredRules = _this.getRules();
                  if (triggerName) {
                    filteredRules = filteredRules.filter(function(rule) {
                      return rule;
                    }).filter(function(rule) {
                      var validateTrigger = rule.validateTrigger;
                      if (!validateTrigger) {
                        return true;
                      }
                      var triggerList = toArray$1(validateTrigger);
                      return triggerList.includes(triggerName);
                    });
                  }
                  if (!(validateDebounce && triggerName)) {
                    _context.next = 10;
                    break;
                  }
                  _context.next = 8;
                  return new Promise(function(resolve) {
                    setTimeout(resolve, validateDebounce);
                  });
                case 8:
                  if (!(_this.validatePromise !== rootPromise)) {
                    _context.next = 10;
                    break;
                  }
                  return _context.abrupt("return", []);
                case 10:
                  promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
                  promise.catch(function(e2) {
                    return e2;
                  }).then(function() {
                    var ruleErrors = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : EMPTY_ERRORS;
                    if (_this.validatePromise === rootPromise) {
                      var _ruleErrors$forEach;
                      _this.validatePromise = null;
                      var nextErrors = [];
                      var nextWarnings = [];
                      (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 || _ruleErrors$forEach.call(ruleErrors, function(_ref42) {
                        var warningOnly = _ref42.rule.warningOnly, _ref4$errors = _ref42.errors, errors = _ref4$errors === void 0 ? EMPTY_ERRORS : _ref4$errors;
                        if (warningOnly) {
                          nextWarnings.push.apply(nextWarnings, _toConsumableArray(errors));
                        } else {
                          nextErrors.push.apply(nextErrors, _toConsumableArray(errors));
                        }
                      });
                      _this.errors = nextErrors;
                      _this.warnings = nextWarnings;
                      _this.triggerMetaEvent();
                      _this.reRender();
                    }
                  });
                  return _context.abrupt("return", promise);
                case 13:
                case "end":
                  return _context.stop();
              }
          }, _callee);
        })));
        if (validateOnly) {
          return rootPromise;
        }
        _this.validatePromise = rootPromise;
        _this.dirty = true;
        _this.errors = EMPTY_ERRORS;
        _this.warnings = EMPTY_ERRORS;
        _this.triggerMetaEvent();
        _this.reRender();
        return rootPromise;
      });
      _defineProperty(_assertThisInitialized(_this), "isFieldValidating", function() {
        return !!_this.validatePromise;
      });
      _defineProperty(_assertThisInitialized(_this), "isFieldTouched", function() {
        return _this.touched;
      });
      _defineProperty(_assertThisInitialized(_this), "isFieldDirty", function() {
        if (_this.dirty || _this.props.initialValue !== void 0) {
          return true;
        }
        var fieldContext = _this.props.fieldContext;
        var _fieldContext$getInte = fieldContext.getInternalHooks(HOOK_MARK), getInitialValue = _fieldContext$getInte.getInitialValue;
        if (getInitialValue(_this.getNamePath()) !== void 0) {
          return true;
        }
        return false;
      });
      _defineProperty(_assertThisInitialized(_this), "getErrors", function() {
        return _this.errors;
      });
      _defineProperty(_assertThisInitialized(_this), "getWarnings", function() {
        return _this.warnings;
      });
      _defineProperty(_assertThisInitialized(_this), "isListField", function() {
        return _this.props.isListField;
      });
      _defineProperty(_assertThisInitialized(_this), "isList", function() {
        return _this.props.isList;
      });
      _defineProperty(_assertThisInitialized(_this), "isPreserve", function() {
        return _this.props.preserve;
      });
      _defineProperty(_assertThisInitialized(_this), "getMeta", function() {
        _this.prevValidating = _this.isFieldValidating();
        var meta = {
          touched: _this.isFieldTouched(),
          validating: _this.prevValidating,
          errors: _this.errors,
          warnings: _this.warnings,
          name: _this.getNamePath(),
          validated: _this.validatePromise === null
        };
        return meta;
      });
      _defineProperty(_assertThisInitialized(_this), "getOnlyChild", function(children) {
        if (typeof children === "function") {
          var _meta2 = _this.getMeta();
          return _objectSpread2(_objectSpread2({}, _this.getOnlyChild(children(_this.getControlled(), _meta2, _this.props.fieldContext))), {}, {
            isFunction: true
          });
        }
        var childList = toArray$2(children);
        if (childList.length !== 1 || !/* @__PURE__ */ React__namespace.isValidElement(childList[0])) {
          return {
            child: childList,
            isFunction: false
          };
        }
        return {
          child: childList[0],
          isFunction: false
        };
      });
      _defineProperty(_assertThisInitialized(_this), "getValue", function(store) {
        var getFieldsValue = _this.props.fieldContext.getFieldsValue;
        var namePath = _this.getNamePath();
        return get(store || getFieldsValue(true), namePath);
      });
      _defineProperty(_assertThisInitialized(_this), "getControlled", function() {
        var childProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var _this$props6 = _this.props, name = _this$props6.name, trigger = _this$props6.trigger, validateTrigger = _this$props6.validateTrigger, getValueFromEvent = _this$props6.getValueFromEvent, normalize2 = _this$props6.normalize, valuePropName = _this$props6.valuePropName, getValueProps = _this$props6.getValueProps, fieldContext = _this$props6.fieldContext;
        var mergedValidateTrigger = validateTrigger !== void 0 ? validateTrigger : fieldContext.validateTrigger;
        var namePath = _this.getNamePath();
        var getInternalHooks22 = fieldContext.getInternalHooks, getFieldsValue = fieldContext.getFieldsValue;
        var _getInternalHooks = getInternalHooks22(HOOK_MARK), dispatch = _getInternalHooks.dispatch;
        var value = _this.getValue();
        var mergedGetValueProps = getValueProps || function(val) {
          return _defineProperty({}, valuePropName, val);
        };
        var originTriggerFunc = childProps[trigger];
        var valueProps = name !== void 0 ? mergedGetValueProps(value) : {};
        var control = _objectSpread2(_objectSpread2({}, childProps), valueProps);
        control[trigger] = function() {
          _this.touched = true;
          _this.dirty = true;
          _this.triggerMetaEvent();
          var newValue;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          if (getValueFromEvent) {
            newValue = getValueFromEvent.apply(void 0, args);
          } else {
            newValue = defaultGetValueFromEvent.apply(void 0, [valuePropName].concat(args));
          }
          if (normalize2) {
            newValue = normalize2(newValue, value, getFieldsValue(true));
          }
          dispatch({
            type: "updateValue",
            namePath,
            value: newValue
          });
          if (originTriggerFunc) {
            originTriggerFunc.apply(void 0, args);
          }
        };
        var validateTriggerList = toArray$1(mergedValidateTrigger || []);
        validateTriggerList.forEach(function(triggerName) {
          var originTrigger = control[triggerName];
          control[triggerName] = function() {
            if (originTrigger) {
              originTrigger.apply(void 0, arguments);
            }
            var rules2 = _this.props.rules;
            if (rules2 && rules2.length) {
              dispatch({
                type: "validateField",
                namePath,
                triggerName
              });
            }
          };
        });
        return control;
      });
      if (props.fieldContext) {
        var getInternalHooks2 = props.fieldContext.getInternalHooks;
        var _getInternalHooks2 = getInternalHooks2(HOOK_MARK), initEntityValue = _getInternalHooks2.initEntityValue;
        initEntityValue(_assertThisInitialized(_this));
      }
      return _this;
    }
    _createClass(Field2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props7 = this.props, shouldUpdate = _this$props7.shouldUpdate, fieldContext = _this$props7.fieldContext;
        this.mounted = true;
        if (fieldContext) {
          var getInternalHooks2 = fieldContext.getInternalHooks;
          var _getInternalHooks3 = getInternalHooks2(HOOK_MARK), registerField = _getInternalHooks3.registerField;
          this.cancelRegisterFunc = registerField(this);
        }
        if (shouldUpdate === true) {
          this.reRender();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.cancelRegister();
        this.triggerMetaEvent(true);
        this.mounted = false;
      }
    }, {
      key: "reRender",
      value: function reRender() {
        if (!this.mounted)
          return;
        this.forceUpdate();
      }
    }, {
      key: "render",
      value: function render2() {
        var resetCount = this.state.resetCount;
        var children = this.props.children;
        var _this$getOnlyChild = this.getOnlyChild(children), child = _this$getOnlyChild.child, isFunction2 = _this$getOnlyChild.isFunction;
        var returnChildNode;
        if (isFunction2) {
          returnChildNode = child;
        } else if (/* @__PURE__ */ React__namespace.isValidElement(child)) {
          returnChildNode = /* @__PURE__ */ React__namespace.cloneElement(child, this.getControlled(child.props));
        } else {
          warningOnce(!child, "`children` of Field is not validate ReactElement.");
          returnChildNode = child;
        }
        return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, {
          key: resetCount
        }, returnChildNode);
      }
    }]);
    return Field2;
  }(React__namespace.Component);
  _defineProperty(Field, "contextType", Context);
  _defineProperty(Field, "defaultProps", {
    trigger: "onChange",
    valuePropName: "value"
  });
  function WrapperField(_ref62) {
    var name = _ref62.name, restProps = _objectWithoutProperties(_ref62, _excluded$a);
    var fieldContext = React__namespace.useContext(Context);
    var listContext = React__namespace.useContext(ListContext);
    var namePath = name !== void 0 ? getNamePath(name) : void 0;
    var key = "keep";
    if (!restProps.isListField) {
      key = "_".concat((namePath || []).join("_"));
    }
    return /* @__PURE__ */ React__namespace.createElement(Field, _extends({
      key,
      name: namePath,
      isListField: !!listContext
    }, restProps, {
      fieldContext
    }));
  }
  function List(_ref7) {
    var name = _ref7.name, initialValue = _ref7.initialValue, children = _ref7.children, rules2 = _ref7.rules, validateTrigger = _ref7.validateTrigger, isListField = _ref7.isListField;
    var context = React__namespace.useContext(Context);
    var wrapperListContext = React__namespace.useContext(ListContext);
    var keyRef = React__namespace.useRef({
      keys: [],
      id: 0
    });
    var keyManager = keyRef.current;
    var prefixName = React__namespace.useMemo(function() {
      var parentPrefixName = getNamePath(context.prefixName) || [];
      return [].concat(_toConsumableArray(parentPrefixName), _toConsumableArray(getNamePath(name)));
    }, [context.prefixName, name]);
    var fieldContext = React__namespace.useMemo(function() {
      return _objectSpread2(_objectSpread2({}, context), {}, {
        prefixName
      });
    }, [context, prefixName]);
    var listContext = React__namespace.useMemo(function() {
      return {
        getKey: function getKey(namePath) {
          var len = prefixName.length;
          var pathName = namePath[len];
          return [keyManager.keys[pathName], namePath.slice(len + 1)];
        }
      };
    }, [prefixName]);
    if (typeof children !== "function") {
      warningOnce(false, "Form.List only accepts function as children.");
      return null;
    }
    var shouldUpdate = function shouldUpdate2(prevValue, nextValue, _ref22) {
      var source = _ref22.source;
      if (source === "internal") {
        return false;
      }
      return prevValue !== nextValue;
    };
    return /* @__PURE__ */ React__namespace.createElement(ListContext.Provider, {
      value: listContext
    }, /* @__PURE__ */ React__namespace.createElement(Context.Provider, {
      value: fieldContext
    }, /* @__PURE__ */ React__namespace.createElement(WrapperField, {
      name: [],
      shouldUpdate,
      rules: rules2,
      validateTrigger,
      initialValue,
      isList: true,
      isListField: isListField !== null && isListField !== void 0 ? isListField : !!wrapperListContext
    }, function(_ref32, meta) {
      var _ref3$value = _ref32.value, value = _ref3$value === void 0 ? [] : _ref3$value, onChange = _ref32.onChange;
      var getFieldValue = context.getFieldValue;
      var getNewValue = function getNewValue2() {
        var values = getFieldValue(prefixName || []);
        return values || [];
      };
      var operations = {
        add: function add(defaultValue, index2) {
          var newValue = getNewValue();
          if (index2 >= 0 && index2 <= newValue.length) {
            keyManager.keys = [].concat(_toConsumableArray(keyManager.keys.slice(0, index2)), [keyManager.id], _toConsumableArray(keyManager.keys.slice(index2)));
            onChange([].concat(_toConsumableArray(newValue.slice(0, index2)), [defaultValue], _toConsumableArray(newValue.slice(index2))));
          } else {
            keyManager.keys = [].concat(_toConsumableArray(keyManager.keys), [keyManager.id]);
            onChange([].concat(_toConsumableArray(newValue), [defaultValue]));
          }
          keyManager.id += 1;
        },
        remove: function remove(index2) {
          var newValue = getNewValue();
          var indexSet = new Set(Array.isArray(index2) ? index2 : [index2]);
          if (indexSet.size <= 0) {
            return;
          }
          keyManager.keys = keyManager.keys.filter(function(_, keysIndex) {
            return !indexSet.has(keysIndex);
          });
          onChange(newValue.filter(function(_, valueIndex) {
            return !indexSet.has(valueIndex);
          }));
        },
        move: function move$1(from2, to) {
          if (from2 === to) {
            return;
          }
          var newValue = getNewValue();
          if (from2 < 0 || from2 >= newValue.length || to < 0 || to >= newValue.length) {
            return;
          }
          keyManager.keys = move(keyManager.keys, from2, to);
          onChange(move(newValue, from2, to));
        }
      };
      var listValue = value || [];
      if (!Array.isArray(listValue)) {
        listValue = [];
      }
      return children(listValue.map(function(__, index2) {
        var key = keyManager.keys[index2];
        if (key === void 0) {
          keyManager.keys[index2] = keyManager.id;
          key = keyManager.keys[index2];
          keyManager.id += 1;
        }
        return {
          name: index2,
          key,
          isListField: true
        };
      }), operations, meta);
    })));
  }
  function allPromiseFinish(promiseList) {
    var hasError = false;
    var count = promiseList.length;
    var results = [];
    if (!promiseList.length) {
      return Promise.resolve([]);
    }
    return new Promise(function(resolve, reject) {
      promiseList.forEach(function(promise, index2) {
        promise.catch(function(e2) {
          hasError = true;
          return e2;
        }).then(function(result) {
          count -= 1;
          results[index2] = result;
          if (count > 0) {
            return;
          }
          if (hasError) {
            reject(results);
          }
          resolve(results);
        });
      });
    });
  }
  var SPLIT = "__@field_split__";
  function normalize(namePath) {
    return namePath.map(function(cell) {
      return "".concat(_typeof(cell), ":").concat(cell);
    }).join(SPLIT);
  }
  var NameMap = /* @__PURE__ */ function() {
    function NameMap2() {
      _classCallCheck(this, NameMap2);
      _defineProperty(this, "kvs", /* @__PURE__ */ new Map());
    }
    _createClass(NameMap2, [{
      key: "set",
      value: function set2(key, value) {
        this.kvs.set(normalize(key), value);
      }
    }, {
      key: "get",
      value: function get2(key) {
        return this.kvs.get(normalize(key));
      }
    }, {
      key: "update",
      value: function update(key, updater) {
        var origin = this.get(key);
        var next2 = updater(origin);
        if (!next2) {
          this.delete(key);
        } else {
          this.set(key, next2);
        }
      }
    }, {
      key: "delete",
      value: function _delete(key) {
        this.kvs.delete(normalize(key));
      }
      // Since we only use this in test, let simply realize this
    }, {
      key: "map",
      value: function map(callback) {
        return _toConsumableArray(this.kvs.entries()).map(function(_ref7) {
          var _ref22 = _slicedToArray(_ref7, 2), key = _ref22[0], value = _ref22[1];
          var cells = key.split(SPLIT);
          return callback({
            key: cells.map(function(cell) {
              var _cell$match = cell.match(/^([^:]*):(.*)$/), _cell$match2 = _slicedToArray(_cell$match, 3), type4 = _cell$match2[1], unit2 = _cell$match2[2];
              return type4 === "number" ? Number(unit2) : unit2;
            }),
            value
          });
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var json = {};
        this.map(function(_ref32) {
          var key = _ref32.key, value = _ref32.value;
          json[key.join(".")] = value;
          return null;
        });
        return json;
      }
    }]);
    return NameMap2;
  }();
  var _excluded$9 = ["name"];
  var FormStore = /* @__PURE__ */ _createClass(function FormStore2(forceRootUpdate) {
    var _this = this;
    _classCallCheck(this, FormStore2);
    _defineProperty(this, "formHooked", false);
    _defineProperty(this, "forceRootUpdate", void 0);
    _defineProperty(this, "subscribable", true);
    _defineProperty(this, "store", {});
    _defineProperty(this, "fieldEntities", []);
    _defineProperty(this, "initialValues", {});
    _defineProperty(this, "callbacks", {});
    _defineProperty(this, "validateMessages", null);
    _defineProperty(this, "preserve", null);
    _defineProperty(this, "lastValidatePromise", null);
    _defineProperty(this, "getForm", function() {
      return {
        getFieldValue: _this.getFieldValue,
        getFieldsValue: _this.getFieldsValue,
        getFieldError: _this.getFieldError,
        getFieldWarning: _this.getFieldWarning,
        getFieldsError: _this.getFieldsError,
        isFieldsTouched: _this.isFieldsTouched,
        isFieldTouched: _this.isFieldTouched,
        isFieldValidating: _this.isFieldValidating,
        isFieldsValidating: _this.isFieldsValidating,
        resetFields: _this.resetFields,
        setFields: _this.setFields,
        setFieldValue: _this.setFieldValue,
        setFieldsValue: _this.setFieldsValue,
        validateFields: _this.validateFields,
        submit: _this.submit,
        _init: true,
        getInternalHooks: _this.getInternalHooks
      };
    });
    _defineProperty(this, "getInternalHooks", function(key) {
      if (key === HOOK_MARK) {
        _this.formHooked = true;
        return {
          dispatch: _this.dispatch,
          initEntityValue: _this.initEntityValue,
          registerField: _this.registerField,
          useSubscribe: _this.useSubscribe,
          setInitialValues: _this.setInitialValues,
          destroyForm: _this.destroyForm,
          setCallbacks: _this.setCallbacks,
          setValidateMessages: _this.setValidateMessages,
          getFields: _this.getFields,
          setPreserve: _this.setPreserve,
          getInitialValue: _this.getInitialValue,
          registerWatch: _this.registerWatch
        };
      }
      warningOnce(false, "`getInternalHooks` is internal usage. Should not call directly.");
      return null;
    });
    _defineProperty(this, "useSubscribe", function(subscribable) {
      _this.subscribable = subscribable;
    });
    _defineProperty(this, "prevWithoutPreserves", null);
    _defineProperty(this, "setInitialValues", function(initialValues, init) {
      _this.initialValues = initialValues || {};
      if (init) {
        var _this$prevWithoutPres;
        var nextStore = merge$2(initialValues, _this.store);
        (_this$prevWithoutPres = _this.prevWithoutPreserves) === null || _this$prevWithoutPres === void 0 || _this$prevWithoutPres.map(function(_ref7) {
          var namePath = _ref7.key;
          nextStore = set(nextStore, namePath, get(initialValues, namePath));
        });
        _this.prevWithoutPreserves = null;
        _this.updateStore(nextStore);
      }
    });
    _defineProperty(this, "destroyForm", function(clearOnDestroy) {
      if (clearOnDestroy) {
        _this.updateStore({});
      } else {
        var prevWithoutPreserves = new NameMap();
        _this.getFieldEntities(true).forEach(function(entity) {
          if (!_this.isMergedPreserve(entity.isPreserve())) {
            prevWithoutPreserves.set(entity.getNamePath(), true);
          }
        });
        _this.prevWithoutPreserves = prevWithoutPreserves;
      }
    });
    _defineProperty(this, "getInitialValue", function(namePath) {
      var initValue = get(_this.initialValues, namePath);
      return namePath.length ? merge$2(initValue) : initValue;
    });
    _defineProperty(this, "setCallbacks", function(callbacks) {
      _this.callbacks = callbacks;
    });
    _defineProperty(this, "setValidateMessages", function(validateMessages) {
      _this.validateMessages = validateMessages;
    });
    _defineProperty(this, "setPreserve", function(preserve2) {
      _this.preserve = preserve2;
    });
    _defineProperty(this, "watchList", []);
    _defineProperty(this, "registerWatch", function(callback) {
      _this.watchList.push(callback);
      return function() {
        _this.watchList = _this.watchList.filter(function(fn) {
          return fn !== callback;
        });
      };
    });
    _defineProperty(this, "notifyWatch", function() {
      var namePath = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      if (_this.watchList.length) {
        var values = _this.getFieldsValue();
        var allValues = _this.getFieldsValue(true);
        _this.watchList.forEach(function(callback) {
          callback(values, allValues, namePath);
        });
      }
    });
    _defineProperty(this, "timeoutId", null);
    _defineProperty(this, "warningUnhooked", function() {
    });
    _defineProperty(this, "updateStore", function(nextStore) {
      _this.store = nextStore;
    });
    _defineProperty(this, "getFieldEntities", function() {
      var pure = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      if (!pure) {
        return _this.fieldEntities;
      }
      return _this.fieldEntities.filter(function(field) {
        return field.getNamePath().length;
      });
    });
    _defineProperty(this, "getFieldsMap", function() {
      var pure = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      var cache2 = new NameMap();
      _this.getFieldEntities(pure).forEach(function(field) {
        var namePath = field.getNamePath();
        cache2.set(namePath, field);
      });
      return cache2;
    });
    _defineProperty(this, "getFieldEntitiesForNamePathList", function(nameList) {
      if (!nameList) {
        return _this.getFieldEntities(true);
      }
      var cache2 = _this.getFieldsMap(true);
      return nameList.map(function(name) {
        var namePath = getNamePath(name);
        return cache2.get(namePath) || {
          INVALIDATE_NAME_PATH: getNamePath(name)
        };
      });
    });
    _defineProperty(this, "getFieldsValue", function(nameList, filterFunc) {
      _this.warningUnhooked();
      var mergedNameList;
      var mergedFilterFunc;
      var mergedStrict;
      if (nameList === true || Array.isArray(nameList)) {
        mergedNameList = nameList;
        mergedFilterFunc = filterFunc;
      } else if (nameList && _typeof(nameList) === "object") {
        mergedStrict = nameList.strict;
        mergedFilterFunc = nameList.filter;
      }
      if (mergedNameList === true && !mergedFilterFunc) {
        return _this.store;
      }
      var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(mergedNameList) ? mergedNameList : null);
      var filteredNameList = [];
      fieldEntities.forEach(function(entity) {
        var _isListField, _ref32;
        var namePath = "INVALIDATE_NAME_PATH" in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath();
        if (mergedStrict) {
          var _isList, _ref22;
          if ((_isList = (_ref22 = entity).isList) !== null && _isList !== void 0 && _isList.call(_ref22)) {
            return;
          }
        } else if (!mergedNameList && (_isListField = (_ref32 = entity).isListField) !== null && _isListField !== void 0 && _isListField.call(_ref32)) {
          return;
        }
        if (!mergedFilterFunc) {
          filteredNameList.push(namePath);
        } else {
          var meta = "getMeta" in entity ? entity.getMeta() : null;
          if (mergedFilterFunc(meta)) {
            filteredNameList.push(namePath);
          }
        }
      });
      return cloneByNamePathList(_this.store, filteredNameList.map(getNamePath));
    });
    _defineProperty(this, "getFieldValue", function(name) {
      _this.warningUnhooked();
      var namePath = getNamePath(name);
      return get(_this.store, namePath);
    });
    _defineProperty(this, "getFieldsError", function(nameList) {
      _this.warningUnhooked();
      var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);
      return fieldEntities.map(function(entity, index2) {
        if (entity && !("INVALIDATE_NAME_PATH" in entity)) {
          return {
            name: entity.getNamePath(),
            errors: entity.getErrors(),
            warnings: entity.getWarnings()
          };
        }
        return {
          name: getNamePath(nameList[index2]),
          errors: [],
          warnings: []
        };
      });
    });
    _defineProperty(this, "getFieldError", function(name) {
      _this.warningUnhooked();
      var namePath = getNamePath(name);
      var fieldError = _this.getFieldsError([namePath])[0];
      return fieldError.errors;
    });
    _defineProperty(this, "getFieldWarning", function(name) {
      _this.warningUnhooked();
      var namePath = getNamePath(name);
      var fieldError = _this.getFieldsError([namePath])[0];
      return fieldError.warnings;
    });
    _defineProperty(this, "isFieldsTouched", function() {
      _this.warningUnhooked();
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var arg0 = args[0], arg1 = args[1];
      var namePathList;
      var isAllFieldsTouched = false;
      if (args.length === 0) {
        namePathList = null;
      } else if (args.length === 1) {
        if (Array.isArray(arg0)) {
          namePathList = arg0.map(getNamePath);
          isAllFieldsTouched = false;
        } else {
          namePathList = null;
          isAllFieldsTouched = arg0;
        }
      } else {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = arg1;
      }
      var fieldEntities = _this.getFieldEntities(true);
      var isFieldTouched = function isFieldTouched2(field) {
        return field.isFieldTouched();
      };
      if (!namePathList) {
        return isAllFieldsTouched ? fieldEntities.every(function(entity) {
          return isFieldTouched(entity) || entity.isList();
        }) : fieldEntities.some(isFieldTouched);
      }
      var map = new NameMap();
      namePathList.forEach(function(shortNamePath) {
        map.set(shortNamePath, []);
      });
      fieldEntities.forEach(function(field) {
        var fieldNamePath = field.getNamePath();
        namePathList.forEach(function(shortNamePath) {
          if (shortNamePath.every(function(nameUnit, i2) {
            return fieldNamePath[i2] === nameUnit;
          })) {
            map.update(shortNamePath, function(list) {
              return [].concat(_toConsumableArray(list), [field]);
            });
          }
        });
      });
      var isNamePathListTouched = function isNamePathListTouched2(entities) {
        return entities.some(isFieldTouched);
      };
      var namePathListEntities = map.map(function(_ref42) {
        var value = _ref42.value;
        return value;
      });
      return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
    });
    _defineProperty(this, "isFieldTouched", function(name) {
      _this.warningUnhooked();
      return _this.isFieldsTouched([name]);
    });
    _defineProperty(this, "isFieldsValidating", function(nameList) {
      _this.warningUnhooked();
      var fieldEntities = _this.getFieldEntities();
      if (!nameList) {
        return fieldEntities.some(function(testField) {
          return testField.isFieldValidating();
        });
      }
      var namePathList = nameList.map(getNamePath);
      return fieldEntities.some(function(testField) {
        var fieldNamePath = testField.getNamePath();
        return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
      });
    });
    _defineProperty(this, "isFieldValidating", function(name) {
      _this.warningUnhooked();
      return _this.isFieldsValidating([name]);
    });
    _defineProperty(this, "resetWithFieldInitialValue", function() {
      var info = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var cache2 = new NameMap();
      var fieldEntities = _this.getFieldEntities(true);
      fieldEntities.forEach(function(field) {
        var initialValue = field.props.initialValue;
        var namePath = field.getNamePath();
        if (initialValue !== void 0) {
          var records = cache2.get(namePath) || /* @__PURE__ */ new Set();
          records.add({
            entity: field,
            value: initialValue
          });
          cache2.set(namePath, records);
        }
      });
      var resetWithFields = function resetWithFields2(entities) {
        entities.forEach(function(field) {
          var initialValue = field.props.initialValue;
          if (initialValue !== void 0) {
            var namePath = field.getNamePath();
            var formInitialValue = _this.getInitialValue(namePath);
            if (formInitialValue !== void 0) {
              warningOnce(false, "Form already set 'initialValues' with path '".concat(namePath.join("."), "'. Field can not overwrite it."));
            } else {
              var records = cache2.get(namePath);
              if (records && records.size > 1) {
                warningOnce(false, "Multiple Field with path '".concat(namePath.join("."), "' set 'initialValue'. Can not decide which one to pick."));
              } else if (records) {
                var originValue = _this.getFieldValue(namePath);
                var isListField = field.isListField();
                if (!isListField && (!info.skipExist || originValue === void 0)) {
                  _this.updateStore(set(_this.store, namePath, _toConsumableArray(records)[0].value));
                }
              }
            }
          }
        });
      };
      var requiredFieldEntities;
      if (info.entities) {
        requiredFieldEntities = info.entities;
      } else if (info.namePathList) {
        requiredFieldEntities = [];
        info.namePathList.forEach(function(namePath) {
          var records = cache2.get(namePath);
          if (records) {
            var _requiredFieldEntitie;
            (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, _toConsumableArray(_toConsumableArray(records).map(function(r2) {
              return r2.entity;
            })));
          }
        });
      } else {
        requiredFieldEntities = fieldEntities;
      }
      resetWithFields(requiredFieldEntities);
    });
    _defineProperty(this, "resetFields", function(nameList) {
      _this.warningUnhooked();
      var prevStore = _this.store;
      if (!nameList) {
        _this.updateStore(merge$2(_this.initialValues));
        _this.resetWithFieldInitialValue();
        _this.notifyObservers(prevStore, null, {
          type: "reset"
        });
        _this.notifyWatch();
        return;
      }
      var namePathList = nameList.map(getNamePath);
      namePathList.forEach(function(namePath) {
        var initialValue = _this.getInitialValue(namePath);
        _this.updateStore(set(_this.store, namePath, initialValue));
      });
      _this.resetWithFieldInitialValue({
        namePathList
      });
      _this.notifyObservers(prevStore, namePathList, {
        type: "reset"
      });
      _this.notifyWatch(namePathList);
    });
    _defineProperty(this, "setFields", function(fields) {
      _this.warningUnhooked();
      var prevStore = _this.store;
      var namePathList = [];
      fields.forEach(function(fieldData) {
        var name = fieldData.name, data = _objectWithoutProperties(fieldData, _excluded$9);
        var namePath = getNamePath(name);
        namePathList.push(namePath);
        if ("value" in data) {
          _this.updateStore(set(_this.store, namePath, data.value));
        }
        _this.notifyObservers(prevStore, [namePath], {
          type: "setField",
          data: fieldData
        });
      });
      _this.notifyWatch(namePathList);
    });
    _defineProperty(this, "getFields", function() {
      var entities = _this.getFieldEntities(true);
      var fields = entities.map(function(field) {
        var namePath = field.getNamePath();
        var meta = field.getMeta();
        var fieldData = _objectSpread2(_objectSpread2({}, meta), {}, {
          name: namePath,
          value: _this.getFieldValue(namePath)
        });
        Object.defineProperty(fieldData, "originRCField", {
          value: true
        });
        return fieldData;
      });
      return fields;
    });
    _defineProperty(this, "initEntityValue", function(entity) {
      var initialValue = entity.props.initialValue;
      if (initialValue !== void 0) {
        var namePath = entity.getNamePath();
        var prevValue = get(_this.store, namePath);
        if (prevValue === void 0) {
          _this.updateStore(set(_this.store, namePath, initialValue));
        }
      }
    });
    _defineProperty(this, "isMergedPreserve", function(fieldPreserve) {
      var mergedPreserve = fieldPreserve !== void 0 ? fieldPreserve : _this.preserve;
      return mergedPreserve !== null && mergedPreserve !== void 0 ? mergedPreserve : true;
    });
    _defineProperty(this, "registerField", function(entity) {
      _this.fieldEntities.push(entity);
      var namePath = entity.getNamePath();
      _this.notifyWatch([namePath]);
      if (entity.props.initialValue !== void 0) {
        var prevStore = _this.store;
        _this.resetWithFieldInitialValue({
          entities: [entity],
          skipExist: true
        });
        _this.notifyObservers(prevStore, [entity.getNamePath()], {
          type: "valueUpdate",
          source: "internal"
        });
      }
      return function(isListField, preserve2) {
        var subNamePath = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        _this.fieldEntities = _this.fieldEntities.filter(function(item) {
          return item !== entity;
        });
        if (!_this.isMergedPreserve(preserve2) && (!isListField || subNamePath.length > 1)) {
          var defaultValue = isListField ? void 0 : _this.getInitialValue(namePath);
          if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function(field) {
            return (
              // Only reset when no namePath exist
              !matchNamePath(field.getNamePath(), namePath)
            );
          })) {
            var _prevStore = _this.store;
            _this.updateStore(set(_prevStore, namePath, defaultValue, true));
            _this.notifyObservers(_prevStore, [namePath], {
              type: "remove"
            });
            _this.triggerDependenciesUpdate(_prevStore, namePath);
          }
        }
        _this.notifyWatch([namePath]);
      };
    });
    _defineProperty(this, "dispatch", function(action) {
      switch (action.type) {
        case "updateValue": {
          var namePath = action.namePath, value = action.value;
          _this.updateValue(namePath, value);
          break;
        }
        case "validateField": {
          var _namePath = action.namePath, triggerName = action.triggerName;
          _this.validateFields([_namePath], {
            triggerName
          });
          break;
        }
      }
    });
    _defineProperty(this, "notifyObservers", function(prevStore, namePathList, info) {
      if (_this.subscribable) {
        var mergedInfo = _objectSpread2(_objectSpread2({}, info), {}, {
          store: _this.getFieldsValue(true)
        });
        _this.getFieldEntities().forEach(function(_ref52) {
          var onStoreChange = _ref52.onStoreChange;
          onStoreChange(prevStore, namePathList, mergedInfo);
        });
      } else {
        _this.forceRootUpdate();
      }
    });
    _defineProperty(this, "triggerDependenciesUpdate", function(prevStore, namePath) {
      var childrenFields = _this.getDependencyChildrenFields(namePath);
      if (childrenFields.length) {
        _this.validateFields(childrenFields);
      }
      _this.notifyObservers(prevStore, childrenFields, {
        type: "dependenciesUpdate",
        relatedFields: [namePath].concat(_toConsumableArray(childrenFields))
      });
      return childrenFields;
    });
    _defineProperty(this, "updateValue", function(name, value) {
      var namePath = getNamePath(name);
      var prevStore = _this.store;
      _this.updateStore(set(_this.store, namePath, value));
      _this.notifyObservers(prevStore, [namePath], {
        type: "valueUpdate",
        source: "internal"
      });
      _this.notifyWatch([namePath]);
      var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath);
      var onValuesChange = _this.callbacks.onValuesChange;
      if (onValuesChange) {
        var changedValues = cloneByNamePathList(_this.store, [namePath]);
        onValuesChange(changedValues, _this.getFieldsValue());
      }
      _this.triggerOnFieldsChange([namePath].concat(_toConsumableArray(childrenFields)));
    });
    _defineProperty(this, "setFieldsValue", function(store) {
      _this.warningUnhooked();
      var prevStore = _this.store;
      if (store) {
        var nextStore = merge$2(_this.store, store);
        _this.updateStore(nextStore);
      }
      _this.notifyObservers(prevStore, null, {
        type: "valueUpdate",
        source: "external"
      });
      _this.notifyWatch();
    });
    _defineProperty(this, "setFieldValue", function(name, value) {
      _this.setFields([{
        name,
        value
      }]);
    });
    _defineProperty(this, "getDependencyChildrenFields", function(rootNamePath) {
      var children = /* @__PURE__ */ new Set();
      var childrenFields = [];
      var dependencies2fields = new NameMap();
      _this.getFieldEntities().forEach(function(field) {
        var dependencies = field.props.dependencies;
        (dependencies || []).forEach(function(dependency) {
          var dependencyNamePath = getNamePath(dependency);
          dependencies2fields.update(dependencyNamePath, function() {
            var fields = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
            fields.add(field);
            return fields;
          });
        });
      });
      var fillChildren = function fillChildren2(namePath) {
        var fields = dependencies2fields.get(namePath) || /* @__PURE__ */ new Set();
        fields.forEach(function(field) {
          if (!children.has(field)) {
            children.add(field);
            var fieldNamePath = field.getNamePath();
            if (field.isFieldDirty() && fieldNamePath.length) {
              childrenFields.push(fieldNamePath);
              fillChildren2(fieldNamePath);
            }
          }
        });
      };
      fillChildren(rootNamePath);
      return childrenFields;
    });
    _defineProperty(this, "triggerOnFieldsChange", function(namePathList, filedErrors) {
      var onFieldsChange = _this.callbacks.onFieldsChange;
      if (onFieldsChange) {
        var fields = _this.getFields();
        if (filedErrors) {
          var cache2 = new NameMap();
          filedErrors.forEach(function(_ref62) {
            var name = _ref62.name, errors = _ref62.errors;
            cache2.set(name, errors);
          });
          fields.forEach(function(field) {
            field.errors = cache2.get(field.name) || field.errors;
          });
        }
        var changedFields = fields.filter(function(_ref7) {
          var fieldName = _ref7.name;
          return containsNamePath(namePathList, fieldName);
        });
        if (changedFields.length) {
          onFieldsChange(changedFields, fields);
        }
      }
    });
    _defineProperty(this, "validateFields", function(arg1, arg2) {
      _this.warningUnhooked();
      var nameList;
      var options;
      if (Array.isArray(arg1) || typeof arg1 === "string" || typeof arg2 === "string") {
        nameList = arg1;
        options = arg2;
      } else {
        options = arg1;
      }
      var provideNameList = !!nameList;
      var namePathList = provideNameList ? nameList.map(getNamePath) : [];
      var promiseList = [];
      var TMP_SPLIT = String(Date.now());
      var validateNamePathList = /* @__PURE__ */ new Set();
      var _ref8 = options || {}, recursive = _ref8.recursive, dirty = _ref8.dirty;
      _this.getFieldEntities(true).forEach(function(field) {
        if (!provideNameList) {
          namePathList.push(field.getNamePath());
        }
        if (!field.props.rules || !field.props.rules.length) {
          return;
        }
        if (dirty && !field.isFieldDirty()) {
          return;
        }
        var fieldNamePath = field.getNamePath();
        validateNamePathList.add(fieldNamePath.join(TMP_SPLIT));
        if (!provideNameList || containsNamePath(namePathList, fieldNamePath, recursive)) {
          var promise = field.validateRules(_objectSpread2({
            validateMessages: _objectSpread2(_objectSpread2({}, defaultValidateMessages), _this.validateMessages)
          }, options));
          promiseList.push(promise.then(function() {
            return {
              name: fieldNamePath,
              errors: [],
              warnings: []
            };
          }).catch(function(ruleErrors) {
            var _ruleErrors$forEach;
            var mergedErrors = [];
            var mergedWarnings = [];
            (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 || _ruleErrors$forEach.call(ruleErrors, function(_ref9) {
              var warningOnly = _ref9.rule.warningOnly, errors = _ref9.errors;
              if (warningOnly) {
                mergedWarnings.push.apply(mergedWarnings, _toConsumableArray(errors));
              } else {
                mergedErrors.push.apply(mergedErrors, _toConsumableArray(errors));
              }
            });
            if (mergedErrors.length) {
              return Promise.reject({
                name: fieldNamePath,
                errors: mergedErrors,
                warnings: mergedWarnings
              });
            }
            return {
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            };
          }));
        }
      });
      var summaryPromise = allPromiseFinish(promiseList);
      _this.lastValidatePromise = summaryPromise;
      summaryPromise.catch(function(results) {
        return results;
      }).then(function(results) {
        var resultNamePathList = results.map(function(_ref10) {
          var name = _ref10.name;
          return name;
        });
        _this.notifyObservers(_this.store, resultNamePathList, {
          type: "validateFinish"
        });
        _this.triggerOnFieldsChange(resultNamePathList, results);
      });
      var returnPromise = summaryPromise.then(function() {
        if (_this.lastValidatePromise === summaryPromise) {
          return Promise.resolve(_this.getFieldsValue(namePathList));
        }
        return Promise.reject([]);
      }).catch(function(results) {
        var errorList = results.filter(function(result) {
          return result && result.errors.length;
        });
        return Promise.reject({
          values: _this.getFieldsValue(namePathList),
          errorFields: errorList,
          outOfDate: _this.lastValidatePromise !== summaryPromise
        });
      });
      returnPromise.catch(function(e2) {
        return e2;
      });
      var triggerNamePathList = namePathList.filter(function(namePath) {
        return validateNamePathList.has(namePath.join(TMP_SPLIT));
      });
      _this.triggerOnFieldsChange(triggerNamePathList);
      return returnPromise;
    });
    _defineProperty(this, "submit", function() {
      _this.warningUnhooked();
      _this.validateFields().then(function(values) {
        var onFinish = _this.callbacks.onFinish;
        if (onFinish) {
          try {
            onFinish(values);
          } catch (err) {
            console.error(err);
          }
        }
      }).catch(function(e2) {
        var onFinishFailed = _this.callbacks.onFinishFailed;
        if (onFinishFailed) {
          onFinishFailed(e2);
        }
      });
    });
    this.forceRootUpdate = forceRootUpdate;
  });
  function useForm(form) {
    var formRef = React__namespace.useRef();
    var _React$useState = React__namespace.useState({}), _React$useState2 = _slicedToArray(_React$useState, 2), forceUpdate = _React$useState2[1];
    if (!formRef.current) {
      if (form) {
        formRef.current = form;
      } else {
        var forceReRender = function forceReRender2() {
          forceUpdate({});
        };
        var formStore = new FormStore(forceReRender);
        formRef.current = formStore.getForm();
      }
    }
    return [formRef.current];
  }
  var FormContext = /* @__PURE__ */ React__namespace.createContext({
    triggerFormChange: function triggerFormChange() {
    },
    triggerFormFinish: function triggerFormFinish() {
    },
    registerForm: function registerForm() {
    },
    unregisterForm: function unregisterForm() {
    }
  });
  var FormProvider = function FormProvider2(_ref7) {
    var validateMessages = _ref7.validateMessages, onFormChange = _ref7.onFormChange, onFormFinish = _ref7.onFormFinish, children = _ref7.children;
    var formContext = React__namespace.useContext(FormContext);
    var formsRef = React__namespace.useRef({});
    return /* @__PURE__ */ React__namespace.createElement(FormContext.Provider, {
      value: _objectSpread2(_objectSpread2({}, formContext), {}, {
        validateMessages: _objectSpread2(_objectSpread2({}, formContext.validateMessages), validateMessages),
        // =========================================================
        // =                  Global Form Control                  =
        // =========================================================
        triggerFormChange: function triggerFormChange2(name, changedFields) {
          if (onFormChange) {
            onFormChange(name, {
              changedFields,
              forms: formsRef.current
            });
          }
          formContext.triggerFormChange(name, changedFields);
        },
        triggerFormFinish: function triggerFormFinish2(name, values) {
          if (onFormFinish) {
            onFormFinish(name, {
              values,
              forms: formsRef.current
            });
          }
          formContext.triggerFormFinish(name, values);
        },
        registerForm: function registerForm2(name, form) {
          if (name) {
            formsRef.current = _objectSpread2(_objectSpread2({}, formsRef.current), {}, _defineProperty({}, name, form));
          }
          formContext.registerForm(name, form);
        },
        unregisterForm: function unregisterForm2(name) {
          var newForms = _objectSpread2({}, formsRef.current);
          delete newForms[name];
          formsRef.current = newForms;
          formContext.unregisterForm(name);
        }
      })
    }, children);
  };
  var _excluded$8 = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"];
  var Form = function Form2(_ref7, ref) {
    var name = _ref7.name, initialValues = _ref7.initialValues, fields = _ref7.fields, form = _ref7.form, preserve2 = _ref7.preserve, children = _ref7.children, _ref$component = _ref7.component, Component = _ref$component === void 0 ? "form" : _ref$component, validateMessages = _ref7.validateMessages, _ref$validateTrigger = _ref7.validateTrigger, validateTrigger = _ref$validateTrigger === void 0 ? "onChange" : _ref$validateTrigger, onValuesChange = _ref7.onValuesChange, _onFieldsChange = _ref7.onFieldsChange, _onFinish = _ref7.onFinish, onFinishFailed = _ref7.onFinishFailed, clearOnDestroy = _ref7.clearOnDestroy, restProps = _objectWithoutProperties(_ref7, _excluded$8);
    var nativeElementRef = React__namespace.useRef(null);
    var formContext = React__namespace.useContext(FormContext);
    var _useForm = useForm(form), _useForm2 = _slicedToArray(_useForm, 1), formInstance = _useForm2[0];
    var _getInternalHooks = formInstance.getInternalHooks(HOOK_MARK), useSubscribe = _getInternalHooks.useSubscribe, setInitialValues = _getInternalHooks.setInitialValues, setCallbacks = _getInternalHooks.setCallbacks, setValidateMessages = _getInternalHooks.setValidateMessages, setPreserve = _getInternalHooks.setPreserve, destroyForm = _getInternalHooks.destroyForm;
    React__namespace.useImperativeHandle(ref, function() {
      return _objectSpread2(_objectSpread2({}, formInstance), {}, {
        nativeElement: nativeElementRef.current
      });
    });
    React__namespace.useEffect(function() {
      formContext.registerForm(name, formInstance);
      return function() {
        formContext.unregisterForm(name);
      };
    }, [formContext, formInstance, name]);
    setValidateMessages(_objectSpread2(_objectSpread2({}, formContext.validateMessages), validateMessages));
    setCallbacks({
      onValuesChange,
      onFieldsChange: function onFieldsChange(changedFields) {
        formContext.triggerFormChange(name, changedFields);
        if (_onFieldsChange) {
          for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
          }
          _onFieldsChange.apply(void 0, [changedFields].concat(rest));
        }
      },
      onFinish: function onFinish(values) {
        formContext.triggerFormFinish(name, values);
        if (_onFinish) {
          _onFinish(values);
        }
      },
      onFinishFailed
    });
    setPreserve(preserve2);
    var mountRef = React__namespace.useRef(null);
    setInitialValues(initialValues, !mountRef.current);
    if (!mountRef.current) {
      mountRef.current = true;
    }
    React__namespace.useEffect(
      function() {
        return function() {
          return destroyForm(clearOnDestroy);
        };
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    var childrenNode;
    var childrenRenderProps = typeof children === "function";
    if (childrenRenderProps) {
      var _values = formInstance.getFieldsValue(true);
      childrenNode = children(_values, formInstance);
    } else {
      childrenNode = children;
    }
    useSubscribe(!childrenRenderProps);
    var prevFieldsRef = React__namespace.useRef();
    React__namespace.useEffect(function() {
      if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
        formInstance.setFields(fields || []);
      }
      prevFieldsRef.current = fields;
    }, [fields, formInstance]);
    var formContextValue = React__namespace.useMemo(function() {
      return _objectSpread2(_objectSpread2({}, formInstance), {}, {
        validateTrigger
      });
    }, [formInstance, validateTrigger]);
    var wrapperNode = /* @__PURE__ */ React__namespace.createElement(ListContext.Provider, {
      value: null
    }, /* @__PURE__ */ React__namespace.createElement(Context.Provider, {
      value: formContextValue
    }, childrenNode));
    if (Component === false) {
      return wrapperNode;
    }
    return /* @__PURE__ */ React__namespace.createElement(Component, _extends({}, restProps, {
      ref: nativeElementRef,
      onSubmit: function onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        formInstance.submit();
      },
      onReset: function onReset(event) {
        var _restProps$onReset;
        event.preventDefault();
        formInstance.resetFields();
        (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 || _restProps$onReset.call(restProps, event);
      }
    }), wrapperNode);
  };
  function stringify(value) {
    try {
      return JSON.stringify(value);
    } catch (err) {
      return Math.random();
    }
  }
  function useWatch$1() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var dependencies = args[0], _args$ = args[1], _form = _args$ === void 0 ? {} : _args$;
    var options = isFormInstance(_form) ? {
      form: _form
    } : _form;
    var form = options.form;
    var _useState = React.useState(), _useState2 = _slicedToArray(_useState, 2), value = _useState2[0], setValue = _useState2[1];
    var valueStr = React.useMemo(function() {
      return stringify(value);
    }, [value]);
    var valueStrRef = React.useRef(valueStr);
    valueStrRef.current = valueStr;
    var fieldContext = React.useContext(Context);
    var formInstance = form || fieldContext;
    var isValidForm = formInstance && formInstance._init;
    var namePath = getNamePath(dependencies);
    var namePathRef = React.useRef(namePath);
    namePathRef.current = namePath;
    React.useEffect(
      function() {
        if (!isValidForm) {
          return;
        }
        var getFieldsValue = formInstance.getFieldsValue, getInternalHooks2 = formInstance.getInternalHooks;
        var _getInternalHooks = getInternalHooks2(HOOK_MARK), registerWatch = _getInternalHooks.registerWatch;
        var getWatchValue = function getWatchValue2(values, allValues) {
          var watchValue = options.preserve ? allValues : values;
          return typeof dependencies === "function" ? dependencies(watchValue) : get(watchValue, namePathRef.current);
        };
        var cancelRegister = registerWatch(function(values, allValues) {
          var newValue = getWatchValue(values, allValues);
          var nextValueStr = stringify(newValue);
          if (valueStrRef.current !== nextValueStr) {
            valueStrRef.current = nextValueStr;
            setValue(newValue);
          }
        });
        var initialValue = getWatchValue(getFieldsValue(), getFieldsValue(true));
        if (value !== initialValue) {
          setValue(initialValue);
        }
        return cancelRegister;
      },
      // We do not need re-register since namePath content is the same
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [isValidForm]
    );
    return value;
  }
  var InternalForm = /* @__PURE__ */ React__namespace.forwardRef(Form);
  var RefForm = InternalForm;
  RefForm.FormProvider = FormProvider;
  RefForm.Field = WrapperField;
  RefForm.List = List;
  RefForm.useForm = useForm;
  RefForm.useWatch = useWatch$1;
  const FormItemInputContext = /* @__PURE__ */ React__namespace.createContext({});
  const NoFormStyle = (_ref7) => {
    let {
      children,
      status,
      override
    } = _ref7;
    const formItemInputContext = React.useContext(FormItemInputContext);
    const newFormItemInputContext = React.useMemo(() => {
      const newContext = Object.assign({}, formItemInputContext);
      if (override) {
        delete newContext.isFormItemInput;
      }
      if (status) {
        delete newContext.status;
        delete newContext.hasFeedback;
        delete newContext.feedbackIcon;
      }
      return newContext;
    }, [status, override, formItemInputContext]);
    return /* @__PURE__ */ React__namespace.createElement(FormItemInputContext.Provider, {
      value: newFormItemInputContext
    }, children);
  };
  const VariantContext = /* @__PURE__ */ React.createContext(void 0);
  const Element$1 = (props) => {
    const {
      prefixCls,
      className,
      style: style2,
      size: size2,
      shape
    } = props;
    const sizeCls = cx({
      [`${prefixCls}-lg`]: size2 === "large",
      [`${prefixCls}-sm`]: size2 === "small"
    });
    const shapeCls = cx({
      [`${prefixCls}-circle`]: shape === "circle",
      [`${prefixCls}-square`]: shape === "square",
      [`${prefixCls}-round`]: shape === "round"
    });
    const sizeStyle = React__namespace.useMemo(() => typeof size2 === "number" ? {
      width: size2,
      height: size2,
      lineHeight: `${size2}px`
    } : {}, [size2]);
    return /* @__PURE__ */ React__namespace.createElement("span", {
      className: cx(prefixCls, sizeCls, shapeCls, className),
      style: Object.assign(Object.assign({}, sizeStyle), style2)
    });
  };
  const skeletonClsLoading = new Keyframe(`ant-skeleton-loading`, {
    "0%": {
      backgroundPosition: "100% 50%"
    },
    "100%": {
      backgroundPosition: "0 50%"
    }
  });
  const genSkeletonElementCommonSize = (size2) => ({
    height: size2,
    lineHeight: unit$1(size2)
  });
  const genSkeletonElementAvatarSize = (size2) => Object.assign({
    width: size2
  }, genSkeletonElementCommonSize(size2));
  const genSkeletonColor = (token2) => ({
    background: token2.skeletonLoadingBackground,
    backgroundSize: "400% 100%",
    animationName: skeletonClsLoading,
    animationDuration: token2.skeletonLoadingMotionDuration,
    animationTimingFunction: "ease",
    animationIterationCount: "infinite"
  });
  const genSkeletonElementInputSize = (size2, calc) => Object.assign({
    width: calc(size2).mul(5).equal(),
    minWidth: calc(size2).mul(5).equal()
  }, genSkeletonElementCommonSize(size2));
  const genSkeletonElementAvatar = (token2) => {
    const {
      skeletonAvatarCls,
      gradientFromColor,
      controlHeight,
      controlHeightLG,
      controlHeightSM
    } = token2;
    return {
      [`${skeletonAvatarCls}`]: Object.assign({
        display: "inline-block",
        verticalAlign: "top",
        background: gradientFromColor
      }, genSkeletonElementAvatarSize(controlHeight)),
      [`${skeletonAvatarCls}${skeletonAvatarCls}-circle`]: {
        borderRadius: "50%"
      },
      [`${skeletonAvatarCls}${skeletonAvatarCls}-lg`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG)),
      [`${skeletonAvatarCls}${skeletonAvatarCls}-sm`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM))
    };
  };
  const genSkeletonElementInput = (token2) => {
    const {
      controlHeight,
      borderRadiusSM,
      skeletonInputCls,
      controlHeightLG,
      controlHeightSM,
      gradientFromColor,
      calc
    } = token2;
    return {
      [`${skeletonInputCls}`]: Object.assign({
        display: "inline-block",
        verticalAlign: "top",
        background: gradientFromColor,
        borderRadius: borderRadiusSM
      }, genSkeletonElementInputSize(controlHeight, calc)),
      [`${skeletonInputCls}-lg`]: Object.assign({}, genSkeletonElementInputSize(controlHeightLG, calc)),
      [`${skeletonInputCls}-sm`]: Object.assign({}, genSkeletonElementInputSize(controlHeightSM, calc))
    };
  };
  const genSkeletonElementImageSize = (size2) => Object.assign({
    width: size2
  }, genSkeletonElementCommonSize(size2));
  const genSkeletonElementImage = (token2) => {
    const {
      skeletonImageCls,
      imageSizeBase,
      gradientFromColor,
      borderRadiusSM,
      calc
    } = token2;
    return {
      [`${skeletonImageCls}`]: Object.assign(Object.assign({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        verticalAlign: "top",
        background: gradientFromColor,
        borderRadius: borderRadiusSM
      }, genSkeletonElementImageSize(calc(imageSizeBase).mul(2).equal())), {
        [`${skeletonImageCls}-path`]: {
          fill: "#bfbfbf"
        },
        [`${skeletonImageCls}-svg`]: Object.assign(Object.assign({}, genSkeletonElementImageSize(imageSizeBase)), {
          maxWidth: calc(imageSizeBase).mul(4).equal(),
          maxHeight: calc(imageSizeBase).mul(4).equal()
        }),
        [`${skeletonImageCls}-svg${skeletonImageCls}-svg-circle`]: {
          borderRadius: "50%"
        }
      }),
      [`${skeletonImageCls}${skeletonImageCls}-circle`]: {
        borderRadius: "50%"
      }
    };
  };
  const genSkeletonElementButtonShape = (token2, size2, buttonCls) => {
    const {
      skeletonButtonCls
    } = token2;
    return {
      [`${buttonCls}${skeletonButtonCls}-circle`]: {
        width: size2,
        minWidth: size2,
        borderRadius: "50%"
      },
      [`${buttonCls}${skeletonButtonCls}-round`]: {
        borderRadius: size2
      }
    };
  };
  const genSkeletonElementButtonSize = (size2, calc) => Object.assign({
    width: calc(size2).mul(2).equal(),
    minWidth: calc(size2).mul(2).equal()
  }, genSkeletonElementCommonSize(size2));
  const genSkeletonElementButton = (token2) => {
    const {
      borderRadiusSM,
      skeletonButtonCls,
      controlHeight,
      controlHeightLG,
      controlHeightSM,
      gradientFromColor,
      calc
    } = token2;
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
      [`${skeletonButtonCls}`]: Object.assign({
        display: "inline-block",
        verticalAlign: "top",
        background: gradientFromColor,
        borderRadius: borderRadiusSM,
        width: calc(controlHeight).mul(2).equal(),
        minWidth: calc(controlHeight).mul(2).equal()
      }, genSkeletonElementButtonSize(controlHeight, calc))
    }, genSkeletonElementButtonShape(token2, controlHeight, skeletonButtonCls)), {
      [`${skeletonButtonCls}-lg`]: Object.assign({}, genSkeletonElementButtonSize(controlHeightLG, calc))
    }), genSkeletonElementButtonShape(token2, controlHeightLG, `${skeletonButtonCls}-lg`)), {
      [`${skeletonButtonCls}-sm`]: Object.assign({}, genSkeletonElementButtonSize(controlHeightSM, calc))
    }), genSkeletonElementButtonShape(token2, controlHeightSM, `${skeletonButtonCls}-sm`));
  };
  const genBaseStyle = (token2) => {
    const {
      componentCls,
      skeletonAvatarCls,
      skeletonTitleCls,
      skeletonParagraphCls,
      skeletonButtonCls,
      skeletonInputCls,
      skeletonImageCls,
      controlHeight,
      controlHeightLG,
      controlHeightSM,
      gradientFromColor,
      padding,
      marginSM,
      borderRadius,
      titleHeight,
      blockRadius,
      paragraphLiHeight,
      controlHeightXS,
      paragraphMarginTop
    } = token2;
    return {
      [`${componentCls}`]: {
        display: "table",
        width: "100%",
        [`${componentCls}-header`]: {
          display: "table-cell",
          paddingInlineEnd: padding,
          verticalAlign: "top",
          // Avatar
          [`${skeletonAvatarCls}`]: Object.assign({
            display: "inline-block",
            verticalAlign: "top",
            background: gradientFromColor
          }, genSkeletonElementAvatarSize(controlHeight)),
          [`${skeletonAvatarCls}-circle`]: {
            borderRadius: "50%"
          },
          [`${skeletonAvatarCls}-lg`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG)),
          [`${skeletonAvatarCls}-sm`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM))
        },
        [`${componentCls}-content`]: {
          display: "table-cell",
          width: "100%",
          verticalAlign: "top",
          // Title
          [`${skeletonTitleCls}`]: {
            width: "100%",
            height: titleHeight,
            background: gradientFromColor,
            borderRadius: blockRadius,
            [`+ ${skeletonParagraphCls}`]: {
              marginBlockStart: controlHeightSM
            }
          },
          // paragraph
          [`${skeletonParagraphCls}`]: {
            padding: 0,
            "> li": {
              width: "100%",
              height: paragraphLiHeight,
              listStyle: "none",
              background: gradientFromColor,
              borderRadius: blockRadius,
              "+ li": {
                marginBlockStart: controlHeightXS
              }
            }
          },
          [`${skeletonParagraphCls}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
            width: "61%"
          }
        },
        [`&-round ${componentCls}-content`]: {
          [`${skeletonTitleCls}, ${skeletonParagraphCls} > li`]: {
            borderRadius
          }
        }
      },
      [`${componentCls}-with-avatar ${componentCls}-content`]: {
        // Title
        [`${skeletonTitleCls}`]: {
          marginBlockStart: marginSM,
          [`+ ${skeletonParagraphCls}`]: {
            marginBlockStart: paragraphMarginTop
          }
        }
      },
      // Skeleton element
      [`${componentCls}${componentCls}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "auto"
      }, genSkeletonElementButton(token2)), genSkeletonElementAvatar(token2)), genSkeletonElementInput(token2)), genSkeletonElementImage(token2)),
      // Skeleton Block Button, Input
      [`${componentCls}${componentCls}-block`]: {
        width: "100%",
        [`${skeletonButtonCls}`]: {
          width: "100%"
        },
        [`${skeletonInputCls}`]: {
          width: "100%"
        }
      },
      // With active animation
      [`${componentCls}${componentCls}-active`]: {
        [`
        ${skeletonTitleCls},
        ${skeletonParagraphCls} > li,
        ${skeletonAvatarCls},
        ${skeletonButtonCls},
        ${skeletonInputCls},
        ${skeletonImageCls}
      `]: Object.assign({}, genSkeletonColor(token2))
      }
    };
  };
  const prepareComponentToken$3 = (token2) => {
    const {
      colorFillContent,
      colorFill
    } = token2;
    const gradientFromColor = colorFillContent;
    const gradientToColor = colorFill;
    return {
      color: gradientFromColor,
      colorGradientEnd: gradientToColor,
      gradientFromColor,
      gradientToColor,
      titleHeight: token2.controlHeight / 2,
      blockRadius: token2.borderRadiusSM,
      paragraphMarginTop: token2.marginLG + token2.marginXXS,
      paragraphLiHeight: token2.controlHeight / 2
    };
  };
  const useStyle$7 = genStyleHooks("Skeleton", (token2) => {
    const {
      componentCls,
      calc
    } = token2;
    const skeletonToken = merge$1(token2, {
      skeletonAvatarCls: `${componentCls}-avatar`,
      skeletonTitleCls: `${componentCls}-title`,
      skeletonParagraphCls: `${componentCls}-paragraph`,
      skeletonButtonCls: `${componentCls}-button`,
      skeletonInputCls: `${componentCls}-input`,
      skeletonImageCls: `${componentCls}-image`,
      imageSizeBase: calc(token2.controlHeight).mul(1.5).equal(),
      borderRadius: 100,
      // Large number to make capsule shape
      skeletonLoadingBackground: `linear-gradient(90deg, ${token2.gradientFromColor} 25%, ${token2.gradientToColor} 37%, ${token2.gradientFromColor} 63%)`,
      skeletonLoadingMotionDuration: "1.4s"
    });
    return [genBaseStyle(skeletonToken)];
  }, prepareComponentToken$3, {
    deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]
  });
  const SkeletonAvatar = (props) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      active,
      shape = "circle",
      size: size2 = "default"
    } = props;
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$7(prefixCls);
    const otherProps = omit(props, ["prefixCls", "className"]);
    const cls = cx(prefixCls, `${prefixCls}-element`, {
      [`${prefixCls}-active`]: active
    }, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", {
      className: cls
    }, /* @__PURE__ */ React__namespace.createElement(Element$1, Object.assign({
      prefixCls: `${prefixCls}-avatar`,
      shape,
      size: size2
    }, otherProps))));
  };
  const SkeletonButton = (props) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      active,
      block = false,
      size: size2 = "default"
    } = props;
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$7(prefixCls);
    const otherProps = omit(props, ["prefixCls"]);
    const cls = cx(prefixCls, `${prefixCls}-element`, {
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-block`]: block
    }, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", {
      className: cls
    }, /* @__PURE__ */ React__namespace.createElement(Element$1, Object.assign({
      prefixCls: `${prefixCls}-button`,
      size: size2
    }, otherProps))));
  };
  const path = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z";
  const SkeletonImage = (props) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      style: style2,
      active
    } = props;
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$7(prefixCls);
    const cls = cx(prefixCls, `${prefixCls}-element`, {
      [`${prefixCls}-active`]: active
    }, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", {
      className: cls
    }, /* @__PURE__ */ React__namespace.createElement("div", {
      className: cx(`${prefixCls}-image`, className),
      style: style2
    }, /* @__PURE__ */ React__namespace.createElement("svg", {
      viewBox: "0 0 1098 1024",
      xmlns: "http://www.w3.org/2000/svg",
      className: `${prefixCls}-image-svg`
    }, /* @__PURE__ */ React__namespace.createElement("path", {
      d: path,
      className: `${prefixCls}-image-path`
    })))));
  };
  const SkeletonInput = (props) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      active,
      block,
      size: size2 = "default"
    } = props;
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$7(prefixCls);
    const otherProps = omit(props, ["prefixCls"]);
    const cls = cx(prefixCls, `${prefixCls}-element`, {
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-block`]: block
    }, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", {
      className: cls
    }, /* @__PURE__ */ React__namespace.createElement(Element$1, Object.assign({
      prefixCls: `${prefixCls}-input`,
      size: size2
    }, otherProps))));
  };
  var DotChartOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "dot-chart", "theme": "outlined" };
  var DotChartOutlined = function DotChartOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: DotChartOutlined$1
    }));
  };
  var RefIcon$3 = /* @__PURE__ */ React__namespace.forwardRef(DotChartOutlined);
  const SkeletonNode = (props) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      style: style2,
      active,
      children
    } = props;
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$7(prefixCls);
    const cls = cx(prefixCls, `${prefixCls}-element`, {
      [`${prefixCls}-active`]: active
    }, hashId, className, rootClassName, cssVarCls);
    const content = children !== null && children !== void 0 ? children : /* @__PURE__ */ React__namespace.createElement(RefIcon$3, null);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", {
      className: cls
    }, /* @__PURE__ */ React__namespace.createElement("div", {
      className: cx(`${prefixCls}-image`, className),
      style: style2
    }, content)));
  };
  const getWidth = (index2, props) => {
    const {
      width,
      rows = 2
    } = props;
    if (Array.isArray(width)) {
      return width[index2];
    }
    if (rows - 1 === index2) {
      return width;
    }
    return void 0;
  };
  const Paragraph = (props) => {
    const {
      prefixCls,
      className,
      style: style2,
      rows
    } = props;
    const rowList = _toConsumableArray(Array(rows)).map((_, index2) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ React__namespace.createElement("li", {
        key: index2,
        style: {
          width: getWidth(index2, props)
        }
      })
    ));
    return /* @__PURE__ */ React__namespace.createElement("ul", {
      className: cx(prefixCls, className),
      style: style2
    }, rowList);
  };
  const Title = (_ref7) => {
    let {
      prefixCls,
      className,
      width,
      style: style2
    } = _ref7;
    return /* @__PURE__ */ React__namespace.createElement("h3", {
      className: cx(prefixCls, className),
      style: Object.assign({
        width
      }, style2)
    });
  };
  function getComponentProps(prop) {
    if (prop && typeof prop === "object") {
      return prop;
    }
    return {};
  }
  function getAvatarBasicProps(hasTitle, hasParagraph) {
    if (hasTitle && !hasParagraph) {
      return {
        size: "large",
        shape: "square"
      };
    }
    return {
      size: "large",
      shape: "circle"
    };
  }
  function getTitleBasicProps(hasAvatar, hasParagraph) {
    if (!hasAvatar && hasParagraph) {
      return {
        width: "38%"
      };
    }
    if (hasAvatar && hasParagraph) {
      return {
        width: "50%"
      };
    }
    return {};
  }
  function getParagraphBasicProps(hasAvatar, hasTitle) {
    const basicProps = {};
    if (!hasAvatar || !hasTitle) {
      basicProps.width = "61%";
    }
    if (!hasAvatar && hasTitle) {
      basicProps.rows = 3;
    } else {
      basicProps.rows = 2;
    }
    return basicProps;
  }
  const Skeleton = (props) => {
    const {
      prefixCls: customizePrefixCls,
      loading,
      className,
      rootClassName,
      style: style2,
      children,
      avatar = false,
      title = true,
      paragraph = true,
      active,
      round
    } = props;
    const {
      getPrefixCls,
      direction,
      skeleton
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$7(prefixCls);
    if (loading || !("loading" in props)) {
      const hasAvatar = !!avatar;
      const hasTitle = !!title;
      const hasParagraph = !!paragraph;
      let avatarNode;
      if (hasAvatar) {
        const avatarProps = Object.assign(Object.assign({
          prefixCls: `${prefixCls}-avatar`
        }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));
        avatarNode = /* @__PURE__ */ React__namespace.createElement("div", {
          className: `${prefixCls}-header`
        }, /* @__PURE__ */ React__namespace.createElement(Element$1, Object.assign({}, avatarProps)));
      }
      let contentNode;
      if (hasTitle || hasParagraph) {
        let $title;
        if (hasTitle) {
          const titleProps = Object.assign(Object.assign({
            prefixCls: `${prefixCls}-title`
          }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
          $title = /* @__PURE__ */ React__namespace.createElement(Title, Object.assign({}, titleProps));
        }
        let paragraphNode;
        if (hasParagraph) {
          const paragraphProps = Object.assign(Object.assign({
            prefixCls: `${prefixCls}-paragraph`
          }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
          paragraphNode = /* @__PURE__ */ React__namespace.createElement(Paragraph, Object.assign({}, paragraphProps));
        }
        contentNode = /* @__PURE__ */ React__namespace.createElement("div", {
          className: `${prefixCls}-content`
        }, $title, paragraphNode);
      }
      const cls = cx(prefixCls, {
        [`${prefixCls}-with-avatar`]: hasAvatar,
        [`${prefixCls}-active`]: active,
        [`${prefixCls}-rtl`]: direction === "rtl",
        [`${prefixCls}-round`]: round
      }, skeleton === null || skeleton === void 0 ? void 0 : skeleton.className, className, rootClassName, hashId, cssVarCls);
      return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", {
        className: cls,
        style: Object.assign(Object.assign({}, skeleton === null || skeleton === void 0 ? void 0 : skeleton.style), style2)
      }, avatarNode, contentNode));
    }
    return children !== null && children !== void 0 ? children : null;
  };
  Skeleton.Button = SkeletonButton;
  Skeleton.Avatar = SkeletonAvatar;
  Skeleton.Input = SkeletonInput;
  Skeleton.Image = SkeletonImage;
  Skeleton.Node = SkeletonNode;
  function voidFunc() {
  }
  const WatermarkContext = /* @__PURE__ */ React__namespace.createContext({
    add: voidFunc,
    remove: voidFunc
  });
  function usePanelRef(panelSelector) {
    const watermark = React__namespace.useContext(WatermarkContext);
    const panelEleRef = React__namespace.useRef();
    const panelRef = useEvent((ele) => {
      if (ele) {
        const innerContentEle = panelSelector ? ele.querySelector(panelSelector) : ele;
        watermark.add(innerContentEle);
        panelEleRef.current = innerContentEle;
      } else {
        watermark.remove(panelEleRef.current);
      }
    });
    return panelRef;
  }
  const NormalCancelBtn = () => {
    const {
      cancelButtonProps,
      cancelTextLocale,
      onCancel
    } = React.useContext(ModalContext);
    return /* @__PURE__ */ React.createElement(Button, Object.assign({
      onClick: onCancel
    }, cancelButtonProps), cancelTextLocale);
  };
  const NormalOkBtn = () => {
    const {
      confirmLoading,
      okButtonProps,
      okType,
      okTextLocale,
      onOk
    } = React.useContext(ModalContext);
    return /* @__PURE__ */ React.createElement(Button, Object.assign({}, convertLegacyProps(okType), {
      loading: confirmLoading,
      onClick: onOk
    }, okButtonProps), okTextLocale);
  };
  function renderCloseIcon(prefixCls, closeIcon) {
    return /* @__PURE__ */ React.createElement("span", {
      className: `${prefixCls}-close-x`
    }, closeIcon || /* @__PURE__ */ React.createElement(RefIcon$7, {
      className: `${prefixCls}-close-icon`
    }));
  }
  const Footer = (props) => {
    const {
      okText,
      okType = "primary",
      cancelText,
      confirmLoading,
      onOk,
      onCancel,
      okButtonProps,
      cancelButtonProps,
      footer
    } = props;
    const [locale2] = useLocale("Modal", getConfirmLocale());
    const okTextLocale = okText || (locale2 === null || locale2 === void 0 ? void 0 : locale2.okText);
    const cancelTextLocale = cancelText || (locale2 === null || locale2 === void 0 ? void 0 : locale2.cancelText);
    const btnCtxValue = {
      confirmLoading,
      okButtonProps,
      cancelButtonProps,
      okTextLocale,
      cancelTextLocale,
      okType,
      onOk,
      onCancel
    };
    const btnCtxValueMemo = React.useMemo(() => btnCtxValue, _toConsumableArray(Object.values(btnCtxValue)));
    let footerNode;
    if (typeof footer === "function" || typeof footer === "undefined") {
      footerNode = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NormalCancelBtn, null), /* @__PURE__ */ React.createElement(NormalOkBtn, null));
      if (typeof footer === "function") {
        footerNode = footer(footerNode, {
          OkBtn: NormalOkBtn,
          CancelBtn: NormalCancelBtn
        });
      }
      footerNode = /* @__PURE__ */ React.createElement(ModalContextProvider, {
        value: btnCtxValueMemo
      }, footerNode);
    } else {
      footerNode = footer;
    }
    return /* @__PURE__ */ React.createElement(DisabledContextProvider, {
      disabled: false
    }, footerNode);
  };
  const initMotionCommon = (duration) => ({
    animationDuration: duration,
    animationFillMode: "both"
  });
  const initMotionCommonLeave = (duration) => ({
    animationDuration: duration,
    animationFillMode: "both"
  });
  const initMotion = function(motionCls, inKeyframes, outKeyframes, duration) {
    let sameLevel = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    const sameLevelPrefix = sameLevel ? "&" : "";
    return {
      [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: Object.assign(Object.assign({}, initMotionCommon(duration)), {
        animationPlayState: "paused"
      }),
      [`${sameLevelPrefix}${motionCls}-leave`]: Object.assign(Object.assign({}, initMotionCommonLeave(duration)), {
        animationPlayState: "paused"
      }),
      [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
        animationName: inKeyframes,
        animationPlayState: "running"
      },
      [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
        animationName: outKeyframes,
        animationPlayState: "running",
        pointerEvents: "none"
      }
    };
  };
  const fadeIn = new Keyframe("antFadeIn", {
    "0%": {
      opacity: 0
    },
    "100%": {
      opacity: 1
    }
  });
  const fadeOut = new Keyframe("antFadeOut", {
    "0%": {
      opacity: 1
    },
    "100%": {
      opacity: 0
    }
  });
  const initFadeMotion = function(token2) {
    let sameLevel = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const {
      antCls
    } = token2;
    const motionCls = `${antCls}-fade`;
    const sameLevelPrefix = sameLevel ? "&" : "";
    return [initMotion(motionCls, fadeIn, fadeOut, token2.motionDurationMid, sameLevel), {
      [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
        opacity: 0,
        animationTimingFunction: "linear"
      },
      [`${sameLevelPrefix}${motionCls}-leave`]: {
        animationTimingFunction: "linear"
      }
    }];
  };
  const zoomIn = new Keyframe("antZoomIn", {
    "0%": {
      transform: "scale(0.2)",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1
    }
  });
  const zoomOut = new Keyframe("antZoomOut", {
    "0%": {
      transform: "scale(1)"
    },
    "100%": {
      transform: "scale(0.2)",
      opacity: 0
    }
  });
  const zoomBigIn = new Keyframe("antZoomBigIn", {
    "0%": {
      transform: "scale(0.8)",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1
    }
  });
  const zoomBigOut = new Keyframe("antZoomBigOut", {
    "0%": {
      transform: "scale(1)"
    },
    "100%": {
      transform: "scale(0.8)",
      opacity: 0
    }
  });
  const zoomUpIn = new Keyframe("antZoomUpIn", {
    "0%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 0%",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      transformOrigin: "50% 0%"
    }
  });
  const zoomUpOut = new Keyframe("antZoomUpOut", {
    "0%": {
      transform: "scale(1)",
      transformOrigin: "50% 0%"
    },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 0%",
      opacity: 0
    }
  });
  const zoomLeftIn = new Keyframe("antZoomLeftIn", {
    "0%": {
      transform: "scale(0.8)",
      transformOrigin: "0% 50%",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      transformOrigin: "0% 50%"
    }
  });
  const zoomLeftOut = new Keyframe("antZoomLeftOut", {
    "0%": {
      transform: "scale(1)",
      transformOrigin: "0% 50%"
    },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "0% 50%",
      opacity: 0
    }
  });
  const zoomRightIn = new Keyframe("antZoomRightIn", {
    "0%": {
      transform: "scale(0.8)",
      transformOrigin: "100% 50%",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      transformOrigin: "100% 50%"
    }
  });
  const zoomRightOut = new Keyframe("antZoomRightOut", {
    "0%": {
      transform: "scale(1)",
      transformOrigin: "100% 50%"
    },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "100% 50%",
      opacity: 0
    }
  });
  const zoomDownIn = new Keyframe("antZoomDownIn", {
    "0%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 100%",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      transformOrigin: "50% 100%"
    }
  });
  const zoomDownOut = new Keyframe("antZoomDownOut", {
    "0%": {
      transform: "scale(1)",
      transformOrigin: "50% 100%"
    },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 100%",
      opacity: 0
    }
  });
  const zoomMotion = {
    zoom: {
      inKeyframes: zoomIn,
      outKeyframes: zoomOut
    },
    "zoom-big": {
      inKeyframes: zoomBigIn,
      outKeyframes: zoomBigOut
    },
    "zoom-big-fast": {
      inKeyframes: zoomBigIn,
      outKeyframes: zoomBigOut
    },
    "zoom-left": {
      inKeyframes: zoomLeftIn,
      outKeyframes: zoomLeftOut
    },
    "zoom-right": {
      inKeyframes: zoomRightIn,
      outKeyframes: zoomRightOut
    },
    "zoom-up": {
      inKeyframes: zoomUpIn,
      outKeyframes: zoomUpOut
    },
    "zoom-down": {
      inKeyframes: zoomDownIn,
      outKeyframes: zoomDownOut
    }
  };
  const initZoomMotion = (token2, motionName) => {
    const {
      antCls
    } = token2;
    const motionCls = `${antCls}-${motionName}`;
    const {
      inKeyframes,
      outKeyframes
    } = zoomMotion[motionName];
    return [initMotion(motionCls, inKeyframes, outKeyframes, motionName === "zoom-big-fast" ? token2.motionDurationFast : token2.motionDurationMid), {
      [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
        transform: "scale(0)",
        opacity: 0,
        animationTimingFunction: token2.motionEaseOutCirc,
        "&-prepare": {
          transform: "none"
        }
      },
      [`${motionCls}-leave`]: {
        animationTimingFunction: token2.motionEaseInOutCirc
      }
    }];
  };
  function box(position2) {
    return {
      position: position2,
      inset: 0
    };
  }
  const genModalMaskStyle = (token2) => {
    const {
      componentCls,
      antCls
    } = token2;
    return [{
      [`${componentCls}-root`]: {
        [`${componentCls}${antCls}-zoom-enter, ${componentCls}${antCls}-zoom-appear`]: {
          // reset scale avoid mousePosition bug
          transform: "none",
          opacity: 0,
          animationDuration: token2.motionDurationSlow,
          // https://github.com/ant-design/ant-design/issues/11777
          userSelect: "none"
        },
        // https://github.com/ant-design/ant-design/issues/37329
        // https://github.com/ant-design/ant-design/issues/40272
        [`${componentCls}${antCls}-zoom-leave ${componentCls}-content`]: {
          pointerEvents: "none"
        },
        [`${componentCls}-mask`]: Object.assign(Object.assign({}, box("fixed")), {
          zIndex: token2.zIndexPopupBase,
          height: "100%",
          backgroundColor: token2.colorBgMask,
          pointerEvents: "none",
          [`${componentCls}-hidden`]: {
            display: "none"
          }
        }),
        [`${componentCls}-wrap`]: Object.assign(Object.assign({}, box("fixed")), {
          zIndex: token2.zIndexPopupBase,
          overflow: "auto",
          outline: 0,
          WebkitOverflowScrolling: "touch"
        })
      }
    }, {
      [`${componentCls}-root`]: initFadeMotion(token2)
    }];
  };
  const genModalStyle = (token2) => {
    const {
      componentCls
    } = token2;
    return [
      // ======================== Root =========================
      {
        [`${componentCls}-root`]: {
          [`${componentCls}-wrap-rtl`]: {
            direction: "rtl"
          },
          [`${componentCls}-centered`]: {
            textAlign: "center",
            "&::before": {
              display: "inline-block",
              width: 0,
              height: "100%",
              verticalAlign: "middle",
              content: '""'
            },
            [componentCls]: {
              top: 0,
              display: "inline-block",
              paddingBottom: 0,
              textAlign: "start",
              verticalAlign: "middle"
            }
          },
          [`@media (max-width: ${token2.screenSMMax}px)`]: {
            [componentCls]: {
              maxWidth: "calc(100vw - 16px)",
              margin: `${unit$1(token2.marginXS)} auto`
            },
            [`${componentCls}-centered`]: {
              [componentCls]: {
                flex: 1
              }
            }
          }
        }
      },
      // ======================== Modal ========================
      {
        [componentCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
          pointerEvents: "none",
          position: "relative",
          top: 100,
          width: "auto",
          maxWidth: `calc(100vw - ${unit$1(token2.calc(token2.margin).mul(2).equal())})`,
          margin: "0 auto",
          paddingBottom: token2.paddingLG,
          [`${componentCls}-title`]: {
            margin: 0,
            color: token2.titleColor,
            fontWeight: token2.fontWeightStrong,
            fontSize: token2.titleFontSize,
            lineHeight: token2.titleLineHeight,
            wordWrap: "break-word"
          },
          [`${componentCls}-content`]: {
            position: "relative",
            backgroundColor: token2.contentBg,
            backgroundClip: "padding-box",
            border: 0,
            borderRadius: token2.borderRadiusLG,
            boxShadow: token2.boxShadow,
            pointerEvents: "auto",
            padding: token2.contentPadding
          },
          [`${componentCls}-close`]: Object.assign({
            position: "absolute",
            top: token2.calc(token2.modalHeaderHeight).sub(token2.modalCloseBtnSize).div(2).equal(),
            insetInlineEnd: token2.calc(token2.modalHeaderHeight).sub(token2.modalCloseBtnSize).div(2).equal(),
            zIndex: token2.calc(token2.zIndexPopupBase).add(10).equal(),
            padding: 0,
            color: token2.modalCloseIconColor,
            fontWeight: token2.fontWeightStrong,
            lineHeight: 1,
            textDecoration: "none",
            background: "transparent",
            borderRadius: token2.borderRadiusSM,
            width: token2.modalCloseBtnSize,
            height: token2.modalCloseBtnSize,
            border: 0,
            outline: 0,
            cursor: "pointer",
            transition: `color ${token2.motionDurationMid}, background-color ${token2.motionDurationMid}`,
            "&-x": {
              display: "flex",
              fontSize: token2.fontSizeLG,
              fontStyle: "normal",
              lineHeight: `${unit$1(token2.modalCloseBtnSize)}`,
              justifyContent: "center",
              textTransform: "none",
              textRendering: "auto"
            },
            "&:hover": {
              color: token2.modalCloseIconHoverColor,
              backgroundColor: token2.colorBgTextHover,
              textDecoration: "none"
            },
            "&:active": {
              backgroundColor: token2.colorBgTextActive
            }
          }, genFocusStyle(token2)),
          [`${componentCls}-header`]: {
            color: token2.colorText,
            background: token2.headerBg,
            borderRadius: `${unit$1(token2.borderRadiusLG)} ${unit$1(token2.borderRadiusLG)} 0 0`,
            marginBottom: token2.headerMarginBottom,
            padding: token2.headerPadding,
            borderBottom: token2.headerBorderBottom
          },
          [`${componentCls}-body`]: {
            fontSize: token2.fontSize,
            lineHeight: token2.lineHeight,
            wordWrap: "break-word",
            padding: token2.bodyPadding,
            [`${componentCls}-body-skeleton`]: {
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: `${unit$1(token2.margin)} auto`
            }
          },
          [`${componentCls}-footer`]: {
            textAlign: "end",
            background: token2.footerBg,
            marginTop: token2.footerMarginTop,
            padding: token2.footerPadding,
            borderTop: token2.footerBorderTop,
            borderRadius: token2.footerBorderRadius,
            [`> ${token2.antCls}-btn + ${token2.antCls}-btn`]: {
              marginInlineStart: token2.marginXS
            }
          },
          [`${componentCls}-open`]: {
            overflow: "hidden"
          }
        })
      },
      // ======================== Pure =========================
      {
        [`${componentCls}-pure-panel`]: {
          top: "auto",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          [`${componentCls}-content,
          ${componentCls}-body,
          ${componentCls}-confirm-body-wrapper`]: {
            display: "flex",
            flexDirection: "column",
            flex: "auto"
          },
          [`${componentCls}-confirm-body`]: {
            marginBottom: "auto"
          }
        }
      }
    ];
  };
  const genRTLStyle = (token2) => {
    const {
      componentCls
    } = token2;
    return {
      [`${componentCls}-root`]: {
        [`${componentCls}-wrap-rtl`]: {
          direction: "rtl",
          [`${componentCls}-confirm-body`]: {
            direction: "rtl"
          }
        }
      }
    };
  };
  const prepareToken = (token2) => {
    const headerPaddingVertical = token2.padding;
    const headerFontSize = token2.fontSizeHeading5;
    const headerLineHeight = token2.lineHeightHeading5;
    const modalToken = merge$1(token2, {
      modalHeaderHeight: token2.calc(token2.calc(headerLineHeight).mul(headerFontSize).equal()).add(token2.calc(headerPaddingVertical).mul(2).equal()).equal(),
      modalFooterBorderColorSplit: token2.colorSplit,
      modalFooterBorderStyle: token2.lineType,
      modalFooterBorderWidth: token2.lineWidth,
      modalCloseIconColor: token2.colorIcon,
      modalCloseIconHoverColor: token2.colorIconHover,
      modalCloseBtnSize: token2.controlHeight,
      modalConfirmIconSize: token2.fontHeight,
      modalTitleHeight: token2.calc(token2.titleFontSize).mul(token2.titleLineHeight).equal()
    });
    return modalToken;
  };
  const prepareComponentToken$2 = (token2) => ({
    footerBg: "transparent",
    headerBg: token2.colorBgElevated,
    titleLineHeight: token2.lineHeightHeading5,
    titleFontSize: token2.fontSizeHeading5,
    contentBg: token2.colorBgElevated,
    titleColor: token2.colorTextHeading,
    // internal
    contentPadding: token2.wireframe ? 0 : `${unit$1(token2.paddingMD)} ${unit$1(token2.paddingContentHorizontalLG)}`,
    headerPadding: token2.wireframe ? `${unit$1(token2.padding)} ${unit$1(token2.paddingLG)}` : 0,
    headerBorderBottom: token2.wireframe ? `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorSplit}` : "none",
    headerMarginBottom: token2.wireframe ? 0 : token2.marginXS,
    bodyPadding: token2.wireframe ? token2.paddingLG : 0,
    footerPadding: token2.wireframe ? `${unit$1(token2.paddingXS)} ${unit$1(token2.padding)}` : 0,
    footerBorderTop: token2.wireframe ? `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorSplit}` : "none",
    footerBorderRadius: token2.wireframe ? `0 0 ${unit$1(token2.borderRadiusLG)} ${unit$1(token2.borderRadiusLG)}` : 0,
    footerMarginTop: token2.wireframe ? 0 : token2.marginSM,
    confirmBodyPadding: token2.wireframe ? `${unit$1(token2.padding * 2)} ${unit$1(token2.padding * 2)} ${unit$1(token2.paddingLG)}` : 0,
    confirmIconMarginInlineEnd: token2.wireframe ? token2.margin : token2.marginSM,
    confirmBtnsMarginTop: token2.wireframe ? token2.marginLG : token2.marginSM
  });
  const useStyle$6 = genStyleHooks("Modal", (token2) => {
    const modalToken = prepareToken(token2);
    return [genModalStyle(modalToken), genRTLStyle(modalToken), genModalMaskStyle(modalToken), initZoomMotion(modalToken, "zoom")];
  }, prepareComponentToken$2, {
    unitless: {
      titleLineHeight: true
    }
  });
  var __rest$e = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  let mousePosition;
  const getClickPosition = (e2) => {
    mousePosition = {
      x: e2.pageX,
      y: e2.pageY
    };
    setTimeout(() => {
      mousePosition = null;
    }, 100);
  };
  if (canUseDocElement()) {
    document.documentElement.addEventListener("click", getClickPosition, true);
  }
  const Modal$1 = (props) => {
    var _a;
    const {
      getPopupContainer: getContextPopupContainer,
      getPrefixCls,
      direction,
      modal: modalContext
    } = React__namespace.useContext(ConfigContext);
    const handleCancel = (e2) => {
      const {
        onCancel
      } = props;
      onCancel === null || onCancel === void 0 ? void 0 : onCancel(e2);
    };
    const handleOk = (e2) => {
      const {
        onOk
      } = props;
      onOk === null || onOk === void 0 ? void 0 : onOk(e2);
    };
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      open: open2,
      wrapClassName,
      centered,
      getContainer: getContainer2,
      focusTriggerAfterClose = true,
      style: style2,
      // Deprecated
      visible,
      width = 520,
      footer,
      classNames: modalClassNames,
      styles: modalStyles,
      children,
      loading
    } = props, restProps = __rest$e(props, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "focusTriggerAfterClose", "style", "visible", "width", "footer", "classNames", "styles", "children", "loading"]);
    const prefixCls = getPrefixCls("modal", customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const rootCls = useCSSVarCls(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$6(prefixCls, rootCls);
    const wrapClassNameExtended = cx(wrapClassName, {
      [`${prefixCls}-centered`]: !!centered,
      [`${prefixCls}-wrap-rtl`]: direction === "rtl"
    });
    const dialogFooter = footer !== null && !loading ? /* @__PURE__ */ React__namespace.createElement(Footer, Object.assign({}, props, {
      onOk: handleOk,
      onCancel: handleCancel
    })) : null;
    const [mergedClosable, mergedCloseIcon] = useClosable(pickClosable(props), pickClosable(modalContext), {
      closable: true,
      closeIcon: /* @__PURE__ */ React__namespace.createElement(RefIcon$7, {
        className: `${prefixCls}-close-icon`
      }),
      closeIconRender: (icon) => renderCloseIcon(prefixCls, icon)
    });
    const panelRef = usePanelRef(`.${prefixCls}-content`);
    const [zIndex, contextZIndex] = useZIndex("Modal", restProps.zIndex);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement(NoCompactStyle, null, /* @__PURE__ */ React__namespace.createElement(NoFormStyle, {
      status: true,
      override: true
    }, /* @__PURE__ */ React__namespace.createElement(zIndexContext.Provider, {
      value: contextZIndex
    }, /* @__PURE__ */ React__namespace.createElement(DialogWrap, Object.assign({
      width
    }, restProps, {
      zIndex,
      getContainer: getContainer2 === void 0 ? getContextPopupContainer : getContainer2,
      prefixCls,
      rootClassName: cx(hashId, rootClassName, cssVarCls, rootCls),
      footer: dialogFooter,
      visible: open2 !== null && open2 !== void 0 ? open2 : visible,
      mousePosition: (_a = restProps.mousePosition) !== null && _a !== void 0 ? _a : mousePosition,
      onClose: handleCancel,
      closable: mergedClosable,
      closeIcon: mergedCloseIcon,
      focusTriggerAfterClose,
      transitionName: getTransitionName(rootPrefixCls, "zoom", props.transitionName),
      maskTransitionName: getTransitionName(rootPrefixCls, "fade", props.maskTransitionName),
      className: cx(hashId, className, modalContext === null || modalContext === void 0 ? void 0 : modalContext.className),
      style: Object.assign(Object.assign({}, modalContext === null || modalContext === void 0 ? void 0 : modalContext.style), style2),
      classNames: Object.assign(Object.assign(Object.assign({}, modalContext === null || modalContext === void 0 ? void 0 : modalContext.classNames), modalClassNames), {
        wrapper: cx(wrapClassNameExtended, modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.wrapper)
      }),
      styles: Object.assign(Object.assign({}, modalContext === null || modalContext === void 0 ? void 0 : modalContext.styles), modalStyles),
      panelRef
    }), loading ? /* @__PURE__ */ React__namespace.createElement(Skeleton, {
      active: true,
      title: false,
      paragraph: {
        rows: 4
      },
      className: `${prefixCls}-body-skeleton`
    }) : children)))));
  };
  const genModalConfirmStyle = (token2) => {
    const {
      componentCls,
      titleFontSize,
      titleLineHeight,
      modalConfirmIconSize,
      fontSize,
      lineHeight,
      modalTitleHeight,
      fontHeight,
      confirmBodyPadding
    } = token2;
    const confirmComponentCls = `${componentCls}-confirm`;
    return {
      [confirmComponentCls]: {
        "&-rtl": {
          direction: "rtl"
        },
        [`${token2.antCls}-modal-header`]: {
          display: "none"
        },
        [`${confirmComponentCls}-body-wrapper`]: Object.assign({}, clearFix()),
        [`&${componentCls} ${componentCls}-body`]: {
          padding: confirmBodyPadding
        },
        // ====================== Body ======================
        [`${confirmComponentCls}-body`]: {
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "start",
          [`> ${token2.iconCls}`]: {
            flex: "none",
            fontSize: modalConfirmIconSize,
            marginInlineEnd: token2.confirmIconMarginInlineEnd,
            marginTop: token2.calc(token2.calc(fontHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
          },
          [`&-has-title > ${token2.iconCls}`]: {
            marginTop: token2.calc(token2.calc(modalTitleHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
          }
        },
        [`${confirmComponentCls}-paragraph`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto",
          rowGap: token2.marginXS
        },
        // https://github.com/ant-design/ant-design/issues/48159
        [`${token2.iconCls} + ${confirmComponentCls}-paragraph`]: {
          maxWidth: `calc(100% - ${unit$1(token2.calc(token2.modalConfirmIconSize).add(token2.marginSM).equal())})`
        },
        [`${confirmComponentCls}-title`]: {
          color: token2.colorTextHeading,
          fontWeight: token2.fontWeightStrong,
          fontSize: titleFontSize,
          lineHeight: titleLineHeight
        },
        [`${confirmComponentCls}-content`]: {
          color: token2.colorText,
          fontSize,
          lineHeight
        },
        // ===================== Footer =====================
        [`${confirmComponentCls}-btns`]: {
          textAlign: "end",
          marginTop: token2.confirmBtnsMarginTop,
          [`${token2.antCls}-btn + ${token2.antCls}-btn`]: {
            marginBottom: 0,
            marginInlineStart: token2.marginXS
          }
        }
      },
      [`${confirmComponentCls}-error ${confirmComponentCls}-body > ${token2.iconCls}`]: {
        color: token2.colorError
      },
      [`${confirmComponentCls}-warning ${confirmComponentCls}-body > ${token2.iconCls},
        ${confirmComponentCls}-confirm ${confirmComponentCls}-body > ${token2.iconCls}`]: {
        color: token2.colorWarning
      },
      [`${confirmComponentCls}-info ${confirmComponentCls}-body > ${token2.iconCls}`]: {
        color: token2.colorInfo
      },
      [`${confirmComponentCls}-success ${confirmComponentCls}-body > ${token2.iconCls}`]: {
        color: token2.colorSuccess
      }
    };
  };
  const Confirm = genSubStyleComponent(["Modal", "confirm"], (token2) => {
    const modalToken = prepareToken(token2);
    return [genModalConfirmStyle(modalToken)];
  }, prepareComponentToken$2, {
    // confirm is weak than modal since no conflict here
    order: -1e3
  });
  var __rest$d = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  function ConfirmContent(props) {
    const {
      prefixCls,
      icon,
      okText,
      cancelText,
      confirmPrefixCls,
      type: type4,
      okCancel,
      footer,
      // Legacy for static function usage
      locale: staticLocale
    } = props, resetProps = __rest$d(props, ["prefixCls", "icon", "okText", "cancelText", "confirmPrefixCls", "type", "okCancel", "footer", "locale"]);
    let mergedIcon = icon;
    if (!icon && icon !== null) {
      switch (type4) {
        case "info":
          mergedIcon = /* @__PURE__ */ React__namespace.createElement(RefIcon$5, null);
          break;
        case "success":
          mergedIcon = /* @__PURE__ */ React__namespace.createElement(RefIcon$9, null);
          break;
        case "error":
          mergedIcon = /* @__PURE__ */ React__namespace.createElement(RefIcon$8, null);
          break;
        default:
          mergedIcon = /* @__PURE__ */ React__namespace.createElement(RefIcon$6, null);
      }
    }
    const mergedOkCancel = okCancel !== null && okCancel !== void 0 ? okCancel : type4 === "confirm";
    const autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || "ok";
    const [locale2] = useLocale("Modal");
    const mergedLocale = staticLocale || locale2;
    const okTextLocale = okText || (mergedOkCancel ? mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.okText : mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.justOkText);
    const cancelTextLocale = cancelText || (mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.cancelText);
    const btnCtxValue = Object.assign({
      autoFocusButton,
      cancelTextLocale,
      okTextLocale,
      mergedOkCancel
    }, resetProps);
    const btnCtxValueMemo = React__namespace.useMemo(() => btnCtxValue, _toConsumableArray(Object.values(btnCtxValue)));
    const footerOriginNode = /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(ConfirmCancelBtn, null), /* @__PURE__ */ React__namespace.createElement(ConfirmOkBtn, null));
    const hasTitle = props.title !== void 0 && props.title !== null;
    const bodyCls = `${confirmPrefixCls}-body`;
    return /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${confirmPrefixCls}-body-wrapper`
    }, /* @__PURE__ */ React__namespace.createElement("div", {
      className: cx(bodyCls, {
        [`${bodyCls}-has-title`]: hasTitle
      })
    }, mergedIcon, /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${confirmPrefixCls}-paragraph`
    }, hasTitle && /* @__PURE__ */ React__namespace.createElement("span", {
      className: `${confirmPrefixCls}-title`
    }, props.title), /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${confirmPrefixCls}-content`
    }, props.content))), footer === void 0 || typeof footer === "function" ? /* @__PURE__ */ React__namespace.createElement(ModalContextProvider, {
      value: btnCtxValueMemo
    }, /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${confirmPrefixCls}-btns`
    }, typeof footer === "function" ? footer(footerOriginNode, {
      OkBtn: ConfirmOkBtn,
      CancelBtn: ConfirmCancelBtn
    }) : footerOriginNode)) : footer, /* @__PURE__ */ React__namespace.createElement(Confirm, {
      prefixCls
    }));
  }
  const ConfirmDialog = (props) => {
    const {
      close,
      zIndex,
      afterClose,
      open: open2,
      keyboard,
      centered,
      getContainer: getContainer2,
      maskStyle,
      direction,
      prefixCls,
      wrapClassName,
      rootPrefixCls,
      bodyStyle,
      closable = false,
      closeIcon,
      modalRender,
      focusTriggerAfterClose,
      onConfirm,
      styles
    } = props;
    const confirmPrefixCls = `${prefixCls}-confirm`;
    const width = props.width || 416;
    const style2 = props.style || {};
    const mask = props.mask === void 0 ? true : props.mask;
    const maskClosable = props.maskClosable === void 0 ? false : props.maskClosable;
    const classString = cx(confirmPrefixCls, `${confirmPrefixCls}-${props.type}`, {
      [`${confirmPrefixCls}-rtl`]: direction === "rtl"
    }, props.className);
    const [, token2] = useToken$1();
    const mergedZIndex = React__namespace.useMemo(() => {
      if (zIndex !== void 0) {
        return zIndex;
      }
      return token2.zIndexPopupBase + CONTAINER_MAX_OFFSET;
    }, [zIndex, token2]);
    return /* @__PURE__ */ React__namespace.createElement(Modal$1, {
      prefixCls,
      className: classString,
      wrapClassName: cx({
        [`${confirmPrefixCls}-centered`]: !!props.centered
      }, wrapClassName),
      onCancel: () => {
        close === null || close === void 0 ? void 0 : close({
          triggerCancel: true
        });
        onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(false);
      },
      open: open2,
      title: "",
      footer: null,
      transitionName: getTransitionName(rootPrefixCls || "", "zoom", props.transitionName),
      maskTransitionName: getTransitionName(rootPrefixCls || "", "fade", props.maskTransitionName),
      mask,
      maskClosable,
      style: style2,
      styles: Object.assign({
        body: bodyStyle,
        mask: maskStyle
      }, styles),
      width,
      zIndex: mergedZIndex,
      afterClose,
      keyboard,
      centered,
      getContainer: getContainer2,
      closable,
      closeIcon,
      modalRender,
      focusTriggerAfterClose
    }, /* @__PURE__ */ React__namespace.createElement(ConfirmContent, Object.assign({}, props, {
      confirmPrefixCls
    })));
  };
  const ConfirmDialogWrapper$1 = (props) => {
    const {
      rootPrefixCls,
      iconPrefixCls,
      direction,
      theme: theme2
    } = props;
    return /* @__PURE__ */ React__namespace.createElement(ConfigProvider$1, {
      prefixCls: rootPrefixCls,
      iconPrefixCls,
      direction,
      theme: theme2
    }, /* @__PURE__ */ React__namespace.createElement(ConfirmDialog, Object.assign({}, props)));
  };
  const destroyFns = [];
  let defaultRootPrefixCls = "";
  function getRootPrefixCls() {
    return defaultRootPrefixCls;
  }
  const ConfirmDialogWrapper = (props) => {
    var _a, _b;
    const {
      prefixCls: customizePrefixCls,
      getContainer: getContainer2,
      direction
    } = props;
    const runtimeLocale2 = getConfirmLocale();
    const config = React.useContext(ConfigContext);
    const rootPrefixCls = getRootPrefixCls() || config.getPrefixCls();
    const prefixCls = customizePrefixCls || `${rootPrefixCls}-modal`;
    let mergedGetContainer = getContainer2;
    if (mergedGetContainer === false) {
      mergedGetContainer = void 0;
    }
    return /* @__PURE__ */ React.createElement(ConfirmDialogWrapper$1, Object.assign({}, props, {
      rootPrefixCls,
      prefixCls,
      iconPrefixCls: config.iconPrefixCls,
      theme: config.theme,
      direction: direction !== null && direction !== void 0 ? direction : config.direction,
      locale: (_b = (_a = config.locale) === null || _a === void 0 ? void 0 : _a.Modal) !== null && _b !== void 0 ? _b : runtimeLocale2,
      getContainer: mergedGetContainer
    }));
  };
  function confirm(config) {
    const global2 = globalConfig();
    const container = document.createDocumentFragment();
    let currentConfig = Object.assign(Object.assign({}, config), {
      close,
      open: true
    });
    let timeoutId;
    function destroy2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const triggerCancel = args.some((param) => param && param.triggerCancel);
      if (config.onCancel && triggerCancel) {
        config.onCancel.apply(config, [() => {
        }].concat(_toConsumableArray(args.slice(1))));
      }
      for (let i2 = 0; i2 < destroyFns.length; i2++) {
        const fn = destroyFns[i2];
        if (fn === close) {
          destroyFns.splice(i2, 1);
          break;
        }
      }
      unmount(container);
    }
    function render$1(props) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const rootPrefixCls = global2.getPrefixCls(void 0, getRootPrefixCls());
        const iconPrefixCls = global2.getIconPrefixCls();
        const theme2 = global2.getTheme();
        const dom = /* @__PURE__ */ React.createElement(ConfirmDialogWrapper, Object.assign({}, props));
        render(/* @__PURE__ */ React.createElement(ConfigProvider$1, {
          prefixCls: rootPrefixCls,
          iconPrefixCls,
          theme: theme2
        }, global2.holderRender ? global2.holderRender(dom) : dom), container);
      });
    }
    function close() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      currentConfig = Object.assign(Object.assign({}, currentConfig), {
        open: false,
        afterClose: () => {
          if (typeof config.afterClose === "function") {
            config.afterClose();
          }
          destroy2.apply(this, args);
        }
      });
      if (currentConfig.visible) {
        delete currentConfig.visible;
      }
      render$1(currentConfig);
    }
    function update(configUpdate) {
      if (typeof configUpdate === "function") {
        currentConfig = configUpdate(currentConfig);
      } else {
        currentConfig = Object.assign(Object.assign({}, currentConfig), configUpdate);
      }
      render$1(currentConfig);
    }
    render$1(currentConfig);
    destroyFns.push(close);
    return {
      destroy: close,
      update
    };
  }
  function withWarn(props) {
    return Object.assign(Object.assign({}, props), {
      type: "warning"
    });
  }
  function withInfo(props) {
    return Object.assign(Object.assign({}, props), {
      type: "info"
    });
  }
  function withSuccess(props) {
    return Object.assign(Object.assign({}, props), {
      type: "success"
    });
  }
  function withError(props) {
    return Object.assign(Object.assign({}, props), {
      type: "error"
    });
  }
  function withConfirm(props) {
    return Object.assign(Object.assign({}, props), {
      type: "confirm"
    });
  }
  function modalGlobalConfig(_ref7) {
    let {
      rootPrefixCls
    } = _ref7;
    defaultRootPrefixCls = rootPrefixCls;
  }
  var __rest$c = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  const HookModal = (_a, ref) => {
    var _b;
    var {
      afterClose: hookAfterClose,
      config
    } = _a, restProps = __rest$c(_a, ["afterClose", "config"]);
    const [open2, setOpen] = React__namespace.useState(true);
    const [innerConfig, setInnerConfig] = React__namespace.useState(config);
    const {
      direction,
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("modal");
    const rootPrefixCls = getPrefixCls();
    const afterClose = () => {
      var _a2;
      hookAfterClose();
      (_a2 = innerConfig.afterClose) === null || _a2 === void 0 ? void 0 : _a2.call(innerConfig);
    };
    const close = function() {
      setOpen(false);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const triggerCancel = args.some((param) => param && param.triggerCancel);
      if (innerConfig.onCancel && triggerCancel) {
        innerConfig.onCancel.apply(innerConfig, [() => {
        }].concat(_toConsumableArray(args.slice(1))));
      }
    };
    React__namespace.useImperativeHandle(ref, () => ({
      destroy: close,
      update: (newConfig) => {
        setInnerConfig((originConfig) => Object.assign(Object.assign({}, originConfig), newConfig));
      }
    }));
    const mergedOkCancel = (_b = innerConfig.okCancel) !== null && _b !== void 0 ? _b : innerConfig.type === "confirm";
    const [contextLocale] = useLocale("Modal", localeValues.Modal);
    return /* @__PURE__ */ React__namespace.createElement(ConfirmDialogWrapper$1, Object.assign({
      prefixCls,
      rootPrefixCls
    }, innerConfig, {
      close,
      open: open2,
      afterClose,
      okText: innerConfig.okText || (mergedOkCancel ? contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.okText : contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.justOkText),
      direction: innerConfig.direction || direction,
      cancelText: innerConfig.cancelText || (contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.cancelText)
    }, restProps));
  };
  const HookModal$1 = /* @__PURE__ */ React__namespace.forwardRef(HookModal);
  let uuid = 0;
  const ElementsHolder = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef((_props, ref) => {
    const [elements, patchElement] = usePatchElement();
    React__namespace.useImperativeHandle(ref, () => ({
      patchElement
    }), []);
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, elements);
  }));
  function useModal() {
    const holderRef = React__namespace.useRef(null);
    const [actionQueue, setActionQueue] = React__namespace.useState([]);
    React__namespace.useEffect(() => {
      if (actionQueue.length) {
        const cloneQueue = _toConsumableArray(actionQueue);
        cloneQueue.forEach((action) => {
          action();
        });
        setActionQueue([]);
      }
    }, [actionQueue]);
    const getConfirmFunc = React__namespace.useCallback((withFunc) => function hookConfirm(config) {
      var _a;
      uuid += 1;
      const modalRef = /* @__PURE__ */ React__namespace.createRef();
      let resolvePromise;
      const promise = new Promise((resolve) => {
        resolvePromise = resolve;
      });
      let silent = false;
      let closeFunc;
      const modal = /* @__PURE__ */ React__namespace.createElement(HookModal$1, {
        key: `modal-${uuid}`,
        config: withFunc(config),
        ref: modalRef,
        afterClose: () => {
          closeFunc === null || closeFunc === void 0 ? void 0 : closeFunc();
        },
        isSilent: () => silent,
        onConfirm: (confirmed) => {
          resolvePromise(confirmed);
        }
      });
      closeFunc = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.patchElement(modal);
      if (closeFunc) {
        destroyFns.push(closeFunc);
      }
      const instance = {
        destroy: () => {
          function destroyAction() {
            var _a2;
            (_a2 = modalRef.current) === null || _a2 === void 0 ? void 0 : _a2.destroy();
          }
          if (modalRef.current) {
            destroyAction();
          } else {
            setActionQueue((prev2) => [].concat(_toConsumableArray(prev2), [destroyAction]));
          }
        },
        update: (newConfig) => {
          function updateAction() {
            var _a2;
            (_a2 = modalRef.current) === null || _a2 === void 0 ? void 0 : _a2.update(newConfig);
          }
          if (modalRef.current) {
            updateAction();
          } else {
            setActionQueue((prev2) => [].concat(_toConsumableArray(prev2), [updateAction]));
          }
        },
        then: (resolve) => {
          silent = true;
          return promise.then(resolve);
        }
      };
      return instance;
    }, []);
    const fns = React__namespace.useMemo(() => ({
      info: getConfirmFunc(withInfo),
      success: getConfirmFunc(withSuccess),
      error: getConfirmFunc(withError),
      warning: getConfirmFunc(withWarn),
      confirm: getConfirmFunc(withConfirm)
    }), []);
    return [fns, /* @__PURE__ */ React__namespace.createElement(ElementsHolder, {
      key: "modal-holder",
      ref: holderRef
    })];
  }
  const AppConfigContext = /* @__PURE__ */ React.createContext({});
  function withPureRenderTheme(Component) {
    return (props) => /* @__PURE__ */ React__namespace.createElement(ConfigProvider$1, {
      theme: {
        token: {
          motion: false,
          zIndexPopupBase: 0
        }
      }
    }, /* @__PURE__ */ React__namespace.createElement(Component, Object.assign({}, props)));
  }
  const isMobile = function() {
    if (typeof navigator === "undefined" || typeof window === "undefined") {
      return false;
    }
    var agent = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4));
  };
  function Arrow(props) {
    var prefixCls = props.prefixCls, align = props.align, arrow = props.arrow, arrowPos = props.arrowPos;
    var _ref7 = arrow || {}, className = _ref7.className, content = _ref7.content;
    var _arrowPos$x = arrowPos.x, x2 = _arrowPos$x === void 0 ? 0 : _arrowPos$x, _arrowPos$y = arrowPos.y, y2 = _arrowPos$y === void 0 ? 0 : _arrowPos$y;
    var arrowRef = React__namespace.useRef();
    if (!align || !align.points) {
      return null;
    }
    var alignStyle = {
      position: "absolute"
    };
    if (align.autoArrow !== false) {
      var popupPoints = align.points[0];
      var targetPoints = align.points[1];
      var popupTB = popupPoints[0];
      var popupLR = popupPoints[1];
      var targetTB = targetPoints[0];
      var targetLR = targetPoints[1];
      if (popupTB === targetTB || !["t", "b"].includes(popupTB)) {
        alignStyle.top = y2;
      } else if (popupTB === "t") {
        alignStyle.top = 0;
      } else {
        alignStyle.bottom = 0;
      }
      if (popupLR === targetLR || !["l", "r"].includes(popupLR)) {
        alignStyle.left = x2;
      } else if (popupLR === "l") {
        alignStyle.left = 0;
      } else {
        alignStyle.right = 0;
      }
    }
    return /* @__PURE__ */ React__namespace.createElement("div", {
      ref: arrowRef,
      className: cx("".concat(prefixCls, "-arrow"), className),
      style: alignStyle
    }, content);
  }
  function Mask(props) {
    var prefixCls = props.prefixCls, open2 = props.open, zIndex = props.zIndex, mask = props.mask, motion = props.motion;
    if (!mask) {
      return null;
    }
    return /* @__PURE__ */ React__namespace.createElement(CSSMotion, _extends({}, motion, {
      motionAppear: true,
      visible: open2,
      removeOnLeave: true
    }), function(_ref7) {
      var className = _ref7.className;
      return /* @__PURE__ */ React__namespace.createElement("div", {
        style: {
          zIndex
        },
        className: cx("".concat(prefixCls, "-mask"), className)
      });
    });
  }
  var PopupContent = /* @__PURE__ */ React__namespace.memo(function(_ref7) {
    var children = _ref7.children;
    return children;
  }, function(_, next2) {
    return next2.cache;
  });
  var Popup$1 = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var popup = props.popup, className = props.className, prefixCls = props.prefixCls, style2 = props.style, target = props.target, _onVisibleChanged = props.onVisibleChanged, open2 = props.open, keepDom = props.keepDom, fresh = props.fresh, onClick = props.onClick, mask = props.mask, arrow = props.arrow, arrowPos = props.arrowPos, align = props.align, motion = props.motion, maskMotion = props.maskMotion, forceRender = props.forceRender, getPopupContainer = props.getPopupContainer, autoDestroy = props.autoDestroy, Portal2 = props.portal, zIndex = props.zIndex, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onPointerEnter = props.onPointerEnter, ready = props.ready, offsetX = props.offsetX, offsetY = props.offsetY, offsetR = props.offsetR, offsetB = props.offsetB, onAlign = props.onAlign, onPrepare = props.onPrepare, stretch = props.stretch, targetWidth = props.targetWidth, targetHeight = props.targetHeight;
    var childNode = typeof popup === "function" ? popup() : popup;
    var isNodeVisible = open2 || keepDom;
    var getPopupContainerNeedParams = (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.length) > 0;
    var _React$useState = React__namespace.useState(!getPopupContainer || !getPopupContainerNeedParams), _React$useState2 = _slicedToArray(_React$useState, 2), show = _React$useState2[0], setShow = _React$useState2[1];
    useLayoutEffect(function() {
      if (!show && getPopupContainerNeedParams && target) {
        setShow(true);
      }
    }, [show, getPopupContainerNeedParams, target]);
    if (!show) {
      return null;
    }
    var AUTO = "auto";
    var offsetStyle = {
      left: "-1000vw",
      top: "-1000vh",
      right: AUTO,
      bottom: AUTO
    };
    if (ready || !open2) {
      var _experimental;
      var points = align.points;
      var dynamicInset = align.dynamicInset || ((_experimental = align._experimental) === null || _experimental === void 0 ? void 0 : _experimental.dynamicInset);
      var alignRight = dynamicInset && points[0][1] === "r";
      var alignBottom = dynamicInset && points[0][0] === "b";
      if (alignRight) {
        offsetStyle.right = offsetR;
        offsetStyle.left = AUTO;
      } else {
        offsetStyle.left = offsetX;
        offsetStyle.right = AUTO;
      }
      if (alignBottom) {
        offsetStyle.bottom = offsetB;
        offsetStyle.top = AUTO;
      } else {
        offsetStyle.top = offsetY;
        offsetStyle.bottom = AUTO;
      }
    }
    var miscStyle = {};
    if (stretch) {
      if (stretch.includes("height") && targetHeight) {
        miscStyle.height = targetHeight;
      } else if (stretch.includes("minHeight") && targetHeight) {
        miscStyle.minHeight = targetHeight;
      }
      if (stretch.includes("width") && targetWidth) {
        miscStyle.width = targetWidth;
      } else if (stretch.includes("minWidth") && targetWidth) {
        miscStyle.minWidth = targetWidth;
      }
    }
    if (!open2) {
      miscStyle.pointerEvents = "none";
    }
    return /* @__PURE__ */ React__namespace.createElement(Portal2, {
      open: forceRender || isNodeVisible,
      getContainer: getPopupContainer && function() {
        return getPopupContainer(target);
      },
      autoDestroy
    }, /* @__PURE__ */ React__namespace.createElement(Mask, {
      prefixCls,
      open: open2,
      zIndex,
      mask,
      motion: maskMotion
    }), /* @__PURE__ */ React__namespace.createElement(RefResizeObserver, {
      onResize: onAlign,
      disabled: !open2
    }, function(resizeObserverRef) {
      return /* @__PURE__ */ React__namespace.createElement(CSSMotion, _extends({
        motionAppear: true,
        motionEnter: true,
        motionLeave: true,
        removeOnLeave: false,
        forceRender,
        leavedClassName: "".concat(prefixCls, "-hidden")
      }, motion, {
        onAppearPrepare: onPrepare,
        onEnterPrepare: onPrepare,
        visible: open2,
        onVisibleChanged: function onVisibleChanged(nextVisible) {
          var _motion$onVisibleChan;
          motion === null || motion === void 0 || (_motion$onVisibleChan = motion.onVisibleChanged) === null || _motion$onVisibleChan === void 0 || _motion$onVisibleChan.call(motion, nextVisible);
          _onVisibleChanged(nextVisible);
        }
      }), function(_ref7, motionRef) {
        var motionClassName = _ref7.className, motionStyle = _ref7.style;
        var cls = cx(prefixCls, motionClassName, className);
        return /* @__PURE__ */ React__namespace.createElement("div", {
          ref: composeRef(resizeObserverRef, ref, motionRef),
          className: cls,
          style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
            "--arrow-x": "".concat(arrowPos.x || 0, "px"),
            "--arrow-y": "".concat(arrowPos.y || 0, "px")
          }, offsetStyle), miscStyle), motionStyle), {}, {
            boxSizing: "border-box",
            zIndex
          }, style2),
          onMouseEnter,
          onMouseLeave,
          onPointerEnter,
          onClick
        }, arrow && /* @__PURE__ */ React__namespace.createElement(Arrow, {
          prefixCls,
          arrow,
          arrowPos,
          align
        }), /* @__PURE__ */ React__namespace.createElement(PopupContent, {
          cache: !open2 && !fresh
        }, childNode));
      });
    }));
  });
  var TriggerWrapper = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var children = props.children, getTriggerDOMNode = props.getTriggerDOMNode;
    var canUseRef = supportRef(children);
    var setRef = React__namespace.useCallback(function(node2) {
      fillRef(ref, getTriggerDOMNode ? getTriggerDOMNode(node2) : node2);
    }, [getTriggerDOMNode]);
    var mergedRef = useComposeRef(setRef, children.ref);
    return canUseRef ? /* @__PURE__ */ React__namespace.cloneElement(children, {
      ref: mergedRef
    }) : children;
  });
  var TriggerContext = /* @__PURE__ */ React__namespace.createContext(null);
  function toArray(val) {
    return val ? Array.isArray(val) ? val : [val] : [];
  }
  function useAction(mobile, action, showAction, hideAction) {
    return React__namespace.useMemo(function() {
      var mergedShowAction = toArray(showAction !== null && showAction !== void 0 ? showAction : action);
      var mergedHideAction = toArray(hideAction !== null && hideAction !== void 0 ? hideAction : action);
      var showActionSet = new Set(mergedShowAction);
      var hideActionSet = new Set(mergedHideAction);
      if (mobile) {
        if (showActionSet.has("hover")) {
          showActionSet.delete("hover");
          showActionSet.add("click");
        }
        if (hideActionSet.has("hover")) {
          hideActionSet.delete("hover");
          hideActionSet.add("click");
        }
      }
      return [showActionSet, hideActionSet];
    }, [mobile, action, showAction, hideAction]);
  }
  function isPointsEq() {
    var a1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var a2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var isAlignPoint = arguments.length > 2 ? arguments[2] : void 0;
    if (isAlignPoint) {
      return a1[0] === a2[0];
    }
    return a1[0] === a2[0] && a1[1] === a2[1];
  }
  function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
    var points = align.points;
    var placements2 = Object.keys(builtinPlacements);
    for (var i2 = 0; i2 < placements2.length; i2 += 1) {
      var _builtinPlacements$pl;
      var placement = placements2[i2];
      if (isPointsEq((_builtinPlacements$pl = builtinPlacements[placement]) === null || _builtinPlacements$pl === void 0 ? void 0 : _builtinPlacements$pl.points, points, isAlignPoint)) {
        return "".concat(prefixCls, "-placement-").concat(placement);
      }
    }
    return "";
  }
  function getMotion(prefixCls, motion, animation, transitionName) {
    if (motion) {
      return motion;
    }
    if (animation) {
      return {
        motionName: "".concat(prefixCls, "-").concat(animation)
      };
    }
    if (transitionName) {
      return {
        motionName: transitionName
      };
    }
    return null;
  }
  function getWin(ele) {
    return ele.ownerDocument.defaultView;
  }
  function collectScroller(ele) {
    var scrollerList = [];
    var current = ele === null || ele === void 0 ? void 0 : ele.parentElement;
    var scrollStyle = ["hidden", "scroll", "clip", "auto"];
    while (current) {
      var _getWin$getComputedSt = getWin(current).getComputedStyle(current), overflowX = _getWin$getComputedSt.overflowX, overflowY = _getWin$getComputedSt.overflowY, overflow = _getWin$getComputedSt.overflow;
      if ([overflowX, overflowY, overflow].some(function(o2) {
        return scrollStyle.includes(o2);
      })) {
        scrollerList.push(current);
      }
      current = current.parentElement;
    }
    return scrollerList;
  }
  function toNum(num) {
    var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    return Number.isNaN(num) ? defaultValue : num;
  }
  function getPxValue(val) {
    return toNum(parseFloat(val), 0);
  }
  function getVisibleArea(initArea, scrollerList) {
    var visibleArea = _objectSpread2({}, initArea);
    (scrollerList || []).forEach(function(ele) {
      if (ele instanceof HTMLBodyElement || ele instanceof HTMLHtmlElement) {
        return;
      }
      var _getWin$getComputedSt2 = getWin(ele).getComputedStyle(ele), overflow = _getWin$getComputedSt2.overflow, overflowClipMargin = _getWin$getComputedSt2.overflowClipMargin, borderTopWidth = _getWin$getComputedSt2.borderTopWidth, borderBottomWidth = _getWin$getComputedSt2.borderBottomWidth, borderLeftWidth = _getWin$getComputedSt2.borderLeftWidth, borderRightWidth = _getWin$getComputedSt2.borderRightWidth;
      var eleRect = ele.getBoundingClientRect();
      var eleOutHeight = ele.offsetHeight, eleInnerHeight = ele.clientHeight, eleOutWidth = ele.offsetWidth, eleInnerWidth = ele.clientWidth;
      var borderTopNum = getPxValue(borderTopWidth);
      var borderBottomNum = getPxValue(borderBottomWidth);
      var borderLeftNum = getPxValue(borderLeftWidth);
      var borderRightNum = getPxValue(borderRightWidth);
      var scaleX = toNum(Math.round(eleRect.width / eleOutWidth * 1e3) / 1e3);
      var scaleY = toNum(Math.round(eleRect.height / eleOutHeight * 1e3) / 1e3);
      var eleScrollWidth = (eleOutWidth - eleInnerWidth - borderLeftNum - borderRightNum) * scaleX;
      var eleScrollHeight = (eleOutHeight - eleInnerHeight - borderTopNum - borderBottomNum) * scaleY;
      var scaledBorderTopWidth = borderTopNum * scaleY;
      var scaledBorderBottomWidth = borderBottomNum * scaleY;
      var scaledBorderLeftWidth = borderLeftNum * scaleX;
      var scaledBorderRightWidth = borderRightNum * scaleX;
      var clipMarginWidth = 0;
      var clipMarginHeight = 0;
      if (overflow === "clip") {
        var clipNum = getPxValue(overflowClipMargin);
        clipMarginWidth = clipNum * scaleX;
        clipMarginHeight = clipNum * scaleY;
      }
      var eleLeft = eleRect.x + scaledBorderLeftWidth - clipMarginWidth;
      var eleTop = eleRect.y + scaledBorderTopWidth - clipMarginHeight;
      var eleRight = eleLeft + eleRect.width + 2 * clipMarginWidth - scaledBorderLeftWidth - scaledBorderRightWidth - eleScrollWidth;
      var eleBottom = eleTop + eleRect.height + 2 * clipMarginHeight - scaledBorderTopWidth - scaledBorderBottomWidth - eleScrollHeight;
      visibleArea.left = Math.max(visibleArea.left, eleLeft);
      visibleArea.top = Math.max(visibleArea.top, eleTop);
      visibleArea.right = Math.min(visibleArea.right, eleRight);
      visibleArea.bottom = Math.min(visibleArea.bottom, eleBottom);
    });
    return visibleArea;
  }
  function getUnitOffset(size2) {
    var offset2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var offsetStr = "".concat(offset2);
    var cells = offsetStr.match(/^(.*)\%$/);
    if (cells) {
      return size2 * (parseFloat(cells[1]) / 100);
    }
    return parseFloat(offsetStr);
  }
  function getNumberOffset(rect, offset2) {
    var _ref7 = offset2 || [], _ref22 = _slicedToArray(_ref7, 2), offsetX = _ref22[0], offsetY = _ref22[1];
    return [getUnitOffset(rect.width, offsetX), getUnitOffset(rect.height, offsetY)];
  }
  function splitPoints() {
    var points = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return [points[0], points[1]];
  }
  function getAlignPoint(rect, points) {
    var topBottom = points[0];
    var leftRight = points[1];
    var x2;
    var y2;
    if (topBottom === "t") {
      y2 = rect.y;
    } else if (topBottom === "b") {
      y2 = rect.y + rect.height;
    } else {
      y2 = rect.y + rect.height / 2;
    }
    if (leftRight === "l") {
      x2 = rect.x;
    } else if (leftRight === "r") {
      x2 = rect.x + rect.width;
    } else {
      x2 = rect.x + rect.width / 2;
    }
    return {
      x: x2,
      y: y2
    };
  }
  function reversePoints(points, index2) {
    var reverseMap = {
      t: "b",
      b: "t",
      l: "r",
      r: "l"
    };
    return points.map(function(point, i2) {
      if (i2 === index2) {
        return reverseMap[point] || "c";
      }
      return point;
    }).join("");
  }
  function useAlign(open2, popupEle, target, placement, builtinPlacements, popupAlign, onPopupAlign) {
    var _React$useState = React__namespace.useState({
      ready: false,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: builtinPlacements[placement] || {}
    }), _React$useState2 = _slicedToArray(_React$useState, 2), offsetInfo = _React$useState2[0], setOffsetInfo = _React$useState2[1];
    var alignCountRef = React__namespace.useRef(0);
    var scrollerList = React__namespace.useMemo(function() {
      if (!popupEle) {
        return [];
      }
      return collectScroller(popupEle);
    }, [popupEle]);
    var prevFlipRef = React__namespace.useRef({});
    var resetFlipCache = function resetFlipCache2() {
      prevFlipRef.current = {};
    };
    if (!open2) {
      resetFlipCache();
    }
    var onAlign = useEvent(function() {
      if (popupEle && target && open2) {
        let getIntersectionVisibleArea = function(offsetX, offsetY) {
          var area = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : visibleArea;
          var l2 = popupRect.x + offsetX;
          var t2 = popupRect.y + offsetY;
          var r2 = l2 + popupWidth;
          var b2 = t2 + popupHeight;
          var visibleL = Math.max(l2, area.left);
          var visibleT = Math.max(t2, area.top);
          var visibleR = Math.min(r2, area.right);
          var visibleB = Math.min(b2, area.bottom);
          return Math.max(0, (visibleR - visibleL) * (visibleB - visibleT));
        }, syncNextPopupPosition = function() {
          nextPopupY = popupRect.y + nextOffsetY;
          nextPopupBottom = nextPopupY + popupHeight;
          nextPopupX = popupRect.x + nextOffsetX;
          nextPopupRight = nextPopupX + popupWidth;
        };
        var _popupElement$parentE, _popupElement$parentE2;
        var popupElement = popupEle;
        var doc = popupElement.ownerDocument;
        var win = getWin(popupElement);
        var _win$getComputedStyle = win.getComputedStyle(popupElement), width = _win$getComputedStyle.width, height = _win$getComputedStyle.height, popupPosition = _win$getComputedStyle.position;
        var originLeft = popupElement.style.left;
        var originTop = popupElement.style.top;
        var originRight = popupElement.style.right;
        var originBottom = popupElement.style.bottom;
        var originOverflow = popupElement.style.overflow;
        var placementInfo = _objectSpread2(_objectSpread2({}, builtinPlacements[placement]), popupAlign);
        var placeholderElement = doc.createElement("div");
        (_popupElement$parentE = popupElement.parentElement) === null || _popupElement$parentE === void 0 || _popupElement$parentE.appendChild(placeholderElement);
        placeholderElement.style.left = "".concat(popupElement.offsetLeft, "px");
        placeholderElement.style.top = "".concat(popupElement.offsetTop, "px");
        placeholderElement.style.position = popupPosition;
        placeholderElement.style.height = "".concat(popupElement.offsetHeight, "px");
        placeholderElement.style.width = "".concat(popupElement.offsetWidth, "px");
        popupElement.style.left = "0";
        popupElement.style.top = "0";
        popupElement.style.right = "auto";
        popupElement.style.bottom = "auto";
        popupElement.style.overflow = "hidden";
        var targetRect;
        if (Array.isArray(target)) {
          targetRect = {
            x: target[0],
            y: target[1],
            width: 0,
            height: 0
          };
        } else {
          var rect = target.getBoundingClientRect();
          targetRect = {
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height
          };
        }
        var popupRect = popupElement.getBoundingClientRect();
        var _doc$documentElement = doc.documentElement, clientWidth = _doc$documentElement.clientWidth, clientHeight = _doc$documentElement.clientHeight, scrollWidth = _doc$documentElement.scrollWidth, scrollHeight = _doc$documentElement.scrollHeight, scrollTop = _doc$documentElement.scrollTop, scrollLeft = _doc$documentElement.scrollLeft;
        var popupHeight = popupRect.height;
        var popupWidth = popupRect.width;
        var targetHeight = targetRect.height;
        var targetWidth = targetRect.width;
        var visibleRegion = {
          left: 0,
          top: 0,
          right: clientWidth,
          bottom: clientHeight
        };
        var scrollRegion = {
          left: -scrollLeft,
          top: -scrollTop,
          right: scrollWidth - scrollLeft,
          bottom: scrollHeight - scrollTop
        };
        var htmlRegion = placementInfo.htmlRegion;
        var VISIBLE = "visible";
        var VISIBLE_FIRST = "visibleFirst";
        if (htmlRegion !== "scroll" && htmlRegion !== VISIBLE_FIRST) {
          htmlRegion = VISIBLE;
        }
        var isVisibleFirst = htmlRegion === VISIBLE_FIRST;
        var scrollRegionArea = getVisibleArea(scrollRegion, scrollerList);
        var visibleRegionArea = getVisibleArea(visibleRegion, scrollerList);
        var visibleArea = htmlRegion === VISIBLE ? visibleRegionArea : scrollRegionArea;
        var adjustCheckVisibleArea = isVisibleFirst ? visibleRegionArea : visibleArea;
        popupElement.style.left = "auto";
        popupElement.style.top = "auto";
        popupElement.style.right = "0";
        popupElement.style.bottom = "0";
        var popupMirrorRect = popupElement.getBoundingClientRect();
        popupElement.style.left = originLeft;
        popupElement.style.top = originTop;
        popupElement.style.right = originRight;
        popupElement.style.bottom = originBottom;
        popupElement.style.overflow = originOverflow;
        (_popupElement$parentE2 = popupElement.parentElement) === null || _popupElement$parentE2 === void 0 || _popupElement$parentE2.removeChild(placeholderElement);
        var _scaleX = toNum(Math.round(popupWidth / parseFloat(width) * 1e3) / 1e3);
        var _scaleY = toNum(Math.round(popupHeight / parseFloat(height) * 1e3) / 1e3);
        if (_scaleX === 0 || _scaleY === 0 || isDOM(target) && !isVisible(target)) {
          return;
        }
        var offset2 = placementInfo.offset, targetOffset2 = placementInfo.targetOffset;
        var _getNumberOffset = getNumberOffset(popupRect, offset2), _getNumberOffset2 = _slicedToArray(_getNumberOffset, 2), popupOffsetX = _getNumberOffset2[0], popupOffsetY = _getNumberOffset2[1];
        var _getNumberOffset3 = getNumberOffset(targetRect, targetOffset2), _getNumberOffset4 = _slicedToArray(_getNumberOffset3, 2), targetOffsetX = _getNumberOffset4[0], targetOffsetY = _getNumberOffset4[1];
        targetRect.x -= targetOffsetX;
        targetRect.y -= targetOffsetY;
        var _ref32 = placementInfo.points || [], _ref42 = _slicedToArray(_ref32, 2), popupPoint = _ref42[0], targetPoint = _ref42[1];
        var targetPoints = splitPoints(targetPoint);
        var popupPoints = splitPoints(popupPoint);
        var targetAlignPoint = getAlignPoint(targetRect, targetPoints);
        var popupAlignPoint = getAlignPoint(popupRect, popupPoints);
        var nextAlignInfo = _objectSpread2({}, placementInfo);
        var nextOffsetX = targetAlignPoint.x - popupAlignPoint.x + popupOffsetX;
        var nextOffsetY = targetAlignPoint.y - popupAlignPoint.y + popupOffsetY;
        var originIntersectionVisibleArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY);
        var originIntersectionRecommendArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY, visibleRegionArea);
        var targetAlignPointTL = getAlignPoint(targetRect, ["t", "l"]);
        var popupAlignPointTL = getAlignPoint(popupRect, ["t", "l"]);
        var targetAlignPointBR = getAlignPoint(targetRect, ["b", "r"]);
        var popupAlignPointBR = getAlignPoint(popupRect, ["b", "r"]);
        var overflow = placementInfo.overflow || {};
        var adjustX = overflow.adjustX, adjustY = overflow.adjustY, shiftX = overflow.shiftX, shiftY = overflow.shiftY;
        var supportAdjust = function supportAdjust2(val) {
          if (typeof val === "boolean") {
            return val;
          }
          return val >= 0;
        };
        var nextPopupY;
        var nextPopupBottom;
        var nextPopupX;
        var nextPopupRight;
        syncNextPopupPosition();
        var needAdjustY = supportAdjust(adjustY);
        var sameTB = popupPoints[0] === targetPoints[0];
        if (needAdjustY && popupPoints[0] === "t" && (nextPopupBottom > adjustCheckVisibleArea.bottom || prevFlipRef.current.bt)) {
          var tmpNextOffsetY = nextOffsetY;
          if (sameTB) {
            tmpNextOffsetY -= popupHeight - targetHeight;
          } else {
            tmpNextOffsetY = targetAlignPointTL.y - popupAlignPointBR.y - popupOffsetY;
          }
          var newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
          var newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
          if (
            // Of course use larger one
            newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
            newVisibleRecommendArea >= originIntersectionRecommendArea)
          ) {
            prevFlipRef.current.bt = true;
            nextOffsetY = tmpNextOffsetY;
            popupOffsetY = -popupOffsetY;
            nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
          } else {
            prevFlipRef.current.bt = false;
          }
        }
        if (needAdjustY && popupPoints[0] === "b" && (nextPopupY < adjustCheckVisibleArea.top || prevFlipRef.current.tb)) {
          var _tmpNextOffsetY = nextOffsetY;
          if (sameTB) {
            _tmpNextOffsetY += popupHeight - targetHeight;
          } else {
            _tmpNextOffsetY = targetAlignPointBR.y - popupAlignPointTL.y - popupOffsetY;
          }
          var _newVisibleArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY);
          var _newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY, visibleRegionArea);
          if (
            // Of course use larger one
            _newVisibleArea > originIntersectionVisibleArea || _newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
            _newVisibleRecommendArea >= originIntersectionRecommendArea)
          ) {
            prevFlipRef.current.tb = true;
            nextOffsetY = _tmpNextOffsetY;
            popupOffsetY = -popupOffsetY;
            nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
          } else {
            prevFlipRef.current.tb = false;
          }
        }
        var needAdjustX = supportAdjust(adjustX);
        var sameLR = popupPoints[1] === targetPoints[1];
        if (needAdjustX && popupPoints[1] === "l" && (nextPopupRight > adjustCheckVisibleArea.right || prevFlipRef.current.rl)) {
          var tmpNextOffsetX = nextOffsetX;
          if (sameLR) {
            tmpNextOffsetX -= popupWidth - targetWidth;
          } else {
            tmpNextOffsetX = targetAlignPointTL.x - popupAlignPointBR.x - popupOffsetX;
          }
          var _newVisibleArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
          var _newVisibleRecommendArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
          if (
            // Of course use larger one
            _newVisibleArea2 > originIntersectionVisibleArea || _newVisibleArea2 === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
            _newVisibleRecommendArea2 >= originIntersectionRecommendArea)
          ) {
            prevFlipRef.current.rl = true;
            nextOffsetX = tmpNextOffsetX;
            popupOffsetX = -popupOffsetX;
            nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
          } else {
            prevFlipRef.current.rl = false;
          }
        }
        if (needAdjustX && popupPoints[1] === "r" && (nextPopupX < adjustCheckVisibleArea.left || prevFlipRef.current.lr)) {
          var _tmpNextOffsetX = nextOffsetX;
          if (sameLR) {
            _tmpNextOffsetX += popupWidth - targetWidth;
          } else {
            _tmpNextOffsetX = targetAlignPointBR.x - popupAlignPointTL.x - popupOffsetX;
          }
          var _newVisibleArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY);
          var _newVisibleRecommendArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY, visibleRegionArea);
          if (
            // Of course use larger one
            _newVisibleArea3 > originIntersectionVisibleArea || _newVisibleArea3 === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
            _newVisibleRecommendArea3 >= originIntersectionRecommendArea)
          ) {
            prevFlipRef.current.lr = true;
            nextOffsetX = _tmpNextOffsetX;
            popupOffsetX = -popupOffsetX;
            nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
          } else {
            prevFlipRef.current.lr = false;
          }
        }
        syncNextPopupPosition();
        var numShiftX = shiftX === true ? 0 : shiftX;
        if (typeof numShiftX === "number") {
          if (nextPopupX < visibleRegionArea.left) {
            nextOffsetX -= nextPopupX - visibleRegionArea.left - popupOffsetX;
            if (targetRect.x + targetWidth < visibleRegionArea.left + numShiftX) {
              nextOffsetX += targetRect.x - visibleRegionArea.left + targetWidth - numShiftX;
            }
          }
          if (nextPopupRight > visibleRegionArea.right) {
            nextOffsetX -= nextPopupRight - visibleRegionArea.right - popupOffsetX;
            if (targetRect.x > visibleRegionArea.right - numShiftX) {
              nextOffsetX += targetRect.x - visibleRegionArea.right + numShiftX;
            }
          }
        }
        var numShiftY = shiftY === true ? 0 : shiftY;
        if (typeof numShiftY === "number") {
          if (nextPopupY < visibleRegionArea.top) {
            nextOffsetY -= nextPopupY - visibleRegionArea.top - popupOffsetY;
            if (targetRect.y + targetHeight < visibleRegionArea.top + numShiftY) {
              nextOffsetY += targetRect.y - visibleRegionArea.top + targetHeight - numShiftY;
            }
          }
          if (nextPopupBottom > visibleRegionArea.bottom) {
            nextOffsetY -= nextPopupBottom - visibleRegionArea.bottom - popupOffsetY;
            if (targetRect.y > visibleRegionArea.bottom - numShiftY) {
              nextOffsetY += targetRect.y - visibleRegionArea.bottom + numShiftY;
            }
          }
        }
        var popupLeft = popupRect.x + nextOffsetX;
        var popupRight = popupLeft + popupWidth;
        var popupTop = popupRect.y + nextOffsetY;
        var popupBottom = popupTop + popupHeight;
        var targetLeft = targetRect.x;
        var targetRight = targetLeft + targetWidth;
        var targetTop = targetRect.y;
        var targetBottom = targetTop + targetHeight;
        var maxLeft = Math.max(popupLeft, targetLeft);
        var minRight = Math.min(popupRight, targetRight);
        var xCenter = (maxLeft + minRight) / 2;
        var nextArrowX = xCenter - popupLeft;
        var maxTop = Math.max(popupTop, targetTop);
        var minBottom = Math.min(popupBottom, targetBottom);
        var yCenter = (maxTop + minBottom) / 2;
        var nextArrowY = yCenter - popupTop;
        onPopupAlign === null || onPopupAlign === void 0 || onPopupAlign(popupEle, nextAlignInfo);
        var offsetX4Right = popupMirrorRect.right - popupRect.x - (nextOffsetX + popupRect.width);
        var offsetY4Bottom = popupMirrorRect.bottom - popupRect.y - (nextOffsetY + popupRect.height);
        if (_scaleX === 1) {
          nextOffsetX = Math.round(nextOffsetX);
          offsetX4Right = Math.round(offsetX4Right);
        }
        if (_scaleY === 1) {
          nextOffsetY = Math.round(nextOffsetY);
          offsetY4Bottom = Math.round(offsetY4Bottom);
        }
        var nextOffsetInfo = {
          ready: true,
          offsetX: nextOffsetX / _scaleX,
          offsetY: nextOffsetY / _scaleY,
          offsetR: offsetX4Right / _scaleX,
          offsetB: offsetY4Bottom / _scaleY,
          arrowX: nextArrowX / _scaleX,
          arrowY: nextArrowY / _scaleY,
          scaleX: _scaleX,
          scaleY: _scaleY,
          align: nextAlignInfo
        };
        setOffsetInfo(nextOffsetInfo);
      }
    });
    var triggerAlign = function triggerAlign2() {
      alignCountRef.current += 1;
      var id = alignCountRef.current;
      Promise.resolve().then(function() {
        if (alignCountRef.current === id) {
          onAlign();
        }
      });
    };
    var resetReady = function resetReady2() {
      setOffsetInfo(function(ori) {
        return _objectSpread2(_objectSpread2({}, ori), {}, {
          ready: false
        });
      });
    };
    useLayoutEffect(resetReady, [placement]);
    useLayoutEffect(function() {
      if (!open2) {
        resetReady();
      }
    }, [open2]);
    return [offsetInfo.ready, offsetInfo.offsetX, offsetInfo.offsetY, offsetInfo.offsetR, offsetInfo.offsetB, offsetInfo.arrowX, offsetInfo.arrowY, offsetInfo.scaleX, offsetInfo.scaleY, offsetInfo.align, triggerAlign];
  }
  function useWatch(open2, target, popup, onAlign, onScroll) {
    useLayoutEffect(function() {
      if (open2 && target && popup) {
        let notifyScroll = function() {
          onAlign();
          onScroll();
        };
        var targetElement = target;
        var popupElement = popup;
        var targetScrollList = collectScroller(targetElement);
        var popupScrollList = collectScroller(popupElement);
        var win = getWin(popupElement);
        var mergedList = new Set([win].concat(_toConsumableArray(targetScrollList), _toConsumableArray(popupScrollList)));
        mergedList.forEach(function(scroller) {
          scroller.addEventListener("scroll", notifyScroll, {
            passive: true
          });
        });
        win.addEventListener("resize", notifyScroll, {
          passive: true
        });
        onAlign();
        return function() {
          mergedList.forEach(function(scroller) {
            scroller.removeEventListener("scroll", notifyScroll);
            win.removeEventListener("resize", notifyScroll);
          });
        };
      }
    }, [open2, target, popup]);
  }
  function useWinClick(open2, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen) {
    var openRef = React__namespace.useRef(open2);
    openRef.current = open2;
    React__namespace.useEffect(function() {
      if (clickToHide && popupEle && (!mask || maskClosable)) {
        var onTriggerClose = function onTriggerClose2(_ref7) {
          var target = _ref7.target;
          if (openRef.current && !inPopupOrChild(target)) {
            triggerOpen(false);
          }
        };
        var win = getWin(popupEle);
        win.addEventListener("mousedown", onTriggerClose, true);
        win.addEventListener("contextmenu", onTriggerClose, true);
        var targetShadowRoot = getShadowRoot(targetEle);
        if (targetShadowRoot) {
          targetShadowRoot.addEventListener("mousedown", onTriggerClose, true);
          targetShadowRoot.addEventListener("contextmenu", onTriggerClose, true);
        }
        return function() {
          win.removeEventListener("mousedown", onTriggerClose, true);
          win.removeEventListener("contextmenu", onTriggerClose, true);
          if (targetShadowRoot) {
            targetShadowRoot.removeEventListener("mousedown", onTriggerClose, true);
            targetShadowRoot.removeEventListener("contextmenu", onTriggerClose, true);
          }
        };
      }
    }, [clickToHide, targetEle, popupEle, mask, maskClosable]);
  }
  var _excluded$7 = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
  function generateTrigger() {
    var PortalComponent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Portal;
    var Trigger2 = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
      var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-trigger-popup" : _props$prefixCls, children = props.children, _props$action = props.action, action = _props$action === void 0 ? "hover" : _props$action, showAction = props.showAction, hideAction = props.hideAction, popupVisible = props.popupVisible, defaultPopupVisible = props.defaultPopupVisible, onPopupVisibleChange = props.onPopupVisibleChange, afterPopupVisibleChange = props.afterPopupVisibleChange, mouseEnterDelay = props.mouseEnterDelay, _props$mouseLeaveDela = props.mouseLeaveDelay, mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela, focusDelay = props.focusDelay, blurDelay = props.blurDelay, mask = props.mask, _props$maskClosable = props.maskClosable, maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable, getPopupContainer = props.getPopupContainer, forceRender = props.forceRender, autoDestroy = props.autoDestroy, destroyPopupOnHide = props.destroyPopupOnHide, popup = props.popup, popupClassName = props.popupClassName, popupStyle = props.popupStyle, popupPlacement = props.popupPlacement, _props$builtinPlaceme = props.builtinPlacements, builtinPlacements = _props$builtinPlaceme === void 0 ? {} : _props$builtinPlaceme, popupAlign = props.popupAlign, zIndex = props.zIndex, stretch = props.stretch, getPopupClassNameFromAlign = props.getPopupClassNameFromAlign, fresh = props.fresh, alignPoint = props.alignPoint, onPopupClick = props.onPopupClick, onPopupAlign = props.onPopupAlign, arrow = props.arrow, popupMotion = props.popupMotion, maskMotion = props.maskMotion, popupTransitionName = props.popupTransitionName, popupAnimation = props.popupAnimation, maskTransitionName = props.maskTransitionName, maskAnimation = props.maskAnimation, className = props.className, getTriggerDOMNode = props.getTriggerDOMNode, restProps = _objectWithoutProperties(props, _excluded$7);
      var mergedAutoDestroy = autoDestroy || destroyPopupOnHide || false;
      var _React$useState = React__namespace.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), mobile = _React$useState2[0], setMobile = _React$useState2[1];
      useLayoutEffect(function() {
        setMobile(isMobile());
      }, []);
      var subPopupElements = React__namespace.useRef({});
      var parentContext = React__namespace.useContext(TriggerContext);
      var context = React__namespace.useMemo(function() {
        return {
          registerSubPopup: function registerSubPopup(id2, subPopupEle) {
            subPopupElements.current[id2] = subPopupEle;
            parentContext === null || parentContext === void 0 || parentContext.registerSubPopup(id2, subPopupEle);
          }
        };
      }, [parentContext]);
      var id = useId();
      var _React$useState3 = React__namespace.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), popupEle = _React$useState4[0], setPopupEle = _React$useState4[1];
      var externalPopupRef = React__namespace.useRef(null);
      var setPopupRef = useEvent(function(node2) {
        externalPopupRef.current = node2;
        if (isDOM(node2) && popupEle !== node2) {
          setPopupEle(node2);
        }
        parentContext === null || parentContext === void 0 || parentContext.registerSubPopup(id, node2);
      });
      var _React$useState5 = React__namespace.useState(null), _React$useState6 = _slicedToArray(_React$useState5, 2), targetEle = _React$useState6[0], setTargetEle = _React$useState6[1];
      var externalForwardRef = React__namespace.useRef(null);
      var setTargetRef = useEvent(function(node2) {
        if (isDOM(node2) && targetEle !== node2) {
          setTargetEle(node2);
          externalForwardRef.current = node2;
        }
      });
      var child = React__namespace.Children.only(children);
      var originChildProps = (child === null || child === void 0 ? void 0 : child.props) || {};
      var cloneProps = {};
      var inPopupOrChild = useEvent(function(ele) {
        var _getShadowRoot, _getShadowRoot2;
        var childDOM = targetEle;
        return (childDOM === null || childDOM === void 0 ? void 0 : childDOM.contains(ele)) || ((_getShadowRoot = getShadowRoot(childDOM)) === null || _getShadowRoot === void 0 ? void 0 : _getShadowRoot.host) === ele || ele === childDOM || (popupEle === null || popupEle === void 0 ? void 0 : popupEle.contains(ele)) || ((_getShadowRoot2 = getShadowRoot(popupEle)) === null || _getShadowRoot2 === void 0 ? void 0 : _getShadowRoot2.host) === ele || ele === popupEle || Object.values(subPopupElements.current).some(function(subPopupEle) {
          return (subPopupEle === null || subPopupEle === void 0 ? void 0 : subPopupEle.contains(ele)) || ele === subPopupEle;
        });
      });
      var mergePopupMotion = getMotion(prefixCls, popupMotion, popupAnimation, popupTransitionName);
      var mergeMaskMotion = getMotion(prefixCls, maskMotion, maskAnimation, maskTransitionName);
      var _React$useState7 = React__namespace.useState(defaultPopupVisible || false), _React$useState8 = _slicedToArray(_React$useState7, 2), internalOpen = _React$useState8[0], setInternalOpen = _React$useState8[1];
      var mergedOpen = popupVisible !== null && popupVisible !== void 0 ? popupVisible : internalOpen;
      var setMergedOpen = useEvent(function(nextOpen) {
        if (popupVisible === void 0) {
          setInternalOpen(nextOpen);
        }
      });
      useLayoutEffect(function() {
        setInternalOpen(popupVisible || false);
      }, [popupVisible]);
      var openRef = React__namespace.useRef(mergedOpen);
      openRef.current = mergedOpen;
      var lastTriggerRef = React__namespace.useRef([]);
      lastTriggerRef.current = [];
      var internalTriggerOpen = useEvent(function(nextOpen) {
        var _lastTriggerRef$curre;
        setMergedOpen(nextOpen);
        if (((_lastTriggerRef$curre = lastTriggerRef.current[lastTriggerRef.current.length - 1]) !== null && _lastTriggerRef$curre !== void 0 ? _lastTriggerRef$curre : mergedOpen) !== nextOpen) {
          lastTriggerRef.current.push(nextOpen);
          onPopupVisibleChange === null || onPopupVisibleChange === void 0 || onPopupVisibleChange(nextOpen);
        }
      });
      var delayRef = React__namespace.useRef();
      var clearDelay = function clearDelay2() {
        clearTimeout(delayRef.current);
      };
      var triggerOpen = function triggerOpen2(nextOpen) {
        var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        clearDelay();
        if (delay === 0) {
          internalTriggerOpen(nextOpen);
        } else {
          delayRef.current = setTimeout(function() {
            internalTriggerOpen(nextOpen);
          }, delay * 1e3);
        }
      };
      React__namespace.useEffect(function() {
        return clearDelay;
      }, []);
      var _React$useState9 = React__namespace.useState(false), _React$useState10 = _slicedToArray(_React$useState9, 2), inMotion = _React$useState10[0], setInMotion = _React$useState10[1];
      useLayoutEffect(function(firstMount) {
        if (!firstMount || mergedOpen) {
          setInMotion(true);
        }
      }, [mergedOpen]);
      var _React$useState11 = React__namespace.useState(null), _React$useState12 = _slicedToArray(_React$useState11, 2), motionPrepareResolve = _React$useState12[0], setMotionPrepareResolve = _React$useState12[1];
      var _React$useState13 = React__namespace.useState([0, 0]), _React$useState14 = _slicedToArray(_React$useState13, 2), mousePos = _React$useState14[0], setMousePos = _React$useState14[1];
      var setMousePosByEvent = function setMousePosByEvent2(event) {
        setMousePos([event.clientX, event.clientY]);
      };
      var _useAlign = useAlign(mergedOpen, popupEle, alignPoint ? mousePos : targetEle, popupPlacement, builtinPlacements, popupAlign, onPopupAlign), _useAlign2 = _slicedToArray(_useAlign, 11), ready = _useAlign2[0], offsetX = _useAlign2[1], offsetY = _useAlign2[2], offsetR = _useAlign2[3], offsetB = _useAlign2[4], arrowX = _useAlign2[5], arrowY = _useAlign2[6], scaleX = _useAlign2[7], scaleY = _useAlign2[8], alignInfo = _useAlign2[9], onAlign = _useAlign2[10];
      var _useAction = useAction(mobile, action, showAction, hideAction), _useAction2 = _slicedToArray(_useAction, 2), showActions = _useAction2[0], hideActions = _useAction2[1];
      var clickToShow = showActions.has("click");
      var clickToHide = hideActions.has("click") || hideActions.has("contextMenu");
      var triggerAlign = useEvent(function() {
        if (!inMotion) {
          onAlign();
        }
      });
      var onScroll = function onScroll2() {
        if (openRef.current && alignPoint && clickToHide) {
          triggerOpen(false);
        }
      };
      useWatch(mergedOpen, targetEle, popupEle, triggerAlign, onScroll);
      useLayoutEffect(function() {
        triggerAlign();
      }, [mousePos, popupPlacement]);
      useLayoutEffect(function() {
        if (mergedOpen && !(builtinPlacements !== null && builtinPlacements !== void 0 && builtinPlacements[popupPlacement])) {
          triggerAlign();
        }
      }, [JSON.stringify(popupAlign)]);
      var alignedClassName = React__namespace.useMemo(function() {
        var baseClassName = getAlignPopupClassName(builtinPlacements, prefixCls, alignInfo, alignPoint);
        return cx(baseClassName, getPopupClassNameFromAlign === null || getPopupClassNameFromAlign === void 0 ? void 0 : getPopupClassNameFromAlign(alignInfo));
      }, [alignInfo, getPopupClassNameFromAlign, builtinPlacements, prefixCls, alignPoint]);
      React__namespace.useImperativeHandle(ref, function() {
        return {
          nativeElement: externalForwardRef.current,
          popupElement: externalPopupRef.current,
          forceAlign: triggerAlign
        };
      });
      var _React$useState15 = React__namespace.useState(0), _React$useState16 = _slicedToArray(_React$useState15, 2), targetWidth = _React$useState16[0], setTargetWidth = _React$useState16[1];
      var _React$useState17 = React__namespace.useState(0), _React$useState18 = _slicedToArray(_React$useState17, 2), targetHeight = _React$useState18[0], setTargetHeight = _React$useState18[1];
      var syncTargetSize = function syncTargetSize2() {
        if (stretch && targetEle) {
          var rect = targetEle.getBoundingClientRect();
          setTargetWidth(rect.width);
          setTargetHeight(rect.height);
        }
      };
      var onTargetResize = function onTargetResize2() {
        syncTargetSize();
        triggerAlign();
      };
      var onVisibleChanged = function onVisibleChanged2(visible) {
        setInMotion(false);
        onAlign();
        afterPopupVisibleChange === null || afterPopupVisibleChange === void 0 || afterPopupVisibleChange(visible);
      };
      var onPrepare = function onPrepare2() {
        return new Promise(function(resolve) {
          syncTargetSize();
          setMotionPrepareResolve(function() {
            return resolve;
          });
        });
      };
      useLayoutEffect(function() {
        if (motionPrepareResolve) {
          onAlign();
          motionPrepareResolve();
          setMotionPrepareResolve(null);
        }
      }, [motionPrepareResolve]);
      function wrapperAction(eventName, nextOpen, delay, preEvent) {
        cloneProps[eventName] = function(event) {
          var _originChildProps$eve;
          preEvent === null || preEvent === void 0 || preEvent(event);
          triggerOpen(nextOpen, delay);
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          (_originChildProps$eve = originChildProps[eventName]) === null || _originChildProps$eve === void 0 || _originChildProps$eve.call.apply(_originChildProps$eve, [originChildProps, event].concat(args));
        };
      }
      if (clickToShow || clickToHide) {
        cloneProps.onClick = function(event) {
          var _originChildProps$onC;
          if (openRef.current && clickToHide) {
            triggerOpen(false);
          } else if (!openRef.current && clickToShow) {
            setMousePosByEvent(event);
            triggerOpen(true);
          }
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          (_originChildProps$onC = originChildProps.onClick) === null || _originChildProps$onC === void 0 || _originChildProps$onC.call.apply(_originChildProps$onC, [originChildProps, event].concat(args));
        };
      }
      useWinClick(mergedOpen, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen);
      var hoverToShow = showActions.has("hover");
      var hoverToHide = hideActions.has("hover");
      var onPopupMouseEnter;
      var onPopupMouseLeave;
      if (hoverToShow) {
        wrapperAction("onMouseEnter", true, mouseEnterDelay, function(event) {
          setMousePosByEvent(event);
        });
        wrapperAction("onPointerEnter", true, mouseEnterDelay, function(event) {
          setMousePosByEvent(event);
        });
        onPopupMouseEnter = function onPopupMouseEnter2(event) {
          if ((mergedOpen || inMotion) && popupEle !== null && popupEle !== void 0 && popupEle.contains(event.target)) {
            triggerOpen(true, mouseEnterDelay);
          }
        };
        if (alignPoint) {
          cloneProps.onMouseMove = function(event) {
            var _originChildProps$onM;
            (_originChildProps$onM = originChildProps.onMouseMove) === null || _originChildProps$onM === void 0 || _originChildProps$onM.call(originChildProps, event);
          };
        }
      }
      if (hoverToHide) {
        wrapperAction("onMouseLeave", false, mouseLeaveDelay);
        wrapperAction("onPointerLeave", false, mouseLeaveDelay);
        onPopupMouseLeave = function onPopupMouseLeave2() {
          triggerOpen(false, mouseLeaveDelay);
        };
      }
      if (showActions.has("focus")) {
        wrapperAction("onFocus", true, focusDelay);
      }
      if (hideActions.has("focus")) {
        wrapperAction("onBlur", false, blurDelay);
      }
      if (showActions.has("contextMenu")) {
        cloneProps.onContextMenu = function(event) {
          var _originChildProps$onC2;
          if (openRef.current && hideActions.has("contextMenu")) {
            triggerOpen(false);
          } else {
            setMousePosByEvent(event);
            triggerOpen(true);
          }
          event.preventDefault();
          for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
          }
          (_originChildProps$onC2 = originChildProps.onContextMenu) === null || _originChildProps$onC2 === void 0 || _originChildProps$onC2.call.apply(_originChildProps$onC2, [originChildProps, event].concat(args));
        };
      }
      if (className) {
        cloneProps.className = cx(originChildProps.className, className);
      }
      var mergedChildrenProps = _objectSpread2(_objectSpread2({}, originChildProps), cloneProps);
      var passedProps = {};
      var passedEventList = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
      passedEventList.forEach(function(eventName) {
        if (restProps[eventName]) {
          passedProps[eventName] = function() {
            var _mergedChildrenProps$;
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }
            (_mergedChildrenProps$ = mergedChildrenProps[eventName]) === null || _mergedChildrenProps$ === void 0 || _mergedChildrenProps$.call.apply(_mergedChildrenProps$, [mergedChildrenProps].concat(args));
            restProps[eventName].apply(restProps, args);
          };
        }
      });
      var triggerNode = /* @__PURE__ */ React__namespace.cloneElement(child, _objectSpread2(_objectSpread2({}, mergedChildrenProps), passedProps));
      var arrowPos = {
        x: arrowX,
        y: arrowY
      };
      var innerArrow = arrow ? _objectSpread2({}, arrow !== true ? arrow : {}) : null;
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(RefResizeObserver, {
        disabled: !mergedOpen,
        ref: setTargetRef,
        onResize: onTargetResize
      }, /* @__PURE__ */ React__namespace.createElement(TriggerWrapper, {
        getTriggerDOMNode
      }, triggerNode)), /* @__PURE__ */ React__namespace.createElement(TriggerContext.Provider, {
        value: context
      }, /* @__PURE__ */ React__namespace.createElement(Popup$1, {
        portal: PortalComponent,
        ref: setPopupRef,
        prefixCls,
        popup,
        className: cx(popupClassName, alignedClassName),
        style: popupStyle,
        target: targetEle,
        onMouseEnter: onPopupMouseEnter,
        onMouseLeave: onPopupMouseLeave,
        onPointerEnter: onPopupMouseEnter,
        zIndex,
        open: mergedOpen,
        keepDom: inMotion,
        fresh,
        onClick: onPopupClick,
        mask,
        motion: mergePopupMotion,
        maskMotion: mergeMaskMotion,
        onVisibleChanged,
        onPrepare,
        forceRender,
        autoDestroy: mergedAutoDestroy,
        getPopupContainer,
        align: alignInfo,
        arrow: innerArrow,
        arrowPos,
        ready,
        offsetX,
        offsetY,
        offsetR,
        offsetB,
        onAlign: triggerAlign,
        stretch,
        targetWidth: targetWidth / scaleX,
        targetHeight: targetHeight / scaleY
      })));
    });
    return Trigger2;
  }
  const Trigger = generateTrigger(Portal);
  function getStatusClassNames(prefixCls, status, hasFeedback) {
    return cx({
      [`${prefixCls}-status-success`]: status === "success",
      [`${prefixCls}-status-warning`]: status === "warning",
      [`${prefixCls}-status-error`]: status === "error",
      [`${prefixCls}-status-validating`]: status === "validating",
      [`${prefixCls}-has-feedback`]: hasFeedback
    });
  }
  const getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;
  const Empty$1 = () => {
    const [, token2] = useToken$1();
    const bgColor = new TinyColor(token2.colorBgBase);
    const themeStyle = bgColor.toHsl().l < 0.5 ? {
      opacity: 0.65
    } : {};
    return /* @__PURE__ */ React__namespace.createElement("svg", {
      style: themeStyle,
      width: "184",
      height: "152",
      viewBox: "0 0 184 152",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React__namespace.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /* @__PURE__ */ React__namespace.createElement("g", {
      transform: "translate(24 31.67)"
    }, /* @__PURE__ */ React__namespace.createElement("ellipse", {
      fillOpacity: ".8",
      fill: "#F5F5F7",
      cx: "67.797",
      cy: "106.89",
      rx: "67.797",
      ry: "12.668"
    }), /* @__PURE__ */ React__namespace.createElement("path", {
      d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      fill: "#AEB8C2"
    }), /* @__PURE__ */ React__namespace.createElement("path", {
      d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      fill: "url(#linearGradient-1)",
      transform: "translate(13.56)"
    }), /* @__PURE__ */ React__namespace.createElement("path", {
      d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      fill: "#F5F5F7"
    }), /* @__PURE__ */ React__namespace.createElement("path", {
      d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      fill: "#DCE0E6"
    })), /* @__PURE__ */ React__namespace.createElement("path", {
      d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      fill: "#DCE0E6"
    }), /* @__PURE__ */ React__namespace.createElement("g", {
      transform: "translate(149.65 15.383)",
      fill: "#FFF"
    }, /* @__PURE__ */ React__namespace.createElement("ellipse", {
      cx: "20.654",
      cy: "3.167",
      rx: "2.849",
      ry: "2.815"
    }), /* @__PURE__ */ React__namespace.createElement("path", {
      d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }))));
  };
  const Simple = () => {
    const [, token2] = useToken$1();
    const {
      colorFill,
      colorFillTertiary,
      colorFillQuaternary,
      colorBgContainer
    } = token2;
    const {
      borderColor,
      shadowColor,
      contentColor
    } = React.useMemo(() => ({
      borderColor: new TinyColor(colorFill).onBackground(colorBgContainer).toHexShortString(),
      shadowColor: new TinyColor(colorFillTertiary).onBackground(colorBgContainer).toHexShortString(),
      contentColor: new TinyColor(colorFillQuaternary).onBackground(colorBgContainer).toHexShortString()
    }), [colorFill, colorFillTertiary, colorFillQuaternary, colorBgContainer]);
    return /* @__PURE__ */ React__namespace.createElement("svg", {
      width: "64",
      height: "41",
      viewBox: "0 0 64 41",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React__namespace.createElement("g", {
      transform: "translate(0 1)",
      fill: "none",
      fillRule: "evenodd"
    }, /* @__PURE__ */ React__namespace.createElement("ellipse", {
      fill: shadowColor,
      cx: "32",
      cy: "33",
      rx: "32",
      ry: "7"
    }), /* @__PURE__ */ React__namespace.createElement("g", {
      fillRule: "nonzero",
      stroke: borderColor
    }, /* @__PURE__ */ React__namespace.createElement("path", {
      d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }), /* @__PURE__ */ React__namespace.createElement("path", {
      d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      fill: contentColor
    }))));
  };
  const genSharedEmptyStyle = (token2) => {
    const {
      componentCls,
      margin,
      marginXS,
      marginXL,
      fontSize,
      lineHeight
    } = token2;
    return {
      [componentCls]: {
        marginInline: marginXS,
        fontSize,
        lineHeight,
        textAlign: "center",
        // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
        [`${componentCls}-image`]: {
          height: token2.emptyImgHeight,
          marginBottom: marginXS,
          opacity: token2.opacityImage,
          img: {
            height: "100%"
          },
          svg: {
            maxWidth: "100%",
            height: "100%",
            margin: "auto"
          }
        },
        [`${componentCls}-description`]: {
          color: token2.colorText
        },
        // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
        [`${componentCls}-footer`]: {
          marginTop: margin
        },
        "&-normal": {
          marginBlock: marginXL,
          color: token2.colorTextDescription,
          [`${componentCls}-description`]: {
            color: token2.colorTextDescription
          },
          [`${componentCls}-image`]: {
            height: token2.emptyImgHeightMD
          }
        },
        "&-small": {
          marginBlock: marginXS,
          color: token2.colorTextDescription,
          [`${componentCls}-image`]: {
            height: token2.emptyImgHeightSM
          }
        }
      }
    };
  };
  const useStyle$5 = genStyleHooks("Empty", (token2) => {
    const {
      componentCls,
      controlHeightLG,
      calc
    } = token2;
    const emptyToken = merge$1(token2, {
      emptyImgCls: `${componentCls}-img`,
      emptyImgHeight: calc(controlHeightLG).mul(2.5).equal(),
      emptyImgHeightMD: controlHeightLG,
      emptyImgHeightSM: calc(controlHeightLG).mul(0.875).equal()
    });
    return [genSharedEmptyStyle(emptyToken)];
  });
  var __rest$b = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  const defaultEmptyImg = /* @__PURE__ */ React__namespace.createElement(Empty$1, null);
  const simpleEmptyImg = /* @__PURE__ */ React__namespace.createElement(Simple, null);
  const Empty = (_a) => {
    var {
      className,
      rootClassName,
      prefixCls: customizePrefixCls,
      image = defaultEmptyImg,
      description,
      children,
      imageStyle,
      style: style2
    } = _a, restProps = __rest$b(_a, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style"]);
    const {
      getPrefixCls,
      direction,
      empty
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("empty", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$5(prefixCls);
    const [locale2] = useLocale("Empty");
    const des = typeof description !== "undefined" ? description : locale2 === null || locale2 === void 0 ? void 0 : locale2.description;
    const alt = typeof des === "string" ? des : "empty";
    let imageNode = null;
    if (typeof image === "string") {
      imageNode = /* @__PURE__ */ React__namespace.createElement("img", {
        alt,
        src: image
      });
    } else {
      imageNode = image;
    }
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", Object.assign({
      className: cx(hashId, cssVarCls, prefixCls, empty === null || empty === void 0 ? void 0 : empty.className, {
        [`${prefixCls}-normal`]: image === simpleEmptyImg,
        [`${prefixCls}-rtl`]: direction === "rtl"
      }, className, rootClassName),
      style: Object.assign(Object.assign({}, empty === null || empty === void 0 ? void 0 : empty.style), style2)
    }, restProps), /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${prefixCls}-image`,
      style: imageStyle
    }, imageNode), des && /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${prefixCls}-description`
    }, des), children && /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${prefixCls}-footer`
    }, children)));
  };
  Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
  Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
  const Variants = ["outlined", "borderless", "filled"];
  const useVariant = function(variant) {
    let legacyBordered = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
    const ctxVariant = React.useContext(VariantContext);
    let mergedVariant;
    if (typeof variant !== "undefined") {
      mergedVariant = variant;
    } else if (legacyBordered === false) {
      mergedVariant = "borderless";
    } else {
      mergedVariant = ctxVariant !== null && ctxVariant !== void 0 ? ctxVariant : "outlined";
    }
    const enableVariantCls = Variants.includes(mergedVariant);
    return [mergedVariant, enableVariantCls];
  };
  var SearchOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, "name": "search", "theme": "outlined" };
  var SearchOutlined = function SearchOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: SearchOutlined$1
    }));
  };
  var RefIcon$2 = /* @__PURE__ */ React__namespace.forwardRef(SearchOutlined);
  function Popup(props) {
    var children = props.children, prefixCls = props.prefixCls, id = props.id, overlayInnerStyle = props.overlayInnerStyle, className = props.className, style2 = props.style;
    return /* @__PURE__ */ React__namespace.createElement("div", {
      className: cx("".concat(prefixCls, "-content"), className),
      style: style2
    }, /* @__PURE__ */ React__namespace.createElement("div", {
      className: "".concat(prefixCls, "-inner"),
      id,
      role: "tooltip",
      style: overlayInnerStyle
    }, typeof children === "function" ? children() : children));
  }
  var autoAdjustOverflowTopBottom = {
    shiftX: 64,
    adjustY: 1
  };
  var autoAdjustOverflowLeftRight = {
    adjustX: 1,
    shiftY: true
  };
  var targetOffset = [0, 0];
  var placements = {
    left: {
      points: ["cr", "cl"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [-4, 0],
      targetOffset
    },
    right: {
      points: ["cl", "cr"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [4, 0],
      targetOffset
    },
    top: {
      points: ["bc", "tc"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, -4],
      targetOffset
    },
    bottom: {
      points: ["tc", "bc"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, 4],
      targetOffset
    },
    topLeft: {
      points: ["bl", "tl"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, -4],
      targetOffset
    },
    leftTop: {
      points: ["tr", "tl"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [-4, 0],
      targetOffset
    },
    topRight: {
      points: ["br", "tr"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, -4],
      targetOffset
    },
    rightTop: {
      points: ["tl", "tr"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [4, 0],
      targetOffset
    },
    bottomRight: {
      points: ["tr", "br"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, 4],
      targetOffset
    },
    rightBottom: {
      points: ["bl", "br"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [4, 0],
      targetOffset
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, 4],
      targetOffset
    },
    leftBottom: {
      points: ["br", "bl"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [-4, 0],
      targetOffset
    }
  };
  var _excluded$6 = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"];
  var Tooltip$1 = function Tooltip(props, ref) {
    var overlayClassName = props.overlayClassName, _props$trigger = props.trigger, trigger = _props$trigger === void 0 ? ["hover"] : _props$trigger, _props$mouseEnterDela = props.mouseEnterDelay, mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela, _props$mouseLeaveDela = props.mouseLeaveDelay, mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela, overlayStyle = props.overlayStyle, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-tooltip" : _props$prefixCls, children = props.children, onVisibleChange = props.onVisibleChange, afterVisibleChange = props.afterVisibleChange, transitionName = props.transitionName, animation = props.animation, motion = props.motion, _props$placement = props.placement, placement = _props$placement === void 0 ? "right" : _props$placement, _props$align = props.align, align = _props$align === void 0 ? {} : _props$align, _props$destroyTooltip = props.destroyTooltipOnHide, destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip, defaultVisible = props.defaultVisible, getTooltipContainer = props.getTooltipContainer, overlayInnerStyle = props.overlayInnerStyle;
    props.arrowContent;
    var overlay = props.overlay, id = props.id, _props$showArrow = props.showArrow, showArrow = _props$showArrow === void 0 ? true : _props$showArrow, restProps = _objectWithoutProperties(props, _excluded$6);
    var triggerRef = React.useRef(null);
    React.useImperativeHandle(ref, function() {
      return triggerRef.current;
    });
    var extraProps = _objectSpread2({}, restProps);
    if ("visible" in props) {
      extraProps.popupVisible = props.visible;
    }
    var getPopupElement = function getPopupElement2() {
      return /* @__PURE__ */ React__namespace.createElement(Popup, {
        key: "content",
        prefixCls,
        id,
        overlayInnerStyle
      }, overlay);
    };
    return /* @__PURE__ */ React__namespace.createElement(Trigger, _extends({
      popupClassName: overlayClassName,
      prefixCls,
      popup: getPopupElement,
      action: trigger,
      builtinPlacements: placements,
      popupPlacement: placement,
      ref: triggerRef,
      popupAlign: align,
      getPopupContainer: getTooltipContainer,
      onPopupVisibleChange: onVisibleChange,
      afterPopupVisibleChange: afterVisibleChange,
      popupTransitionName: transitionName,
      popupAnimation: animation,
      popupMotion: motion,
      defaultPopupVisible: defaultVisible,
      autoDestroy: destroyTooltipOnHide,
      mouseLeaveDelay,
      popupStyle: overlayStyle,
      mouseEnterDelay,
      arrow: showArrow
    }, extraProps), children);
  };
  const Tooltip$2 = /* @__PURE__ */ React.forwardRef(Tooltip$1);
  function getArrowToken(token2) {
    const {
      sizePopupArrow,
      borderRadiusXS,
      borderRadiusOuter
    } = token2;
    const unitWidth = sizePopupArrow / 2;
    const ax = 0;
    const ay = unitWidth;
    const bx = borderRadiusOuter * 1 / Math.sqrt(2);
    const by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2));
    const cx2 = unitWidth - borderRadiusXS * (1 / Math.sqrt(2));
    const cy = borderRadiusOuter * (Math.sqrt(2) - 1) + borderRadiusXS * (1 / Math.sqrt(2));
    const dx = 2 * unitWidth - cx2;
    const dy = cy;
    const ex = 2 * unitWidth - bx;
    const ey = by;
    const fx = 2 * unitWidth - ax;
    const fy = ay;
    const shadowWidth = unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2);
    const polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1);
    const arrowPolygon = `polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`;
    const arrowPath = `path('M ${ax} ${ay} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${bx} ${by} L ${cx2} ${cy} A ${borderRadiusXS} ${borderRadiusXS} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${fx} ${fy} Z')`;
    return {
      arrowShadowWidth: shadowWidth,
      arrowPath,
      arrowPolygon
    };
  }
  const genRoundedArrow = (token2, bgColor, boxShadow) => {
    const {
      sizePopupArrow,
      arrowPolygon,
      arrowPath,
      arrowShadowWidth,
      borderRadiusXS,
      calc
    } = token2;
    return {
      pointerEvents: "none",
      width: sizePopupArrow,
      height: sizePopupArrow,
      overflow: "hidden",
      "&::before": {
        position: "absolute",
        bottom: 0,
        insetInlineStart: 0,
        width: sizePopupArrow,
        height: calc(sizePopupArrow).div(2).equal(),
        background: bgColor,
        clipPath: {
          _multi_value_: true,
          value: [arrowPolygon, arrowPath]
        },
        content: '""'
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: arrowShadowWidth,
        height: arrowShadowWidth,
        bottom: 0,
        insetInline: 0,
        margin: "auto",
        borderRadius: {
          _skip_check_: true,
          value: `0 0 ${unit$1(borderRadiusXS)} 0`
        },
        transform: "translateY(50%) rotate(-135deg)",
        boxShadow,
        zIndex: 0,
        background: "transparent"
      }
    };
  };
  const MAX_VERTICAL_CONTENT_RADIUS = 8;
  function getArrowOffsetToken(options) {
    const {
      contentRadius,
      limitVerticalRadius
    } = options;
    const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
    const arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
    return {
      arrowOffsetHorizontal: arrowOffset,
      arrowOffsetVertical
    };
  }
  function isInject(valid, code) {
    if (!valid) {
      return {};
    }
    return code;
  }
  function getArrowStyle(token2, colorBg, options) {
    const {
      componentCls,
      boxShadowPopoverArrow,
      arrowOffsetVertical,
      arrowOffsetHorizontal
    } = token2;
    const {
      arrowDistance = 0,
      arrowPlacement = {
        left: true,
        right: true,
        top: true,
        bottom: true
      }
    } = {};
    return {
      [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({
        // ============================ Basic ============================
        [`${componentCls}-arrow`]: [Object.assign(Object.assign({
          position: "absolute",
          zIndex: 1,
          display: "block"
        }, genRoundedArrow(token2, colorBg, boxShadowPopoverArrow)), {
          "&:before": {
            background: colorBg
          }
        })]
      }, isInject(!!arrowPlacement.top, {
        [[`&-placement-top > ${componentCls}-arrow`, `&-placement-topLeft > ${componentCls}-arrow`, `&-placement-topRight > ${componentCls}-arrow`].join(",")]: {
          bottom: arrowDistance,
          transform: "translateY(100%) rotate(180deg)"
        },
        [`&-placement-top > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateX(-50%) translateY(100%) rotate(180deg)"
        },
        [`&-placement-topLeft > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        },
        [`&-placement-topRight > ${componentCls}-arrow`]: {
          right: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      })), isInject(!!arrowPlacement.bottom, {
        [[`&-placement-bottom > ${componentCls}-arrow`, `&-placement-bottomLeft > ${componentCls}-arrow`, `&-placement-bottomRight > ${componentCls}-arrow`].join(",")]: {
          top: arrowDistance,
          transform: `translateY(-100%)`
        },
        [`&-placement-bottom > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: "50%"
          },
          transform: `translateX(-50%) translateY(-100%)`
        },
        [`&-placement-bottomLeft > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        },
        [`&-placement-bottomRight > ${componentCls}-arrow`]: {
          right: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      })), isInject(!!arrowPlacement.left, {
        [[`&-placement-left > ${componentCls}-arrow`, `&-placement-leftTop > ${componentCls}-arrow`, `&-placement-leftBottom > ${componentCls}-arrow`].join(",")]: {
          right: {
            _skip_check_: true,
            value: arrowDistance
          },
          transform: "translateX(100%) rotate(90deg)"
        },
        [`&-placement-left > ${componentCls}-arrow`]: {
          top: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateY(-50%) translateX(100%) rotate(90deg)"
        },
        [`&-placement-leftTop > ${componentCls}-arrow`]: {
          top: arrowOffsetVertical
        },
        [`&-placement-leftBottom > ${componentCls}-arrow`]: {
          bottom: arrowOffsetVertical
        }
      })), isInject(!!arrowPlacement.right, {
        [[`&-placement-right > ${componentCls}-arrow`, `&-placement-rightTop > ${componentCls}-arrow`, `&-placement-rightBottom > ${componentCls}-arrow`].join(",")]: {
          left: {
            _skip_check_: true,
            value: arrowDistance
          },
          transform: "translateX(-100%) rotate(-90deg)"
        },
        [`&-placement-right > ${componentCls}-arrow`]: {
          top: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
        },
        [`&-placement-rightTop > ${componentCls}-arrow`]: {
          top: arrowOffsetVertical
        },
        [`&-placement-rightBottom > ${componentCls}-arrow`]: {
          bottom: arrowOffsetVertical
        }
      }))
    };
  }
  function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
    if (autoAdjustOverflow === false) {
      return {
        adjustX: false,
        adjustY: false
      };
    }
    const overflow = autoAdjustOverflow && typeof autoAdjustOverflow === "object" ? autoAdjustOverflow : {};
    const baseOverflow = {};
    switch (placement) {
      case "top":
      case "bottom":
        baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
        baseOverflow.shiftY = true;
        baseOverflow.adjustY = true;
        break;
      case "left":
      case "right":
        baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
        baseOverflow.shiftX = true;
        baseOverflow.adjustX = true;
        break;
    }
    const mergedOverflow = Object.assign(Object.assign({}, baseOverflow), overflow);
    if (!mergedOverflow.shiftX) {
      mergedOverflow.adjustX = true;
    }
    if (!mergedOverflow.shiftY) {
      mergedOverflow.adjustY = true;
    }
    return mergedOverflow;
  }
  const PlacementAlignMap = {
    left: {
      points: ["cr", "cl"]
    },
    right: {
      points: ["cl", "cr"]
    },
    top: {
      points: ["bc", "tc"]
    },
    bottom: {
      points: ["tc", "bc"]
    },
    topLeft: {
      points: ["bl", "tl"]
    },
    leftTop: {
      points: ["tr", "tl"]
    },
    topRight: {
      points: ["br", "tr"]
    },
    rightTop: {
      points: ["tl", "tr"]
    },
    bottomRight: {
      points: ["tr", "br"]
    },
    rightBottom: {
      points: ["bl", "br"]
    },
    bottomLeft: {
      points: ["tl", "bl"]
    },
    leftBottom: {
      points: ["br", "bl"]
    }
  };
  const ArrowCenterPlacementAlignMap = {
    topLeft: {
      points: ["bl", "tc"]
    },
    leftTop: {
      points: ["tr", "cl"]
    },
    topRight: {
      points: ["br", "tc"]
    },
    rightTop: {
      points: ["tl", "cr"]
    },
    bottomRight: {
      points: ["tr", "bc"]
    },
    rightBottom: {
      points: ["bl", "cr"]
    },
    bottomLeft: {
      points: ["tl", "bc"]
    },
    leftBottom: {
      points: ["br", "cl"]
    }
  };
  const DisableAutoArrowList = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
  function getPlacements(config) {
    const {
      arrowWidth,
      autoAdjustOverflow,
      arrowPointAtCenter,
      offset: offset2,
      borderRadius,
      visibleFirst
    } = config;
    const halfArrowWidth = arrowWidth / 2;
    const placementMap = {};
    Object.keys(PlacementAlignMap).forEach((key) => {
      const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
      const placementInfo = Object.assign(Object.assign({}, template), {
        offset: [0, 0],
        dynamicInset: true
      });
      placementMap[key] = placementInfo;
      if (DisableAutoArrowList.has(key)) {
        placementInfo.autoArrow = false;
      }
      switch (key) {
        case "top":
        case "topLeft":
        case "topRight":
          placementInfo.offset[1] = -halfArrowWidth - offset2;
          break;
        case "bottom":
        case "bottomLeft":
        case "bottomRight":
          placementInfo.offset[1] = halfArrowWidth + offset2;
          break;
        case "left":
        case "leftTop":
        case "leftBottom":
          placementInfo.offset[0] = -halfArrowWidth - offset2;
          break;
        case "right":
        case "rightTop":
        case "rightBottom":
          placementInfo.offset[0] = halfArrowWidth + offset2;
          break;
      }
      const arrowOffset = getArrowOffsetToken({
        contentRadius: borderRadius,
        limitVerticalRadius: true
      });
      if (arrowPointAtCenter) {
        switch (key) {
          case "topLeft":
          case "bottomLeft":
            placementInfo.offset[0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
            break;
          case "topRight":
          case "bottomRight":
            placementInfo.offset[0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
            break;
          case "leftTop":
          case "rightTop":
            placementInfo.offset[1] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
            break;
          case "leftBottom":
          case "rightBottom":
            placementInfo.offset[1] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
            break;
        }
      }
      placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
      if (visibleFirst) {
        placementInfo.htmlRegion = "visibleFirst";
      }
    });
    return placementMap;
  }
  const genTooltipStyle = (token2) => {
    const {
      componentCls,
      // ant-tooltip
      tooltipMaxWidth,
      tooltipColor,
      tooltipBg,
      tooltipBorderRadius,
      zIndexPopup,
      controlHeight,
      boxShadowSecondary,
      paddingSM,
      paddingXS
    } = token2;
    return [
      {
        [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token2)), {
          position: "absolute",
          zIndex: zIndexPopup,
          display: "block",
          width: "max-content",
          maxWidth: tooltipMaxWidth,
          visibility: "visible",
          transformOrigin: `var(--arrow-x, 50%) var(--arrow-y, 50%)`,
          "&-hidden": {
            display: "none"
          },
          "--antd-arrow-background-color": tooltipBg,
          // Wrapper for the tooltip content
          [`${componentCls}-inner`]: {
            minWidth: "1em",
            minHeight: controlHeight,
            padding: `${unit$1(token2.calc(paddingSM).div(2).equal())} ${unit$1(paddingXS)}`,
            color: tooltipColor,
            textAlign: "start",
            textDecoration: "none",
            wordWrap: "break-word",
            backgroundColor: tooltipBg,
            borderRadius: tooltipBorderRadius,
            boxShadow: boxShadowSecondary,
            boxSizing: "border-box"
          },
          // Limit left and right placement radius
          [[`&-placement-left`, `&-placement-leftTop`, `&-placement-leftBottom`, `&-placement-right`, `&-placement-rightTop`, `&-placement-rightBottom`].join(",")]: {
            [`${componentCls}-inner`]: {
              borderRadius: token2.min(tooltipBorderRadius, MAX_VERTICAL_CONTENT_RADIUS)
            }
          },
          [`${componentCls}-content`]: {
            position: "relative"
          }
        }), genPresetColor(token2, (colorKey, _ref7) => {
          let {
            darkColor
          } = _ref7;
          return {
            [`&${componentCls}-${colorKey}`]: {
              [`${componentCls}-inner`]: {
                backgroundColor: darkColor
              },
              [`${componentCls}-arrow`]: {
                "--antd-arrow-background-color": darkColor
              }
            }
          };
        })), {
          // RTL
          "&-rtl": {
            direction: "rtl"
          }
        })
      },
      // Arrow Style
      getArrowStyle(token2, "var(--antd-arrow-background-color)"),
      // Pure Render
      {
        [`${componentCls}-pure`]: {
          position: "relative",
          maxWidth: "none",
          margin: token2.sizePopupArrow
        }
      }
    ];
  };
  const prepareComponentToken$1 = (token2) => Object.assign(Object.assign({
    zIndexPopup: token2.zIndexPopupBase + 70
  }, getArrowOffsetToken({
    contentRadius: token2.borderRadius,
    limitVerticalRadius: true
  })), getArrowToken(merge$1(token2, {
    borderRadiusOuter: Math.min(token2.borderRadiusOuter, 4)
  })));
  const useStyle$4 = function(prefixCls) {
    let injectStyle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    const useStyle2 = genStyleHooks("Tooltip", (token2) => {
      const {
        borderRadius,
        colorTextLightSolid,
        colorBgSpotlight
      } = token2;
      const TooltipToken = merge$1(token2, {
        // default variables
        tooltipMaxWidth: 250,
        tooltipColor: colorTextLightSolid,
        tooltipBorderRadius: borderRadius,
        tooltipBg: colorBgSpotlight
      });
      return [genTooltipStyle(TooltipToken), initZoomMotion(token2, "zoom-big-fast")];
    }, prepareComponentToken$1, {
      resetStyle: false,
      // Popover use Tooltip as internal component. We do not need to handle this.
      injectStyle
    });
    return useStyle2(prefixCls);
  };
  const inverseColors = PresetColors.map((color) => `${color}-inverse`);
  function isPresetColor(color) {
    let includeInverse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (includeInverse) {
      return [].concat(_toConsumableArray(inverseColors), _toConsumableArray(PresetColors)).includes(color);
    }
    return PresetColors.includes(color);
  }
  function parseColor(prefixCls, color) {
    const isInternalColor = isPresetColor(color);
    const className = cx({
      [`${prefixCls}-${color}`]: color && isInternalColor
    });
    const overlayStyle = {};
    const arrowStyle = {};
    if (color && !isInternalColor) {
      overlayStyle.background = color;
      arrowStyle["--antd-arrow-background-color"] = color;
    }
    return {
      className,
      overlayStyle,
      arrowStyle
    };
  }
  const PurePanel$2 = (props) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      placement = "top",
      title,
      color,
      overlayInnerStyle
    } = props;
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$4(prefixCls);
    const colorInfo = parseColor(prefixCls, color);
    const arrowContentStyle = colorInfo.arrowStyle;
    const formattedOverlayInnerStyle = Object.assign(Object.assign({}, overlayInnerStyle), colorInfo.overlayStyle);
    const cls = cx(hashId, cssVarCls, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className, colorInfo.className);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", {
      className: cls,
      style: arrowContentStyle
    }, /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${prefixCls}-arrow`
    }), /* @__PURE__ */ React__namespace.createElement(Popup, Object.assign({}, props, {
      className: hashId,
      prefixCls,
      overlayInnerStyle: formattedOverlayInnerStyle
    }), title)));
  };
  var __rest$a = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  const InternalTooltip = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    var _a, _b;
    const {
      prefixCls: customizePrefixCls,
      openClassName,
      getTooltipContainer,
      overlayClassName,
      color,
      overlayInnerStyle,
      children,
      afterOpenChange,
      afterVisibleChange,
      destroyTooltipOnHide,
      arrow = true,
      title,
      overlay,
      builtinPlacements,
      arrowPointAtCenter = false,
      autoAdjustOverflow = true
    } = props;
    const mergedShowArrow = !!arrow;
    const [, token2] = useToken$1();
    const {
      getPopupContainer: getContextPopupContainer,
      getPrefixCls,
      direction
    } = React__namespace.useContext(ConfigContext);
    const warning3 = devUseWarning();
    const tooltipRef = React__namespace.useRef(null);
    const forceAlign = () => {
      var _a2;
      (_a2 = tooltipRef.current) === null || _a2 === void 0 ? void 0 : _a2.forceAlign();
    };
    React__namespace.useImperativeHandle(ref, () => {
      var _a2;
      return {
        forceAlign,
        forcePopupAlign: () => {
          warning3.deprecated(false, "forcePopupAlign", "forceAlign");
          forceAlign();
        },
        nativeElement: (_a2 = tooltipRef.current) === null || _a2 === void 0 ? void 0 : _a2.nativeElement
      };
    });
    const [open2, setOpen] = useMergedState(false, {
      value: (_a = props.open) !== null && _a !== void 0 ? _a : props.visible,
      defaultValue: (_b = props.defaultOpen) !== null && _b !== void 0 ? _b : props.defaultVisible
    });
    const noTitle = !title && !overlay && title !== 0;
    const onOpenChange = (vis) => {
      var _a2, _b2;
      setOpen(noTitle ? false : vis);
      if (!noTitle) {
        (_a2 = props.onOpenChange) === null || _a2 === void 0 ? void 0 : _a2.call(props, vis);
        (_b2 = props.onVisibleChange) === null || _b2 === void 0 ? void 0 : _b2.call(props, vis);
      }
    };
    const tooltipPlacements = React__namespace.useMemo(() => {
      var _a2, _b2;
      let mergedArrowPointAtCenter = arrowPointAtCenter;
      if (typeof arrow === "object") {
        mergedArrowPointAtCenter = (_b2 = (_a2 = arrow.pointAtCenter) !== null && _a2 !== void 0 ? _a2 : arrow.arrowPointAtCenter) !== null && _b2 !== void 0 ? _b2 : arrowPointAtCenter;
      }
      return builtinPlacements || getPlacements({
        arrowPointAtCenter: mergedArrowPointAtCenter,
        autoAdjustOverflow,
        arrowWidth: mergedShowArrow ? token2.sizePopupArrow : 0,
        borderRadius: token2.borderRadius,
        offset: token2.marginXXS,
        visibleFirst: true
      });
    }, [arrowPointAtCenter, arrow, builtinPlacements, token2]);
    const memoOverlay = React__namespace.useMemo(() => {
      if (title === 0) {
        return title;
      }
      return overlay || title || "";
    }, [overlay, title]);
    const memoOverlayWrapper = /* @__PURE__ */ React__namespace.createElement(NoCompactStyle, null, typeof memoOverlay === "function" ? memoOverlay() : memoOverlay);
    const {
      getPopupContainer,
      placement = "top",
      mouseEnterDelay = 0.1,
      mouseLeaveDelay = 0.1,
      overlayStyle,
      rootClassName
    } = props, otherProps = __rest$a(props, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]);
    const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const injectFromPopover = props["data-popover-inject"];
    let tempOpen = open2;
    if (!("open" in props) && !("visible" in props) && noTitle) {
      tempOpen = false;
    }
    const child = /* @__PURE__ */ React__namespace.isValidElement(children) && !isFragment(children) ? children : /* @__PURE__ */ React__namespace.createElement("span", null, children);
    const childProps = child.props;
    const childCls = !childProps.className || typeof childProps.className === "string" ? cx(childProps.className, openClassName || `${prefixCls}-open`) : childProps.className;
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$4(prefixCls, !injectFromPopover);
    const colorInfo = parseColor(prefixCls, color);
    const arrowContentStyle = colorInfo.arrowStyle;
    const formattedOverlayInnerStyle = Object.assign(Object.assign({}, overlayInnerStyle), colorInfo.overlayStyle);
    const customOverlayClassName = cx(overlayClassName, {
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, colorInfo.className, rootClassName, hashId, cssVarCls);
    const [zIndex, contextZIndex] = useZIndex("Tooltip", otherProps.zIndex);
    const content = /* @__PURE__ */ React__namespace.createElement(Tooltip$2, Object.assign({}, otherProps, {
      zIndex,
      showArrow: mergedShowArrow,
      placement,
      mouseEnterDelay,
      mouseLeaveDelay,
      prefixCls,
      overlayClassName: customOverlayClassName,
      overlayStyle: Object.assign(Object.assign({}, arrowContentStyle), overlayStyle),
      getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
      ref: tooltipRef,
      builtinPlacements: tooltipPlacements,
      overlay: memoOverlayWrapper,
      visible: tempOpen,
      onVisibleChange: onOpenChange,
      afterVisibleChange: afterOpenChange !== null && afterOpenChange !== void 0 ? afterOpenChange : afterVisibleChange,
      overlayInnerStyle: formattedOverlayInnerStyle,
      arrowContent: /* @__PURE__ */ React__namespace.createElement("span", {
        className: `${prefixCls}-arrow-content`
      }),
      motion: {
        motionName: getTransitionName(rootPrefixCls, "zoom-big-fast", props.transitionName),
        motionDeadline: 1e3
      },
      destroyTooltipOnHide: !!destroyTooltipOnHide
    }), tempOpen ? cloneElement(child, {
      className: childCls
    }) : child);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement(zIndexContext.Provider, {
      value: contextZIndex
    }, content));
  });
  const Tooltip2 = InternalTooltip;
  Tooltip2._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$2;
  var _excluded$5 = ["prefixCls", "className", "style", "checked", "disabled", "defaultChecked", "type", "title", "onChange"];
  var Checkbox$2 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-checkbox" : _props$prefixCls, className = props.className, style2 = props.style, checked = props.checked, disabled = props.disabled, _props$defaultChecked = props.defaultChecked, defaultChecked = _props$defaultChecked === void 0 ? false : _props$defaultChecked, _props$type = props.type, type4 = _props$type === void 0 ? "checkbox" : _props$type, title = props.title, onChange = props.onChange, inputProps = _objectWithoutProperties(props, _excluded$5);
    var inputRef = React.useRef(null);
    var holderRef = React.useRef(null);
    var _useMergedState = useMergedState(defaultChecked, {
      value: checked
    }), _useMergedState2 = _slicedToArray(_useMergedState, 2), rawValue = _useMergedState2[0], setRawValue = _useMergedState2[1];
    React.useImperativeHandle(ref, function() {
      return {
        focus: function focus(options) {
          var _inputRef$current;
          (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus(options);
        },
        blur: function blur() {
          var _inputRef$current2;
          (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.blur();
        },
        input: inputRef.current,
        nativeElement: holderRef.current
      };
    });
    var classString = cx(prefixCls, className, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-checked"), rawValue), "".concat(prefixCls, "-disabled"), disabled));
    var handleChange = function handleChange2(e2) {
      if (disabled) {
        return;
      }
      if (!("checked" in props)) {
        setRawValue(e2.target.checked);
      }
      onChange === null || onChange === void 0 || onChange({
        target: _objectSpread2(_objectSpread2({}, props), {}, {
          type: type4,
          checked: e2.target.checked
        }),
        stopPropagation: function stopPropagation() {
          e2.stopPropagation();
        },
        preventDefault: function preventDefault() {
          e2.preventDefault();
        },
        nativeEvent: e2.nativeEvent
      });
    };
    return /* @__PURE__ */ React__namespace.createElement("span", {
      className: classString,
      title,
      style: style2,
      ref: holderRef
    }, /* @__PURE__ */ React__namespace.createElement("input", _extends({}, inputProps, {
      className: "".concat(prefixCls, "-input"),
      ref: inputRef,
      onChange: handleChange,
      disabled,
      checked: !!rawValue,
      type: type4
    })), /* @__PURE__ */ React__namespace.createElement("span", {
      className: "".concat(prefixCls, "-inner")
    }));
  });
  function initInputToken(token2) {
    return merge$1(token2, {
      inputAffixPadding: token2.paddingXXS
    });
  }
  const initComponentToken = (token2) => {
    const {
      controlHeight,
      fontSize,
      lineHeight,
      lineWidth,
      controlHeightSM,
      controlHeightLG,
      fontSizeLG,
      lineHeightLG,
      paddingSM,
      controlPaddingHorizontalSM,
      controlPaddingHorizontal,
      colorFillAlter,
      colorPrimaryHover,
      colorPrimary: colorPrimary2,
      controlOutlineWidth,
      controlOutline,
      colorErrorOutline,
      colorWarningOutline,
      colorBgContainer
    } = token2;
    return {
      paddingBlock: Math.max(Math.round((controlHeight - fontSize * lineHeight) / 2 * 10) / 10 - lineWidth, 0),
      paddingBlockSM: Math.max(Math.round((controlHeightSM - fontSize * lineHeight) / 2 * 10) / 10 - lineWidth, 0),
      paddingBlockLG: Math.ceil((controlHeightLG - fontSizeLG * lineHeightLG) / 2 * 10) / 10 - lineWidth,
      paddingInline: paddingSM - lineWidth,
      paddingInlineSM: controlPaddingHorizontalSM - lineWidth,
      paddingInlineLG: controlPaddingHorizontal - lineWidth,
      addonBg: colorFillAlter,
      activeBorderColor: colorPrimary2,
      hoverBorderColor: colorPrimaryHover,
      activeShadow: `0 0 0 ${controlOutlineWidth}px ${controlOutline}`,
      errorActiveShadow: `0 0 0 ${controlOutlineWidth}px ${colorErrorOutline}`,
      warningActiveShadow: `0 0 0 ${controlOutlineWidth}px ${colorWarningOutline}`,
      hoverBg: colorBgContainer,
      activeBg: colorBgContainer,
      inputFontSize: fontSize,
      inputFontSizeLG: fontSizeLG,
      inputFontSizeSM: fontSize
    };
  };
  const genHoverStyle = (token2) => ({
    borderColor: token2.hoverBorderColor,
    backgroundColor: token2.hoverBg
  });
  const genDisabledStyle = (token2) => ({
    color: token2.colorTextDisabled,
    backgroundColor: token2.colorBgContainerDisabled,
    borderColor: token2.colorBorder,
    boxShadow: "none",
    cursor: "not-allowed",
    opacity: 1,
    [`input[disabled], textarea[disabled]`]: {
      cursor: "not-allowed"
    },
    "&:hover:not([disabled])": Object.assign({}, genHoverStyle(merge$1(token2, {
      hoverBorderColor: token2.colorBorder,
      hoverBg: token2.colorBgContainerDisabled
    })))
  });
  const genBaseOutlinedStyle = (token2, options) => ({
    background: token2.colorBgContainer,
    borderWidth: token2.lineWidth,
    borderStyle: token2.lineType,
    borderColor: options.borderColor,
    "&:hover": {
      borderColor: options.hoverBorderColor,
      backgroundColor: token2.hoverBg
    },
    "&:focus, &:focus-within": {
      borderColor: options.activeBorderColor,
      boxShadow: options.activeShadow,
      outline: 0,
      backgroundColor: token2.activeBg
    }
  });
  const genOutlinedStatusStyle = (token2, options) => ({
    [`&${token2.componentCls}-status-${options.status}:not(${token2.componentCls}-disabled)`]: Object.assign(Object.assign({}, genBaseOutlinedStyle(token2, options)), {
      [`${token2.componentCls}-prefix, ${token2.componentCls}-suffix`]: {
        color: options.affixColor
      }
    }),
    [`&${token2.componentCls}-status-${options.status}${token2.componentCls}-disabled`]: {
      borderColor: options.borderColor
    }
  });
  const genOutlinedStyle = (token2, extraStyles) => ({
    "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseOutlinedStyle(token2, {
      borderColor: token2.colorBorder,
      hoverBorderColor: token2.hoverBorderColor,
      activeBorderColor: token2.activeBorderColor,
      activeShadow: token2.activeShadow
    })), {
      [`&${token2.componentCls}-disabled, &[disabled]`]: Object.assign({}, genDisabledStyle(token2))
    }), genOutlinedStatusStyle(token2, {
      status: "error",
      borderColor: token2.colorError,
      hoverBorderColor: token2.colorErrorBorderHover,
      activeBorderColor: token2.colorError,
      activeShadow: token2.errorActiveShadow,
      affixColor: token2.colorError
    })), genOutlinedStatusStyle(token2, {
      status: "warning",
      borderColor: token2.colorWarning,
      hoverBorderColor: token2.colorWarningBorderHover,
      activeBorderColor: token2.colorWarning,
      activeShadow: token2.warningActiveShadow,
      affixColor: token2.colorWarning
    })), extraStyles)
  });
  const genOutlinedGroupStatusStyle = (token2, options) => ({
    [`&${token2.componentCls}-group-wrapper-status-${options.status}`]: {
      [`${token2.componentCls}-group-addon`]: {
        borderColor: options.addonBorderColor,
        color: options.addonColor
      }
    }
  });
  const genOutlinedGroupStyle = (token2) => ({
    "&-outlined": Object.assign(Object.assign(Object.assign({
      [`${token2.componentCls}-group`]: {
        "&-addon": {
          background: token2.addonBg,
          border: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorBorder}`
        },
        "&-addon:first-child": {
          borderInlineEnd: 0
        },
        "&-addon:last-child": {
          borderInlineStart: 0
        }
      }
    }, genOutlinedGroupStatusStyle(token2, {
      status: "error",
      addonBorderColor: token2.colorError,
      addonColor: token2.colorErrorText
    })), genOutlinedGroupStatusStyle(token2, {
      status: "warning",
      addonBorderColor: token2.colorWarning,
      addonColor: token2.colorWarningText
    })), {
      [`&${token2.componentCls}-group-wrapper-disabled`]: {
        [`${token2.componentCls}-group-addon`]: Object.assign({}, genDisabledStyle(token2))
      }
    })
  });
  const genBorderlessStyle = (token2, extraStyles) => ({
    "&-borderless": Object.assign({
      background: "transparent",
      border: "none",
      "&:focus, &:focus-within": {
        outline: "none"
      },
      [`&${token2.componentCls}-disabled, &[disabled]`]: {
        color: token2.colorTextDisabled
      }
    }, extraStyles)
  });
  const genBaseFilledStyle = (token2, options) => ({
    background: options.bg,
    borderWidth: token2.lineWidth,
    borderStyle: token2.lineType,
    borderColor: "transparent",
    [`input&, & input, textarea&, & textarea`]: {
      color: options === null || options === void 0 ? void 0 : options.inputColor
    },
    "&:hover": {
      background: options.hoverBg
    },
    "&:focus, &:focus-within": {
      outline: 0,
      borderColor: options.activeBorderColor,
      backgroundColor: token2.activeBg
    }
  });
  const genFilledStatusStyle = (token2, options) => ({
    [`&${token2.componentCls}-status-${options.status}:not(${token2.componentCls}-disabled)`]: Object.assign(Object.assign({}, genBaseFilledStyle(token2, options)), {
      [`${token2.componentCls}-prefix, ${token2.componentCls}-suffix`]: {
        color: options.affixColor
      }
    })
  });
  const genFilledStyle = (token2, extraStyles) => ({
    "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseFilledStyle(token2, {
      bg: token2.colorFillTertiary,
      hoverBg: token2.colorFillSecondary,
      activeBorderColor: token2.colorPrimary
    })), {
      [`&${token2.componentCls}-disabled, &[disabled]`]: Object.assign({}, genDisabledStyle(token2))
    }), genFilledStatusStyle(token2, {
      status: "error",
      bg: token2.colorErrorBg,
      hoverBg: token2.colorErrorBgHover,
      activeBorderColor: token2.colorError,
      inputColor: token2.colorErrorText,
      affixColor: token2.colorError
    })), genFilledStatusStyle(token2, {
      status: "warning",
      bg: token2.colorWarningBg,
      hoverBg: token2.colorWarningBgHover,
      activeBorderColor: token2.colorWarning,
      inputColor: token2.colorWarningText,
      affixColor: token2.colorWarning
    })), extraStyles)
  });
  const genFilledGroupStatusStyle = (token2, options) => ({
    [`&${token2.componentCls}-group-wrapper-status-${options.status}`]: {
      [`${token2.componentCls}-group-addon`]: {
        background: options.addonBg,
        color: options.addonColor
      }
    }
  });
  const genFilledGroupStyle = (token2) => ({
    "&-filled": Object.assign(Object.assign(Object.assign({
      [`${token2.componentCls}-group`]: {
        "&-addon": {
          background: token2.colorFillTertiary
        },
        [`${token2.componentCls}-filled:not(:focus):not(:focus-within)`]: {
          "&:not(:first-child)": {
            borderInlineStart: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorSplit}`
          },
          "&:not(:last-child)": {
            borderInlineEnd: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorSplit}`
          }
        }
      }
    }, genFilledGroupStatusStyle(token2, {
      status: "error",
      addonBg: token2.colorErrorBg,
      addonColor: token2.colorErrorText
    })), genFilledGroupStatusStyle(token2, {
      status: "warning",
      addonBg: token2.colorWarningBg,
      addonColor: token2.colorWarningText
    })), {
      [`&${token2.componentCls}-group-wrapper-disabled`]: {
        [`${token2.componentCls}-group`]: {
          "&-addon": {
            background: token2.colorFillTertiary,
            color: token2.colorTextDisabled
          },
          "&-addon:first-child": {
            borderInlineStart: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorBorder}`,
            borderTop: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorBorder}`,
            borderBottom: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorBorder}`
          },
          "&-addon:last-child": {
            borderInlineEnd: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorBorder}`,
            borderTop: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorBorder}`,
            borderBottom: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorBorder}`
          }
        }
      }
    })
  });
  const genPlaceholderStyle = (color) => ({
    // Firefox
    "&::-moz-placeholder": {
      opacity: 1
    },
    "&::placeholder": {
      color,
      userSelect: "none"
      // https://github.com/ant-design/ant-design/pull/32639
    },
    "&:placeholder-shown": {
      textOverflow: "ellipsis"
    }
  });
  const genInputLargeStyle = (token2) => {
    const {
      paddingBlockLG,
      lineHeightLG,
      borderRadiusLG,
      paddingInlineLG
    } = token2;
    return {
      padding: `${unit$1(paddingBlockLG)} ${unit$1(paddingInlineLG)}`,
      fontSize: token2.inputFontSizeLG,
      lineHeight: lineHeightLG,
      borderRadius: borderRadiusLG
    };
  };
  const genInputSmallStyle = (token2) => ({
    padding: `${unit$1(token2.paddingBlockSM)} ${unit$1(token2.paddingInlineSM)}`,
    fontSize: token2.inputFontSizeSM,
    borderRadius: token2.borderRadiusSM
  });
  const genBasicInputStyle = (token2) => Object.assign(Object.assign({
    position: "relative",
    display: "inline-block",
    width: "100%",
    minWidth: 0,
    padding: `${unit$1(token2.paddingBlock)} ${unit$1(token2.paddingInline)}`,
    color: token2.colorText,
    fontSize: token2.inputFontSize,
    lineHeight: token2.lineHeight,
    borderRadius: token2.borderRadius,
    transition: `all ${token2.motionDurationMid}`
  }, genPlaceholderStyle(token2.colorTextPlaceholder)), {
    // Reset height for `textarea`s
    "textarea&": {
      maxWidth: "100%",
      // prevent textarea resize from coming out of its container
      height: "auto",
      minHeight: token2.controlHeight,
      lineHeight: token2.lineHeight,
      verticalAlign: "bottom",
      transition: `all ${token2.motionDurationSlow}, height 0s`,
      resize: "vertical"
    },
    // Size
    "&-lg": Object.assign({}, genInputLargeStyle(token2)),
    "&-sm": Object.assign({}, genInputSmallStyle(token2)),
    // RTL
    "&-rtl, &-textarea-rtl": {
      direction: "rtl"
    }
  });
  const genInputGroupStyle = (token2) => {
    const {
      componentCls,
      antCls
    } = token2;
    return {
      position: "relative",
      display: "table",
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
      // Undo padding and float of grid classes
      [`&[class*='col-']`]: {
        paddingInlineEnd: token2.paddingXS,
        "&:last-child": {
          paddingInlineEnd: 0
        }
      },
      // Sizing options
      [`&-lg ${componentCls}, &-lg > ${componentCls}-group-addon`]: Object.assign({}, genInputLargeStyle(token2)),
      [`&-sm ${componentCls}, &-sm > ${componentCls}-group-addon`]: Object.assign({}, genInputSmallStyle(token2)),
      // Fix https://github.com/ant-design/ant-design/issues/5754
      [`&-lg ${antCls}-select-single ${antCls}-select-selector`]: {
        height: token2.controlHeightLG
      },
      [`&-sm ${antCls}-select-single ${antCls}-select-selector`]: {
        height: token2.controlHeightSM
      },
      [`> ${componentCls}`]: {
        display: "table-cell",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      [`${componentCls}-group`]: {
        [`&-addon, &-wrap`]: {
          display: "table-cell",
          width: 1,
          whiteSpace: "nowrap",
          verticalAlign: "middle",
          "&:not(:first-child):not(:last-child)": {
            borderRadius: 0
          }
        },
        "&-wrap > *": {
          display: "block !important"
        },
        "&-addon": {
          position: "relative",
          padding: `0 ${unit$1(token2.paddingInline)}`,
          color: token2.colorText,
          fontWeight: "normal",
          fontSize: token2.inputFontSize,
          textAlign: "center",
          borderRadius: token2.borderRadius,
          transition: `all ${token2.motionDurationSlow}`,
          lineHeight: 1,
          // Reset Select's style in addon
          [`${antCls}-select`]: {
            margin: `${unit$1(token2.calc(token2.paddingBlock).add(1).mul(-1).equal())} ${unit$1(token2.calc(token2.paddingInline).mul(-1).equal())}`,
            [`&${antCls}-select-single:not(${antCls}-select-customize-input):not(${antCls}-pagination-size-changer)`]: {
              [`${antCls}-select-selector`]: {
                backgroundColor: "inherit",
                border: `${unit$1(token2.lineWidth)} ${token2.lineType} transparent`,
                boxShadow: "none"
              }
            },
            "&-open, &-focused": {
              [`${antCls}-select-selector`]: {
                color: token2.colorPrimary
              }
            }
          },
          // https://github.com/ant-design/ant-design/issues/31333
          [`${antCls}-cascader-picker`]: {
            margin: `-9px ${unit$1(token2.calc(token2.paddingInline).mul(-1).equal())}`,
            backgroundColor: "transparent",
            [`${antCls}-cascader-input`]: {
              textAlign: "start",
              border: 0,
              boxShadow: "none"
            }
          }
        }
      },
      [`${componentCls}`]: {
        width: "100%",
        marginBottom: 0,
        textAlign: "inherit",
        "&:focus": {
          zIndex: 1,
          // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
          borderInlineEndWidth: 1
        },
        "&:hover": {
          zIndex: 1,
          borderInlineEndWidth: 1,
          [`${componentCls}-search-with-button &`]: {
            zIndex: 0
          }
        }
      },
      // Reset rounded corners
      [`> ${componentCls}:first-child, ${componentCls}-group-addon:first-child`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        // Reset Select's style in addon
        [`${antCls}-select ${antCls}-select-selector`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0
        }
      },
      [`> ${componentCls}-affix-wrapper`]: {
        [`&:not(:first-child) ${componentCls}`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0
        },
        [`&:not(:last-child) ${componentCls}`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0
        }
      },
      [`> ${componentCls}:last-child, ${componentCls}-group-addon:last-child`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        // Reset Select's style in addon
        [`${antCls}-select ${antCls}-select-selector`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0
        }
      },
      [`${componentCls}-affix-wrapper`]: {
        "&:not(:last-child)": {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
          [`${componentCls}-search &`]: {
            borderStartStartRadius: token2.borderRadius,
            borderEndStartRadius: token2.borderRadius
          }
        },
        [`&:not(:first-child), ${componentCls}-search &:not(:first-child)`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0
        }
      },
      [`&${componentCls}-group-compact`]: Object.assign(Object.assign({
        display: "block"
      }, clearFix()), {
        [`${componentCls}-group-addon, ${componentCls}-group-wrap, > ${componentCls}`]: {
          "&:not(:first-child):not(:last-child)": {
            borderInlineEndWidth: token2.lineWidth,
            "&:hover, &:focus": {
              zIndex: 1
            }
          }
        },
        "& > *": {
          display: "inline-flex",
          float: "none",
          verticalAlign: "top",
          // https://github.com/ant-design/ant-design-pro/issues/139
          borderRadius: 0
        },
        [`
        & > ${componentCls}-affix-wrapper,
        & > ${componentCls}-number-affix-wrapper,
        & > ${antCls}-picker-range
      `]: {
          display: "inline-flex"
        },
        "& > *:not(:last-child)": {
          marginInlineEnd: token2.calc(token2.lineWidth).mul(-1).equal(),
          borderInlineEndWidth: token2.lineWidth
        },
        // Undo float for .ant-input-group .ant-input
        [`${componentCls}`]: {
          float: "none"
        },
        // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
        [`& > ${antCls}-select > ${antCls}-select-selector,
      & > ${antCls}-select-auto-complete ${componentCls},
      & > ${antCls}-cascader-picker ${componentCls},
      & > ${componentCls}-group-wrapper ${componentCls}`]: {
          borderInlineEndWidth: token2.lineWidth,
          borderRadius: 0,
          "&:hover, &:focus": {
            zIndex: 1
          }
        },
        [`& > ${antCls}-select-focused`]: {
          zIndex: 1
        },
        // update z-index for arrow icon
        [`& > ${antCls}-select > ${antCls}-select-arrow`]: {
          zIndex: 1
          // https://github.com/ant-design/ant-design/issues/20371
        },
        [`& > *:first-child,
      & > ${antCls}-select:first-child > ${antCls}-select-selector,
      & > ${antCls}-select-auto-complete:first-child ${componentCls},
      & > ${antCls}-cascader-picker:first-child ${componentCls}`]: {
          borderStartStartRadius: token2.borderRadius,
          borderEndStartRadius: token2.borderRadius
        },
        [`& > *:last-child,
      & > ${antCls}-select:last-child > ${antCls}-select-selector,
      & > ${antCls}-cascader-picker:last-child ${componentCls},
      & > ${antCls}-cascader-picker-focused:last-child ${componentCls}`]: {
          borderInlineEndWidth: token2.lineWidth,
          borderStartEndRadius: token2.borderRadius,
          borderEndEndRadius: token2.borderRadius
        },
        // https://github.com/ant-design/ant-design/issues/12493
        [`& > ${antCls}-select-auto-complete ${componentCls}`]: {
          verticalAlign: "top"
        },
        [`${componentCls}-group-wrapper + ${componentCls}-group-wrapper`]: {
          marginInlineStart: token2.calc(token2.lineWidth).mul(-1).equal(),
          [`${componentCls}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`${componentCls}-group-wrapper:not(:last-child)`]: {
          [`&${componentCls}-search > ${componentCls}-group`]: {
            [`& > ${componentCls}-group-addon > ${componentCls}-search-button`]: {
              borderRadius: 0
            },
            [`& > ${componentCls}`]: {
              borderStartStartRadius: token2.borderRadius,
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
              borderEndStartRadius: token2.borderRadius
            }
          }
        }
      })
    };
  };
  const genInputStyle = (token2) => {
    const {
      componentCls,
      controlHeightSM,
      lineWidth,
      calc
    } = token2;
    const FIXED_CHROME_COLOR_HEIGHT = 16;
    const colorSmallPadding = calc(controlHeightSM).sub(calc(lineWidth).mul(2)).sub(FIXED_CHROME_COLOR_HEIGHT).div(2).equal();
    return {
      [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token2)), genBasicInputStyle(token2)), genOutlinedStyle(token2)), genFilledStyle(token2)), genBorderlessStyle(token2)), {
        '&[type="color"]': {
          height: token2.controlHeight,
          [`&${componentCls}-lg`]: {
            height: token2.controlHeightLG
          },
          [`&${componentCls}-sm`]: {
            height: controlHeightSM,
            paddingTop: colorSmallPadding,
            paddingBottom: colorSmallPadding
          }
        },
        '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
          "-webkit-appearance": "none"
        }
      })
    };
  };
  const genAllowClearStyle = (token2) => {
    const {
      componentCls
    } = token2;
    return {
      // ========================= Input =========================
      [`${componentCls}-clear-icon`]: {
        margin: 0,
        color: token2.colorTextQuaternary,
        fontSize: token2.fontSizeIcon,
        verticalAlign: -1,
        // https://github.com/ant-design/ant-design/pull/18151
        // https://codesandbox.io/s/wizardly-sun-u10br
        cursor: "pointer",
        transition: `color ${token2.motionDurationSlow}`,
        "&:hover": {
          color: token2.colorTextTertiary
        },
        "&:active": {
          color: token2.colorText
        },
        "&-hidden": {
          visibility: "hidden"
        },
        "&-has-suffix": {
          margin: `0 ${unit$1(token2.inputAffixPadding)}`
        }
      }
    };
  };
  const genAffixStyle = (token2) => {
    const {
      componentCls,
      inputAffixPadding,
      colorTextDescription,
      motionDurationSlow,
      colorIcon,
      colorIconHover,
      iconCls
    } = token2;
    const affixCls = `${componentCls}-affix-wrapper`;
    return {
      [affixCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, genBasicInputStyle(token2)), {
        display: "inline-flex",
        [`&:not(${componentCls}-disabled):hover`]: {
          zIndex: 1,
          [`${componentCls}-search-with-button &`]: {
            zIndex: 0
          }
        },
        "&-focused, &:focus": {
          zIndex: 1
        },
        [`> input${componentCls}`]: {
          padding: 0
        },
        [`> input${componentCls}, > textarea${componentCls}`]: {
          fontSize: "inherit",
          border: "none",
          borderRadius: 0,
          outline: "none",
          background: "transparent",
          color: "inherit",
          "&::-ms-reveal": {
            display: "none"
          },
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        "&::before": {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        },
        [`${componentCls}`]: {
          "&-prefix, &-suffix": {
            display: "flex",
            flex: "none",
            alignItems: "center",
            "> *:not(:last-child)": {
              marginInlineEnd: token2.paddingXS
            }
          },
          "&-show-count-suffix": {
            color: colorTextDescription
          },
          "&-show-count-has-suffix": {
            marginInlineEnd: token2.paddingXXS
          },
          "&-prefix": {
            marginInlineEnd: inputAffixPadding
          },
          "&-suffix": {
            marginInlineStart: inputAffixPadding
          }
        }
      }), genAllowClearStyle(token2)), {
        // password
        [`${iconCls}${componentCls}-password-icon`]: {
          color: colorIcon,
          cursor: "pointer",
          transition: `all ${motionDurationSlow}`,
          "&:hover": {
            color: colorIconHover
          }
        }
      })
    };
  };
  const genGroupStyle = (token2) => {
    const {
      componentCls,
      borderRadiusLG,
      borderRadiusSM
    } = token2;
    return {
      [`${componentCls}-group`]: Object.assign(Object.assign(Object.assign({}, resetComponent(token2)), genInputGroupStyle(token2)), {
        "&-rtl": {
          direction: "rtl"
        },
        "&-wrapper": Object.assign(Object.assign(Object.assign({
          display: "inline-block",
          width: "100%",
          textAlign: "start",
          verticalAlign: "top",
          "&-rtl": {
            direction: "rtl"
          },
          // Size
          "&-lg": {
            [`${componentCls}-group-addon`]: {
              borderRadius: borderRadiusLG,
              fontSize: token2.inputFontSizeLG
            }
          },
          "&-sm": {
            [`${componentCls}-group-addon`]: {
              borderRadius: borderRadiusSM
            }
          }
        }, genOutlinedGroupStyle(token2)), genFilledGroupStyle(token2)), {
          // '&-disabled': {
          //   [`${componentCls}-group-addon`]: {
          //     ...genDisabledStyle(token),
          //   },
          // },
          // Fix the issue of using icons in Space Compact mode
          // https://github.com/ant-design/ant-design/issues/42122
          [`&:not(${componentCls}-compact-first-item):not(${componentCls}-compact-last-item)${componentCls}-compact-item`]: {
            [`${componentCls}, ${componentCls}-group-addon`]: {
              borderRadius: 0
            }
          },
          [`&:not(${componentCls}-compact-last-item)${componentCls}-compact-first-item`]: {
            [`${componentCls}, ${componentCls}-group-addon`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          [`&:not(${componentCls}-compact-first-item)${componentCls}-compact-last-item`]: {
            [`${componentCls}, ${componentCls}-group-addon`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          },
          // Fix the issue of input use show-count param in space compact mode
          // https://github.com/ant-design/ant-design/issues/46872
          [`&:not(${componentCls}-compact-last-item)${componentCls}-compact-item`]: {
            [`${componentCls}-affix-wrapper`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          }
        })
      })
    };
  };
  const genSearchInputStyle = (token2) => {
    const {
      componentCls,
      antCls
    } = token2;
    const searchPrefixCls = `${componentCls}-search`;
    return {
      [searchPrefixCls]: {
        [`${componentCls}`]: {
          "&:hover, &:focus": {
            borderColor: token2.colorPrimaryHover,
            [`+ ${componentCls}-group-addon ${searchPrefixCls}-button:not(${antCls}-btn-primary)`]: {
              borderInlineStartColor: token2.colorPrimaryHover
            }
          }
        },
        [`${componentCls}-affix-wrapper`]: {
          borderRadius: 0
        },
        // fix slight height diff in Firefox:
        // https://ant.design/components/auto-complete-cn/#components-auto-complete-demo-certain-category
        [`${componentCls}-lg`]: {
          lineHeight: token2.calc(token2.lineHeightLG).sub(2e-4).equal({
            unit: false
          })
        },
        [`> ${componentCls}-group`]: {
          [`> ${componentCls}-group-addon:last-child`]: {
            insetInlineStart: -1,
            padding: 0,
            border: 0,
            [`${searchPrefixCls}-button`]: {
              // Fix https://github.com/ant-design/ant-design/issues/47150
              marginInlineEnd: -1,
              paddingTop: 0,
              paddingBottom: 0,
              borderStartStartRadius: 0,
              borderStartEndRadius: token2.borderRadius,
              borderEndEndRadius: token2.borderRadius,
              borderEndStartRadius: 0,
              boxShadow: "none"
            },
            [`${searchPrefixCls}-button:not(${antCls}-btn-primary)`]: {
              color: token2.colorTextDescription,
              "&:hover": {
                color: token2.colorPrimaryHover
              },
              "&:active": {
                color: token2.colorPrimaryActive
              },
              [`&${antCls}-btn-loading::before`]: {
                insetInlineStart: 0,
                insetInlineEnd: 0,
                insetBlockStart: 0,
                insetBlockEnd: 0
              }
            }
          }
        },
        [`${searchPrefixCls}-button`]: {
          height: token2.controlHeight,
          "&:hover, &:focus": {
            zIndex: 1
          }
        },
        [`&-large ${searchPrefixCls}-button`]: {
          height: token2.controlHeightLG
        },
        [`&-small ${searchPrefixCls}-button`]: {
          height: token2.controlHeightSM
        },
        "&-rtl": {
          direction: "rtl"
        },
        // ===================== Compact Item Customized Styles =====================
        [`&${componentCls}-compact-item`]: {
          [`&:not(${componentCls}-compact-last-item)`]: {
            [`${componentCls}-group-addon`]: {
              [`${componentCls}-search-button`]: {
                marginInlineEnd: token2.calc(token2.lineWidth).mul(-1).equal(),
                borderRadius: 0
              }
            }
          },
          [`&:not(${componentCls}-compact-first-item)`]: {
            [`${componentCls},${componentCls}-affix-wrapper`]: {
              borderRadius: 0
            }
          },
          [`> ${componentCls}-group-addon ${componentCls}-search-button,
        > ${componentCls},
        ${componentCls}-affix-wrapper`]: {
            "&:hover, &:focus, &:active": {
              zIndex: 2
            }
          },
          [`> ${componentCls}-affix-wrapper-focused`]: {
            zIndex: 2
          }
        }
      }
    };
  };
  const genTextAreaStyle = (token2) => {
    const {
      componentCls,
      paddingLG
    } = token2;
    const textareaPrefixCls = `${componentCls}-textarea`;
    return {
      [textareaPrefixCls]: {
        position: "relative",
        "&-show-count": {
          // https://github.com/ant-design/ant-design/issues/33049
          [`> ${componentCls}`]: {
            height: "100%"
          },
          [`${componentCls}-data-count`]: {
            position: "absolute",
            bottom: token2.calc(token2.fontSize).mul(token2.lineHeight).mul(-1).equal(),
            insetInlineEnd: 0,
            color: token2.colorTextDescription,
            whiteSpace: "nowrap",
            pointerEvents: "none"
          }
        },
        [`
        &-allow-clear > ${componentCls},
        &-affix-wrapper${textareaPrefixCls}-has-feedback ${componentCls}
      `]: {
          paddingInlineEnd: paddingLG
        },
        [`&-affix-wrapper${componentCls}-affix-wrapper`]: {
          padding: 0,
          [`> textarea${componentCls}`]: {
            fontSize: "inherit",
            border: "none",
            outline: "none",
            background: "transparent",
            "&:focus": {
              boxShadow: "none !important"
            }
          },
          [`${componentCls}-suffix`]: {
            margin: 0,
            "> *:not(:last-child)": {
              marginInline: 0
            },
            // Clear Icon
            [`${componentCls}-clear-icon`]: {
              position: "absolute",
              insetInlineEnd: token2.paddingXS,
              insetBlockStart: token2.paddingXS
            },
            // Feedback Icon
            [`${textareaPrefixCls}-suffix`]: {
              position: "absolute",
              top: 0,
              insetInlineEnd: token2.paddingInline,
              bottom: 0,
              zIndex: 1,
              display: "inline-flex",
              alignItems: "center",
              margin: "auto",
              pointerEvents: "none"
            }
          }
        }
      }
    };
  };
  const genRangeStyle = (token2) => {
    const {
      componentCls
    } = token2;
    return {
      [`${componentCls}-out-of-range`]: {
        [`&, & input, & textarea, ${componentCls}-show-count-suffix, ${componentCls}-data-count`]: {
          color: token2.colorError
        }
      }
    };
  };
  const useStyle$3 = genStyleHooks("Input", (token2) => {
    const inputToken = merge$1(token2, initInputToken(token2));
    return [
      genInputStyle(inputToken),
      genTextAreaStyle(inputToken),
      genAffixStyle(inputToken),
      genGroupStyle(inputToken),
      genSearchInputStyle(inputToken),
      genRangeStyle(inputToken),
      // =====================================================
      // ==             Space Compact                       ==
      // =====================================================
      genCompactItemStyle(inputToken)
    ];
  }, initComponentToken, {
    resetFont: false
  });
  const genCheckboxStyle = (token2) => {
    const {
      checkboxCls
    } = token2;
    const wrapperCls = `${checkboxCls}-wrapper`;
    return [
      // ===================== Basic =====================
      {
        // Group
        [`${checkboxCls}-group`]: Object.assign(Object.assign({}, resetComponent(token2)), {
          display: "inline-flex",
          flexWrap: "wrap",
          columnGap: token2.marginXS,
          // Group > Grid
          [`> ${token2.antCls}-row`]: {
            flex: 1
          }
        }),
        // Wrapper
        [wrapperCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
          display: "inline-flex",
          alignItems: "baseline",
          cursor: "pointer",
          // Fix checkbox & radio in flex align #30260
          "&:after": {
            display: "inline-block",
            width: 0,
            overflow: "hidden",
            content: "'\\a0'"
          },
          // Checkbox near checkbox
          [`& + ${wrapperCls}`]: {
            marginInlineStart: 0
          },
          [`&${wrapperCls}-in-form-item`]: {
            'input[type="checkbox"]': {
              width: 14,
              // FIXME: magic
              height: 14
              // FIXME: magic
            }
          }
        }),
        // Wrapper > Checkbox
        [checkboxCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
          position: "relative",
          whiteSpace: "nowrap",
          lineHeight: 1,
          cursor: "pointer",
          borderRadius: token2.borderRadiusSM,
          // To make alignment right when `controlHeight` is changed
          // Ref: https://github.com/ant-design/ant-design/issues/41564
          alignSelf: "center",
          // Wrapper > Checkbox > input
          [`${checkboxCls}-input`]: {
            position: "absolute",
            // Since baseline align will get additional space offset,
            // we need to move input to top to make it align with text.
            // Ref: https://github.com/ant-design/ant-design/issues/38926#issuecomment-1486137799
            inset: 0,
            zIndex: 1,
            cursor: "pointer",
            opacity: 0,
            margin: 0,
            [`&:focus-visible + ${checkboxCls}-inner`]: Object.assign({}, genFocusOutline(token2))
          },
          // Wrapper > Checkbox > inner
          [`${checkboxCls}-inner`]: {
            boxSizing: "border-box",
            display: "block",
            width: token2.checkboxSize,
            height: token2.checkboxSize,
            direction: "ltr",
            backgroundColor: token2.colorBgContainer,
            border: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorBorder}`,
            borderRadius: token2.borderRadiusSM,
            borderCollapse: "separate",
            transition: `all ${token2.motionDurationSlow}`,
            "&:after": {
              boxSizing: "border-box",
              position: "absolute",
              top: "50%",
              insetInlineStart: "25%",
              display: "table",
              width: token2.calc(token2.checkboxSize).div(14).mul(5).equal(),
              height: token2.calc(token2.checkboxSize).div(14).mul(8).equal(),
              border: `${unit$1(token2.lineWidthBold)} solid ${token2.colorWhite}`,
              borderTop: 0,
              borderInlineStart: 0,
              transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
              opacity: 0,
              content: '""',
              transition: `all ${token2.motionDurationFast} ${token2.motionEaseInBack}, opacity ${token2.motionDurationFast}`
            }
          },
          // Wrapper > Checkbox + Text
          "& + span": {
            paddingInlineStart: token2.paddingXS,
            paddingInlineEnd: token2.paddingXS
          }
        })
      },
      // ===================== Hover =====================
      {
        // Wrapper & Wrapper > Checkbox
        [`
        ${wrapperCls}:not(${wrapperCls}-disabled),
        ${checkboxCls}:not(${checkboxCls}-disabled)
      `]: {
          [`&:hover ${checkboxCls}-inner`]: {
            borderColor: token2.colorPrimary
          }
        },
        [`${wrapperCls}:not(${wrapperCls}-disabled)`]: {
          [`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled) ${checkboxCls}-inner`]: {
            backgroundColor: token2.colorPrimaryHover,
            borderColor: "transparent"
          },
          [`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled):after`]: {
            borderColor: token2.colorPrimaryHover
          }
        }
      },
      // ==================== Checked ====================
      {
        // Wrapper > Checkbox
        [`${checkboxCls}-checked`]: {
          [`${checkboxCls}-inner`]: {
            backgroundColor: token2.colorPrimary,
            borderColor: token2.colorPrimary,
            "&:after": {
              opacity: 1,
              transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
              transition: `all ${token2.motionDurationMid} ${token2.motionEaseOutBack} ${token2.motionDurationFast}`
            }
          }
        },
        [`
        ${wrapperCls}-checked:not(${wrapperCls}-disabled),
        ${checkboxCls}-checked:not(${checkboxCls}-disabled)
      `]: {
          [`&:hover ${checkboxCls}-inner`]: {
            backgroundColor: token2.colorPrimaryHover,
            borderColor: "transparent"
          }
        }
      },
      // ================= Indeterminate =================
      {
        [checkboxCls]: {
          "&-indeterminate": {
            // Wrapper > Checkbox > inner
            [`${checkboxCls}-inner`]: {
              backgroundColor: token2.colorBgContainer,
              borderColor: token2.colorBorder,
              "&:after": {
                top: "50%",
                insetInlineStart: "50%",
                width: token2.calc(token2.fontSizeLG).div(2).equal(),
                height: token2.calc(token2.fontSizeLG).div(2).equal(),
                backgroundColor: token2.colorPrimary,
                border: 0,
                transform: "translate(-50%, -50%) scale(1)",
                opacity: 1,
                content: '""'
              }
            }
          }
        }
      },
      // ==================== Disable ====================
      {
        // Wrapper
        [`${wrapperCls}-disabled`]: {
          cursor: "not-allowed"
        },
        // Wrapper > Checkbox
        [`${checkboxCls}-disabled`]: {
          // Wrapper > Checkbox > input
          [`&, ${checkboxCls}-input`]: {
            cursor: "not-allowed",
            // Disabled for native input to enable Tooltip event handler
            // ref: https://github.com/ant-design/ant-design/issues/39822#issuecomment-1365075901
            pointerEvents: "none"
          },
          // Wrapper > Checkbox > inner
          [`${checkboxCls}-inner`]: {
            background: token2.colorBgContainerDisabled,
            borderColor: token2.colorBorder,
            "&:after": {
              borderColor: token2.colorTextDisabled
            }
          },
          "&:after": {
            display: "none"
          },
          "& + span": {
            color: token2.colorTextDisabled
          },
          [`&${checkboxCls}-indeterminate ${checkboxCls}-inner::after`]: {
            background: token2.colorTextDisabled
          }
        }
      }
    ];
  };
  function getStyle(prefixCls, token2) {
    const checkboxToken = merge$1(token2, {
      checkboxCls: `.${prefixCls}`,
      checkboxSize: token2.controlInteractiveSize
    });
    return [genCheckboxStyle(checkboxToken)];
  }
  const useStyle$2 = genStyleHooks("Checkbox", (token2, _ref7) => {
    let {
      prefixCls
    } = _ref7;
    return [getStyle(prefixCls, token2)];
  });
  const GroupContext = /* @__PURE__ */ React.createContext(null);
  var __rest$9 = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  const InternalCheckbox = (props, ref) => {
    var _a;
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      children,
      indeterminate = false,
      style: style2,
      onMouseEnter,
      onMouseLeave,
      skipGroup = false,
      disabled
    } = props, restProps = __rest$9(props, ["prefixCls", "className", "rootClassName", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]);
    const {
      getPrefixCls,
      direction,
      checkbox
    } = React__namespace.useContext(ConfigContext);
    const checkboxGroup = React__namespace.useContext(GroupContext);
    const {
      isFormItemInput
    } = React__namespace.useContext(FormItemInputContext);
    const contextDisabled = React__namespace.useContext(DisabledContext);
    const mergedDisabled = (_a = (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.disabled) || disabled) !== null && _a !== void 0 ? _a : contextDisabled;
    const prevValue = React__namespace.useRef(restProps.value);
    React__namespace.useEffect(() => {
      checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
    }, []);
    React__namespace.useEffect(() => {
      if (skipGroup) {
        return;
      }
      if (restProps.value !== prevValue.current) {
        checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(prevValue.current);
        checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
        prevValue.current = restProps.value;
      }
      return () => checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(restProps.value);
    }, [restProps.value]);
    const prefixCls = getPrefixCls("checkbox", customizePrefixCls);
    const rootCls = useCSSVarCls(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$2(prefixCls, rootCls);
    const checkboxProps = Object.assign({}, restProps);
    if (checkboxGroup && !skipGroup) {
      checkboxProps.onChange = function() {
        if (restProps.onChange) {
          restProps.onChange.apply(restProps, arguments);
        }
        if (checkboxGroup.toggleOption) {
          checkboxGroup.toggleOption({
            label: children,
            value: restProps.value
          });
        }
      };
      checkboxProps.name = checkboxGroup.name;
      checkboxProps.checked = checkboxGroup.value.includes(restProps.value);
    }
    const classString = cx(`${prefixCls}-wrapper`, {
      [`${prefixCls}-rtl`]: direction === "rtl",
      [`${prefixCls}-wrapper-checked`]: checkboxProps.checked,
      [`${prefixCls}-wrapper-disabled`]: mergedDisabled,
      [`${prefixCls}-wrapper-in-form-item`]: isFormItemInput
    }, checkbox === null || checkbox === void 0 ? void 0 : checkbox.className, className, rootClassName, cssVarCls, rootCls, hashId);
    const checkboxClass = cx({
      [`${prefixCls}-indeterminate`]: indeterminate
    }, TARGET_CLS, hashId);
    const ariaChecked = indeterminate ? "mixed" : void 0;
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement(Wave, {
      component: "Checkbox",
      disabled: mergedDisabled
    }, /* @__PURE__ */ React__namespace.createElement("label", {
      className: classString,
      style: Object.assign(Object.assign({}, checkbox === null || checkbox === void 0 ? void 0 : checkbox.style), style2),
      onMouseEnter,
      onMouseLeave
    }, /* @__PURE__ */ React__namespace.createElement(Checkbox$2, Object.assign({
      "aria-checked": ariaChecked
    }, checkboxProps, {
      prefixCls,
      className: checkboxClass,
      disabled: mergedDisabled,
      ref
    })), children !== void 0 && /* @__PURE__ */ React__namespace.createElement("span", null, children))));
  };
  const Checkbox$1 = /* @__PURE__ */ React__namespace.forwardRef(InternalCheckbox);
  var __rest$8 = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  const CheckboxGroup = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    const {
      defaultValue,
      children,
      options = [],
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      style: style2,
      onChange
    } = props, restProps = __rest$8(props, ["defaultValue", "children", "options", "prefixCls", "className", "rootClassName", "style", "onChange"]);
    const {
      getPrefixCls,
      direction
    } = React__namespace.useContext(ConfigContext);
    const [value, setValue] = React__namespace.useState(restProps.value || defaultValue || []);
    const [registeredValues, setRegisteredValues] = React__namespace.useState([]);
    React__namespace.useEffect(() => {
      if ("value" in restProps) {
        setValue(restProps.value || []);
      }
    }, [restProps.value]);
    const memoOptions = React__namespace.useMemo(() => options.map((option) => {
      if (typeof option === "string" || typeof option === "number") {
        return {
          label: option,
          value: option
        };
      }
      return option;
    }), [options]);
    const cancelValue = (val) => {
      setRegisteredValues((prevValues) => prevValues.filter((v2) => v2 !== val));
    };
    const registerValue = (val) => {
      setRegisteredValues((prevValues) => [].concat(_toConsumableArray(prevValues), [val]));
    };
    const toggleOption = (option) => {
      const optionIndex = value.indexOf(option.value);
      const newValue = _toConsumableArray(value);
      if (optionIndex === -1) {
        newValue.push(option.value);
      } else {
        newValue.splice(optionIndex, 1);
      }
      if (!("value" in restProps)) {
        setValue(newValue);
      }
      onChange === null || onChange === void 0 ? void 0 : onChange(newValue.filter((val) => registeredValues.includes(val)).sort((a2, b2) => {
        const indexA = memoOptions.findIndex((opt) => opt.value === a2);
        const indexB = memoOptions.findIndex((opt) => opt.value === b2);
        return indexA - indexB;
      }));
    };
    const prefixCls = getPrefixCls("checkbox", customizePrefixCls);
    const groupPrefixCls = `${prefixCls}-group`;
    const rootCls = useCSSVarCls(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$2(prefixCls, rootCls);
    const domProps = omit(restProps, ["value", "disabled"]);
    const childrenNode = options.length ? memoOptions.map((option) => /* @__PURE__ */ React__namespace.createElement(Checkbox$1, {
      prefixCls,
      key: option.value.toString(),
      disabled: "disabled" in option ? option.disabled : restProps.disabled,
      value: option.value,
      checked: value.includes(option.value),
      onChange: option.onChange,
      className: `${groupPrefixCls}-item`,
      style: option.style,
      title: option.title,
      id: option.id,
      required: option.required
    }, option.label)) : children;
    const context = {
      toggleOption,
      value,
      disabled: restProps.disabled,
      name: restProps.name,
      // https://github.com/ant-design/ant-design/issues/16376
      registerValue,
      cancelValue
    };
    const classString = cx(groupPrefixCls, {
      [`${groupPrefixCls}-rtl`]: direction === "rtl"
    }, className, rootClassName, cssVarCls, rootCls, hashId);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", Object.assign({
      className: classString,
      style: style2
    }, domProps, {
      ref
    }), /* @__PURE__ */ React__namespace.createElement(GroupContext.Provider, {
      value: context
    }, childrenNode)));
  });
  const Checkbox = Checkbox$1;
  Checkbox.Group = CheckboxGroup;
  Checkbox.__ANT_CHECKBOX = true;
  function hasAddon(props) {
    return !!(props.addonBefore || props.addonAfter);
  }
  function hasPrefixSuffix$1(props) {
    return !!(props.prefix || props.suffix || props.allowClear);
  }
  function cloneEvent(event, target, value) {
    var currentTarget = target.cloneNode(true);
    var newEvent = Object.create(event, {
      target: {
        value: currentTarget
      },
      currentTarget: {
        value: currentTarget
      }
    });
    currentTarget.value = value;
    if (typeof target.selectionStart === "number" && typeof target.selectionEnd === "number") {
      currentTarget.selectionStart = target.selectionStart;
      currentTarget.selectionEnd = target.selectionEnd;
    }
    currentTarget.setSelectionRange = function() {
      target.setSelectionRange.apply(target, arguments);
    };
    return newEvent;
  }
  function resolveOnChange(target, e2, onChange, targetValue) {
    if (!onChange) {
      return;
    }
    var event = e2;
    if (e2.type === "click") {
      event = cloneEvent(e2, target, "");
      onChange(event);
      return;
    }
    if (target.type !== "file" && targetValue !== void 0) {
      event = cloneEvent(e2, target, targetValue);
      onChange(event);
      return;
    }
    onChange(event);
  }
  function triggerFocus$1(element, option) {
    if (!element)
      return;
    element.focus(option);
    var _ref7 = option || {}, cursor2 = _ref7.cursor;
    if (cursor2) {
      var len = element.value.length;
      switch (cursor2) {
        case "start":
          element.setSelectionRange(0, 0);
          break;
        case "end":
          element.setSelectionRange(len, len);
          break;
        default:
          element.setSelectionRange(0, len);
      }
    }
  }
  var BaseInput = /* @__PURE__ */ React.forwardRef(function(props, ref) {
    var _element$props, _element$props2;
    var inputEl = props.inputElement, children = props.children, prefixCls = props.prefixCls, prefix2 = props.prefix, suffix = props.suffix, addonBefore = props.addonBefore, addonAfter = props.addonAfter, className = props.className, style2 = props.style, disabled = props.disabled, readOnly = props.readOnly, focused = props.focused, triggerFocus2 = props.triggerFocus, allowClear = props.allowClear, value = props.value, handleReset = props.handleReset, hidden = props.hidden, classes = props.classes, classNames = props.classNames, dataAttrs = props.dataAttrs, styles = props.styles, components = props.components;
    var inputElement = children !== null && children !== void 0 ? children : inputEl;
    var AffixWrapperComponent = (components === null || components === void 0 ? void 0 : components.affixWrapper) || "span";
    var GroupWrapperComponent = (components === null || components === void 0 ? void 0 : components.groupWrapper) || "span";
    var WrapperComponent = (components === null || components === void 0 ? void 0 : components.wrapper) || "span";
    var GroupAddonComponent = (components === null || components === void 0 ? void 0 : components.groupAddon) || "span";
    var containerRef = React.useRef(null);
    var onInputClick = function onInputClick2(e2) {
      var _containerRef$current;
      if ((_containerRef$current = containerRef.current) !== null && _containerRef$current !== void 0 && _containerRef$current.contains(e2.target)) {
        triggerFocus2 === null || triggerFocus2 === void 0 || triggerFocus2();
      }
    };
    var hasAffix = hasPrefixSuffix$1(props);
    var element = /* @__PURE__ */ React.cloneElement(inputElement, {
      value,
      className: cx(inputElement.props.className, !hasAffix && (classNames === null || classNames === void 0 ? void 0 : classNames.variant)) || null
    });
    var groupRef = React.useRef(null);
    React.useImperativeHandle(ref, function() {
      return {
        nativeElement: groupRef.current || containerRef.current
      };
    });
    if (hasAffix) {
      var _clsx2;
      var clearIcon = null;
      if (allowClear) {
        var _clsx;
        var needClear = !disabled && !readOnly && value;
        var clearIconCls = "".concat(prefixCls, "-clear-icon");
        var iconNode = _typeof(allowClear) === "object" && allowClear !== null && allowClear !== void 0 && allowClear.clearIcon ? allowClear.clearIcon : "✖";
        clearIcon = /* @__PURE__ */ React.createElement("span", {
          onClick: handleReset,
          onMouseDown: function onMouseDown(e2) {
            return e2.preventDefault();
          },
          className: cx(clearIconCls, (_clsx = {}, _defineProperty(_clsx, "".concat(clearIconCls, "-hidden"), !needClear), _defineProperty(_clsx, "".concat(clearIconCls, "-has-suffix"), !!suffix), _clsx)),
          role: "button",
          tabIndex: -1
        }, iconNode);
      }
      var affixWrapperPrefixCls = "".concat(prefixCls, "-affix-wrapper");
      var affixWrapperCls = cx(affixWrapperPrefixCls, (_clsx2 = {}, _defineProperty(_clsx2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_clsx2, "".concat(affixWrapperPrefixCls, "-disabled"), disabled), _defineProperty(_clsx2, "".concat(affixWrapperPrefixCls, "-focused"), focused), _defineProperty(_clsx2, "".concat(affixWrapperPrefixCls, "-readonly"), readOnly), _defineProperty(_clsx2, "".concat(affixWrapperPrefixCls, "-input-with-clear-btn"), suffix && allowClear && value), _clsx2), classes === null || classes === void 0 ? void 0 : classes.affixWrapper, classNames === null || classNames === void 0 ? void 0 : classNames.affixWrapper, classNames === null || classNames === void 0 ? void 0 : classNames.variant);
      var suffixNode = (suffix || allowClear) && /* @__PURE__ */ React.createElement("span", {
        className: cx("".concat(prefixCls, "-suffix"), classNames === null || classNames === void 0 ? void 0 : classNames.suffix),
        style: styles === null || styles === void 0 ? void 0 : styles.suffix
      }, clearIcon, suffix);
      element = /* @__PURE__ */ React.createElement(AffixWrapperComponent, _extends({
        className: affixWrapperCls,
        style: styles === null || styles === void 0 ? void 0 : styles.affixWrapper,
        onClick: onInputClick
      }, dataAttrs === null || dataAttrs === void 0 ? void 0 : dataAttrs.affixWrapper, {
        ref: containerRef
      }), prefix2 && /* @__PURE__ */ React.createElement("span", {
        className: cx("".concat(prefixCls, "-prefix"), classNames === null || classNames === void 0 ? void 0 : classNames.prefix),
        style: styles === null || styles === void 0 ? void 0 : styles.prefix
      }, prefix2), element, suffixNode);
    }
    if (hasAddon(props)) {
      var wrapperCls = "".concat(prefixCls, "-group");
      var addonCls = "".concat(wrapperCls, "-addon");
      var groupWrapperCls = "".concat(wrapperCls, "-wrapper");
      var mergedWrapperClassName = cx("".concat(prefixCls, "-wrapper"), wrapperCls, classes === null || classes === void 0 ? void 0 : classes.wrapper, classNames === null || classNames === void 0 ? void 0 : classNames.wrapper);
      var mergedGroupClassName = cx(groupWrapperCls, _defineProperty({}, "".concat(groupWrapperCls, "-disabled"), disabled), classes === null || classes === void 0 ? void 0 : classes.group, classNames === null || classNames === void 0 ? void 0 : classNames.groupWrapper);
      element = /* @__PURE__ */ React.createElement(GroupWrapperComponent, {
        className: mergedGroupClassName,
        ref: groupRef
      }, /* @__PURE__ */ React.createElement(WrapperComponent, {
        className: mergedWrapperClassName
      }, addonBefore && /* @__PURE__ */ React.createElement(GroupAddonComponent, {
        className: addonCls
      }, addonBefore), element, addonAfter && /* @__PURE__ */ React.createElement(GroupAddonComponent, {
        className: addonCls
      }, addonAfter)));
    }
    return /* @__PURE__ */ React.cloneElement(element, {
      className: cx((_element$props = element.props) === null || _element$props === void 0 ? void 0 : _element$props.className, className) || null,
      style: _objectSpread2(_objectSpread2({}, (_element$props2 = element.props) === null || _element$props2 === void 0 ? void 0 : _element$props2.style), style2),
      hidden
    });
  });
  var _excluded$4 = ["show"];
  function useCount(count, showCount) {
    return React__namespace.useMemo(function() {
      var mergedConfig = {};
      if (showCount) {
        mergedConfig.show = _typeof(showCount) === "object" && showCount.formatter ? showCount.formatter : !!showCount;
      }
      mergedConfig = _objectSpread2(_objectSpread2({}, mergedConfig), count);
      var _ref7 = mergedConfig, show = _ref7.show, rest = _objectWithoutProperties(_ref7, _excluded$4);
      return _objectSpread2(_objectSpread2({}, rest), {}, {
        show: !!show,
        showFormatter: typeof show === "function" ? show : void 0,
        strategy: rest.strategy || function(value) {
          return value.length;
        }
      });
    }, [count, showCount]);
  }
  var _excluded$3 = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"];
  var Input$2 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
    var autoComplete = props.autoComplete, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, onPressEnter = props.onPressEnter, onKeyDown = props.onKeyDown, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-input" : _props$prefixCls, disabled = props.disabled, htmlSize = props.htmlSize, className = props.className, maxLength = props.maxLength, suffix = props.suffix, showCount = props.showCount, count = props.count, _props$type = props.type, type4 = _props$type === void 0 ? "text" : _props$type, classes = props.classes, classNames = props.classNames, styles = props.styles, _onCompositionStart = props.onCompositionStart, onCompositionEnd = props.onCompositionEnd, rest = _objectWithoutProperties(props, _excluded$3);
    var _useState = React.useState(false), _useState2 = _slicedToArray(_useState, 2), focused = _useState2[0], setFocused = _useState2[1];
    var compositionRef = React.useRef(false);
    var inputRef = React.useRef(null);
    var holderRef = React.useRef(null);
    var focus = function focus2(option) {
      if (inputRef.current) {
        triggerFocus$1(inputRef.current, option);
      }
    };
    var _useMergedState = useMergedState(props.defaultValue, {
      value: props.value
    }), _useMergedState2 = _slicedToArray(_useMergedState, 2), value = _useMergedState2[0], setValue = _useMergedState2[1];
    var formatValue = value === void 0 || value === null ? "" : String(value);
    var _useState3 = React.useState(null), _useState4 = _slicedToArray(_useState3, 2), selection = _useState4[0], setSelection = _useState4[1];
    var countConfig = useCount(count, showCount);
    var mergedMax = countConfig.max || maxLength;
    var valueLength = countConfig.strategy(formatValue);
    var isOutOfRange = !!mergedMax && valueLength > mergedMax;
    React.useImperativeHandle(ref, function() {
      var _holderRef$current;
      return {
        focus,
        blur: function blur() {
          var _inputRef$current;
          (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.blur();
        },
        setSelectionRange: function setSelectionRange(start, end, direction) {
          var _inputRef$current2;
          (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.setSelectionRange(start, end, direction);
        },
        select: function select() {
          var _inputRef$current3;
          (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 || _inputRef$current3.select();
        },
        input: inputRef.current,
        nativeElement: ((_holderRef$current = holderRef.current) === null || _holderRef$current === void 0 ? void 0 : _holderRef$current.nativeElement) || inputRef.current
      };
    });
    React.useEffect(function() {
      setFocused(function(prev2) {
        return prev2 && disabled ? false : prev2;
      });
    }, [disabled]);
    var triggerChange = function triggerChange2(e2, currentValue, info) {
      var cutValue = currentValue;
      if (!compositionRef.current && countConfig.exceedFormatter && countConfig.max && countConfig.strategy(currentValue) > countConfig.max) {
        cutValue = countConfig.exceedFormatter(currentValue, {
          max: countConfig.max
        });
        if (currentValue !== cutValue) {
          var _inputRef$current4, _inputRef$current5;
          setSelection([((_inputRef$current4 = inputRef.current) === null || _inputRef$current4 === void 0 ? void 0 : _inputRef$current4.selectionStart) || 0, ((_inputRef$current5 = inputRef.current) === null || _inputRef$current5 === void 0 ? void 0 : _inputRef$current5.selectionEnd) || 0]);
        }
      } else if (info.source === "compositionEnd") {
        return;
      }
      setValue(cutValue);
      if (inputRef.current) {
        resolveOnChange(inputRef.current, e2, onChange, cutValue);
      }
    };
    React.useEffect(function() {
      if (selection) {
        var _inputRef$current6;
        (_inputRef$current6 = inputRef.current) === null || _inputRef$current6 === void 0 || _inputRef$current6.setSelectionRange.apply(_inputRef$current6, _toConsumableArray(selection));
      }
    }, [selection]);
    var onInternalChange = function onInternalChange2(e2) {
      triggerChange(e2, e2.target.value, {
        source: "change"
      });
    };
    var onInternalCompositionEnd = function onInternalCompositionEnd2(e2) {
      compositionRef.current = false;
      triggerChange(e2, e2.currentTarget.value, {
        source: "compositionEnd"
      });
      onCompositionEnd === null || onCompositionEnd === void 0 || onCompositionEnd(e2);
    };
    var handleKeyDown = function handleKeyDown2(e2) {
      if (onPressEnter && e2.key === "Enter") {
        onPressEnter(e2);
      }
      onKeyDown === null || onKeyDown === void 0 || onKeyDown(e2);
    };
    var handleFocus = function handleFocus2(e2) {
      setFocused(true);
      onFocus === null || onFocus === void 0 || onFocus(e2);
    };
    var handleBlur = function handleBlur2(e2) {
      setFocused(false);
      onBlur === null || onBlur === void 0 || onBlur(e2);
    };
    var handleReset = function handleReset2(e2) {
      setValue("");
      focus();
      if (inputRef.current) {
        resolveOnChange(inputRef.current, e2, onChange);
      }
    };
    var outOfRangeCls = isOutOfRange && "".concat(prefixCls, "-out-of-range");
    var getInputElement = function getInputElement2() {
      var otherProps = omit(props, [
        "prefixCls",
        "onPressEnter",
        "addonBefore",
        "addonAfter",
        "prefix",
        "suffix",
        "allowClear",
        // Input elements must be either controlled or uncontrolled,
        // specify either the value prop, or the defaultValue prop, but not both.
        "defaultValue",
        "showCount",
        "count",
        "classes",
        "htmlSize",
        "styles",
        "classNames"
      ]);
      return /* @__PURE__ */ React.createElement("input", _extends({
        autoComplete
      }, otherProps, {
        onChange: onInternalChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onKeyDown: handleKeyDown,
        className: cx(prefixCls, _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled), classNames === null || classNames === void 0 ? void 0 : classNames.input),
        style: styles === null || styles === void 0 ? void 0 : styles.input,
        ref: inputRef,
        size: htmlSize,
        type: type4,
        onCompositionStart: function onCompositionStart(e2) {
          compositionRef.current = true;
          _onCompositionStart === null || _onCompositionStart === void 0 || _onCompositionStart(e2);
        },
        onCompositionEnd: onInternalCompositionEnd
      }));
    };
    var getSuffix = function getSuffix2() {
      var hasMaxLength = Number(mergedMax) > 0;
      if (suffix || countConfig.show) {
        var dataCount = countConfig.showFormatter ? countConfig.showFormatter({
          value: formatValue,
          count: valueLength,
          maxLength: mergedMax
        }) : "".concat(valueLength).concat(hasMaxLength ? " / ".concat(mergedMax) : "");
        return /* @__PURE__ */ React.createElement(React.Fragment, null, countConfig.show && /* @__PURE__ */ React.createElement("span", {
          className: cx("".concat(prefixCls, "-show-count-suffix"), _defineProperty({}, "".concat(prefixCls, "-show-count-has-suffix"), !!suffix), classNames === null || classNames === void 0 ? void 0 : classNames.count),
          style: _objectSpread2({}, styles === null || styles === void 0 ? void 0 : styles.count)
        }, dataCount), suffix);
      }
      return null;
    };
    return /* @__PURE__ */ React.createElement(BaseInput, _extends({}, rest, {
      prefixCls,
      className: cx(className, outOfRangeCls),
      handleReset,
      value: formatValue,
      focused,
      triggerFocus: focus,
      suffix: getSuffix(),
      disabled,
      classes,
      classNames,
      styles
    }), getInputElement());
  });
  const Group = (props) => {
    const {
      getPrefixCls,
      direction
    } = React.useContext(ConfigContext);
    const {
      prefixCls: customizePrefixCls,
      className
    } = props;
    const prefixCls = getPrefixCls("input-group", customizePrefixCls);
    const inputPrefixCls = getPrefixCls("input");
    const [wrapCSSVar, hashId] = useStyle$3(inputPrefixCls);
    const cls = cx(prefixCls, {
      [`${prefixCls}-lg`]: props.size === "large",
      [`${prefixCls}-sm`]: props.size === "small",
      [`${prefixCls}-compact`]: props.compact,
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, hashId, className);
    const formItemContext = React.useContext(FormItemInputContext);
    const groupFormItemContext = React.useMemo(() => Object.assign(Object.assign({}, formItemContext), {
      isFormItemInput: false
    }), [formItemContext]);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("span", {
      className: cls,
      style: props.style,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      onFocus: props.onFocus,
      onBlur: props.onBlur
    }, /* @__PURE__ */ React__namespace.createElement(FormItemInputContext.Provider, {
      value: groupFormItemContext
    }, props.children)));
  };
  const getAllowClear = (allowClear) => {
    let mergedAllowClear;
    if (typeof allowClear === "object" && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) {
      mergedAllowClear = allowClear;
    } else if (allowClear) {
      mergedAllowClear = {
        clearIcon: /* @__PURE__ */ React.createElement(RefIcon$8, null)
      };
    }
    return mergedAllowClear;
  };
  function useRemovePasswordTimeout(inputRef, triggerOnMount) {
    const removePasswordTimeoutRef = React.useRef([]);
    const removePasswordTimeout = () => {
      removePasswordTimeoutRef.current.push(setTimeout(() => {
        var _a, _b, _c, _d;
        if (((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input) && ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.input.getAttribute("type")) === "password" && ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.input.hasAttribute("value"))) {
          (_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.input.removeAttribute("value");
        }
      }));
    };
    React.useEffect(() => {
      if (triggerOnMount) {
        removePasswordTimeout();
      }
      return () => removePasswordTimeoutRef.current.forEach((timer) => {
        if (timer) {
          clearTimeout(timer);
        }
      });
    }, []);
    return removePasswordTimeout;
  }
  function hasPrefixSuffix(props) {
    return !!(props.prefix || props.suffix || props.allowClear || props.showCount);
  }
  var __rest$7 = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  function triggerFocus(element, option) {
    if (!element) {
      return;
    }
    element.focus(option);
    const {
      cursor: cursor2
    } = option || {};
    if (cursor2) {
      const len = element.value.length;
      switch (cursor2) {
        case "start":
          element.setSelectionRange(0, 0);
          break;
        case "end":
          element.setSelectionRange(len, len);
          break;
        default:
          element.setSelectionRange(0, len);
      }
    }
  }
  const Input$1 = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var _a;
    const {
      prefixCls: customizePrefixCls,
      bordered = true,
      status: customStatus,
      size: customSize,
      disabled: customDisabled,
      onBlur,
      onFocus,
      suffix,
      allowClear,
      addonAfter,
      addonBefore,
      className,
      style: style2,
      styles,
      rootClassName,
      onChange,
      classNames: classes,
      variant: customVariant
    } = props, rest = __rest$7(props, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]);
    const {
      getPrefixCls,
      direction,
      input
    } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("input", customizePrefixCls);
    const inputRef = React.useRef(null);
    const rootCls = useCSSVarCls(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$3(prefixCls, rootCls);
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    const mergedSize = useSize((ctx) => {
      var _a2;
      return (_a2 = customSize !== null && customSize !== void 0 ? customSize : compactSize) !== null && _a2 !== void 0 ? _a2 : ctx;
    });
    const disabled = React.useContext(DisabledContext);
    const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    const {
      status: contextStatus,
      hasFeedback,
      feedbackIcon
    } = React.useContext(FormItemInputContext);
    const mergedStatus = getMergedStatus(contextStatus, customStatus);
    const inputHasPrefixSuffix = hasPrefixSuffix(props) || !!hasFeedback;
    React.useRef(inputHasPrefixSuffix);
    const removePasswordTimeout = useRemovePasswordTimeout(inputRef, true);
    const handleBlur = (e2) => {
      removePasswordTimeout();
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(e2);
    };
    const handleFocus = (e2) => {
      removePasswordTimeout();
      onFocus === null || onFocus === void 0 ? void 0 : onFocus(e2);
    };
    const handleChange = (e2) => {
      removePasswordTimeout();
      onChange === null || onChange === void 0 ? void 0 : onChange(e2);
    };
    const suffixNode = (hasFeedback || suffix) && /* @__PURE__ */ React.createElement(React.Fragment, null, suffix, hasFeedback && feedbackIcon);
    const getAddon = (addon) => addon && /* @__PURE__ */ React.createElement(NoCompactStyle, null, /* @__PURE__ */ React.createElement(NoFormStyle, {
      override: true,
      status: true
    }, addon));
    const mergedAllowClear = getAllowClear(allowClear !== null && allowClear !== void 0 ? allowClear : input === null || input === void 0 ? void 0 : input.allowClear);
    const [variant, enableVariantCls] = useVariant(customVariant, bordered);
    return wrapCSSVar(/* @__PURE__ */ React.createElement(Input$2, Object.assign({
      ref: composeRef(ref, inputRef),
      prefixCls,
      autoComplete: input === null || input === void 0 ? void 0 : input.autoComplete
    }, rest, {
      disabled: mergedDisabled,
      onBlur: handleBlur,
      onFocus: handleFocus,
      style: Object.assign(Object.assign({}, input === null || input === void 0 ? void 0 : input.style), style2),
      styles: Object.assign(Object.assign({}, input === null || input === void 0 ? void 0 : input.styles), styles),
      suffix: suffixNode,
      allowClear: mergedAllowClear,
      className: cx(className, rootClassName, cssVarCls, rootCls, compactItemClassnames, input === null || input === void 0 ? void 0 : input.className),
      onChange: handleChange,
      addonBefore: getAddon(addonBefore),
      addonAfter: getAddon(addonAfter),
      classNames: Object.assign(Object.assign(Object.assign({}, classes), input === null || input === void 0 ? void 0 : input.classNames), {
        input: cx({
          [`${prefixCls}-sm`]: mergedSize === "small",
          [`${prefixCls}-lg`]: mergedSize === "large",
          [`${prefixCls}-rtl`]: direction === "rtl"
        }, classes === null || classes === void 0 ? void 0 : classes.input, (_a = input === null || input === void 0 ? void 0 : input.classNames) === null || _a === void 0 ? void 0 : _a.input, hashId),
        variant: cx({
          [`${prefixCls}-${variant}`]: enableVariantCls
        }, getStatusClassNames(prefixCls, mergedStatus)),
        affixWrapper: cx({
          [`${prefixCls}-affix-wrapper-sm`]: mergedSize === "small",
          [`${prefixCls}-affix-wrapper-lg`]: mergedSize === "large",
          [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl"
        }, hashId),
        wrapper: cx({
          [`${prefixCls}-group-rtl`]: direction === "rtl"
        }, hashId),
        groupWrapper: cx({
          [`${prefixCls}-group-wrapper-sm`]: mergedSize === "small",
          [`${prefixCls}-group-wrapper-lg`]: mergedSize === "large",
          [`${prefixCls}-group-wrapper-rtl`]: direction === "rtl",
          [`${prefixCls}-group-wrapper-${variant}`]: enableVariantCls
        }, getStatusClassNames(`${prefixCls}-group-wrapper`, mergedStatus, hasFeedback), hashId)
      })
    })));
  });
  const genOTPStyle = (token2) => {
    const {
      componentCls,
      paddingXS
    } = token2;
    return {
      [`${componentCls}`]: {
        display: "inline-flex",
        alignItems: "center",
        flexWrap: "nowrap",
        columnGap: paddingXS,
        "&-rtl": {
          direction: "rtl"
        },
        [`${componentCls}-input`]: {
          textAlign: "center",
          paddingInline: token2.paddingXXS
        },
        // ================= Size =================
        [`&${componentCls}-sm ${componentCls}-input`]: {
          paddingInline: token2.calc(token2.paddingXXS).div(2).equal()
        },
        [`&${componentCls}-lg ${componentCls}-input`]: {
          paddingInline: token2.paddingXS
        }
      }
    };
  };
  const useStyle$1 = genStyleHooks(["Input", "OTP"], (token2) => {
    const inputToken = merge$1(token2, initInputToken(token2));
    return [genOTPStyle(inputToken)];
  }, initComponentToken);
  var __rest$6 = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  const OTPInput = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    const {
      value,
      onChange,
      onActiveChange,
      index: index2,
      mask
    } = props, restProps = __rest$6(props, ["value", "onChange", "onActiveChange", "index", "mask"]);
    const internalValue = value && typeof mask === "string" ? mask : value;
    const onInternalChange = (e2) => {
      onChange(index2, e2.target.value);
    };
    const inputRef = React__namespace.useRef(null);
    React__namespace.useImperativeHandle(ref, () => inputRef.current);
    const syncSelection = () => {
      wrapperRaf(() => {
        var _a;
        const inputEle = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input;
        if (document.activeElement === inputEle && inputEle) {
          inputEle.select();
        }
      });
    };
    const onInternalKeyDown = (_ref7) => {
      let {
        key
      } = _ref7;
      if (key === "ArrowLeft") {
        onActiveChange(index2 - 1);
      } else if (key === "ArrowRight") {
        onActiveChange(index2 + 1);
      }
      syncSelection();
    };
    const onInternalKeyUp = (e2) => {
      if (e2.key === "Backspace" && !value) {
        onActiveChange(index2 - 1);
      }
      syncSelection();
    };
    return /* @__PURE__ */ React__namespace.createElement(Input$1, Object.assign({}, restProps, {
      ref: inputRef,
      value: internalValue,
      onInput: onInternalChange,
      onFocus: syncSelection,
      onKeyDown: onInternalKeyDown,
      onKeyUp: onInternalKeyUp,
      onMouseDown: syncSelection,
      onMouseUp: syncSelection,
      type: mask === true ? "password" : "text"
    }));
  });
  var __rest$5 = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  function strToArr(str) {
    return (str || "").split("");
  }
  const OTP = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    const {
      prefixCls: customizePrefixCls,
      length: length2 = 6,
      size: customSize,
      defaultValue,
      value,
      onChange,
      formatter,
      variant,
      disabled,
      status: customStatus,
      autoFocus,
      mask
    } = props, restProps = __rest$5(props, ["prefixCls", "length", "size", "defaultValue", "value", "onChange", "formatter", "variant", "disabled", "status", "autoFocus", "mask"]);
    const {
      getPrefixCls,
      direction
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("otp", customizePrefixCls);
    const domAttrs = pickAttrs(restProps, {
      aria: true,
      data: true,
      attr: true
    });
    const rootCls = useCSSVarCls(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$1(prefixCls, rootCls);
    const mergedSize = useSize((ctx) => customSize !== null && customSize !== void 0 ? customSize : ctx);
    const formContext = React__namespace.useContext(FormItemInputContext);
    const mergedStatus = getMergedStatus(formContext.status, customStatus);
    const proxyFormContext = React__namespace.useMemo(() => Object.assign(Object.assign({}, formContext), {
      status: mergedStatus,
      hasFeedback: false,
      feedbackIcon: null
    }), [formContext, mergedStatus]);
    const containerRef = React__namespace.useRef(null);
    const refs = React__namespace.useRef({});
    React__namespace.useImperativeHandle(ref, () => ({
      focus: () => {
        var _a;
        (_a = refs.current[0]) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: () => {
        var _a;
        for (let i2 = 0; i2 < length2; i2 += 1) {
          (_a = refs.current[i2]) === null || _a === void 0 ? void 0 : _a.blur();
        }
      },
      nativeElement: containerRef.current
    }));
    const internalFormatter = (txt) => formatter ? formatter(txt) : txt;
    const [valueCells, setValueCells] = React__namespace.useState(strToArr(internalFormatter(defaultValue || "")));
    React__namespace.useEffect(() => {
      if (value !== void 0) {
        setValueCells(strToArr(value));
      }
    }, [value]);
    const triggerValueCellsChange = useEvent((nextValueCells) => {
      setValueCells(nextValueCells);
      if (onChange && nextValueCells.length === length2 && nextValueCells.every((c2) => c2) && nextValueCells.some((c2, index2) => valueCells[index2] !== c2)) {
        onChange(nextValueCells.join(""));
      }
    });
    const patchValue = useEvent((index2, txt) => {
      let nextCells = _toConsumableArray(valueCells);
      for (let i2 = 0; i2 < index2; i2 += 1) {
        if (!nextCells[i2]) {
          nextCells[i2] = "";
        }
      }
      if (txt.length <= 1) {
        nextCells[index2] = txt;
      } else {
        nextCells = nextCells.slice(0, index2).concat(strToArr(txt));
      }
      nextCells = nextCells.slice(0, length2);
      for (let i2 = nextCells.length - 1; i2 >= 0; i2 -= 1) {
        if (nextCells[i2]) {
          break;
        }
        nextCells.pop();
      }
      const formattedValue = internalFormatter(nextCells.map((c2) => c2 || " ").join(""));
      nextCells = strToArr(formattedValue).map((c2, i2) => {
        if (c2 === " " && !nextCells[i2]) {
          return nextCells[i2];
        }
        return c2;
      });
      return nextCells;
    });
    const onInputChange = (index2, txt) => {
      var _a;
      const nextCells = patchValue(index2, txt);
      const nextIndex = Math.min(index2 + txt.length, length2 - 1);
      if (nextIndex !== index2) {
        (_a = refs.current[nextIndex]) === null || _a === void 0 ? void 0 : _a.focus();
      }
      triggerValueCellsChange(nextCells);
    };
    const onInputActiveChange = (nextIndex) => {
      var _a;
      (_a = refs.current[nextIndex]) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const inputSharedProps = {
      variant,
      disabled,
      status: mergedStatus,
      mask
    };
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", Object.assign({}, domAttrs, {
      ref: containerRef,
      className: cx(prefixCls, {
        [`${prefixCls}-sm`]: mergedSize === "small",
        [`${prefixCls}-lg`]: mergedSize === "large",
        [`${prefixCls}-rtl`]: direction === "rtl"
      }, cssVarCls, hashId)
    }), /* @__PURE__ */ React__namespace.createElement(FormItemInputContext.Provider, {
      value: proxyFormContext
    }, Array.from({
      length: length2
    }).map((_, index2) => {
      const key = `otp-${index2}`;
      const singleValue = valueCells[index2] || "";
      return /* @__PURE__ */ React__namespace.createElement(OTPInput, Object.assign({
        ref: (inputEle) => {
          refs.current[index2] = inputEle;
        },
        key,
        index: index2,
        size: mergedSize,
        htmlSize: 1,
        className: `${prefixCls}-input`,
        onChange: onInputChange,
        value: singleValue,
        onActiveChange: onInputActiveChange,
        autoFocus: index2 === 0 && autoFocus
      }, inputSharedProps));
    }))));
  });
  var EyeInvisibleOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { "tag": "path", "attrs": { "d": "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, "name": "eye-invisible", "theme": "outlined" };
  var EyeInvisibleOutlined = function EyeInvisibleOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: EyeInvisibleOutlined$1
    }));
  };
  var RefIcon$1 = /* @__PURE__ */ React__namespace.forwardRef(EyeInvisibleOutlined);
  var EyeOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, "name": "eye", "theme": "outlined" };
  var EyeOutlined = function EyeOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: EyeOutlined$1
    }));
  };
  var RefIcon = /* @__PURE__ */ React__namespace.forwardRef(EyeOutlined);
  var __rest$4 = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  const defaultIconRender = (visible) => visible ? /* @__PURE__ */ React__namespace.createElement(RefIcon, null) : /* @__PURE__ */ React__namespace.createElement(RefIcon$1, null);
  const actionMap = {
    click: "onClick",
    hover: "onMouseOver"
  };
  const Password = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    const {
      disabled,
      action = "click",
      visibilityToggle = true,
      iconRender = defaultIconRender
    } = props;
    const visibilityControlled = typeof visibilityToggle === "object" && visibilityToggle.visible !== void 0;
    const [visible, setVisible] = React.useState(() => visibilityControlled ? visibilityToggle.visible : false);
    const inputRef = React.useRef(null);
    React__namespace.useEffect(() => {
      if (visibilityControlled) {
        setVisible(visibilityToggle.visible);
      }
    }, [visibilityControlled, visibilityToggle]);
    const removePasswordTimeout = useRemovePasswordTimeout(inputRef);
    const onVisibleChange = () => {
      if (disabled) {
        return;
      }
      if (visible) {
        removePasswordTimeout();
      }
      setVisible((prevState) => {
        var _a;
        const newState = !prevState;
        if (typeof visibilityToggle === "object") {
          (_a = visibilityToggle.onVisibleChange) === null || _a === void 0 ? void 0 : _a.call(visibilityToggle, newState);
        }
        return newState;
      });
    };
    const getIcon = (prefixCls2) => {
      const iconTrigger = actionMap[action] || "";
      const icon = iconRender(visible);
      const iconProps = {
        [iconTrigger]: onVisibleChange,
        className: `${prefixCls2}-icon`,
        key: "passwordIcon",
        onMouseDown: (e2) => {
          e2.preventDefault();
        },
        onMouseUp: (e2) => {
          e2.preventDefault();
        }
      };
      return /* @__PURE__ */ React__namespace.cloneElement(/* @__PURE__ */ React__namespace.isValidElement(icon) ? icon : /* @__PURE__ */ React__namespace.createElement("span", null, icon), iconProps);
    };
    const {
      className,
      prefixCls: customizePrefixCls,
      inputPrefixCls: customizeInputPrefixCls,
      size: size2
    } = props, restProps = __rest$4(props, ["className", "prefixCls", "inputPrefixCls", "size"]);
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const inputPrefixCls = getPrefixCls("input", customizeInputPrefixCls);
    const prefixCls = getPrefixCls("input-password", customizePrefixCls);
    const suffixIcon = visibilityToggle && getIcon(prefixCls);
    const inputClassName = cx(prefixCls, className, {
      [`${prefixCls}-${size2}`]: !!size2
    });
    const omittedProps = Object.assign(Object.assign({}, omit(restProps, ["suffix", "iconRender", "visibilityToggle"])), {
      type: visible ? "text" : "password",
      className: inputClassName,
      prefixCls: inputPrefixCls,
      suffix: suffixIcon
    });
    if (size2) {
      omittedProps.size = size2;
    }
    return /* @__PURE__ */ React__namespace.createElement(Input$1, Object.assign({
      ref: composeRef(ref, inputRef)
    }, omittedProps));
  });
  var __rest$3 = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  const Search$1 = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    const {
      prefixCls: customizePrefixCls,
      inputPrefixCls: customizeInputPrefixCls,
      className,
      size: customizeSize,
      suffix,
      enterButton = false,
      addonAfter,
      loading,
      disabled,
      onSearch: customOnSearch,
      onChange: customOnChange,
      onCompositionStart,
      onCompositionEnd
    } = props, restProps = __rest$3(props, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]);
    const {
      getPrefixCls,
      direction
    } = React__namespace.useContext(ConfigContext);
    const composedRef = React__namespace.useRef(false);
    const prefixCls = getPrefixCls("input-search", customizePrefixCls);
    const inputPrefixCls = getPrefixCls("input", customizeInputPrefixCls);
    const {
      compactSize
    } = useCompactItemContext(prefixCls, direction);
    const size2 = useSize((ctx) => {
      var _a;
      return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
    });
    const inputRef = React__namespace.useRef(null);
    const onChange = (e2) => {
      if (e2 && e2.target && e2.type === "click" && customOnSearch) {
        customOnSearch(e2.target.value, e2, {
          source: "clear"
        });
      }
      if (customOnChange) {
        customOnChange(e2);
      }
    };
    const onMouseDown = (e2) => {
      var _a;
      if (document.activeElement === ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input)) {
        e2.preventDefault();
      }
    };
    const onSearch = (e2) => {
      var _a, _b;
      if (customOnSearch) {
        customOnSearch((_b = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.value, e2, {
          source: "input"
        });
      }
    };
    const onPressEnter = (e2) => {
      if (composedRef.current || loading) {
        return;
      }
      onSearch(e2);
    };
    const searchIcon = typeof enterButton === "boolean" ? /* @__PURE__ */ React__namespace.createElement(RefIcon$2, null) : null;
    const btnClassName = `${prefixCls}-button`;
    let button;
    const enterButtonAsElement = enterButton || {};
    const isAntdButton = enterButtonAsElement.type && enterButtonAsElement.type.__ANT_BUTTON === true;
    if (isAntdButton || enterButtonAsElement.type === "button") {
      button = cloneElement(enterButtonAsElement, Object.assign({
        onMouseDown,
        onClick: (e2) => {
          var _a, _b;
          (_b = (_a = enterButtonAsElement === null || enterButtonAsElement === void 0 ? void 0 : enterButtonAsElement.props) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e2);
          onSearch(e2);
        },
        key: "enterButton"
      }, isAntdButton ? {
        className: btnClassName,
        size: size2
      } : {}));
    } else {
      button = /* @__PURE__ */ React__namespace.createElement(Button, {
        className: btnClassName,
        type: enterButton ? "primary" : void 0,
        size: size2,
        disabled,
        key: "enterButton",
        onMouseDown,
        onClick: onSearch,
        loading,
        icon: searchIcon
      }, enterButton);
    }
    if (addonAfter) {
      button = [button, cloneElement(addonAfter, {
        key: "addonAfter"
      })];
    }
    const cls = cx(prefixCls, {
      [`${prefixCls}-rtl`]: direction === "rtl",
      [`${prefixCls}-${size2}`]: !!size2,
      [`${prefixCls}-with-button`]: !!enterButton
    }, className);
    const handleOnCompositionStart = (e2) => {
      composedRef.current = true;
      onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e2);
    };
    const handleOnCompositionEnd = (e2) => {
      composedRef.current = false;
      onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e2);
    };
    return /* @__PURE__ */ React__namespace.createElement(Input$1, Object.assign({
      ref: composeRef(inputRef, ref),
      onPressEnter
    }, restProps, {
      size: size2,
      onCompositionStart: handleOnCompositionStart,
      onCompositionEnd: handleOnCompositionEnd,
      prefixCls: inputPrefixCls,
      addonAfter: button,
      suffix,
      onChange,
      className: cls,
      disabled
    }));
  });
  var HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n  pointer-events: none !important;\n";
  var SIZING_STYLE = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"];
  var computedStyleCache = {};
  var hiddenTextarea;
  function calculateNodeStyling(node2) {
    var useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var nodeRef = node2.getAttribute("id") || node2.getAttribute("data-reactid") || node2.getAttribute("name");
    if (useCache && computedStyleCache[nodeRef]) {
      return computedStyleCache[nodeRef];
    }
    var style2 = window.getComputedStyle(node2);
    var boxSizing = style2.getPropertyValue("box-sizing") || style2.getPropertyValue("-moz-box-sizing") || style2.getPropertyValue("-webkit-box-sizing");
    var paddingSize = parseFloat(style2.getPropertyValue("padding-bottom")) + parseFloat(style2.getPropertyValue("padding-top"));
    var borderSize = parseFloat(style2.getPropertyValue("border-bottom-width")) + parseFloat(style2.getPropertyValue("border-top-width"));
    var sizingStyle = SIZING_STYLE.map(function(name) {
      return "".concat(name, ":").concat(style2.getPropertyValue(name));
    }).join(";");
    var nodeInfo = {
      sizingStyle,
      paddingSize,
      borderSize,
      boxSizing
    };
    if (useCache && nodeRef) {
      computedStyleCache[nodeRef] = nodeInfo;
    }
    return nodeInfo;
  }
  function calculateAutoSizeStyle(uiTextNode) {
    var useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var minRows = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var maxRows = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    if (!hiddenTextarea) {
      hiddenTextarea = document.createElement("textarea");
      hiddenTextarea.setAttribute("tab-index", "-1");
      hiddenTextarea.setAttribute("aria-hidden", "true");
      document.body.appendChild(hiddenTextarea);
    }
    if (uiTextNode.getAttribute("wrap")) {
      hiddenTextarea.setAttribute("wrap", uiTextNode.getAttribute("wrap"));
    } else {
      hiddenTextarea.removeAttribute("wrap");
    }
    var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache), paddingSize = _calculateNodeStyling.paddingSize, borderSize = _calculateNodeStyling.borderSize, boxSizing = _calculateNodeStyling.boxSizing, sizingStyle = _calculateNodeStyling.sizingStyle;
    hiddenTextarea.setAttribute("style", "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || "";
    var minHeight = void 0;
    var maxHeight = void 0;
    var overflowY;
    var height = hiddenTextarea.scrollHeight;
    if (boxSizing === "border-box") {
      height += borderSize;
    } else if (boxSizing === "content-box") {
      height -= paddingSize;
    }
    if (minRows !== null || maxRows !== null) {
      hiddenTextarea.value = " ";
      var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
      if (minRows !== null) {
        minHeight = singleRowHeight * minRows;
        if (boxSizing === "border-box") {
          minHeight = minHeight + paddingSize + borderSize;
        }
        height = Math.max(minHeight, height);
      }
      if (maxRows !== null) {
        maxHeight = singleRowHeight * maxRows;
        if (boxSizing === "border-box") {
          maxHeight = maxHeight + paddingSize + borderSize;
        }
        overflowY = height > maxHeight ? "" : "hidden";
        height = Math.min(maxHeight, height);
      }
    }
    var style2 = {
      height,
      overflowY,
      resize: "none"
    };
    if (minHeight) {
      style2.minHeight = minHeight;
    }
    if (maxHeight) {
      style2.maxHeight = maxHeight;
    }
    return style2;
  }
  var _excluded$2 = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"];
  var RESIZE_START = 0;
  var RESIZE_MEASURING = 1;
  var RESIZE_STABLE = 2;
  var ResizableTextArea = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var _ref7 = props, prefixCls = _ref7.prefixCls;
    _ref7.onPressEnter;
    var defaultValue = _ref7.defaultValue, value = _ref7.value, autoSize = _ref7.autoSize, onResize2 = _ref7.onResize, className = _ref7.className, style2 = _ref7.style, disabled = _ref7.disabled, onChange = _ref7.onChange;
    _ref7.onInternalAutoSize;
    var restProps = _objectWithoutProperties(_ref7, _excluded$2);
    var _useMergedState = useMergedState(defaultValue, {
      value,
      postState: function postState(val) {
        return val !== null && val !== void 0 ? val : "";
      }
    }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedValue = _useMergedState2[0], setMergedValue = _useMergedState2[1];
    var onInternalChange = function onInternalChange2(event) {
      setMergedValue(event.target.value);
      onChange === null || onChange === void 0 || onChange(event);
    };
    var textareaRef = React__namespace.useRef();
    React__namespace.useImperativeHandle(ref, function() {
      return {
        textArea: textareaRef.current
      };
    });
    var _React$useMemo = React__namespace.useMemo(function() {
      if (autoSize && _typeof(autoSize) === "object") {
        return [autoSize.minRows, autoSize.maxRows];
      }
      return [];
    }, [autoSize]), _React$useMemo2 = _slicedToArray(_React$useMemo, 2), minRows = _React$useMemo2[0], maxRows = _React$useMemo2[1];
    var needAutoSize = !!autoSize;
    var fixFirefoxAutoScroll = function fixFirefoxAutoScroll2() {
      try {
        if (document.activeElement === textareaRef.current) {
          var _textareaRef$current = textareaRef.current, selectionStart = _textareaRef$current.selectionStart, selectionEnd = _textareaRef$current.selectionEnd, scrollTop = _textareaRef$current.scrollTop;
          textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
          textareaRef.current.scrollTop = scrollTop;
        }
      } catch (e2) {
      }
    };
    var _React$useState = React__namespace.useState(RESIZE_STABLE), _React$useState2 = _slicedToArray(_React$useState, 2), resizeState = _React$useState2[0], setResizeState = _React$useState2[1];
    var _React$useState3 = React__namespace.useState(), _React$useState4 = _slicedToArray(_React$useState3, 2), autoSizeStyle = _React$useState4[0], setAutoSizeStyle = _React$useState4[1];
    var startResize = function startResize2() {
      setResizeState(RESIZE_START);
    };
    useLayoutEffect(function() {
      if (needAutoSize) {
        startResize();
      }
    }, [value, minRows, maxRows, needAutoSize]);
    useLayoutEffect(function() {
      if (resizeState === RESIZE_START) {
        setResizeState(RESIZE_MEASURING);
      } else if (resizeState === RESIZE_MEASURING) {
        var textareaStyles = calculateAutoSizeStyle(textareaRef.current, false, minRows, maxRows);
        setResizeState(RESIZE_STABLE);
        setAutoSizeStyle(textareaStyles);
      } else {
        fixFirefoxAutoScroll();
      }
    }, [resizeState]);
    var resizeRafRef = React__namespace.useRef();
    var cleanRaf = function cleanRaf2() {
      wrapperRaf.cancel(resizeRafRef.current);
    };
    var onInternalResize = function onInternalResize2(size2) {
      if (resizeState === RESIZE_STABLE) {
        onResize2 === null || onResize2 === void 0 || onResize2(size2);
        if (autoSize) {
          cleanRaf();
          resizeRafRef.current = wrapperRaf(function() {
            startResize();
          });
        }
      }
    };
    React__namespace.useEffect(function() {
      return cleanRaf;
    }, []);
    var mergedAutoSizeStyle = needAutoSize ? autoSizeStyle : null;
    var mergedStyle = _objectSpread2(_objectSpread2({}, style2), mergedAutoSizeStyle);
    if (resizeState === RESIZE_START || resizeState === RESIZE_MEASURING) {
      mergedStyle.overflowY = "hidden";
      mergedStyle.overflowX = "hidden";
    }
    return /* @__PURE__ */ React__namespace.createElement(RefResizeObserver, {
      onResize: onInternalResize,
      disabled: !(autoSize || onResize2)
    }, /* @__PURE__ */ React__namespace.createElement("textarea", _extends({}, restProps, {
      ref: textareaRef,
      style: mergedStyle,
      className: cx(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled)),
      disabled,
      value: mergedValue,
      onChange: onInternalChange
    })));
  });
  var _excluded$1 = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "readOnly"];
  var TextArea$1 = /* @__PURE__ */ React.forwardRef(function(_ref7, ref) {
    var _countConfig$max;
    var defaultValue = _ref7.defaultValue, customValue = _ref7.value, onFocus = _ref7.onFocus, onBlur = _ref7.onBlur, onChange = _ref7.onChange, allowClear = _ref7.allowClear, maxLength = _ref7.maxLength, onCompositionStart = _ref7.onCompositionStart, onCompositionEnd = _ref7.onCompositionEnd, suffix = _ref7.suffix, _ref$prefixCls = _ref7.prefixCls, prefixCls = _ref$prefixCls === void 0 ? "rc-textarea" : _ref$prefixCls, showCount = _ref7.showCount, count = _ref7.count, className = _ref7.className, style2 = _ref7.style, disabled = _ref7.disabled, hidden = _ref7.hidden, classNames = _ref7.classNames, styles = _ref7.styles, onResize2 = _ref7.onResize, readOnly = _ref7.readOnly, rest = _objectWithoutProperties(_ref7, _excluded$1);
    var _useMergedState = useMergedState(defaultValue, {
      value: customValue,
      defaultValue
    }), _useMergedState2 = _slicedToArray(_useMergedState, 2), value = _useMergedState2[0], setValue = _useMergedState2[1];
    var formatValue = value === void 0 || value === null ? "" : String(value);
    var _React$useState = React.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), focused = _React$useState2[0], setFocused = _React$useState2[1];
    var compositionRef = React.useRef(false);
    var _React$useState3 = React.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), textareaResized = _React$useState4[0], setTextareaResized = _React$useState4[1];
    var holderRef = React.useRef(null);
    var resizableTextAreaRef = React.useRef(null);
    var getTextArea = function getTextArea2() {
      var _resizableTextAreaRef;
      return (_resizableTextAreaRef = resizableTextAreaRef.current) === null || _resizableTextAreaRef === void 0 ? void 0 : _resizableTextAreaRef.textArea;
    };
    var focus = function focus2() {
      getTextArea().focus();
    };
    React.useImperativeHandle(ref, function() {
      var _holderRef$current;
      return {
        resizableTextArea: resizableTextAreaRef.current,
        focus,
        blur: function blur() {
          getTextArea().blur();
        },
        nativeElement: ((_holderRef$current = holderRef.current) === null || _holderRef$current === void 0 ? void 0 : _holderRef$current.nativeElement) || getTextArea()
      };
    });
    React.useEffect(function() {
      setFocused(function(prev2) {
        return !disabled && prev2;
      });
    }, [disabled]);
    var _React$useState5 = React.useState(null), _React$useState6 = _slicedToArray(_React$useState5, 2), selection = _React$useState6[0], setSelection = _React$useState6[1];
    React.useEffect(function() {
      if (selection) {
        var _getTextArea;
        (_getTextArea = getTextArea()).setSelectionRange.apply(_getTextArea, _toConsumableArray(selection));
      }
    }, [selection]);
    var countConfig = useCount(count, showCount);
    var mergedMax = (_countConfig$max = countConfig.max) !== null && _countConfig$max !== void 0 ? _countConfig$max : maxLength;
    var hasMaxLength = Number(mergedMax) > 0;
    var valueLength = countConfig.strategy(formatValue);
    var isOutOfRange = !!mergedMax && valueLength > mergedMax;
    var triggerChange = function triggerChange2(e2, currentValue) {
      var cutValue = currentValue;
      if (!compositionRef.current && countConfig.exceedFormatter && countConfig.max && countConfig.strategy(currentValue) > countConfig.max) {
        cutValue = countConfig.exceedFormatter(currentValue, {
          max: countConfig.max
        });
        if (currentValue !== cutValue) {
          setSelection([getTextArea().selectionStart || 0, getTextArea().selectionEnd || 0]);
        }
      }
      setValue(cutValue);
      resolveOnChange(e2.currentTarget, e2, onChange, cutValue);
    };
    var onInternalCompositionStart = function onInternalCompositionStart2(e2) {
      compositionRef.current = true;
      onCompositionStart === null || onCompositionStart === void 0 || onCompositionStart(e2);
    };
    var onInternalCompositionEnd = function onInternalCompositionEnd2(e2) {
      compositionRef.current = false;
      triggerChange(e2, e2.currentTarget.value);
      onCompositionEnd === null || onCompositionEnd === void 0 || onCompositionEnd(e2);
    };
    var onInternalChange = function onInternalChange2(e2) {
      triggerChange(e2, e2.target.value);
    };
    var handleKeyDown = function handleKeyDown2(e2) {
      var onPressEnter = rest.onPressEnter, onKeyDown = rest.onKeyDown;
      if (e2.key === "Enter" && onPressEnter) {
        onPressEnter(e2);
      }
      onKeyDown === null || onKeyDown === void 0 || onKeyDown(e2);
    };
    var handleFocus = function handleFocus2(e2) {
      setFocused(true);
      onFocus === null || onFocus === void 0 || onFocus(e2);
    };
    var handleBlur = function handleBlur2(e2) {
      setFocused(false);
      onBlur === null || onBlur === void 0 || onBlur(e2);
    };
    var handleReset = function handleReset2(e2) {
      setValue("");
      focus();
      resolveOnChange(getTextArea(), e2, onChange);
    };
    var suffixNode = suffix;
    var dataCount;
    if (countConfig.show) {
      if (countConfig.showFormatter) {
        dataCount = countConfig.showFormatter({
          value: formatValue,
          count: valueLength,
          maxLength: mergedMax
        });
      } else {
        dataCount = "".concat(valueLength).concat(hasMaxLength ? " / ".concat(mergedMax) : "");
      }
      suffixNode = /* @__PURE__ */ React.createElement(React.Fragment, null, suffixNode, /* @__PURE__ */ React.createElement("span", {
        className: cx("".concat(prefixCls, "-data-count"), classNames === null || classNames === void 0 ? void 0 : classNames.count),
        style: styles === null || styles === void 0 ? void 0 : styles.count
      }, dataCount));
    }
    var handleResize = function handleResize2(size2) {
      var _getTextArea2;
      onResize2 === null || onResize2 === void 0 || onResize2(size2);
      if ((_getTextArea2 = getTextArea()) !== null && _getTextArea2 !== void 0 && _getTextArea2.style.height) {
        setTextareaResized(true);
      }
    };
    var isPureTextArea = !rest.autoSize && !showCount && !allowClear;
    return /* @__PURE__ */ React.createElement(BaseInput, {
      ref: holderRef,
      value: formatValue,
      allowClear,
      handleReset,
      suffix: suffixNode,
      prefixCls,
      classNames: _objectSpread2(_objectSpread2({}, classNames), {}, {
        affixWrapper: cx(classNames === null || classNames === void 0 ? void 0 : classNames.affixWrapper, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-show-count"), showCount), "".concat(prefixCls, "-textarea-allow-clear"), allowClear))
      }),
      disabled,
      focused,
      className: cx(className, isOutOfRange && "".concat(prefixCls, "-out-of-range")),
      style: _objectSpread2(_objectSpread2({}, style2), textareaResized && !isPureTextArea ? {
        height: "auto"
      } : {}),
      dataAttrs: {
        affixWrapper: {
          "data-count": typeof dataCount === "string" ? dataCount : void 0
        }
      },
      hidden,
      readOnly
    }, /* @__PURE__ */ React.createElement(ResizableTextArea, _extends({}, rest, {
      maxLength,
      onKeyDown: handleKeyDown,
      onChange: onInternalChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onCompositionStart: onInternalCompositionStart,
      onCompositionEnd: onInternalCompositionEnd,
      className: cx(classNames === null || classNames === void 0 ? void 0 : classNames.textarea),
      style: _objectSpread2(_objectSpread2({}, styles === null || styles === void 0 ? void 0 : styles.textarea), {}, {
        resize: style2 === null || style2 === void 0 ? void 0 : style2.resize
      }),
      disabled,
      prefixCls,
      onResize: handleResize,
      ref: resizableTextAreaRef,
      readOnly
    })));
  });
  var __rest$2 = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  const TextArea = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var _a, _b;
    const {
      prefixCls: customizePrefixCls,
      bordered = true,
      size: customizeSize,
      disabled: customDisabled,
      status: customStatus,
      allowClear,
      classNames: classes,
      rootClassName,
      className,
      style: style2,
      styles,
      variant: customVariant
    } = props, rest = __rest$2(props, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant"]);
    const {
      getPrefixCls,
      direction,
      textArea
    } = React__namespace.useContext(ConfigContext);
    const mergedSize = useSize(customizeSize);
    const disabled = React__namespace.useContext(DisabledContext);
    const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    const {
      status: contextStatus,
      hasFeedback,
      feedbackIcon
    } = React__namespace.useContext(FormItemInputContext);
    const mergedStatus = getMergedStatus(contextStatus, customStatus);
    const innerRef = React__namespace.useRef(null);
    React__namespace.useImperativeHandle(ref, () => {
      var _a2;
      return {
        resizableTextArea: (_a2 = innerRef.current) === null || _a2 === void 0 ? void 0 : _a2.resizableTextArea,
        focus: (option) => {
          var _a3, _b2;
          triggerFocus((_b2 = (_a3 = innerRef.current) === null || _a3 === void 0 ? void 0 : _a3.resizableTextArea) === null || _b2 === void 0 ? void 0 : _b2.textArea, option);
        },
        blur: () => {
          var _a3;
          return (_a3 = innerRef.current) === null || _a3 === void 0 ? void 0 : _a3.blur();
        }
      };
    });
    const prefixCls = getPrefixCls("input", customizePrefixCls);
    const rootCls = useCSSVarCls(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$3(prefixCls, rootCls);
    const [variant, enableVariantCls] = useVariant(customVariant, bordered);
    const mergedAllowClear = getAllowClear(allowClear !== null && allowClear !== void 0 ? allowClear : textArea === null || textArea === void 0 ? void 0 : textArea.allowClear);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement(TextArea$1, Object.assign({
      autoComplete: textArea === null || textArea === void 0 ? void 0 : textArea.autoComplete
    }, rest, {
      style: Object.assign(Object.assign({}, textArea === null || textArea === void 0 ? void 0 : textArea.style), style2),
      styles: Object.assign(Object.assign({}, textArea === null || textArea === void 0 ? void 0 : textArea.styles), styles),
      disabled: mergedDisabled,
      allowClear: mergedAllowClear,
      className: cx(cssVarCls, rootCls, className, rootClassName, textArea === null || textArea === void 0 ? void 0 : textArea.className),
      classNames: Object.assign(Object.assign(Object.assign({}, classes), textArea === null || textArea === void 0 ? void 0 : textArea.classNames), {
        textarea: cx({
          [`${prefixCls}-sm`]: mergedSize === "small",
          [`${prefixCls}-lg`]: mergedSize === "large"
        }, hashId, classes === null || classes === void 0 ? void 0 : classes.textarea, (_a = textArea === null || textArea === void 0 ? void 0 : textArea.classNames) === null || _a === void 0 ? void 0 : _a.textarea),
        variant: cx({
          [`${prefixCls}-${variant}`]: enableVariantCls
        }, getStatusClassNames(prefixCls, mergedStatus)),
        affixWrapper: cx(`${prefixCls}-textarea-affix-wrapper`, {
          [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl",
          [`${prefixCls}-affix-wrapper-sm`]: mergedSize === "small",
          [`${prefixCls}-affix-wrapper-lg`]: mergedSize === "large",
          [`${prefixCls}-textarea-show-count`]: props.showCount || ((_b = props.count) === null || _b === void 0 ? void 0 : _b.show)
        }, hashId)
      }),
      prefixCls,
      suffix: hasFeedback && /* @__PURE__ */ React__namespace.createElement("span", {
        className: `${prefixCls}-textarea-suffix`
      }, feedbackIcon),
      ref: innerRef
    })));
  });
  const Input = Input$1;
  Input.Group = Group;
  Input.Search = Search$1;
  Input.TextArea = TextArea;
  Input.Password = Password;
  Input.OTP = OTP;
  let message = null;
  let act = (callback) => callback();
  let taskQueue = [];
  let defaultGlobalConfig = {};
  function getGlobalContext() {
    const {
      getContainer: getContainer2,
      duration,
      rtl,
      maxCount,
      top
    } = defaultGlobalConfig;
    const mergedContainer = (getContainer2 === null || getContainer2 === void 0 ? void 0 : getContainer2()) || document.body;
    return {
      getContainer: () => mergedContainer,
      duration,
      rtl,
      maxCount,
      top
    };
  }
  const GlobalHolder = /* @__PURE__ */ React.forwardRef((props, ref) => {
    const {
      messageConfig,
      sync
    } = props;
    const {
      getPrefixCls
    } = React.useContext(ConfigContext);
    const prefixCls = defaultGlobalConfig.prefixCls || getPrefixCls("message");
    const appConfig = React.useContext(AppConfigContext);
    const [api, holder] = useInternalMessage(Object.assign(Object.assign(Object.assign({}, messageConfig), {
      prefixCls
    }), appConfig.message));
    React.useImperativeHandle(ref, () => {
      const instance = Object.assign({}, api);
      Object.keys(instance).forEach((method4) => {
        instance[method4] = function() {
          sync();
          return api[method4].apply(api, arguments);
        };
      });
      return {
        instance,
        sync
      };
    });
    return holder;
  });
  const GlobalHolderWrapper = /* @__PURE__ */ React.forwardRef((_, ref) => {
    const [messageConfig, setMessageConfig] = React.useState(getGlobalContext);
    const sync = () => {
      setMessageConfig(getGlobalContext);
    };
    React.useEffect(sync, []);
    const global2 = globalConfig();
    const rootPrefixCls = global2.getRootPrefixCls();
    const rootIconPrefixCls = global2.getIconPrefixCls();
    const theme2 = global2.getTheme();
    const dom = /* @__PURE__ */ React.createElement(GlobalHolder, {
      ref,
      sync,
      messageConfig
    });
    return /* @__PURE__ */ React.createElement(ConfigProvider$1, {
      prefixCls: rootPrefixCls,
      iconPrefixCls: rootIconPrefixCls,
      theme: theme2
    }, global2.holderRender ? global2.holderRender(dom) : dom);
  });
  function flushNotice() {
    if (!message) {
      const holderFragment = document.createDocumentFragment();
      const newMessage = {
        fragment: holderFragment
      };
      message = newMessage;
      act(() => {
        render(/* @__PURE__ */ React.createElement(GlobalHolderWrapper, {
          ref: (node2) => {
            const {
              instance,
              sync
            } = node2 || {};
            Promise.resolve().then(() => {
              if (!newMessage.instance && instance) {
                newMessage.instance = instance;
                newMessage.sync = sync;
                flushNotice();
              }
            });
          }
        }), holderFragment);
      });
      return;
    }
    if (!message.instance) {
      return;
    }
    taskQueue.forEach((task) => {
      const {
        type: type4,
        skipped
      } = task;
      if (!skipped) {
        switch (type4) {
          case "open": {
            act(() => {
              const closeFn = message.instance.open(Object.assign(Object.assign({}, defaultGlobalConfig), task.config));
              closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
              task.setCloseFn(closeFn);
            });
            break;
          }
          case "destroy":
            act(() => {
              message === null || message === void 0 ? void 0 : message.instance.destroy(task.key);
            });
            break;
          default: {
            act(() => {
              var _message$instance;
              const closeFn = (_message$instance = message.instance)[type4].apply(_message$instance, _toConsumableArray(task.args));
              closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
              task.setCloseFn(closeFn);
            });
          }
        }
      }
    });
    taskQueue = [];
  }
  function setMessageGlobalConfig(config) {
    defaultGlobalConfig = Object.assign(Object.assign({}, defaultGlobalConfig), config);
    act(() => {
      var _a;
      (_a = message === null || message === void 0 ? void 0 : message.sync) === null || _a === void 0 ? void 0 : _a.call(message);
    });
  }
  function open(config) {
    const result = wrapPromiseFn((resolve) => {
      let closeFn;
      const task = {
        type: "open",
        config,
        resolve,
        setCloseFn: (fn) => {
          closeFn = fn;
        }
      };
      taskQueue.push(task);
      return () => {
        if (closeFn) {
          act(() => {
            closeFn();
          });
        } else {
          task.skipped = true;
        }
      };
    });
    flushNotice();
    return result;
  }
  function typeOpen(type4, args) {
    const result = wrapPromiseFn((resolve) => {
      let closeFn;
      const task = {
        type: type4,
        args,
        resolve,
        setCloseFn: (fn) => {
          closeFn = fn;
        }
      };
      taskQueue.push(task);
      return () => {
        if (closeFn) {
          act(() => {
            closeFn();
          });
        } else {
          task.skipped = true;
        }
      };
    });
    flushNotice();
    return result;
  }
  const destroy = (key) => {
    taskQueue.push({
      type: "destroy",
      key
    });
    flushNotice();
  };
  const methods = ["success", "info", "warning", "error", "loading"];
  const baseStaticMethods = {
    open,
    destroy,
    config: setMessageGlobalConfig,
    useMessage,
    _InternalPanelDoNotUseOrYouWillBeFired: PurePanel$3
  };
  const staticMethods = baseStaticMethods;
  methods.forEach((type4) => {
    staticMethods[type4] = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return typeOpen(type4, args);
    };
  });
  var __rest$1 = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  const PurePanel = (props) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      closeIcon,
      closable,
      type: type4,
      title,
      children,
      footer
    } = props, restProps = __rest$1(props, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children", "footer"]);
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const rootPrefixCls = getPrefixCls();
    const prefixCls = customizePrefixCls || getPrefixCls("modal");
    const rootCls = useCSSVarCls(rootPrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$6(prefixCls, rootCls);
    const confirmPrefixCls = `${prefixCls}-confirm`;
    let additionalProps = {};
    if (type4) {
      additionalProps = {
        closable: closable !== null && closable !== void 0 ? closable : false,
        title: "",
        footer: "",
        children: /* @__PURE__ */ React__namespace.createElement(ConfirmContent, Object.assign({}, props, {
          prefixCls,
          confirmPrefixCls,
          rootPrefixCls,
          content: children
        }))
      };
    } else {
      additionalProps = {
        closable: closable !== null && closable !== void 0 ? closable : true,
        title,
        footer: footer !== null && /* @__PURE__ */ React__namespace.createElement(Footer, Object.assign({}, props)),
        children
      };
    }
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement(Panel, Object.assign({
      prefixCls,
      className: cx(hashId, `${prefixCls}-pure-panel`, type4 && confirmPrefixCls, type4 && `${confirmPrefixCls}-${type4}`, className, cssVarCls, rootCls)
    }, restProps, {
      closeIcon: renderCloseIcon(prefixCls, closeIcon),
      closable
    }, additionalProps)));
  };
  const PurePanel$1 = withPureRenderTheme(PurePanel);
  function modalWarn(props) {
    return confirm(withWarn(props));
  }
  const Modal = Modal$1;
  Modal.useModal = useModal;
  Modal.info = function infoFn(props) {
    return confirm(withInfo(props));
  };
  Modal.success = function successFn(props) {
    return confirm(withSuccess(props));
  };
  Modal.error = function errorFn(props) {
    return confirm(withError(props));
  };
  Modal.warning = modalWarn;
  Modal.warn = modalWarn;
  Modal.confirm = function confirmFn(props) {
    return confirm(withConfirm(props));
  };
  Modal.destroyAll = function destroyAllFn() {
    while (destroyFns.length) {
      const close = destroyFns.pop();
      if (close) {
        close();
      }
    }
  };
  Modal.config = modalGlobalConfig;
  Modal._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$1;
  var _excluded = ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"];
  var Switch$1 = /* @__PURE__ */ React__namespace.forwardRef(function(_ref7, ref) {
    var _classNames;
    var _ref$prefixCls = _ref7.prefixCls, prefixCls = _ref$prefixCls === void 0 ? "rc-switch" : _ref$prefixCls, className = _ref7.className, checked = _ref7.checked, defaultChecked = _ref7.defaultChecked, disabled = _ref7.disabled, loadingIcon = _ref7.loadingIcon, checkedChildren = _ref7.checkedChildren, unCheckedChildren = _ref7.unCheckedChildren, onClick = _ref7.onClick, onChange = _ref7.onChange, onKeyDown = _ref7.onKeyDown, restProps = _objectWithoutProperties(_ref7, _excluded);
    var _useMergedState = useMergedState(false, {
      value: checked,
      defaultValue: defaultChecked
    }), _useMergedState2 = _slicedToArray(_useMergedState, 2), innerChecked = _useMergedState2[0], setInnerChecked = _useMergedState2[1];
    function triggerChange(newChecked, event) {
      var mergedChecked = innerChecked;
      if (!disabled) {
        mergedChecked = newChecked;
        setInnerChecked(mergedChecked);
        onChange === null || onChange === void 0 ? void 0 : onChange(mergedChecked, event);
      }
      return mergedChecked;
    }
    function onInternalKeyDown(e2) {
      if (e2.which === KeyCode.LEFT) {
        triggerChange(false, e2);
      } else if (e2.which === KeyCode.RIGHT) {
        triggerChange(true, e2);
      }
      onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e2);
    }
    function onInternalClick(e2) {
      var ret = triggerChange(!innerChecked, e2);
      onClick === null || onClick === void 0 ? void 0 : onClick(ret, e2);
    }
    var switchClassName = cx(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-checked"), innerChecked), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
    return /* @__PURE__ */ React__namespace.createElement("button", _extends({}, restProps, {
      type: "button",
      role: "switch",
      "aria-checked": innerChecked,
      disabled,
      className: switchClassName,
      ref,
      onKeyDown: onInternalKeyDown,
      onClick: onInternalClick
    }), loadingIcon, /* @__PURE__ */ React__namespace.createElement("span", {
      className: "".concat(prefixCls, "-inner")
    }, /* @__PURE__ */ React__namespace.createElement("span", {
      className: "".concat(prefixCls, "-inner-checked")
    }, checkedChildren), /* @__PURE__ */ React__namespace.createElement("span", {
      className: "".concat(prefixCls, "-inner-unchecked")
    }, unCheckedChildren)));
  });
  Switch$1.displayName = "Switch";
  const genSwitchSmallStyle = (token2) => {
    const {
      componentCls,
      trackHeightSM,
      trackPadding,
      trackMinWidthSM,
      innerMinMarginSM,
      innerMaxMarginSM,
      handleSizeSM,
      calc
    } = token2;
    const switchInnerCls = `${componentCls}-inner`;
    const trackPaddingCalc = unit$1(calc(handleSizeSM).add(calc(trackPadding).mul(2)).equal());
    const innerMaxMarginCalc = unit$1(calc(innerMaxMarginSM).mul(2).equal());
    return {
      [componentCls]: {
        [`&${componentCls}-small`]: {
          minWidth: trackMinWidthSM,
          height: trackHeightSM,
          lineHeight: unit$1(trackHeightSM),
          [`${componentCls}-inner`]: {
            paddingInlineStart: innerMaxMarginSM,
            paddingInlineEnd: innerMinMarginSM,
            [`${switchInnerCls}-checked, ${switchInnerCls}-unchecked`]: {
              minHeight: trackHeightSM
            },
            [`${switchInnerCls}-checked`]: {
              marginInlineStart: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`,
              marginInlineEnd: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`
            },
            [`${switchInnerCls}-unchecked`]: {
              marginTop: calc(trackHeightSM).mul(-1).equal(),
              marginInlineStart: 0,
              marginInlineEnd: 0
            }
          },
          [`${componentCls}-handle`]: {
            width: handleSizeSM,
            height: handleSizeSM
          },
          [`${componentCls}-loading-icon`]: {
            top: calc(calc(handleSizeSM).sub(token2.switchLoadingIconSize)).div(2).equal(),
            fontSize: token2.switchLoadingIconSize
          },
          [`&${componentCls}-checked`]: {
            [`${componentCls}-inner`]: {
              paddingInlineStart: innerMinMarginSM,
              paddingInlineEnd: innerMaxMarginSM,
              [`${switchInnerCls}-checked`]: {
                marginInlineStart: 0,
                marginInlineEnd: 0
              },
              [`${switchInnerCls}-unchecked`]: {
                marginInlineStart: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`,
                marginInlineEnd: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`
              }
            },
            [`${componentCls}-handle`]: {
              insetInlineStart: `calc(100% - ${unit$1(calc(handleSizeSM).add(trackPadding).equal())})`
            }
          },
          [`&:not(${componentCls}-disabled):active`]: {
            [`&:not(${componentCls}-checked) ${switchInnerCls}`]: {
              [`${switchInnerCls}-unchecked`]: {
                marginInlineStart: calc(token2.marginXXS).div(2).equal(),
                marginInlineEnd: calc(token2.marginXXS).mul(-1).div(2).equal()
              }
            },
            [`&${componentCls}-checked ${switchInnerCls}`]: {
              [`${switchInnerCls}-checked`]: {
                marginInlineStart: calc(token2.marginXXS).mul(-1).div(2).equal(),
                marginInlineEnd: calc(token2.marginXXS).div(2).equal()
              }
            }
          }
        }
      }
    };
  };
  const genSwitchLoadingStyle = (token2) => {
    const {
      componentCls,
      handleSize,
      calc
    } = token2;
    return {
      [componentCls]: {
        [`${componentCls}-loading-icon${token2.iconCls}`]: {
          position: "relative",
          top: calc(calc(handleSize).sub(token2.fontSize)).div(2).equal(),
          color: token2.switchLoadingIconColor,
          verticalAlign: "top"
        },
        [`&${componentCls}-checked ${componentCls}-loading-icon`]: {
          color: token2.switchColor
        }
      }
    };
  };
  const genSwitchHandleStyle = (token2) => {
    const {
      componentCls,
      trackPadding,
      handleBg,
      handleShadow,
      handleSize,
      calc
    } = token2;
    const switchHandleCls = `${componentCls}-handle`;
    return {
      [componentCls]: {
        [switchHandleCls]: {
          position: "absolute",
          top: trackPadding,
          insetInlineStart: trackPadding,
          width: handleSize,
          height: handleSize,
          transition: `all ${token2.switchDuration} ease-in-out`,
          "&::before": {
            position: "absolute",
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            backgroundColor: handleBg,
            borderRadius: calc(handleSize).div(2).equal(),
            boxShadow: handleShadow,
            transition: `all ${token2.switchDuration} ease-in-out`,
            content: '""'
          }
        },
        [`&${componentCls}-checked ${switchHandleCls}`]: {
          insetInlineStart: `calc(100% - ${unit$1(calc(handleSize).add(trackPadding).equal())})`
        },
        [`&:not(${componentCls}-disabled):active`]: {
          [`${switchHandleCls}::before`]: {
            insetInlineEnd: token2.switchHandleActiveInset,
            insetInlineStart: 0
          },
          [`&${componentCls}-checked ${switchHandleCls}::before`]: {
            insetInlineEnd: 0,
            insetInlineStart: token2.switchHandleActiveInset
          }
        }
      }
    };
  };
  const genSwitchInnerStyle = (token2) => {
    const {
      componentCls,
      trackHeight,
      trackPadding,
      innerMinMargin,
      innerMaxMargin,
      handleSize,
      calc
    } = token2;
    const switchInnerCls = `${componentCls}-inner`;
    const trackPaddingCalc = unit$1(calc(handleSize).add(calc(trackPadding).mul(2)).equal());
    const innerMaxMarginCalc = unit$1(calc(innerMaxMargin).mul(2).equal());
    return {
      [componentCls]: {
        [switchInnerCls]: {
          display: "block",
          overflow: "hidden",
          borderRadius: 100,
          height: "100%",
          paddingInlineStart: innerMaxMargin,
          paddingInlineEnd: innerMinMargin,
          transition: `padding-inline-start ${token2.switchDuration} ease-in-out, padding-inline-end ${token2.switchDuration} ease-in-out`,
          [`${switchInnerCls}-checked, ${switchInnerCls}-unchecked`]: {
            display: "block",
            color: token2.colorTextLightSolid,
            fontSize: token2.fontSizeSM,
            transition: `margin-inline-start ${token2.switchDuration} ease-in-out, margin-inline-end ${token2.switchDuration} ease-in-out`,
            pointerEvents: "none",
            minHeight: trackHeight
          },
          [`${switchInnerCls}-checked`]: {
            marginInlineStart: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`,
            marginInlineEnd: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`
          },
          [`${switchInnerCls}-unchecked`]: {
            marginTop: calc(trackHeight).mul(-1).equal(),
            marginInlineStart: 0,
            marginInlineEnd: 0
          }
        },
        [`&${componentCls}-checked ${switchInnerCls}`]: {
          paddingInlineStart: innerMinMargin,
          paddingInlineEnd: innerMaxMargin,
          [`${switchInnerCls}-checked`]: {
            marginInlineStart: 0,
            marginInlineEnd: 0
          },
          [`${switchInnerCls}-unchecked`]: {
            marginInlineStart: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`,
            marginInlineEnd: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`
          }
        },
        [`&:not(${componentCls}-disabled):active`]: {
          [`&:not(${componentCls}-checked) ${switchInnerCls}`]: {
            [`${switchInnerCls}-unchecked`]: {
              marginInlineStart: calc(trackPadding).mul(2).equal(),
              marginInlineEnd: calc(trackPadding).mul(-1).mul(2).equal()
            }
          },
          [`&${componentCls}-checked ${switchInnerCls}`]: {
            [`${switchInnerCls}-checked`]: {
              marginInlineStart: calc(trackPadding).mul(-1).mul(2).equal(),
              marginInlineEnd: calc(trackPadding).mul(2).equal()
            }
          }
        }
      }
    };
  };
  const genSwitchStyle = (token2) => {
    const {
      componentCls,
      trackHeight,
      trackMinWidth
    } = token2;
    return {
      [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token2)), {
        position: "relative",
        display: "inline-block",
        boxSizing: "border-box",
        minWidth: trackMinWidth,
        height: trackHeight,
        lineHeight: `${unit$1(trackHeight)}`,
        verticalAlign: "middle",
        background: token2.colorTextQuaternary,
        border: "0",
        borderRadius: 100,
        cursor: "pointer",
        transition: `all ${token2.motionDurationMid}`,
        userSelect: "none",
        [`&:hover:not(${componentCls}-disabled)`]: {
          background: token2.colorTextTertiary
        }
      }), genFocusStyle(token2)), {
        [`&${componentCls}-checked`]: {
          background: token2.switchColor,
          [`&:hover:not(${componentCls}-disabled)`]: {
            background: token2.colorPrimaryHover
          }
        },
        [`&${componentCls}-loading, &${componentCls}-disabled`]: {
          cursor: "not-allowed",
          opacity: token2.switchDisabledOpacity,
          "*": {
            boxShadow: "none",
            cursor: "not-allowed"
          }
        },
        // rtl style
        [`&${componentCls}-rtl`]: {
          direction: "rtl"
        }
      })
    };
  };
  const prepareComponentToken = (token2) => {
    const {
      fontSize,
      lineHeight,
      controlHeight,
      colorWhite
    } = token2;
    const height = fontSize * lineHeight;
    const heightSM = controlHeight / 2;
    const padding = 2;
    const handleSize = height - padding * 2;
    const handleSizeSM = heightSM - padding * 2;
    return {
      trackHeight: height,
      trackHeightSM: heightSM,
      trackMinWidth: handleSize * 2 + padding * 4,
      trackMinWidthSM: handleSizeSM * 2 + padding * 2,
      trackPadding: padding,
      // Fixed value
      handleBg: colorWhite,
      handleSize,
      handleSizeSM,
      handleShadow: `0 2px 4px 0 ${new TinyColor("#00230b").setAlpha(0.2).toRgbString()}`,
      innerMinMargin: handleSize / 2,
      innerMaxMargin: handleSize + padding + padding * 2,
      innerMinMarginSM: handleSizeSM / 2,
      innerMaxMarginSM: handleSizeSM + padding + padding * 2
    };
  };
  const useStyle = genStyleHooks("Switch", (token2) => {
    const switchToken = merge$1(token2, {
      switchDuration: token2.motionDurationMid,
      switchColor: token2.colorPrimary,
      switchDisabledOpacity: token2.opacityLoading,
      switchLoadingIconSize: token2.calc(token2.fontSizeIcon).mul(0.75).equal(),
      switchLoadingIconColor: `rgba(0, 0, 0, ${token2.opacityLoading})`,
      switchHandleActiveInset: "-30%"
    });
    return [
      genSwitchStyle(switchToken),
      // inner style
      genSwitchInnerStyle(switchToken),
      // handle style
      genSwitchHandleStyle(switchToken),
      // loading style
      genSwitchLoadingStyle(switchToken),
      // small style
      genSwitchSmallStyle(switchToken)
    ];
  }, prepareComponentToken);
  var __rest = function(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  };
  const InternalSwitch = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    const {
      prefixCls: customizePrefixCls,
      size: customizeSize,
      disabled: customDisabled,
      loading,
      className,
      rootClassName,
      style: style2,
      checked: checkedProp,
      value,
      defaultChecked: defaultCheckedProp,
      defaultValue,
      onChange
    } = props, restProps = __rest(props, ["prefixCls", "size", "disabled", "loading", "className", "rootClassName", "style", "checked", "value", "defaultChecked", "defaultValue", "onChange"]);
    const [checked, setChecked] = useMergedState(false, {
      value: checkedProp !== null && checkedProp !== void 0 ? checkedProp : value,
      defaultValue: defaultCheckedProp !== null && defaultCheckedProp !== void 0 ? defaultCheckedProp : defaultValue
    });
    const {
      getPrefixCls,
      direction,
      switch: SWITCH
    } = React__namespace.useContext(ConfigContext);
    const disabled = React__namespace.useContext(DisabledContext);
    const mergedDisabled = (customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled) || loading;
    const prefixCls = getPrefixCls("switch", customizePrefixCls);
    const loadingIcon = /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${prefixCls}-handle`
    }, loading && /* @__PURE__ */ React__namespace.createElement(RefIcon$4, {
      className: `${prefixCls}-loading-icon`
    }));
    const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
    const mergedSize = useSize(customizeSize);
    const classes = cx(SWITCH === null || SWITCH === void 0 ? void 0 : SWITCH.className, {
      [`${prefixCls}-small`]: mergedSize === "small",
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, className, rootClassName, hashId, cssVarCls);
    const mergedStyle = Object.assign(Object.assign({}, SWITCH === null || SWITCH === void 0 ? void 0 : SWITCH.style), style2);
    const changeHandler = function() {
      setChecked(arguments.length <= 0 ? void 0 : arguments[0]);
      onChange === null || onChange === void 0 ? void 0 : onChange.apply(void 0, arguments);
    };
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement(Wave, {
      component: "Switch"
    }, /* @__PURE__ */ React__namespace.createElement(Switch$1, Object.assign({}, restProps, {
      checked,
      onChange: changeHandler,
      prefixCls,
      className: classes,
      style: mergedStyle,
      disabled: mergedDisabled,
      ref,
      loadingIcon
    }))));
  });
  const Switch = InternalSwitch;
  Switch.__ANT_SWITCH = true;
  const getDesignToken = (config) => {
    const theme2 = (config === null || config === void 0 ? void 0 : config.algorithm) ? createTheme(config.algorithm) : createTheme(derivative$2);
    const mergedToken = Object.assign(Object.assign({}, seedToken), config === null || config === void 0 ? void 0 : config.token);
    return getComputedToken$1(mergedToken, {
      override: config === null || config === void 0 ? void 0 : config.token
    }, theme2, formatToken);
  };
  function genSizeMapToken(token2) {
    const {
      sizeUnit,
      sizeStep
    } = token2;
    const compactSizeStep = sizeStep - 2;
    return {
      sizeXXL: sizeUnit * (compactSizeStep + 10),
      sizeXL: sizeUnit * (compactSizeStep + 6),
      sizeLG: sizeUnit * (compactSizeStep + 2),
      sizeMD: sizeUnit * (compactSizeStep + 2),
      sizeMS: sizeUnit * (compactSizeStep + 1),
      size: sizeUnit * compactSizeStep,
      sizeSM: sizeUnit * compactSizeStep,
      sizeXS: sizeUnit * (compactSizeStep - 1),
      sizeXXS: sizeUnit * (compactSizeStep - 1)
    };
  }
  const derivative$1 = (token2, mapToken) => {
    const mergedMapToken = mapToken !== null && mapToken !== void 0 ? mapToken : derivative$2(token2);
    const fontSize = mergedMapToken.fontSizeSM;
    const controlHeight = mergedMapToken.controlHeight - 4;
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, mergedMapToken), genSizeMapToken(mapToken !== null && mapToken !== void 0 ? mapToken : token2)), genFontMapToken(fontSize)), {
      // controlHeight
      controlHeight
    }), genControlHeight(Object.assign(Object.assign({}, mergedMapToken), {
      controlHeight
    })));
  };
  const getAlphaColor = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
  const getSolidColor = (baseColor, brightness) => {
    const instance = new TinyColor(baseColor);
    return instance.lighten(brightness).toHexString();
  };
  const generateColorPalettes = (baseColor) => {
    const colors = generate$1(baseColor, {
      theme: "dark"
    });
    return {
      1: colors[0],
      2: colors[1],
      3: colors[2],
      4: colors[3],
      5: colors[6],
      6: colors[5],
      7: colors[4],
      8: colors[6],
      9: colors[5],
      10: colors[4]
      // 8: colors[9],
      // 9: colors[8],
      // 10: colors[7],
    };
  };
  const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
    const colorBgBase = bgBaseColor || "#000";
    const colorTextBase = textBaseColor || "#fff";
    return {
      colorBgBase,
      colorTextBase,
      colorText: getAlphaColor(colorTextBase, 0.85),
      colorTextSecondary: getAlphaColor(colorTextBase, 0.65),
      colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
      colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),
      colorFill: getAlphaColor(colorTextBase, 0.18),
      colorFillSecondary: getAlphaColor(colorTextBase, 0.12),
      colorFillTertiary: getAlphaColor(colorTextBase, 0.08),
      colorFillQuaternary: getAlphaColor(colorTextBase, 0.04),
      colorBgElevated: getSolidColor(colorBgBase, 12),
      colorBgContainer: getSolidColor(colorBgBase, 8),
      colorBgLayout: getSolidColor(colorBgBase, 0),
      colorBgSpotlight: getSolidColor(colorBgBase, 26),
      colorBgBlur: getAlphaColor(colorTextBase, 0.04),
      colorBorder: getSolidColor(colorBgBase, 26),
      colorBorderSecondary: getSolidColor(colorBgBase, 19)
    };
  };
  const derivative = (token2, mapToken) => {
    const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
      const colors = generate$1(token2[colorKey], {
        theme: "dark"
      });
      return new Array(10).fill(1).reduce((prev2, _, i2) => {
        prev2[`${colorKey}-${i2 + 1}`] = colors[i2];
        prev2[`${colorKey}${i2 + 1}`] = colors[i2];
        return prev2;
      }, {});
    }).reduce((prev2, cur) => {
      prev2 = Object.assign(Object.assign({}, prev2), cur);
      return prev2;
    }, {});
    const mergedMapToken = mapToken !== null && mapToken !== void 0 ? mapToken : derivative$2(token2);
    return Object.assign(Object.assign(Object.assign({}, mergedMapToken), colorPalettes), genColorMapToken(token2, {
      generateColorPalettes,
      generateNeutralColorPalettes
    }));
  };
  function useToken() {
    const [theme2, token2, hashId] = useToken$1();
    return {
      theme: theme2,
      token: token2,
      hashId
    };
  }
  const theme = {
    /** @private Test Usage. Do not use in production. */
    defaultConfig,
    /** Default seedToken */
    defaultSeed: defaultConfig.token,
    useToken,
    defaultAlgorithm: derivative$2,
    darkAlgorithm: derivative,
    compactAlgorithm: derivative$1,
    getDesignToken
  };
  function AntdTooltip(props) {
    return /* @__PURE__ */ jsx(Tooltip2, { ...props, overlayStyle: {
      width: "max-content",
      maxWidth: "50vw",
      ...props.overlayStyle
    }, children: props.children });
  }
  function insertWithoutScoping(cache2, serialized) {
    if (cache2.inserted[serialized.name] === void 0) {
      return cache2.insert("", serialized, cache2.sheet, true);
    }
  }
  function merge(registered, css2, className) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
    if (registeredStyles.length < 2) {
      return className;
    }
    return rawClassName + css2(registeredStyles);
  }
  var createEmotion = function createEmotion2(options) {
    var cache2 = createCache$1(options);
    cache2.sheet.speedy = function(value) {
      this.isSpeedy = value;
    };
    cache2.compat = true;
    var css2 = function css22() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var serialized = serializeStyles(args, cache2.registered, void 0);
      insertStyles(cache2, serialized, false);
      return cache2.key + "-" + serialized.name;
    };
    var keyframes = function keyframes2() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      var serialized = serializeStyles(args, cache2.registered);
      var animation = "animation-" + serialized.name;
      insertWithoutScoping(cache2, {
        name: serialized.name,
        styles: "@keyframes " + animation + "{" + serialized.styles + "}"
      });
      return animation;
    };
    var injectGlobal = function injectGlobal2() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      var serialized = serializeStyles(args, cache2.registered);
      insertWithoutScoping(cache2, serialized);
    };
    var cx2 = function cx22() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return merge(cache2.registered, css2, classnames(args));
    };
    return {
      css: css2,
      cx: cx2,
      injectGlobal,
      keyframes,
      hydrate: function hydrate(ids) {
        ids.forEach(function(key) {
          cache2.inserted[key] = true;
        });
      },
      flush: function flush() {
        cache2.registered = {};
        cache2.inserted = {};
        cache2.sheet.flush();
      },
      // $FlowFixMe
      sheet: cache2.sheet,
      cache: cache2,
      getRegisteredStyles: getRegisteredStyles.bind(null, cache2.registered),
      merge: merge.bind(null, cache2.registered, css2)
    };
  };
  var classnames = function classnames2(args) {
    var cls = "";
    for (var i2 = 0; i2 < args.length; i2++) {
      var arg = args[i2];
      if (arg == null)
        continue;
      var toAdd = void 0;
      switch (typeof arg) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(arg)) {
            toAdd = classnames2(arg);
          } else {
            toAdd = "";
            for (var k2 in arg) {
              if (arg[k2] && k2) {
                toAdd && (toAdd += " ");
                toAdd += k2;
              }
            }
          }
          break;
        }
        default: {
          toAdd = arg;
        }
      }
      if (toAdd) {
        cls && (cls += " ");
        cls += toAdd;
      }
    }
    return cls;
  };
  var _createEmotion = createEmotion({
    key: "css"
  }), css$1 = _createEmotion.css, cache = _createEmotion.cache;
  var Global = /* @__PURE__ */ withEmotionCache(function(props, cache2) {
    var styles = props.styles;
    var serialized = serializeStyles([styles], void 0, React__namespace.useContext(ThemeContext));
    var sheetRef = React__namespace.useRef();
    useInsertionEffectWithLayoutFallback(function() {
      var key = cache2.key + "-global";
      var sheet = new cache2.sheet.constructor({
        key,
        nonce: cache2.sheet.nonce,
        container: cache2.sheet.container,
        speedy: cache2.sheet.isSpeedy
      });
      var rehydrating = false;
      var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
      if (cache2.sheet.tags.length) {
        sheet.before = cache2.sheet.tags[0];
      }
      if (node2 !== null) {
        rehydrating = true;
        node2.setAttribute("data-emotion", key);
        sheet.hydrate([node2]);
      }
      sheetRef.current = [sheet, rehydrating];
      return function() {
        sheet.flush();
      };
    }, [cache2]);
    useInsertionEffectWithLayoutFallback(function() {
      var sheetRefCurrent = sheetRef.current;
      var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
      if (rehydrating) {
        sheetRefCurrent[1] = false;
        return;
      }
      if (serialized.next !== void 0) {
        insertStyles(cache2, serialized.next, true);
      }
      if (sheet.tags.length) {
        var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
        sheet.before = element;
        sheet.flush();
      }
      cache2.insert("", serialized, sheet, false);
    }, [cache2, serialized.name]);
    return null;
  });
  function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return serializeStyles(args);
  }
  cache.compat = true;
  function compose(...fns) {
    return function(c2) {
      return fns.reduceRight((content, fn) => fn(content), c2);
    };
  }
  function AntdApp({
    children,
    emotionCache = cache,
    styleProviderProps
  }) {
    const wrap = compose(
      // emotion cache
      (c2) => /* @__PURE__ */ jsx(CacheProvider, { value: emotionCache, children: c2 }),
      // antd style
      (c2) => /* @__PURE__ */ jsx(StyleProvider, { ...styleProviderProps, children: c2 }),
      // antd config
      (c2) => /* @__PURE__ */ jsx(ConfigProvider$1, { button: {
        autoInsertSpace: false
      }, theme: {
        cssVar: true,
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary,
          colorBgSpotlight: colorPrimary,
          // tooltip bg
          zIndexPopupBase: 11e3
          // base-modal 10002
        },
        components: {}
      }, children: c2 })
    );
    return wrap(children);
  }
  var ERating = /* @__PURE__ */ ((ERating2) => {
    ERating2[ERating2["NoRating"] = 1] = "NoRating";
    ERating2[ERating2["Bad"] = 2] = "Bad";
    ERating2[ERating2["Ok"] = 3] = "Ok";
    ERating2[ERating2["Good"] = 4] = "Good";
    return ERating2;
  })(ERating || {});
  const ERatingKeys = Object.keys(ERating).filter((x2) => !/^\d+$/.test(x2));
  const styled = {
    generateClassName: css$1
  };
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root$1 = freeGlobal || freeSelf || Function("return this")();
  var Symbol$1 = root$1.Symbol;
  var objectProto$6 = Object.prototype;
  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$6.toString;
  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty$5.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e2) {
    }
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var objectProto$5 = Object.prototype;
  var nativeObjectToString = objectProto$5.toString;
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  function arrayMap(array4, iteratee) {
    var index2 = -1, length2 = array4 == null ? 0 : array4.length, result = Array(length2);
    while (++index2 < length2) {
      result[index2] = iteratee(array4[index2], index2, array4);
    }
    return result;
  }
  var isArray = Array.isArray;
  var INFINITY$3 = 1 / 0;
  var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray(value)) {
      return arrayMap(value, baseToString) + "";
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY$3 ? "-0" : result;
  }
  var reWhitespace = /\s/;
  function trimmedEndIndex(string3) {
    var index2 = string3.length;
    while (index2-- && reWhitespace.test(string3.charAt(index2))) {
    }
    return index2;
  }
  var reTrimStart = /^\s+/;
  function baseTrim(string3) {
    return string3 ? string3.slice(0, trimmedEndIndex(string3) + 1).replace(reTrimStart, "") : string3;
  }
  function isObject$1(value) {
    var type4 = typeof value;
    return value != null && (type4 == "object" || type4 == "function");
  }
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject$1(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject$1(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var INFINITY$2 = 1 / 0, MAX_INTEGER = 17976931348623157e292;
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY$2 || value === -INFINITY$2) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }
  function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }
  function identity(value) {
    return value;
  }
  var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject$1(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var coreJsData = root$1["__core-js_shared__"];
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var funcProto$1 = Function.prototype;
  var funcToString$1 = funcProto$1.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e2) {
      }
      try {
        return func + "";
      } catch (e2) {
      }
    }
    return "";
  }
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto = Function.prototype, objectProto$4 = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString.call(hasOwnProperty$4).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative(value) {
    if (!isObject$1(value) || isMasked(value)) {
      return false;
    }
    var pattern4 = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern4.test(toSource(value));
  }
  function getValue(object4, key) {
    return object4 == null ? void 0 : object4[key];
  }
  function getNative(object4, key) {
    var value = getValue(object4, key);
    return baseIsNative(value) ? value : void 0;
  }
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  function noop() {
  }
  var HOT_COUNT = 800, HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  function constant(value) {
    return function() {
      return value;
    };
  }
  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e2) {
    }
  }();
  var baseSetToString = !defineProperty ? identity : function(func, string3) {
    return defineProperty(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant(string3),
      "writable": true
    });
  };
  var setToString = shortOut(baseSetToString);
  function baseFindIndex(array4, predicate, fromIndex, fromRight) {
    var length2 = array4.length, index2 = fromIndex + -1;
    while (++index2 < length2) {
      if (predicate(array4[index2], index2, array4)) {
        return index2;
      }
    }
    return -1;
  }
  function baseIsNaN(value) {
    return value !== value;
  }
  function strictIndexOf(array4, value, fromIndex) {
    var index2 = fromIndex - 1, length2 = array4.length;
    while (++index2 < length2) {
      if (array4[index2] === value) {
        return index2;
      }
    }
    return -1;
  }
  function baseIndexOf(array4, value, fromIndex) {
    return value === value ? strictIndexOf(array4, value, fromIndex) : baseFindIndex(array4, baseIsNaN, fromIndex);
  }
  function arrayIncludes(array4, value) {
    var length2 = array4 == null ? 0 : array4.length;
    return !!length2 && baseIndexOf(array4, value, 0) > -1;
  }
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length2) {
    var type4 = typeof value;
    length2 = length2 == null ? MAX_SAFE_INTEGER$1 : length2;
    return !!length2 && (type4 == "number" || type4 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
  }
  function baseAssignValue(object4, key, value) {
    if (key == "__proto__" && defineProperty) {
      defineProperty(object4, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object4[key] = value;
    }
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var objectProto$3 = Object.prototype;
  var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
  function assignValue(object4, key, value) {
    var objValue = object4[key];
    if (!(hasOwnProperty$3.call(object4, key) && eq(objValue, value)) || value === void 0 && !(key in object4)) {
      baseAssignValue(object4, key, value);
    }
  }
  var nativeMax = Math.max;
  function overRest(func, start, transform) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index2 = -1, length2 = nativeMax(args.length - start, 0), array4 = Array(length2);
      while (++index2 < length2) {
        array4[index2] = args[start + index2];
      }
      index2 = -1;
      var otherArgs = Array(start + 1);
      while (++index2 < start) {
        otherArgs[index2] = args[index2];
      }
      otherArgs[start] = transform(array4);
      return apply(func, this, otherArgs);
    };
  }
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  var objectProto$2 = Object.prototype;
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
  var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
  var isArguments = baseIsArguments(/* @__PURE__ */ function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty$2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
  function isKey(value, object4) {
    if (isArray(value)) {
      return false;
    }
    var type4 = typeof value;
    if (type4 == "number" || type4 == "symbol" || type4 == "boolean" || value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object4 != null && value in Object(object4);
  }
  var nativeCreate = getNative(Object, "create");
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
  var objectProto$1 = Object.prototype;
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED$2 ? void 0 : result;
    }
    return hasOwnProperty$1.call(data, key) ? data[key] : void 0;
  }
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
  }
  var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
    return this;
  }
  function Hash(entries) {
    var index2 = -1, length2 = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length2) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  function assocIndexOf(array4, key) {
    var length2 = array4.length;
    while (length2--) {
      if (eq(array4[length2][0], key)) {
        return length2;
      }
    }
    return -1;
  }
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete(key) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    if (index2 < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index2 == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index2, 1);
    }
    --this.size;
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    return index2 < 0 ? void 0 : data[index2][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    if (index2 < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index2][1] = value;
    }
    return this;
  }
  function ListCache(entries) {
    var index2 = -1, length2 = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length2) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  var Map$1 = getNative(root$1, "Map");
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map$1 || ListCache)(),
      "string": new Hash()
    };
  }
  function isKeyable(value) {
    var type4 = typeof value;
    return type4 == "string" || type4 == "number" || type4 == "symbol" || type4 == "boolean" ? value !== "__proto__" : value === null;
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size2 = data.size;
    data.set(key, value);
    this.size += data.size == size2 ? 0 : 1;
    return this;
  }
  function MapCache(entries) {
    var index2 = -1, length2 = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length2) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  var FUNC_ERROR_TEXT$1 = "Expected a function";
  function memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    var memoized = function() {
      var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
      if (cache2.has(key)) {
        return cache2.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache2.set(key, result) || cache2;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache)();
    return memoized;
  }
  memoize.Cache = MapCache;
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped(func) {
    var result = memoize(func, function(key) {
      if (cache2.size === MAX_MEMOIZE_SIZE) {
        cache2.clear();
      }
      return key;
    });
    var cache2 = result.cache;
    return result;
  }
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = memoizeCapped(function(string3) {
    var result = [];
    if (string3.charCodeAt(0) === 46) {
      result.push("");
    }
    string3.replace(rePropName, function(match2, number4, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, "$1") : number4 || match2);
    });
    return result;
  });
  function toString(value) {
    return value == null ? "" : baseToString(value);
  }
  function castPath(value, object4) {
    if (isArray(value)) {
      return value;
    }
    return isKey(value, object4) ? [value] : stringToPath(toString(value));
  }
  var INFINITY$1 = 1 / 0;
  function toKey(value) {
    if (typeof value == "string" || isSymbol(value)) {
      return value;
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
  }
  function baseGet(object4, path2) {
    path2 = castPath(path2, object4);
    var index2 = 0, length2 = path2.length;
    while (object4 != null && index2 < length2) {
      object4 = object4[toKey(path2[index2++])];
    }
    return index2 && index2 == length2 ? object4 : void 0;
  }
  function arrayPush(array4, values) {
    var index2 = -1, length2 = values.length, offset2 = array4.length;
    while (++index2 < length2) {
      array4[offset2 + index2] = values[index2];
    }
    return array4;
  }
  var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
  function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }
  function baseFlatten(array4, depth, predicate, isStrict, result) {
    var index2 = -1, length2 = array4.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while (++index2 < length2) {
      var value = array4[index2];
      if (predicate(value)) {
        {
          arrayPush(result, value);
        }
      } else {
        result[result.length] = value;
      }
    }
    return result;
  }
  function flatten(array4) {
    var length2 = array4 == null ? 0 : array4.length;
    return length2 ? baseFlatten(array4) : [];
  }
  function flatRest(func) {
    return setToString(overRest(func, void 0, flatten), func + "");
  }
  var FUNC_ERROR_TEXT = "Expected a function";
  function before(n2, func) {
    var result;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    n2 = toInteger(n2);
    return function() {
      if (--n2 > 0) {
        result = func.apply(this, arguments);
      }
      if (n2 <= 1) {
        func = void 0;
      }
      return result;
    };
  }
  var Set$1 = getNative(root$1, "Set");
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  function SetCache(values) {
    var index2 = -1, length2 = values == null ? 0 : values.length;
    this.__data__ = new MapCache();
    while (++index2 < length2) {
      this.add(values[index2]);
    }
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  function cacheHas(cache2, key) {
    return cache2.has(key);
  }
  function setToArray(set2) {
    var index2 = -1, result = Array(set2.size);
    set2.forEach(function(value) {
      result[++index2] = value;
    });
    return result;
  }
  function baseHasIn(object4, key) {
    return object4 != null && key in Object(object4);
  }
  function hasPath(object4, path2, hasFunc) {
    path2 = castPath(path2, object4);
    var index2 = -1, length2 = path2.length, result = false;
    while (++index2 < length2) {
      var key = toKey(path2[index2]);
      if (!(result = object4 != null && hasFunc(object4, key))) {
        break;
      }
      object4 = object4[key];
    }
    if (result || ++index2 != length2) {
      return result;
    }
    length2 = object4 == null ? 0 : object4.length;
    return !!length2 && isLength(length2) && isIndex(key, length2) && (isArray(object4) || isArguments(object4));
  }
  function hasIn(object4, path2) {
    return object4 != null && hasPath(object4, path2, baseHasIn);
  }
  function baseSet(object4, path2, value, customizer) {
    if (!isObject$1(object4)) {
      return object4;
    }
    path2 = castPath(path2, object4);
    var index2 = -1, length2 = path2.length, lastIndex = length2 - 1, nested = object4;
    while (nested != null && ++index2 < length2) {
      var key = toKey(path2[index2]), newValue = value;
      if (key === "__proto__" || key === "constructor" || key === "prototype") {
        return object4;
      }
      if (index2 != lastIndex) {
        var objValue = nested[key];
        newValue = void 0;
        if (newValue === void 0) {
          newValue = isObject$1(objValue) ? objValue : isIndex(path2[index2 + 1]) ? [] : {};
        }
      }
      assignValue(nested, key, newValue);
      nested = nested[key];
    }
    return object4;
  }
  function basePickBy(object4, paths, predicate) {
    var index2 = -1, length2 = paths.length, result = {};
    while (++index2 < length2) {
      var path2 = paths[index2], value = baseGet(object4, path2);
      if (predicate(value, path2)) {
        baseSet(result, castPath(path2, object4), value);
      }
    }
    return result;
  }
  function once(func) {
    return before(2, func);
  }
  function basePick(object4, paths) {
    return basePickBy(object4, paths, function(value, path2) {
      return hasIn(object4, path2);
    });
  }
  var pick = flatRest(function(object4, paths) {
    return object4 == null ? {} : basePick(object4, paths);
  });
  var INFINITY = 1 / 0;
  var createSet = !(Set$1 && 1 / setToArray(new Set$1([, -0]))[1] == INFINITY) ? noop : function(values) {
    return new Set$1(values);
  };
  var LARGE_ARRAY_SIZE = 200;
  function baseUniq(array4, iteratee, comparator) {
    var index2 = -1, includes = arrayIncludes, length2 = array4.length, isCommon = true, result = [], seen = result;
    if (length2 >= LARGE_ARRAY_SIZE) {
      var set2 = createSet(array4);
      if (set2) {
        return setToArray(set2);
      }
      isCommon = false;
      includes = cacheHas;
      seen = new SetCache();
    } else {
      seen = result;
    }
    outer:
      while (++index2 < length2) {
        var value = array4[index2], computed = value;
        value = value !== 0 ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        } else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
    return result;
  }
  function uniq(array4) {
    return array4 && array4.length ? baseUniq(array4) : [];
  }
  const e$1 = Symbol(), t$1 = Symbol(), r$1 = "a", n$1 = "w";
  let o = (e2, t2) => new Proxy(e2, t2);
  const s = Object.getPrototypeOf, c = /* @__PURE__ */ new WeakMap(), l$1 = (e2) => e2 && (c.has(e2) ? c.get(e2) : s(e2) === Object.prototype || s(e2) === Array.prototype), f = (e2) => "object" == typeof e2 && null !== e2, i = (e2) => {
    if (Array.isArray(e2))
      return Array.from(e2);
    const t2 = Object.getOwnPropertyDescriptors(e2);
    return Object.values(t2).forEach((e3) => {
      e3.configurable = true;
    }), Object.create(s(e2), t2);
  }, u$1 = (e2) => e2[t$1] || e2, a = (s2, c2, f2, p2) => {
    if (!l$1(s2))
      return s2;
    let g2 = p2 && p2.get(s2);
    if (!g2) {
      const e2 = u$1(s2);
      g2 = ((e3) => Object.values(Object.getOwnPropertyDescriptors(e3)).some((e4) => !e4.configurable && !e4.writable))(e2) ? [e2, i(e2)] : [e2], null == p2 || p2.set(s2, g2);
    }
    const [y2, h2] = g2;
    let w2 = f2 && f2.get(y2);
    return w2 && w2[1].f === !!h2 || (w2 = ((o2, s3) => {
      const c3 = { f: s3 };
      let l2 = false;
      const f3 = (e2, t2) => {
        if (!l2) {
          let s4 = c3[r$1].get(o2);
          if (s4 || (s4 = {}, c3[r$1].set(o2, s4)), e2 === n$1)
            s4[n$1] = true;
          else {
            let r2 = s4[e2];
            r2 || (r2 = /* @__PURE__ */ new Set(), s4[e2] = r2), r2.add(t2);
          }
        }
      }, i2 = { get: (e2, n2) => n2 === t$1 ? o2 : (f3("k", n2), a(Reflect.get(e2, n2), c3[r$1], c3.c, c3.t)), has: (t2, n2) => n2 === e$1 ? (l2 = true, c3[r$1].delete(o2), true) : (f3("h", n2), Reflect.has(t2, n2)), getOwnPropertyDescriptor: (e2, t2) => (f3("o", t2), Reflect.getOwnPropertyDescriptor(e2, t2)), ownKeys: (e2) => (f3(n$1), Reflect.ownKeys(e2)) };
      return s3 && (i2.set = i2.deleteProperty = () => false), [i2, c3];
    })(y2, !!h2), w2[1].p = o(h2 || y2, w2[0]), f2 && f2.set(y2, w2)), w2[1][r$1] = c2, w2[1].c = f2, w2[1].t = p2, w2[1].p;
  }, p$1 = (e2, t2, r2, o2, s2 = Object.is) => {
    if (s2(e2, t2))
      return false;
    if (!f(e2) || !f(t2))
      return true;
    const c2 = r2.get(u$1(e2));
    if (!c2)
      return true;
    if (o2) {
      const r3 = o2.get(e2);
      if (r3 && r3.n === t2)
        return r3.g;
      o2.set(e2, { n: t2, g: false });
    }
    let l2 = null;
    try {
      for (const r3 of c2.h || [])
        if (l2 = Reflect.has(e2, r3) !== Reflect.has(t2, r3), l2)
          return l2;
      if (true === c2[n$1]) {
        if (l2 = ((e3, t3) => {
          const r3 = Reflect.ownKeys(e3), n2 = Reflect.ownKeys(t3);
          return r3.length !== n2.length || r3.some((e4, t4) => e4 !== n2[t4]);
        })(e2, t2), l2)
          return l2;
      } else
        for (const r3 of c2.o || [])
          if (l2 = !!Reflect.getOwnPropertyDescriptor(e2, r3) != !!Reflect.getOwnPropertyDescriptor(t2, r3), l2)
            return l2;
      for (const n2 of c2.k || [])
        if (l2 = p$1(e2[n2], t2[n2], r2, o2, s2), l2)
          return l2;
      return null === l2 && (l2 = true), l2;
    } finally {
      o2 && o2.set(e2, { n: t2, g: l2 });
    }
  }, y = (e2) => l$1(e2) && e2[t$1] || null, h$1 = (e2, t2 = true) => {
    c.set(e2, t2);
  }, w = (e2, t2, r2) => {
    const o2 = [], s2 = /* @__PURE__ */ new WeakSet(), c2 = (e3, l2) => {
      if (s2.has(e3))
        return;
      f(e3) && s2.add(e3);
      const i2 = f(e3) && t2.get(u$1(e3));
      if (i2) {
        var a2, p2;
        if (null == (a2 = i2.h) || a2.forEach((e4) => {
          const t3 = `:has(${String(e4)})`;
          o2.push(l2 ? [...l2, t3] : [t3]);
        }), true === i2[n$1]) {
          const e4 = ":ownKeys";
          o2.push(l2 ? [...l2, e4] : [e4]);
        } else {
          var g2;
          null == (g2 = i2.o) || g2.forEach((e4) => {
            const t3 = `:hasOwn(${String(e4)})`;
            o2.push(l2 ? [...l2, t3] : [t3]);
          });
        }
        null == (p2 = i2.k) || p2.forEach((t3) => {
          !("value" in (Object.getOwnPropertyDescriptor(e3, t3) || {})) || c2(e3[t3], l2 ? [...l2, t3] : [t3]);
        });
      } else
        l2 && o2.push(l2);
    };
    return c2(e2), o2;
  };
  var define_import_meta_env_default$1 = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: false };
  const isObject = (x2) => typeof x2 === "object" && x2 !== null;
  const proxyStateMap = /* @__PURE__ */ new WeakMap();
  const refSet = /* @__PURE__ */ new WeakSet();
  const buildProxyFunction = (objectIs = Object.is, newProxy = (target, handler) => new Proxy(target, handler), canProxy = (x2) => isObject(x2) && !refSet.has(x2) && (Array.isArray(x2) || !(Symbol.iterator in x2)) && !(x2 instanceof WeakMap) && !(x2 instanceof WeakSet) && !(x2 instanceof Error) && !(x2 instanceof Number) && !(x2 instanceof Date) && !(x2 instanceof String) && !(x2 instanceof RegExp) && !(x2 instanceof ArrayBuffer), defaultHandlePromise = (promise) => {
    switch (promise.status) {
      case "fulfilled":
        return promise.value;
      case "rejected":
        throw promise.reason;
      default:
        throw promise;
    }
  }, snapCache = /* @__PURE__ */ new WeakMap(), createSnapshot = (target, version2, handlePromise = defaultHandlePromise) => {
    const cache2 = snapCache.get(target);
    if ((cache2 == null ? void 0 : cache2[0]) === version2) {
      return cache2[1];
    }
    const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
    h$1(snap, true);
    snapCache.set(target, [version2, snap]);
    Reflect.ownKeys(target).forEach((key) => {
      if (Object.getOwnPropertyDescriptor(snap, key)) {
        return;
      }
      const value = Reflect.get(target, key);
      const { enumerable: enumerable4 } = Reflect.getOwnPropertyDescriptor(
        target,
        key
      );
      const desc = {
        value,
        enumerable: enumerable4,
        // This is intentional to avoid copying with proxy-compare.
        // It's still non-writable, so it avoids assigning a value.
        configurable: true
      };
      if (refSet.has(value)) {
        h$1(value, false);
      } else if (value instanceof Promise) {
        delete desc.value;
        desc.get = () => handlePromise(value);
      } else if (proxyStateMap.has(value)) {
        const [target2, ensureVersion] = proxyStateMap.get(
          value
        );
        desc.value = createSnapshot(
          target2,
          ensureVersion(),
          handlePromise
        );
      }
      Object.defineProperty(snap, key, desc);
    });
    return Object.preventExtensions(snap);
  }, proxyCache = /* @__PURE__ */ new WeakMap(), versionHolder = [1, 1], proxyFunction = (initialObject) => {
    if (!isObject(initialObject)) {
      throw new Error("object required");
    }
    const found = proxyCache.get(initialObject);
    if (found) {
      return found;
    }
    let version2 = versionHolder[0];
    const listeners = /* @__PURE__ */ new Set();
    const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
      if (version2 !== nextVersion) {
        version2 = nextVersion;
        listeners.forEach((listener) => listener(op, nextVersion));
      }
    };
    let checkVersion = versionHolder[1];
    const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {
      if (checkVersion !== nextCheckVersion && !listeners.size) {
        checkVersion = nextCheckVersion;
        propProxyStates.forEach(([propProxyState]) => {
          const propVersion = propProxyState[1](nextCheckVersion);
          if (propVersion > version2) {
            version2 = propVersion;
          }
        });
      }
      return version2;
    };
    const createPropListener = (prop) => (op, nextVersion) => {
      const newOp = [...op];
      newOp[1] = [prop, ...newOp[1]];
      notifyUpdate(newOp, nextVersion);
    };
    const propProxyStates = /* @__PURE__ */ new Map();
    const addPropListener = (prop, propProxyState) => {
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production" && propProxyStates.has(prop)) {
        throw new Error("prop listener already exists");
      }
      if (listeners.size) {
        const remove = propProxyState[3](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      } else {
        propProxyStates.set(prop, [propProxyState]);
      }
    };
    const removePropListener = (prop) => {
      var _a;
      const entry = propProxyStates.get(prop);
      if (entry) {
        propProxyStates.delete(prop);
        (_a = entry[1]) == null ? void 0 : _a.call(entry);
      }
    };
    const addListener = (listener) => {
      listeners.add(listener);
      if (listeners.size === 1) {
        propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
          if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production" && prevRemove) {
            throw new Error("remove already exists");
          }
          const remove = propProxyState[3](createPropListener(prop));
          propProxyStates.set(prop, [propProxyState, remove]);
        });
      }
      const removeListener = () => {
        listeners.delete(listener);
        if (listeners.size === 0) {
          propProxyStates.forEach(([propProxyState, remove], prop) => {
            if (remove) {
              remove();
              propProxyStates.set(prop, [propProxyState]);
            }
          });
        }
      };
      return removeListener;
    };
    const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
    const handler = {
      deleteProperty(target, prop) {
        const prevValue = Reflect.get(target, prop);
        removePropListener(prop);
        const deleted = Reflect.deleteProperty(target, prop);
        if (deleted) {
          notifyUpdate(["delete", [prop], prevValue]);
        }
        return deleted;
      },
      set(target, prop, value, receiver) {
        const hasPrevValue = Reflect.has(target, prop);
        const prevValue = Reflect.get(target, prop, receiver);
        if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
          return true;
        }
        removePropListener(prop);
        if (isObject(value)) {
          value = y(value) || value;
        }
        let nextValue = value;
        if (value instanceof Promise) {
          value.then((v2) => {
            value.status = "fulfilled";
            value.value = v2;
            notifyUpdate(["resolve", [prop], v2]);
          }).catch((e2) => {
            value.status = "rejected";
            value.reason = e2;
            notifyUpdate(["reject", [prop], e2]);
          });
        } else {
          if (!proxyStateMap.has(value) && canProxy(value)) {
            nextValue = proxyFunction(value);
          }
          const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
          if (childProxyState) {
            addPropListener(prop, childProxyState);
          }
        }
        Reflect.set(target, prop, nextValue, receiver);
        notifyUpdate(["set", [prop], value, prevValue]);
        return true;
      }
    };
    const proxyObject = newProxy(baseObject, handler);
    proxyCache.set(initialObject, proxyObject);
    const proxyState = [
      baseObject,
      ensureVersion,
      createSnapshot,
      addListener
    ];
    proxyStateMap.set(proxyObject, proxyState);
    Reflect.ownKeys(initialObject).forEach((key) => {
      const desc = Object.getOwnPropertyDescriptor(
        initialObject,
        key
      );
      if ("value" in desc) {
        proxyObject[key] = initialObject[key];
        delete desc.value;
        delete desc.writable;
      }
      Object.defineProperty(baseObject, key, desc);
    });
    return proxyObject;
  }) => [
    // public functions
    proxyFunction,
    // shared state
    proxyStateMap,
    refSet,
    // internal things
    objectIs,
    newProxy,
    canProxy,
    defaultHandlePromise,
    snapCache,
    createSnapshot,
    proxyCache,
    versionHolder
  ];
  const [defaultProxyFunction] = buildProxyFunction();
  function proxy(initialObject = {}) {
    return defaultProxyFunction(initialObject);
  }
  function subscribe(proxyObject, callback, notifyInSync) {
    const proxyState = proxyStateMap.get(proxyObject);
    if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production" && !proxyState) {
      console.warn("Please use proxy object");
    }
    let promise;
    const ops = [];
    const addListener = proxyState[3];
    let isListenerActive = false;
    const listener = (op) => {
      ops.push(op);
      if (!promise) {
        promise = Promise.resolve().then(() => {
          promise = void 0;
          if (isListenerActive) {
            callback(ops.splice(0));
          }
        });
      }
    };
    const removeListener = addListener(listener);
    isListenerActive = true;
    return () => {
      isListenerActive = false;
      removeListener();
    };
  }
  function snapshot(proxyObject, handlePromise) {
    const proxyState = proxyStateMap.get(proxyObject);
    if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production" && !proxyState) {
      console.warn("Please use proxy object");
    }
    const [target, ensureVersion, createSnapshot] = proxyState;
    return createSnapshot(target, ensureVersion(), handlePromise);
  }
  var shim = { exports: {} };
  var useSyncExternalStoreShim_production_min = {};
  /**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var e = React;
  function h(a2, b2) {
    return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
  }
  var k = "function" === typeof Object.is ? Object.is : h, l = e.useState, m$1 = e.useEffect, n = e.useLayoutEffect, p = e.useDebugValue;
  function q(a2, b2) {
    var d2 = b2(), f2 = l({ inst: { value: d2, getSnapshot: b2 } }), c2 = f2[0].inst, g2 = f2[1];
    n(function() {
      c2.value = d2;
      c2.getSnapshot = b2;
      r(c2) && g2({ inst: c2 });
    }, [a2, d2, b2]);
    m$1(function() {
      r(c2) && g2({ inst: c2 });
      return a2(function() {
        r(c2) && g2({ inst: c2 });
      });
    }, [a2]);
    p(d2);
    return d2;
  }
  function r(a2) {
    var b2 = a2.getSnapshot;
    a2 = a2.value;
    try {
      var d2 = b2();
      return !k(a2, d2);
    } catch (f2) {
      return true;
    }
  }
  function t(a2, b2) {
    return b2();
  }
  var u = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t : q;
  useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u;
  {
    shim.exports = useSyncExternalStoreShim_production_min;
  }
  var shimExports = shim.exports;
  const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(shimExports);
  var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: false };
  const { use } = React;
  const { useSyncExternalStore } = useSyncExternalStoreExports;
  const useAffectedDebugValue = (state, affected) => {
    const pathList = React.useRef();
    React.useEffect(() => {
      pathList.current = w(state, affected);
    });
    React.useDebugValue(pathList.current);
  };
  const targetCache = /* @__PURE__ */ new WeakMap();
  function useSnapshot(proxyObject, options) {
    const notifyInSync = void 0;
    const lastSnapshot = React.useRef();
    const lastAffected = React.useRef();
    let inRender = true;
    const currSnapshot = useSyncExternalStore(
      React.useCallback(
        (callback) => {
          const unsub = subscribe(proxyObject, callback);
          callback();
          return unsub;
        },
        [proxyObject, notifyInSync]
      ),
      () => {
        const nextSnapshot = snapshot(proxyObject, use);
        try {
          if (!inRender && lastSnapshot.current && lastAffected.current && !p$1(
            lastSnapshot.current,
            nextSnapshot,
            lastAffected.current,
            /* @__PURE__ */ new WeakMap()
          )) {
            return lastSnapshot.current;
          }
        } catch (e2) {
        }
        return nextSnapshot;
      },
      () => snapshot(proxyObject, use)
    );
    inRender = false;
    const currAffected = /* @__PURE__ */ new WeakMap();
    React.useEffect(() => {
      lastSnapshot.current = currSnapshot;
      lastAffected.current = currAffected;
    });
    if ((define_import_meta_env_default ? "production" : void 0) !== "production") {
      useAffectedDebugValue(currSnapshot, currAffected);
    }
    const proxyCache = React.useMemo(() => /* @__PURE__ */ new WeakMap(), []);
    return a(
      currSnapshot,
      currAffected,
      proxyCache,
      targetCache
    );
  }
  async function proxyWithGmStorage(initialVaue, storageKey) {
    const allowedKeys = Object.keys(initialVaue);
    const savedValue = pick(await GM.getValue(storageKey) || {}, allowedKeys);
    const p2 = proxy({
      ...initialVaue,
      ...savedValue
    });
    setTimeout(() => {
      subscribe(p2, () => {
        const val = snapshot(p2);
        GM.setValue(storageKey, val);
      });
    });
    return p2;
  }
  const configState = await( proxyWithGmStorage({
    filterEnabled: true,
    hiddenRatings: ["Bad"],
    blacklist: []
  }, "config"));
  if (configState.hiddenRatings.some((x2) => !ERatingKeys.includes(x2))) {
    configState.hiddenRatings = configState.hiddenRatings.filter((x2) => ERatingKeys.includes(x2));
  }
  function useConfigSnapshot() {
    return useSnapshot(configState);
  }
  const flexVerticalCenterStyle = {
    name: "s5xdrg",
    styles: "display:flex;align-items:center"
  };
  const C = {
    size(size2) {
      return /* @__PURE__ */ css("width:", size2, "px;height:", size2, "px;", "");
    },
    ml(size2) {
      return /* @__PURE__ */ css("margin-left:", size2, "px;", "");
    },
    mr(size2) {
      return /* @__PURE__ */ css("margin-right:", size2, "px;", "");
    },
    mt(size2) {
      return /* @__PURE__ */ css("margin-top:", size2, "px;", "");
    },
    mb(size2) {
      return /* @__PURE__ */ css("margin-bottom:", size2, "px;", "");
    }
  };
  function _inheritsLoose(t2, o2) {
    t2.prototype = Object.create(o2.prototype), t2.prototype.constructor = t2, _setPrototypeOf(t2, o2);
  }
  var PolishedError = /* @__PURE__ */ function(_Error) {
    _inheritsLoose(PolishedError2, _Error);
    function PolishedError2(code) {
      var _this;
      {
        _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
      }
      return _assertThisInitialized(_this);
    }
    return PolishedError2;
  }(/* @__PURE__ */ _wrapNativeSuper(Error));
  function colorToInt(color) {
    return Math.round(color * 255);
  }
  function convertToInt(red, green, blue2) {
    return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue2);
  }
  function hslToRgb(hue, saturation, lightness, convert) {
    if (convert === void 0) {
      convert = convertToInt;
    }
    if (saturation === 0) {
      return convert(lightness, lightness, lightness);
    }
    var huePrime = (hue % 360 + 360) % 360 / 60;
    var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
    var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
    var red = 0;
    var green = 0;
    var blue2 = 0;
    if (huePrime >= 0 && huePrime < 1) {
      red = chroma;
      green = secondComponent;
    } else if (huePrime >= 1 && huePrime < 2) {
      red = secondComponent;
      green = chroma;
    } else if (huePrime >= 2 && huePrime < 3) {
      green = chroma;
      blue2 = secondComponent;
    } else if (huePrime >= 3 && huePrime < 4) {
      green = secondComponent;
      blue2 = chroma;
    } else if (huePrime >= 4 && huePrime < 5) {
      red = secondComponent;
      blue2 = chroma;
    } else if (huePrime >= 5 && huePrime < 6) {
      red = chroma;
      blue2 = secondComponent;
    }
    var lightnessModification = lightness - chroma / 2;
    var finalRed = red + lightnessModification;
    var finalGreen = green + lightnessModification;
    var finalBlue = blue2 + lightnessModification;
    return convert(finalRed, finalGreen, finalBlue);
  }
  var namedColorMap = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "639",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
  };
  function nameToHex(color) {
    if (typeof color !== "string")
      return color;
    var normalizedColorName = color.toLowerCase();
    return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
  }
  var hexRegex = /^#[a-fA-F0-9]{6}$/;
  var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
  var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
  var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
  var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
  var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
  var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
  var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
  function parseToRgb(color) {
    if (typeof color !== "string") {
      throw new PolishedError(3);
    }
    var normalizedColor = nameToHex(color);
    if (normalizedColor.match(hexRegex)) {
      return {
        red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
        green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
        blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
      };
    }
    if (normalizedColor.match(hexRgbaRegex)) {
      var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
      return {
        red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
        green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
        blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
        alpha
      };
    }
    if (normalizedColor.match(reducedHexRegex)) {
      return {
        red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
        green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
        blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
      };
    }
    if (normalizedColor.match(reducedRgbaHexRegex)) {
      var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
      return {
        red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
        green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
        blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
        alpha: _alpha
      };
    }
    var rgbMatched = rgbRegex.exec(normalizedColor);
    if (rgbMatched) {
      return {
        red: parseInt("" + rgbMatched[1], 10),
        green: parseInt("" + rgbMatched[2], 10),
        blue: parseInt("" + rgbMatched[3], 10)
      };
    }
    var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
    if (rgbaMatched) {
      return {
        red: parseInt("" + rgbaMatched[1], 10),
        green: parseInt("" + rgbaMatched[2], 10),
        blue: parseInt("" + rgbaMatched[3], 10),
        alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4])
      };
    }
    var hslMatched = hslRegex.exec(normalizedColor);
    if (hslMatched) {
      var hue = parseInt("" + hslMatched[1], 10);
      var saturation = parseInt("" + hslMatched[2], 10) / 100;
      var lightness = parseInt("" + hslMatched[3], 10) / 100;
      var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
      var hslRgbMatched = rgbRegex.exec(rgbColorString);
      if (!hslRgbMatched) {
        throw new PolishedError(4, normalizedColor, rgbColorString);
      }
      return {
        red: parseInt("" + hslRgbMatched[1], 10),
        green: parseInt("" + hslRgbMatched[2], 10),
        blue: parseInt("" + hslRgbMatched[3], 10)
      };
    }
    var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
    if (hslaMatched) {
      var _hue = parseInt("" + hslaMatched[1], 10);
      var _saturation = parseInt("" + hslaMatched[2], 10) / 100;
      var _lightness = parseInt("" + hslaMatched[3], 10) / 100;
      var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";
      var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
      if (!_hslRgbMatched) {
        throw new PolishedError(4, normalizedColor, _rgbColorString);
      }
      return {
        red: parseInt("" + _hslRgbMatched[1], 10),
        green: parseInt("" + _hslRgbMatched[2], 10),
        blue: parseInt("" + _hslRgbMatched[3], 10),
        alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4])
      };
    }
    throw new PolishedError(5);
  }
  function rgbToHsl(color) {
    var red = color.red / 255;
    var green = color.green / 255;
    var blue2 = color.blue / 255;
    var max2 = Math.max(red, green, blue2);
    var min2 = Math.min(red, green, blue2);
    var lightness = (max2 + min2) / 2;
    if (max2 === min2) {
      if (color.alpha !== void 0) {
        return {
          hue: 0,
          saturation: 0,
          lightness,
          alpha: color.alpha
        };
      } else {
        return {
          hue: 0,
          saturation: 0,
          lightness
        };
      }
    }
    var hue;
    var delta = max2 - min2;
    var saturation = lightness > 0.5 ? delta / (2 - max2 - min2) : delta / (max2 + min2);
    switch (max2) {
      case red:
        hue = (green - blue2) / delta + (green < blue2 ? 6 : 0);
        break;
      case green:
        hue = (blue2 - red) / delta + 2;
        break;
      default:
        hue = (red - green) / delta + 4;
        break;
    }
    hue *= 60;
    if (color.alpha !== void 0) {
      return {
        hue,
        saturation,
        lightness,
        alpha: color.alpha
      };
    }
    return {
      hue,
      saturation,
      lightness
    };
  }
  function parseToHsl(color) {
    return rgbToHsl(parseToRgb(color));
  }
  var reduceHexValue = function reduceHexValue2(value) {
    if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
      return "#" + value[1] + value[3] + value[5];
    }
    return value;
  };
  var reduceHexValue$1 = reduceHexValue;
  function numberToHex(value) {
    var hex2 = value.toString(16);
    return hex2.length === 1 ? "0" + hex2 : hex2;
  }
  function colorToHex(color) {
    return numberToHex(Math.round(color * 255));
  }
  function convertToHex(red, green, blue2) {
    return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue2));
  }
  function hslToHex(hue, saturation, lightness) {
    return hslToRgb(hue, saturation, lightness, convertToHex);
  }
  function hsl(value, saturation, lightness) {
    if (typeof value === "number" && typeof saturation === "number" && typeof lightness === "number") {
      return hslToHex(value, saturation, lightness);
    } else if (typeof value === "object" && saturation === void 0 && lightness === void 0) {
      return hslToHex(value.hue, value.saturation, value.lightness);
    }
    throw new PolishedError(1);
  }
  function hsla(value, saturation, lightness, alpha) {
    if (typeof value === "number" && typeof saturation === "number" && typeof lightness === "number" && typeof alpha === "number") {
      return "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
    } else if (typeof value === "object" && saturation === void 0 && lightness === void 0 && alpha === void 0) {
      return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
    }
    throw new PolishedError(2);
  }
  function rgb(value, green, blue2) {
    if (typeof value === "number" && typeof green === "number" && typeof blue2 === "number") {
      return reduceHexValue$1("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue2));
    } else if (typeof value === "object" && green === void 0 && blue2 === void 0) {
      return reduceHexValue$1("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
    }
    throw new PolishedError(6);
  }
  function rgba(firstValue, secondValue, thirdValue, fourthValue) {
    if (typeof firstValue === "string" && typeof secondValue === "number") {
      var rgbValue = parseToRgb(firstValue);
      return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
    } else if (typeof firstValue === "number" && typeof secondValue === "number" && typeof thirdValue === "number" && typeof fourthValue === "number") {
      return "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
    } else if (typeof firstValue === "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0) {
      return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
    }
    throw new PolishedError(7);
  }
  var isRgb = function isRgb2(color) {
    return typeof color.red === "number" && typeof color.green === "number" && typeof color.blue === "number" && (typeof color.alpha !== "number" || typeof color.alpha === "undefined");
  };
  var isRgba = function isRgba2(color) {
    return typeof color.red === "number" && typeof color.green === "number" && typeof color.blue === "number" && typeof color.alpha === "number";
  };
  var isHsl = function isHsl2(color) {
    return typeof color.hue === "number" && typeof color.saturation === "number" && typeof color.lightness === "number" && (typeof color.alpha !== "number" || typeof color.alpha === "undefined");
  };
  var isHsla = function isHsla2(color) {
    return typeof color.hue === "number" && typeof color.saturation === "number" && typeof color.lightness === "number" && typeof color.alpha === "number";
  };
  function toColorString(color) {
    if (typeof color !== "object")
      throw new PolishedError(8);
    if (isRgba(color))
      return rgba(color);
    if (isRgb(color))
      return rgb(color);
    if (isHsla(color))
      return hsla(color);
    if (isHsl(color))
      return hsl(color);
    throw new PolishedError(8);
  }
  function curried(f2, length2, acc) {
    return function fn() {
      var combined = acc.concat(Array.prototype.slice.call(arguments));
      return combined.length >= length2 ? f2.apply(this, combined) : curried(f2, length2, combined);
    };
  }
  function curry(f2) {
    return curried(f2, f2.length, []);
  }
  function adjustHue(degree, color) {
    if (color === "transparent")
      return color;
    var hslColor = parseToHsl(color);
    return toColorString(_extends({}, hslColor, {
      hue: hslColor.hue + parseFloat(degree)
    }));
  }
  curry(adjustHue);
  function guard(lowerBoundary, upperBoundary, value) {
    return Math.max(lowerBoundary, Math.min(upperBoundary, value));
  }
  function darken(amount, color) {
    if (color === "transparent")
      return color;
    var hslColor = parseToHsl(color);
    return toColorString(_extends({}, hslColor, {
      lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
    }));
  }
  curry(darken);
  function desaturate(amount, color) {
    if (color === "transparent")
      return color;
    var hslColor = parseToHsl(color);
    return toColorString(_extends({}, hslColor, {
      saturation: guard(0, 1, hslColor.saturation - parseFloat(amount))
    }));
  }
  curry(desaturate);
  function lighten(amount, color) {
    if (color === "transparent")
      return color;
    var hslColor = parseToHsl(color);
    return toColorString(_extends({}, hslColor, {
      lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
    }));
  }
  curry(lighten);
  function mix(weight, color, otherColor) {
    if (color === "transparent")
      return otherColor;
    if (otherColor === "transparent")
      return color;
    if (weight === 0)
      return otherColor;
    var parsedColor1 = parseToRgb(color);
    var color1 = _extends({}, parsedColor1, {
      alpha: typeof parsedColor1.alpha === "number" ? parsedColor1.alpha : 1
    });
    var parsedColor2 = parseToRgb(otherColor);
    var color2 = _extends({}, parsedColor2, {
      alpha: typeof parsedColor2.alpha === "number" ? parsedColor2.alpha : 1
    });
    var alphaDelta = color1.alpha - color2.alpha;
    var x2 = parseFloat(weight) * 2 - 1;
    var y2 = x2 * alphaDelta === -1 ? x2 : x2 + alphaDelta;
    var z2 = 1 + x2 * alphaDelta;
    var weight1 = (y2 / z2 + 1) / 2;
    var weight2 = 1 - weight1;
    var mixedColor = {
      red: Math.floor(color1.red * weight1 + color2.red * weight2),
      green: Math.floor(color1.green * weight1 + color2.green * weight2),
      blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
      alpha: color1.alpha * parseFloat(weight) + color2.alpha * (1 - parseFloat(weight))
    };
    return rgba(mixedColor);
  }
  var curriedMix = curry(mix);
  var mix$1 = curriedMix;
  function opacify(amount, color) {
    if (color === "transparent")
      return color;
    var parsedColor = parseToRgb(color);
    var alpha = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
    var colorWithAlpha = _extends({}, parsedColor, {
      alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
    });
    return rgba(colorWithAlpha);
  }
  curry(opacify);
  function saturate(amount, color) {
    if (color === "transparent")
      return color;
    var hslColor = parseToHsl(color);
    return toColorString(_extends({}, hslColor, {
      saturation: guard(0, 1, hslColor.saturation + parseFloat(amount))
    }));
  }
  curry(saturate);
  function setHue(hue, color) {
    if (color === "transparent")
      return color;
    return toColorString(_extends({}, parseToHsl(color), {
      hue: parseFloat(hue)
    }));
  }
  curry(setHue);
  function setLightness(lightness, color) {
    if (color === "transparent")
      return color;
    return toColorString(_extends({}, parseToHsl(color), {
      lightness: parseFloat(lightness)
    }));
  }
  curry(setLightness);
  function setSaturation(saturation, color) {
    if (color === "transparent")
      return color;
    return toColorString(_extends({}, parseToHsl(color), {
      saturation: parseFloat(saturation)
    }));
  }
  curry(setSaturation);
  function shade(percentage, color) {
    if (color === "transparent")
      return color;
    return mix$1(parseFloat(percentage), "rgb(0, 0, 0)", color);
  }
  curry(shade);
  function tint(percentage, color) {
    if (color === "transparent")
      return color;
    return mix$1(parseFloat(percentage), "rgb(255, 255, 255)", color);
  }
  curry(tint);
  function transparentize(amount, color) {
    if (color === "transparent")
      return color;
    var parsedColor = parseToRgb(color);
    var alpha = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
    var colorWithAlpha = _extends({}, parsedColor, {
      alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
    });
    return rgba(colorWithAlpha);
  }
  curry(transparentize);
  function size(height, width) {
    if (width === void 0) {
      width = height;
    }
    return {
      height,
      width
    };
  }
  const iconParkOutlineTips = (props) => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 48 48", width: "1.2em", height: "1.2em", ...props, children: /* @__PURE__ */ jsxs("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 4, children: [
    /* @__PURE__ */ jsx("path", { d: "M40 20c0 6.808-4.252 12.622-10.244 14.934H18.244C12.252 32.622 8 26.808 8 20c0-8.837 7.163-16 16-16s16 7.163 16 16" }),
    /* @__PURE__ */ jsx("path", { d: "m29.756 34.934l-.68 8.15a1 1 0 0 1-.996.916h-8.16a1 1 0 0 1-.996-.917l-.68-8.15M18 17v6l6-3l6 3v-6" })
  ] }) });
  var _ref$2 = {
    name: "e0dnmk",
    styles: "cursor:pointer"
  };
  function HelpInfo({
    children,
    size: sizeVal = 14,
    ...restProps
  }) {
    return /* @__PURE__ */ jsx(AntdTooltip, { title: children, children: /* @__PURE__ */ jsx(iconParkOutlineTips, { ...size(sizeVal), ...restProps, css: [C.ml(6), _ref$2, "", ""] }) });
  }
  function useMemoizedFn(fn) {
    var fnRef = React.useRef(fn);
    fnRef.current = React.useMemo(function() {
      return fn;
    }, [fn]);
    var memoizedFn = React.useRef();
    if (!memoizedFn.current) {
      memoizedFn.current = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return fnRef.current.apply(this, args);
      };
    }
    return memoizedFn.current;
  }
  var createRoot;
  var m = ReactDOM__default;
  {
    createRoot = m.createRoot;
    m.hydrateRoot;
  }
  const iconParkOutlineCloseSmall = (props) => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 48 48", width: "1.2em", height: "1.2em", ...props, children: /* @__PURE__ */ jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 4, d: "m14 14l20 20m-20 0l20-20" }) });
  const {
    Search
  } = Input;
  var _ref2$1 = {
    name: "n2wo5l",
    styles: "&.ant-empty-normal{margin-block:5px;}"
  };
  var _ref3 = {
    name: "1rsgs3g",
    styles: "display:flex;flex-wrap:wrap;padding:5px;gap:5px 10px;align-items:flex-start"
  };
  var _ref4 = {
    name: "2vv6yp",
    styles: "color:var(--ant-color-text-disabled);background-color:var(--ant-color-bg-container-disabled);border-color:var(--ant-color-border);box-shadow:none;opacity:1;pointer-events:none;cursor:not-allowed"
  };
  var _ref5 = {
    name: "1yc18a7",
    styles: "min-height:82px;border-radius:6px;border:1px solid #eee;margin-top:3px;body.dark &{border-color:#333;}"
  };
  var _ref6 = {
    name: "1b794sh",
    styles: "margin-top:5px;margin-bottom:5px"
  };
  function EditableList({
    searchProps,
    disabled,
    list,
    onChange,
    displayListCss
  }) {
    list = React.useMemo(() => uniq(list), [list]);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Search, { css: _ref6, enterButton: "Add", allowClear: true, disabled, ...searchProps, onSearch: (val, e2) => {
        var _a;
        if (!val)
          return;
        const set2 = /* @__PURE__ */ new Set([...list]);
        if (!set2.has(val)) {
          set2.add(val);
        } else {
          staticMethods.warning(`${val} already exists`);
        }
        onChange(Array.from(set2));
        if (e2 == null ? void 0 : e2.target) {
          const el = e2.target;
          const clearBtn = (_a = el.closest(".ant-input-wrapper")) == null ? void 0 : _a.querySelector(".ant-input-clear-icon");
          clearBtn == null ? void 0 : clearBtn.click();
        }
      } }),
      /* @__PURE__ */ jsx("div", { css: [_ref5, disabled && _ref4, displayListCss, "", ""], children: list.length ? /* @__PURE__ */ jsx("div", { css: _ref3, children: list.map((t2) => {
        return /* @__PURE__ */ jsx(TagItemDisplay, { tag: t2, enableDragging: false, onDelete: (tag) => {
          const s2 = /* @__PURE__ */ new Set([...list]);
          s2.delete(tag);
          onChange(Array.from(s2));
        } }, t2);
      }) }) : /* @__PURE__ */ jsx(Empty, { image: Empty.PRESENTED_IMAGE_SIMPLE, description: "Empty", css: _ref2$1 }) })
    ] });
  }
  var _ref$1 = {
    name: "15cju5k",
    styles: "cursor:move"
  };
  const TagItemDisplay = React.forwardRef(({
    tag,
    enableDragging = true,
    dragging,
    className,
    onDelete,
    ...restProps
  }, ref) => {
    return /* @__PURE__ */ jsxs("div", { ...restProps, ref, className: cx(className, {
      dragging
    }), css: [/* @__PURE__ */ css("border-radius:5px;padding:2px 15px;position:relative;border:1px solid #ddd;body.dark &{border-color:#333;}display:inline-flex;align-items:center;&:hover,&.dragging{border-color:", colorPrimary, ";color:", colorPrimary, ";.anticon{visibility:visible;}}&.dragging{z-index:10;}", ""), enableDragging && _ref$1, "", ""], children: [
      tag,
      /* @__PURE__ */ jsx(iconParkOutlineCloseSmall, { onClick: () => {
        onDelete == null ? void 0 : onDelete(tag);
      }, css: /* @__PURE__ */ css(C.size(16), ";", C.ml(5), ";cursor:pointer;font-size:12px;", "") })
    ] });
  });
  const modalState = proxy({
    show: false
  });
  function showModalConfig() {
    renderOnce();
    modalState.show = true;
  }
  function hideModalConfig() {
    modalState.show = false;
  }
  let root;
  const renderOnce = once(() => {
    root || (root = (() => {
      const rcEl = document.createElement("div");
      document.body.appendChild(rcEl);
      return createRoot(rcEl);
    })());
    root.render(/* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(AntdApp, { children: /* @__PURE__ */ jsx(ModalConfig, {}) }) }));
  });
  const S = {
    configSection: {
      name: "6h2gw6",
      styles: "margin-top:20px;margin-bottom:5px"
    }
  };
  var _ref = {
    name: "ecvjkq",
    styles: "min-height:100px"
  };
  var _ref2 = {
    name: "mnqxyb",
    styles: "&.ant-checkbox-wrapper+.ant-checkbox-wrapper{margin-left:20px;}.ant-checkbox+span{user-select:none;}"
  };
  function ModalConfig() {
    const {
      show
    } = useSnapshot(modalState);
    React.useEffect(() => {
      const html = document.documentElement;
      if (show) {
        html.style.overflowY = "hidden";
      } else {
        html.style.overflowY = "";
      }
    }, [show]);
    const handleOk = useMemoizedFn(() => {
      hideModalConfig();
    });
    const {
      hiddenRatings,
      blacklist,
      filterEnabled
    } = useConfigSnapshot();
    return /* @__PURE__ */ jsxs(Modal, { open: show, onOk: handleOk, onCancel: hideModalConfig, centered: true, footer: null, title: "Configuration", width: 700, children: [
      /* @__PURE__ */ jsxs("p", { css: [flexVerticalCenterStyle, S.configSection, "", ""], children: [
        "Enable Filter",
        /* @__PURE__ */ jsx(HelpInfo, { children: "this is the MAIN switch" })
      ] }),
      /* @__PURE__ */ jsx(Switch, { checked: filterEnabled, onChange: (val) => configState.filterEnabled = val }),
      /* @__PURE__ */ jsxs("p", { css: [flexVerticalCenterStyle, S.configSection, "", ""], children: [
        "Hide Ratings",
        /* @__PURE__ */ jsxs(HelpInfo, { children: [
          "Hide feedbacks of checked types. ",
          /* @__PURE__ */ jsx("br", {}),
          "P.S ONLY apply to current script when u are the script owner or has admin permission."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: ["Bad", "Ok", "NoRating", "Good"].map((key) => {
        const checked = hiddenRatings.includes(key);
        const onChange = (e2) => {
          const set2 = new Set(hiddenRatings);
          const val = e2.target.checked;
          if (val) {
            set2.add(key);
          } else {
            set2.delete(key);
          }
          configState.hiddenRatings = Array.from(set2);
        };
        return /* @__PURE__ */ jsx(Checkbox, { css: _ref2, checked, onChange, disabled: !filterEnabled, children: key }, key);
      }) }),
      /* @__PURE__ */ jsxs("p", { css: [flexVerticalCenterStyle, S.configSection, C.mb(0), "", ""], children: [
        "Blacklist",
        /* @__PURE__ */ jsxs(HelpInfo, { children: [
          "blacklist feedbacks by UIDs and usernames",
          /* @__PURE__ */ jsx("br", {}),
          "P.S this section applies to all scripts"
        ] })
      ] }),
      /* @__PURE__ */ jsx(EditableList, { disabled: !filterEnabled, searchProps: {
        placeholder: "`Username` or `UID` or `UID(remark)`"
      }, list: blacklist, onChange: (val) => configState.blacklist = val, displayListCss: _ref })
    ] });
  }
  const iconParkSolidConfig = (props) => /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 48 48", width: "1.2em", height: "1.2em", ...props, children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("mask", { id: "ipSConfig0", children: /* @__PURE__ */ jsxs("g", { fill: "none", strokeLinejoin: "round", strokeWidth: 4, children: [
      /* @__PURE__ */ jsx("path", { fill: "#fff", stroke: "#fff", d: "m24 4l-6 6h-8v8l-6 6l6 6v8h8l6 6l6-6h8v-8l6-6l-6-6v-8h-8z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", stroke: "#000", d: "M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z" })
    ] }) }) }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M0 0h48v48H0z", mask: "url(#ipSConfig0)" })
  ] });
  function initFeedback() {
    initFilterFeedbacks();
    addConfigUi();
  }
  async function initFilterFeedbacks() {
    processFeedbacks();
    const ob = new MutationObserver(processFeedbacks);
    ob.observe(document.body, {
      childList: true,
      subtree: true
    });
    window.addEventListener("unload", () => ob.disconnect(), {
      capture: false,
      passive: true
    });
  }
  const processed = /* @__PURE__ */ new WeakSet();
  async function processFeedbacks() {
    const items = [...document.querySelectorAll(".script-discussion-list .discussion-list-container .discussion-list-item")].filter((item) => !processed.has(item));
    for (const item of items) {
      handleFeedbackItem(item);
    }
  }
  function getHasAdminPermission() {
    const adminUrl = new URL("./admin", location.href);
    const adminUrlPath = adminUrl.pathname;
    const hasAdminEntry = !!document.querySelector(`#script-links a[href^='${adminUrlPath}']`);
    return hasAdminEntry;
  }
  const hasAdminPermission = getHasAdminPermission();
  function handleFeedbackItem(item) {
    if (processed.has(item))
      return;
    processed.add(item);
    const {
      uid,
      username,
      title,
      rating
    } = parseFeedbackItem(item);
    if (rating) {
      const ratingKey = ERating[rating];
      item.setAttribute(ATTR_NAME_RATING, ratingKey);
    }
    if (uid) {
      item.setAttribute(ATTR_NAME_UID, uid);
    }
    if (username) {
      item.setAttribute(ATTR_NAME_USERNAME, username);
    }
  }
  function parseFeedbackItem(item) {
    var _a, _b, _c, _d;
    const authorMeta = item.querySelectorAll(".discussion-meta-item")[0];
    const authorHref = ((_a = authorMeta == null ? void 0 : authorMeta.querySelector(".user-link")) == null ? void 0 : _a.getAttribute("href")) || "";
    const authorHrefPath = new URL(authorHref, location.href).pathname;
    const lastPath = authorHrefPath.split("/").at(-1);
    const match2 = /^(?<uid>\d+)-(?<username>\S+)$/.exec(lastPath || "");
    const uid = (_b = match2 == null ? void 0 : match2.groups) == null ? void 0 : _b.uid;
    const username = (_c = match2 == null ? void 0 : match2.groups) == null ? void 0 : _c.username;
    const title = (_d = item.querySelector(".discussion-title .discussion-snippet")) == null ? void 0 : _d.innerText;
    const ratingSpan = item.querySelector(".discussion-title .rating-icon");
    const ratingText = (ratingSpan == null ? void 0 : ratingSpan.innerText.trim().toLocaleLowerCase()) || "";
    const ratingClassname = [...(ratingSpan == null ? void 0 : ratingSpan.classList) || []].filter((x2) => x2.startsWith("rating-icon-")).map((x2) => x2.replace(/^rating-icon-/, "")).filter(Boolean)[0];
    const rating = (() => {
      if (!ratingText)
        return ERating.NoRating;
      if (ratingText === "good" || ratingClassname === "good")
        return ERating.Good;
      if (ratingText === "ok" || ratingClassname === "ok")
        return ERating.Ok;
      if (ratingText === "bad" || ratingClassname === "bad")
        return ERating.Bad;
    })();
    return {
      uid,
      username,
      title,
      rating
    };
  }
  function addConfigUi() {
    var _a;
    const rcEl = document.createElement("span");
    rcEl.classList.add(styled.generateClassName`
    margin-left: 20px;
  `);
    (_a = document.querySelector(".post-discussion > p")) == null ? void 0 : _a.appendChild(rcEl);
    const root2 = createRoot(rcEl);
    root2.render(/* @__PURE__ */ jsx(ConfigUi, {}));
  }
  function addConfigGmCommand() {
    GM.registerMenuCommand("Config", () => {
      showModalConfig();
    });
  }
  function ConfigUi() {
    return /* @__PURE__ */ jsxs(AntdApp, { children: [
      /* @__PURE__ */ jsx(HideWithStyles, {}),
      /* @__PURE__ */ jsx(AntdTooltip, { title: `config for [${APP_NAME_DISPLAY}]`, children: /* @__PURE__ */ jsxs(Button, { onClick: showModalConfig, children: [
        /* @__PURE__ */ jsx(iconParkSolidConfig, {}),
        " Config"
      ] }) })
    ] });
  }
  const ATTR_NAME_RATING = `data-${APP_NAME}-rating`;
  const ATTR_NAME_UID = `data-${APP_NAME}-uid`;
  const ATTR_NAME_USERNAME = `data-${APP_NAME}-username`;
  const regUid = /^\d+$/;
  const regUidWithRemark = /^(?<uid>\d+)\([\S ]+\)$/;
  function HideWithStyles() {
    const {
      filterEnabled,
      hiddenRatings,
      blacklist
    } = useConfigSnapshot();
    const selectors = React.useMemo(() => {
      return [...hiddenRatings.map((x2) => `[${ATTR_NAME_RATING}="${x2}"]`)];
    }, [hiddenRatings, blacklist]);
    const blacklistSelectors = React.useMemo(() => {
      const blacklistUids = /* @__PURE__ */ new Set();
      const blacklistUsernames = /* @__PURE__ */ new Set();
      blacklist.forEach((x2) => {
        var _a, _b;
        if (regUidWithRemark.test(x2)) {
          const uid = (_b = (_a = regUidWithRemark.exec(x2)) == null ? void 0 : _a.groups) == null ? void 0 : _b.uid;
          if (uid)
            blacklistUids.add(uid);
        } else if (regUid.test(x2)) {
          blacklistUids.add(x2);
          blacklistUsernames.add(x2);
        } else {
          blacklistUsernames.add(x2);
        }
      });
      return [...Array.from(blacklistUids).map((x2) => `[${ATTR_NAME_UID}="${x2}"]`), ...Array.from(blacklistUsernames).map((x2) => `[${ATTR_NAME_USERNAME}="${x2}"]`)];
    }, [blacklist]);
    return /* @__PURE__ */ jsx(Global, { styles: [
      // hide in MY script feedback-list
      filterEnabled && hasAdminPermission && /* @__PURE__ */ css(selectors.join(","), "{display:none!important;}", ""),
      // hide anywhere
      filterEnabled && /* @__PURE__ */ css(blacklistSelectors.join(","), "{display:none!important;}", ""),
      "",
      ""
    ] });
  }
  function getPageType() {
    const path2 = location.pathname;
    if (/^\/[\w]+(-[\w]+)?\/scripts\/\d+-\S*?\/feedback$/i.test(path2)) {
      return 0;
    }
  }
  function main() {
    addConfigGmCommand();
    switch (getPageType()) {
      case 0:
        initFeedback();
        break;
    }
  }
  main();

})(React, ReactDOM);
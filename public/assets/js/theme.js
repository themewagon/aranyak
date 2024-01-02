"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* -------------------------------------------------------------------------- */
/*                                    Utils                                   */
/* -------------------------------------------------------------------------- */
var docReady = function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    setTimeout(fn, 1);
  }
};
var resize = function resize(fn) {
  return window.addEventListener('resize', fn);
};
var isIterableArray = function isIterableArray(array) {
  return Array.isArray(array) && !!array.length;
};
var camelize = function camelize(str) {
  var text = str.replace(/[-_\s.]+(.)?/g, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
  return "".concat(text.substr(0, 1).toLowerCase()).concat(text.substr(1));
};
var getData = function getData(el, data) {
  try {
    return JSON.parse(el.dataset[camelize(data)]);
  } catch (e) {
    return el.dataset[camelize(data)];
  }
};

/* ----------------------------- Colors function ---------------------------- */

var hexToRgb = function hexToRgb(hexValue) {
  var hex;
  hexValue.indexOf('#') === 0 ? hex = hexValue.substring(1) : hex = hexValue;
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  }));
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
};
var rgbaColor = function rgbaColor() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#fff';
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  return "rgba(".concat(hexToRgb(color), ", ").concat(alpha, ")");
};

/* --------------------------------- Colors --------------------------------- */

var getColor = function getColor(name) {
  var dom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
  return getComputedStyle(dom).getPropertyValue("--falcon-".concat(name)).trim();
};
var getColors = function getColors(dom) {
  return {
    primary: getColor('primary', dom),
    secondary: getColor('secondary', dom),
    success: getColor('success', dom),
    info: getColor('info', dom),
    warning: getColor('warning', dom),
    danger: getColor('danger', dom),
    light: getColor('light', dom),
    dark: getColor('dark', dom),
    white: getColor('white', dom),
    black: getColor('black', dom),
    emphasis: getColor('emphasis-color', dom)
  };
};
var getSubtleColors = function getSubtleColors(dom) {
  return {
    primary: getColor('primary-bg-subtle', dom),
    secondary: getColor('secondary-bg-subtle', dom),
    success: getColor('success-bg-subtle', dom),
    info: getColor('info-bg-subtle', dom),
    warning: getColor('warning-bg-subtle', dom),
    danger: getColor('danger-bg-subtle', dom),
    light: getColor('light-bg-subtle', dom),
    dark: getColor('dark-bg-subtle', dom)
  };
};
var getGrays = function getGrays(dom) {
  return {
    100: getColor('gray-100', dom),
    200: getColor('gray-200', dom),
    300: getColor('gray-300', dom),
    400: getColor('gray-400', dom),
    500: getColor('gray-500', dom),
    600: getColor('gray-600', dom),
    700: getColor('gray-700', dom),
    800: getColor('gray-800', dom),
    900: getColor('gray-900', dom),
    1000: getColor('gray-1000', dom),
    1100: getColor('gray-1100', dom)
  };
};
var hasClass = function hasClass(el, className) {
  !el && false;
  return el.classList.value.includes(className);
};
var addClass = function addClass(el, className) {
  el.classList.add(className);
};
var removeClass = function removeClass(el, className) {
  el.classList.remove(className);
};
var getOffset = function getOffset(el) {
  var rect = el.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
};
function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
  return vertInView && horInView;
}
var breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1540
};
var getBreakpoint = function getBreakpoint(el) {
  var classes = el && el.classList.value;
  var breakpoint;
  if (classes) {
    breakpoint = breakpoints[classes.split(' ').filter(function (cls) {
      return cls.includes('navbar-expand-');
    }).pop().split('-').pop()];
  }
  return breakpoint;
};
var getSystemTheme = function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

/* --------------------------------- Cookie --------------------------------- */

var setCookie = function setCookie(name, value, expire) {
  var expires = new Date();
  expires.setTime(expires.getTime() + expire);
  document.cookie = "".concat(name, "=").concat(value, ";expires=").concat(expires.toUTCString());
};
var getCookie = function getCookie(name) {
  var keyValue = document.cookie.match("(^|;) ?".concat(name, "=([^;]*)(;|$)"));
  return keyValue ? keyValue[2] : keyValue;
};
var settings = {
  tinymce: {
    theme: 'oxide'
  },
  chart: {
    borderColor: 'rgba(255, 255, 255, 0.8)'
  }
};

/* -------------------------- Chart Initialization -------------------------- */

var newChart = function newChart(chart, config) {
  var ctx = chart.getContext('2d');
  return new window.Chart(ctx, config);
};

/* ---------------------------------- Store --------------------------------- */

var getItemFromStore = function getItemFromStore(key, defaultValue) {
  var store = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : localStorage;
  try {
    return JSON.parse(store.getItem(key)) || defaultValue;
  } catch (_unused) {
    return store.getItem(key) || defaultValue;
  }
};
var setItemToStore = function setItemToStore(key, payload) {
  var store = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : localStorage;
  return store.setItem(key, payload);
};
var getStoreSpace = function getStoreSpace() {
  var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : localStorage;
  return parseFloat((escape(encodeURIComponent(JSON.stringify(store))).length / (1024 * 1024)).toFixed(2));
};

/* get Dates between */

var getDates = function getDates(startDate, endDate) {
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000 * 60 * 60 * 24;
  var duration = endDate - startDate;
  var steps = duration / interval;
  return Array.from({
    length: steps + 1
  }, function (v, i) {
    return new Date(startDate.valueOf() + interval * i);
  });
};
var getPastDates = function getPastDates(duration) {
  var days;
  switch (duration) {
    case 'week':
      days = 7;
      break;
    case 'month':
      days = 30;
      break;
    case 'year':
      days = 365;
      break;
    default:
      days = duration;
  }
  var date = new Date();
  var endDate = date;
  var startDate = new Date(new Date().setDate(date.getDate() - (days - 1)));
  return getDates(startDate, endDate);
};

/* Get Random Number */
var getRandomNumber = function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
var utils = {
  docReady: docReady,
  breakpoints: breakpoints,
  resize: resize,
  isIterableArray: isIterableArray,
  camelize: camelize,
  getData: getData,
  hasClass: hasClass,
  addClass: addClass,
  hexToRgb: hexToRgb,
  rgbaColor: rgbaColor,
  getColor: getColor,
  getColors: getColors,
  getSubtleColors: getSubtleColors,
  getGrays: getGrays,
  getOffset: getOffset,
  isScrolledIntoView: isScrolledIntoView,
  getBreakpoint: getBreakpoint,
  setCookie: setCookie,
  getCookie: getCookie,
  newChart: newChart,
  settings: settings,
  getItemFromStore: getItemFromStore,
  setItemToStore: setItemToStore,
  getStoreSpace: getStoreSpace,
  getDates: getDates,
  getPastDates: getPastDates,
  getRandomNumber: getRandomNumber,
  removeClass: removeClass,
  getSystemTheme: getSystemTheme
};

/* -------------------------------------------------------------------------- */
/*                                  Detector                                  */
/* -------------------------------------------------------------------------- */

var detectorInit = function detectorInit() {
  var _window = window,
    is = _window.is;
  var html = document.querySelector('html');
  is.opera() && addClass(html, 'opera');
  is.mobile() && addClass(html, 'mobile');
  is.firefox() && addClass(html, 'firefox');
  is.safari() && addClass(html, 'safari');
  is.ios() && addClass(html, 'ios');
  is.iphone() && addClass(html, 'iphone');
  is.ipad() && addClass(html, 'ipad');
  is.ie() && addClass(html, 'ie');
  is.edge() && addClass(html, 'edge');
  is.chrome() && addClass(html, 'chrome');
  is.mac() && addClass(html, 'osx');
  is.windows() && addClass(html, 'windows');
  navigator.userAgent.match('CriOS') && addClass(html, 'chrome');
};

/*-----------------------------------------------
|   DomNode
-----------------------------------------------*/
var DomNode = /*#__PURE__*/function () {
  function DomNode(node) {
    _classCallCheck(this, DomNode);
    this.node = node;
  }
  _createClass(DomNode, [{
    key: "addClass",
    value: function addClass(className) {
      this.isValidNode() && this.node.classList.add(className);
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      this.isValidNode() && this.node.classList.remove(className);
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(className) {
      this.isValidNode() && this.node.classList.toggle(className);
    }
  }, {
    key: "hasClass",
    value: function hasClass(className) {
      this.isValidNode() && this.node.classList.contains(className);
    }
  }, {
    key: "data",
    value: function data(key) {
      if (this.isValidNode()) {
        try {
          return JSON.parse(this.node.dataset[this.camelize(key)]);
        } catch (e) {
          return this.node.dataset[this.camelize(key)];
        }
      }
      return null;
    }
  }, {
    key: "attr",
    value: function attr(name) {
      return this.isValidNode() && this.node[name];
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.isValidNode() && this.node.setAttribute(name, value);
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(name) {
      this.isValidNode() && this.node.removeAttribute(name);
    }
  }, {
    key: "setProp",
    value: function setProp(name, value) {
      this.isValidNode() && (this.node[name] = value);
    }
  }, {
    key: "on",
    value: function on(event, cb) {
      this.isValidNode() && this.node.addEventListener(event, cb);
    }
  }, {
    key: "isValidNode",
    value: function isValidNode() {
      return !!this.node;
    }

    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "camelize",
    value: function camelize(str) {
      var text = str.replace(/[-_\s.]+(.)?/g, function (_, c) {
        return c ? c.toUpperCase() : '';
      });
      return "".concat(text.substr(0, 1).toLowerCase()).concat(text.substr(1));
    }
  }]);
  return DomNode;
}();
/* -------------------------------------------------------------------------- */
/*                               from-validation                              */
/* -------------------------------------------------------------------------- */
var formValidationInit = function formValidationInit() {
  // Example starter JavaScript for disabling form submissions if there are invalid fields

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
};

/* -------------------------------------------------------------------------- */
/*                                 Glightbox                                */
/* -------------------------------------------------------------------------- */

var glightboxInit = function glightboxInit() {
  if (window.GLightbox) {
    window.GLightbox({
      selector: '[data-gallery]'
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                           Icon copy to clipboard                           */
/* -------------------------------------------------------------------------- */

var iconCopiedInit = function iconCopiedInit() {
  var iconList = document.getElementById('icon-list');
  var iconCopiedToast = document.getElementById('icon-copied-toast');
  var iconCopiedToastInstance = new window.bootstrap.Toast(iconCopiedToast);
  if (iconList) {
    iconList.addEventListener('click', function (e) {
      var el = e.target;
      if (el.tagName === 'INPUT') {
        el.select();
        el.setSelectionRange(0, 99999);
        document.execCommand('copy');
        iconCopiedToast.querySelector('.toast-body').innerHTML = "<span class=\"fw-black\">Copied:</span> <code>".concat(el.value, "</code>");
        iconCopiedToastInstance.show();
      }
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                                 Data Table                                 */
/* -------------------------------------------------------------------------- */
/* eslint-disable */

var togglePaginationButtonDisable = function togglePaginationButtonDisable(button, disabled) {
  button.disabled = disabled;
  button.classList[disabled ? 'add' : 'remove']('disabled');
};
var listInit = function listInit() {
  if (window.List) {
    var lists = document.querySelectorAll('[data-list]');
    if (lists.length) {
      lists.forEach(function (el) {
        var bulkSelect = el.querySelector('[data-bulk-select]');
        var options = utils.getData(el, 'list');
        if (options.pagination) {
          options = _objectSpread(_objectSpread({}, options), {}, {
            pagination: _objectSpread({
              item: "<li><button class='page' type='button'></button></li>"
            }, options.pagination)
          });
        }
        var paginationButtonNext = el.querySelector('[data-list-pagination="next"]');
        var paginationButtonPrev = el.querySelector('[data-list-pagination="prev"]');
        var viewAll = el.querySelector('[data-list-view="*"]');
        var viewLess = el.querySelector('[data-list-view="less"]');
        var listInfo = el.querySelector('[data-list-info]');
        var listFilter = document.querySelector('[data-list-filter]');
        var list = new window.List(el, options);

        //-------fallback-----------

        list.on('updated', function (item) {
          var fallback = el.querySelector('.fallback') || document.getElementById(options.fallback);
          if (fallback) {
            if (item.matchingItems.length === 0) {
              fallback.classList.remove('d-none');
            } else {
              fallback.classList.add('d-none');
            }
          }
        });

        // ---------------------------------------

        var totalItem = list.items.length;
        var itemsPerPage = list.page;
        var btnDropdownClose = list.listContainer.querySelector('.btn-close');
        var pageQuantity = Math.ceil(totalItem / itemsPerPage);
        var numberOfcurrentItems = list.visibleItems.length;
        var pageCount = 1;
        btnDropdownClose && btnDropdownClose.addEventListener('search.close', function () {
          list.fuzzySearch('');
        });
        var updateListControls = function updateListControls() {
          listInfo && (listInfo.innerHTML = "".concat(list.i, " to ").concat(numberOfcurrentItems, " of ").concat(totalItem));
          paginationButtonPrev && togglePaginationButtonDisable(paginationButtonPrev, pageCount === 1);
          paginationButtonNext && togglePaginationButtonDisable(paginationButtonNext, pageCount === pageQuantity);
          if (pageCount > 1 && pageCount < pageQuantity) {
            togglePaginationButtonDisable(paginationButtonNext, false);
            togglePaginationButtonDisable(paginationButtonPrev, false);
          }
        };

        // List info
        updateListControls();
        if (paginationButtonNext) {
          paginationButtonNext.addEventListener('click', function (e) {
            e.preventDefault();
            pageCount += 1;
            var nextInitialIndex = list.i + itemsPerPage;
            nextInitialIndex <= list.size() && list.show(nextInitialIndex, itemsPerPage);
            numberOfcurrentItems += list.visibleItems.length;
            updateListControls();
          });
        }
        if (paginationButtonPrev) {
          paginationButtonPrev.addEventListener('click', function (e) {
            e.preventDefault();
            pageCount -= 1;
            numberOfcurrentItems -= list.visibleItems.length;
            var prevItem = list.i - itemsPerPage;
            prevItem > 0 && list.show(prevItem, itemsPerPage);
            updateListControls();
          });
        }
        var toggleViewBtn = function toggleViewBtn() {
          viewLess.classList.toggle('d-none');
          viewAll.classList.toggle('d-none');
        };
        if (viewAll) {
          viewAll.addEventListener('click', function () {
            list.show(1, totalItem);
            pageQuantity = 1;
            pageCount = 1;
            numberOfcurrentItems = totalItem;
            updateListControls();
            toggleViewBtn();
          });
        }
        if (viewLess) {
          viewLess.addEventListener('click', function () {
            list.show(1, itemsPerPage);
            pageQuantity = Math.ceil(totalItem / itemsPerPage);
            pageCount = 1;
            numberOfcurrentItems = list.visibleItems.length;
            updateListControls();
            toggleViewBtn();
          });
        }
        // numbering pagination
        if (options.pagination) {
          el.querySelector('.pagination').addEventListener('click', function (e) {
            if (e.target.classList[0] === 'page') {
              pageCount = Number(e.target.innerText);
              updateListControls();
            }
          });
        }
        if (options.filter) {
          var key = options.filter.key;
          listFilter.addEventListener('change', function (e) {
            list.filter(function (item) {
              if (e.target.value === '') {
                return true;
              }
              return item.values()[key].toLowerCase().includes(e.target.value.toLowerCase());
            });
          });
        }

        //bulk-select
        if (bulkSelect) {
          var bulkSelectInstance = window.BulkSelect.getInstance(bulkSelect);
          bulkSelectInstance.attachRowNodes(list.items.map(function (item) {
            return item.elm.querySelector('[data-bulk-select-row]');
          }));
          bulkSelect.addEventListener('change', function () {
            if (list) {
              if (bulkSelect.checked) {
                list.items.forEach(function (item) {
                  item.elm.querySelector('[data-bulk-select-row]').checked = true;
                });
              } else {
                list.items.forEach(function (item) {
                  item.elm.querySelector('[data-bulk-select-row]').checked = false;
                });
              }
            }
          });
        }
      });
    }
  }
};
var lottieInit = function lottieInit() {
  var lotties = document.querySelectorAll('.lottie');
  if (lotties.length) {
    lotties.forEach(function (item) {
      var options = utils.getData(item, 'options');
      window.bodymovin.loadAnimation(_objectSpread({
        container: item,
        path: '../img/animated-icons/warning-light.json',
        renderer: 'svg',
        loop: true,
        autoplay: true,
        name: 'Hello World'
      }, options));
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                         Navbar Darken on scroll                        */
/* -------------------------------------------------------------------------- */
var navbarDarkenOnScroll = function navbarDarkenOnScroll() {
  var Selector = {
    NAVBAR: '[data-navbar-darken-on-scroll]',
    NAVBAR_COLLAPSE: '.navbar-collapse',
    NAVBAR_TOGGLER: '.navbar-toggler'
  };
  var ClassNames = {
    COLLAPSED: 'collapsed'
  };
  var Events = {
    SCROLL: 'scroll',
    SHOW_BS_COLLAPSE: 'show.bs.collapse',
    HIDE_BS_COLLAPSE: 'hide.bs.collapse',
    HIDDEN_BS_COLLAPSE: 'hidden.bs.collapse'
  };
  var DataKey = {
    NAVBAR_DARKEN_ON_SCROLL: 'navbar-darken-on-scroll'
  };
  var navbar = document.querySelector(Selector.NAVBAR);
  function removeNavbarBgClass() {
    navbar.classList.remove('bg-dark');
    navbar.classList.remove('bg-100');
  }
  var toggleThemeClass = function toggleThemeClass(theme) {
    if (theme === 'dark') {
      navbar.classList.remove('navbar-dark');
      navbar.classList.add('navbar-light');
    } else {
      navbar.classList.remove('navbar-light');
      navbar.classList.add('navbar-dark');
    }
  };
  function getBgClassName(name, defaultColorName) {
    var parent = document.documentElement;
    var allColors = _objectSpread(_objectSpread({}, utils.getColors(parent)), utils.getGrays(parent));
    var colorName = Object.keys(allColors).includes(name) ? name : defaultColorName;
    var color = allColors[colorName];
    var bgClassName = "bg-".concat(colorName);
    return {
      color: color,
      bgClassName: bgClassName
    };
  }
  if (navbar) {
    var theme = localStorage.getItem('theme');
    var defaultColorName = theme === 'dark' ? '100' : 'dark';
    var name = utils.getData(navbar, DataKey.NAVBAR_DARKEN_ON_SCROLL);
    toggleThemeClass(theme);
    var themeController = document.body;
    themeController.addEventListener('clickControl', function (_ref) {
      var _ref$detail = _ref.detail,
        control = _ref$detail.control,
        value = _ref$detail.value;
      if (control === 'theme') {
        toggleThemeClass(value);
        defaultColorName = value === 'dark' ? '100' : 'dark';
        if (navbar.classList.contains('bg-dark') || navbar.classList.contains('bg-100')) {
          removeNavbarBgClass();
          navbar.classList.add(getBgClassName(name, defaultColorName).bgClassName);
        }
      }
    });
    var windowHeight = window.innerHeight;
    var html = document.documentElement;
    var navbarCollapse = navbar.querySelector(Selector.NAVBAR_COLLAPSE);
    var colorRgb = utils.hexToRgb(getBgClassName(name, defaultColorName).color);
    var _window$getComputedSt = window.getComputedStyle(navbar),
      backgroundImage = _window$getComputedSt.backgroundImage;
    var transition = 'background-color 0.35s ease';
    navbar.style.backgroundImage = 'none';
    // Change navbar background color on scroll
    window.addEventListener(Events.SCROLL, function () {
      var scrollTop = html.scrollTop;
      var alpha = scrollTop / windowHeight * 2;
      alpha >= 1 && (alpha = 1);
      navbar.style.backgroundColor = "rgba(".concat(colorRgb[0], ", ").concat(colorRgb[1], ", ").concat(colorRgb[2], ", ").concat(alpha, ")");
      navbar.style.backgroundImage = alpha > 0 || utils.hasClass(navbarCollapse, 'show') ? backgroundImage : 'none';
    });

    // Toggle bg class on window resize
    utils.resize(function () {
      var breakPoint = utils.getBreakpoint(navbar);
      if (window.innerWidth > breakPoint) {
        removeNavbarBgClass();
        navbar.style.backgroundImage = html.scrollTop ? backgroundImage : 'none';
        navbar.style.transition = 'none';
      } else if (utils.hasClass(navbar.querySelector(Selector.NAVBAR_TOGGLER), ClassNames.COLLAPSED)) {
        removeNavbarBgClass();
        navbar.style.backgroundImage = backgroundImage;
      }
      if (window.innerWidth <= breakPoint) {
        navbar.style.transition = utils.hasClass(navbarCollapse, 'show') ? transition : 'none';
      }
    });
    navbarCollapse.addEventListener(Events.SHOW_BS_COLLAPSE, function () {
      navbar.classList.add(getBgClassName(name, defaultColorName).bgClassName);
      navbar.style.backgroundImage = backgroundImage;
      navbar.style.transition = transition;
    });
    navbarCollapse.addEventListener(Events.HIDE_BS_COLLAPSE, function () {
      removeNavbarBgClass();
      !html.scrollTop && (navbar.style.backgroundImage = 'none');
    });
    navbarCollapse.addEventListener(Events.HIDDEN_BS_COLLAPSE, function () {
      navbar.style.transition = 'none';
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                                 Scrollbars                                 */
/* -------------------------------------------------------------------------- */
// import utils from './utils';

var scrollInit = function scrollInit() {
  var dropdownElements = Array.from(document.querySelectorAll('[data-hide-on-body-scroll]'));
  if (window.innerWidth < 1200) {
    window.addEventListener('scroll', function () {
      dropdownElements.forEach(function (dropdownElement) {
        var instanceEl = window.bootstrap.Dropdown.getInstance(dropdownElement);
        instanceEl && instanceEl.hide();
      });
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                                 Scrollbars                                 */
/* -------------------------------------------------------------------------- */

var scrollbarInit = function scrollbarInit() {
  Array.prototype.forEach.call(document.querySelectorAll('.scrollbar-overlay'), function (el) {
    return new window.SimpleBar(el, {
      autoHide: true
    });
  });
};

/*-----------------------------------------------
|  Swiper
-----------------------------------------------*/
var swiperInit = function swiperInit() {
  var swipers = document.querySelectorAll('[data-swiper]');
  var navbarVerticalToggle = document.querySelector('.navbar-vertical-toggle');
  swipers.forEach(function (swiper) {
    var options = utils.getData(swiper, 'swiper');
    var thumbsOptions = options.thumb;
    var thumbsInit;
    if (thumbsOptions) {
      var thumbImages = swiper.querySelectorAll('img');
      var slides = '';
      thumbImages.forEach(function (img) {
        slides += "\n          <div class='swiper-slide '>\n            <img class='img-fluid rounded mt-1' src=".concat(img.src, " alt=''/>\n          </div>\n        ");
      });
      var thumbs = document.createElement('div');
      thumbs.setAttribute('class', 'swiper-container thumb');
      thumbs.innerHTML = "<div class='swiper-wrapper'>".concat(slides, "</div>");
      if (thumbsOptions.parent) {
        var parent = document.querySelector(thumbsOptions.parent);
        parent.parentNode.appendChild(thumbs);
      } else {
        swiper.parentNode.appendChild(thumbs);
      }
      thumbsInit = new window.Swiper(thumbs, thumbsOptions);
    }
    var swiperNav = swiper.querySelector('.swiper-nav');
    var newSwiper = new window.Swiper(swiper, _objectSpread(_objectSpread({}, options), {}, {
      navigation: {
        nextEl: swiperNav === null || swiperNav === void 0 ? void 0 : swiperNav.querySelector('.swiper-button-next'),
        prevEl: swiperNav === null || swiperNav === void 0 ? void 0 : swiperNav.querySelector('.swiper-button-prev')
      },
      thumbs: {
        swiper: thumbsInit
      }
    }));
    if (navbarVerticalToggle) {
      navbarVerticalToggle.addEventListener('navbar.vertical.toggle', function () {
        newSwiper.update();
      });
    }
  });
};

// export default themeControl;
// eslint-disable-next-line

/* -------------------------------------------------------------------------- */
/*                                Theme Control                               */
/* -------------------------------------------------------------------------- */
/* eslint-disable no-param-reassign */
/* eslint-disable */

var initialDomSetup = function initialDomSetup(element) {
  if (!element) return;
  var dataUrlDom = element.querySelector('[data-theme-control = "navbarPosition"]');
  var hasDataUrl = dataUrlDom ? getData(dataUrlDom, 'page-url') : null;
  element.querySelectorAll('[data-theme-control]').forEach(function (el) {
    var inputDataAttributeValue = getData(el, 'theme-control');
    var localStorageValue = getItemFromStore(inputDataAttributeValue);
    if (inputDataAttributeValue === 'navbarStyle' && !hasDataUrl && (getItemFromStore('navbarPosition') === 'top' || getItemFromStore('navbarPosition') === 'double-top')) {
      el.setAttribute('disabled', true);
    }
    if (el.type === 'select-one' && inputDataAttributeValue === 'navbarPosition') {
      el.value = localStorageValue;
    }
    if (el.type === 'checkbox') {
      if (inputDataAttributeValue === 'theme') {
        if (localStorageValue === 'auto' ? getSystemTheme() === 'dark' : localStorageValue === 'dark') {
          el.setAttribute('checked', true);
        }
      } else {
        localStorageValue && el.setAttribute('checked', true);
      }
    } else if (el.type === 'radio') {
      var isChecked = localStorageValue === el.value;
      isChecked && el.setAttribute('checked', true);
    } else {
      var isActive = localStorageValue === el.value;
      isActive && el.classList.add('active');
    }
  });
};
var changeTheme = function changeTheme(element) {
  element.querySelectorAll('[data-theme-control = "theme"]').forEach(function (el) {
    var inputDataAttributeValue = getData(el, 'theme-control');
    var localStorageValue = getItemFromStore(inputDataAttributeValue);
    if (el.type === 'checkbox') {
      if (localStorageValue === 'auto') {
        getSystemTheme() === 'dark' ? el.checked = true : el.checked = false;
      } else {
        localStorageValue === 'dark' ? el.checked = true : el.checked = false;
      }
    } else if (el.type === 'radio') {
      localStorageValue === el.value ? el.checked = true : el.checked = false;
    } else {
      localStorageValue === el.value ? el.classList.add('active') : el.classList.remove('active');
    }
  });
};
var localStorageValue = getItemFromStore('theme');
var handleThemeDropdownIcon = function handleThemeDropdownIcon(value) {
  document.querySelectorAll('[data-theme-dropdown-toggle-icon]').forEach(function (el) {
    var theme = getData(el, 'theme-dropdown-toggle-icon');
    if (value === theme) {
      el.classList.remove('d-none');
    } else {
      el.classList.add('d-none');
    }
  });
};
handleThemeDropdownIcon(localStorageValue);
var themeControl = function themeControl() {
  var themeController = new DomNode(document.body);
  var navbarVertical = document.querySelector('.navbar-vertical');
  initialDomSetup(themeController.node);
  themeController.on('click', function (e) {
    var target = new DomNode(e.target);
    if (target.data('theme-control')) {
      var control = target.data('theme-control');
      var value = e.target[e.target.type === 'checkbox' ? 'checked' : 'value'];
      if (control === 'theme') {
        typeof value === 'boolean' && (value = value ? 'dark' : 'light');
      }
      if (control !== 'navbarPosition') {
        CONFIG.hasOwnProperty(control) && setItemToStore(control, value);
        switch (control) {
          case 'theme':
            {
              document.documentElement.setAttribute('data-bs-theme', value === 'auto' ? getSystemTheme() : value);
              var clickControl = new CustomEvent('clickControl', {
                detail: {
                  control: control,
                  value: value
                }
              });
              e.currentTarget.dispatchEvent(clickControl);
              changeTheme(themeController.node);
              break;
            }
          case 'navbarStyle':
            {
              navbarVertical.classList.remove('navbar-card');
              navbarVertical.classList.remove('navbar-inverted');
              navbarVertical.classList.remove('navbar-vibrant');
              if (value !== 'transparent') {
                navbarVertical.classList.add("navbar-".concat(value));
              }
              break;
            }
          case 'reset':
            {
              Object.keys(CONFIG).forEach(function (key) {
                localStorage.setItem(key, CONFIG[key]);
              });
              window.location.reload();
              break;
            }
          default:
            window.location.reload();
        }
      }
    }
  });

  // control navbar position
  themeController.on('change', function (e) {
    var target = new DomNode(e.target);
    if (target.data('theme-control') === 'navbarPosition') {
      CONFIG.hasOwnProperty('navbarPosition') && setItemToStore('navbarPosition', e.target.value);
      var pageUrl = getData(target.node.selectedOptions[0], 'page-url');
      !!pageUrl ? window.location.replace(pageUrl) : window.location.replace(window.location.href.split('#')[0]);
    }
  });
  themeController.on('clickControl', function (_ref2) {
    var _ref2$detail = _ref2.detail,
      control = _ref2$detail.control,
      value = _ref2$detail.value;
    if (control === 'theme') {
      handleThemeDropdownIcon(value);
    }
  });
};

/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
docReady(detectorInit);
docReady(glightboxInit);
docReady(formValidationInit);
docReady(navbarDarkenOnScroll);
docReady(swiperInit);
docReady(lottieInit);
docReady(themeControl);
docReady(scrollbarInit);
docReady(iconCopiedInit);
docReady(scrollInit);
docReady(listInit);
//# sourceMappingURL=theme.js.map

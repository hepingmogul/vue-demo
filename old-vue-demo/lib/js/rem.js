/*
 * 自动根据宽度计算根元素的font-size的数值
 */
(function (global, factory) {
  "use strict";
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory(global, true);
  } else {
    factory(global);
  }
}(typeof window !== "undefined" ? window : this, function (that) {
  var head = that.document.getElementsByTagName('head')[0];

  var init = function () {
    var el = dv();
    // var defaultFontSize = parseFloat(that.getComputedStyle(el, null).getPropertyValue('width'));

    document.documentElement.style.fontSize = rem();
    // document.body.style.fontSize = defaultFontSize ? defaultFontSize + 'px' : '16px';

    el.remove();
    // styl(rem());
  }

  var rem = function () {
    var val = wv() / 20 + "px";
    return val ? val : '100%';
  }

  var wv = function () {
    var w = that.innerWidth || document.body.clientWidth;
    return w >= 500 ? 500 : w;
  }

  var dv = function () {
    var el = that.document.createElement('div');
    el.style.width = '1rem';
    el.style.display = "none";
    head.appendChild(el);
    return el;
  }

  var styl = function (rem) {
    var el = document.createElement('style');
    el.setAttribute('id', 'stylFontSize');
    el.innerHTML = "@media all and (min-width: " + wv() + "px){html{font-size:" + rem + ";}}";
    if (document.getElementById('stylFontSize')) {
      document.getElementById('stylFontSize').remove();
    }
    head.appendChild(el);
  }

  var start = function () {
    if (navigator.userAgent.indexOf('MSIE') < 0) {
      init();
    } else {
      document.documentElement.style.fontSize = '100%';
    }
  }

  that.addEventListener("resize", function () {
    start();
  });

  start();
}));
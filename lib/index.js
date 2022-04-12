(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.mxUtils = {}));
})(this, (function (exports) { 'use strict';

  function objToStr(val) {
      var ObjToStr = Object.prototype.toString;
      return ObjToStr.call(val);
  }
  function isArray(val) {
      return objToStr(val) === '[object Array]';
  }

  var index = {};

  exports["default"] = index;
  exports.isArray = isArray;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map

function objToStr(val) {
    var ObjToStr = Object.prototype.toString;
    return ObjToStr.call(val);
}
function isArray(val) {
    return objToStr(val) === '[object Array]';
}

var index = {};

export { index as default, isArray };
//# sourceMappingURL=index.esm.js.map

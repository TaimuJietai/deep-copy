var deepCopyfun = function(__data) {
  var __fun;
  eval('__fun = ' + __data.toString());
  return __fun;
}
var __deepCopy = function(__data) {
  var __type = typeof __data;
  if (__type === 'function') {
    return deepCopyfun(__data);
  } else if (__type === 'object') {
    if (Object.prototype.toString.call(__data) === '[object Array]') {
      var __array = [];
      for (var i = 0, len = __data.length || 0; i < len; i++) {
        __array.push(
          ['symbol', 'object', 'function'].indexOf(__data[i]) !== -1 ?
          __deepCopy(__data[i]) : __data[i]
        );
      }
      return __array;
    } else {
      var __obj = {};
      Object.keys(__data).forEach(function(e) {
        __obj[['symbol', 'object', 'function'].indexOf(typeof e) !== -1 ? __deepCopy(e) : e] =
          ['symbol', 'object', 'function'].indexOf(typeof __data[e]) !== -1 ? __deepCopy(__data[e]) : __data[e]
      });
      return __obj;
    }
  } else if (__type === 'symbol') {
    try {
      return Symbol(__data.description);
    } catch (err) {
      return __data;
    }
  } else {
    return __data;
  }
};
modules.export = __deepCopy;
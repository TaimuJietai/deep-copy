# deep-copy

# Example
# obj
var a = {
  a: Symbol('111'),
  b: 1,
  c: '111',
  d: 0.11,
  e: () => {
    console.log(1);
  },
  f: [1,2,3],
  g: ['1', '2', '3'],
  h: {
	a: Symbol('111'),
    b: 1,
    c: '111',
    d: 0.11,
    e: () => {
      console.log(2);
    },
    f: [1,2,3],
    g: ['1', '2', '3'],
  }
}

# checkAll
var checkAll = function(obj, objb) {
  if (Array.isArray(obj)) {
    obj.forEach(function(e, j) {
      if (typeof e === 'object') {
        checkAll(obj, objb)
      } else {
      if (e !== objb[j]) {
          console.log('different');
        } else {
          console.log(`\n\rArray ${e} === ${obj[j]}`);
          console.log('Array same');
        }
      }
    });
  } else if (typeof obj === 'object') {
      Object.keys(obj).forEach(function(e) {
        if (typeof obj[e] !== 'object') {
          if (obj[e] !== objb[e]) {
            console.log('different');
          } else {
            console.log(`\n\robject ${obj[e]} === ${objb[e]}`);
            console.log('object same');
          }
        } else {
          checkAll(obj[e], objb[e])
        }
      });
  } else {
	if (obj !== objb) {
        console.log('different');
      } else {
        console.log(`\n\robject ${obj} === ${objb}`);
        console.log('same');
      }
  }
}
# ?equals
var b = deepCopy(a);
checkAll(a, b);
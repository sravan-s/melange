// Generated by Melange
'use strict';


let a = {
  x: 3,
  y: [1]
};

let b = {
  x: 3,
  y: [1],
  z: 3,
  u: (function (x, y) {
      return x + y | 0;
    })
};

function f(obj) {
  return obj.x + obj.y.length | 0;
}

function h(obj) {
  return obj.u(1, 2);
}

let u = f(a);

let v = f(b);

let vv = h(b);

exports.a = a;
exports.b = b;
exports.f = f;
exports.h = h;
exports.u = u;
exports.v = v;
exports.vv = vv;
/* u Not a pure module */

// Generated by Melange
'use strict';

let Curry = require("melange.js/curry.js");

let v = {
  contents: 0
};

function reset(param) {
  v.contents = 0;
}

function incr(param) {
  v.contents = v.contents + 1 | 0;
}

let vv = {
  contents: 0
};

function reset2(param) {
  vv.contents = 0;
}

function incr2(param) {
  v.contents = v.contents + 1 | 0;
}

function f(a, b, d, e) {
  let h = Curry._1(a, b);
  let u = Curry._1(d, h);
  let v = Curry._1(e, h);
  return u + v | 0;
}

function kf(cb, v) {
  Curry._1(cb, v);
  return v + v | 0;
}

function ikf(v) {
  return kf((function (prim) {
                
              }), v);
}

exports.v = v;
exports.reset = reset;
exports.incr = incr;
exports.reset2 = reset2;
exports.incr2 = incr2;
exports.f = f;
exports.kf = kf;
exports.ikf = ikf;
/* No side effect */

// Generated by Melange
'use strict';

let Caml_array = require("melange.js/caml_array.js");
let Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
let Curry = require("melange.js/curry.js");
let Stdlib__Array = require("melange/array.js");

let v = {
  contents: 0
};

let arr = Caml_array.make(10, (function (param) {
        
      }));

function f(param) {
  let n = 0;
  while(n < 10) {
    let j = n;
    Caml_array.set(arr, j, (function (param) {
            v.contents = v.contents + j | 0;
          }));
    n = n + 1 | 0;
  };
}

f(undefined);

Stdlib__Array.iter((function (x) {
        Curry._1(x, undefined);
      }), arr);

console.log(String(v.contents));

if (v.contents !== 45) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/test_while_closure.ml",
              63,
              4
            ]
          });
}

let count = 10;

exports.v = v;
exports.count = count;
exports.arr = arr;
exports.f = f;
/*  Not a pure module */

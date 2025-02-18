// Generated by Melange
'use strict';

let Caml_array = require("melange.js/caml_array.js");
let Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");

function caml_array_sub(x, offset, len) {
  let result = new Array(len);
  for(let j = 0; j < len; ++j){
    Caml_array.set(result, j, Caml_array.get(x, offset + j | 0));
  }
  return result;
}

function caml_array_set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
              MEL_EXN_ID: "Invalid_argument",
              _1: "index out of bounds"
            });
  }
  Caml_array.set(xs, index, newval);
}

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
              MEL_EXN_ID: "Invalid_argument",
              _1: "index out of bounds"
            });
  }
  return Caml_array.get(xs, index);
}

function caml_make_vect(len, init) {
  let b = new Array(len);
  for(let i = 0; i < len; ++i){
    Caml_array.set(b, i, init);
  }
  return b;
}

exports.caml_array_sub = caml_array_sub;
exports.caml_array_set = caml_array_set;
exports.caml_array_get = caml_array_get;
exports.caml_make_vect = caml_make_vect;
/* No side effect */

// Generated by Melange
'use strict';

let Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
let Curry = require("melange.js/curry.js");
let Stdlib = require("melange/stdlib.js");

function ff(g, x) {
  try {
    Curry._1(g, x);
  }
  catch (raw_exn){
    let exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID !== Stdlib.Not_found) {
      throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
    }
    
  }
  try {
    Curry._1(g, x);
  }
  catch (raw_exn$1){
    let exn$1 = Caml_js_exceptions.internalToOCamlException(raw_exn$1);
    if (exn$1.MEL_EXN_ID !== Stdlib.Out_of_memory) {
      throw new Caml_js_exceptions.MelangeError(exn$1.MEL_EXN_ID, exn$1);
    }
    
  }
  try {
    Curry._1(g, x);
  }
  catch (raw_exn$2){
    let exn$2 = Caml_js_exceptions.internalToOCamlException(raw_exn$2);
    if (exn$2.MEL_EXN_ID !== Stdlib.Sys_error) {
      throw new Caml_js_exceptions.MelangeError(exn$2.MEL_EXN_ID, exn$2);
    }
    
  }
  try {
    Curry._1(g, x);
  }
  catch (raw_exn$3){
    let exn$3 = Caml_js_exceptions.internalToOCamlException(raw_exn$3);
    if (exn$3.MEL_EXN_ID !== Stdlib.Invalid_argument) {
      throw new Caml_js_exceptions.MelangeError(exn$3.MEL_EXN_ID, exn$3);
    }
    
  }
  try {
    Curry._1(g, x);
  }
  catch (raw_exn$4){
    let exn$4 = Caml_js_exceptions.internalToOCamlException(raw_exn$4);
    if (exn$4.MEL_EXN_ID !== Stdlib.End_of_file) {
      throw new Caml_js_exceptions.MelangeError(exn$4.MEL_EXN_ID, exn$4);
    }
    
  }
  try {
    Curry._1(g, x);
  }
  catch (raw_exn$5){
    let exn$5 = Caml_js_exceptions.internalToOCamlException(raw_exn$5);
    if (exn$5.MEL_EXN_ID !== Stdlib.Match_failure) {
      throw new Caml_js_exceptions.MelangeError(exn$5.MEL_EXN_ID, exn$5);
    }
    
  }
  try {
    Curry._1(g, x);
  }
  catch (raw_exn$6){
    let exn$6 = Caml_js_exceptions.internalToOCamlException(raw_exn$6);
    if (exn$6.MEL_EXN_ID !== Stdlib.Stack_overflow) {
      throw new Caml_js_exceptions.MelangeError(exn$6.MEL_EXN_ID, exn$6);
    }
    
  }
  try {
    Curry._1(g, x);
  }
  catch (raw_exn$7){
    let exn$7 = Caml_js_exceptions.internalToOCamlException(raw_exn$7);
    if (exn$7.MEL_EXN_ID !== Stdlib.Sys_blocked_io) {
      throw new Caml_js_exceptions.MelangeError(exn$7.MEL_EXN_ID, exn$7);
    }
    
  }
  try {
    Curry._1(g, x);
  }
  catch (raw_exn$8){
    let exn$8 = Caml_js_exceptions.internalToOCamlException(raw_exn$8);
    if (exn$8.MEL_EXN_ID !== Stdlib.Assert_failure) {
      throw new Caml_js_exceptions.MelangeError(exn$8.MEL_EXN_ID, exn$8);
    }
    
  }
  try {
    return Curry._1(g, x);
  }
  catch (raw_exn$9){
    let exn$9 = Caml_js_exceptions.internalToOCamlException(raw_exn$9);
    if (exn$9.MEL_EXN_ID === Stdlib.Undefined_recursive_module) {
      return ;
    }
    throw new Caml_js_exceptions.MelangeError(exn$9.MEL_EXN_ID, exn$9);
  }
}

function u(param) {
  throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
            MEL_EXN_ID: Stdlib.Not_found
          });
}

function f(x) {
  if (typeof x === "number") {
    return 2;
  }
  if (x.TAG === /* D */0) {
    return 1;
  }
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/test_trywith.ml",
              51,
              9
            ]
          });
}

let u1 = "bad character decimal encoding \\";

let v = "bad character decimal encoding \\%c%c%c";

exports.ff = ff;
exports.u = u;
exports.u1 = u1;
exports.v = v;
exports.f = f;
/* No side effect */

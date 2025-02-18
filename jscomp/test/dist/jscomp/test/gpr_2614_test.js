// Generated by Melange
'use strict';

let Caml_option = require("melange.js/caml_option.js");

let v = {
  "Content-Type": 3,
  l: 2,
  open: 2
};

let b = v.l;

let c = v.open;

function ff(param) {
  v["Content-Type"] = 3;
  v.l = 2;
}

let partial_arg = "x";

function h0(param) {
  let tmp = {
    hi: 2
  };
  if (partial_arg !== undefined) {
    tmp["lo-x"] = Caml_option.valFromOption(partial_arg);
  }
  return tmp;
}

let h1 = {
  "lo-x": "x",
  hi: 2
};

let h2 = {
  hi: 2
};

function hh(x) {
  x["lo-x"] = "3";
  return Caml_option.undefined_to_opt(x["lo-x"]);
}

function hh2(x) {
  let match = x["lo-x"];
  if (match !== undefined) {
    return 1;
  } else {
    return 0;
  }
}

let u = {
  "xx-yy": 3
};

let x = u["xx-yy"];

let v$1 = x !== undefined ? x : 0;

exports.b = b;
exports.c = c;
exports.ff = ff;
exports.h0 = h0;
exports.h1 = h1;
exports.h2 = h2;
exports.hh = hh;
exports.hh2 = hh2;
exports.u = u;
exports.v = v$1;
/*  Not a pure module */

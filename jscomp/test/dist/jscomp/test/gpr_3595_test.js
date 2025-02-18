// Generated by Melange
'use strict';

let Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
let Mt = require("./mt.js");

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

let match = [1];

if (match.length !== 1) {
  throw new Caml_js_exceptions.MelangeError("Match_failure", {
            MEL_EXN_ID: "Match_failure",
            _1: [
              "gpr_3595_test.ml",
              9,
              4
            ]
          });
}

let a = match[0];

let x = 1;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.a = a;
exports.x = x;
/*  Not a pure module */

// Generated by Melange
'use strict';

let Mt = require("./mt.js");

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
          return {
                  TAG: /* Eq */0,
                  _0: x,
                  _1: y
                };
        })
    ],
    tl: suites.contents
  };
}

eq("File \"jscomp/test/ffi_array_test.ml\", line 12, characters 5-12", [
        1,
        2,
        3,
        4
      ].map(function (x) {
          return x + 1 | 0;
        }), [
      2,
      3,
      4,
      5
    ]);

Mt.from_pair_suites("Ffi_array_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
/*  Not a pure module */

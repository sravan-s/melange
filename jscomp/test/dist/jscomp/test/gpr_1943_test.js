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

function f(x) {
  return [
          x["003"],
          x[50],
          x["50x"],
          x.__50,
          x.__50x,
          x["50x'"],
          x["x'"]
        ];
}

let v = f({
      "003": 0,
      "50": 1,
      "50x": 2,
      __50: 3,
      __50x: 4,
      "50x'": 5,
      "x'": 6
    });

eq("File \"jscomp/test/gpr_1943_test.ml\", line 30, characters 6-13", [
      0,
      1,
      2,
      3,
      4,
      5,
      6
    ], v);

Mt.from_pair_suites("Gpr_1943_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.f = f;
exports.v = v;
/* v Not a pure module */

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

let f = ((a) => typeof a
);

let a = f(3);

let b = f("3");

eq("File \"jscomp/test/polymorphic_raw_test.ml\", line 22, characters 6-13", a, "number");

eq("File \"jscomp/test/polymorphic_raw_test.ml\", line 23, characters 6-13", b, "string");

Mt.from_pair_suites("jscomp/test/polymorphic_raw_test.ml", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.f = f;
exports.a = a;
exports.b = b;
/* a Not a pure module */

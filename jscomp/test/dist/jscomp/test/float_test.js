// Generated by Melange
'use strict';

let Caml = require("melange.js/caml.js");
let Caml_float = require("melange.js/caml_float.js");
let Caml_int64 = require("melange.js/caml_int64.js");
let Caml_obj = require("melange.js/caml_obj.js");
let Curry = require("melange.js/curry.js");
let Mt = require("./mt.js");
let Mt_global = require("./mt_global.js");
let Stdlib = require("melange/stdlib.js");
let Stdlib__Array = require("melange/array.js");
let Stdlib__Float = require("melange/float.js");
let Stdlib__Printf = require("melange/printf.js");

let test_id = {
  contents: 0
};

let suites = {
  contents: /* [] */0
};

function eq(loc) {
  return function (param, param$1) {
    return Mt_global.collect_eq(test_id, suites, loc, param, param$1);
  };
}

function approx(loc) {
  return function (param, param$1) {
    return Mt_global.collect_approx(test_id, suites, loc, param, param$1);
  };
}

let epsilon_float = Caml_int64.float_of_bits([
      1018167296,
      0
    ]);

let match = Caml_float.caml_frexp_float(12.0);

let match$1 = Caml_float.caml_frexp_float(0);

let match$2 = Caml_float.caml_frexp_float(-12.0);

let results = Stdlib__Array.append([
      [
        Math.log10(2),
        0.301029995663981198
      ],
      [
        Caml_float.caml_ldexp_float(1, 6),
        64
      ],
      [
        Caml_float.caml_ldexp_float(1, 5),
        32
      ],
      [
        Caml_float.caml_ldexp_float(1.e-5, 1024),
        1.79769313486231605e+303
      ],
      [
        Caml_float.caml_ldexp_float(1, -1024),
        5.56268464626800346e-309
      ],
      [
        Caml_float.caml_hypot_float(3, 4),
        5
      ],
      [
        Caml_float.caml_hypot_float(4, 3),
        5
      ],
      [
        Caml_float.caml_hypot_float(5, 12),
        13
      ],
      [
        Caml_float.caml_hypot_float(12, 5),
        13
      ],
      [
        Caml_float.caml_copysign_float(22.3, -1),
        -22.3
      ],
      [
        Caml_float.caml_copysign_float(22.3, 1),
        22.3
      ],
      [
        Caml_float.caml_expm1_float(1e-15),
        1.00000000000000067e-15
      ],
      [
        Math.log1p(1e-10),
        9.9999999995000007e-11
      ]
    ], [
      [
        match$1[0],
        0
      ],
      [
        match$1[1],
        0
      ],
      [
        match[0],
        0.75
      ],
      [
        match[1],
        4
      ],
      [
        match$2[0],
        -0.75
      ],
      [
        match$2[1],
        4
      ]
    ]);

function from_pairs(ps) {
  return Stdlib__Array.to_list(Stdlib__Array.mapi((function (i, param) {
                    let b = param[1];
                    let a = param[0];
                    return [
                            Curry._1(Stdlib__Printf.sprintf(/* Format */{
                                      _0: {
                                        TAG: /* String_literal */11,
                                        _0: "pair ",
                                        _1: {
                                          TAG: /* Int */4,
                                          _0: /* Int_d */0,
                                          _1: /* No_padding */0,
                                          _2: /* No_precision */0,
                                          _3: /* End_of_format */0
                                        }
                                      },
                                      _1: "pair %d"
                                    }), i),
                            (function (param) {
                                return {
                                        TAG: /* Approx */5,
                                        _0: a,
                                        _1: b
                                      };
                              })
                          ];
                  }), ps));
}

let float_compare = Caml.caml_float_compare;

let generic_compare = Caml_obj.caml_compare;

function float_equal(x, y) {
  return x === y;
}

let generic_equal = Caml_obj.caml_equal;

function float_notequal(x, y) {
  return x !== y;
}

let generic_notequal = Caml_obj.caml_notequal;

function float_lessthan(x, y) {
  return x < y;
}

let generic_lessthan = Caml_obj.caml_lessthan;

function float_greaterthan(x, y) {
  return x > y;
}

let generic_greaterthan = Caml_obj.caml_greaterthan;

function float_lessequal(x, y) {
  return x <= y;
}

let generic_lessequal = Caml_obj.caml_lessequal;

function float_greaterequal(x, y) {
  return x >= y;
}

let generic_greaterequal = Caml_obj.caml_greaterequal;

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 58, characters 5-12", Stdlib.classify_float(3), /* FP_normal */0);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 59, characters 5-12", Caml_float.caml_modf_float(-3.125), [
      -0.125,
      -3
    ]);

let match$3 = Caml_float.caml_modf_float(Number.NaN);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 60, characters 5-12", [
      Number.isNaN(match$3[0]),
      Number.isNaN(match$3[1])
    ], [
      true,
      true
    ]);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 63, characters 5-12", Stdlib__Array.map((function (x) {
            if (x > 0) {
              return 1;
            } else if (x < 0) {
              return -1;
            } else {
              return 0;
            }
          }), Stdlib__Array.map((function (param) {
                return Caml.caml_float_compare(param[0], param[1]);
              }), [
              [
                1,
                3
              ],
              [
                2,
                1
              ],
              [
                3,
                2
              ]
            ])), [
      -1,
      1,
      1
    ]);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 67, characters 5-12", Caml_float.caml_copysign_float(-3, 0), 3);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 68, characters 5-12", Caml_float.caml_copysign_float(3, 0), 3);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 69, characters 5-12", Math.log10(10), 1);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 70, characters 5-12", Caml_float.caml_expm1_float(0), 0);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 71, characters 5-12", Number("3.0"), 3.0);

Mt_global.collect_approx(test_id, suites, "File \"jscomp/test/float_test.ml\", line 72, characters 9-16", Caml_float.caml_expm1_float(2), 6.38905609893065);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 73, characters 5-12", Caml.caml_float_compare(NaN, NaN), 0);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 74, characters 5-12", Caml_obj.caml_compare(NaN, NaN), 0);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 75, characters 5-12", Caml.caml_float_compare(NaN, Stdlib.neg_infinity), -1);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 76, characters 5-12", Caml_obj.caml_compare(NaN, Stdlib.neg_infinity), -1);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 77, characters 5-12", Caml.caml_float_compare(Stdlib.neg_infinity, NaN), 1);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 78, characters 5-12", Caml_obj.caml_compare(Stdlib.neg_infinity, NaN), 1);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 79, characters 5-12", NaN === NaN, false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 80, characters 5-12", Caml_obj.caml_equal(NaN, NaN), false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 81, characters 5-12", 4.2 === NaN, false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 82, characters 5-12", Caml_obj.caml_equal(4.2, NaN), false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 83, characters 5-12", NaN === 4.2, false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 84, characters 5-12", Caml_obj.caml_equal(NaN, 4.2), false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 85, characters 5-12", NaN !== NaN, true);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 86, characters 5-12", Caml_obj.caml_notequal(NaN, NaN), true);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 87, characters 5-12", 4.2 !== NaN, true);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 88, characters 5-12", Caml_obj.caml_notequal(4.2, NaN), true);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 89, characters 5-12", NaN !== 4.2, true);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 90, characters 5-12", Caml_obj.caml_notequal(NaN, 4.2), true);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 91, characters 5-12", NaN < NaN, false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 92, characters 5-12", Caml_obj.caml_lessthan(NaN, NaN), false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 93, characters 5-12", 4.2 < NaN, false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 94, characters 5-12", Caml_obj.caml_lessthan(4.2, NaN), false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 95, characters 5-12", NaN < 4.2, false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 96, characters 5-12", Caml_obj.caml_lessthan(NaN, 4.2), false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 97, characters 5-12", NaN > NaN, false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 98, characters 5-12", Caml_obj.caml_greaterthan(NaN, NaN), false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 99, characters 5-12", 4.2 > NaN, false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 100, characters 5-12", Caml_obj.caml_greaterthan(4.2, NaN), false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 101, characters 5-12", NaN > 4.2, false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 102, characters 5-12", Caml_obj.caml_greaterthan(NaN, 4.2), false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 103, characters 5-12", NaN <= NaN, false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 104, characters 5-12", Caml_obj.caml_lessequal(NaN, NaN), false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 105, characters 5-12", 4.2 <= NaN, false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 106, characters 5-12", Caml_obj.caml_lessequal(4.2, NaN), false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 107, characters 5-12", NaN <= 4.2, false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 108, characters 5-12", Caml_obj.caml_lessequal(NaN, 4.2), false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 109, characters 5-12", NaN >= NaN, false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 110, characters 5-12", Caml_obj.caml_greaterequal(NaN, NaN), false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 111, characters 5-12", 4.2 >= NaN, false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 112, characters 5-12", Caml_obj.caml_greaterequal(4.2, NaN), false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 113, characters 5-12", NaN >= 4.2, false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 114, characters 5-12", Caml_obj.caml_greaterequal(NaN, 4.2), false);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 115, characters 5-12", true || 1 >= 0 && -1 < 0 ? -1 : 1, -1);

Mt_global.collect_eq(test_id, suites, "File \"jscomp/test/float_test.ml\", line 116, characters 5-12", false || -1 >= 0 && 1 < 0 ? 1 : -1, -1);

let match$4 = Caml_float.caml_modf_float(32.3);

let b = match$4[1];

let a = match$4[0];

Mt.from_pair_suites("Float_test", Stdlib.$at({
          hd: [
            "mod_float",
            (function (param) {
                return {
                        TAG: /* Approx */5,
                        _0: 3.2 % 0.5,
                        _1: 0.200000000000000178
                      };
              })
          ],
          tl: {
            hd: [
              "modf_float1",
              (function (param) {
                  return {
                          TAG: /* Approx */5,
                          _0: a,
                          _1: 0.299999999999997158
                        };
                })
            ],
            tl: {
              hd: [
                "modf_float2",
                (function (param) {
                    return {
                            TAG: /* Approx */5,
                            _0: b,
                            _1: 32
                          };
                  })
              ],
              tl: {
                hd: [
                  "int_of_float",
                  (function (param) {
                      return {
                              TAG: /* Eq */0,
                              _0: 3,
                              _1: 3
                            };
                    })
                ],
                tl: /* [] */0
              }
            }
          }
        }, Stdlib.$at(from_pairs(results), suites.contents)));

exports.test_id = test_id;
exports.suites = suites;
exports.eq = eq;
exports.approx = approx;
exports.epsilon_float = epsilon_float;
exports.results = results;
exports.from_pairs = from_pairs;
exports.float_compare = float_compare;
exports.generic_compare = generic_compare;
exports.float_equal = float_equal;
exports.generic_equal = generic_equal;
exports.float_notequal = float_notequal;
exports.generic_notequal = generic_notequal;
exports.float_lessthan = float_lessthan;
exports.generic_lessthan = generic_lessthan;
exports.float_greaterthan = float_greaterthan;
exports.generic_greaterthan = generic_greaterthan;
exports.float_lessequal = float_lessequal;
exports.generic_lessequal = generic_lessequal;
exports.float_greaterequal = float_greaterequal;
exports.generic_greaterequal = generic_greaterequal;
/* results Not a pure module */

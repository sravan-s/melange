// Generated by Melange
'use strict';

let Caml_oo_curry = require("melange.js/caml_oo_curry.js");
let CamlinternalOO = require("melange/camlinternalOO.js");
let Curry = require("melange.js/curry.js");
let Mt = require("./mt.js");

let shared = [
  "bump",
  "get_x"
];

let shared$1 = [
  "move",
  "get_x",
  "get_offset"
];

let shared$2 = ["x"];

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

function restricted_point_init($$class) {
  let ids = CamlinternalOO.new_methods_variables($$class, [
        "move",
        "get_x",
        "bump"
      ], shared$2);
  let move = ids[0];
  let get_x = ids[1];
  let bump = ids[2];
  let x = ids[3];
  CamlinternalOO.set_methods($$class, [
        get_x,
        (function (self$1) {
            return self$1[x];
          }),
        move,
        (function (self$1, d) {
            self$1[x] = self$1[x] + d | 0;
          }),
        bump,
        (function (self$1) {
            return Curry._2(self$1[0][move], self$1, 1);
          })
      ]);
  return function (env, self, x_init) {
    let self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[x] = x_init;
    return self$1;
  };
}

let restricted_point = CamlinternalOO.make_class(shared, restricted_point_init);

function restricted_point$p_init($$class) {
  let inh = CamlinternalOO.inherits($$class, 0, 0, shared, restricted_point, true);
  let obj_init = inh[0];
  return function (env, self, x) {
    return Curry._2(obj_init, self, x);
  };
}

let restricted_point$p = CamlinternalOO.make_class(shared, restricted_point$p_init);

function restricted_point2$p_init($$class) {
  let inh = CamlinternalOO.inherits($$class, 0, 0, shared, restricted_point, true);
  let obj_init = inh[0];
  return function (env, self, x) {
    return Curry._2(obj_init, self, x);
  };
}

let restricted_point2$p = CamlinternalOO.make_class(shared, restricted_point2$p_init);

let Point = {
  restricted_point$p: restricted_point
};

function abstract_point_1($$class) {
  let x_init = CamlinternalOO.new_variable($$class, "");
  let ids = CamlinternalOO.get_method_labels($$class, shared$1);
  let get_x = ids[1];
  let get_offset = ids[2];
  CamlinternalOO.set_method($$class, get_offset, (function (self$5) {
          return Curry._1(self$5[0][get_x], self$5) - self$5[x_init] | 0;
        }));
  return function (env, self, x_init$1) {
    let self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[x_init] = x_init$1;
    return self$1;
  };
}

let abstract_point = [
  undefined,
  abstract_point_1,
  undefined,
  undefined
];

function point_init($$class) {
  let ids = CamlinternalOO.new_methods_variables($$class, shared$1, shared$2);
  let move = ids[0];
  let get_x = ids[1];
  let x = ids[3];
  let inh = CamlinternalOO.inherits($$class, 0, [
        "move",
        "get_x"
      ], ["get_offset"], abstract_point, true);
  let obj_init = inh[0];
  CamlinternalOO.set_methods($$class, [
        get_x,
        (function (self$6) {
            return self$6[x];
          }),
        move,
        (function (self$6, d) {
            self$6[x] = self$6[x] + d | 0;
          })
      ]);
  return function (env, self, x_init) {
    let self$1 = CamlinternalOO.create_object_opt(self, $$class);
    Curry._2(obj_init, self$1, x_init);
    self$1[x] = x_init;
    return CamlinternalOO.run_initializers_opt(self, self$1, $$class);
  };
}

let point = CamlinternalOO.make_class([
      "move",
      "get_offset",
      "get_x"
    ], point_init);

function colored_point_init($$class) {
  let ids = CamlinternalOO.new_methods_variables($$class, [
        "move",
        "get_x",
        "get_offset",
        "color"
      ], ["c"]);
  let color = ids[3];
  let c = ids[4];
  let inh = CamlinternalOO.inherits($$class, shared$2, 0, [
        "get_offset",
        "get_x",
        "move"
      ], point, true);
  let obj_init = inh[0];
  CamlinternalOO.set_method($$class, color, (function (self$7) {
          return self$7[c];
        }));
  return function (env, self, x, c$1) {
    let self$1 = CamlinternalOO.create_object_opt(self, $$class);
    Curry._2(obj_init, self$1, x);
    self$1[c] = c$1;
    return CamlinternalOO.run_initializers_opt(self, self$1, $$class);
  };
}

let colored_point = CamlinternalOO.make_class([
      "move",
      "color",
      "get_offset",
      "get_x"
    ], colored_point_init);

let p$p = Curry._3(colored_point[0], undefined, 5, "red");

eq("File \"jscomp/test/class4_test.ml\", line 67, characters 5-12", [
      5,
      "red"
    ], [
      Caml_oo_curry.js1(291546447, 1, p$p),
      Caml_oo_curry.js1(-899911325, 2, p$p)
    ]);

function get_succ_x(p) {
  return Caml_oo_curry.js1(291546447, 3, p) + 1 | 0;
}

eq("File \"jscomp/test/class4_test.ml\", line 71, characters 12-19", 6, get_succ_x(p$p));

function set_x(p) {
  return Caml_oo_curry.js1(-97543333, 4, p);
}

function incr(p) {
  return Curry._1(set_x(p), get_succ_x(p));
}

Mt.from_pair_suites("Class4_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.restricted_point = restricted_point;
exports.restricted_point$p = restricted_point$p;
exports.restricted_point2$p = restricted_point2$p;
exports.Point = Point;
exports.abstract_point = abstract_point;
exports.point = point;
exports.colored_point = colored_point;
exports.p$p = p$p;
exports.get_succ_x = get_succ_x;
exports.set_x = set_x;
exports.incr = incr;
/* restricted_point Not a pure module */

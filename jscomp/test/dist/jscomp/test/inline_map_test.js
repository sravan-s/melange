// Generated by Melange
'use strict';

let Caml = require("melange.js/caml.js");
let Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
let Mt = require("./mt.js");
let Stdlib = require("melange/stdlib.js");
let Stdlib__List = require("melange/list.js");

function height(param) {
  if (param) {
    return param._4;
  } else {
    return 0;
  }
}

function create(l, x, d, r) {
  let hl = height(l);
  let hr = height(r);
  return /* Node */{
          _0: l,
          _1: x,
          _2: d,
          _3: r,
          _4: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
        };
}

function bal(l, x, d, r) {
  let hl = l ? l._4 : 0;
  let hr = r ? r._4 : 0;
  if (hl > (hr + 2 | 0)) {
    if (l) {
      let lr = l._3;
      let ld = l._2;
      let lv = l._1;
      let ll = l._0;
      if (height(ll) >= height(lr)) {
        return create(ll, lv, ld, create(lr, x, d, r));
      }
      if (lr) {
        return create(create(ll, lv, ld, lr._0), lr._1, lr._2, create(lr._3, x, d, r));
      }
      throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
                MEL_EXN_ID: "Invalid_argument",
                _1: "Map.bal"
              });
    }
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
              MEL_EXN_ID: "Invalid_argument",
              _1: "Map.bal"
            });
  }
  if (hr <= (hl + 2 | 0)) {
    return /* Node */{
            _0: l,
            _1: x,
            _2: d,
            _3: r,
            _4: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          };
  }
  if (r) {
    let rr = r._3;
    let rd = r._2;
    let rv = r._1;
    let rl = r._0;
    if (height(rr) >= height(rl)) {
      return create(create(l, x, d, rl), rv, rd, rr);
    }
    if (rl) {
      return create(create(l, x, d, rl._0), rl._1, rl._2, create(rl._3, rv, rd, rr));
    }
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
              MEL_EXN_ID: "Invalid_argument",
              _1: "Map.bal"
            });
  }
  throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "Map.bal"
          });
}

function add(x, data, param) {
  if (!param) {
    return /* Node */{
            _0: /* Empty */0,
            _1: x,
            _2: data,
            _3: /* Empty */0,
            _4: 1
          };
  }
  let r = param._3;
  let d = param._2;
  let v = param._1;
  let l = param._0;
  let c = Caml.caml_int_compare(x, v);
  if (c === 0) {
    return /* Node */{
            _0: l,
            _1: x,
            _2: data,
            _3: r,
            _4: param._4
          };
  } else if (c < 0) {
    return bal(add(x, data, l), v, d, r);
  } else {
    return bal(l, v, d, add(x, data, r));
  }
}

function find(x, _param) {
  while(true) {
    let param = _param;
    if (param) {
      let c = Caml.caml_int_compare(x, param._1);
      if (c === 0) {
        return param._2;
      }
      _param = c < 0 ? param._0 : param._3;
      continue ;
    }
    throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
              MEL_EXN_ID: Stdlib.Not_found
            });
  };
}

let m = Stdlib__List.fold_left((function (acc, param) {
        return add(param[0], param[1], acc);
      }), /* Empty */0, {
      hd: [
        10,
        /* 'a' */97
      ],
      tl: {
        hd: [
          3,
          /* 'b' */98
        ],
        tl: {
          hd: [
            7,
            /* 'c' */99
          ],
          tl: {
            hd: [
              20,
              /* 'd' */100
            ],
            tl: /* [] */0
          }
        }
      }
    });

Mt.from_pair_suites("Inline_map_test", {
      hd: [
        "find",
        (function (param) {
            return {
                    TAG: /* Eq */0,
                    _0: find(10, m),
                    _1: /* 'a' */97
                  };
          })
      ],
      tl: /* [] */0
    });

/* m Not a pure module */

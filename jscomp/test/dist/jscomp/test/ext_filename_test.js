// Generated by Melange
'use strict';

let Caml_bytes = require("melange.js/caml_bytes.js");
let Caml_external_polyfill = require("melange.js/caml_external_polyfill.js");
let Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
let Caml_sys = require("melange.js/caml_sys.js");
let CamlinternalLazy = require("melange/camlinternalLazy.js");
let Curry = require("melange.js/curry.js");
let Ext_pervasives_test = require("./ext_pervasives_test.js");
let Ext_string_test = require("./ext_string_test.js");
let Stdlib = require("melange/stdlib.js");
let Stdlib__Bytes = require("melange/bytes.js");
let Stdlib__Filename = require("melange/filename.js");
let Stdlib__Format = require("melange/format.js");
let Stdlib__List = require("melange/list.js");
let Stdlib__String = require("melange/string.js");
let Stdlib__Sys = require("melange/sys.js");
let Test_literals = require("./test_literals.js");

let node_sep = "/";

let node_parent = "..";

let node_current = ".";

let cwd = {
  LAZY_DONE: false,
  VAL: (function () {
      return Caml_sys.caml_sys_getcwd(undefined);
    })
};

function path_as_directory(x) {
  if (x === "" || Ext_string_test.ends_with(x, Stdlib__Filename.dir_sep)) {
    return x;
  } else {
    return x + Stdlib__Filename.dir_sep;
  }
}

function absolute_path(s) {
  let s$1 = Curry._1(Stdlib__Filename.is_relative, s) ? Stdlib__Filename.concat(CamlinternalLazy.force(cwd), s) : s;
  let aux = function (_s) {
    while(true) {
      let s = _s;
      let base = Curry._1(Stdlib__Filename.basename, s);
      let dir = Curry._1(Stdlib__Filename.dirname, s);
      if (dir === s) {
        return dir;
      }
      if (base !== Stdlib__Filename.current_dir_name) {
        if (base === Stdlib__Filename.parent_dir_name) {
          return Curry._1(Stdlib__Filename.dirname, aux(dir));
        } else {
          return Stdlib__Filename.concat(aux(dir), base);
        }
      }
      _s = dir;
      continue ;
    };
  };
  return aux(s$1);
}

function chop_extension(locOpt, name) {
  let loc = locOpt !== undefined ? locOpt : "";
  try {
    return Stdlib__Filename.chop_extension(name);
  }
  catch (raw_exn){
    let exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === Stdlib.Invalid_argument) {
      return Curry._2(Stdlib__Format.ksprintf(Stdlib.invalid_arg, /* Format */{
                      _0: {
                        TAG: /* String_literal */11,
                        _0: "Filename.chop_extension ( ",
                        _1: {
                          TAG: /* String */2,
                          _0: /* No_padding */0,
                          _1: {
                            TAG: /* String_literal */11,
                            _0: " : ",
                            _1: {
                              TAG: /* String */2,
                              _0: /* No_padding */0,
                              _1: {
                                TAG: /* String_literal */11,
                                _0: " )",
                                _1: /* End_of_format */0
                              }
                            }
                          }
                        }
                      },
                      _1: "Filename.chop_extension ( %s : %s )"
                    }), loc, name);
    }
    throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
  }
}

function chop_extension_if_any(fname) {
  try {
    return Stdlib__Filename.chop_extension(fname);
  }
  catch (raw_exn){
    let exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === Stdlib.Invalid_argument) {
      return fname;
    }
    throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
  }
}

let os_path_separator_char = Stdlib__Filename.dir_sep.charCodeAt(0);

function relative_path(file_or_dir_1, file_or_dir_2) {
  let relevant_dir1 = file_or_dir_1.NAME === "File" ? Curry._1(Stdlib__Filename.dirname, file_or_dir_1.VAL) : file_or_dir_1.VAL;
  let relevant_dir2 = file_or_dir_2.NAME === "File" ? Curry._1(Stdlib__Filename.dirname, file_or_dir_2.VAL) : file_or_dir_2.VAL;
  let dir1 = Ext_string_test.split(undefined, relevant_dir1, os_path_separator_char);
  let dir2 = Ext_string_test.split(undefined, relevant_dir2, os_path_separator_char);
  let go = function (_dir1, _dir2) {
    while(true) {
      let dir2 = _dir2;
      let dir1 = _dir1;
      if (dir1 && dir2 && dir1.hd === dir2.hd) {
        _dir2 = dir2.tl;
        _dir1 = dir1.tl;
        continue ;
      }
      return Stdlib.$at(Stdlib__List.map((function (param) {
                        return node_parent;
                      }), dir2), dir1);
    };
  };
  let ys = go(dir1, dir2);
  if (ys && ys.hd === node_parent) {
    return Stdlib__String.concat(node_sep, ys);
  } else {
    return Stdlib__String.concat(node_sep, {
                hd: node_current,
                tl: ys
              });
  }
}

function node_relative_path(node_modules_shorten, file1, dep_file) {
  let file2 = dep_file.VAL;
  let v = Ext_string_test.find(undefined, Test_literals.node_modules, file2);
  let len = file2.length;
  if (!(node_modules_shorten && v >= 0)) {
    return relative_path(dep_file.NAME === "File" ? ({
                    NAME: "File",
                    VAL: absolute_path(dep_file.VAL)
                  }) : ({
                    NAME: "Dir",
                    VAL: absolute_path(dep_file.VAL)
                  }), file1.NAME === "File" ? ({
                    NAME: "File",
                    VAL: absolute_path(file1.VAL)
                  }) : ({
                    NAME: "Dir",
                    VAL: absolute_path(file1.VAL)
                  })) + (node_sep + Curry._1(Stdlib__Filename.basename, file2));
  }
  let skip = function (_i) {
    while(true) {
      let i = _i;
      if (i >= len) {
        return Curry._1(Ext_pervasives_test.failwithf("File \"jscomp/test/ext_filename_test.ml\", line 162, characters 43-50", /* Format */{
                        _0: {
                          TAG: /* String_literal */11,
                          _0: "invalid path: ",
                          _1: {
                            TAG: /* String */2,
                            _0: /* No_padding */0,
                            _1: /* End_of_format */0
                          }
                        },
                        _1: "invalid path: %s"
                      }), file2);
      }
      let curr_char = file2.charCodeAt(i);
      if (!(curr_char === os_path_separator_char || curr_char === /* '.' */46)) {
        return i;
      }
      _i = i + 1 | 0;
      continue ;
    };
  };
  return Ext_string_test.tail_from(file2, skip(v + Test_literals.node_modules_length | 0));
}

function find_root_filename(_cwd, filename) {
  while(true) {
    let cwd = _cwd;
    if (Caml_external_polyfill.resolve("caml_sys_file_exists")(Stdlib__Filename.concat(cwd, filename))) {
      return cwd;
    }
    let cwd$p = Curry._1(Stdlib__Filename.dirname, cwd);
    if (cwd$p.length >= cwd.length) {
      return Curry._2(Ext_pervasives_test.failwithf("File \"jscomp/test/ext_filename_test.ml\", line 205, characters 13-20", /* Format */{
                      _0: {
                        TAG: /* String */2,
                        _0: /* No_padding */0,
                        _1: {
                          TAG: /* String_literal */11,
                          _0: " not found from ",
                          _1: {
                            TAG: /* String */2,
                            _0: /* No_padding */0,
                            _1: /* End_of_format */0
                          }
                        }
                      },
                      _1: "%s not found from %s"
                    }), filename, cwd);
    }
    _cwd = cwd$p;
    continue ;
  };
}

function find_package_json_dir(cwd) {
  return find_root_filename(cwd, Test_literals.bsconfig_json);
}

let package_dir = {
  LAZY_DONE: false,
  VAL: (function () {
      let cwd$1 = CamlinternalLazy.force(cwd);
      return find_root_filename(cwd$1, Test_literals.bsconfig_json);
    })
};

function module_name_of_file(file) {
  let s = Stdlib__Filename.chop_extension(Curry._1(Stdlib__Filename.basename, file));
  return Caml_bytes.bytes_to_string(Stdlib__Bytes.capitalize_ascii(Caml_bytes.bytes_of_string(s)));
}

function module_name_of_file_if_any(file) {
  let s = chop_extension_if_any(Curry._1(Stdlib__Filename.basename, file));
  return Caml_bytes.bytes_to_string(Stdlib__Bytes.capitalize_ascii(Caml_bytes.bytes_of_string(s)));
}

function combine(p1, p2) {
  if (p1 === "" || p1 === Stdlib__Filename.current_dir_name) {
    return p2;
  } else if (p2 === "" || p2 === Stdlib__Filename.current_dir_name) {
    return p1;
  } else if (Curry._1(Stdlib__Filename.is_relative, p2)) {
    return Stdlib__Filename.concat(p1, p2);
  } else {
    return p2;
  }
}

function split_aux(p) {
  let _p = p;
  let _acc = /* [] */0;
  while(true) {
    let acc = _acc;
    let p$1 = _p;
    let dir = Curry._1(Stdlib__Filename.dirname, p$1);
    if (dir === p$1) {
      return [
              dir,
              acc
            ];
    }
    let new_path = Curry._1(Stdlib__Filename.basename, p$1);
    if (new_path === Stdlib__Filename.dir_sep) {
      _p = dir;
      continue ;
    }
    _acc = {
      hd: new_path,
      tl: acc
    };
    _p = dir;
    continue ;
  };
}

function rel_normalized_absolute_path(from, to_) {
  let match = split_aux(from);
  let match$1 = split_aux(to_);
  let root2 = match$1[0];
  if (match[0] !== root2) {
    return root2;
  }
  let _xss = match[1];
  let _yss = match$1[1];
  while(true) {
    let yss = _yss;
    let xss = _xss;
    if (!xss) {
      if (yss) {
        return Stdlib__List.fold_left(Stdlib__Filename.concat, yss.hd, yss.tl);
      } else {
        return Ext_string_test.empty;
      }
    }
    let xs = xss.tl;
    if (!yss) {
      return Stdlib__List.fold_left((function (acc, param) {
                    return Stdlib__Filename.concat(acc, Ext_string_test.parent_dir_lit);
                  }), Ext_string_test.parent_dir_lit, xs);
    }
    if (xss.hd === yss.hd) {
      _yss = yss.tl;
      _xss = xs;
      continue ;
    }
    let start = Stdlib__List.fold_left((function (acc, param) {
            return Stdlib__Filename.concat(acc, Ext_string_test.parent_dir_lit);
          }), Ext_string_test.parent_dir_lit, xs);
    return Stdlib__List.fold_left(Stdlib__Filename.concat, start, yss);
  };
}

function normalize_absolute_path(x) {
  let drop_if_exist = function (xs) {
    if (xs) {
      return xs.tl;
    } else {
      return /* [] */0;
    }
  };
  let normalize_list = function (_acc, _paths) {
    while(true) {
      let paths = _paths;
      let acc = _acc;
      if (!paths) {
        return acc;
      }
      let xs = paths.tl;
      let x = paths.hd;
      if (x === Ext_string_test.current_dir_lit) {
        _paths = xs;
        continue ;
      }
      if (x === Ext_string_test.parent_dir_lit) {
        _paths = xs;
        _acc = drop_if_exist(acc);
        continue ;
      }
      _paths = xs;
      _acc = {
        hd: x,
        tl: acc
      };
      continue ;
    };
  };
  let match = split_aux(x);
  let root = match[0];
  let rev_paths = normalize_list(/* [] */0, match[1]);
  if (rev_paths) {
    let _acc = rev_paths.hd;
    let _rev_paths = rev_paths.tl;
    while(true) {
      let rev_paths$1 = _rev_paths;
      let acc = _acc;
      if (!rev_paths$1) {
        return Stdlib__Filename.concat(root, acc);
      }
      _rev_paths = rev_paths$1.tl;
      _acc = Stdlib__Filename.concat(rev_paths$1.hd, acc);
      continue ;
    };
  } else {
    return root;
  }
}

function get_extension(x) {
  let pos = Ext_string_test.rindex_neg(x, /* '.' */46);
  if (pos < 0) {
    return "";
  } else {
    return Ext_string_test.tail_from(x, pos);
  }
}

let simple_convert_node_path_to_os_path;

if (Stdlib__Sys.unix) {
  simple_convert_node_path_to_os_path = (function (x) {
      return x;
    });
} else if (Stdlib__Sys.win32 || false) {
  simple_convert_node_path_to_os_path = Ext_string_test.replace_slash_backward;
} else {
  let s = "Unknown OS : " + Stdlib__Sys.os_type;
  throw new Caml_js_exceptions.MelangeError("Failure", {
            MEL_EXN_ID: "Failure",
            _1: s
          });
}

let $slash$slash = Stdlib__Filename.concat;

exports.node_sep = node_sep;
exports.node_parent = node_parent;
exports.node_current = node_current;
exports.cwd = cwd;
exports.$slash$slash = $slash$slash;
exports.path_as_directory = path_as_directory;
exports.absolute_path = absolute_path;
exports.chop_extension = chop_extension;
exports.chop_extension_if_any = chop_extension_if_any;
exports.os_path_separator_char = os_path_separator_char;
exports.relative_path = relative_path;
exports.node_relative_path = node_relative_path;
exports.find_root_filename = find_root_filename;
exports.find_package_json_dir = find_package_json_dir;
exports.package_dir = package_dir;
exports.module_name_of_file = module_name_of_file;
exports.module_name_of_file_if_any = module_name_of_file_if_any;
exports.combine = combine;
exports.split_aux = split_aux;
exports.rel_normalized_absolute_path = rel_normalized_absolute_path;
exports.normalize_absolute_path = normalize_absolute_path;
exports.get_extension = get_extension;
exports.simple_convert_node_path_to_os_path = simple_convert_node_path_to_os_path;
/* simple_convert_node_path_to_os_path Not a pure module */

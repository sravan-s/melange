// Generated by Melange
'use strict';

let Stdlib__List = require("melange/list.js");
let Stdlib__String = require("melange/string.js");
let Test_order = require("./test_order.js");

function Make(U) {
  let compare = U.compare;
  return {
          compare: compare,
          v: compare
        };
}

let X = {
  compare: Stdlib__String.compare,
  v: Stdlib__String.compare
};

let U = {
  compare: Test_order.compare,
  v: Test_order.compare
};

let v = Stdlib__List.length;

let length = Stdlib__List.length;

let compare_lengths = Stdlib__List.compare_lengths;

let compare_length_with = Stdlib__List.compare_length_with;

let is_empty = Stdlib__List.is_empty;

let cons = Stdlib__List.cons;

let hd = Stdlib__List.hd;

let tl = Stdlib__List.tl;

let nth = Stdlib__List.nth;

let nth_opt = Stdlib__List.nth_opt;

let rev = Stdlib__List.rev;

let init = Stdlib__List.init;

let append = Stdlib__List.append;

let rev_append = Stdlib__List.rev_append;

let concat = Stdlib__List.concat;

let flatten = Stdlib__List.flatten;

let equal = Stdlib__List.equal;

let compare = Stdlib__List.compare;

let iter = Stdlib__List.iter;

let iteri = Stdlib__List.iteri;

let map = Stdlib__List.map;

let mapi = Stdlib__List.mapi;

let rev_map = Stdlib__List.rev_map;

let filter_map = Stdlib__List.filter_map;

let concat_map = Stdlib__List.concat_map;

let fold_left_map = Stdlib__List.fold_left_map;

let fold_left = Stdlib__List.fold_left;

let fold_right = Stdlib__List.fold_right;

let iter2 = Stdlib__List.iter2;

let map2 = Stdlib__List.map2;

let rev_map2 = Stdlib__List.rev_map2;

let fold_left2 = Stdlib__List.fold_left2;

let fold_right2 = Stdlib__List.fold_right2;

let for_all = Stdlib__List.for_all;

let exists = Stdlib__List.exists;

let for_all2 = Stdlib__List.for_all2;

let exists2 = Stdlib__List.exists2;

let mem = Stdlib__List.mem;

let memq = Stdlib__List.memq;

let find = Stdlib__List.find;

let find_opt = Stdlib__List.find_opt;

let find_index = Stdlib__List.find_index;

let find_map = Stdlib__List.find_map;

let find_mapi = Stdlib__List.find_mapi;

let filter = Stdlib__List.filter;

let find_all = Stdlib__List.find_all;

let filteri = Stdlib__List.filteri;

let partition = Stdlib__List.partition;

let partition_map = Stdlib__List.partition_map;

let assoc = Stdlib__List.assoc;

let assoc_opt = Stdlib__List.assoc_opt;

let assq = Stdlib__List.assq;

let assq_opt = Stdlib__List.assq_opt;

let mem_assoc = Stdlib__List.mem_assoc;

let mem_assq = Stdlib__List.mem_assq;

let remove_assoc = Stdlib__List.remove_assoc;

let remove_assq = Stdlib__List.remove_assq;

let split = Stdlib__List.split;

let combine = Stdlib__List.combine;

let sort = Stdlib__List.sort;

let stable_sort = Stdlib__List.stable_sort;

let fast_sort = Stdlib__List.fast_sort;

let sort_uniq = Stdlib__List.sort_uniq;

let merge = Stdlib__List.merge;

let to_seq = Stdlib__List.to_seq;

let of_seq = Stdlib__List.of_seq;

exports.v = v;
exports.Make = Make;
exports.X = X;
exports.U = U;
exports.length = length;
exports.compare_lengths = compare_lengths;
exports.compare_length_with = compare_length_with;
exports.is_empty = is_empty;
exports.cons = cons;
exports.hd = hd;
exports.tl = tl;
exports.nth = nth;
exports.nth_opt = nth_opt;
exports.rev = rev;
exports.init = init;
exports.append = append;
exports.rev_append = rev_append;
exports.concat = concat;
exports.flatten = flatten;
exports.equal = equal;
exports.compare = compare;
exports.iter = iter;
exports.iteri = iteri;
exports.map = map;
exports.mapi = mapi;
exports.rev_map = rev_map;
exports.filter_map = filter_map;
exports.concat_map = concat_map;
exports.fold_left_map = fold_left_map;
exports.fold_left = fold_left;
exports.fold_right = fold_right;
exports.iter2 = iter2;
exports.map2 = map2;
exports.rev_map2 = rev_map2;
exports.fold_left2 = fold_left2;
exports.fold_right2 = fold_right2;
exports.for_all = for_all;
exports.exists = exists;
exports.for_all2 = for_all2;
exports.exists2 = exists2;
exports.mem = mem;
exports.memq = memq;
exports.find = find;
exports.find_opt = find_opt;
exports.find_index = find_index;
exports.find_map = find_map;
exports.find_mapi = find_mapi;
exports.filter = filter;
exports.find_all = find_all;
exports.filteri = filteri;
exports.partition = partition;
exports.partition_map = partition_map;
exports.assoc = assoc;
exports.assoc_opt = assoc_opt;
exports.assq = assq;
exports.assq_opt = assq_opt;
exports.mem_assoc = mem_assoc;
exports.mem_assq = mem_assq;
exports.remove_assoc = remove_assoc;
exports.remove_assq = remove_assq;
exports.split = split;
exports.combine = combine;
exports.sort = sort;
exports.stable_sort = stable_sort;
exports.fast_sort = fast_sort;
exports.sort_uniq = sort_uniq;
exports.merge = merge;
exports.to_seq = to_seq;
exports.of_seq = of_seq;
/* No side effect */

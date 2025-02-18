// Generated by Melange
'use strict';

let Curry = require("melange.js/curry.js");

function fib(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return fib(n - 1 | 0) + fib(n - 2 | 0) | 0;
  }
}

function fib2(n) {
  if (n === 2 || n === 1) {
    return 1;
  } else {
    return fib2(n - 1 | 0) + fib2(n - 2 | 0) | 0;
  }
}

let v = 0;

for(let i = 0; i <= 10; ++i){
  v = v + i | 0;
}

let sum = v;

let v$1 = 0;

for(let i$1 = 10; i$1 >= 0; --i$1){
  v$1 = v$1 + i$1 | 0;
}

let sumdown = v$1;

function cons(x, y) {
  return /* Cons */{
          _0: x,
          _1: y
        };
}

function length(x) {
  if (x) {
    return 1 + length(x._1) | 0;
  } else {
    return 0;
  }
}

function map(f, x) {
  if (x) {
    return /* Cons */{
            _0: Curry._1(f, x._0),
            _1: map(f, x._1)
          };
  } else {
    return /* Nil */0;
  }
}

function f(x) {
  let v = x;
  let sum = 0;
  while(v > 0) {
    sum = sum + v | 0;
    v = v - 1 | 0;
  };
  return sum;
}

function fib3(n) {
  let _a = 0;
  let _b = 1;
  let _n = n;
  while(true) {
    let n$1 = _n;
    let b = _b;
    let a = _a;
    if (n$1 <= 0) {
      return a;
    }
    _n = n$1 - 1 | 0;
    _b = a + b | 0;
    _a = b;
    continue ;
  };
}

let b = fib;

exports.fib = fib;
exports.fib2 = fib2;
exports.b = b;
exports.sum = sum;
exports.sumdown = sumdown;
exports.cons = cons;
exports.length = length;
exports.map = map;
exports.f = f;
exports.fib3 = fib3;
/*  Not a pure module */

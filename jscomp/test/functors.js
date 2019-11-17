'use strict';

var Curry = require("../../lib/js/curry.js");

function O(X) {
  var cow = function (x) {
    return Curry._1(X.foo, x);
  };
  var sheep = function (x) {
    return 1 + Curry._1(X.foo, x) | 0;
  };
  return {
          cow: cow,
          sheep: sheep
        };
}

function F(X, Y) {
  var cow = function (x) {
    return Curry._1(Y.foo, Curry._1(X.foo, x));
  };
  var sheep = function (x) {
    return 1 + Curry._1(Y.foo, Curry._1(X.foo, x)) | 0;
  };
  return {
          cow: cow,
          sheep: sheep
        };
}

function F1(X, Y) {
  var sheep = function (x) {
    return 1 + Curry._1(Y.foo, Curry._1(X.foo, x)) | 0;
  };
  return {
          sheep: sheep
        };
}

function F2(X, Y) {
  var X$1 = {
    foo: X.foo
  };
  var Y$1 = {
    foo: Y.foo
  };
  var sheep = function (x) {
    return 1 + Curry._1(Y$1.foo, Curry._1(X$1.foo, x)) | 0;
  };
  return {
          sheep: sheep
        };
}

var M = {
  F: (function (funarg, funarg$1) {
      var Y = {
        foo: funarg$1.foo
      };
      var X = {
        foo: funarg.foo
      };
      var sheep = function (x) {
        return 1 + Curry._1(Y.foo, Curry._1(X.foo, x)) | 0;
      };
      return {
              sheep: sheep
            };
    })
};

exports.O = O;
exports.F = F;
exports.F1 = F1;
exports.F2 = F2;
exports.M = M;
/* No side effect */

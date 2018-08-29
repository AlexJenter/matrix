"use strict";

function vectorAdd(a, b) {
  return a.map(function (ai, i) {
    return ai + b[i];
  });
}

function vectorScale(v, f) {
  return v.map(function (x) {
    return x * f;
  });
}

module.exports = {
  add: vectorAdd,
  scale: vectorScale
};
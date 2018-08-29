"use strict"
function head ([x, ...xs]) {
  return x
}
function vectorAdd (a, b) {
  return a.map((ai, i) => [head(ai) + head(b[i])])
}

module.exports = {
  add: vectorAdd
}
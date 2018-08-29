"use strict"
function vectorAdd (a, b) {
  return a.map((ai, i) => ai + b[i])
}

function vectorScale (v, f) {
  return v.map(x => x * f)
}

module.exports = {
  add: vectorAdd,
  scale: vectorScale
}
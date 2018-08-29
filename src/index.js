const vectorAdd = (a, b) => a.map((ai, i) => ai + b[i])

const vectorScale = (v, f) => v.map(x => x * f)

module.exports = {
  add: vectorAdd,
  scale: vectorScale
}
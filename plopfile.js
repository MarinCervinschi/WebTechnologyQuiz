const generateComponent = require("./.plop/generators/component")

module.exports = function (plop) {
  // controller generator
  plop.setGenerator("component", generateComponent)
}
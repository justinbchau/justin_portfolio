const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: "/about",
    component: path.resolve("./src/sections/About.js"),
  })
}

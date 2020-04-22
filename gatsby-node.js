/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const templates = {
    products: path.resolve("src/templates/product.js"),
    blog: path.resolve("src/templates/blog.js"),
  }

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              name
            }
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.path) {
        let type = node.frontmatter.path.match(/(?<=\/)\w*(?=\/)/)[0]
        type = type ? type : "blog"

        createPage({
          path: node.frontmatter.path,
          component: templates[type],
        })
      }
    })
  })
}

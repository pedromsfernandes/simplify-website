/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const productTemplate = path.resolve("src/templates/product.js")
  const blogTemplate = path.resolve("src/templates/blog.js")

  return graphql(`
    {
      products: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/products/" } }
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              path
              name
              author
            }
          }
        }
      }
      blogs: allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { regex: "/blog/" } }
      ) {
        edges {
          next {
            frontmatter {
              path
            }
          }
          node {
            frontmatter {
              path
              author
              title
              date
            }
          }
          previous {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.blogs.edges.forEach(({ previous, node, next }) => {
      const path = `/blog/${node.frontmatter.path}`
      createPage({
        path,
        component: blogTemplate,
        context: {
          previousPath: next ? next.frontmatter.path : null,
          author: node.frontmatter.author,
          shortPath: node.frontmatter.path,
          nextPath: previous ? previous.frontmatter.path : null,
        },
      })
    })

    res.data.products.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: productTemplate,
      })
    })
  })
}

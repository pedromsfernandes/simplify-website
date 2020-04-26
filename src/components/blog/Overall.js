import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Row, Col } from "react-bootstrap"

const getAllBlogs = (data) =>
  data.allMarkdownRemark.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    path: node.frontmatter.path,
  }))

const Overall = () => {
  const data = useStaticQuery(graphql`
    query getBlogs {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
        edges {
          node {
            frontmatter {
              title
              path
              date
            }
          }
        }
      }
    }
  `)

  const blogs = getAllBlogs(data)

  return (
    blogs.length > 0 && (
      <>
        {blogs.map(({ title, path, date }) => (
          <div>
            <h3>{title}</h3>
            <span>{date}</span>
            <Link to={path}>View more</Link>
          </div>
        ))}
      </>
    )
  )
}

export default Overall

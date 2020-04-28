import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BlogItem from "./BlogItem"

import { Row, Col } from "react-bootstrap"

import styles from "./blog.module.css"

const getAllBlogs = (data) =>
  data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node.frontmatter,
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
              date(formatString: "MMMM DD, YYYY")
              author
              peek
            }
          }
        }
      }
    }
  `)

  const blogs = getAllBlogs(data)

  return (
    blogs.length > 0 && (
      <div className={styles.blogList}>
        {blogs.map(({ title, path, date, author, peek }) => (
          <BlogItem
            key={title}
            title={title}
            path={`/blog/${path}`}
            date={date}
            author={author}
            peek={peek}
          />
        ))}
      </div>
    )
  )
}

export default Overall

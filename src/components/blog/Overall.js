import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BlogItem from "./BlogItem"

import styles from "./blog.module.css"

const getAllBlogs = (data) =>
  data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node.frontmatter,
  }))

const Overall = () => {
  const data = useStaticQuery(graphql`
    query getBlogs {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
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

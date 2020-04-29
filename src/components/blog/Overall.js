import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BlogItem from "./BlogItem"

import styles from "./blog.module.css"

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
              img {
                childImageSharp {
                  fixed(width: 160, height: 160) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    data.allMarkdownRemark.edges.length > 0 && (
      <div className={styles.blogList}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const { title, path, date, author, peek, img } = node.frontmatter
          return (
            <BlogItem
              key={title}
              title={title}
              path={`/blog/${path}`}
              date={date}
              author={author}
              peek={peek}
              img={img}
            />
          )
        })}
      </div>
    )
  )
}

export default Overall

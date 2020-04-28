import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"

import PreviousPost from "../components/blog/PreviousPost"
import NextPost from "../components/blog/NextPost"

import styles from "./product.module.css"

export default function Template({ data }) {
  const { blog, author, previous, next } = data
  const { date, title } = blog.frontmatter
  const { name, course, role, img } = author

  return (
    <Layout headerClassName={styles.background}>
      <SEO title={title} />
      <article className="container">
        <h1 className="text-center">{title}</h1>
        <p>
          {date} • Written by {name}
        </p>
        <div dangerouslySetInnerHTML={{ __html: blog.html }} />
        <hr />
        <footer>
          <Img fixed={img.childImageSharp.fixed} alt={name} />
          <p>
            Written by {name} • {course} {role && <span> • {role}</span>}
          </p>
        </footer>
      </article>
      <div>
        {previous && (
          <PreviousPost link={`/blog/${previous.frontmatter.path}`} />
        )}
        {next && <NextPost link={`/blog/${next.frontmatter.path}`} />}
      </div>
    </Layout>
  )
}

export const blogQuery = graphql`
  query getBlog(
    $shortPath: String!
    $author: String!
    $previousPath: String
    $nextPath: String
  ) {
    blog: markdownRemark(frontmatter: { path: { eq: $shortPath } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    previous: markdownRemark(frontmatter: { path: { eq: $previousPath } }) {
      frontmatter {
        path
      }
    }
    next: markdownRemark(frontmatter: { path: { eq: $nextPath } }) {
      frontmatter {
        path
      }
    }
    author: teamJson(name: { eq: $author }) {
      name
      course
      role
      img {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

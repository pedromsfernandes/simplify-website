import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"

import SEO from "../components/seo"
import Layout from "../components/layout"

import PreviousPost from "../components/blog/PreviousPost"
import NextPost from "../components/blog/NextPost"

import styles from "../styles/blog.module.css"

export default function Template({ data }) {
  const { blog, author, previous, next } = data
  const { date, title, img } = blog.frontmatter
  const { name, course, role, img: authorImg } = author

  return (
    <Layout headerClassName={styles.background}>
      <SEO title={title} />
      <div className={[styles.page, styles.blogPage, "pt-5"].join(" ")}>
        <Container className={styles.container}>
          <article>
            <h1 className="main-title">{title}</h1>
            <p className={styles.blogInfo}>
              {date} • Written by {name}
            </p>
            {img && (
              <Img
                className={styles.img}
                fluid={img.childImageSharp.fluid}
                alt={name}
              />
            )}
            <div
              className={styles.blogContent}
              dangerouslySetInnerHTML={{ __html: blog.html }}
            />
            <hr className={styles.separator} />
            <footer className="d-flex align-items-center py-4">
              <Img
                className={styles.authorImg}
                fixed={authorImg.childImageSharp.fixed}
                alt={name}
              />
              <p className={styles.blogAuthor}>
                Written by {name} • {course} {role && <span> • {role}</span>}
              </p>
            </footer>
          </article>
          <div
            className={["container", styles.arrows].join(" ")}
            style={{ position: "relative" }}
          >
            {previous && (
              <PreviousPost link={`/blog/${previous.frontmatter.path}`} />
            )}
            {next && <NextPost link={`/blog/${next.frontmatter.path}`} />}
          </div>
        </Container>
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
        img {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

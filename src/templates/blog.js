import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default function Template({ data }) {
  const { markdownRemark: blog } = data

  return (
    <Layout>
      <SEO title={blog.frontmatter.title} />
      <div class="container">
        <h1>{blog.frontmatter.title}</h1>
        <h2>{blog.frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: blog.html }} />
      </div>
    </Layout>
  )
}

export const blogQuery = graphql`
  query getBlog($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

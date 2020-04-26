import React from "react"
import Container from "react-bootstrap/Container"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Overall from "../components/blog/Overall.js"

const BlogPage = () => (
  <Layout>
    <div>
      <Container>
        <SEO title="Blog" />
        <h1 className="main-title text-center pt-5">Blog</h1>
        <Overall />
      </Container>
    </div>
  </Layout>
)

export default BlogPage

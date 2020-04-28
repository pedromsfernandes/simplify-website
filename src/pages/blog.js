import React from "react"
import Container from "react-bootstrap/Container"

import styles from "../styles/blog.module.css"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Overall from "../components/blog/Overall.js"

const BlogPage = () => (
  <Layout headerClassName={styles.background}>
    <div className={[styles.page, styles.blogListPage].join(" ")}>
      <Container>
        <SEO title="Blog" />
        <h1 className="main-title text-center pt-5">Our blog</h1>
        <p className={styles.intro}>
          Some short articles and insights writen by the Simplify team.
        </p>
        <Overall />
      </Container>
    </div>
  </Layout>
)

export default BlogPage

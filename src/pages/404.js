import React from "react"

import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/404.module.css"

const NotFoundPage = () => (
  <Layout>
    <div className={styles.page}>
      <Container>
        <SEO title="404: Not found" />
        <div className="page-not-found text-center p-5">
          <h1>OOPS!</h1>
          <h2>404 - PAGE NOT FOUND</h2>
          <h6>
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </h6>
          <Button className="px-4 py-3" href="/" size="lg">
            GO TO HOMEPAGE
          </Button>
        </div>
      </Container>
    </div>
  </Layout>
)

export default NotFoundPage

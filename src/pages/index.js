import React from "react"
import { Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <h1>
        Simplify your
        <br />
        projects for
        <br />
        better business
      </h1>
      <p>
        We are a multidisciplinary company that can help you to find a quick and
        easy way to solve any burden of your everyday tasks using technology and
        multimedia.
      </p>
    </Container>
  </Layout>
)

export default IndexPage

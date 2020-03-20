import React from "react"
import { Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Container>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <p>Welcome to contact page</p>
    </Container>
  </Layout>
)

export default ContactPage

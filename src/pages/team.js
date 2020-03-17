import React from "react"
import { Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TeamPage = () => (
  <Layout>
    <Container>
      <SEO title="Team" />
      <h1>Team</h1>
      <p>Welcome to team page</p>
    </Container>
  </Layout>
)

export default TeamPage

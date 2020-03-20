import React from "react"
import { Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <Container>
      <SEO title="Project" />
      <h1>Project</h1>
      <p>Welcome to project page</p>
    </Container>
  </Layout>
)

export default ProjectsPage

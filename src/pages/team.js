import React from "react"

import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TeamGallery from "../components/team/TeamGallery/TeamGallery"
import TeamHeader from "../components/team/TeamHeader/TeamHeader"

const TeamPage = () => (
  <Layout>
    <Container>
      <SEO title="Team" />
      <TeamHeader />
      <TeamGallery />
    </Container>
  </Layout>
)

export default TeamPage

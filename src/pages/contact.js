import React from "react"
import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactForm from "../components/contact/ContactForm"
import ContactHeader from "../components/contact/ContactHeader"

const ContactPage = () => (
  <Layout footer={false}>
    <Container>
      <SEO title="Contact" />
      <ContactHeader />
      <ContactForm />
    </Container>
  </Layout>
)

export default ContactPage

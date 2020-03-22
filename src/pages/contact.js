import React from "react"
import Container from "react-bootstrap/Container"

import styles from "../styles/contact.module.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactForm from "../components/contact/ContactForm"
import ContactHeader from "../components/contact/ContactHeader"

const ContactPage = () => (
  <Layout footer={false}>
    <div className={styles.page}>
      <Container className={styles.formContainer}>
        <SEO title="Contact" />
        <ContactHeader />
        <ContactForm />
      </Container>
    </div>
  </Layout>
)

export default ContactPage

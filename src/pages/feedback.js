import React from "react"
import Container from "react-bootstrap/Container"

import styles from "../styles/contact.module.css"
import headerStyles from "../components/contact/ContactHeader.module.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import FeedbackForm from "../components/feedback/FeedbackForm"

const ContactPage = () => (
  <Layout footer={false}>
    <div className={styles.page}>
      <h1 className={headerStyles.h1}>Anonymous Feedback</h1>
      <Container className={styles.formContainer}>
        <SEO title="Feedback" />
        <FeedbackForm />
      </Container>
    </div>
  </Layout>
)

export default ContactPage

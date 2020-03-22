import React, { useState } from "react"
import { Button, Form, Container, Row, Col } from "react-bootstrap"
import addToMailchimp from "gatsby-plugin-mailchimp"

import styles from "./Product.module.css"

const Subscribe = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    addToMailchimp(email).then(({ result, msg }) => {
      console.log(result, msg)
      if (result === "error" && msg.includes("already subscribed"))
        setMessage("Thank you for subscribing!")
      else setMessage(msg)
    })
  }

  return (
    <div className={styles.subscribe}>
      <Container className={styles.subscribeContainer}>
        {message ? (
          message
        ) : (
          <>
            <h3 className={styles.h3}>Keep updated with this project</h3>
            <Form onSubmit={handleSubmit} className={styles.form}>
              <Row>
                <Col md="9">
                  <Form.Group>
                    <Form.Control
                      type="email"
                      placeholder="Your email"
                      onChange={e => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md="3">
                  <Button
                    variant="primary"
                    type="submit"
                    className={[styles.btn, "btn-default"].join(" ")}
                  >
                    Subscribe
                  </Button>
                </Col>
              </Row>
            </Form>
          </>
        )}
      </Container>
    </div>
  )
}

export default Subscribe

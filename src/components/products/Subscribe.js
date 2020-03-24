import React, { useState } from "react"
import { Button, Form, Container, Row, Col, Spinner } from "react-bootstrap"
import addToMailchimp from "gatsby-plugin-mailchimp"

import styles from "./Product.module.css"

const Subscribe = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)
    addToMailchimp(email).then(({ result, msg }) => {
      setIsLoading(false)
      if (result === "error" && msg.includes("already subscribed"))
        setMessage("Thank you for subscribing!")
      else setMessage(msg)
    })
  }

  return (
    <div className={styles.subscribe}>
      <Container className={styles.subscribeContainer}>
        <h3 className={styles.h3}>Keep updated with this product</h3>
        {message ? (
          message
        ) : isLoading ? (
          <Spinner animation="border" variant="warning" />
        ) : (
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
                    className="input"
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
        )}
      </Container>
    </div>
  )
}

export default Subscribe

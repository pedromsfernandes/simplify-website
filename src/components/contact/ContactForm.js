import React, { useState } from "react"
import { Form, Button, Row, Col, Spinner } from "react-bootstrap"
import styles from "./ContactForm.module.css"

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"),
        name,
        email,
        message,
      }),
    })
      .then(() => {
        setSuccess(true)
        setLoading(false)
      })
      .catch(() => {
        setSuccess(false)
        setLoading(false)
      })
  }

  if (success) {
    return (
      <div className="text-center">
        Thank you for your submission! We will get back to you as soon as we
        can!
      </div>
    )
  } else if (success === false) {
    return (
      <div className="text-center">Something went wrong! Please try again.</div>
    )
  }

  return (
    <Form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <input type="hidden" name="form-name" value="contact" />
      <Row>
        <Col md="6">
          <Form.Group>
            <Form.Label className={styles.label}>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="input"
              required
            />
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group>
            <Form.Label className={styles.label}>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="input"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-md-3">
        <Col xs="12">
          <Form.Group>
            <Form.Label className={styles.label}>Message</Form.Label>
            <Form.Control
              name="message"
              as="textarea"
              rows="6"
              placeholder="Your message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="input textarea"
              required
            />
          </Form.Group>
        </Col>
        <Col xs="12" className="text-center">
          <Button
            type="submit"
            variant="primary"
            className="btn-default"
            block
            disabled={loading}
          >
            {loading ? (
              <Spinner animation="border" variant="warning" />
            ) : (
              <>Send form</>
            )}
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default ContactForm

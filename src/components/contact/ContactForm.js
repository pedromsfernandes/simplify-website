import React, { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import styles from "./ContactForm.module.css"

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

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
      .then()
      .catch()
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
              className="form"
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
              className="form"
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
              className="form textarea"
            />
          </Form.Group>
        </Col>
        <Col xs="12">
          <Button type="submit" variant="primary" className="btn-default" block>
            Send form
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default ContactForm

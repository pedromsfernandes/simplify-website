import React, { useState } from "react"
import { Form, Button, Row, Col, Spinner } from "react-bootstrap"
import styles from "../contact/ContactForm.module.css"

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

const ContactForm = () => {
  const [team, setTeam] = useState("team-a")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"),
        team,
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
        Thank you for your feedback. Your team leader and/or C-levels will be
        informed ASAP!
      </div>
    )
  } else if (success === false) {
    return (
      <div className="text-center">Something went wrong! Please try again.</div>
    )
  }

  return (
    <Form
      name="feedback"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <input type="hidden" name="form-name" value="feedback" />
      <Row>
        <Col>
          <Form.Group controlId="feedbackForm.select">
            <Form.Label className={styles.label}>Team</Form.Label>
            <Form.Control
              as="select"
              name="team"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              className="input"
              required
            >
              <option value="team-a">A</option>
              <option value="team-b">B</option>
              <option value="team-c">C</option>
              <option value="team-d">D</option>
            </Form.Control>
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
              onChange={(e) => setMessage(e.target.value)}
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

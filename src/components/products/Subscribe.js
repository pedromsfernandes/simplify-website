import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import addToMailchimp from "gatsby-plugin-mailchimp"

const Subscribe = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    addToMailchimp(email).then(({ result, msg }) => {
      if (result === "error" && msg.contains("already subscribed"))
        setMessage("Thank you for subscribing!")
      else setMessage(msg)
    })
  }

  return message ? (
    <div>{message}</div>
  ) : (
    <>
      <h1>Keep updated with this project</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Subscribe
        </Button>
      </Form>
    </>
  )
}

export default Subscribe

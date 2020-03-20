import React from "react"
import { Row, Col } from "react-bootstrap"

import styles from "./ContactHeader.module.css"

const ContactHeader = () => (
  <>
    <h1 className={styles.h1}>Contact us</h1>
    <Row>
      <Col className="text-left">
        <a
          href="mailto:general@simplify.com"
          target="_blank"
          className={styles.info}
        >
          general@simplify.com
        </a>
      </Col>
      <Col className="text-right">
        <a href="tel:+351 927 777 939" className={styles.info}>
          +351 927 777 939
        </a>
      </Col>
    </Row>
  </>
)

export default ContactHeader

import React from "react"
import { Row, Col } from "react-bootstrap"

import styles from "./ContactHeader.module.css"

const ContactHeader = () => (
  <>
    <h1 className={styles.h1}>Contact us</h1>
    <Row className="mb-5 text-center">
      <Col className={styles.leftCol} md="6">
        <a
          href="mailto:general@simplify-lgp.tech"
          target="_blank"
          className={styles.info}
        >
          general@simplify-lgp.tech
        </a>
      </Col>
      <Col className={[styles.rightCol, styles.infoCol].join(" ")} md="6">
        <a href="tel:+351 910 651 413" className={styles.info}>
          +351 910 651 413
        </a>
      </Col>
    </Row>
  </>
)

export default ContactHeader

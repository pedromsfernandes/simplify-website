import React from "react"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"

import styles from "./Product.module.css"

const ProductAbout = ({ name, image, about }) => (
  <Container className={styles.aboutContainer}>
    <h1 className={styles.h1}>{name}</h1>
    <Row>
      <Col md="7">
        <Img fluid={image} alt={name} className={styles.image} />
      </Col>
      <Col md="5" style={{ alignSelf: "flex-end" }}>
        <p className={styles.about}>{about}</p>
      </Col>
    </Row>
  </Container>
)

export default ProductAbout

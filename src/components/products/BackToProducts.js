import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"

import styles from "./Product.module.css"

import LeftArrow from "../../images/svg/left_arrow.inline.svg"

const BackToProducts = () => (
  <Container className="mb-4">
    <Link to="/products" className={styles.backArrow}>
      <LeftArrow />
      <span>Back to products list</span>
    </Link>
  </Container>
)

export default BackToProducts

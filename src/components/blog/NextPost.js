import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"

import styles from "./blog.module.css"

import ArrowRight from "../../images/svg/arrow-right.svg"

const NextPost = ({ link }) => (
  <Container className="mb-4">
    <Link to={link} className={styles.arrow}>
      <span>Next post</span>
      <ArrowRight />
    </Link>
  </Container>
)

export default NextPost

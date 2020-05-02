import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"

import styles from "./blog.module.css"

import ArrowRight from "../../images/svg/right_arrow.inline.svg"

const NextPost = ({ link }) => (
  <Container>
    <Link to={link} className={[styles.arrow, styles.arrowRight].join(" ")}>
      <span>Next post</span>
      <ArrowRight />
    </Link>
  </Container>
)

export default NextPost

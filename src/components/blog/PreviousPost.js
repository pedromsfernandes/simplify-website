import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"

import styles from "./blog.module.css"

import LeftArrow from "../../images/svg/left_arrow_small.inline.svg"

const PreviousPost = ({ link }) => (
  <Container>
    <Link to={link} className={[styles.arrow, styles.arrowLeft].join(" ")}>
      <LeftArrow />
      <span>Previous post</span>
    </Link>
  </Container>
)

export default PreviousPost

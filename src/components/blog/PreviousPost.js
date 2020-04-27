import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"

import styles from "./blog.module.css"

import LeftArrow from "../../images/svg/left_arrow.inline.svg"

const PreviousPost = ({ link }) => (
  <Container className="mb-4">
    <Link to={link} className={styles.arrow}>
      <LeftArrow />
      <span>Previous post</span>
    </Link>
  </Container>
)

export default PreviousPost

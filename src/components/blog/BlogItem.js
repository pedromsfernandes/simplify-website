import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Row, Col } from "react-bootstrap"

import styles from "./blog.module.css"

const BlogItem = ({ title, path, date, author, peek, img }) => (
  <article className={styles.blogItem}>
    <div>
      <Row>
        <Col xs="3">
          {img && (
            <Img
              className={styles.img}
              fixed={img.childImageSharp.fixed}
              alt={title}
            />
          )}
        </Col>
        <Col xs="9">
          <Link to={path} className={styles.blogLink}>
            <h4>{title}</h4>
          </Link>
          <p className={styles.blogInfo}>
            {date} • Written by {author}
          </p>
          <p className={styles.peek}>{peek}</p>
        </Col>
      </Row>
    </div>
    <hr className={styles.separator} />
  </article>
)

export default BlogItem

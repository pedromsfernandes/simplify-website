import React from "react"
import { Link } from "gatsby"

import styles from "./blog.module.css"

const BlogItem = ({ title, path, date, author, peek }) => (
  <article className={styles.blogItem}>
    <Link to={path} className={styles.blogLink}>
      <h4>{title}</h4>
    </Link>
    <p className={styles.blogInfo}>
      {date} • Written by {author}
    </p>
    <p>{peek}</p>
  </article>
)

export default BlogItem

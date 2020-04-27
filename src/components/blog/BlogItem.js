import React from "react"
import { Link } from "gatsby"

const BlogItem = ({ title, path, date, author, peek }) => (
  <article>
    <Link to={path}>
      <h4>{title}</h4>
    </Link>
    <p>
      {date} • Written by {author}
    </p>
    <p>{peek}</p>
  </article>
)

export default BlogItem

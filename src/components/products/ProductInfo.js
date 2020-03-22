import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import styles from "./Product.module.css"

const ProductInfo = ({ info }) =>
  info && (
    <Container className="pb-5">
      <div className={styles.info}>
        <h3 className={styles.h3}>Learn more</h3>
        <div dangerouslySetInnerHTML={{ __html: info }}></div>
      </div>
    </Container>
  )

export default ProductInfo

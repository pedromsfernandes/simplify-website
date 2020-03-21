import React from "react"
import { Carousel, Container } from "react-bootstrap"
import Img from "gatsby-image"

import styles from "./Product.module.css"

const ProductImages = ({ images }) => {
  return (
    <Container className={styles.container}>
      <Carousel className={styles.carousel}>
        {images.map(({ image }, i) => (
          <Carousel.Item key={i}>
            <Img
              className="d-block w-100"
              fluid={image.childImageSharp.fluid}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default ProductImages

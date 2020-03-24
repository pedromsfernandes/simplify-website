import React from "react"
import { Carousel, Container } from "react-bootstrap"
import Img from "gatsby-image"

import styles from "./Product.module.css"

const ProductImages = ({ images }) =>
  images && (
    <Container className={styles.carouselContainer}>
      <Carousel className={styles.carousel}>
        {images.map(({ image }, i) => (
          <Carousel.Item key={i} className={styles.carouselItem}>
            <Img
              className="d-block w-100"
              fluid={image.childImageSharp.fluid}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )

export default ProductImages

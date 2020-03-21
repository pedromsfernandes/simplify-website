import React from "react"

import Container from "react-bootstrap/Container"
import { Row, Col } from "react-bootstrap"

import styles from "../styles/products.module.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProductCard from "../components/products/ProductCard"
import data from "../data/productsInformation"

const ProductsPage = () => (
  <Layout>
    <div className={styles.page}>
      <Container>
        <SEO title="Products" />
        <h1 className="text-center pt-5">Our Products</h1>
        <Row className="text-center">
          <Col md="6" className="pt-3">
            <ProductCard
              name={data[0].name}
              description={data[0].description}
              img={data[0].image}
            />
          </Col>
          <Col md="6" className="pt-3">
            <ProductCard
              name={data[1].name}
              description={data[1].description}
              img={data[1].image}
            />
          </Col>
        </Row>
        <Row className="text-center">
          <Col md="6" className="pt-3">
            <ProductCard
              name={data[2].name}
              description={data[2].description}
              img={data[2].image}
            />
          </Col>
          <Col md="6" className="pt-3">
            <ProductCard
              name={data[3].name}
              description={data[3].description}
              img={data[3].image}
            />
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default ProductsPage

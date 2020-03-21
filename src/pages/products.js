import React from "react"

import Container from "react-bootstrap/Container"
import { Row, Col } from "react-bootstrap"

import styles from "../styles/products.module.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import data from "../data/productsInformation"

import PlaceholderImg from "../images/placeholder.png"

const ProductsPage = () => (
  <Layout>
    <div className={styles.page}>
      <Container>
        <SEO title="Products" />
        <h1 className="main-title text-center pt-5">Our Products</h1>
        <Row className="text-center">
          <Col md="6" className="pt-3">
            <div class="product-card">
              <img src={PlaceholderImg} alt="" />
              <p className="title text-left pt-1">{data[0].name}</p>
              <p className="text-left">{data[0].description}</p>
            </div>
          </Col>
          <Col md="6" className="pt-3">
            <div class="product-card">
              <img src={PlaceholderImg} alt="" />
              <p className="title text-left pt-1">{data[1].name}</p>
              <p className="text-left">{data[1].description}</p>
            </div>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md="6" className="pt-3">
            <div class="product-card">
              <img src={PlaceholderImg} alt="" />
              <p className="title text-left pt-1">{data[2].name}</p>
              <p className="text-left">{data[2].description}</p>
            </div>
          </Col>
          <Col md="6" className="pt-3">
            <div class="product-card">
              <img src={PlaceholderImg} alt="" />
              <p className="title text-left pt-1">{data[3].name}</p>
              <p className="text-left">{data[3].description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default ProductsPage

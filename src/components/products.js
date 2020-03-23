import React from "react"
import { Link } from "gatsby"

import Container from "react-bootstrap/Container"
import { Row, Col } from "react-bootstrap"

import styles from "../styles/products.module.css"

import SEO from "../components/seo"

import data from "../data/productsInformation"

import PlaceholderImg from "../images/placeholder.png"

const Products = () => (
  <div className={styles.page}>
    <Container>
      <SEO title="Products" />
      <h1 className="main-title text-center pt-5">Our Products</h1>
      <Row className="text-center">
        <Col md="6" className="pt-3">
          <div class="product-card">
            <Link to="/products/tasker">
              <img src={PlaceholderImg} alt={data[0].name} />
              <p className="title text-left pt-1">{data[0].name}</p>
              <p className="text-left">{data[0].description}</p>
            </Link>
          </div>
        </Col>
        <Col md="6" className="pt-3">
          <div class="product-card">
            <Link to="/products/seats">
              <img src={PlaceholderImg} alt={data[1].name} />
              <p className="title text-left pt-1">{data[1].name}</p>
              <p className="text-left">{data[1].description}</p>
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="text-center">
        <Col md="6" className="pt-3">
          <div class="product-card">
            <Link to="/products/environ">
              <img src={PlaceholderImg} alt={data[2].name} />
              <p className="title text-left pt-1">{data[2].name}</p>
              <p className="text-left">{data[2].description}</p>
            </Link>
          </div>
        </Col>
        <Col md="6" className="pt-3">
          <div class="product-card">
            <Link to="/products/neuropal">
              <img src={PlaceholderImg} alt={data[3].name} />
              <p className="title text-left pt-1">{data[3].name}</p>
              <p className="text-left">{data[3].description}</p>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Products

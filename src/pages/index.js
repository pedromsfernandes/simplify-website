import React from "react"
import { Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroArt from "../images/hero-art.png"
import PlaceholderImg from "../images/placeholder.png"
import VacImg from "../images/vac1.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <Container>
        <Row>
          <Col>
            <h1>
              Simplify your
              <br />
              projects for
              <br />
              better business
            </h1>
            <p>
              We are a multidisciplinary company that can help you to find a
              quick and easy way to solve any burden of your everyday tasks
              using technology and multimedia.
            </p>
          </Col>
          <Col xs={4}>
            <img className="hero-art" src={HeroArt} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="products">
      <Container>
        <h1>Our Products</h1>
        <Row>
          <Col>
            <div class="product-card">
              <img src={PlaceholderImg} alt="" />
              <p className="title">Name of the product</p>
              <p>Description of the product</p>
            </div>
          </Col>
          <Col>
            <div class="product-card">
              <img src={PlaceholderImg} alt="" />
              <p className="title">Name of the product</p>
              <p>Description of the product</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div class="product-card">
              <img src={PlaceholderImg} alt="" />
              <p className="title">Name of the product</p>
              <p>Description of the product</p>
            </div>
          </Col>
          <Col>
            <div class="product-card">
              <img src={PlaceholderImg} alt="" />
              <p className="title">Name of the product</p>
              <p>Description of the product</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="about-us">
      <Container>
        <h1>About the company</h1>
        <p>
          Simplify is a multidisciplinary creative company at the intersection
          of multimidia, design and technology. Born from a masters disicpline
          from the University of Porto called Project Management Laboratory,
          Simplify currently have x collaborators and x active projects.
        </p>
        <h3>Our clients</h3>
        <Row>
          <Col>
            <img src={VacImg} alt="" />
          </Col>
          <Col>
            <img src={VacImg} alt="" />
          </Col>
          <Col>
            <img src={VacImg} alt="" />
          </Col>
          <Col>
            <img src={VacImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="principles">
      <Container>
        <Row>
          <Col>
            <h1>Our Core Principles</h1>
          </Col>
          <Col>
            <h4>Our vision is</h4>
            <p>To make information more easily accessible.</p>
          </Col>
          <Col>
            <h4>Our mission is</h4>
            <p>
              To help remove the burden of everyday tasks and promote a better
              understanding on unapparent topics.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="about-team">
      <Container>
        <h1>About Our Team</h1>
        <p>
          Simplify team is multidisciplinary, composed by students from the
          Multimedia masters, x master and y masters from the University of
          Porto in Portugal.
        </p>
        <p>
          <Link to="/team">Meet our team</Link>
        </p>
      </Container>
    </section>
  </Layout>
)

export default IndexPage

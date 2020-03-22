import React from "react"
import { Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroArt from "../images/hero-art.png"
import PlaceholderImg from "../images/placeholder.png"
import Vac from "../images/vac1.png"
import Astronauts from "../images/astronauts.png"
import Feup from "../images/feup.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <Container>
        <Row>
          <Col lg={8}>
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
          <Col>
            <div className="hero-art"></div>
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
        <Row>
          <Col>
            <img src={Feup} alt="" />
          </Col>
          <Col>
            <h1>About the company</h1>
            <p>
              Simplify is a multidisciplinary creative company at the
              intersection of multimidia, design and technology. Born from a
              masters discipline from the University of Porto called Project
              Management Laboratory, Simplify currently have 46 collaborators
              and 4 products.
            </p>
          </Col>
        </Row>
        <div className="sponsors">
          <h3>Our clients</h3>
          <Row>
            <Col>
              <img src={Vac} alt="" />
            </Col>
            <Col>
              <img src={Vac} alt="" />
            </Col>
            <Col>
              <img src={Vac} alt="" />
            </Col>
            <Col>
              <img src={Vac} alt="" />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
    <section className="principles">
      <Container>
        <Row>
          <Col>
            <h1>Our core Principles</h1>
          </Col>
          <Col lg={{ span: 3 }}>
            <div className="number">01</div>
            <h3>Our vision is</h3>
            <p>To make information more easily accessible.</p>
          </Col>
          <Col lg={{ span: 3, offset: 1 }}>
            <div className="number">02</div>
            <h3>Our mission is</h3>
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
        <Row>
          <Col>
            <img src={Astronauts} alt="" />
          </Col>
          <Col>
            <h1>
              About <br /> our team
            </h1>
            <p>
              Simplify team is multidisciplinary, composed by students from the
              Multimedia Masters, Infomatics Masters and Services Masters from
              the University of Porto in Portugal.
            </p>
            <p>
              <Link to="/team">Meet our team members</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default IndexPage

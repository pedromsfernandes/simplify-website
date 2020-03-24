import React from "react"
import { Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Overall from "../components/products/Overall"

import Astronauts from "../images/astronauts.png"
import Feup from "../images/feup.png"
import ArrowRight from "../images/svg/arrow-right.svg"

import Vac from "../images/clients/vac.png"
import CriticalManufacturing from "../images/clients/critical-manufacturing.jpg"
import Natixis from "../images/clients/natixis.png"
import Inova from "../images/clients/inova.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <Container>
        <Row>
          <Col xs={12} lg={8}>
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
          <Col xs={12} lg={4}>
            <div className="hero-art"></div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="products">
      <Container>
        <h1 className="main-title text-center pt-5">Our Products</h1>
        <Overall />
      </Container>
    </section>
    <section className="about-us">
      <Container>
        <Row>
          <Col md={6}>
            <img src={Feup} alt="" />
          </Col>
          <Col>
            <h1>About the company</h1>
            <p>
              Simplify is a multidisciplinary creative company at the
              intersection of multimedia, design and technology. Born from a
              masters discipline from the University of Porto called Project
              Management Laboratory, Simplify currently has 48 collaborators and
              4 products.
            </p>
          </Col>
        </Row>
        <div className="clients">
          <h3>Our clients</h3>
          <Row>
            <Col xs={12} lg={3}>
              <img src={Vac} alt="" />
            </Col>
            <Col xs={12} lg={3}>
              <img src={CriticalManufacturing} alt="" />
            </Col>
            <Col xs={12} lg={3}>
              <img src={Inova} alt="" />
            </Col>
            <Col xs={12} lg={3}>
              <img src={Natixis} alt="" />
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
          <Col md={6}>
            <img src={Astronauts} alt="" />
          </Col>
          <Col>
            <h1>
              About <br /> our team
            </h1>
            <p>
              Simplify team is multidisciplinary, composed by students from the
              Multimedia Masters, Informatics Masters and Services Masters from
              the University of Porto in Portugal.
            </p>
            <p>
              <Link to="/team">
                Meet our team members <ArrowRight className="arrow-right" />
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default IndexPage

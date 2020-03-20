import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import SimplifyLogoWhite from "../images/svg/simplify-logo.svg"

const Header = ({ siteTitle }) => (
  <Container>
    <header>
      <Navbar className="bg-transparent" expand="md">
        <Navbar.Brand>
          <Link to="/">
            <SimplifyLogoWhite />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link as="span">
                <Link to="/">Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as="span">
                <Link to="/projects">Projects</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as="span">
                <Link to="/team">Team</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as="span">
                <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

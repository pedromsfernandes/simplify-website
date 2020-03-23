import React from "react"

import Container from "react-bootstrap/Container"

const Footer = () => (
  <>
    <Container>
      <footer>
        <div>
          <h1>
            Interested in <br /> working together?
          </h1>
          <p>
            <a href="mailto:general@simplify-lgp.tech" target="_blank">
              general@simplify-lgp.tech
            </a>
            &nbsp;
            <a href="tel:+351 910 651 413">+351 910 651 413</a>
          </p>
        </div>
      </footer>
    </Container>
    <div className="icon-credit">
      <Container>www.icons8.com</Container>
    </div>
  </>
)

export default Footer

import React from "react"
import Helmet from "react-helmet"

import styles from "../../styles/media-kit.module.css"
import { Container, Row, Col } from "react-bootstrap"

const Yumpu = () => (
  <>
    <Helmet>
      <script src="https://players.yumpu.com/modules/embed/yp_r_iframe.js"></script>
    </Helmet>
    <Container fluid className={styles.yumpuContainer}>
      <Row className="align-items-center justify-content-center">
        <Col sm="5">
          <div
            className={styles.embedContainer}
            data-page-width="477"
            data-page-height="640"
            id="ypembedcontainer"
          >
            <iframe
              title="guidelines"
              src="https://www.yumpu.com/pt/embed/view/KmjcDaiB3yY8Tzo6"
              frameBorder="0"
              allowFullScreen={true}
              allowtransparency="true"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  </>
)

export default Yumpu

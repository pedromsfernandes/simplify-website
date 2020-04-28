import React from "react"

import { Row, Col } from "react-bootstrap"

import Arrow from "../../images/download-icon.png"

const MediaDownload = () => (
  <Row className="text-center mt-5">
    <Col md="4" className="d-flex mt-3">
      <div className="media-card py-5 px-3">
        <Row className="text-center">
          <Col
            md="3"
            className="d-flex align-items-center justify-content-center pr-0"
          >
            <img src={Arrow} alt="download" />
          </Col>
          <Col md="8">
            <p className="title text-left">Simplify info</p>
            <p className="text text-left">
              Find out more about our story and products.
            </p>
          </Col>
        </Row>
      </div>
    </Col>
    <Col md="4" className="d-flex mt-3">
      <div className="media-card py-5 px-3">
        <Row className="text-center">
          <Col
            md="3"
            className="d-flex align-items-center justify-content-center pr-0"
          >
            <img src={Arrow} alt="download" />
          </Col>
          <Col md="8">
            <p className="title text-left">Brand guidelines</p>
            <p className="text text-left">
              Download our brand guidelines in PDF.
            </p>
          </Col>
        </Row>
      </div>
    </Col>
    <Col md="4" className="d-flex mt-3">
      <div className="media-card py-5 px-3">
        <Row className="text-center">
          <Col
            md="3"
            className="d-flex align-items-center justify-content-center pr-0"
          >
            <img src={Arrow} alt="download" />
          </Col>
          <Col md="8">
            <p className="title text-left">Media assets</p>
            <p className="text text-left">
              Our logo and photos available for download.
            </p>
          </Col>
        </Row>
      </div>
    </Col>
  </Row>
)

export default MediaDownload

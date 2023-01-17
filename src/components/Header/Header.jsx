import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <div className="fHeader">
        <div className="container">
          <Row>
            <Col sm={8}>
              <div className="phone">
                <h5>Telephone Enquiry: 098383889399</h5>
              </div>
            </Col>
            <Col sm={4}>
              <div className="currency">
                <h5>currency: USD </h5>
                <h5>My Account</h5>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

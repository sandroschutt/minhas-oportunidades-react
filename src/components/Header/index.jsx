import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaBars, FaSearch } from "react-icons/fa";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header>
      <nav>
        <Container fluid>
          <Row className="">
            <Col>
              <FaBars className={styles.headerIcon} />
            </Col>
            <Col className={styles.search}>
              <FaSearch className={styles.headerIcon} />
            </Col>
          </Row>
        </Container>
      </nav>
    </header>
  );
}

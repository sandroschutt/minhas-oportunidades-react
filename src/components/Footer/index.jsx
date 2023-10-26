import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaHome, FaChartBar, FaPlus, FaLink } from "react-icons/fa";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col className={styles.footerIcon}>
            <a href="/">
              <FaHome />
            </a>
          </Col>

          <Col className={styles.footerIcon}>
            <a href="/insights">
              <FaChartBar />
            </a>
          </Col>

          <Col className={styles.footerIcon}>
            <a href="/new">
              <FaPlus />
            </a>
          </Col>

          <Col className={styles.footerIcon}>
            <a href="#">
              <FaLink />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

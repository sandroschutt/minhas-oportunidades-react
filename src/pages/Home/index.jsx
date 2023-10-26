import styles from "./Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import {
  FaRegDotCircle,
  FaEdit,
  FaStar,
  FaLink,
  FaTrash,
  FaExternalLinkAlt,
} from "react-icons/fa";

function jobAccordion(nome, descricao, id) {
  return (
    <Accordion.Item eventKey={id} key={id} className={styles.jobItem}>
      <Accordion.Header>
        <span style={{marginRight: "8px"}}><FaRegDotCircle/></span>
        <span>{nome}</span>
      </Accordion.Header>
      <Accordion.Body>
        <Container>
          <div className={styles.descricao}>{descricao}</div>
          <Row className={styles.itemFunctions}>
            <Col>
              <a href="/edit">
                <FaEdit />
              </a>
            </Col>
            <Col>
              <FaStar />
            </Col>
            <Col>
              <a href="#">
                <FaLink />
              </a>
            </Col>
            <Col>
              <FaTrash />
            </Col>
            <Col>
              <a href="/single">
                <FaExternalLinkAlt />
              </a>
            </Col>
          </Row>
        </Container>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default function Home() {
  const data = [
    {
      id: "1",
      nome: "Vaga teste",
      descricao: "Descrição teste",
    },
    {
      id: "2",
      nome: "Vaga teste 2",
      descricao: "Descrição teste 2",
    },
    {
      id: "3",
      nome: "Vaga teste 3",
      descricao: "Descrição teste 3",
    },
  ];

  return (
    <section>
      <Accordion>
        {data.map((d) => jobAccordion(d.nome, d.descricao, d.id))}
      </Accordion>
    </section>
  );
}

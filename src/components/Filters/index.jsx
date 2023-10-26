import styles from "./Filters.module.scss";
import { Container, Row, Col } from "react-bootstrap";

export function Filters() {
  return (
    <div className={styles.filters}>
      <Container>
        <Row>
          <Col xs={4} className={styles.status}>
            <select>
              <option value="" selected disabled hidden>
                Status
              </option>
              <option value="aplicado">Aplicado</option>
              <option value="fit-cultural">Fit cultural</option>
              <option value="entrevista">Entrevista</option>
              <option value="teste">Teste</option>
              <option value="aprovado">Aprovado</option>
              <option value="reprovado">Reprovado</option>
              <option value="encerrado">Encerrado</option>
            </select>
          </Col>
          <Col xs={4} className={styles.categoria}>
            <select>
              <option value="" selected disabled hidden>
                Categoria
              </option>
              <option value="front-end">front-end</option>
              <option value="back-end">back-end</option>
              <option value="fullstack">fullstack</option>
              <option value="wordpress">wordpress</option>
              <option value="web">web</option>
              <option value="outros">outros</option>
            </select>
          </Col>
          <Col xs={4} className={styles.portal}>
            <select>
              <option value="" selected disabled hidden>
                Portal
              </option>
              <option value="linkedin">linkedin</option>
              <option value="gupy">gupy</option>
              <option value="jobs">jobs</option>
              <option value="quikin">quikin</option>
              <option value="e-mail">e-mail</option>
              <option value="outros">outros</option>
            </select>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

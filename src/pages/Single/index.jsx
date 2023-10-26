import styles from "./Single.module.scss";
import { FaCalendar, FaClock, FaLink, FaRegDotCircle } from "react-icons/fa";

export default function Single() {
  return (
    <section>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <strong>Vaga exemplo placeholder</strong>
        </h2>
        <div className={styles.empresa}>
          <span>Empres Exemplo |</span>
          <span>Remoto</span>
          <span>
            <a href="#">
              <FaLink style={{ fontSize: "16px" }} />
              <span>link</span>
            </a>
          </span>
        </div>

        <div className={styles.jobInfo}>
          <div>
            <span className={styles.statusIcon}>
              <FaRegDotCircle />
            </span>
            <span className={styles.status}>aplicado</span>
            <span className={styles.categoria}>categoria</span>
          </div>
          <div>
            <span className={styles.timeIcon}>
              <FaClock />
            </span>
            <span>
              Aplicado em: <span></span>
            </span>
          </div>
          <div>
            <span>
              <FaCalendar />
            </span>
            <span>
              Retorno: <span></span>
            </span>
          </div>
        </div>
      </div>

      <div>
        <h3>Descrição</h3>
        <p></p>
      </div>
    </section>
  );
}

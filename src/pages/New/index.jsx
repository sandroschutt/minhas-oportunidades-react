import { JobForm } from "components/JobForm";
import styles from "./New.module.scss";

export default function New() {
  return (
    <section>
      <h1>Nova vaga</h1>
      <JobForm/>
    </section>
  );
}

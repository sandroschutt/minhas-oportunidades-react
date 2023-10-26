import styles from "./JobForm.module.scss";

export function JobForm() {
  return (
    <form>
      <div>
        <label for="nome">Nome:</label>
        <input type="text" value="" />
      </div>

      <div>
        <label for="empresa">Empresa:</label>
        <input type="text" value="" />
      </div>

      <div>
        <label for="portal">Portal:</label>
        <select>
          <option value="linkedin">linkedin</option>
          <option value="gupy">gupy</option>
          <option value="jobs">jobs</option>
          <option value="trampos">trampos</option>
          <option value="email">email</option>
          <option value="email">outros</option>
        </select>
      </div>

      <div>
        <label for="url">URL:</label>
        <input type="text" value="" />
      </div>

      <div>
        <label for="descricao">Descricao:</label>
        <textarea className={styles.edit}></textarea>
      </div>

      <div>
        <label for="categoria">Categoria:</label>
        <select>
          <option value="front-end">front-end</option>
          <option value="back-end">back-end</option>
          <option value="fullstack">fullstack</option>
          <option value="dev-wordpress">wordpress</option>
          <option value="web">web</option>
          <option value="outros">outros</option>
        </select>
      </div>

      <button type="button">Salvar</button>
    </form>
  );
}

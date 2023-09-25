//criado por Mirelle Dutra
import styles from "./styles.module.css";
const BarraPesquisa = () => {
    return (
      <div className={styles.barrapesquisa}>
        <div className={styles.barrapesquisaChild} />
        <div className={styles.pesquisar}>Pesquisar</div>
        <img className={styles.lupaimgIcon} alt="" src="/lupaImg.png" />
        <div className={styles.barrapesquisaItem} />
      </div>
    );
  };
  
  export default BarraPesquisa;
//criado por Mirelle Dutra
import styles from "../BarraPesquisa/styles.module.css";
const BarraPesquisa = ()=> {


    return (
      <div className={styles.barrapesquisa}>
        <label className={styles.label}htmlFor="buscar">Pesquisar</label>
        <input className={styles.input}type="text" id="buscar"></input>
        <img className={styles.lupaimgIcon} alt="" src="/lupaImg.png" />
        <div className={styles.barra}/>
        <div className={styles.title}>Curso</div>
        <div>
        <div className={styles.barraperfil}/>
        <img className={styles.perfilIcon} alt="" src="/fotoPerfil.png" />

        </div>
      </div>

    );
  };
  export default BarraPesquisa;
  

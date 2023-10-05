//criado por Mirelle Dutra
import styles from "../BarraPesquisa/styles.module.css";
import Link from "next/link";
const BarraPesquisa = ()=> {


    return (
      <div className={styles.barrapesquisa}>
        <div className={styles.labelContainer}>
          <label className={styles.label}htmlFor="buscar"></label>
          <input className={styles.input}type="text" id="buscar" placeholder="Pesquisar"></input>
          <img className={styles.lupaimgIcon} alt="" src="/lupaImg.png" />
        </div>
        
        
        <div className={styles.barra}/>
        
        <div>
            <div className={styles.barraperfil}/>
            <Link href= "/perfiluser">
            <img className={styles.perfilIcon} alt="" src="/fotoPerfil.png" />
            </Link>
        </div>
      </div>

    );
  };
  export default BarraPesquisa;
  

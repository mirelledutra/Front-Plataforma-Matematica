import styles from "./styles.module.css"
import Link from "next/link";
export default function BarraPesquisaCadListCurso(){
    return(
        <div className={styles.barrapesquisa}>
        <div className={styles.labelContainer}>
          <label className={styles.label}htmlFor="buscar"></label>
          <input className={styles.input}type="text" id="buscar" placeholder="Pesquisar"></input>
          <img className={styles.lupaimgIcon} alt="" src="/lupaImg.png" />
        </div>
        
        
        <div className={styles.barra}/>
        <div className={styles.title}>Cursos</div>
        <div>
            <div className={styles.barraperfil}/>
            <Link href= "/perfiluser">
            <img className={styles.perfilIcon} alt="" src="/fotoPerfil.png" />
            </Link>
        </div>
      </div>

    );
  };

  

 

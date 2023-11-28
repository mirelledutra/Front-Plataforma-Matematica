import styles from "./styles.module.css"
import Link from "next/link";
export default function BarraPesquisaCardCurso(){
    return(
        <div className={styles.barrapesquisa}>
           <div className={styles.labelContainer}></div>
        
          <h1 className={styles.title}>Matemática</h1>
          <label className={styles.label}htmlFor="buscar"></label>
          <input className={styles.input}type="text" id="buscar" placeholder="Pesquisar"></input>
          <img className={styles.lupaimgIcon} alt="" src="/lupaImg.png" />
          <img className={styles.perfilIcon} alt="" src="/fotoPerfil.png"/>
          <div className={styles.barraperfil}/>
          <div className={styles.barra}/>

      
          
  
        
      </div>

    );
  };

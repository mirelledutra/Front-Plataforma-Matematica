//feito por Mirelle
import styles from "./styles.module.css";

export default function Formulario(){
    return(
        <div className={styles.formulario}>
           <h3 className={styles.formfiltro}>Filtros</h3>
           <h1>
           <label className={styles.subtitulo}htmlFor="subtitulo">Digite o id, nome do curso, módulo ou conteúdo</label>
           </h1>
           <input className={styles.filtro}></input>
           <button className={styles.filtrarButton}>Filtrar</button>
        </div> 

    );
}


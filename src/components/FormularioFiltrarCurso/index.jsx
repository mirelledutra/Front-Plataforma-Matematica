//feito por Mirelle
import styles from "./styles.module.css";

export default function FormularioFiltrarCurso(){
    return(
        <div className={styles.formulario}>
           <h3 className={styles.formfiltro}>Filtros</h3>
           <h1>
           <label className={styles.subtitulo}htmlFor="subtitulo">Digite o curso, nível, disciplina, aula ou deixe em branco para filtrar todos</label>
           </h1>
           <input className={styles.filtro}></input>
           <button className={styles.filtrarButton}>Filtrar</button>
        </div>

    );
}


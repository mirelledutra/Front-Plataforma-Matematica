import Link from "next/link";
import styles from "./styles.module.css";


export default function CardCurso({ id, image, nivel, disciplina}){
return(

    <div>
        <h2 className={styles.cardTitulo}>Curso - Todos - { nivel }</h2>
        <div className={styles.card}>
         <Link href={`/cursos/${id}`}>
            <div>
                <img className={styles.imagelogo} src ="/logoCardCurso.png" alt=""/>
            </div>
            <div>
                <div className={styles.disciplina}>Disciplina: {disciplina}</div>
                <div className={styles.nivel}>Nivel: {nivel}</div>
            </div>     
            <img className={styles.imagemcard} src="/imgCardCurso.png"/>
            <div>
                <img className={styles.icone} src ="/advance.png"/>
            </div>
       
        </Link>
        </div> 
    </div>
   
)
}
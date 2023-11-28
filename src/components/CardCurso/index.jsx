import Link from "next/link";
import styles from "./styles.module.css";


export default function CardCurso({ id, image, tipo, nomeCurso}){
return(

    <div>

        <h2 className={styles.cardTitulo}>Curso - Todos - { tipo }</h2>
        <div className={styles.card}>
         <Link href={`/cursos/${id}`}>
            <div>
                <img className={styles.imagelogo} src ="/logoCardCurso.png" alt=""/>
            </div>
            <div>
                <div className={styles.nomeCursourso}>Curso: {nomeCurso}</div>
                <div className={styles.tipo}>Tipo: {tipo}</div>
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
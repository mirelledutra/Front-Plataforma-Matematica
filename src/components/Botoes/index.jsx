import styles from "./styles.module.css"
import Link from "next/link"
export default function BotoesCadListCurso(){
    return(
    <div className={styles.buttonContainer}> 
        <Link href="/cadastrarCurso">
        <button className={styles.cadastrarCursoButton}>
            <img className={styles.buttonIcon} src="/add.png" alt="" />
            Cadastrar Curso
        </button>
        </Link>
        <Link href="/cadastrarDisciplina">
        <button className={styles.cadastrarDisciplinaButton}>
            <img className={styles.buttonIcon1} src="/add.png" alt="" />
            Cadastrar Disciplina
        </button>
        </Link>
        <Link href="/CadastrarAula">
        <button className={styles.cadastrarAulaButton}>
            <img className={styles.buttonIcon2} src="/add.png" alt="" />
            Cadastrar Aula
        </button>
        </Link>
     </div>


    )
 }
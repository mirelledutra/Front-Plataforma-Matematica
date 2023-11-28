import BarraPesquisa from "@/components/BarraPesquisa";
import styles from "./styles.module.css";
import Link from "next/link";
import Menu from "@/components/SideBar";
import BarraPerfil from "@/components/BarraPerfil";

export default function Inicio() {
  return (
  <>
    <div className={styles.container}>
      <Menu />
        <div className={styles.t}>
          <div className={styles.cadastrarlistarcurso}>
            <label className={styles.titulo}>Bem-vindo à plataforma de ensino de matemática!</label>
          </div>
            <div>
              <BarraPesquisa />
              <BarraPerfil />
              <h1 className={styles.inicio}>Início</h1>
              <p className={styles.subtitulo}>Desvende o poder da matemática em sua jornada educativa.</p>
              <Link className={styles.botao} href="/Cursos">Explorar Cursos</Link>
            </div>
            <div className={styles.imagemblog}>
              <img src="/blog.png" alt="imagem tela inicio" />
            </div>
            <div className={styles.boxContainer}>
              <img className={styles.box1} src="/Group 356.png" />
              <img className={styles.box2} src="/Group 357.png" />
              <img className={styles.box3} src="/Group 358.png" />
            </div>
        </div>
        

    </div>

    </>
    
 
  )
}


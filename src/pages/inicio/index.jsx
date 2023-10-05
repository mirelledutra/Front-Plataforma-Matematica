import BarraPesquisa from "../../components/BarraPesquisa";
import BarraRolagem from "../../components/BarraRolagem";
import MenuLateral from "../../components/MenuLateralAluno";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Inicio() {
  return (
    <div className={styles.cadastrarlistarcurso}>
      <BarraPesquisa />
      
      <div className={styles.barrarolagem}>
        <BarraRolagem />
        <div className={styles.barrarolagemChild} /></div>
      <MenuLateral />
      <h1 className={styles.inicio}>Início</h1>
      <h2 className={styles.titulo}>Bem-vindo à plataforma de ensino de matemática!</h2>
      <p className={styles.subtitulo}>Desvende o poder da matemática em sua jornada educativa.</p>
      <Link className={styles.botao} href="/curso">Explorar Cursos</Link>
      <div className={styles.imagemblog}>
       <img src="/blog.png" alt="imagem tela inicio" />
      </div>
      <img className={styles.box1} src="/Group 356.png" />
      <img className={styles.box2} src="/Group 357.png" />
      <img className={styles.box3} src="/Group 358.png" />
    </div>
  );
}


//Auterado por Adriani Gomes
import styles from "./styles.module.css";

export default function MenuLateralAluno()  {
  return (
    <div className={styles.menulateral}>
      <div className={styles.menulateralChild} />
      <a href= "/">
      <img className={styles.logoIcon} alt="" src="/logo.png" />
      </a>
      <a href="/" className={styles.botaosair}>
        <div className={styles.sair}>Sair</div>
        <img className={styles.iconSair} alt="" src="/iconSair.png" />
      </a>
      <a href="/curso" className={styles.botaocurso}>
        <img className={styles.bookIcon} alt="" src="/iconBook.png" />
        <div className={styles.curso}>Cursos</div>
        <img className={styles.iconMaior} alt="" src="/iconMaior.png" />
      </a>
      <a href="/inicio" className={styles.botaoinicio}>
         <img className={styles.inicioIcon} alt="" src="/iconHome.png" />
         <div className={styles.inicio}>Início</div>
         <img className={styles.iconMaior1} alt="" src="/iconMaior.png" />
      </a>

      <a href="/perfil" className={styles.botaousuario}>
        <img className={styles.userIcon} alt="" src="/user.png" />
        <div className={styles.user}>Perfil</div>
        <img className={styles.iconMaior2} alt="" src="/iconMaior.png" />
      </a>
      <a href="/meuscursos" className={styles.botaomeuscursos}>
        <img className={styles.iconMc} alt="" src="/mc.png" />
        <div className={styles.user}>Meus Cursos</div>
        <img className={styles.iconMaior2} alt="" src="/iconMaior.png" />
      </a>



    </div>
  );
};


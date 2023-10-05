//criado por Mirelle Dutra
import styles from "./styles.module.css";

const MenuLateral = () => {
  return (
    <div className={styles.menulateral}>
      <div className={styles.menulateralChild} />
      <img className={styles.logoIcon} alt="" src="/logo.png" />
      <div className={styles.botaosair}>
        <div className={styles.sair}>Sair</div>
        <img className={styles.iconSair} alt="" src="/iconSair.png" />
      </div>
      <div className={styles.botaocurso}>
        <img className={styles.bookIcon} alt="" src="/iconBook.png" />
        <div className={styles.curso}>Cursos</div>
        <img className={styles.iconMaior} alt="" src="/iconMaior.png" />
      </div>
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
      <div className={styles.botaomeuscursos}>
        <img className={styles.iconMc} alt="" src="/mc.png" />
        <div className={styles.user}>Meus Cursos</div>
        <img className={styles.iconMaior2} alt="" src="/iconMaior.png" />
      </div>



    </div>
  );
};

export default MenuLateral;

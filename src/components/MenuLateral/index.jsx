//criado por Mirelle Dutra
import styles from "./styles.module.css";
import Link from "next/link";
const MenuLateral = () => {
  return (
    <div className={styles.menulateral}>
      
      <div className={styles.menulateralChild} />
      <Link href = "/">
      <img className={styles.logoIcon} alt="" src="/logo.png" />
      </Link>
      <Link href = "/">
        <div className={styles.botaosair}>
            <div className={styles.sair}>Sair</div>
            <img className={styles.iconSair} alt="" src="/IconSair.png"/>
        </div>
      </Link>
      <Link href = "/curso">
        <div className={styles.botaocurso}>
          <img className={styles.bookIcon} alt="" src="/iconBook.png" />
          <div className={styles.curso}>Curso</div>
          <img className={styles.iconMaior} alt="" src="/iconMaior.png" />
        </div>
      </Link>
      <Link href="/">
        <div className={styles.botaoinicio}>
          <img className={styles.inicioIcon} alt="" src="/iconHome.png" />
          <div className={styles.inicio}>Início</div>
          <img className={styles.iconMaior1} alt="" src="/iconMaior.png" />
        </div>
      </Link>
      <Link href="/usuario">
        <div className={styles.botaousuario}>
          <img className={styles.userIcon} alt="" src="/user.png" />
          <div className={styles.user}>Usuário</div>
          <img className={styles.iconMaior2} alt="" src="/iconMaior.png" />
        </div>
      </Link>
    </div>
  );
};

export default MenuLateral;

//tela criada por Mirelle Dutra --- tela padrão com menu lateral
import BarraPesquisa from "../../components/BarraPesquisa";
import BarraRolagem from "../../components/BarraRolagem";
import MenuLateral from "../../components/MenuLateral";
import styles from "./styles.module.css";

const CadastrarListarCurso = ()=>{
  return (
    <div className={styles.cadastrarlistarcurso}>
      <BarraPesquisa />
      <img className={styles.perfilIcon} alt="" src="/fotoPerfil.png" />
      <div className={styles.barrarolagem}>
        <BarraRolagem />
        <div className={styles.barrarolagemChild} />
      </div>
      <MenuLateral />
    </div>
  );
};

export default CadastrarListarCurso;
//tela criada por Mirelle Dutra --- tela padrão com menu lateral
import BarraPesquisa from "../components/barra-pesquisa";
import BarraRolagem from "../components/barra-rolagem";
import MenuLateral from "../components/menu-lateral";
import styles from "./index.module.css";

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
import CadastroAula from "@/components/CadastroAula";
import Menu from "@/components/SideBar";
import BarraPesquisa from "@/components/BarraPesquisa";
import BarraPerfil from "@/components/BarraPerfil";
import styles from "./styles.module.css"


export default function CadastrarAula() {
  return (
    
    <>
    <div className={styles.container}>
    <Menu />
    <div className={styles.t}>
      <div>
        <label className={styles.titulo}>Cadastrar Aula</label>
          <BarraPesquisa/>
          <BarraPerfil/>
      </div>
      <div>
        <CadastroAula />
      </div>
    </div>

    </div>

  </>
  );
}
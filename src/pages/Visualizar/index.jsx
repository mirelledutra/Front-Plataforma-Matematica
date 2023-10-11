import Conteudo from "@/components/Tabela-Conteudos-aula";
import Rodape from "@/components/Rodape";
import SideBar from "@/components/SideBar";
import styles from './styles.module.css';

export default function SaibaMais() {
  return (
    <div className={styles.pagina}>

      <SideBar className={styles.menulateral} />

      <div className={styles.conteudo}>
        <Conteudo />
      </div>

      <Rodape className={styles.rodape} />
      
    </div>
  );
}

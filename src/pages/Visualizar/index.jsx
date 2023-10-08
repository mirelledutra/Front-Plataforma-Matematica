import Conteudo from "@/components/Tabela-Conteudos-aula";
import Rodape from "@/components/Rodape";
import MenuLateral from "@/components/MenuLateral";
import styles from './styles.module.css';

export default function SaibaMais() {
  return (
    <div className={styles.pagina}>

      <MenuLateral className={styles.menulateral} />

      <div className={styles.conteudo}>
        <Conteudo />
      </div>

      <Rodape className={styles.rodape} />
      
    </div>
  );
}

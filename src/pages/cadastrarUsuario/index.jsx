import styles from "./styles.module.css"
import CadastroUserAdm from "@/components/CadUserAdm";
import Menu from "@/components/SideBar";
import BarraPesquisa from "@/components/BarraPesquisa";
import BarraPerfil from "@/components/BarraPerfil";
import GridUsuario from "@/components/GridUsuario";


export default function CadastrarUserAdm(){
  return(

    <>
   
    <div className={styles.container}>
        <Menu />
            <div className={styles.t}>
                    <div>
                    <label className={styles.titulo}>Cadastrar Usuário</label>
                        <BarraPesquisa/>
                        <BarraPerfil/>
                        <div className={styles.card}>
                        <CadastroUserAdm />
                        <GridUsuario />
                        
                        </div>
                    </div>
            </div>
        </div>

        
    </>
  )
}
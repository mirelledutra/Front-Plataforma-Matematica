import BarraPesquisa from "@/components/BarraPesquisa";
import BarraRolagem from "@/components/BarraRolagem";
import CadastroCurso from "@/components/CadastroCurso";
import Menu from "@/components/SideBar";
import BarraPerfil from "@/components/BarraPerfil";
import axios from "axios";
import styles from "./styles.module.css"
import GridCurso from "@/components/GridCurso";


export default function CadastrarCurso(){
  return(
    <>
    <div className={styles.container}>
    <Menu />
    <div className={styles.t}>
    <BarraPesquisa />
    <BarraPerfil />
    <CadastroCurso />
    <GridCurso />

    </div>
    </div>
  

   

 

   

    
    </>
  )
}
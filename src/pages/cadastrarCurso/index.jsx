import BarraPesquisa from "@/components/BarraPesquisa";
import BarraRolagem from "@/components/BarraRolagem";
import CadastroCurso from "@/components/CadastroCurso";
import GridCadCurso from "@/components/GridCadCurso";
import MenuLateral from "@/components/MenuLateral";
import axios from "axios";


export default function CadastrarCurso(){
  return(
    <>
    <MenuLateral />
    <BarraPesquisa />
    <BarraRolagem />
    <CadastroCurso />
    <GridCadCurso />

   

    
    </>
  )
}
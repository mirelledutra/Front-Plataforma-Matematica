import BarraPesquisa from "@/components/BarraPesquisa"
import CadastroDisciplina from "@/components/CadastroDisciplina"
import MenuLateral from "@/components/MenuLateral"
import BarraRolagem from "@/components/BarraRolagem"
import GridCadDisciplina from "@/components/GridCadDisciplina"


 export default function CadastrarDisciplina(){
    return(
    <>
    <BarraPesquisa />
    <BarraRolagem />
    <MenuLateral />
    <CadastroDisciplina />
    <GridCadDisciplina />

    </>
    )
}

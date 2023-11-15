import BarraPesquisa from "@/components/BarraPesquisa";
import CadastroDisciplina from "@/components/CadastroDisciplina";
import MenuLateral from "@/components/MenuLateral";
import BarraRolagem from "@/components/BarraRolagem";
import GridCadDisciplina from "@/components/GridCadDisciplina";
import useSWR from "swr";
import Paginacao from "@/components/Paginacao";
import axiosInstance from "@/util/fetch";

export default function CadastrarDisciplina() {
  const { data, mutate, isLoading, error } = useSWR(`/disciplinas`, axiosInstance);

  if (isLoading) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Um erro ocorreu</p>
      </div>
    );
  }

  const { docs, ...paginationProps } = data.data;

  return (
    <>
      <BarraPesquisa />
      <BarraRolagem />
      <MenuLateral />
      <CadastroDisciplina onAdd={mutate}/>
      <GridCadDisciplina />
      <Paginacao {...paginationProps} />
    </>
  );
}

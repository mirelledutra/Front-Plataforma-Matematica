//tela criada por Mirelle Dutra --- tela padrão com menu lateral
import React from 'react';

import BarraRolagem from '@/components/BarraRolagem';
import MenuLateral from '@/components/MenuLateral';
import BotoesCadListCurso from '@/components/Botoes';
import BarraPesquisaCadListCurso from '@/components/BarraPesquisaCadListCurso';
import FormularioFiltrarCurso from '@/components/FormularioFiltrarCurso';
import GridCurso from '@/components/GridCurso';




export default function CadastrarListarCurso(){




  return (
    
  <>
      <BarraPesquisaCadListCurso />
      <BarraRolagem />
      <MenuLateral />
      <BotoesCadListCurso/>
      <FormularioFiltrarCurso />
      <GridCurso />

  </>  
  );
};


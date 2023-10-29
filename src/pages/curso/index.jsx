//tela criada por Mirelle Dutra --- tela padrão com menu lateral
import Link from 'next/link';
import React from 'react';

import BarraRolagem from '@/components/BarraRolagem';
import BotoesCadListCurso from '@/components/Botoes';
import BarraPesquisaCadListCurso from '@/components/BarraPesquisaCadListCurso';
import FormularioFiltrarCurso from '@/components/FormularioFiltrarCurso';
import GridCurso from '@/components/GridCurso';
import Menu from '@/components/SideBar/index';
import styles from "./styles.module.css"



export default function CadastrarListarCurso() {




  return (

    <>
    <div className={styles.container}>
      <Menu />  
      
     
      <div className={styles.t}>
      <BarraPesquisaCadListCurso />
     
      <BotoesCadListCurso />
      <FormularioFiltrarCurso />
    
      <GridCurso />
      <BarraRolagem />
      </div>
      
    </div>
    

    </>
  );
};

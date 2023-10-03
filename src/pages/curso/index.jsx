//tela criada por Mirelle Dutra --- tela padrão com menu lateral
import React from 'react';
import BarraPesquisa from "../../components/BarraPesquisa";
import BarraRolagem from "../../components/BarraRolagem";
import MenuLateral from "../../components/MenuLateral";
import styles from "../curso/styles.module.css";
import Formulario from '@/components/Formulario/formulario';
import Grid from '@/components/Grid';

const CadastrarListarCurso = ()=>{
  return (
    <div className={styles.cadastrarlistarcurso}>
      <BarraPesquisa />
      <BarraRolagem />
      <MenuLateral />
      <div className={styles.buttonContainer}>
        <button className={styles.cadastrarCursoButton}>
          <img className={styles.buttonIcon} src="/add.png" alt="" />
          Cadastrar Curso
        </button>
        <button className={styles.cadastrarAulaButton}>
          <img classNam={styles.buttonIcon1} src="/add.png" alt="" />
          Cadastrar Aula
        </button>
      </div>
      <Formulario />
      <Grid />
    </div>
    

  );
};

export default CadastrarListarCurso;
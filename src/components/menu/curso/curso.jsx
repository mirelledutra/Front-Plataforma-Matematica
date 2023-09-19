import React from 'react'
import { useCallback } from "react";
import styles from "./curso.module.css";

const ContainerCadCurso = () => {
  const onBotaoSalvarClick = useCallback(() => {
    // Please sync "Listar Cursos adm" to the project
  }, []);

  return (
    <div className={styles.component11Parent}>
      <div className={styles.component11}>
        <div className={styles.component11Child} />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.cancelar}>Cancelar</div>
        </div>
        <div className={styles.component11Item} />
        <div className={styles.nomeDoProfesor}>Módulo</div>
        <div className={styles.marcosMatos}>1º Ano</div>
        <div className={styles.component11Inner} />
        <div className={styles.nomeDaDisciplina}>Nome do Curso</div>
        <div className={styles.matemtica}>Ensino Médio</div>
        <div className={styles.rectangleDiv} />
        <div className={styles.ativo}>Ativo</div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <div className={styles.salvar}>Salvar</div>
        </div>
      </div>
      <textarea className={styles.componentChild} maxLength={40} />
      <div className={styles.professor}>Professor</div>
      <textarea className={styles.componentItem} maxLength={40} />
      <div className={styles.mdulo}>Módulo</div>
      <textarea className={styles.componentInner} />
      <div className={styles.nivel}>Nivel</div>
      <textarea className={styles.rectangleTextarea} maxLength={40} />
      <div className={styles.nomeDoCurso}>Nome do Curso</div>
      <button className={styles.botaocancelar}>
        <div className={styles.groupChild} />
        <div className={styles.cancelar1}>Cancelar</div>
      </button>
      <button className={styles.botaosalvar} onClick={onBotaoSalvarClick}>
        <div className={styles.groupChild} />
        <div className={styles.salvar1}>Salvar</div>
      </button>
      <input
        className={styles.rectangleInput}
        readOnly={true}
        type="checkbox"
      />
      <div className={styles.ativo1}>Ativo</div>
      <textarea className={styles.componentChild1} maxLength={40} />
      <div className={styles.disciplina}>Disciplina</div>
    </div>
  );
};

export default ContainerCadCurso;

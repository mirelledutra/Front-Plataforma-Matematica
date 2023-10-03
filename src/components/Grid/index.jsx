//componente desenvolvido por Mirelle
import React from "react";
import styles from "../Grid/styles.module.css";

const Grid = () => {
    const data =[
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
    // Adicione mais dados conforme necessário
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
  ];

    
  return (
    <>
    <div className={`${styles.gridRow} ${styles.firstRow}`}>
        <div className={styles.gridCellLabel}>Data</div>
        <div className={styles.gridCellLabel}>ID</div>
        <div className={styles.gridCellLabel}>Curso</div>
        <div className={styles.gridCellLabel}>Módulo</div>
        <div className={styles.gridCellLabel}>Disciplina</div>
        <div className={styles.gridCellLabel}>Ações</div>
            <img className={styles.iconEye} alt="" src="/eye.svg" />
            <img className={styles.iconEdit} alt="" src="/edit.svg" />
            <img className={styles.iconTrash} alt="" src="/trash.svg" />
    </div>

    {data.map((item, index)=>(
        <div className={`${styles.gridRow} ${index % 2 === 0 ? styles.evenRow : styles.oddRow}`} key={index}>
            <div className={styles.gridCell}>{item.date}</div>
            <div className={styles.gridCell}>{item.id}</div>
            <div className={styles.gridCell}>{item.curso}</div>
            <div className={styles.gridCell}>{item.modulo}</div>
            <div className={styles.gridCell}>{item.disciplina}</div>
            <div className={styles.gridCell}>
            </div>
        </div>
    ))}
    
    
    </>
  );
};

export default Grid;

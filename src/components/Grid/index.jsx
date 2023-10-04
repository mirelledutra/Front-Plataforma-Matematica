//componente desenvolvido por Mirelle

import React, { useEffect, useState } from "react";
import styles from "../Grid/styles.module.css";
import { setRevalidateHeaders } from "next/dist/server/send-payload";

const Grid = () => {
    const [iconVisible, setIconVisible]=useState(false);
    //const[data, setData] = useState([]);
    const data =[
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
    // Adicione mais dados conforme necessário
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
        { date: "09/05/2021", id: 1010, curso: "Ensino Médio", modulo: "1º Ano", disciplina: "Geometria Plana" },
    ];

    useEffect(()=>{
       // const fetchData = async()=>{
            //const response = await fetch("sua api aqui");
           // const result = await response.json();
            //setData(result);
     //   };
        //fetchData();
    }, []);

    return (
        <>
            <div className={`${styles.gridRow} ${styles.firstRow}`}>
                <div className={styles.gridCellLabel}>Data</div>
                <div className={styles.gridCellLabel}>ID</div>
                <div className={styles.gridCellLabel}>Curso</div>
                <div className={styles.gridCellLabel}>Módulo</div>
                <div className={styles.gridCellLabel}>Disciplina</div>
                <div className={styles.gridCellLabel}>Ações</div>
                  
            </div>
            
    {data.map((item, index)=>(
        <div className={`${styles.gridRow} ${index % 2 === 0 ? styles.evenRow : styles.oddRow}`} key={index}>
            <div className={styles.gridCell}>{item.date}</div>
            <div className={styles.gridCell}>{item.id}</div>
            <div className={styles.gridCell}>{item.curso}</div>
            <div className={styles.gridCell}>{item.modulo}</div>
            <div className={styles.gridCell}>{item.disciplina}</div>
            <div className={styles.gridCell}>
                <div className={styles.iconContainer}>
                    <img className={styles.iconEye} alt="Eye Icon" src="/eye.svg" />
                    <img className={styles.iconEdit} alt="Edit Icon" src="/edit.svg" />
                    <img className={styles.iconTrash} alt="Trash Icon" src="/trash.svg" />

                </div>
            </div>
        </div>
    ))}
    
    
    </>
  );
};

export default Grid;

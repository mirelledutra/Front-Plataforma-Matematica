//componente desenvolvido por Mirelle

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css"

import axios from "axios";

export default function GridCurso (){
    const [iconVisible, setIconVisible]=useState(false);
    //const[data, setData] = useState([]);

    const [curso, setCurso] = useState([]);

    useEffect(()=>{
      axios.get('http://localhost:3002/curso')
        .then(resultado => {
            console.log(resultado)
            setCurso(resultado.data.docs)
        })
        .catch(e=> console.log(e));
    }, []);

    return (
        <>
            <div className={`${styles.gridRow} ${styles.firstRow}`}>
                <div className={styles.gridCellLabel}>Nivel</div>
                <div className={styles.gridCellLabel}>ID</div>
                <div className={styles.gridCellLabel}>Curso</div>
                <div className={styles.gridCellLabel}>Módulo</div>
                <div className={styles.gridCellLabel}>Disciplina</div>
                <div className={styles.gridCellLabel}>Ações</div>
                  
            </div>
            
    {curso.map((item, index)=>(
        <div className={`${styles.gridRow} ${index % 2 === 0 ? styles.evenRow : styles.oddRow}`} key={index}>
            <div className={styles.gridCell}>{item.nivel}</div>
            <div className={styles.gridCell}>{item._id}</div>
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



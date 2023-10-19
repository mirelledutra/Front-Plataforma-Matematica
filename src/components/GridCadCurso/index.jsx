import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
export default function GridCadCurso(){
    const [iconVisible, setIconVisible]=useState(false);
 //   const [curso, setCurso] = useState([]);
    useEffect(()=>{
     //   axios.get('http://localhost:3002/curso')
       // .then(resultado => {
       //     console.log(resultado)
         //   setCurso(resultado.data.docs)
         //   })
          //  .catch(e=> console.log(e));
        }, []);
    const data =[
        {  curso: "1º Ano", nivel: "Ensino Médio", status: "Ativo"},
        {  curso: "2º Ano", nivel: "Ensino Médio", status: "Ativo"},
        {  curso: "3º Ano", nivel: "Ensino Médio", status: "Ativo"},
        {  curso: "ADS", nivel: "Superior", status: "Ativo"},
        {  curso: "Licenciatura", nivel: "Superior", status: "Ativo"},
       
    ];

    useEffect(()=>{
   
    }, []);

    return (
        <>
            <div className={`${styles.gridRow} ${styles.firstRow}`}>
                <div className={styles.gridCellLabel}>Curso</div>
                <div className={styles.gridCellLabel}>Nível</div>
                <div className={styles.gridCellLabel}>Status</div>
              
                <div className={styles.gridCellLabel}>Ações</div>
                  
            </div>
            
    {data.map((item, index)=>(
        <div className={`${styles.gridRow} ${index % 2 === 0 ? styles.evenRow : styles.oddRow}`} key={index}>
            <div className={styles.gridCell}>{item.curso}</div>
            <div className={styles.gridCell}>{item.nivel}</div>
            <div className={styles.gridCell}>{item.status}</div>
           
            <div className={styles.gridCell}>
                <div className={styles.iconContainer}>
                    
                    <img className={styles.iconEdit} alt="Edit Icon" src="/edit.svg" />
                    <img className={styles.iconTrash} alt="Trash Icon" src="/trash.svg" />

                </div>
            </div>
        </div>
    ))}
    
    
    </>
  );
};

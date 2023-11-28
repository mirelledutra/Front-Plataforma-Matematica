import { useEffect } from "react";
import axios from "axios"
import styles from "./styles.module.css"
import { useState } from "react";


export default function GridCadDisciplina(data){
   const [iconVisible, setIconVisible] = useState(false);

    return (
        <>
            <div className={`${styles.gridRow} ${styles.firstRow}`}>
                <div className={styles.gridCellLabel}>Disciplina</div>
               
                <div className={styles.gridCellLabel}>Status</div>
              
                <div className={styles.gridCellLabel}>Ações</div>
                  
            </div>
            
    {data.map((item, index)=>(
        <div className={`${styles.gridRow} ${index % 2 === 0 ? styles.evenRow : styles.oddRow}`} key={index}>
            <div className={styles.gridCell}>{item.disciplina}</div>
           
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
}

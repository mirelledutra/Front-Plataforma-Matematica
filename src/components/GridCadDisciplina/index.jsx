import { useEffect } from "react";
import styles from "./styles.module.css"
import { useState } from "react";


export default function GridCadDisciplina(){
   const [iconVisible, setIconVisible] = useState(false);
  // const [disciplina, setDisciplina] = useState([]);
    useEffect(()=>{
     //   axios.get('http://localhost:3002/disciplina')
       // .then(resultado => {
       //     console.log(resultado)
         //   setDisciplina(resultado.data.docs)
         //   })
          //  .catch(e=> console.log(e));
        }, []);
    const data =[
        {  disciplina: "Geometria Plana", status: "Ativo"},
        {  disciplina: "Estatística",status: "Ativo"},
        {  disciplina: "Gráficos", status: "Ativo"},
        {  disciplina: "Função Afim", status: "Ativo"},
        
       
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

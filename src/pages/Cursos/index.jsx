import React from "react";
import styles from "../../pages/Cursos/styles.module.css"
import CardCurso from "@/components/CardCurso";
import ListCardCursos from "@/components/ListCardCursos";
import Menu from '@/components/SideBar/index';
import BarraPesquisaCardCurso from "@/components/BarraPesquisaCardCurso";



export default function TodosCursos(){
    return(
        <>
   
        <div className={styles.container}>
        <Menu />
            <div>
         
                    <div>
                    <BarraPesquisaCardCurso/>
                    <div className={styles.card}>
                        <CardCurso />
                        <ListCardCursos />
                    </div>
                

                    </div>
             
          
              
            </div>
        </div>
      
      




  

        
        
        </>
    )
}
import React from "react";
import styles from "../../pages/Cursos/styles.module.css"
import CardCurso from "@/components/CardCurso";
import ListCardCursos from "@/components/ListCardCursos";
import Menu from '@/components/SideBar/index';
import BarraPesquisa from "@/components/BarraPesquisa";
import BarraPerfil from "@/components/BarraPerfil";



export default function TodosCursos({area}){
    return(
        <>
   
        <div className={styles.container}>
        <Menu />
            <div className={styles.t}>
                    <div>
                    <label className={styles.titulo}>{area}Área</label>
                        <BarraPesquisa/>
                        <BarraPerfil/>
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
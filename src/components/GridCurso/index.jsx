//componente desenvolvido por Mirelle
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import useSWR from "swr";
import axiosInstance from "@/util/fetch";
import Paginacao from "../Paginacao";
import { useRouter } from "next/router";

export default function GridCurso() {
  const [iconVisible, setIconVisible] = useState(false);
  const router = useRouter();
  const { data, isLoading, error } = useSWR(
    `/cursos?page=${router.query?.page ?? 1}&perPage=5`,
    axiosInstance
  );

  if(isLoading){
    return <div>
        <p>Carregando...</p>
    </div>
  }

  if(error){
    return <div>
        <p>Um erro ocorreu</p>
    </div>

  }
debugger
  const { docs, ...paginationProps } = data.data;

  return (
    <>
      <div className={`${styles.gridRow} ${styles.firstRow}`}>
        <div className={styles.gridCellLabelId}>ID</div>
        <div className={styles.gridCellLabelTipo}>Tipo</div>
        <div className={styles.gridCellLabelCurso}>Curso</div>
        <div className={styles.gridCellLabelArea}>Área</div>
        <div className={styles.gridCellLabelAcoes}>Ações</div>
      </div>

      {docs.map((doc, index) => (
        <div
          className={`${styles.gridRow} ${
            index % 2 === 0 ? styles.evenRow : styles.oddRow
          }`}
          key={index}
        >
          <div className={styles.gridCell}>{doc._id}</div>
          <div className={styles.gridCell}>{doc.nivel}</div>
          <div className={styles.gridCell}>{doc.curso}</div>
          <div className={styles.gridCell}>{doc.disciplina}</div>
          <div className={styles.gridCell}>{doc.aula}</div>
          <div className={styles.gridCell}>
            <div className={styles.iconContainer}>
             
              <img
                className={styles.iconEdit}
                alt="Edit Icon"
                src="/edit.svg"
              />
              <img
                className={styles.iconTrash}
                alt="Trash Icon"
                src="/trash.svg"
              />
            </div>
          </div>
        </div>
      ))}

      <Paginacao {...paginationProps} />
    </>
  );
}

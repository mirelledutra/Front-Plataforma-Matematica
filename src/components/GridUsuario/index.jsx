//componente desenvolvido por Mirelle
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css"
import useSWR from "swr";
import axiosInstance from "@/util/fetch";
import Paginacao from "../Paginacao";
import { useRouter } from "next/router";

export default function GridUsuario() {
  const [iconVisible, setIconVisible] = useState(false);
  const router = useRouter();


  async function deletar(_id){
   let apagar= window.confirm('Deseja apagar?')


   if(apagar == true){
    const res = await axiosInstance.delete(`/usuarios/${_id}`)
    window.location.reload()
   }
  }

  const { data, isLoading, error } = useSWR(
    `/usuarios?page=${router.query?.page ?? 1}&perPage=5`,
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

  const { docs, ...paginationProps } = data.data;

  return (
    <>
      <div className={`${styles.gridRow} ${styles.firstRow}`}>
        <div className={styles.gridCellLabel}>ID</div>
        <div className={styles.gridCellLabel}>Nome</div>
        <div className={styles.gridCellLabel}>E-mail</div>
        <div className={styles.gridCellLabel}>Telefone</div>
        <div className={styles.gridCellLabel}>Ações</div>
      </div>

      {docs.map((doc, index) => (
        <div
          className={`${styles.gridRow} ${
            index % 2 === 0 ? styles.evenRow : styles.oddRow
          }`}
          key={index}
        >
          <div className={styles.gridCell}>{doc._id}</div>
          <div className={styles.gridCell}>{doc.nome}</div>
          <div className={styles.gridCell}>{doc.email}</div>
          <div className={styles.gridCell}>{doc.telefone}</div>
          <div className={styles.gridCell}>
            <div className={styles.iconContainer}>
                         
              <img
                className={styles.iconEdit}
                alt="Edit Icon"
                src="/edit.svg"
                onClick={()=> router.push(`/atualizarUser/${doc._id}`)}

              />
              <img
                className={styles.iconTrash}
                alt="Trash Icon"
                src="/trash.svg"
                onClick={()=> deletar(doc._id)}
              />
            </div>
          </div>
        </div>
      ))}

      <Paginacao {...paginationProps} />
    </>
  );
}

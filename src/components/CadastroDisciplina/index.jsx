import axios from "axios";
import React, { useState } from "react";
import styles from "./styles.module.css";
import axiosInstance from "@/util/fetch";
export default function CadastroDisciplina({onAdd}) {
  const [disciplina, setDisciplina] = useState({
    nome: "",
    descricao: "",
    codigo: "",
    cargaHoraria: "",
    professor: "",
  });

  function cadastroDisciplina(e) {
    e.preventDefault();

    axiosInstance
      .post("/disciplinas", disciplina)
      .then((resultado) => {
        onAdd()
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <div>
      <h1 className={styles.titulo}>Cadastrar Disciplina</h1>
      <form onSubmit={cadastroDisciplina} className={styles.formulario}>
        <div className={styles.inputGroup}>
          <label htmlFor="nome">Nome</label>
          <input
            className={styles.input}
            type="text"
            id="nome"
            value={disciplina.nome}
            onChange={(e) =>
              setDisciplina({ ...disciplina, nome: e.target.value })
            }
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="descricao">Descrição</label>
          <input
            className={styles.input}
            type="text"
            id="descricao"
            value={disciplina.descricao}
            onChange={(e) =>
              setDisciplina({ ...disciplina, descricao: e.target.value })
            }
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="codigo">Código</label>
          <input
            className={styles.input}
            type="text"
            id="codigo"
            value={disciplina.codigo}
            onChange={(e) =>
              setDisciplina({ ...disciplina, codigo: e.target.value })
            }
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="cargaHoraria">Carga Horária</label>
          <input
            className={styles.input}
            type="number"
            id="cargaHoraria"
            value={disciplina.cargaHoraria}
            onChange={(e) =>
              setDisciplina({ ...disciplina, cargaHoraria: e.target.valueAsNumber })
            }
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="professor">Professor</label>
          <input
            className={styles.input}
            type="text"
            id="professor"
            value={disciplina.professor}
            onChange={(e) =>
              setDisciplina({ ...disciplina, professor: e.target.value })
            }
            required
          />
        </div>
        
        <div className={styles.buttonContainer}>
          <button className={styles.buttonSalvar} type="submit">
            Salvar
          </button>
          <button className={styles.buttonCancel} type="button">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

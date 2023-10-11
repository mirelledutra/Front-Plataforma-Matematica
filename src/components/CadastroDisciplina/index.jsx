import axios from "axios";
import React, { useState } from "react";
import styles from "./styles.module.css"
export default function CadastroDisciplina(){
    const [disciplina, setDisciplina] = useState({
        nomeDisciplina: "",
        ativo: false,
      });
    
      function cadastroDisciplina(e) {
        e.preventDefault();
        console.log(disciplina);
        
          axios.post("http://localhost:3020/disciplina", disciplina)
          .then((resultado) => {
            console.log(resultado);
            
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
                  <label htmlFor="nomeDisciplina">Nome da Disciplina</label>
                  <input className={styles.inputdisciplina}
                  type="text"
                  id="nomeDisciplina"
                  value={disciplina.nomeDisciplina}
                  onChange={(e) => setDisciplina({ ...disciplina, nomeDisciplina: e.target.value })}
                  required
                  />
                  </div>
               <div className={styles.inputGroup}>
                  <label>
                    Ativo:
                    <input className={styles.checkstatus}
                    type="checkbox"
                    id="ativo"
                    name="ativo"
                    checked={disciplina.ativo}
                    onChange={(e) => setDisciplina({ ...disciplina, ativo: e.target.checked })}
                    />
                    </label>
               </div>
               <div className={styles.buttonContainer}>
                    <button className={styles.buttonSalvar} type="submit">Salvar</button>
                    <button className={styles.buttonCancel} type="button">Cancelar</button>
               </div>
          </form>
      </div>
      );
  }

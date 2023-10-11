import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css"
export default function CadastroCurso() {
    const [curso, setCurso] = useState({
      nomeCurso: "",
      nivel: "",
      ativo: false,
    });
  
    function cadastroCurso(e) {
      e.preventDefault();
      console.log(curso);
      
       /* axios.post("http://localhost:3020/cursos", curso)
        .then((resultado) => {
          console.log(resultado);
          
        })
        .catch((erro) => {
          console.log(erro);
          
        });
        */
    }
  
    return (
    <div>
        <h1 className={styles.titulo}>Cadastrar Curso</h1>
        <form onSubmit={cadastroCurso} className={styles.formulario}>
             <div className={styles.inputGroup}>
                <label htmlFor="nomeCurso">Nome do Curso</label>
                <input className={styles.inputcurso}
                type="text"
                id="nomeCurso"
                value={curso.nomeCurso}
                onChange={(e) => setCurso({ ...curso, nomeCurso: e.target.value })}
                required
                />
                </div>
             <div className={styles.inputGroup}>  
                <label htmlFor="nivel">Nível</label>
                <input className={styles.inputnivel}
                type="text"
                id="nivel"
                value={curso.nivel}
                onChange={(e) => setCurso({ ...curso, nivel: e.target.value })}
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
                  checked={curso.ativo}
                  onChange={(e) => setCurso({ ...curso, ativo: e.target.checked })}
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
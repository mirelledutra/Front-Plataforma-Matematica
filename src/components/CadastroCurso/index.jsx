import { useState } from "react";
import axios from "axios";

import styles from "./styles.module.css"



export default function CadastroCurso() {
    const [curso, setCurso] = useState({
      area: "",
      nomeCurso: "",
      tipo: "",
      professor: "",
      descricao: "",
      imagem: null,
      imagemPreview: null,
      ativo: false,
      
    });
    function cadastroCurso(e) {
      e.preventDefault();
      console.log(curso);

    const formData = new FormData();
    formData.append("area", curso.area);
    formData.append("nome", curso.nomeCurso);
    formData.append("tipo", curso.tipo);
    formData.append("tipo", curso.professor);
    formData.append("descricao", curso.descricao);
    formData.append("ativo", curso.ativo);
    formData.append("imagem", curso.imagem);

    axios.post("http://localhost:3005/cursos", formData)
      .then((resultado) => {
        console.log(resultado);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function handleImagemChange(e) {
    const imagem = e.target.files[0];

    setCurso({
      ...curso,
      imagem,
      imagemPreview: URL.createObjectURL(imagem), 
    });
  }       
    
    return (
      <>
      <label className={styles.titulo}>Cadastrar Curso</label>

       <div>

        <form onSubmit={e=>cadastroCurso(e)} className={styles.formulario}>
          <div>
      
          </div>
            <div className={styles.inputGroup}>
                <label htmlFor="nomeCurso">Nome do Curso: </label>
                <input className={styles.inputcurso} placeholder="Digite o nome do curso..."
                type="text"
                id="nomeCurso"
                value={curso.nomeCurso}
                onChange={(e) => setCurso({ ...curso, nomeCurso: e.target.value })}
                required
                />
            </div>
               
             <div className={styles.inputGroup}>  
             <label htmlFor="area">Área de Conhecimento: </label>
             <input className={styles.inputArea} placeholder="Digite a área de conhecimento..."
              type="text"
              id="area"
              value={curso.area}
              onChange={(e)=> setCurso({ ...curso, area: e.target.value })}
              required
              />

             </div>  
             <div className={styles.inputGroup}>  
             <label htmlFor="area">Tipo de ensino: </label>
             <input className={styles.inputTipo} placeholder="Digite o tipo de ensino ..."
              type="text"
              id="tipo"
              value={curso.tipo}
              onChange={(e)=> setCurso({ ...curso, tipo: e.target.value })}
              required
              />

             </div>  
             <div className={styles.inputGroup}>  
             <label htmlFor="area">Professor: </label>
             <input className={styles.inputProfessor} placeholder="Digite o nome do professor ..."
              type="text"
              id="professor"
              value={curso.professor}
              onChange={(e)=> setCurso({ ...curso, professor: e.target.value })}
              required
              />

             </div>  
             <div className={styles.inputGroup}>
                <label htmlFor="descricao">Descrição: </label>
                <textarea className={styles.descricao} placeholder="Digite a descrição do curso ..."
                type="text"
                id="descricao"
                value={curso.descricao}
                onChange={e => setCurso({...curso, descricao: e.target.value})}    
                required
                />
                      
          
            </div>
            
             <div className={styles.inputGroup}>
                <label htmlFor="imagem">Imagem do Curso: </label>
                <input className={styles.selectImage}
                type="file"
                id="imagem"
                accept="image/*"
                onChange={handleImagemChange}
                />
                {curso.imagemPreview && (
                  <div className={styles.imagePreviewContainer}>
                  <img
                  src={curso.imagemPreview}
                  alt="Pré-visualização"
                  className={styles.imagemPreview}
                  />
                  </div>
                 )}
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
                  <div>
                  <button className={styles.buttonSalvar} type="submit">Salvar</button>
                  <button className={styles.buttonCancel} type="button">Cancelar</button>
                  </div>

             </div>
        </form>
    </div>
    </>
    );
}
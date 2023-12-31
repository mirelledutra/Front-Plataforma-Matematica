import Link from 'next/link'
import styles from "./styles.module.css"
import React, { useState } from 'react';

import { BsSearch } from "react-icons/bs";
import { GoFileMedia } from "react-icons/go";
import Menu from '@/components/SideBar';
import {FileReader} from "react";

export default function CadastroAula (){



  const HandleAlt = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setLinkArquivo(reader.result);
      };
      reader.readAsDataURL(file);

    }
  };
  const [link_arquivo, setLinkArquivo] = useState('');

  return (
    <div className={styles.png}>

      <div className={styles.pagina}>


        <div className={styles.conteudo}>
          <div className={styles.central}>

            <div className={styles.container}>
              <form className={styles.context}>
                <label className={styles.label}>Escolha o Curso </label>
                <select className={styles.select}>
                <option value="opcao1">Geometria Plana</option>
                  <option value="opcao2">Trigonometria</option>
                  <option value="opcao3">Equação do 1º Grau</option>
                  <option value="opcao4">Matemática Básica</option>
                </select>
              </form>
              <form className={styles.context}>
                <label className={styles.label1}>Selecione o Tipo </label>
                <select className={styles.select1}>
                <option value="opcao1">Ensino Médio</option>
                  <option value="opcao2">Ensino Superior</option>
                </select>
              </form>
              <form className={styles.context}>
                <label className={styles.label}>Área Educação</label>
                <select className={styles.select}>
                  <option value="opcao1">Matemática</option>

                </select>
              </form>
            </div>
            <div className={styles.container}>
              <form className={styles.context}>
                <label className={styles.label1}>Nome do Professor </label>
                <select className={styles.select1}>
                  <option value="opcao1">Marcos</option>
                </select>
              </form>
              <form className={styles.context}>
                <label className={styles.label}>Aula </label>
                <input className={styles.inputAula}>


                </input>
              </form>
              <form className={styles.context}>
                <label className={styles.label}>Data </label>
                <input className={styles.selectData} type="date" />
              </form>
            </div>


            <div className={styles.container}>
              <div className={styles.context}>
                <div className={styles.textArea}>
                  <label className={styles.label}>Descrição</label>
                  <textarea className={styles.box} type="text" placeholder="Digite a descrição da aula" rows={12} cols={140} ></textarea>
                </div>
              </div>
            </div>

            <div className={styles.arquivos}>
            {link_arquivo ? (
                  <div/>
                ) : (
                  <div className={styles.context} alt="Arquivo" >
                    <label className={styles.label}>Imagem capa da Aula</label>
                    <div className={styles.tabelFile}>
                    <input
                             className={styles.file}
                             type='file'
                             accept="arquivo/*"
                             style={{ display: 'none' }}
                             id='input'
                    />
                    <button
                      className={styles.buttonFile}
                      type="button"
                      onClick={() => document.getElementById('input').click()}
                      >
                      <GoFileMedia className={styles.iconFile}/>
                    </button>
                    </div>
                  </div>
                )}
                 {link_arquivo ? (
                  <div/>
                ) : (
                  <div className={styles.context} alt="Arquivo" >


                  </div>
                )}
                {link_arquivo ? (
                  <div/>
                ) : (
                  <div className={styles.context} alt="Arquivo" >
                    <label className={styles.label}>Link do vídeo do Youtube</label>
                    <div className={styles.tabelLink}>
                    <input
                             className={styles.file}
                             type='link'
                             
                    />
                      <GoFileMedia className={styles.iconLink}/>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}




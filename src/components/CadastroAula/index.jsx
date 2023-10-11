import Link from 'next/link'
import styles from './styles.module.css'
import React, { useState } from 'react';
import SideBar from "@/components/SideBar";
import { BsSearch } from "react-icons/bs";
import { GoFileMedia } from "react-icons/go";

export default function Cabecalho() {

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
    <div className={styles.pgn}>
      <div className={styles.menulateral}>
        <SideBar />
      </div>
      <div className={styles.pagina}>
        <div className={styles.header}>
          <div className={styles.titulo}>
            <a className={styles.nomePgn}>Cadastrar Aulas</a>
          </div>
          <div className={styles.brpesquise}>
            <div className={styles.barra}>
              <input className={styles.input} type="text" placeholder="Pesquisar..." />
              <BsSearch className={styles.icon} />
            </div>
          </div>
          <div className={styles.perfil}>
            <Link href="/Perfil">
              <img className={styles.imagem} src="Group 276.svg" alt="" />
            </Link>
          </div>

        </div>

        <div className={styles.conteudo}>
          <div className={styles.central}>

            <div className={styles.container}>
              <form className={styles.context}>
                <label className={styles.label}>Escolha o Curso </label>
                <select className={styles.select}>
                <option value="opcao1">1°ano</option>
                  <option value="opcao2">2°ano</option>
                  <option value="opcao3">3°ano</option>
                  <option value="opcao4">Superior
                  </option>
                </select>
              </form>
              <form className={styles.context}>
                <label className={styles.label1}>Selecione o Nivel </label>
                <select className={styles.select1}>
                <option value="opcao1">Ensino Médio</option>
                  <option value="opcao2">Ensino Superior</option>
                </select>
              </form>
              <form className={styles.context}>
                <label className={styles.label}>Digite a Disciplina</label>
                <select className={styles.select}>
                  <option value="opcao1">Geometria Plana</option>
                  <option value="opcao2">Matematica Basica</option>
                  <option value="opcao3">Funções</option>
                  <option value="opcao4">Estatistica</option>
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
                <select className={styles.selectAula}>
                  <option value="opcao1">Transformaçôes do Plano</option>
                  <option value="opcao2">Funçôes Numericas</option>
                  <option value="opcao2">Divisão</option>
                  <option value="opcao2">Multiplicaçâo</option>

                </select>
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
                  <textarea className={styles.box} type="text" placeholder="Digite a descrição do módulo" rows={12} cols={140} ></textarea>
                </div>
              </div>
            </div>

            <div className={styles.arquivos}>
            {link_arquivo ? (
                  <div/>
                ) : (
                  <div className={styles.context} alt="Arquivo" >
                    <label className={styles.label}>Imagem capa do curso</label>
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
                    <label className={styles.label}>Imagem capa do curso</label>
                    <div className={styles.tabelF}>
                    <input
                             className={styles.file}
                             type='text'
                                          
                          />
                    </div>
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




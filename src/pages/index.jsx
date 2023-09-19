import React from 'react';
import ContainerMenu from '@/components/menu/menu/menu';
import ContainerCadCurso from '../components/menu/curso/curso';
import BotaoInicio from '../components/menu/inicio/inicio';
import styles from "../pages/index.module.css";

const CadastrarCurso = () => {
  return (
    <div className={styles.cadastrarCurso}>
      <div className={styles.cadastrarCursoChild} />
      <img
        className={styles.designSemNome1}
        alt=""
        src="/design-sem-nome-1@2x.png"
      />
      <img
        className={styles.designSemNome11}
        alt=""
        src="/design-sem-nome-1@2x.png"
      />
      <div className={styles.cadastrarCursoItem} />
      <div className={styles.cadastrarCursoInner}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.pesquisar}>
        <div className={styles.pesquisarChild} />
        <div className={styles.pesquisar1}>Pesquisar</div>
        <img className={styles.search1Icon} alt="" src="/search-1@2x.png" />
      </div>
      <div className={styles.lineDiv} />
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      <div className={styles.perfil}>
        <div className={styles.perfilChild} />
        <img className={styles.eu1Icon} alt="" src="/eu-1@2x.png" />
      </div>
      <div className={styles.cadastrarCursoChild1} />
      <div className={styles.cursos}>Cursos</div>
      <ContainerMenu
        buttonText=" Usuário"
        elementText="/group-4141.svg"
        courseButtonText=" Curso"
        dimensionText="/group-4141.svg"
        dimensionText2="/group-4142.svg"
        componentImage="/bell1.svg"
        componentText="/icon2.svg"
        componentIcon="/-icon-home1.svg"
        componentTextId="/vector1.svg"
        imageAltText="/icon3.svg"
        showAviso={false}
        showGroupDiv={false}
        component7Position="absolute"
        component7Top="134px"
        component7Left="0px"
        cadUsuarioCursor="pointer"
        cadUsuarioBorder="none"
        groupDivWidth="63px"
        cadastrarUsurioDisplay="inline-block"
        cadCursoCursor="pointer"
        cadCursoBorder="none"
        groupDivWidth1="50px"
        cadastrarCursoDisplay="inline-block"
        inicioMenuAdmCursor="pointer"
        inicioMenuAdmBorder="none"
        iconTop="19.67px"
        iconHeight="6.09px"
        incioDisplay="inline-block"
        sairCursor="pointer"
        sairBorder="none"
        sairDisplay="inline-block"
      />
      <div className={styles.botaocadastrarcurso}>
        <div className={styles.botaocadastrarcursoChild} />
        <div className={styles.cadastrarAula}>Cadastrar Curso</div>
        <img
          className={styles.zondiconsaddOutline}
          alt=""
          src="/zondiconsaddoutline.svg"
        />
      </div>
      <div className={styles.filtrarcurso}>
        <div className={styles.filtrarcursoChild} />
        <div className={styles.filtrarcursoItem} />
        <div className={styles.digiteOId}>
          Digite o id, nome do curso, módulo ou conteúdo
        </div>
        <div className={styles.botaofiltrar}>
          <div className={styles.botaofiltrarChild} />
          <div className={styles.filtrar}>Filtrar</div>
        </div>
        <b className={styles.filtros}>Filtros</b>
        <div className={styles.digiteAquiO}>
          Digite aqui o que deseja listar abaixo
        </div>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.cadastrarCursoChild2} />
      <div className={styles.botaocadastraraula}>
        <div className={styles.botaocadastrarcursoChild} />
        <div className={styles.cadastrarAula}>Cadastrar Aula</div>
        <img
          className={styles.zondiconsaddOutline}
          alt=""
          src="/zondiconsaddoutline.svg"
        />
      </div>
      <div className={styles.filtrocurso}>
        <div className={styles.filtrocursoChild} />
        <div className={styles.filtrocursoItem} />
        <b className={styles.mdulo}>Módulo</b>
        <b className={styles.disciplina}>Disciplina</b>
        <b className={styles.curso}>Curso</b>
        <div className={styles.filtrocursoInner} />
        <div className={styles.ensinoMdio}>Ensino Médio</div>
        <div className={styles.ano}>1º Ano</div>
        <div className={styles.filtrocursoChild1} />
        <div className={styles.filtrocursoChild2} />
        <div className={styles.filtrocursoChild3} />
        <div className={styles.ensinoMdio1}>Ensino Médio</div>
        <div className={styles.ano1}>1º Ano</div>
        <div className={styles.funoAfim}>Função Afim</div>
        <div className={styles.div}>09/05/2021</div>
        <img className={styles.eyeIcon} alt="" src="/eye.svg" />
        <img className={styles.trash2Icon} alt="" src="/trash2.svg" />
        <img className={styles.edit2Icon} alt="" src="/edit2.svg" />
        <div className={styles.div1}>1013</div>
        <div className={styles.filtrocursoChild4} />
        <div className={styles.geometriaPlana}>Geometria Plana</div>
        <div className={styles.div2}>09/05/2021</div>
        <b className={styles.data}>{`Data `}</b>
        <div className={styles.ensinoMdio2}>Ensino Médio</div>
        <div className={styles.ano2}>1º Ano</div>
        <div className={styles.estatstica}>Estatística</div>
        <div className={styles.div3}>09/05/2021</div>
        <div className={styles.ensinoMdio3}>Ensino Médio</div>
        <div className={styles.ano3}>1º Ano</div>
        <div className={styles.grficos}>Gráficos</div>
        <div className={styles.div4}>09/05/2021</div>
        <img className={styles.eyeIcon1} alt="" src="/eye.svg" />
        <img className={styles.trash2Icon1} alt="" src="/trash2.svg" />
        <img className={styles.edit2Icon1} alt="" src="/edit2.svg" />
        <img className={styles.eyeIcon2} alt="" src="/eye.svg" />
        <img className={styles.trash2Icon2} alt="" src="/trash2.svg" />
        <img className={styles.edit2Icon2} alt="" src="/edit2.svg" />
        <img className={styles.eyeIcon3} alt="" src="/eye.svg" />
        <img className={styles.trash2Icon3} alt="" src="/trash2.svg" />
        <img className={styles.edit2Icon3} alt="" src="/edit2.svg" />
        <b className={styles.aes}>Ações</b>
        <div className={styles.filtrocursoChild5} />
        <div className={styles.filtrocursoChild6} />
        <div className={styles.div5}>1010</div>
        <b className={styles.id}>ID</b>
        <div className={styles.div6}>1011</div>
        <div className={styles.div7}>1012</div>
        <div className={styles.ensinoMdio4}>Ensino Médio</div>
        <div className={styles.ano4}>1º Ano</div>
        <div className={styles.funoQuadrtica}>Função Quadrática</div>
        <div className={styles.div8}>09/05/2021</div>
        <img className={styles.eyeIcon4} alt="" src="/eye.svg" />
        <img className={styles.trash2Icon4} alt="" src="/trash2.svg" />
        <img className={styles.edit2Icon4} alt="" src="/edit2.svg" />
        <div className={styles.div9}>1014</div>
      </div>
      <div className={styles.cadastrarCursoChild3} />
      <ContainerCadCurso />
      <BotaoInicio />
    </div>
  );
};

export default CadastrarCurso;

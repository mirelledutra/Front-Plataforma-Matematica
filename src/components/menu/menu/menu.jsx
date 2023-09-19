import React, { useMemo } from "react";
import styles from "./menu.module.css";

const ContainerMenu = ({
    buttonText,
    elementText,
    courseButtonText,
    dimensionText,
    dimensionText2,
    componentImage,
    componentText,
    componentIcon,
    componentTextId,
    imageAltText,
    showAviso,
    showGroupDiv,
    component7Position,
    component7Top,
    component7Left,
    cadUsuarioCursor,
    cadUsuarioBorder,
    groupDivWidth,
    cadastrarUsurioDisplay,
    cadCursoCursor,
    cadCursoBorder,
    groupDivWidth1,
    cadastrarCursoDisplay,
    inicioMenuAdmCursor,
    inicioMenuAdmBorder,
    iconTop,
    iconHeight,
    incioDisplay,
    sairCursor,
    sairBorder,
    sairDisplay,
  }) => {
    const component7Style = useMemo(() => {
      return {
        position: component7Position,
        top: component7Top,
        left: component7Left,
      };
    }, [component7Position, component7Top, component7Left]);
  
    const cadUsuarioStyle = useMemo(() => {
      return {
        cursor: cadUsuarioCursor,
        border: cadUsuarioBorder,
      };
    }, [cadUsuarioCursor, cadUsuarioBorder]);
  
    const groupDivStyle = useMemo(() => {
      return {
        width: groupDivWidth,
      };
    }, [groupDivWidth]);
  
    const cadastrarUsurioStyle = useMemo(() => {
      return {
        display: cadastrarUsurioDisplay,
      };
    }, [cadastrarUsurioDisplay]);
  
    const cadCursoStyle = useMemo(() => {
      return {
        cursor: cadCursoCursor,
        border: cadCursoBorder,
      };
    }, [cadCursoCursor, cadCursoBorder]);
  
    const groupDiv1Style = useMemo(() => {
      return {
        width: groupDivWidth1,
      };
    }, [groupDivWidth1]);
  
    const cadastrarCursoStyle = useMemo(() => {
      return {
        display: cadastrarCursoDisplay,
      };
    }, [cadastrarCursoDisplay]);
  
    const inicioMenuAdmStyle = useMemo(() => {
      return {
        cursor: inicioMenuAdmCursor,
        border: inicioMenuAdmBorder,
      };
    }, [inicioMenuAdmCursor, inicioMenuAdmBorder]);
  
    const iconStyle = useMemo(() => {
      return {
        top: iconTop,
        height: iconHeight,
      };
    }, [iconTop, iconHeight]);
  
    const incioStyle = useMemo(() => {
      return {
        display: incioDisplay,
      };
    }, [incioDisplay]);
  
    const sairStyle = useMemo(() => {
      return {
        cursor: sairCursor,
        border: sairBorder,
      };
    }, [sairCursor, sairBorder]);
  
    const sair1Style = useMemo(() => {
      return {
        display: sairDisplay,
      };
    }, [sairDisplay]);
  
    return (
      <div className={styles.component7} style={component7Style}>
        <div className={styles.component7Child} />
        <div className={styles.cadUsuario} style={cadUsuarioStyle}>
          <img className={styles.userIcon} alt="" src="/user.svg" />
          <img className={styles.userIcon1} alt="" src="/user.svg" />
          <div className={styles.cadastrarUsurioWrapper} style={groupDivStyle}>
            <div className={styles.cadastrarUsurio} style={cadastrarUsurioStyle}>
              {buttonText}
            </div>
          </div>
          <img className={styles.cadUsuarioChild} alt="" src={elementText} />
        </div>
        <div className={styles.cadCurso} style={cadCursoStyle}>
          <div className={styles.cadastrarCursoWrapper} style={groupDiv1Style}>
            <div className={styles.cadastrarUsurio} style={cadastrarCursoStyle}>
              {courseButtonText}
            </div>
          </div>
          <img className={styles.cadCursoChild} alt="" src={dimensionText} />
        </div>
        {showAviso && (
          <div className={styles.aviso}>
            <div className={styles.cadastrarAvisosWrapper}>
              <div className={styles.cadastrarUsurio}>Cadastrar Avisos</div>
            </div>
            <img className={styles.avisoChild} alt="" src={dimensionText2} />
            <img className={styles.bellIcon} alt="" src={componentImage} />
          </div>
        )}
        <div className={styles.inicioMenuAdm} style={inicioMenuAdmStyle}>
          {showGroupDiv && (
            <div className={styles.iconParent}>
              <img
                className={styles.icon}
                alt=""
                src={componentText}
                style={iconStyle}
              />
              <div className={styles.incio} style={incioStyle}>
                Início
              </div>
              <img className={styles.iconHome} alt="" src={componentIcon} />
            </div>
          )}
        </div>
        <img className={styles.vectorIcon} alt="" src={componentTextId} />
        <div className={styles.sair} style={sairStyle}>
          <div className={styles.sair1} style={sair1Style}>
            Sair
          </div>
          <img className={styles.icon1} alt="" src={imageAltText} />
        </div>
      </div>
    );
  };
  
  export default ContainerMenu;
  
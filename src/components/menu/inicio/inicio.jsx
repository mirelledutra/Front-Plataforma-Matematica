import React from 'react';
import styles from "../inicio/inicio.module.css";

const BotaoInicio = () => {
  return (
    <button className={styles.cadUsuario}>
      <div className={styles.incioWrapper}>
        <div className={styles.incio}>Início</div>
      </div>
      <img className={styles.cadUsuarioChild} alt="" src="/group-4141.svg" />
      <img className={styles.iconHome} alt="" src="/-icon-home2.svg" />
    </button>
  );
};

export default BotaoInicio;

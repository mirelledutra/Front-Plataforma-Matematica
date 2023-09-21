// NovoBotao.js

import React from 'react';
import styles from './styles.module.css';

const NovoBotao = ({ texto }) => {
  return (
    <a href="#">
      <button className={styles['botao-novo']}>{texto}</button>
    </a>
  );
};

export default NovoBotao;

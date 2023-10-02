import React from 'react';
import styles from './styles.module.css';
import logo from '../../images/logo.svg';

function Principal() {
  return (
    <div className={styles.main}>
      
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 40, fontWeight: 600}}>Seja bem-vindo(a) a 
      <img style={{flexDirection: 'row'}} src={logo} alt="Logo da Plataforma" />
      </p> 
    <div className={styles.textocentral}>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 28, fontWeight: 500, color: '#225943' }}>Conectando conhecimento, transformando possibilidades.</p>
    </div>
      
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 22, fontWeight: 400 }}>Nossa plataforma oferece aulas interativas e exercícios práticos para ajudá-lo a dominar conceitos e melhorar suas habilidades.</p>

    </div>
  );
}

export default Principal;

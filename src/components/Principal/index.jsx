import React from 'react';
import styles from './styles.module.css';

function Principal() {
  return (
    <main className={styles.main}>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Seja bem-vindo(a) a</p>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, color: '#225943' }}>Conectando conhecimento, transformando possibilidades.</p>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>Nossa plataforma oferece aulas interativas e exercícios práticos para ajudá-lo a dominar conceitos e melhorar suas habilidades.</p>
    </main>
  );
}

export default Principal;

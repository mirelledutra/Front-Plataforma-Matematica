import styles from './styles.module.css';

export default function Principal() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.titulo}>
          <h1>Seja bem-vindo(a) a </h1>
          <img src="logo-preta-4m.svg" alt="Logo preta 4m" />
        </div>
        <div className={styles.subtitulo}>
          <h2>Conectando conhecimento, <br/> transformando possibildades.</h2>
        </div>
        <div className={styles.texto}>
          <p>Nossa plataforma oferece aulas interativas <br />
            e exercícios práticos para ajudá-lo a <br />
            dominar conceitos e melhorar suas <br />
            habilidades. </p>
        </div>
      </div>
      <div className={styles.imagem}>
        <img src="fotoInicio.png" alt="Foto pessoa sentada lendo" />
      </div>
    </div>
  );
}
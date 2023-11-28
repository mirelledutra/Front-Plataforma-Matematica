import Link from 'next/link'
import styles from './styles.module.css'

export default function Cabecalho() {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.imagem} src="logo-branca-4m.svg" alt="" />
        <nav className={styles.nav}>
          <Link className={styles.rotas} href="/Saibamais">Saiba Mais</Link>
          <Link className={styles.rotas} href="/Cadastrar">Cadastrar</Link>
          <Link className={styles.rotas} href="/Login">Login</Link>
        </nav>
      </header>
      <hr />
    </>
  )
}
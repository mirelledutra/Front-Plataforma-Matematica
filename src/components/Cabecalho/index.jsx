import React from 'react';
import logo from '../../images/logo.svg';
import styles from './styles.module.css';
import Button from '../Button/index.jsx';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo da empresa" />
      </div>
      <nav>
        <ul className={styles.headerButtons}>
            <Button texto="Saiba Mais" />
            <Button texto="Cadastrar" />
            <Button texto="Login" />
        </ul>
      </nav>
    </header>
  );
}

export default Header;

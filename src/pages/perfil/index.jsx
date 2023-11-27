import React, { useEffect, useState } from 'react';
import BarraPesquisa from '../../components/BarraPesquisa';
import Menu from '@/components/SideBar';
import styles from './styles.module.css';
import BarraPerfil from '@/components/BarraPerfil';
import useAuth from '@/auth/useAuth';
import { CookieHandler } from '@/util/cookie';

export default function Perfil ()  {
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [foto, setFoto] = useState(null);

  
  
  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleNovaSenhaChange = (event) => {
    setNovaSenha(event.target.value);
  };

  const handleConfirmarSenhaChange = (event) => {
    setConfirmarSenha(event.target.value);
  };

  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value);
  };
  
  const handleFotoChange = (event) => {
    const file = event.target.files[0];
    setFoto(file);
  };
  const handleSalvar = () => {
    const dados = {
      nome,
      usuario,
      email,
      senha,
      novaSenha,
      confirmarSenha,
      telefone,
      foto,
    };

    console.log('Dados a serem salvos:', dados);
  };

  useEffect(() => {
    const user = JSON.parse(CookieHandler.getCookie("User"))
    setNome(user.nome)
    setEmail(user.email)
    setTelefone(user.telefone)
    setSenha(user.senha)
  },[])
  

  return (
    <>
    
    <div className={styles.container}>
    <Menu />
      <div className={styles.t}>
        <div>
        <label className={styles.titulo}>Perfil</label>
        <BarraPesquisa />
        <BarraPerfil />
        </div>
        <form className={styles.formulario}>
     
        <div>
          
          <img className={styles.usuario} src="/usuario.png" />
           <input
           type="text"
           placeholder="Digite seu nome"
           value={nome}
           onChange={handleNomeChange}
          className={styles.inputNome}
          />
          <input
          type="Usuario:"
          placeholder="Digite seu usuário"
          value={usuario}
          onChange={handleUsuarioChange}
          className={styles.inputUsuario}
          />
          <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={handleEmailChange}
          className={styles.inputEmail}
          />
          <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={handleSenhaChange}
          className={styles.inputSenha}
          />
          <input
          type="password"
          placeholder="Digite sua nova senha"
          value={novaSenha}
          onChange={handleNovaSenhaChange}
          className={styles.inputNovaSenha}
          />
          <input
          type="password"
          placeholder="Confirme sua senha"
          value={confirmarSenha}
          onChange={handleConfirmarSenhaChange}
          className={styles.inputConfirmarSenha}
          />
          <input
          type="tel"
          placeholder="Digite seu telefone"
          value={telefone}
          onChange={handleTelefoneChange}
          className={styles.inputTelefone}
          />  
          <input
          type="file"
          onChange={handleFotoChange}
          className={styles.inputFile}
          id="fileInput"
          style={{ display: 'none' }}
          />
          <label htmlFor="fileInput" className={styles.uploadButton}>
          <span role="img" aria-label="Upload Icon">Carregar foto</span>
          </label>

          {foto && <img src={URL.createObjectURL(foto)} alt="Foto do Perfil" />}
  
          <button onClick={handleSalvar} className={styles.botaoSalvar}>
          Salvar
          </button>
        </div>
        </form>
      </div>

     </div>
    </>
  );
}



import { useState, useEffect } from 'react';
import axiosInstance from '@/util/fetch';
import styles from "./styles.module.css"

export default function CadastroUserAdm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [foto, setFoto] = useState(null);
  const [preview, setPreview] = useState('');

  const handleFotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    return () => {
      if (preview){
        URL.revokeObjectURL(preview);
      }
    
    };
  }, [preview]);

  const handleCadastro = async (event) => {
    event.preventDefault();
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('user', email);
    formData.append('email', email);
    formData.append('senha', senha);
    formData.append('telefone', telefone);
    if (foto) {
      formData.append('link_foto', foto);
    }

    try {
      await axiosInstance.post("/usuarios", formData);
      alert("Cadastrado com sucesso!");
      limparFormulario(); // Chama a função para limpar o formulário após o cadastro bem-sucedido
    } catch (error) {
      alert(`Ocorreu um erro ao tentar cadastrar: ${error.response ? error.response.data.message : 'Erro interno do servidor'}`);
    }
  };

  const limparFormulario = () => {
   
    setNome('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
    setTelefone('');
    setFoto(null);
    setPreview('');
  };

  const handleCancelar = (event) => {
    event.preventDefault();
    limparFormulario();
  };

  return (
    <>
     
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleCadastro}>
          <div className={styles.inputGroup}>
          <label htmlFor="foto" className={styles.label}>Foto:</label>
            <input
              type="file"
              id="foto"
              onChange={(e) => setFoto(e.target.files[0])}
              className={styles.input}
            />
          
            <label htmlFor="nome" className={styles.label}>Nome:</label>
            <input
              type="text"
              id="nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="telefone" className={styles.label}>Telefone:</label>
            <input
              type="text"
              id="telefone"
              required
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="senha" className={styles.label}>Senha:</label>
            <input
              type="password"
              id="senha"
              minLength={8}
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="confirmarSenha" className={styles.label}>Confirmar Senha:</label>
            <input
              type="password"
              id="confirmarSenha"
              minLength={8}
              required
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Cadastrar
          </button >
          <button type="button" className={styles.cancelButton} onClick={handleCancelar}>
            Cancelar
          </button>
        </form>
        {preview && <img src={preview} alt="Pré-visualização" className={styles.imagePreview} />}
      </div>
    </>
  );
}

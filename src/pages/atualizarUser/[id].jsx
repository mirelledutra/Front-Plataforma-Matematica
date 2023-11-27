import { useState, useEffect } from 'react';
import axiosInstance from '@/util/fetch';
import styles from "@/styles/atualizarUser.module.css"
import { useRouter } from 'next/router';

export default function AtualizarUser() {

  let router=useRouter()  
  
  const [user, setUser] = useState();

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

  async function BuscarUser(){
    const user = await axiosInstance.get(`/usuarios/${router.query?.id}`)
    setUser(user.data)
  }

  const handleCadastro = async (event) => {
    event.preventDefault();
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }
    try {

      const objUser = {
        nome: nome,
        email: email,
        telefone: telefone,
        user: email,
        ativo: true
      }
      
      await axiosInstance.patch(`/usuarios/${router.query?.id}`, senha ? objUser : {...objUser, senha:senha});

      alert("Atualizado com sucesso!");
      router.push('/cadastrarUsuario')
    } catch (error) {
      console.log(error)

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
  const preencherFormulario = () => {
   
    setNome(user.nome);
    setEmail(user.email);
    setSenha(user.senha);
    setConfirmarSenha(user.confirmarSenha);
    setTelefone(user.telefone);
    setFoto(null);
    setPreview('');
  };

  const handleCancelar = (event) => {
    event.preventDefault();
    limparFormulario();
  };

  useEffect (()=>{
    if(router.query.id){
      BuscarUser()
    }
  },[router])

  useEffect (()=>{
    if(user){
      preencherFormulario()
    }
  },[user])



  return (
    <>
    <div className={styles.container1}>

    <Menu />

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
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Atualizar
          </button >
          <button type="button" className={styles.cancelButton} onClick={handleCancelar}>
            Cancelar
          </button>
        </form>
        {preview && <img src={preview} alt="Pré-visualização" className={styles.imagePreview} />}
      </div>
  </div>
    </>
  );
}

// componente de cadastro de usuário
import axios from 'axios';
import styles from './styles.module.css';
import Link from 'next/link';

import { useEffect, useState } from 'react';

export default function Cadastro() {

    const [usuario, setUsuario] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    });

    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setMensagem('')
        }
            , 3000)
    }, [mensagem])

    async function inserirUsuario(e) {
        e.preventDefault()
        if (usuario.senha !== usuario.confirmarSenha) {
            setMensagem('As senhas não conferem!');
            return;
        }

        try {
            const resultado = await axios.post('http://localhost:3000/usuarios', usuario);
            console.log(resultado.data)
            setUsuario({
                nome: '',
                email: '',
                senha: '',
                confirmarSenha: ''
            })
            setMensagem('Usuário cadastrado com sucesso!');
        } catch (error) {
            console.log(error)
            setMensagem('Erro ao cadastrar usuário!');
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.imagemgrande}>
                <img src='imagemcadastro.png' alt="Imagem de cadastro" />
            </div>
            <form className={styles.form} onSubmit={e => inserirUsuario(e)}>
                <div className={styles.imagem}>
                    <img src='logo.png' alt="Logo" />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="nome">Nome:</label>
                    <input className={styles.input} type="text" value={usuario.nome} onChange={e => setUsuario({ ...usuario, nome: e.target.value })} id="nome" />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="email">Email:</label>
                    <input className={styles.input} type="email" value={usuario.email} onChange={e => setUsuario({ ...usuario, email: e.target.value })} id="email" />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="senha">Senha:</label>
                    <input className={styles.input} type="password" value={usuario.senha} onChange={e => setUsuario({ ...usuario, senha: e.target.value })} id="senha" />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="confirmarSenha">Confirmar Senha:</label>
                    <input className={styles.input} type="password" value={usuario.confirmarSenha} onChange={e => setUsuario({ ...usuario, confirmarSenha: e.target.value })} id="confirmarSenha" />
                </div>

                <button type="submit" className={styles.submitButton} href="Login" >Criar conta</button>

                <Link className={styles.botaoHome}>Retornar ao painel</Link>
            </form>
        </div>
    );
}

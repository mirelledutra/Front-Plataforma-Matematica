import Link from 'next/link';
import styles from './styles.module.css';
import { useCallback, useState } from 'react';
import axiosInstance from '@/util/fetch';
import { CookieHandler } from '@/util/cookie';
import { useRouter } from 'next/router';


export default function CompLogin() {
    const [user, setUser] = useState('')
    const [senha, setSenha] = useState('')
    const router = useRouter();


    const submit = useCallback(async (e) => {
        e.preventDefault()

        try {
            const response = await axiosInstance.post('/login', { user, senha })

            CookieHandler.setCookie('Authorization', response.data.token, 1)
            CookieHandler.setCookie('User', JSON.stringify(response.data.user), 1)
            CookieHandler.setCookie('UserId', response.data.user.id, 1)

            router.push('/inicio')
        } catch (error) {
            console.log(error)
        }
    }, [user, senha])
    return (
        <div className={styles.container}>
            <div className={styles.imagemgrande}>

                <img src='imagemlogin.png' alt="Imagem de login" />

            </div>

            <form className={styles.form} onSubmit={submit}>
                <div className={styles.imagem}>
                    <img src='logo.png' alt="Logo" />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="nome">E-mail:</label>
                    <input value={user} onChange={e => setUser(e.target.value)} required className={styles.input} type="email" id="nome" />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="senha">Senha:</label>
                    <input minLength={8} value={senha} onChange={e => setSenha(e.target.value)} required className={styles.input} type="password" id="senha" />
                </div>

                <div className={styles.recovery}>
                    <Link className={styles.textrecovery} href="/recuperarsenha">Esqueceu sua senha?</Link>

                </div>

                <button type="submit" className={styles.submitButton}>Acessar</button>

                <div className={styles.criarConta}>
                    <Link className={styles.textCriarConta} href="/Cadastrar">Novo por aqui? Crie uma conta!</Link>
                </div>

                <div className={styles.VoltarInicio}>

                    <Link href="/" className={styles.textVoltar}>
                        Retornar ao painel
                    </Link>
                </div>

            </form>
        </div>
    );
}

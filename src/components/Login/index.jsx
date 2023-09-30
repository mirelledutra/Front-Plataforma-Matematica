import Link from 'next/link';
import styles from './styles.module.css';

export default function CompLogin() {
    return (
        <div className={styles.container}>
            <div className={styles.imagemgrande}>

                <img src='imagemlogin.png' alt="Imagem de login" />

            </div>

            <form className={styles.form}>
                <div className={styles.imagem}>
                    <img src='logo.png' alt="Logo" />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="nome">Usuário:</label>
                    <input className={styles.input} type="text" id="nome" />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="senha">Senha:</label>
                    <input className={styles.input} type="password" id="senha" />
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

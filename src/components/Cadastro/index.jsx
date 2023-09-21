import styles from './styles.module.css';

export default function Cadastro() {
    return (
        <form className={styles.form}>
            <div className={styles.imagem}>
                <img src='logo.png' alt="Logo" />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="nome">Nome:</label>
                <input className={styles.input} type="text" id="nome" />
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="email">Email:</label>
                <input className={styles.input} type="email" id="email" />
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="senha">Senha:</label>
                <input className={styles.input} type="password" id="senha" />
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="confirmarSenha">Confirmar Senha:</label>
                <input className={styles.input} type="password" id="confirmarSenha" />
            </div>

            <button type="submit" className={styles.submitButton}>Criar conta</button>
        </form>
    );
}

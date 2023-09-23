// componente de rodapé

import styles from './styles.module.css';

export default function Rodape() {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.logosprojeto}>
                    <img src="logobranca.png" alt="Logo do Ifro" />
                    <img src="logo_fslab.png" alt="Logo do FS Lab" />
                </div>
                <div className={styles.redessociais}>
                    <img src="Instagram.png" alt="Logo do Instragram" />
                    <img src="facebook.png" alt="Logo do Facebook" />
                </div>
            </div>
        </footer>
    )
}

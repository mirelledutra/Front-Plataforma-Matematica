import styles from './styles.module.css';


export default function PageSaibaMais() {
    return (
        <div>
            <div>
                <header>
                    <img className={styles.imagem} src="logo-branca-4m.svg" alt="Logo Branca 4m" />
                    <hr />
                </header>
            </div>
            <div className={styles.container}>
                <h1>Saiba Mais</h1>
            </div>
            <div className={styles.container2}>
                <h1>PÁGINA EM CONSTRUÇÃO</h1>
                <img src="foto-saiba-mais.png" alt="Saiba Mais" />
            </div>
        </div>
    )
}
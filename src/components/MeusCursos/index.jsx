import MenuLateral from '../SideBar';
import styles from './styles.module.css'
import Table from './Tables'
import App from './App';


export default function MeusCursos() {

    return (
        

        <div className={styles.MeusCursos_novo}>

            <div className={styles.menulateral}>
                <MenuLateral />
            </div>

            <div className={styles.FormularioCursos}>
                <form className={styles.pesquisar}>

                    <h1 className={styles.nomepgn}>Meus Cursos</h1>
                  {/* <h2 className={styles.nominho1}>Cursos efetuados matrícula</h2> */}

                    <input
                        className={styles.barra}
                        type="text"
                        placeholder="pesquisar"
                    />
                    <dir className={styles.fotoPerfil}>
                        <img
                            src="Group 276.svg"
                            alt="Foto de perfil"
                            className={styles.fotoPerfil}
                        />
                    </dir>
                    <div className={styles.tables}>
                        <App />
                    </div>
                </form>

                
            </div>
        </div>

    );
}

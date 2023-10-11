import styles from './styles.module.css'
import { AiOutlineHome } from "react-icons/ai"
import { LuUsers } from "react-icons/lu"
import { PiBooksBold} from "react-icons/pi"
import { PiBookBookmarkLight } from "react-icons/pi"
import { BiExit } from "react-icons/bi"


export default function Menu() {


    return (
        <div className={styles.body}>
            <nav className={styles.sidebar}>
                <header className={styles.header}>
                    <div className={styles.imagetext}>
                        <span className={styles.image}>
                            <img src='logo.png' alt='Logo' />
                        </span>
                        <div className={`${styles.text} ${styles.headertext}`}>
                        </div>
                    </div>
                </header>

                <div className={styles.menubar}>
                    <ul className={styles.menulinks}>

                        <li>
<<<<<<< HEAD
                            <a className={styles.link} href="/">
=======
                            <a className={styles.link} href="">
>>>>>>> 17-visualizacao-curso-aula
                                <AiOutlineHome className={styles.imagem} />
                                <span>Início</span>
                            </a>
                        </li>

                        <li>
                            <a className={styles.link} href="Perfil">
                                <LuUsers className={styles.imagem} />
                                <span className={styles.texto}>Perfil</span>
                            </a>
                        </li>

                        <li>
                            <a className={styles.link} href="MeusCursos">
                                <PiBooksBold className={styles.imagem} />
                                <span className={styles.texto}>Meus Cursos</span>
                            </a>
                        </li>

                        <li>
                            <a className={styles.link} href="Cursos">
                                <PiBookBookmarkLight className={styles.imagem} />
                                <span className={styles.texto}>Cursos</span>
                            </a>
                        </li>
                        <li >
                            <a className={styles.link} href="sair">
                                <BiExit className={styles.imagem} />
                                <span className={styles.textoFn}>Sair</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}
<<<<<<< HEAD

//aaaaa//
=======
>>>>>>> 17-visualizacao-curso-aula

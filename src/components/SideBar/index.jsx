import styles from './styles.module.css'
import { AiOutlineHome } from "react-icons/ai"
import { LuUsers } from "react-icons/lu"
import { PiBooksBold} from "react-icons/pi"
import { PiBookBookmarkLight } from "react-icons/pi"
import { BiExit } from "react-icons/bi"
import Link from 'next/link'



export default function Menu() {


    return (
        <div className={styles.body}>
            <nav className={styles.sidebar}>
                <header className={styles.header}>
                    <div className={styles.imagetext}>
                        <span className={styles.image}>
                            <Link href={'/'}>
                            <img className={styles.logo}src='logo.png' alt='Logo' />
                           
                            </Link>

                        </span>
                        <div className={`${styles.text} ${styles.headertext}`}>
                        </div>
                    </div>
                </header>

                <div className={styles.menubar}>
                    <ul className={styles.menulinks}>

                        <li>
                            <a className={styles.link} href="inicio">
                                <AiOutlineHome className={styles.imagem} />
                                <span>Início</span>
                            </a>
                        </li>

                        <li>
                            <a className={styles.link} href="perfil">
                                <LuUsers className={styles.imagem} />
                                <span className={styles.texto}>Perfil</span>
                            </a>
                        </li>

                       

                        <li>
                            <a className={styles.link} href="Cursos">
                                <PiBookBookmarkLight className={styles.imagem} />
                                <span className={styles.texto}>Cursos</span>
                            </a>
                            
                        </li>
                        <li>
                            <a className={styles.link} href="cadastrarCurso">
                                <PiBookBookmarkLight className={styles.imagem} />
                                <span className={styles.texto}>Cadastrar Curso</span>
                            </a>
                            
                        </li>
                        <li>
                            <a className={styles.link} href="cadastrarAula">
                                <PiBookBookmarkLight className={styles.imagem} />
                                <span className={styles.texto}>Cadastrar Aula</span>
                            </a>
                            
                        </li>
                        <li>
                            <a className={styles.link} href="cadastrarUsuario">
                                <PiBookBookmarkLight className={styles.imagem} />
                                <span className={styles.texto}>Cadastrar Usuário</span>
                            </a>
                            
                        </li>
                        <li >
                            <a className={styles.link} href="/">
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

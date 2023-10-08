import Link from 'next/link';
import styles from './styles.module.css';
import BarraRolagem from '../BarraRolagem';

export default function Conteudos() {
    return (
       <>
       <div className={styles.tabela}>
                <h1 className={styles.h1}>Conteúdo do Curso</h1>
                 <table className={styles.table}>
                   <tbody>
                     <tr>
                       <Link className={styles.pdfs} href=''> <img className={styles.iconAdobe} src='iconAdobe.svg' alt="Icone de PDF" />Aula Demonstrativa em sala de aula</Link>
                     </tr>
                     <tr>
                        <Link className={styles.pdfs} href=''> <img className={styles.iconAdobe} src='iconAdobe.svg' alt="Icone de PDF" />Aula Explicativa</Link>
                     </tr>
                     <tr>
                        <Link className={styles.pdfs} href=''> <img className={styles.iconAdobe} src='iconAdobe.svg' alt="Icone de PDF" />Lista de Exercícios</Link>
                     </tr>
                     <tr>
                        <Link className={styles.pdfs} href=''> <img className={styles.iconAdobe} src='iconAdobe.svg' alt="Icone de PDF" />Exercícios propostos</Link>
                     </tr>
                     <tr>
                        <Link className={styles.pdfs} href=''> <img className={styles.iconAdobe} src='iconAdobe.svg' alt="Icone de PDF" />Gabarito - lista de triângulos</Link>
                     </tr>
                     <tr>
                        <Link className={styles.pdfs} href=''> <img className={styles.iconAdobe} src='iconAdobe.svg' alt="Icone de PDF" />Cálculo de áreas</Link>
                     </tr>
                     <tr>
                        <Link className={styles.pdfs} href=''> <img className={styles.iconAdobe} src='iconAdobe.svg' alt="Icone de PDF" />Lista 2 - áreas</Link>
                     </tr  >
                   </tbody>
                 </table>
        </div>
       </>
    )
}

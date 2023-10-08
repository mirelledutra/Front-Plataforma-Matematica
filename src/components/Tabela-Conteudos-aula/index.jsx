   import Link from 'next/link';
   import styles from './styles.module.css';
   import BarraRolagemTabela from '../BarraRolagemTabela';

   export default function Conteudos() {
   return (
      <>
         <div className={styles.tabela}>

         <h1 className={styles.h1}>Conteúdo do Curso</h1>
         <div>
            <table className={styles.table}>
               <thead>
               <tr> 
               </tr>
               </thead>
               <tbody >

               <tr className={styles.pdfs}>
                  <td className={styles.pdfIcon}>
                     <img src='iconAdobe.svg' alt="Icone de PDF" /> 
                  </td>

                  <td>
                  <Link href=''>Aula Demonstrativa em sala de aula</Link>
                  </td>
                  
               </tr>

               <tr  className={styles.pdfs}> 
                  <td className={styles.pdfIcon}>
                     <img src='iconAdobe.svg' alt="Icone de PDF" /> 
                  </td>

                  <td>
                  <Link href=''>Aula Explicativa</Link>
                  </td>
                  
               </tr>

               <tr className={styles.pdfs}>
                  <td className={styles.pdfIcon}>
                     <img src='iconAdobe.svg' alt="Icone de PDF" /> 
                  </td>

                  <td>
                  <Link href=''>Lista de Exercícios</Link>
                  </td>

               </tr>

               <tr className={styles.pdfs}>
                  <td className={styles.pdfIcon}>
                     <img src='iconAdobe.svg' alt="Icone de PDF" /> 
                  </td>

                  <td>
                  <Link href=''>Exercícios propostos</Link>
                  </td>

               </tr>

               <tr className={styles.pdfs}>
                  <td className={styles.pdfIcon}>
                     <img src='iconAdobe.svg' alt="Icone de PDF" /> 
                  </td>

                  <td>
                  <Link href=''>Gabarito - lista de triângulos</Link>
                  </td>
               </tr>

               <tr className={styles.pdfs}>
                  <td className={styles.pdfIcon}>
                     <img src='iconAdobe.svg' alt="Icone de PDF" /> 
                  </td>

                  <td>
                  <Link href=''>Cálculo de áreas</Link>
                  </td>
               </tr>
               

               <tr className={styles.pdfs}>
                  <td className={styles.pdfIcon}>
                     <img src='iconAdobe.svg' alt="Icone de PDF" /> 
                  </td>

                  <td>
                  <Link href=''>Lista 2 - áreas</Link>
                  </td>
               </tr>
               
               </tbody>
            </table>
         </div>
         <div className='.barrarolagem'>
            <BarraRolagemTabela />
         </div>
         </div>
      </>
   )
   }

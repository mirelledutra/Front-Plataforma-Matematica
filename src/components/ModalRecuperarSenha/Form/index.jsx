import styles from './styles.module.css';
import {Poppins} from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight:'500',
});

export default function Form({ children }) {
  return (
    <div className={styles.forme}>
 
      <div className={styles.container}>
         <div>
            <h1 className={styles.h1}>Recuperar Senha</h1>
            <h2 className={styles.h2}>Será enviado um e-mail para alteração da senha</h2>
        </div>  
        {children}

      </div>
      
    </div>
  );
}

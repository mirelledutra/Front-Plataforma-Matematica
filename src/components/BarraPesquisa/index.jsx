//criado por Mirelle Dutra
import styles from "../BarraPesquisa/styles.module.css";
import { useState } from "react";

export default function BarraPesquisa(){
  const[keyword, setKeyword] = useState('');

  const handleSearch = ()=>{
    console.log('Pesquisar por:', keyword);
  };

    return (
      <div className={styles.barrapesquisa}>
        <div className={styles.inputContainer}onClick={handleSearch}>
          <div>
            <input className={styles.input}
            placeholder="Pesquisar"
            type="text"
            id="buscar"
            style={{
              backgroundImage: 'url("/lupaImg.png")',
                      
            }}    
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            required
            />
          </div>
         
            
            

             
        </div>
      </div>


  
      

    );
  };

  

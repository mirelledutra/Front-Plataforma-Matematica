//criado por Mirelle Dutra
import React, {useEffect, useState} from "react";
import styles from "./styles.module.css";

const BarraRolagem = () => {
  
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (window.scrollY / scrollHeight) * 100;
      setScrollPercentage(percentage);

  };
  
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return ()=>{
      window, removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className={styles.barrarolagem}style={{height: `${scrollPercentage}%` }}/>;
   
};

export default BarraRolagem;

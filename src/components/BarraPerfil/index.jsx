import styles from "./styles.module.css"
import Link from "next/link"

export default function BarraPerfil(){
  return(
<div className={styles.container}>


    <Link href = "/perfil">
    <img className={styles.perfilIcon} alt="" src="/fotoPerfil.png" />
    </Link>
    <div className={styles.barraperfil}/>
    <div className={styles.barra}/>

</div>
   

  )

}
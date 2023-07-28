import styles from '../styles/componentes/card.module.css'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
function Card({nome,descricao,imagem}) {
  return (
    <div className={styles.cardContainer} >
        <div className={styles.avatarContainer}>
            <img src={imagem} alt=""  />
        </div>
        <div className={styles.textContainer}>
            <h3>{nome}</h3>
            <BiSolidQuoteAltLeft/>
            <p>{descricao}</p>
            <BiSolidQuoteAltRight/>
        </div>
    </div>
   
  )
}

export default Card
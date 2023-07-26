import styles from '../styles/componentes/header.module.css'
import logo from '../assets/logo.png'
import estudantes from '../assets/estudantess.png'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <img className={styles.logo} src={logo} alt="logo do Pru(programa rumo á universidade)" />
      <nav className={styles.menuContainer}>
        <li><Link className={styles.menuLink} to="/">Home</Link></li>
        <li><Link className={styles.menuLink}  to="/historia">História</Link></li>
        <li><Link className={styles.menuLink}  to="/informacoes">Informações</Link></li>
        <li><Link className={styles.menuLink}  to="relatos">Relatos</Link></li>
      </nav>
      <img className={styles.imgContainer} src={estudantes} alt="imagem de estudantes" />
    </header>



  )
}

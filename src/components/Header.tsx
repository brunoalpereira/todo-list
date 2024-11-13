import styles from './Header.module.css'

import todoLogo from '../assets/rocket.svg'

function Header(){
    return <header className={styles.header}>
        <img src={todoLogo} alt='todo Logotipo'>
        </img>
        <p className={styles.p}>
            todo
        </p>
    </header>
} export default Header
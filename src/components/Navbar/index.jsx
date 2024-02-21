import styles from './index.module.css'

const Navbar = () => {
    return ( 
        <nav>
            <div className={styles.menu_container}>
                <div className={styles.main_menu_container}>
                    <ul>
                        <li>
                            <a href="#">Início</a>
                        </li>
                        <li>
                            <a href="#">Buscar</a>
                        </li>
                        <li>
                            <a href="#">Minha biblioteca</a>
                        </li>
                        <li>
                            <a href="#">Curtidas</a>
                        </li>
                        <li>
                            <a href="#">Mais tocadas</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.playlist_container}>
                    <ul>
                        <li>
                            <a href="#">Crie sua playlist</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.settings_container}>
                    <ul>
                        <li>
                            <a href="#">Configurações</a>
                        </li>
                        <li>
                            <a href="#">Português</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;
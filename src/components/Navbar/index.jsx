import styles from './index.module.css'
import logo from '../../assets/logo/logo-desktop.png'
import { useState, useEffect } from 'react';
import { FaUserCircle, FaHome, FaHeart, FaSearch, FaBookOpen, FaPlay, FaPause, FaCog} from 'react-icons/fa'

const Navbar = () => {

    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    return ( 
        <>
            {(windowSize > 768) ? (
                <nav className={styles.nav_desktop}>
                <div className={styles.menu_container}>
                    
                    <div className={styles.main_menu_container}>
                        <div>
                        <img src={logo} alt="logo" className={styles.logo} />
                        </div>
                   
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
            ) : (
                    <nav className={styles.nav_mobile}>
                        <div className={styles.nav_container_mobile}>
                            <FaHome className={ styles.nav_icons} />
                            <FaSearch className={ styles.nav_icons} />
                            <FaHeart className={ styles.nav_icons} />
                            <FaBookOpen className={ styles.nav_icons} />
                            <FaUserCircle className={ styles.nav_icons} />
                        </div>
                </nav>    
            )}
            </>
     );
}
 
export default Navbar;
import style from './index.module.css';
import banner from '../../assets/banner/banner.gif';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Header = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    
    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[])
    return ( 
        <header>
            <div className={style.banner_container}>
                <img src={banner} alt="banner" />
                <div className={style.blur}></div>
            </div>
            <div className={style.header_search}>
                <div className={style.container_nav}>
                    <div className={style.search_container}>
                        <input type="text" className={style.search} />
                        <FaSearch className={style.search_icon} />
                    </div>
                    {
                        (windowSize > 768) && (
                            <FaUserCircle className={style.avatar} />
                        )
                    }
                </div>
            </div>
            
        </header>
     );
}
 
export default Header;
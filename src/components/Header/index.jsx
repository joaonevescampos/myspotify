import style from './index.module.css';
import banner from '../../assets/banner/banner.gif';
import logoMobile from '../../assets/logo/logo-mobile.png';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Header = () => {
    return ( 
        <header>
            <div className={style.header_search}>
                <img src={logoMobile} alt="logo" width={40} className={style.logo_mobile} />
                <div className={style.container_nav}>
                    <div className={style.search_container}>
                        <input type="text" className={style.search} />
                        <FaSearch className={style.search_icon} />
                    </div>
                    <FaUserCircle className={style.avatar_mobile} />
                    <FaUserCircle className={style.avatar_desktop} />
                </div>
            </div>
            <div className={style.banner_container}>
                <img src={banner} alt="banner" />
                <div className={style.blur}></div>
            </div>
            
        </header>
     );
}
 
export default Header;
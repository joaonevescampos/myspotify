import style from './index.module.css';
import banner from '../../assets/banner/banner.gif'

const Header = () => {
    return ( 
        <header>
            <div className={style.banner_container}>
                <img src={banner} alt="banner" />
                <div className={style.blur}></div>
            </div>
            <div className={style.container_nav}>
                <input type="text" className={style.search} />
                <div className={style.avatar} ></div>
            </div>
            
        </header>
     );
}
 
export default Header;
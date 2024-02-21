import style from './index.module.css'

const Header = () => {
    return ( 
        <header>
            <div className={style.container_nav}>
                <input type="text" className={style.search} />
                
                <div className={style.avatar} ></div>
               
            </div>
        </header>
     );
}
 
export default Header;
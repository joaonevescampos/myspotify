import style from './index.module.css'

const Navbar = () => {
    return ( 
        <nav>
            <div className={style.container_nav}>
                <input type="text" className={style.search} />
                
                <div className={style.avatar} ></div>
               

            </div>
        </nav>
     );
}
 
export default Navbar;
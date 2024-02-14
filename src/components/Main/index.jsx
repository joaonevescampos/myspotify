import style from './index.module.css'
import album1 from '../../assets/cards/1.jpeg'
import album2 from '../../assets/cards/2.png'
import album3 from '../../assets/cards/3.jpeg'
import album4 from '../../assets/cards/4.jpeg'
import card1 from '../../assets/cards/5.jpeg'
import card2 from '../../assets/cards/6.jpeg'
import card3 from '../../assets/cards/7.jpeg'
import card4 from '../../assets/cards/8.jpeg'

const Main = () => {
    return ( 
        <main>
            <div className={style.main_container}>
                <h1>Álbuns</h1>
                <div className={style.albuns} >
                    <img src={album1} alt='album1' />
                    <img src={album2} alt='album2' />
                    <img src={album3} alt='album3' />
                    <img src={album4} alt='album4' />
                </div>
                <h1>Categorias</h1>
                <div className={style.albuns} >
                    <div className={style.card} >Funk</div>
                    <div className={style.card} >Funk</div>
                    <div className={style.card} >Funk</div>
                    <div className={style.card} >Funk</div>
                </div>
                
                <h1>Recomendado</h1>
                <div className={style.albuns} >
                    <img src={card1} alt='card1' />
                    <img src={card2} alt='card2' />
                    <img src={card3} alt='card3' />
                    <img src={card4} alt='card4' />
                </div>
            </div>
        </main>
     );
}
 
export default Main;
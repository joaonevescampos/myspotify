import style from './index.module.css'
import { FaPlay, FaPause } from 'react-icons/fa'
import album1 from '../../assets/cards/1.jpeg'
import album2 from '../../assets/cards/2.png'
import album3 from '../../assets/cards/3.jpeg'
import album4 from '../../assets/cards/4.jpeg'
import card1 from '../../assets/cards/5.jpeg'
import card2 from '../../assets/cards/6.jpeg'
import card3 from '../../assets/cards/7.jpeg'
import card4 from '../../assets/cards/8.jpeg'
import card5 from '../../assets/cards/9.jpeg'
import card6 from '../../assets/cards/10.jpeg'
import card7 from '../../assets/cards/11.jpeg'
import card8 from '../../assets/cards/12.jpeg'
import cover1 from '../../assets/cards/10.jpeg'
import cover2 from '../../assets/cards/16.png'
import cover3 from '../../assets/cards/18.jpg'
import singer1 from '../../assets/cards/m1.jpg'
import singer2 from '../../assets/cards/m2.jpg'
import singer3 from '../../assets/cards/m3.jpg'
import singer4 from '../../assets/cards/m4.jpg'
import singer5 from '../../assets/cards/m5.jpg'
import singer6 from '../../assets/cards/m6.jpg'
import singer7 from '../../assets/cards/m7.jpg'
import singer8 from '../../assets/cards/m8.jpg'
import singer9 from '../../assets/cards/m9.jpg'
import singer10 from '../../assets/cards/m10.jpg'
import singer11 from '../../assets/cards/m11.jpg'

const Main = () => {
    return ( 
        <main>
            <div className={style.main_container}>
            <h1>Categorias</h1>
                <div className={style.cards} >
                    <div className={style.card} id={style.funk} >Funk</div>
                    <div className={style.card} id={style.sertanejo} >Sertanejo</div>
                    <div className={style.card} id={style.mpb}>MPB</div>
                    <div className={style.card} id={style.pop}>POP</div>
                </div>
                
                <h1>Álbuns</h1>
                <div className={style.albuns} >
                    <img src={album1} alt='album1' />
                    <img src={album2} alt='album2' />
                    <img src={album3} alt='album3' />
                    <img src={album4} alt='album4' />
                </div>
                
                
                <h1>Recomendado</h1>
                <div className={style.covers} >
                    <img src={card1} alt='card1' />
                    <img src={card2} alt='card2' />
                    <img src={card3} alt='card3' />
                    <img src={card4} alt='card4' />
                </div>

                <h1>Favoritos</h1>
                <div className={style.covers} >
                    <img src={card5} alt='card5' />
                    <img src={card6} alt='card6' />
                    <img src={card7} alt='card7' />
                    <img src={card8} alt='card8' />
                </div>

                <h1>Mais tocadas 2024</h1>

                {/* <div className={style.banner_song_container}>
                    <h1 className={style.banner_title}>MAIS TOCADAS</h1>
                </div> */}

                <h1>Artistas</h1>
                <div className={style.singers_container}>
                    <div className={style.singers}>
                        <div>
                            <img src={singer1} alt="cantor 1" height={300} />
                        </div>
                        <div>
                            <img src={singer2} alt="cantor" height={300} />
                        </div>
                        <div>
                            <img src={singer3} alt="cantor" height={300} />
                        </div>
                        <div>
                            <img src={singer7} alt="cantor" height={300} />
                        </div>
                        <div>
                            <img src={singer8} alt="cantor" height={300} />
                        </div>
                        <div>
                            <img src={singer9} alt="cantor" height={300} />
                        </div>
                        <div>
                            <img src={singer10} alt="cantor" height={300} />
                        </div>
                        <div>
                            <img src={singer11} alt="cantor" height={300} />
                        </div>
                    </div>
                </div>

                <h1>Minhas músicas recentes</h1>

                <div className={style.songs_container}>
                    <div className={style.song}>
                        <img src={cover1} className={style.cover_play} alt="cover 1" />
                        <div className={style.title_container}>
                            <h2>Sozinho - Caetano Velozo</h2>
                            <div className={style.line}></div>
                            <div className={style.time}>2:45</div>
                        </div>
                        <div className={style.play_container}>
                            <FaPlay className={style.play} />
                        </div>
                    </div>
                    <div className={style.song}>
                        <img src={cover2} className={style.cover_play} alt="cover 2" />
                        <div div className={style.title_container}>
                            <h2>Annita - Envolver</h2>
                            <div className={style.line}></div>
                            <div className={style.time}>2:45</div>
                        </div>
                        <div className={style.play_container}>
                            <FaPlay className={style.play} />
                        </div>
                    </div>
                    <div className={style.song}>
                        <img src={cover3} className={style.cover_play} alt="cover 3" />
                        <div div className={style.title_container}>
                            <h2>Falamansa - Xote da Alegria</h2>
                            <div className={style.line}></div>
                            <div className={style.time}>2:45</div>
                        </div>
                        <div className={style.play_container}>
                            <FaPlay className={style.play} />
                        </div>
                    </div>
                    <div className={style.song}>
                        <img src={cover1} className={style.cover_play} alt="cover 1" />
                        <div className={style.title_container}>
                            <h2>Sozinho - Caetano Velozo</h2>
                            <div className={style.line}></div>
                            <div className={style.time}>2:45</div>
                        </div>
                        <div className={style.play_container}>
                            <FaPlay className={style.play} />
                        </div>
                    </div>
                    <div className={style.song}>
                        <img src={cover2} className={style.cover_play} alt="cover 2" />
                        <div div className={style.title_container}>
                            <h2>Annita - Envolver</h2>
                            <div className={style.line}></div>
                            <div className={style.time}>2:45</div>
                        </div>
                        <div className={style.play_container}>
                            <FaPlay className={style.play} />
                        </div>
                    </div>
                    <div className={style.song}>
                        <img src={cover3} className={style.cover_play} alt="cover 3" />
                        <div div className={style.title_container}>
                            <h2>Falamansa - Xote da Alegria</h2>
                            <div className={style.line}></div>
                            <div className={style.time}>2:45</div>
                        </div>
                        <div className={style.play_container}>
                            <FaPlay className={style.play} />
                        </div>
                    </div>
                </div>
            </div> 
        </main>
     );
}
 
export default Main;
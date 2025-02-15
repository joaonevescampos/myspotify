import React from "react";
import { Link } from "react-router-dom";
import "../css/components/artist.css";
import { IoMdPlayCircle } from "react-icons/io";
import { FaRandom } from "react-icons/fa";

const Artist = () => {
  return (
    <div className="artist-container">
      <picture>
        <img
          src="https://www.hashtagtreinamentos.com/wp-content/uploads/2025/02/oruam.png"
          alt=""
        />
        <h1>Henrique & Juliano</h1>
      </picture>
      <ul className="song-list">
        <Link to="/" className="random-play-container">
          <span>Tocar uma música aleatória</span>
          <FaRandom />
        </Link>
        <li>
          <div className="song-infos">
            <img
              src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
              alt=""
            />
            <div>
              <h2>Última Saudade - Ao Vivo</h2>
              <h3>Henrique & Juliano</h3>
            </div>
          </div>
          <div className="song-play">
            <span>2:30</span>
            <Link to="/">
              <IoMdPlayCircle className="play-song-icon" />
            </Link>
          </div>
        </li>
        <li>
          <div className="song-infos">
            <img
              src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
              alt=""
            />
            <div>
              <h2>Última Saudade - Ao Vivo</h2>
              <h3>Henrique & Juliano</h3>
            </div>
          </div>
          <div className="song-play">
            <span>2:30</span>
            <Link to="/">
              <IoMdPlayCircle className="play-song-icon" />
            </Link>
          </div>
        </li>
        <li>
          <div className="song-infos">
            <img
              src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
              alt=""
            />
            <div>
              <h2>Última Saudade - Ao Vivo</h2>
              <h3>Henrique & Juliano</h3>
            </div>
          </div>
          <div className="song-play">
            <span>2:30</span>
            <Link to="/">
              <IoMdPlayCircle className="play-song-icon" />
            </Link>
          </div>
        </li>
        <li>
          <div className="song-infos">
            <img
              src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
              alt=""
            />
            <div>
              <h2>Última Saudade - Ao Vivo</h2>
              <h3>Henrique & Juliano</h3>
            </div>
          </div>
          <div className="song-play">
            <span>2:30</span>
            <Link to="/">
              <IoMdPlayCircle className="play-song-icon" />
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Artist;

import React from 'react'
import { IoMdPlayCircle } from "react-icons/io";
import "../css/components/artist.css";
import { Link } from 'react-router-dom';

const SongItem = ({song}) => {
  return (
    <li>
      <div className="song-infos">
        <img src={song.image} alt={`${song.name}`} />
        <div>
          <h2>{song.name}</h2>
          <h3>{song.artist}</h3>
        </div>
      </div>
      <div className="song-play">
        <span>{song.duration}</span>
        <Link to={`/song/${song.id}`}>
          <IoMdPlayCircle className="play-song-icon" />
        </Link>
      </div>
    </li>
  );
}

export default SongItem
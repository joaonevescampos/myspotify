import React from "react";
import SongItem from "./SongItem";
import { Link } from "react-router-dom";
import { FaRandom } from "react-icons/fa";

const SongsList = ({artistSongs}) => {
  const randomIndex = Math.floor(Math.random() * (artistSongs.length - 1));
  const randomSong = artistSongs[randomIndex];
  return (
    <>
      <Link to={`/song/${randomSong.id}`} className="random-play-container">
        <span>Tocar uma música aleatória</span>
        <FaRandom />
      </Link>
      <ul className="song-list">
        {artistSongs.map((song) => (
          <SongItem song={song} />
        ))}
      </ul>
    </>
  );
};

export default SongsList;

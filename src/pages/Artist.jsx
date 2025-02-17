import React from "react";
import { useParams } from "react-router-dom";
import "../css/components/artist.css";
import { artistArray } from "../assets/database/artist";
import { songsArray } from "../assets/database/songs";
import SongsList from "../components/SongsList";

const Artist = () => {
  const { id } = useParams();
  const artist = artistArray.filter((artist) => artist.id == id)[0];
  const songsOfArtist = songsArray.filter(
    (songs) => songs.artist === artist.name
  );
  return (
    <div className="artist-container">
      <picture>
        <img src={artist.banner} alt={`${artist.name}`} />
        <h1>{artist.name}</h1>
      </picture>
      <SongsList artistSongs={songsOfArtist} />
    </div>
  );
};

export default Artist;

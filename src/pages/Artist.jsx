import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/components/artist.css";
import SongsList from "../components/SongsList";
import { fetchSongsAndArtists } from "../api/api.js"; 
import Loading from "../components/Loading.jsx";

const Artist = () => {
  const [songsArray, setSongsArray] = useState([]);
  const [artistArray, setArtistArray] = useState([]);

  useEffect(() => {
    async function loadData() {
      const { songsArray, artistArray } = await fetchSongsAndArtists();
      setSongsArray(songsArray);
      setArtistArray(artistArray);
    }
    loadData();
  }, []);

  const { id } = useParams();
  const artist = artistArray.filter((artist) => artist.id == id)[0];
  const songsOfArtist = songsArray.filter(
    (songs) => songs.artist === artist.name
  );
  return (
    <>
      {artistArray.length > 0 ? (
        <div className="artist-container">
          <picture>
            <img src={artist.banner} alt={`${artist.name}`} />
            <h1>{artist.name}</h1>
          </picture>
          <SongsList artistSongs={songsOfArtist} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Artist;


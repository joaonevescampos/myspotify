import React from "react";
import "../css/components/main.css";
import ItemsList from "../components/ItemsList";
import { useState, useEffect } from "react";
import { fetchSongsAndArtists } from "../api/api.js"; // A função que busca os dados
import Loading from "./Loading.jsx";

const Main = () => {
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

  return (
    <>
      {songsArray.length > 0 && artistArray.length > 0 ? (
        <main>
          <ItemsList
            title="Top 20 artistas "
            maxItems={20}
            array={artistArray}
            pathSingle="artist"
            pathMultiple="artists"
          />
          <ItemsList
            title="Top 20 Músicas"
            maxItems={20}
            array={songsArray}
            pathSingle="song"
            pathMultiple="songs"
            isSong={true}
          />
          <ItemsList
            title="Músicas Favoritas"
            maxItems={20}
            array={songsArray}
            favorite={true}
            pathSingle="song"
            pathMultiple="songs"
            isSong={true}
          />
        </main>
      ) : (
        <Loading/>
      )}
    </>
  );
};

export default Main;

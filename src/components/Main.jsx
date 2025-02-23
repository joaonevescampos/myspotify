import React from "react";
import "../css/components/main.css";
import ItemsList from "../components/ItemsList";
import { artistArray } from "../assets/database/artist.js";
import { songsArray } from "../assets/database/songs.js";

const Main = () => {
  return (
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
  );
};

export default Main;

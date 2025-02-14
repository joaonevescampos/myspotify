import React from "react";
import "../css/components/main.css";
import ItemsList from "../components/ItemsList";
import { artistArray } from "../assets/database/artist.js";
import { songsArray } from "../assets/database/songs.js";

const Main = () => {
  return (
    <main>
      <ItemsList
        title="Artistas"
        maxItems={20}
        array={artistArray}
        pathSingle="artist"
        pathMultiple="artists"
      />
      <ItemsList
        title="Músicas"
        maxItems={20}
        array={songsArray}
        pathSingle="song"
        pathMultiple="songs"
      />
    </main>
  );
};

export default Main;

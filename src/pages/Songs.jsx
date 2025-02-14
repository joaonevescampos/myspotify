import React from "react";
import ItemsListFull from "../components/ItemsListFull";
import { songsArray } from "../assets/database/songs";

const Songs = () => {
  return (
    <main>
      <ItemsListFull
        title="Todas as Músicas"
        maxItems={songsArray.length}
        array={songsArray}
        pathSingle="song"
        pathMultiple="songs"
      />
    </main>
  );
};

export default Songs;

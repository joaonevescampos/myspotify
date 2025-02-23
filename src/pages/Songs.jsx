import { useEffect, useState } from "react";
import ItemsListFull from "../components/ItemsListFull";
import { fetchSongsAndArtists } from "../api/api.js";

const Songs = () => {
  
  const [songsArray, setSongsArray] = useState([]);

  useEffect(() => {
    async function loadData() {
      const { songsArray } = await fetchSongsAndArtists();
      setSongsArray(songsArray);
    }
    loadData();
  }, []);

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

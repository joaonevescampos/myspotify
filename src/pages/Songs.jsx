import { useEffect, useState } from "react";
import ItemsListFull from "../components/ItemsListFull";
import { fetchSongsAndArtists } from "../api/api.js";
import Loading from "../components/Loading.jsx";

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
    <>
      {songsArray.length > 0 ? (
        <main>
          <ItemsListFull
            title="Todas as Músicas"
            maxItems={songsArray.length}
            array={songsArray}
            pathSingle="song"
            pathMultiple="songs"
          />
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Songs;
